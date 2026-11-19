
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Heart,
  UserRound,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    name: "My Rentals",
    href: "/dashboard/customer/rentals",
    icon: CalendarDays,
  },
  {
    name: "Favorites",
    href: "/dashboard/customer/favorites",
    icon: Heart,
  },
  {
    name: "Profile",
    href: "/dashboard/customer/profile",
    icon: UserRound,
  },
];

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[#E9E5DE] bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-[#E9E5DE] px-7">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            rentwise<span className="text-[#8A8177]">.</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="px-5 py-7">
          <p className="mb-4 px-3 text-xs font-semibold tracking-widest text-[#999187]">
            CUSTOMER MENU
          </p>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#1E2022] text-white"
                      : "text-[#77716B] hover:bg-[#F8F7F4] hover:text-[#1E2022]"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                  {active && <ChevronRight size={16} className="ml-auto" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-[#E9E5DE] p-5">
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#F8F7F4] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9E5DE]">
              <UserRound size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Customer</p>
              <p className="text-xs text-[#999187]">Customer Account</p>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#8B4438] hover:text-[#6E3027]"
          >
            <LogOut size={18} />
            Back to Home
          </Link>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#E9E5DE] bg-white px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-[#F8F7F4] lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-xs text-[#999187]">Customer Dashboard</p>
              <h1 className="text-lg font-bold">
                {navigation.find((item) => item.href === pathname)?.name ||
                  "Dashboard"}
              </h1>
            </div>
          </div>

          <Link
            href="/equipment"
            className="flex items-center gap-2 rounded-xl bg-[#1E2022] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#34414A]"
          >
            <LayoutDashboard size={17} />
            <span className="hidden sm:inline">Browse Equipment</span>
            <span className="sm:hidden">Browse</span>
          </Link>
        </header>

        {children}
      </div>
    </div>
  );
}
