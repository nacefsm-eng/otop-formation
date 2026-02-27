"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Award, PlayCircle, LogOut, LayoutDashboard, Calendar, Bell, CheckCircle2, Clock, TrendingUp, ChevronRight, Flame, Target, Star, FileText, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LMSDashboard() {
    const router = useRouter();
    const [userName, setUserName] = useState("Apprenant");
    const [greeting, setGreeting] = useState("Bonjour");

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

        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Bonjour");
        else if (hour < 18) setGreeting("Bon après-midi");
        else setGreeting("Bonsoir");
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("otop_user");
        router.push("/espace-apprenant");
    };

    const sidebarItems = [
        { icon: <LayoutDashboard size={20} />, label: "Tableau de bord", active: true },
        { icon: <BookOpen size={20} />, label: "Mes Cours", active: false },
        { icon: <Calendar size={20} />, label: "Planning", active: false },
        { icon: <Award size={20} />, label: "Certificats", active: false },
        { icon: <FileText size={20} />, label: "Ressources", active: false },
        { icon: <MessageSquare size={20} />, label: "Messages", active: false, badge: 3 },
    ];

    const courses = [
        {
            title: "Introduction à React Hooks",
            module: "Module 3",
            progress: 45,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400",
            status: "En cours"
        },
        {
            title: "State Management avec Redux",
            module: "Module 4",
            progress: 0,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
            status: "À venir"
        },
        {
            title: "HTML & CSS Fondamentaux",
            module: "Module 1",
            progress: 100,
            image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=400",
            status: "Terminé"
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Link href="/" className="font-extrabold text-2xl tracking-tighter flex items-center gap-1">
                        OTOP<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">.LMS</span>
                    </Link>
                </div>

                {/* User Info */}
                <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-indigo-500/30">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-slate-900 dark:text-white">{userName}</div>
                            <div className="text-xs text-slate-500">Développeur Fullstack</div>
                        </div>
                    </div>
                    {/* XP Bar */}
                    <div className="mt-3">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                            <span>Niveau 4</span>
                            <span>1200 / 2000 XP</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="space-y-1 px-3">
                        {sidebarItems.map((item, i) => (
                            <a key={i} href="#" className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${item.active ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                                <span className="flex items-center gap-3">
                                    {item.icon} {item.label}
                                </span>
                                {item.badge && (
                                    <span className="w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{item.badge}</span>
                                )}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-red-600 font-medium transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-sm">
                        <LogOut size={20} /> Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Topbar */}
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{greeting}, {userName} 👋</h1>
                        <p className="text-xs text-slate-500">Continue ton parcours, tu es sur la bonne voie !</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Streak Counter */}
                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg border border-orange-100 dark:border-orange-900/30">
                            <Flame size={16} />
                            <span className="text-xs font-black">7 jours</span>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            { icon: <Clock size={22} />, label: "Heures complétées", value: "24H", color: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-50 dark:bg-indigo-900/20" },
                            { icon: <CheckCircle2 size={22} />, label: "Modules terminés", value: "12/45", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-50 dark:bg-emerald-900/20" },
                            { icon: <Star size={22} />, label: "Note moyenne", value: "94%", color: "from-amber-500 to-orange-500", bgColor: "bg-amber-50 dark:bg-amber-900/20" },
                            { icon: <Target size={22} />, label: "Objectif mensuel", value: "78%", color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50 dark:bg-purple-900/20" },
                        ].map((stat, i) => (
                            <div key={i} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                                    <div className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>{stat.icon}</div>
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Current Course - Hero Card */}
                    <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Reprendre mon apprentissage</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 lg:p-8 border border-slate-200 dark:border-slate-800 mb-8 flex flex-col md:flex-row gap-6 lg:gap-8 items-center hover:shadow-xl transition-shadow">
                        <div className="w-full md:w-56 lg:w-64 aspect-video rounded-2xl overflow-hidden relative shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400"
                                alt="Introduction à React Hooks"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 256px"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors cursor-pointer group">
                                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-xl group-hover:scale-110 transition-transform">
                                    <PlayCircle size={28} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-black text-indigo-600 uppercase tracking-wide bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md">Module 3</span>
                                <span className="text-xs font-bold text-orange-600 flex items-center gap-1"><Flame size={12} /> En cours</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-slate-900 dark:text-white">Introduction à React Hooks</h3>
                            <p className="text-slate-500 mb-4 text-sm line-clamp-2">Comprendre les bases essentielles de React avec useState et useEffect pour la gestion de l&apos;état et des effets de bord.</p>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <span className="text-sm font-black text-indigo-600 shrink-0">45%</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 active:scale-[0.98]">
                                    <PlayCircle size={18} /> Continuer
                                </button>
                                <span className="text-xs text-slate-400 font-semibold">~25 min restantes</span>
                            </div>
                        </div>
                    </div>

                    {/* All Courses Grid */}
                    <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Tous mes modules</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {courses.map((course, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer">
                                <div className="aspect-video relative">
                                    <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white rounded-md ${course.status === 'Terminé' ? 'bg-emerald-500' : course.status === 'En cours' ? 'bg-indigo-600' : 'bg-slate-500'}`}>
                                            {course.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1">{course.module}</div>
                                    <h3 className="font-bold text-sm mb-3 text-slate-900 dark:text-white">{course.title}</h3>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-1">
                                        <div className={`h-1.5 rounded-full transition-all ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`} style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                    <div className="text-[11px] font-bold text-slate-400">{course.progress}% complété</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Upcoming Events */}
                    <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Prochains événements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-4 items-start hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex flex-col items-center justify-center shrink-0">
                                <div className="text-[10px] font-black text-indigo-600 uppercase">Mar</div>
                                <div className="text-lg font-black text-indigo-600">05</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5">Coaching Individuel</h3>
                                <p className="text-xs text-slate-500 mb-2">Revue de projet portfolio avec votre mentor</p>
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                                    <Clock size={12} /> 14h00 - 15h00 · Visio
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-4 items-start hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex flex-col items-center justify-center shrink-0">
                                <div className="text-[10px] font-black text-purple-600 uppercase">Mar</div>
                                <div className="text-lg font-black text-purple-600">08</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5">Masterclass Live</h3>
                                <p className="text-xs text-slate-500 mb-2">Next.js 14 : App Router et Server Components</p>
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                                    <Clock size={12} /> 18h00 - 20h00 · YouTube Live
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
