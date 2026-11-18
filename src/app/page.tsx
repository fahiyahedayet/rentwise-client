import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ShieldCheck,
  Truck,
  Clock3,
  Star,
  HardHat,
  Camera,
  Car,
  Tractor,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { Star, MapPin, ArrowRight } from "lucide-react";
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
    period: "/day",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=900&q=85",
  },
  {
    name: "Canon EOS R6 Camera",
    category: "Photography",
    location: "Chattogram, Bangladesh",
    price: "৳2,500",
    period: "/day",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
  },
  {
    name: "Heavy Duty Tractor",
    category: "Agriculture",
    location: "Sylhet, Bangladesh",
    price: "৳5,000",
    period: "/day",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E9E5DE] bg-[#F8F7F4]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            rentwise<span className="text-[#7D7872]">.</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-medium text-[#55514D] md:flex">
            <Link href="/" className="text-[#1E2022]">Home</Link>
            <Link href="/equipment" className="transition hover:text-black">
              Browse Equipment
            </Link>
            <Link href="/about" className="transition hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="transition hover:text-black">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden px-4 py-2.5 text-sm font-semibold sm:block"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2B3A4A]"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E0DAD1] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#7D7872]">
            <span className="h-2 w-2 rounded-full bg-[#647565]" />
            The smarter way to rent
          </div>

          <h1 className="max-w-2xl text-5xl leading-[1.12] font-semibold tracking-tight sm:text-6xl lg:text-[68px]">
            Everything you need.
            <span className="mt-2 block font-serif font-normal italic text-[#7D7872]">
              Nothing you don&apos;t.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#77716A]">
            Access the equipment you need, exactly when you need it.
            Discover a smarter way to rent, work, and grow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-3 rounded-lg bg-[#1E2022] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#2B3A4A]"
            >
              Explore Equipment <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg border border-[#DAD4CB] px-7 py-4 text-sm font-semibold transition hover:bg-white"
            >
              List Your Equipment
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 border-t border-[#E9E5DE] pt-8">
            <div>
              <h3 className="text-3xl font-semibold">500+</h3>
              <p className="mt-1 text-xs text-[#7D7872]">Equipment listed</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">1.2k+</h3>
              <p className="mt-1 text-xs text-[#7D7872]">Happy customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">4.9/5</h3>
              <p className="mt-1 text-xs text-[#7D7872]">Average rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[430px] overflow-hidden rounded-2xl bg-[#E9E5DE] sm:h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90"
              alt="Construction equipment at a work site"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs font-medium tracking-[0.2em] uppercase">
                Built for every project
              </p>
              <h2 className="mt-3 max-w-sm text-3xl font-semibold">
                Get the right tools for the job.
              </h2>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 hidden items-center gap-4 rounded-xl border border-[#E9E5DE] bg-white p-5 shadow-sm sm:flex">
            <div className="rounded-lg bg-[#F1EFEA] p-3">
              <ShieldCheck size={25} />
            </div>
            <div>
              <p className="text-sm font-semibold">Verified Equipment</p>
              <p className="mt-1 text-xs text-[#7D7872]">
                Rent with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Search */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 rounded-xl border border-[#E9E5DE] bg-white p-6 md:grid-cols-[1fr_1fr_auto] md:items-center">

          <div>
            <label className="text-xs font-semibold">
              What are you looking for?
            </label>
            <input
              type="text"
              placeholder="Search equipment..."
              className="mt-2 w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="border-t border-[#E9E5DE] pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0">
            <label className="text-xs font-semibold">
              Location
            </label>
            <input
              type="text"
              placeholder="Choose your location"
              className="mt-2 w-full bg-transparent text-sm outline-none"
            />
          </div>

          <button className="rounded-lg bg-[#1E2022] px-8 py-4 text-sm font-semibold text-white hover:bg-[#2B3A4A]">
            Search Equipment
          </button>

        </div>
      </section>

     {/* Equipment Categories */}
<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="flex items-end justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#7D7872]">
        Explore possibilities
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        Browse by category
      </h2>
    </div>

    <Link
      href="/equipment"
      className="hidden text-sm font-semibold md:block"
    >
      View all →
    </Link>
  </div>

  <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

    {[
      { name: "Construction", icon: "🏗️", count: "120+ items" },
      { name: "Photography", icon: "📷", count: "85+ items" },
      { name: "Vehicles", icon: "🚗", count: "64+ items" },
      { name: "Agriculture", icon: "🚜", count: "42+ items" },
      { name: "Tools & Machinery", icon: "🔧", count: "96+ items" },
    ].map((category) => (
      <Link
        href="/equipment"
        key={category.name}
        className="group rounded-xl border border-[#E9E5DE] bg-white p-6 transition hover:-translate-y-1 hover:border-[#B9B1A6]"
      >
        <span className="text-3xl">{category.icon}</span>

        <h3 className="mt-8 text-sm font-semibold">
          {category.name}
        </h3>

        <p className="mt-2 text-xs text-[#7D7872]">
          {category.count}
        </p>
      </Link>
    ))}

  </div>
</section>

      {/* Featured Equipment */}
<section className="bg-[#EFEEE9]">
  <div className="mx-auto max-w-7xl px-6 py-20">

    <div className="flex items-end justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7D7872]">
          Handpicked for you
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Featured Equipment
        </h2>

        <p className="mt-3 text-sm text-[#7D7872]">
          Quality equipment, ready for your next project.
        </p>
      </div>

      <Link
        href="/equipment"
        className="hidden items-center gap-2 text-sm font-semibold md:flex"
      >
        Explore all <ArrowRight size={17} />
      </Link>
    </div>

    <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          name: "Professional Excavator",
          category: "Construction",
          location: "Dhaka, Bangladesh",
          price: "৳8,500",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=900",
        },
        {
          name: "Canon EOS R6 Camera",
          category: "Photography",
          location: "Chattogram, Bangladesh",
          price: "৳2,500",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900",
        },
        {
          name: "Heavy Duty Tractor",
          category: "Agriculture",
          location: "Sylhet, Bangladesh",
          price: "৳5,000",
          rating: "5.0",
          image: "https://images.unsplash.com/photo-1592982537449-6f7a6e4a1f3b?w=900",
        },
      ].map((item) => (
        <article
          key={item.name}
          className="overflow-hidden rounded-xl border border-[#E5E0D8] bg-white"
        >
          <div className="relative h-60 overflow-hidden bg-[#E9E5DE]">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase">
              {item.category}
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-[#7D7872]">
                <MapPin size={13} />
                {item.location}
              </span>

              <span className="flex items-center gap-1 text-xs font-semibold">
                <Star size={14} fill="#B49B69" stroke="#B49B69" />
                {item.rating}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.name}
            </h3>

            <div className="mt-6 flex items-center justify-between border-t border-[#E9E5DE] pt-5">
              <p className="text-lg font-semibold">
                {item.price}
                <span className="text-xs font-normal text-[#7D7872]">
                  /day
                </span>
              </p>

              <Link
                href="/equipment"
                className="rounded-lg border border-[#E9E5DE] px-4 py-2.5 text-xs font-semibold transition hover:bg-[#1E2022] hover:text-white"
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
<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mx-auto max-w-2xl text-center">
    <p className="text-xs font-semibold uppercase tracking-widest text-[#7D7872]">
      The Rentwise Difference
    </p>

    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
      Renting made refreshingly simple.
    </h2>

    <p className="mt-4 text-sm leading-7 text-[#7D7872]">
      Everything you need to rent equipment with confidence,
      convenience, and complete peace of mind.
    </p>
  </div>

  <div className="mt-16 grid gap-12 md:grid-cols-3">

    {[
      {
        icon: "01",
        title: "Trusted & Verified",
        description:
          "Browse quality equipment from verified owners. Every listing goes through an approval process.",
      },
      {
        icon: "02",
        title: "Save Time & Money",
        description:
          "Get access to the equipment you need without the cost of purchasing and maintaining it.",
      },
      {
        icon: "03",
        title: "Flexible & Convenient",
        description:
          "Find equipment nearby and choose rental options that fit your schedule and budget.",
      },
    ].map((feature) => (
      <div
        key={feature.icon}
        className="border-t border-[#DAD4CB] pt-7"
      >
        <span className="text-sm font-semibold text-[#A39B90]">
          {feature.icon}
        </span>

        <h3 className="mt-6 text-xl font-semibold">
          {feature.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#7D7872]">
          {feature.description}
        </p>
      </div>
    ))}

  </div>
</section>

    {/* Owner CTA */}
<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#1E2022] p-9 text-white md:flex-row md:items-center md:p-14">

    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#B6B0A7]">
        Become an equipment owner
      </p>

      <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
        Your equipment deserves to work harder.
      </h2>

      <p className="mt-5 max-w-lg text-sm leading-7 text-[#B6B0A7]">
        Turn your idle equipment into income. List your assets,
        connect with renters, and earn on your own terms.
      </p>
    </div>

    <Link
      href="/register"
      className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-[#1E2022] transition hover:bg-[#E9E5DE]"
    >
      Start Listing
      <ArrowUpRight size={18} />
    </Link>

  </div>
</section>

      {/* Footer */}
<footer className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-14">

    <div className="grid gap-10 border-b border-[#E9E5DE] pb-12 sm:grid-cols-2 lg:grid-cols-4">

      <div>
        <Link href="/" className="text-2xl font-bold tracking-tight">
          rentwise<span className="text-[#7D7872]">.</span>
        </Link>

        <p className="mt-4 max-w-xs text-sm leading-7 text-[#7D7872]">
          Rent the equipment you need. Earn from the equipment you own.
          A smarter way to share resources.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Explore</h3>
        <ul className="mt-5 space-y-3 text-sm text-[#7D7872]">
          <li><Link href="/browse" className="hover:text-black">Browse Equipment</Link></li>
          <li><Link href="/categories" className="hover:text-black">Categories</Link></li>
          <li><Link href="/how-it-works" className="hover:text-black">How It Works</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold">For Owners</h3>
        <ul className="mt-5 space-y-3 text-sm text-[#7D7872]">
          <li><Link href="/register" className="hover:text-black">List Equipment</Link></li>
          <li><Link href="/dashboard" className="hover:text-black">Owner Dashboard</Link></li>
          <li><Link href="/help" className="hover:text-black">Help Center</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Company</h3>
        <ul className="mt-5 space-y-3 text-sm text-[#7D7872]">
          <li><Link href="/about" className="hover:text-black">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
          <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
        </ul>
      </div>

    </div>

    <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#7D7872] sm:flex-row">
      <p>© 2026 Rentwise. All rights reserved.</p>
      <p>Made for smarter renting.</p>
    </div>

  </div>
</footer>
    </main>
  );
}