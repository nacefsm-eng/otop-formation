// This route is deprecated — use /api/register instead
// Kept for backwards compatibility but redirects to the new endpoint

import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.json(
        {
            error: "Ce endpoint est obsolète. Utilisez /api/register pour créer un compte.",
            redirect: "/api/register",
        },
        { status: 301 }
    );
}
