import { Navbar } from "@/components/Navbar";
import { CheckCircle2, ArrowRight, User, TrendingUp, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ParcoursPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />

            <section className="pt-40 pb-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-bold mb-6">
                                Méthodologie OTOP
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                                Un accompagnement <br />
                                <span className="text-indigo-600">sur-mesure.</span>
                            </h1>
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                Chez OTOP Formation, nous ne vendons pas qu'un simple cours en ligne.
                                Nous construisons ensemble votre feuille de route vers le succès :
                                100% encadré par des experts, avec des cas concrets et des objectifs d'embauche mesurables.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Audit de positionnement offert",
                                    "Plan de formation 100% adapté",
                                    "Coaching individuel hebdomadaire en Live",
                                    "Accès exclusif à notre réseau d'entreprises"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 flex-col p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <CheckCircle2 className="text-indigo-500 mb-2 shrink-0" size={24} />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="inline-flex px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 transition-all items-center gap-2 shadow-xl shadow-slate-200 dark:shadow-none">
                                Réserver mon audit gratuit
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-500/10 rotate-1 border border-slate-100 dark:border-slate-800 bg-white p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Session de coaching personnalisé OTOP"
                                    className="w-full h-full object-cover rounded-[32px]"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Steps */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Votre réussite en 4 étapes</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Un processus éprouvé auprès de plus de 2000 apprenants, pensé pour maximiser votre taux d'employabilité.</p>
                    </div>

                    <div className="relative">
                        {/* Ligne de connexion cachée sur mobile, visible sur lg */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {[
                                { step: "01", icon: <User />, title: "Diagnostic", desc: "1h d'échange (FR/EN) pour évaluer vos acquis et définir un objectif concret." },
                                { step: "02", icon: <Briefcase />, title: "Planification", desc: "Construction d'un emploi du temps adapté à vos contraintes pros et persos." },
                                { step: "03", icon: <TrendingUp />, title: "Formation", desc: "Plateforme en ligne 24/7 + Masterclasses live et coaching hebdomadaire." },
                                { step: "04", icon: <CheckCircle2 />, title: "Certification", desc: "Validation par un jury pro et mise en relation directe avec les recruteurs." }
                            ].map((s, i) => (
                                <div key={i} className="relative bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform">
                                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30 text-xl font-bold">
                                        {s.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Persona Example */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-indigo-600 rounded-[40px] p-8 md:p-16 lg:flex items-center gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none" />

                        <div className="lg:w-1/3 mb-10 lg:mb-0 relative z-10">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" alt="Exemple de parcours réussi" className="rounded-3xl shadow-2xl rotate-[-3deg] border-4 border-white/10" />
                        </div>

                        <div className="lg:w-2/3 text-white relative z-10">
                            <div className="inline-block px-3 py-1 bg-white/20 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                Cas Concret
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">De Responsable de Magasin à Développeuse Web Frontend</h2>

                            <div className="space-y-6 text-indigo-100">
                                <p><strong>Profil :</strong> Sara, 28 ans, en reconversion professionnelle totale.</p>
                                <div className="h-px bg-white/20 w-full" />
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-black text-white mb-1">4 mois</div>
                                        <div className="text-sm">Durée de formation</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-white mb-1">16 h</div>
                                        <div className="text-sm">De coaching individuel Live</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-white mb-1">3</div>
                                        <div className="text-sm">Projets réels livrés</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-white mb-1">30 Jours</div>
                                        <div className="text-sm">Pour signer son CDI (Capgemini)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">Vous êtes le prochain ?</h2>
                    <p className="text-slate-500 mb-10 text-lg">
                        Plus de 80% de nos apprenants trouvent un emploi ou lancent leur projet dans les 6 mois après leur certification.
                        Rejoignez une communauté internationale (15+ pays représentés) et bénéficiez d'un accompagnement d'élite.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20">
                            Parler à un conseiller pédagogique
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
