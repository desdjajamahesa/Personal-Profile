'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MusicParticles() {
  const [particles, setParticles] = useState<any[]>([]);
  const musicNotes = ["♪", "♫", "♬", "♩", "∮"];

  useEffect(() => {
    // Generate data hanya di Client Side
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 7,
      delay: Math.random() * 10,
      note: musicNotes[Math.floor(Math.random() * musicNotes.length)]
    }));
    setParticles(newParticles);
  }, []);

  // Selama partikel kosong (saat SSR), jangan render apa-apa dulu
  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: -20, left: p.left, opacity: 0, rotate: 0 }}
          animate={{ 
            top: '110%', 
            opacity: [0, 0.4, 0.4, 0], 
            rotate: 360 
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: p.delay 
          }}
          className="absolute text-bright-cream/30 font-serif text-xl"
        >
          {p.note}
        </motion.div>
      ))}
    </div>
  );
}