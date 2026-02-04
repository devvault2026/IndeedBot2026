"use client";

import { motion } from "framer-motion";
import { Edit3, FileCode, CheckCircle2, Zap, ArrowRight, Layout, Sparkles } from "lucide-react";
import Link from "next/link";

export const ResumeArchitect = () => {
    return (
        <section className="py-16 md:py-32 px-4 bg-[#f8f9fa] border-y border-neutral-200 relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 md:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-6 md:mb-8 tracking-[2px]">
                        <Sparkles className="w-3 h-3 fill-primary" />
                        <span>ATS Success Protocol</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-[#2d2d2d] italic">RESUME<br /><span className="text-primary tracking-tighter not-italic">ARCHITECT.</span></h2>

                    <div className="space-y-8 md:space-y-10">
                        <div className="flex gap-4 md:gap-6 group">
                            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white shadow-md border border-neutral-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Layout className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-black mb-1 md:mb-2 text-[#2d2d2d] uppercase">Contextual Optimization</h3>
                                <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-medium">
                                    Agent Bravo doesn't just swap words. It modifies the specific semantic weight of your achievements to perfectly align with the Indeed match algorithm.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:gap-6 group">
                            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white shadow-md border border-neutral-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                                <FileCode className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-black mb-1 md:mb-2 text-[#2d2d2d] uppercase">Indeed-Optimized Exports</h3>
                                <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-medium">
                                    Generate 1:1 ATS-compliant documents that parse perfectly on Greenhouse, Lever, and Workday. Precision formatting every time.
                                </p>
                            </div>
                        </div>

                        <Link href="/features/resume" className="flex items-center gap-3 font-black text-primary hover:gap-5 transition-all uppercase tracking-widest text-xs pt-4">
                            Start Building <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full"
                >
                    <div className="bg-white p-2 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-neutral-200 premium-shadow">
                        <div className="bg-white text-[#2d2d2d] p-6 md:p-12 min-h-[500px] md:min-h-[600px] shadow-inner font-sans border border-neutral-100 rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden">
                            <div className="w-full text-left border-b-2 border-primary/10 pb-4 md:pb-6 mb-6 md:mb-8">
                                <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#2d2d2d]">ALEX PROFESSIONAL</h1>
                                <p className="text-[10px] md:text-sm font-bold text-neutral-400 mt-1 uppercase tracking-widest">Solutions Architect | Strategic Candidate</p>
                            </div>

                            <div className="space-y-6 md:space-y-8">
                                <section>
                                    <h2 className="text-[10px] md:text-xs font-black text-primary mb-3 md:mb-4 uppercase tracking-[3px]">Expertise</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {["REACT_ECOSYSTEM", "TS_ARCHITECTURE", "SYSTEM_DESIGN", "ATS_STRATEGY"].map(skill => (
                                            <span key={skill} className="px-2 py-1 md:px-3 rounded bg-neutral-100 text-[9px] md:text-[10px] font-black">{skill}</span>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-[10px] md:text-xs font-black text-primary mb-3 md:mb-4 uppercase tracking-[3px]">Professional History</h2>
                                    <div className="space-y-4">
                                        <div className="p-3 md:p-4 bg-neutral-50 rounded-xl border border-neutral-100 italic relative overflow-hidden group">
                                            <div className="scan-line-blue opacity-20" />
                                            <p className="text-[10px] md:text-xs text-neutral-600 leading-relaxed font-medium">
                                                "Successfully managed high-velocity deployment cycles for enterprise solutions, resulting in 40% higher operational efficiency across distributed teams..."
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="opacity-40">
                                    <h2 className="text-[10px] md:text-xs font-black text-neutral-300 mb-3 md:mb-4 uppercase tracking-[3px]">Education</h2>
                                    <div className="h-3 md:h-4 bg-neutral-100 w-3/4 rounded-full" />
                                </section>
                            </div>

                            {/* Floating Modification UI - Responsive positioning */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white p-3 md:p-5 rounded-2xl shadow-2xl border border-neutral-200 z-20 max-w-[200px] md:max-w-none"
                            >
                                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
                                        <Zap className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                                    </div>
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest">Auto-Tailoring...</p>
                                </div>
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <div className="h-1 md:h-1.5 w-24 md:w-32 bg-primary/20 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                    <p className="text-[8px] md:text-[10px] font-bold text-neutral-500 italic">Optimizing for "Scalability"</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
