"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Shield,
    CreditCard,
    Crown,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    Loader2,
    Chrome,
    Zap
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

interface Subscription {
    plan: string;
    status: string;
    subscriptionId: string | null;
    customerId: string | null;
    priceId: string | null;
    currentPeriodEnd: string | null;
    isActive: boolean;
}

export default function DashboardPage() {
    const { user } = useUser();
    const [subscription, setSubscription] = useState<Subscription | null>(null);
    const [loading, setLoading] = useState(true);

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

    const isActive = subscription?.isActive ?? false;

    return (
        <div className="max-w-4xl space-y-10 pb-20">
            {/* Welcome Section */}
            <section>
                <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">
                    My <span className="text-primary">Account</span>
                </h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Welcome back, <span className="text-foreground font-bold">{user?.firstName}</span>. Manage your profile and subscription.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-1 p-8 glass border border-border/50 rounded-3xl h-fit"
                >
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative group">
                            <img
                                src={user?.imageUrl}
                                alt={user?.firstName || "User"}
                                className="w-24 h-24 rounded-3xl border-4 border-primary/20 group-hover:border-primary transition-all duration-300"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-xl flex items-center justify-center border-4 border-background text-white shadow-glow-primary">
                                <Shield size={14} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">
                                {user?.firstName} {user?.lastName}
                            </h3>
                            <p className="text-sm text-muted-foreground">{user?.emailAddresses[0]?.emailAddress}</p>
                        </div>

                        <div className="w-full pt-6 border-t border-border/50 space-y-3">
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                <span>Identity</span>
                                <span className="text-emerald-500">Verified</span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                <span>Joined</span>
                                <span className="text-foreground">{new Date(user?.createdAt || "").toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                <span>Status</span>
                                {loading ? (
                                    <Loader2 size={14} className="animate-spin text-primary" />
                                ) : isActive ? (
                                    <span className="text-emerald-500 flex items-center gap-1">
                                        <Crown size={12} /> Elite
                                    </span>
                                ) : (
                                    <span className="text-amber-500">Free</span>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Subscription Status + CTA */}
                <div className="lg:col-span-2 space-y-8">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 size={32} className="animate-spin text-primary" />
                        </div>
                    ) : isActive ? (
                        <ActiveSubscriptionCard subscription={subscription!} />
                    ) : (
                        <InactiveSubscriptionCard />
                    )}

                    {/* Extension Access Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`p-8 rounded-3xl border relative overflow-hidden ${isActive
                            ? "glass-dark border-emerald-500/30 bg-emerald-500/5"
                            : "glass border-amber-500/30 bg-amber-500/5"
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-2xl ${isActive ? "bg-emerald-500/20 text-emerald-500" : "bg-amber-500/20 text-amber-500"}`}>
                                <Chrome size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-black uppercase tracking-tight text-foreground mb-1">Extension Access</h4>
                                {isActive ? (
                                    <>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Unlocked & Active</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Your IndeedBot Chrome extension has full, unrestricted access. All premium features are enabled.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 mb-3">
                                            <AlertTriangle size={14} className="text-amber-500" />
                                            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Locked — Subscription Required</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            The Chrome extension requires an active subscription. Subscribe below to unlock all features.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ActiveSubscriptionCard({ subscription }: { subscription: Subscription }) {
    const [managingBilling, setManagingBilling] = useState(false);

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

    const periodEnd = subscription.currentPeriodEnd
        ? new Date(subscription.currentPeriodEnd).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "N/A";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 lg:p-10 glass-dark border border-primary/30 rounded-3xl relative overflow-hidden"
        >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <Crown size={24} className="text-primary" />
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Elite Strategist</h3>
                        <div className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            Active
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm">Full access to all IndeedBot premium features.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-6 border-t border-white/5">
                <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                        <Zap size={12} /> Plan Features
                    </p>
                    {["Unlimited AI Intelligence", "Full Extension Access", "Priority Support", "All Premium Tools"].map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <CheckCircle2 size={12} className="text-primary" />
                            </div>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-end gap-3">
                    <div className="p-4 bg-muted/30 rounded-2xl border border-white/5">
                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Next Billing Date</p>
                        <p className="text-sm font-bold">{periodEnd}</p>
                    </div>
                    <button
                        onClick={handleManageBilling}
                        disabled={managingBilling}
                        className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-glow-primary hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {managingBilling ? (
                            <Loader2 size={16} className="animate-spin" />
                        ) : (
                            <>
                                <CreditCard size={16} />
                                Manage Subscription
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function InactiveSubscriptionCard() {
    const [checkingOut, setCheckingOut] = useState<string | null>(null);

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 lg:p-10 glass border border-amber-500/30 rounded-3xl relative overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent"
        >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full" />

            <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-500">
                        <AlertTriangle size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-1">
                            No Active Subscription
                        </h3>
                        <p className="text-muted-foreground">
                            Subscribe to unlock the IndeedBot Chrome extension and all premium features.
                        </p>
                    </div>
                </div>

                <div className="pt-6 border-t border-border/30">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <Crown size={12} /> Choose Your Plan
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={() => handleSubscribe("monthly")}
                            disabled={!!checkingOut}
                            className="p-6 glass border border-border/50 rounded-2xl hover:border-primary/50 transition-all group text-left disabled:opacity-50"
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Monthly</p>
                            <p className="text-3xl font-black text-foreground mb-1">$20<span className="text-sm text-muted-foreground font-bold">/mo</span></p>
                            <p className="text-xs text-muted-foreground">Cancel anytime</p>
                            <div className="flex items-center gap-2 mt-4 text-xs font-bold text-primary group-hover:gap-3 transition-all">
                                {checkingOut === "monthly" ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : (
                                    <>Subscribe <ArrowRight size={14} /></>
                                )}
                            </div>
                        </button>

                        <button
                            onClick={() => handleSubscribe("yearly")}
                            disabled={!!checkingOut}
                            className="p-6 glass-dark border border-primary/30 rounded-2xl hover:border-primary/50 transition-all group text-left relative overflow-hidden disabled:opacity-50"
                        >
                            <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase rounded-full border border-emerald-500/30">
                                Save 35%
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Yearly</p>
                            <p className="text-3xl font-black text-foreground mb-1">$156<span className="text-sm text-muted-foreground font-bold">/yr</span></p>
                            <p className="text-xs text-muted-foreground">Best value — $13/mo</p>
                            <div className="flex items-center gap-2 mt-4 text-xs font-bold text-primary group-hover:gap-3 transition-all">
                                {checkingOut === "yearly" ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : (
                                    <>Subscribe <ArrowRight size={14} /></>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
