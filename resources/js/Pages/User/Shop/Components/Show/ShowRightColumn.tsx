import { ShieldCheck, Star, Truck } from "lucide-react";

interface Size {
    label: string;
    extra: number;
}

interface Color {
    name: string;
    class: string;
    hex: string;
}

interface ShowRightColumnProps {
    product: any;
    basePrice: number;
    currentPrice: number;
    selectedSize: string;
    selectedColor: string;
    sizes: Size[];
    colors: Color[];
    onSizeChange: (label: string, extra: number) => void;
    onColorChange: (name: string) => void;
    formatPrice: (amount: number) => string;
}

export default function ShowRightColumn({
    product,
    basePrice,
    currentPrice,
    selectedSize,
    selectedColor,
    sizes,
    colors,
    onSizeChange,
    onColorChange,
    formatPrice,
}: ShowRightColumnProps) {
    return (
        <div className="flex flex-col">
            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[11px] text-gray-400 ml-1 uppercase tracking-wide">
                    4.9 · 238 Ulasan
                </span>
            </div>

            {/* Nama produk */}
            <h1 className="text-3xl md:text-4xl text-gray-900 tracking-tight mb-1 uppercase">
                {product.name}
            </h1>
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-6">
                Apple · Smartphone · Seri Pro Max
            </p>

            {/* Harga */}
            <div className="mb-8 border-b border-gray-100 pb-8">
                <p className="text-gray-400 line-through text-sm">
                    RP {formatPrice(currentPrice + 250000)}
                </p>
                <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-3xl text-black tracking-tight">
                        RP {formatPrice(currentPrice)}
                    </span>
                    <span className="bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded">
                        HEMAT RP 250.000
                    </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 uppercase tracking-tighter">
                    ATAU RP {formatPrice(Math.round(currentPrice / 24))} / BULAN UNTUK 24 BULAN
                </p>
            </div>

            {/* Storage */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] uppercase tracking-widest">
                        STORAGE — <span className="text-blue-600">{selectedSize}</span>
                    </h3>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">Pilih Kapasitas</span>
                </div>
                <div className="flex flex-col gap-2.5">
                    {sizes.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => onSizeChange(item.label, item.extra)}
                            className={`flex justify-between items-center border p-4 rounded-xl transition-all text-left ${
                                selectedSize === item.label
                                    ? "border-black ring-1 ring-black bg-gray-50"
                                    : "border-gray-200 hover:border-gray-400"
                            }`}
                        >
                            <div>
                                <span className="text-sm uppercase">{item.label}</span>
                                <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wide">
                                    {item.label === "256 GB" && "Cocok untuk penggunaan sehari-hari"}
                                    {item.label === "512 GB" && "Ideal untuk foto, video & game"}
                                    {item.label === "1 TB"   && "Pro photographer & videographer"}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-400 uppercase">Harga</p>
                                <p className="text-sm uppercase">RP {formatPrice(basePrice + item.extra)}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Warna */}
            <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[11px] uppercase tracking-widest">
                        WARNA — <span className="text-blue-600">{selectedColor.toUpperCase()}</span>
                    </h3>
                </div>
                <div className="flex gap-3">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => onColorChange(color.name)}
                            title={color.name}
                            className={`group relative w-11 h-11 rounded-full ${color.class} ring-offset-2 transition-all shadow-inner ${
                                selectedColor === color.name
                                    ? "ring-2 ring-black"
                                    : "hover:ring-2 ring-gray-300"
                            }`}
                        >
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-wide pointer-events-none">
                                {color.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Trust Badge */}
            <div className="space-y-4 mb-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <ShieldCheck size={26} className="text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                        <p className="text-[11px] uppercase tracking-widest font-medium">GARANSI RESMI IBOX (TAM)</p>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                            Produk 100% original dengan garansi resmi Apple 1 tahun.
                            Klaim garansi bisa dilakukan di seluruh service center iBox Indonesia.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <Truck size={26} className="text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                        <p className="text-[11px] uppercase tracking-widest font-medium">GRATIS ONGKIR SELURUH SULBAR</p>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                            Pengiriman aman, cepat, dan terasuransi ke seluruh wilayah Sulawesi Barat.
                            Estimasi tiba 1–2 hari kerja.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}