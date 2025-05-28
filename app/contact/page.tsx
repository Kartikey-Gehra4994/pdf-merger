"use client" 
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // Simulate async send
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-10 border border-zinc-100 dark:border-zinc-800">
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow">Contact Us</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-300 mb-8 text-lg">We'd love to hear from you! Fill out the form and our team will get back to you soon.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100"
                placeholder="Your Name"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100 resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <div className="text-green-600 text-center font-semibold mt-2">Thank you! Your message has been sent.</div>}
          {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
        </form>
        <div className="mt-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
          Or email us directly at <a href="mailto:support@pdfnest.com" className="text-blue-600 dark:text-purple-400 underline">support@pdfnest.com</a>
        </div>
      </div>
    </div>
  );
}
