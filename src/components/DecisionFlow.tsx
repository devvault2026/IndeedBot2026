"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Brain, Target, ShieldAlert, CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "Market Signal Extraction",
        description: "IndeedBot parses raw DOM data to extract hidden intent, budget signals, and hiring urgency.",
        icon: Search
    },
    {
        title: "Semantic Resume Matching",
        description: "The Candidate Positioning Engine aligns your dossier with the specific 1:1 requirements of the role.",
        icon: Target
    },
    {
        title: "Risk & Saturation Scoring",
        description: "We analyze applicant volume and institutional legitimacy to predict your probability of success.",
        icon: ShieldAlert
    },
    {
        title: "Strategic Output",
        description: "The system generates an optimized application package and negotiation protocol for the final stage.",
        icon: CheckCircle2
    }
];

export const DecisionFlow = () => {
    return (
        <section className="py-16 md:py-32 px-4 bg-neutral-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.05),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-6xl font-black italic mb-6 md:mb-8 text-white uppercase tracking-tighter">
                        Controlled <br className="md:hidden" />
                        <span className="text-primary not-italic">Decision Intelligence.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto px-4">
                        This is not automation. This is a multi-stage strategic reasoning system designed to eliminate market noise.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <div className="bg-neutral-800 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] h-full flex flex-col items-center text-center hover:border-primary/40 transition-all group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-primary/20">
                                        <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h4 className="text-base md:text-lg font-black text-white uppercase mb-3 md:mb-4 italic tracking-tight">{step.title}</h4>
                                    <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">{step.description}</p>

                                    {i < steps.length - 1 && (
                                        <div className="absolute top-1/2 -right-4 translate-y-1/2 lg:block hidden">
                                            <ArrowRight className="w-8 h-8 text-white/10" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 md:mt-20 text-center">
                    <p className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-widest italic">
                        <Brain className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                        System Architecture: Phase 4.0 // Reasoning Dominance
                    </p>
                </div>
            </div>
        </section>
    );
};
