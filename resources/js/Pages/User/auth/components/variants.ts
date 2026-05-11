import type { Variants } from "framer-motion";

export const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit:   { opacity: 0, transition: { duration: 0.2,  ease: "easeIn", delay: 0.05 } },
};

export const modalVariants: Variants = {
    hidden:  { opacity: 0, scale: 0.93, y: 24 },
    visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as any } },
    exit:    { opacity: 0, scale: 0.95, y: 16, transition: { duration: 0.22, ease: [0.4, 0, 1, 1]   as any } },
};

export const listContainerVariants: Variants = {
    hidden:   {},
    visible:  { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
};

export const listItemVariants: Variants = {
    hidden:  { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0,   transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as any } },
};

export const containerVariants: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,   transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, staggerChildren: 0.1 } },
};

export const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0,   transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
};