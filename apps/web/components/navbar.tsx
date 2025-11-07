"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ import useRouter

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // ✅ initialize router

  const handleNavigation = (path: string) => {
    router.push(path);     // navigate programmatically
    setMenuOpen(false);    // close mobile menu after navigation
  };

  return (
    <div className="bg-blue-300">
      {/* Top Navbar */}
      <div className="h-16 flex items-center justify-between px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">Recruite Me</div>
          <div className="bg-green-100 rounded-lg w-32 h-9 flex items-center justify-center cursor-pointer text-sm sm:text-base">
            search here
          </div>
        </div>

        {/* Center + Right for Desktop */}
        <div className="hidden sm:flex items-center gap-8 text-lg">
          <div className="flex gap-6">
            <div
              onClick={() => handleNavigation("/internships")}
              className="cursor-pointer hover:text-blue-700"
            >
              Internships
            </div>
            <div
              onClick={() => handleNavigation("/jobs")}
              className="cursor-pointer hover:text-blue-700"
            >
              Jobs
            </div>
            <div
              onClick={() => handleNavigation("/mentorship")}
              className="cursor-pointer hover:text-blue-700"
            >
              Mentorship
            </div>
            <div
              onClick={() => handleNavigation("/competitions")}
              className="cursor-pointer hover:text-blue-700"
            >
              Competition
            </div>
          </div>

          <div className="flex gap-2 text-lg">
            <div
              onClick={() => handleNavigation("/signup")}
              className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-300"
            >
              Signup
            </div>
            <div
              onClick={() => handleNavigation("/login")}
              className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-300"
            >
              Login
            </div>
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start bg-blue-200 px-4 py-3 space-y-3 sm:hidden">
          <div
            onClick={() => handleNavigation("/internships")}
            className="cursor-pointer w-full"
          >
            Internships
          </div>
          <div
            onClick={() => handleNavigation("/jobs")}
            className="cursor-pointer w-full"
          >
            Jobs
          </div>
          <div
            onClick={() => handleNavigation("/mentorship")}
            className="cursor-pointer w-full"
          >
            Mentorship
          </div>
          <div
            onClick={() => handleNavigation("/competitions")}
            className="cursor-pointer w-full"
          >
            Competition
          </div>
          <div className="flex gap-3 w-full justify-start pt-2">
            <div
              onClick={() => handleNavigation("/signup")}
              className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer"
            >
              Signup
            </div>
            <div
              onClick={() => handleNavigation("/login")}
              className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer"
            >
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
