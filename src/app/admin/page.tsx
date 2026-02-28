import db from "@/lib/db";
import { Users, BookOpen, MessageSquare } from "lucide-react";

export default async function AdminDashboard() {
    const userCount = await db.user.count({ where: { role: "APPRENANT" } });
    const contactCount = await db.contactRequest.count();
    const messageNewCount = await db.contactRequest.count({ where: { status: "NEW" } });
    const formationCount = await db.formation.count();

    const recentContacts = await db.contactRequest.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
    });

    const recentUsers = await db.user.findMany({
        where: { role: "APPRENANT" },
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { id: true, firstName: true, lastName: true, email: true, createdAt: true }
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <Users size={24} className="text-blue-500" />
                        <span className="text-xs font-semibold px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full">Total</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">{userCount}</div>
                    <div className="text-sm text-slate-500 mt-1">Apprenants inscrits</div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <MessageSquare size={24} className="text-amber-500" />
                        <span className="text-xs font-semibold px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 rounded-full">{messageNewCount} non lus</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">{contactCount}</div>
                    <div className="text-sm text-slate-500 mt-1">Demandes de contact</div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <BookOpen size={24} className="text-emerald-500" />
                        <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-full">Actives</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">{formationCount}</div>
                    <div className="text-sm text-slate-500 mt-1">Formations publiées</div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-6 lg:grid-cols-2">

                {/* Derniers Inscrits */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 font-bold text-slate-800 dark:text-slate-200">
                        5 derniers apprenants
                    </div>
                    <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                        {recentUsers.map(user => (
                            <li key={user.id} className="p-4 px-6 flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-sm text-slate-900 dark:text-white">{user.firstName} {user.lastName}</div>
                                    <div className="text-xs text-slate-500">{user.email}</div>
                                </div>
                                <div className="text-[11px] text-slate-400">
                                    {new Date(user.createdAt).toLocaleDateString('fr-FR')}
                                </div>
                            </li>
                        ))}
                        {recentUsers.length === 0 && <p className="p-6 text-sm text-slate-500 text-center">Aucun inscrit pour le moment.</p>}
                    </ul>
                </div>

                {/* Derniers Contacts */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 font-bold text-slate-800 dark:text-slate-200">
                        Derniers messages
                    </div>
                    <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                        {recentContacts.map(contact => (
                            <li key={contact.id} className="p-4 px-6">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="font-semibold text-sm text-slate-900 dark:text-white">{contact.name}</div>
                                    <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${contact.status === 'NEW' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                                        {contact.status}
                                    </div>
                                </div>
                                <div className="text-xs text-slate-500 mb-2">{contact.subject}</div>
                                <div className="text-sm text-slate-700 dark:text-slate-300 line-clamp-1 italic">{contact.message}</div>
                            </li>
                        ))}
                        {recentContacts.length === 0 && <p className="p-6 text-sm text-slate-500 text-center">Aucun message pour le moment.</p>}
                    </ul>
                </div>

            </div>
        </div>
    );
}
