"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Page error:", error);
    }, [error]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/10 flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <AlertTriangle size={40} className="text-red-500" />
                </div>

                <h1 className="text-3xl font-extrabold mb-4 text-slate-900 dark:text-white">
                    Une erreur est survenue
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">
                    Quelque chose s&apos;est mal passé. Veuillez réessayer ou retourner à l&apos;accueil.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-indigo-500/20 transition-all"
                    >
                        <RefreshCw size={20} />
                        Réessayer
                    </button>
                    <Link
                        href="/"
                        className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        <Home size={20} />
                        Accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}
