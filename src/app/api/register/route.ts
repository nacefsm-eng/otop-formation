import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    firstName: z.string().min(2, "Prénom trop court").max(50).trim(),
    lastName: z.string().min(2, "Nom trop court").max(50).trim(),
    email: z.string().email("Email invalide").max(254).trim().toLowerCase(),
    password: z
        .string()
        .min(8, "Le mot de passe doit faire au moins 8 caractères")
        .max(100),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const result = registerSchema.safeParse(body);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return NextResponse.json(
                { error: "Données invalides", details: errors },
                { status: 400 }
            );
        }

        const { email, firstName, lastName, password } = result.data;

        // Check if user already exists
        const existing = await db.user.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Un compte avec cet email existe déjà." },
                { status: 409 }
            );
        }

        // Hash password with bcrypt (12 rounds)
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await db.user.create({
            data: {
                email,
                firstName,
                lastName,
                password: hashedPassword,
                role: "APPRENANT",
            },
        });

        return NextResponse.json({
            success: true,
            message: "Compte créé avec succès ! Vous pouvez maintenant vous connecter.",
        });
    } catch (error) {
        console.error("[REGISTER_POST]", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}
