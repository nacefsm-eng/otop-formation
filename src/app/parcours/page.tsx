import { Navbar } from "@/components/Navbar";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
                                <span className="text-indigo-600">sur mesure.</span>
                            </h1>
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                Chez OTOP Formation, nous ne vendons pas seulement des cours.
                                Nous construisons avec vous un véritable parcours de réussite,
                                de l'audit initial jusqu'à votre insertion professionnelle.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Audit gratuit de vos compétences",
                                    "Plan de formation personnalisé",
                                    "Coaching individuel hebdomadaire",
                                    "Mise en relation avec notre réseau d'entreprises"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-semibold text-slate-700 dark:text-slate-200">
                                        <CheckCircle2 className="text-indigo-500" size={22} />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center gap-2">
                                En savoir plus
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Coaching session"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Les 4 étapes de votre réussite</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Diagnostic", desc: "Évaluation de vos besoins et objectifs de carrière." },
                            { step: "02", title: "Planification", desc: "Création d'un calendrier adapté à vos contraintes." },
                            { step: "03", title: "Formation", desc: "Apprentissage interactif et mise en pratique réelle." },
                            { step: "04", title: "Certification", desc: "Obtention de votre titre et aide à l'embauche." }
                        ].map((s, i) => (
                            <div key={i} className="relative p-8 text-center border-l border-slate-200 dark:border-slate-800 last:border-r">
                                <div className="text-4xl font-black text-slate-100 dark:text-slate-800 mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                <p className="text-sm text-slate-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
