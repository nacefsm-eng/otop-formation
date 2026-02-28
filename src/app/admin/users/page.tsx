import db from "@/lib/db";
import { Users, Mail } from "lucide-react";

export default async function AdminUsersPage() {
    const users = await db.user.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Users className="text-indigo-500" /> Gestion des Apprenants
                </h2>
                <p className="text-slate-500 mt-1">Liste complète des utilisateurs inscrits sur la plateforme.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4">Nom complet</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Rôle</th>
                                <th className="px-6 py-4">Date d'inscription</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                                        <Mail size={14} /> {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-400">
                                        {new Date(user.createdAt).toLocaleDateString('fr-FR', {
                                            day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
