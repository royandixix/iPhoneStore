import { useState } from "react"
import { Link } from "@inertiajs/react"
import { Smartphone, ShieldCheck, Zap, Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function ShowFooter() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const features = [
        {
            icon: <Zap size={24} className="text-black" />,
            title: "Transaksi Instan",
            desc: "Proses pembelian dirancang sesederhana mungkin — pilih, bayar, selesai. Tidak ada langkah yang tidak perlu, tidak ada antrean, tidak ada menunggu."
        },
        {
            icon: <Smartphone size={24} className="text-black" />,
            title: "Unit Terverifikasi",
            desc: "Setiap iPhone yang kami jual telah melalui serangkaian inspeksi teknis menyeluruh: layar, baterai, kamera, konektivitas, hingga kondisi fisik unit."
        },
        {
            icon: <ShieldCheck size={24} className="text-black" />,
            title: "Transaksi 100% Aman",
            desc: "Data pribadi dan informasi pembayaran Anda dilindungi dengan enkripsi end-to-end. Kami tidak pernah menyimpan atau membagikan data tanpa izin Anda."
        },
        {
            icon: <Heart size={24} className="text-black" />,
            title: "Purna Jual Responsif",
            desc: "Hubungan kami dengan pelanggan tidak berakhir setelah transaksi. Tim kami siap membantu mulai dari pertanyaan teknis, klaim garansi, hingga konsultasi penggunaan."
        }
    ]

    const blogPosts = [
        {
            id: 1,
            title: "Cara Menjaga Battery Health iPhone 17 Pro Max Tetap di Atas 90%",
            description: "Banyak pengguna tidak sadar bahwa kebiasaan cas semalaman atau penggunaan fast charger pihak ketiga bisa mempercepat degradasi baterai. Simak panduan lengkap kami untuk menjaga Battery Health tetap optimal hingga bertahun-tahun.",
            date: "Apr 28, 2026",
            category: "Tips & Trick",
            author: "Royandi",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            id: 2,
            title: "Review Jujur Kamera 48MP iPhone 17 Pro Max: Layak Upgrade dari iPhone 15?",
            description: "Sensor yang lebih besar bukan berarti selalu lebih baik. Kami menguji kamera utama 48MP di berbagai kondisi — terik siang, senja, dan malam tanpa cahaya tambahan — untuk menjawab pertanyaan yang paling sering ditanyakan pelanggan kami.",
            date: "Apr 20, 2026",
            category: "Review",
            author: "Lindsay Walton",
            imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            id: 3,
            title: "7 Fitur Apple Intelligence di iOS 19 yang Akan Mengubah Cara Anda Bekerja",
            description: "iOS 19 bukan sekadar pembaruan biasa. Apple Intelligence kini hadir lebih dalam: mulai dari summarisasi email otomatis, penulisan teks berbasis konteks, hingga integrasi Siri yang jauh lebih natural. Kami rangkum fitur mana saja yang benar-benar berguna.",
            date: "Apr 12, 2026",
            category: "Software",
            author: "Tom Cook",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            id: 4,
            title: "iPhone 15 Turun Hingga 30% di 2026 — Ini Saat yang Tepat untuk Upgrade?",
            description: "Setelah peluncuran iPhone 17, harga iPhone 15 mengalami penurunan signifikan. Kami membandingkan spesifikasi, performa nyata, dan selisih harga untuk membantu Anda memutuskan apakah upgrade sekarang masuk akal secara finansial.",
            date: "Apr 05, 2026",
            category: "Promo",
            author: "Jane Doe",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ]

    const nextSlide = () => {
        if (currentIndex < blogPosts.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(blogPosts.length - 1)
        }
    }

    return (
        <div className="w-full bg-white overflow-hidden">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
                            Kenapa Ribuan Pelanggan Sulawesi Barat Memilih Kami
                        </h2>
                        <p className="text-blue-600 text-sm font-medium">
                            Kami bukan sekadar toko — kami adalah mitra jangka panjang untuk setiap kebutuhan Apple Anda. Dari pembelian pertama hingga purna jual, standar kami tidak pernah turun.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i}>
                                <div className="mb-6">{f.icon}</div>
                                <div>
                                    <h4 className="font-bold text-[13px] uppercase tracking-wider mb-2 text-black">{f.title}</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">Dari Pengalaman Kami</h2>
                            <p className="mt-2 text-lg text-blue-600 font-medium">
                                Artikel, tips, dan ulasan langsung dari tim kami yang telah melayani lebih dari 5.000 pelanggan iPhone di Sulawesi Barat.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 transition-all active:scale-90"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-90 shadow-md shadow-blue-200"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden pt-10 border-t border-gray-100">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 1024 ? 1 : 3))}%)` }}
                        >
                            {blogPosts.map((post) => (
                                <div key={post.id} className="min-w-full lg:min-w-[33.333%] px-4">
                                    <article className="flex flex-col items-start">
                                        <div className="flex items-center gap-x-4 text-xs mb-4">
                                            <time className="text-gray-500">{post.date}</time>
                                            <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition-colors">
                                                <a href="#">{post.title}</a>
                                            </h3>
                                            <p className="mt-4 line-clamp-3 text-sm text-gray-600 leading-6">{post.description}</p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            <img src={post.imageUrl} alt="" className="size-10 rounded-full bg-gray-100 object-cover border border-blue-100" />
                                            <div className="text-sm">
                                                <p className="font-semibold text-black">{post.author}</p>
                                                <p className="text-blue-500 text-xs font-bold uppercase tracking-tighter">Contributor</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}