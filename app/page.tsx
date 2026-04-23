import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Fold2 from "@/components/sections/Fold2";
import FoldDevBanner from "@/components/sections/FoldDevBanner";
import Fold3 from "@/components/sections/Fold3";
import Fold4 from "@/components/sections/Fold4";
import FoldBenefits from "@/components/sections/FoldBenefits";
import Fold5 from "@/components/sections/Fold5";
import FoldPricing from "@/components/sections/FoldPricing";
import Fold7 from "@/components/sections/Fold7";
import Fold8 from "@/components/sections/Fold8";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#F8FAFD" }}>
      <Navbar />

      {/* Fold 1 — Hero */}
      <Hero />

      {/* Fold 2 */}
      <Fold2 />

      {/* Fold 3 */}
      <Fold3 />

      {/* Fold 4 */}
      <Fold4 />

      {/* Benefits */}
      <FoldBenefits />

      {/* Fold 5 */}
      <Fold5 />

      {/* Dev banner */}
      <FoldDevBanner />

      {/* Pricing */}
      <FoldPricing />

      {/* Fold 7 — Testimonials */}
      <Fold7 />

      {/* Fold 8 — FAQ */}
      <Fold8 />

      <Footer />
    </main>
  );
}
