"use client";

import { useState, useEffect, ReactNode } from "react";
import { 
  BriefcaseBusiness, 
  User, 
  FilePlus, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard
} from "lucide-react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed: boolean;
}

interface NavItemMobileProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  href, 
  active = false, 
  collapsed 
}) => {
  return (
    <a href={href} className="block no-underline">
      <div 
        className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
          active 
            ? "text-white border-l-4 border-white bg-gradient-to-r from-white/20 to-transparent" 
            : "text-gray-200 hover:bg-white/10"
        }`}
      >
        <div className="flex items-center">
          {icon}
          {!collapsed && <span className="ml-4">{label}</span>}
        </div>
      </div>
    </a>
  );
};

const NavItemMobile: React.FC<NavItemMobileProps> = ({ 
  icon, 
  label, 
  href, 
  active = false 
}) => {
  return (
    <a href={href} className="block no-underline">
      <div 
        className={`flex flex-col items-center px-2 ${
          active ? "text-orange-500" : "text-gray-500"
        }`}
      >
        <div className={`${active ? "border-t-2 border-orange-500 pt-1" : "pt-2"}`}>
          {icon}
        </div>
        <span className="text-xs mt-1">{label}</span>
      </div>
    </a>
  );
};

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  // Handle auto-collapsing on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 815) { // md breakpoint is typically 768px
        setCollapsed(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = (): void => {
    setCollapsed(!collapsed);
  };

  // Define navigation items for reuse
  const navItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: "Dashboard", 
      href: "/dashboard", 
      active: false 
    },
    { 
      icon: <BriefcaseBusiness size={20} />, 
      label: "Portfolio", 
      href: "/portfolio", 
      active: true 
    },
    { 
      icon: <FilePlus size={20} />, 
      label: "Inputs", 
      href: "/inputs", 
      active: false 
    },
    { 
      icon: <User size={20} />, 
      label: "Profile", 
      href: "/profile", 
      active: false 
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div 
        className={`relative top-0 left-0 h-screen z-20 hidden sm:flex flex-col transition-all duration-300 bg-[#DF5433] shadow-md ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && <div className="text-white text-xl font-bold">LOGO</div>}
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col flex-grow mt-6">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={item.active}
              collapsed={collapsed}
            />
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 z-10 left-0 w-full sm:hidden bg-white border-t border-gray-200 shadow-lg rounded-t-2xl">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item, index) => (
            <NavItemMobile
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;