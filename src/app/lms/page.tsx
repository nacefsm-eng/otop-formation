"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    BookOpen, Award, PlayCircle, LogOut, LayoutDashboard,
    Calendar, Bell, CheckCircle2, Clock, Flame, Target,
    Star, FileText, MessageSquare, X, Download,
    ChevronRight, BarChart2, Lock, Check
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type View = "dashboard" | "cours" | "planning" | "certificats" | "ressources" | "messages";

const COURSES = [
    {
        id: 1, title: "HTML & CSS Fondamentaux", module: "Module 1", progress: 100,
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=400",
        status: "Terminé", duration: "12h", level: "Débutant"
    },
    {
        id: 2, title: "JavaScript Moderne (ES6+)", module: "Module 2", progress: 100,
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=400",
        status: "Terminé", duration: "20h", level: "Intermédiaire"
    },
    {
        id: 3, title: "Introduction à React Hooks", module: "Module 3", progress: 45,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400",
        status: "En cours", duration: "18h", level: "Intermédiaire"
    },
    {
        id: 4, title: "State Management avec Redux", module: "Module 4", progress: 0,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
        status: "À venir", duration: "15h", level: "Avancé"
    },
    {
        id: 5, title: "Next.js 14 & App Router", module: "Module 5", progress: 0,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
        status: "À venir", duration: "22h", level: "Avancé"
    },
];

const MESSAGES = [
    { id: 1, from: "Thomas R.", role: "Directeur Académique", avatar: "T", color: "bg-indigo-600", time: "Il y a 2h", text: "Bonjour ! N'oubliez pas la session de coaching de demain à 14h. Préparez votre projet portfolio pour revue.", unread: true },
    { id: 2, from: "Camille S.", role: "Responsable Digital", avatar: "C", color: "bg-purple-600", time: "Il y a 5h", text: "Félicitations pour votre avancement sur le Module 3 ! Votre score au quiz était excellent (94%).", unread: true },
    { id: 3, from: "Karim M.", role: "Coach Carrière", avatar: "K", color: "bg-emerald-600", time: "Hier", text: "J'ai partagé quelques ressources supplémentaires sur React dans la section Ressources. Bon courage !", unread: true },
];

const RESOURCES = [
    { title: "Templates HTML/CSS Professionnels", type: "ZIP", size: "4.2 Mo", icon: "📦", module: "Module 1" },
    { title: "Exercices JavaScript ES6+ Corrigés", type: "PDF", size: "2.8 Mo", icon: "📄", module: "Module 2" },
    { title: "Cheat Sheet React Hooks", type: "PDF", size: "1.1 Mo", icon: "📄", module: "Module 3" },
    { title: "Projet Starter Redux Toolkit", type: "ZIP", size: "3.5 Mo", icon: "📦", module: "Module 4" },
    { title: "Slides Masterclass Next.js 14", type: "PDF", size: "6.7 Mo", icon: "📄", module: "Module 5" },
];

const EVENTS = [
    { day: "05", month: "Mar", title: "Coaching Individuel", desc: "Revue de projet portfolio • Visio", time: "14h00 – 15h00", color: "bg-indigo-600" },
    { day: "08", month: "Mar", title: "Masterclass Live", desc: "Next.js 14 — App Router & Server Components • YouTube Live", time: "18h00 – 20h00", color: "bg-purple-600" },
    { day: "12", month: "Mar", title: "Examen Module 3", desc: "Évaluation React Hooks — 25 questions QCM", time: "10h00 – 11h00", color: "bg-amber-500" },
    { day: "19", month: "Mar", title: "Atelier Peer-to-Peer", desc: "Code Review en groupe — 4 participants", time: "16h00 – 17h30", color: "bg-emerald-600" },
];

