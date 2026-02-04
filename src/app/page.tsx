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
      <section className="py-40 px-4 bg-white relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
          style={{ backgroundImage: 'radial-gradient(#2557a7 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="text-center max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black italic mb-10 text-[#2d2d2d] uppercase tracking-tighter leading-none">
            STOP BROWSING.<br />
            <span className="text-primary not-italic">START SECURING.</span>
          </h2>
          <p className="text-2xl text-neutral-500 mb-14 font-medium leading-relaxed">
            Join 12,000+ high-value professionals who use IndeedBot 2026 to optimize their career trajectory. The complex job market just met its match.
          </p>
          <Link href="#pricing">
            <button className="px-14 py-7 bg-primary text-white font-black text-2xl rounded-2xl shadow-2xl shadow-primary/30 hover:bg-indeed-blue-hover hover:scale-105 transition-all flex items-center justify-center gap-5 mx-auto group ring-8 ring-primary/5">
              GET STARTED NOW <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="py-32 px-8 bg-[#0c0c0e] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="https://res.cloudinary.com/dpfapm0tl/image/upload/v1770163492/icon_x6kgnr.png"
                  alt="IndeedBot Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-black tracking-widest uppercase italic">Indeed<span className="text-primary">Bot</span> 2026</span>
              </div>
              <p className="text-neutral-500 font-medium max-w-sm mb-10 leading-relaxed">
                Mission-critical career intelligence infrastructure for high-stakes professionals. Built for precision, security, and adversarial market dominance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full" /> System Status: Operational
                </div>
                <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                  Jurisdiction: Canada / North America
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[3px] mb-8 text-primary">Compliance</h4>
              <ul className="space-y-4 text-sm font-bold text-neutral-400 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Data Residency</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Ethics Protocol</li>
                <li className="hover:text-white cursor-pointer transition-colors">SOC 2 Status</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[3px] mb-8 text-primary">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-neutral-400 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Intelligence SLA</li>
                <li className="hover:text-white cursor-pointer transition-colors">Security Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">API Status</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-[4px]">
              © 2026 LIBERATED BY OFFICIALPR0X. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-10 text-[10px] font-black text-neutral-400 uppercase tracking-widest">
              <span>Security@IndeedBot.io</span>
              <span>SLA: 99.9% Intelligence Uptime</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
