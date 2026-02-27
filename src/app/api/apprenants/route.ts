import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName } = body;

        if (!email || !firstName || !lastName) {
            return new NextResponse("Missing fields", { status: 400 });
        }

        // Check if user already exists
        const existing = await db.apprenant.findUnique({
            where: { email },
        });

        if (existing) {
            return new NextResponse("Un compte avec cet email existe déjà.", { status: 409 });
        }

        const apprenant = await db.apprenant.create({
            data: {
                email,
                firstName,
                lastName,
                status: "ACTIVE",
            },
        });

        return NextResponse.json(apprenant);
    } catch (error) {
        console.error("[APPRENANTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
