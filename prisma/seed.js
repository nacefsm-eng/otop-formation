const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.formation.upsert({
        where: { slug: 'developpeur-fullstack-react-nextjs' },
        update: {},
        create: {
            title: 'Développeur Fullstack React/Next.js',
            category: 'Digital',
            badge: 'Best-Seller',
            pitch: 'Devenez Développeur Fullstack opérationnel en 4 mois sur des projets concrets.',
            duration: '400h',
            level: 'Avancé',
            type: '100% en ligne',
            language: 'FR',
            certification: 'RNCP Niveau 6 (Bac+3/4)',
            price: '4500€',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
            slug: 'developpeur-fullstack-react-nextjs'
        }
    });

    await prisma.formation.upsert({
        where: { slug: 'management-leadership-agile' },
        update: {},
        create: {
            title: 'Management & Leadership Agile',
            category: 'Management',
            badge: 'Nouveau',
            pitch: 'Maîtrisez les frameworks agiles (Scrum, Kanban) pour diriger des équipes cross-fonctionnelles.',
            duration: '35h',
            level: 'Intermédiaire',
            type: 'Hybride (Paris + Remote)',
            language: 'FR / EN',
            certification: 'Certification PSM I',
            price: '1200€',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
            slug: 'management-leadership-agile'
        }
    });
    console.log('Seed completed');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
