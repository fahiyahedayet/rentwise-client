import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, CheckCircle2, XCircle } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { equipment } from "../../lib/equipment";

// Generate routes for existing equipment
export function generateStaticParams() {
  return equipment.map((item) => ({
    id: String(item.id),
  }));
}
export const instant = false;

export default async function EquipmentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const itemId = Number(id);

  const item = equipment.find(
    (equipment) => equipment.id === itemId
  );

  if (!item) {
    return (
      <main className="min-h-screen bg-[#F8F7F4]">
        <Navbar />

        <section className="mx-auto max-w-7xl px-5 py-24 text-center">
          <h1 className="text-3xl font-semibold">
            Equipment Not Found
          </h1>

          <p className="mt-3 text-sm text-[#7D7872]">
            The equipment you are looking for does not exist.
          </p>

          <Link
            href="/equipment"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#1E2022] px-6 py-3 text-sm text-white"
          >
            <ArrowLeft size={16} />
            Back to Equipment
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">

        {/* Breadcrumb */}
        <div className="text-sm text-[#7D7872]">
          <Link href="/" className="hover:text-[#1E2022]">
            Home
          </Link>
          {" / "}
          <Link href="/equipment" className="hover:text-[#1E2022]">
            Equipment
          </Link>
          {" / "}
          <span className="text-[#1E2022]">{item.name}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/equipment"
          className="mt-7 inline-flex items-center gap-2 text-sm text-[#7D7872] hover:text-[#1E2022]"
        >
          <ArrowLeft size={16} />
          Back to Equipment
        </Link>

        {/* Main Details */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Equipment Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Equipment Information */}
          <div>
            <span className="inline-block rounded-full bg-[#E9E5DE] px-4 py-2 text-xs font-medium text-[#2B3A4A]">
              {item.category}
            </span>

            <h1 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {item.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#7D7872]">
              <span className="flex items-center gap-2">
                <MapPin size={17} />
                {item.location}
              </span>

              <span className="flex items-center gap-2">
                {item.available ? (
                  <CheckCircle2 size={17} className="text-green-700" />
                ) : (
                  <XCircle size={17} className="text-red-600" />
                )}

                {item.available ? "Available" : "Currently Unavailable"}
              </span>
            </div>

            <div className="mt-8 border-y border-[#E9E5DE] py-6">
              <p className="text-sm text-[#7D7872]">
                Rental Price
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">
                  ৳{item.price.toLocaleString("en-BD")}
                </span>

                <span className="text-sm text-[#7D7872]">
                  / {item.rentalType.toLowerCase()}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="text-lg font-semibold">
                Description
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7D7872]">
                {item.description}
              </p>
            </div>

            {/* Rental Information */}
            <div className="mt-7 rounded-xl border border-[#E9E5DE] bg-white p-5">
              <h2 className="font-semibold">
                Rental Information
              </h2>

              <div className="mt-4 flex justify-between text-sm">
                <span className="text-[#7D7872]">
                  Rental Type
                </span>
                <span className="font-medium">
                  {item.rentalType}
                </span>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <span className="text-[#7D7872]">
                  Location
                </span>
                <span className="font-medium">
                  {item.location}
                </span>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <span className="text-[#7D7872]">
                  Availability
                </span>
                <span className="font-medium">
                  {item.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* Book Now */}
           <Link
  href={`/equipment/${item.id}/booking`}
  className={`mt-7 flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-medium text-white transition ${
    item.available
      ? "bg-[#1E2022] hover:bg-[#2B3A4A]"
      : "pointer-events-none cursor-not-allowed bg-gray-400"
  }`}
  aria-disabled={!item.available}
>
  {item.available ? "Book Now" : "Currently Unavailable"}
</Link>

<p className="mt-3 text-center text-xs text-[#7D7872]">
  Select your rental dates and submit your booking request.
</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
