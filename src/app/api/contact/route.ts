import { NextResponse } from "next/server";
import db from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
    subject: z.string().min(1).max(200).trim(),
    name: z.string().min(2).max(100).trim(),
    email: z.string().email().max(254).trim().toLowerCase(),
    phone: z.string().max(20).trim().optional().or(z.literal("")),
    message: z.string().min(10).max(5000).trim(),
    sourceUrl: z.string().max(500).optional().or(z.literal("")),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Données invalides", details: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { subject, name, email, phone, message, sourceUrl } = result.data;

        const request = await db.contactRequest.create({
            data: { subject, name, email, phone: phone || null, message, sourceUrl: sourceUrl || null },
        });

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
    }
}
