import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, ShieldCheck, Award, Code, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos | OTOP Formation – L'école de demain",
    description: "Découvrez OTOP Formation : notre vision, nos valeurs, notre équipe pédagogique et nos certifications internationales (Qualiopi, RNCP).",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />

            <section className="pt-40 pb-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-bold mb-6">
                            Qui sommes-nous ?
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                            L&apos;école OTOP : <br />
                            <span className="text-indigo-600">Rejoignez l&apos;Élite.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-12">
                            OTOP Formation est né en France d&apos;une conviction simple : la formation à distance doit être engageante, internationale et mener à des résultats mesurables.
                            Nous rassemblons les meilleurs experts mondiaux pour accompagner entreprises et particuliers face aux défis de l&apos;économie numérique.
                        </p>
                    </div>
                </div>
            </section>

            {/* Chiffres Clés */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { num: "2018", text: "Année de fondation" },
                            { num: "2 500+", text: "Apprenants certifiés dans le monde" },
                            { num: "98%", text: "Taux d'insertion professionnelle à 6M" },
                            { num: "15", text: "Pays représentés parmi nos alumni" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-8 border-l border-slate-200 dark:border-slate-800 last:border-r">
                                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{stat.num}</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest leading-relaxed">{stat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valeurs / Piliers */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Engagements</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: <Target className="text-indigo-600" />, title: "Vision Globale", desc: "Des parcours traduits et adaptés aux standards internationaux (Europe, Amérique du Nord, Afrique francophone)." },
                            { icon: <ShieldCheck className="text-emerald-600" />, title: "Excellence Pédagogique", desc: "Mise à jour constante de nos cursus par des praticiens en poste." },
                            { icon: <Users className="text-orange-600" />, title: "Accompagnement 1-to-1", desc: "Chaque apprenant est suivi par un mentor dédié de sa spécialité." },
                            { icon: <Award className="text-purple-600" />, title: "Certifications Officielles", desc: "Délivrance de Titres Professionnels et passage de certifications reconnues mondialement." }
                        ].map((val, i) => (
                            <div key={i} className="p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex gap-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                                    {val.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{val.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre Équipe */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">L&apos;Équipe Pédagogique</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Plus de 50 experts formateurs basés aux 4 coins du globe (France, Canada, Suisse, Maroc) pour vous transmettre le meilleur de chaque filière.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Thomas R.", role: "Directeur Académique", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80" },
                            { name: "Camille S.", role: "Responsable Digital & Tech", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
                            { name: "Karim M.", role: "Coach Carrière & Insertion", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80" },
                        ].map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                                    <Image src={member.image} alt={member.name + " - " + member.role} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                                    <div className="absolute inset-0 bg-indigo-900/20" />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-3">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partenaires et Labels */}
            <section className="py-24 bg-slate-900 text-white mx-4 md:mx-6 rounded-[40px] mb-24 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none blur-[100px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Certifications &amp; Standards Internationaux</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Notre qualité d&apos;enseignement est validée par des organismes d&apos;État et des leaders technologiques.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="border border-slate-700 p-8 rounded-3xl bg-slate-800/50">
                            <div className="text-2xl font-bold mb-4 text-indigo-400">Qualiopi (France)</div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Certification d&apos;État attestant de l&apos;excellence de nos processus pédagogiques, garantissant l&apos;accès à de nombreux financements européens.
                            </p>
                        </div>
                        <div className="border border-slate-700 p-8 rounded-3xl bg-slate-800/50">
                            <div className="text-2xl font-bold mb-4 text-emerald-400">Titres RNCP</div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Nos formations principales délivrent des Titres inscrits au Répertoire National (équivalences Bachelor &amp; Master reconnues en UE).
                            </p>
                        </div>
                        <div className="border border-slate-700 p-8 rounded-3xl bg-slate-800/50">
                            <div className="text-2xl font-bold mb-4 text-amber-400">Partenariats Tech</div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Reconnus par l&apos;écosystème : préparation aux certifications AWS, Microsoft, et outils standards de l&apos;industrie (Figma, GitHub).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 pt-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Prêt à nous rejoindre ?</h2>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 font-bold text-white rounded-xl shadow-xl shadow-indigo-600/20 hover:scale-105 transition-all">
                    Discuter de votre projet
                    <MessageCircle size={20} />
                </Link>
            </section>

            <Footer />
        </main>
    );
}
