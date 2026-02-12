"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Cpu, HardDrive, Key, Wind } from "lucide-react";

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-primary/20 blur-[180px] rounded-full animate-pulse" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <Lock className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Encryption Standards V4.0</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        FORTRESS-GRADE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">INTELLIGENCE.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        IndeedBot uses decentralized AES-256 E2E encryption.
                        We don't just store your data; we bury it in a digital vault.
                    </p>
                </div>
            </section>

            {/* SPECS GRID */}
            <section className="px-6 pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <SecurityMetric label="Encryption" value="AES-256-GCM" sub="Enterprise Grade" />
                        <SecurityMetric label="Uptime" value="99.99%" sub="Multi-Node Fault Tolerance" />
                        <SecurityMetric label="Auth" value="Clerk E2E" sub="Secure SSO & MFA" />
                        <SecurityMetric label="Architecture" value="Zero-Trust" sub="Identity Verified Access" />
                    </div>
                </div>
            </section>

            {/* SECURITY DEEP DIVE */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="glass p-12 rounded-[2.5rem] border border-border">
                                <h3 className="text-3xl font-black text-foreground uppercase italic tracking-tighter mb-6 flex items-center gap-4">
                                    <Cpu className="w-8 h-8 text-primary" />
                                    The Neural Vault
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium italic leading-relaxed mb-6">
                                    Your personal Dossier is stored across a fragmented cloud infrastructure.
                                    Even in the event of a node breach, your data remains indecipherable without
                                    your unique user-level key.
                                </p>
                            </div>

                            <div className="glass p-12 rounded-[2.5rem] border border-border">
                                <h3 className="text-3xl font-black text-foreground uppercase italic tracking-tighter mb-6 flex items-center gap-4">
                                    <Key className="w-8 h-8 text-primary" />
                                    Point-of-Origin Auth
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium italic leading-relaxed">
                                    IndeedBot requires authenticated handshakes from your browser extension
                                    before any automated actions are performed. No rogue scripts, no shadow applications.
                                </p>
                            </div>
                        </div>

                        <div className="glass p-12 md:p-16 rounded-[3rem] border border-primary/20 bg-primary/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl md:text-6xl font-black text-foreground uppercase italic tracking-tighter leading-none mb-8">
                                    SECURED BY <span className="text-primary not-italic">CLERK.</span>
                                </h3>
                                <p className="text-xl text-neutral-400 font-medium italic leading-relaxed mb-12">
                                    We've partnered with Clerk to provide industry-leading authentication.
                                    This means your login is protected by the same security layer used by
                                    the world's most advanced web applications.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 glass border-border rounded-2xl">
                                    <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
                                    <div className="text-[10px] font-black uppercase text-foreground">Anti-Phishing</div>
                                </div>
                                <div className="p-6 glass border-border rounded-2xl">
                                    <Wind className="w-8 h-8 text-blue-400 mb-4" />
                                    <div className="text-[10px] font-black uppercase text-foreground">Rate Limiting</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

const SecurityMetric = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="glass-dark p-8 rounded-3xl border border-border text-center group hover:border-primary/30 transition-all">
        <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-2 italic">{label}</div>
        <div className="text-3xl font-black text-foreground uppercase italic tracking-tighter mb-1 group-hover:text-primary transition-colors">{value}</div>
        <div className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">{sub}</div>
    </div>
);
