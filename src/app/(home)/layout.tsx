'use client';
import React from 'react';
import Sidebar from '@/components/sideBar';
import Header from '@/components/header';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-64 flex flex-col min-h-screen  bg-gray-100">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
        
      </div>
    </>
  );
};

export default DashboardLayout;
