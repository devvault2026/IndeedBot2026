import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await currentUser();
        const metadata = user?.publicMetadata as any;

        const subscription = {
            plan: metadata?.stripePlan || "free",
            status: metadata?.stripeStatus || "inactive",
            subscriptionId: metadata?.stripeSubscriptionId || null,
            customerId: metadata?.stripeCustomerId || null,
            priceId: metadata?.stripePriceId || null,
            currentPeriodEnd: metadata?.stripeCurrentPeriodEnd || null,
            isActive: ["active", "trialing"].includes(metadata?.stripeStatus || ""),
        };

        return NextResponse.json({ subscription });
    } catch (error: any) {
        console.error("Subscription status error:", error);
        return NextResponse.json(
            { error: "Failed to retrieve subscription status" },
            { status: 500 }
        );
    }
}
