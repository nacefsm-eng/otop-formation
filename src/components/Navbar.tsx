"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Formations", href: "/formations" },
    { name: "Parcours", href: "/parcours" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                        <GraduationCap size={24} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        OTOP Formation
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/espace-apprenant"
                        className="flex items-center gap-1 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Espace Apprenant
                        <ChevronRight size={16} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-600 dark:text-slate-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/espace-apprenant"
                                className="flex items-center justify-center gap-1 px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Espace Apprenant
                                <ChevronRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
