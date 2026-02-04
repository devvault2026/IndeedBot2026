"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, EyeOff, Activity } from "lucide-react";

const trustFactors = [
    {
        title: "Client-Side Encryption",
        description: "All sensitive candidate data, including dossiers and API keys, are stored exclusively in your local browser sandbox. We have zero eyes on your personal history.",
        icon: Lock
    },
    {
        title: "Zero Resale Guarantee",
        description: "IndeedBot 2026 is an adversarial agent for the candidate. We do not sell resumes, track identities, or use your data to train multi-tenant models.",
        icon: EyeOff
    },
    {
        title: "Regional Residency",
        description: "Data remains within your legal jurisdiction. Our architecture complies with GDPR, PIPEDA, and CCPA standards for institutional-grade reliability.",
        icon: Globe
    },
    {
        title: "Least-Privilege Agent Design",
        description: "Our multi-agent swarm operates on a strict need-to-know basis. Engines only access the job context required for the specific decision being made.",
        icon: Activity
    }
];

export const Trust = () => {
    return (
        <section className="py-16 md:py-32 px-4 bg-white border-y border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[9px] md:text-[10px] font-black uppercase mb-6 md:mb-8 tracking-[2px]">
                            <ShieldCheck className="w-3 h-3 fill-green-600" />
                            <span>Institutional Status: SOC 2 Compliant</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black italic mb-6 md:mb-8 text-[#2d2d2d] uppercase tracking-tighter leading-none">
                            Enterprise-Grade <br />
                            <span className="text-primary not-italic">Security & Privacy.</span>
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
                            IndeedBot 2026 is built with the same security assumptions as financial and healthcare systems.
                            We prioritize institutional validation over consumer tracking.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="text-xs md:text-sm font-bold text-[#2d2d2d] uppercase italic">Continuous Monitoring & Anomaly Detection</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {trustFactors.map((factor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-primary/20 transition-all group"
                            >
                                <factor.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xs md:text-sm font-black text-[#2d2d2d] uppercase mb-3 md:mb-4 tracking-tight">{factor.title}</h4>
                                <p className="text-[10px] md:text-xs text-neutral-500 font-medium leading-relaxed">{factor.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
