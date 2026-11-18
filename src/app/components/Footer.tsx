
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-9 border-b border-[#E9E5DE] pb-10 sm:gap-10 lg:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              rentwise<span className="text-[#7D7872]">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#7D7872]">
              Rent the equipment you need. Earn from the equipment you own.
              A smarter way to share resources.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3 text-xs text-[#7D7872] sm:text-sm">
              <li>
                <Link href="/equipment" className="transition hover:text-black">
                  Browse Equipment
                </Link>
              </li>
              <li>
                <Link href="/categories" className="transition hover:text-black">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition hover:text-black">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Owners */}
          <div>
            <h3 className="text-sm font-semibold">For Owners</h3>

            <ul className="mt-5 space-y-3 text-xs text-[#7D7872] sm:text-sm">
              <li>
                <Link href="/register" className="transition hover:text-black">
                  List Equipment
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="transition hover:text-black">
                  Owner Dashboard
                </Link>
              </li>
              <li>
                <Link href="/help" className="transition hover:text-black">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-5 space-y-3 text-xs text-[#7D7872] sm:text-sm">
              <li>
                <Link href="/about" className="transition hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-[#7D7872] sm:flex-row sm:items-center">
          <p>© 2026 Rentwise. All rights reserved.</p>
          <p>Made for smarter renting.</p>
        </div>
      </div>
    </footer>
  );
}
