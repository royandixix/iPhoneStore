import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [isAnimating, setIsAnimating] = useState(false);
    const [mounted, setMounted] = useState(false);
    const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const images = [
        "/images/design_endframe__7k7qs1qlnpu6_large_2x.jpg",
        "/images/initial__d2ghrz27b54y_large_2x.jpg",
        "/images/1763126653_9031b159efd59e7a7bdc.jpg",
        "/images/1763126610_1b34a94a3b7a817b6a8a.png",
    ];

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(t);
    }, []);

    const goTo = (newIndex: number, dir: "next" | "prev") => {
        if (isAnimating) return;
        setDirection(dir);
        setPrevIndex(index);
        setIsAnimating(true);
        setIndex(newIndex);
        setTimeout(() => {
            setPrevIndex(null);
            setIsAnimating(false);
        }, 700);
    };

    const next = () => goTo((index + 1) % images.length, "next");
    const prev = () => goTo((index - 1 + images.length) % images.length, "prev");

    useEffect(() => {
        autoRef.current = setInterval(() => {
            setDirection("next");
            setIndex((i) => {
                const ni = (i + 1) % images.length;
                setPrevIndex(i);
                setIsAnimating(true);
                setTimeout(() => {
                    setPrevIndex(null);
                    setIsAnimating(false);
                }, 700);
                return ni;
            });
        }, 4500);
        return () => {
            if (autoRef.current) clearInterval(autoRef.current);
        };
    }, [images.length]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

                .hero-root {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 100px 0 80px;
                    background: #000;
                    overflow: hidden;
                    font-family: 'Inter', -apple-system, sans-serif;
                }

                .bg-glow {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 800px;
                    height: 600px;
                    background: radial-gradient(circle at center, rgba(0, 113, 227, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
                    opacity: 0.6;
                    pointer-events: none;
                }

                .hero-eyebrow {
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.4em;
                    color: #3b82f6;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.8s ease;
                }
                .hero-eyebrow.in { opacity: 1; transform: translateY(0); }

                .hero-h1 {
                    font-size: clamp(40px, 7vw, 84px);
                    font-weight: 700;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: transparent;
                    background: linear-gradient(to bottom, #ffffff 0%, #9ca3af 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 1s ease 0.2s;
                }
                .hero-h1.in { opacity: 1; transform: translateY(0); }

                .hero-sub {
                    font-size: clamp(16px, 1.8vw, 19px);
                    font-weight: 300;
                    line-height: 1.6;
                    color: #9ca3af;
                    margin-top: 32px;
                    max-width: 650px;
                    margin-left: auto;
                    margin-right: auto;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 1s ease 0.4s;
                }
                .hero-sub.in { opacity: 1; transform: translateY(0); }

                .hero-ctas {
                    margin-top: 48px;
                    display: flex;
                    gap: 32px;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 1s ease 0.6s;
                }
                .hero-ctas.in { opacity: 1; transform: translateY(0); }

                .btn-primary {
                    padding: 14px 40px;
                    background: #0071E3;
                    color: #fff;
                    border-radius: 999px;
                    font-weight: 500;
                    font-size: 15px;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .btn-primary:hover {
                    transform: scale(1.03);
                    background: #0077ed;
                    box-shadow: 0 0 40px rgba(0, 113, 227, 0.3);
                }

                .btn-ghost {
                    color: #2997FF;
                    font-weight: 500;
                    font-size: 16px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                }
                .btn-ghost:hover { gap: 14px; }

                .slider-container {
                    position: relative;
                    width: 100%;
                    max-width: 1000px;
                    margin-top: 80px;
                    padding: 0 20px;
                    opacity: 0;
                    transform: scale(0.98) translateY(30px);
                    transition: all 1.2s ease 0.8s;
                }
                .slider-container.in { opacity: 1; transform: scale(1) translateY(0); }

                .slider-inner {
                    position: relative;
                    width: 100%;
                    height: 480px;
                    border-radius: 32px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .slide {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                }
                .slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
                }

                .slide-enter-next { animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                .slide-enter-prev { animation: slideInPrev 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                .slide-exit-next { animation: slideOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                .slide-exit-prev { animation: slideOutPrev 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

                @keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes slideInPrev { from { transform: translateX(-40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes slideOut { to { transform: translateX(-40px); opacity: 0; } }
                @keyframes slideOutPrev { to { transform: translateX(40px); opacity: 0; } }
            

                .nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 20;
                    transition: all 0.3s;
                }
                .nav-btn:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.3); }
                .nav-btn-left { left: -25px; }
                .nav-btn-right { right: -25px; }

                .dots-nav {
                    display: flex;
                    gap: 12px;
                    margin-top: 40px;
                    opacity: 0;
                    transition: opacity 1s ease 1s;
                }
                .dots-nav.in { opacity: 1; }

                .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .dot.active {
                    background: #fff;
                    transform: scale(1.5);
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
                }
            `}</style>

            <div className="hero-root">
                <div className="bg-glow" />

                <div style={{ textAlign: "center", zIndex: 10, padding: "0 24px" }}>
                    <div className={`hero-eyebrow${mounted ? " in" : ""}`}>
                        Pusat iPhone Mamuju • Sulawesi Barat
                    </div>

                    <h1 className={`hero-h1${mounted ? " in" : ""}`}>
                        iPhone Impianmu. <br />
                        Tanpa Kompromi.
                    </h1>

                    <p className={`hero-sub${mounted ? " in" : ""}`}>
                        Kami percaya bahwa kualitas adalah hak, bukan pilihan. Hadirkan inovasi terbaik langsung ke tangan Anda dengan kurasi produk premium yang ketat.
                    </p>

                    <div className={`hero-ctas${mounted ? " in" : ""}`}>
                        <Link href="/products" className="btn-primary">
                            Cek Produk
                        </Link>
                        <Link href="#" className="btn-ghost">
                            Konsultasi <span>→</span>
                        </Link>
                    </div>
                </div>

                <div className={`slider-container${mounted ? " in" : ""}`}>
                    <button onClick={prev} className="nav-btn nav-btn-left">‹</button>
                    
                    <div className="slider-inner">
                        <div
                            key={`current-${index}`}
                            className={`slide ${isAnimating ? (direction === "next" ? "slide-enter-next" : "slide-enter-prev") : ""}`}
                            style={{ zIndex: 2 }}
                        >
                            <img src={images[index]} alt={`iPhone model ${index + 1}`} />
                        </div>

                        {prevIndex !== null && (
                            <div
                                key={`exit-${prevIndex}`}
                                className={`slide ${direction === "next" ? "slide-exit-next" : "slide-exit-prev"}`}
                                style={{ zIndex: 1 }}
                            >
                                <img src={images[prevIndex]} alt={`iPhone model ${prevIndex + 1}`} />
                            </div>
                        )}
                    </div>

                    <button onClick={next} className="nav-btn nav-btn-right">›</button>
                </div>

                <div className={`dots-nav${mounted ? " in" : ""}`}>
                    {images.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goTo(i, i > index ? "next" : "prev")}
                            className={`dot${i === index ? " active" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}