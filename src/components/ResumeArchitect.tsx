"use client";

import { motion } from "framer-motion";
import { FileCode, Sparkles, Brain, ArrowRight, Save, Download, Terminal, User, Activity } from "lucide-react";
import { useState, useEffect } from "react";

const Cursor = () => (
    <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1.5 h-4 bg-accent ml-1 translate-y-0.5"
    />
);

export const ResumeArchitect = () => {
    const [typedText, setTypedText] = useState("");
    const targetText = "Re-engineering experience block to align with 'Distributed Systems' requirement. Optimizing semantic weight of React-to-Java bridge...";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(targetText.slice(0, i));
            i++;
            if (i > targetText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="resume" className="py-24 md:py-48 px-4 relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                    >
                        <FileCode className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50">Tactical Document Architect</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                        WEAPONIZE YOUR <span className="text-gradient-primary not-italic">IDENTITY.</span>
                    </h2>
                    <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Agent Bravo operates as a specialized IDE for your career documents—
                        splitting your screen between raw intelligence and real-time generation.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass rounded-[2.5rem] p-1.5 md:p-3 overflow-hidden shadow-2xl relative"
                    >
                        {/* IDE Wrapper */}
                        <div className="flex flex-col lg:flex-row h-[600px] md:h-[700px] bg-white dark:bg-[#0c0c0e] rounded-[2rem] border border-neutral-200 dark:border-white/5 overflow-hidden">

                            {/* Left: Chat / Reasoning (The "Bravo" Agent) */}
                            <div className="w-full lg:w-[400px] border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-white/5 flex flex-col">
                                <div className="p-6 border-b border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-accent" />
                                        </div>
                                        <span className="text-xs font-black tracking-widest uppercase italic">Agent Bravo</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-white/10" />
                                        <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-white/10" />
                                        <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-white/10" />
                                    </div>
                                </div>
                                <div className="flex-1 p-6 font-mono text-xs space-y-6 overflow-y-auto">
                                    <div className="space-y-2">
                                        <p className="text-neutral-500 uppercase tracking-tighter">&gt; Initializing contextual_sync</p>
                                        <p className="text-neutral-500 uppercase tracking-tighter">&gt; Analyzing candidate_dossier_v4</p>
                                    </div>

                                    <div className="bg-accent/5 border border-accent/10 rounded-xl p-4 space-y-3">
                                        <p className="text-accent font-black uppercase tracking-widest text-[10px]">Strategic Reasoning</p>
                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                                            {typedText}
                                            <Cursor />
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <Terminal className="w-3 h-3 text-primary" />
                                            </div>
                                            <p className="text-neutral-400">Optimization score increased by 42% for 'High Scalability' ATS tags.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                <Save className="w-3 h-3 text-green-500" />
                                            </div>
                                            <p className="text-neutral-400">ATS formatting verified for Workday parsers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-neutral-50 dark:bg-white/5 border-t border-neutral-200 dark:border-white/5">
                                    <div className="relative">
                                        <input
                                            disabled
                                            className="w-full bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/10 rounded-lg p-3 text-[10px] text-neutral-500 font-mono focus:outline-none"
                                            placeholder="Bravo: Waiting for input..."
                                        />
                                        <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Live Preview */}
                            <div className="flex-1 flex flex-col bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative">
                                {/* Preview Header */}
                                <div className="bg-white/80 dark:bg-black/40 p-4 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Live Resume Output (A4)</span>
                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-foreground/5 transition-colors text-foreground/70">
                                            <Download className="w-3 h-3" /> Export PDF
                                        </button>
                                    </div>
                                </div>

                                {/* The Actual "Document" */}
                                <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-neutral-50 dark:bg-neutral-800/50 scrollbar-hide">
                                    <motion.div
                                        layout
                                        className="w-full max-w-[500px] mx-auto bg-white text-black p-10 md:p-14 shadow-2xl min-h-[700px] font-serif"
                                    >
                                        <div className="border-b-2 border-primary pb-6 mb-8">
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">JORDAN STRATEGIC</h3>
                                            <div className="flex gap-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                                                <span>Staff Engineer</span>
                                                <span className="text-primary">|</span>
                                                <span>Candidate Force</span>
                                            </div>
                                        </div>

                                        <section className="mb-10">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Core Professional Mandate</h4>
                                            <p className="text-xs leading-relaxed text-neutral-700 font-medium italic">
                                                Strategic technical leader specializing in re-engineering high-load distributed architectures...
                                            </p>
                                        </section>

                                        <section className="mb-10">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Experience Block #01</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h5 className="text-sm font-bold uppercase">Lead Infrastructure Architect</h5>
                                                        <p className="text-[10px] font-bold text-neutral-500 uppercase">Indeed Enterprise Systems</p>
                                                    </div>
                                                    <span className="text-[9px] font-bold text-neutral-400">2023 - PRESENT</span>
                                                </div>
                                                <ul className="space-y-2 list-disc pl-4 text-[11px] leading-relaxed text-neutral-600">
                                                    <li>Spearheaded a massive decomposition of monolithic bridge architectures.</li>
                                                    <motion.li
                                                        animate={{ backgroundColor: ["#ffffff", "#8b5cf610", "#ffffff"] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                        className="px-1 -mx-1"
                                                    >
                                                        Optimized distributed systems footprint for 40% higher throughput.
                                                    </motion.li>
                                                    <li>Implemented automated ATS-ready credentialing pipeline.</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="space-y-4 opacity-30 mt-12 grayscale">
                                            <div className="h-4 w-1/4 bg-neutral-200" />
                                            <div className="h-2 w-full bg-neutral-100" />
                                            <div className="h-2 w-full bg-neutral-100" />
                                            <div className="h-2 w-3/4 bg-neutral-100" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Modification Tag */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <div className="flex flex-col items-center">
                                        <Activity className="w-12 h-12 text-primary opacity-20 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop CTA */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-8 glass rounded-3xl">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black uppercase italic">Ready to optimize?</h4>
                                <p className="text-neutral-500 text-sm">Deploy Agent Bravo on your existing resume file instantly.</p>
                            </div>
                        </div>
                        <button className="px-10 py-5 bg-primary text-white font-black text-lg rounded-xl hover:scale-[1.05] transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                            INITIALIZE ARCHITECT <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
