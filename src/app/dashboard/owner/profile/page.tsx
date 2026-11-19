
"use client";

import { useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Save,
  X,
  Camera,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

export default function OwnerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    phone: "+880 1712-345678",
    address: "Agrabad, Chattogram, Bangladesh",
    bio: "Equipment rental service provider. Helping businesses find reliable equipment for their projects.",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setProfile(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#1E2022]">
            My Profile
          </h2>
          <p className="mt-1 text-sm text-[#8A8178]">
            Manage your personal and owner account information.
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            <Pencil size={16} />
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-xl border border-[#E9E5DE] bg-white p-6 text-center">
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#F1EFEA]">
              <UserRound size={48} className="text-[#77716B]" />
              {isEditing && (
                <button
                  type="button"
                  onClick={() =>
                    toast("Profile image upload will be available later.")
                  }
                  className="absolute bottom-0 right-0 rounded-full bg-[#1E2022] p-2 text-white"
                  title="Change profile image"
                >
                  <Camera size={15} />
                </button>
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#1E2022]">
              {profile.name}
            </h3>
            <p className="mt-1 text-sm text-[#8A8178]">Equipment Owner</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
              <ShieldCheck size={15} />
              Verified Owner
            </div>

            <div className="mt-6 border-t border-[#E9E5DE] pt-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8178]">
                Account Type
              </p>
              <p className="mt-2 font-semibold text-[#1E2022]">
                Equipment Owner
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#E9E5DE] bg-white p-6">
            <h3 className="font-bold text-[#1E2022]">Owner Information</h3>
            <p className="mt-2 text-sm leading-6 text-[#77716B]">
              Keep your contact information updated so customers can reach
              you regarding their rental bookings.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-[#E9E5DE] bg-white p-6 sm:p-8">
            <div className="mb-7">
              <h3 className="text-lg font-bold text-[#1E2022]">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-[#8A8178]">
                Your personal details and contact information.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8178]"
                  />
                  <input
                    type="text"
                    name="name"
                    value={isEditing ? formData.name : profile.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-[#E9E5DE] bg-[#FAF9F7] py-3 pl-11 pr-4 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022] disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8178]"
                  />
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-[#E9E5DE] bg-[#F1EFEA] py-3 pl-11 pr-4 text-sm text-[#8A8178]"
                  />
                </div>
                <p className="mt-2 text-xs text-[#8A8178]">
                  Email address cannot be changed.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8178]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={isEditing ? formData.phone : profile.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-[#E9E5DE] bg-[#FAF9F7] py-3 pl-11 pr-4 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022] disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  Address
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-[#8A8178]"
                  />
                  <input
                    type="text"
                    name="address"
                    value={isEditing ? formData.address : profile.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your address"
                    className="w-full rounded-lg border border-[#E9E5DE] bg-[#FAF9F7] py-3 pl-11 pr-4 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022] disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2022]">
                  About Me
                </label>
                <textarea
                  name="bio"
                  value={isEditing ? formData.bio : profile.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={4}
                  placeholder="Write something about yourself..."
                  className="w-full resize-none rounded-lg border border-[#E9E5DE] bg-[#FAF9F7] px-4 py-3 text-sm leading-6 text-[#1E2022] outline-none transition focus:border-[#1E2022] disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#E9E5DE] pt-6 sm:flex-row sm:justify-end">
                <button
                  onClick={handleCancel}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E9E5DE] px-5 py-3 text-sm font-semibold text-[#77716B] transition hover:bg-[#F8F7F4]"
                >
                  <X size={16} />
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
