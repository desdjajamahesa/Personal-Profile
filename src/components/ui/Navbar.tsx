"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type NavbarProps = {
  links: { text: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [activeTab, setActiveTab] = useState(links[0].text);

  // --- LOGIC DETEKSI SCROLL DINAMIS (INTERSECTION OBSERVER) ---
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      // Mengambil ID dari URL (contoh: '#overture' menjadi 'overture')
      const targetId = link.url.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Jika section tersebut memenuhi 50% atau lebih dari viewport layar
              if (entry.isIntersecting) {
                setActiveTab(link.text);
              }
            });
          },
          {
            // rootMargin disesuaikan agar perpindahan mawar terasa pas saat pergantian section
            rootMargin: "-20% 0px -40% 0px",
            threshold: 0.2, // Trigger aktif ketika 20% bagian dari section terlihat di margin tersebut
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup observer saat komponen tidak lagi dirender
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [links]);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300
      p-4 md:p-6 2xl:p-8 
      font-julee text-base md:text-lg xl:text-xl 2xl:text-2xl 
      text-cream bg-transparent backdrop-blur-[2px]'>

      {/* --- SIDE CROSSING BEAMS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/2 -left-[5%] -translate-y-1/2 w-[60%] h-[300px] opacity-30 2xl:opacity-40 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at left center, rgba(255, 253, 240, 0.7) 0%, transparent 80%)',
            filter: 'blur(40px)',
            transform: 'rotate(10deg)', 
          }}
        />

        <div 
          className="absolute top-1/2 -right-[5%] -translate-y-1/2 w-[60%] h-[300px] opacity-30 2xl:opacity-40 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at right center, rgba(255, 253, 240, 0.7) 0%, transparent 80%)',
            filter: 'blur(40px)',
            transform: 'rotate(-10deg)',
          }}
        />
      </div>

      {/* List Menu */}
      <ul className='flex gap-4 md:gap-8 xl:gap-12 2xl:gap-16 justify-evenly items-center relative z-10'>
        {links.map((link, index) => {
          const isActive = activeTab === link.text;

          return (
            <li key={index} className="relative flex flex-col items-center font-bold">
              <Link 
                href={link.url}
                onClick={() => setActiveTab(link.text)}
                className={`transition-all duration-300 tracking-widest ${
                  isActive 
                    ? 'text-bright-cream scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' 
                    : 'text-cream/50 hover:text-cream/80 hover:-translate-y-1'
                }`}
              >
                {link.text}
              </Link>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeRose"
                    className="absolute -bottom-8 2xl:-bottom-10 flex justify-center items-center" 
                    initial={false}
                    transition={{
                      layout: { 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 25, 
                        mass: 3 
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
                        width={40}
                        height={40}
                        className="w-8 xl:w-10 2xl:w-14 drop-shadow-[0_0_7px_rgba(255,0,0,0.6)] object-contain transition-all duration-300"
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