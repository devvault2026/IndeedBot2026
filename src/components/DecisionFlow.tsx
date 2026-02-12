"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Target, ShieldCheck, CheckCircle2, Radio, Briefcase, FileText, Globe, MessageSquare, Zap, Cpu, Network, Sparkles } from "lucide-react";

const team = [
    {
        name: "The Strategist",
        description: "Analyzes jobs instantly and tells you exactly how you match.",
        icon: Briefcase,
        color: "text-blue-400",
        tag: "INTEL_NODE"
    },
    {
        name: "The Resume Builder",
        description: "Automatically rewrites your resume for every specific role.",
        icon: FileText,
        color: "text-purple-400",
        tag: "ARCHITECT_CORE"
    },
    {
        name: "The Company Scout",
        description: "Researches companies and stakeholders before you apply.",
        icon: Globe,
        color: "text-orange-400",
        tag: "RECON_UNIT"
    },
    {
        name: "The Interview Coach",
        description: "Practices interview questions with real-time feedback.",
        icon: MessageSquare,
        color: "text-green-400",
        tag: "SIMULATION_CMD"
    }
];

export const AI_CareerTeam = () => {
    return (
        <section id="how-it-works" className="py-32 md:py-64 px-6 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full pointer-events-none opacity-30" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 shadow-2xl border-border"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Your AI Career Infrastructure</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-[10rem] font-black italic mb-10 text-foreground uppercase tracking-tighter leading-[0.8]">
                        MEET YOUR AI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">CAREER TEAM.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-400 font-medium italic leading-relaxed">
                        IndeedBot puts an elite team of AI agents inside your browser.
                        They work together in a decentralized swarm to turn your application
                        into a mathematical certainty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-foreground/10 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-700" />

                            <div className="relative h-full glass-dark p-12 rounded-[3.5rem] border border-border flex flex-col items-start hover:bg-background transition-all duration-500 shadow-2xl">
                                {/* Header Info */}
                                <div className="flex items-center justify-between w-full mb-12">
                                    <div className={`p-4 rounded-2xl glass border border-border group-hover:scale-110 transition-transform ${member.color} shadow-2xl shadow-current/5`}>
                                        <member.icon className="w-8 h-8" />
                                    </div>
                                    <div className="px-3 py-1 glass rounded-lg border border-border">
                                        <span className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">{member.tag}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h4 className="text-3xl font-black text-foreground uppercase mb-6 italic tracking-tighter group-hover:text-primary transition-colors">
                                    {member.name}
                                </h4>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-10 italic">
                                    {member.description}
                                </p>

                                {/* Footer Stats */}
                                <div className="mt-auto pt-10 border-t border-border w-full flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] font-black text-foreground/40 uppercase tracking-widest">Protocol Active</span>
                                    </div>
                                    <div className="text-[12px] font-black text-foreground/10 uppercase italic group-hover:text-primary/20 transition-colors">
                                        0{i + 1}
                                    </div>
                                </div>

                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <Cpu className="w-24 h-24 text-foreground" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Technical Tag */}
                <div className="mt-32 text-center opacity-20">
                    <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] text-foreground">
                        <Network className="w-4 h-4" />
                        Decentralized Career Intelligence V4.2
                    </div>
                </div>
            </div>
        </section>
    );
};
