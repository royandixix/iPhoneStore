import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePage, Link } from "@inertiajs/react";

type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    label?: string;
    price?: string | number;
};

const headerTexts = [
    {
        title: "Fully Secured with Gadget Protection",
        desc: "Nikmati ketenangan pikiran dengan garansi resmi dan perlindungan perangkat menyeluruh untuk setiap pembelian iPhone pilihan Anda.",
    },
    {
        title: "Premium Quality Apple Experience",
        desc: "Rasakan kecanggihan teknologi terbaik dari Apple dengan produk original dan layanan purna jual yang terpercaya.",
    },
    {
        title: "The Most Powerful iPhone Lineup",
        desc: "Dapatkan performa luar biasa dan sistem kamera profesional tercanggih yang pernah ada dalam genggaman Anda.",
    },
    {
        title: "Exclusively Curated For Your Style",
        desc: "Pilih seri iPhone yang paling sesuai dengan kebutuhan produktivitas dan gaya hidup modern Anda hari ini.",
    },
];

function formatPrice(price?: string | number): string {
    if (price === null || price === undefined || price === "") return "—";
    const num = typeof price === "string" ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
    if (isNaN(num) || num === 0) return "—";
    return "Rp " + num.toLocaleString("id-ID");
}

export default function Conten7(): React.JSX.Element {
    const { products } = usePage<{ products: Product[] }>().props;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % headerTexts.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-white py-20 md:py-32 font-sans overflow-hidden">

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-[10px] tracking-[0.35em] text-black/40 uppercase font-medium">
                            Apple Ecosystem
                        </p>

                        <div className="relative min-h-[100px] md:min-h-[120px]">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={index}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="text-[28px] md:text-[44px] font-semibold leading-[1.1] text-black tracking-tight max-w-2xl"
                                >
                                    {headerTexts[index].title}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index + "-desc"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="text-sm text-black/40 leading-relaxed max-w-md font-normal"
                            >
                                {headerTexts[index].desc}
                            </motion.p>
                        </AnimatePresence>

                        {/* Dot indicators */}
                        <div className="flex items-center gap-2 mt-2">
                            {headerTexts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-[3px] rounded-full transition-all duration-300 ${
                                        i === index ? "w-8 bg-black" : "w-2 bg-black/20"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/shop"
                        className="hidden md:inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors duration-300 group shrink-0 mb-1"
                    >
                        Lihat Semua
                        <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                </div>

                {/* ── Spacer ── */}
                <div className="mb-16" />

                {/* ── Product Grid ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
                    {products?.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group"
                        >
                            <Link href={`/shop/${product.id}`} className="flex flex-col">

                                {/* Image */}
                                <div className="relative aspect-square w-full mb-5 flex items-center justify-center p-4">
                                    {product.label && (
                                        <span className="absolute top-0 left-0 text-[9px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-black/5 text-black/50 z-10">
                                            {product.label}
                                        </span>
                                    )}
                                    <motion.img
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                        src={product.image}
                                        alt={product.name}
                                        className="relative z-10 max-h-full w-full object-contain drop-shadow-lg"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://placehold.co/600x600/f5f5f5/aaa?text=No+Image";
                                        }}
                                    />
                                </div>

                                {/* Text content */}
                                <div className="flex flex-col gap-1">

                                    {/* Nama produk — kapital, tegas */}
                                    <h3 className="text-[13px] font-semibold text-black tracking-wide uppercase leading-snug">
                                        {product.name}
                                    </h3>

                                    {/* Deskripsi — normal, tipis */}
                                    <p className="text-[12px] text-black/40 leading-relaxed line-clamp-2 font-normal normal-case">
                                        {product.description}
                                    </p>

                                    {/* Harga + Detail */}
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-[14px] font-semibold text-black tracking-tight">
                                            {formatPrice(product.price)}
                                        </p>
                                        <div className="text-[9px] font-medium flex items-center gap-1 text-black/35 tracking-[0.15em] uppercase group-hover:text-black transition-colors duration-200">
                                            Detail
                                            <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* ── Bottom row ── */}
                <div className="flex items-center justify-between mt-20 pt-8">
                    <Link
                        href="/shop"
                        className="md:hidden text-[11px] font-medium tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors"
                    >
                        Lihat Semua →
                    </Link>

                    <div className="flex gap-3 ml-auto">
                        <button
                            onClick={() => setIndex((prev) => (prev - 1 + headerTexts.length) % headerTexts.length)}
                            className="w-11 h-11 rounded-full bg-black/[0.05] flex items-center justify-center text-black border border-black/10 hover:bg-black/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setIndex((prev) => (prev + 1) % headerTexts.length)}
                            className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}