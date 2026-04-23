"use client";

import Image from "next/image";

/* ── Desktop: 8 cols × 3 icons ── */
const CELL_H = 100;
const desktopCols: { src: string; alt: string }[][] = [
  [
    { src: "/assets/payment-plat-icons/Vector.svg", alt: "Visa" },
    { src: "/assets/payment-plat-icons/mastercard 1.svg", alt: "Mastercard" },
    { src: "/assets/payment-plat-icons/Vector-1.svg", alt: "Apple Pay" },
  ],
  [
    { src: "/assets/payment-plat-icons/paypal 1.svg", alt: "PayPal" },
    { src: "/assets/payment-plat-icons/bitcoin 1.svg", alt: "Bitcoin" },
    { src: "/assets/payment-plat-icons/Vector-3.svg", alt: "Paytm" },
  ],
  [
    { src: "/assets/payment-plat-icons/affine 1.svg", alt: "Affirm" },
    { src: "/assets/payment-plat-icons/Logo_GIE_CB_(2024) 1.svg", alt: "Carte Bancaire" },
    { src: "/assets/payment-plat-icons/Vector-2.svg", alt: "UPI" },
  ],
  [
    { src: "/assets/payment-plat-icons/IDEAL_Logo_2020 1.svg", alt: "iDEAL" },
    { src: "/assets/payment-plat-icons/amazon-pay-icon 1.svg", alt: "Amazon Pay" },
    { src: "/assets/payment-plat-icons/Bancontact_logo 1.svg", alt: "Bancontact" },
  ],
  [
    { src: "/assets/payment-plat-icons/dinersclub 1.svg", alt: "Diners Club" },
    { src: "/assets/payment-plat-icons/americanexpress 1.svg", alt: "Amex" },
    { src: "/assets/payment-plat-icons/gt_PayNow.svg", alt: "PayNow" },
  ],
  [
    { src: "/assets/payment-plat-icons/g2334.svg", alt: "Google Pay" },
    { src: "/assets/payment-plat-icons/sepa 1.svg", alt: "SEPA" },
    { src: "/assets/payment-plat-icons/klarna 1.svg", alt: "Klarna" },
  ],
  [
    { src: "/assets/payment-plat-icons/cashapp (1) 1.svg", alt: "Cash App" },
    { src: "/assets/payment-plat-icons/przelewy24_logo_2022 1.svg", alt: "Przelewy24" },
    { src: "/assets/payment-plat-icons/Vector-4.svg", alt: "JCB" },
  ],
  [
    { src: "/assets/payment-plat-icons/giropay 1.svg", alt: "GiroPay" },
    { src: "/assets/payment-plat-icons/Pix_(Brazil)_logo 1.svg", alt: "Pix" },
    { src: "/assets/payment-plat-icons/alipay 1.svg", alt: "Alipay" },
  ],
];
const desktopDurations = [7, 8, 6.5, 9, 7.5, 8.5, 6, 9.5];
const desktopStripH = CELL_H * 3; // 300px

