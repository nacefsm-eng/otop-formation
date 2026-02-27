import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OTOP Formation | L'excellence en formation à portée de clic",
  description: "Des parcours personnalisés, une insertion professionnelle garantie et des formations certifiantes adaptées aux nouveaux métiers de demain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
