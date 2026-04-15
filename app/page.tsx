import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section className="relative z-30 w-full h-[400px] bg-xpay-surface border-t border-xpay-border -mt-20" />
    </main>
  );
}
