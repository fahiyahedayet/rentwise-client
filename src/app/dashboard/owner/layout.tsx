
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  Menu,
  X,
  PlusCircle,
  Package,
  ClipboardList,
  UserRound,
  ArrowUpRight,
  LayoutDashboard,
} from "lucide-react";

const ownerLinks = [
  {
    name: "Add Equipment",
    href: "/dashboard/owner/add-equipment",
    icon: PlusCircle,
  },
  {
    name: "My Equipment",
    href: "/dashboard/owner/equipment",
    icon: Package,
  },
  {
    name: "My Equipment Rental",
    href: "/dashboard/owner/rentals",
    icon: ClipboardList,
  },
  {
    name: "My Profile",
    href: "/dashboard/owner/profile",
    icon: UserRound,
  },
];

export default function OwnerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPage =
    ownerLinks.find((link) => link.href === pathname)?.name ||
    "Owner Dashboard";

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F7F4]">
      <Navbar />

      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#E9E5DE] pb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-[#E9E5DE] bg-white p-2.5 text-[#1E2022] transition hover:bg-gray-100"
              aria-label="Open dashboard menu"
            >
              <Menu size={20} />
            </button>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#8A8178]">
                Owner Dashboard
              </p>
              <h1 className="text-xl font-bold text-[#1E2022] sm:text-2xl">
                {currentPage}
              </h1>
            </div>
          </div>

          <Link
            href="/equipment"
            className="hidden items-center gap-2 rounded-lg bg-[#1E2022] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black sm:flex"
          >
            Browse Equipment
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {sidebarOpen && (
        <>
          <button
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/40"
            aria-label="Close sidebar"
          />

          <aside className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#E9E5DE] px-6 py-5">
              <div>
                <p className="text-lg font-bold text-[#1E2022]">
                  Rentwise
                </p>
                <p className="text-xs text-[#8A8178]">
                  Owner Dashboard
                </p>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-[#77716B] hover:bg-gray-100"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-6">
              <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-[#8A8178]">
                Manage
              </p>

              {ownerLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#1E2022] text-white"
                        : "text-[#77716B] hover:bg-[#F8F7F4] hover:text-[#1E2022]"
                    }`}
                  >
                    <Icon size={19} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-[#E9E5DE] p-4">
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#77716B] transition hover:bg-[#F8F7F4] hover:text-[#1E2022]"
              >
                <LayoutDashboard size={19} />
                Back to Home
              </Link>
            </div>
          </aside>
        </>
      )}

      <main className="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
