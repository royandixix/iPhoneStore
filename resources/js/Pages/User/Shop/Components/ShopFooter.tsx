import React from "react";

export default function ShopFooter() {
    const benefits = [
        {
            no: "1",
            title: "Kualitas iPhone Teruji",
            desc: "Setiap unit iPhone melewati 40 tahap pengecekan fungsionalitas untuk memastikan kesehatan baterai dan performa hardware tetap optimal.",
        },
        {
            no: "2",
            title: "Garansi Full 365 Hari",
            desc: "Kami memberikan jaminan ketenangan selama satu tahun. Jika unit tidak sesuai spesifikasi, proses klaim retur sangat cepat dan transparan.",
        },
        {
            no: "3",
            title: "Unit Imei Terdaftar Resmi",
            desc: "Hanya menjual unit resmi Indonesia (PA/A, ID/A). Bebas blokir sinyal, iCloud kosong, dan siap digunakan dengan operator seluler apa pun.",
        }
    ];

    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6 py-20">
                
                <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?q=80&w=1000&auto=format&fit=crop" 
                            alt="iPhone Benefit" 
                            className="w-full h-auto block  rounded-5"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/1000x800?text=iPhone+Store";
                            }}
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-10">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Upgrade ke <span className="text-blue-600">iPhone Impian</span> dengan Layanan Terpercaya
                        </h2>

                      

                        <div className="space-y-8">
                            {benefits.map((item) => (
                                <div key={item.no} className="flex gap-6">
                                    <div className="shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {item.no}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-slate-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full font-bold text-sm tracking-wide">
                            Lihat Katalog iPhone
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}