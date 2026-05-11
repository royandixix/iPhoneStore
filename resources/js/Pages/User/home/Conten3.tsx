import React from 'react';

const Content3 = () => {
  return (
    <div className="w-full bg-white font-sans text-[#1c1d1f]">
      {/* 
        ========================================
        Hero Section - Full Width
        ========================================
      */}
      <section className="w-full bg-[#108ee9] text-white min-h-[500px] flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          
          {/* Kolom Kiri: Teks Judul */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
              iPhone 15 Pro: <br/> Cek Harga Promo
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed">
              Dapatkan penawaran terbaik untuk iPhone impianmu dengan garansi resmi dan cicilan ringan.
            </p>
          </div>

          {/* Kolom Kanan: Visual Placeholder (Full Area) */}
          <div className="relative bg-[#f8d951] flex items-center justify-center py-20 px-4 min-h-[400px]">
            {/* Ornamen Lingkaran Dekoratif */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
            
            {/* Mockup HP - Representasi Loyalty */}
            <div className="relative w-[260px] h-[520px] bg-gray-900 border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="w-32 h-6 bg-[#1a1a1a] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10"></div>
              
              {/* Screen Content */}
              <div className="bg-[#108ee9] flex-grow p-4 pt-8 flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Kartu Hitam (Yoshinoya Style) */}
                <div className="bg-[#1c1d1f] rounded-xl p-4 shadow-lg mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg"></div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">Poin</p>
                      <p className="text-sm font-bold">1500</p>
                    </div>
                  </div>
                  <div className="h-3 w-32 bg-gray-700 rounded mb-6"></div>
                  <div className="w-full py-2 border border-dashed border-gray-600 rounded text-center text-[10px] font-mono tracking-widest text-white">
                    IPHONE - 15PRO - MAX
                  </div>
                </div>

                {/* List Voucher Items */}
                <div className="space-y-3 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg shrink-0"></div>
                      <div className="flex-grow">
                        <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-24 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-12 h-6 bg-blue-100 rounded-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        Bottom Text Section - Full Width
        ========================================
      */}
      <section className="w-full py-24 md:py-32 px-6 border-b border-gray-100">
        <div className="w-full text-center">
          <p className="text-[#108ee9] font-bold text-lg md:text-xl mb-6 tracking-[0.2em] uppercase">
            GADGET UPDATE
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1c1d1f] leading-[1.1] max-w-5xl mx-auto">
            Miliki iPhone terbaru dengan harga paling bersahabat
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Content3;