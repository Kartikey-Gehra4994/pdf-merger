"use client";

import React, { useRef, useState } from "react";
import { FaFilePdf, FaPlus, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpgradePlans from "./UpgradePlans";

interface FileItem {
  file: File;
  id: string;
}

const PdfMergeDropzone = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [merging, setMerging] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(f => f.type === "application/pdf");
    setFiles(prev => [...prev, ...droppedFiles.map(f => ({ file: f, id: Math.random().toString(36) }))]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files).filter(f => f.type === "application/pdf");
    setFiles(prev => [...prev, ...selectedFiles.map(f => ({ file: f, id: Math.random().toString(36) }))]);
  };

  const handleRemove = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleMerge = async () => {
    setMerging(true);
    try {
      const formData = new FormData();
      files.forEach(f => formData.append("files", f.file));
      const res = await fetch("/api/merge", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        if (res.status === 401) {
          toast.warning(data.error || "Please Sign in to merge PDF files.");
          // Optionally, redirect after toast
          // setTimeout(() => {
          //   window.location.href = "/sign-in";
          // }, 1500);
        } else if (res.status === 402) {
          setShowUpgrade(true);
        } else {
          alert(data.error || "Failed to merge PDFs.");
        }
        setMerging(false);
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      setFiles([]);
    } catch {
      alert("An error occurred while merging PDFs.");
    }
    setMerging(false);
  };

  if (showUpgrade) {
    return <UpgradePlans onClose={() => setShowUpgrade(false)} />;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" aria-label="Toast Notification" />
      <section className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-zinc-100 dark:border-zinc-800">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Merge your PDFs</h2>
        <div
          className="w-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition mb-4 min-h-[120px]"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
        >
          <FaFilePdf className="text-4xl text-red-400 mb-2" />
          <p className="text-zinc-600 dark:text-zinc-400">Drag & drop PDF files here, or <span className="text-blue-500 underline">browse</span></p>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {files.length > 0 && (
          <ul className="w-full mb-4">
            {files.map(f => (
              <li key={f.id} className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded mb-2">
                <span className="truncate flex items-center gap-2"><FaFilePdf className="text-red-400" /> {f.file.name}</span>
                <button onClick={e => { e.stopPropagation(); handleRemove(f.id); }} className="text-red-500 hover:text-red-700"><FaTrash /></button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed transition min-h-[48px]"
          disabled={files.length < 2 || merging}
          onClick={handleMerge}
        >
          {merging ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Merging...
            </span>
          ) : (
            <><FaPlus /> Merge PDF{files.length > 1 ? "s" : ""}</>
          )}
        </button>
        <p className="text-xs text-zinc-400 mt-2">* Demo only. No files are uploaded.</p>
      </section>
    </>
  );
};

export default PdfMergeDropzone;
