"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Mail, ShieldCheck, Database, Target, Network, Info } from "lucide-react";
import Link from "next/link";

export default function ScoutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-orange-500/20 shadow-2xl"
                        >
                            <Target className="w-4 h-4 text-orange-400 shadow-glow-orange" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">The Scout Online</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-black mb-8 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                            VERIFY <br /><span className="text-orange-400 not-italic">REALITY.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed font-medium max-w-2xl italic">
                            Don't waste time on ghost jobs. The Scout verifies company legitimacy,
                            finds real office locations, and identifies the actual hiring team in real-time.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/sign-up">
                                <button className="px-10 py-5 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs">
                                    Scout a Company — Free
                                </button>
                            </Link>
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
                                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1 italic">Physical Verification</p>
                                        <p className="text-sm font-bold text-foreground">Established HQ Matches Listing</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 glass border-emerald-500/20 text-emerald-500 rounded">Legit</span>
                                </div>

                                <div className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 shadow-2xl">
                                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-orange-400 border-orange-500/20">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1 italic">Hiring Contact</p>
                                        <p className="text-sm font-bold text-foreground italic">Identified 3 Relevant Recruiter Nodes</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 glass border-orange-500/20 text-orange-400 rounded">High Signal</span>
                                </div>

                                <div className="p-5 bg-background/40 rounded-2xl border border-border shadow-xl space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-neutral-500 tracking-[0.3em] italic">
                                        <span>Live Scout Log</span>
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
                <div className="container mx-auto text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter italic mb-4">THE MATRIX.</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto font-bold italic text-lg text-foreground/40">Direct-action intelligence tools for the modern candidate.</p>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Globe, title: "Legitimacy Check", desc: "Instantly verify that the company is real and has a verifiable physical and digital footprint." },
                            { icon: MapPin, title: "HQ Audit", desc: "Make sure the office exists and corresponds to the reported job location. No shadow offices." },
                            { icon: Mail, title: "Contact Finder", desc: "The Scout finds the email patterns for the hiring team so you can reach out directly." },
                            { icon: Network, title: "Network Graph", desc: "Discover who worked there, who's hiring now, and how you can get a referral." }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 glass rounded-[2.5rem] border border-border hover:border-orange-500/20 transition-all shadow-xl">
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

                <div className="container mx-auto relative z-10 max-w-5xl">
                    <h2 className="text-5xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter text-foreground leading-none">BEYOND THE <span className="text-orange-400 not-italic">BOARD.</span></h2>
                    <p className="text-xl md:text-2xl text-neutral-500 mb-20 max-w-3xl mx-auto leading-relaxed italic font-medium">
                        The Scout doesn't just read the job board. It reads the company's entire pulse.
                        Get the context you need to dominate the conversation.
                    </p>

                    <div className="relative group p-1 glass rounded-[4rem] shadow-2xl">
                        <div className="glass-dark rounded-[3.9rem] p-16 flex flex-col items-center justify-center min-h-[400px] border border-border">
                            <div className="w-40 h-40 rounded-full glass border border-orange-500/20 flex items-center justify-center relative shadow-3xl">
                                <div className="absolute inset-0 rounded-full border-t-2 border-orange-500 animate-spin" style={{ animationDuration: '3s' }} />
                                <Target className="w-16 h-16 text-orange-400 shadow-glow-orange" />
                            </div>
                            <div className="mt-16 space-y-4">
                                <p className="text-3xl font-black text-foreground uppercase italic tracking-tighter">Market Pulse Active</p>
                                <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[6px] italic">Verified Infrastructure Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
