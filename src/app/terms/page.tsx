"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { FileText, Gavel, Scale, AlertTriangle, CheckCircle, Zap } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <Gavel className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Rules of Engagement</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        THE TERMS OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">VICTORY.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        IndeedBot is a performance tool. To maintain the integrity of our
                        network, we follow a strict set of mission parameters.
                    </p>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <TermsCore icon={<CheckCircle className="w-5 h-5" />} title="Fair Use" text="Use the bot to enhance your career, not to spam or disrupt others." />
                        <TermsCore icon={<Scale className="w-5 h-5" />} title="Ethics" text="Always tell the truth in your AI-generated resumes and applications." />
                        <TermsCore icon={<AlertTriangle className="w-5 h-5" />} title="Abuse" text="Violating system limits or bot detection can lead to node termination." />
                    </div>

                    <div className="glass p-12 md:p-20 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
                        <div className="prose prose-xl prose-neutral dark:prose-invert max-w-none prose-h3:text-3xl prose-h3:font-black prose-h3:italic prose-h3:uppercase prose-h3:tracking-tighter prose-p:text-neutral-500 prose-p:italic prose-p:font-medium">
                            <h3>1. Acceptance of Protocol</h3>
                            <p>
                                By initializing IndeedBot, you agree to these Rules of Engagement. If you do not agree to the
                                parameters of the mission, you are not authorized to access the infrastructure.
                            </p>

                            <h3>2. The "Honesty Clause"</h3>
                            <p>
                                Our AI is designed to amplify your strengths, not invent them. Users found using IndeedBot
                                to generate fraudulent credentials or falsify work history will have their accounts
                                blacklisted from the 2026 network.
                            </p>

                            <h3>3. System Limitations</h3>
                            <p>
                                To protect the collective "Reputation Score" of IndeedBot users, we implement rate-limiting
                                on applications. This ensures that every bot-assisted application remains high-quality
                                and doesn't trigger platform-wide spam filters.
                            </p>

                            <blockquote className="border-l-primary bg-primary/5 p-8 rounded-3xl not-italic font-black text-2xl text-foreground">
                                "The bot is a multiplier. Multiplying zero still results in zero. Stay authentic."
                            </blockquote>

                            <h3>4. Subscription & Access</h3>
                            <p>
                                Access to the "Elite Tier" is granted on a per-seat basis. Sharing credentials or
                                scraping our proprietary market analysis is strictly prohibited and monitored by
                                our watchdog agents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

const TermsCore = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="glass p-8 rounded-3xl border border-border flex items-start gap-4 hover:border-primary/20 transition-all">
        <div className="p-3 glass rounded-xl text-primary shrink-0">{icon}</div>
        <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-1 italic">{title}</h4>
            <p className="text-[11px] text-neutral-500 font-bold italic leading-snug">{text}</p>
        </div>
    </div>
);
