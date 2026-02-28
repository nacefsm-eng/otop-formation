export default function Loading() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 rounded-full animate-spin" />
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 animate-pulse">
                    Chargement en cours…
                </p>
            </div>
        </main>
    );
}
