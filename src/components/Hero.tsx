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
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-background selection:bg-primary/30">
            {/* --- ULTRA-PREMIUM ATMOSPHERE --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Spotlight */}
                <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-primary/20 blur-[180px] rounded-full animate-pulse opacity-40 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse opacity-30" />

                {/* Dynamic Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:60px_60px] [mask_image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LEFT: DOMINANT TYPOGRAPHY --- */}
                    <div className="relative z-20">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-md mb-10 shadow-lg group hover:border-primary/30 transition-colors cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 group-hover:text-foreground transition-colors">
                                System Operational
                            </span>
                            <div className="w-px h-3 bg-border" />
                            <span className="text-[10px] font-bold text-primary">V1.0.0 RELEASE</span>
                        </motion.div>

                        {/* MASSIVE HEADLINE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-8 leading-[0.85] uppercase italic"
                        >
                            Win the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-indigo-600 relative">
                                Job.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed mb-12 max-w-xl"
                        >
                            Stop applying into the void. Use the AI agent that rewrites your resume, finds hidden salaries, and fast-tracks you to the interview.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="flex items-center gap-8 mb-16"
                        >
                            <div className="flex -space-x-4">
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
                                        className="relative w-14 h-14 rounded-full border-4 border-background overflow-hidden shadow-2xl cursor-pointer group/pfp"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/pfp:opacity-100 transition-opacity" />
                                        <img src={url} alt={`User ${i}`} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1, type: "spring" }}
                                    className="w-14 h-14 rounded-full border-4 border-background bg-primary text-white flex items-center justify-center shadow-2xl z-20"
                                >
                                    <span className="text-[10px] font-black tracking-tighter">+12k</span>
                                </motion.div>
                            </div>

                            <div className="flex flex-col gap-1.5 pt-2">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-black text-foreground italic">4.9/5 User Rating</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
                                        Network Verified
                                    </span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch gap-6"
                        >
                            <Link href="/sign-up" className="group">
                                <button className="relative w-full sm:w-auto px-12 py-7 bg-foreground text-background font-black text-sm rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 shadow-2xl hover:shadow-glow-primary overflow-hidden uppercase tracking-widest">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <Chrome className="w-5 h-5" />
                                    Add to Chrome — Free
                                </button>
                            </Link>

                            <button
                                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-12 py-7 glass text-foreground font-black text-xs rounded-2xl border border-border hover:bg-foreground/5 transition-all flex items-center justify-center gap-3 uppercase tracking-widest group cursor-pointer relative"
                            >
                                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary rounded-full flex items-center gap-1 shadow-glow-primary animate-bounce">
                                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                    <span className="text-[8px] font-black text-white px-1">LIVE</span>
                                </div>
                                <Play className="w-4 h-4 fill-foreground group-hover:text-primary group-hover:fill-primary transition-colors" />
                                View Demo
                            </button>
                        </motion.div>

                        <div className="mt-16 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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
                        className="relative hidden lg:block h-[700px] w-full"
                        onMouseMove={handleMouseMove}
                    >
                        <motion.div
                            style={{
                                rotateX: mouseY,
                                rotateY: mouseX,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-full h-full flex items-center justify-center perspective-[2000px]"
                        >
                            {/* Main Floating Card */}
                            <div className="relative w-[500px] bg-background/80 backdrop-blur-3xl rounded-[2.5rem] border border-border shadow-premium overflow-hidden z-20 group">

                                {/* Inner Content */}
                                <div className="p-8 relative z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-black uppercase text-foreground">Job Search Assistant</div>
                                                <div className="text-[10px] text-neutral-500 font-mono">Finding your next role...</div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] font-black text-green-500 uppercase tracking-wider animate-pulse">
                                            Online
                                        </div>
                                    </div>

                                    {/* Circular Progress */}
                                    <div className="flex justify-center mb-12 relative">
                                        <div className="relative w-48 h-48 flex items-center justify-center">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-border" />
                                                <motion.circle
                                                    initial={{ strokeDasharray: "553", strokeDashoffset: "553" }}
                                                    animate={{ strokeDashoffset: "110" }}
                                                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                                                    cx="96" cy="96" r="88"
                                                    stroke="currentColor" strokeWidth="12"
                                                    fill="transparent"
                                                    className="text-primary drop-shadow-[0_0_15px_rgba(37,87,167,0.5)]"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                <span className="text-5xl font-black text-foreground italic tracking-tighter">94%</span>
                                                <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mt-1">Match Rate</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan Feed */}
                                    <div className="bg-neutral-900/50 rounded-2xl border border-white/5 p-5 relative overflow-hidden h-[160px]">
                                        <div className="space-y-3 relative z-10">
                                            {AI_STEPS.map((s, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: i === step ? 1 : 0.3 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full ${i === step ? 'bg-primary shadow-[0_0_10px_#2557a7]' : 'bg-neutral-700'}`} />
                                                    <span className={`text-[11px] font-mono ${i === step ? 'text-white font-bold' : 'text-neutral-500'}`}>{s}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        {/* Scanner Line */}
                                        <motion.div
                                            animate={{ top: ["0%", "100%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] pointer-events-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements (Parallax) */}
                            <motion.div
                                style={{ x: useTransform(mouseX, [-0.5, 0.5], [-30, 30]), y: useTransform(mouseY, [-0.5, 0.5], [-30, 30]), z: 50 }}
                                className="absolute -right-10 top-20 bg-background/90 p-5 rounded-3xl border border-border shadow-2xl backdrop-blur-md"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Briefcase className="w-4 h-4 text-purple-500" />
                                    <span className="text-[10px] font-black uppercase text-foreground">Target Role</span>
                                </div>
                                <div className="text-lg font-black text-foreground italic">Product Lead</div>
                            </motion.div>

                            <motion.div
                                style={{ x: useTransform(mouseX, [-0.5, 0.5], [30, -30]), y: useTransform(mouseY, [-0.5, 0.5], [30, -30]), z: 100 }}
                                className="absolute -left-10 bottom-32 bg-background/90 p-5 rounded-3xl border border-border shadow-2xl backdrop-blur-md"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                    <span className="text-[10px] font-black uppercase text-foreground">Est. Pay Increase</span>
                                </div>
                                <div className="text-xl font-black text-green-500 italic">+$12,000</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
