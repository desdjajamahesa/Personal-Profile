"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Instagram, Github, Linkedin } from "lucide-react";

export default function Encore() {
  return (
    <section id="encore" className="relative min-h-screen w-full bg-transparent py-24 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] opacity-10 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cream via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-20 relative z-10 w-full max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-bright-cream font-cinzel text-3xl md:text-5xl tracking-[0.4em] font-bold mb-4 uppercase">THE ENCORE</h2>
          <p className="text-cream/50 font-lexend italic">Ready to orchestrate a new masterpiece together?</p>
        </div>

        {/* Outer Backstage Pass Wrapper Container (Menggunakan Grid 14) */}
        <div className="w-full bg-[#1e1e1e]/60 rounded-2xl border border-cream/10 shadow-2xl backdrop-blur-md overflow-hidden grid grid-cols-1 md:grid-cols-14 min-h-[320px]">
          
          {/* LEFT SIDE: The Lanyard Ticket Header (Backstage Pass Meta) */}
          {/* Menggunakan md:col-span-5 dari total 14 kolom */}
          <div className="md:col-span-5 bg-[#141414] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-cream/20 relative">
            
            {/* Ticket Punch Notch (Aksen Lingkaran Sobek Tepi Tiket) */}
            <div className="hidden md:block absolute -top-3 -right-3 w-6 h-6 bg-[#1A1A1A] rounded-full border border-cream/10"></div>
            <div className="hidden md:block absolute -bottom-3 -right-3 w-6 h-6 bg-[#1A1A1A] rounded-full border border-cream/10"></div>
            
            <div>
              <span className="text-saffron font-lexend text-xs font-black tracking-[0.2em] uppercase block mb-6">
                BACKSTAGE PASS
              </span>
              
              <div className="space-y-1">
                <span className="text-cream/40 font-lexend text-[10px] tracking-wider uppercase block">ARTIST</span>
                {/* whitespace-nowrap memastikan nama tetap dalam 1 baris horizontal */}
                <h3 className="text-bright-cream font-cinzel text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
                  Des Djaja Mahesa
                </h3>
              </div>
              
              <div className="space-y-1 mt-6">
                <span className="text-cream/40 font-lexend text-[10px] tracking-wider uppercase block">ROLE</span>
                {/* Menggunakan font-lexend agar teks detail berukuran kecil lebih mudah dibaca */}
                <p className="text-cream/80 font-lexend text-xs tracking-wide leading-relaxed">
                  AI Enthusiast<br />Backend Developer
                </p>
              </div>
            </div>

            {/* Simulated Barcode / Tech Branding Stripes */}
            <div className="mt-8 flex flex-col gap-1.5 opacity-60">
              <div className="h-2 w-20 bg-saffron rounded-sm"></div>
              <div className="h-1.5 w-12 bg-cream/40 rounded-sm"></div>
            </div>
          </div>

          {/* RIGHT SIDE: All Access Content (Connect Through The Airwaves) */}
          {/* Menggunakan md:col-span-9 untuk menyeimbangkan layout grid 14 agar lebih memanjang */}
          <div className="md:col-span-9 p-8 flex flex-col justify-between">
            <div>
              <span className="text-cream/40 font-lexend text-xs tracking-[0.25em] font-bold block mb-6 uppercase">
                ALL ACCESS — CONNECT THROUGH THE AIRWAVES
              </span>
              
              {/* Media Social Buttons Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="https://linkedin.com/in/desdjajamahesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cream/10 hover:border-saffron/40 hover:text-bright-cream hover:shadow-[0_0_15px_rgba(244,162,97,0.15)] transition-all font-julee text-cream/80 group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-cream/60 group-hover:text-saffron transition-colors" />
                    <span>LinkedIn</span>
                  </div>
                </Link>

                <Link 
                  href="https://github.com/desdjajamahesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cream/10 hover:border-saffron/40 hover:text-bright-cream transition-all font-julee text-cream/80 group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-cream/60 group-hover:text-saffron transition-colors" />
                    <span>GitHub</span>
                  </div>
                </Link>

                <Link 
                  href="https://instagram.com/desdjayamahesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cream/10 hover:border-saffron/40 hover:text-bright-cream transition-all font-julee text-cream/80 group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram size={18} className="text-cream/60 group-hover:text-saffron transition-colors" />
                    <span>Instagram</span>
                  </div>
                </Link>

                <Link 
                  href="mailto:desdjajamahesa@gmail.com"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cream/10 hover:border-saffron/40 hover:text-bright-cream transition-all font-julee text-cream/80 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cream/60 group-hover:text-saffron transition-colors" />
                    <span>Email</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Bottom Footer Metadata Pass Details */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-cream/30 font-lexend text-xs tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>Bandung · Indonesia</span>
              </div>
              <div>
                <span>© 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}