export default function LMSDashboard() {
    const router = useRouter();
    const [userName, setUserName] = useState("Apprenant");
    const [greeting, setGreeting] = useState("Bonjour");
    const [view, setView] = useState<View>("dashboard");
    const [showNotifs, setShowNotifs] = useState(false);
    const [unreadMessages, setUnreadMessages] = useState(3);
    const [readMessages, setReadMessages] = useState<number[]>([]);
    const [playingCourse, setPlayingCourse] = useState(false);

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

    const markRead = (id: number) => {
        if (!readMessages.includes(id)) {
            setReadMessages([...readMessages, id]);
            setUnreadMessages(prev => Math.max(0, prev - 1));
        }
    };

    const navItems: { id: View; icon: JSX.Element; label: string }[] = [
        { id: "dashboard", icon: <LayoutDashboard size={20} />, label: "Tableau de bord" },
        { id: "cours", icon: <BookOpen size={20} />, label: "Mes Cours" },
        { id: "planning", icon: <Calendar size={20} />, label: "Planning" },
        { id: "certificats", icon: <Award size={20} />, label: "Certificats" },
        { id: "ressources", icon: <FileText size={20} />, label: "Ressources" },
        { id: "messages", icon: <MessageSquare size={20} />, label: "Messages" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex" onClick={() => showNotifs && setShowNotifs(false)}>

            {/* ─── Sidebar ─── */}
            <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col shrink-0">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Link href="/" className="font-extrabold text-2xl tracking-tighter flex items-center gap-1">
                        OTOP<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">.LMS</span>
                    </Link>
                </div>

                {/* User */}
                <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-indigo-500/30">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-slate-900 dark:text-white truncate max-w-[140px]">{userName}</div>
                            <div className="text-xs text-slate-500">Développeur Fullstack</div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                            <span>Niveau 4</span><span>1200 / 2000 XP</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full" style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="space-y-1 px-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setView(item.id)}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${view === item.id
                                        ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600"
                                        : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    }`}
                            >
                                <span className="flex items-center gap-3">{item.icon} {item.label}</span>
                                {item.id === "messages" && unreadMessages > 0 && (
                                    <span className="w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {unreadMessages}
                                    </span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-red-600 font-medium transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-sm">
                        <LogOut size={20} /> Déconnexion
                    </button>
                </div>
            </aside>

            {/* ─── Main ─── */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Topbar */}
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{greeting}, {userName} 👋</h1>
                        <p className="text-xs text-slate-500">Continue ton parcours, tu es sur la bonne voie !</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg border border-orange-100 dark:border-orange-900/30">
                            <Flame size={16} /><span className="text-xs font-black">7 jours</span>
                        </div>
                        {/* Notification Bell */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowNotifs(!showNotifs)}
                                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors relative"
                            >
                                <Bell size={20} />
                                {unreadMessages > 0 && <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800" />}
                            </button>
                            {showNotifs && (
                                <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="font-bold text-sm text-slate-900 dark:text-white">Notifications</span>
                                        <button onClick={() => setShowNotifs(false)} className="text-slate-400 hover:text-red-500"><X size={16} /></button>
                                    </div>
                                    {MESSAGES.map((m) => (
                                        <div key={m.id} onClick={() => { markRead(m.id); setView("messages"); setShowNotifs(false); }}
                                            className={`flex gap-3 p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800/50 ${!readMessages.includes(m.id) ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}>
                                            <div className={`w-9 h-9 ${m.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>{m.avatar}</div>
                                            <div className="min-w-0">
                                                <div className="flex justify-between items-start">
                                                    <span className="font-bold text-xs text-slate-900 dark:text-white">{m.from}</span>
                                                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{m.time}</span>
                                                </div>
                                                <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{m.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => { setView("messages"); setShowNotifs(false); }} className="w-full py-3 text-center text-xs font-bold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                        Voir tous les messages →
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* ─── Scrollable content ─── */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">

                    {/* ══════════════════════ DASHBOARD ══════════════════════ */}
                    {view === "dashboard" && (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: <Clock size={22} />, label: "Heures complétées", value: "24H", color: "from-indigo-500 to-blue-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                                    { icon: <CheckCircle2 size={22} />, label: "Modules terminés", value: "2/5", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
                                    { icon: <Star size={22} />, label: "Note moyenne", value: "94%", color: "from-amber-500 to-orange-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
                                    { icon: <Target size={22} />, label: "Objectif mensuel", value: "45%", color: "from-purple-500 to-pink-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                                ].map((s, i) => (
                                    <div key={i} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                        <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center text-indigo-600`}>{s.icon}</div>
                                        <div>
                                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{s.label}</div>
                                            <div className="text-2xl font-black text-slate-900 dark:text-white">{s.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Current Course Hero */}
                            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Reprendre mon apprentissage</h2>
                            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 lg:p-8 border border-slate-200 dark:border-slate-800 mb-8 flex flex-col md:flex-row gap-6 lg:gap-8 items-center">
                                <div className="w-full md:w-64 aspect-video rounded-2xl overflow-hidden relative shrink-0 cursor-pointer" onClick={() => setPlayingCourse(!playingCourse)}>
                                    <Image src={COURSES[2].image} alt={COURSES[2].title} fill className="object-cover" sizes="256px" />
                                    {!playingCourse ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors group">
                                            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-xl group-hover:scale-110 transition-transform">
                                                <PlayCircle size={28} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-indigo-900/90 flex flex-col items-center justify-center gap-2">
                                            <div className="w-10 h-10 border-4 border-indigo-400 border-t-white rounded-full animate-spin" />
                                            <span className="text-white text-xs font-bold">Chargement…</span>
                                            <button onClick={(e) => { e.stopPropagation(); setPlayingCourse(false); }} className="mt-2 text-indigo-300 hover:text-white text-xs underline">Annuler</button>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md uppercase tracking-wide">Module 3</span>
                                        <span className="text-xs font-bold text-orange-600 flex items-center gap-1"><Flame size={12} /> En cours</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-slate-900 dark:text-white">Introduction à React Hooks</h3>
                                    <p className="text-slate-500 mb-4 text-sm">Comprendre les bases essentielles de React avec useState et useEffect pour la gestion de l&apos;état et des effets de bord.</p>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" style={{ width: "45%" }} />
                                        </div>
                                        <span className="text-sm font-black text-indigo-600 shrink-0">45%</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setPlayingCourse(true)} className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 active:scale-[0.98]">
                                            <PlayCircle size={18} /> Continuer
                                        </button>
                                        <button onClick={() => setView("cours")} className="px-4 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                                            <BookOpen size={16} /> Tous les cours
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Quick access to planning */}
                            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Prochains événements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {EVENTS.slice(0, 2).map((ev, i) => (
                                    <div key={i} onClick={() => setView("planning")} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-4 items-start hover:shadow-md transition-all cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-800 group">
                                        <div className={`w-14 h-14 ${ev.color} rounded-xl flex flex-col items-center justify-center shrink-0 shadow-md`}>
                                            <div className="text-[10px] font-black text-white/80 uppercase">{ev.month}</div>
                                            <div className="text-lg font-black text-white">{ev.day}</div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5 group-hover:text-indigo-600 transition-colors">{ev.title}</h3>
                                            <p className="text-xs text-slate-500 mb-1.5">{ev.desc}</p>
                                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                                                <Clock size={11} /> {ev.time}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════ MES COURS ══════════════════════ */}
                    {view === "cours" && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mes Cours</h2>
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                    <BarChart2 size={16} /> 2 terminés • 1 en cours • 2 à venir
                                </div>
                            </div>
                            <div className="space-y-4">
                                {COURSES.map((course, i) => (
                                    <div key={i} className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row gap-0 hover:shadow-lg transition-all ${course.status === 'À venir' ? 'opacity-70' : ''}`}>
                                        <div className="w-full md:w-56 aspect-video md:aspect-auto relative shrink-0">
                                            <Image src={course.image} alt={course.title} fill className="object-cover" sizes="224px" />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white rounded-md ${course.status === 'Terminé' ? 'bg-emerald-500' : course.status === 'En cours' ? 'bg-indigo-600' : 'bg-slate-500'}`}>
                                                    {course.status}
                                                </span>
                                            </div>
                                            {course.status === 'À venir' && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                    <Lock size={28} className="text-white/80" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div>
                                                <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1">{course.module}</div>
                                                <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{course.title}</h3>
                                                <div className="flex gap-3 text-xs text-slate-500 font-medium mb-4">
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                                                    <span className="flex items-center gap-1"><Star size={12} /> {course.level}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                                                        <div className={`h-2 rounded-full transition-all ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${course.progress}%` }} />
                                                    </div>
                                                    <span className={`text-xs font-black ${course.progress === 100 ? 'text-emerald-600' : 'text-indigo-600'}`}>{course.progress}%</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-3">
                                                {course.status === "Terminé" && (
                                                    <button onClick={() => setView("certificats")} className="px-4 py-2.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold rounded-xl text-sm flex items-center gap-2 hover:bg-emerald-100 transition-colors border border-emerald-200 dark:border-emerald-900/50">
                                                        <Award size={16} /> Voir le certificat
                                                    </button>
                                                )}
                                                {course.status === "En cours" && (
                                                    <button onClick={() => setPlayingCourse(true)} className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
                                                        <PlayCircle size={16} /> Continuer
                                                    </button>
                                                )}
                                                {course.status === "À venir" && (
                                                    <span className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold rounded-xl text-sm flex items-center gap-2">
                                                        <Lock size={16} /> Bientôt disponible
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════ PLANNING ══════════════════════ */}
                    {view === "planning" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Planning</h2>
                            <div className="space-y-4">
                                {EVENTS.map((ev, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex gap-5 items-center hover:shadow-md transition-all">
                                        <div className={`w-16 h-16 ${ev.color} rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-lg`}>
                                            <div className="text-[10px] font-black text-white/80 uppercase">{ev.month}</div>
                                            <div className="text-2xl font-black text-white leading-none">{ev.day}</div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">{ev.title}</h3>
                                            <p className="text-sm text-slate-500 mb-2">{ev.desc}</p>
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                                <Clock size={12} /> {ev.time}
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 font-bold rounded-xl text-sm hover:bg-indigo-100 transition-colors border border-indigo-100 dark:border-indigo-800/50">
                                            Rejoindre
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════ CERTIFICATS ══════════════════════ */}
                    {view === "certificats" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Certificats</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {COURSES.filter(c => c.status === "Terminé").map((course, i) => (
                                    <div key={i} className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                                <Award size={28} className="text-white" />
                                            </div>
                                            <div className="text-xs font-black uppercase tracking-widest text-indigo-300 mb-1">Certificat de réussite</div>
                                            <h3 className="text-xl font-extrabold mb-1">{course.title}</h3>
                                            <p className="text-indigo-200 text-sm mb-6">{userName} • OTOP Formation</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm">
                                                    <Check size={14} /> Validé le 01/03/2026
                                                </div>
                                                <button className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg">
                                                    <Download size={16} /> Télécharger
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-3">Prochains certificats</h3>
                                {COURSES.filter(c => c.status !== "Terminé").map((course, i) => (
                                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                                            <Lock size={16} className="text-slate-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-sm text-slate-700 dark:text-slate-300">{course.title}</div>
                                            <div className="text-xs text-slate-400">{course.progress}% complété</div>
                                        </div>
                                        <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                                            <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════ RESSOURCES ══════════════════════ */}
                    {view === "ressources" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Ressources Pédagogiques</h2>
                            <div className="space-y-3">
                                {RESOURCES.map((r, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-center gap-4 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group">
                                        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-2xl shrink-0">
                                            {r.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5 truncate">{r.title}</h3>
                                            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                                <span className={`px-1.5 py-0.5 rounded font-bold ${r.type === 'PDF' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'}`}>{r.type}</span>
                                                <span>{r.size}</span>
                                                <span>•</span>
                                                <span>{r.module}</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 font-bold rounded-xl text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors border border-indigo-100 dark:border-indigo-800/50 shrink-0 group-hover:shadow-md">
                                            <Download size={16} /> Télécharger
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════ MESSAGES ══════════════════════ */}
                    {view === "messages" && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Messages</h2>
                                {unreadMessages > 0 && (
                                    <span className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 font-bold text-xs rounded-full border border-red-100 dark:border-red-900/30">
                                        {unreadMessages} non lu{unreadMessages > 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-3">
                                {MESSAGES.map((m) => (
                                    <div
                                        key={m.id}
                                        onClick={() => markRead(m.id)}
                                        className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex gap-4 cursor-pointer hover:shadow-md transition-all ${!readMessages.includes(m.id) ? 'border-l-4 border-l-indigo-500' : ''}`}
                                    >
                                        <div className={`w-12 h-12 ${m.color} rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0`}>{m.avatar}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <div>
                                                    <span className="font-bold text-sm text-slate-900 dark:text-white mr-2">{m.from}</span>
                                                    <span className="text-xs text-slate-400">{m.role}</span>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0 ml-2">
                                                    {!readMessages.includes(m.id) && (
                                                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                                                    )}
                                                    <span className="text-xs text-slate-400">{m.time}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{m.text}</p>
                                            {!readMessages.includes(m.id) && (
                                                <button className="mt-3 text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                                    <Check size={12} /> Marquer comme lu
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Reply box */}
                            <div className="mt-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Envoyer un message à votre mentor</h3>
                                <textarea
                                    placeholder="Écrivez votre message ici..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    rows={4}
                                />
                                <div className="flex justify-end mt-3">
                                    <button
                                        onClick={() => alert("✉️ Message envoyé à votre mentor ! Vous recevrez une réponse sous 24h.")}
                                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
                                    >
                                        <ChevronRight size={16} /> Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
