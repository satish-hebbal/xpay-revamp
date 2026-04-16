import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Fold 1 — Hero */}
      <Hero />

      {/* Fold 2 */}
      <section className="relative z-30 w-full min-h-screen bg-xpay-surface border-t border-xpay-border -mt-56 flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 2</span>
      </section>

      {/* Fold 3 */}
      <section className="relative z-30 w-full min-h-screen bg-white border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 3</span>
      </section>

      {/* Fold 4 */}
      <section className="relative z-30 w-full min-h-screen bg-xpay-surface border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 4</span>
      </section>

      {/* Fold 5 */}
      <section className="relative z-30 w-full min-h-screen bg-white border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 5</span>
      </section>

      {/* Fold 6 */}
      <section className="relative z-30 w-full min-h-screen bg-xpay-surface border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 6</span>
      </section>

      {/* Fold 7 */}
      <section className="relative z-30 w-full min-h-screen bg-white border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 7</span>
      </section>

      {/* Fold 8 */}
      <section className="relative z-30 w-full min-h-screen bg-xpay-surface border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 8</span>
      </section>

      {/* Fold 9 */}
      <section className="relative z-30 w-full min-h-screen bg-white border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 9</span>
      </section>

      {/* Fold 10 */}
      <section className="relative z-30 w-full min-h-screen bg-xpay-surface border-t border-xpay-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-gray-300">Fold 10</span>
      </section>

    </main>
  );
}
