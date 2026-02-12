"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, FileText, Globe, MessageSquare, Menu, X, ArrowRight, Chrome, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export const Navbar = () => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const clerkTheme = mounted && theme === "light" ? undefined : dark;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-3xl border-b border-border' : 'bg-transparent'}`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center relative z-10 border-border group-hover:border-primary/50 transition-colors">
                                <img
                                    src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                    alt="IndeedBot"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                        </div>
                        <span className="text-xl font-black tracking-tighter text-foreground uppercase italic group-hover:text-primary transition-colors">
                            Indeed<span className="text-primary not-italic">Bot</span>
                        </span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-10 text-neutral-400 font-black text-[10px] uppercase tracking-[0.2em]">
                        <div
                            className="relative py-2"
                            onMouseEnter={() => setIsFeaturesOpen(true)}
                            onMouseLeave={() => setIsFeaturesOpen(false)}
                        >
                            <button className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer group">
                                Meet the Team <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180 text-primary' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isFeaturesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        className="absolute top-full -left-8 w-[480px] pt-4 z-[100]"
                                    >
                                        <div className="bg-background/95 backdrop-blur-3xl border border-border rounded-[2.5rem] p-6 shadow-premium relative overflow-hidden ring-1 ring-border">
                                            {/* Decorative background element */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

                                            <div className="grid gap-2 relative z-10">
                                                <CapabilityLink
                                                    href="/features/intelligence"
                                                    icon={<Briefcase className="w-5 h-5" />}
                                                    title="The Strategist"
                                                    desc="Analyzes complex market data to map your path to victory."
                                                    color="text-primary"
                                                />
                                                <CapabilityLink
                                                    href="/features/resume"
                                                    icon={<FileText className="w-5 h-5" />}
                                                    title="The Resume Builder"
                                                    desc="Hyper-aligns your experience for every target role."
                                                    color="text-purple-400"
                                                />
                                                <CapabilityLink
                                                    href="/features/scout"
                                                    icon={<Globe className="w-5 h-5" />}
                                                    title="The Company Scout"
                                                    desc="Uncovers hidden internal intel before you click apply."
                                                    color="text-orange-400"
                                                />
                                                <CapabilityLink
                                                    href="/features/interview"
                                                    icon={<MessageSquare className="w-5 h-5" />}
                                                    title="The Interview Coach"
                                                    desc="Simulates high-stakes rounds with personalized AI feedback."
                                                    color="text-emerald-400"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                        <Link href="/docs" className="hover:text-foreground transition-colors">How it Works</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <div className="flex items-center gap-6">
                        <SignedOut>
                            <Link href="/sign-in">
                                <button className="hidden md:flex items-center gap-2 text-[10px] font-black text-neutral-500 hover:text-foreground transition-colors uppercase tracking-[0.2em] group">
                                    <LogIn className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
                                    Login
                                </button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    baseTheme: clerkTheme,
                                    elements: {
                                        userButtonAvatarBox: "w-8 h-8 rounded-xl ring-1 ring-border shadow-glow-primary",
                                        userButtonTrigger: "hover:scale-105 transition-transform outline-none focus:outline-none",
                                        userButtonPopoverCard: "bg-background/95 backdrop-blur-3xl border border-border rounded-[2.5rem] shadow-premium ring-1 ring-border overflow-hidden",
                                        userButtonPopoverActions: "p-2",
                                        userButtonPopoverActionButton: "hover:bg-primary/10 rounded-xl transition-all group py-3 px-4",
                                        userButtonPopoverActionButtonText: "text-foreground font-black uppercase tracking-[0.1em] text-[10px]",
                                        userButtonPopoverActionButtonIcon: "text-primary group-hover:scale-110 transition-transform",
                                        userPreviewMainIdentifier: "text-foreground font-black italic uppercase tracking-tighter text-sm",
                                        userPreviewSecondaryIdentifier: "text-neutral-500 font-bold text-[10px] tracking-widest",
                                        userButtonPopoverFooter: "hidden",
                                        userButtonPopoverFooterAction: "hidden",
                                        userPreviewAvatarBox: "rounded-xl border border-border ring-1 ring-primary/20",
                                        scrollBox: "rounded-[2rem]",
                                        navbar: "hidden",
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>
                    <button className="group relative px-8 py-3.5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden shadow-glow-primary hover:scale-[1.05] transition-all flex items-center gap-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <Chrome className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        ADD TO CHROME — FREE
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 glass rounded-lg flex items-center justify-center text-foreground"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background lg:hidden p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-xl font-black italic uppercase tracking-tighter text-foreground">INDEEDBOT</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 space-y-12">
                            <div className="space-y-6">
                                <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Our AI Agents</p>
                                <div className="grid gap-4">
                                    {[
                                        { name: "Strategist", path: "intelligence" },
                                        { name: "Builder", path: "resume" },
                                        { name: "Scout", path: "scout" },
                                        { name: "Coach", path: "interview" }
                                    ].map((cap) => (
                                        <Link
                                            key={cap.name}
                                            href={`/features/${cap.path}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-black text-foreground italic uppercase tracking-tighter hover:text-primary transition-colors flex items-center justify-between group"
                                        >
                                            {cap.name}
                                            <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border" />

                            <div className="space-y-6">
                                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-black text-neutral-400 uppercase tracking-widest hover:text-foreground">Pricing</Link>
                                <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-black text-neutral-400 uppercase tracking-widest hover:text-foreground">Learn More</Link>
                            </div>
                        </div>

                        <div className="mt-auto space-y-4">
                            <SignedOut>
                                <Link href="/sign-in">
                                    <button onClick={() => setIsMobileMenuOpen(false)} className="w-full py-6 glass text-foreground font-black uppercase tracking-[0.3em] rounded-2xl text-xs flex items-center justify-center gap-4">
                                        <LogIn className="w-4 h-4" />
                                        MEMBER LOGIN
                                    </button>
                                </Link>
                            </SignedOut>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-2xl text-xs shadow-glow-primary flex items-center justify-center gap-4">
                                <Chrome className="w-4 h-4" />
                                ADD TO CHROME — FREE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const CapabilityLink = ({ href, icon, title, desc, color }: any) => (
    <Link href={href} className="flex items-start gap-5 p-4 rounded-[1.5rem] hover:bg-primary/5 transition-all group/item border border-transparent hover:border-border">
        <div className={`p-3 glass rounded-2xl ${color} group-hover/item:scale-110 group-hover/item:shadow-glow opacity-80 group-hover/item:opacity-100 transition-all`}>
            {icon}
        </div>
        <div>
            <div className="text-foreground font-black uppercase tracking-[0.1em] text-[12px] mb-1.5 flex items-center gap-2 group-hover/item:text-primary transition-colors">
                {title}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
            </div>
            <div className="text-neutral-500 text-[11px] font-medium leading-snug italic tracking-tight">{desc}</div>
        </div>
    </Link>
);
