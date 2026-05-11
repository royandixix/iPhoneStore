import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
};

const fadeRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
};

export default function DetailConten6(): React.JSX.Element {
    return (
        <section className="bg-white overflow-hidden">

            {/* ── SECTION 1 · Chip ── */}
            <div className="py-32 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-24">
                        <motion.div {...fadeUp}>
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">
                                Performa Pro
                            </h3>
                            <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.1] tracking-tight">
                                A19 Pro. <br />Monster di balik layar.
                            </h2>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-6 text-[#86868b] text-xl leading-relaxed pt-4">
                            <p>
                                Inilah lompatan terbesar dalam sejarah GPU Apple. Chip A19 Pro memberikan performa grafis yang tidak pernah terbayangkan sebelumnya di sebuah ponsel pintar. Dengan arsitektur 3 nanometer yang lebih efisien, setiap tugas—mulai dari rendering video 4K hingga gaming kelas konsol—terasa sangat lancar dan instan.
                            </p>
                            <p>
                                Neural Engine yang ditingkatkan kini mampu memproses triliunan operasi per detik, memungkinkan fitur AI seperti fotografi komputasional bekerja di latar belakang tanpa menguras baterai.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stat strip */}
                    <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="border-t border-[#d2d2d7]">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#d2d2d7]">
                            {[
                                { value: "30%", label: "CPU lebih cepat", sub: "vs generasi sebelumnya" },
                                { value: "40%", label: "GPU lebih cepat", sub: "untuk gaming & render" },
                                { value: "2T", label: "Operasi per detik", sub: "Neural Engine" },
                                { value: "50%", label: "Lebih hemat daya", sub: "efisiensi arsitektur baru" },
                            ].map((s) => (
                                <div key={s.label} className="py-10 px-8 text-center">
                                    <div className="text-[44px] font-bold tracking-tight text-[#1d1d1f]">{s.value}</div>
                                    <div className="text-[15px] font-semibold text-[#1d1d1f] mt-1">{s.label}</div>
                                    <div className="text-[13px] text-[#86868b] mt-1">{s.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── SECTION 2 · Display (dark) ── */}
            <div className="bg-[#1d1d1f] py-32 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-20">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">
                            Super Retina XDR
                        </h3>
                        <h2 className="text-[40px] md:text-[64px] font-semibold leading-tight tracking-tight text-white max-w-[700px]">
                            Layar yang membuat mata Anda tak percaya.
                        </h2>
                    </motion.div>

                    {/* Visual placeholder — no external image */}
                    <motion.div
                        {...fadeUp}
                        transition={{ delay: 0.1 }}
                        className="w-full rounded-[32px] overflow-hidden mb-20"
                        style={{ background: "linear-gradient(135deg, #1c1c3a 0%, #0a0a1a 40%, #1a0a2e 70%, #0d1f3c 100%)", height: 340 }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-white text-[80px] font-bold tracking-tighter leading-none"
                                    style={{ opacity: 0.08 }}>
                                    OLED
                                </div>
                                <div className="text-white text-xl font-light tracking-widest mt-2 uppercase"
                                    style={{ opacity: 0.4 }}>
                                    2,000,000 : 1 Contrast Ratio
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12 border-t border-[#3a3a3c] pt-16">
                        {[
                            { title: "ProMotion 120Hz", desc: "Layar ProMotion dengan refresh rate adaptif hingga 120Hz membuat setiap gerakan—dari scroll sederhana hingga gameplay intens—terasa lebih halus. Layar secara cerdas menyesuaikan refresh rate untuk mengoptimalkan masa pakai baterai." },
                            { title: "2000 nit Peak Brightness", desc: "Puncak kecerahan 2.000 nit untuk konten HDR dan 1.000 nit untuk penggunaan luar ruangan. Layar tetap terlihat jelas bahkan di bawah terik matahari, memastikan detail yang Anda lihat di studio tetap terlihat di pantai." },
                            { title: "Always-On Display", desc: "Layar Always-On menampilkan waktu, widget, dan notifikasi setiap saat bahkan saat iPhone terkunci. Teknologi LTPO3 memastikan fitur ini hanya mengonsumsi daya yang sangat minimal." },
                        ].map((item) => (
                            <motion.div key={item.title} {...fadeUp}>
                                <h4 className="text-white text-xl font-semibold mb-4">{item.title}</h4>
                                <p className="text-[#86868b] text-base leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION 3 · Titanium ── */}
            <div className="py-32 px-6">
                <div className="max-w-[900px] mx-auto text-center mb-20">
                    <motion.div {...fadeUp}>
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Material</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight leading-tight mb-10">
                            Titanium. Ditempa untuk ketangguhan ekstrem.
                        </h2>
                        <div className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                iPhone 17 Pro menggunakan desain titanium kelas dirgantara yang sama dengan yang digunakan pada pesawat ruang angkasa. Titanium memiliki salah satu rasio kekuatan-terhadap-berat terbaik dari logam mana pun, menjadikan model Pro ini yang paling ringan namun paling kuat yang pernah kami buat.
                            </p>
                            <p>
                                Tekstur brushed yang halus pada bingkai titanium dicapai melalui proses pemesinan presisi selama berjam-jam. Di balik eksterior yang cantik ini, terdapat struktur internal yang terbuat dari 100% aluminium daur ulang.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Titanium gradient visual */}
                <motion.div
                    {...fadeUp}
                    className="max-w-[1100px] mx-auto rounded-[40px] overflow-hidden mb-20"
                    style={{ background: "linear-gradient(160deg, #c8c8ca 0%, #9a9a9f 30%, #7c7c80 60%, #a8a8ac 100%)", height: 280 }}
                >
                    <div className="w-full h-full flex items-end p-12">
                        <div>
                            <div className="text-white text-[13px] uppercase tracking-widest font-semibold mb-2" style={{ opacity: 0.7 }}>Grade 5 Titanium</div>
                            <div className="text-white text-3xl font-semibold">Ringan. Kuat. Presisi.</div>
                        </div>
                    </div>
                </motion.div>

                {/* Durability — dua kolom teks */}
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#d2d2d7] pt-16">
                    <motion.div {...fadeLeft}>
                        <div className="text-[13px] uppercase tracking-widest text-[#86868b] font-semibold mb-4">IP69 — Tahan Air & Debu</div>
                        <p className="text-[#1d1d1f] text-xl leading-relaxed">
                            Peringkat IP69 berarti iPhone 17 Pro tahan terhadap rendaman air hingga kedalaman 6 meter selama 30 menit. Hujan lebat, percikan air pantai, atau bahkan jatuh ke kolam renang—tidak masalah. Desain segel internal yang baru memastikan tidak ada air yang masuk ke komponen vital.
                        </p>
                    </motion.div>
                    <motion.div {...fadeRight}>
                        <div className="text-[13px] uppercase tracking-widest text-[#86868b] font-semibold mb-4">Ceramic Shield — Kaca Terkuat</div>
                        <p className="text-[#1d1d1f] text-xl leading-relaxed">
                            Ceramic Shield generasi terbaru yang kami kembangkan bersama Corning diklaim 4x lebih tahan pecah dari kaca smartphone lainnya. Nanostruktur keramik yang disuntikkan ke dalam kaca menciptakan matriks kristal yang menyebar benturan secara merata ke seluruh permukaan.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── SECTION 4 · Kamera ── */}
            <div className="py-32 px-6 bg-[#f5f5f7]">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-20">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Sistem Kamera Pro</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight max-w-[600px]">
                            Kamera yang menangkap imajinasi Anda.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
                        <motion.div {...fadeLeft} className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                Sensor utama 48MP yang canggih kini memiliki Photonic Engine yang mampu menggabungkan piksel terbaik dari gambar resolusi super tinggi dengan optimasi cahaya redup yang luar biasa. Hasilnya: detail yang sangat tajam, warna yang akurat, dan rentang dinamis yang membuat foto Anda terlihat seperti diambil fotografer profesional.
                            </p>
                            <p>
                                Bahkan dalam kondisi gelap, sensor ini mampu menangkap tekstur dan detail yang biasanya hilang dalam bayangan. Kini Anda bisa beralih antara tiga lensa utama—24mm, 28mm, dan 35mm—seolah-olah Anda membawa tas berisi lensa prima profesional di saku Anda.
                            </p>
                        </motion.div>

                        {/* Camera lens — CSS only visual */}
                        <motion.div
                            {...fadeRight}
                            className="rounded-[32px] overflow-hidden flex items-center justify-center"
                            style={{ background: "linear-gradient(145deg, #111 0%, #222 50%, #1a1a1a 100%)", height: 320 }}
                        >
                            <div style={{ position: "relative" }}>
                                <div style={{
                                    width: 160, height: 160, borderRadius: "50%",
                                    border: "6px solid #333",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    boxShadow: "0 0 0 12px #222, 0 0 0 16px #2a2a2a, inset 0 0 40px rgba(0,0,0,0.8)"
                                }}>
                                    <div style={{
                                        width: 80, height: 80, borderRadius: "50%",
                                        background: "radial-gradient(circle at 35% 35%, #1a237e, #000051)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        boxShadow: "inset 0 0 20px rgba(100,150,255,0.15)"
                                    }}>
                                        <div style={{
                                            width: 40, height: 40, borderRadius: "50%",
                                            background: "radial-gradient(circle at 35% 35%, #283593, #000)"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Lens specs strip */}
                    <motion.div {...fadeUp} className="border-t border-[#d2d2d7] pt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#d2d2d7]">
                        {[
                            { lens: "Wide", mm: "24mm", mp: "48MP", aperture: "f/1.78", desc: "Sensor quad-bayer dengan sensitivitas cahaya luar biasa untuk kondisi malam hari." },
                            { lens: "Ultra Wide", mm: "13mm", mp: "12MP", aperture: "f/2.2", desc: "Autofocus makro built-in dengan jarak fokus minimum 2 cm untuk foto detail ekstrem." },
                            { lens: "Telephoto", mm: "120mm", mp: "12MP", aperture: "f/2.8", desc: "5x optical zoom dengan OIS terapung memastikan foto tajam meski tangan bergetar." },
                        ].map((cam) => (
                            <div key={cam.lens} className="py-8 px-0 md:px-10 first:pt-0 md:first:pt-8 first:pl-0">
                                <div className="flex justify-between items-baseline mb-3">
                                    <div className="text-[13px] uppercase tracking-widest text-[#86868b] font-semibold">{cam.lens}</div>
                                    <div className="text-2xl font-bold text-[#1d1d1f]">{cam.mm}</div>
                                </div>
                                <div className="text-sm text-[#86868b] mb-3">{cam.mp} · {cam.aperture}</div>
                                <p className="text-[#1d1d1f] text-[15px] leading-relaxed">{cam.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── SECTION 5 · ProRes Video (dark) ── */}
            <div className="bg-[#1d1d1f] py-32 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-20 text-center">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Produksi Video</h3>
                        <h2 className="text-[40px] md:text-[64px] font-semibold leading-tight tracking-tight text-white">
                            ProRes 4K 120fps.<br />Sinema di genggaman Anda.
                        </h2>
                    </motion.div>

                    {/* Cinematic visual */}
                    <motion.div
                        {...fadeUp}
                        transition={{ delay: 0.1 }}
                        className="w-full rounded-[24px] overflow-hidden mb-20"
                        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #1a1209 50%, #0d0d0d 100%)", height: 300, position: "relative" }}
                    >
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 28, background: "#000" }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 28, background: "#000" }} />
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-[#b8860b] text-[13px] uppercase tracking-[.3em] font-semibold mb-3">Apple ProRes Log</div>
                                <div className="text-white text-4xl font-semibold">4K · 120fps · HDR</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div {...fadeLeft} className="space-y-5 text-[#86868b] text-lg leading-relaxed">
                            <p>
                                Untuk pertama kalinya, iPhone mampu merekam video ProRes 4K pada 120fps langsung ke SSD eksternal melalui USB-C 3.0. Ini adalah fitur yang selama ini hanya bisa dilakukan dengan kamera sinema profesional senilai ratusan juta rupiah.
                            </p>
                            <p>
                                Log video encoding memastikan Anda mendapatkan rentang dinamis yang maksimal sehingga Anda bisa melakukan color grading secara profesional di Final Cut Pro atau DaVinci Resolve.
                            </p>
                        </motion.div>
                        <motion.div {...fadeRight} className="space-y-5 text-[#86868b] text-lg leading-relaxed">
                            <p>
                                Mode Cinematic yang disempurnakan kini mendukung depth-of-field yang bisa diedit pasca pengambilan gambar—mengubah titik fokus setelah Anda selesai merekam. Tidak ada yang seperti ini sebelumnya di dunia smartphone.
                            </p>
                            <p>
                                Action Button yang dapat disesuaikan memungkinkan Anda memulai rekaman ProRes hanya dengan satu tekan, tanpa perlu membuka aplikasi terlebih dahulu.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SECTION 6 · Apple Intelligence ── */}
            <div className="py-32 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
                        <motion.div {...fadeLeft}>
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Apple Intelligence</h3>
                            <h2 className="text-[40px] md:text-[52px] font-semibold leading-tight tracking-tight mb-8">
                                Kecerdasan buatan yang benar-benar cerdas.
                            </h2>
                            <div className="space-y-5 text-[#86868b] text-xl leading-relaxed">
                                <p>
                                    Apple Intelligence adalah sistem kecerdasan personal yang berjalan langsung di perangkat Anda—bukan di cloud. Privasi Anda terlindungi, dan responsnya terasa instan karena semua pemrosesan terjadi di dalam chip A19 Pro.
                                </p>
                                <p>
                                    Writing Tools membantu Anda memperbaiki tulisan di mana saja dengan fitur penulisan ulang, ringkasan otomatis, dan saran nada yang terasa natural. Image Playground memungkinkan Anda membuat gambar orisinal hanya dengan mendeskripsikan apa yang Anda bayangkan.
                                </p>
                            </div>
                        </motion.div>

                        {/* AI abstract visual */}
                        <motion.div
                            {...fadeRight}
                            className="rounded-[32px] overflow-hidden"
                            style={{
                                height: 380,
                                background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 30%, #fce4ec 60%, #f3e5f5 100%)",
                                position: "relative"
                            }}
                        >
                            <div style={{
                                position: "absolute", inset: 0,
                                backgroundImage: "radial-gradient(circle at 30% 40%, rgba(66,133,244,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(234,67,53,0.10) 0%, transparent 50%)"
                            }} />
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="text-[#1d1d1f] text-2xl font-semibold mb-3">Apple Intelligence</div>
                                    <div className="text-[#86868b] text-base">Diproses langsung di perangkat Anda</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features — tabel strip */}
                    <div className="border-t border-[#d2d2d7] pt-12">
                        {[
                            { title: "Writing Tools", desc: "Perbaiki tulisan Anda di mana saja. Apple Intelligence memahami konteks dan memberikan saran yang terasa natural. Tersedia di Notes, Mail, Messages, dan setiap aplikasi yang mendukung teks." },
                            { title: "Image Playground", desc: "Buat gambar orisinal dalam hitungan detik hanya dengan mendeskripsikan apa yang Anda bayangkan. Tersedia dalam gaya animasi, ilustrasi, dan sketsa untuk stiker personal atau konten media sosial." },
                            { title: "Siri yang Lebih Cerdas", desc: "Siri kini memahami percakapan dengan konteks penuh. Ia bisa merujuk ke apa yang baru saja Anda katakan, memahami kalimat kompleks, dan mengeksekusi aksi lintas aplikasi tanpa Anda perlu mengulang perintah." },
                            { title: "Priority Notifications", desc: "Apple Intelligence memprioritaskan notifikasi terpenting berdasarkan konteks dan kebiasaan Anda. Notifikasi tidak penting otomatis dikelompokkan sehingga Anda tetap fokus pada hal yang benar-benar penting." },
                        ].map((f, i) => (
                            <motion.div
                                key={f.title}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-[#d2d2d7] last:border-0"
                            >
                                <div className="text-[#1d1d1f] text-xl font-semibold">{f.title}</div>
                                <div className="md:col-span-2 text-[#86868b] text-lg leading-relaxed">{f.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION 7 · Baterai ── */}
            <div className="py-32 px-6 bg-[#f5f5f7]">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-16">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Daya Tahan</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight max-w-[650px]">
                            Seharian penuh. Bahkan lebih dari itu.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <motion.div {...fadeLeft} className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                Berkat efisiensi daya chip A19 Pro yang luar biasa, iPhone 17 Pro Max mampu bertahan hingga <span className="text-[#1d1d1f] font-semibold">33 jam pemutaran video</span>—rekor baru untuk iPhone mana pun. Bahkan jika Anda menonton sepanjang perjalanan dan terus browsing, baterai masih bersisa.
                            </p>
                            <p>
                                Teknologi pengisian daya pintar baru belajar dari kebiasaan pengisian daya Anda dan memperlambat pengisian daya di atas 80% hingga saat Anda biasanya bangun—memperpanjang umur baterai secara signifikan dalam jangka panjang.
                            </p>
                        </motion.div>

                        <motion.div {...fadeRight} className="border-l border-[#d2d2d7] pl-12 space-y-0">
                            {[
                                { title: "Pengisian Cepat 30W", desc: "Dari 0 hingga 50% hanya dalam 30 menit dengan adaptor 30W." },
                                { title: "MagSafe 25W", desc: "Pengisian nirkabel MagSafe kini 25% lebih cepat dengan aksesori terbaru." },
                                { title: "Reverse Wireless Charging", desc: "Isi daya AirPods dan Apple Watch langsung dari punggung iPhone Anda." },
                                { title: "Mode Hemat Daya Otomatis", desc: "Aktif di 20% dan memperpanjang masa pakai hingga 4 jam tambahan." },
                            ].map((b) => (
                                <div key={b.title} className="py-6 border-b border-[#d2d2d7] last:border-0">
                                    <div className="text-[#1d1d1f] font-semibold text-lg mb-1">{b.title}</div>
                                    <div className="text-[#86868b] text-base leading-relaxed">{b.desc}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SECTION 8 · Konektivitas ── */}
            <div className="py-32 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-20">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Konektivitas</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight max-w-[600px]">
                            Selalu terhubung. Di mana saja.
                        </h2>
                    </motion.div>

                    {/* 5G full strip */}
                    <motion.div
                        {...fadeUp}
                        className="rounded-[32px] p-12 md:p-16 mb-12"
                        style={{ background: "#1d1d1f" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-[80px] font-bold text-white leading-none tracking-tight mb-2">5G</div>
                                <div className="text-[#86868b] text-sm uppercase tracking-widest font-semibold">Ultra Wideband</div>
                            </div>
                            <p className="text-[#86868b] text-lg leading-relaxed">
                                Dengan dukungan lebih dari 20 band 5G, iPhone 17 Pro menawarkan koneksi tercepat yang tersedia. Streaming 4K, download game besar, video call resolusi tinggi—semuanya terasa instan. Di jaringan padat, iPhone secara cerdas memilih band frekuensi yang paling tidak padat.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#d2d2d7] pt-12">
                        <motion.div {...fadeLeft}>
                            <div className="text-[13px] uppercase tracking-widest text-[#86868b] font-semibold mb-3">Wi-Fi 7</div>
                            <p className="text-[#1d1d1f] text-xl leading-relaxed">
                                Wi-Fi 7 pertama di iPhone, mampu kecepatan hingga 5,8 Gbps pada jaringan yang mendukung. Transfer file besar antara Mac dan iPhone selesai dalam kedipan mata. Latensi yang drastis lebih rendah juga terasa nyata pada gaming online.
                            </p>
                        </motion.div>
                        <motion.div {...fadeRight}>
                            <div className="text-[13px] uppercase tracking-widest text-[#86868b] font-semibold mb-3">USB-C 3.0 · 40 Gb/s</div>
                            <p className="text-[#1d1d1f] text-xl leading-relaxed">
                                Port USB-C 3.0 baru mendukung transfer data hingga 40 Gb/s, output video hingga 4K HDR ke monitor eksternal, dan pengisian daya dua arah. Satu kabel untuk segalanya—tidak perlu adaptor.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SECTION 9 · Privasi ── */}
            <div className="bg-[#f5f5f7] py-32 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-16">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Privasi & Keamanan</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight max-w-[800px]">
                            iPhone Anda tahu banyak tentang Anda. Tapi Apple tidak.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <motion.div {...fadeLeft} className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                Setiap fitur Apple Intelligence diproses langsung di perangkat Anda, bukan di server cloud. Data sensitif seperti pesan, foto, dan informasi kesehatan tidak pernah meninggalkan iPhone Anda. Arsitektur Private Cloud Compute memastikan bahkan Apple pun tidak bisa membaca data Anda.
                            </p>
                            <p>
                                Face ID dengan Secure Enclave menjamin bahwa model wajah Anda disimpan terenkripsi dalam chip khusus yang tidak dapat diakses oleh aplikasi mana pun. Saat Anda membuka kunci iPhone, yang terjadi adalah perbandingan matematis lokal—bukan pencocokan dengan database di server mana pun.
                            </p>
                        </motion.div>

                        <motion.div {...fadeRight} className="border-t md:border-t-0 md:border-l border-[#d2d2d7] pt-8 md:pt-0 md:pl-16">
                            {[
                                { title: "Face ID Generasi 3", desc: "Lebih cepat dan lebih akurat dalam kondisi cahaya ekstrem." },
                                { title: "Secure Enclave", desc: "Chip keamanan tersendiri yang terisolasi dari prosesor utama." },
                                { title: "End-to-End Encryption", desc: "iMessage, FaceTime, dan iCloud Backup terenkripsi secara penuh." },
                                { title: "App Privacy Report", desc: "Lihat secara real-time data apa yang diakses setiap aplikasi." },
                            ].map((p) => (
                                <div key={p.title} className="py-5 border-b border-[#d2d2d7] last:border-0">
                                    <div className="text-[#1d1d1f] font-semibold mb-1">{p.title}</div>
                                    <div className="text-[#86868b] text-[15px]">{p.desc}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── SECTION 10 · Lingkungan ── */}
            <div className="py-32 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Lingkungan Hidup</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight max-w-[700px] mx-auto">
                            Lebih baik untuk Anda. Lebih baik untuk Bumi.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        <motion.div {...fadeLeft} className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                iPhone 17 Pro adalah iPhone pertama yang mencapai netralitas karbon untuk siklus hidup penuhnya—dari produksi hingga pengiriman. Ini dicapai melalui kombinasi material daur ulang, energi terbarukan di fasilitas manufaktur, dan program offset karbon yang terverifikasi.
                            </p>
                            <p>
                                Lebih dari 25 mineral kritis dalam iPhone ini—termasuk kobalt, litium, dan tantalum—sepenuhnya berasal dari daur ulang, bukan penambangan baru. Program daur ulang Apple Trade In memungkinkan setiap iPhone lama diproses secara bertanggung jawab.
                            </p>
                        </motion.div>
                        <motion.div {...fadeRight} className="space-y-6 text-[#86868b] text-xl leading-relaxed">
                            <p>
                                Seluruh rantai pasokan Apple beroperasi dengan energi 100% terbarukan—termasuk semua pabrik perakitan di Asia. Kemasan iPhone ini 100% bebas plastik; bahkan selotip pelindung layarnya terbuat dari bahan berbasis kertas yang dapat terurai.
                            </p>
                            <p>
                                Setiap iPhone yang diproduksi meninggalkan jejak karbon yang lebih kecil dari generasi sebelumnya. Ini adalah komitmen nyata, dan kami mempublikasikan laporan lingkungan penuh untuk setiap produk yang kami rilis.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stat strip */}
                    <motion.div {...fadeUp} className="border-t border-[#d2d2d7]">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#d2d2d7]">
                            {[
                                { value: "Carbon Neutral", sub: "Siklus hidup penuh produk" },
                                { value: "100%", sub: "Energi terbarukan seluruh operasi" },
                                { value: "0 Plastik", sub: "Dalam kemasan produk" },
                                { value: "28+", sub: "Mineral kritis 100% daur ulang" },
                            ].map((e) => (
                                <div key={e.sub} className="py-10 px-6 text-center">
                                    <div className="text-[22px] md:text-[28px] font-bold text-[#1d1d1f]">{e.value}</div>
                                    <div className="text-[13px] text-[#86868b] mt-2 leading-snug">{e.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── SECTION 11 · Ekosistem (dark) ── */}
            <div className="bg-[#1d1d1f] py-32 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <motion.div {...fadeUp} className="mb-20">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b] mb-6">Ekosistem Apple</h3>
                        <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight text-white max-w-[600px]">
                            Lebih baik bersama perangkat Apple Anda.
                        </h2>
                    </motion.div>

                    <div className="border-t border-[#3a3a3c]">
                        {[
                            { name: "Apple Watch", desc: "Pantau kesehatan, terima notifikasi, dan bayar dengan Apple Watch yang terhubung mulus ke iPhone. Handoff antara kedua perangkat terjadi secara otomatis saat Anda berpindah dari satu tugas ke tugas lain." },
                            { name: "AirPods Pro", desc: "Adaptive Audio menyesuaikan profil suara secara real-time berdasarkan kondisi sekitar Anda. Peralihan audio antara iPhone dan Mac terjadi secara otomatis berdasarkan perangkat yang sedang Anda gunakan." },
                            { name: "Mac", desc: "Handoff, AirDrop, Universal Clipboard, dan Continuity Camera mengubah iPhone dan Mac menjadi satu sistem yang mulus. Gunakan iPhone sebagai webcam kualitas studio untuk Mac Anda tanpa kabel apa pun." },
                            { name: "Apple TV", desc: "Mirroring layar nirkabel dan SharePlay mengubah iPhone sebagai remote dan controller yang sempurna untuk Apple TV. Streaming konten dari iPhone ke layar besar dalam hitungan detik dengan kualitas 4K penuh." },
                        ].map((e, i) => (
                            <motion.div
                                key={e.name}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-[#3a3a3c] last:border-0"
                            >
                                <div className="text-white text-xl font-semibold">{e.name}</div>
                                <div className="md:col-span-2 text-[#86868b] text-lg leading-relaxed">{e.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION 12 · CTA ── */}
            <div className="py-40 px-6 bg-white text-center">
                <motion.div {...fadeUp}>
                    <h2 className="text-[56px] md:text-[80px] font-semibold leading-tight tracking-tight text-[#1d1d1f] mb-4">
                        iPhone 17 Pro.
                    </h2>
                    <p className="text-[24px] md:text-[32px] text-[#86868b] font-light mb-16 max-w-[600px] mx-auto leading-snug">
                        Ini bukan hanya upgrade. Ini lompatan ke masa depan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-lg font-semibold px-12 py-4 rounded-full transition-colors">
                            Beli Sekarang
                        </button>
                        <button className="bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] text-lg font-semibold px-12 py-4 rounded-full transition-colors">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                    <p className="mt-10 text-[#86868b] text-base">
                        Tersedia mulai Rp 19.999.000. Cicilan 0% hingga 24 bulan.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}