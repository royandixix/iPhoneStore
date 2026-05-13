import type { ReactNode } from "react";
import { usePage } from "@inertiajs/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

interface Props {
    children: ReactNode;
}

export default function UserLayout({ children }: Props) {
    const { url } = usePage(); // 🔥 ambil dari inertia

    const isAuthPage =
        url.startsWith("/login") ||
        url.startsWith("/register");

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">

            {/* NAVBAR */}
            {!isAuthPage && (
                <header>
                    <Navbar />
                </header>
            )}

            {/* MAIN */}
            <main className="flex-1">
                {children}
            </main>

            {/* FOOTER */}
            {!isAuthPage && (
                <footer className="mt-auto">
                    <Footer />
                </footer>
            )}

            {/* TOAST */}
            <Toaster />
        </div>
    );
}