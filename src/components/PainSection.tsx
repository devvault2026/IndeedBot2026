"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Ghost, XCircle, HelpCircle, ArrowDown, Zap, Scan, Search, Target, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        title: "SMART JOB SCAN",
        desc: "We identify hidden salary data and filter out ghost jobs so you don't waste time.",
        icon: Scan,
        color: "text-blue-400"
    },
    {
        title: "KEYWORD INSIGHTS",
        desc: "See exactly which skills and keywords the recruiters are actually filtering for.",
        icon: Search,
        color: "text-purple-400"
    },
    {
        title: "RESUME OPTIMIZATION",
        desc: "We instantly rewrite your bullet points to align perfectly with the job description.",
        icon: Target,
        color: "text-primary"
    },
    {
        title: "INTERVIEW CONFIDENCE",
        desc: "Walk into every interview prepared with custom insights and a high match score.",
        icon: CheckCircle2,
        color: "text-green-400"
    }
];

export const PainSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pains = [
        {
            title: "Ghosted after applying",
            desc: "“You never know why.”",
            icon: Ghost,
            color: "text-blue-400"
        },
        {
            title: "Resume rejected by ATS",
            desc: "“You never know what’s missing.”",
            icon: XCircle,
            color: "text-red-400"
        },
        {
            title: "Interviews feel unpredictable",
            desc: "“You never know what to say.”",
            icon: HelpCircle,
            color: "text-purple-400"
        }
    ];

    return (
        <section ref={containerRef} className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-red-500/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* HEADLINE */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-red-500/20"
                    >
                        <XCircle className="w-4 h-4 text-red-500 shadow-glow-red" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50">Market Inefficiency Detected</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black italic text-foreground uppercase tracking-tighter mb-10 leading-[0.8]">
                        JOB HUNTING IS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-800 not-italic">BROKEN.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-500 font-medium italic">EVERY CANDIDATE FACES THE SAME VOID.</p>
                </div>

                {/* PAIN CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-48">
                    {pains.map((pain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 glass shadow-2xl rounded-[2.5rem] text-center group hover:bg-foreground/5 transition-all border border-border"
                        >
                            <div className={`w-20 h-20 rounded-3xl glass flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform ${pain.color} shadow-2xl shadow-current/10 border-current/20`}>
                                <pain.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-foreground uppercase mb-5 italic tracking-tighter">
                                {pain.title}
                            </h3>
                            <p className="text-neutral-500 text-lg font-bold italic leading-relaxed">
                                {pain.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- STEPS OF ACCOMPLISHMENT (SCROLL BRIDGE) --- */}
                <div className="relative pt-24">
                    <div className="text-center mb-24">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-flex p-4 rounded-full glass text-primary border-primary/20 mb-8"
                        >
                            <ArrowDown className="w-6 h-6" />
                        </motion.div>
                        <h3 className="text-4xl md:text-6xl font-black text-foreground uppercase italic tracking-tighter leading-none">
                            INDEEDBOT <span className="text-primary not-italic">FIXES THE GUESSING.</span>
                        </h3>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />
                        <motion.div
                            className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 origin-top"
                            style={{ scaleY: useTransform(scrollYProgress, [0.6, 1], [0, 1]) }}
                        />

                        <div className="space-y-24">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-10%" }}
                                    className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}
                                >
                                    {/* Icon Node */}
                                    <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl glass border border-border flex items-center justify-center bg-background z-20 shadow-2xl">
                                        <step.icon className={`w-8 h-8 ${step.color}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-[45%] pl-20 md:pl-0">
                                        <div className="glass p-8 rounded-[2rem] border border-border hover:border-primary/20 transition-colors group">
                                            <div className="flex items-center gap-4 mb-4 justify-start md:group-odd:justify-end">
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${step.color}`}>Step 0{i + 1}</span>
                                            </div>
                                            <h4 className="text-xl font-black text-foreground uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h4>
                                            <p className="text-neutral-500 font-medium italic text-lg leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer for layout */}
                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
