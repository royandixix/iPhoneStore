import { Link } from "@inertiajs/react";
import * as LucideIcons from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Helper untuk merender ikon secara dinamis agar tidak error TypeScript
    const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
        // @ts-ignore - Mengabaikan pengecekan tipe string ke komponen
        const LucideIcon = LucideIcons[name];
        return LucideIcon ? <LucideIcon size={size} strokeWidth={1.5} /> : null;
    };

    const footerSections = [
        {
            title: "Shop",
            links: [
                { label: "Beli iPhone", href: "/products" },
                { label: "Aksesori", href: "/accessories" },
                { label: "Promo Mamuju", href: "/promo" },
                { label: "Tukar Tambah", href: "/trade-in" },
            ],
        },
        {
            title: "Dukungan",
            links: [
                { label: "Hubungi Kami", href: "/contact" },
                { label: "Status Pesanan", href: "/orders" },
                { label: "Lokasi Toko", href: "/location" },
                { label: "Garansi", href: "/warranty" },
            ],
        },
        {
            title: "Akun",
            links: [
                { label: "Profil Saya", href: "/profile" },
                { label: "Daftar Keinginan", href: "/wishlist" },
                { label: "Voucher", href: "/vouchers" },
            ],
        },
        {
            title: "Tentang Kami",
            links: [
                { label: "Info Toko", href: "/about" },
                { label: "Identitas Merek", href: "/brand" },
                { label: "Karier", href: "/career" },
                { label: "Kemitraan", href: "/partner" },
            ],
        },
    ];

    return (
        <footer className="bg-white text-[#1d1d1f] border-t border-gray-200 pt-16 pb-8 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                
                {/* Main Navigation Grid - Samsung/Apple Style */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-20">
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-5">
                            <h4 className="text-[14px] font-bold text-[#1d1d1f]">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[13px] text-[#515154] hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media Section */}
                    <div className="col-span-2 lg:col-span-1 space-y-5">
                        <h4 className="text-[14px] font-bold text-[#1d1d1f]">
                            Tetap Terhubung
                        </h4>
                        <div className="flex gap-5 text-gray-400">
                            <a href="#" className="hover:text-black transition-colors"><Icon name="Instagram" /></a>
                            <a href="#" className="hover:text-black transition-colors"><Icon name="Facebook" /></a>
                            <a href="#" className="hover:text-black transition-colors"><Icon name="Twitter" /></a>
                            <a href="#" className="hover:text-black transition-colors"><Icon name="Youtube" /></a>
                        </div>
                    </div>
                </div>

                

                {/* Bottom Bar - Sesuai Layout Samsung */}
                <div className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-6 text-[12px] text-gray-500">
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                        <p>
                            Copyright © {currentYear} KIIPHONE Mamuju. Seluruh hak cipta dilindungi.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 font-medium text-gray-600">
                        <span className="border-r pr-6 border-gray-300">Indonesia/Bahasa Indonesia</span>
                        <Link href="/privacy" className="hover:underline">Privasi</Link>
                        <Link href="/legal" className="hover:underline">Legal</Link>
                        <Link href="/sitemap" className="hover:underline">Peta Situs</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}       