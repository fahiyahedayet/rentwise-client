
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Camera,
  Pencil,
  Save,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

export default function CustomerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Anderson",
    email: "john.anderson@example.com",
    phone: "+880 1712-345678",
    address: "Dhanmondi, Dhaka, Bangladesh",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-[#8A8178]">
          Customer Dashboard / Profile
        </p>
        <h1 className="text-2xl font-bold text-[#1E2022] sm:text-3xl">
          My Profile
        </h1>
        <p className="mt-2 text-sm text-[#77716B]">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#E9E5DE] bg-white">
        <div className="h-36 bg-gradient-to-r from-[#D9D3C9] via-[#E9E5DE] to-[#F5F3EF]" />

        <div className="px-6 pb-7 sm:px-8">
          <div className="-mt-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="flex items-end gap-4">
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-[#E9E5DE] text-[#77716B] shadow-sm">
                <UserRound size={48} />
              </div>

              <div className="pb-1">
                <h2 className="text-xl font-bold text-[#1E2022]">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm text-[#8A8178]">
                  Customer Account
                </p>
              </div>
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#34414A]"
              >
                <Pencil size={16} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E9E5DE] bg-white p-6 sm:p-8">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#1E2022]">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-[#8A8178]">
              Your basic account information.
            </p>
          </div>
          <UserRound size={22} className="text-[#A49C93]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#514A43]">
              Full Name
            </label>
            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999187]"
              />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E2022] disabled:cursor-default"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#514A43]">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999187]"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E2022] disabled:cursor-default"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#514A43]">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999187]"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E2022] disabled:cursor-default"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#514A43]">
              Address
            </label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999187]"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-[#E9E5DE] bg-[#F8F7F4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E2022] disabled:cursor-default"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="mt-8 flex flex-col-reverse justify-end gap-3 border-t border-[#E9E5DE] pt-6 sm:flex-row">
            <button
              onClick={handleCancel}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#E9E5DE] px-5 py-3 text-sm font-semibold text-[#514A43] transition hover:bg-[#F8F7F4]"
            >
              <X size={16} />
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#34414A]"
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
