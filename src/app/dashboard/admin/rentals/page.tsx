
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  CalendarDays,
  Users,
  Wallet,
  Clock,
  Eye,
  X,
  MapPin,
  Phone,
  Mail,
  Package,
} from "lucide-react";
import toast from "react-hot-toast";

type BookingStatus = "Pending" | "Confirmed" | "Cancelled" | "Completed";
type PaymentStatus = "Paid" | "Unpaid" | "Refunded";

interface Rental {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  ownerName: string;
  ownerEmail: string;
  equipmentName: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  quantity: number;
  amount: number;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  bookingDate: string;
}

const initialRentals: Rental[] = [
  {
    id: 1,
    customerName: "John Smith",
    customerEmail: "john@example.com",
    customerPhone: "+1 234 567 890",
    ownerName: "Michael Brown",
    ownerEmail: "michael@example.com",
    equipmentName: "Professional Excavator",
    location: "New York, USA",
    startDate: "2026-11-20",
    endDate: "2026-11-25",
    duration: "5 Days",
    quantity: 1,
    amount: 1250,
    paymentStatus: "Paid",
    bookingStatus: "Confirmed",
    bookingDate: "2026-11-15",
  },
  {
    id: 2,
    customerName: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    customerPhone: "+1 345 678 901",
    ownerName: "David Wilson",
    ownerEmail: "david@example.com",
    equipmentName: "Industrial Generator",
    location: "Chicago, USA",
    startDate: "2026-11-22",
    endDate: "2026-11-24",
    duration: "2 Days",
    quantity: 2,
    amount: 600,
    paymentStatus: "Unpaid",
    bookingStatus: "Pending",
    bookingDate: "2026-11-17",
  },
  {
    id: 3,
    customerName: "Robert Davis",
    customerEmail: "robert@example.com",
    customerPhone: "+1 456 789 012",
    ownerName: "James Taylor",
    ownerEmail: "james@example.com",
    equipmentName: "Concrete Mixer",
    location: "Los Angeles, USA",
    startDate: "2026-11-10",
    endDate: "2026-11-13",
    duration: "3 Days",
    quantity: 1,
    amount: 450,
    paymentStatus: "Paid",
    bookingStatus: "Completed",
    bookingDate: "2026-11-05",
  },
  {
    id: 4,
    customerName: "Emily Wilson",
    customerEmail: "emily@example.com",
    customerPhone: "+1 567 890 123",
    ownerName: "Daniel Anderson",
    ownerEmail: "daniel@example.com",
    equipmentName: "Hydraulic Crane",
    location: "Houston, USA",
    startDate: "2026-11-25",
    endDate: "2026-11-28",
    duration: "3 Days",
    quantity: 1,
    amount: 1800,
    paymentStatus: "Unpaid",
    bookingStatus: "Pending",
    bookingDate: "2026-11-18",
  },
  {
    id: 5,
    customerName: "Alex Martin",
    customerEmail: "alex@example.com",
    customerPhone: "+1 678 901 234",
    ownerName: "Chris Thomas",
    ownerEmail: "chris@example.com",
    equipmentName: "Water Pump",
    location: "Miami, USA",
    startDate: "2026-11-08",
    endDate: "2026-11-10",
    duration: "2 Days",
    quantity: 3,
    amount: 300,
    paymentStatus: "Refunded",
    bookingStatus: "Cancelled",
    bookingDate: "2026-11-06",
  },
];

const bookingStatusStyles: Record<BookingStatus, string> = {
  Pending: "bg-amber-50 text-amber-700",
  Confirmed: "bg-blue-50 text-blue-700",
  Cancelled: "bg-red-50 text-red-700",
  Completed: "bg-green-50 text-green-700",
};

const paymentStatusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-green-50 text-green-700",
  Unpaid: "bg-amber-50 text-amber-700",
  Refunded: "bg-purple-50 text-purple-700",
};

