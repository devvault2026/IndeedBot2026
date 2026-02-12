"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Twitter, Github, Linkedin, Cpu, Zap, Globe, Lock } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    const pathname = usePathname();
    const isAuthPage = pathname?.includes("sign-in") ||
        pathname?.includes("sign-up") ||
        pathname?.includes("auth");

    if (isAuthPage) return null;

    return (
        <footer className="bg-background text-foreground py-24 md:py-32 px-4 relative overflow-hidden border-t border-border">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-32">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-border group-hover:border-primary/50 transition-colors">
                                <img
                                    src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                                    alt="IndeedBot"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-foreground uppercase italic">
                                Indeed<span className="text-primary not-italic">Bot</span>
                            </span>
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-medium">
                            The world's first multi-agent career intelligence infrastructure.
                            De-risking your professional growth through adversarial protocol.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink icon={<Twitter className="w-4 h-4" />} href="#" />
                            <SocialLink icon={<Github className="w-4 h-4" />} href="#" />
                            <SocialLink icon={<Linkedin className="w-4 h-4" />} href="#" />
                        </div>
                    </div>

                    {/* Links: Platform */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-10 italic">Features</h4>
                        <ul className="space-y-6 text-sm font-bold text-neutral-400">
                            <li><NavLink href="/features/intelligence">Job Search</NavLink></li>
                            <li><NavLink href="/features/resume">Resume Help</NavLink></li>
                            <li><NavLink href="/features/scout">Company Scouting</NavLink></li>
                            <li><NavLink href="/features/vault">Save Jobs</NavLink></li>
                        </ul>
                    </div>

                    {/* Links: Resources */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-10 italic">Resources</h4>
                        <ul className="space-y-6 text-sm font-bold text-neutral-400">
                            <li><NavLink href="/docs">How it Works</NavLink></li>
                            <li><NavLink href="/blog">Our Blog</NavLink></li>
                            <li><NavLink href="/status">System Status</NavLink></li>
                            <li><NavLink href="/help">Contact Support</NavLink></li>
                        </ul>
                    </div>

                    {/* Security & Legal */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-10 italic">Compliance</h4>
                            <ul className="space-y-6 text-sm font-bold text-neutral-400">
                                <li><NavLink href="/privacy">Privacy Protocol</NavLink></li>
                                <li><NavLink href="/terms">Rules of Engagement</NavLink></li>
                                <li><NavLink href="/security">Encryption Standards</NavLink></li>
                            </ul>
                        </div>

                        <div className="glass p-6 rounded-2xl border-border relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest mb-2 italic">
                                <Lock className="w-3 h-3" />
                                <span>Secured Node</span>
                            </div>
                            <p className="text-[10px] text-neutral-500 font-bold leading-none">AES-256 E2E PERSISTENCE ACTIVE</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-[10px] text-neutral-600 font-black uppercase tracking-widest italic">
                            © 2026 INDEEDBOT SYSTEMS INC.
                        </p>
                        <div className="flex items-center gap-2">
                            <Globe className="w-3 h-3 text-neutral-700" />
                            <span className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.2em]">Global Presence Active</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black text-foreground px-3 py-1 glass rounded-full border border-border italic">
                            CANDIDATE_FIRST_MISSION
                        </span>
                        <div className="h-4 w-px bg-border" />
                        <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em]">
                            Built for the 1%
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <Link
        href={href}
        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary/50 transition-all active:scale-95"
    >
        {icon}
    </Link>
);

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="hover:text-foreground transition-colors block italic">
        {children}
    </Link>
);
