import { usePage, router, Link } from "@inertiajs/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, ShoppingCart, Store } from "lucide-react";

import { PageProps } from "./types";
import { navItems } from "./navItems";
import NavBadge from "./NavBadge";
import NavDropdown from "./NavDropdown";
import NotifDropdown from "./NotifDropdown";
import MobileDrawer from "./MobileDrawer";
import AuthMenu from "./AuthMenu";


const notifications = [
    {
        id: 1,
        title: "Pesanan dikirim",
        desc: "iPhone 16 Pro Max sudah dalam perjalanan",
        time: "2 menit lalu",
        unread: true,
    },
    {
        id: 2,
        title: "Flash Sale dimulai",
        desc: "Diskon hingga 30% untuk aksesoris",
        time: "1 jam lalu",
        unread: true,
    },
    {
        id: 3,
        title: "Pesanan diterima",
        desc: "Case iPhone kamu sudah sampai",
        time: "Kemarin",
        unread: false,
    },
];

export default function Navbar() {
    
    const page = usePage<PageProps>();
    const currentPath =
        typeof window !== "undefined" ? window.location.pathname : "/";
    const currentSearch =
        typeof window !== "undefined" ? window.location.search : "";

    const auth = page.props.auth;
    console.log("AUTH NAVBAR:", auth); // ✅ setelah dideklarasikan
    const cartCount = (page.props.cartCount as number) ?? 0;
    const notifCount = (page.props.notifCount as number) ?? 0;

    const [search, setSearch] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const searchRef = useRef<HTMLInputElement>(null);
    const notifRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (searchOpen) setTimeout(() => searchRef.current?.focus(), 60);
    }, [searchOpen]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                notifRef.current &&
                !notifRef.current.contains(e.target as Node)
            ) {
                setNotifOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileOpen(false);
                setSearchOpen(false);
                setSearch("");
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search.trim()) return;
        router.get("/shop", { search });
        setSearch("");
        setSearchOpen(false);
    };

    const openSearch = useCallback(() => {
        setMobileOpen(false);
        setSearchOpen(true);
    }, []);

    const openMobile = useCallback(() => {
        setSearchOpen(false);
        setMobileOpen((v) => !v);
    }, []);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled
                        ? "rgba(0,0,0,0.88)"
                        : "rgba(0,0,0,0.72)",
                    backdropFilter: "saturate(180%) blur(20px)",
                    WebkitBackdropFilter: "saturate(180%) blur(20px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(255,255,255,0.04)",
                }}
            >
                {/* Top bar — disembunyikan saat search aktif */}
                <div
                    className={`${
                        searchOpen
                            ? "max-h-0 opacity-0 pointer-events-none"
                            : "max-h-14 opacity-100"
                    } transition-all duration-300`}
                >
                    <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="shrink-0 w-[18px] h-[18px] opacity-80 hover:opacity-100"
                        >
                            <svg
                                viewBox="0 0 814 1000"
                                className="w-[16px] h-[16px] fill-white"
                            >
                                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-167.3-117.2C220.4 793.5 177 696.8 177 604.8c0-177 115.4-270.8 230.5-270.8 59.8 0 109.5 39.5 147.7 39.5s95.4-41.8 163.7-41.8c26.4 0 113.6 2.6 175.7 84.6zm-180.9-102c28.5-35.4 48.5-84.3 48.5-133.5 0-6.8-.5-13.5-1.5-20.1-46.1 1.9-101.3 31.2-134.5 71.6-26.5 30.8-50.4 79.5-50.4 129.4 0 7.1 1.2 14.3 1.9 16.5 3.2.5 8.4 1.2 13.6 1.2 41 0 90.4-27.4 122.4-65.1z" />
                            </svg>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-0">
                            {navItems.map((item) =>
                                item.dropdown ? (
                                    <NavDropdown
                                        key={item.label}
                                        item={item}
                                        currentPath={currentPath}
                                        currentSearch={currentSearch}
                                    />
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href!}
                                        className={`px-3 py-1 text-[13px] ${
                                            currentPath === item.href
                                                ? "text-white"
                                                : "text-white/75 hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ),
                            )}
                        </div>

                        {/* Right icons */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={openSearch}
                                className="w-8 h-8 flex items-center justify-center text-white/75 hover:text-white"
                            >
                                <Search size={16} />
                            </button>

                            <NotifDropdown
                                ref={notifRef}
                                notifCount={notifCount}
                                open={notifOpen}
                                onToggle={() => setNotifOpen((v) => !v)}
                                notifications={notifications}
                            />

                            <Link
                                href="/cart"
                                className="relative w-8 h-8 flex items-center justify-center text-white/75 hover:text-white"
                            >
                                <ShoppingCart size={16} />
                                <NavBadge count={cartCount} />
                            </Link>

                            <Link
                                href="/shop"
                                className="hidden lg:flex w-8 h-8 items-center justify-center text-white/75 hover:text-white"
                            >
                                <Store size={16} />
                            </Link>

                            <AuthMenu auth={auth} />

                            {/* Hamburger */}
                            <button
                                onClick={openMobile}
                                className="lg:hidden w-8 h-8 flex items-center justify-center text-white/75 hover:text-white"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search bar — muncul saat searchOpen aktif */}
                <div
                    className={`${
                        searchOpen
                            ? "max-h-14 opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none"
                    } transition-all duration-300 overflow-hidden`}
                >
                    <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center gap-3">
                        <form
                            onSubmit={handleSearch}
                            className="flex-1 flex items-center gap-3"
                        >
                            <Search size={15} className="text-white/40 shrink-0" />
                            <input
                                ref={searchRef}
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari iPhone, aksesoris..."
                                className="flex-1 bg-transparent text-white text-[13.5px] placeholder-white/30 outline-none"
                            />
                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="text-white/30 hover:text-white/60 text-[11px] transition-colors"
                                >
                                    ✕
                                </button>
                            )}
                        </form>
                        <button
                            onClick={() => {
                                setSearchOpen(false);
                                setSearch("");
                            }}
                            className="text-white/50 hover:text-white text-[13px] transition-colors shrink-0"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </nav>

            <MobileDrawer
                open={mobileOpen}
                currentPath={currentPath}
                currentSearch={currentSearch}
                cartCount={cartCount}
                auth={auth}
                onClose={closeMobile}
            />
        </>
    );
}