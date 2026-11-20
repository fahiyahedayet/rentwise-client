
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
  ShieldCheck,
  CalendarDays,
  Camera,
} from "lucide-react";
import toast from "react-hot-toast";

interface AdminProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
}

const initialProfile: AdminProfile = {
  name: "Admin User",
  email: "admin@rentwise.com",
  phone: "+880 1712-345678",
  address: "Dhaka, Bangladesh",
  bio: "Managing the Rentwise platform and ensuring a smooth experience for customers and equipment owners.",
};

export default function AdminProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [formData, setFormData] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    field: keyof AdminProfile,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Name and phone number are required.");
      return;
    }

    setProfile(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="space-y-7">
      {/* Page Heading */}
      <div>
        <p className="mb-2 text-sm font-medium text-[#8A8178]">
          Dashboard / Admin / My Profile
        </p>

        <h1 className="text-2xl font-bold text-[#1E2022] sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-[#77716B]">
          Manage your administrator account information.
        </p>
      </div>

      {/* Profile Header */}
      <div className="overflow-hidden rounded-xl border border-[#E9E5DE] bg-white">
        <div className="h-32 bg-gradient-to-r from-[#1E2022] via-[#34383A] to-[#5A625D]" />

        <div className="flex flex-col gap-5 px-5 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-7">
          <div className="-mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-[#EAE7E1] text-[#77716B] shadow-sm">
              <UserRound size={42} />

              <button
                type="button"
                className="absolute -bottom-2 -right-2 rounded-full border-2 border-white bg-[#1E2022] p-2 text-white transition hover:bg-[#383B3D]"
                title="Profile photo"
                onClick={() =>
                  toast("Profile photo upload will be available later.")
                }
              >
                <Camera size={14} />
              </button>
            </div>

            <div className="pb-1">
              <h2 className="text-xl font-bold text-[#1E2022]">
                {profile.name}
              </h2>

              <p className="mt-1 text-sm text-[#77716B]">
                {profile.email}
              </p>

              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                <ShieldCheck size={14} />
                Administrator
              </span>
            </div>
          </div>

          {!isEditing && (
            <button
              onClick={handleEdit}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#383B3D]"
            >
              <Pencil size={16} />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Profile Information */}
      <div className="rounded-xl border border-[#E9E5DE] bg-white p-5 sm:p-7">
        <div className="mb-6 flex flex-col gap-2 border-b border-[#E9E5DE] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#1E2022]">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-[#77716B]">
              Your personal and contact details.
            </p>
          </div>

          {isEditing && (
            <span className="w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Editing Mode
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}
          <ProfileField
            label="Full Name"
            icon={<UserRound size={18} />}
            value={isEditing ? formData.name : profile.name}
            editing={isEditing}
            onChange={(value) => handleChange("name", value)}
          />

          {/* Email */}
          <ProfileField
            label="Email Address"
            icon={<Mail size={18} />}
            value={profile.email}
            editing={false}
            readOnly
          />

          {/* Phone */}
          <ProfileField
            label="Phone Number"
            icon={<Phone size={18} />}
            value={isEditing ? formData.phone : profile.phone}
            editing={isEditing}
            onChange={(value) => handleChange("phone", value)}
          />

          {/* Address */}
          <ProfileField
            label="Address"
            icon={<MapPin size={18} />}
            value={isEditing ? formData.address : profile.address}
            editing={isEditing}
            onChange={(value) => handleChange("address", value)}
          />
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#55504B]">
            <UserRound size={17} />
            About Me
          </label>

          {isEditing ? (
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Write something about yourself..."
              className="w-full resize-none rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022]"
            />
          ) : (
            <p className="rounded-lg bg-[#F8F7F4] p-4 text-sm leading-7 text-[#77716B]">
              {profile.bio || "No bio added yet."}
            </p>
          )}
        </div>

        {/* Edit Actions */}
        {isEditing && (
          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[#E9E5DE] pt-6 sm:flex-row sm:justify-end">
            <button
              onClick={handleCancel}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E9E5DE] px-5 py-3 text-sm font-semibold text-[#55504B] transition hover:bg-[#F8F7F4]"
            >
              <X size={16} />
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E2022] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#383B3D]"
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Account Information */}
      <div className="rounded-xl border border-[#E9E5DE] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-bold text-[#1E2022]">
          Account Information
        </h2>

        <p className="mt-1 text-sm text-[#77716B]">
          Your Rentwise administrator account details.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-[#F8F7F4] p-3 text-[#77716B]">
              <ShieldCheck size={19} />
            </div>

            <div>
              <p className="text-xs text-[#8A8178]">Account Role</p>
              <p className="mt-1 text-sm font-semibold text-[#1E2022]">
                Administrator
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-[#F8F7F4] p-3 text-[#77716B]">
              <CalendarDays size={19} />
            </div>

            <div>
              <p className="text-xs text-[#8A8178]">Account Status</p>
              <p className="mt-1 text-sm font-semibold text-green-700">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  icon,
  value,
  editing,
  onChange,
  readOnly = false,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  editing: boolean;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#55504B]">
        <span className="text-[#8A8178]">{icon}</span>
        {label}
        {readOnly && (
          <span className="ml-auto text-xs font-normal text-[#8A8178]">
            Read only
          </span>
        )}
      </label>

      {editing && !readOnly ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full rounded-lg border border-[#E9E5DE] px-4 py-3 text-sm text-[#1E2022] outline-none transition focus:border-[#1E2022]"
        />
      ) : (
        <div className="rounded-lg bg-[#F8F7F4] px-4 py-3 text-sm text-[#33302D]">
          {value || "Not provided"}
        </div>
      )}
    </div>
  );
}
