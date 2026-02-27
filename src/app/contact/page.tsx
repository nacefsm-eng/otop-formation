import { Navbar } from "@/components/Navbar";
import { Mail, Phone, MapPin, MessageSquare, Clock, Calendar } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />

            <div className="pt-40 pb-24 container mx-auto px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                    {/* Left panel: Info */}
                    <div className="flex-1 lg:max-w-sm">
                        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">Parlons de votre <br /><span className="text-gradient">projet.</span></h1>
                        <p className="text-slate-500 text-lg mb-12">
                            Besoin d'un devis ou d'un conseil personnalisé ? Prenez rendez-vous directement ou envoyez-nous un message.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Téléphone</div>
                                    <div className="text-slate-500">01 23 45 67 89</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Email</div>
                                    <div className="text-slate-500">contact@otop-formation.fr</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Horaires</div>
                                    <div className="text-slate-500">Lun - Ven : 9h00 - 18h00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right panel: Contact Options (Tabs-like Layout) */}
                    <div className="flex-[2]">
                        <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-[40px] p-6 md:p-10 border border-slate-200 dark:border-slate-800">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

                                {/* Form side */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <MessageSquare size={24} className="text-indigo-600" />
                                        Nous écrire
                                    </h2>
                                    <form className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Nom Complet</label>
                                            <input type="text" placeholder="Jean Dupont" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Email Professionnel</label>
                                            <input type="email" placeholder="jean@entreprise.fr" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Votre Message</label>
                                            <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm" />
                                        </div>
                                        <div className="pt-2">
                                            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]">
                                                Envoyer
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Separation for mobile, hidden on XL */}
                                <div className="xl:hidden h-px bg-slate-200 dark:bg-slate-800 w-full my-4" />

                                {/* Calendly Side */}
                                <div className="flex flex-col h-full">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Calendar size={24} className="text-indigo-600" />
                                        Prendre un créneau
                                    </h2>
                                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm relative min-h-[400px]">
                                        {/* Placeholder for Calendly integration */}
                                        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center p-8 z-10 backdrop-blur-sm transition-opacity hover:opacity-0">
                                            <Calendar size={48} className="text-indigo-300 dark:text-indigo-800 mb-4" />
                                            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-2">Planifier un appel</h3>
                                            <p className="text-sm text-slate-500 max-w-xs">Survolez et cliquez pour utiliser notre agenda interactif Calendly.</p>
                                            <button className="mt-4 px-6 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full text-sm font-semibold pointer-events-none">Charger l'agenda</button>
                                        </div>

                                        {/* Fake "Calendly" iframe. Replace URL with the actual Calendly URL */}
                                        <iframe
                                            src="https://calendly.com/calendly_widget_placeholder"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            className="absolute inset-0 bg-white"
                                            title="Prendre rendez-vous OTOP Formation"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
