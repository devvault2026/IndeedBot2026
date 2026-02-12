"use client";

import { motion } from "framer-motion";
import { Lock, Power, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [scale, setScale] = useState(1);
    const [resolution, setResolution] = useState({ w: 0, h: 0 });
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleResize = () => {
            const vh = window.innerHeight;
            const vw = window.innerWidth;
            setResolution({ w: vw, h: vh });
            const targetH = 900;
            const targetW = vw < 1000 ? 550 : 1400;
            const scaleH = vh / targetH;
            const scaleW = vw / targetW;
            const newScale = Math.min(scaleH, scaleW, 1);
            setScale(newScale < 0.4 ? 0.4 : newScale);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const isNarrow = resolution.w < 1000;

    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center font-sans overflow-hidden select-none transition-colors duration-500">
            {/* --- BACKGROUND EFFECTS --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
                    style={{
                        backgroundImage: `linear-gradient(var(--adaptive-border) 1px, transparent 1px), linear-gradient(90deg, var(--adaptive-border) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
                    }}
                />
            </div>

            {/* --- MAIN CONTAINER --- */}
            <motion.div
                style={{ scale, transformOrigin: 'center center' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${isNarrow ? 'w-[550px]' : 'w-[1400px]'} h-[900px] bg-background rounded-[2.5rem] shadow-premium flex relative z-10 border border-border overflow-hidden transition-all duration-500`}
            >
                <HUDOverlay resolution={resolution} isNarrow={isNarrow} />

                {/* --- LEFT SECTOR: BRANDING --- */}
                {!isNarrow && (
                    <div className="flex-1 p-[60px] flex flex-col justify-between relative overflow-hidden group/branding border-r border-border">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />

                        <div className="relative z-10 h-full flex flex-col items-start text-left">
                            <div className="flex items-center justify-between w-full mb-12">
                                <Link href="/" className="flex items-center gap-5 group/logo">
                                    <div className="w-14 h-14 bg-background dark:bg-black rounded-2xl flex items-center justify-center border border-border group-hover/logo:border-primary/50 transition-all shadow-premium relative overflow-hidden text-foreground italic font-black">
                                        <img src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png" alt="Logo" className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-2xl font-black tracking-tighter text-foreground uppercase italic leading-none">
                                            Indeed<span className="text-primary not-italic">Bot</span>
                                        </h1>
                                        <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-500 uppercase mt-2">Member Portal</span>
                                    </div>
                                </Link>

                                <div className="flex items-center gap-4">
                                    <ThemeToggle />
                                </div>
                            </div>

                            <div className="space-y-6 my-auto">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-xl">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Secure Access Link</span>
                                </div>

                                <h2 className="text-[100px] font-black leading-[0.85] tracking-tighter text-foreground uppercase italic drop-shadow-sm">
                                    READY TO <br />
                                    <span className="text-primary not-italic">WIN?</span>
                                </h2>

                                <p className="text-neutral-500 text-xl font-medium max-w-lg leading-relaxed italic border-l-4 border-primary pl-8 mt-12">
                                    Join the elite professionals using AI to navigate the job market with total precision.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 w-full pt-10 border-t border-border mt-auto">
                                <CapabilityCard title="Global Access" desc="Use anywhere, anytime" />
                                <CapabilityCard title="Top Priority" desc="AI-first career tools" />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- RIGHT SECTOR: FORMS --- */}
                <div className={`${isNarrow ? 'w-full' : 'w-[550px]'} bg-background/50 flex flex-col items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />

                    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 relative z-10">
                        {/* THE TOGGLE */}
                        <div className="mb-12 flex bg-background border border-border p-1.5 rounded-2xl shadow-xl relative z-20">
                            <Link
                                href="/sign-in"
                                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 min-w-[140px] text-center ${pathname.includes('sign-in') ? 'bg-primary text-white shadow-glow-primary' : 'text-neutral-500 hover:text-foreground'}`}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/sign-up"
                                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 min-w-[140px] text-center ${pathname.includes('sign-up') ? 'bg-primary text-white shadow-glow-primary' : 'text-neutral-500 hover:text-foreground'}`}
                            >
                                Register
                            </Link>
                        </div>

                        {/* FORM AREA */}
                        <div className="w-full max-w-[420px] flex flex-col items-center justify-center transform-gpu">
                            {children}
                        </div>
                    </div>

                    <div className="w-full p-10 border-t border-border flex flex-col items-center gap-3 bg-foreground/[0.02]">
                        <div className="flex items-center gap-3 px-5 py-2 glass rounded-full opacity-60">
                            <Lock className="w-3 h-3 text-primary" />
                            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-foreground">Secure Connection</span>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest">© 2026 INDEEDBOT SYSTEMS</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const HUDOverlay = ({ resolution, isNarrow }: { resolution: { w: number, h: number }, isNarrow: boolean }) => (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden opacity-30">
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-border rounded-tl-xl" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-border rounded-tr-xl" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-border rounded-bl-xl" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-border rounded-br-xl" />
    </div>
);

const CapabilityCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-foreground/[0.01]">
        <span className="text-[12px] font-black text-foreground uppercase tracking-tighter">{title}</span>
        <span className="text-[10px] font-bold text-neutral-500 italic">{desc}</span>
    </div>
);
