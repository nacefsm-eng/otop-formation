"use client";

import { Navbar } from "@/components/Navbar";
import { LogIn, Rocket, Download, MessageSquare, Lock, ShieldCheck, CheckCircle2, UserPlus } from "lucide-react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function EspaceApprenant() {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Register form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const res = await fetch("/api/apprenants", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.status === 409) {
                throw new Error("Un compte avec cet email existe déjà.");
            }
            if (!res.ok) {
                throw new Error("Erreur de création de compte.");
            }

            setSuccessMsg("Compte créé avec succès ! Vos accès vous seront envoyés par email.");
            setMode('login'); // Switch back to login view after success
            setFormData({ firstName: '', lastName: '', email: '' });
        } catch (err: any) {
            setErrorMsg(err.message || "Une erreur est survenue.");
        } finally {
            setIsLoading(false);
        }
    };

    const router = useRouter();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        // Mock Login functionality for the Demo
        const fakeUser = {
            firstName: "Demo",
            lastName: "User",
            email: "demo@otop-formation.fr"
        };
        localStorage.setItem("otop_user", JSON.stringify(fakeUser));

        // Redirect to the LMS Demo Dashboard
        router.push("/lms");
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
                            Connectez-vous à <span className="text-indigo-600">Mon Parcours en Ligne</span>
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Le portail d'apprentissage officiel OTOP Formation. Accédez à vos parcours, ressources et certificats dans un environnement 100% sécurisé.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-6 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                            {/* Left Column : Benefits */}
                            <div className="space-y-10 lg:pr-8 lg:border-r border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                                        <Rocket size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Ce qui vous attend à l'intérieur</h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                                        Notre plateforme centralise l'intégralité de votre expérience d'apprentissage.
                                        Disponible en Français et en Anglais, elle regroupe cours théoriques, tests pratiques et la communication avec vos formateurs.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: <CheckCircle2 size={24} />, title: "Modules E-Learning HD", text: "Accès illimité aux vidéos, podcasts et supports de cours interactifs." },
                                        { icon: <Download size={24} />, title: "Boîte à Outils", text: "Téléchargez les templates, checklists et code sources pour vos projets." },
                                        { icon: <MessageSquare size={24} />, title: "Support Mentorat", text: "Forum dédié et messagerie directe avec l'équipe pédagogique." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-indigo-500 shrink-0 mt-1">{item.icon}</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{item.title}</h3>
                                                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column : Focus Form */}
                            <div className="flex flex-col justify-center max-w-sm mx-auto w-full">
                                {/* Toggle Tabs */}
                                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6 relative z-20">
                                    <button
                                        onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); }}
                                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'login' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        Connexion
                                    </button>
                                    <button
                                        onClick={() => { setMode('register'); setErrorMsg(''); setSuccessMsg(''); }}
                                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'register' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        Inscription
                                    </button>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[32px] p-8 md:p-10 border border-slate-100 dark:border-slate-800 relative">
                                    <div className="flex justify-center mb-6">
                                        <div className="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/50">
                                            <ShieldCheck size={14} /> {mode === 'login' ? 'Connexion Sécurisée (SSL)' : 'Création de Compte'}
                                        </div>
                                    </div>

                                    {errorMsg && (
                                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-bold border border-red-200 dark:border-red-900/50 text-center">
                                            {errorMsg}
                                        </div>
                                    )}

                                    {successMsg && (
                                        <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm font-bold border border-emerald-200 dark:border-emerald-900/50 text-center flex flex-col items-center gap-2">
                                            <CheckCircle2 size={24} className="text-emerald-500" />
                                            {successMsg}
                                        </div>
                                    )}

                                    {mode === 'login' ? (
                                        <form className="space-y-5" onSubmit={handleLogin}>
                                            <div className="space-y-1.5">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Personnel / Pro</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="votre@email.com"
                                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <div className="flex justify-between items-center ml-1">
                                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Mot de passe</label>
                                                    <button type="button" onClick={() => alert("Un email de réinitialisation vous a été envoyé si le compte existe.")} className="text-xs text-indigo-600 font-bold hover:underline">Oublié ?</button>
                                                </div>
                                                <input
                                                    type="password"
                                                    required
                                                    placeholder="••••••••"
                                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                                                />
                                            </div>

                                            <button type="submit" className="w-full py-4 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2">
                                                <LogIn size={20} />
                                                Accéder à la plateforme
                                            </button>

                                            <div className="pt-4 text-center">
                                                <p className="text-[11px] text-slate-400">
                                                    Vos accès vous ont été envoyés par email lors de votre inscription (vérifiez vos spams).<br />
                                                    <span className="flex items-center justify-center gap-1 mt-2 text-slate-500">
                                                        <Lock size={10} /> Conforme au RGPD (UE)
                                                    </span>
                                                </p>
                                            </div>
                                        </form>
                                    ) : (
                                        <form className="space-y-5" onSubmit={handleRegister}>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Prénom</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Ex: Jean"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nom</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Ex: Dupont"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="votre@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                                                />
                                            </div>

                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="w-full py-4 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                                            >
                                                {isLoading ? (
                                                    <div className="w-5 h-5 border-2 border-indigo-400 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <UserPlus size={20} />
                                                        Créer mon compte
                                                    </>
                                                )}
                                            </button>

                                            <div className="pt-4 text-center">
                                                <p className="text-[11px] text-slate-400">
                                                    En créant un compte, vous acceptez nos CGU et notre politique de confidentialité.<br />
                                                    <span className="flex items-center justify-center gap-1 mt-2 text-slate-500">
                                                        <Lock size={10} /> Conforme au RGPD (UE)
                                                    </span>
                                                </p>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Design accents */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </main>
    );
}
