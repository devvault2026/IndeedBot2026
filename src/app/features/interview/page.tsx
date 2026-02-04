"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Play, CheckCircle2, Zap, Brain, Activity, UserCheck } from "lucide-react";

export default function InterviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 bg-white border-b border-neutral-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none -z-10"
                    style={{ backgroundImage: 'radial-gradient(#2557a7 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                            <MessageSquare className="w-3 h-3" />
                            <span>Agent Delta / Coach Module</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2d2d2d] italic leading-tight uppercase">
                            PERFORMANCE <br /><span className="text-primary not-italic">SIMULATION.</span>
                        </h1>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            The interview is a high-stakes performance. Agent Delta puts you in a state-machine simulator
                            that mimics the actual psychological pressure of professional screening calls.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                START SIMULATION
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="bg-[#0c0c0e] p-10 rounded-[4rem] shadow-2xl border border-white/10 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Simulation Active</span>
                                </div>
                                <Mic className="w-5 h-5 text-neutral-500" />
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <Brain className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-xs text-neutral-400 italic">"Can you describe a time when you had to manage technical debt under a strict product deadline?"</p>
                                </div>

                                <div className="flex justify-end gap-4 p-4">
                                    <p className="text-xs text-primary font-bold bg-primary/10 px-4 py-2 rounded-2xl border border-primary/20">Analyzing User Response Phase...</p>
                                    <UserCheck className="w-8 h-8 text-primary shrink-0" />
                                </div>

                                <div className="p-4 bg-primary rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Activity className="w-4 h-4 text-white" />
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest">Corrective Insight</p>
                                    </div>
                                    <p className="text-[11px] text-white font-medium leading-relaxed">
                                        "Your answer focused too much on the 'problem' and not the 'result'. Shift the narrative to the 20% latency reduction you achieved. Try again."
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
                        {[
                            {
                                icon: Play,
                                title: "One-Question Logic",
                                desc: "The simulator asks one question at a time and waits for your full vocal or text input before moving forward, mimicking a real call."
                            },
                            {
                                icon: Brain,
                                title: "Psychological Analysis",
                                desc: "Agent Delta analyzes the 'strategic angle' of your answers, not just the keywords. It detects confidence and impact."
                            },
                            {
                                icon: Mic,
                                title: "Voice Integration",
                                desc: "Integrated with WebSpeech API to simulate the verbal flow of a real interview. Hear the hesitation, fix the flow."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="w-20 h-20 bg-neutral-50 border border-neutral-100 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <feature.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase italic tracking-tighter">{feature.title}</h3>
                                <p className="text-neutral-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Statistics */}
            <section className="py-32 px-4 bg-neutral-900 text-white overflow-hidden relative text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter italic">NEVER GO IN <span className="text-primary not-italic">UNPREPARED.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-2">
                            <p className="text-6xl font-black tracking-tighter italic">82%</p>
                            <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Higher Confidence Score</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-6xl font-black tracking-tighter italic">140+</p>
                            <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Mock Scenarios</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-6xl font-black tracking-tighter italic text-primary underline">3.4x</p>
                            <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Offer Conversion Increase</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-black text-[#2d2d2d] uppercase tracking-[3px]">© 2026 LIBERATED BY OFFICIALPR0X</p>
                </div>
            </footer>
        </main>
    );
}
