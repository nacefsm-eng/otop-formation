import { NextResponse } from "next/server";
import db from "@/lib/db";
import { contactSchema } from "@/lib/validations";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // ✅ Validate input with Zod
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return NextResponse.json(
                { error: "Données invalides", details: errors },
                { status: 400 }
            );
        }

        const { subject, name, email, phone, message, sourceUrl } = result.data;

        const request = await db.contactRequest.create({
            data: {
                subject,
                name,
                email,
                phone: phone || null,
                message,
                sourceUrl: sourceUrl || null,
            },
        });

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}
