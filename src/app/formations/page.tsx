import { Navbar } from "@/components/Navbar";
import { Search, Filter, BookOpen, Clock, Users } from "lucide-react";

const formations = [
    {
        id: 1,
        title: "Développeur Fullstack React/Next.js",
        category: "Digital",
        duration: "400h",
        level: "Avancé",
        type: "Distanciel",
        price: "4500€",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Management & Leadership Agile",
        category: "Management",
        duration: "35h",
        level: "Intermédiaire",
        type: "Présentiel / Mixte",
        price: "1200€",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Marketing Digital & Growth Hacking",
        category: "Digital",
        duration: "120h",
        level: "Débutant",
        type: "Distanciel",
        price: "2800€",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    }
];

export default function FormationsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <header className="pt-32 pb-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nos Formations</h1>
                    <p className="text-slate-500 max-w-2xl mb-8">
                        Explorez notre catalogue de formations certifiantes et développez les compétences qui feront la différence.
                    </p>

                    {/* Filters Bar */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Rechercher une formation..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                            />
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold hover:bg-slate-50 transition-all">
                            <Filter size={20} />
                            Filtres
                        </button>
                    </div>
                </div>
            </header>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {formations.map((f) => (
                            <div key={f.id} className="group bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all hover:-translate-y-1">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={f.image} alt={f.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-indigo-600">
                                        {f.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 line-clamp-2 min-h-[3.5rem]">{f.title}</h3>

                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                            <Clock size={16} />
                                            {f.duration}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                            <BookOpen size={16} />
                                            {f.level}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                            <Users size={16} />
                                            {f.type}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{f.price}</div>
                                        <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-colors">
                                            Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
