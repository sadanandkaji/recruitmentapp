import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="cursor-pointer">Internships</div>
            <div className="cursor-pointer">Jobs</div>
            <div className="cursor-pointer">Mentorship</div>
            <div className="cursor-pointer">Competition</div>
          </div>
          <div className="flex gap-2 text-lg">
            <div className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer">
              Signup
            </div>
            <div className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer">
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
          <div className="cursor-pointer w-full">Internships</div>
          <div className="cursor-pointer w-full">Jobs</div>
          <div className="cursor-pointer w-full">Mentorship</div>
          <div className="cursor-pointer w-full">Competition</div>
          <div className="flex gap-3 w-full justify-start pt-2">
            <div className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer">
              Signup
            </div>
            <div className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer">
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
