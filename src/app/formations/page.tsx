import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, BookOpen, Clock, Users, ArrowRight, Award, Globe } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Formations Certifiantes | OTOP Formation",
    description: "Explorez nos formations certifiantes en Digital, Management et Santé. Finançables CPF, OPCO ou entreprise. Insertion professionnelle garantie.",
};

const formations = [
    {
        id: 1,
        title: "Développeur Fullstack React/Next.js",
        category: "Digital",
        badge: "Best-Seller",
        pitch: "Devenez Développeur Fullstack opérationnel en 4 mois sur des projets concrets.",
        duration: "400h",
        level: "Avancé",
        type: "100% en ligne",
        language: "FR",
        certification: "RNCP Niveau 6 (Bac+3/4)",
        price: "4500€",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        url: "/formations/developpeur-fullstack-react-nextjs"
    },
    {
        id: 2,
        title: "Management & Leadership Agile",
        category: "Management",
        badge: "Nouveau",
        pitch: "Maîtrisez les frameworks agiles (Scrum, Kanban) pour diriger des équipes cross-fonctionnelles.",
        duration: "35h",
        level: "Intermédiaire",
        type: "Hybride (Paris + Remote)",
        language: "FR / EN",
        certification: "Certification PSM I",
        price: "1200€",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        url: "/formations/management-leadership-agile"
    },
    {
        id: 3,
        title: "Marketing Digital & Growth Hacking",
        category: "Digital",
        badge: "Financement CPF",
        pitch: "Apprenez à générer de l'acquisition qualifiée à grande échelle avec les outils de growth modernes.",
        duration: "120h",
        level: "Débutant",
        type: "Distanciel",
        language: "FR",
        certification: "Bloc de compétences RNCP",
        price: "2800€",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        url: "/formations/marketing-digital-growth-hacking"
    }
];

export default function FormationsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <header className="pt-32 pb-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Explorez nos Formations</h1>
                    <p className="text-slate-500 max-w-2xl mb-8">
                        Des parcours certifiants conçus avec les experts du marché. Finançables CPF, OPCO ou entreprise.
                    </p>

                    {/* Filters Bar */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 lg:flex gap-4">
                        <div className="relative flex-1 mb-4 lg:mb-0">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Ex. React, Management, Growth..."
                                className="w-full pl-14 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                            />
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                            <select className="px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium whitespace-nowrap outline-none focus:ring-2 focus:ring-indigo-500 shrink-0">
                                <option>Tous les domaines</option>
                                <option>Digital &amp; Tech</option>
                                <option>Management</option>
                                <option>Santé &amp; Social</option>
                            </select>
                            <select className="px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium whitespace-nowrap outline-none focus:ring-2 focus:ring-indigo-500 shrink-0">
                                <option>Niveau : Tous</option>
                                <option>Débutant</option>
                                <option>Intermédiaire</option>
                                <option>Avancé</option>
                            </select>
                            <select className="px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium whitespace-nowrap outline-none focus:ring-2 focus:ring-indigo-500 shrink-0">
                                <option>Format : Tous</option>
                                <option>100% en ligne</option>
                                <option>Hybride</option>
                                <option>Présentiel</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {formations.map((f) => (
                            <div key={f.id} className="group bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all hover:-translate-y-1 flex flex-col">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                                    <Image src={f.image} alt={f.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 items-start">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-[11px] font-black uppercase tracking-wider text-indigo-600 rounded-lg backdrop-blur-md">
                                            {f.category}
                                        </span>
                                        {f.badge && (
                                            <span className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white rounded-lg backdrop-blur-md shadow-lg ${f.badge === 'Best-Seller' ? 'bg-orange-500' : f.badge === 'Nouveau' ? 'bg-emerald-500' : 'bg-purple-600'}`}>
                                                {f.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2 leading-tight">{f.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                                        {f.pitch}
                                    </p>

                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 mt-auto">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                            <Clock size={16} className="text-slate-400" />
                                            {f.duration}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                            <BookOpen size={16} className="text-slate-400" />
                                            {f.level}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                            <Users size={16} className="text-slate-400" />
                                            {f.type}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                            <Globe size={16} className="text-slate-400" />
                                            Langue : {f.language}
                                        </div>
                                        <div className="col-span-2 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-800/50">
                                            <Award size={16} />
                                            {f.certification}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mb-6">
                                        <div>
                                            <div className="text-sm text-slate-500 mb-1">À partir de</div>
                                            <div className="text-2xl font-black text-slate-900 dark:text-white">
                                                {f.price} <span className="text-sm font-medium text-slate-400">HT</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <a href={f.url} className="px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-center rounded-xl text-sm font-bold transition-colors">
                                            Programme
                                        </a>
                                        <a href={`/contact?subject=Candidater+à+une+formation&formation=${encodeURIComponent(f.title)}`} className="px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-xl text-sm font-bold transition-colors shadow-lg shadow-indigo-500/20">
                                            Candidater
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
