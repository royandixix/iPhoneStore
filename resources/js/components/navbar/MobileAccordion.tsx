import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavItem } from "./types";
import { urlMatches } from "./utils";

interface Props {
    item: NavItem;
    currentPath: string;
    currentSearch: string;
    onClose: () => void;
}

export default function MobileAccordion({ item, currentPath, currentSearch, onClose }: Props) {
    const [open, setOpen] = useState(false);
    const isActive = item.dropdown?.some((sub) => urlMatches(sub.href, currentPath, currentSearch));

    return (
        <div>
            <button
                onClick={() => setOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-[15px] transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
            >
                {item.label}
                <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                {item.dropdown?.map((sub) => {
                    const active = urlMatches(sub.href, currentPath, currentSearch);
                    return (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={onClose}
                            className={`flex items-center justify-between pl-8 pr-4 py-3 text-[14px] transition-colors border-t border-white/5 ${
                                active ? "text-white" : "text-white/50 hover:text-white"
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