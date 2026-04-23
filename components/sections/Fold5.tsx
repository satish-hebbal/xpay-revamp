"use client";

import { useEffect, useState } from "react";

/* ── Data ────────────────────────────────────────────────────── */

const PRODUCT_LABELS = ["SaaS", "EdTech", "Travel", "MedTech", "Consumer App", "Marketplace", "Fintech"];

const PP = "/assets/payment-plat-icons/";
const COUNTRIES: { code: string; label: string; icons: string[] }[] = [
  { code: "US", label: "United States($)", icons: [`${PP}Vector.svg`, `${PP}mastercard 1.svg`, `${PP}americanexpress 1.svg`] },
  { code: "DE", label: "Germany(€)",       icons: [`${PP}IDEAL_Logo_2020 1.svg`, `${PP}giropay 1.svg`] },
  { code: "SG", label: "Singapore(S$)",    icons: [`${PP}gt_PayNow.svg`] },
  { code: "CN", label: "China(¥)",         icons: [`${PP}alipay 1.svg`] },
  { code: "BR", label: "Brazil(R$)",       icons: [`${PP}Pix_(Brazil)_logo 1.svg`] },
  { code: "GB", label: "United Kingdom(£)",icons: [`${PP}Vector.svg`, `${PP}mastercard 1.svg`] },
  { code: "AU", label: "Australia(A$)",    icons: [`${PP}Vector.svg`, `${PP}mastercard 1.svg`] },
  { code: "FR", label: "France(€)",        icons: [`${PP}Logo_GIE_CB_(2024) 1.svg`, `${PP}mastercard 1.svg`] },
];

const RECEIVE_ITEMS = [
  { icon: "/assets/diagram/rupee.svg", label: "INR in 24hrs" },
  { icon: "/assets/diagram/bank.svg", label: "FIRC generated" },
  { icon: "/assets/diagram/tax.svg", label: "Tax remitted" },
  { icon: "/assets/diagram/grow.svg", label: "95% success rate" },
];

/* ── Helpers ─────────────────────────────────────────────────── */

function useCycle(arr: unknown[], ms: number) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % arr.length), ms);
    return () => clearInterval(t);
  }, [arr.length, ms]);
  return idx;
}

/* ── Sub-components ──────────────────────────────────────────── */

function ProductBadge() {
  const idx = useCycle(PRODUCT_LABELS, 1500);
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">Product / Service</span>
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ width: 160, height: 48, borderRadius: 12, border: "1px solid rgba(0,0,0,0.15)", background: "#fff" }}
      >
        <span
          key={idx}
          style={{ fontSize: 15, fontWeight: 500, color: "#111827", fontFamily: "'SF Pro Display', sans-serif", animation: "f5-fade-slide 0.35s ease both" }}
        >
          {PRODUCT_LABELS[idx]}
        </span>
      </div>
    </div>
  );
}

const VISIBLE = 3; // rows visible at once
const ROW_H = 52;
const GAP = 8;

