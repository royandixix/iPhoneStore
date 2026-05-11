import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Head } from "@inertiajs/react";
import { Navigation, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; 

import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const fadeInUpVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
        }
    }
};

export default function Location(): React.JSX.Element {
    const position: [number, number] = [-2.674, 118.888];
    const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

    return (
        <>
            <Head title="Store Locator | KIIPHONE" />

            <section className="text-black py-24 lg:py-40 overflow-hidden font-sans bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                    
                    <motion.div 
                        className="relative mb-24"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }} 
                    >
                        <span className="text-black font-mono tracking-widest uppercase text-sm mb-4 block">
                            / Visit our sanctuary
                        </span>
                        <h2 className="text-[12vw] lg:text-[120px] font-bold leading-[0.85] tracking-tighter text-black">
                            Tempat Lokasi <br /> 
                            <span className="italic font-light ml-[5vw] lg:ml-[100px] text-black/40">Kami Ada Di.</span>
                        </h2>
                        
                        <div className="absolute right-0 bottom-0 max-w-xs text-right hidden lg:block">
                            <p className="text-black/60 text-sm leading-relaxed uppercase tracking-wider">
                                Showroom kami bukan sekadar toko, tapi tempat di mana teknologi bertemu dengan kenyamanan personal.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-black/10">
                        
                        <motion.div 
                            className="lg:col-span-5 border-r border-black/10 pt-12 pb-12 lg:pr-12"
                            variants={fadeInUpVariants}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            <div className="space-y-16">
                                <div className="group cursor-default">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-black" />
                                        <h4 className="text-xs uppercase tracking-[0.2em] text-black/50 font-bold">The Headquarters</h4>
                                    </div>
                                    <p className="text-3xl font-medium leading-tight text-black">
                                        Mamuju, Sulawesi Barat <br />
                                        Jl. Jend. Sudirman No. 24
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/5">
                                    <div className="space-y-2">
                                        <h4 className="text-xs uppercase tracking-[0.2em] text-black/50 font-bold mb-4">Hours</h4>
                                        <p className="text-black/70">Mon — Sun</p>
                                        <p className="text-xl font-medium text-black">09:00 - 21:00</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs uppercase tracking-[0.2em] text-black/50 font-bold mb-4">Connect</h4>
                                        <p className="text-black/70">WhatsApp</p>
                                        <p className="text-xl font-medium text-black">+62 812-3456</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <a 
                                        href={googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 group text-black"
                                    >
                                        <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                            <Navigation size={24} className="group-hover:rotate-45 transition-transform" />
                                        </div>
                                        <span className="text-lg font-bold uppercase tracking-wider">Get Directions</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="lg:col-span-7 pt-12 lg:pl-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="relative aspect-square lg:aspect-video rounded-[2px] overflow-hidden group border border-black/5">
                                <div className="absolute inset-0 border-[12px] border-white z-10 pointer-events-none" />
                                
                                <div className="w-full h-full">
                                    <MapContainer
                                        center={position}
                                        zoom={15}
                                        scrollWheelZoom={false}
                                        className="w-full h-full"
                                    >
                                        <TileLayer
                                            attribution='© OpenStreetMap contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={position}>
                                            <Popup>
                                                <div className="text-black font-sans">
                                                    <strong className="text-black">KIIPHONE STORE</strong> <br />
                                                    Jl. Jend. Sudirman No. 24
                                                </div>
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>

                                <div className="absolute bottom-16 right-16 z-20 bg-black text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <span className="text-sm font-bold uppercase tracking-tighter italic">Currently Open</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}