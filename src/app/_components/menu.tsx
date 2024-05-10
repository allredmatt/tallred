'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Menu = () => {
    const pathname = usePathname()

    return (
      <section className="bg-light flex-col md:flex-row flex items-center md:justify-between pl-6 pr-6 pt-16 pb-16 md:mp-12">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-red">
          Tallred
        </h1>
        <nav className="text-center md:text-left md:text-2xl text-xl mt-5 md:pl-8">
          <Link href={`/`} className={`hover:underline mr-3 ${pathname === '/' ? 'text-green' : ''}`}>
            Home
          </Link>
          <Link href={`/about`} className={`hover:underline mr-3 ${pathname === '/about' ? 'text-green' : ''}`}>
            About
          </Link>
          <Link href={`/contact`} className={`hover:underline mr-3 ${pathname === '/contact' ? 'text-green' : ''}`}>
            Contact
          </Link>
          <Link href={`/blog`} className={`hover:underline ${pathname === '/blog' ? 'text-green' : ''}`}>
            Blog
          </Link>
        </nav>
      </section>
    );
};

export default Menu;