function CountryCarousel() {
  const [offset, setOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const total = COUNTRIES.length;

  useEffect(() => {
    const t = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setOffset(o => (o + 1) % total);
        setTransitioning(false);
      }, 320);
    }, 1800);
    return () => clearInterval(t);
  }, [total]);

  const items = Array.from({ length: VISIBLE + 1 }, (_, i) => COUNTRIES[(offset + i) % total]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase text-center mb-1">Global Customers</span>

      <div style={{ width: 220, height: VISIBLE * ROW_H + (VISIBLE - 1) * GAP, overflow: "hidden", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: GAP,
            transform: transitioning ? `translateY(-${ROW_H + GAP}px)` : "translateY(0)",
            transition: transitioning ? "transform 0.32s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {items.map((c, i) => {
            /* During slide-up, the row arriving into the middle slot is at index 2.
               After the DOM snaps back, the middle slot is at index 1. */
            const isMiddle = transitioning ? i === 2 : i === 1;
            return (
              <div
                key={`${c.code}-${i}`}
                style={{
                  height: ROW_H,
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 14px",
                  gap: 12,
                  opacity: isMiddle ? 1 : 0.25,
                  transition: "opacity 0.3s ease",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111827", fontFamily: "'SF Pro Display', sans-serif" }}>
                  {c.label}
                </span>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  {c.icons.slice(0, 2).map((src, j) => (
                    <div
                      key={j}
                      style={{
                        width: 36, height: 24, borderRadius: 4,
                        background: "#fff", border: "1px solid #E5E7EB",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        overflow: "hidden", padding: 3,
                      }}
                    >
                      <img src={src} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", marginTop: 14 }}>100+ countries &amp; currencies supported</span>
    </div>
  );
}

function XPayCenter() {
  return (
    <div style={{ position: "relative", width: 100, height: 100 }}>
      {/* green-to-blue glow layer */}
      <div style={{
        position: "absolute",
        inset: -18,
        borderRadius: 42,
        background: "radial-gradient(ellipse at 30% 70%, rgba(4,229,115,0.2) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0) 75%)",
        filter: "blur(14px)",
        zIndex: 0,
        pointerEvents: "none",
        animation: "xpay-glow 3s ease-in-out infinite",
      }} />
      <div style={{
        position: "relative", zIndex: 1,
        width: 100, height: 100, borderRadius: 24,
        background: "#fff", border: "1px solid rgba(0,0,0,0.12)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      }}>
        <img src="/assets/diagram/xpay-checkout-logo.svg" alt="xPay" style={{ width: 60, height: 60, objectFit: "contain" }} />
      </div>
    </div>
  );
}

function YouReceive() {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">You Receive</span>
      <div style={{ position: "relative" }}>
        {/* blue glow — middle-left */}
        <div style={{
          position: "absolute",
          left: -18,
          top: "50%",
          transform: "translateY(-50%)",
          width: 90,
          height: 140,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(12px)",
          pointerEvents: "none",
          zIndex: 0,
        }} />
      <div style={{
        position: "relative", zIndex: 1,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 14,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minWidth: 200,
      }}>
        {RECEIVE_ITEMS.map(item => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={item.icon} alt="" style={{ width: 28, height: 28, objectFit: "contain", flexShrink: 0, animation: `coin-flip 3s ease-in-out ${RECEIVE_ITEMS.indexOf(item) * 0.6}s infinite` }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#111827", fontFamily: "'SF Pro Display', sans-serif" }}>{item.label}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

/* Breathing gradient line — for the vertical product→xPay connector */
function BreathingLine({ x1, y1, x2, y2, gradId, delay = "0s" }: {
  x1: number; y1: number; x2: number; y2: number; gradId: string; delay?: string;
}) {
  return (
    <g>
      <defs>
        <linearGradient id={gradId} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="40%"  stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="60%"  stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M${x1},${y1} L${x2},${y2}`} stroke={`url(#${gradId})`} strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin={delay} repeatCount="indefinite" calcMode="ease" />
      </path>
    </g>
  );
}

/* Straight pulse line */
function PulseLine({ x1, y1, x2, y2, dur = "1.8s", delay = "0s" }: {
  x1: number; y1: number; x2: number; y2: number;
  dur?: string; delay?: string;
}) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const dash = 40, gap = len - dash;
  const pathD = `M${x1},${y1} L${x2},${y2}`;
  return (
    <g>
      <path d={pathD} stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
      <path d={pathD} stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round"
        strokeDasharray={`${dash} ${gap}`} strokeDashoffset="0" opacity="0.7">
        <animate attributeName="stroke-dashoffset" from={`${len}`} to={`${-len}`}
          dur={dur} begin={delay} repeatCount="indefinite" calcMode="linear" />
      </path>
    </g>
  );
}

/* Curved bezier pulse line — smooth S-curve fan */
function CurveLine({ x1, y1, x2, y2, dur = "1.8s", delay = "0s", trackGradient }: {
  x1: number; y1: number; x2: number; y2: number;
  dur?: string; delay?: string; trackGradient?: string;
}) {
  const mx = x1 + (x2 - x1) * 0.5;
  const pathD = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  return (
    <g>
      <path d={pathD} stroke={trackGradient ? `url(#${trackGradient})` : "#E5E7EB"} strokeWidth="1.5" fill="none" />
      <path d={pathD} stroke="#04E573" strokeWidth="2" fill="none" strokeLinecap="round"
        pathLength="100" strokeDasharray="18 82" opacity="0.8">
        <animate attributeName="stroke-dashoffset" from="100" to="-100"
          dur={dur} begin={delay} repeatCount="indefinite" calcMode="linear" />
      </path>
    </g>
  );
}

function MobileProductBadge() {
  const idx = useCycle(PRODUCT_LABELS, 1500);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "#9CA3AF", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        Product / Service
      </span>
      <div style={{ width: 100, height: 42, borderRadius: 10, border: "1px solid rgba(0,0,0,0.15)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <span key={idx} style={{ fontSize: 12, fontWeight: 500, color: "#111827", fontFamily: "'SF Pro Display', sans-serif", animation: "f5-fade-slide 0.35s ease both" }}>
          {PRODUCT_LABELS[idx]}
        </span>
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────── */

export default function Fold5() {
  // Layout constants — everything is positioned relative to a 960×420 viewBox
  const VW = 960, VH = 420;
  const CX = VW / 2, CY = VH / 2; // xPay center

  // product badge y-center
  const PY = 72;

  // connection points (edges of boxes, approximate)
  const carouselRight = 278;
  const receiveLeft = 755;
  const productBottom = PY + 30;

  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-20 lg:pt-24 lg:pb-24">
      {/* Intro paragraph */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <p className="text-[20px] max-w-[850px] lg:text-[24px] font-medium text-[#000000]/75 leading-relaxed" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
          Your customers pay in their currency, from anywhere in the world. 
          <span style={{ background: "linear-gradient(90deg, #45FFE9,  #1D83FF, #45B1FF )", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> XPay</span> 
          <span style={{ background: "linear-gradient(90deg, #1D83FF, #45B1FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> sits in the middle, routing each payment through local infrastructure, handling compliance, and settling directly into your Indian bank account in INR within 24 hours.</span> 
        </p>
      </div>
      <style>{`
        @keyframes f5-fade-slide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes xpay-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes coin-flip {
          0%   { transform: rotateY(0deg); }
          40%  { transform: rotateY(360deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes f5-vpulse {
          from { top: -60%; }
          to   { top: 160%; }
        }
      `}</style>

      {/* ── Desktop / tablet diagram (md+) ── */}
      <div className="hidden md:block max-w-[960px] mx-auto px-6">
        {/* SVG for lines — absolute, behind content */}
        <div style={{ position: "relative" }}>
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "visible" }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="trackFade" x1={carouselRight} y1="0" x2={CX - 50} y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0" />
                <stop offset="50%" stopColor="#E5E7EB" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* carousel → xPay: 3 curved lines fanning from carousel into checkout */}
            <CurveLine x1={carouselRight} y1={CY - 55} x2={CX - 50} y2={CY} dur="1.7s" delay="0s" trackGradient="trackFade" />
            <CurveLine x1={carouselRight} y1={CY} x2={CX - 50} y2={CY} dur="1.5s" delay="-0.12s" trackGradient="trackFade" />
            <CurveLine x1={carouselRight} y1={CY + 55} x2={CX - 50} y2={CY} dur="1.6s" delay="-1.0s" trackGradient="trackFade" />
            {/* xPay → you-receive: single straight line */}
            <PulseLine x1={CX + 50} y1={CY} x2={receiveLeft} y2={CY} dur="1.6s" delay="0s" />
            {/* product → xPay: 5 breathing lines fanning from badge into checkout */}
            <BreathingLine x1={CX - 20} y1={productBottom} x2={CX - 20} y2={CY - 50} gradId="bg0" delay="0s" />
            <BreathingLine x1={CX - 10} y1={productBottom} x2={CX - 10} y2={CY - 50} gradId="bg1" delay="0.3s" />
            <BreathingLine x1={CX}      y1={productBottom} x2={CX}      y2={CY - 50} gradId="bg2" delay="0.6s" />
            <BreathingLine x1={CX + 10} y1={productBottom} x2={CX + 10} y2={CY - 50} gradId="bg3" delay="0.9s" />
            <BreathingLine x1={CX + 20} y1={productBottom} x2={CX + 20} y2={CY - 50} gradId="bg4" delay="1.2s" />
          </svg>

          {/* Flexbox layout on top of SVG */}
          <div style={{ position: "relative", zIndex: 1, height: VH, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Left — Carousel */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 240, marginTop: 10 }}>
              <CountryCarousel />
            </div>

            {/* Center column */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, marginTop: -120 }}>
              {/* Product badge at top */}
              <ProductBadge />
              {/* spacer that matches the SVG line gap */}
              <div style={{ height: 48 }} />
              {/* xPay logo */}
              <XPayCenter />
            </div>

            {/* Right — You Receive */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 240, marginTop: -30 }}>
              <YouReceive />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile vertical layout (<md) ── */}
      <div className="block md:hidden px-6 pb-4">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* 1 — Global Customers */}
          <CountryCarousel />

          {/* 3-to-1 fan connector — desktop shape rotated 90° */}
          <svg width="140" height="80" viewBox="0 0 140 80" fill="none" style={{ margin: "4px 0" }}>
            {/* grey tracks: desktop CurveLine pattern rotated 90° — control points at midY */}
            <path d="M15,0 C15,40 70,40 70,80"  stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
            <path d="M70,0 L70,80"               stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
            <path d="M125,0 C125,40 70,40 70,80" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
            {/* green pulses */}
            <path d="M15,0 C15,40 70,40 70,80" stroke="#04E573" strokeWidth="2" fill="none" strokeLinecap="round"
              pathLength="100" strokeDasharray="18 82" opacity="0.85">
              <animate attributeName="stroke-dashoffset" from="100" to="-100" dur="1.7s" begin="0s" repeatCount="indefinite" calcMode="linear" />
            </path>
            <path d="M70,0 L70,80" stroke="#04E573" strokeWidth="2" fill="none" strokeLinecap="round"
              pathLength="100" strokeDasharray="18 82" opacity="0.85">
              <animate attributeName="stroke-dashoffset" from="100" to="-100" dur="1.5s" begin="0.2s" repeatCount="indefinite" calcMode="linear" />
            </path>
            <path d="M125,0 C125,40 70,40 70,80" stroke="#04E573" strokeWidth="2" fill="none" strokeLinecap="round"
              pathLength="100" strokeDasharray="18 82" opacity="0.85">
              <animate attributeName="stroke-dashoffset" from="100" to="-100" dur="1.6s" begin="0.4s" repeatCount="indefinite" calcMode="linear" />
            </path>
          </svg>

          {/* 2 — Product / Service + xPay center (side by side, checkout centered) */}
          <div style={{ position: "relative", width: "100%", height: 110 }}>
            <div style={{ position: "absolute", right: "calc(50% + 58px)", top: "50%", transform: "translateY(-50%)" }}>
              <MobileProductBadge />
            </div>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
              <XPayCenter />
            </div>
          </div>

          {/* connector */}
          <div style={{ position: "relative", width: 2, height: 44, margin: "6px 0", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "#E5E7EB" }} />
            <div style={{ position: "absolute", left: 0, width: "100%", height: "55%", background: "linear-gradient(to bottom, transparent, #3B82F6, transparent)", animation: "f5-vpulse 1.8s linear infinite 0.6s" }} />
          </div>

          {/* 3 — You Receive */}
          <YouReceive />

        </div>
      </div>
    </section>
  );
}
