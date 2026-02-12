"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Target, CheckCircle2, FileText, Brain, ArrowRight, Activity, Terminal, Sparkles, Layout, Database, Shield, Search } from "lucide-react";
import { useRef } from "react";

const FeatureCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative glass-dark rounded-[3rem] border border-border p-2 shadow-premium group overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative h-full w-full rounded-[2.8rem] bg-background/80 backdrop-blur-3xl p-8 md:p-12 overflow-hidden">
            {children}
        </div>
    </div>
);

export const Features = () => {
    return (
        <section id="features" className="py-32 md:py-64 px-6 relative overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-32 md:mb-64">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 shadow-2xl"
                    >
                        <Zap className="w-4 h-4 text-primary shadow-glow-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50">Ready to Win?</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-[12rem] font-black italic mb-10 text-foreground uppercase tracking-tighter leading-[0.8]">
                        GET <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">HIRED.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-400 font-medium italic">
                        The help you need to land your next role. Designed to help you stand out
                        and get noticed by hiring managers instantly.
                    </p>
                </div>

                <div className="space-y-32 md:space-y-64">

                    {/* FEATURE 1: INTEL SCANNER */}
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-[2rem] bg-primary/10 border border-primary/20">
                                <Target className="w-5 h-5 text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Smart Search</span>
                            </div>
                            <h3 className="text-4xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter leading-none">
                                Scan the <br />
                                <span className="text-primary not-italic">Job Insights.</span>
                            </h3>
                            <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed italic">
                                Real-time info on every listing. Check salary ranges,
                                avoid "ghost" postings, and see exactly how your profile
                                matches what the hiring manager is looking for.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: <Database className="w-4 h-4" />, text: "Salary Floor Verification" },
                                    { icon: <Shield className="w-4 h-4" />, text: "Ghost Post Filter" },
                                    { icon: <Activity className="w-4 h-4" />, text: "ATS Scoring" },
                                    { icon: <Search className="w-4 h-4" />, text: "Keyword Insight" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                                        <div className="text-primary">{item.icon}</div>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <FeatureCard className="aspect-[4/3] group/mockup">
                            <div className="h-full flex flex-col gap-6 relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="text-[10px] font-black text-neutral-500 uppercase tracking-widest italic">Live Analysis</div>
                                </div>
                                <div className="flex-1 bg-background rounded-2xl border border-border p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-scan z-10" />
                                    <div className="space-y-6">
                                        <div className="flex items-start justify-between border-b border-border pb-4">
                                            <div>
                                                <div className="h-4 w-32 bg-foreground/10 rounded-full mb-2" />
                                                <div className="h-2 w-20 bg-foreground/5 rounded-full" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xl font-black text-foreground italic">98.4%</div>
                                                <div className="text-[8px] font-black text-primary uppercase">Alignment</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { label: "Technical Proficiency", score: 95 },
                                                { label: "Strategic Leadership", score: 88 },
                                                { label: "Salary Alignment", score: 100 }
                                            ].map((s, i) => (
                                                <div key={i} className="space-y-1.5">
                                                    <div className="flex justify-between text-[8px] font-black text-neutral-500 uppercase tracking-widest">
                                                        <span>{s.label}</span>
                                                        <span>{s.score}%</span>
                                                    </div>
                                                    <div className="h-1 bg-foreground/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${s.score}%` }}
                                                            transition={{ duration: 1, delay: i * 0.1 }}
                                                            className="h-full bg-primary shadow-glow-primary"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Brain className="w-3 h-3 text-primary" />
                                                <span className="text-[8px] font-black text-primary uppercase tracking-widest">Job Bot Suggestion</span>
                                            </div>
                                            <p className="text-[10px] text-neutral-400 leading-relaxed italic">
                                                "This job post prioritizes 'Go-to-Market' strategy over 'Product Ops'. Adjust your cover letter highlight to focus on Q3 revenue impact."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* FEATURE 2: RESUME REWRITING */}
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center lg:flex-row-reverse">
                        <FeatureCard className="aspect-[4/3] lg:order-2">
                            <div className="h-full flex flex-col gap-6">
                                <div className="flex items-center justify-between border-b border-border pb-4">
                                    <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest italic">Better Wording</div>
                                    <Terminal className="w-4 h-4 text-purple-400" />
                                </div>
                                <div className="flex-1 space-y-6">
                                    <div className="p-4 rounded-2xl bg-background border border-border opacity-40">
                                        <div className="text-[8px] font-black text-neutral-500 uppercase tracking-widest mb-2">Original Context</div>
                                        <p className="text-[10px] text-neutral-400 italic line-through decoration-red-500/50">
                                            "Managed a team of 5 people and worked on various React projects for clients."
                                        </p>
                                    </div>
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 shadow-2xl relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
                                        <div className="text-[8px] font-black text-purple-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Sparkles className="w-3 h-3 fill-current" />
                                            AI-Optimized Result
                                        </div>
                                        <p className="text-[11px] text-foreground font-bold leading-relaxed">
                                            "Orchestrated a cross-functional squad of 5 engineers to deliver high-scale <span className="text-purple-400">Micro-Frontends</span>, resulting in a 35% increase in <span className="text-purple-400">Deployment Velocity</span> across enterprise cohorts."
                                        </p>
                                    </motion.div>
                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <div className="h-10 bg-purple-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center">
                                            <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest">Apply keywords</span>
                                        </div>
                                        <div className="h-10 bg-background rounded-xl border border-border flex items-center justify-center">
                                            <span className="text-[9px] font-black text-foreground/50 uppercase tracking-widest italic tracking-[0.2em]">One-click export</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>

                        <div className="space-y-10 lg:order-1">
                            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-[2rem] bg-purple-500/10 border border-purple-500/20">
                                <FileText className="w-5 h-5 text-purple-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">The Writer</span>
                            </div>
                            <h3 className="text-4xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter leading-none">
                                Rewrite for <br />
                                <span className="text-purple-400 not-italic">The Results.</span>
                            </h3>
                            <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed italic">
                                Don't let a filter reject your hard work. Our engine updates
                                your career history in real-time, using the right words
                                to pass even the toughest job board filters.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Real-time keyword weighting",
                                    "Enterprise vocabulary injection",
                                    "ATS-ready formatting (PDF/DocX)",
                                    "Company-specific tone matching"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-foreground font-bold italic tracking-tight">
                                        <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FEATURE 3: INTERVIEW HUB */}
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-[2rem] bg-green-500/10 border border-green-500/20">
                                <Activity className="w-5 h-5 text-green-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400">Mock Interviews</span>
                            </div>
                            <h3 className="text-4xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter leading-none">
                                Practice with <br />
                                <span className="text-green-400 not-italic">Live Feedback.</span>
                            </h3>
                            <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed italic">
                                Walk into every meeting with total confidence. IndeedBot acts
                                as your personal sparring partner, helping you practice
                                difficult questions and building your confidence.
                            </p>
                            <button className="px-10 py-5 glass text-foreground font-black text-sm rounded-2xl flex items-center gap-4 uppercase hover:bg-foreground/5 transition-all w-fit group">
                                Trial the Simulation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <FeatureCard className="aspect-[4/3]">
                            <div className="h-full flex flex-col gap-8">
                                <div className="flex items-center justify-between border-b border-border pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Interview Sparring</span>
                                    </div>
                                    <Layout className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex-1 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center shrink-0">
                                            <Terminal className="w-5 h-5 text-neutral-500" />
                                        </div>
                                        <div className="p-5 rounded-3xl rounded-tl-none bg-background border border-border flex-1">
                                            <p className="text-xs text-neutral-400 italic">"Can you explain a time you failed to meet a deadline and how you rectified the situation?"</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-end">
                                        <div className="p-5 rounded-3xl rounded-tr-none bg-green-500/5 border border-green-500/20 flex-1 max-w-[80%]">
                                            <p className="text-xs text-foreground font-bold italic">"I immediately addressed the bottleneck with Stakeholders and recalibrated the Q4 roadmap..."</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        </div>
                                    </div>
                                    <div className="mt-8 bg-black/40 p-4 rounded-2xl border border-border">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[10px] font-black text-white uppercase">Confidence Score</span>
                                            <span className="text-[10px] font-black text-green-400">EXCELLENT</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(20)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: [10, Math.random() * 20 + 10, 10] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                                                    className={`w-1 rounded-full ${i < 15 ? 'bg-green-500' : 'bg-white/10'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>
                </div>

                {/* FINAL SECTION CTA */}
                <div className="mt-64 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-block"
                    >
                        <div className="absolute -inset-4 bg-primary blur-2xl opacity-20" />
                        <button className="relative px-16 py-8 bg-foreground text-background font-black text-2xl md:text-3xl rounded-3xl shadow-2xl flex items-center gap-6 uppercase transition-all">
                            GET STARTED FOR FREE <ArrowRight className="w-8 h-8" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
