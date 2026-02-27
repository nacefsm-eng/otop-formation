import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Quiz } from "@/components/Quiz";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Domains Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos domaines d'expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Nous couvrons un large éventail de compétences pour répondre aux besoins du marché actuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital & Tech",
                desc: "Développement web, Data, IA et Marketing Digital pour booster votre présence en ligne."
              },
              {
                title: "Management",
                desc: "Soft skills, leadership et gestion de projet pour transformer votre manière de diriger."
              },
              {
                title: "Santé & Social",
                desc: "Accompagnement, services à la personne et bien-être, au cœur de l'humain."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group hover:shadow-2xl hover:shadow-indigo-500/5 bg-white dark:bg-slate-900/50">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 relative z-10 hidden md:block">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trouvez votre voie</h2>
            <p className="text-slate-500 mb-4 max-w-2xl mx-auto text-lg">
              Répondez à quelques questions simples pour découvrir le parcours de formation qui vous correspond le mieux.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Footer Basic */}
      <footer className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <div className="text-xl font-bold mb-2">OTOP Formation</div>
              <p className="text-slate-500 max-w-xs text-sm">
                Accompagner chaque individu vers l'excellence professionnelle grâce à des parcours adaptés.
              </p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Confidentialité</a>
              <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} OTOP Formation. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}
