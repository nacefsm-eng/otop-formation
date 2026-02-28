import db from "@/lib/db";
import { MessageSquare, Calendar, Link as LinkIcon, Phone, Mail } from "lucide-react";

export default async function AdminContactsPage() {
    const contacts = await db.contactRequest.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MessageSquare className="text-amber-500" /> Messages et Contacts
                </h2>
                <p className="text-slate-500 mt-1">Gérez les demandes de contact reçues via le formulaire du site.</p>
            </div>

            <div className="space-y-4">
                {contacts.map((contact) => (
                    <div key={contact.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 relative group overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${contact.status === 'NEW' ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-700'}`} />

                        {/* Infos expéditeur */}
                        <div className="w-full md:w-64 shrink-0 space-y-3">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    {contact.name}
                                </h3>
                                <div className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-1">
                                    <Calendar size={12} /> {new Date(contact.createdAt).toLocaleDateString('fr-FR', {
                                        day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                                    })}
                                </div>
                            </div>

                            <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                                    <Mail size={14} className="shrink-0" /> <span className="truncate">{contact.email}</span>
                                </a>
                                {contact.phone && (
                                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                                        <Phone size={14} className="shrink-0" /> {contact.phone}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800/80">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                                    Objet : {contact.subject}
                                </h4>
                                <span className={`shrink-0 px-2 py-1 uppercase text-[10px] font-black tracking-wider rounded-lg border ${contact.status === 'NEW' ? 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:border-red-800'
                                        : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                    }`}>
                                    {contact.status}
                                </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                                {contact.message}
                            </p>

                            {contact.sourceUrl && (
                                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-400">
                                    <LinkIcon size={12} /> Envoyé depuis : <a href={contact.sourceUrl} target="_blank" className="hover:text-indigo-500 underline truncate max-w-[200px]">{contact.sourceUrl}</a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {contacts.length === 0 && (
                    <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 border-dashed dark:border-slate-800 rounded-2xl">
                        <p className="text-slate-500">Boîte de réception vide. Aucun nouveau message.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
