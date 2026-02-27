"use client";

import { Navbar } from "@/components/Navbar";
import { LogIn, Rocket, Download, MessageSquare, Lock } from "lucide-react";

export default function EspaceApprenant() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-5 blur-[100px]" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-8">
                                    <Rocket size={32} />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                                    Votre plateforme <br />
                                    <span className="text-indigo-600">d'apprentissage</span>
                                </h1>
                                <p className="text-slate-500 mb-8 max-w-sm">
                                    Accédez à vos cours, téléchargez vos documents et suivez votre progression en temps réel.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { icon: <Download size={20} />, text: "Ressources & Checklists gratuites", active: true },
                                        { icon: <Lock size={20} />, text: "Modules e-learning personnalisés", active: false },
                                        { icon: <MessageSquare size={20} />, text: "Support pédagogique direct", active: false }
                                    ].map((item, i) => (
                                        <div key={i} className={`flex items-center gap-3 text-sm font-medium ${item.active ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>
                                            <div className={item.active ? 'text-indigo-500' : 'text-slate-300'}>
                                                {item.icon}
                                            </div>
                                            {item.text}
                                            {!item.active && <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded uppercase tracking-wider font-bold">Bientôt</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
                                <h2 className="text-xl font-bold mb-6">Connexion Apprenant</h2>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="votre@email.com"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 ml-1">Mot de passe</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                    </div>
                                    <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 mt-2">
                                        <LogIn size={20} />
                                        Se connecter
                                    </button>
                                    <div className="text-center pt-4">
                                        <a href="#" className="text-sm text-indigo-600 font-medium hover:underline">Mot de passe oublié ?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-indigo-600 rounded-3xl text-white">
                            <h3 className="font-bold mb-2">Pas encore d'accès ?</h3>
                            <p className="text-sm text-indigo-100 mb-6">Inscrivez-vous à une formation pour recevoir vos identifiants.</p>
                            <button className="px-5 py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold">S'inscrire</button>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 md:col-span-2 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold mb-2">Mon Parcours en Ligne</h3>
                                <p className="text-sm text-slate-500">Accédez directement à votre espace sur notre LMS externe.</p>
                            </div>
                            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl text-sm font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                                Lien Direct
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
