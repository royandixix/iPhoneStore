import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavItem } from "./types";
import { urlMatches } from "./utils";

interface Props {
    item: NavItem;
    currentPath: string;
    currentSearch: string;
}

export default function NavDropdown({ item, currentPath, currentSearch }: Props) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openMenu = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };
    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

    const isActive = item.dropdown?.some((sub) => urlMatches(sub.href, currentPath, currentSearch));

    return (
        <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <button
                onClick={() => setOpen((v) => !v)}
                className={`flex items-center gap-0.5 px-3 py-1 text-[13px] transition-colors duration-150 ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
            >
                {item.label}
                <ChevronDown size={11} className={`mt-px transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl overflow-hidden
                bg-[#1c1c1e]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50
                transition-all duration-200 origin-top z-[200]
                ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
            >
                {item.dropdown?.map((sub) => {
                    const active = urlMatches(sub.href, currentPath, currentSearch);
                    return (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between px-5 py-3 text-[13px] transition-colors border-b border-white/5 last:border-0 ${
                                active ? "text-white bg-white/8" : "text-white/60 hover:text-white hover:bg-white/8"
                            }`}
                        >
                            {sub.label}
                            <ChevronRight size={11} className="opacity-30" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}