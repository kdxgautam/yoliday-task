// Components/NavBar.tsx
"use client";

import { ShoppingBag, Bell } from "lucide-react";
import FilterSearch from "./FilterSearch";

function NavBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white">
      {/* Left Section: Title and Tabs */}
      <div className="sm:flex-1">
        {/* Title and Icons (Mobile) */}
        <div className="flex justify-between items-center px-4 py-4 sm:py-0">
          <h1 className="text-xl font-semibold">Portfolio</h1>
          <div className="flex items-center gap-4 text-orange-600 sm:hidden">
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
            <Bell className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Tabs */}
        <div className="relative">
          <div className="absolute sm:hidden bottom-0 left-0 w-full sm:w-[80%] h-[2px] bg-gray-200 sm:bg-gray-300"></div>
          <div className="absolute hidden sm:block bottom-0 left-6 w-full sm:w-[80%] h-[2px] min-w-[70%] bg-gray-200 sm:bg-gray-300"></div>

          {/* Mobile Tabs */}
          <div className="flex sm:hidden">
            {["Project", "Saved", "Shared", "Achievement"].map((label, index) => (
              <button
                key={label}
                className={`flex-1 py-2 text-sm font-medium ${
                  index === 0
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:border-b-3 hover:border-orange-600 transition-colors duration-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:flex sm:w-[50%] sm:px-6 sm:pt-4 sm:justify-between sm:text-sm sm:font-medium">
            {["Project", "Saved", "Shared", "Achievement"].map((label, index) => (
              <button
                key={label}
                className={`flex-1 sm:px-3 py-2 relative z-10 transition-colors duration-200 ${
                  index === 0
                    ? "text-orange-600 border-b-3 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:border-b-3 hover:border-orange-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Search + Filter (Mobile) */}
        <FilterSearch isMobile />
      </div>

      {/* Search + Filter (Desktop) */}
      <FilterSearch />
    </div>
  );
}

export default NavBar;

