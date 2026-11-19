
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Lock,
  Image as ImageIcon,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!hasUppercase || !hasLowercase || !hasMinLength) {
      const message =
        "Password must contain uppercase, lowercase letters and at least 6 characters.";

      setError(message);
      toast.error(message);
      return;
    }

    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      photo: formData.get("photo") as string,
      password,
    };

    try {
      setLoading(true);

      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      toast.success("Account created successfully!");

      router.push("/");
      router.refresh();
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F7F4] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#E9E5DE] bg-white shadow-sm lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-[#1E2022] p-8 text-white sm:p-12 lg:p-14">
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-[#C6BFB4] uppercase">
                Welcome to Rentwise
              </span>

              <h1 className="mt-8 text-4xl leading-tight font-bold sm:text-5xl">
                Rent smarter.
                <br />
                Work better.
              </h1>

              <p className="mt-6 max-w-md leading-7 text-white/65">
                Find the right equipment, simplify your rentals, and keep
                your projects moving forward with Rentwise.
              </p>
            </div>

            <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg leading-8 text-white/80">
                “The right equipment makes every project easier.”
              </p>
              <p className="mt-4 text-sm text-white/45">
                Your projects deserve better tools.
              </p>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-12 sm:py-14">
            <div className="mx-auto max-w-md">
              <div>
                <p className="text-sm font-semibold text-[#8A8177]">
                  CREATE YOUR ACCOUNT
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#1E2022]">
                  Get started
                </h2>

                <p className="mt-2 text-sm text-[#77716B]">
                  Create an account to start renting equipment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#35312D]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-[#999187]"
                      size={19}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] py-3.5 pr-4 pl-12 text-sm text-[#1E2022] outline-none transition placeholder:text-[#AAA39A] focus:border-[#1E2022]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#35312D]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-[#999187]"
                      size={19}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] py-3.5 pr-4 pl-12 text-sm text-[#1E2022] outline-none transition placeholder:text-[#AAA39A] focus:border-[#1E2022]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#35312D]">
                    Profile Photo URL
                    <span className="ml-2 font-normal text-[#999187]">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <ImageIcon
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-[#999187]"
                      size={19}
                    />
                    <input
                      type="url"
                      name="photo"
                      placeholder="https://example.com/photo.jpg"
                      className="w-full rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] py-3.5 pr-4 pl-12 text-sm text-[#1E2022] outline-none transition placeholder:text-[#AAA39A] focus:border-[#1E2022]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#35312D]">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-[#999187]"
                      size={19}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      required
                      className="w-full rounded-xl border border-[#E9E5DE] bg-[#FDFCFA] py-3.5 pr-12 pl-12 text-sm text-[#1E2022] outline-none transition placeholder:text-[#AAA39A] focus:border-[#1E2022]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-[#999187]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                    {[
                      { valid: hasUppercase, label: "Uppercase" },
                      { valid: hasLowercase, label: "Lowercase" },
                      { valid: hasMinLength, label: "6+ characters" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 text-[#77716B]"
                      >
                        {item.valid ? (
                          <CheckCircle2 size={14} className="text-green-600" />
                        ) : (
                          <XCircle size={14} className="text-[#AAA39A]" />
                        )}
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="rounded-lg bg-[#F8F7F4] p-3 text-sm text-[#8B4438]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E2022] py-4 text-sm font-semibold text-white transition hover:bg-[#34414A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>

              <div className="relative my-7">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E9E5DE]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs text-[#999187]">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#E9E5DE] py-3.5 text-sm font-semibold text-[#35312D] transition hover:bg-[#F8F7F4]"
              >
                <svg viewBox="0 0 48 48" className="h-5 w-5">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                    transform="translate(0 4)"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.93c-.58 2.96-2.26 5.48-4.73 7.18l7.65 5.94c4.46-4.13 7.13-10.2 7.13-17.59Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.98 23.98 0 0 0 0 21.56l7.98-6.19Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.9-5.86l-7.65-5.94c-2.13 1.43-4.86 2.28-8.25 2.28-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48Z"
                  />
                </svg>
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm text-[#77716B]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#1E2022] underline underline-offset-4"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
