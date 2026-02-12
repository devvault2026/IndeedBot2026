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
  title: "IndeedBot 2026 | Get More Job Offers. Your Personal AI Job Hunting Assistant.",
  description: "Stop wasting hours on job boards. IndeedBot 2026 finds the best roles and helps you apply in seconds. Simple, fast, and built to get you hired without the stress. Join 12,000+ people landing jobs today.",
  openGraph: {
    title: "IndeedBot 2026 | The Job Hunting Bot That Gets You Hired.",
    description: "Land your next role faster with IndeedBot 2026. Our job hunting bot does the heavy lifting for you—finding the best opportunities and helping you apply with confidence.",
    images: [{ url: "https://res.cloudinary.com/dpfapm0tl/image/upload/v1770923699/ChatGPT_Image_Feb_12_2026_02_14_17_PM_nxwmok.png", width: 1200, height: 630, alt: "IndeedBot 2026" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndeedBot 2026 | Find Your Dream Job Fast.",
    description: "The job hunting bot that actually works. Stop manual searching and let AI land your next role.",
    images: ["https://res.cloudinary.com/dpfapm0tl/image/upload/v1770923699/ChatGPT_Image_Feb_12_2026_02_14_17_PM_nxwmok.png"],
  },
  keywords: ["IndeedBot", "AI Job Search", "Job Hunting Bot", "Job Application Automation", "Career Assistant", "Find Jobs Fast", "Get Hired 2026"],
  icons: {
    icon: "/favicon.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/Footer";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
// ... (omitting AuthProvider for brevity, wait I should include it if I'm replacing the block)

// Re-writing the block carefully
function AuthProvider({ children }: { children: React.ReactNode }) {
  if (!clerkPubKey) {
    return <>{children}</>;
  }
  return <ClerkProvider publishableKey={clerkPubKey}>{children}</ClerkProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
