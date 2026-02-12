"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Trailer } from "@/components/Trailer";
import { PainSection } from "@/components/PainSection";
import { AI_CareerTeam } from "@/components/DecisionFlow";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { ResponsibleAI } from "@/components/ResponsibleAI";
import { Pricing } from "@/components/Pricing";
import { ArrowRight, Chrome, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: SOCIAL PROOF */}
      <SocialProof />

      {/* SECTION 3: VIDEO DEMO */}
      <Trailer />

      {/* SECTION 4: THE PAIN */}
      <PainSection />

      {/* SECTION 5: THE PRODUCT STORY */}
      <AI_CareerTeam />

      {/* SECTION 6: FEATURE DEMO BLOCK */}
      <Features />

      {/* SECTION 7: TRUST & PRIVACY */}
      <Trust />

      {/* OPTIONAL: ETHICAL AI SECTION */}
      <ResponsibleAI />

      {/* SECTION 8: PRICING */}
      <Pricing />

      {/* SECTION 9: FINAL CTA - THE STRATEGIC REVEAL */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[700px] bg-primary/10 blur-[180px] rounded-full pointer-events-none opacity-40 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass mb-10 shadow-2xl"
            >
              <Zap className="w-5 h-5 text-primary shadow-glow-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 italic">Join 12,000+ Happy Users</span>
            </motion.div>

            <h2 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.75] text-foreground mb-10">
              STOP HUNTING.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-primary to-blue-700 not-italic">START WINNING.</span>
            </h2>

            <p className="text-lg md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-4xl mx-auto italic mb-16 opacity-80">
              Don't apply to jobs like it's 2010. Use the bot that
              turns your job search into a stress-free success story.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Link href="/sign-up" className="group relative w-full md:w-auto">
                <div className="absolute -inset-2 bg-primary blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-500" />
                <button className="relative w-full px-12 py-6 bg-foreground text-background font-black text-xl md:text-3xl rounded-2xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-5 uppercase overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Start Now — Free
                  <Chrome className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto opacity-30">
              {[
                { label: "SECURE", value: "ENCRYPTED" },
                { label: "POWER", value: "HELPFUL_AI" },
                { label: "PRIVACY", value: "ZERO_TRACK" },
                { label: "RATING", value: "5.0_STARS" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">{stat.label}</div>
                  <div className="text-sm font-black text-foreground italic">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
