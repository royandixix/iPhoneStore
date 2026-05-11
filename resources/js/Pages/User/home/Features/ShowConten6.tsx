import React from "react";
import { motion } from "framer-motion";
import { Link, Head } from "@inertiajs/react";
import { ChevronRight, ShieldCheck, Zap, Maximize, Cpu } from "lucide-react";

import DetailConten6 from "./DetailConten6";

export default function ShowConten6(): React.JSX.Element {
    return (
        <div className="bg-white min-h-screen font-sans antialiased text-[#1d1d1f]">
            <Head title="iPhone 15 Pro | KIIPHONE" />

            <main className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-[#f5f5f7] rounded-3xl overflow-hidden flex items-center justify-center">
                            <img 
                                src="https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000" 
                                alt="iPhone Detail"
                                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <h2 className="text-[#86868b] font-semibold text-xl md:text-2xl mb-2 tracking-tight">
                                iPhone 15 Pro
                            </h2>
                            <h1 className="text-[48px] md:text-[80px] font-semibold leading-[1.05] tracking-tight mb-8">
                                Titanium.
                            </h1>
                            <p className="text-[#86868b] text-xl md:text-2xl leading-snug font-medium max-w-md mb-12">
                                Sangat kuat. Sangat ringan. Sangat Pro. 
                                Dapatkan pengalaman kelas dunia di Mamuju.
                            </p>
                        </motion.div>

                        

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 gap-y-10 gap-x-4 border-t border-[#d2d2d7] pt-10"
                        >
                            <div className="flex flex-col gap-2">
                                <Maximize className="text-[#1d1d1f]" size={28} strokeWidth={1.5} />
                                <span className="text-sm font-semibold text-[#86868b] uppercase tracking-wider">Layar</span>
                                <p className="text-base font-semibold">Super Retina XDR</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Cpu className="text-[#1d1d1f]" size={28} strokeWidth={1.5} />
                                <span className="text-sm font-semibold text-[#86868b] uppercase tracking-wider">Chip</span>
                                <p className="text-base font-semibold">A17 Pro Chip</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <ShieldCheck className="text-[#1d1d1f]" size={28} strokeWidth={1.5} />
                                <span className="text-sm font-semibold text-[#86868b] uppercase tracking-wider">Garansi</span>
                                <p className="text-base font-semibold">Resmi iBox</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Zap className="text-[#1d1d1f]" size={28} strokeWidth={1.5} />
                                <span className="text-sm font-semibold text-[#86868b] uppercase tracking-wider">Baterai</span>
                                <p className="text-base font-semibold">Sepanjang Hari</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center gap-6 mt-16"
                        >
                            <button className="w-full sm:w-auto bg-[#0071e3] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#0077ed] transition-colors">
                                Beli Sekarang
                            </button>
                            <a href="#" className="group flex items-center text-[#0071e3] text-lg font-medium">
                                Lihat Promo <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-48 text-center"
                >
                    <p className="text-[#86868b] text-2xl font-semibold mb-4">Butuh bantuan?</p>
                    <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Tanya spesialis KIIPHONE online.
                    </h3>
                    <div className="mt-8">
                         <a 
                            href="https://wa.me/628123456" 
                            className="inline-block border-2 border-[#1d1d1f] text-[#1d1d1f] px-10 py-4 rounded-full font-medium text-lg hover:bg-[#1d1d1f] hover:text-white transition-all"
                        >
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </motion.section>
            </main>

            <DetailConten6 />
        </div>
    );
}