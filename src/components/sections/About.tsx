"use client";

import React from "react";
import GlassCard from "../ui/GlassCard";
import { BrainCircuit, Server, Gamepad2, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden py-8 md:py-12">
      
      {/* Container utama dengan batas lebar compact agar terpusat sempurna */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 z-10 w-full max-w-4xl transition-all duration-300">
        
        {/* GlassCard Tunggal Utama - Fokus Penuh pada Konten Re-branded */}
        <GlassCard className="w-full px-6 md:px-10 py-6 md:py-8 flex flex-col gap-6 border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden bg-white/[0.01]">
          
          {/* 1. TOP HEADER: Penataan Nama & Badges Secara Horizontal Sempurna */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5 w-full">
            <div className="shrink-0">
              <h3 className="text-bright-cream font-cinzel text-xl md:text-2xl lg:text-3xl font-bold tracking-widest leading-none whitespace-nowrap">
                DES DJAJA MAHESA
              </h3>
            </div>

            {/* Role Badges yang Ringkas */}
            <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end">
              {["AI Engineer", "Backend Developer", "Game Developer"].map((role, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-cream/70 text-[9px] lg:text-[10px] font-lexend font-bold tracking-widest uppercase whitespace-nowrap">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* 2. MIDDLE BLOCK: Biography dengan Keleluasaan Membaca Maksimal */}
          <div className="w-full space-y-3">
            <h4 className="text-saffron font-lexend text-[10px] tracking-[0.25em] font-bold uppercase opacity-80">
              BIOGRAPHY
            </h4>
            <div className="space-y-4">
              <p className="text-cream/90 font-julee leading-relaxed text-sm lg:text-base text-justify">
                I am a software engineer driven by the art of digital engineering, focusing on three core pillars: intelligent systems, robust backend logic, and immersive gameplay mechanics. I approach software development not just as writing code, but as building scalable blueprints where complex data processing and interactive virtual environments can thrive in flawless synchronization.
              </p>
              <p className="text-cream/70 font-julee leading-relaxed text-sm lg:text-base text-justify">
                With a deep interest in artificial intelligence and systems architecture, I specialize in designing clean, high-performance web structures and engineering end-to-end backend solutions. My focus is to continuously push boundaries—orchestrating complex systems that turn architectural visions into responsive and impactful digital realities.
              </p>
            </div>
          </div>

          {/* 3. BOTTOM BLOCK: Program / Core Focus (Grid 2 Kolom yang Seimbang) */}
          <div className="w-full space-y-4 pt-2">
            <h4 className="text-saffron font-lexend text-[10px] tracking-[0.25em] font-bold uppercase opacity-80">
              PROGRAM / CORE FOCUS
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                { icon: <BrainCircuit size={16} />, label: "AI & Machine Learning" },
                { icon: <Server size={16} />, label: "Backend Systems Architecture" },
                { icon: <Gamepad2 size={16} />, label: "Gameplay & Mechanics Dev" },
                { icon: <Layers size={16} />, label: "Modern Web Architecture" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-saffron/20 transition-all group">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-cream/40 group-hover:text-saffron transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-lexend text-[11px] lg:text-xs tracking-wide text-cream/80 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </GlassCard>

      </div>
    </section>
  );
}