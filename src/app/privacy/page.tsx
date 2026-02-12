"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, FileText, Zap } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Privacy Protocol V2.1</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        YOUR DATA IS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">YOUR POWER.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        At IndeedBot, we don't just protect your privacy—we weaponize it in your favor.
                        Read how we handle your intelligence.
                    </p>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <PrivacyCard
                            icon={<Eye className="w-6 h-6" />}
                            title="Zero Visibility Policy"
                            description="We never sell your data to recruiters, job boards, or third parties. Your job hunt strategy remains your private intel."
                        />
                        <PrivacyCard
                            icon={<Lock className="w-6 h-6" />}
                            title="E2E Encryption"
                            description="All Dossier data and application history are encrypted at rest using AES-256 standards, ensuring extreme security."
                        />
                    </div>

                    <div className="glass p-12 md:p-20 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
                        <div className="prose prose-xl prose-neutral dark:prose-invert max-w-none prose-h3:text-3xl prose-h3:font-black prose-h3:italic prose-h3:uppercase prose-h3:tracking-tighter prose-p:text-neutral-500 prose-p:italic prose-p:font-medium">
                            <h3>1. Information We Collect</h3>
                            <p>
                                IndeedBot collects only the data necessary to landing you a job. This includes your contact info,
                                resume details, and job preferences. We ingest this into your personal "Dossier"—a private
                                intelligence hub that only you and your AI agents can access.
                            </p>

                            <h3>2. How We Use Your Intel</h3>
                            <p>
                                Your data is used exclusively to train your personal AI models. We use "Local Context" processing,
                                meaning your specific job match logic isn't leaked into a global pool. Your advantage stays unfair.
                            </p>

                            <h3>3. Retention & Deletion</h3>
                            <p>
                                You have the "Kill Switch" right. At any moment, you can purge your entire Dossier from our
                                infrastructure. Once deleted, it's gone from our primary nodes and backup clusters within 72 hours.
                            </p>

                            <blockquote className="border-l-primary bg-primary/5 p-8 rounded-3xl not-italic font-black text-2xl text-foreground">
                                "We believe privacy is a fundamental right for every candidate in an AI-driven market."
                            </blockquote>

                            <h3>4. Third Party Integration</h3>
                            <p>
                                We only communicate with Indeed.com and other job boards on your behalf. We do not share
                                your data with any "AI Training" aggregators or shadow recruiters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

const PrivacyCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="glass p-10 rounded-[2.5rem] border border-border hover:border-primary/20 transition-all group">
        <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4">{title}</h3>
        <p className="text-neutral-500 font-bold italic leading-relaxed">
            {description}
        </p>
    </div>
);
