
import Image from "next/image";
import { Heart, MapPin, ArrowUpRight, Trash2 } from "lucide-react";

const favorites = [
  {
    id: 1,
    name: "Professional Excavator",
    category: "Construction",
    location: "Dhaka, Bangladesh",
    price: 2500,
    rentalType: "day",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=800",
  },
  {
    id: 2,
    name: "Industrial Generator",
    category: "Power Equipment",
    location: "Chattogram, Bangladesh",
    price: 1800,
    rentalType: "day",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
  },
  {
    id: 3,
    name: "Concrete Mixer",
    category: "Construction",
    location: "Dhaka, Bangladesh",
    price: 1200,
    rentalType: "day",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
];

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-[#8A8178]">
          Customer Dashboard / Favorites
        </p>

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-2xl font-bold text-[#1E2022] sm:text-3xl">
              My Favorites
            </h1>
            <p className="mt-2 text-sm text-[#77716B]">
              Your saved equipment, all in one place.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#77716B]">
            <Heart size={17} className="text-red-500" />
            <span>{favorites.length} Saved Items</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[#E9E5DE] bg-white transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-52 bg-[#F5F3EF]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                unoptimized
              />

              <button
                type="button"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition hover:bg-red-50"
                aria-label="Remove from favorites"
              >
                <Heart size={19} fill="currentColor" />
              </button>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <span className="rounded-full bg-[#F5F3EF] px-3 py-1 text-xs font-medium text-[#77716B]">
                  {item.category}
                </span>

                <h2 className="mt-3 text-lg font-bold text-[#1E2022]">
                  {item.name}
                </h2>

                <p className="mt-2 flex items-center gap-1.5 text-sm text-[#8A8178]">
                  <MapPin size={15} />
                  {item.location}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#E9E5DE] pt-4">
                <div>
                  <p className="text-xs text-[#8A8178]">Rental Price</p>
                  <p className="mt-1 text-lg font-bold text-[#1E2022]">
                    ৳{item.price.toLocaleString()}
                    <span className="text-xs font-normal text-[#8A8178]">
                      /{item.rentalType}
                    </span>
                  </p>
                </div>

                <a
                  href={`/equipment/${item.id}`}
                  className="flex items-center gap-2 rounded-xl bg-[#1E2022] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#383B3D]"
                >
                  View Details
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
