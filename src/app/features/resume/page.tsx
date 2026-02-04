"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { FileText, Edit, CheckCircle2, Zap, Download, Layout, LayoutGrid } from "lucide-react";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 bg-[#f8f9fa] border-b border-neutral-200">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                            <FileText className="w-3 h-3" />
                            <span>Agent Bravo / Resume Suite</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2d2d2d] italic leading-tight">
                            PRECISION <br /><span className="text-primary not-italic">ARCHITECTING.</span>
                        </h1>
                        <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            Stop guessing what the ATS wants. Agent Bravo builds high-converting, machine-readable resumes
                            that bypass digital filters and speak directly to hiring psychology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                BUILD YOUR MASTERPIECE
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-neutral-200 relative overflow-hidden group">
                            <div className="bg-white p-10 min-h-[500px] border border-neutral-100 rounded-[2rem] relative">
                                <div className="border-b-2 border-primary/5 pb-6 mb-8">
                                    <div className="h-8 w-48 bg-neutral-900 rounded mb-2" />
                                    <div className="h-3 w-32 bg-neutral-200 rounded" />
                                </div>
                                <div className="space-y-6">
                                    <div className="h-4 w-full bg-neutral-100 rounded" />
                                    <div className="h-4 w-5/6 bg-neutral-50 rounded" />
                                    <div className="h-4 w-4/6 bg-neutral-100 rounded" />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg italic text-xs text-neutral-600"
                                    >
                                        "Dynamically restructured this bullet point to highlight 'Operational Efficiency' to match the current Job Posting requirements."
                                    </motion.div>
                                </div>

                                {/* Floating Tooltips */}
                                <div className="absolute top-1/4 right-8 bg-green-500 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    ATS Optimized
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black text-[#2d2d2d] uppercase tracking-tighter italic mb-4">Inside the Architect Suite</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Every tool you need to transform your experience into an undeniable value proposition.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex gap-8 group">
                            <div className="shrink-0 w-20 h-20 bg-neutral-50 border border-neutral-100 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <LayoutGrid className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase mb-4 italic">Split-Screen IDE</h3>
                                <p className="text-neutral-500 font-medium leading-relaxed">
                                    Edit your resume side-by-side with the job posting. Watch Agent Bravo highlight exactly where you need to adapt in real-time.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 group">
                            <div className="shrink-0 w-20 h-20 bg-neutral-50 border border-neutral-100 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Zap className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase mb-4 italic">Contextual Optimization</h3>
                                <p className="text-neutral-500 font-medium leading-relaxed">
                                    Click any section of your resume and ask the AI to "Target it." Bravo will rewrite specifically for the currently viewed job.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 group">
                            <div className="shrink-0 w-20 h-20 bg-neutral-50 border border-neutral-100 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Layout className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase mb-4 italic">Machine-Readable Exports</h3>
                                <p className="text-neutral-500 font-medium leading-relaxed">
                                    Export in clean PDF or DOCX formats engineered to be 100% compliant with Greenhouse, Lever, Workday, and other modern ATS.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 group">
                            <div className="shrink-0 w-20 h-20 bg-neutral-50 border border-neutral-100 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#2d2d2d] uppercase mb-4 italic">Psychological Audit</h3>
                                <p className="text-neutral-500 font-medium leading-relaxed">
                                    Get a "Score" before you apply. Agent Bravo predicts how the recruiter—and the AI—will perceive your experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Tactical CTA */}
            <section className="py-40 px-4 bg-white relative flex flex-col items-center border-t border-neutral-100">
                <h2 className="text-5xl md:text-7xl font-black italic mb-10 text-[#2d2d2d] uppercase tracking-tighter text-center">
                    YOUR RESUME IS<br />
                    <span className="text-primary not-italic">NOW A PRODUCT.</span>
                </h2>
                <button className="px-14 py-7 bg-primary text-white font-black text-2xl rounded-2xl shadow-2xl shadow-primary/30 hover:bg-indeed-blue-hover hover:scale-105 transition-all">
                    BUILD YOUR LEGACY
                </button>
            </section>

            <footer className="py-20 px-4 bg-white border-t border-neutral-100">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-black text-[#2d2d2d] uppercase tracking-[3px]">© 2026 LIBERATED BY OFFICIALPR0X</p>
                </div>
            </footer>
        </main>
    );
}
