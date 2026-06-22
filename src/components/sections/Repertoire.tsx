"use client";

import React from "react";
import GlassCard from "../ui/GlassCard";
import { Layout, Cpu, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "THE MELODIC STRINGS",
    subtitle: "Frontend & UI/UX",
    roman: "I",
    icon: <Layout className="text-bright-cream w-6 h-6" />,
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "THE DEEP BRASS",
    subtitle: "AI & Data Processing",
    roman: "II",
    icon: <Cpu className="text-bright-cream w-6 h-6" />,
    skills: ["Python", "Transformer Models", "OpenCV", "EEG Data Processing"],
  },
  {
    title: "THE PERCUSSIONS",
    subtitle: "Game Development",
    roman: "III",
    icon: <Gamepad2 className="text-bright-cream w-6 h-6" />,
    skills: ["Unity", "C#", "C++", "Yarn Spinner"],
  },
];

// Varian animasi Framer Motion untuk efek muncul berurutan (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 } as const,
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Repertoire() {
  const [movement1, movement2, movement3] = skillCategories;

  return (
    <section id="repertoire" className="relative min-h-screen w-full bg-transparent py-24 flex flex-col justify-center">
      {/* Background Subtle Lines (Paranada Dekoratif) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-5 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-cream" />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-20 relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="flex justify-center items-center gap-2 mb-2 text-cream/30 font-lexend text-xs tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-cream/20"></span>
            <span>THE INSTRUMENTS I PLAY</span>
            <span className="w-8 h-[1px] bg-cream/20"></span>
          </div>
          <h2 className="text-bright-cream font-cinzel text-3xl md:text-5xl tracking-[0.3em] font-bold mb-4 uppercase">REPERTOIRE</h2>
          <p className="text-cream/50 font-julee italic">The instruments I play to create digital harmony.</p>
        </div>

        {/* Outer Masonry Layout Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* LEFT COLUMN: MOVEMENT I (Tinggi Penuh / Vertikal) */}
          <motion.div className="md:col-span-5 h-full" variants={cardVariants}>
            <GlassCard className="h-full p-8 hover:border-saffron/40 hover:shadow-[0_0_25px_rgba(244,162,97,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group min-h-[450px]">
              {/* Giant Roman Number Watermark */}
              <span className="absolute right-6 bottom-4 font-cinzel text-9xl font-black text-white/[0.02] group-hover:text-saffron/[0.04] select-none pointer-events-none transition-colors duration-500">{movement1.roman}</span>

              <div>
                <span className="font-lexend text-[10px] tracking-[0.25em] text-saffron font-bold block mb-2">MOVEMENT I</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-saffron/30 transition-colors">{movement1.icon}</div>
                  <div>
                    <h3 className="text-bright-cream font-cinzel text-xl font-bold tracking-wide">{movement1.title}</h3>
                    <span className="text-[10px] tracking-[0.15em] text-cream/40 uppercase block mt-0.5">{movement1.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Badges Container: Mengisi ruang bawah secara vertikal */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {movement1.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={badgeVariants}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-cream/80 text-sm font-lexend tracking-wide hover:bg-cream/10 hover:text-bright-cream hover:border-cream/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT COLUMN: MOVEMENT II & III (Ditumpuk Vertikal) */}
          <div className="md:col-span-7 flex flex-col gap-8 justify-between">
            {/* MOVEMENT II */}
            <motion.div variants={cardVariants} className="h-full">
              <GlassCard className="h-full p-8 hover:border-saffron/40 hover:shadow-[0_0_25px_rgba(244,162,97,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group min-h-[210px]">
                <span className="absolute right-6 bottom-2 font-cinzel text-9xl font-black text-white/[0.02] group-hover:text-saffron/[0.04] select-none pointer-events-none transition-colors duration-500">{movement2.roman}</span>

                <div>
                  <span className="font-lexend text-[10px] tracking-[0.25em] text-saffron font-bold block mb-2">MOVEMENT II</span>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-saffron/30 transition-colors">{movement2.icon}</div>
                    <div>
                      <h3 className="text-bright-cream font-cinzel text-xl font-bold tracking-wide">{movement2.title}</h3>
                      <span className="text-[10px] tracking-[0.15em] text-cream/40 uppercase block mt-0.5">{movement2.subtitle}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-4">
                  {movement2.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={badgeVariants}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-cream/80 text-sm font-lexend tracking-wide hover:bg-cream/10 hover:text-bright-cream hover:border-cream/30 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* MOVEMENT III */}
            <motion.div variants={cardVariants} className="h-full">
              <GlassCard className="h-full p-8 hover:border-saffron/40 hover:shadow-[0_0_25px_rgba(244,162,97,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group min-h-[210px]">
                <span className="absolute right-6 bottom-2 font-cinzel text-9xl font-black text-white/[0.02] group-hover:text-saffron/[0.04] select-none pointer-events-none transition-colors duration-500">{movement3.roman}</span>

                <div>
                  <span className="font-lexend text-[10px] tracking-[0.25em] text-saffron font-bold block mb-2">MOVEMENT III</span>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-saffron/30 transition-colors">{movement3.icon}</div>
                    <div>
                      <h3 className="text-bright-cream font-cinzel text-xl font-bold tracking-wide">{movement3.title}</h3>
                      <span className="text-[10px] tracking-[0.15em] text-cream/40 uppercase block mt-0.5">{movement3.subtitle}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-4">
                  {movement3.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={badgeVariants}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-cream/80 text-sm font-lexend tracking-wide hover:bg-cream/10 hover:text-bright-cream hover:border-cream/30 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