export default function AdminRentalsPage() {
  const [rentals, setRentals] = useState(initialRentals);
  const [search, setSearch] = useState("");
  const [bookingFilter, setBookingFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);

  const filteredRentals = useMemo(() => {
    return rentals.filter((rental) => {
      const searchMatch = [
        rental.customerName,
        rental.ownerName,
        rental.equipmentName,
        rental.customerEmail,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const bookingMatch =
        bookingFilter === "All" || rental.bookingStatus === bookingFilter;

      const paymentMatch =
        paymentFilter === "All" || rental.paymentStatus === paymentFilter;

      return searchMatch && bookingMatch && paymentMatch;
    });
  }, [rentals, search, bookingFilter, paymentFilter]);

  const totalRevenue = rentals
    .filter((rental) => rental.paymentStatus === "Paid")
    .reduce((total, rental) => total + rental.amount, 0);

  const updateBookingStatus = (
    id: number,
    status: BookingStatus
  ) => {
    setRentals((current) =>
      current.map((rental) =>
        rental.id === id ? { ...rental, bookingStatus: status } : rental
      )
    );

    setSelectedRental((current) =>
      current?.id === id ? { ...current, bookingStatus: status } : current
    );

    toast.success(`Booking marked as ${status.toLowerCase()}.`);
  };

  const updatePaymentStatus = (
    id: number,
    status: PaymentStatus
  ) => {
    setRentals((current) =>
      current.map((rental) =>
        rental.id === id ? { ...rental, paymentStatus: status } : rental
      )
    );

    setSelectedRental((current) =>
      current?.id === id ? { ...current, paymentStatus: status } : current
    );

    toast.success(`Payment marked as ${status.toLowerCase()}.`);
  };

  return (
    <div className="space-y-7">
      {/* Page Heading */}
      <div>
        <p className="mb-2 text-sm font-medium text-[#8A8178]">
          Dashboard / Admin / Rentals
        </p>
        <h1 className="text-2xl font-bold text-[#1E2022] sm:text-3xl">
          All Rentals
        </h1>
        <p className="mt-2 text-sm text-[#77716B]">
          Monitor and manage all equipment rental bookings.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Rentals"
          value={rentals.length}
          icon={<CalendarDays size={21} />}
          color="bg-blue-50 text-blue-600"
        />
        <StatCard
          title="Active Rentals"
          value={rentals.filter((r) => r.bookingStatus === "Confirmed").length}
          icon={<Package size={21} />}
          color="bg-green-50 text-green-600"
        />
        <StatCard
          title="Pending Bookings"
          value={rentals.filter((r) => r.bookingStatus === "Pending").length}
          icon={<Clock size={21} />}
          color="bg-amber-50 text-amber-600"
        />
        <StatCard
          title="Paid Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={<Wallet size={21} />}
          color="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-[#E9E5DE] bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8178]"
            />
            <input
              type="text"
              placeholder="Search customer, owner or equipment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#E9E5DE] py-3 pl-10 pr-4 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022]"
            />
          </div>

          <select
            value={bookingFilter}
            onChange={(e) => setBookingFilter(e.target.value)}
            className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-3 text-sm text-[#55504B] outline-none focus:border-[#1E2022]"
          >
            <option value="All">All Booking Status</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-3 text-sm text-[#55504B] outline-none focus:border-[#1E2022]"
          >
            <option value="All">All Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Rentals Table */}
      <div className="overflow-hidden rounded-xl border border-[#E9E5DE] bg-white">
        <div className="flex flex-col gap-1 border-b border-[#E9E5DE] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-[#1E2022]">
            Rental Bookings
          </h2>
          <p className="text-xs text-[#8A8178]">
            Showing {filteredRentals.length} of {rentals.length} bookings
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="bg-[#FAF9F7]">
              <tr className="text-xs font-semibold uppercase tracking-wide text-[#8A8178]">
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Owner</th>
                <th className="px-5 py-4">Equipment</th>
                <th className="px-5 py-4">Rental Duration</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Payment</th>
                <th className="px-5 py-4">Booking Status</th>
                <th className="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#F0EDE8]">
              {filteredRentals.map((rental) => (
                <tr
                  key={rental.id}
                  className="transition hover:bg-[#FCFBF9]"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-[#1E2022]">
                      {rental.customerName}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.customerEmail}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-[#33302D]">
                      {rental.ownerName}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.ownerEmail}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-[#33302D]">
                      {rental.equipmentName}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.location}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-[#33302D]">
                      {rental.duration}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      {rental.startDate} – {rental.endDate}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-[#1E2022]">
                    ${rental.amount.toLocaleString()}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${paymentStatusStyles[rental.paymentStatus]}`}
                    >
                      {rental.paymentStatus}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${bookingStatusStyles[rental.bookingStatus]}`}
                    >
                      {rental.bookingStatus}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => setSelectedRental(rental)}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#E9E5DE] px-3 py-2 text-xs font-medium text-[#55504B] transition hover:bg-[#F8F7F4] hover:text-[#1E2022]"
                    >
                      <Eye size={15} />
                      Details
                    </button>
                  </td>
                </tr>
              ))}

              {filteredRentals.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-14 text-center text-sm text-[#8A8178]"
                  >
                    No rental bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rental Details Modal */}
      {selectedRental && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedRental(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#8A8178]">
                  Booking #{selectedRental.id}
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#1E2022]">
                  Rental Details
                </h2>
              </div>
              <button
                onClick={() => setSelectedRental(null)}
                className="rounded-lg p-2 text-[#77716B] transition hover:bg-[#F8F7F4]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5">
              <DetailSection title="Customer Information" icon={<Users size={18} />}>
                <Detail label="Customer Name" value={selectedRental.customerName} />
                <Detail label="Email" value={selectedRental.customerEmail} />
                <Detail label="Phone" value={selectedRental.customerPhone} />
              </DetailSection>

              <DetailSection title="Owner Information" icon={<Users size={18} />}>
                <Detail label="Owner Name" value={selectedRental.ownerName} />
                <Detail label="Email" value={selectedRental.ownerEmail} />
              </DetailSection>

              <DetailSection title="Equipment Information" icon={<Package size={18} />}>
                <Detail label="Equipment" value={selectedRental.equipmentName} />
                <Detail label="Location" value={selectedRental.location} />
                <Detail label="Quantity" value={String(selectedRental.quantity)} />
              </DetailSection>

              <DetailSection title="Rental & Payment" icon={<Wallet size={18} />}>
                <Detail label="Start Date" value={selectedRental.startDate} />
                <Detail label="End Date" value={selectedRental.endDate} />
                <Detail label="Duration" value={selectedRental.duration} />
                <Detail label="Booking Date" value={selectedRental.bookingDate} />
                <Detail
                  label="Booking Amount"
                  value={`$${selectedRental.amount.toLocaleString()}`}
                />
              </DetailSection>
            </div>

            {/* Admin Actions */}
            <div className="mt-6 space-y-4 border-t border-[#E9E5DE] pt-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#33302D]">
                  Booking Status
                </label>
                <select
                  value={selectedRental.bookingStatus}
                  onChange={(e) =>
                    updateBookingStatus(
                      selectedRental.id,
                      e.target.value as BookingStatus
                    )
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] bg-white px-3 py-3 text-sm outline-none focus:border-[#1E2022]"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#33302D]">
                  Payment Status
                </label>
                <select
                  value={selectedRental.paymentStatus}
                  onChange={(e) =>
                    updatePaymentStatus(
                      selectedRental.id,
                      e.target.value as PaymentStatus
                    )
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] bg-white px-3 py-3 text-sm outline-none focus:border-[#1E2022]"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setSelectedRental(null)}
              className="mt-6 w-full rounded-lg bg-[#1E2022] py-3 text-sm font-semibold text-white transition hover:bg-[#383B3D]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#77716B]">{title}</p>
        <div className={`rounded-lg p-2.5 ${color}`}>{icon}</div>
      </div>
      <p className="mt-4 text-2xl font-bold text-[#1E2022]">{value}</p>
    </div>
  );
}

function DetailSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#E9E5DE] p-4">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#1E2022]">
        <span className="text-[#8A8178]">{icon}</span>
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[#8A8178]">{label}</p>
      <p className="mt-1 break-words text-sm font-medium text-[#33302D]">
        {value}
      </p>
    </div>
  );
}
