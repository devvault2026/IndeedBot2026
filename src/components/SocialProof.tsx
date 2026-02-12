"use client";

import { motion } from "framer-motion";
import { Chrome, ShieldCheck, Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "I stopped getting ghosted. The resume architect is actually insane. Landed a Senior PM role in 12 days.",
        author: "Alex M.",
        role: "Senior PM @ Fortune 500",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
        quote: "Landed 3 interviews in my first week. It feels like having a cheat code for the job market. Pure magic.",
        author: "Sarah J.",
        role: "Frontend Engineer",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        quote: "The company scout feature saved me from a toxic workplace. Worth every single penny of the pro plan.",
        author: "David K.",
        role: "Director of Growth",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=david"
    }
];

const companies = ["GOOGLE", "AMAZON", "MICROSOFT", "SHOPIFY", "NETFLIX", "SPOTIFY", "META", "AIRBNB", "STRIPE", "TESLA"];

export const SocialProof = () => {
    return (
        <section className="py-24 border-y border-border bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* TRUST STRIP */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-24">
                    {[
                        { icon: <Chrome className="w-5 h-5 text-primary" />, text: "Chrome Verified" },
                        { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Privacy First" },
                        { icon: <Star className="w-5 h-5 text-primary" />, text: "5/5 Stellar Rating" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 glass px-6 py-2 rounded-full border border-border">
                            {item.icon}
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* LOGO MARQUEE EFFECT */}
                <div className="text-center mb-24 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-12">
                        Candidates are landing roles at
                    </p>

                    <div className="flex overflow-hidden whitespace-nowrap">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-16 md:gap-32 items-center"
                        >
                            {[...companies, ...companies].map((company, i) => (
                                <span key={i} className="text-2xl md:text-4xl font-black italic text-foreground/20 tracking-tighter hover:text-primary transition-colors cursor-default">
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* TESTIMONIALS - BENTO STYLE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative glass p-10 rounded-3xl border border-border flex flex-col h-full bg-background/50 backdrop-blur-xl">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-primary fill-primary shadow-glow-primary" />
                                    ))}
                                </div>

                                <blockquote className="relative mb-10">
                                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-foreground/5" />
                                    <p className="text-lg text-neutral-500 font-medium italic leading-relaxed relative z-10">"{t.quote}"</p>
                                </blockquote>

                                <div className="mt-auto flex items-center gap-4 border-t border-border pt-8">
                                    <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary/20 p-0.5" />
                                    <div>
                                        <div className="text-sm font-black text-foreground uppercase tracking-wider">{t.author}</div>
                                        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
