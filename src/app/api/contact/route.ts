import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const contactInfo = {
            subject: data.subject,
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            message: data.message,
            sourceUrl: data.sourceUrl || null
        };

        const request = await prisma.contactRequest.create({
            data: contactInfo
        });

        // Optionnel : Envoyer un e-mail à l'admin ici via Resend, Sendgrid ou Nodemailer

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: 'Failed to submit contact request' }, { status: 500 });
    }
}
