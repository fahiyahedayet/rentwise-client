
"use client";

import { useState } from "react";

const categories = [
  "Construction",
  "Photography",
  "Vehicles",
  "Agriculture",
  "Tools & Machinery",
  "Electronics",
];

export default function EquipmentFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [rentalType, setRentalType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="rounded-xl border border-[#E9E5DE] bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>

        <button
          onClick={() => {
            setSelectedCategories([]);
            setAvailableOnly(false);
            setRentalType("All");
            setMaxPrice(10000);
          }}
          className="text-xs text-[#7D7872] hover:text-black"
        >
          Clear all
        </button>
      </div>

      {/* Category */}
      <div className="mt-7 border-t border-[#E9E5DE] pt-5">
        <h3 className="mb-4 text-sm font-semibold">Category</h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#625E58]"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="h-4 w-4 accent-[#1E2022]"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-7 border-t border-[#E9E5DE] pt-5">
        <h3 className="mb-4 text-sm font-semibold">Maximum Price</h3>

        <input
          type="range"
          min="500"
          max="10000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#1E2022]"
        />

        <div className="mt-3 flex justify-between text-xs text-[#7D7872]">
          <span>৳500</span>
          <span className="font-semibold text-[#1E2022]">
            ৳{maxPrice.toLocaleString("en-BD")}
          </span>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-7 border-t border-[#E9E5DE] pt-5">
        <h3 className="mb-4 text-sm font-semibold">Availability</h3>

        <label className="flex cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(e) => setAvailableOnly(e.target.checked)}
            className="h-4 w-4 accent-[#1E2022]"
          />
          Available only
        </label>
      </div>

      {/* Rental Type */}
      <div className="mt-7 border-t border-[#E9E5DE] pt-5">
        <h3 className="mb-4 text-sm font-semibold">Rental Type</h3>

        <select
          value={rentalType}
          onChange={(e) => setRentalType(e.target.value)}
          className="w-full rounded-lg border border-[#E9E5DE] bg-white p-3 text-sm outline-none"
        >
          <option value="All">All types</option>
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    </aside>
  );
}
