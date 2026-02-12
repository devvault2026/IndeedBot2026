"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageSquare, Mail, HelpCircle, FileQuestion, ArrowRight, Zap, Globe } from "lucide-react";

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased md:pt-14">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-primary/10 blur-[200px] rounded-full animate-pulse" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 border-border shadow-2xl"
                    >
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Mission Dispatch Center</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-foreground mb-8">
                        HOW CAN WE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-blue-700 not-italic">SERVE YOU?</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-500 font-medium italic leading-relaxed">
                        Whether you're encountering extraction errors or need
                        strategic advice, our team is standing by.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="px-6 pb-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ContactMethod
                            icon={<MessageSquare className="w-6 h-6" />}
                            title="Live Intel"
                            text="Chat with our agents in real-time within the extension."
                            action="Open Extension"
                        />
                        <ContactMethod
                            icon={<Mail className="w-6 h-6" />}
                            title="Direct Line"
                            text="Email our high-priority support desk for complex issues."
                            action="Send Email"
                        />
                        <ContactMethod
                            icon={<FileQuestion className="w-6 h-6" />}
                            title="Knowledge Base"
                            text="Access archived mission data and detailed system guides."
                            action="View Docs"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-2xl font-black uppercase tracking-[0.4em] text-neutral-500 italic mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">Frequent Interrogations</h3>

                    <div className="space-y-6">
                        <FAQItem
                            question="How do I link my Indeed account?"
                            answer="Once the extension is installed, navigate to any Indeed job page. The bot will automatically initialize a handshake protocol. Select 'Connect' to sync your credentials."
                        />
                        <FAQItem
                            question="Is my resume data encrypted?"
                            answer="Yes. We use AES-256 E2E encryption for all Dossier assets. Our team cannot read your raw resume; only your personal AI agents have the decryption keys."
                        />
                        <FAQItem
                            question="How many applications can the bot handle?"
                            answer="While there is no hard limit, we recommend a tactical approach. Our agents perform best when focused on 5-10 high-value roles per day to ensure maximum quality."
                        />
                    </div>
                </div>
            </section>


        </main>
    );
}

const ContactMethod = ({ icon, title, text, action }: any) => (
    <div className="glass p-10 rounded-[2.5rem] border border-border group hover:border-primary/20 transition-all text-center">
        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4">{title}</h4>
        <p className="text-neutral-500 font-bold italic leading-relaxed mb-8">{text}</p>
        <button className="w-full py-4 glass border-border text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all rounded-xl flex items-center justify-center gap-2">
            {action} <ArrowRight className="w-3 h-3" />
        </button>
    </div>
);

const FAQItem = ({ question, answer }: any) => (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-border hover:border-primary/10 transition-all group">
        <h4 className="text-xl md:text-2xl font-black text-foreground uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors">{question}</h4>
        <p className="text-neutral-500 font-medium italic leading-relaxed text-lg">{answer}</p>
    </div>
);
