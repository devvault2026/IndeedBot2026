"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Activity, Maximize2, Volume2, Video } from "lucide-react";
import { useState } from "react";

export const Trailer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="demo" className="py-24 md:py-48 px-4 bg-background relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                    >
                        <Video className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">System Walkthrough</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-8xl font-black italic text-foreground uppercase tracking-tighter leading-none mb-8">
                        SEE THE <span className="text-gradient-blue not-italic">ADVANTAGE.</span>
                    </h2>

                    <p className="text-lg md:text-2xl text-neutral-400 font-medium max-w-3xl mx-auto italic tracking-tight leading-relaxed">
                        The first browser extension that actively fights for your career.
                        Watch IndeedBot dismantle the application process in real-time.
                    </p>
                </div>

                {/* THE CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video w-full glass-dark rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(37,87,167,0.2)] border-border overflow-hidden group"
                >
                    {/* Header Bar */}
                    <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background/80 to-transparent z-20 flex items-center justify-between px-10 border-b border-border backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#2557a7]" />
                            <span className="text-[10px] font-black text-foreground uppercase tracking-[0.4em]">Latest Build // v4.0.0</span>
                        </div>
                        <div className="flex items-center gap-6 text-neutral-500">
                            <Volume2 className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                            <Maximize2 className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {!isPlaying ? (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                            {/* Thumbnail Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none opacity-40" />
                            <img
                                src="https://img.youtube.com/vi/B6d8WRKKXZA/maxresdefault.jpg"
                                alt="Trailer Thumbnail"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                            />

                            {/* Play Trigger */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsPlaying(true)}
                                className="relative z-20 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,87,167,0.4)] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                <Play className="w-10 h-10 text-white fill-white ml-2 relative z-10" />
                                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping scale-150 opacity-0 group-hover:opacity-100" />
                            </motion.button>

                            <p className="mt-8 text-foreground font-black italic uppercase tracking-[0.5em] text-xs relative z-20 opacity-60 group-hover:opacity-100 transition-all">
                                PLAY DEMO
                            </p>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full relative z-10"
                            src="https://www.youtube.com/embed/B6d8WRKKXZA?autoplay=1&rel=0&modestbranding=1"
                            title="IndeedBot Briefing"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {/* Operational Overlay UI */}
                    <div className="absolute bottom-8 left-10 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">Live Recording</span>
                            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest italic">Unedited Footage</span>
                        </div>
                    </div>
                </motion.div>

                {/* Performance Meta-stats */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center opacity-40">
                    <div className="flex gap-12 font-black text-[10px] tracking-[0.3em] uppercase text-neutral-400">
                        <span>4K Definition</span>
                        <span>Full Audio</span>
                        <span>2:14 Runtime</span>
                    </div>
                    <div className="text-[10px] font-black italic text-primary uppercase tracking-[0.2em] mt-6 md:mt-0">
                        READY TO WATCH
                    </div>
                </div>
            </div>
        </section>
    );
};
