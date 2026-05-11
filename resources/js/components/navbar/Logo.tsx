import { Link } from "@inertiajs/react";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* ICON BOX: Dibuat lebih minimalis */}
            <div className="relative w-10 h-10 bg-white/5 border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-blue-500 shrink-0 rounded-lg">
                <span className="text-white font-light text-xl tracking-tighter transition-all duration-500 group-hover:text-blue-500">
                    K
                </span>
                {/* Aksen Kilauan kecil di pojok */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-white/20 to-transparent" />
            </div>

            {/* TEXT LOGO */}
            <div className="flex flex-col leading-tight">
                <h1 className="text-white font-light text-xl tracking-[0.15em] uppercase">
                    KII<span className="font-semibold text-blue-500">PHONE</span>
                </h1>
                
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-[9px] font-medium uppercase tracking-[0.2em]">
                        Mamuju <span className="text-gray-600">Online Store</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}