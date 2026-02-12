import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IndeedBot 2026 | Stop Browsing. Start Securing Your Elite Career.",
  description: "Join the 1% of professionals who have evolved. IndeedBot 2026 is the secret weapon for top-tier talent to dominate the most brutal job market in history. Multi-agent AI intelligence, hidden salary verification, and ATS-crushing precision. Don't bring a knife to a gunfight—secure your future now.",
  openGraph: {
    title: "IndeedBot 2026 | The Elite Career Intelligence Infrastructure",
    description: "Multi-agent AI to hunt high-pay opportunities, verify salary caps, and secure placements with precision. Join 12,000+ top-tier professionals.",
    images: [{ url: "https://res.cloudinary.com/dpfapm0tl/image/upload/v1770747446/ChatGPT_Image_Feb_10_2026_01_12_57_PM_fwhgmd.png", width: 1200, height: 630, alt: "IndeedBot 2026" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndeedBot 2026 | Stop Browsing. Start Securing.",
    description: "The secret weapon for 2026 career dominance. AI-led job hunting and ATS-crushing technology.",
    images: ["https://res.cloudinary.com/dpfapm0tl/image/upload/v1770747446/ChatGPT_Image_Feb_10_2026_01_12_57_PM_fwhgmd.png"],
  },
  keywords: ["IndeedBot", "AI Job Search", "Career Intelligence", "ATS Bypass", "Automated Job Application", "Salary Verification", "Career Optimization 2026"],
  icons: {
    icon: "/favicon.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
