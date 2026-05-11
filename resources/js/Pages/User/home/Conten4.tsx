import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Conten4(): React.JSX.Element {
    const testimonials = [
        {
            id: 1,
            name: "Royandi",
            role: "Software Engineer",
            age: "24 tahun",
            quote: "Sangat puas beli iPhone 15 Pro di sini. Barangnya 100% original, pelayanannya cepat, dan proses cicilannya sangat membantu.",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            name: "Agung Setyono",
            role: "Mahasiswa",
            age: "26 tahun",
            quote: "Pelayanan di GadgetStore Mamuju emang juara. iPhone 15 pesanan saya sampai dengan aman dan packingnya sangat tebal.",
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 3,
            name: "Siti Aminah",
            role: "Content Creator",
            age: "22 tahun",
            quote: "Kamera iPhone bener-bener gila buat ngonten! Beli di sini dapet bonus tempered glass dan case premium. Recommended!",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="bg-[#108ee9] px-6 py-24 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="text-blue-200 font-bold text-sm tracking-[0.2em] uppercase mb-2">
                        TESTIMONIAL
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                        Stories from Apple Lovers
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-[40px] overflow-hidden min-h-[550px] shadow-2xl">
                    
                    <div className="p-10 md:p-20 flex flex-col justify-between relative z-10 bg-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="text-[#e0e0e0] text-9xl font-serif leading-none mb-2">
                                    “
                                </div>
                                <p className="text-xl md:text-2xl text-[#1c1d1f] leading-relaxed font-medium">
                                    {testimonials[currentIndex].quote}
                                </p>

                                <div className="mt-12">
                                    <h4 className="text-xl font-bold text-[#1c1d1f]">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-gray-500">
                                        {testimonials[currentIndex].role} | {testimonials[currentIndex].age}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 mt-8">
                            <button 
                                onClick={prevTestimonial}
                                className="w-16 h-16 rounded-full bg-[#f2f2f2] flex items-center justify-center text-gray-400 hover:bg-gray-200 active:scale-90 transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextTestimonial}
                                className="w-16 h-16 rounded-full bg-[#40d1e5] flex items-center justify-center text-white shadow-lg shadow-[#40d1e5]/40 hover:bg-[#35b9cc] active:scale-90 transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[450px] md:h-auto overflow-hidden bg-gray-200">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentIndex}
                                src={testimonials[currentIndex].image} 
                                alt="iPhone Product" 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay Gradasi agar transisi foto ke card halus */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/10 to-transparent hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
    );
}