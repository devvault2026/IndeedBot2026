"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { Clock, User, ArrowRight, Search, Zap } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* BLOG HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">The IndeedBot Journal</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        INSIGHTS FOR THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">ELITE HUNTER.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        Expert strategies, AI news, and career-crushing tips to help you
                        stay ahead in the most competitive job market in history.
                    </p>
                </div>
            </section>

            {/* SEARCH & FILTERS BAR (Visual only for now) */}
            <section className="px-6 mb-20">
                <div className="container mx-auto">
                    <div className="glass p-4 rounded-[2rem] border border-border flex flex-col md:flex-row items-center gap-4 shadow-xl">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-background/50 border border-border rounded-2xl py-4 pl-16 pr-6 focus:outline-none focus:border-primary/50 text-sm font-bold placeholder:text-neutral-600"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            {["All", "Strategy", "Insights", "Resume Tips", "AI News"].map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${cat === "All" ? 'bg-primary text-white' : 'glass border-border text-neutral-500 hover:text-foreground'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED POST */}
            <section className="px-6 mb-32">
                <div className="container mx-auto">
                    <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group relative block aspect-[21/9] rounded-[3rem] overflow-hidden border border-border shadow-2xl">
                        <img
                            src={BLOG_POSTS[0].image}
                            alt={BLOG_POSTS[0].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {BLOG_POSTS[0].category}
                                </span>
                                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    {BLOG_POSTS[0].readTime}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none mb-6">
                                {BLOG_POSTS[0].title}
                            </h2>
                            <p className="text-white/70 text-lg md:text-xl font-medium italic mb-8 line-clamp-2 max-w-xl">
                                {BLOG_POSTS[0].description}
                            </p>
                            <div className="flex items-center gap-4">
                                <img src={BLOG_POSTS[0].author.avatar} alt={BLOG_POSTS[0].author.name} className="w-10 h-10 rounded-full border border-white/20" />
                                <div>
                                    <div className="text-white font-black text-sm">{BLOG_POSTS[0].author.name}</div>
                                    <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{BLOG_POSTS[0].author.role}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="px-6 pb-32">
                <div className="container mx-auto">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-neutral-500 italic mb-12">Latest Intelligence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {BLOG_POSTS.slice(1).map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-background glass-dark border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all shadow-xl">
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-4 py-1.5 bg-background/50 backdrop-blur-md text-foreground text-[8px] font-black uppercase tracking-widest rounded-full border border-border">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4 text-neutral-500 text-[10px] font-black uppercase tracking-widest">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                            <span>•</span>
                                            {post.date}
                                        </div>
                                        <h4 className="text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
                                            {post.title}
                                        </h4>
                                        <p className="text-neutral-500 text-sm font-medium italic mb-8 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border border-border" />
                                                <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">{post.author.name}</span>
                                            </div>
                                            <div className="p-3 rounded-xl glass border border-border group-hover:bg-primary group-hover:text-white transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[150px] animate-pulse" />
                <div className="container mx-auto relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
                        NEVER MISS A <span className="text-primary not-italic">BREAKTHROUGH.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium italic opacity-70 mb-12">
                        Get the same insights being used by the top 1% of recruiters
                        delivered straight to your inbox. No spam, only intel.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="your@elite-email.com"
                            className="flex-1 w-full bg-background/10 border border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-primary placeholder:text-white/30 font-black text-sm uppercase tracking-widest"
                        />
                        <button className="w-full sm:w-auto px-12 py-6 bg-primary text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.3em] shadow-glow-primary hover:scale-[1.05] active:scale-95 transition-all">
                            Join the Journal
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
