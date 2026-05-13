import { Link } from "@inertiajs/react";

interface AuthMenuProps {
    auth: {
        user: { name: string; email?: string } | null;
    };
    isDark?: boolean;
}

export default function AuthMenu({ auth, isDark = true }: AuthMenuProps) {
    // const user = auth?.user;
    const user = auth?.user ?? null;

    // 🔥 USER SUDAH LOGIN
    if (user) {
        return (
            <div className="flex items-center gap-3">
                <span className={`text-[12px] max-w-[80px] truncate hidden md:block ${
                    isDark ? "text-white/50" : "text-gray-600"
                }`}>
                    {user.name}
                </span>

                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 ${
                        isDark
                            ? "border-white/15 bg-white/8 text-white/50 hover:text-white hover:bg-white/15 hover:border-white/25"
                            : "border-gray-200 bg-white text-gray-500 hover:text-black hover:bg-gray-50"
                    }`}
                    title="Keluar"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </Link>
            </div>
        );
    }

    // 🔥 USER BELUM LOGIN
    return (
        <div className="flex items-center gap-2">
            <Link
                href="/login"
                className={`px-4 py-1.5 text-[12.5px] font-medium rounded-full transition-all duration-200 ${
                    isDark
                        ? "text-white/70 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/8"
                        : "text-gray-700 hover:text-black border border-gray-200 hover:bg-gray-50"
                }`}
            >
                Masuk
            </Link>

            <Link
                href="/register"
                className={`px-4 py-1.5 text-[12.5px] font-semibold rounded-full transition-all duration-200 ${
                    isDark
                        ? "text-black bg-white hover:bg-gray-100 active:scale-95"
                        : "text-white bg-black hover:bg-gray-900 active:scale-95"
                }`}
            >
                Daftar
            </Link>
        </div>
    );
}