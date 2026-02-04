import Link from "next/link";
import { ShieldCheck, Twitter, Github, Linkedin, Cpu } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#2d2d2d] text-white py-16 md:py-24 px-4 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/20">
                                <Cpu className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Indeed<span className="text-primary font-black">Bot</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            The world's first multi-agent career intelligence infrastructure. Liberate your career from the algorithm.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-400">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-400">
                                <Github className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-400">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-8">Platform</h4>
                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                            <li><Link href="/features/intelligence" className="hover:text-primary transition-colors">Career Intelligence</Link></li>
                            <li><Link href="/features/resume" className="hover:text-primary transition-colors">Resume Architect</Link></li>
                            <li><Link href="/features/scout" className="hover:text-primary transition-colors">Corporate Scout</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-8">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                            <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Intelligence Blog</Link></li>
                            <li><Link href="/status" className="hover:text-primary transition-colors">System Status</Link></li>
                            <li><Link href="/help" className="hover:text-primary transition-colors">Support Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-8">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/security" className="hover:text-primary transition-colors">Security Protocol</Link></li>
                        </ul>
                        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex items-center gap-2 text-green-500 text-[10px] font-black uppercase tracking-widest mb-1">
                                <ShieldCheck className="w-3 h-3" />
                                <span>Encrypted</span>
                            </div>
                            <p className="text-[10px] text-neutral-500">256-Bit SSL Secured Connection</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 font-medium">
                        © 2026 IndeedBot Systems Inc. All rights reserved.
                    </p>
                    <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[2px]">
                        Designed for the 1% Career
                    </p>
                </div>
            </div>
        </footer>
    );
};
