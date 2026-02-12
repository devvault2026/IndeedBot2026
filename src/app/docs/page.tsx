"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Book,
    Code,
    ShieldCheck,
    Zap,
    Brain,
    ChevronRight,
    ExternalLink,
    Terminal as TerminalIcon,
    Cpu,
    Target,
    Activity,
    FileText,
    MessageSquare,
    CheckCircle2,
    Info
} from "lucide-react";

const sidebarLinks = [
    {
        title: "THE BASICS",
        links: [
            { name: "What is IndeedBot?", id: "welcome" },
            { name: "How it Works (Simple)", id: "how-it-works" },
            { name: "Who is this for?", id: "who-it-is-for" }
        ]
    },
    {
        title: "GETTING STARTED",
        links: [
            { name: "Quick Start", id: "quickstart" },
            { name: "Connecting DeepSeek", id: "deepseek-setup" },
            { name: "Technical Installation", id: "install" }
        ]
    },
    {
        title: "DAILY OPERATIONS",
        links: [
            { name: "Analyzing Job Posts", id: "analyzing" },
            { name: "Understanding Scores", id: "scoring" },
            { name: "The Intelligence Vault", id: "vault-init" }
        ]
    },
    {
        title: "SYSTEM INTELLIGENCE",
        links: [
            { name: "Executive Strategy", id: "executive" },
            { name: "Engineering Blueprint", id: "engineering" },
            { name: "Risk & Security", id: "risk" }
        ]
    },
    {
        title: "RESOURCES",
        links: [
            { name: "Troubleshooting", id: "troubleshoot" },
            { name: "JSON Knowledge Pack", id: "json-pack" }
        ]
    }
];

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("welcome");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header / Sub-nav */}
            <div className="pt-24 border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-40">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                            alt="IndeedBot Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h1 className="text-xl font-black italic uppercase tracking-tighter text-foreground">Knowledge base</h1>
                            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1">Documentation & Strategy Guide v4.0.0</p>
                        </div>
                    </div>

                    <div className="relative group hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search Documentation..."
                            className="bg-foreground/5 border border-border rounded-full py-2.5 pl-11 pr-6 text-sm font-medium w-80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-neutral-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex">
                {/* Sidebar */}
                <aside className="w-80 shrink-0 border-r border-border h-[calc(100vh-140px)] sticky top-[140px] overflow-y-auto hidden lg:block p-8">
                    <div className="space-y-12">
                        {sidebarLinks.map((category) => (
                            <div key={category.title}>
                                <h3 className="text-[10px] font-black text-neutral-400 uppercase tracking-[3px] mb-6">{category.title}</h3>
                                <div className="space-y-2">
                                    {category.links.map((link) => (
                                        <button
                                            key={link.id}
                                            onClick={() => setActiveSection(link.id)}
                                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeSection === link.id
                                                ? 'bg-primary/5 text-primary border border-primary/10 shadow-sm'
                                                : 'text-neutral-500 hover:bg-foreground/5 hover:text-foreground'
                                                }`}
                                        >
                                            {link.name}
                                            {activeSection === link.id && <ChevronRight className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Content Area */}
                <section className="flex-1 p-8 md:p-16 min-h-[calc(100vh-140px)]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-3xl"
                        >
                            {activeSection === "welcome" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <ShieldCheck className="w-3 h-3 fill-primary" />
                                        <span>Status: Official Release</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">What is IndeedBot?</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-10">
                                            IndeedBot 2026 is your personal **AI Career Intelligence** system. Think of it as a high-tech "upgrade" for your job search that lives right in your browser.
                                        </p>
                                        <div className="grid grid-cols-1 gap-6 mb-12">
                                            {[
                                                { title: "It's a Scanner", desc: "It reads job posts on Indeed and LinkedIn to find things humans usually miss—like hidden salaries and recruiter intent." },
                                                { title: "It's a Writer", desc: "It helps you rewrite your resume and cover letters so they pass through messy automated filters (ATS) with ease." },
                                                { title: "It's a Private Vault", desc: "Most importantly: it keeps everything on YOUR computer. We never see your data, your resume, or your secrets." }
                                            ].map((item, i) => (
                                                <div key={i} className="p-8 rounded-[2rem] bg-foreground/5 border border-border">
                                                    <h4 className="text-sm font-black text-primary uppercase tracking-[2px] mb-2">{item.title}</h4>
                                                    <p className="text-sm text-neutral-500 font-medium">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "how-it-works" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Cpu className="w-3 h-3 fill-primary" />
                                        <span>System Protocol</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">How it Works (Simple)</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-12">
                                            IndeedBot uses four specialized "Engines" that work together to secure your next role.
                                        </p>
                                        <div className="space-y-10">
                                            <div className="flex gap-8">
                                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black italic shadow-lg">1</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground mb-2 uppercase">The Scout (Signals)</h4>
                                                    <p className="text-neutral-500 font-medium">When you view a job, the bot quickly "scouts" the page. It extracts keywords, salary ranges, and even checks if the company is actually hiring or just "ghost posting."</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-8">
                                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-foreground/10 text-neutral-400 flex items-center justify-center font-black italic">2</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground mb-2 uppercase">The Brain (Reasoning)</h4>
                                                    <p className="text-neutral-500 font-medium">It sends that data to a powerful AI (DeepSeek) which thinks through the best strategy for you. It decides exactly what parts of your experience to highlight.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-8">
                                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-foreground/10 text-neutral-400 flex items-center justify-center font-black italic">3</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground mb-2 uppercase">The Architect (Design)</h4>
                                                    <p className="text-neutral-500 font-medium">The bot then builds a custom application package for that specific job. It doesn't use templates; it builds a 1:1 match for the hiring manager.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "who-it-is-for" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Target className="w-3 h-3 fill-primary" />
                                        <span>Target Audience</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Who is this for?</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-8 rounded-[2.5rem] bg-foreground text-background">
                                                <h4 className="text-sm font-black text-primary uppercase tracking-[2px] mb-4">High-Value Pros</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed font-medium">For those applying to roles where precision matters more than volume. We help you win the roles that pay $150k+.</p>
                                            </div>
                                            <div className="p-8 rounded-[2.5rem] bg-foreground/5">
                                                <h4 className="text-sm font-black text-foreground uppercase tracking-[2px] mb-4">Tech-Savvy Changers</h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed font-medium">If you are tired of clicking "Easy Apply" and getting zero responses, this system is for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "quickstart" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Zap className="w-3 h-3 fill-green-600" />
                                        <span>2 Minute Setup</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Quick Start</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <div className="space-y-12">
                                            <div className="relative pl-12 border-l-2 border-border">
                                                <h4 className="text-xl font-bold text-foreground mb-4 uppercase">1. Install the Extension</h4>
                                                <p className="text-neutral-500 font-medium mb-6">Download the folder, go to `chrome://extensions`, turn on "Developer Mode", and click "Load Unpacked".</p>
                                            </div>
                                            <div className="relative pl-12 border-l-2 border-border">
                                                <h4 className="text-xl font-bold text-foreground mb-4 uppercase">2. Add your API Key</h4>
                                                <p className="text-neutral-500 font-medium mb-6">Open the bot on Indeed.com, go to Settings, and paste your DeepSeek API key. This is the "fuel" for the AI.</p>
                                            </div>
                                            <div className="relative pl-12 border-l-2 border-border">
                                                <h4 className="text-xl font-bold text-foreground mb-4 uppercase">3. Start Browsing</h4>
                                                <p className="text-neutral-500 font-medium">Just visit any job post on Indeed. The bot will automatically wake up and start analyzing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "deepseek-setup" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Code className="w-3 h-3 fill-orange-600" />
                                        <span>API Configuration</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Connecting DeepSeek</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-10">We use DeepSeek because it is faster and cheaper than OpenAI for high-stakes reasoning.</p>
                                        <div className="bg-foreground/5 p-10 rounded-[3rem] border border-border">
                                            <h4 className="text-lg font-bold mb-4 uppercase italic">Where to get a key?</h4>
                                            <ol className="space-y-4 text-sm text-neutral-600 font-medium list-decimal pl-6">
                                                <li>Go to <a href="https://platform.deepseek.com" className="text-primary hover:underline">platform.deepseek.com</a></li>
                                                <li>Create an account and add $5 or $10 of credit (this will last months).</li>
                                                <li>Create a "New API Key" and copy it.</li>
                                                <li>Paste it into the IndeedBot settings panel.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "analyzing" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Search className="w-3 h-3 fill-primary" />
                                        <span>User Operations</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Analyzing Job Posts</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-10">You don't need to click anything to start the analysis. The bot is proactive.</p>
                                        <div className="space-y-8">
                                            <div className="p-8 border border-border rounded-3xl">
                                                <h4 className="text-sm font-black text-foreground uppercase mb-2">The Pulse Window</h4>
                                                <p className="text-sm text-neutral-500 leading-relaxed">As you scroll, a small window appears showing "Thinking...". This is the AI reading the page in real-time.</p>
                                            </div>
                                            <div className="p-8 border border-border rounded-3xl">
                                                <h4 className="text-sm font-black text-foreground uppercase mb-2">The Signal Panel</h4>
                                                <p className="text-sm text-neutral-500 leading-relaxed">Once finished, the bot will show you the "Raw Intel": True salary estimates, ATS difficulty, and Strategic Fit score.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "scoring" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Activity className="w-3 h-3" />
                                        <span>Data Interpretation</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Understanding Scores</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <div className="space-y-6">
                                            {[
                                                { label: "0-40%: HIGH RISK", desc: "This job is likely a 'ghost post' or your profile is a poor match for their institutional needs." },
                                                { label: "41-75%: STRATEGIC FIT", desc: "You have a solid chance, but you need to utilize the Architect Engine to rewrite your dossier for this specific role." },
                                                { label: "76-100%: PRIMARY TARGET", desc: "You are the ideal candidate. The bot will recommend 'Aggressive Pursuit'—it will prioritize this job in your vault." }
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 bg-foreground/5 rounded-2xl border border-border">
                                                    <h4 className="text-sm font-black text-foreground uppercase mb-1">{item.label}</h4>
                                                    <p className="text-xs text-neutral-500 font-medium">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "executive" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <ShieldCheck className="w-3 h-3 fill-white" />
                                        <span>Visionary Layer</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Executive Strategy</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-10">We provide the intelligence layer that levels the playing field for high-stakes candidates.</p>
                                        <div className="space-y-8">
                                            <div className="p-8 bg-foreground/5 rounded-[2rem]">
                                                <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4 italic">Client-Side Autonomy</h4>
                                                <p className="text-sm text-neutral-600">IndeedBot is privacy-native. By storing all sensitive data locally, we remove the risk of corporate data harvesting.</p>
                                            </div>
                                            <div className="p-8 bg-foreground/5 rounded-[2rem]">
                                                <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4 italic">Multi-Agent Swarm</h4>
                                                <p className="text-sm text-neutral-600">Specialized engines (Alpha, Bravo, Charlie, Delta) handle everything from market scouting to final-stage negotiation simulation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "engineering" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Code className="w-3 h-3 fill-primary" />
                                        <span>Technical Blueprint</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">System Blueprint</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-10">Built on a "Zero-Cloud" philosophy using modern browser orchestration.</p>
                                        <div className="bg-neutral-900 rounded-[3rem] p-10 font-mono text-xs text-neutral-400 overflow-x-auto">
                                            <p className="text-primary mb-4">{"//"} STACK_MANIFEST_V4</p>
                                            <div className="space-y-2">
                                                <p><span className="text-white">Orchestrator:</span> React 19 + TypeScript</p>
                                                <p><span className="text-white">Reasoning:</span> DeepSeek V3 (SSE Streaming)</p>
                                                <p><span className="text-white">Persistence:</span> chrome.storage.local (IndexedDB)</p>
                                                <p><span className="text-white">Scraping:</span> Asynchronous DOM Mutation Observer</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "troubleshoot" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Info className="w-3 h-3" />
                                        <span>Crisis Management</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">Troubleshooting</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <div className="space-y-6">
                                            <div className="p-8 border border-border rounded-3xl">
                                                <h4 className="text-lg font-bold text-foreground uppercase italic mb-2">Bot doesn't show up?</h4>
                                                <p className="text-sm text-neutral-500">Ensure you are on the actual Job Details page, not just the search results page. If the page URL has `viewjob`, the bot should trigger.</p>
                                            </div>
                                            <div className="p-8 border border-border rounded-3xl">
                                                <h4 className="text-lg font-bold text-foreground uppercase italic mb-2">"Thinking" but no text?</h4>
                                                <p className="text-sm text-neutral-500">This usually means your DeepSeek API key has run out of credits. Check your balance at the DeepSeek console.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeSection === "json-pack" && (
                                <>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase mb-8 tracking-[2px]">
                                        <Cpu className="w-3 h-3" />
                                        <span>Machine Ingestion</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic mb-8 text-foreground uppercase tracking-tighter">AI Knowledge Pack</h2>
                                    <div className="prose prose-neutral max-w-none">
                                        <p className="text-lg text-neutral-500 font-medium mb-10">Structured JSON manifest for advanced users and ingestion into Vector databases.</p>
                                        <div className="bg-neutral-900 rounded-[2.5rem] p-8 border border-white/5 font-mono text-[10px] text-blue-300 overflow-x-auto">
                                            <pre>{JSON.stringify({
                                                project: "IndeedBot 2026",
                                                architecture: "Multi-Agent Swarm",
                                                persistence: "Local-First",
                                                engines: ["Alpha", "Bravo", "Charlie", "Delta"]
                                            }, null, 2)}</pre>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Default Fallback for New Sections */}
                            {!["welcome", "how-it-works", "who-it-is-for", "quickstart", "deepseek-setup", "analyzing", "scoring", "executive", "engineering", "troubleshoot", "json-pack", "vault-init", "risk", "install"].includes(activeSection) && (
                                <div className="text-center py-40">
                                    <TerminalIcon className="w-16 h-16 text-neutral-100 mx-auto mb-8" />
                                    <h3 className="text-2xl font-black text-neutral-200 uppercase italic">Module Under Development</h3>
                                    <p className="text-neutral-400 font-medium italic mt-4">We are currently drafting the strategic guide for "{sidebarLinks.flatMap(c => c.links).find(l => l.id === activeSection)?.name}".</p>
                                </div>
                            )}
                            <div className="mt-32 pt-8 border-t border-border flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-neutral-400">
                                        <Book className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Page 1 / 4 • Introduction</span>
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-6 py-2.5 rounded-xl text-xs font-black uppercase text-neutral-400 border border-border hover:bg-foreground/5 transition-colors">Previous</button>
                                    <button className="px-6 py-2.5 rounded-xl text-xs font-black uppercase bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all">Next Module</button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>
            </div>
        </main>
    );
}
