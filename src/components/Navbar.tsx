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
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 bg-white/90 backdrop-blur-xl border-b border-neutral-100 shadow-sm"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                alt="IndeedBot Logo"
                                className="w-9 h-9 object-contain relative z-10"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#2d2d2d]">
                            Indeed<span className="text-primary font-black">Bot</span>
                            <span className="ml-2 text-[9px] bg-[#2d2d2d] text-white px-1.5 py-0.5 rounded-md font-black uppercase tracking-widest leading-none shadow-lg shadow-black/20">v4.0</span>
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
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#2d2d2d] hover:text-primary transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU CONTENT */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="pt-6 pb-2 space-y-4">
                            <div className="font-black text-xs text-neutral-400 uppercase tracking-widest mb-2 px-2">Capabilities</div>
                            <Link href="/features/intelligence" className="block px-4 py-3 bg-neutral-50 rounded-lg font-bold text-[#2d2d2d]" onClick={() => setIsMobileMenuOpen(false)}>Career Intelligence</Link>
                            <Link href="/features/resume" className="block px-4 py-3 bg-neutral-50 rounded-lg font-bold text-[#2d2d2d]" onClick={() => setIsMobileMenuOpen(false)}>Resume Architect</Link>
                            <Link href="/features/scout" className="block px-4 py-3 bg-neutral-50 rounded-lg font-bold text-[#2d2d2d]" onClick={() => setIsMobileMenuOpen(false)}>Corporate Scout</Link>
                            <Link href="/features/vault" className="block px-4 py-3 bg-neutral-50 rounded-lg font-bold text-[#2d2d2d]" onClick={() => setIsMobileMenuOpen(false)}>Job Vault</Link>

                            <div className="h-px bg-neutral-100 my-2" />

                            <Link href="/pricing" className="block px-2 py-2 font-black text-[#2d2d2d] uppercase tracking-widest text-sm" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                            <Link href="/docs" className="block px-2 py-2 font-black text-[#2d2d2d] uppercase tracking-widest text-sm" onClick={() => setIsMobileMenuOpen(false)}>Documentation</Link>

                            <div className="pt-4 flex flex-col gap-3">
                                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl">
                                        Secure Access
                                    </button>
                                </Link>
                                <button className="w-full py-4 text-neutral-500 font-black uppercase tracking-widest text-xs">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
