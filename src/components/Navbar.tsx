/**
 * Initialized : 10 Januari 2026 06:22
 * Last Update : 10 Januari 2026 
 */

import React from 'react';
import Link from 'next/link';

// Define the type for the Navbar props
type NavbarProps = {
  links: {text: string; url: string}[];
}

const Navbar: React.FC<NavbarProps> = ({links}) => {
  return (
    <nav className='font-lexend text-cream p-4 bg-[#1A1A1A] border-b-2 border-olive'>
      <ul className='flex gap-6 justify-evenly'>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className='hover:text-saffron font-semibold transition'>
            {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;