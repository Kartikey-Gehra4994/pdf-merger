import React from "react";

const Testimonials = () => (
  <section className="w-full max-w-5xl mx-auto py-12 px-4" id="testimonials">
    <h2 className="text-2xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">“Super easy to use and fast! I merged my PDFs in seconds. Highly recommended.”</p>
        <div className="font-bold text-blue-600 dark:text-purple-400">— Priya S.</div>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">“The best PDF merger I’ve tried. Love the drag and drop feature!”</p>
        <div className="font-bold text-blue-600 dark:text-purple-400">— Alex R.</div>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 border border-zinc-100 dark:border-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">“Secure and private. I feel safe merging my documents here.”</p>
        <div className="font-bold text-blue-600 dark:text-purple-400">— Fatima K.</div>
      </div>
    </div>
  </section>
);

export default Testimonials;
