import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function Conten6(): React.JSX.Element {
    const features = [
        {
            category: "Material",
            title: "Desain Titanium. Tangguh. Ringan. Mewah.",
            description:
                "Kekuatan titanium sekelas industri dirgantara bertemu dengan layar Super Retina XDR yang menakjubkan untuk memberikan pengalaman visual yang belum pernah ada sebelumnya. Material titanium ini memberikan rasio kekuatan terhadap berat yang luar biasa.",
            image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000&auto=format&fit=crop",
            accentColor: "text-[#6e6ade]",
            link: "/conten6/material"
        },
        {
            category: "Performa",
            title: "Chip A17 Pro. Monster di balik layar.",
            description:
                "Chip pertama dengan teknologi 3 nanometer yang mendefinisikan ulang batas kemampuan sebuah smartphone. Dengan GPU kelas pro yang baru, multitasking terasa sangat instan dan pengalaman gaming menjadi jauh lebih imersif.",
            image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop",
            accentColor: "text-[#e30000]",
            link: "/conten6/performa"
        },
    ];

    return (
        <section className="bg-[#f5f5f7] font-sans antialiased overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 pt-32 pb-20 lg:px-20">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-black font-semibold text-xl md:text-2xl mb-4"
                >
                    Kualitas Premium.
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[48px] md:text-[80px] lg:text-[100px] font-bold leading-[1] tracking-tight text-black"
                >
                    Terukir dalam <br className="hidden md:block" /> detail presisi.
                </motion.h2>
            </div>

            <div className="flex flex-col gap-10 pb-32">
                {features.map((feature, index) => (
                    <div key={index} className="max-w-[1440px] mx-auto px-4 md:px-10 w-full">
                        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center min-h-[600px]">
                            
                            <div className="w-full lg:w-1/2 h-[400px] lg:h-full overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                                <span className="text-black font-bold text-lg md:text-xl mb-4 uppercase tracking-tight">
                                    {feature.category}
                                </span>

                                <h3 className={`text-[36px] md:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 ${feature.accentColor}`}>
                                    {feature.title}
                                </h3>

                                <p className="text-[#1d1d1f] text-[17px] md:text-xl leading-relaxed font-medium opacity-80 mb-10 max-w-lg">
                                    {feature.description}
                                </p>

                                <div className="flex">
                                    <Link
                                        href={feature.link}
                                        className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-all active:scale-95 inline-block"
                                    >
                                        Pelajari lebih lanjut
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}