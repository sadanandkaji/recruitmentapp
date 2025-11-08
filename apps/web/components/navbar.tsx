"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); 

  const handleNavigation = (path: string) => {
    router.push(path);     
    setMenuOpen(false);    
  };

  return (
    <div className="bg-blue-300">
      {/* Top Navbar */}
      <div className="h-16 flex items-center justify-between px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold sm:text-2xl sm:font-bold">
            Recruite Me</div>
          <input
          type="text" className="bg-green-100  rounded-lg w-32 h-9 flex items-center justify-center text-sm sm:text-base sm:w-40 p-2  border border-black"
           placeholder="search here . . . ." 
          />
        </div>

        {/* Center + Right for Desktop */}
        <div className="hidden sm:flex items-center gap-8 text-lg pr-4">
          <div className="flex gap-6">
            <div
              onClick={() => handleNavigation("/")}
              className="cursor-pointer hover:text-blue-700"
            >
              home
            </div>
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

          
        </div>

        <div className=" text-sm   sm:text-lg font-bold">
            <div
              onClick={() => handleNavigation("/signin")}
              className="bg-green-200 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-300"
            >
              signup
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
              onClick={() => handleNavigation("/")}
              className="cursor-pointer hover:text-blue-700"
            >
              home
            </div>
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
        </div>
      )}
    </div>
  );
}
