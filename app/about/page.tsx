export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow">About PDFNest</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
        <span className="font-bold text-blue-600 dark:text-purple-400">PDFNest</span> is your all-in-one solution for seamless PDF management online. We empower users to merge, organize, and manage PDF files with speed, privacy, and simplicity—no technical skills required.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-purple-400">Our Mission</h2>
          <p className="text-zinc-600 dark:text-zinc-400">To make PDF management effortless, accessible, and secure for everyone. We believe in privacy-first, user-friendly tools that save you time and keep your documents safe.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-purple-400">Why Choose Us?</h2>
          <ul className="text-zinc-600 dark:text-zinc-400 text-left list-disc list-inside">
            <li>Fast, secure PDF merging—no sign-up required for basic use</li>
            <li>Modern, intuitive interface</li>
            <li>Files are never stored—your privacy is our priority</li>
            <li>Upgrade for unlimited merges and advanced features</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-zinc-500 dark:text-zinc-400 text-base">
        <span className="font-semibold">PDFNest</span> is built by a passionate team of developers and designers who care about productivity and privacy. We’re always improving—<a href="/contact" className="text-blue-600 dark:text-purple-400 underline">contact us</a> with feedback or partnership ideas!
      </div>
    </div>
  );
}
