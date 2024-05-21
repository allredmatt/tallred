'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

const Menu = () => {
    const pathname = usePathname()

    return (
      <>
      <section className="md:fixed md:top-0 md:left-0 md:right-0 bg-logo-red flex-col md:flex-row flex items-center md:justify-between pl-6 pr-6 pt-2 pb-2 md:mp-12">
        <Image 
          alt="Tall Red Company Logo"
          src="/icons/whole-logo.png"
          width={150}
          height={150}
          priority={true}
        />
        <nav className="text-center md:text-left md:text-2xl text-xl mt-5 md:pl-8 text-logo-white">
          <Link href={`/`} className={`hover:underline mr-3 ${pathname === '/' ? 'text-selected' : ''}`}>
            Services
          </Link>
          <Link href={`/about`} className={`hover:underline mr-3 ${pathname === '/about' ? 'text-selected' : ''}`}>
            About
          </Link>
          <Link href={`/holding`} className={`hover:underline mr-3 ${pathname === '/blog' ? 'text-selected' : ''}`}>
            Blog
          </Link>
          <Link href={`/contact`} className={`hover:underline mr-3 ${pathname === '/contact' ? 'text-selected' : ''}`}>
            Contact
          </Link>
        </nav>
      </section>
      <div className="h-0 md:h-32"></div>{/*Needed here to make page lower if the menu is fixed position*/}
      </>
    );
};

export default Menu;