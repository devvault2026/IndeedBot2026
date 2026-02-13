import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_IDS } from "@/lib/stripe";

export async function POST(request: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();
        const { priceId, billingCycle } = await request.json();

        // Determine the price
        const selectedPriceId = priceId || PRICE_IDS[billingCycle as keyof typeof PRICE_IDS];
        if (!selectedPriceId) {
            return NextResponse.json({ error: "Invalid billing cycle" }, { status: 400 });
        }

        // Check if this Clerk user already has a Stripe customer ID
        const email = user?.emailAddresses[0]?.emailAddress;
        let customerId: string | undefined;

        // Search for existing customer by metadata
        const existingCustomers = await stripe.customers.list({
            email: email || undefined,
            limit: 1,
        });

        if (existingCustomers.data.length > 0) {
            customerId = existingCustomers.data[0].id;
        }

        const origin = request.headers.get("origin") || "http://localhost:3000";

        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            customer_email: customerId ? undefined : email || undefined,
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: selectedPriceId,
                    quantity: 1,
                },
            ],
            metadata: {
                clerkUserId: userId,
            },
            subscription_data: {
                metadata: {
                    clerkUserId: userId,
                },
            },
            success_url: `${origin}/dashboard?session_id={CHECKOUT_SESSION_ID}&success=true`,
            cancel_url: `${origin}/dashboard?canceled=true`,
            allow_promotion_codes: true,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe checkout error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create checkout session" },
            { status: 500 }
        );
    }
}
