"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Database, Search, ShieldCheck, Zap, Bookmark, BarChart, HardDrive, Lock } from "lucide-react";

export default function VaultPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 bg-white border-b border-neutral-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10"
                    style={{ backgroundImage: 'radial-gradient(#2557a7 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                            <Database className="w-3 h-3" />
                            <span>Job Vault / Persistence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2d2d2d] italic leading-tight uppercase">
                            STRATEGIC <br /><span className="text-primary not-italic">REPOSITORY.</span>
                        </h1>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            Don't lose your dream job to a refresh button. IndeedBot's persistent Job Vault saves
                            every opportunity you find, including full HTML descriptions, salary data, and benefits—locally in your browser.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                INITIALIZE VAULT
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-neutral-200 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
                                <div className="flex items-center gap-3">
                                    <Bookmark className="w-6 h-6 text-primary" />
                                    <span className="font-black text-[#2d2d2d] uppercase tracking-tighter italic">Opportunities Saved</span>
                                </div>
                                <span className="text-xl font-black text-primary">124</span>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Senior AI Architect", corp: "Future Solutions", salary: "$220k" },
                                    { title: "Lead Systems Engineer", corp: "Global Nexus", salary: "$195k" }
                                ].map((job, i) => (
                                    <div key={i} className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 flex items-center justify-between group-hover:border-primary/20 transition-all">
                                        <div>
                                            <p className="font-bold text-sm text-[#2d2d2d]">{job.title}</p>
                                            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{job.corp}</p>
                                        </div>
                                        <span className="text-sm font-black text-[#2d2d2d] tracking-widest">{job.salary}</span>
                                    </div>
                                ))}
                                <div className="p-4 bg-primary/5 rounded-xl flex items-center justify-center gap-2 border border-primary/10">
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                                        <Lock className="w-4 h-4 text-primary" />
                                    </motion.div>
                                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">Secured Locally</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: HardDrive,
                                title: "Local-First Storage",
                                desc: "All job data is stored in your Chrome indexedDB. Zero cloud uploads, 100% privacy."
                            },
                            {
                                icon: Search,
                                title: "Full-Text Search",
                                desc: "Search through every job description you've ever saved, even if the original posting is taken down."
                            },
                            {
                                icon: BarChart,
                                title: "Status Tracking",
                                desc: "Manage the entire lifecycle from 'Saved' to 'Interviewing' to 'Offer Secured' in one dashboard."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Data Integrity",
                                desc: "Auto-backups ensure your job hunt history is preserved throughout your career journey."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="indeed-card p-10 rounded-3xl">
                                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 shadow-sm">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-[#2d2d2d] uppercase mb-4 italic tracking-tight">{feature.title}</h3>
                                <p className="text-neutral-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Persistence Section */}
            <section className="py-32 px-4 bg-neutral-50 border-y border-neutral-200 overflow-hidden relative text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Memory for your Career</h2>
                    <p className="text-xl text-neutral-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                        Recruiters take down postings to hide their tracks. IndeedBot captures the truth the moment you see it,
                        preserving the context for your strategy.
                    </p>

                    <div className="flex items-center justify-center gap-12 grayscale opacity-50">
                        <div className="flex flex-col items-center gap-4">
                            <Database className="w-12 h-12" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Persistent</span>
                        </div>
                        <div className="w-px h-16 bg-neutral-300" />
                        <div className="flex flex-col items-center gap-4">
                            <Lock className="w-12 h-12" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Encrypted</span>
                        </div>
                        <div className="w-px h-16 bg-neutral-300" />
                        <div className="flex flex-col items-center gap-4">
                            <Zap className="w-12 h-12" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Instant</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-black text-[#2d2d2d] uppercase tracking-[3px]">© 2026 LIBERATED BY OFFICIALPR0X</p>
                </div>
            </footer>
        </main>
    );
}
