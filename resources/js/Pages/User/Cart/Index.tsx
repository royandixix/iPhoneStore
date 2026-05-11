import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { usePage, router } from "@inertiajs/react";

export default function Index() {
    // Mengambil data props dari Inertia
    const { auth } = usePage().props as any;
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-[#000000] overflow-x-hidden">
            <main
                className={`w-full pt-32 pb-20 px-6 text-center transition-all duration-1000 ease-out transform ${domLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
                <div
                    className={`flex justify-center mb-8 transition-all duration-700 delay-300 transform ${domLoaded ? "scale-100" : "scale-75"}`}
                >
                    <div className="relative">
                        <ShoppingCart
                            size={48}
                            strokeWidth={1}
                            className="text-[#000000]"
                        />
                    </div>
                </div>

                <h1 className="text-[32px] md:text-[42px] font-bold mb-4 tracking-tight uppercase">
                    Troli Anda Kosong
                </h1>

                <p className="text-[#707070] text-[15px] mb-12 max-w-[500px] mx-auto leading-relaxed">
                    {auth?.user 
                        ? `Halo ${auth.user.name.split(' ')[0]}, temukan iPhone impian Anda di Mamuju. Jelajahi koleksi terbaru kami sekarang.`
                        : "Temukan iPhone impian Anda di Mamuju. Masuk ke akun Anda atau jelajahi koleksi terbaru kami sekarang."
                    }
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-28">
                    <button
                        onClick={() => router.visit("/shop")}
                        className="cursor-pointer min-w-[220px] px-8 py-4 rounded-full border border-[#000000] font-bold text-[12px] tracking-[0.15em] transition-all duration-300 hover:bg-[#000000] hover:text-white active:scale-95 uppercase"
                    >
                        Kembali Berbelanja
                    </button>

                    {/* Tombol masuk hanya tampil jika user belum login */}
                    {!auth?.user && (
                        <button
                            onClick={() => router.visit("/login")}
                            className="cursor-pointer min-w-[220px] px-8 py-4 rounded-full bg-[#2189ff] text-white font-bold text-[12px] tracking-[0.15em] transition-all duration-300 hover:bg-[#0077ff] hover:shadow-2xl active:scale-95 uppercase"
                        >
                            Masuk
                        </button>
                    )}
                </div>

                <section
                    className={`w-full max-w-[1200px] mx-auto border-t border-[#eeeeee] pt-20 px-4 transition-all duration-1000 delay-700 ${domLoaded ? "opacity-100" : "opacity-0"}`}
                >
                    <h2 className="text-[13px] font-bold mb-14 tracking-[0.25em] uppercase text-[#999999]">
                        Metode Pembayaran
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 mb-16 opacity-50 grayscale">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            className="h-[14px]"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard"
                            className="h-[28px]"
                        />
                        <span className="text-[22px] font-black text-[#000000] tracking-tighter italic">
                            gopay
                        </span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Kredivo.svg"
                            alt="Kredivo"
                            className="h-[18px]"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/ShopeePay_logo.svg"
                            alt="ShopeePay"
                            className="h-[22px]"
                        />
                    </div>

                    <div className="max-w-[750px] mx-auto">
                        <p className="text-[10px] text-[#aaaaaa] font-medium leading-[2.2] tracking-widest uppercase">
                            Layanan pengiriman khusus wilayah Mamuju, Sulawesi
                            Barat. Pastikan Anda menyetujui syarat dan ketentuan
                            sebelum melanjutkan transaksi.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}