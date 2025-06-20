'use client';
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleAccountSettings = () => {
    setDropdownOpen(false);
    router.push('/settings');
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    router.push('/signin');
  };

  return (
    <header className="bg-slate-50 border-b border-gray-300 p-4 flex justify-between items-center shadow-sm z-50 sticky top-0">
      {/* <h1 className="text-2xl font-bold tracking-wide text-gray-800">PII Detection</h1> */}
      <Shield className="h-10 w-10 text-white p-1 bg-blue-800 rounded-lg hover:bg-blue-600 transition" size={24}   />

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-blue-800 p-2 px-4 rounded-full text-white hover:bg-blue-600 transition"
          >
            <FaUserCircle size={24} />
            <span className="hidden md:inline">Ahmed</span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg "
              >
                <ul className="py-2 text-sm">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleAccountSettings}
                  >
                    Account Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
