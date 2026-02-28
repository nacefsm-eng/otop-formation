import { z } from "zod";

// ─── Contact Form ───
export const contactSchema = z.object({
    subject: z.string().min(1, "Sujet requis").max(200).trim(),
    name: z.string().min(2, "Nom trop court").max(100).trim(),
    email: z.string().email("Email invalide").max(254).trim().toLowerCase(),
    phone: z.string().max(20).trim().optional().or(z.literal("")),
    message: z.string().min(10, "Message trop court (10 caractères min)").max(5000).trim(),
    sourceUrl: z.string().max(500).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

// ─── Apprenant Registration ───
export const apprenantSchema = z.object({
    firstName: z.string().min(2, "Prénom trop court").max(50).trim(),
    lastName: z.string().min(2, "Nom trop court").max(50).trim(),
    email: z.string().email("Email invalide").max(254).trim().toLowerCase(),
});

export type ApprenantInput = z.infer<typeof apprenantSchema>;

// ─── Formation (Admin only) ───
export const formationSchema = z.object({
    title: z.string().min(3).max(200).trim(),
    category: z.string().min(1).max(100).trim(),
    badge: z.string().max(50).optional(),
    pitch: z.string().min(10).max(2000).trim(),
    duration: z.string().min(1).max(50).trim(),
    level: z.string().min(1).max(50).trim(),
    type: z.string().min(1).max(100).trim(),
    language: z.string().min(1).max(50).trim(),
    certification: z.string().min(1).max(200).trim(),
    price: z.string().min(1).max(50).trim(),
    image: z.string().url("URL d'image invalide").max(500),
    slug: z.string().min(1).max(200).trim(),
});

export type FormationInput = z.infer<typeof formationSchema>;
