"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button =({ children, onClick, variant = 'primary', className }: ButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      onClick={onClick}
      whileHover="hover" // Trigger animasi children saat hover
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden group px-8 py-3 rounded-full
        font-julee tracking-widest text-sm transition-all duration-500
        ${isPrimary
          ? 'bg-transparent text-bright-cream border-2 border-bright-cream/50 shadow-[0_0_15px_rgba(255,253,240,0.1)]'
          : 'bg-transparent text-cream/80 border-2 border-cream/20'
        }
        ${className}
      `}
    >
      {/* 1. Efek Background Fill yang Elegan (Sperti air/tinta mengalir) */}
      <motion.div
        variants={{
          hover: { x: '100%' }
        }}
        initial={{ x: '-100%' }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className={`
          absolute inset-0 z-0
          ${isPrimary ? 'bg-bright-cream' : 'bg-cream/10'}
        `}
      />

      {/* 2. Teks yang berubah warna saat background mengisi */}
      <span className={`
        relative z-10 transition-colors duration-500
        ${isPrimary 
            ? 'group-hover:text-white'
            : 'group-hover:text-bright-cream'
        }
      `}>
        {children}
      </span>

      {/* 3. Aura Cahaya (Glow) di pinggiran saat hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] pointer-events-none" />
      
    </motion.button>
  );
};

export default Button;