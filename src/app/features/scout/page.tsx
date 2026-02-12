"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Mail, ShieldCheck, Database, Target, Network } from "lucide-react";

export default function ScoutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-orange-500/20"
                        >
                            <Target className="w-4 h-4 text-orange-400 shadow-glow-orange" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Agent Charlie / OSINT Suite</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                            CORPORATE <br /><span className="text-orange-400 not-italic">SCOUTING.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-2xl italic">
                            Don't apply into a void. Agent Charlie performs real-time intelligence to
                            verify company legitimacy, find HQ locations, and discover the people behind the post.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs">
                                PERFORM DIRECT INTEL
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="glass-dark p-12 rounded-[4rem] border border-border shadow-2xl relative group overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-48 bg-orange-500/5 opacity-50 group-hover:opacity-70 transition-opacity" />

                            <div className="relative space-y-6">
                                <div className="flex items-center gap-4 p-5 glass rounded-2xl border border-border shadow-2xl">
                                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-orange-400 border-orange-500/20">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1 italic">HQ Verification</p>
                                        <p className="text-sm font-bold text-foreground">1200 Innovation Way, Palo Alto, CA</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 glass border-green-500/20 text-green-500 rounded">PHYSICAL_MATCH</span>
                                </div>

                                <div className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 shadow-2xl">
                                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-orange-400 border-orange-500/20">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1 italic">Discovery</p>
                                        <p className="text-sm font-bold text-foreground italic">jane.doe@techcorp.io</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 glass border-orange-500/20 text-orange-400 rounded">95% ACCURACY</span>
                                </div>

                                <div className="p-5 bg-background/40 rounded-2xl border border-border shadow-xl space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-neutral-500 tracking-[0.3em] italic">
                                        <span>OSINT Stream</span>
                                        <span className="text-orange-400 animate-pulse">Scanning...</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="h-full w-1/3 bg-orange-400 shadow-glow-orange"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-6 bg-background relative border-y border-border">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter italic mb-4">The OSINT Matrix</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto font-bold italic text-lg text-foreground/40">Direct-action intelligence tools for the modern candidate.</p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Globe, title: "Domain Intel", desc: "Crawls DNS and web signatures to verify the company isn't a recruitment scam." },
                            { icon: MapPin, title: "Location Audit", desc: "Cross-references job locations with Maps data to confirm established office hubs." },
                            { icon: Mail, title: "Node Prediction", desc: "Analyzes company naming patterns to identify key stakeholders for direct outreach." },
                            { icon: Network, title: "Social Graphing", desc: "Aggregates the digital footprint of hiring teams to tailor your networking strategy." }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 glass rounded-[2.5rem] border border-border hover:border-orange-500/20 transition-all">
                                <div className="w-14 h-14 glass rounded-xl flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform border-orange-500/20">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-foreground uppercase mb-4 italic tracking-tighter">{feature.title}</h3>
                                <p className="text-neutral-500 text-sm font-bold italic leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OSINT Visualization */}
            <section className="py-48 px-6 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter text-foreground leading-none">Beyond the <span className="text-orange-400 not-italic">Job Board.</span></h2>
                    <p className="text-xl text-neutral-400 mb-20 max-w-3xl mx-auto leading-relaxed italic font-medium">
                        Agent Charlie doesn't just read the job description. It reads the company's entire digital signature.
                        Get the context you need to dominate the conversation.
                    </p>

                    <div className="relative group p-1 glass rounded-[4rem] shadow-2xl">
                        <div className="glass-dark rounded-[3.9rem] p-16 flex flex-col items-center justify-center min-h-[400px] border border-border">
                            <div className="w-40 h-40 rounded-full glass border border-orange-500/20 flex items-center justify-center relative shadow-3xl">
                                <div className="absolute inset-0 rounded-full border-t-2 border-orange-500 animate-spin" style={{ animationDuration: '3s' }} />
                                <Target className="w-16 h-16 text-orange-400 shadow-glow-orange" />
                            </div>
                            <div className="mt-16 space-y-4">
                                <p className="text-3xl font-black text-foreground uppercase italic tracking-tighter">Corporate Intelligence Pulse</p>
                                <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[6px] italic">Verified Infrastructure Access Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-border">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.5em] italic">© 2026 INDEEDBOT SYSTEMS — ALL RIGHTS RESERVED</p>
                </div>
            </footer>
        </main>
    );
}
