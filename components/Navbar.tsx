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
    <nav className='font-lexend p-4 bg-dark border-b-2 border-gray-900'>
      <ul className='flex gap-6 justify-evenly'>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className='hover:text-gray-500 font-semibold transition'>
            {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;