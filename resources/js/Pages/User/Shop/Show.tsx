import UserLayout from "@/layouts/UserLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";

import ShowBreadcrumb from "./Components/Show/ShowBreadcrumb";
import ShowImageGallery from "./Components/Show/ShowImageGallery";
import ShowTabPanel from "./Components/Show/ShowTabPanel";
import ShowRightColumn from "./Components/Show/ShowRightColumn";
import ShowStickyBar from "./Components/Show/ShowStickyBar";
import ShowFooter from "./Components/ShowFooter";

const SIZES = [
    { label: "256 GB", extra: 0 },
    { label: "512 GB", extra: 4500000 },
    { label: "1 TB", extra: 9000000 },
];

const COLORS = [
    { name: "Deep Blue", class: "bg-blue-900", hex: "#1e3a5f" },
    { name: "Titanium", class: "bg-zinc-200", hex: "#d4d4d8" },
    { name: "Midnight", class: "bg-zinc-950", hex: "#09090b" },
];

const formatPrice = (amount: number) => amount.toLocaleString("id-ID");

export default function Show({ product }: any) {
    const { auth } = usePage().props as any;

    const basePrice = Number(product.price);

    const [selectedSize, setSelectedSize] = useState("256 GB");
    const [selectedColor, setSelectedColor] = useState("Deep Blue");
    const [currentPrice, setCurrentPrice] = useState(basePrice);
    const [openSpec, setOpenSpec] = useState<string | null>("Performa");
    const [activeTab, setActiveTab] = useState("Deskripsi");
    // const [activeTap, setActiveTab] = useState('kalmatPemasukanHarga');

    const handleSizeChange = (label: string, extra: number) => {
        setSelectedSize(label);
        setCurrentPrice(basePrice + extra);
    };

    const addToCart = (action: "alert" | "checkout") => {
        if (!auth?.user) {
            router.visit("/login");
            return;
        }

        router.post(
            "/cart/add",
            {
                product_id: product.id,
                size: selectedSize,
                color: selectedColor,
            },
            {
                onSuccess: () => {
                    if (action === "checkout") {
                        window.location.href = "/cart";
                    } else {
                        toast.success(
                            `${product.name} ditambahkan ke keranjang`,
                        );
                    }
                },
            },
        );
    };

    return (
        <>
            <Head title={`${product.name.toUpperCase()} - MAUJUAL`} />

            <div className="bg-white min-h-screen">
                <ShowBreadcrumb productName={product.name} />

                <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                            <ShowImageGallery image={product.image} />
                            <ShowTabPanel
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                openSpec={openSpec}
                                setOpenSpec={setOpenSpec}
                            />
                        </div>

                        <ShowRightColumn
                            product={product}
                            basePrice={basePrice}
                            currentPrice={currentPrice}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            sizes={SIZES}
                            colors={COLORS}
                            onSizeChange={handleSizeChange}
                            onColorChange={setSelectedColor}
                            formatPrice={formatPrice}
                        />
                    </div>
                </div>

                <ShowFooter />
                <div className="h-32" />

                <ShowStickyBar
                    currentPrice={currentPrice}
                    selectedSize={selectedSize}
                    selectedColor={selectedColor}
                    formatPrice={formatPrice}
                    onBuyNow={() => addToCart("checkout")}
                    onAddToCart={() => addToCart("alert")}

                />
            </div>
        </>
    );
}

Show.layout = (page: React.ReactNode) => (
    <UserLayout>{page}</UserLayout>
);