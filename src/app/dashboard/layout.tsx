"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    User,
    CreditCard,
    LogOut,
    Menu,
    X,
    Zap,
    ArrowLeft
} from "lucide-react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

interface SidebarItemProps {
    href: string;
    icon: React.ElementType;
    label: string;
    active: boolean;
}

const SidebarItem = ({ href, icon: Icon, label, active }: SidebarItemProps) => (
    <Link href={href}>
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                ? "bg-primary text-primary-foreground shadow-glow-primary font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
        >
            <Icon size={20} className={active ? "text-white" : "text-muted-foreground"} />
            <span className="text-sm font-medium tracking-wide">{label}</span>
            {active && (
                <motion.div
                    layoutId="sidebar-active"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                />
            )}
        </motion.div>
    </Link>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user, isLoaded } = useUser();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { href: "/dashboard", icon: User, label: "My Account" },
        { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
    ];

    if (!isLoaded) return null;

    return (
        <div className="min-h-screen bg-background flex">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 w-72 glass-dark z-50 lg:static lg:block transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="h-full flex flex-col p-6 border-r border-border/50">
                    <div className="flex items-center gap-3 mb-12 px-2">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                            <Zap className="text-white fill-white" size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tighter text-foreground">INDEEDBOT</h1>
                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-80">My Account</span>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-2">
                        <p className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em] px-4 mb-4">Account Management</p>
                        {navItems.map((item) => (
                            <SidebarItem
                                key={item.href}
                                href={item.href}
                                icon={item.icon}
                                label={item.label}
                                active={pathname === item.href}
                            />
                        ))}
                    </nav>

                    <div className="space-y-3 mb-6">
                        <Link href="/">
                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all duration-200 cursor-pointer">
                                <ArrowLeft size={20} />
                                <span className="text-sm font-medium tracking-wide">Back to Site</span>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border/50">
                        <div className="flex items-center gap-3 px-2 mb-6">
                            <div className="relative">
                                <img
                                    src={user?.imageUrl}
                                    alt={user?.firstName || "User"}
                                    className="w-10 h-10 rounded-xl border border-border/50"
                                />
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold truncate text-foreground">
                                    {user?.firstName} {user?.lastName}
                                </p>
                                <p className="text-[11px] text-muted-foreground truncate">
                                    {user?.emailAddresses[0]?.emailAddress}
                                </p>
                            </div>
                        </div>

                        <SignOutButton>
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors group">
                                <LogOut size={20} className="group-hover:translate-x-0.5 transition-transform" />
                                <span className="text-sm font-medium">Log Out</span>
                            </button>
                        </SignOutButton>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-background/50">
                {/* Header */}
                <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-border/10 sticky top-0 bg-background/80 backdrop-blur-md z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-lg font-bold text-foreground tracking-tight">Account Console</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </header>

                {/* Dash Page Content */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
