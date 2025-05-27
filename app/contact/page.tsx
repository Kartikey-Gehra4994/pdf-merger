export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Contact Us</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        Have questions, feedback, or need support? Reach out to our team and we’ll get back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-4 max-w-md mx-auto mt-8">
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100" />
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100" />
        <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100" />
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow hover:scale-105 transition">Send Message</button>
      </form>
    </div>
  );
}
