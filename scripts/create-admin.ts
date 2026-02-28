import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const adminEmail = "admin@otop-formation.fr";
    const adminPassword = "password123!"; // ⚠️ A changer en prod

    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {
            password: hashedPassword,
            role: "ADMIN"
        },
        create: {
            email: adminEmail,
            firstName: "Super",
            lastName: "Admin",
            password: hashedPassword,
            role: "ADMIN"
        }
    });

    console.log("✅ Compte administrateur créé :");
    console.log(`- Email : ${admin.email}`);
    console.log(`- Role  : ${admin.role}`);
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
