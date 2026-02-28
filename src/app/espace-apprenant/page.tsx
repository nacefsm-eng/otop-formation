"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    LogIn, Rocket, Download, MessageSquare, Lock, ShieldCheck,
    CheckCircle2, UserPlus, Sparkles, ArrowRight, Eye, EyeOff
} from "lucide-react";
import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EspaceApprenant() {
    const router = useRouter();
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        loginEmail: '',
        loginPassword: ''
    });

    // ─── REAL Registration ───
    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Erreur de création de compte.");
            }

            setSuccessMsg("🎉 Compte créé avec succès ! Connectez-vous maintenant.");
            setFormData({ ...formData, firstName: '', lastName: '', email: '', password: '' });
            // Auto-switch to login after 2s
            setTimeout(() => { setMode('login'); setSuccessMsg(''); }, 2500);
        } catch (err: any) {
            setErrorMsg(err.message || "Une erreur est survenue.");
        } finally {
            setIsLoading(false);
        }
    };

    // ─── REAL Login with NextAuth ───
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        try {
            const result = await signIn("credentials", {
                email: formData.loginEmail,
                password: formData.loginPassword,
                redirect: false,
            });

            if (result?.error) {
                setErrorMsg(result.error);
                setIsLoading(false);
                return;
            }

            // Success — redirect to LMS
            router.push("/lms");
        } catch (err) {
            setErrorMsg("Erreur de connexion. Veuillez réessayer.");
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/10">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold mb-6">
                            <Sparkles size={16} />
                            Plateforme E-Learning
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white leading-tight">
                            Votre espace <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">d&apos;apprentissage</span>
                        </h1>
                        <p className="text-slate-500 max-w-xl mx-auto text-lg">
                            Accédez à vos parcours, ressources et certificats dans un environnement 100% sécurisé.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-6 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

                            {/* Left Column: Benefits */}
                            <div className="space-y-8 lg:pr-8 lg:border-r border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                                        <Rocket size={28} />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ce qui vous attend</h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Notre plateforme centralise votre expérience d&apos;apprentissage.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { icon: <CheckCircle2 size={22} />, title: "Modules E-Learning HD", text: "Vidéos, podcasts et supports de cours interactifs.", color: "text-emerald-500" },
                                        { icon: <Download size={22} />, title: "Boîte à Outils", text: "Templates, checklists et code sources.", color: "text-blue-500" },
                                        { icon: <MessageSquare size={22} />, title: "Support Mentorat", text: "Forum dédié et messagerie directe.", color: "text-purple-500" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group hover:shadow-md">
                                            <div className={`${item.color} shrink-0 mt-0.5`}>{item.icon}</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-0.5">{item.title}</h3>
                                                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                            </div>
                                            <ArrowRight size={16} className="text-slate-300 shrink-0 mt-1 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    ))}
                                </div>

                                {/* Social Proof */}
                                <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                                    <div className="flex -space-x-2">
                                        {["bg-indigo-500", "bg-emerald-500", "bg-purple-500", "bg-orange-500"].map((c, i) => (
                                            <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[10px] font-bold`}>
                                                {["S", "A", "F", "K"][i]}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                                        <span className="text-amber-600 font-black">2 500+</span> apprenants nous font confiance
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Forms */}
                            <div className="flex flex-col justify-center max-w-sm mx-auto w-full">
                                {/* Toggle Tabs */}
                                <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl mb-6 relative z-20">
                                    <button
                                        onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); }}
                                        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${mode === 'login' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-lg shadow-indigo-500/10' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        <LogIn size={16} className="inline mr-2 -mt-0.5" />
                                        Connexion
                                    </button>
                                    <button
                                        onClick={() => { setMode('register'); setErrorMsg(''); setSuccessMsg(''); }}
                                        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${mode === 'register' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-lg shadow-indigo-500/10' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                    >
                                        <UserPlus size={16} className="inline mr-2 -mt-0.5" />
                                        Inscription
                                    </button>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[28px] p-7 md:p-9 border border-slate-100 dark:border-slate-800 relative">
                                    <div className="flex justify-center mb-5">
                                        <div className="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/50">
                                            <ShieldCheck size={14} /> {mode === 'login' ? 'Connexion Sécurisée (SSL)' : 'Création de Compte'}
                                        </div>
                                    </div>

                                    {errorMsg && (
                                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold border border-red-200 dark:border-red-900/50 text-center">
                                            {errorMsg}
                                        </div>
                                    )}

                                    {successMsg && (
                                        <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-sm font-bold border border-emerald-200 dark:border-emerald-900/50 text-center flex flex-col items-center gap-2">
                                            <CheckCircle2 size={28} className="text-emerald-500" />
                                            {successMsg}
                                        </div>
                                    )}

                                    {mode === 'login' ? (
                                        <form className="space-y-4" onSubmit={handleLogin}>
                                            <div className="space-y-1.5">
                                                <label htmlFor="login-email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                                <input
                                                    id="login-email"
                                                    type="email"
                                                    required
                                                    placeholder="votre@email.com"
                                                    value={formData.loginEmail}
                                                    onChange={(e) => setFormData({ ...formData, loginEmail: e.target.value })}
                                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <div className="flex justify-between items-center ml-1">
                                                    <label htmlFor="login-password" className="block text-sm font-bold text-slate-700 dark:text-slate-300">Mot de passe</label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="login-password"
                                                        type={showPassword ? "text" : "password"}
                                                        required
                                                        placeholder="••••••••"
                                                        value={formData.loginPassword}
                                                        onChange={(e) => setFormData({ ...formData, loginPassword: e.target.value })}
                                                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white pr-12"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                    >
                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
                                            >
                                                {isLoading ? (
                                                    <div className="w-5 h-5 border-2 border-indigo-400 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <LogIn size={20} />
                                                        Accéder à la plateforme
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-[11px] text-slate-400 text-center pt-2 flex items-center justify-center gap-1">
                                                <Lock size={10} /> Connexion chiffrée · Conforme RGPD (UE)
                                            </p>
                                        </form>
                                    ) : (
                                        <form className="space-y-4" onSubmit={handleRegister}>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="space-y-1.5">
                                                    <label htmlFor="register-first" className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Prénom</label>
                                                    <input
                                                        id="register-first"
                                                        type="text"
                                                        required
                                                        placeholder="Jean"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="register-last" className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nom</label>
                                                    <input
                                                        id="register-last"
                                                        type="text"
                                                        required
                                                        placeholder="Dupont"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label htmlFor="register-email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                                <input
                                                    id="register-email"
                                                    type="email"
                                                    required
                                                    placeholder="votre@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label htmlFor="register-password" className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mot de passe</label>
                                                <div className="relative">
                                                    <input
                                                        id="register-password"
                                                        type={showPassword ? "text" : "password"}
                                                        required
                                                        minLength={8}
                                                        placeholder="Min. 8 caractères"
                                                        value={formData.password}
                                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-900 dark:text-white pr-12"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                    >
                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                                {formData.password && formData.password.length < 8 && (
                                                    <p className="text-xs text-amber-600 ml-1 font-semibold">⚠️ Min. 8 caractères requis</p>
                                                )}
                                            </div>

                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
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

                                            <p className="text-[11px] text-slate-400 text-center pt-2 flex items-center justify-center gap-1">
                                                <Lock size={10} /> Mot de passe chiffré (bcrypt) · RGPD (UE)
                                            </p>
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
            <Footer />
        </main>
    );
}
