"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
    const pathname = usePathname();

    // Hide footer on anything that looks like an auth or sign in/up page
    const isAuthPage = pathname?.includes("sign-in") ||
        pathname?.includes("sign-up") ||
        pathname?.includes("auth");

    if (isAuthPage) return null;
    return <Footer />;
}
