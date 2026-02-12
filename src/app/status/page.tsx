"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Activity, Server, Zap, Globe, CheckCircle2, Clock } from "lucide-react";

export default function StatusPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">System Network Status</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        OPERATIONAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700 not-italic">PERFECTION.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        IndeedBot nodes are active and operating at peak 2026 performance.
                        Zero latency, maximum mission success.
                    </p>
                </div>
            </section>

            {/* STATUS GRID */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <StatusCard
                            title="Global API Grid"
                            status="Operational"
                            uptime="99.992%"
                            latency="42ms"
                            icon={<Globe className="w-6 h-6 text-primary" />}
                        />
                        <StatusCard
                            title="AI Inference Nodes"
                            status="Operational"
                            uptime="99.998%"
                            latency="120ms"
                            icon={<Zap className="w-6 h-6 text-primary" />}
                        />
                    </div>

                    <div className="glass p-12 md:p-20 rounded-[3rem] border border-border shadow-2xl">
                        <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-neutral-500 italic mb-12 flex items-center gap-4">
                            <Clock className="w-6 h-6" />
                            Incident History
                        </h3>

                        <div className="space-y-12">
                            <HistoryItem date="Feb 10, 2026" event="Scheduled Maintenance" status="Completed" />
                            <HistoryItem date="Feb 02, 2026" event="Inference Hub Migration" status="Completed" />
                            <HistoryItem date="Jan 24, 2026" event="Intelligence Latency Investigation" status="Resolved" />
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

const StatusCard = ({ title, status, uptime, latency, icon }: any) => (
    <div className="glass p-12 rounded-[3rem] border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-4 mb-8">
            <div className="p-4 glass rounded-2xl border-border">{icon}</div>
            <div>
                <h4 className="text-xl font-black text-foreground uppercase italic tracking-tighter leading-none mb-1">{title}</h4>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">{status}</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
                <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-1">Uptime</div>
                <div className="text-2xl font-black text-foreground uppercase italic tracking-tighter">{uptime}</div>
            </div>
            <div>
                <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-1">Latency</div>
                <div className="text-2xl font-black text-foreground uppercase italic tracking-tighter">{latency}</div>
            </div>
        </div>
    </div>
);

const HistoryItem = ({ date, event, status }: any) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 group">
        <div>
            <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-1 italic">{date}</div>
            <div className="text-xl font-black text-foreground uppercase italic tracking-tighter group-hover:text-primary transition-colors">{event}</div>
        </div>
        <div className="px-4 py-2 glass border-border rounded-xl text-[10px] font-black uppercase tracking-widest text-neutral-500 italic">
            {status}
        </div>
    </div>
);
