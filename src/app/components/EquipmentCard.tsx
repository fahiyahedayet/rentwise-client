
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, ArrowUpRight } from "lucide-react";

interface EquipmentCardProps {
  id: number;
  name: string;
  category: string;
  location: string;
  price: number;
  image: string;
}

export default function EquipmentCard({
  id,
  name,
  category,
  location,
  price,
  image,
}: EquipmentCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#E9E5DE] bg-white transition hover:-translate-y-1">

      <div className="relative h-56 overflow-hidden bg-[#E9E5DE]">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover transition duration-500 hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold">
          {category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-[#7D7872]">
            <MapPin size={14} />
            {location}
          </span>

          <span className="flex items-center gap-1 text-xs font-semibold">
            <Star size={14} fill="#B49B69" stroke="#B49B69" />
            4.9
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          {name}
        </h3>

        <div className="mt-5 flex items-center justify-between border-t border-[#E9E5DE] pt-5">
          <p className="text-lg font-semibold">
            ৳{price.toLocaleString("en-BD")}
            <span className="text-xs font-normal text-[#7D7872]">
              /day
            </span>
          </p>

          <Link
            href={`/equipment/${id}`}
            className="flex items-center gap-2 rounded-lg border border-[#E9E5DE] px-4 py-2.5 text-xs font-semibold transition hover:bg-[#1E2022] hover:text-white"
          >
            Details
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
