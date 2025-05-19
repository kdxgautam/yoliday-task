import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

function TopNavBar() {
  return (
    <div className="hidden sm:block bg-white w-full absolute top-0 shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left side intentionally empty */}
        <div></div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Bell with red dot */}
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
          </div>

          {/* User section */}
          <div className="flex items-center gap-3">
            {/* Circular Profile Image */}
            <div className="w-9 h-9 rounded-full overflow-hidden ">
              <Image
                src="/image.png"
                alt="profile"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name and role */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm   font-semibold text-gray-900">Lorem Ips</span>
              <span className="text-xs text-gray-500">Manager</span>
            </div>

            {/* Dropdown icon */}
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
