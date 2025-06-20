"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaTachometerAlt,
  FaFileUpload,
  FaUserShield,
  FaCogs,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { href: "/upload", label: "Upload Document", icon: FaFileUpload },
  { href: "/reports", label: "PII Reports", icon: FaUserShield },
  { href: "/settings", label: "Account Settings", icon: FaCogs },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Clear tokens here if needed (e.g., localStorage.removeItem("token"))
    router.push("/signin");
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col h-screen shadow-xl fixed ">
      {/* Header */}
      <div className="flex px-6 pt-8 pb-2 items-center">
        <Shield className="h-8 w-8 text-white" />
        <h2 className="text-2xl pl-2 font-extrabold text-center tracking-widest">PII</h2>
      </div>
        <p className="text-white w-auto  pl-6 text-xs">Personal Identifiable Information</p>

      {/* Navigation */}
      <div className="flex-1 flex flex-col justify-center px-6">
        <nav className="flex flex-col gap-4 relative">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-lg overflow-hidden transition-colors duration-200
                  ${
                    isActive
                      ? "bg-blue-800 border-l-4 border-white font-semibold"
                      : "hover:bg-blue-800 hover:border-l-4 hover:border-white"
                  }`}
              >
                {/* Active Background Animation */}
                {isActive && (
                  <motion.span
                    layoutId="activeSidebarItem"
                    className="absolute inset-0 bg-blue-800 z-0 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-4">
                  <Icon size={18} />
                  <span className="text-base">{label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User & Logout */}
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center gap-3 mb-4">
          <FaUserCircle size={24} />
          <span className="text-sm font-medium">Ahmed</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-sm transition"
        >
          <FaSignOutAlt size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
