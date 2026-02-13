import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();
        const email = user?.emailAddresses[0]?.emailAddress;

        // Find customer by email
        let customerId: string | undefined;
        const stripeCustomerId = (user?.publicMetadata as any)?.stripeCustomerId;

        if (stripeCustomerId) {
            customerId = stripeCustomerId;
        } else if (email) {
            const customers = await stripe.customers.list({ email, limit: 1 });
            if (customers.data.length > 0) {
                customerId = customers.data[0].id;
            }
        }

        if (!customerId) {
            return NextResponse.json(
                { error: "No billing account found. Please subscribe first." },
                { status: 404 }
            );
        }

        const origin = request.headers.get("origin") || "http://localhost:3000";

        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${origin}/dashboard`,
        });

        return NextResponse.json({ url: portalSession.url });
    } catch (error: any) {
        console.error("Stripe portal error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create portal session" },
            { status: 500 }
        );
    }
}
