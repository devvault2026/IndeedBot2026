"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Network, Search, Database, Target, MapPin } from "lucide-react";

const events = [
    { type: "ANALYSIS", data: "INDEED_AD_2491", result: "MATCH_94%", time: "2ms" },
    { type: "VERIFY", data: "TECH_GLOBAL_HQ", result: "VERIFIED", time: "14ms" },
    { type: "DISCOVERY", data: "TALENT_PARTNER_X", result: "FOUND", time: "22ms" },
    { type: "SYNC", data: "VAULT_PERSISTENCE", result: "STABLE", time: "0ms" },
];

export const IntelligenceFeed = () => {
    const [points, setPoints] = useState<{ top: string; left: string }[]>([]);

    useEffect(() => {
        setPoints([...Array(5)].map(() => ({
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`
        })));
    }, []);

    return (
        <section className="py-16 md:py-32 px-4 bg-white border-t border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none -z-10"
                style={{ backgroundImage: 'radial-gradient(#2557a7 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center shadow-sm">
                            <Target className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black text-[#2d2d2d] uppercase tracking-tighter italic leading-none">Strategic Suite /</h2>
                            <p className="text-primary font-black uppercase text-[10px] md:text-xs tracking-widest mt-1">Live Analytical Intelligence</p>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-600 mb-8 md:mb-10 leading-relaxed font-medium">
                        IndeedBot 2026 transforms your browser into a <span className="text-black font-black italic">Strategic Success Center</span>. Our Analytical Suite performs mission-critical background research on every job you view:
                    </p>

                    <div className="space-y-3">
                        {events.map((event, i) => (
                            <div key={i} className="flex items-center justify-between p-3 md:p-5 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all group">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="text-[8px] md:text-[10px] font-black italic text-neutral-400 group-hover:text-primary tracking-widest uppercase">{event.type}</span>
                                    <span className="text-xs md:text-sm font-bold text-[#2d2d2d]">{event.data}</span>
                                </div>
                                <div className="flex items-center gap-2 md:gap-4">
                                    <span className="text-[8px] md:text-[10px] font-black px-2 py-1 bg-white border border-neutral-200 text-neutral-500 rounded uppercase">{event.time}</span>
                                    <span className="text-[10px] md:text-xs font-black text-primary">{event.result}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-[#f8f9fa] p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-neutral-200 aspect-square md:aspect-square flex flex-col items-center justify-center relative shadow-2xl overflow-hidden group">
                        {/* Data Visualization */}
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-neutral-200 flex items-center justify-center relative bg-white shadow-inner">
                            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
                            <div className="absolute inset-0 rounded-full border-t-2 border-primary/20 animate-spin" style={{ animationDuration: '6s' }}></div>
                            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-primary" />

                            {/* Floating Target Points */}
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                    className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full"
                                    style={{
                                        top: point.top,
                                        left: point.left
                                    }}
                                />
                            ))}
                        </div>

                        <div className="mt-8 md:mt-12 text-center">
                            <p className="text-2xl md:text-3xl font-black text-[#2d2d2d] tracking-tighter mb-2 italic uppercase">System Scanning</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <p className="text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-[0.3em] font-black">Performance Optimal</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
