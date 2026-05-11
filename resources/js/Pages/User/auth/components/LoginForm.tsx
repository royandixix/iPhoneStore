import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { itemVariants } from "./variants";

interface Props {
    data: { email: string; password: string };
    loading: boolean;
    focused: string | null;
    onChange: (field: "email" | "password", value: string) => void;
    onFocus: (field: string) => void;
    onBlur: () => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
    data,
    loading,
    focused,
    onChange,
    onFocus,
    onBlur,
    onSubmit,
}: Props) {
    return (
        <motion.form
            variants={itemVariants}
            onSubmit={onSubmit}
            className="w-full space-y-3 sm:space-y-4"
        >
            {/* Email */}
            <motion.div
                className="space-y-1 sm:space-y-2"
                animate={focused === "email" ? { scale: 1.01 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <label className="text-[12px] sm:text-[13px] font-medium text-zinc-400 ml-1">
                    Email atau Apple ID
                </label>

                <div className="relative">
                    <Input
                        type="email"
                        placeholder="nama@email.com"
                        value={data.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        onFocus={() => onFocus("email")}
                        onBlur={onBlur}
                        className="
                            h-11 sm:h-14
                            text-sm sm:text-lg
                            px-4 sm:px-5
                            bg-zinc-900/50 border-zinc-800
                            rounded-xl
                            focus:ring-1 focus:ring-blue-500
                            transition-all
                        "
                        required
                    />

                    <AnimatePresence>
                        {data.email.includes("@") && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2"
                            >
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Password */}
            <motion.div
                className="space-y-1 sm:space-y-2"
                animate={focused === "password" ? { scale: 1.01 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <label className="text-[12px] sm:text-[13px] font-medium text-zinc-400 ml-1">
                    Kata Sandi
                </label>

                <Input
                    type="password"
                    placeholder="Masukkan sandi Anda"
                    value={data.password}
                    onChange={(e) => onChange("password", e.target.value)}
                    onFocus={() => onFocus("password")}
                    onBlur={onBlur}
                    className="
                        h-11 sm:h-14
                        text-sm sm:text-lg
                        px-4 sm:px-5
                        bg-zinc-900/50 border-zinc-800
                        rounded-xl
                        focus:ring-1 focus:ring-blue-500
                        transition-all
                    "
                    required
                />
            </motion.div>

            {/* Submit */}
            <div className="pt-3 sm:pt-4">
                <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                    <Button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            h-11 sm:h-14
                            text-sm sm:text-lg
                            bg-[#0071e3] hover:bg-[#0077ed]
                            text-white
                            rounded-xl
                            font-medium
                            transition-colors
                        "
                    >
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                                    Memproses...
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-center gap-2"
                                >
                                    Lanjutkan{" "}
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </motion.div>
            </div>
        </motion.form>
    );
}