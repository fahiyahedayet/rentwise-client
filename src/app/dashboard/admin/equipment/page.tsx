
"use client";

import { useState } from "react";
import {
  Search,
  Package,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Pencil,
  Trash2,
  Check,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

type EquipmentStatus = "Pending" | "Approved" | "Rejected";

interface Equipment {
  id: number;
  name: string;
  category: string;
  owner: string;
  price: number;
  quantity: number;
  status: EquipmentStatus;
  submitted: string;
}

const initialEquipment: Equipment[] = [
  {
    id: 1,
    name: "Professional Excavator",
    category: "Construction",
    owner: "Rahim Ahmed",
    price: 8500,
    quantity: 3,
    status: "Approved",
    submitted: "Nov 02, 2026",
  },
  {
    id: 2,
    name: "Industrial Generator",
    category: "Power Equipment",
    owner: "Nusrat Jahan",
    price: 3500,
    quantity: 5,
    status: "Pending",
    submitted: "Nov 10, 2026",
  },
  {
    id: 3,
    name: "Concrete Mixer",
    category: "Construction",
    owner: "Sakib Hasan",
    price: 1800,
    quantity: 2,
    status: "Pending",
    submitted: "Nov 12, 2026",
  },
  {
    id: 4,
    name: "Hydraulic Crane",
    category: "Construction",
    owner: "Ayesha Rahman",
    price: 12000,
    quantity: 1,
    status: "Rejected",
    submitted: "Nov 14, 2026",
  },
  {
    id: 5,
    name: "Water Pump",
    category: "Agriculture",
    owner: "Tanvir Hossain",
    price: 1200,
    quantity: 4,
    status: "Approved",
    submitted: "Nov 16, 2026",
  },
];

export default function AdminEquipmentPage() {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedEquipment, setSelectedEquipment] =
    useState<Equipment | null>(null);
  const [editingEquipment, setEditingEquipment] =
    useState<Equipment | null>(null);

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.owner.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  const updateStatus = (id: number, status: EquipmentStatus) => {
    setEquipment((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );

    toast.success(`Equipment ${status.toLowerCase()} successfully!`);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this equipment?")) {
      return;
    }

    setEquipment((prev) => prev.filter((item) => item.id !== id));
    toast.success("Equipment deleted successfully!");
  };

  const handleUpdate = () => {
    if (!editingEquipment) return;

    if (!editingEquipment.name.trim() || editingEquipment.price <= 0) {
      toast.error("Please enter valid equipment details.");
      return;
    }

    setEquipment((prev) =>
      prev.map((item) =>
        item.id === editingEquipment.id ? editingEquipment : item
      )
    );

    setEditingEquipment(null);
    toast.success("Equipment updated successfully!");
  };

  const statusStyle = (status: EquipmentStatus) => {
    switch (status) {
      case "Approved":
        return "bg-green-50 text-green-700";
      case "Pending":
        return "bg-amber-50 text-amber-700";
      case "Rejected":
        return "bg-red-50 text-red-700";
    }
  };

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-[#1E2022]">
          All Equipment
        </h2>
        <p className="mt-1 text-sm text-[#8A8178]">
          Review equipment listings and manage owner submissions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Total Equipment</p>
            <Package size={20} className="text-[#77716B]" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Approved</p>
            <CheckCircle2 size={20} className="text-green-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.filter((item) => item.status === "Approved").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Pending</p>
            <Clock size={20} className="text-amber-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {equipment.filter((item) => item.status === "Pending").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Rejected</p>
            <XCircle size={20} className="text-red-600" />
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
              Review and manage all submitted equipment.
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
                placeholder="Search equipment or owner..."
                className="w-full rounded-lg border border-[#E9E5DE] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#1E2022] sm:w-64"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#1E2022]"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="bg-[#F8F7F4] text-xs uppercase tracking-wide text-[#8A8178]">
              <tr>
                <th className="px-5 py-4 font-semibold">Equipment Name</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Owner</th>
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
                    <p className="font-semibold text-[#1E2022]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-[#8A8178]">
                      EQ-{String(item.id).padStart(3, "0")}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#77716B]">
                    {item.category}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-[#1E2022]">
                    {item.owner}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-[#1E2022]">
                    ৳{item.price.toLocaleString()}
                    <span className="font-normal text-[#8A8178]"> / day</span>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#77716B]">
                    {item.quantity} units
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setSelectedEquipment(item)}
                        title="View Details"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-[#77716B] hover:bg-gray-100"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={() => setEditingEquipment({ ...item })}
                        title="Update"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-blue-600 hover:bg-blue-50"
                      >
                        <Pencil size={16} />
                      </button>

                      {item.status === "Pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(item.id, "Approved")}
                            title="Approve"
                            className="rounded-lg border border-[#E9E5DE] p-2 text-green-600 hover:bg-green-50"
                          >
                            <Check size={16} />
                          </button>

                          <button
                            onClick={() => updateStatus(item.id, "Rejected")}
                            title="Reject"
                            className="rounded-lg border border-[#E9E5DE] p-2 text-amber-600 hover:bg-amber-50"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => handleDelete(item.id)}
                        title="Delete"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredEquipment.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <Package
                      size={32}
                      className="mx-auto mb-3 text-[#C5BFB6]"
                    />
                    <p className="font-semibold text-[#1E2022]">
                      No equipment found
                    </p>
                    <p className="mt-1 text-sm text-[#8A8178]">
                      Try changing your search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#E9E5DE] px-5 py-4">
          <p className="text-xs text-[#8A8178]">
            Showing {filteredEquipment.length} of {equipment.length} listings
          </p>
        </div>
      </div>

      {selectedEquipment && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1E2022]">
                Equipment Details
              </h3>
              <button
                onClick={() => setSelectedEquipment(null)}
                className="rounded-lg p-2 text-[#77716B] hover:bg-[#F8F7F4]"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs text-[#8A8178]">Equipment Name</p>
                <p className="mt-1 font-semibold text-[#1E2022]">
                  {selectedEquipment.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A8178]">Owner</p>
                <p className="mt-1 font-medium text-[#1E2022]">
                  {selectedEquipment.owner}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A8178]">Category</p>
                <p className="mt-1 font-medium text-[#1E2022]">
                  {selectedEquipment.category}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A8178]">Rental Price</p>
                <p className="mt-1 font-medium text-[#1E2022]">
                  ৳{selectedEquipment.price.toLocaleString()} / day
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A8178]">Submitted Date</p>
                <p className="mt-1 font-medium text-[#1E2022]">
                  {selectedEquipment.submitted}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A8178]">Status</p>
                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle(selectedEquipment.status)}`}
                >
                  {selectedEquipment.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedEquipment(null)}
              className="mt-7 w-full rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editingEquipment && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1E2022]">
                Update Equipment
              </h3>
              <button
                onClick={() => setEditingEquipment(null)}
                className="rounded-lg p-2 text-[#77716B] hover:bg-[#F8F7F4]"
                aria-label="Close editor"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Equipment Name
                </label>
                <input
                  value={editingEquipment.name}
                  onChange={(e) =>
                    setEditingEquipment({
                      ...editingEquipment,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Category
                </label>
                <input
                  value={editingEquipment.category}
                  onChange={(e) =>
                    setEditingEquipment({
                      ...editingEquipment,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Rental Price (৳)
                </label>
                <input
                  type="number"
                  min="1"
                  value={editingEquipment.price}
                  onChange={(e) =>
                    setEditingEquipment({
                      ...editingEquipment,
                      price: Number(e.target.value),
                    })
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Available Quantity
                </label>
                <input
                  type="number"
                  min="0"
                  value={editingEquipment.quantity}
                  onChange={(e) =>
                    setEditingEquipment({
                      ...editingEquipment,
                      quantity: Number(e.target.value),
                    })
                  }
                  className="w-full rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setEditingEquipment(null)}
                className="rounded-lg border border-[#E9E5DE] px-5 py-2.5 text-sm font-semibold text-[#77716B] hover:bg-[#F8F7F4]"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="rounded-lg bg-[#1E2022] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
