import { NextResponse } from "next/server";
import db from "@/lib/db";
import { apprenantSchema } from "@/lib/validations";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // ✅ Validate input with Zod
        const result = apprenantSchema.safeParse(body);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return NextResponse.json(
                { error: "Données invalides", details: errors },
                { status: 400 }
            );
        }

        const { email, firstName, lastName } = result.data;

        // Check if user already exists
        const existing = await db.apprenant.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Un compte avec cet email existe déjà." },
                { status: 409 }
            );
        }

        const apprenant = await db.apprenant.create({
            data: {
                email,
                firstName,
                lastName,
                status: "ACTIVE",
            },
        });

        return NextResponse.json({
            success: true,
            id: apprenant.id,
            message: "Compte créé avec succès",
        });
    } catch (error) {
        console.error("[APPRENANTS_POST]", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}
