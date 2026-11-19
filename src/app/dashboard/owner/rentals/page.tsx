
"use client";

import { useState } from "react";
import {
  Search,
  CalendarDays,
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
  Eye,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";

const rentals = [
  {
    id: "RW-1001",
    customer: "Rahim Ahmed",
    email: "rahim@gmail.com",
    phone: "+880 1712-345678",
    equipment: "Professional Excavator",
    startDate: "2026-11-15",
    endDate: "2026-11-18",
    duration: "3 Days",
    quantity: 1,
    amount: 25500,
    paymentStatus: "Paid",
    bookingStatus: "Confirmed",
  },
  {
    id: "RW-1002",
    customer: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    phone: "+880 1812-456789",
    equipment: "Industrial Generator",
    startDate: "2026-11-20",
    endDate: "2026-11-23",
    duration: "3 Days",
    quantity: 2,
    amount: 21000,
    paymentStatus: "Unpaid",
    bookingStatus: "Pending",
  },
  {
    id: "RW-1003",
    customer: "Sakib Hasan",
    email: "sakib@gmail.com",
    phone: "+880 1912-567890",
    equipment: "Concrete Mixer",
    startDate: "2026-11-10",
    endDate: "2026-11-12",
    duration: "2 Days",
    quantity: 1,
    amount: 3600,
    paymentStatus: "Paid",
    bookingStatus: "Completed",
  },
  {
    id: "RW-1004",
    customer: "Ayesha Rahman",
    email: "ayesha@gmail.com",
    phone: "+880 1612-678901",
    equipment: "Hydraulic Crane",
    startDate: "2026-11-22",
    endDate: "2026-11-25",
    duration: "3 Days",
    quantity: 1,
    amount: 36000,
    paymentStatus: "Unpaid",
    bookingStatus: "Cancelled",
  },
];

export default function OwnerRentalsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch =
      rental.customer.toLowerCase().includes(search.toLowerCase()) ||
      rental.equipment.toLowerCase().includes(search.toLowerCase()) ||
      rental.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || rental.bookingStatus === filter;

    return matchesSearch && matchesFilter;
  });

  const getBookingStyle = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-50 text-green-700";
      case "Pending":
        return "bg-amber-50 text-amber-700";
      case "Completed":
        return "bg-blue-50 text-blue-700";
      case "Cancelled":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getPaymentStyle = (status: string) => {
    return status === "Paid"
      ? "bg-green-50 text-green-700"
      : "bg-red-50 text-red-700";
  };

  const totalRevenue = rentals
    .filter((rental) => rental.paymentStatus === "Paid")
    .reduce((total, rental) => total + rental.amount, 0);

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-[#1E2022]">
          My Equipment Rental
        </h2>
        <p className="mt-1 text-sm text-[#8A8178]">
          Monitor customer bookings and rental activities for your equipment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Total Rentals</p>
            <ClipboardList size={20} className="text-[#77716B]" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {rentals.length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Pending Bookings</p>
            <Clock size={20} className="text-amber-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {rentals.filter((r) => r.bookingStatus === "Pending").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Confirmed Rentals</p>
            <CheckCircle2 size={20} className="text-green-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {rentals.filter((r) => r.bookingStatus === "Confirmed").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Total Revenue</p>
            <CalendarDays size={20} className="text-[#77716B]" />
          </div>
          <h3 className="mt-3 text-2xl font-bold text-[#1E2022]">
            ৳{totalRevenue.toLocaleString()}
          </h3>
          <p className="mt-1 text-xs text-[#8A8178]">From paid bookings</p>
        </div>
      </div>

      <div className="rounded-xl border border-[#E9E5DE] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E9E5DE] p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-bold text-[#1E2022]">Rental Bookings</h3>
            <p className="mt-1 text-xs text-[#8A8178]">
              Customer and equipment rental information.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8178]"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search rentals..."
                className="w-full rounded-lg border border-[#E9E5DE] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#1E2022] sm:w-56"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#1E2022]"
            >
              <option value="All">All Bookings</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-[#F8F7F4] text-xs uppercase tracking-wide text-[#8A8178]">
              <tr>
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Equipment</th>
                <th className="px-5 py-4 font-semibold">Rental Duration</th>
                <th className="px-5 py-4 font-semibold">Quantity</th>
                <th className="px-5 py-4 font-semibold">Booking Amount</th>
                <th className="px-5 py-4 font-semibold">Payment</th>
                <th className="px-5 py-4 font-semibold">Booking Status</th>
                <th className="px-5 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9E5DE]">
              {filteredRentals.map((rental) => (
                <tr key={rental.id} className="hover:bg-[#FAF9F7]">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#1E2022]">
                      {rental.customer}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.email}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.phone}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-[#1E2022]">
                      {rental.equipment}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.id}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-[#1E2022]">
                      {rental.duration}
                    </p>
                    <p className="mt-1 whitespace-nowrap text-xs text-[#8A8178]">
                      {rental.startDate} – {rental.endDate}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#77716B]">
                    {rental.quantity} unit(s)
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#1E2022]">
                    ৳{rental.amount.toLocaleString()}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${getPaymentStyle(rental.paymentStatus)}`}
                    >
                      {rental.paymentStatus}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${getBookingStyle(rental.bookingStatus)}`}
                    >
                      {rental.bookingStatus}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() =>
                        toast(
                          `Customer: ${rental.customer}\nPhone: ${rental.phone}`,
                          { duration: 3000 }
                        )
                      }
                      title="View Customer Information"
                      className="rounded-lg border border-[#E9E5DE] p-2 text-[#77716B] transition hover:bg-gray-100"
                    >
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredRentals.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center">
                    <ClipboardList
                      size={32}
                      className="mx-auto mb-3 text-[#C5BFB6]"
                    />
                    <p className="font-semibold text-[#1E2022]">
                      No rental bookings found
                    </p>
                    <p className="mt-1 text-sm text-[#8A8178]">
                      Try changing your search or filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#E9E5DE] px-5 py-4">
          <p className="text-xs text-[#8A8178]">
            Showing {filteredRentals.length} of {rentals.length} rental bookings
          </p>
        </div>
      </div>
    </div>
  );
}
