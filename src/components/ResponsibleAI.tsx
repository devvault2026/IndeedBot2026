"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Handshake, Info } from "lucide-react";

export const ResponsibleAI = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-white border-b border-neutral-100 italic">
            <div className="max-w-4xl mx-auto">
                <div className="p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-neutral-50 border-2 border-primary/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
                        <Scale className="w-20 h-20 md:w-32 md:h-32" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                        <div className="shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-2xl shadow-xl shadow-primary/20">
                                !
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-black text-[#2d2d2d] uppercase tracking-tighter mb-4 md:mb-6 not-italic">
                                Responsible AI & <span className="text-primary italic">Ethical Boundaries.</span>
                            </h3>
                            <p className="text-sm md:text-lg text-neutral-500 font-medium mb-6 md:mb-8 leading-relaxed">
                                IndeedBot 2026 is designed to optimize truthfully, not deceive. We operate within a strict ethical framework to protect the integrity of both candidates and employers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                <div className="space-y-2 md:space-y-3">
                                    <h4 className="text-[10px] md:text-xs font-black text-[#2d2d2d] uppercase tracking-widest flex items-center gap-2 not-italic">
                                        <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                                        Data Integrity
                                    </h4>
                                    <p className="text-[10px] md:text-xs text-neutral-400 font-bold uppercase leading-relaxed">
                                        The system does not fabricate credentials, falsify experience, or impersonate candidates in automated interactions.
                                    </p>
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <h4 className="text-[10px] md:text-xs font-black text-[#2d2d2d] uppercase tracking-widest flex items-center gap-2 not-italic">
                                        <Handshake className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                                        Transparency
                                    </h4>
                                    <p className="text-[10px] md:text-xs text-neutral-400 font-bold uppercase leading-relaxed">
                                        All AI-generated insights are surfaced to the candidate for final validation. The human remains the ultimate decision-maker.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 md:mt-12 text-center text-[8px] md:text-[10px] font-bold text-neutral-300 uppercase tracking-[3px] md:tracking-[4px]">
                    Institutional Protocol v4.0.0 // Ethical Operations Guardrail Active
                </p>
            </div>
        </section>
    );
};
