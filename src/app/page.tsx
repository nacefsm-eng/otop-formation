import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Quiz } from "@/components/Quiz";
import { ArrowRight, Star, Quote } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Logos Partenaires / Entreprises */}
      <section className="py-12 bg-white dark:bg-slate-950 border-b border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Ils recrutent nos apprenants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Remplacer par de vrais logos */}
            <div className="text-xl font-black">L'ORÉAL</div>
            <div className="text-xl font-black">CAPGEMINI</div>
            <div className="text-xl font-black">SOCIÉTÉ GÉNÉRALE</div>
            <div className="text-xl font-black">THALES</div>
            <div className="text-xl font-black">BNP PARIBAS</div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos domaines d'expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Des formations conçues avec les experts du marché pour répondre aux besoins concrets des recruteurs internationaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital & Tech",
                desc: "Développement web, Data, IA et Marketing Digital.",
                jobs: "Développeur, Data Analyst, Growth Hacker",
                url: "/formations?f=tech"
              },
              {
                title: "Management",
                desc: "Soft skills, leadership et gestion de projet.",
                jobs: "Chef de projet, Manager Agile, Scrum Master",
                url: "/formations?f=management"
              },
              {
                title: "Santé & Social",
                desc: "Accompagnement, services à la personne et bien-être.",
                jobs: "Conseiller, Responsable qualité, Coach",
                url: "/formations?f=sante"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group hover:shadow-2xl hover:shadow-indigo-500/5 bg-white dark:bg-slate-950">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">{item.desc}</p>

                <div className="flex-grow">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-300 mb-2">Débouchés :</div>
                  <div className="text-sm text-slate-500">{item.jobs}</div>
                </div>

                <Link href={item.url} className="mt-8 flex items-center font-bold text-indigo-600 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 gap-2">
                  Voir les programmes
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ils ont transformé leur carrière</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Découvrez les retours de nos anciens apprenants, aujourd'hui en poste dans de grandes entreprises.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.", role: "Développeuse Frontend chez Capgemini",
                text: " OTDP Formation m'a permis de me reconvertir en seulement 4 mois. Le coaching hebdomadaire a fait toute la différence lors de mes entretiens."
              },
              {
                name: "Alexandre D.", role: "Chef de projet Agile",
                text: "Une pédagogie axée sur la pratique. Les cas d'études sont tirés de situations réelles d'entreprises internationales."
              },
              {
                name: "Fatima B.", role: "Manager Qualité",
                text: "La flexibilité du format m'a permis de me former tout en gardant mon emploi. Aujourd'hui, j'ai obtenu la promotion visée !"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 relative">
                <Quote className="absolute top-6 right-8 text-indigo-500/20" size={48} />
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 relative bg-indigo-600 overflow-hidden mx-4 md:mx-6 rounded-[40px] mb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Trouvez votre voie</h2>
            <p className="text-indigo-100 mb-4 max-w-2xl mx-auto text-lg">
              Répondez à quelques questions simples pour découvrir la formation idéale et planifier un appel avec notre équipe pédagogique.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Footer Pro */}
      <footer className="py-16 bg-slate-950 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-extrabold text-white mb-4">OTOP <span className="text-indigo-500">Formation</span></div>
              <p className="text-sm leading-relaxed mb-6">
                Propulsez votre carrière avec des formations certifiantes (Qualiopi), un suivi sur-mesure et une insertion professionnelle garantie.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Formations</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/formations?f=tech" className="hover:text-indigo-400 transition-colors">Digital & Tech</Link></li>
                <li><Link href="/formations?f=management" className="hover:text-indigo-400 transition-colors">Management & Leadership</Link></li>
                <li><Link href="/formations?f=sante" className="hover:text-indigo-400 transition-colors">Santé & Social</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liens Utiles</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/a-propos" className="hover:text-indigo-400 transition-colors">Qui sommes-nous ?</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact & Support</Link></li>
                <li><Link href="/espace-apprenant" className="hover:text-indigo-400 transition-colors">Login LMS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">International</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Book a Call (EN)</Link></li>
                <li><p className="text-slate-500">Global Certifications</p></li>
                <li><p className="text-slate-500">Remote Learning Options</p></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} OTOP Formation. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité (RGPD)</Link>
              <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
              <Link href="#" className="hover:text-white transition-colors">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
