import { Navbar } from "@/components/Navbar";
import { Target, Users, ShieldCheck, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                            Notre mission : <br />
                            <span className="text-gradient">Propulser vos talents.</span>
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed mb-12">
                            OTOP Formation est né d'une conviction simple : la formation doit être accessible,
                            engageante et surtout, elle doit mener à des résultats concrets.
                            Nous accompagnons les entreprises et les particuliers dans leur transformation numérique et managériale.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Target className="text-indigo-600" />, title: "Vision", desc: "Devenir le partenaire de référence pour la montée en compétences." },
                            { icon: <ShieldCheck className="text-emerald-600" />, title: "Qualiopi", desc: "Un engagement total sur la qualité et la certification de nos parcours." },
                            { icon: <Users className="text-orange-600" />, title: "Humain", desc: "Un accompagnement personnalisé pour chaque apprenant." },
                            { icon: <Award className="text-purple-600" />, title: "Excellence", desc: "Des formateurs experts sélectionnés pour leur savoir-faire." }
                        ].map((val, i) => (
                            <div key={i} className="p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/20 dark:shadow-none">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 mb-24 overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Partenaires & Certifications</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Simulation de logos */}
                        <div className="text-2xl font-black italic tracking-tighter">QUALIOPI</div>
                        <div className="text-2xl font-black italic tracking-tighter">POLE EMPLOI</div>
                        <div className="text-2xl font-black italic tracking-tighter">DATADOCK</div>
                        <div className="text-2xl font-black italic tracking-tighter">CPFF</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
