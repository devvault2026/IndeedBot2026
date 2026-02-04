"use client";

import { motion } from "framer-motion";
import { ChevronRight, Target, Zap, ShieldCheck, Search, Activity, Cpu, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-32 px-4 overflow-hidden bg-white">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-neutral-50 to-transparent -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-5xl mx-auto z-10 mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-[10px] md:text-xs font-black mb-6 md:mb-8 shadow-sm tracking-widest uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 animate-pulse flex-shrink-0" />
                    <span className="truncate">Enterprise-Grade Decision Systems</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[0.95] text-[#2d2d2d] uppercase italic break-words">
                    AI Career Intelligence <br className="hidden md:block" />
                    <span className="text-gradient-indeed not-italic block md:inline">Infrastructure.</span>
                </h1>

                <p className="text-base md:text-2xl text-neutral-500 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-2">
                    IndeedBot 2026 operates as a multi-agent decision system that analyzes market demand,
                    candidate positioning, and opportunity risk in real time—before you ever apply.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full">
                    <Link href="#pricing" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 md:px-12 py-4 md:py-5 bg-primary text-white font-black text-lg md:text-xl rounded-xl hover:bg-indeed-blue-hover hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                            INITIALIZE SYSTEM <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </Link>

                    <Link href="#features" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 md:px-12 py-4 md:py-5 bg-white text-[#2d2d2d] font-bold text-lg md:text-xl rounded-xl border-2 border-neutral-200 hover:border-primary/30 transition-all flex items-center justify-center gap-3">
                            REVIEW PROTOCOL
                        </button>
                    </Link>
                </div>

                <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#2d2d2d] font-black text-[9px] md:text-[10px] tracking-[2px] md:tracking-[4px] uppercase italic opacity-80 max-w-sm md:max-w-none mx-auto">
                    <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-primary" /> POST-READY</span>
                    <span className="flex items-center gap-2"><Cpu className="w-3 h-3 md:w-4 md:h-4 text-primary" /> CLIENT-SIDE</span>
                    <span className="flex items-center gap-2"><Target className="w-3 h-3 md:w-4 md:h-4 text-primary" /> DECISION ARCH.</span>
                </div>
            </motion.div>

            {/* THE LIVE SCANNER UI */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="w-full max-w-6xl mx-auto relative group px-2 md:px-4 mb-20"
            >
                <div className="bg-neutral-100 p-1 md:p-3 rounded-[2rem] md:rounded-[3rem] border border-neutral-200 shadow-2xl relative">
                    {/* The "Indeed" Page Background */}
                    <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-16 min-h-0 md:min-h-[500px] relative border border-neutral-200 overflow-hidden flex flex-col items-center justify-center">

                        {/* Desktop Skeletons - Hidden on Mobile */}
                        <div className="hidden md:block max-w-3xl w-full space-y-8 opacity-40 grayscale pointer-events-none absolute top-16 left-16 right-[380px]">
                            <div className="w-48 h-10 bg-neutral-200 rounded" />
                            <div className="space-y-4">
                                <div className="w-full h-32 bg-neutral-100 rounded-2xl p-6 border border-neutral-200">
                                    <div className="w-1/3 h-6 bg-neutral-200 rounded mb-4" />
                                    <div className="w-1/4 h-4 bg-neutral-100 rounded" />
                                </div>
                                <div className="w-full h-32 bg-white rounded-2xl p-6 border-2 border-primary/20 relative overflow-hidden shadow-lg">
                                    <div className="w-1/2 h-6 bg-neutral-200 rounded mb-4" />
                                    <div className="w-1/3 h-4 bg-neutral-100 rounded" />
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-neutral-100" />
                                </div>
                                <div className="w-full h-32 bg-neutral-100 rounded-2xl p-6 border border-neutral-200">
                                    <div className="w-1/3 h-6 bg-neutral-200 rounded mb-4" />
                                    <div className="w-1/4 h-4 bg-neutral-100 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* THE INDEED BOT SIDE PANEL (THE REVELATION) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                            className="relative md:absolute md:top-4 md:right-4 md:bottom-4 w-full md:w-[340px] bg-[#0c0c0e] rounded-2xl md:rounded-[2rem] shadow-2xl z-20 border border-white/10 overflow-hidden flex flex-col"
                        >
                            {/* Bot Header */}
                            <div className="p-4 md:p-6 border-b border-white/5 bg-primary/5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                            alt="IndeedBot Logo"
                                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                                        />
                                        <span className="text-white font-black text-xs tracking-widest italic uppercase">Bot Intelligence</span>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                </div>
                                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Analysis Status: <span className="text-primary italic">Analyzing Card</span></p>
                            </div>

                            {/* Scanning Animation Body */}
                            <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 relative overflow-hidden">
                                {/* The Wave Analysis */}
                                <div className="h-20 md:h-24 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Activity className="w-10 h-10 md:w-12 md:h-12 text-primary opacity-50" />
                                    </div>
                                </div>

                                {/* Extracted Intel */}
                                <div className="space-y-2 md:space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-1">
                                        <span>Extracted Data</span>
                                        <span className="text-primary">98% Parity</span>
                                    </div>
                                    {[
                                        { label: "Salary Cap", value: "$185k - $220k", scout: "VERIFIED" },
                                        { label: "ATS Match", value: "A+ High Probability", scout: "OPTIMIZED" },
                                        { label: "Risk Assessment", value: "Low Institutional Signal", scout: "SHIELD_ALERT" },
                                        { label: "Strategic Fit", value: "88% Career Match", scout: "CALCULATED" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + (i * 0.2) }}
                                            className={`p-2 md:p-3 border rounded-lg flex justify-between items-center ${item.scout === 'SHIELD_ALERT' ? 'bg-red-500/10 border-red-500/20' : 'bg-white/5 border-white/5'}`}
                                        >
                                            <div>
                                                <p className={`text-[8px] uppercase font-black tracking-widest ${item.scout === 'SHIELD_ALERT' ? 'text-red-400' : 'text-neutral-500'}`}>{item.label}</p>
                                                <p className="text-[10px] md:text-xs text-white font-bold">{item.value}</p>
                                            </div>
                                            <span className={`text-[8px] font-black italic ${item.scout === 'SHIELD_ALERT' ? 'text-red-500' : 'text-primary'}`}>{item.scout}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Tactical Action */}
                            <div className="p-4 md:p-6 bg-primary/10 border-t border-white/5">
                                <button className="w-full py-3 md:py-4 bg-primary text-white font-black text-xs md:text-sm rounded-xl shadow-lg ring-4 ring-primary/20 hover:scale-105 transition-all uppercase tracking-widest">
                                    Initialize Protocol
                                </button>
                            </div>
                        </motion.div>

                        {/* THE SCANNING LASER EFFECT - Desktop Only */}
                        <motion.div
                            animate={{ top: ["20%", "60%", "20%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="hidden md:block absolute left-8 right-[360px] h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-10 shadow-[0_0_20px_rgba(37,87,167,0.8)]"
                        >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                Scanning Intelligence Profile
                            </div>
                        </motion.div>

                        {/* Ghost Data Fragments */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                            <Target className="w-48 h-48 md:w-64 md:h-64 text-neutral-200 animate-spin" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </div>

                {/* Floating Product Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#2d2d2d] text-white px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl shadow-2xl border-4 border-white flex items-center gap-3 md:gap-4 w-[90%] md:w-auto mx-auto justify-center z-30">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 md:w-6 md:h-6 fill-white" />
                    </div>
                    <div>
                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400">Official Release</p>
                        <p className="text-sm md:text-lg font-black italic whitespace-nowrap">IndeedBot v4.0.0 <span className="text-primary">E2E</span></p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
