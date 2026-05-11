interface ShowImageGalleryProps {
    image: string;
}

export default function ShowImageGallery({ image }: ShowImageGalleryProps) {
    const src = image ? `/storage/${image}` : "/images/default.png";

    return (
        <div className="flex gap-4">
            {/* Thumbnail vertikal */}
            <div className="hidden lg:flex flex-col gap-2 w-20 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-2 cursor-pointer hover:border-black aspect-square flex items-center justify-center bg-white overflow-hidden transition-colors"
                    >
                        <img src={src} alt="thumb" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            {/* Gambar utama */}
            <div className="bg-[#fbfbfb] rounded-2xl overflow-hidden aspect-square flex-1 flex items-center justify-center p-12 relative">
                <div className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    NEW
                </div>
                <img
                    src={src}
                    alt="product"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>
    );
}