/* ── Mobile: 4 cols × 6 icons ── */
const CELL_H_M = 85;
const mobileCols: { src: string; alt: string }[][] = [
  [
    { src: "/assets/payment-plat-icons/Vector.svg", alt: "Visa" },
    { src: "/assets/payment-plat-icons/mastercard 1.svg", alt: "Mastercard" },
    { src: "/assets/payment-plat-icons/Vector-1.svg", alt: "Apple Pay" },
    { src: "/assets/payment-plat-icons/paypal 1.svg", alt: "PayPal" },
    { src: "/assets/payment-plat-icons/bitcoin 1.svg", alt: "Bitcoin" },
    { src: "/assets/payment-plat-icons/Vector-3.svg", alt: "Paytm" },
  ],
  [
    { src: "/assets/payment-plat-icons/affine 1.svg", alt: "Affirm" },
    { src: "/assets/payment-plat-icons/Logo_GIE_CB_(2024) 1.svg", alt: "Carte Bancaire" },
    { src: "/assets/payment-plat-icons/Vector-2.svg", alt: "UPI" },
    { src: "/assets/payment-plat-icons/IDEAL_Logo_2020 1.svg", alt: "iDEAL" },
    { src: "/assets/payment-plat-icons/amazon-pay-icon 1.svg", alt: "Amazon Pay" },
    { src: "/assets/payment-plat-icons/Bancontact_logo 1.svg", alt: "Bancontact" },
  ],
  [
    { src: "/assets/payment-plat-icons/dinersclub 1.svg", alt: "Diners Club" },
    { src: "/assets/payment-plat-icons/americanexpress 1.svg", alt: "Amex" },
    { src: "/assets/payment-plat-icons/gt_PayNow.svg", alt: "PayNow" },
    { src: "/assets/payment-plat-icons/g2334.svg", alt: "Google Pay" },
    { src: "/assets/payment-plat-icons/sepa 1.svg", alt: "SEPA" },
    { src: "/assets/payment-plat-icons/klarna 1.svg", alt: "Klarna" },
  ],
  [
    { src: "/assets/payment-plat-icons/cashapp (1) 1.svg", alt: "Cash App" },
    { src: "/assets/payment-plat-icons/przelewy24_logo_2022 1.svg", alt: "Przelewy24" },
    { src: "/assets/payment-plat-icons/Vector-4.svg", alt: "JCB" },
    { src: "/assets/payment-plat-icons/giropay 1.svg", alt: "GiroPay" },
    { src: "/assets/payment-plat-icons/Pix_(Brazil)_logo 1.svg", alt: "Pix" },
    { src: "/assets/payment-plat-icons/alipay 1.svg", alt: "Alipay" },
  ],
];
const mobileDurations = [8, 9, 7.5, 8.5];
const mobileStripH = CELL_H_M * 6; // 510px — one set of 6 icons

function PulsingDivider({ index }: { index: number }) {
  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: 1,
        height: "100%",
        background: "#e5e7eb",
        zIndex: 10,
        overflow: "hidden",
        display: "block",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "35%",
          background: "linear-gradient(to bottom, transparent, #3b82f6, #06b6d4, transparent)",
          animation: `fold4-pulse-line 2s linear infinite`,
          animationDelay: `${index * 0.25}s`,
        }}
      />
    </span>
  );
}

export default function Fold4() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-0 lg:pt-24 border-b border-[#E5E7EB]">
      {/* header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <h2
          className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
          style={{ fontFamily: "'SF Pro Display', sans-serif" }}
        >
          <span style={{ background: "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>45+</span> payment methods.<br />Every region covered.
        </h2>
        <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
          Your customers pay the way they&apos;re comfortable. xPay supports local
          payment methods across every major market.
        </p>
      </div>

      {/* ── Desktop grid (md+): 8 cols × 3 icons ── */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-6">
      <div className="overflow-hidden border border-b-0 border-gray-200 rounded-t-xl">
        <div className="grid" style={{ gridTemplateColumns: "repeat(8, 1fr)" }}>
          {desktopCols.map((col, ci) => {
            const goesUp = ci % 2 === 0;
            const loopItems = [...col, ...col];
            return (
              <div key={ci} className="relative overflow-hidden" style={{ height: desktopStripH }}>
                {ci < 7 && <PulsingDivider index={ci} />}
                <div style={{ animation: `${goesUp ? "fold4-slide-up" : "fold4-slide-down"} ${desktopDurations[ci]}s linear infinite` }}>
                  {loopItems.map((icon, ii) => (
                    <div key={ii} className="flex items-center justify-center" style={{ height: CELL_H }}>
                      <Image src={icon.src} alt={icon.alt} width={72} height={40} className="object-contain" style={{ maxHeight: 40 }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {/* ── Mobile grid (<md): 4 cols × 6 icons, 4 rows visible ── */}
      <div className="block md:hidden mx-4 overflow-hidden border border-b-0 border-gray-200 rounded-t-xl">
        <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {mobileCols.map((col, ci) => {
            const goesUp = ci % 2 === 0;
            const loopItems = [...col, ...col];
            return (
              <div key={ci} className="relative overflow-hidden" style={{ height: CELL_H_M * 4 }}>
                {ci < 3 && <PulsingDivider index={ci} />}
                <div style={{ animation: `${goesUp ? "fold4-slide-up-mobile" : "fold4-slide-down-mobile"} ${mobileDurations[ci]}s linear infinite` }}>
                  {loopItems.map((icon, ii) => (
                    <div key={ii} className="flex items-center justify-center" style={{ height: CELL_H_M }}>
                      <Image src={icon.src} alt={icon.alt} width={56} height={32} className="object-contain" style={{ maxHeight: 32 }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
