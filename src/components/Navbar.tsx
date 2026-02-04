"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Target, Zap, ShieldCheck, Cpu, Database, MessageSquare, FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 md:py-5 bg-white/90 backdrop-blur-xl border-b border-neutral-100 shadow-sm"
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 max-w-[calc(100%-50px)]">
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                alt="IndeedBot Logo"
                                className="w-8 h-8 md:w-9 md:h-9 object-contain relative z-10"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-bold tracking-tight text-[#2d2d2d] truncate">
                            Indeed<span className="text-primary font-black">Bot</span>
                            <span className="ml-2 text-[9px] bg-[#2d2d2d] text-white px-1.5 py-0.5 rounded-md font-black uppercase tracking-widest leading-none shadow-lg shadow-black/20 align-middle">v4.0</span>
                        </span>
                    </Link>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8 text-neutral-600 font-bold text-xs tracking-wide">
                    <div
                        className="group relative"
                        onMouseEnter={() => setIsFeaturesOpen(true)}
                        // onMouseLeave={() => setIsFeaturesOpen(false)} // Keep open while hovering menu
                        onMouseLeave={() => setIsFeaturesOpen(false)}
                    >
                        <button className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer py-2 uppercase tracking-widest">
                            Capabilities <ChevronDown className={`w-3 h-3 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isFeaturesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full -left-4 w-[450px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-4 grid gap-2 z-50"
                                >
                                    <div className="absolute top-0 left-8 -mt-2 w-4 h-4 bg-white border-t border-l border-neutral-100 rotate-45" />

                                    <Link href="/features/intelligence" className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                                        <div className="p-2 bg-primary/5 rounded-lg group-hover/item:bg-primary/10 transition-colors">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-[#2d2d2d] font-black uppercase tracking-wider text-xs mb-1">Career Intelligence</div>
                                            <div className="text-neutral-500 text-[10px] font-medium leading-relaxed">Real-time market analysis and salary verification.</div>
                                        </div>
                                    </Link>

                                    <Link href="/features/resume" className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                                        <div className="p-2 bg-purple-500/5 rounded-lg group-hover/item:bg-purple-500/10 transition-colors">
                                            <Cpu className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="text-[#2d2d2d] font-black uppercase tracking-wider text-xs mb-1">Resume Architect</div>
                                            <div className="text-neutral-500 text-[10px] font-medium leading-relaxed">ATS-proof document generation system.</div>
                                        </div>
                                    </Link>

                                    <Link href="/features/scout" className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                                        <div className="p-2 bg-indigo-500/5 rounded-lg group-hover/item:bg-indigo-500/10 transition-colors">
                                            <Target className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="text-[#2d2d2d] font-black uppercase tracking-wider text-xs mb-1">Corporate Scout</div>
                                            <div className="text-neutral-500 text-[10px] font-medium leading-relaxed">Hidden opportunity detection engine.</div>
                                        </div>
                                    </Link>

                                    <Link href="/features/vault" className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                                        <div className="p-2 bg-amber-500/5 rounded-lg group-hover/item:bg-amber-500/10 transition-colors">
                                            <Database className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <div className="text-[#2d2d2d] font-black uppercase tracking-wider text-xs mb-1">Job Vault</div>
                                            <div className="text-neutral-500 text-[10px] font-medium leading-relaxed">Encrypted opportunity persistence layer.</div>
                                        </div>
                                    </Link>

                                    <Link href="/features/interview" className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                                        <div className="p-2 bg-rose-500/5 rounded-lg group-hover/item:bg-rose-500/10 transition-colors">
                                            <MessageSquare className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <div>
                                            <div className="text-[#2d2d2d] font-black uppercase tracking-wider text-xs mb-1">Interview Coach</div>
                                            <div className="text-neutral-500 text-[10px] font-medium leading-relaxed">High-fidelity performance simulation.</div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/pricing" className="hover:text-primary transition-colors hover:scale-105 transform uppercase tracking-widest">Pricing</Link>
                    <Link href="/docs" className="hover:text-primary transition-colors hover:scale-105 transform uppercase tracking-widest">Documentation</Link>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-xs font-black text-neutral-500 hover:text-primary transition-colors uppercase tracking-widest">
                        Log In
                    </button>
                    <Link href="/pricing">
                        <button className="group relative px-6 py-3 bg-[#2d2d2d] text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-black transition-all active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <span className="relative flex items-center gap-2">
                                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
                                Secure Access
                            </span>
                        </button>
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <div className="lg:hidden z-50 relative">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#2d2d2d] hover:text-primary transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* PREMIUM MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col"
                    >
                        <div className="flex-1 overflow-y-auto pt-24 px-6 pb-8">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                                className="space-y-6"
                            >
                                <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                                    <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
                                    <div className="grid gap-3">
                                        <Link href="/features/intelligence" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 active:scale-95 transition-transform">
                                            <div className="p-2 bg-white rounded-xl shadow-sm"><Sparkles className="w-5 h-5 text-primary" /></div>
                                            <span className="font-bold text-[#2d2d2d] text-sm">Career Intelligence</span>
                                        </Link>
                                        <Link href="/features/resume" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 active:scale-95 transition-transform">
                                            <div className="p-2 bg-white rounded-xl shadow-sm"><Cpu className="w-5 h-5 text-purple-600" /></div>
                                            <span className="font-bold text-[#2d2d2d] text-sm">Resume Architect</span>
                                        </Link>
                                        <Link href="/features/scout" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 active:scale-95 transition-transform">
                                            <div className="p-2 bg-white rounded-xl shadow-sm"><Target className="w-5 h-5 text-indigo-600" /></div>
                                            <span className="font-bold text-[#2d2d2d] text-sm">Corporate Scout</span>
                                        </Link>
                                        <Link href="/features/vault" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 active:scale-95 transition-transform">
                                            <div className="p-2 bg-white rounded-xl shadow-sm"><Database className="w-5 h-5 text-amber-600" /></div>
                                            <span className="font-bold text-[#2d2d2d] text-sm">Job Vault</span>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="h-px bg-neutral-100 w-full" />

                                <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="space-y-4">
                                    <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-black text-[#2d2d2d] uppercase tracking-tighter italic">Pricing</Link>
                                    <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-black text-[#2d2d2d] uppercase tracking-tighter italic">Documentation</Link>
                                    <div className="text-xl font-black text-neutral-300 uppercase tracking-tighter italic">Login Portal</div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="p-6 border-t border-neutral-100 bg-white/50 backdrop-blur-md"
                        >
                            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full py-5 bg-[#2d2d2d] text-white font-black uppercase tracking-widest rounded-xl text-sm shadow-xl flex items-center justify-center gap-3">
                                    <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    Secure Access
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
