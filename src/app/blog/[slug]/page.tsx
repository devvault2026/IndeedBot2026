"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-posts";
import { Clock, Calendar, ArrowLeft, Share2, Twitter, Linkedin, Link as LinkIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const foundPost = BLOG_POSTS.find(p => p.slug === params.slug);
        if (foundPost) {
            setPost(foundPost);
        } else {
            router.push('/blog');
        }
    }, [params.slug, router]);

    if (!post) {
        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 pt-10">
            <Navbar />

            {/* ARTICE HERO */}
            <article className="pt-24 pb-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 hover:text-primary transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Intelligence
                    </Link>

                    <header className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-6 text-neutral-500 text-[10px] font-black uppercase tracking-widest">
                                <span className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {post.date}
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-foreground mb-10">
                            {post.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-border">
                            <div className="flex items-center gap-4">
                                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-border" />
                                <div>
                                    <div className="text-foreground font-black text-sm uppercase italic tracking-tight">{post.author.name}</div>
                                    <div className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{post.author.role}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="p-3 glass border-border hover:text-primary transition-all rounded-xl">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="p-3 glass border-border hover:text-primary transition-all rounded-xl">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="p-3 glass border-border hover:text-primary transition-all rounded-xl">
                                    <LinkIcon className="w-4 h-4" />
                                </button>
                                <button className="px-6 py-3 glass border-border hover:text-primary transition-all rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-border mb-20 shadow-2xl relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>

                    {/* CONTENT AREA */}
                    <div className="flex flex-col lg:flex-row gap-16 relative">
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 space-y-12 h-fit lg:sticky lg:top-32">
                            <div className="glass p-8 rounded-[2rem] border border-border shadow-2xl">
                                <div className="flex items-center gap-3 text-primary mb-4">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Bot Insight</span>
                                </div>
                                <p className="text-xs text-neutral-400 font-medium italic leading-relaxed">
                                    "Applying these strategies can increase your interview callback rate by up to 300% when used with our Strategist agent."
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 underline decoration-primary decoration-4 underline-offset-8 mb-8">Related Intel</h4>
                                {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2).map((p) => (
                                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block space-y-2">
                                        <div className="text-[11px] font-black text-foreground uppercase italic tracking-tighter group-hover:text-primary transition-colors">
                                            {p.title}
                                        </div>
                                        <div className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">{p.date}</div>
                                    </Link>
                                ))}
                            </div>
                        </aside>

                        {/* Main Body */}
                        <div className="lg:w-3/4">
                            <div
                                className="blog-content prose prose-xl prose-neutral dark:prose-invert max-w-none prose-h3:text-3xl prose-h3:font-black prose-h3:italic prose-h3:uppercase prose-h3:tracking-tighter prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:font-black prose-blockquote:text-2xl prose-blockquote:text-foreground prose-strong:text-primary"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                                <div className="flex items-center gap-2">
                                    {["IndeedBot", "Career Strategy", "AI", "Elite"].map(tag => (
                                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-lg text-neutral-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors">
                                    Report article <Share2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* PRE-FOOTER CTA */}
            <section className="py-32 px-6 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[180px] rounded-full animate-pulse" />
                <div className="container mx-auto relative z-10 max-w-6xl text-center">
                    <h3 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-10">
                        READY TO <span className="text-primary not-italic">WIN THE JOB?</span>
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/sign-up">
                            <button className="px-12 py-7 bg-foreground text-background font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                                Create Your Account — Free
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="px-12 py-7 glass border-border text-foreground font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl hover:bg-foreground/5 transition-all">
                                Explore Capabilities
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .blog-content p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    font-weight: 500;
                    font-style: italic;
                    color: hsl(var(--foreground) / 0.7);
                    margin-bottom: 2rem;
                }
                .blog-content h3 {
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content ul, .blog-content ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: hsl(var(--foreground) / 0.7);
                    margin-bottom: 1rem;
                    padding-left: 0.5rem;
                }
                .blog-content li strong {
                    color: hsl(var(--foreground));
                    font-weight: 900;
                    text-transform: uppercase;
                    font-style: normal;
                }
            `}</style>
        </main>
    );
}
