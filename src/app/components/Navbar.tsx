
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E5DE] bg-[#F8F7F4]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          rentwise<span className="text-[#7D7872]">.</span>
        </Link>

        <div className="hidden items-center gap-9 text-sm font-medium text-[#55514D] md:flex">
          <Link href="/" className="text-[#1E2022]">Home</Link>
          <Link href="/equipment" className="transition hover:text-black">
            Browse Equipment
          </Link>
          <Link href="/about" className="transition hover:text-black">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-black">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/login" className="px-4 py-2.5 text-sm font-semibold">
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2B3A4A]"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-[#E9E5DE] p-2 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E9E5DE] bg-[#F8F7F4] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5 text-sm font-medium text-[#55514D]">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/equipment" onClick={() => setIsOpen(false)}>
              Browse Equipment
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-[#1E2022] px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
