"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Handshake, Info, AlertTriangle } from "lucide-react";

export const ResponsibleAI = () => {
    return (
        <section className="py-24 md:py-48 px-4 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 grid-background opacity-5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="p-8 md:p-20 rounded-[3rem] glass-dark border-white/5 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                        <Scale className="w-32 h-32 md:w-64 md:h-64 text-foreground" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="shrink-0">
                            <div className="w-16 h-16 md:w-24 md:h-24 glass-dark rounded-3xl flex items-center justify-center font-black text-2xl md:text-5xl text-primary shadow-glow-primary border border-primary/20">
                                <AlertTriangle className="w-10 h-10 md:w-16 md:h-16 animate-pulse" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-8 italic">
                                ETHICAL GUARDRAILS & <span className="text-gradient-blue not-italic">RESPONSIBLE OPS.</span>
                            </h3>
                            <p className="text-lg md:text-2xl text-neutral-400 font-medium mb-12 leading-relaxed italic max-w-2xl">
                                IndeedBot 2026 is architected to optimize truthfully, not deceive.
                                We operate within a strict adversarial framework to protect the integrity
                                of the career market while prioritizing the candidate's strategic advantage.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="text-xs md:text-sm font-black text-foreground/90 uppercase tracking-[0.3em] flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        Data Integrity
                                    </h4>
                                    <p className="text-[11px] md:text-xs text-neutral-500 font-bold uppercase leading-relaxed tracking-widest">
                                        The system does not fabricate credentials or falsify experience.
                                        Swarm logic ensures all optimizations are grounded in your empirical history.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs md:text-sm font-black text-foreground/90 uppercase tracking-[0.3em] flex items-center gap-2">
                                        <Handshake className="w-4 h-4 text-primary" />
                                        Human Authority
                                    </h4>
                                    <p className="text-[11px] md:text-xs text-neutral-500 font-bold uppercase leading-relaxed tracking-widest">
                                        All swarm insights are surfaced for final validation.
                                        The human operator remains the ultimate sovereign in the decision loop.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center gap-6 opacity-30">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-foreground/10" />
                    <p className="text-[10px] font-black text-foreground uppercase tracking-[0.4em] italic whitespace-nowrap">
                        Ethical Guardrail V1.0_Active
                    </p>
                    <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
                </div>
            </div>
        </section>
    );
};
