import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité (RGPD) | OTOP Formation",
    description: "Politique de confidentialité et de protection des données personnelles d'OTOP Formation, conforme au RGPD.",
};

export default function PolitiqueConfidentialite() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <div className="pt-36 pb-24 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-extrabold mb-12 text-slate-900 dark:text-white">Politique de Confidentialité (RGPD)</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Responsable du traitement</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Le responsable du traitement des données personnelles est :<br />
                            <strong>OTOP Formation</strong><br />
                            Contact DPO : <a href="mailto:contact@otop-formation.fr" className="text-indigo-600 hover:underline">contact@otop-formation.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Dans le cadre de l'utilisation de notre site, nous collectons les données suivantes :
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mt-4">
                            <li><strong>Formulaire de contact</strong> : nom, email, téléphone (optionnel), message, sujet de la demande</li>
                            <li><strong>Inscription apprenant</strong> : prénom, nom, email</li>
                            <li><strong>Navigation</strong> : cookies techniques nécessaires au fonctionnement du site</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Finalités du traitement</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mt-4">
                            <li>Réponse à vos demandes de renseignements et candidatures</li>
                            <li>Gestion de votre inscription et de votre parcours de formation</li>
                            <li>Envoi d'informations relatives à nos formations (avec votre consentement)</li>
                            <li>Amélioration de nos services et du site web</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Base légale</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Les traitements de données sont fondés sur : votre consentement, l'exécution d'un contrat de formation, ou l'intérêt légitime d'OTOP Formation à répondre à vos demandes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Durée de conservation</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Vos données sont conservées pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées, et au maximum 3 ans après le dernier contact.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Vos droits</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mt-4">
                            <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                            <li><strong>Droit de rectification</strong> : demander la correction de données inexactes</li>
                            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                            Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@otop-formation.fr" className="text-indigo-600 hover:underline">contact@otop-formation.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
