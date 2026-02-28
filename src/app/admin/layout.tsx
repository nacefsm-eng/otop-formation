import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, MessageSquare, BookOpen, LogOut, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "ADMIN") {
        redirect("/espace-apprenant");
    }

    const menu = [
        { href: "/admin", icon: <LayoutDashboard size={20} />, label: "Tableau de Bord" },
        { href: "/admin/users", icon: <Users size={20} />, label: "Apprenants" },
        { href: "/admin/contacts", icon: <MessageSquare size={20} />, label: "Contacts" },
        { href: "/admin/formations", icon: <BookOpen size={20} />, label: "Formations" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
                <div className="h-20 flex items-center px-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
                    <Link href="/admin" className="font-extrabold text-2xl tracking-tighter flex items-center gap-1">
                        OTOP<span className="text-red-500">.ADMIN</span>
                    </Link>
                </div>

                <nav className="p-4 space-y-2 flex-grow">
                    {menu.map((item) => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white transition-all font-semibold text-sm">
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <ThemeToggle />
                    <Link href="/" className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all">
                        <Home size={18} /> Retour au site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto w-full">
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Administration Centrale</h1>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
