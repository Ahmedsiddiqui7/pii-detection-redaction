// components/AuthLayout.tsx
"use client";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Left Side: Project UI Showcase */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-900 to-blue-600 items-center justify-center text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Project</h1>
          <p className="text-lg">
            Detect Personally Identifiable Information (PII) easily and securely.
          </p>
          
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
