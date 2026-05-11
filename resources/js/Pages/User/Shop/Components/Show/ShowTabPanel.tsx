import {
    Zap, Camera, Monitor, Wifi, BatteryFull, ShieldCheck,
    ChevronDown, ChevronUp, Package,
} from "lucide-react";

interface ShowTabPanelProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    openSpec: string | null;
    setOpenSpec: (spec: string | null) => void;
}

const tabs = ["Deskripsi", "Spesifikasi", "Dalam Kotak"];

const specGroups = [
    {
        title: "Performa",
        icon: <Monitor size={15} />,
        items: [
            { label: "Chip",       value: "Apple A19 Pro (3nm)" },
            { label: "RAM",        value: "12 GB LPDDR5X" },
            { label: "GPU",        value: "6-Core Apple GPU" },
            { label: "Neural Eng", value: "16-Core Neural Engine" },
        ],
    },
    {
        title: "Layar",
        icon: <Monitor size={15} />,
        items: [
            { label: "Ukuran",    value: '6.9 inci Super Retina XDR' },
            { label: "Resolusi",  value: "2868 × 1320 piksel" },
            { label: "Refresh",   value: "ProMotion 1–120Hz" },
            { label: "Kecerahan", value: "2000 nit (Peak Outdoor)" },
        ],
    },
    {
        title: "Kamera",
        icon: <Camera size={15} />,
        items: [
            { label: "Utama",     value: "48MP Fusion, f/1.78" },
            { label: "Ultrawide", value: "48MP, f/2.2 120°" },
            { label: "Telefoto",  value: "12MP Periscope 5× Optical" },
            { label: "Depan",     value: "24MP TrueDepth, f/1.9" },
        ],
    },
    {
        title: "Baterai & Konektivitas",
        icon: <BatteryFull size={15} />,
        items: [
            { label: "Baterai", value: "4685 mAh" },
            { label: "Cas",     value: "MagSafe 25W Wireless" },
            { label: "5G",      value: "Sub-6GHz & mmWave" },
            { label: "Wi-Fi",   value: "Wi-Fi 7 (802.11be)" },
        ],
    },
];

const inBox = [
    "iPhone 17 Pro Max",
    "Kabel USB-C ke USB-C (1m)",
    "Dokumentasi & Panduan",
    "SIM Eject Tool",
];

const descFeatures = [
    { icon: <Zap size={13} />,         text: "A19 Pro Chip" },
    { icon: <Camera size={13} />,      text: "Triple 48MP Camera" },
    { icon: <Monitor size={13} />,     text: '6.9" ProMotion XDR' },
    { icon: <Wifi size={13} />,        text: "Wi-Fi 7 + 5G mmWave" },
    { icon: <BatteryFull size={13} />, text: "MagSafe 25W" },
    { icon: <ShieldCheck size={13} />, text: "Ceramic Shield" },
];

export default function ShowTabPanel({
    activeTab,
    setActiveTab,
    openSpec,
    setOpenSpec,
}: ShowTabPanelProps) {
    return (
        <div>
            {/* Tab buttons */}
            <div className="flex border-b border-gray-100">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[11px] uppercase tracking-widest pb-3 mr-6 transition-all border-b-2 ${
                            activeTab === tab
                                ? "border-black text-black"
                                : "border-transparent text-gray-400 hover:text-gray-700"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* DESKRIPSI */}
            {activeTab === "Deskripsi" && (
                <div className="pt-5 text-sm text-gray-600 leading-relaxed space-y-4">
                    <p>
                        iPhone 17 Pro Max hadir sebagai puncak inovasi Apple di 2026.
                        Ditenagai chip{" "}
                        <span className="text-black font-medium">A19 Pro 3nm</span>{" "}
                        yang 40% lebih cepat dari generasi sebelumnya, dipadukan RAM
                        12GB untuk multitasking tanpa hambatan.
                    </p>
                    <p>
                        Sistem kamera tiga lensa 48MP dengan sensor yang lebih besar
                        menangkap detail luar biasa bahkan di kondisi minim cahaya.
                        Layar 6,9 inci Super Retina XDR ProMotion 120Hz menghadirkan
                        visual yang mulus dan tajam.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        {descFeatures.map((f) => (
                            <div
                                key={f.text}
                                className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2.5 text-[12px] text-gray-700"
                            >
                                <span className="text-gray-400">{f.icon}</span>
                                {f.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SPESIFIKASI */}
            {activeTab === "Spesifikasi" && (
                <div className="pt-4 space-y-2">
                    {specGroups.map((group) => (
                        <div key={group.title} className="border border-gray-100 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenSpec(openSpec === group.title ? null : group.title)}
                                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-700">
                                    <span className="text-gray-400">{group.icon}</span>
                                    {group.title}
                                </div>
                                {openSpec === group.title
                                    ? <ChevronUp size={14} className="text-gray-400" />
                                    : <ChevronDown size={14} className="text-gray-400" />
                                }
                            </button>
                            {openSpec === group.title && (
                                <div className="px-4 py-3 space-y-2">
                                    {group.items.map((item) => (
                                        <div key={item.label} className="flex justify-between text-[12px]">
                                            <span className="text-gray-400 uppercase tracking-wide">{item.label}</span>
                                            <span className="text-gray-800 text-right">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* DALAM KOTAK */}
            {activeTab === "Dalam Kotak" && (
                <div className="pt-5 space-y-2">
                    {inBox.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Package size={12} className="text-gray-400" />
                            </div>
                            <span className="text-[13px] text-gray-700">{item}</span>
                        </div>
                    ))}
                    <p className="text-[11px] text-gray-400 pt-2 uppercase tracking-wide">
                        * Charger tidak disertakan dalam paket
                    </p>
                </div>
            )}
        </div>
    );
}