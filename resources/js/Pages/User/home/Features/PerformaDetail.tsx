import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function PerformaDetail(): React.JSX.Element {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
    const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

    const stats = [
        {
            value: "3nm",
            label: "Teknologi proses terkini",
            desc: "Chip pertama di dunia dengan node 3 nanometer untuk efisiensi daya yang belum pernah ada.",
        },
        {
            value: "6-core",
            label: "CPU generasi baru",
            desc: "2 core performa + 4 core efisiensi, memberikan kecepatan maksimum sekaligus hemat baterai.",
        },
        {
            value: "6-core",
            label: "GPU kelas pro",
            desc: "Performa grafis setara konsol untuk rendering real-time, ray tracing, dan gaming kompetitif.",
        },
        {
            value: "16-core",
            label: "Neural Engine",
            desc: "Pemrosesan machine learning hingga 35 triliun operasi per detik langsung di perangkat kamu.",
        },
    ];

    const detailSections = [
        {
            tag: "CPU",
            title: "Kecepatan yang tidak bisa kamu bayangkan.",
            body: "CPU baru A17 Pro hadir dengan dua core performa yang telah didesain ulang dari nol. Dibandingkan generasi sebelumnya, kecepatan single-core meningkat secara signifikan — artinya setiap ketukan, setiap scroll, setiap respons terasa seperti pemikiran yang langsung terwujud. Empat core efisiensi bekerja di balik layar untuk tugas-tugas ringan, menjaga baterai tetap bertenaga sepanjang hari tanpa mengorbankan performa. Inilah arsitektur big.LITTLE yang diimplementasikan dengan sempurna.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
            reverse: false,
            accent: "#e30000",
        },
        {
            tag: "GPU",
            title: "Grafis sekelas konsol. Di genggaman kamu.",
            body: "GPU 6-core pada A17 Pro bukan sekadar peningkatan angka — ini adalah lompatan arsitektur. Dengan dukungan hardware ray tracing untuk pertama kalinya di iPhone, bayangan, pantulan, dan pencahayaan dalam game terlihat seindah yang ada di PC gaming kelas atas. Mesh shading memungkinkan developer menciptakan dunia 3D yang lebih detail dan luas tanpa mengorbankan frame rate. Game seperti Resident Evil Village dan Assassin's Creed Mirage kini berjalan mulus di genggaman kamu — bukan versi tereduksi, tapi versi penuh.",
            image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
            reverse: true,
            accent: "#e30000",
        },
        {
            tag: "Neural Engine",
            title: "AI bukan sekadar kata kunci. Ini nyata.",
            body: "Neural Engine 16-core memproses 35 triliun operasi per detik — angka yang sulit dicerna, tapi dampaknya langsung terasa. Autocorrect yang akhirnya benar-benar mengerti konteks kalimat. Fitur Personal Voice yang mempelajari suara kamu hanya dari rekaman singkat. Pemrosesan foto computational yang terjadi sebelum kamu selesai menekan shutter. Semua ini terjadi langsung di perangkat, tanpa mengirim data ke server, menjaga privasi kamu tetap terlindungi sepenuhnya.",
            image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
            reverse: false,
            accent: "#e30000",
        },
        {
            tag: "Efisiensi Daya",
            title: "Lebih kencang. Lebih lama. Bukan pilihan.",
            body: "Dengan node 3nm, A17 Pro menggunakan daya jauh lebih sedikit untuk menghasilkan performa yang lebih tinggi. Bukan trade-off — ini adalah kemajuan sejati. iPhone 15 Pro memberikan ketahanan baterai hingga 23 jam untuk pemutaran video, sementara chipnya berlari lebih cepat dari laptop kelas menengah. Teknologi ini juga berarti perangkat kamu tidak cepat panas saat beban berat, menjaga performa konsisten bahkan saat sesi gaming marathon atau rendering video panjang.",
            image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1200&auto=format&fit=crop",
            reverse: true,
            accent: "#e30000",
        },
    ];

    return (
        <div className="bg-black text-white font-sans antialiased overflow-x-hidden">

            {/* ── HERO ── */}
            <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1800&auto=format&fit=crop"
                        alt="A17 Pro Chip"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                </motion.div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 text-center px-6"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-[#e30000] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-6"
                    >
                        Performa
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[56px] md:text-[96px] lg:text-[120px] font-bold leading-[0.95] tracking-tight mb-8"
                    >
                        Chip A17 Pro.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto"
                    >
                        Monster di balik layar.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-white/40 text-xs tracking-widest uppercase">Gulir ke bawah</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ── INTRO ── */}
            <section className="py-32 px-6 md:px-20 max-w-[1200px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-[28px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.15] tracking-tight text-white/90"
                >
                    Chip pertama dengan teknologi{" "}
                    <span className="text-[#e30000]">3 nanometer</span>{" "}
                    yang mendefinisikan ulang batas kemampuan sebuah smartphone. Performa bukan lagi soal angka benchmark — ini soal pengalaman yang kamu rasakan setiap detik.
                </motion.p>
            </section>

            {/* ── STATS GRID ── */}
            <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-[24px] p-8 hover:bg-white/8 transition-all duration-500"
                        >
                            <p className="text-[48px] md:text-[56px] font-bold text-[#e30000] leading-none mb-3 tracking-tight">
                                {s.value}
                            </p>
                            <p className="text-white font-semibold text-lg mb-3">{s.label}</p>
                            <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── DETAIL SECTIONS ── */}
            <section className="py-10 pb-32">
                {detailSections.map((sec, i) => (
                    <div
                        key={i}
                        className="max-w-[1440px] mx-auto px-4 md:px-10 py-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className={`bg-[#111] rounded-[32px] overflow-hidden flex flex-col ${
                                sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                            } items-center min-h-[560px]`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2 h-[360px] lg:h-full overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                                    src={sec.image}
                                    alt={sec.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                                <span
                                    className="font-bold text-sm uppercase tracking-[0.2em] mb-5"
                                    style={{ color: sec.accent }}
                                >
                                    {sec.tag}
                                </span>
                                <h3 className="text-[32px] md:text-[48px] font-bold leading-[1.1] tracking-tight mb-7 text-white">
                                    {sec.title}
                                </h3>
                                <p className="text-white/60 text-[16px] md:text-[18px] leading-[1.8] font-normal max-w-lg">
                                    {sec.body}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </section>

            {/* ── QUOTE SECTION ── */}
            <section className="py-32 px-6 md:px-20 bg-[#0a0a0a]">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-px bg-[#e30000] mb-16 mx-auto w-24"
                    />
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="text-[28px] md:text-[40px] font-semibold leading-[1.3] tracking-tight text-white/85 mb-12"
                    >
                        "Kami tidak membangun chip yang lebih cepat. Kami membangun chip yang mengubah cara kamu berpikir tentang apa yang bisa dilakukan sebuah ponsel."
                    </motion.blockquote>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-sm uppercase tracking-widest"
                    >
                        Tim Silicon Apple
                    </motion.p>
                </div>
            </section>

            {/* ── BENCHMARK VISUAL ── */}
            <section className="py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-[36px] md:text-[56px] font-bold tracking-tight text-center mb-4"
                >
                    Perbandingan performa.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white/50 text-center text-lg mb-16"
                >
                    A17 Pro vs chip smartphone terdepan lainnya.
                </motion.p>

                <div className="space-y-6">
                    {[
                        { label: "Single-Core CPU", a17: 96, competitor: 71, compLabel: "Snapdragon 8 Gen 2" },
                        { label: "Multi-Core CPU",  a17: 92, competitor: 80, compLabel: "Snapdragon 8 Gen 2" },
                        { label: "GPU (Gaming)",    a17: 100, competitor: 62, compLabel: "Adreno 740" },
                        { label: "Machine Learning",a17: 98, competitor: 55, compLabel: "Hexagon NPU" },
                    ].map((bench, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-[20px] p-6 md:p-8"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-white font-semibold text-lg">{bench.label}</span>
                            </div>
                            <div className="space-y-3">
                                {/* A17 Pro Bar */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[#e30000] text-sm font-semibold">A17 Pro</span>
                                        <span className="text-white/60 text-sm">{bench.a17}%</span>
                                    </div>
                                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${bench.a17}%` }}
                                            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            viewport={{ once: true }}
                                            className="h-full bg-[#e30000] rounded-full"
                                        />
                                    </div>
                                </div>
                                {/* Competitor Bar */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white/40 text-sm">{bench.compLabel}</span>
                                        <span className="text-white/40 text-sm">{bench.competitor}%</span>
                                    </div>
                                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${bench.competitor}%` }}
                                            transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            viewport={{ once: true }}
                                            className="h-full bg-white/20 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="text-white/20 text-xs text-center mt-8">
                    Data berdasarkan pengujian internal Apple. Kondisi pengujian dapat bervariasi.
                </p>
            </section>

            {/* ── CTA ── */}
            <section className="py-32 px-6 text-center bg-gradient-to-b from-black to-[#0d0d0d]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[48px] md:text-[80px] font-bold tracking-tight mb-6"
                >
                    Rasakan sendiri.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white/50 text-xl mb-12 max-w-xl mx-auto"
                >
                    iPhone 15 Pro. Dirancang untuk mereka yang tidak mau berkompromi.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/beli"
                        className="bg-[#e30000] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#cc0000] transition-all active:scale-95 inline-block"
                    >
                        Beli Sekarang
                    </Link>
                    <Link
                        href="/conten6"
                        className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/15 transition-all active:scale-95 inline-block"
                    >
                        ← Kembali
                    </Link>
                </motion.div>
            </section>

        </div>
    );
}