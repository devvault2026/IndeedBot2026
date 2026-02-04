import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Trailer } from "@/components/Trailer";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { IntelligenceFeed } from "@/components/IntelligenceFeed";
import { ResumeArchitect } from "@/components/ResumeArchitect";
import { Trust } from "@/components/Trust";
import { DecisionFlow } from "@/components/DecisionFlow";
import { ResponsibleAI } from "@/components/ResponsibleAI";
import { Footer } from "@/components/Footer";
import { ShieldCheck, ArrowRight, MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2d2d2d] antialiased">
      <Navbar />
      <Hero />
      <Trailer />
      <Features />
      <DecisionFlow />
      <IntelligenceFeed />
      <ResumeArchitect />
      <Trust />
      <ResponsibleAI />
      <Pricing />

      {/* Strategic Success CTA */}
      <section className="py-20 md:py-40 px-4 bg-white relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
          style={{ backgroundImage: 'radial-gradient(#2557a7 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-8xl font-black italic mb-6 md:mb-10 text-[#2d2d2d] uppercase tracking-tighter leading-none">
            STOP BROWSING.<br />
            <span className="text-primary not-italic">START SECURING.</span>
          </h2>
          <p className="text-lg md:text-2xl text-neutral-500 mb-8 md:mb-14 font-medium leading-relaxed px-4">
            Join 12,000+ high-value professionals who use IndeedBot 2026 to optimize their career trajectory. The complex job market just met its match.

          </p>
          <Link href="#pricing">
            <button className="px-8 py-4 md:px-14 md:py-7 bg-primary text-white font-black text-base md:text-2xl rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl shadow-primary/30 hover:bg-indeed-blue-hover hover:scale-105 transition-all flex items-center justify-center gap-3 md:gap-5 mx-auto group ring-4 md:ring-8 ring-primary/5">
              GET STARTED NOW <ArrowRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
