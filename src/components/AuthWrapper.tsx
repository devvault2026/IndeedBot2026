"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, Sparkles, ArrowLeft, Zap, CheckCircle2, TrendingUp, Briefcase } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const TESTIMONIALS = [
    { name: "Sarah K.", role: "Product Manager", quote: "Landed my dream role in 2 weeks. The AI knew exactly what recruiters wanted." },
    { name: "Marcus D.", role: "Software Engineer", quote: "Went from $95k to $142k. IndeedBot found salary data I never could." },
    { name: "Priya M.", role: "UX Designer", quote: "3 interviews in my first week. The resume builder is insanely accurate." },
];

const STATS = [
    { value: "12,400+", label: "Active Members" },
    { value: "94%", label: "Interview Rate" },
    { value: "+$38k", label: "Avg. Salary Lift" },
];

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [resolution, setResolution] = useState({ w: 0, h: 0 });
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Derived State
    const isSignUp = pathname?.includes("sign-up");
    const isSignIn = !isSignUp; // In this layout context, it's a binary choice

    // Preserve extension query params when toggling sign-in/sign-up
    const queryString = searchParams.toString();
    const signInHref = queryString ? `/sign-in?${queryString}` : "/sign-in";
    const signUpHref = queryString ? `/sign-up?${queryString}` : "/sign-up";

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const handleResize = () => {
            setResolution({ w: window.innerWidth, h: window.innerHeight });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "auto";
        };
    }, []);

    // Cycle testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const isNarrow = resolution.w < 900;

    return (
        <div ref={containerRef} className="fixed inset-0 bg-background flex font-sans overflow-hidden select-none transition-colors duration-500">
            {/* === ATMOSPHERIC BACKGROUND === */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: `linear-gradient(var(--adaptive-border) 1px, transparent 1px), linear-gradient(90deg, var(--adaptive-border) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                        maskImage: "radial-gradient(ellipse 80% 60% at 30% 50%, black, transparent 100%)",
                    }}
                />
                {/* Primary orb */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full"
                />
                {/* Secondary orb */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"
                />
                {/* Noise texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.025] mix-blend-overlay" />
            </div>

            {/* === LEFT PANEL: BRANDING & SOCIAL PROOF === */}
            {!isNarrow && (
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 relative z-10 flex flex-col justify-between p-14 overflow-hidden"
                >
                    {/* Top bar: Logo + Theme */}
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-4 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border group-hover:border-primary/40 transition-all shadow-premium relative overflow-hidden"
                            >
                                <img
                                    src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                    alt="IndeedBot"
                                    className="w-7 h-7 object-contain"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-black tracking-tighter text-foreground uppercase italic leading-none">
                                    Indeed<span className="text-primary not-italic">Bot</span>
                                </h1>
                                <span className="text-[9px] font-bold tracking-[0.4em] text-neutral-500 uppercase mt-1">
                                    Career Intelligence
                                </span>
                            </div>
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-foreground hover:bg-foreground/5 transition-all"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                Home
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Center: Headline */}
                    <div className="my-auto space-y-10 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-8">
                                <Sparkles className="w-3.5 h-3.5 text-primary" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">
                                    Trusted by 12,400+ Professionals
                                </span>
                            </div>

                            <h2 className="text-[72px] xl:text-[88px] font-black leading-[0.85] tracking-tighter text-foreground uppercase italic leading-none">
                                {isSignIn ? "Your Career" : "Join the"}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500 not-italic">
                                    {isSignIn ? "Starts Here." : "Next Gen."}
                                </span>
                            </h2>

                            <p className="text-neutral-600 dark:text-neutral-500 text-lg font-medium leading-relaxed mt-10 max-w-md">
                                {isSignIn
                                    ? "Sign in to access your AI-powered career suite — resume optimization, salary intelligence, and interview prep."
                                    : "Create your elite profile and start outperforming the market with multi-agent career intelligence."}
                            </p>
                        </motion.div>

                        {/* Testimonial Carousel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-foreground/[0.03] border border-border rounded-2xl p-6 relative overflow-hidden min-h-[120px]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTestimonial}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10"
                                    >
                                        <p className="text-foreground/90 dark:text-foreground/80 text-sm italic leading-relaxed mb-4">
                                            &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <span className="text-[10px] font-black text-primary">
                                                    {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-black text-foreground uppercase tracking-tight">
                                                    {TESTIMONIALS[activeTestimonial].name}
                                                </div>
                                                <div className="text-[9px] font-bold text-neutral-500 tracking-wider">
                                                    {TESTIMONIALS[activeTestimonial].role}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex gap-2 mt-5">
                                    {TESTIMONIALS.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-500 ${i === activeTestimonial ? "w-8 bg-primary" : "w-2 bg-border"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom: Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex items-center gap-10 pt-8 border-t border-border"
                    >
                        {STATS.map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-foreground italic tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-500 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                                {i < STATS.length - 1 && (
                                    <div className="w-px h-10 bg-border ml-6" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}

            {/* === RIGHT PANEL: AUTH FORM === */}
            <motion.div
                initial={{ opacity: 0, x: isNarrow ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className={`${isNarrow ? "w-full" : "w-[520px] xl:w-[560px]"} relative z-10 flex flex-col bg-background/60 dark:bg-background/40 backdrop-blur-xl ${isNarrow ? "" : "border-l border-border"}`}
            >
                {/* Subtle right panel glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-primary/[0.04] blur-[100px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-500/[0.03] blur-[80px] rounded-full" />
                </div>

                {/* Mobile top bar */}
                {isNarrow && (
                    <div className="flex items-center justify-between p-6 relative z-10 border-b border-border/50">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border shadow-sm">
                                <img
                                    src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                    alt="IndeedBot"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <span className="text-lg font-black tracking-tighter text-foreground uppercase italic">
                                Indeed<span className="text-primary not-italic">Bot</span>
                            </span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <Link
                                href="/"
                                className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-border text-neutral-500 hover:text-foreground transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                )}

                {/* Form Container */}
                <div className="flex-1 flex flex-col items-center justify-center px-10 xl:px-14 relative z-10">
                    {/* Auth Toggle */}
                    <div className="mb-10 w-full max-w-[400px]">
                        <div className="flex bg-foreground/[0.08] dark:bg-foreground/[0.03] border border-border p-1 rounded-2xl relative">
                            {/* Sliding background pill */}
                            <motion.div
                                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-xl shadow-glow-primary"
                                initial={false}
                                animate={{ x: isSignIn ? 0 : "calc(100% + 4px)" }}
                                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                            />
                            <Link
                                href={signInHref}
                                className={`relative z-10 flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 text-center ${isSignIn ? "text-white" : "text-neutral-600 dark:text-neutral-400 hover:text-foreground"}`}
                            >
                                Sign In
                            </Link>
                            <Link
                                href={signUpHref}
                                className={`relative z-10 flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 text-center ${!isSignIn ? "text-white" : "text-neutral-600 dark:text-neutral-400 hover:text-foreground"}`}
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    <div className="w-full max-w-[400px]">
                        {children}
                    </div>
                </div>

                {/* Bottom Security Footer removed as per request */}
            </motion.div>
        </div>
    );
};
