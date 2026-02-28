import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { formationSchema } from "@/lib/validations";

export async function GET() {
    try {
        const formations = await prisma.formation.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(formations);
    } catch (error) {
        console.error("[FORMATIONS_GET]", error);
        return NextResponse.json(
            { error: "Impossible de charger les formations" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        // ⚠️ TODO: Add admin authentication middleware here
        // For now, this endpoint is protected by validation only
        const body = await req.json();

        // ✅ Validate input with Zod
        const result = formationSchema.safeParse(body);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return NextResponse.json(
                { error: "Données invalides", details: errors },
                { status: 400 }
            );
        }

        const formation = await prisma.formation.create({
            data: result.data,
        });

        return NextResponse.json(formation, { status: 201 });
    } catch (error) {
        console.error("[FORMATIONS_POST]", error);
        return NextResponse.json(
            { error: "Impossible de créer la formation" },
            { status: 500 }
        );
    }
}
