import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    typescript: true,
});

// Price IDs — you need to create these in your Stripe Dashboard
// Monthly: $20/mo  |  Yearly: $156/yr
// Update these after creating products in Stripe
export const PRICE_IDS = {
    monthly: process.env.STRIPE_PRICE_MONTHLY || "",
    yearly: process.env.STRIPE_PRICE_YEARLY || "",
};
