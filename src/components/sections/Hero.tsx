"use client";

import Image from "next/image";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="overture" className="relative min-h-screen w-full flex items-center justify-start bg-transparent overflow-hidden">
      {/* Sorotan Lampu Panggung Utama */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] h-[100vh] opacity-20 pointer-events-none z-10"
        style={{
          background: "conic-gradient(from 180deg at 50% 0%, rgba(255,253,240,0.5) 0deg, transparent 40deg, transparent 320deg, rgba(255,253,240,0.5) 360deg)",
          filter: "blur(80px)",
        }}
      />

      {/* Siluet Bayangan Konduktor (Kanan Bawah) */}
      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] max-w-[750px] max-h-[750px] z-10 pointer-events-none transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conductor-silhouette.png"
            alt="Conductor Shadow"
            fill
            unoptimized
            sizes="(max-width: 1366px) 45vw, 750px"
            className="
              object-contain object-bottom 
              -scale-x-100 
              -translate-x-3 -translate-y-1 
              brightness-[2] sepia-[0.5] saturate-[0.5] 
              opacity-60 blur-[1px]
            "
          />
        </div>

        <div className="absolute inset-0 z-10">
          <Image
            src="/images/conductor-silhouette.png"
            alt="Conductor Silhouette"
            fill
            sizes="(max-width: 1366px) 45vw, 750px"
            className="
              object-contain object-bottom 
              -scale-x-100 
              opacity-80
              [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
            "
          />
        </div>
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto h-full flex items-center px-8 md:px-16 lg:px-20 z-20 pt-24">
        
        <GlassCard className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl p-6 md:p-8 flex flex-col transition-all duration-300 shadow-2xl backdrop-blur-md overflow-hidden">
          
          {/* 1. Judul Utama (Rata tengah, ditarik agak ke atas dengan mengurangi margin-bottom) */}
          <h2 className="text-bright-cream font-cinzel text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight tracking-wider text-center mb-4">
            THE ARCHITECT OF <br /> DIGITAL SYMPHONIES
          </h2>
          
          {/* 1. Ornamen Garis Pembatas (Dikunci di tengah menggunakan flex, margin dibuat lebih rapat) */}
          <div className="w-full max-w-[200px] md:max-w-xs flex flex-row items-center justify-center gap-3 mb-5 mx-auto opacity-30 text-center">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-cream"></div>
            <span className="font-cinzel text-xs text-cream leading-none block">♩</span>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-cream"></div>
          </div>
          
          {/* 2. Sub-headline (Diubah kembali menjadi text-justify agar rapi, margin-bottom dikurangi sedikit) */}
          <p className="text-cream/70 font-julee leading-relaxed text-xs md:text-sm lg:text-base xl:text-lg text-justify max-w-lg mx-auto mb-8 italic">
            Transforming complex lines of code into high-performance digital experiences. From the intricate training patterns of artificial intelligence to robust backend structures, and from immersive game ecosystems to seamless web architectures, I engineer every layer of technology to perform in perfect structural harmony.
          </p>

          {/* 3. Posisi Tombol CTA (Diberi mt-2 ekstra agar letaknya bergeser sedikit ke bawah untuk memberi jarak nyaman) */}
          <div className="flex flex-row justify-center items-center gap-3 md:gap-4 w-full mt-2 transition-all duration-300">
            {/* CTA Utama */}
            <a href="#encore" className="w-auto">
              <Button variant="primary" className="px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm tracking-wider font-lexend font-medium whitespace-nowrap">
                Let's Harmonize!
              </Button>
            </a>
            
            {/* CTA Sekunder */}
            <a href="#concert" className="w-auto">
              <Button variant="secondary" className="px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm tracking-wider font-lexend font-medium whitespace-nowrap">
                Enter the Concert Hall
              </Button>
            </a>
          </div>

        </GlassCard>

      </div>
    </section>
  );
}