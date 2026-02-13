import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

// Disable body parsing — Stripe needs the raw body for signature verification
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        console.error("Webhook signature verification failed:", err.message);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;
                const clerkUserId = session.metadata?.clerkUserId;
                if (clerkUserId && session.subscription) {
                    const subscription = await stripe.subscriptions.retrieve(
                        session.subscription as string
                    );
                    await updateClerkUserSubscription(clerkUserId, subscription);
                }
                break;
            }

            case "customer.subscription.created":
            case "customer.subscription.updated": {
                const subscription = event.data.object as Stripe.Subscription;
                const clerkUserId = subscription.metadata?.clerkUserId;
                if (clerkUserId) {
                    await updateClerkUserSubscription(clerkUserId, subscription);
                }
                break;
            }

            case "customer.subscription.deleted": {
                const subscription = event.data.object as Stripe.Subscription;
                const clerkUserId = subscription.metadata?.clerkUserId;
                if (clerkUserId) {
                    const clerk = await clerkClient();
                    await clerk.users.updateUserMetadata(clerkUserId, {
                        publicMetadata: {
                            stripeSubscriptionId: subscription.id,
                            stripeCustomerId: subscription.customer as string,
                            stripePlan: "canceled",
                            stripeStatus: "canceled",
                            stripePriceId: null,
                            stripeCurrentPeriodEnd: null,
                        },
                    });
                }
                break;
            }

            case "invoice.payment_succeeded": {
                const invoice = event.data.object as Stripe.Invoice;
                const subId = (invoice as any).subscription as string | null;
                if (subId) {
                    const subscription = await stripe.subscriptions.retrieve(subId);
                    const clerkUserId = subscription.metadata?.clerkUserId;
                    if (clerkUserId) {
                        await updateClerkUserSubscription(clerkUserId, subscription);
                    }
                }
                break;
            }

            case "invoice.payment_failed": {
                const failedInvoice = event.data.object as Stripe.Invoice;
                const failedSubId = (failedInvoice as any).subscription as string | null;
                if (failedSubId) {
                    const subscription = await stripe.subscriptions.retrieve(failedSubId);
                    const clerkUserId = subscription.metadata?.clerkUserId;
                    if (clerkUserId) {
                        const clerk = await clerkClient();
                        await clerk.users.updateUserMetadata(clerkUserId, {
                            publicMetadata: {
                                stripeStatus: "past_due",
                            },
                        });
                    }
                }
                break;
            }

            default:
                break;
        }
    } catch (error) {
        console.error("Webhook processing error:", error);
        return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
}

async function updateClerkUserSubscription(
    clerkUserId: string,
    subscription: Stripe.Subscription
) {
    const clerk = await clerkClient();
    const priceId = subscription.items.data[0]?.price?.id || null;
    const productId = subscription.items.data[0]?.price?.product as string || null;

    await clerk.users.updateUserMetadata(clerkUserId, {
        publicMetadata: {
            stripeSubscriptionId: subscription.id,
            stripeCustomerId: subscription.customer as string,
            stripePlan: "elite",
            stripeStatus: subscription.status,
            stripePriceId: priceId,
            stripeProductId: productId,
            stripeCurrentPeriodEnd: new Date(
                subscription.items.data[0]?.current_period_end
                    ? subscription.items.data[0].current_period_end * 1000
                    : (subscription as any).current_period_end * 1000
            ).toISOString(),
        },
    });
}
