import React from "react";
import UserLayout from "@/layouts/UserLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Sidebar from "./Components/Sidebar";
import ShopFooter from "./Components/ShopFooter";

export default function Index({ products }: any) {
    const page = usePage();
    console.log("AUTH:", page.props.auth);

    const defaultProducts = [
        {
            id: 1,
            name: "iPhone 13 Pro Max",
            price: 12500000,
            image: null,
            description: "Layar Super Retina XDR 6,7 inci dengan ProMotion 120Hz, sistem kamera tiga lensa kelas profesional, dan chip A15 Bionic."
        },
        {
            id: 2,
            name: "iPhone 14 Pro",
            price: 15000000,
            image: null,
            description: "Dynamic Island, kamera 48MP, dan Always-On display."
        },
        {
            id: 3,
            name: "iPhone 15 Pro",
            price: 18000000,
            image: null,
            description: "Bodi titanium, chip A17 Pro, dan tombol Action."
        },
        {
            id: 4,
            name: "iPhone 12 Mini",
            price: 9500000,
            image: null,
            description: "Ukuran compact dengan performa A14 Bionic."
        },
        {
            id: 5,
            name: "iPhone 11",
            price: 6500000,
            image: null,
            description: "Pilihan terjangkau dengan kamera ganda 12MP."
        },
        {
            id: 6,
            name: "iPhone 13",
            price: 10500000,
            image: null,
            description: "Baterai tahan lama dan Cinematic Mode."
        },
    ];

    const getImageUrl = (image: string | null) => {
        if (!image) return "https://via.placeholder.com/300";
        if (image.startsWith("http")) return image;
        return `/storage/${image}`;
    };

    const displayProducts = products ?? defaultProducts;

    return (
        <>
            <Head title="Daftar Produk iPhone" />

            <div className="pb-20">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="flex flex-col lg:flex-row gap-10">

                        <Sidebar />

                        <div className="flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-slate-200">

                                {displayProducts.map((product: any) => (
                                    <div
                                        key={product.id}
                                        className="border-r border-b border-slate-200 p-5 flex flex-col"
                                    >
                                        <Link href={`/shop/${product.id}`}>
                                            <div className="aspect-[4/5] w-full mb-4 flex items-center justify-center overflow-hidden group">
                                                <img
                                                    src={getImageUrl(product.image)}
                                                    alt={product.name}
                                                    className="h-full object-contain transition duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        </Link>

                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-[13px] font-semibold text-slate-900 leading-snug">
                                                {product.name}
                                            </h3>

                                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                                {product.description}
                                            </p>

                                            <p className="text-[15px] font-bold text-slate-900 mt-2">
                                                Rp {product.price.toLocaleString("id-ID")}
                                            </p>

                                            <Link
                                                href={`/shop/${product.id}`}
                                                className="mt-4 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
                                            >
                                                Lihat Detail →
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {displayProducts.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-slate-400 text-sm italic">
                                        Belum ada produk yang tersedia saat ini.
                                    </p>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>

            <ShopFooter />
        </>
    );
}

Index.layout = (page: React.ReactNode) => <UserLayout>{page}</UserLayout>;