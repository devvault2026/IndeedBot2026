"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Brain, Cpu, MessageSquare, Zap, Target, Search, BarChart3, ShieldCheck } from "lucide-react";

export default function IntelligencePage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/20"
                        >
                            <Cpu className="w-4 h-4 text-primary shadow-glow-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Neural Engine Initialized</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                            CAREER <br /><span className="text-primary not-italic">INTELLIGENCE.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-2xl italic">
                            Meet Agent Alpha, the orchestrator of your job search. Using the advanced neural reasoning,
                            it processes thousands of data points to navigate the corporate landscape.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs">
                                INITIALIZE AGENT ALPHA
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="glass-dark p-8 rounded-[3rem] border border-border shadow-premium relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

                            <div className="flex items-center justify-between mb-8 relative z-10 border-b border-border pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-primary border-primary/20">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <span className="font-black text-foreground uppercase tracking-widest italic text-xs">Strategic Reasoning</span>
                                </div>
                                <span className="text-[8px] font-black text-green-500 uppercase tracking-widest px-2 py-1 glass border-green-500/20">System Optimal</span>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] text-neutral-500 italic">
                                    <p className="mb-2"> {">"} analyzing_job_description...</p>
                                    <p className="mb-2 text-primary font-bold"> {">"} detecting_hidden_requirements: [SCALABILITY, SYSTEM_DESIGN]</p>
                                    <motion.p
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    > {">"} formulating_strategic_angle...</motion.p>
                                </div>
                                <div className="p-6 glass rounded-2xl border border-border">
                                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-3 italic">Output: Tactical Pivot</p>
                                    <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                                        "Detected high-frequency references to legacy migration. Injecting proven refactoring frameworks into the primary profile block."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-6 relative border-y border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Zap,
                                title: "Real-time Reasoning",
                                desc: "Unlike simple wrappers, IndeedBot uses a dedicated reasoning chain. Watch the AI plan its strategy in real-time."
                            },
                            {
                                icon: Target,
                                title: "Contextual Awareness",
                                desc: "The bot automatically pulls the job page and your historic Dossier into its context window for 1:1 tailored advice."
                            },
                            {
                                icon: MessageSquare,
                                title: "Multi-Agent Swarm",
                                desc: "Agent Alpha coordinates with specialists to provide a unified success roadmap for every single application."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 glass rounded-[2.5rem] border border-border hover:border-primary/20 transition-all">
                                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform border-primary/20">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4">{feature.title}</h3>
                                <p className="text-neutral-500 font-bold italic leading-relaxed text-lg">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Dossier Impact Section */}
            <section className="py-48 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter text-foreground leading-none">The Dossier <span className="text-primary not-italic">Engine</span></h2>
                    <p className="text-xl text-neutral-400 mb-20 max-w-3xl mx-auto leading-relaxed italic font-medium">
                        We believe your best skills are often the ones you don't know how to describe.
                        Our neural layer maps your raw experience into high-value professional outcomes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-10 glass rounded-[2.5rem] border border-border">
                            <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] mb-6 italic">Input: Raw Life Dump</p>
                            <p className="text-lg text-neutral-400 italic font-bold">"I spent 2 years fixing broken servers at 3 AM while the company was pivoting..."</p>
                        </div>
                        <div className="p-10 glass rounded-[2.5rem] border border-primary/20 bg-primary/5">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6 italic">Output: Strategic Asset</p>
                            <p className="text-lg text-foreground font-black italic">"Specialized in high-velocity infrastructure stabilization during pivot-stage growth."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-20 px-6 border-t border-border text-center">
                <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.5em] italic">© 2026 INDEEDBOT SYSTEMS — ALL RIGHTS RESERVED</p>
            </footer>
        </main>
    );
}
