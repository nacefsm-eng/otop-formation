"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6"
                    >
                        <Sparkles size={16} />
                        L&apos;excellence en formation à portée de clic
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                    >
                        Boostez votre carrière avec{" "}
                        <span className="text-gradient">OTOP Formation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Des parcours personnalisés, une insertion professionnelle garantie et
                        des formations certifiantes adaptées aux nouveaux métiers de demain.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/formations"
                            className="group relative px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-indigo-500/30 hover:scale-105 transition-all overflow-hidden"
                        >
                            <span className="relative z-10">Découvrir nos formations</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link
                            href="/parcours"
                            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                        >
                            <Play size={20} fill="currentColor" />
                            Notre parcours
                        </Link>
                    </motion.div>
                </div>

                {/* Stats / Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 py-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">98%</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">Taux de satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">50+</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">Formations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2000+</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">Apprenants formés</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">4.9/5</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">Avis Clients</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
