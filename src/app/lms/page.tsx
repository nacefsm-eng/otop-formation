"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Award, PlayCircle, Settings, LogOut, LayoutDashboard, Calendar, Bell, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LMSDashboard() {
    const router = useRouter();
    const [userName, setUserName] = useState("Apprenant");

    useEffect(() => {
        const user = localStorage.getItem("otop_user");
        if (!user) {
            router.push("/espace-apprenant");
        } else {
            try {
                const parsed = JSON.parse(user);
                if (parsed.firstName) setUserName(parsed.firstName);
            } catch (e) { }
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("otop_user");
        router.push("/espace-apprenant");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Link href="/" className="font-extrabold text-2xl tracking-tighter">
                        OTOP<span className="text-indigo-600">.LMS</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-6">
                    <nav className="space-y-1 px-4">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-xl font-bold">
                            <LayoutDashboard size={20} /> Tableau de bord
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">
                            <BookOpen size={20} /> Mes Cours
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">
                            <Calendar size={20} /> Planning
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">
                            <Award size={20} /> Certificats
                        </a>
                    </nav>
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-red-600 font-medium transition-colors">
                        <LogOut size={20} /> Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Topbar */}
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
                    <h1 className="text-2xl font-bold">Bonjour, {userName} 👋</h1>
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors">
                            <Bell size={20} />
                        </button>
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center">
                                <PlayCircle size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-500">Heures de formation</div>
                                <div className="text-2xl font-black">24H</div>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex items-center justify-center">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-500">Modules Validés</div>
                                <div className="text-2xl font-black">12/45</div>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center">
                                <Award size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-500">Note moyenne</div>
                                <div className="text-2xl font-black">94%</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mb-6">Reprendre mon apprentissage</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 mb-8 flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-64 aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-indigo-600">
                                    <PlayCircle size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">Module 3 • En cours</div>
                            <h3 className="text-2xl font-bold mb-2">Introduction à React Hooks</h3>
                            <p className="text-slate-500 mb-6">Comprendre les bases des fonctionalités essentielles de React avec useState et useEffect pour la gestion de l'état.</p>

                            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 mb-2">
                                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <div className="text-sm font-semibold text-slate-500">45% complété</div>
                        </div>
                        <div>
                            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors">
                                Continuer
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
