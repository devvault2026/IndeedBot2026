"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Crown } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    return (
        <section id="pricing" className="py-16 md:py-32 px-4 bg-[#f3f2f1] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#2557a7 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/10 bg-white text-primary text-[9px] md:text-[10px] font-black mb-6 md:mb-8 shadow-sm tracking-widest uppercase">
                    <Crown className="w-3 h-3" />
                    <span>Secure Your Advantage</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-[#2d2d2d] uppercase tracking-tighter italic">Operational <span className="text-primary not-italic">Licensing.</span></h2>
                <p className="text-neutral-600 mb-8 md:mb-12 max-w-xl mx-auto text-base md:text-lg font-medium px-4">
                    Strategic access for high-stakes professionals. Institutional-grade career intelligence infrastructure.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16 scale-90 md:scale-100 origin-center">
                    <span className={`text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-[#2d2d2d]' : 'text-neutral-400'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-14 h-8 bg-[#2d2d2d] rounded-full relative shadow-inner transition-colors shrink-0"
                    >
                        <div className={`absolute top-1 bottom-1 w-6 bg-white rounded-full transition-all shadow-md ${billingCycle === 'yearly' ? 'right-1' : 'left-1'}`} />
                    </button>
                    <span className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-[#2d2d2d]' : 'text-neutral-400'}`}>
                        Yearly
                        <span className="bg-primary text-white text-[9px] px-2 py-0.5 rounded-full shadow-lg shadow-primary/20">SAVE 20%</span>
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
                    {/* STANDARD TIER */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-neutral-200 text-left shadow-sm hover:shadow-xl transition-all group relative"
                    >
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-neutral-200 to-neutral-100" />

                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg md:text-xl font-black text-[#2d2d2d] uppercase italic">Pro Intelligence</h3>
                        </div>
                        <p className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">For Individual Professionals</p>

                        <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                            <span className="text-4xl md:text-5xl font-black text-[#2d2d2d] tracking-tight">
                                ${billingCycle === 'monthly' ? '29' : '24'}
                            </span>
                            <div className="flex flex-col ml-2">
                                <span className="text-neutral-400 font-bold uppercase text-[10px] tracking-widest">/ Month</span>
                                {billingCycle === 'yearly' && <span className="text-primary font-bold text-[9px] uppercase tracking-tight">Billed Annually</span>}
                            </div>
                        </div>

                        <div className="w-full h-px bg-neutral-100 mb-8" />

                        <ul className="space-y-4 mb-10">
                            {[
                                "Real-time Market Analytics",
                                "50 Strategic Opportunity Scans",
                                "Encrypted Job Vault",
                                "Resume Keyword Optimization",
                                "Salary Negotiation Intel"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-600 font-bold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-neutral-600" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl border-2 border-[#2d2d2d] text-[#2d2d2d] font-black hover:bg-[#2d2d2d] hover:text-white transition-all text-xs uppercase tracking-widest">
                            Initialize Protocol
                        </button>
                    </motion.div>

                    {/* ENTERPRISE TIER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] border-2 border-primary text-left shadow-2xl relative overflow-hidden transform md:-translate-y-4"
                    >
                        <div className="absolute top-0 right-0 bg-primary px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white rounded-bl-xl shadow-lg z-10">
                            Most Popular
                        </div>

                        <h3 className="text-xl font-black mb-2 text-[#2d2d2d] uppercase italic">Strategic Suite</h3>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-8">For High-Stakes Career Moves</p>

                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black text-primary tracking-tight">
                                ${billingCycle === 'monthly' ? '79' : '63'}
                            </span>
                            <div className="flex flex-col ml-2">
                                <span className="text-neutral-400 font-bold uppercase text-[10px] tracking-widest">/ Month</span>
                                {billingCycle === 'yearly' && <span className="text-primary font-bold text-[9px] uppercase tracking-tight">Billed Annually</span>}
                            </div>
                        </div>

                        <div className="w-full h-px bg-primary/10 mb-8" />

                        <ul className="space-y-4 mb-10">
                            {[
                                "Full Multi-Agent Swarm Access",
                                "Unlimited Strategic Scans",
                                "Risk & Signal Engine Access",
                                "Priority Reasoning Compute",
                                "Interview Simulation Coach",
                                "Automated Application Filler",
                                "24/7 Priority Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#2d2d2d] font-bold text-sm">
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-primary text-white font-black hover:bg-indeed-blue-hover hover:scale-[1.02] transition-all text-xs uppercase tracking-widest shadow-xl shadow-primary/30 ring-4 ring-primary/20">
                            Secure Enterprise Suite
                        </button>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        30-Day Money-Back Guarantee included with all licenses
                    </p>
                </div>
            </div>
        </section>
    );
};
