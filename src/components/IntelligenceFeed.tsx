"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Network, Search, Database, Target, MapPin, Globe, ShieldAlert, Cpu } from "lucide-react";

const events = [
    { type: "OSINT", data: "CORPORATE_REGISTRY", result: "VERIFIED", time: "18ms", status: "SHIELD" },
    { type: "MAPS", data: "GEO_LOCATION_MATCH", result: "PHYSICAL", time: "42ms", status: "SIGNAL" },
    { type: "EMAIL", data: "MD_PATTERN_PREDICT", result: "j.doe@hq.io", time: "112ms", status: "ACTIVE" },
    { type: "SOCIAL", data: "STAKEHOLDER_FOUND", result: "HIRE_MNGR", time: "205ms", status: "TARGET" },
];

export const IntelligenceFeed = () => {
    const [scanIndex, setScanIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanIndex((prev) => (prev + 1) % events.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="scout" className="py-24 md:py-48 px-4 relative overflow-hidden bg-background">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                        >
                            <Search className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Agent Charlie / Scout Engine</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                            KNOW THE <span className="text-gradient-primary not-italic">ENTITIES.</span>
                        </h2>

                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-12">
                            Agent Charlie performs high-velocity OSINT collection on every lead.
                            From physical verification of HQ to mapping the social footprint of decision-makers—
                            don't apply until you have the full dossier.
                        </p>

                        <div className="space-y-4">
                            {events.map((event, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: scanIndex === i ? 1 : 0.4,
                                        x: scanIndex === i ? 10 : 0
                                    }}
                                    className={`flex items-center justify-between p-5 glass rounded-2xl border-border transition-all group ${scanIndex === i ? 'bg-primary/10 border-primary/20 shadow-[0_0_20px_rgba(37,87,167,0.1)]' : ''}`}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${scanIndex === i ? 'bg-primary text-white shadow-[0_0_15px_#2557a7]' : 'bg-foreground/5 text-neutral-600'}`}>
                                            {i === 0 && <Globe className="w-5 h-5" />}
                                            {i === 1 && <MapPin className="w-5 h-5" />}
                                            {i === 2 && <Terminal className="w-5 h-5" />}
                                            {i === 3 && <Target className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono text-primary font-black uppercase tracking-widest mb-1">{event.type}</p>
                                            <p className="text-sm font-bold text-foreground uppercase">{event.data}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-mono text-neutral-500 uppercase mb-1">{event.time}</p>
                                        <p className="text-xs font-black text-foreground italic">{event.result}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square glass rounded-full relative p-12 flex items-center justify-center overflow-hidden">
                            {/* Scanning Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-primary/20 rounded-full border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-border rounded-full"
                            />

                            {/* Center Logo/Icon */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl glass flex items-center justify-center shadow-2xl relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                                    <Cpu className="w-16 h-16 text-primary relative z-10" />
                                </div>
                                <div className="mt-8 text-center space-y-2">
                                    <p className="text-xl font-black italic uppercase tracking-tighter">Scout Active</p>
                                    <div className="flex items-center gap-2 justify-center">
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Global Node Sync</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Intel Points */}
                            <AnimatePresence>
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0],
                                            scale: [0.5, 1, 0.5],
                                            x: [0, Math.cos(i) * 150],
                                            y: [0, Math.sin(i) * 150]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.7,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#2557a7]"
                                    />
                                ))}
                            </AnimatePresence>

                            {/* Radar Scanline */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent origin-center rounded-full pointer-events-none"
                                style={{ transformOrigin: 'center center' }}
                            />
                        </div>

                        {/* Intelligence Badge */}
                        <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-2xl z-20 max-w-[240px]">
                            <div className="flex items-start gap-4 mb-4">
                                <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-relaxed">
                                    Entity legitimacy verified via multiple geo-redundant nodes.
                                </p>
                            </div>
                            <div className="h-1 w-full bg-foreground/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
