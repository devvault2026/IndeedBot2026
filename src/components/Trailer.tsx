"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Activity, Maximize2, Volume2 } from "lucide-react";
import { useState } from "react";

export const Trailer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-16 md:py-32 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[2px] mb-4 md:mb-6"
                    >
                        <Activity className="w-3 h-3" />
                        <span>System Overview: Protocol V4.0.0</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-6xl font-black italic text-[#2d2d2d] uppercase tracking-tighter leading-none mb-4 md:mb-6">
                        Strategic <span className="text-primary not-italic">Briefing.</span>
                    </h2>
                    <p className="text-base md:text-xl text-neutral-800/70 font-bold max-w-2xl mx-auto italic tracking-tight px-4">
                        Declassifying the multi-agent infrastructure. Watch the operative guide to adversarial career dominance.
                    </p>
                </div>

                {/* THE CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video w-full bg-[#0c0c0e] rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_60px_-10px_rgba(37,87,167,0.3)] md:shadow-[0_40px_100px_-20px_rgba(37,87,167,0.3)] border-4 md:border-[8px] border-neutral-100 overflow-hidden group"
                >
                    {/* Header Bar */}
                    <div className="absolute top-0 inset-x-0 h-10 md:h-14 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-4 md:px-8 border-b border-white/5 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[2px] md:tracking-[4px]">Intel_Feed // B6d8WRKKXZA</span>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6 text-white/40">
                            <Volume2 className="w-3 h-3 md:w-4 md:h-4 hover:text-white transition-colors cursor-pointer" />
                            <Maximize2 className="w-3 h-3 md:w-4 md:h-4 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {!isPlaying ? (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                            {/* Thumbnail Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none opacity-80" />
                            <img
                                src="https://img.youtube.com/vi/B6d8WRKKXZA/maxresdefault.jpg"
                                alt="Trailer Thumbnail"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                            />

                            {/* Play Trigger */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsPlaying(true)}
                                className="relative z-20 w-16 h-16 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,87,167,0.5)] md:shadow-[0_0_50px_rgba(37,87,167,0.5)] group-hover:shadow-[0_0_80px_rgba(37,87,167,0.8)] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                <Play className="w-6 h-6 md:w-10 md:h-10 text-white fill-white ml-1 relative z-10" />

                                {/* Decorative Ring */}
                                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping scale-150 opacity-0 group-hover:opacity-100" />
                            </motion.button>

                            <p className="mt-4 md:mt-8 text-white font-black italic uppercase tracking-[3px] md:tracking-[5px] text-[10px] md:text-xs relative z-20 opacity-80 group-hover:opacity-100 group-hover:translate-y-2 transition-all">
                                Initialize Playback
                            </p>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full relative z-10"
                            src="https://www.youtube.com/embed/B6d8WRKKXZA?autoplay=1&rel=0&modestbranding=1"
                            title="IndeedBot 2026 Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {/* Operational Overlay UI (always visible or hover) */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[2px]">Source: Decentralized Node // OfficialPr0x</span>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[2px]">Classification: Public Protocol Release</span>
                        </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 p-4 md:p-8 z-20 pointer-events-none">
                        <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-primary/10 -rotate-12" />
                    </div>
                </motion.div>

                {/* Performance Meta-stats below */}
                <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center transition-all duration-500">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 font-black text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase text-[#2d2d2d] opacity-60">
                        <span>4K Ultra Presence</span>
                        <span>SSE Stream Ready</span>
                        <span>Reasoning Synchronized</span>
                    </div>
                    <div className="text-[9px] md:text-[10px] font-black italic text-primary uppercase tracking-widest">
                        SECURE_VIEWING_ENABLED // 256-BIT_AES
                    </div>
                </div>
            </div>
        </section>
    );
};
