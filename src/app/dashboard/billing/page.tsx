"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    CreditCard,
    Crown,
    Loader2,
    ArrowRight,
    ExternalLink,
    CheckCircle2,
    AlertTriangle,
    Zap
} from "lucide-react";

interface Subscription {
    plan: string;
    status: string;
    subscriptionId: string | null;
    customerId: string | null;
    priceId: string | null;
    currentPeriodEnd: string | null;
    isActive: boolean;
}

export default function BillingPage() {
    const [subscription, setSubscription] = useState<Subscription | null>(null);
    const [loading, setLoading] = useState(true);
    const [managingBilling, setManagingBilling] = useState(false);
    const [checkingOut, setCheckingOut] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSubscription() {
            try {
                const res = await fetch("/api/stripe/subscription");
                const data = await res.json();
                setSubscription(data.subscription);
            } catch (error) {
                console.error("Failed to fetch subscription:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSubscription();
    }, []);

    const handleManageBilling = async () => {
        setManagingBilling(true);
        try {
            const res = await fetch("/api/stripe/portal", { method: "POST" });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error("Failed to open billing portal:", error);
        } finally {
            setManagingBilling(false);
        }
    };

    const handleSubscribe = async (cycle: "monthly" | "yearly") => {
        setCheckingOut(cycle);
        try {
            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ billingCycle: cycle }),
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert(data.error || "Failed to create checkout session. Ensure Stripe price IDs are configured.");
            }
        } catch (error) {
            console.error("Checkout failed:", error);
        } finally {
            setCheckingOut(null);
        }
    };

    const isActive = subscription?.isActive ?? false;

    const periodEnd = subscription?.currentPeriodEnd
        ? new Date(subscription.currentPeriodEnd).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    if (loading) {
        return (
            <div className="flex items-center justify-center py-32">
                <Loader2 size={40} className="animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="max-w-5xl space-y-10 pb-20">
            <section>
                <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">
                    Subscription <span className="text-primary">& Billing</span>
                </h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Manage your subscription plan, payment methods, and invoices.
                </p>
            </section>

            {isActive ? (
                <>
                    {/* Active Subscription */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 lg:p-10 glass-dark border border-primary/30 rounded-3xl relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 relative z-10">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Crown size={24} className="text-primary" />
                                    <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">Elite Strategist</h3>
                                    <div className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                        Active
                                    </div>
                                </div>
                                <p className="text-muted-foreground">Full access to the IndeedBot intelligence suite.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 pt-10 border-t border-white/5">
                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                    <Zap size={12} /> Included
                                </p>
                                {[
                                    "Unlimited AI Intelligence",
                                    "Chrome Extension — Full Access",
                                    "Resume Builder + Interview Coach",
                                    "Company Scout & Deep Analysis",
                                    "Priority Support",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 size={12} className="text-primary" />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-end gap-3">
                                {periodEnd && (
                                    <div className="p-4 bg-muted/30 rounded-2xl border border-white/5">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Next Billing Date</p>
                                        <p className="text-sm font-bold text-foreground">{periodEnd}</p>
                                    </div>
                                )}
                                <button
                                    onClick={handleManageBilling}
                                    disabled={managingBilling}
                                    className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-glow-primary hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {managingBilling ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                        <>
                                            <ExternalLink size={16} />
                                            Manage on Stripe
                                        </>
                                    )}
                                </button>
                                <p className="text-[10px] text-muted-foreground text-center italic mt-1">
                                    Update payment method, view invoices, or cancel from the Stripe portal.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    {/* No Subscription */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 lg:p-10 glass border border-amber-500/20 rounded-3xl relative overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent"
                    >
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full" />

                        <div className="flex items-start gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-500">
                                <AlertTriangle size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-1">
                                    No Active Subscription
                                </h3>
                                <p className="text-muted-foreground">
                                    You need an active subscription to use the IndeedBot Chrome extension and premium features.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-border/30">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                                <Crown size={12} /> Choose Your Plan
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Monthly */}
                                <button
                                    onClick={() => handleSubscribe("monthly")}
                                    disabled={!!checkingOut}
                                    className="p-8 glass border border-border/50 rounded-3xl hover:border-primary/50 transition-all group text-left disabled:opacity-50 relative overflow-hidden"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Monthly Plan</p>
                                    <p className="text-4xl font-black text-foreground mb-1">
                                        $20<span className="text-lg text-muted-foreground font-bold">/mo</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">Flexible. Cancel anytime.</p>
                                    <div className="flex items-center gap-2 mt-6 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                        {checkingOut === "monthly" ? (
                                            <Loader2 size={16} className="animate-spin" />
                                        ) : (
                                            <>
                                                <CreditCard size={16} />
                                                Subscribe Now <ArrowRight size={14} />
                                            </>
                                        )}
                                    </div>
                                </button>

                                {/* Yearly */}
                                <button
                                    onClick={() => handleSubscribe("yearly")}
                                    disabled={!!checkingOut}
                                    className="p-8 glass-dark border border-primary/30 rounded-3xl hover:border-primary/50 transition-all group text-left relative overflow-hidden disabled:opacity-50"
                                >
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase rounded-full border border-emerald-500/30">
                                        Save 35%
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Yearly Plan</p>
                                    <p className="text-4xl font-black text-foreground mb-1">
                                        $156<span className="text-lg text-muted-foreground font-bold">/yr</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">Best value — $13/mo effectively</p>
                                    <div className="flex items-center gap-2 mt-6 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                        {checkingOut === "yearly" ? (
                                            <Loader2 size={16} className="animate-spin" />
                                        ) : (
                                            <>
                                                <Crown size={16} />
                                                Subscribe Now <ArrowRight size={14} />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}

            {/* Payment Security Notice */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-50 hover:opacity-100 transition-all duration-500 pt-8">
                <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Secure Stripe Checkout</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Cancel Anytime</span>
                </div>
            </div>
        </div>
    );
}
