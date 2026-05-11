import React from "react";
import { motion } from "framer-motion";

interface ContentData {
    title: string;
    description: string;
    buttonText: string;
    image: string;
}

export default function Conten5(): React.JSX.Element {
    const data: ContentData = {
        title: "Pergelangan tangan penuh pesona.",
        description: `Chip A17 Pro — chip luar biasa seperti yang ada di model Pro sebelumnya — hadir dengan kekuatan super. Layar yang Selalu Aktif memberikan sekilas informasi yang Anda inginkan, tanpa perlu mengangkat pergelangan tangan. Performa luar biasa dan desain titanium yang tangguh menjadikannya iPhone teringan dan tercanggih yang pernah ada dalam genggaman Anda.`,
        buttonText: "Beli sekarang",
        image: "/images/pngwing.com.png",
    };

    return (
        <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Bagian Gambar (Sisi Kiri) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Bagian Teks (Sisi Kanan) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2"
                    >
                        <p className="text-black font-semibold text-xl md:text-2xl mb-4">
                            Banyak yang bisa Anda sukai
                        </p>
                        
                        {/* Judul Besar dengan warna aksen sesuai contoh gambar */}
                        <h2 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-tight text-[#6e6ade] mb-8">
                            {data.title}
                        </h2>

                        <p className="text-[#1d1d1f] text-lg md:text-xl leading-relaxed font-medium mb-10 max-w-xl">
                            {data.description}
                        </p>

                        <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors">
                            {data.buttonText}
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}