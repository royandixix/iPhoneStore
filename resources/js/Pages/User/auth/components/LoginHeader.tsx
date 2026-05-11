import { motion } from "framer-motion";
import { itemVariants } from "./variants";

export default function LoginHeader() {
    return (
        <>
            <motion.div
                variants={itemVariants}
                className="mb-10"
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
                <svg className="w-12 h-12 fill-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 24.5-104.6 62.7-45.3 79-11.6 195.7 31.8 258.9 21.3 30.7 46.7 65 80 64 31.5-1.1 43.5-20.3 81.8-20.3 38.4 0 49.3 20.3 82.4 19.7 34.3-.6 56.4-30.8 77.4-61.2 24.3-35.4 34.3-69.7 34.7-71.4-1.1-.4-66.4-25.5-66.6-104.7zM281.2 80c15.1-18.3 25.1-43.8 22.3-69.3-21.9.9-48.4 14.6-64.1 32.8-14.1 16.1-26.4 42.1-23.1 67.1 24.1 1.9 48.7-12.4 64.9-30.6z" />
                </svg>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center w-full mb-10">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                    Masuk untuk beli.
                </h1>
                <p className="text-zinc-400 text-base">Gunakan Akun KIIPHONE Anda.</p>
            </motion.div>
        </>
    );
}