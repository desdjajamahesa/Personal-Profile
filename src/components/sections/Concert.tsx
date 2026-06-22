"use client";

import React from "react";
import Image from "next/image";
import GlassCard from "../ui/GlassCard";
import { Github, ExternalLink, Trophy, Layers, Brain, Gamepad2 } from "lucide-react";

const performances = [
  {
    title: "MindSync: EEG Sleep Monitoring",
    category: "AI & Neurotechnology",
    description: "Proyek riset yang berhasil mendapatkan pendanaan dari Dirjen Dikti. Menggunakan model Transformer untuk klasifikasi tahap tidur berdasarkan sinyal EEG dan diintegrasikan ke dalam Unity.",
    tech: ["Python", "Transformer", "Unity"],
    isHighlighted: true,
    icon: <Brain className="text-bright-cream" />,
    link: "#",
  },
  {
    title: "Spectra: Color Blindness Assistant",
    category: "Mobile Application / Thesis",
    description: "Aplikasi mobile yang dikembangkan untuk membantu individu penyandang buta warna dalam mengidentifikasi warna secara real-time melalui kamera.",
    tech: ["React Native", "OpenCV"],
    icon: <Layers className="text-bright-cream" />,
    link: "#",
  },
  {
    title: "Tethered Duality",
    category: "2.5D Puzzle Game",
    description: "Game bertema 'masks' yang dikembangkan untuk Global Game Jam. Menekankan mekanik puzzle yang unik dalam ruang 2.5 dimensi.",
    tech: ["Unity", "C#"],
    icon: <Gamepad2 className="text-bright-cream" />,
    link: "#",
  },
  {
    title: "Nelangsa Dialogue System",
    category: "Game Programming (Professional)",
    description: "Implementasi sistem dialog bercabang menggunakan Yarn Spinner di Unity sebagai outsourced programmer.",
    tech: ["Unity", "Yarn Spinner"],
    icon: <Gamepad2 className="text-bright-cream" />,
    link: "#",
  },
  {
    title: "MoodMate",
    category: "Mental Health Platform",
    description: "Platform journaling yang mencakup fitur mood profiling dan pelacakan suasana hati harian untuk keseimbangan emosional.",
    tech: ["Next.js", "Firebase"],
    icon: <Layers className="text-bright-cream" />,
    link: "#",
  },
];

export default function Concert() {
  return (
    <section id="concert" className="relative min-h-screen w-full bg-transparent py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cream/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-bright-cream font-cinzel text-3xl md:text-5xl tracking-[0.4em] font-bold mb-4 uppercase">THE CONCERT</h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-cream/60 to-transparent"></div>
          <p className="text-cream/50 font-julee mt-6 max-w-xl text-lg">A showcase of digital symphonies, where code and creativity perform in perfect sync.</p>
        </div>

        {/* Performances Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {performances.map((perf, index) => (
            <GlassCard
              key={index}
              className={`group flex flex-col justify-between border-cream/20 hover:border-cream/50 transition-all duration-700 
                ${perf.isHighlighted ? "lg:col-span-2 border-bright-cream/30" : ""}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10">{perf.icon}</div>
                    <div>
                      <h3 className="text-bright-cream font-cinzel text-xl md:text-2xl font-bold tracking-wide">{perf.title}</h3>
                      <p className="text-[10px] tracking-[0.2em] text-cream/40 uppercase">{perf.category}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="text-cream/40 hover:text-bright-cream transition-colors">
                      <Github size={22} />
                    </a>
                    <a href="#" className="text-cream/40 hover:text-bright-cream transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <p
                  className={`text-cream/70 font-julee leading-relaxed mb-8 text-justify 
                  ${perf.isHighlighted ? "text-lg md:text-xl" : "text-sm md:text-base"}`}
                >
                  {perf.description}
                </p>
              </div>

              {/* Footer Card: Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {perf.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1 bg-cream/5 border border-cream/10 rounded-full text-[10px] md:text-xs text-cream/60 font-julee tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlight Badge */}
              {perf.isHighlighted && (
                <div className="absolute -top-3 -right-3 bg-bright-cream text-charcoal px-4 py-1 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg animate-pulse">
                  <Trophy size={12} /> FEATURED PERFORMANCE
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
