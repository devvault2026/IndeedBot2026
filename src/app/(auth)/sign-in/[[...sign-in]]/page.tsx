"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        setMounted(true);
    }, []);

    const clerkTheme = mounted && theme === "light" ? undefined : dark;

    const isFromExtension = searchParams.get("source") === "extension";
    const extId = searchParams.get("ext_id") || "";

    const redirectUrl = isFromExtension
        ? `/auth/extension-callback?ext_id=${encodeURIComponent(extId)}`
        : "https://www.indeed.com";

    return (
        <SignIn
            forceRedirectUrl={redirectUrl}
            appearance={{
                baseTheme: clerkTheme,
                elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none p-0 w-full flex flex-col gap-0",
                    header: "mb-6 w-full",
                    headerTitle: "text-2xl font-black tracking-tighter text-foreground uppercase italic leading-none",
                    headerSubtitle: "text-neutral-500 font-medium text-[13px] mt-2 leading-relaxed",
                    socialButtonsBlockButton:
                        "rounded-2xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.06] hover:border-primary/20 transition-all h-[52px] shadow-sm group",
                    socialButtonsBlockButtonText:
                        "text-foreground font-bold text-[12px] tracking-wide group-hover:text-primary transition-colors",
                    socialButtonsBlockButtonArrow: "text-primary",
                    dividerLine: "bg-border",
                    dividerText:
                        "text-neutral-400 font-bold text-[10px] uppercase tracking-[0.3em]",
                    formFieldLabel:
                        "text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-2",
                    formFieldInput:
                        "rounded-2xl border border-border bg-background hover:border-primary/20 focus:border-primary/40 px-5 text-foreground text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium h-[52px] shadow-sm placeholder:text-neutral-400",
                    formButtonPrimary:
                        "bg-primary hover:bg-blue-600 text-white rounded-2xl h-[56px] font-black text-[11px] uppercase tracking-[0.35em] shadow-glow-primary hover:shadow-[0_0_50px_-8px_rgba(37,87,167,0.4)] transition-all active:scale-[0.98] mt-2 relative overflow-hidden",
                    footerAction: "hidden",
                    footer: "hidden",
                    identityPreview:
                        "bg-foreground/[0.03] border border-border rounded-2xl p-4",
                    identityPreviewText:
                        "text-foreground font-bold text-sm",
                    identityPreviewEditButtonIcon: "text-primary",
                    formFieldAction:
                        "text-primary font-bold text-[11px] hover:text-blue-400 transition-colors",
                    formResendCodeLink:
                        "text-primary font-bold text-[11px]",
                    otpCodeFieldInput:
                        "bg-foreground/[0.02] border border-border rounded-2xl text-primary font-mono text-xl h-[52px] focus:border-primary/40",
                    alert: "rounded-2xl border-red-500/20 bg-red-500/5 text-red-400",
                    alertText: "text-[12px] font-medium",
                    formFieldWarningText: "text-amber-500 text-[11px]",
                    formFieldSuccessText: "text-emerald-500 text-[11px]",
                },
                layout: {
                    socialButtonsPlacement: "top",
                    showOptionalFields: false,
                    helpPageUrl: undefined,
                    privacyPageUrl: undefined,
                    termsPageUrl: undefined,
                },
            }}
        />
    );
}
