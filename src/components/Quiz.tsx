"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

const questions = [
    {
        title: "Quel est votre objectif principal ?",
        options: ["Reconversion professionnelle", "Montée en compétences", "Lancer mon entreprise"]
    },
    {
        title: "Dans quel domaine souhaitez-vous évoluer ?",
        options: ["Digital & Tech", "Management & Leadership", "Santé & Social"]
    },
    {
        title: "Quelle est votre disponibilité ?",
        options: ["Temps plein (Bootcamp)", "Temps partiel (Soirs et Week-ends)", "À mon rythme (100% en ligne)"]
    }
];

const recommendations: Record<string, { title: string, text: string, url: string }> = {
    "Digital & Tech": {
        title: "Développeur Fullstack ou Growth Hacker",
        text: "Une formation intensive pour maîtriser les outils digitaux d'aujourd'hui, accessible à votre rythme.",
        url: "/formations?f=digital"
    },
    "Management & Leadership": {
        title: "Formation Leadership Agile",
        text: "Des modules spécialisés pour structurer vos projets et manager vos équipes efficacement.",
        url: "/formations?f=management"
    },
    "Santé & Social": {
        title: "Parcours Accompagnement Holistique",
        text: "Développez une approche humaine centrée sur le bien-être avec une certification reconnue.",
        url: "/formations?f=sante"
    }
};

export const Quiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[currentStep] = answer;
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setAnswers([]);
        setIsFinished(false);
    };

    const selectedDomain = answers[1] || "Digital & Tech";
    const recommendation = recommendations[selectedDomain];

    return (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
            {/* Quiz Header / Progress */}
            {!isFinished && (
                <div className="px-8 pt-8 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                    <div className="text-sm font-bold text-slate-400">
                        Étape {currentStep + 1} sur {questions.length}
                    </div>
                    <div className="flex gap-2">
                        {questions.map((_, i) => (
                            <div
                                key={i}
                                className={`w-10 h-1.5 rounded-full transition-colors ${i <= currentStep ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className="p-8 md:p-12 relative min-h-[350px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white leading-tight">
                                {questions[currentStep].title}
                            </h3>
                            <div className="grid gap-4">
                                {questions[currentStep].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(opt)}
                                        className="w-full flex items-center justify-between p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-left font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                                    >
                                        <span>{opt}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-600">
                                            <ChevronRight size={14} className="text-white opacity-0 group-hover:opacity-100" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {currentStep > 0 && (
                                <button
                                    onClick={() => setCurrentStep(c => c - 1)}
                                    className="mt-6 text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium flex items-center gap-1 mx-auto"
                                >
                                    <ChevronLeft size={16} /> Retour
                                </button>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Votre parcours idéal</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
                                Basé sur vos réponses, voici la formation que nous vous recommandons pour atteindre vos objectifs.
                            </p>

                            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-left mb-8">
                                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Recommandation</div>
                                <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{recommendation.title}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    {recommendation.text}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-md">Pour : {answers[0]}</span>
                                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-md">Format : {answers[2]}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={recommendation.url}
                                    className="px-6 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    Découvrir la formation <ArrowRight size={18} />
                                </Link>
                                <button
                                    onClick={resetQuiz}
                                    className="px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    <RotateCcw size={18} />
                                    Recommencer
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
