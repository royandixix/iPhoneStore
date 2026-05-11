import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    active?: boolean;
}

export default function NavLink({
    href,
    children,
    active = false,
}: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`px-3 py-1.5 rounded-md text-[13px] tracking-wide transition-colors duration-200 ${
                active
                    ? "text-white bg-white/6"
                    : "text-gray-400 hover:text-white hover:bg-white/4"
            }`}
        >
            {children}
        </Link>
    );
}