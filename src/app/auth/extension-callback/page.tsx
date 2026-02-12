"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare const chrome: any;

import { Suspense, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

type Status = "sending" | "success" | "error";

function ExtensionCallbackContent() {
    const { user, isLoaded, isSignedIn } = useUser();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<Status>("sending");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!isLoaded) return;
        if (!isSignedIn) {
            setStatus("error");
            setErrorMessage("You are not signed in. Please try again from the extension.");
            return;
        }

        async function sendTokenToExtension() {
            try {
                // 1. Get extension token from our API
                const res = await fetch("/api/auth/extension-token", { method: "POST" });
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Failed to generate token");

                // 2. Get the extension ID from the URL params
                const extId = searchParams.get("ext_id");

                if (extId && typeof chrome !== "undefined" && chrome?.runtime?.sendMessage) {
                    // Method A: Direct message to extension via externally_connectable
                    try {
                        chrome.runtime.sendMessage(
                            extId,
                            {
                                type: "INDEEDBOT_AUTH_SUCCESS",
                                payload: { token: data.token, user: data.user },
                            },
                            (response: { success?: boolean } | undefined) => {
                                if (chrome.runtime.lastError) {
                                    console.warn("Extension messaging failed:", chrome.runtime.lastError);
                                    // Fallback: use postMessage for content script
                                    window.postMessage(
                                        { type: "INDEEDBOT_AUTH_SUCCESS", payload: { token: data.token, user: data.user } },
                                        "*"
                                    );
                                }
                                setStatus(response?.success ? "success" : "success");
                            }
                        );
                    } catch {
                        // Fallback
                        window.postMessage(
                            { type: "INDEEDBOT_AUTH_SUCCESS", payload: { token: data.token, user: data.user } },
                            "*"
                        );
                        setStatus("success");
                    }
                } else {
                    // No extension ID — fallback to postMessage
                    window.postMessage(
                        { type: "INDEEDBOT_AUTH_SUCCESS", payload: { token: data.token, user: data.user } },
                        "*"
                    );
                    setStatus("success");
                }
            } catch (err) {
                console.error("Failed to send token to extension:", err);
                setStatus("error");
                setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
            }
        }

        sendTokenToExtension();
    }, [isLoaded, isSignedIn, user, searchParams]);

    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center font-sans overflow-hidden select-none transition-colors duration-500">
            {/* Background grid */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
                    style={{
                        backgroundImage: `linear-gradient(var(--adaptive-border) 1px, transparent 1px), linear-gradient(90deg, var(--adaptive-border) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(ellipse at center, black, transparent 90%)",
                    }}
                />
            </div>

            {/* Card */}
            <div className="relative z-10 text-center p-12 rounded-3xl border border-border bg-background max-w-md shadow-premium">
                {status === "sending" && (
                    <>
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                        <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
                            Connecting to Extension...
                        </h1>
                        <p className="text-neutral-500 mt-3 text-sm">
                            Please wait while we activate your IndeedBot.
                        </p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                            <span className="text-3xl text-emerald-500">✓</span>
                        </div>
                        <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
                            You&apos;re Connected!
                        </h1>
                        <p className="text-neutral-500 mt-3 text-sm">
                            IndeedBot is now active. Redirecting you to Indeed to start your search...
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-xl">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                                System Active
                            </span>
                        </div>
                        <script dangerouslySetInnerHTML={{
                            __html: `
                                setTimeout(() => {
                                    window.location.href = "https://www.indeed.com";
                                }, 2000);
                            `
                        }} />
                    </>
                )}

                {status === "error" && (
                    <>
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                            <span className="text-3xl text-red-500">✕</span>
                        </div>
                        <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">
                            Connection Failed
                        </h1>
                        <p className="text-neutral-500 mt-3 text-sm">
                            {errorMessage || "Please try signing in again from the extension."}
                        </p>
                        <button
                            onClick={() => window.location.href = "/sign-in"}
                            className="mt-6 px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-xl font-black text-[11px] uppercase tracking-[0.3em] transition-all active:scale-[0.98]"
                        >
                            Try Again
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default function ExtensionCallbackPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 bg-background flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <ExtensionCallbackContent />
        </Suspense>
    );
}
