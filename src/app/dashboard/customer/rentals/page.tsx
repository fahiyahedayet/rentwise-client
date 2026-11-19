
"use client";

import {
  CalendarDays,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
} from "lucide-react";
import { useState } from "react";

const rentals = [
  {
    id: "RW-1001",
    equipment: "Professional Excavator",
    startDate: "Nov 20, 2026",
    endDate: "Nov 24, 2026",
    bookingDate: "Nov 15, 2026",
    amount: 25000,
    paymentStatus: "Paid",
    bookingStatus: "Confirmed",
  },
  {
    id: "RW-1002",
    equipment: "Industrial Generator",
    startDate: "Nov 25, 2026",
    endDate: "Nov 27, 2026",
    bookingDate: "Nov 18, 2026",
    amount: 12000,
    paymentStatus: "Unpaid",
    bookingStatus: "Pending",
  },
  {
    id: "RW-1003",
    equipment: "Concrete Mixer",
    startDate: "Nov 10, 2026",
    endDate: "Nov 12, 2026",
    bookingDate: "Nov 05, 2026",
    amount: 6000,
    paymentStatus: "Paid",
    bookingStatus: "Completed",
  },
  {
    id: "RW-1004",
    equipment: "Hydraulic Crane",
    startDate: "Nov 28, 2026",
    endDate: "Dec 02, 2026",
    bookingDate: "Nov 19, 2026",
    amount: 35000,
    paymentStatus: "Unpaid",
    bookingStatus: "Cancelled",
  },
];

export default function MyRentalsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch = rental.equipment
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || rental.bookingStatus === status;

    return matchesSearch && matchesStatus;
  });

  const totalBookings = rentals.length;
  const activeBookings = rentals.filter(
    (rental) => rental.bookingStatus === "Confirmed"
  ).length;
  const pendingBookings = rentals.filter(
    (rental) => rental.bookingStatus === "Pending"
  ).length;

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-[#8A8177]">
          YOUR RENTAL ACTIVITY
        </p>

        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          My Rentals
        </h2>

        <p className="mt-2 text-sm text-[#77716B]">
          Track and manage all your equipment rental bookings.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#77716B]">Total Bookings</p>
            <CalendarDays size={20} className="text-[#8A8177]" />
          </div>
          <h3 className="mt-4 text-3xl font-bold">{totalBookings}</h3>
          <p className="mt-1 text-xs text-[#999187]">All rental bookings</p>
        </div>

        <div className="rounded-2xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#77716B]">Active Rentals</p>
            <Package size={20} className="text-[#8A8177]" />
          </div>
          <h3 className="mt-4 text-3xl font-bold">{activeBookings}</h3>
          <p className="mt-1 text-xs text-[#999187]">
            Confirmed bookings
          </p>
        </div>

        <div className="rounded-2xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#77716B]">Pending Bookings</p>
            <Clock size={20} className="text-[#8A8177]" />
          </div>
          <h3 className="mt-4 text-3xl font-bold">{pendingBookings}</h3>
          <p className="mt-1 text-xs text-[#999187]">
            Waiting for confirmation
          </p>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#E9E5DE] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E9E5DE] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="font-bold">All Bookings</h3>
            <p className="mt-1 text-xs text-[#999187]">
              Your complete rental history
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={17}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-[#999187]"
              />
              <input
                type="text"
                placeholder="Search equipment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] py-2.5 pr-3 pl-10 text-sm outline-none focus:border-[#1E2022] sm:w-52"
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] px-3 py-2.5 text-sm outline-none focus:border-[#1E2022]"
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-[#FDFCFA]">
              <tr className="text-xs font-semibold text-[#8A8177]">
                <th className="px-6 py-4">Equipment Name</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">End Date</th>
                <th className="px-6 py-4">Booking Date</th>
                <th className="px-6 py-4">Total Amount</th>
                <th className="px-6 py-4">Payment Status</th>
                <th className="px-6 py-4">Booking Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9E5DE]">
              {filteredRentals.map((rental) => (
                <tr key={rental.id} className="transition hover:bg-[#FDFCFA]">
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold">
                      {rental.equipment}
                    </p>
                    <p className="mt-1 text-xs text-[#999187]">
                      {rental.id}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-[#625B52]">
                    {rental.startDate}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#625B52]">
                    {rental.endDate}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#625B52]">
                    {rental.bookingDate}
                  </td>

                  <td className="px-6 py-5 text-sm font-bold">
                    ৳{rental.amount.toLocaleString("en-BD")}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                        rental.paymentStatus === "Paid"
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {rental.paymentStatus === "Paid" ? (
                        <CheckCircle2 size={13} />
                      ) : (
                        <Clock size={13} />
                      )}
                      {rental.paymentStatus}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                        rental.bookingStatus === "Confirmed"
                          ? "bg-green-50 text-green-700"
                          : rental.bookingStatus === "Pending"
                            ? "bg-amber-50 text-amber-700"
                            : rental.bookingStatus === "Completed"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-red-50 text-red-700"
                      }`}
                    >
                      {rental.bookingStatus === "Cancelled" && (
                        <XCircle size={13} />
                      )}
                      {rental.bookingStatus === "Confirmed" && (
                        <CheckCircle2 size={13} />
                      )}
                      {rental.bookingStatus === "Pending" && (
                        <Clock size={13} />
                      )}
                      {rental.bookingStatus}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredRentals.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-14 text-center">
                    <Package
                      size={32}
                      className="mx-auto text-[#C6BFB4]"
                    />
                    <p className="mt-3 text-sm font-semibold">
                      No bookings found
                    </p>
                    <p className="mt-1 text-xs text-[#999187]">
                      Try changing your search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#E9E5DE] px-6 py-4">
          <p className="text-xs text-[#999187]">
            Showing {filteredRentals.length} of {rentals.length} bookings
          </p>
        </div>
      </section>
    </main>
  );
}
