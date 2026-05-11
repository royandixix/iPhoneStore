import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

interface ShowBreadcrumbProps {
    productName: string;
}

export default function ShowBreadcrumb({ productName }: ShowBreadcrumbProps) {
    return (
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-2 text-[11px] uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-black transition-colors">IPHONE</Link>
            <ChevronRight size={12} />
            <span className="text-black">{productName.toUpperCase()}</span>
        </nav>
    );
}