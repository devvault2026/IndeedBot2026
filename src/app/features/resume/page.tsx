"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { FileText, Edit, CheckCircle2, Zap, Download, Layout, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-purple-500/20 shadow-2xl"
                        >
                            <FileText className="w-4 h-4 text-purple-400 shadow-glow-purple" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">The Resume Builder Online</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-black mb-8 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                            PITCH <br /><span className="text-purple-400 not-italic">PERFECTLY.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-2xl italic">
                            Stop guessing what hiring managers want. The Resume Builder creates high-converting,
                            tailored resumes that beat the filters and land you the interview.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/sign-up">
                                <button className="px-10 py-5 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs">
                                    Build Your Resume — Free
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="glass-dark p-4 rounded-[3rem] border border-border shadow-premium relative overflow-hidden group">
                            <div className="glass p-10 min-h-[500px] border border-border rounded-[2.5rem] relative bg-black/40">
                                <div className="border-b-2 border-border pb-6 mb-8">
                                    <div className="h-8 w-48 bg-white/10 rounded mb-2" />
                                    <div className="h-3 w-32 bg-white/5 rounded" />
                                </div>
                                <div className="space-y-6">
                                    <div className="h-4 w-full bg-white/5 rounded" />
                                    <div className="h-4 w-5/6 bg-white/5 rounded opacity-50" />
                                    <div className="h-4 w-4/6 bg-white/5 rounded" />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        className="p-4 glass border-l-4 border-purple-500 rounded-r-lg italic text-[10px] text-neutral-400 font-medium"
                                    >
                                        "I updated this sentence to highlight your leadership skills, increasing your match score for this role by 25%."
                                    </motion.div>
                                </div>

                                {/* Floating Tooltips */}
                                <div className="absolute top-1/4 right-8 glass border-emerald-500/20 text-emerald-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                                    Recruiter Approved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-6 relative border-y border-border">
                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter italic mb-4">THE SUITE.</h2>
                        <p className="max-w-2xl mx-auto font-bold italic text-lg text-neutral-500">Tools engineered to transform your experience into an undeniable value proposition.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { icon: LayoutGrid, title: "Side-by-Side Editor", desc: "See your resume and the job desc together. Our AI highlights exactly where you need to improve." },
                            { icon: Zap, title: "Smart Rewrites", desc: "Click any sentence and get instant variations that match the job's tone and requirements." },
                            { icon: Layout, title: "Perfect Formatting", desc: "Exports in clean, professional formats that are guaranteed to pass through any modern job site." },
                            { icon: CheckCircle2, title: "Hiring Audit", desc: "Get a score before you apply. See exactly how a real hiring manager would perceive your background." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-8 group p-10 glass rounded-[2.5rem] border border-border hover:border-purple-500/20 transition-all shadow-xl">
                                <div className="shrink-0 w-20 h-20 glass rounded-[1.5rem] flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform border-purple-500/20">
                                    <feature.icon className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-foreground uppercase mb-4 italic tracking-tighter">{feature.title}</h3>
                                    <p className="text-neutral-500 font-bold italic leading-relaxed text-lg">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Tactical CTA */}
            <section className="py-48 px-6 relative flex flex-col items-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

                <h2 className="text-6xl md:text-9xl font-black italic mb-12 text-foreground uppercase tracking-tighter text-center leading-[0.8] relative z-10">
                    YOUR RESUME IS<br />
                    <span className="text-purple-400 not-italic">YOUR PRODUCT.</span>
                </h2>
                <Link href="/sign-up">
                    <button className="px-14 py-7 bg-foreground text-background font-black text-2xl rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] relative z-10">
                        Start Building — Free
                    </button>
                </Link>
            </section>


        </main>
    );
}
