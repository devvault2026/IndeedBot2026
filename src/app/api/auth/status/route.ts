import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const EXTENSION_TOKEN_SECRET = new TextEncoder().encode(
    process.env.EXTENSION_TOKEN_SECRET
);

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
}

export async function GET(request: NextRequest) {
    // --- Method 1: Bearer token from extension ---
    const authHeader = request.headers.get("Authorization");

    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.slice(7);

        try {
            if (!process.env.EXTENSION_TOKEN_SECRET) {
                return NextResponse.json(
                    { isAuthenticated: false, error: "Server configuration error" },
                    { status: 500, headers: corsHeaders() }
                );
            }

            const { payload } = await jwtVerify(token, EXTENSION_TOKEN_SECRET);

            return NextResponse.json(
                {
                    isAuthenticated: true,
                    user: {
                        id: payload.sub,
                        email: payload.email as string,
                        firstName: (payload.name as string)?.split(" ")[0] ?? null,
                        lastName: (payload.name as string)?.split(" ").slice(1).join(" ") ?? null,
                        imageUrl: (payload.picture as string) ?? null,
                    },
                    subscription: {
                        plan: payload.plan ?? "free",
                        status: payload.plan_status ?? "active",
                        expiresAt: payload.plan_expires ?? null,
                    },
                },
                { status: 200, headers: corsHeaders() }
            );
        } catch {
            // Token is expired or invalid
            return NextResponse.json(
                { isAuthenticated: false, error: "Invalid or expired token" },
                { status: 401, headers: corsHeaders() }
            );
        }
    }

    // --- Method 2: Cookie-based Clerk session (browser) ---
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { isAuthenticated: false },
            { status: 200, headers: corsHeaders() }
        );
    }

    const user = await currentUser();

    return NextResponse.json(
        {
            isAuthenticated: true,
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

// Handle preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: corsHeaders(),
    });
}
