"use client";

import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-12 bg-background">
                <Pricing />
            </div>

        </main>
    );
}
