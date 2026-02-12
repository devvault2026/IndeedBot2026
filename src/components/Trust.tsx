"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, UserCheck, HardDrive, Share2, Key, Settings } from "lucide-react";

const trustFactors = [
    {
        title: "Your data stays in your browser",
        description: "Everything IndeedBot analyzes stays on your machine. We don't store your resume or personal data on our servers.",
        icon: HardDrive,
        color: "text-blue-400"
    },
    {
        title: "We don’t sell your data",
        description: "Our business model is simple: we sell career tools, not your identity. Your candidate profile is never for sale.",
        icon: Share2,
        color: "text-purple-400"
    },
    {
        title: "We don’t access your accounts",
        description: "IndeedBot works as an overlay. It never asks for your login credentials or gains access to your private accounts.",
        icon: Key,
        color: "text-orange-400"
    },
    {
        title: "You control everything",
        description: "Enable or disable features with one click. You have full sovereignty over how and when the AI assists you.",
        icon: Settings,
        color: "text-green-400"
    }
];

export const Trust = () => {
    return (
        <section id="privacy" className="py-24 md:py-48 px-4 bg-background border-y border-border relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/20"
                        >
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Privacy First Architecture</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-8xl font-black italic mb-8 text-foreground uppercase tracking-tighter leading-none">
                            BUILT TO PROTECT <br />
                            <span className="text-gradient-blue not-italic">YOUR PRIVACY.</span>
                        </h2>

                        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-12 max-w-xl italic">
                            People fear installing extensions. We built IndeedBot with a
                            Zero-Trust philosophy because your career data is sacred.
                            No tracking. No backdoors. No compromise.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-5 p-6 rounded-[2.5rem] glass border-border group hover:border-primary/30 transition-all shadow-premium">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <UserCheck className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-black text-foreground uppercase italic tracking-widest">
                                    Chrome Verified Security
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {trustFactors.map((factor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[3rem] glass border-border hover:bg-foreground/5 transition-all group relative overflow-hidden shadow-premium"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${factor.color}`}>
                                    <factor.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-foreground uppercase mb-4 tracking-tighter italic">{factor.title}</h4>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">{factor.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
