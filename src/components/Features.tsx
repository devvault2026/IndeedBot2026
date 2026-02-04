"use client";

import { motion } from "framer-motion";
import { FileText, Search, MessageSquare, Radar, ArrowUpRight, Brain, Target, Globe, Activity } from "lucide-react";
import Link from "next/link";

const agents = [
    {
        id: "alpha",
        name: "Market Intelligence Engine",
        role: "Strategic Analysis",
        description: "The engine behind your strategy. Analyzes job context and market positioning using DeepSeek V3 decision logic.",
        icon: Brain,
        status: "Operational"
    },
    {
        id: "bravo",
        name: "Candidate Positioning Engine",
        role: "Infrastructure Architect",
        description: "Rebuilds your credentials and narrative to align perfectly with hiring manager expectations and ATS compliance.",
        icon: Target,
        status: "Operational"
    },
    {
        id: "charlie",
        name: "Risk & Signal Analysis Engine",
        role: "Intelligence Gathering",
        description: "Performs deep background verification on entities to verify institutional legitimacy and surface growth signals.",
        icon: Globe,
        status: "Scanning"
    },
    {
        id: "delta",
        name: "Offer Strategy & Negotiation Engine",
        role: "Success Simulation",
        description: "Conducts high-fidelity performance simulations to prepare you for critical high-stakes evaluations with certainty.",
        icon: Activity,
        status: "Standby"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-16 md:py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-[#2d2d2d] tracking-tight italic">YOUR STRATEGIC <span className="text-primary">CAREER SUITE</span></h2>
                        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                            IndeedBot deploys a specialized multi-agent swarm to manage the complexity of the modern job market. We don't just "apply"—we optimize for success.
                        </p>
                    </div>
                    <Link href="/features/intelligence" className="group flex items-center gap-2 font-black text-primary text-xs md:text-sm uppercase tracking-widest border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
                        Explore Feature Depth <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="indeed-card p-6 md:p-10 rounded-2xl group cursor-default"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <agent.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-[2px] px-2 py-1 rounded bg-neutral-100 text-neutral-400 group-hover:bg-primary/10 group-hover:text-primary transition-all`}>
                                    {agent.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-black mb-1 text-[#2d2d2d]">{agent.name}</h3>
                            <p className="text-primary text-[11px] font-black uppercase tracking-[2px] mb-4 italic">{agent.role}</p>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {agent.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
