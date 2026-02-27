import Link from "next/link";

export const Footer = () => {
    return (
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
                            <li><Link href="/formations?f=tech" className="hover:text-indigo-400 transition-colors">Digital &amp; Tech</Link></li>
                            <li><Link href="/formations?f=management" className="hover:text-indigo-400 transition-colors">Management &amp; Leadership</Link></li>
                            <li><Link href="/formations?f=sante" className="hover:text-indigo-400 transition-colors">Santé &amp; Social</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liens Utiles</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/a-propos" className="hover:text-indigo-400 transition-colors">Qui sommes-nous ?</Link></li>
                            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact &amp; Support</Link></li>
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
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                        <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité (RGPD)</Link>
                        <Link href="/cgv" className="hover:text-white transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
