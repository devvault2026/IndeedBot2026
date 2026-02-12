"use client";

import { SignIn } from "@clerk/nextjs";
import { AuthWrapper } from "@/components/AuthWrapper";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by using dark theme as default for the Clerk component during SSR
    const clerkTheme = mounted && theme === "light" ? undefined : dark;

    return (
        <AuthWrapper>
            <SignIn
                appearance={{
                    baseTheme: clerkTheme,
                    elements: {
                        rootBox: "w-full",
                        card: "bg-transparent shadow-none border-none p-0 w-full flex flex-col",
                        header: "mb-10 w-full text-center",
                        headerTitle: "text-4xl font-black italic tracking-tighter text-foreground uppercase mb-2 leading-none text-center w-full",
                        headerSubtitle: "text-primary font-black uppercase tracking-[0.4em] text-[9px] italic opacity-80 text-center w-full",
                        socialButtonsBlockButton: "rounded-xl border border-border bg-foreground/[0.03] hover:bg-foreground/[0.08] transition-all h-12 shadow-sm",
                        socialButtonsBlockButtonText: "text-foreground font-black uppercase tracking-[0.3em] text-[8px]",
                        dividerLine: "bg-border",
                        dividerText: "text-neutral-500 font-bold text-[8px] uppercase tracking-[0.4em] italic",
                        formFieldLabel: "text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-2 ml-1",
                        formFieldInput: "rounded-xl border border-border bg-background px-5 text-foreground text-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium h-12 shadow-sm placeholder:text-neutral-300",
                        formButtonPrimary: "bg-primary hover:bg-blue-600 text-white rounded-xl h-14 font-black text-[12px] uppercase tracking-[0.4em] shadow-glow-primary transition-all active:scale-[0.98] mt-4 relative overflow-hidden",
                        footerAction: "hidden",
                        footer: "hidden",
                        identityPreviewText: "text-foreground font-black italic uppercase tracking-widest",
                        identityPreviewEditButtonIcon: "text-primary",
                        formFieldAction: "text-primary font-black uppercase tracking-[0.3em] text-[8px] hover:text-foreground transition-colors",
                        formResendCodeLink: "text-primary font-black uppercase tracking-[0.3em] text-[8px]",
                        otpCodeFieldInput: "bg-background border border-border rounded-xl text-primary font-mono text-xl h-12",
                    },
                    layout: {
                        socialButtonsPlacement: "top",
                        showOptionalFields: false,
                        helpPageUrl: undefined,
                        privacyPageUrl: undefined,
                        termsPageUrl: undefined,
                    }
                }}
            />
        </AuthWrapper>
    );
}
