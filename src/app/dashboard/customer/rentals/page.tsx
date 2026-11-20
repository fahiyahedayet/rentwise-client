
"use client";

import {
  CalendarDays,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type BookingStatus = "Pending" | "Confirmed" | "Cancelled";

interface Rental {
  _id: string;
  equipmentName: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  totalPrice: number;
  duration: number;
  rentalType: string;
  status: BookingStatus;
}

export default function MyRentalsPage() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        setLoading(true);
        setError("");

        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

        const response = await fetch(
          `${apiUrl}/api/bookings/my-rentals`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch rentals.");
        }

        setRentals(data.bookings || []);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  const filteredRentals = useMemo(() => {
    return rentals.filter((rental) => {
      const matchesSearch = rental.equipmentName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || rental.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [rentals, search, status]);

  const totalBookings = rentals.length;

  const activeBookings = rentals.filter(
    (rental) => rental.status === "Confirmed"
  ).length;

  const pendingBookings = rentals.filter(
    (rental) => rental.status === "Pending"
  ).length;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const formatDuration = (rental: Rental) => {
    const unit =
      rental.duration === 1
        ? rental.rentalType.replace(/ly$/i, "")
        : rental.rentalType;

    return `${rental.duration} ${unit}`;
  };

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
          <p className="mt-1 text-xs text-[#999187]">
            All rental bookings
          </p>
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
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#E9E5DE] border-t-[#1E2022]" />
            <p className="mt-4 text-sm text-[#77716B]">
              Loading your rentals...
            </p>
          </div>
        ) : error ? (
          <div className="px-6 py-16 text-center">
            <p className="text-sm font-semibold text-red-600">
              {error}
            </p>
            <p className="mt-2 text-xs text-[#999187]">
              Please check your login session and try again.
            </p>
          </div>
        ) : (
          <>
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
                    <tr
                      key={rental._id}
                      className="transition hover:bg-[#FDFCFA]"
                    >
                      <td className="px-6 py-5">
                        <p className="text-sm font-semibold">
                          {rental.equipmentName}
                        </p>
                        <p className="mt-1 text-xs text-[#999187]">
                          #{rental._id.slice(-8).toUpperCase()}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-[#625B52]">
                        {formatDate(rental.startDate)}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#625B52]">
                        {formatDate(rental.endDate)}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#625B52]">
                        {formatDate(rental.createdAt)}
                      </td>

                      <td className="px-6 py-5 text-sm font-bold">
                        ৳{rental.totalPrice.toLocaleString("en-BD")}
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                          Not Recorded
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                            rental.status === "Confirmed"
                              ? "bg-green-50 text-green-700"
                              : rental.status === "Pending"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-red-50 text-red-700"
                          }`}
                        >
                          {rental.status === "Cancelled" && (
                            <XCircle size={13} />
                          )}
                          {rental.status === "Confirmed" && (
                            <CheckCircle2 size={13} />
                          )}
                          {rental.status === "Pending" && (
                            <Clock size={13} />
                          )}
                          {rental.status}
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
          </>
        )}
      </section>
    </main>
  );
}
