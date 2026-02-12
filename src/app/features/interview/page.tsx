"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Play, CheckCircle2, Zap, Brain, Activity, UserCheck } from "lucide-react";
import Link from "next/link";

export default function InterviewPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-emerald-500/20 shadow-2xl"
                        >
                            <MessageSquare className="w-4 h-4 text-emerald-400 shadow-glow-emerald" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">The Interview Coach Online</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-black mb-8 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                            PRACTICE <br /><span className="text-emerald-400 not-italic">REALITY.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-2xl italic">
                            The interview is a high-stakes conversation. Our Coach puts you in a simulation
                            that mimics the actual questions and pressure of professional screening calls.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/sign-up">
                                <button className="px-10 py-5 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs">
                                    Start Mock Interview — Free
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="glass-dark p-10 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-10 pb-4 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-glow-emerald" />
                                    <span className="text-[10px] font-black text-foreground uppercase tracking-widest leading-none italic">Coach Active</span>
                                </div>
                                <Mic className="w-5 h-5 text-neutral-500" />
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 glass border border-border rounded-2xl flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 glass flex items-center justify-center shrink-0 border-emerald-500/20">
                                        <Brain className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <p className="text-xs text-neutral-400 italic font-medium leading-relaxed">
                                        "Can you describe a time when you had to manage technical debt under a strict product deadline?"
                                    </p>
                                </div>

                                <div className="flex justify-end gap-4 p-4">
                                    <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest glass px-4 py-2 rounded-2xl border border-emerald-500/20 italic">
                                        Analyzing Response...
                                    </p>
                                    <UserCheck className="w-8 h-8 text-emerald-400 shrink-0 shadow-glow-emerald" />
                                </div>

                                <div className="p-5 glass border border-emerald-500/20 bg-emerald-500/5 rounded-2xl shadow-2xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Activity className="w-4 h-4 text-emerald-400 shadow-glow-emerald" />
                                        <p className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Coach Insight</p>
                                    </div>
                                    <p className="text-sm text-foreground font-bold italic leading-relaxed">
                                        "Your answer focused too much on the 'problem'. Shift to the 20% latency reduction you achieved."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-6 bg-background relative border-y border-border">
                <div className="container mx-auto text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter italic mb-4">THE LAB.</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto font-bold italic text-lg text-foreground/40">The state-machine engine that prepares you for high-stakes screening.</p>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Play, title: "Interactive Mock", desc: "The simulator asks one question at a time and waits for your full input before moving forward, mimicking a real call." },
                            { icon: Brain, title: "Strategy Analysis", desc: "The Coach analyzes the strategic angle of your answers, not just keywords. It detects confidence and impact." },
                            { icon: Mic, title: "Tone Feedback", desc: "Integrated with neural processing to simulate the verbal flow of a real interview. Hear the hesitation, fix the flow." }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 glass rounded-[2.5rem] border border-border hover:border-emerald-500/20 transition-all shadow-xl">
                                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform border-emerald-500/20">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4">{feature.title}</h3>
                                <p className="text-neutral-500 font-bold italic leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Statistics */}
            <section className="py-48 px-6 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-5xl md:text-9xl font-black mb-16 italic uppercase tracking-tighter text-foreground leading-none">
                        NEVER GO IN <span className="text-emerald-400 not-italic">BLIND.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="space-y-4">
                            <p className="text-7xl font-black tracking-tighter italic text-foreground leading-none">82%</p>
                            <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] italic leading-none">Confidence Lift</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-7xl font-black tracking-tighter italic text-foreground leading-none">140+</p>
                            <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] italic leading-none">Mock Scenarios</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-7xl font-black tracking-tighter italic text-emerald-400 leading-none">3.4x</p>
                            <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] italic leading-none">Offer Conversion</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
