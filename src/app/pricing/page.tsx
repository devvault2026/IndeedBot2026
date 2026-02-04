"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Star, Info, ArrowRight, HelpCircle } from "lucide-react";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    const plans = [
        {
            name: "Standard",
            description: "Essential tools for high-potential candidates.",
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: [
                "Agent Alpha (Standard Reasoning)",
                "5 Strategic Job Scans / Day",
                "Persistent Job Vault (Local)",
                "ATS Scoring Module",
                "Community Discord Access"
            ],
            cta: "Get Started Free",
            popular: false
        },
        {
            name: "Professional",
            description: "Advanced intelligence for serious career growth.",
            monthlyPrice: 29,
            yearlyPrice: 19,
            features: [
                "Agent Alpha (Strategic Reasoning)",
                "50 Strategic Job Scans / Month",
                "Expanded Job Vault (Local)",
                "Contextual Resume Architect",
                "OSINT Corporate Scout Lite",
                "Priority Support"
            ],
            cta: "Choose Professional",
            popular: false
        },
        {
            name: "Strategic Elite",
            description: "The complete suite for absolute market dominance.",
            monthlyPrice: 79,
            yearlyPrice: 59,
            features: [
                "Full Swarm Intelligence (All Agents)",
                "Unlimited Strategic Job Scans",
                "Unlimited Vault Storage",
                "Agent Delta Success Coach",
                "Full OSINT Corporate Scout",
                "DeepSeek V3 Priority Reasoning",
                "Exclusive Strategy Webinars"
            ],
            cta: "Secure Success Access",
            popular: true
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black italic mb-8 text-[#2d2d2d] uppercase tracking-tighter leading-none">
                            INVEST IN YOUR<br /><span className="text-primary not-italic">LAST JOB SEARCH.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                            A one-time investment in your intelligence layer pays dividends for the rest of your career.
                        </p>
                    </motion.div>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className={`text-sm font-black uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-primary' : 'text-neutral-400'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="w-16 h-8 bg-neutral-100 rounded-full p-1 relative border border-neutral-200"
                        >
                            <motion.div
                                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                                className="w-6 h-6 bg-primary rounded-full shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-black uppercase tracking-widest ${billingCycle === 'yearly' ? 'text-primary' : 'text-neutral-400'}`}>Yearly <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded ml-1">Save 35%</span></span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-32 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`indeed-card p-12 rounded-[3.5rem] relative flex flex-col ${plan.popular ? 'border-primary ring-8 ring-primary/5 shadow-2xl scale-105 z-10' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[3px] px-6 py-2 rounded-full shadow-xl">
                                    Highly Recommended
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase italic mb-2 tracking-tighter">{plan.name}</h3>
                                <p className="text-sm text-neutral-400 font-medium h-10">{plan.description}</p>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-black text-[#2d2d2d] tracking-tighter">
                                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-neutral-400 font-bold uppercase text-[10px] tracking-widest">/ Month</span>
                                </div>
                                {billingCycle === 'yearly' && plan.yearlyPrice > 0 && (
                                    <p className="text-xs text-green-600 font-black uppercase tracking-widest mt-2">Billed Annually</p>
                                )}
                            </div>

                            <div className="flex-1 space-y-5 mb-12">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 group">
                                        <div className="mt-0.5 shrink-0">
                                            <Check className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-green-500'}`} />
                                        </div>
                                        <span className={`text-sm font-medium ${plan.popular ? 'text-[#2d2d2d]' : 'text-neutral-500'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[3px] transition-all transform hover:scale-[1.02] active:scale-[0.98] ${plan.popular
                                    ? 'bg-primary text-white shadow-2xl shadow-primary/30'
                                    : 'bg-white border-2 border-neutral-200 text-[#2d2d2d] hover:border-primary/30'
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed Feature Comparison */}
            <section className="py-32 px-4 bg-neutral-50 border-y border-neutral-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-20 italic uppercase tracking-tighter">Detailed Analysis</h2>

                    <div className="bg-white rounded-[3rem] border border-neutral-200 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-neutral-50/50">
                                    <th className="p-8 text-xs font-black uppercase tracking-[3px] text-neutral-400">Capability</th>
                                    <th className="p-8 text-xs font-black uppercase tracking-[3px] text-neutral-400 text-center">Standard</th>
                                    <th className="p-8 text-xs font-black uppercase tracking-[3px] text-neutral-400 text-center">Pro</th>
                                    <th className="p-8 text-xs font-black uppercase tracking-[3px] text-primary text-center">Elite</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {[
                                    { name: "Reasoning Engine", s: "Base", p: "Strategic", e: "V3 Priority" },
                                    { name: "Daily Search Limit", s: "5", p: "50", e: "Unlimited" },
                                    { name: "Local Vault Encryption", s: "AES-128", p: "AES-256", e: "AES-256" },
                                    { name: "Agent Bravo (Resumes)", s: "View Only", p: "Architect", e: "Full Suite" },
                                    { name: "Agent Charlie (OSINT)", s: "None", p: "Lite", e: "Deep Search" },
                                    { name: "Agent Delta (Interview)", s: "None", p: "None", e: "Full Coaching" },
                                    { name: "Data Persistence", s: "24 Hours", p: "Lifetime", e: "Lifetime" }
                                ].map((row) => (
                                    <tr key={row.name} className="hover:bg-neutral-50/20 transition-colors">
                                        <td className="p-8 text-sm font-bold text-[#2d2d2d]">{row.name}</td>
                                        <td className="p-8 text-sm text-center text-neutral-500">{row.s}</td>
                                        <td className="p-8 text-sm text-center text-neutral-500 font-bold">{row.p}</td>
                                        <td className="p-8 text-sm text-center text-primary font-black">{row.e}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Educational FAQ */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black italic mb-16 text-center text-[#2d2d2d] uppercase tracking-tighter">Educational FAQ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
                                <Info className="w-5 h-5" />
                                <span>Why Local Storage?</span>
                            </div>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                Most AI tools save your data in their cloud DB. IndeedBot keeps everything in your browser's IndexedDB. This ensures that even in Corporate environments, your search remains invisible to tracking.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
                                <HelpCircle className="w-5 h-5" />
                                <span>Can I use this on LinkedIn?</span>
                            </div>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                IndeedBot is specifically tuned for the Indeed algorithm. While the reasoning engine is universal, the scraping and OSINT modules are optimized for Indeed's layout and metadata.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
                                <Zap className="w-5 h-5" />
                                <span>How do 'Agents' work?</span>
                            </div>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                Each Agent is a specialized sub-prompt with its own context window. Agent Bravo handles document structure, while Agent Alpha handles strategic reasoning. They coordinate seamlessly in your side panel.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Is this ATS-Proof?</span>
                            </div>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                Nothing is "ATS-Proof," but Agent Bravo is trained on the actual JSON output schemas of Greenhouse and Workday. It builds resumes specifically to be "Perfectly Parsable."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-4 border-t border-neutral-100 text-center">
                <div className="max-w-2xl mx-auto bg-neutral-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                    <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Ready for Selection?</h2>
                    <p className="text-neutral-400 mb-12 font-medium">Join 12,000+ professionals taking control of their career trajectory.</p>
                    <button className="px-12 py-6 bg-white text-[#2d2d2d] font-black rounded-2xl flex items-center gap-3 mx-auto hover:scale-105 transition-all">
                        DEPLOY NOW <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            <footer className="py-20 px-4 bg-white border-t border-neutral-100">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-xs font-black text-neutral-400 uppercase tracking-[4px]">© 2026 LIBERATED BY OFFICIALPR0X. STRATEGIC CAREER INTELLIGENCE PORTAL.</p>
                </div>
            </footer>
        </main>
    );
}
