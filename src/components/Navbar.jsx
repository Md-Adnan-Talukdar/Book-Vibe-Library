
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Books' },
  { href: '/listed-books', label: 'Listed Books' },
  { href: '/read-books', label: 'Read Books' },
];

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`rounded-full px-5 py-2 text-base font-semibold transition duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-300 to-orange-500 text-[#1a1205] shadow-lg shadow-amber-500/30'
                  : 'text-white/70 hover:bg-white/10 hover:text-amber-300'
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0c14]/80 backdrop-blur-xl">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-full border border-white/10 text-white hover:border-amber-400/40 hover:bg-white/10 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-4 w-56 gap-1 rounded-2xl border border-white/10 bg-[#10131f] p-3 shadow-2xl shadow-black/60"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="group ml-1 flex items-center gap-2.5 rounded-full px-2 py-1 transition hover:bg-white/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 shadow-lg shadow-amber-500/20 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Image
                src="/book.ico"
                alt="Book Vibe Logo"
                width={26}
                height={26}
              />
            </span>

            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
              Book Vibe
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="btn rounded-full border border-white/20 bg-transparent px-6 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-300">
            Sign in
          </button>

          <button className="btn rounded-full border-0 bg-gradient-to-r from-amber-300 to-orange-500 px-6 font-bold text-[#1a1205] shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
