# IndeedBot 2026 — Extension ↔ Website Authentication Spec

> **Version:** 1.0  
> **Date:** February 12, 2026  
> **Author:** IndeedBot Core Team  
> **Website Repo:** `IndeedBot2026` (Next.js 16 + Clerk)  
> **Extension Repo:** *(your Chrome extension repo)*  
> **Production URL:** `https://www.indeedbot.xyz`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture Diagram](#2-architecture-diagram)
3. [Auth Flow — Step by Step](#3-auth-flow--step-by-step)
4. [What Already Exists on the Website](#4-what-already-exists-on-the-website)
5. [Extension-Side Implementation](#5-extension-side-implementation)
6. [Website-Side Changes Needed](#6-website-side-changes-needed)
7. [API Reference](#7-api-reference)
8. [Token Management & Security](#8-token-management--security)
9. [Subscription / Payment Gating](#9-subscription--payment-gating)
10. [Error Handling & Edge Cases](#10-error-handling--edge-cases)
11. [Testing Checklist](#11-testing-checklist)

---

## 1. Overview

**Goal:** When a user clicks the **"Initialize System"** button inside the Chrome extension popup, the website's sign-in/sign-up page opens in a new browser tab. Once the user successfully authenticates on the website, the extension detects the auth state and activates itself — unlocking all features.

**Auth Provider:** [Clerk](https://clerk.com) (`@clerk/nextjs ^6.37.3`)  
**Website Stack:** Next.js 16, React 19, TypeScript, Tailwind 4  
**Extension Stack:** Chrome Extension Manifest V3 (TypeScript)

### Key Principles

- The **website owns authentication**. The extension never handles passwords or OAuth flows directly.
- The extension communicates with the website via **REST API endpoints** with CORS headers.
- Session tokens are stored securely in `chrome.storage.local` after validation.
- The extension polls or listens for auth state changes to stay in sync.

---

## 2. Architecture Diagram

```
┌─────────────────────────────────────┐
│       CHROME EXTENSION (MV3)        │
│                                     │
│  ┌───────────┐                      │
│  │  Popup UI │                      │
│  │           │                      │
│  │ [Initialize System] ─────────────┼──── 1. Opens new tab ──►
│  │                      │           │                         │
│  └───────────┘          │           │                         │
│                         │           │                         │
│  ┌───────────────────┐  │           │                         │
│  │ Background Worker  │  │          │                         │
│  │ (service-worker.ts)│  │          │                         │
│  │                    │◄─┼──────────┼── 4. Receives token ◄───┤
│  │ - Token storage    │  │          │                         │
│  │ - API calls        │  │          │                         │
│  │ - Session check    │  │          │                         │
│  └───────────────────┘  │           │                         │
└─────────────────────────────────────┘                         │
                                                                │
                                                                ▼
┌───────────────────────────────────────────────────────────────────┐
│              WEBSITE — https://www.indeedbot.xyz                  │
│                                                                   │
│  ┌─────────────────┐    ┌──────────────────────────────┐          │
│  │  /sign-in       │    │  /api/auth/status             │         │
│  │  /sign-up       │    │  GET → { isAuthenticated,     │         │
│  │                 │    │         user, sessionToken }   │         │
│  │  Clerk handles  │    └──────────────────────────────┘          │
│  │  all auth UI    │                                              │
│  └────────┬────────┘    ┌──────────────────────────────┐          │
│           │             │  /api/auth/extension-token    │         │
│           │             │  POST → generates extension   │         │
│           │  2. User    │         session token          │         │
│           │  signs in   └──────────────────────────────┘          │
│           │                                                       │
│           ▼                                                       │
│  3. Redirect to /auth/success?source=extension                    │
│     → Page sends postMessage / token to extension                 │
└───────────────────────────────────────────────────────────────────┘
```

---

## 3. Auth Flow — Step by Step

### Happy Path: New User

| Step | Actor | Action |
|------|-------|--------|
| 1 | User | Clicks **"Initialize System"** button in extension popup |
| 2 | Extension | Calls `chrome.tabs.create({ url: "https://www.indeedbot.xyz/sign-up?source=extension" })` |
| 3 | Website | Renders the Sign Up page. The `?source=extension` query param is preserved |
| 4 | User | Completes registration via email/password or Google/Facebook SSO |
| 5 | Clerk | Authenticates the user and creates a session |
| 6 | Website | Detects `source=extension` and redirects to `/auth/extension-callback` |
| 7 | Website | The callback page calls `POST /api/auth/extension-token` to generate a signed token |
| 8 | Website | Sends the token back to the extension via **one of three methods** (see below) |
| 9 | Extension | Receives and stores the token in `chrome.storage.local` |
| 10 | Extension | Popup UI updates to "Activated" state. All features are unlocked |

### Happy Path: Returning User

| Step | Actor | Action |
|------|-------|--------|
| 1 | User | Opens extension popup |
| 2 | Extension | Checks `chrome.storage.local` for existing token |
| 3 | Extension | Calls `GET /api/auth/status` with `Authorization: Bearer <token>` |
| 4 | Website | Validates token, returns `{ isAuthenticated: true, user: {...} }` |
| 5 | Extension | User is already logged in — show activated UI |

---

## 4. What Already Exists on the Website

### Auth Pages
| Route | File | Description |
|-------|------|-------------|
| `/sign-in` | `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx` | Clerk SignIn component with custom styling |
| `/sign-up` | `src/app/(auth)/sign-up/[[...sign-up]]/page.tsx` | Clerk SignUp component with custom styling |

### API Routes
| Route | File | Description |
|-------|------|-------------|
| `GET /api/auth/status` | `src/app/api/auth/status/route.ts` | Returns auth state + user profile. **Already has CORS headers.** |

### Middleware
| File | Description |
|------|-------------|
| `src/middleware.ts` | Clerk middleware. Public routes: `/`, `/sign-in(.*)`, `/sign-up(.*)`, `/api/auth/status` |

### Clerk Config
- **Provider:** `@clerk/nextjs ^6.37.3` wrapping the entire app in `layout.tsx`
- **Env Keys:** `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` (in `.env.local`, not committed)
- **SSO Providers Enabled:** Google, Facebook, LinkedIn (configured in Clerk Dashboard)

---

## 5. Extension-Side Implementation

### 5.1 — "Initialize System" Button Handler

When the user clicks the button, open the website auth page with an `extension` source tag:

```typescript
// popup.ts or popup.tsx

const WEBSITE_URL = "https://www.indeedbot.xyz";

async function handleInitialize() {
  // Check if user is already authenticated
  const stored = await chrome.storage.local.get(["indeedbot_token", "indeedbot_user"]);
  
  if (stored.indeedbot_token) {
    // Validate the existing token
    const isValid = await validateToken(stored.indeedbot_token);
    if (isValid) {
      activateExtension(stored.indeedbot_user);
      return;
    }
    // Token expired — clear and re-auth
    await chrome.storage.local.remove(["indeedbot_token", "indeedbot_user"]);
  }

  // Open the website sign-in page with extension source tag
  chrome.tabs.create({
    url: `${WEBSITE_URL}/sign-in?source=extension&ext_id=${chrome.runtime.id}`,
    active: true,
  });
}
```

### 5.2 — Listening for the Auth Token (3 Methods)

Choose **one** of the following methods. We recommend **Method A** for simplicity.

---

#### Method A: `chrome.runtime.onMessageExternal` (Recommended)

The website sends a message directly to the extension using its ID.

**Extension side — `background.ts` (service worker):**

```typescript
// Listen for messages from the website
chrome.runtime.onMessageExternal.addListener(
  async (message, sender, sendResponse) => {
    // Only accept messages from our website
    if (sender.url && !sender.url.startsWith("https://www.indeedbot.xyz")) {
      return;
    }

    if (message.type === "INDEEDBOT_AUTH_SUCCESS") {
      const { token, user } = message.payload;

      // Store credentials securely
      await chrome.storage.local.set({
        indeedbot_token: token,
        indeedbot_user: user,
      });

      // Notify popup to update UI
      chrome.runtime.sendMessage({ type: "AUTH_STATE_CHANGED", user });

      sendResponse({ success: true });
    }
  }
);
```

**Extension `manifest.json` — must include:**

```json
{
  "externally_connectable": {
    "matches": [
      "https://www.indeedbot.xyz/*",
      "https://*.indeedbot.xyz/*"
    ]
  }
}
```

---

#### Method B: URL-Based Token Relay (Fallback)

If `externally_connectable` doesn't work in your setup, use a redirect URL scheme:

1. Website redirects to: `https://www.indeedbot.xyz/auth/extension-callback?token=<JWT>`
2. Extension has a **content script** injected on `indeedbot.xyz` pages that reads the token from the URL

```typescript
// content-script.ts — injected on indeedbot.xyz
if (window.location.pathname === "/auth/extension-callback") {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  
  if (token) {
    chrome.runtime.sendMessage({ type: "INDEEDBOT_AUTH_SUCCESS", payload: { token } });
    // Optionally close the tab
    window.close();
  }
}
```

---

#### Method C: Polling (Most Reliable Fallback)

Extension polls the `/api/auth/status` endpoint after opening the auth page:

```typescript
// After opening the auth tab, start polling
async function pollForAuth(maxAttempts = 60, intervalMs = 2000) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, intervalMs));

    try {
      const response = await fetch(`${WEBSITE_URL}/api/auth/status`, {
        credentials: "include",
      });
      const data = await response.json();

      if (data.isAuthenticated) {
        await chrome.storage.local.set({
          indeedbot_user: data.user,
        });
        return data.user;
      }
    } catch (err) {
      console.warn("Poll attempt failed:", err);
    }
  }
  throw new Error("Authentication timed out");
}
```

> ⚠️ **Note:** Polling with cookies requires the website to set `SameSite=None; Secure` on cookies and the extension to have `host_permissions` for `https://www.indeedbot.xyz/*`.

---

### 5.3 — Token Validation Helper

```typescript
const WEBSITE_URL = "https://www.indeedbot.xyz";

async function validateToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(`${WEBSITE_URL}/api/auth/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.isAuthenticated === true;
  } catch {
    return false;
  }
}
```

### 5.4 — Extension Manifest Requirements

```json
{
  "manifest_version": 3,
  "name": "IndeedBot2026",
  "permissions": [
    "storage",
    "tabs",
    "activeTab"
  ],
  "host_permissions": [
    "https://www.indeedbot.xyz/*",
    "https://*.indeedbot.xyz/*"
  ],
  "externally_connectable": {
    "matches": [
      "https://www.indeedbot.xyz/*",
      "https://*.indeedbot.xyz/*"
    ]
  },
  "background": {
    "service_worker": "background.js",
    "type": "module"
  }
}
```

### 5.5 — Extension UI State Machine

```typescript
type ExtensionState = 
  | "UNINITIALIZED"    // No token stored — show "Initialize System" button
  | "AUTHENTICATING"   // Auth tab opened, waiting for callback
  | "VALIDATING"       // Token found, verifying with server
  | "ACTIVATED"        // Valid session — all features unlocked
  | "EXPIRED"          // Token expired — prompt re-auth
  | "ERROR";           // Something went wrong

// On popup load:
async function getExtensionState(): Promise<ExtensionState> {
  const stored = await chrome.storage.local.get(["indeedbot_token"]);
  
  if (!stored.indeedbot_token) return "UNINITIALIZED";
  
  const isValid = await validateToken(stored.indeedbot_token);
  return isValid ? "ACTIVATED" : "EXPIRED";
}
```

---

## 6. Website-Side Changes Needed

These are the things that need to be built or modified on the website (`IndeedBot2026` repo).

### 6.1 — New API Route: `POST /api/auth/extension-token`

**File to create:** `src/app/api/auth/extension-token/route.ts`

This endpoint generates a signed JWT that the extension can store and use for future API calls.

```typescript
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { SignJWT } from "jose"; // npm install jose

const EXTENSION_TOKEN_SECRET = new TextEncoder().encode(
  process.env.EXTENSION_TOKEN_SECRET // Add to .env.local
);

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: corsHeaders() }
    );
  }

  const user = await currentUser();

  // Generate a JWT valid for 30 days
  const token = await new SignJWT({
    sub: userId,
    email: user?.emailAddresses[0]?.emailAddress,
    name: `${user?.firstName} ${user?.lastName}`,
    iat: Math.floor(Date.now() / 1000),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(EXTENSION_TOKEN_SECRET);

  return NextResponse.json(
    {
      token,
      user: {
        id: user?.id,
        email: user?.emailAddresses[0]?.emailAddress,
        firstName: user?.firstName,
        lastName: user?.lastName,
        imageUrl: user?.imageUrl,
      },
    },
    { status: 200, headers: corsHeaders() }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders() });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
```

### 6.2 — New Page: `/auth/extension-callback`

**File to create:** `src/app/auth/extension-callback/page.tsx`

This page is shown after successful auth when `source=extension`. It sends the token to the extension.

```tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ExtensionCallbackPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [status, setStatus] = useState<"sending" | "success" | "error">("sending");

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setStatus("error");
      return;
    }

    async function sendTokenToExtension() {
      try {
        // 1. Get extension token from our API
        const res = await fetch("/api/auth/extension-token", { method: "POST" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        // 2. Get the extension ID from the URL params
        const params = new URLSearchParams(window.location.search);
        const extId = params.get("ext_id");

        if (extId && chrome?.runtime?.sendMessage) {
          // Method A: Direct message to extension
          chrome.runtime.sendMessage(
            extId,
            {
              type: "INDEEDBOT_AUTH_SUCCESS",
              payload: { token: data.token, user: data.user },
            },
            (response) => {
              if (response?.success) {
                setStatus("success");
              }
            }
          );
        } else {
          // Fallback: Store token in a way the extension content script can read
          window.postMessage(
            { type: "INDEEDBOT_AUTH_SUCCESS", payload: { token: data.token, user: data.user } },
            "*"
          );
          setStatus("success");
        }
      } catch (err) {
        console.error("Failed to send token to extension:", err);
        setStatus("error");
      }
    }

    sendTokenToExtension();
  }, [isLoaded, isSignedIn, user]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center p-12 rounded-3xl border border-border bg-background max-w-md">
        {status === "sending" && (
          <>
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
              Connecting to Extension...
            </h1>
            <p className="text-neutral-500 mt-3 text-sm">
              Please wait while we activate your IndeedBot.
            </p>
          </>
        )}
        {status === "success" && (
          <>
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
              You're Connected!
            </h1>
            <p className="text-neutral-500 mt-3 text-sm">
              IndeedBot is now active. You can close this tab and return to the extension.
            </p>
          </>
        )}
        {status === "error" && (
          <>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✕</span>
            </div>
            <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
              Connection Failed
            </h1>
            <p className="text-neutral-500 mt-3 text-sm">
              Please try signing in again from the extension.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
```

### 6.3 — Modify Auth Pages to Handle `source=extension`

After successful Clerk auth, the user should be redirected to the callback page if they came from the extension.

**Update `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx`:**

Add the `afterSignInUrl` prop to `<SignIn>`:

```tsx
<SignIn
  forceRedirectUrl={
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("source") === "extension"
      ? `/auth/extension-callback?ext_id=${new URLSearchParams(window.location.search).get("ext_id") || ""}`
      : undefined
  }
  // ... rest of appearance props
/>
```

Do the same for **sign-up**:

```tsx
<SignUp
  forceRedirectUrl={
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("source") === "extension"
      ? `/auth/extension-callback?ext_id=${new URLSearchParams(window.location.search).get("ext_id") || ""}`
      : undefined
  }
  // ... rest of appearance props
/>
```

### 6.4 — Update Middleware

Add the new routes to the public routes list:

**File:** `src/middleware.ts`

```typescript
const isPublicRoute = createRouteMatcher([
  '/', 
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/auth/status',
  '/api/auth/extension-token',  // ← ADD THIS
  '/auth/extension-callback',   // ← ADD THIS
]);
```

### 6.5 — Environment Variables

Add to `.env.local` on the website:

```env
# Existing Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# NEW: Secret for signing extension tokens (generate a strong random string)
EXTENSION_TOKEN_SECRET=your-super-secret-random-string-at-least-32-chars

# NEW: Your Chrome extension ID (found in chrome://extensions when loaded)
NEXT_PUBLIC_EXTENSION_ID=your-chrome-extension-id-here
```

---

## 7. API Reference

### `GET /api/auth/status`

> **Status:** Already exists ✅

Returns the current user's authentication state.

**Headers:**
```
Authorization: Bearer <extension_token>  (optional, for token-based auth)
Cookie: __session=<clerk_session>        (optional, for cookie-based auth)
```

**Response (authenticated):**
```json
{
  "isAuthenticated": true,
  "user": {
    "id": "user_2abc123",
    "email": "user@example.com",
    "firstName": "Jaryd",
    "lastName": "Paquette",
    "imageUrl": "https://img.clerk.com/..."
  }
}
```

**Response (not authenticated):**
```json
{
  "isAuthenticated": false
}
```

---

### `POST /api/auth/extension-token`

> **Status:** Needs to be built 🔨

Generates a signed JWT for the extension to store locally.

**Requires:** Active Clerk session (cookie-based, from the browser).

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_2abc123",
    "email": "user@example.com",
    "firstName": "Jaryd",
    "lastName": "Paquette",
    "imageUrl": "https://img.clerk.com/..."
  }
}
```

---

### `GET /api/auth/validate-token` *(optional, future)*

> **Status:** Planned 📋

Validates an extension token and returns subscription status.

**Headers:**
```
Authorization: Bearer <extension_token>
```

**Response:**
```json
{
  "valid": true,
  "user": { ... },
  "subscription": {
    "plan": "elite",
    "status": "active",
    "expiresAt": "2026-03-12T00:00:00Z"
  }
}
```

---

## 8. Token Management & Security

### Token Lifecycle

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   GENERATE   │────>│    STORE     │────>│   VALIDATE   │
│              │     │              │     │              │
│ POST /api/   │     │ chrome.      │     │ GET /api/    │
│ auth/        │     │ storage.     │     │ auth/status  │
│ extension-   │     │ local        │     │              │
│ token        │     │              │     │ (on each     │
│              │     │ Key:         │     │  popup open) │
│ JWT, 30d exp │     │ indeedbot_   │     │              │
│              │     │ token        │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
                                                  │
                                          ┌───────┴──────┐
                                          │              │
                                       Valid?          Expired?
                                          │              │
                                    Show active     Clear token,
                                    extension UI    prompt re-auth
```

### Security Rules

| Rule | Implementation |
|------|---------------|
| Token signing | HS256 with `EXTENSION_TOKEN_SECRET` env var |
| Token expiry | 30 days. Extension checks on each popup open |
| Token storage | `chrome.storage.local` (encrypted by Chrome) |
| CORS | Only `https://www.indeedbot.xyz` and `https://*.indeedbot.xyz` |
| `externally_connectable` | Restrict to `https://www.indeedbot.xyz/*` |
| Never expose secret key | `EXTENSION_TOKEN_SECRET` is server-only, never in client code |
| Token refresh | When token is within 7 days of expiry, silently call `POST /api/auth/extension-token` |

---

## 9. Subscription / Payment Gating

The website uses a single-tier pricing model: **Elite Strategist** ($20/month or $13/month yearly).

### How to Gate Extension Features

1. The `POST /api/auth/extension-token` endpoint should include subscription data in the JWT claims
2. The extension checks the `subscription` field before enabling premium features
3. If not subscribed, show a "Subscribe" button that opens `https://www.indeedbot.xyz/pricing`

### JWT Claims for Subscription

```json
{
  "sub": "user_2abc123",
  "email": "user@example.com",
  "plan": "elite",            // "free" | "elite"
  "plan_status": "active",    // "active" | "cancelled" | "past_due"
  "plan_expires": 1741824000, // Unix timestamp
  "iat": 1739404800,
  "exp": 1741996800
}
```

---

## 10. Error Handling & Edge Cases

| Scenario | Extension Behavior | Website Behavior |
|----------|-------------------|-----------------|
| User closes auth tab before completing | Extension times out polling after 2 min, shows "Try again" | N/A |
| User has no internet | Show offline message, cache last known auth state | N/A |
| Token expired | Clear storage, show "Session expired — click to reconnect" | Return `401` from API |
| User signs out on website | Next API call returns `isAuthenticated: false`, extension resets | Clerk signs out normally |
| Multiple extensions installed | Each should have a unique local storage key | N/A |
| User signs in with different account | New token overwrites old one | N/A |
| Website is down | Extension shows "Service temporarily unavailable" | N/A |
| Extension not installed | Auth page works normally (no `source=extension` param) | Standard sign-in flow |
| CORS blocked | Extension falls back to `chrome.runtime.sendMessage` | Ensure CORS headers on all `/api/auth/*` routes |

---

## 11. Testing Checklist

### Extension Developer

- [ ] **Initialize button** opens `https://www.indeedbot.xyz/sign-in?source=extension&ext_id=<your_id>`
- [ ] **Sign In flow** completes and token is received in `chrome.storage.local`
- [ ] **Sign Up flow** completes and token is received in `chrome.storage.local`
- [ ] **Google SSO** works through the website and redirects back correctly
- [ ] **Token validation** works on popup open (`GET /api/auth/status`)
- [ ] **Expired token** triggers re-authentication prompt
- [ ] **Sign out** from extension clears `chrome.storage.local`
- [ ] **Offline mode** gracefully degrades (use cached user data)
- [ ] **externally_connectable** only accepts messages from `indeedbot.xyz`
- [ ] **manifest.json** has correct `host_permissions` and `externally_connectable`

### Website Developer

- [ ] `POST /api/auth/extension-token` generates valid JWT
- [ ] `/auth/extension-callback` page renders correctly
- [ ] `source=extension` query param is preserved through Clerk's auth flow
- [ ] `forceRedirectUrl` correctly routes to callback page after auth
- [ ] Middleware allows the new public routes
- [ ] CORS headers are present on all extension-facing API routes
- [ ] Token includes subscription/plan data in JWT claims
- [ ] `.env.local` has `EXTENSION_TOKEN_SECRET` set

---

## Quick Start Summary

### For the Extension Developer

1. Add `externally_connectable` and `host_permissions` to `manifest.json`
2. On "Initialize System" click → `chrome.tabs.create({ url: "https://www.indeedbot.xyz/sign-in?source=extension&ext_id=<ID>" })`
3. Listen for auth via `chrome.runtime.onMessageExternal`
4. Store token in `chrome.storage.local`
5. Validate on each popup open via `GET /api/auth/status`

### For the Website Developer

1. Create `POST /api/auth/extension-token` route (generates JWT)
2. Create `/auth/extension-callback` page (sends token to extension)
3. Add `forceRedirectUrl` to `<SignIn>` and `<SignUp>` when `source=extension`
4. Update middleware to allow new public routes
5. Add `EXTENSION_TOKEN_SECRET` to `.env.local`
6. Install `jose` package: `npm install jose`

---

*Document maintained by the IndeedBot Core Team. Last updated: February 12, 2026.*
