"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

type NavbarProps = {
  links: {text: string; url: string}[];
}

const Navbar: React.FC<NavbarProps> = ({links}) => {
  const [activeTab, setActiveTab] = useState(links[0].text);
  
  return (
    <nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300
      /* Padding: p-4 di HP, p-6 di Laptop, p-8 di Monitor */
      p-4 md:p-6 2xl:p-8 
      /* Font Size: text-lg di Laptop (xl), text-2xl di Monitor (2xl) */
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

      {/* List Menu dengan gap yang dinamis */}
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
                    /* Posisi mawar disesuaikan agar tidak menabrak teks di resolusi besar */
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
                        /* Ukuran mawar juga ikut scaling */
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