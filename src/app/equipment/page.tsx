
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EquipmentCard from "../components/EquipmentCard";
import EquipmentFilters from "../components/EquipmentFilters";

const equipment = [
  {
    id: 1,
    name: "Professional Excavator",
    category: "Construction",
    location: "Dhaka",
    price: 8500,
    rentalType: "Daily",
    available: true,
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=900&q=85",
    createdAt: "2026-11-15",
    popularity: 95,
  },
  {
    id: 2,
    name: "Canon EOS R6 Camera",
    category: "Photography",
    location: "Chattogram",
    price: 2500,
    rentalType: "Daily",
    available: true,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
    createdAt: "2026-11-10",
    popularity: 80,
  },
  {
    id: 3,
    name: "Heavy Duty Tractor",
    category: "Agriculture",
    location: "Sylhet",
    price: 5000,
    rentalType: "Weekly",
    available: false,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=85",
    createdAt: "2026-11-17",
    popularity: 60,
  },
];

export default function EquipmentPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [rentalType, setRentalType] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  // Step 1: Filter equipment
  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const matchesPrice = item.price <= maxPrice;

    const matchesAvailability =
      !availableOnly || item.available;

    const matchesRentalType =
      rentalType === "All" || item.rentalType === rentalType;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesAvailability &&
      matchesRentalType
    );
  });

  // Step 2: Sort filtered equipment
  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case "PriceLow":
        return a.price - b.price;

      case "PriceHigh":
        return b.price - a.price;

      case "Newest":
        return (
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
        );

      case "Popular":
        return b.popularity - a.popularity;

      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
        <p className="text-xs text-[#7D7872]">
          <Link href="/">Home</Link> / Equipment
        </p>

        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
          Find the right equipment.
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#7D7872]">
          Find everything you need for your next project.
        </p>

        {/* Search Bar */}
        <div className="mt-9 flex items-center gap-3 rounded-xl border border-[#E9E5DE] bg-white p-4">
          <Search size={20} className="text-[#7D7872]" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search equipment by name or category..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

       {/* Heading + Sorting */}
<div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
  <div>
    <h2 className="text-xl font-semibold">
      Available Equipment
    </h2>

    <p className="mt-1 text-xs text-[#7D7872]">
      {filteredEquipment.length} items found
    </p>
  </div>

  <div className="flex items-center gap-3">
    <label
      htmlFor="sort"
      className="whitespace-nowrap text-sm text-[#7D7872]"
    >
      Sort by:
    </label>

    <select
      id="sort"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
    >
      <option value="Featured">Featured</option>
      <option value="PriceLow">Price: Low to High</option>
      <option value="PriceHigh">Price: High to Low</option>
      <option value="Newest">Newest First</option>
      <option value="Popular">Popularity</option>
    </select>
  </div>
</div>

        {/* Filters + Equipment Grid */}
        <div className="mt-8 grid grid-cols-1 items-start gap-7 lg:grid-cols-[260px_1fr]">
          <EquipmentFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            availableOnly={availableOnly}
            setAvailableOnly={setAvailableOnly}
            rentalType={rentalType}
            setRentalType={setRentalType}
          />

          <div className="grid grid-cols-1 content-start gap-6 sm:grid-cols-2">
            {sortedEquipment.length > 0 ? (
              sortedEquipment.map((item) => (
                <EquipmentCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  category={item.category}
                  location={item.location}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <div className="col-span-full rounded-xl border border-[#E9E5DE] bg-white p-10 text-center">
                <h3 className="font-semibold">
                  No equipment found
                </h3>

                <p className="mt-2 text-sm text-[#7D7872]">
                  Try changing your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
