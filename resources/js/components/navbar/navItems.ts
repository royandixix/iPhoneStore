import { NavItem } from "./types";

export const navItems: NavItem[] = [
    { label: "Beranda", href: "/" },
    {
        label: "iPhone",
        dropdown: [
            { label: "Semua iPhone", href: "/products" },
            { label: "iPhone 16 Pro Max", href: "/products?series=16-pro-max" },
            { label: "iPhone 16 Pro", href: "/products?series=16-pro" },
            { label: "iPhone 16", href: "/products?series=16" },
            { label: "iPhone 15 Series", href: "/products?series=15" },
        ],
    },
    {
        label: "Aksesoris",
        dropdown: [
            { label: "Semua Aksesoris", href: "/products?cat=accessories" },
            { label: "Case & Cover", href: "/products?cat=case" },
            { label: "Charger & Kabel", href: "/products?cat=charger" },
            { label: "AirPods", href: "/products?cat=airpods" },
        ],
    },
    { label: "Pesanan", href: "/orders" },
];