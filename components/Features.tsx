import React from "react";
import { FaFilePdf, FaCheckCircle, FaLock, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaFilePdf className="text-red-500 text-3xl" />,
    title: "Merge PDFs Instantly",
    description: "Combine multiple PDF files into one in seconds. No registration required to try!",
  },
  {
    icon: <FaCloudUploadAlt className="text-blue-500 text-3xl" />,
    title: "Easy Drag & Drop",
    description: "Upload your PDFs with a simple drag & drop interface or select from your device.",
  },
  {
    icon: <FaLock className="text-green-500 text-3xl" />,
    title: "Secure & Private",
    description: "Your files are encrypted and deleted after processing. Your privacy is our priority.",
  },
  {
    icon: <FaCheckCircle className="text-purple-500 text-3xl" />,
    title: "Free & Fast",
    description: "Enjoy lightning-fast PDF merging for free. Upgrade for more features!",
  },
];

const Features = () => (
  <section className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {features.map((f, i) => (
      <div
        key={i}
        className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-zinc-100 dark:border-zinc-800 hover:scale-105 transition-transform"
      >
        {f.icon}
        <h3 className="mt-4 font-bold text-lg text-zinc-900 dark:text-zinc-100">{f.title}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">{f.description}</p>
      </div>
    ))}
  </section>
);

export default Features;
