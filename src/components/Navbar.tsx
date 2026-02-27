"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Formations", href: "/formations" },
    { name: "Parcours", href: "/parcours" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lang, setLang] = useState("FR");

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
                    ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                        <GraduationCap size={24} />
                    </div>
                    <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                        OTOP <span className="font-medium">Formation</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />

                    {/* Language Switcher */}
                    <button
                        onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                        className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                        <Globe size={16} />
                        {lang}
                    </button>

                    <ThemeToggle />

                    <div className="flex items-center gap-3">
                        <Link
                            href="/espace-apprenant"
                            className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors"
                        >
                            Login LMS
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-indigo-500/20"
                        >
                            Candidater
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
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
                        className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-slate-700 dark:text-slate-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
                            <button
                                onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                                className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-slate-200 text-left"
                            >
                                <Globe size={20} />
                                Langue : {lang}
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-slate-700 dark:text-slate-200">Thème :</span>
                                <ThemeToggle />
                            </div>
                            <Link
                                href="/espace-apprenant"
                                className="text-lg font-bold text-slate-700 dark:text-slate-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login LMS
                            </Link>
                            <Link
                                href="/contact"
                                className="mt-2 text-center py-3 bg-indigo-600 text-white rounded-xl font-bold"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Candidater maintenant
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
