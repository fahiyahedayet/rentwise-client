
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const equipment = [
  {
    id: 1,
    name: "Professional Excavator",
    category: "Construction",
    location: "Dhaka",
    price: 8500,
    rentalType: "Daily",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=900&q=85",
  },
  {
    id: 2,
    name: "Canon EOS R6 Camera",
    category: "Photography",
    location: "Chattogram",
    price: 2500,
    rentalType: "Daily",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
  },
  {
    id: 3,
    name: "Heavy Duty Tractor",
    category: "Agriculture",
    location: "Sylhet",
    price: 5000,
    rentalType: "Daily",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=85",
  },
];

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
        <p className="text-xs text-[#7D7872]">
          <Link href="/">Home</Link> / Equipment
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7D7872]">
            Explore our collection
          </p>

          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Find the right equipment.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#7D7872]">
            From professional machinery to everyday essentials,
            find everything you need for your next project.
          </p>
        </div>

        <div className="mt-9 flex items-center gap-3 rounded-xl border border-[#E9E5DE] bg-white p-4">
          <Search size={20} className="text-[#7D7872]" />

          <input
            type="text"
            placeholder="Search equipment by name or category..."
            className="w-full bg-transparent text-sm outline-none"
          />

          <button className="rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-medium text-white">
            Search
          </button>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Available Equipment
            </h2>

            <p className="mt-1 text-xs text-[#7D7872]">
              {equipment.length} items found
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-[#E9E5DE] bg-white px-4 py-3 text-sm">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
