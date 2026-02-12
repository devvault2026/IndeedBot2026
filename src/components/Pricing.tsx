"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Crown, Sparkles, Command, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    return (
        <section id="pricing" className="py-20 md:py-32 px-6 relative overflow-hidden bg-background">
            {/* Immersive Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-full h-[600px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 shadow-2xl"
                    >
                        <Crown className="w-4 h-4 text-primary shadow-glow-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50">Elite Intelligence Access</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black italic mb-10 text-foreground uppercase tracking-tighter leading-[0.8]">
                        ONE TIER. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">FULL POWER.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-xl text-foreground/60 font-medium italic">
                        No complexity. No compromises. One subscription to unlock the
                        entire IndeedBot neural infrastructure.
                    </p>
                </div>

                {/* Billing Toggle - High Fidelity */}
                <div className="flex items-center justify-center gap-8 mb-16">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${billingCycle === 'monthly' ? 'text-foreground scale-110' : 'text-foreground/30'}`}
                    >
                        Monthly
                    </button>
                    <div
                        className="w-20 h-10 glass rounded-full p-1.5 cursor-pointer relative shadow-inner shadow-black/20"
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    >
                        <motion.div
                            animate={{ x: billingCycle === 'yearly' ? 40 : 0 }}
                            className="h-full aspect-square bg-foreground rounded-full shadow-glow-primary"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${billingCycle === 'yearly' ? 'text-foreground scale-110' : 'text-foreground/30'}`}
                        >
                            Yearly
                        </button>
                        <div className="px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">33.3% OFF</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* SINGLE ELITE TIER */}
                    <div className="relative">
                        {/* Animated Border Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary via-indigo-500 to-blue-600 rounded-[3.5rem] blur opacity-30 animate-pulse" />
                        <div className="absolute top-[-10px] right-[-10px] z-20">
                            <div className="bg-primary px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white rounded-full shadow-glow-primary border border-white/20 italic transform rotate-12">
                                FULL ACCESS
                            </div>
                        </div>

                        <div className="relative h-full bg-background/90 backdrop-blur-3xl p-12 md:p-16 rounded-[3.5rem] flex flex-col border border-primary/50 overflow-hidden shadow-premium">
                            {/* Inner Accent Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Elite Strategist</h3>
                                <Crown className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-primary/70 font-black text-xs uppercase tracking-widest mb-10 italic">Complete Intelligence Suite</p>

                            <div className="flex items-baseline gap-2 mb-12 relative z-10">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={billingCycle}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.2 }}
                                        className="text-8xl font-black text-foreground tracking-tighter"
                                    >
                                        ${billingCycle === 'monthly' ? '20' : '156'}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="text-neutral-500 font-black text-xs uppercase italic tracking-widest">
                                    / {billingCycle === 'monthly' ? 'Month' : 'Year'}
                                </span>
                            </div>

                            <ul className="space-y-6 mb-16 flex-1 relative z-10">
                                {[
                                    "Unlimited Intelligence Swarm Access",
                                    "Infinite AI Resume Refactoring",
                                    "24/7 Live Interview Sparring",
                                    "Deep Company & Recruiter Scouting",
                                    "Priority Neural Lane Access",
                                    "Strategic Decision Dashboard",
                                    "Encrypted Intelligence Vault"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-foreground font-bold text-base italic leading-tight">
                                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-glow-primary border border-white/20">
                                            <Zap className="w-4 h-4 text-white fill-white" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-7 bg-primary text-white font-black hover:scale-[1.02] transition-all text-sm uppercase tracking-[0.3em] rounded-3xl shadow-glow-primary flex items-center justify-center gap-4 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                Initialize Elite Access <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* TRUST SIGNALS */}
                <div className="mt-32 flex flex-col md:flex-row items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Encrypted Stripe Checkout</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Star className="w-6 h-6 text-primary fill-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Elite Performance Rated</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check className="w-6 h-6 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">30-Day Mission Success Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
