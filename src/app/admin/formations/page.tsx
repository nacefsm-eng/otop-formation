import db from "@/lib/db";
import { BookOpen, PlusCircle, PenSquare, Trash2 } from "lucide-react";

export default async function AdminFormationsPage() {
    const formations = await db.formation.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="text-emerald-500" /> Gestion des Formations
                    </h2>
                    <p className="text-slate-500 mt-1">Créez, modifiez ou supprimez les formations du catalogue.</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/25 active:scale-95 text-sm cursor-not-allowed opacity-50">
                    <PlusCircle size={18} /> Ajouter une formation (Bientôt)
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {formations.map((formation) => (
                    <div key={formation.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col group">
                        <div className="h-40 overflow-hidden relative">
                            <img src={formation.image} alt={formation.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {formation.badge && (
                                <span className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-indigo-600 font-black text-[10px] rounded-lg tracking-wider uppercase">
                                    {formation.badge}
                                </span>
                            )}
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                                {formation.category} • {formation.level}
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2">
                                {formation.title}
                            </h3>
                            <div className="flex-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                                {formation.pitch}
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div className="font-black text-slate-900 dark:text-white">
                                    {formation.price}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors cursor-not-allowed">
                                        <PenSquare size={16} />
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-not-allowed">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {formations.length === 0 && (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 border-dashed dark:border-slate-800 rounded-2xl">
                        <p className="text-slate-500">Aucune formation créée. Utilisez le seed pour en générer.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
