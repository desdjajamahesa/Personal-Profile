"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/5 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        {/* Nama lengkap kamu sebagai kredit utama */}
        <p className="text-cream/30 font-julee text-sm tracking-[0.2em] uppercase">
          © 2026 DES DJAJA MAHESA. COMPOSED WITH NEXT.JS & HARMONY.
        </p>
      </div>
    </footer>
  );
}