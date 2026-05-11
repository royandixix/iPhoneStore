import { Link } from "@inertiajs/react";
import { ShieldCheck, Smartphone, BadgeDollarSign, Truck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Feature = {
    title: string;
    desc: string;
    icon: React.ReactNode;
    label: string;
    image?: string;
    images?: string[];
};

export default function Conten2() {
    const [currentIndex, setCurrentIndex] = useState<Record<number, number>>({});

    const nextSlide = (i: number, length: number) => {
        setCurrentIndex((prev) => ({
            ...prev,
            [i]: ((prev[i] ?? 0) + 1) % length,
        }));
    };

    const prevSlide = (i: number, length: number) => {
        setCurrentIndex((prev) => ({
            ...prev,
            [i]: ((prev[i] ?? 0) - 1 + length) % length,
        }));
    };

    const features: Feature[] = [
        {
            title: "Garansi Resmi",
            desc: "Setiap unit iPhone yang kami hadirkan disertai dengan proteksi penuh dan jaminan garansi resmi untuk memastikan ketenangan pikiran Anda dalam jangka panjang.",
            icon: <ShieldCheck strokeWidth={1} className="w-12 h-12" />,
            label: "Security",
            image: "/images/photo-1702289613082-1252ec3eb5d4.avif",
        },
        {
            title: "100% Original",
            desc: "Menampilkan detail presisi pada material premium seperti bodi Titanium dan lensa kamera beresolusi tinggi. Setiap sudut mempertegas keaslian dan kualitas khas iPhone yang tidak bisa ditiru.",
            icon: <Smartphone strokeWidth={1} className="w-12 h-12" />,
            label: "Authentic",
            images: [
                "/images/M-0ePLkJ76ji1TSXxHht3vAyz0dDxR7VcybFx3sVbknL6aumTtPZmFdG0ukecqYE10x7Y6WJ8ZXr3BEf4DTDBojb4pCNwwg_HoDrieLzVpFWPvhwKPqyoEdFpoIk7uKlKoqApCeXQP5SRHuXTxKV4r7K2TdBMrl2aKt2YxifoUQ.jpeg",
                "/images/cC-l1LzIAYaGlV1cb4okj6PqZJGtw-cAp_slH1x8cloX7lCKEPECtWs4fSriCP1xh8t3tUj5vU28M9z2MjWF94aOQ4UMyj6d44Uvt22A1JlkTAeC1pbo1ubf8ib-NeCnKOuWfDAElk2FnVolgnaRxH8ADa64CjQAtKZQ9QQStdQ.jpeg",
                "/images/1763126653_9031b159efd59e7a7bdc.jpg",
            ],
        },
        {
            title: "Harga Terbaik",
            desc: "Nilai investasi yang sepadan dengan teknologi premium. Kami memastikan harga yang kompetitif tanpa mengorbankan kualitas layanan purna jual.",
            icon: <BadgeDollarSign strokeWidth={1} className="w-12 h-12" />,
            label: "Investment",
            image: "/images/photo-1702289613082-1252ec3eb5d4.avif",
        },
        {
            title: "Pengiriman Cepat",
            desc: "Layanan logistik prioritas kami memastikan perangkat impian Anda tiba dengan aman dan cepat, memberikan kepuasan instan sejak saat pemesanan.",
            icon: <Truck strokeWidth={1} className="w-12 h-12" />,
            label: "Priority",
            image: "/images/KkKL0m8LUyeUUu8smzzFnWueuj8VzNzXXCOTXMysLTyhJRts2ZSORppYKHv7jC_1jr8e13AZ8oZnem8EiZy3A8-eJGdE-TJYZ7iTmtJK_5jsXD57-ru92dODeq3CgrQ1H6V6mQ8rz2zQMkrewNWCNPJ6rKTf7PbX1d2V_nw_8evH8ycguMS7F8mgY0Bh8PBy.jpeg",
        },
    ];

    // Reusable viewport config
    const viewport = { once: true, margin: "-80px" };

    return (
        <section className="bg-black text-white py-32 overflow-hidden border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                {/* ── Header ── */}
                <motion.div
                    className="text-center mb-32"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={viewport}
                >
                    <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-medium">
                        Premium Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">
                        Keunggulan Tanpa Batas.
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-lg mx-auto font-light">
                        Komitmen kami untuk menghadirkan ekosistem gadget
                        terbaik di Sulawesi Barat.
                    </p>
                </motion.div>

                {/* ── Feature rows ── */}
                <div className="space-y-40">
                    {features.map((item, i) => {
                        const isEven = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className={`flex flex-col md:items-center gap-12 md:gap-24 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* ── Image card ── */}
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: isEven ? -48 : 48 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.75, ease: "easeOut" }}
                                    viewport={viewport}
                                >
                                    <div className="aspect-square md:aspect-video bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group">
                                        {item.images ? (
                                            <div className="absolute inset-0 w-full h-full">
                                                <AnimatePresence mode="wait">
                                                    <motion.img
                                                        key={currentIndex[i] ?? 0}
                                                        src={item.images[currentIndex[i] ?? 0]}
                                                        alt={item.title}
                                                        initial={{ opacity: 0, scale: 1.04 }}
                                                        animate={{ opacity: 0.7, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.97 }}
                                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </AnimatePresence>

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                                <button
                                                    onClick={() => prevSlide(i, item.images!.length)}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white w-10 h-10 flex items-center justify-center rounded-full z-10 transition-colors duration-200"
                                                >
                                                    ‹
                                                </button>

                                                <button
                                                    onClick={() => nextSlide(i, item.images!.length)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white w-10 h-10 flex items-center justify-center rounded-full z-10 transition-colors duration-200"
                                                >
                                                    ›
                                                </button>

                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                    {item.images.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`h-1 transition-all duration-300 rounded-full ${(currentIndex[i] ?? 0) === idx ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ) : item.image ? (
                                            <div className="absolute inset-0 w-full h-full">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-white/20">
                                                {item.icon}
                                            </div>
                                        )}

                                        <span className="absolute bottom-8 right-8 text-[10px] font-mono text-white/30 uppercase tracking-widest z-10">
                                            Ref. 0{i + 1}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* ── Text content ── */}
                                <motion.div
                                    className="w-full md:w-1/2 space-y-6"
                                    initial={{ opacity: 0, x: isEven ? 48 : -48 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                                    viewport={viewport}
                                >
                                    <motion.span
                                        className="text-[10px] tracking-[0.3em] text-gray-600 uppercase font-bold block"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={viewport}
                                    >
                                        {item.label}
                                    </motion.span>

                                    <motion.h3
                                        className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.28 }}
                                        viewport={viewport}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-500 text-lg leading-relaxed font-light max-w-md"
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.36 }}
                                        viewport={viewport}
                                    >
                                        {item.desc}
                                    </motion.p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* ── CTA ── */}
                <motion.div
                    className="mt-40 pt-20 border-t border-white/5 flex flex-col items-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={viewport}
                >
                    <Link
                        href="/products"
                        className="px-12 py-4 bg-white text-black font-bold tracking-tight rounded-full hover:bg-gray-200 transition-all duration-300"
                    >
                        Jelajahi Produk
                    </Link>
                    <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                        Mamuju • Sulawesi Barat
                    </p>
                </motion.div>
            </div>
        </section>
    );
}