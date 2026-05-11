import { useState } from "react";
import { motion } from "framer-motion";
import { router, usePage } from "@inertiajs/react";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function Register() {
    const { errors }: any = usePage().props;

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        router.post("/register", data, {
            onStart: () => console.log("START"),
            onSuccess: () => console.log("SUCCESS"),
            onError: (err) => console.log("ERROR:", err),
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#000000] text-white antialiased font-sans selection:bg-blue-500/30">

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden">

                {/* Glow */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 
                    w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] 
                    bg-blue-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] flex flex-col items-center z-10"
                >

                    {/* Logo */}
                    <motion.div
                        className="mb-6 sm:mb-10"
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <svg className="w-9 h-9 sm:w-12 sm:h-12 fill-white" viewBox="0 0 384 512">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 24.5-104.6 62.7-45.3 79-11.6 195.7 31.8 258.9 21.3 30.7 46.7 65 80 64 31.5-1.1 43.5-20.3 81.8-20.3 38.4 0 49.3 20.3 82.4 19.7 34.3-.6 56.4-30.8 77.4-61.2 24.3-35.4 34.3-69.7 34.7-71.4-1.1-.4-66.4-25.5-66.6-104.7z" />
                        </svg>
                    </motion.div>

                    {/* Title */}
                    <div className="text-center w-full mb-6 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
                            Buat akun baru.
                        </h1>
                        <p className="text-zinc-400 text-sm sm:text-base">
                            Daftar untuk mulai berbelanja.
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="w-full space-y-4">

                        {/* NAME */}
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                onFocus={() => setFocused("name")}
                                onBlur={() => setFocused(null)}
                                className="w-full h-12 sm:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 pt-5 text-sm sm:text-lg focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <label className={`absolute left-4 transition-all text-xs
                                ${focused === "name" || data.name ? "top-1 text-[10px] text-blue-400" : "top-3 text-zinc-400"}`}>
                                Nama Lengkap
                            </label>
                            {errors?.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* EMAIL */}
                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                className="w-full h-12 sm:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 pt-5 text-sm sm:text-lg focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <label className={`absolute left-4 transition-all text-xs
                                ${focused === "email" || data.email ? "top-1 text-[10px] text-blue-400" : "top-3 text-zinc-400"}`}>
                                Email
                            </label>
                            {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* PASSWORD */}
                        <div className="relative">
                            <input
                                type="password"
                                required
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                onFocus={() => setFocused("password")}
                                onBlur={() => setFocused(null)}
                                className="w-full h-12 sm:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 pt-5 text-sm sm:text-lg focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <label className={`absolute left-4 transition-all text-xs
                                ${focused === "password" || data.password ? "top-1 text-[10px] text-blue-400" : "top-3 text-zinc-400"}`}>
                                Kata Sandi
                            </label>
                            {errors?.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="relative">
                            <input
                                type="password"
                                required
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData({ ...data, password_confirmation: e.target.value })
                                }
                                onFocus={() => setFocused("confirm")}
                                onBlur={() => setFocused(null)}
                                className="w-full h-12 sm:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 pt-5 text-sm sm:text-lg focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <label className={`absolute left-4 transition-all text-xs
                                ${focused === "confirm" || data.password_confirmation ? "top-1 text-[10px] text-blue-400" : "top-3 text-zinc-400"}`}>
                                Konfirmasi Sandi
                            </label>
                        </div>

                        {/* BUTTON */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 sm:h-14 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-xl text-sm sm:text-lg font-medium transition"
                        >
                            {loading ? "Memproses..." : "Daftar"}
                        </motion.button>
                    </form>

                    {/* LOGIN LINK */}
                    <div className="mt-6 text-center">
                        <p className="text-xs sm:text-sm text-zinc-500">
                            Sudah punya akun?{" "}
                            <span
                                onClick={() => router.visit("/login")}
                                className="text-blue-500 hover:text-blue-400 cursor-pointer"
                            >
                                Masuk di sini
                            </span>
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}