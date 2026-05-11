import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { router } from "@inertiajs/react";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";
import ServicesModal from "./components/ServicesModal";

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

export default function Login() {
    const [data, setData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);
    const [showServices, setShowServices] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        router.post("/login", data, {
            onFinish: () => setLoading(false),
        });
    };

    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#000000] text-white antialiased font-sans selection:bg-blue-500/30">

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden">

                {/* Glow */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 
                    w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] 
                    bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" 
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] flex flex-col items-center z-10"
                >
                    <LoginHeader />

                    <div className="w-full mt-6 sm:mt-10 space-y-5 sm:space-y-6">

                        <LoginForm
                            data={data}
                            loading={loading}
                            focused={focused}
                            onChange={(field, value) =>
                                setData({ ...data, [field]: value })
                            }
                            onFocus={setFocused}
                            onBlur={() => setFocused(null)}
                            onSubmit={handleSubmit}
                        />

                        {/* Divider */}
                        <div className="relative w-full flex items-center justify-center">
                            <div className="w-full border-t border-zinc-800"></div>
                            <span className="absolute bg-[#000000] px-3 sm:px-4 text-[10px] sm:text-[12px] text-zinc-500 font-medium">
                                atau
                            </span>
                        </div>

                        {/* Google Button */}
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full h-12 sm:h-[52px] bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white border border-zinc-700 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span>Lanjutkan dengan Google</span>
                        </motion.button>
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <LoginFooter onShowServices={() => setShowServices(true)} />
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 sm:py-8 px-4 sm:px-6 border-t border-zinc-900 bg-black/50 backdrop-blur-md">
                <div className="max-w-[980px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-[12px] text-zinc-500">
                    <p>Copyright © 2026 KIIPHONE Mamuju.</p>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:underline">Privasi</a>
                        <a href="#" className="hover:underline">Ketentuan</a>
                        <a href="#" className="hover:underline">Sitemap</a>
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {showServices && (
                    <ServicesModal
                        show={showServices}
                        onClose={() => setShowServices(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}