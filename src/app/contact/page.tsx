"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Clock, MessageSquare, Calendar, Globe, CheckCircle2 } from "lucide-react";
import { useState, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
    const searchParams = useSearchParams();
    const initialSubject = searchParams.get('subject') || "Demande de devis / Financement";
    const sourceCandidature = searchParams.get('formation');

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        subject: initialSubject,
        name: "",
        email: "",
        phone: "",
        message: sourceCandidature ? `Je souhaite candidater à la formation : ${sourceCandidature}. ` : ""
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, sourceUrl: window.location.href }),
            });

            if (!res.ok) throw new Error("Erreur serveur");

            setSuccess(true);
            setFormData({ subject: "Demande de devis / Financement", name: "", email: "", phone: "", message: "" });
        } catch (err: any) {
            setErrorMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center p-10 text-center bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">Message envoyé !</h3>
                <p className="text-emerald-700 dark:text-emerald-300">
                    Nous avons bien reçu votre demande. Notre équipe pédagogique reviendra vers vous sous 24h ouvrées.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold border border-red-200">
                    {errorMsg}
                </div>
            )}

            <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Sujet de la demande</label>
                <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
                >
                    <option>Demande de devis / Financement</option>
                    <option>Informations sur une formation</option>
                    <option>Candidater à une formation</option>
                    <option>Devenir Partenaire</option>
                    <option>Autre</option>
                </select>
                {formData.subject === 'Candidater à une formation' && (
                    <p className="text-xs text-indigo-600 ml-1 font-semibold">
                        🚀 Précisez la formation souhaitée dans votre message pour accélérer votre dossier.
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Nom Complet</label>
                <input
                    required
                    type="text"
                    placeholder="Ex: Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Email & Téléphone</label>
                <input
                    required
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all mb-3 font-medium text-slate-900 dark:text-white"
                />
                <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700 dark:text-slate-300">Votre Message</label>
                <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin ou votre projet professionnel..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
                />
            </div>
            <div className="pt-4">
                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 hover:shadow-xl"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                    ) : (
                        "Envoyer ma demande"
                    )}
                </button>
                <p className="text-xs text-center mt-3 text-slate-400">Vos données sont sécurisées et ne seront pas partagées.</p>
            </div>
        </form>
    )
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="pt-40 pb-24 container mx-auto px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left panel: Info */}
                    <div className="flex-1 lg:max-w-sm">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Parlons de votre <br /><span className="text-indigo-600">projet.</span></h1>
                        <p className="text-slate-500 text-lg mb-12">
                            Besoin d'un devis, d'informations sur les financements ou d'un conseil personnalisé ? Prenez rendez-vous directement ou envoyez-nous un message.
                        </p>

                        <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Téléphone</div>
                                    <div className="text-slate-500 font-mono">+33 (0)1 23 45 67 89</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Email</div>
                                    <div className="text-slate-500">contact@otop-formation.fr</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Horaires</div>
                                    <div className="text-slate-500">Lun - Ven : 9h00 - 18h00 (CET)</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                            <Globe className="text-indigo-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold mb-1">International students?</h4>
                                <p className="text-sm text-slate-500">Booking a call with our English-speaking advisors is highly recommended to discuss visa, remote learning, and global certifications.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right panel: Contact Options */}
                    <div className="flex-[2] bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-indigo-500/5">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

                            {/* Form side */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 rounded-xl flex items-center justify-center">
                                        <MessageSquare size={20} />
                                    </div>
                                    Nous écrire
                                </h2>

                                <Suspense fallback={<div className="animate-pulse h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl"></div>}>
                                    <ContactFormInner />
                                </Suspense>

                            </div>

                            {/* Separation for mobile */}
                            <div className="xl:hidden h-px bg-slate-200 dark:bg-slate-800 w-full" />

                            {/* Calendly Side */}
                            <div className="flex flex-col h-full">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 rounded-xl flex items-center justify-center">
                                        <Calendar size={20} />
                                    </div>
                                    Prendre rendez-vous
                                </h2>

                                <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative min-h-[500px] flex items-center justify-center p-8 text-center group">
                                    <div className="relative z-10 max-w-sm">
                                        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Calendar size={40} className="text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Réserver un créneau de 15 min</h3>
                                        <p className="text-slate-500 dark:text-slate-400 mb-8">
                                            Échangez avec notre équipe pédagogique (parfait pour valider vos prérequis ou les options de financement).
                                        </p>

                                        <a
                                            href="https://calendly.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all w-full"
                                        >
                                            Ouvrir l'agenda (Calendly)
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
