"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Chrome, Play, ShieldCheck, Zap, Sparkles, TrendingUp, Briefcase, Terminal, Search, UserCheck, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const AI_STEPS = [
    "Finding the best jobs...",
    "Checking salary info...",
    "Polishing your details...",
    "Prepping your application...",
    "Ready to send!"
];

export const Hero = () => {
    const containerRef = useRef(null);
    const [step, setStep] = useState(0);

    // 3D Tilt Effect State
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % AI_STEPS.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen lg:h-screen lg:max-h-[850px] flex items-center justify-center pt-28 pb-12 lg:pt-20 lg:pb-4 overflow-hidden bg-background selection:bg-primary/30">
            {/* --- ULTRA-PREMIUM ATMOSPHERE --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Spotlight */}
                <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-primary/20 blur-[180px] rounded-full animate-pulse opacity-40 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse opacity-30" />

                {/* Tactical Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            y: ["-10%", "110%"],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
                    />
                ))}

                {/* Dynamic Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:60px_60px] [mask_image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LEFT: DOMINANT TYPOGRAPHY --- */}
                    <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2.5 px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-xl lg:rounded-2xl border border-border bg-background/50 backdrop-blur-xl mb-8 lg:mb-12 shadow-2xl group hover:border-primary/30 transition-all cursor-default ring-1 ring-white/5"
                        >
                            <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-foreground/70 group-hover:text-foreground transition-colors italic">
                                Multi-Agent Protocol Active
                            </span>
                            <div className="w-px h-3 lg:h-4 bg-border/50 mx-0.5" />
                            <span className="text-[9px] lg:text-[10px] font-black text-primary tracking-widest uppercase">V1.0.0</span>
                        </motion.div>

                        {/* MASSIVE HEADLINE */}
                        <div className="relative">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 leading-[0.85] lg:leading-[0.8] uppercase italic"
                            >
                                <span className="block overflow-hidden pb-2">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                        className="block"
                                    >
                                        Win the
                                    </motion.span>
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-indigo-600 relative block overflow-hidden pb-4">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                        className="block not-italic"
                                    >
                                        Job.
                                    </motion.span>
                                    <motion.svg
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.4 }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="absolute w-full h-4 -bottom-1 left-0 text-primary"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </motion.svg>
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base md:text-xl text-neutral-500 font-medium leading-[1.4] lg:leading-[1.3] mb-8 lg:mb-10 max-w-xl italic"
                        >
                            Stop sending resumes into the void. IndeedBot is your
                            <span className="text-foreground"> personal AI strike team </span> that hunts roles, optimizes your resume, and guarantees you land the interview.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="flex flex-col sm:flex-row items-center gap-6 mb-8 lg:mb-10"
                        >
                            <div className="flex -space-x-3">
                                {[
                                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                ].map((url, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ y: -5, zIndex: 50, scale: 1.1 }}
                                        transition={{
                                            opacity: { delay: 0.4 + i * 0.1 },
                                            x: { delay: 0.4 + i * 0.1 },
                                            y: { type: "spring", stiffness: 300 }
                                        }}
                                        className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[3px] border-background overflow-hidden shadow-2xl cursor-pointer group/pfp"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/pfp:opacity-100 transition-opacity" />
                                        <img src={url} alt={`User ${i}`} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 right-0 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-green-500 border-2 border-background rounded-full" />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1, type: "spring" }}
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[3px] border-background bg-primary text-white flex items-center justify-center shadow-2xl z-20"
                                >
                                    <span className="text-[8px] lg:text-[9px] font-black tracking-tighter">+12k</span>
                                </motion.div>
                            </div>

                            <div className="flex flex-col items-center sm:items-start gap-1 pt-1">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-black text-foreground italic">4.9/5 User Rating</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500">
                                        Network Verified
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch gap-4 mb-8"
                        >
                            <Link href="/sign-up" className="group">
                                <button className="relative w-full sm:w-auto px-10 py-5 bg-foreground text-background font-black text-xs rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl hover:shadow-glow-primary overflow-hidden uppercase tracking-widest group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <Chrome className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    Add to Chrome — Free
                                </button>
                            </Link>

                            <button
                                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 glass text-foreground font-black text-[10px] rounded-2xl border border-border hover:bg-foreground/5 transition-all flex items-center justify-center gap-3 uppercase tracking-widest group cursor-pointer relative"
                            >
                                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary rounded-full flex items-center gap-1 shadow-glow-primary animate-bounce z-10">
                                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                    <span className="text-[8px] font-black text-white px-1">LIVE DEMO</span>
                                </div>
                                <Play className="w-3.5 h-3.5 fill-foreground group-hover:text-primary group-hover:fill-primary transition-colors" />
                                Interactive Walkthrough
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col items-center lg:items-start gap-6"
                        >
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500 italic text-center lg:text-left">Trusted by candidates at</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 grayscale opacity-70">
                                {["Google", "Meta", "Amazon", "OpenAI", "Netflix"].map((brand) => (
                                    <span key={brand} className="text-xs lg:text-sm font-black tracking-tighter text-foreground/80 lowercase italic">
                                        {brand}<span className="text-primary">.</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {[
                                { icon: ShieldCheck, text: "Data Encrypted" },
                                { icon: CheckCircle2, text: "Chrome Verified" },
                                { icon: UserCheck, text: "4.9/5 Rating" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <item.icon className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: 3D INTERACTIVE DASHBOARD --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
                        className="relative hidden lg:block h-[500px] w-full"
                        onMouseMove={handleMouseMove}
                    >
                        <motion.div
                            style={{
                                rotateX: mouseY,
                                rotateY: mouseX,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-full h-full flex items-center justify-center perspective-[2000px] scale-90"
                        >
                            {/* Main Floating Card */}
                            <div className="relative w-[500px] bg-background/80 backdrop-blur-3xl rounded-[3rem] border border-border shadow-premium overflow-hidden z-20 group ring-1 ring-border/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                {/* Inner Content */}
                                <div className="p-10 relative z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shadow-glow-primary/10">
                                                <Zap className="w-6 h-6 text-primary animate-pulse" />
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground flex items-center gap-2">
                                                    AI ANALYTICS ENGINE
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                                </div>
                                                <div className="text-[9px] text-neutral-500 font-mono tracking-tight mt-0.5">V7_NEURAL_PROTOCOL</div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[8px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                            SYNC_ACTIVE
                                        </div>
                                    </div>

                                    {/* Circular Progress */}
                                    <div className="flex justify-center mb-12 relative">
                                        <div className="relative w-48 h-48 flex items-center justify-center">
                                            {/* Glow Background */}
                                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-50" />

                                            <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                                                <defs>
                                                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#3b82f6" />
                                                        <stop offset="100%" stopColor="#1d4ed8" />
                                                    </linearGradient>
                                                </defs>
                                                {/* Background Circle */}
                                                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-neutral-200 dark:text-neutral-800" />
                                                {/* Progress Circle */}
                                                <motion.circle
                                                    initial={{ strokeDasharray: "502", strokeDashoffset: "502" }}
                                                    animate={{ strokeDashoffset: "30" }}
                                                    transition={{ duration: 2.5, delay: 1, ease: "circOut" }}
                                                    cx="96" cy="96" r="80"
                                                    stroke="url(#circleGradient)" strokeWidth="12"
                                                    fill="transparent"
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1.5 }}
                                                    className="flex flex-col"
                                                >
                                                    <span className="text-6xl font-black text-foreground italic tracking-tighter leading-none mb-1">
                                                        94%
                                                    </span>
                                                    <span className="text-[10px] uppercase font-black text-neutral-500 tracking-[0.3em] italic">Match Rate</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan Feed */}
                                    <div className="bg-neutral-100 dark:bg-neutral-900/80 rounded-2xl border border-border/50 p-6 relative overflow-hidden h-[160px] shadow-inner">
                                        <div className="space-y-3 relative z-10">
                                            {AI_STEPS.map((s, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        opacity: i === step ? 1 : 0.3,
                                                        x: i === step ? 8 : 0,
                                                        scale: i === step ? 1 : 0.95
                                                    }}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === step ? 'bg-primary shadow-[0_0_10px_rgba(37,87,167,0.8)]' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
                                                    <span className={`text-[10px] uppercase tracking-widest font-mono ${i === step ? 'text-foreground font-black' : 'text-neutral-500 dark:text-neutral-600'}`}>
                                                        {i === step ? ">> " : ""}{s}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        {/* Scanner Line */}
                                        <motion.div
                                            animate={{ top: ["-20%", "120%"] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-primary/10 to-transparent blur-xl pointer-events-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements (Parallax) */}
                            <motion.div
                                style={{ x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(mouseY, [-0.5, 0.5], [-40, 40]), z: 100 }}
                                className="absolute -right-20 top-12 bg-background/95 p-5 lg:p-6 rounded-[2rem] border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl z-30 ring-1 ring-border/50 group/float"
                            >
                                <div className="absolute inset-0 bg-primary/5 opacity-40 rounded-[2rem] group-hover/float:bg-primary/10 transition-colors" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-purple-500 border-purple-500/20 shadow-sm">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500">TARGET ROLE</span>
                                    </div>
                                    <div className="text-xl lg:text-2xl font-black text-foreground italic uppercase tracking-tighter">Product Lead</div>
                                    <div className="mt-4 flex gap-1.5">
                                        {[1, 2, 3].map(i => <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= 2 ? 'w-6 bg-primary' : 'w-4 bg-primary/20'}`} />)}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ x: useTransform(mouseX, [-0.5, 0.5], [40, -40]), y: useTransform(mouseY, [-0.5, 0.5], [40, -40]), z: 140 }}
                                className="absolute -left-16 bottom-12 bg-background/95 p-6 lg:p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl z-40 ring-1 ring-emerald-500/10 group/stat"
                            >
                                <div className="absolute inset-0 bg-emerald-500/5 opacity-40 rounded-[2.5rem]" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-emerald-500 border-emerald-500/20 shadow-glow-emerald/10">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 italic">Financial Uplift</span>
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-black text-emerald-500 italic tracking-tighter">+$12,400</div>
                                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-400 mt-3">Annual Projection</div>
                                </div>
                            </motion.div>

                            {/* Additional Protocol Node */}
                            <motion.div
                                style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [-80, 80]), z: 30 }}
                                className="absolute left-1/2 -top-12 -translate-x-1/2 bg-neutral-900 border border-white/5 px-6 py-3 rounded-full shadow-2xl z-10 opacity-40 group-hover:opacity-100 transition-opacity"
                            >
                                <div className="flex items-center gap-3">
                                    <Terminal className="w-3 h-3 text-primary" />
                                    <span className="text-[8px] font-mono text-neutral-400 font-bold tracking-widest">PROTOCOL_V4: HANDSHAKE_ENCRYPTED</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
