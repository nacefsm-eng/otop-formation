import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
    try {
        const formations = await prisma.formation.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(formations);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch formations' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const formation = await prisma.formation.create({
            data
        });
        return NextResponse.json(formation, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create formation' }, { status: 500 });
    }
}
