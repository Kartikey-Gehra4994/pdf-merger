import React from "react";

const Hero = () => (
  <section className="w-full max-w-4xl mx-auto text-center py-16 px-4 flex flex-col items-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
      Merge PDFs Effortlessly
    </h1>
    <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl">
      The easiest way to combine your PDF files. Fast, secure, and free. Drag & drop your PDFs and merge them in seconds. No sign-up required for basic merging!
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#merge" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition text-lg">
        Try PDF Merger
      </a>
      <a href="#features" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-blue-600 dark:text-purple-400 font-semibold py-3 px-8 rounded-lg shadow hover:bg-zinc-50 dark:hover:bg-zinc-800 transition text-lg">
        Learn More
      </a>
    </div>
  </section>
);

export default Hero;
