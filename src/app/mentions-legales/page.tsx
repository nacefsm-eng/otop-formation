import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | OTOP Formation",
    description: "Mentions légales du site OTOP Formation – informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
};

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <div className="pt-36 pb-24 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-extrabold mb-12 text-slate-900 dark:text-white">Mentions Légales</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Le site <strong>otop-formation.fr</strong> est édité par :<br />
                            <strong>OTOP Formation</strong><br />
                            Organisme de formation professionnelle<br />
                            Siège social : [Adresse à compléter]<br />
                            SIRET : [Numéro à compléter]<br />
                            Numéro de déclaration d'activité : [À compléter auprès de la DREETS]<br />
                            Directeur de la publication : [Nom du responsable]<br />
                            Contact : <a href="mailto:contact@otop-formation.fr" className="text-indigo-600 hover:underline">contact@otop-formation.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ce site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            L'ensemble des contenus présents sur le site OTOP Formation (textes, images, vidéos, logos, graphismes, icônes) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            OTOP Formation s'efforce de fournir des informations exactes et actualisées sur ce site. Toutefois, les informations diffusées ne sauraient prétendre à l'exhaustivité. OTOP Formation décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des contenus disponibles sur le site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Liens hypertextes</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Le site OTOP Formation peut contenir des liens vers d'autres sites web. OTOP Formation n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité les concernant.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
