"use client"
import FileUploadScreen from "@/components/fileUpload";
import React from "react"
import { motion } from "framer-motion";

export default function UploadPage() {
  return (
    <motion.div
      className="relative min-h-screen z-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-900 dark:to-slate-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-300 opacity-30 blur-3xl rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          top: "20%",
          left: "10%",
          zIndex: -1,
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-300 opacity-20 blur-2xl rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          bottom: "15%",
          right: "5%",
          zIndex: -1,
        }}
      />

      {/* Your actual file upload screen */}
      <FileUploadScreen />
    </motion.div>
  );
}
