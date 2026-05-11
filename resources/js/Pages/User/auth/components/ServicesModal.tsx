import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { services } from "./constants";
import { backdropVariants, modalVariants, listContainerVariants, listItemVariants } from "./variants";

interface Props {
    show: boolean;
    onClose: () => void;
}

export default function ServicesModal({ show, onClose }: Props) {
    return (
        <AnimatePresence>
            {show && (
                <>
                    <motion.div
                        key="backdrop"
                        variants={backdropVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                    />

                    <motion.div
                        key="modal"
                        variants={modalVariants}
                        initial="hidden" animate="visible" exit="exit"
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
                    >
                        <div
                            className="w-full max-w-sm bg-zinc-950 border border-zinc-800/50 rounded-2xl overflow-hidden pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="px-6 pt-7 pb-5 flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-1">
                                        <svg className="w-[18px] h-[18px] fill-white shrink-0" viewBox="0 0 384 512">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 24.5-104.6 62.7-45.3 79-11.6 195.7 31.8 258.9 21.3 30.7 46.7 65 80 64 31.5-1.1 43.5-20.3 81.8-20.3 38.4 0 49.3 20.3 82.4 19.7 34.3-.6 56.4-30.8 77.4-61.2 24.3-35.4 34.3-69.7 34.7-71.4-1.1-.4-66.4-25.5-66.6-104.7zM281.2 80c15.1-18.3 25.1-43.8 22.3-69.3-21.9.9-48.4 14.6-64.1 32.8-14.1 16.1-26.4 42.1-23.1 67.1 24.1 1.9 48.7-12.4 64.9-30.6z" />
                                        </svg>
                                        <h2 className="text-[15px] font-semibold text-white leading-tight">
                                            Layanan KIIPHONE Mamuju
                                        </h2>
                                    </div>
                                    <p className="text-[12px] text-zinc-500 ml-[30px]">Mamuju · Sulawesi Barat</p>
                                </div>
                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ scale: 1.15, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors shrink-0 ml-3 mt-0.5"
                                >
                                    <X className="w-3.5 h-3.5 text-zinc-400" />
                                </motion.button>
                            </div>

                            <div className="h-px bg-zinc-800/60" />

                            {/* List */}
                            <motion.div
                                className="overflow-y-auto max-h-[55vh] py-1"
                                variants={listContainerVariants}
                                initial="hidden" animate="visible"
                            >
                                {services.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        variants={listItemVariants}
                                        className="flex items-start gap-3 px-6 py-3.5 hover:bg-zinc-900/40 transition-colors"
                                    >
                                        <div className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[13px] font-medium text-white leading-snug">{s.title}</p>
                                            <p className="text-[12px] text-zinc-500 mt-0.5 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="h-px bg-zinc-800/60" />
                            <div className="px-6 py-4 flex items-center justify-between">
                                <p className="text-[11px] text-zinc-600">Konsultasi WhatsApp tersedia hingga 22.00 WITA</p>
                                <ChevronRight className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}