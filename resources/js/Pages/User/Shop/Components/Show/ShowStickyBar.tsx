interface ShowStickyBarProps {
    currentPrice: number;
    selectedSize: string;
    selectedColor: string;
    formatPrice: (amount: number) => string;
    onBuyNow: () => void;
    onAddToCart: () => void;
}

export default function ShowStickyBar({
    currentPrice,
    selectedSize,
    selectedColor,
    formatPrice,
    onBuyNow,
    onAddToCart,
}: ShowStickyBarProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="hidden md:block">
                    <p className="text-red-500 text-[10px] uppercase tracking-widest">⚡ STOK TERBATAS</p>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xl uppercase tracking-tighter">
                            RP {formatPrice(currentPrice)}
                        </span>
                        <span className="text-gray-400 text-[11px] uppercase">
                            / {selectedSize} / {selectedColor}
                        </span>
                    </div>
                </div>
                <div className="flex flex-1 md:flex-none gap-3">
                    <button
                        onClick={onBuyNow}
                        className="flex-1 md:w-56 border border-black py-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        BELI SEKARANG
                    </button>
                    <button
                        onClick={onAddToCart}
                        className="flex-1 md:w-56 bg-black text-white py-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                        TAMBAH KE KERANJANG
                    </button>
                </div>
            </div>
        </div>
    );
}