/**
 * Initialized : 10 Januari 2026 06:22
 * Last Update : 10 Januari 2026 
 */

"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

// Define the type for the Navbar props
type NavbarProps = {
  links: {text: string; url: string}[];
}

const Navbar: React.FC<NavbarProps> = ({links}) => {
  const [activeTab, setActiveTab] = useState(links[0].text);
  return (
    <nav className='fixed top-0 left-0 w-full z-50 p-6 font-julee text-xl text-cream bg-transparent backdrop-blur-[2px]'>

      {/* --- SIDE CROSSING BEAMS --- */}
      {/* Container ini kita kasih z-0 agar di bawah teks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Beam Kiri - Dibuat lebih kontras */}
        <div 
          className="absolute top-1/2 -left-[5%] -translate-y-1/2 w-[60%] h-[300px] opacity-40 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at left center, rgba(255, 253, 240, 0.7) 0%, transparent 80%)',
            filter: 'blur(40px)',
            transform: 'rotate(10deg)', 
          }}
        />

        {/* Beam Kanan - Dibuat lebih kontras */}
        <div 
          className="absolute top-1/2 -right-[5%] -translate-y-1/2 w-[60%] h-[300px] opacity-40 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at right center, rgba(255, 253, 240, 0.7) 0%, transparent 80%)',
            filter: 'blur(40px)',
            transform: 'rotate(-10deg)',
          }}
        />
      </div>

      <ul className='flex gap-6 justify-evenly'>
        {links.map((link, index) => {
          const isActive = activeTab === link.text;

          return (
          <li key={index} className="relative flex flex-col items-center font-bold">
            <Link 
            href={link.url}
            onClick={() => setActiveTab(link.text)}
            className={`transition-all duration-300 tracking-widest ${
              isActive ? 'text-bright-cream scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]' : 'text-cream/50 hover:-translate-y-1'
            }`}
            >
            {link.text}
            </Link>

            <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeRose"
                    className="absolute -bottom-8 flex justify-center items-center" 
                    initial={false} // Mencegah mawar "lahir" dari nol setiap pindah
                    transition={{
                      layout: { 
                        type: "spring", 
                        stiffness: 100, // Diperkecil agar lebih lambat
                        damping: 25,    // Ditambah agar lebih smooth/ayun
                        mass: 3       // Memberi kesan "berat" yang mewah
                      }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.075, 1],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Image
                        src="/images/roses.png"
                        alt="active-indicator"
                        width={50}
                        height={50}
                        className="drop-shadow-[0_0_7px_rgba(255,0,0,0.6)] object-contain"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;