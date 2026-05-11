import { Link } from "@inertiajs/react";
import { ShoppingCart, Store, Package, ChevronRight } from "lucide-react";
import MobileAccordion from "./MobileAccordion";
import NavBadge from "./NavBadge";
import { NavItem, PageProps } from "./types";
import { navItems } from "./navItems";

interface Props {
    open: boolean;
    currentPath: string;
    currentSearch: string;
    cartCount: number;
    auth: PageProps["auth"];
    onClose: () => void;
}

export default function MobileDrawer({ open, currentPath, currentSearch, cartCount, auth, onClose }: Props) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Drawer */}
            <div
                className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "translate-y-0" : "-translate-y-full"
                }`}
                style={{
                    background: "rgba(0,0,0,0.92)",
                    backdropFilter: "saturate(180%) blur(24px)",
                    WebkitBackdropFilter: "saturate(180%) blur(24px)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "52px",
                }}
            >
                <div className="divide-y divide-white/[0.06]">
                    {navItems.map((item: NavItem) =>
                        item.dropdown ? (
                            <MobileAccordion
                                key={item.label}
                                item={item}
                                currentPath={currentPath}
                                currentSearch={currentSearch}
                                onClose={onClose}
                            />
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href!}
                                onClick={onClose}
                                className={`flex items-center justify-between px-4 py-3.5 text-[15px] transition-colors ${
                                    currentPath === item.href ? "text-white" : "text-white/70 hover:text-white"
                                }`}
                            >
                                {item.label}
                                <ChevronRight size={13} className="opacity-25" />
                            </Link>
                        )
                    )}

                    {/* Bottom quick links */}
                    <div className="flex items-center justify-around px-4 py-4">
                        <Link href="/cart" onClick={onClose} className="relative flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                            <div className="relative"><ShoppingCart size={20} /><NavBadge count={cartCount} /></div>
                            <span className="text-[11px]">Keranjang</span>
                        </Link>
                        <Link href="/shop" onClick={onClose} className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                            <Store size={20} />
                            <span className="text-[11px]">Toko</span>
                        </Link>
                        <Link href="/orders" onClick={onClose} className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                            <Package size={20} />
                            <span className="text-[11px]">Pesanan</span>
                        </Link>
                    </div>

                    {/* Auth section */}
                    <div className="px-4 py-4">
                        {auth?.user ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[13px] font-semibold text-white">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-medium text-white leading-tight">{auth.user.name}</p>
                                        {auth.user.email && (
                                            <p className="text-[11px] text-white/40 leading-tight mt-0.5">{auth.user.email}</p>
                                        )}
                                    </div>
                                </div>
                                <Link
                                    href="/logout" method="post" as="button" onClick={onClose}
                                    className="px-3.5 py-1.5 text-[12px] font-medium text-red-400 border border-red-500/25 rounded-full hover:bg-red-500/10 transition-colors"
                                >
                                    Keluar
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <Link href="/register" onClick={onClose} className="w-full text-center py-3 text-[13.5px] font-semibold text-black bg-white rounded-xl hover:bg-gray-100 transition-colors active:scale-[0.98]">
                                    Daftar Sekarang
                                </Link>
                                <Link href="/login" onClick={onClose} className="w-full text-center py-3 text-[13.5px] font-medium text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all active:scale-[0.98]">
                                    Masuk
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}