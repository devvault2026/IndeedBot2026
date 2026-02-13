import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const EXTENSION_TOKEN_SECRET = new TextEncoder().encode(
    process.env.EXTENSION_TOKEN_SECRET
);

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
}

export async function POST() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401, headers: corsHeaders() }
            );
        }

        if (!process.env.EXTENSION_TOKEN_SECRET) {
            console.error("EXTENSION_TOKEN_SECRET is not set");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500, headers: corsHeaders() }
            );
        }

        const user = await currentUser();
        const metadata = user?.publicMetadata as any;

        // ─── OPTIONAL STRIPE DATA ───
        const stripeStatus = metadata?.stripeStatus || "free";
        const isSubscribed = ["active", "trialing"].includes(stripeStatus);
        const plan = metadata?.stripePlan || "free";

        // Generate a JWT valid for 30 days
        const token = await new SignJWT({
            sub: userId,
            email: user?.emailAddresses[0]?.emailAddress,
            name: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim(),
            picture: user?.imageUrl ?? null,
            // Include real subscription data
            plan: plan,
            plan_status: stripeStatus,
            plan_expires: metadata?.stripeCurrentPeriodEnd || null,
            stripe_customer_id: metadata?.stripeCustomerId || null,
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
                subscription: {
                    plan: plan,
                    status: stripeStatus,
                    expiresAt: metadata?.stripeCurrentPeriodEnd || null,
                },
            },
            { status: 200, headers: corsHeaders() }
        );
    } catch (error) {
        console.error("Extension token generation failed:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500, headers: corsHeaders() }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, { status: 200, headers: corsHeaders() });
}
