import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente (CGV) | OTOP Formation",
    description: "Conditions générales de vente des formations proposées par OTOP Formation.",
};

export default function CGVPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <div className="pt-36 pb-24 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-extrabold mb-12 text-slate-900 dark:text-white">Conditions Générales de Vente</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre OTOP Formation et tout client (particulier ou entreprise) souhaitant bénéficier de ses prestations de formation professionnelle.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Inscription et validation</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Toute inscription à une formation est considérée comme définitive après réception du dossier complet (formulaire d'inscription, convention ou contrat de formation signé) et du règlement ou de l'accord de prise en charge par un OPCO/CPF.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Tarifs et modalités de paiement</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Les tarifs des formations sont indiqués en euros hors taxes (HT) sur notre site. OTOP Formation est exonéré de TVA au titre de la formation professionnelle continue (article 261.4.4°a du CGI). Le règlement s'effectue par virement bancaire, carte bancaire ou financement OPCO/CPF. Des facilités de paiement peuvent être accordées sur demande.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Droit de rétractation</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            En application de l'article L.6353-5 du Code du travail, le stagiaire dispose d'un délai de 10 jours à compter de la signature du contrat pour se rétracter par lettre recommandée avec accusé de réception. Passé ce délai, aucun remboursement ne sera effectué pour les formations en cours.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Annulation et report</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Toute annulation doit être signalée par écrit au moins 15 jours avant le début de la formation. En deçà de ce délai, 50% du montant de la formation sera facturé à titre d'indemnité. OTOP Formation se réserve le droit de reporter ou d'annuler une session de formation, notamment en cas de nombre insuffisant de participants.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Propriété intellectuelle</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            L'ensemble des supports pédagogiques (documents, vidéos, exercices, code source) fournis dans le cadre des formations sont la propriété exclusive d'OTOP Formation. Leur reproduction, diffusion ou utilisation à des fins commerciales est strictement interdite.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Certification et attestation</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            À l'issue de chaque formation, une attestation de fin de formation est délivrée au stagiaire. Pour les formations aboutissant à un titre professionnel (RNCP), la certification est délivrée sous réserve de validation par le jury d'examen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Litiges</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux compétents du ressort du siège social d'OTOP Formation seront seuls compétents.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
