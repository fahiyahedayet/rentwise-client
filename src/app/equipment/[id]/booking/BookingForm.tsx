
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    CheckCircle2,
    Clock,
} from "lucide-react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

import type { equipment } from "@/app/lib/equipment";

type EquipmentItem = (typeof equipment)[number];

export default function BookingForm({
    item,
}: {
    item: EquipmentItem;
}) {
    const router = useRouter();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [quantity, setQuantity] = useState(1);

    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [bookingId, setBookingId] = useState("");

    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(new Date().toISOString().split("T")[0]);
    }, []);

    const rentalDuration = () => {
        if (!startDate || !endDate) return 0;

        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();

        const difference = end - start;

        if (difference <= 0) return 0;

        const rentalType = item.rentalType.toLowerCase();

        const unit =
            rentalType === "hourly"
                ? 1000 * 60 * 60
                : rentalType === "weekly"
                    ? 1000 * 60 * 60 * 24 * 7
                    : rentalType === "monthly"
                        ? 1000 * 60 * 60 * 24 * 30
                        : 1000 * 60 * 60 * 24;

        return Math.max(1, Math.ceil(difference / unit));
    };

    const duration = rentalDuration();

    const totalPrice = item
        ? item.price * duration * quantity
        : 0;

    const handleBooking = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setError("");

        if (!customerName.trim() || !email.trim() || !phone.trim()) {
            setError("Please fill in all customer details.");
            return;
        }

        if (!startDate || !endDate) {
            setError("Please select your rental dates.");
            return;
        }

        if (new Date(endDate) <= new Date(startDate)) {
            setError("End date must be after the start date.");
            return;
        }

        if (quantity < 1) {
            setError("Please select a valid quantity.");
            return;
        }

        try {
            setIsSubmitting(true);

            const apiUrl =
                process.env.NEXT_PUBLIC_API_URL ||
                "http://localhost:5000";

            const response = await fetch(
                `${apiUrl}/api/bookings`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        equipmentId: String(item.id),
                        customerName: customerName.trim(),
                        email: email.trim(),
                        phone: phone.trim(),
                        startDate,
                        endDate,
                        quantity,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Booking submission failed."
                );
            }

            setBookingId(data.booking?._id || "");
            setSubmitted(true);

        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F8F7F4] text-[#1E2022]">
            <Navbar />

            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">

                <Link
                    href={`/equipment/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm text-[#7D7872] hover:text-[#1E2022]"
                >
                    <ArrowLeft size={16} />
                    Back to Equipment Details
                </Link>

                <div className="mt-8">
                    <h1 className="text-3xl font-semibold sm:text-4xl">
                        Complete Your Booking
                    </h1>

                    <p className="mt-3 text-sm text-[#7D7872]">
                        Select your rental dates and provide your booking details.
                    </p>
                </div>

                {submitted ? (
                    <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#E9E5DE] bg-white p-8 text-center sm:p-12">

                        <CheckCircle2
                            size={56}
                            className="mx-auto text-green-700"
                        />

                        <h2 className="mt-6 text-2xl font-semibold">
                            Booking Request Submitted!
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-[#7D7872]">
                            Your booking request for {item.name} has been
                            successfully submitted. Our team will review
                            your request.
                        </p>

                        {bookingId && (
                            <p className="mt-3 break-all text-sm font-medium">
                                Booking ID: {bookingId}
                            </p>
                        )}

                        <div className="mt-7 rounded-xl bg-[#F8F7F4] p-5 text-left">

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    Equipment
                                </span>
                                <span className="font-medium">
                                    {item.name}
                                </span>
                            </div>

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    Customer
                                </span>
                                <span className="font-medium">
                                    {customerName}
                                </span>
                            </div>

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    Email
                                </span>
                                <span className="font-medium">
                                    {email}
                                </span>
                            </div>

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    Start Date
                                </span>
                                <span>{startDate}</span>
                            </div>

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    End Date
                                </span>
                                <span>{endDate}</span>
                            </div>

                            <div className="flex justify-between py-2 text-sm">
                                <span className="text-[#7D7872]">
                                    Quantity
                                </span>
                                <span>{quantity}</span>
                            </div>

                            <div className="mt-3 flex justify-between border-t border-[#E9E5DE] pt-4 font-semibold">
                                <span>Total Price</span>
                                <span>
                                    ৳{totalPrice.toLocaleString("en-BD")}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push("/equipment")}
                            className="mt-7 w-full rounded-xl bg-[#1E2022] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#2B3A4A]"
                        >
                            Explore More Equipment
                        </button>
                    </div>

                ) : (
                    <form
                        onSubmit={handleBooking}
                        className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3"
                    >

                        <div className="space-y-7 lg:col-span-2">

                            {/* Customer Information */}

                            <div className="rounded-2xl border border-[#E9E5DE] bg-white p-6 sm:p-8">

                                <h2 className="text-xl font-semibold">
                                    Customer Information
                                </h2>

                                <p className="mt-2 text-sm text-[#7D7872]">
                                    Enter your contact details for this booking.
                                </p>

                                <div className="mt-7 space-y-5">

                                    <div>
                                        <label
                                            htmlFor="customerName"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="customerName"
                                            type="text"
                                            required
                                            value={customerName}
                                            onChange={(e) =>
                                                setCustomerName(e.target.value)
                                            }
                                            placeholder="Enter your full name"
                                            className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] px-4 py-3 text-sm outline-none focus:border-[#2B3A4A]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="example@email.com"
                                            className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] px-4 py-3 text-sm outline-none focus:border-[#2B3A4A]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Phone Number
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            placeholder="01XXXXXXXXX"
                                            className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] px-4 py-3 text-sm outline-none focus:border-[#2B3A4A]"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Rental Dates */}

                            <div className="rounded-2xl border border-[#E9E5DE] bg-white p-6 sm:p-8">

                                <div className="flex items-center gap-3">
                                    <CalendarDays size={22} />

                                    <h2 className="text-xl font-semibold">
                                        Rental Period
                                    </h2>
                                </div>

                                <p className="mt-2 text-sm text-[#7D7872]">
                                    Choose when you want to rent this equipment.
                                </p>

                                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="startDate"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Start Date
                                        </label>

                                        <input
                                            id="startDate"
                                            type="date"
                                            required
                                            value={startDate}
                                            min={today}
                                            onChange={(e) => {
                                                setStartDate(e.target.value);
                                                setError("");
                                            }}
                                            className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] px-4 py-3 text-sm outline-none focus:border-[#2B3A4A]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="endDate"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            End Date
                                        </label>

                                        <input
                                            id="endDate"
                                            type="date"
                                            required
                                            min={startDate || today}
                                            value={endDate}
                                            onChange={(e) => {
                                                setEndDate(e.target.value);
                                                setError("");
                                            }}
                                            className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] px-4 py-3 text-sm outline-none focus:border-[#2B3A4A]"
                                        />
                                    </div>

                                </div>

                                {duration > 0 && (
                                    <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F8F7F4] p-4 text-sm">
                                        <Clock
                                            size={17}
                                            className="text-[#2B3A4A]"
                                        />

                                        <span>
                                            Rental Duration:{" "}
                                            <strong>
                                                {duration}{" "}
                                                {item.rentalType.toLowerCase()}
                                                {duration > 1 ? "s" : ""}
                                            </strong>
                                        </span>
                                    </div>
                                )}

                            </div>

                            {/* Quantity */}

                            <div className="rounded-2xl border border-[#E9E5DE] bg-white p-6 sm:p-8">

                                <h2 className="text-xl font-semibold">
                                    Rental Quantity
                                </h2>

                                <p className="mt-2 text-sm text-[#7D7872]">
                                    How many units do you need?
                                </p>

                                <div className="mt-6 flex items-center gap-5">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((previous) =>
                                                Math.max(1, previous - 1)
                                            )
                                        }
                                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E9E5DE] text-xl hover:bg-[#F8F7F4]"
                                    >
                                        -
                                    </button>

                                    <span className="min-w-8 text-center text-lg font-semibold">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((previous) => previous + 1)
                                        }
                                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E9E5DE] text-xl hover:bg-[#F8F7F4]"
                                    >
                                        +
                                    </button>

                                </div>
                            </div>

                            {/* Error Message */}

                            {error && (
                                <p className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                                    {error}
                                </p>
                            )}

                            {/* Submit Button */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-[#1E2022] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#2B3A4A] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? "Submitting Booking..."
                                    : "Submit Booking Request"}
                            </button>

                        </div>

                        {/* Booking Summary */}

                        <aside className="h-fit rounded-2xl border border-[#E9E5DE] bg-white p-6 lg:sticky lg:top-24">

                            <h2 className="text-xl font-semibold">
                                Booking Summary
                            </h2>

                            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                {item.name}
                            </h3>

                            <div className="mt-3 flex items-center gap-2 text-sm text-[#7D7872]">
                                <MapPin size={16} />
                                {item.location}
                            </div>

                            <div className="mt-6 space-y-4 border-t border-[#E9E5DE] pt-5 text-sm">

                                <div className="flex justify-between">
                                    <span className="text-[#7D7872]">
                                        Rental Price
                                    </span>

                                    <span className="font-medium">
                                        ৳{item.price.toLocaleString("en-BD")} / {item.rentalType.toLowerCase()}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#7D7872]">
                                        Duration
                                    </span>

                                    <span className="font-medium">
                                        {duration || "-"}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#7D7872]">
                                        Quantity
                                    </span>

                                    <span className="font-medium">
                                        {quantity}
                                    </span>
                                </div>

                            </div>

                            <div className="mt-6 border-t border-[#E9E5DE] pt-5">

                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">
                                        Total Price
                                    </span>

                                    <span className="text-2xl font-semibold">
                                        ৳{totalPrice.toLocaleString("en-BD")}
                                    </span>
                                </div>

                                <p className="mt-2 text-xs text-[#7D7872]">
                                    Final pricing may depend on availability and booking approval.
                                </p>

                            </div>

                        </aside>

                    </form>
                )}

            </section>

            <Footer />
        </main>
    );
}
