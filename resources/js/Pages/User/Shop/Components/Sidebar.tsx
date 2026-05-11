import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const categories = [
    { label: "Semua Produk", href: "/shop" },
    { label: "iPhone 12 Series", href: "/shop?series=12" },
    { label: "iPhone 13 Series", href: "/shop?series=13" },
    { label: "iPhone 14 Series", href: "/shop?series=14" },
    { label: "iPhone 15 Series", href: "/shop?series=15" },
];

const priceRanges = [
    { label: "Di bawah Rp 10jt", href: "/shop?max=10000000" },
    { label: "Rp 10jt – 15jt", href: "/shop?min=10000000&max=15000000" },
    { label: "Rp 15jt – 20jt", href: "/shop?min=15000000&max=20000000" },
    { label: "Di atas Rp 20jt", href: "/shop?min=20000000" },
];

function Section({ title, items, url, onItemClick }: any) {
    return (
        <div className="mb-12">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 px-1">
                {title}
            </h3>

            <ul className="space-y-4">
                {items.map((item: any) => {
                    const isActive = url === item.href;

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={onItemClick}
                                className={`group flex items-center gap-4 text-base transition-all duration-300
                                ${
                                    isActive
                                        ? "text-black font-medium"
                                        : "text-gray-500 hover:text-black"
                                }`}
                            >
                                <div 
                                    className={`h-[1px] transition-all duration-500 ${
                                        isActive ? "w-8 bg-black" : "w-0 bg-gray-300 group-hover:w-4"
                                    }`} 
                                />
                                <span className={isActive ? "translate-x-0" : "-translate-x-2 group-hover:translate-x-0 transition-transform duration-300"}>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default function Sidebar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);

    const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={`${isMobile ? "p-8" : "py-4"}`}>
            <div className="mb-12 px-1">
                <h2 className="text-2xl font-black tracking-tighter text-black uppercase">
                    Pilihan
                </h2>
                <div className="h-1 w-12 bg-black mt-2" />
            </div>

            <Section title="Koleksi" items={categories} url={url} onItemClick={() => setIsOpen(false)} />
            <Section title="Budget" items={priceRanges} url={url} onItemClick={() => setIsOpen(false)} />

            <div className="mt-12 pt-8 border-t border-gray-100">
                <Link 
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-gray-400 hover:text-black uppercase tracking-[0.2em] transition-colors"
                >
                    Reset Filter
                </Link>
            </div>
        </div>
    );

    return (
        <>
            {/* MOBILE BUTTON - Muncul di layar kecil */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-black text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 active:scale-95 transition-transform"
                >
                    <span className="text-sm font-bold tracking-widest uppercase">
                        {isOpen ? "Tutup" : "Filter"}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 12h9.75M10.5 18h9.75M3 6h.008v.008H3V6Zm0 6h.008v.008H3V12Zm0 6h.008v.008H3V18Z" />
                    </svg>
                </button>
            </div>

            {/* MOBILE OVERLAY & DRAWER */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl animate-in slide-in-from-left duration-300">
                        <SidebarContent isMobile />
                    </div>
                </div>
            )}

            {/* DESKTOP SIDEBAR - Tersembunyi di mobile */}
            <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-16">
                    <SidebarContent />
                </div>
            </aside>
        </>
    );
}