import { motion } from "framer-motion";
import { router } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import { itemVariants } from "./variants";

interface Props {
    onShowServices: () => void;
}

export default function LoginFooter({ onShowServices }: Props) {
    return (
        <motion.div variants={itemVariants} className="mt-12 text-center space-y-4 w-full">
            <motion.button
                onClick={onShowServices}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-sm text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 mx-auto"
            >
                Layanan kami <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>

            <div className="h-[1px] w-full bg-zinc-800" />

            <p className="text-sm text-zinc-500">
                Belum punya ID KIIPHONE?{" "}
                <motion.span
                    onClick={() => router.visit("/register")}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-blue-500 font-medium hover:text-blue-400 transition-colors cursor-pointer inline-block"
                >
                    Buat milik Anda sekarang.
                </motion.span>
            </p>
        </motion.div>
    );
}