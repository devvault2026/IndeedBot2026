# STRIPE + EXTENSION + WEBSITE — UNIFIED INTEGRATION SPEC

> **Version:** 1.0  
> **Last Updated:** February 12, 2026  
> **Status:** Implementation Blueprint  
> **System:** IndeedBot 2026  

---

## TABLE OF CONTENTS

1. [Architecture Overview](#1-architecture-overview)
2. [Source of Truth — Clerk Public Metadata](#2-source-of-truth--clerk-public-metadata)
3. [Stripe Product & Price Configuration](#3-stripe-product--price-configuration)
4. [Payment Flow — Website Checkout](#4-payment-flow--website-checkout)
5. [Webhook Pipeline — Stripe → Clerk Sync](#5-webhook-pipeline--stripe--clerk-sync)
6. [Extension Paywall Gating](#6-extension-paywall-gating)
7. [Dashboard Billing Management](#7-dashboard-billing-management)
8. [Token Lifecycle & Refresh Protocol](#8-token-lifecycle--refresh-protocol)
9. [Edge Cases & Error States](#9-edge-cases--error-states)
10. [Environment Variables](#10-environment-variables)
11. [File Map — Every File Involved](#11-file-map--every-file-involved)
12. [End-to-End Flow Diagram](#12-end-to-end-flow-diagram)
13. [Implementation Checklist](#13-implementation-checklist)

---

## 1. ARCHITECTURE OVERVIEW

The system has **three actors** that must stay in sync:

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   STRIPE         │     │   WEBSITE        │     │   EXTENSION      │
│   (Payments)     │◄───►│   (Next.js)      │◄───►│   (Chrome)       │
│                  │     │                  │     │                  │
│  • Subscriptions │     │  • Clerk Auth    │     │  • JWT Token     │
│  • Webhooks      │     │  • Dashboard     │     │  • Feature Gate  │
│  • Billing Portal│     │  • API Routes    │     │  • Status Check  │
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  │
                           ┌──────┴──────┐
                           │ CLERK USER  │
                           │ publicMeta  │
                           │ (THE SINGLE │
                           │ SOURCE OF   │
                           │ TRUTH)      │
                           └─────────────┘
```

**Core Principle:** Clerk's `publicMetadata` on each user is the **single source of truth** for subscription status. Stripe webhooks write to it. The website reads from it. The extension JWT embeds it. Everything flows from this one place.

---

## 2. SOURCE OF TRUTH — CLERK PUBLIC METADATA

Every paying user's Clerk profile carries these fields in `publicMetadata`:

```typescript
interface ClerkSubscriptionMetadata {
  stripeCustomerId: string;        // "cus_XXXXXXXXX"
  stripeSubscriptionId: string;    // "sub_XXXXXXXXX"
  stripePlan: "elite" | "canceled" | "free";
  stripeStatus: "active" | "trialing" | "past_due" | "canceled" | "unpaid" | "inactive";
  stripePriceId: string | null;    // "price_XXXXXXXXX"
  stripeProductId: string | null;  // "prod_XXXXXXXXX"
  stripeCurrentPeriodEnd: string;  // ISO 8601 — "2026-03-12T00:00:00.000Z"
}
```

**Who writes this?** Only the Stripe webhook handler (`/api/stripe/webhook`).  
**Who reads this?** Everything else — the dashboard, the extension token generator, the auth status API.

---

## 3. STRIPE PRODUCT & PRICE CONFIGURATION

### 3.1 — Product

| Field       | Value                          |
|-------------|--------------------------------|
| Product Name | IndeedBot Elite Strategist    |
| Description | Complete AI job intelligence suite — unlimited access to all features |

### 3.2 — Prices

| Plan     | Price  | Stripe Price ID Env Var       | Interval |
|----------|--------|-------------------------------|----------|
| Monthly  | $20/mo | `STRIPE_PRICE_MONTHLY`        | month    |
| Yearly   | $156/yr| `STRIPE_PRICE_YEARLY`         | year     |

### 3.3 — Setup in Stripe Dashboard

1. Go to **Stripe Dashboard → Products → + Add Product**
2. Name: `IndeedBot Elite Strategist`
3. Add **two prices**: $20 monthly recurring, $156 yearly recurring
4. Copy both `price_XXXXX` IDs into your `.env.local`

### 3.4 — Existing Code Reference

**File:** `src/lib/stripe.ts`
```typescript
export const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY || "",
  yearly: process.env.STRIPE_PRICE_YEARLY || "",
};
```

---

## 4. PAYMENT FLOW — WEBSITE CHECKOUT

### 4.1 — User Journey

```
User lands on site
    → Clicks "Initialize Elite Access" (Pricing section)
    → OR → Navigates to /dashboard/billing → Clicks "Subscribe Now"
    
    → POST /api/stripe/checkout { billingCycle: "monthly" | "yearly" }
    → Server creates Stripe Checkout Session
    → User redirected to Stripe-hosted checkout page
    → User pays
    → Stripe fires webhook → checkout.session.completed
    → Webhook updates Clerk publicMetadata
    → User redirected to /dashboard?session_id=xxx&success=true
    → Dashboard reads fresh metadata → shows active subscription
```

### 4.2 — Checkout API

**File:** `src/app/api/stripe/checkout/route.ts`  
**Method:** `POST`  
**Auth:** Clerk session required (protected by middleware)  

**Request Body:**
```json
{ "billingCycle": "monthly" | "yearly" }
```

**Behavior:**
1. Authenticates user via Clerk
2. Finds or creates Stripe customer by email
3. Creates a Checkout Session with `clerkUserId` in metadata
4. Returns `{ url: "https://checkout.stripe.com/..." }`

**Critical Metadata on Session:**
```typescript
metadata: { clerkUserId: userId },
subscription_data: { metadata: { clerkUserId: userId } }
```

This ensures every webhook event can trace back to the Clerk user.

### 4.3 — Entry Points (UI)

| Location | Component | Action |
|----------|-----------|--------|
| Landing page pricing section | `src/components/Pricing.tsx` | Calls `/api/stripe/checkout` |
| Dashboard billing page (no sub) | `src/app/dashboard/billing/page.tsx` | Calls `/api/stripe/checkout` |

---

## 5. WEBHOOK PIPELINE — STRIPE → CLERK SYNC

### 5.1 — Endpoint

**File:** `src/app/api/stripe/webhook/route.ts`  
**Method:** `POST`  
**Auth:** Stripe signature verification (not Clerk — this is a public webhook)  
**Middleware:** Listed in public routes  

### 5.2 — Events Handled

| Stripe Event | Action |
|-------------|--------|
| `checkout.session.completed` | Retrieve subscription → write metadata to Clerk |
| `customer.subscription.created` | Write initial subscription metadata |
| `customer.subscription.updated` | Update plan/status/period metadata |
| `customer.subscription.deleted` | Set `stripePlan: "canceled"`, `stripeStatus: "canceled"` |
| `invoice.payment_succeeded` | Re-confirm subscription is active |
| `invoice.payment_failed` | Set `stripeStatus: "past_due"` |

### 5.3 — The Sync Function

```typescript
async function updateClerkUserSubscription(clerkUserId: string, subscription: Stripe.Subscription) {
  const clerk = await clerkClient();
  await clerk.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePlan: "elite",
      stripeStatus: subscription.status,      // "active", "trialing", "past_due", etc.
      stripePriceId: priceId,
      stripeProductId: productId,
      stripeCurrentPeriodEnd: new Date(periodEnd * 1000).toISOString(),
    },
  });
}
```

### 5.4 — Webhook Secret

```
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXX
```

**Setup:**
- **Local dev:** `stripe listen --forward-to localhost:3000/api/stripe/webhook`
- **Production:** Configure in Stripe Dashboard → Developers → Webhooks → Add endpoint → `https://yourdomain.com/api/stripe/webhook`

---

## 6. EXTENSION ACCESS & GATING

The extension is now accessible to all authenticated users. Premium features are unlocked for users with an active Stripe subscription, while free users have access to basic functionality.

### 6.1 — Gate Location: Extension Token Endpoint

**File:** `src/app/api/auth/extension-token/route.ts`  
**Method:** `POST`  
**Auth:** Clerk session required  

**The Logic:**
The token endpoint no longer returns a 403 for unsubscribed users. Instead, it issues a token with `plan: "free"` and `isActive: true` claims, allowing the extension to function in "Free Mode".


**If subscribed** → Generates a 30-day JWT with subscription claims embedded:
```typescript
const token = await new SignJWT({
  sub: userId,
  email: user?.emailAddresses[0]?.emailAddress,
  name: fullName,
  picture: imageUrl,
  plan: metadata?.stripePlan || "free",
  plan_status: stripeStatus || "free",
  plan_expires: metadata?.stripeCurrentPeriodEnd || null,
  stripe_customer_id: metadata?.stripeCustomerId || null,
}).setProtectedHeader({ alg: "HS256" })
  .setExpirationTime("30d")
  .sign(EXTENSION_TOKEN_SECRET);
```

### 6.2 — Extension-Side Payment Wall

The Chrome extension must implement the following logic:

```
Extension opens
    → Check chrome.storage.local for existing JWT
    → IF token exists:
        → Validate locally (check exp claim)
        → Call GET /api/auth/status with Bearer token
        → IF subscription.isActive === true → UNLOCK FEATURES
        → IF subscription.isActive === false → SHOW PAYWALL
    → IF no token:
        → SHOW "Sign In" button
        → Opens website /sign-in?source=extension&ext_id=EXTENSION_ID
        → After auth, /auth/extension-callback sends token back
        → Extension stores token → re-validates → UNLOCK or PAYWALL
```

### 6.3 — Extension Auth Status Check

**File:** `src/app/api/auth/status/route.ts`  
**Method:** `GET`  
**Auth:** Bearer JWT (extension) or Clerk cookie (browser)  

**Response:**
```json
{
  "isAuthenticated": true,
  "user": { "id": "...", "email": "...", "firstName": "...", "lastName": "...", "imageUrl": "..." },
  "subscription": {
    "plan": "elite",
    "status": "active",
    "expiresAt": "2026-03-12T00:00:00.000Z",
    "isActive": true
  }
}
```

### 6.4 — Extension UI States

| State | Condition | Extension UI |
|-------|-----------|-------------|
| **Signed out** | No token in storage | Show "Sign In to IndeedBot" with link to website |
| **Signed in, free user** | Token exists, `plan === "free"` | Basic functionality enabled. Show subtle "Upgrade to Elite" nudge. |
| **Signed in, elite subscriber** | Token exists, `plan === "elite"` | Full feature access — all tabs enabled. |
| **Subscription expired** | Token's `plan_expires` is in the past | Reverts to "Free Mode". Show "Subscription Expired — Renew" nudge. |
| **Past due** | `plan_status === "past_due"` | Show warning: "Payment failed — update your card" nudge. |

### 6.5 — Extension Feature Lockdown

When the user has a "free" plan, the extension should:

1. **Enable basic features** (e.g. basic job scouting)
2. **Lock premium features** (Strategist, Builder, Coach) with a "Locked - Upgrade to Elite" badge
3. **Show an upgrade nudge** in the UI linking to `/dashboard/billing`

---

## 7. DASHBOARD BILLING MANAGEMENT

### 7.1 — Billing Page

**File:** `src/app/dashboard/billing/page.tsx`

The billing page has **two states**:

**State A — Active Subscription:**
- Shows plan name: "Elite Strategist"
- Shows status badge: "Active" (green)
- Shows included features list
- Shows next billing date
- "Manage on Stripe" button → opens Stripe Customer Portal

**State B — No Subscription:**
- Shows warning: "No Active Subscription"
- Shows explanation: extension won't work
- Shows two plan cards: Monthly ($20) and Yearly ($156)
- "Subscribe Now" buttons → call `/api/stripe/checkout`

### 7.2 — Stripe Customer Portal

**File:** `src/app/api/stripe/portal/route.ts`  
**Method:** `POST`  
**Auth:** Clerk session required  

Allows users to:
- Update payment method
- View invoice history
- Cancel subscription
- Switch plans

**Note:** You must configure the Customer Portal in Stripe Dashboard → Settings → Billing → Customer Portal:
- Enable "Customers can update payment methods"
- Enable "Customers can view their invoices"
- Enable "Customers can cancel subscriptions"
- Set cancellation to "Cancel at end of period" (recommended)

### 7.3 — Subscription Status API

**File:** `src/app/api/stripe/subscription/route.ts`  
**Method:** `GET`  
**Auth:** Clerk session required  

Returns the current user's subscription data from Clerk's publicMetadata:
```json
{
  "subscription": {
    "plan": "elite",
    "status": "active",
    "subscriptionId": "sub_XXXXX",
    "customerId": "cus_XXXXX",
    "priceId": "price_XXXXX",
    "currentPeriodEnd": "2026-03-12T00:00:00.000Z",
    "isActive": true
  }
}
```

---

## 8. TOKEN LIFECYCLE & REFRESH PROTOCOL

### 8.1 — Token Lifespan

| Token Type | Lifespan | Storage |
|-----------|----------|---------|
| Extension JWT | 30 days | `chrome.storage.local` |
| Clerk Session | Clerk-managed | Browser cookies |

### 8.2 — When the Extension Token Becomes Stale

The JWT embeds subscription data at issuance time. If the user cancels or their payment fails, **the JWT still says "active" until it expires or is re-checked.**

**Solution — Periodic Status Checks:**

The extension should call `GET /api/auth/status` with the Bearer token:
- On every extension popup open
- Every 6 hours via a background `chrome.alarms` task
- Immediately after the user clicks "I just subscribed, refresh"

If the API returns `subscription.isActive === false`, the extension should:
1. Show the paywall UI
2. Disable all premium features
3. Optionally wipe the token and force re-auth

### 8.3 — Token Refresh After Subscription Change

When a user subscribes (or renews) on the website:
1. Stripe fires `checkout.session.completed` webhook
2. Webhook updates Clerk metadata
3. User returns to dashboard → sees "Active" status
4. User opens extension → extension calls `/api/auth/status` → sees `isActive: true`
5. **Optional:** Force a new token by having the extension call `/api/auth/extension-token` (requires Clerk session — user may need to re-auth from extension)

**Simpler approach:** The `/api/auth/status` real-time check is sufficient. The JWT doesn't need to be re-issued as long as `/api/auth/status` returns the live truth from Clerk metadata.

---

## 9. EDGE CASES & ERROR STATES

### 9.1 — User Subscribes But Extension Still Shows Paywall

**Cause:** Extension is relying on the stale JWT claims.  
**Fix:** Extension calls `/api/auth/status` on every open. The status API reads LIVE from Clerk metadata, not from the token.

### 9.2 — Payment Fails Mid-Subscription

**Cause:** Invoice payment failed → webhook sets `stripeStatus: "past_due"`.  
**Effect:** Next extension status check → `isActive: false` → paywall shown.  
**User Action:** Update payment method via Stripe portal → payment retries → subscription re-activates → webhook sets `stripeStatus: "active"`.

### 9.3 — User Cancels Subscription

**Cause:** Cancellation via Stripe portal.  
**Stripe behavior:** Subscription remains active until `current_period_end`, then fires `customer.subscription.deleted`.  
**Effect during grace period:** `stripeStatus` stays `"active"` until period end — user keeps access.  
**Effect after period end:** Webhook sets `stripeStatus: "canceled"` → extension locks.

### 9.4 — Webhook Delivery Fails

**Cause:** Server downtime, misconfigured endpoint.  
**Stripe behavior:** Retries for up to 3 days.  
**Mitigation:** Monitor webhook logs in Stripe Dashboard. Set up webhook failure alerts.

### 9.5 — User Has Multiple Devices / Extensions

**No issue.** The token is generated per-auth-session and stored per-device in `chrome.storage.local`. The `/api/auth/status` check works the same across all devices because it reads from the single Clerk user record.

### 9.6 — Extension Token Expires

**Cause:** 30-day JWTs expire naturally.  
**Effect:** `/api/auth/status` returns 401 "Invalid or expired token".  
**Extension action:** Clear stored token → show "Sign In" button → user re-authenticates → new token issued (if subscription still active).

---

## 10. ENVIRONMENT VARIABLES

Add all of these to your `.env.local`:

```env
# ─── CLERK ───
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_XXXXXXXX
CLERK_SECRET_KEY=sk_live_XXXXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# ─── STRIPE ───
STRIPE_SECRET_KEY=sk_live_XXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXX
STRIPE_PRICE_MONTHLY=price_XXXXXXXX
STRIPE_PRICE_YEARLY=price_XXXXXXXX

# ─── EXTENSION AUTH ───
EXTENSION_TOKEN_SECRET=your-256-bit-random-secret-string-here

# ─── OPTIONAL ───
NEXT_PUBLIC_EXTENSION_ID=your-chrome-extension-id
```

**Generate EXTENSION_TOKEN_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 11. FILE MAP — EVERY FILE INVOLVED

```
src/
├── lib/
│   └── stripe.ts                          # Stripe SDK init + PRICE_IDS
│
├── app/
│   ├── api/
│   │   ├── stripe/
│   │   │   ├── checkout/route.ts          # POST — Create Checkout Session
│   │   │   ├── webhook/route.ts           # POST — Handle Stripe events → update Clerk
│   │   │   ├── portal/route.ts            # POST — Create Customer Portal session
│   │   │   └── subscription/route.ts      # GET  — Read subscription from Clerk metadata
│   │   └── auth/
│   │       ├── extension-token/route.ts   # POST — Generate gated JWT for extension
│   │       └── status/route.ts            # GET  — Live auth + subscription check
│   │
│   ├── dashboard/
│   │   ├── layout.tsx                     # Dashboard shell (sidebar, header)
│   │   ├── page.tsx                       # Overview with connectivity status
│   │   ├── billing/page.tsx               # Subscription management UI
│   │   ├── account/page.tsx               # Clerk UserProfile wrapper
│   │   └── security/page.tsx              # API key + session management
│   │
│   ├── auth/
│   │   └── extension-callback/page.tsx    # Post-auth callback → sends token to extension
│   │
│   └── (auth)/
│       ├── sign-in/[[...sign-in]]/page.tsx
│       └── sign-up/[[...sign-up]]/page.tsx
│
├── components/
│   ├── Pricing.tsx                        # Landing page pricing section
│   ├── Navbar.tsx                         # Console link for signed-in users
│   └── ConditionalFooter.tsx              # Hides footer on dashboard
│
└── middleware.ts                           # Clerk route protection
```

---

## 12. END-TO-END FLOW DIAGRAM

### Flow A — New User Subscribes From Website

```
1.  User visits indeedbot.com → clicks "Initialize Elite Access"
2.  Pricing.tsx calls POST /api/stripe/checkout { billingCycle: "monthly" }
3.  Server creates Stripe Checkout Session with clerkUserId in metadata
4.  User redirected to checkout.stripe.com → enters card → pays
5.  Stripe fires checkout.session.completed webhook
6.  /api/stripe/webhook receives event
7.  Webhook calls updateClerkUserSubscription() → writes to Clerk publicMetadata:
    { stripePlan: "elite", stripeStatus: "active", stripeCurrentPeriodEnd: "..." }
8.  User redirected to /dashboard?success=true
9.  Dashboard billing page calls GET /api/stripe/subscription → shows "Active"
```

### Flow B — Subscribed User Activates Extension

```
1.  User installs Chrome extension
2.  Extension has no token → shows "Sign In to IndeedBot"
3.  User clicks button → opens indeedbot.com/sign-in?source=extension&ext_id=XXX
4.  User signs in via Clerk
5.  Redirected to /auth/extension-callback?ext_id=XXX
6.  Callback page calls POST /api/auth/extension-token
7.  Token endpoint reads Clerk metadata:
    → stripeStatus === "active" ✅
    → Generates JWT with { plan: "elite", plan_status: "active", plan_expires: "..." }
    → Returns { token, user, subscription }
8.  Callback page sends token to extension via chrome.runtime.sendMessage
9.  Extension stores token in chrome.storage.local
10. Extension calls GET /api/auth/status with Bearer token → confirms subscription.isActive
11. Extension unlocks all features → user is fully operational
```

### Flow C — Free User Access

```
1.  User installs extension → signs in
2.  /auth/extension-callback calls POST /api/auth/extension-token
3.  Token endpoint reads Clerk metadata:
    → stripeStatus is null/empty 
    → Issues JWT with { plan: "free", status: "free" }
4.  Extension opens → calls /api/auth/status
    → Returns subscription.isActive === true (for free access)
5.  Extension enables "Free Mode" features
6.  User clicks "Strategist" tab → Sees "Locked - Upgrade to Elite" screen
```

### Flow D — User Cancels Subscription

```
1.  User goes to /dashboard/billing → clicks "Manage on Stripe"
2.  POST /api/stripe/portal → redirected to Stripe Customer Portal
3.  User cancels subscription
4.  Stripe sets subscription to cancel at period end
5.  User still has access until period ends
6.  Period ends → Stripe fires customer.subscription.deleted
7.  Webhook sets stripeStatus: "canceled" in Clerk metadata
8.  Extension next status check → subscription.isActive === false → paywall
9.  Dashboard billing page → shows "No Active Subscription" with subscribe buttons
```

---

## 13. IMPLEMENTATION CHECKLIST

### Stripe Dashboard Setup
- [ ] Create product: "IndeedBot Elite Strategist"
- [ ] Create monthly price: $20/mo recurring
- [ ] Create yearly price: $156/yr recurring
- [ ] Copy price IDs to `.env.local`
- [ ] Configure Customer Portal settings
- [ ] Add webhook endpoint for production URL
- [ ] Select webhook events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded`, `invoice.payment_failed`

### Environment Variables
- [ ] Set `STRIPE_SECRET_KEY`
- [ ] Set `STRIPE_WEBHOOK_SECRET`
- [ ] Set `STRIPE_PRICE_MONTHLY`
- [ ] Set `STRIPE_PRICE_YEARLY`
- [ ] Set `EXTENSION_TOKEN_SECRET`

### Website (Already Implemented ✅)
- [x] `src/lib/stripe.ts` — Stripe SDK + price IDs
- [x] `POST /api/stripe/checkout` — Checkout session creation
- [x] `POST /api/stripe/webhook` — Stripe event → Clerk sync
- [x] `POST /api/stripe/portal` — Customer Portal sessions
- [x] `GET /api/stripe/subscription` — Read subscription status
- [x] `POST /api/auth/extension-token` — Extension JWT generation (with free fallback)
- [x] `GET /api/auth/status` — Live auth + status (with free access)
- [x] `/auth/extension-callback` — Token handoff to extension
- [x] `/dashboard/billing` — Subscription management UI
- [x] `Pricing.tsx` — Landing page checkout trigger
- [x] `middleware.ts` — Public routes for webhook + auth

### Chrome Extension (TODO)
- [ ] Implement paywall UI overlay (branded, matches website design)
- [ ] Add subscription check on popup open (`GET /api/auth/status`)
- [ ] Add `chrome.alarms` periodic check (every 6 hours)
- [ ] Handle 403 `requiresSubscription` response from `/api/auth/extension-token`
- [ ] Add "Refresh Subscription" button for users who just subscribed
- [ ] Add "Subscribe Now" button linking to `https://yourdomain.com/dashboard/billing`
- [ ] Handle token expiry → force re-auth
- [ ] Disable AI tabs when `subscription.isActive === false`
- [ ] Show subscription status in extension settings/profile area

### Testing
- [ ] Test full checkout flow (monthly + yearly)
- [ ] Test webhook processing locally with `stripe listen`
- [ ] Test extension blocks features without subscription
- [ ] Test extension unlocks after subscribing
- [ ] Test cancellation flow end-to-end
- [ ] Test payment failure → past_due state
- [ ] Test token expiry → re-auth flow
- [ ] Test multiple devices with same account

---

## APPENDIX: LOCAL DEVELOPMENT

### Run Stripe Webhook Listener

```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

This will output a `whsec_` secret — use it as your `STRIPE_WEBHOOK_SECRET` for local dev.

### Test a Checkout

Use Stripe test card: `4242 4242 4242 4242` with any future expiry and any CVC.

### Verify Clerk Metadata Updated

After a test checkout, check the Clerk Dashboard → Users → select user → Public Metadata tab. You should see the `stripe*` fields populated.

---

*This document is the single integration reference. All website API routes, extension gating logic, and dashboard management features are designed to work together as one unified payment system.*
