import React from 'react'
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className="w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 h-16">
        <div className="flex items-center gap-2 select-none">
          {/* <Image src="/vercel.svg" alt="PDF Merge Logo" width={32} height={32} className="dark:invert" /> */}
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">PDF Merger</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition">Home</a>
          <a href="/about" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition">About</a>
          <a href="/contact" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition">Contact</a>
          <a href="#features" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition hidden sm:inline">Features</a>
          <a href="#merge" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition hidden sm:inline">Merge</a>
          <a href="#testimonials" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition hidden sm:inline">Testimonials</a>
          <SignedOut>
            <SignInButton>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="ml-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-blue-600 dark:text-purple-400 px-4 py-2 rounded-lg font-semibold shadow hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Navbar