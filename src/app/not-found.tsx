import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/10 flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <div className="text-[180px] md:text-[220px] font-black text-slate-100 dark:text-slate-900 leading-none select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-bounce">
                            <Search size={40} className="text-white" />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
                    Page introuvable
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                    Oups ! La page que vous cherchez n&apos;existe pas ou a été déplacée.
                    Pas de panique, on vous remet sur la bonne voie.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-indigo-500/20 transition-all hover:scale-105"
                    >
                        <Home size={20} />
                        Retour à l&apos;accueil
                    </Link>
                    <Link
                        href="/formations"
                        className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Voir les formations
                    </Link>
                </div>
            </div>
        </main>
    );
}
