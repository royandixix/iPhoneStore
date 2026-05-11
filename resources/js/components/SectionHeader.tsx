interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
    return (
        <div className="w-full mb-12">
            {/* 1. Banner Section - Full Width dengan style Maujual */}
            <div className="w-full h-[300px] md:h-[450px] relative overflow-hidden bg-[#f5f5f7]">
                <img 
                    src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000&auto=format&fit=crop" 
                    alt="Banner Header"
                    className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient - Menyesuaikan dengan brand agar teks terbaca */}
ame="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent">
                    <div className="max-w-[1440px] mx-auto h-full flex items-center px-6 md:px-12">
                        <div className="text-white max-w-2xl">
                            <span className="inline-block bg-[#589444] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
                                Penawaran Terbatas
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight">
                                Saatnya Miliki <br /> iPhone Impian.
                            </h2>
                            <p className="text-base md:text-xl opacity-90 font-light max-w-lg leading-relaxed">
                                Unit resmi Indonesia, garansi 365 hari, dan bisa tukar tambah dengan mudah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Title Section - Content yang sejajar dengan grid produk */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10">
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-gray-500 text-sm md:text-base font-medium">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="bg-[#589444] hover:bg-[#4a7d39] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-xl active:scale-95">
                            Beli {title} Bekas Bergaransi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}