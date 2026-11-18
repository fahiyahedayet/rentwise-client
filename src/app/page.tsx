
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Star,
  HardHat,
  Camera,
  Car,
  Tractor,
  Wrench,
  MapPin,
  Search,
  Truck,
  Clock3,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const categories = [
  { name: "Construction", icon: HardHat, count: "120+ items" },
  { name: "Photography", icon: Camera, count: "85+ items" },
  { name: "Vehicles", icon: Car, count: "64+ items" },
  { name: "Agriculture", icon: Tractor, count: "42+ items" },
  { name: "Tools & Machinery", icon: Wrench, count: "96+ items" },
];

const equipment = [
  {
    name: "Professional Excavator",
    category: "Construction",
    location: "Dhaka, Bangladesh",
    price: "৳8,500",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=900&q=85",
  },
  {
    name: "Canon EOS R6 Camera",
    category: "Photography",
    location: "Chattogram, Bangladesh",
    price: "৳2,500",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
  },
  {
    name: "Heavy Duty Tractor",
    category: "Agriculture",
    location: "Sylhet, Bangladesh",
    price: "৳5,000",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=85",
  },
];

const features = [
  {
    number: "01",
    title: "Trusted & Verified",
    description:
      "Browse quality equipment from verified owners. Every listing goes through an approval process.",
  },
  {
    number: "02",
    title: "Save Time & Money",
    description:
      "Get access to the equipment you need without the cost of purchasing and maintaining it.",
  },
  {
    number: "03",
    title: "Flexible & Convenient",
    description:
      "Find equipment nearby and choose rental options that fit your schedule and budget.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F7F4] text-[#1E2022]">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-10 lg:py-24">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E0DAD1] bg-white px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#7D7872] uppercase sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#647565]" />
            The smarter way to rent
          </div>

          <h1 className="max-w-2xl text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]">
            Everything you need.
            <span className="mt-2 block font-serif font-normal italic text-[#7D7872]">
              Nothing you don&apos;t.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#77716A] sm:text-base sm:leading-8">
            Access the equipment you need, exactly when you need it.
            Discover a smarter way to rent, work, and grow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1E2022] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2B3A4A] sm:px-7"
            >
              Explore Equipment
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#DAD4CB] px-6 py-4 text-sm font-semibold transition hover:bg-white sm:px-7"
            >
              List Your Equipment
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-[#E9E5DE] pt-7 sm:mt-14 sm:gap-8 sm:pt-8">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">500+</h3>
              <p className="mt-1 text-[10px] text-[#7D7872] sm:text-xs">
                Equipment listed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">1.2k+</h3>
              <p className="mt-1 text-[10px] text-[#7D7872] sm:text-xs">
                Happy customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">4.9/5</h3>
              <p className="mt-1 text-[10px] text-[#7D7872] sm:text-xs">
                Average rating
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-2 sm:mt-0">
          <div className="relative h-[300px] overflow-hidden rounded-2xl bg-[#E9E5DE] sm:h-[430px] lg:h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90"
              alt="Construction equipment at a work site"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase sm:text-xs">
                Built for every project
              </p>

              <h2 className="mt-3 max-w-sm text-2xl font-semibold sm:text-3xl">
                Get the right tools for the job.
              </h2>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-[#E9E5DE] bg-white p-3 shadow-sm sm:-bottom-6 sm:-left-5 sm:gap-4 sm:p-5">
            <div className="rounded-lg bg-[#F1EFEA] p-2 sm:p-3">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-xs font-semibold sm:text-sm">
                Verified Equipment
              </p>
              <p className="mt-1 text-[10px] text-[#7D7872] sm:text-xs">
                Rent with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Search */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-16 lg:px-10">
        <div className="grid gap-5 rounded-xl border border-[#E9E5DE] bg-white p-5 sm:p-7 md:grid-cols-[1fr_1fr_auto] md:items-center">

          <div>
            <label className="text-xs font-semibold">
              What are you looking for?
            </label>

            <div className="mt-3 flex items-center gap-3">
              <Search size={18} className="shrink-0 text-[#7D7872]" />
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div className="border-t border-[#E9E5DE] pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0">
            <label className="text-xs font-semibold">Location</label>

            <div className="mt-3 flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-[#7D7872]" />
              <input
                type="text"
                placeholder="Choose your location"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#2B3A4A]">
            <Search size={17} />
            Search Equipment
          </button>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#7D7872] uppercase">
              Explore possibilities
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Browse by category
            </h2>
          </div>

          <Link
            href="/equipment"
            className="hidden shrink-0 text-sm font-semibold transition hover:text-[#7D7872] sm:block"
          >
            View all <ArrowRight size={15} className="ml-1 inline" />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href="/equipment"
                key={category.name}
                className="group rounded-xl border border-[#E9E5DE] bg-white p-4 transition hover:-translate-y-1 hover:border-[#B9B1A6] sm:p-6"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#2B3A4A] transition group-hover:scale-110 sm:size-8"
                />

                <h3 className="mt-7 text-xs font-semibold sm:mt-8 sm:text-sm">
                  {category.name}
                </h3>

                <p className="mt-2 text-[10px] text-[#7D7872] sm:text-xs">
                  {category.count}
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/equipment"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold sm:hidden"
        >
          View all categories <ArrowRight size={16} />
        </Link>
      </section>

      {/* Featured Equipment */}
      <section className="bg-[#EFEEE9]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10">

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7D7872] uppercase">
                Handpicked for you
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Featured Equipment
              </h2>

              <p className="mt-3 text-xs leading-6 text-[#7D7872] sm:text-sm">
                Quality equipment, ready for your next project.
              </p>
            </div>

            <Link
              href="/equipment"
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold transition hover:text-[#7D7872] sm:flex"
            >
              Explore all <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {equipment.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-xl border border-[#E5E0D8] bg-white transition hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden bg-[#E9E5DE] sm:h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1 text-[10px] text-[#7D7872] sm:text-xs">
                      <MapPin size={13} />
                      {item.location}
                    </span>

                    <span className="flex shrink-0 items-center gap-1 text-xs font-semibold">
                      <Star
                        size={14}
                        fill="#B49B69"
                        stroke="#B49B69"
                      />
                      {item.rating}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold sm:text-lg">
                    {item.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-[#E9E5DE] pt-5">
                    <p className="text-base font-semibold sm:text-lg">
                      {item.price}
                      <span className="text-xs font-normal text-[#7D7872]">
                        /day
                      </span>
                    </p>

                    <Link
                      href="/equipment"
                      className="rounded-lg border border-[#E9E5DE] px-3 py-2.5 text-[10px] font-semibold transition hover:bg-[#1E2022] hover:text-white sm:px-4 sm:text-xs"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rentwise */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-[#7D7872] uppercase">
            The Rentwise Difference
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">
            Renting made refreshingly simple.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#7D7872]">
            Everything you need to rent equipment with confidence,
            convenience, and complete peace of mind.
          </p>
        </div>

        <div className="mt-12 grid gap-9 sm:mt-16 md:grid-cols-3 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="border-t border-[#DAD4CB] pt-6 sm:pt-7"
            >
              <span className="text-sm font-semibold text-[#A39B90]">
                {feature.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold sm:mt-6 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#7D7872] sm:mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Owner CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#1E2022] p-7 text-white sm:p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#B6B0A7] uppercase">
              Become an equipment owner
            </p>

            <h2 className="mt-5 max-w-xl text-2xl leading-tight font-semibold sm:text-4xl">
              Your equipment deserves to work harder.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#B6B0A7]">
              Turn your idle equipment into income. List your assets,
              connect with renters, and earn on your own terms.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-[#1E2022] transition hover:bg-[#E9E5DE] sm:w-auto"
          >
            Start Listing
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}
