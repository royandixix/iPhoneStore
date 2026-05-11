import React from "react";

const BoxIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mb-6 inline-flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0071E3] opacity-20 blur-xl rounded-full"></div>
        <div className="relative w-14 h-14 rounded-2xl border border-white/10 bg-black flex items-center justify-center text-[#2997FF] shadow-[inset_0_0_15px_rgba(41,151,255,0.1)]">
            {children}
        </div>
    </div>
);

export default function Showcase() {
    return (
        <div className="bg-black text-white relative overflow-hidden py-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(0,113,227,0.12)_0%,_rgba(0,0,0,0)_70%)] opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    
                    <div className="w-full lg:w-3/5">
                        <div className="mb-6">
                            <span className="text-[10px] tracking-[0.4em] text-blue-500 font-semibold uppercase">
                                Evolusi Layanan Digital
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Menetapkan Standar Baru <br />
                            di Era Modern. Tanpa Kompromi.
                        </h2>
                        
                        <div className="mt-8 space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Kami percaya bahwa kualitas adalah hak, bukan pilihan. Melalui kurasi produk premium yang ketat, kami menghadirkan teknologi dan inovasi terbaik langsung ke tangan Anda.
                            </p>
                            
                            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                                Dipadukan dengan layanan yang responsif dan personal, kami hadir untuk memastikan setiap interaksi menjadi pengalaman terbaik yang bisa Anda temukan di Mamuju. Kami tidak hanya menjual produk, kami membangun ekosistem masa depan.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 relative">
                        <div className="relative group">
                            <img 
                                src="images/spesifikasi-iphone-16-pro-max-1.webp" 
                                alt="Premium Tech"
                                className="w-full h-auto object-cover opacity-90 grayscale-0 transition duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
                        </div>
                    </div>

                </div>

                <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
        </div>
    );
}