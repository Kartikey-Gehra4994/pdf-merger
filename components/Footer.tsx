import React from "react";

const Footer = () => (
  <footer className="w-full py-8 px-4 text-center text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 mt-16">
    <div className="mb-2">&copy; {new Date().getFullYear()} PDF Merge SaaS. All rights reserved.</div>
    <div className="flex justify-center gap-4 text-sm">
      <a href="#features" className="hover:underline">Features</a>
      <a href="#testimonials" className="hover:underline">Testimonials</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
  </footer>
);

export default Footer;
