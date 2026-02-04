"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Brain, Cpu, MessageSquare, Zap, Target, Search, BarChart3, ShieldCheck } from "lucide-react";

export default function IntelligencePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 bg-neutral-50 border-b border-neutral-200 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none -z-10"
                    style={{ backgroundImage: 'radial-gradient(#2557a7 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                            <Cpu className="w-3 h-3" />
                            <span>Powered by DeepSeek V3</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2d2d2d] italic">
                            CAREER <br /><span className="text-primary not-italic">INTELLIGENCE.</span>
                        </h1>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            Meet Agent Alpha, the orchestrator of your job search. Using the advanced DeepSeek V3 reasoning model,
                            it processes thousands of data points to navigate the complex corporate landscape for you.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                INITIALIZE AGENT ALPHA
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-neutral-200 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-black text-[#2d2d2d] uppercase tracking-tighter">Strategic Reasoning</span>
                                </div>
                                <span className="text-[10px] font-black text-green-500 uppercase">System Optimal</span>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 font-mono text-xs text-neutral-500 italic">
                                    <p className="mb-2"> {">"} analyzing_job_description...</p>
                                    <p className="mb-2 text-primary font-bold"> {">"} detecting_hidden_requirements: [SCALABILITY, SYSTEM_DESIGN]</p>
                                    <motion.p
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                    > {">"} formulating_strategic_angle...</motion.p>
                                </div>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                                    <p className="text-sm font-bold text-[#2d2d2d] mb-2">Recommended Action:</p>
                                    <p className="text-xs text-neutral-600 leading-relaxed">
                                        "The JD emphasizes distributed systems but uses vague terminology. I've restructured your experience blocks to highlight high-throughput messaging to trigger their internal scoring system."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-[#2d2d2d] uppercase italic">Real-time Reasoning</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                Unlike simple LLM wrappers, IndeedBot uses a dedicated reasoning chain. You watch the AI plan its strategy in the side panel before it executes.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-[#2d2d2d] uppercase italic">Contextual Awareness</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                The bot automatically pulls the currently viewed job page and your historic Dossier into its context window for 1:1 tailored advice.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center">
                                <MessageSquare className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-[#2d2d2d] uppercase italic">Multi-Agent Swarm</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                Agent Alpha coordinates with specialists (Bravo for Resumes, Charlie for Scouting) to provide a unified success roadmap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Dossier Impact Section */}
            <section className="py-32 px-4 bg-neutral-900 text-white overflow-hidden relative">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">The Dossier Engine</h2>
                    <p className="text-xl text-neutral-400 mb-16 max-w-3xl mx-auto leading-relaxed">
                        We believe your best skills are often the ones you don't know how to describe.
                        Our translation layer takes your raw "Truth Dossier" and maps it into high-value professional outcomes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Input: Raw Life Dump</p>
                            <p className="text-sm text-neutral-400 italic">"I spent 2 years fixing broken servers at 3 AM while the company was pivoting every week..."</p>
                        </div>
                        <div className="p-8 bg-primary/10 border border-primary/40 rounded-3xl">
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Output: Strategic Asset</p>
                            <p className="text-sm font-bold">"Experienced in Rapid Crisis Response and High-Velocity Agile Environment management..."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-20 px-4 bg-white border-t border-neutral-100">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-black text-[#2d2d2d] uppercase tracking-[3px]">© 2026 LIBERATED BY OFFICIALPR0X</p>
                </div>
            </footer>
        </main>
    );
}
