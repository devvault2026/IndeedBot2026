"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Mail, ShieldCheck, Database, Target, Network } from "lucide-react";

export default function ScoutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 bg-white border-b border-neutral-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none -z-10"
                    style={{ backgroundImage: 'radial-gradient(#2557a7 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                            <Target className="w-3 h-3" />
                            <span>Agent Charlie / OSINT Suite</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2d2d2d] italic leading-tight">
                            CORPORATE <br /><span className="text-primary not-italic">SCOUTING.</span>
                        </h1>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            Don't apply into a void. Agent Charlie performs real-time open-source intelligence (OSINT) to
                            verify company legitimacy, find HQ locations, and discover the people behind the post.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                PERFORM DIRECT INTEL
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-200 shadow-2xl relative group overflow-hidden">
                            {/* Simulated Map UI */}
                            <div className="absolute inset-x-0 top-0 h-48 bg-neutral-200 opacity-20 group-hover:opacity-30 transition-opacity" />

                            <div className="relative space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-neutral-100">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">HQ Verification</p>
                                        <p className="text-sm font-bold text-[#2d2d2d]">1200 Innovation Way, Palo Alto, CA</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 bg-green-100 text-green-600 rounded">PHYSICAL_MATCH</span>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-neutral-100">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">Discovery</p>
                                        <p className="text-sm font-bold text-[#2d2d2d]">jane.doe@techcorp.io</p>
                                    </div>
                                    <span className="ml-auto text-[8px] font-black px-2 py-1 bg-primary/10 text-primary rounded">95% ACCURACY</span>
                                </div>

                                <div className="p-4 bg-[#0c0c0e] rounded-2xl shadow-xl space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-neutral-500 tracking-widest">
                                        <span>OSINT Stream</span>
                                        <span className="text-primary italic animate-pulse">Scanning...</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full w-1/3 bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: Globe,
                                title: "Domain Intelligence",
                                desc: "Crawls DNS and web signatures to verify the company actually exists and isn't a recruitment scam."
                            },
                            {
                                icon: MapPin,
                                title: "Physical Verification",
                                desc: "Cross-references job locations with Maps data to confirm established office hubs."
                            },
                            {
                                icon: Mail,
                                title: "Contact Prediction",
                                desc: "Analyzes company naming patterns to identify decision-makers for direct outreach."
                            },
                            {
                                icon: Network,
                                title: "Social Graphing",
                                desc: "Aggregates the digital footprint of the hiring team to help you tailor your networking strategy."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="indeed-card p-10 rounded-3xl">
                                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-[#2d2d2d] uppercase mb-4 italic tracking-tight">{feature.title}</h3>
                                <p className="text-neutral-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OSINT Visualization */}
            <section className="py-32 px-4 bg-neutral-50 border-y border-neutral-200 overflow-hidden relative">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter">Beyond the Job Board</h2>
                    <p className="text-lg text-neutral-600 mb-20 max-w-3xl mx-auto leading-relaxed">
                        Agent Charlie doesn't just read the job description. It reads the company's entire digital signature.
                        Get the context you need to stand out.
                    </p>

                    <div className="relative group p-1 bg-neutral-200 rounded-[3rem] shadow-inner">
                        <div className="bg-white rounded-[2.9rem] p-12 flex flex-col items-center justify-center min-h-[400px]">
                            <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center relative shadow-2xl bg-white">
                                <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin" style={{ animationDuration: '3s' }} />
                                <Target className="w-12 h-12 text-primary" />
                            </div>
                            <div className="mt-12 space-y-2">
                                <p className="text-2xl font-black text-[#2d2d2d] uppercase italic">Corporate Intelligence Pulse</p>
                                <p className="text-xs font-black text-neutral-400 uppercase tracking-[4px]">Verified Infrastructure Data</p>
                            </div>
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
