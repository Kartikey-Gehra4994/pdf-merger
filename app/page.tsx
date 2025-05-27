import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PdfMergeDropzone from "@/components/PdfMergeDropzone";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950">
      <Hero />
      <div id="merge" className="py-8">
        <PdfMergeDropzone />
      </div>
      <div id="features">
        <Features />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}
