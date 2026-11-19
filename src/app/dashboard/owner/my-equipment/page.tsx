
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Package,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const initialEquipment = [
  {
    id: 1,
    name: "Professional Excavator",
    category: "Construction",
    price: 8500,
    rentalType: "Daily",
    quantity: 3,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=500",
  },
  {
    id: 2,
    name: "Industrial Generator",
    category: "Power Equipment",
    price: 3500,
    rentalType: "Daily",
    quantity: 5,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500",
  },
  {
    id: 3,
    name: "Concrete Mixer",
    category: "Construction",
    price: 1800,
    rentalType: "Daily",
    quantity: 2,
    status: "Rejected",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
  },
  {
    id: 4,
    name: "Hydraulic Crane",
    category: "Construction",
    price: 12000,
    rentalType: "Daily",
    quantity: 1,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500",
  },
];

export default function MyEquipmentPage() {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    if (!confirmed) return;

    setEquipment((prev) => prev.filter((item) => item.id !== id));
    toast.success("Equipment deleted successfully!");
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-50 text-green-700";
      case "Pending":
        return "bg-amber-50 text-amber-700";
      case "Rejected":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 size={14} />;
      case "Pending":
        return <Clock size={14} />;
      case "Rejected":
        return <XCircle size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#1E2022]">
            My Equipment
          </h2>
          <p className="mt-1 text-sm text-[#8A8178]">
            Manage and monitor all your listed equipment.
          </p>
        </div>

        <Link
          href="/dashboard/owner/add-equipment"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          <Plus size={18} />
          Add Equipment
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Total Equipment</p>
            <Package className="text-[#77716B]" size={20} />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Approved</p>
            <CheckCircle2 className="text-green-600" size={20} />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.filter((item) => item.status === "Approved").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Pending</p>
            <Clock className="text-amber-600" size={20} />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.filter((item) => item.status === "Pending").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Rejected</p>
            <XCircle className="text-red-600" size={20} />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.filter((item) => item.status === "Rejected").length}
          </h3>
        </div>
      </div>

      <div className="rounded-xl border border-[#E9E5DE] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E9E5DE] p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-bold text-[#1E2022]">Equipment Listings</h3>
            <p className="mt-1 text-xs text-[#8A8178]">
              View and manage your equipment inventory.
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
                placeholder="Search equipment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-[#E9E5DE] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#1E2022] sm:w-56"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#1E2022]"
            >
              <option value="All">All Status</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#F8F7F4] text-xs uppercase tracking-wide text-[#8A8178]">
              <tr>
                <th className="px-5 py-4 font-semibold">Equipment</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Rental Price</th>
                <th className="px-5 py-4 font-semibold">Quantity</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9E5DE]">
              {filteredEquipment.map((item) => (
                <tr key={item.id} className="transition hover:bg-[#FAF9F7]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-lg bg-[#F8F7F4]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E2022]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-[#8A8178]">
                          ID: EQ-{String(item.id).padStart(3, "0")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#77716B]">
                    {item.category}
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#1E2022]">
                      ৳{item.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-[#8A8178]">
                      / {item.rentalType.toLowerCase()}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-[#1E2022]">
                    {item.quantity} units
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(item.status)}`}
                    >
                      {getStatusIcon(item.status)}
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          toast("Equipment details will be available soon.")
                        }
                        title="View Details"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-[#77716B] transition hover:bg-gray-100"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={() =>
                          toast("Update feature will be available soon.")
                        }
                        title="Update"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-blue-600 transition hover:bg-blue-50"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        title="Delete"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredEquipment.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <Package
                      size={32}
                      className="mx-auto mb-3 text-[#C5BFB6]"
                    />
                    <p className="font-semibold text-[#1E2022]">
                      No equipment found
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
            Showing {filteredEquipment.length} of {equipment.length} equipment listings
          </p>
        </div>
      </div>
    </div>
  );
}
