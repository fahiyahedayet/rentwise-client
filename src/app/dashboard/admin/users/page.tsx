
"use client";

import { useState } from "react";
import {
  Search,
  Users,
  UserRound,
  ShieldCheck,
  Store,
  Pencil,
  Trash2,
  X,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

type UserRole = "Customer" | "Owner" | "Admin";

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  joined: string;
  status: "Active" | "Blocked";
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    role: "Customer",
    joined: "Nov 02, 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    role: "Owner",
    joined: "Nov 04, 2026",
    status: "Active",
  },
  {
    id: 3,
    name: "Sakib Hasan",
    email: "sakib@gmail.com",
    role: "Customer",
    joined: "Nov 06, 2026",
    status: "Active",
  },
  {
    id: 4,
    name: "Ayesha Rahman",
    email: "ayesha@gmail.com",
    role: "Owner",
    joined: "Nov 08, 2026",
    status: "Active",
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    email: "tanvir@gmail.com",
    role: "Admin",
    joined: "Nov 10, 2026",
    status: "Active",
  },
  {
    id: 6,
    name: "Mim Akter",
    email: "mim@gmail.com",
    role: "Customer",
    joined: "Nov 12, 2026",
    status: "Blocked",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState<UserRole>("Customer");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const openRoleEditor = (user: User) => {
    setSelectedUser(user);
    setNewRole(user.role);
  };

  const handleRoleUpdate = () => {
    if (!selectedUser) return;

    setUsers((prev) =>
      prev.map((user) =>
        user.id === selectedUser.id
          ? { ...user, role: newRole }
          : user
      )
    );

    setSelectedUser(null);
    toast.success("User role updated successfully!");
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.success("User removed successfully!");
  };

  const roleStyle = (role: UserRole) => {
    switch (role) {
      case "Admin":
        return "bg-purple-50 text-purple-700";
      case "Owner":
        return "bg-blue-50 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-[#1E2022]">
          All Users
        </h2>
        <p className="mt-1 text-sm text-[#8A8178]">
          Manage registered users and control their account roles.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Total Users</p>
            <Users size={20} className="text-[#77716B]" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {users.length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Customers</p>
            <UserRound size={20} className="text-[#77716B]" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {users.filter((user) => user.role === "Customer").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Owners</p>
            <Store size={20} className="text-blue-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {users.filter((user) => user.role === "Owner").length}
          </h3>
        </div>

        <div className="rounded-xl border border-[#E9E5DE] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8A8178]">Admins</p>
            <ShieldCheck size={20} className="text-purple-600" />
          </div>
          <h3 className="mt-3 text-3xl font-bold text-[#1E2022]">
            {users.filter((user) => user.role === "Admin").length}
          </h3>
        </div>
      </div>

      <div className="rounded-xl border border-[#E9E5DE] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E9E5DE] p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-bold text-[#1E2022]">Registered Users</h3>
            <p className="mt-1 text-xs text-[#8A8178]">
              View user details and manage account permissions.
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
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-[#E9E5DE] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#1E2022] sm:w-56"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-lg border border-[#E9E5DE] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#1E2022]"
            >
              <option value="All">All Roles</option>
              <option value="Customer">Customer</option>
              <option value="Owner">Owner</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-[#F8F7F4] text-xs uppercase tracking-wide text-[#8A8178]">
              <tr>
                <th className="px-5 py-4 font-semibold">User</th>
                <th className="px-5 py-4 font-semibold">Role</th>
                <th className="px-5 py-4 font-semibold">Registration Date</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9E5DE]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-[#FAF9F7]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1EFEA] text-sm font-bold text-[#77716B]">
                        {user.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E2022]">
                          {user.name}
                        </p>
                        <p className="mt-1 text-xs text-[#8A8178]">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${roleStyle(user.role)}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#77716B]">
                    {user.joined}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => openRoleEditor(user)}
                        title="Change Role"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-blue-600 transition hover:bg-blue-50"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        title="Delete User"
                        className="rounded-lg border border-[#E9E5DE] p-2 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center">
                    <Users
                      size={32}
                      className="mx-auto mb-3 text-[#C5BFB6]"
                    />
                    <p className="font-semibold text-[#1E2022]">
                      No users found
                    </p>
                    <p className="mt-1 text-sm text-[#8A8178]">
                      Try changing your search or role filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#E9E5DE] px-5 py-4">
          <p className="text-xs text-[#8A8178]">
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1E2022]">
                  Change User Role
                </h3>
                <p className="mt-1 text-sm text-[#8A8178]">
                  Update {selectedUser.name}&apos;s role.
                </p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="rounded-lg p-2 text-[#77716B] hover:bg-[#F8F7F4]"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                Select Role
              </label>

              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value as UserRole)}
                className="w-full rounded-lg border border-[#E9E5DE] bg-white px-4 py-3 text-sm outline-none focus:border-[#1E2022]"
              >
                <option value="Customer">Customer</option>
                <option value="Owner">Owner</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="rounded-lg border border-[#E9E5DE] px-5 py-2.5 text-sm font-semibold text-[#77716B] hover:bg-[#F8F7F4]"
              >
                Cancel
              </button>

              <button
                onClick={handleRoleUpdate}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                <Check size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
