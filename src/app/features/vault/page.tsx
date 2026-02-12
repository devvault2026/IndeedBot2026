"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Database, Smartphone, HardDrive, Zap } from "lucide-react";
import Link from "next/link";

export default function VaultPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-blue-500/20 shadow-2xl"
                    >
                        <Lock className="w-4 h-4 text-blue-400 shadow-glow-blue" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">The Vault Online</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black mb-10 text-foreground italic uppercase tracking-tighter leading-[0.8]">
                        PRIVATE <br /><span className="text-blue-400 not-italic">SOVEREIGNTY.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 mb-16 leading-relaxed font-medium max-w-3xl italic">
                        Your career data shouldn't be for sale. The Vault encrypts and stores your jobs,
                        resumes, and search history locally—ensuring absolute privacy and 24/7 access.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/sign-up">
                            <button className="px-12 py-6 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-sm">
                                Secure Your Data — Free
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Visualization Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="glass-dark p-2 rounded-[4rem] border border-border shadow-3xl bg-background/40 relative overflow-hidden group">
                        <div className="glass rounded-[3.9rem] p-12 md:p-24 border border-border relative">
                            {/* Grid UI background */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">
                                <div className="space-y-12">
                                    <h2 className="text-5xl font-black text-foreground italic uppercase tracking-tighter leading-tight">HARDENED <br />ENCRYPTION.</h2>
                                    <div className="space-y-8">
                                        {[
                                            { icon: ShieldCheck, title: "Zero-Knowledge", desc: "We don't hold your keys. Your data is encrypted with AES-256 before it ever hits the cache." },
                                            { icon: Database, title: "Local Persistence", desc: "Advanced storage implementation allows for complex queries and lead management without a server." },
                                            { icon: Zap, title: "Offline Access", desc: "Access your intelligence anywhere, even without a connection. Your vault is always local." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 group">
                                                <div className="shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400 border-blue-500/20 group-hover:scale-110 transition-transform">
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-foreground uppercase italic tracking-tighter mb-2">{item.title}</h3>
                                                    <p className="text-neutral-500 font-bold italic leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="aspect-square glass rounded-[3rem] border border-border shadow-2xl p-12 flex flex-col items-center justify-center gap-8 relative overflow-hidden bg-background/60">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                                        <div className="w-48 h-48 rounded-full border border-blue-500/20 flex items-center justify-center relative">
                                            <div className="absolute inset-0 rounded-full border-t-2 border-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
                                            <div className="absolute inset-4 rounded-full border-b-2 border-blue-600 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                                            <Lock className="w-20 h-20 text-blue-400 shadow-glow-blue" />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <p className="text-2xl font-black text-foreground tracking-widest uppercase italic">Vault_Active</p>
                                            <p className="text-[10px] font-black text-blue-400/50 uppercase tracking-[6px] italic">STATUS: ENCRYPTED</p>
                                        </div>
                                    </div>

                                    {/* Floating Element */}
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -top-10 -right-10 glass p-6 rounded-[2rem] border border-border shadow-2xl flex items-center gap-4 bg-background/80"
                                    >
                                        <HardDrive className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <p className="text-[10px] font-black text-foreground/40 uppercase italic tracking-widest">Local Data</p>
                                            <p className="text-lg font-black text-foreground italic">Secured</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tactical Advantage */}
            <section className="py-48 px-6 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

                <h2 className="text-5xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter text-foreground leading-none relative z-10">
                    YOUR DATA.<br />
                    <span className="text-blue-400 not-italic">YOUR FUTURE.</span>
                </h2>
                <Link href="/sign-up">
                    <button className="px-14 py-7 bg-foreground text-background font-black text-2xl rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] relative z-10">
                        Secure Your Future — Free
                    </button>
                </Link>
            </section>
        </main>
    );
}
