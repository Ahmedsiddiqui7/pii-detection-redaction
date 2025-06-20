"use client";

import { useState } from "react";
import { UploadCloud, Trash2, FileText, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [piiData, setPiiData] = useState<any[]>([]);
  const [redactedImage, setRedactedImage] = useState<string | null>(null);
  const [mode, setMode] = useState<"classify" | "redact">("classify");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      resetData();
      toast.success("File selected successfully!");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      resetData();
      toast.success("File dropped successfully!");
    }
  };

  const resetData = () => {
    setError("");
    setPiiData([]);
    setRedactedImage(null);
  };

  const processFile = async () => {
    if (!selectedFile) return;

    setLoading(true);
    resetData();

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const endpoint = mode === "classify" ? "/classify" : "/redact";

      const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (mode === "classify") {
        const entities = data.pii_entities;
        const formattedData: any[] = [];

        for (const type in entities) {
          entities[type].forEach((value: string) => {
            formattedData.push({ type, text: value });
          });
        }

        setPiiData(formattedData);
        toast.success("PII classification completed!");
      } else {
        const imagePath = data.annotated_image || "";
        const piiEntities = data.pii_entities || {};
        const formattedData: any[] = [];

        for (const type in piiEntities) {
          piiEntities[type].forEach((value: string) => {
            formattedData.push({ type, text: value });
          });
        }

        setRedactedImage(`http://127.0.0.1:5000/${imagePath.replace(/^\/?/, '')}`);
        setPiiData(formattedData);
        toast.success("PII redaction completed!");
      }
    } catch (error) {
      console.error("Error processing file:", error);
      setError("Failed to process file. Please try again.");
      toast.error("Failed to process file");
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    resetData();
    toast("File removed", {
      description: "You can upload a new one anytime.",
    });
  };

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          {mode === "classify" ? "Classify PII" : "Redact PII"}
        </h1>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-6 gap-4">
          {["classify", "redact"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as "classify" | "redact")}
              className={`px-6 py-2 rounded-full font-medium ${
                mode === m
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        {/* Drop Zone */}
        <motion.div
          className="w-full border-2 border-dashed border-indigo-400 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-2xl p-10 text-center cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput")?.click()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <UploadCloud className="mx-auto h-12 w-12 text-indigo-500 mb-4 animate-bounce" />
          <p className="text-lg">
            Drag & drop a file here or{" "}
            <span className="text-indigo-600 font-semibold underline">browse</span>
          </p>
          <input
            id="fileInput"
            type="file"
            accept=".jpeg,.jpg,.png,.pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            className="mt-4 text-red-600 font-medium text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ {error}
          </motion.div>
        )}

        {/* File Info */}
        {selectedFile && (
          <motion.div
            className="mt-6 flex items-center justify-between gap-4 p-4 border border-slate-200 bg-white dark:bg-slate-700 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4">
              {selectedFile.type.includes("image") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt={selectedFile.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ) : (
                <FileText className="w-12 h-12 text-indigo-400" />
              )}
              <div>
                <p className="font-semibold">{selectedFile.name}</p>
                <p className="text-sm text-slate-500">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button onClick={removeFile} className="text-red-500 hover:text-red-700">
              <Trash2 className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Process Button */}
        {selectedFile && (
          <button
            onClick={processFile}
            disabled={loading}
            className="mt-6 w-full max-w-xs bg-gradient-to-tr from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg font-bold py-3 rounded-xl shadow-lg mx-auto flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Processing...
              </>
            ) : (
              <>{mode === "classify" ? "Classify PII" : "Redact PII"}</>
            )}
          </button>
        )}

        {/* PII Result Table */}
        {piiData.length > 0 && (
          <motion.div
            className="mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Detected PII Information</h3>
            <table className="min-w-full bg-white dark:bg-slate-600 rounded-lg overflow-hidden">
              <thead className="bg-indigo-50 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Detected Text</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-500">
                {piiData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 capitalize">{item.type}</td>
                    <td className="px-4 py-2">{item.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Redacted Image Display */}
        {redactedImage && (
          <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="text-xl font-bold mb-4">Redacted Document</h3>
            <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-lg">
              <img src={redactedImage} alt="Redacted" className="w-full h-auto rounded-lg border" />
              <div className="mt-4 flex justify-center">
                <a
                  href={redactedImage}
                  download="redacted-document.png"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                >
                  Download Redacted Image
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
