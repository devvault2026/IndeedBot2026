"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
    const pathname = usePathname();
    const isAuthPage = pathname === "/sign-in" ||
        pathname === "/sign-up" ||
        pathname?.startsWith("/sign-in/") ||
        pathname?.startsWith("/sign-up/");

    if (isAuthPage) return null;
    return <Footer />;
}
