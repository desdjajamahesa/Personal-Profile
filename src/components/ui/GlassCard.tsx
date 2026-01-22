"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      // Penyesuaian 1: Efek naik sedikit & Glow saat Hover
      whileHover={{ 
        y: -8, 
        borderColor: "rgba(255, 253, 240, 0.4)",// Border jadi lebih putih cerah
        boxShadow: "0 0 40px 5px rgba(255, 253, 240, 0.15)" // Pendaran putih di area luar card
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        // Transisi khusus hover agar terasa "snappy" tapi tetap smooth
        y: { type: "spring", stiffness: 225, damping: 25 } 
      }}
      className={`
        relative overflow-hidden
        bg-cream/[0.03] backdrop-blur-xl
        /* Penyesuaian 2: Border awal sedikit lebih tebal & transisi warna */
        border-[1px] md:border-2 border-cream/60 rounded-[1.5rem] rounded-[2rem]
        shadow-[20px_20px_50px_rgba(0,0,0,0.5)]
        transition-colors duration-500
        ${className}
      `}
    >
      {/* Penyesuaian 3: Inner Glow di pojok atas agar tekstur kaca lebih hidup */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      
      {/* Efek kilatan statis di background (tetap dari kode lama tapi diperhalus) */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle, rgba(255,255,255,0.02)_0%, transparent_60%)] pointer-events-none" />

      <div className="relative z-10 p-1 md:p-8 xl:p-10 2xl:p-14 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;