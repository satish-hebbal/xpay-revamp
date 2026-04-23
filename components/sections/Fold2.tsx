"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Section 1: Subscription Table ─── */

const subscriptionRows = [
  { name: "Acme Corp",     sub: "USD · United States",  method: "Visa",       last: "4242", amount: "$299.00",    color: "#6B7AEC" },
  { name: "Pixel Labs",    sub: "EUR · Germany",        method: "Mastercard", last: "8326", amount: "€279.00",    color: "#9B6BEC" },
  { name: "Zeta Digital",  sub: "GBP · United Kingdom", method: "PayPal",     email: "zeta@digital.io", amount: "£249.00",    color: "#4BBFB5" },
  { name: "NovaSpark Inc", sub: "SGD · Singapore",      method: "Klarna",     note: "Buy now, pay later", amount: "S$1,850.00", color: "#E8A94A" },
  { name: "ByteFlow Co",   sub: "CNY · China",          method: "Alipay",     last: "7731", amount: "¥2,100.00",  color: "#EC6BAF" },
  { name: "Lumio SaaS",    sub: "AUD · Australia",      method: "Visa",       last: "9912", amount: "A$399.00",   color: "#4A9EEC" },
  { name: "Driftware",     sub: "CAD · Canada",         method: "Mastercard", last: "1155", amount: "C$249.00",   color: "#A8EC6B" },
  { name: "Heliox Inc",    sub: "JPY · Japan",          method: "Alipay",     last: "3307", amount: "¥5,400.00",  color: "#EC9B6B" },
  { name: "Solara HQ",     sub: "BRL · Brazil",         method: "PayPal",     email: "solara@hq.io",    amount: "R$1,200.00", color: "#6BECB5" },
  { name: "Torchvault",    sub: "MXN · Mexico",         method: "Klarna",     note: "Pay later",         amount: "MX$890.00",  color: "#EC6B6B" },
];

const methodIcon: Record<string, string> = {
  Visa: "/assets/pay-icons/visa.svg",
  Mastercard: "/assets/pay-icons/mastercard.svg",
  PayPal: "/assets/pay-icons/paypal.svg",
  Klarna: "/assets/pay-icons/klarna.svg",
  Alipay: "/assets/pay-icons/alipay.svg",
};

const ROW_H = 58;

type SubRow = (typeof subscriptionRows)[number] & { uid: number };

function SubscriptionTable() {
  const [rows, setRows] = useState<SubRow[]>(() =>
    subscriptionRows.slice(0, 6).map((r, i) => ({ ...r, uid: i }))
  );
  const nextDataRef = useRef(6);
  const nextUidRef  = useRef(6);
  const listRef     = useRef<HTMLDivElement>(null);
  const needsReset  = useRef(false);

  /* After React commits the new row to the DOM, snap the container above then animate down */
  useLayoutEffect(() => {
    if (!needsReset.current || !listRef.current) return;
    needsReset.current = false;
    const el = listRef.current;
    el.style.transition = "none";
    el.style.transform  = `translateY(-${ROW_H}px)`;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.transition = `transform 560ms cubic-bezier(0.4, 0, 0.2, 1)`;
        el.style.transform  = "translateY(0px)";
      })
    );
  });

  useEffect(() => {
    const id = setInterval(() => {
      const next = subscriptionRows[nextDataRef.current % subscriptionRows.length];
      nextDataRef.current += 1;
      const uid = nextUidRef.current++;
      needsReset.current = true;
      setRows((prev) => [{ ...next, uid }, ...prev.slice(0, 5)]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white rounded-tl-[28px] rounded-tr-none rounded-bl-none rounded-br-2xl" style={{ overflow: "visible", borderTop: "5px solid rgba(0,0,0,0.05)", borderLeft: "5px solid rgba(0,0,0,0.025)", backgroundClip: "padding-box" }}>
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#111111] rounded-tl-[23px]">
        <div className="flex items-center gap-2">
          <Image src="/assets/gen-icons/pro-icon.svg" alt="pro" width={18} height={18} />
          <span className="text-white font-medium text-[15px]">Pro Plan</span>
          <span className="text-[#888] text-[14px] ml-1">Billed monthly</span>
        </div>
        <span className="text-[#4ADE80] font-semibold text-[15px]">$299 / mo</span>
      </div>

      {/* viewport: shows exactly 5 rows */}
      <div style={{ height: ROW_H * 5, overflow: "hidden" }}>
        <div ref={listRef} className="divide-y divide-[#F0F0F0]">
          {rows.map((row) => (
            <div
              key={row.uid}
              className="flex items-center px-5 gap-3"
              style={{ height: ROW_H }}
            >
              {/* avatar */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0"
                style={{ background: row.color }}
              >
                {row.name[0]}
              </div>

              {/* left group: name + method */}
              <div className="flex-1 flex items-center gap-6 min-w-0">
                <div className="w-[200px] min-w-0">
                  <p className="text-[13px] font-medium text-[#111] truncate">{row.name}</p>
                  <p className="text-[11px] text-[#9CA3AF]">{row.sub}</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 lg:w-[180px]">
                  <div className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <Image src={methodIcon[row.method]} alt={row.method} width={14} height={14} />
                  </div>
                  <span className="hidden lg:inline text-[12px] text-[#555]">
                    {row.method}
                    {row.last  ? ` ···· ${row.last}`  : ""}
                    {row.email ? ` · ${row.email}`     : ""}
                    {row.note  ? ` · ${row.note}`      : ""}
                  </span>
                </div>
              </div>

              {/* amount — right */}
              <div className="w-[84px] text-right flex-shrink-0">
                <span className="text-[13px] font-semibold text-[#111]">{row.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section 2: US Bank Account ─── */

const bankAccounts = [
  {
    beneficiary: "Acme Technologies Private Limited",
    routing: "*****1767",
    account: "7734",
    cardBrand: "Visa",
    bank: "Community Federal Savings Bank",
    city: "New York, NY · United States",
  },
  {
    beneficiary: "Zeta Global Services Pvt Ltd",
    routing: "*****4421",
    account: "8812",
    cardBrand: "Mastercard",
    bank: "Blue Ridge Bank",
    city: "Wytheville, VA · United States",
  },
  {
    beneficiary: "NovaSpark Technologies Inc",
    routing: "*****9903",
    account: "3301",
    cardBrand: "Visa",
    bank: "Evolve Bank & Trust",
    city: "Memphis, TN · United States",
  },
];

function BankCard() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shine, setShine] = useState(false);
  const [tab, setTab] = useState<"fedwire" | "ach">("fedwire");

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % bankAccounts.length);
        setVisible(true);
        setShine(true);
        setTimeout(() => setShine(false), 700);
      }, 400);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const acc = bankAccounts[idx];

  return (
    <div className="rounded-2xl border border-[#E5E7EB] p-5" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      {/* tabs — static, never fades */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center bg-white/50 rounded-full p-[2px] gap-[2px] flex-shrink-0">
          <button onClick={() => setTab("fedwire")} className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${tab === "fedwire" ? "bg-white text-[#1B5FEC] shadow-sm" : "text-[#888]"}`}>Fed Wire</button>
          <button onClick={() => setTab("ach")} className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${tab === "ach" ? "bg-white text-[#1B5FEC] shadow-sm" : "text-black/50"}`}>ACH</button>
        </div>
        <span className="text-[11px] text-[#9CA3AF] whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>USD ($) · Business Checking</span>
      </div>

      <p className="text-[11px] text-[#1B5FEC] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Beneficiary Name</p>
      <p className="text-[16px] font-semibold text-[#111] mb-4" style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease" }}>{acc.beneficiary}</p>

      <div className="flex gap-8 mb-4">
        <div>
          <p className="text-[11px] text-[#1B5FEC] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Routing Number</p>
          <p className="text-[16px] font-semibold text-[#111]" style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease" }}>{acc.routing}</p>
        </div>
        <div>
          <p className="text-[11px] text-[#1B5FEC] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Account Number</p>
          <div style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease" }}>
            <p className="text-[16px] font-semibold text-[#111]">•••• •••• {acc.account}</p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] text-[#1B5FEC] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Bank Information</p>
          <p className="text-[12px] text-[#555]" style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease" }}>{acc.bank}</p>
          <p className="text-[12px] text-[#555]" style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease" }}>{acc.city}</p>
          <p className="text-[12px] text-[#22C55E] mt-1">Settled in INR · 24hrs</p>
        </div>
        <div className="relative overflow-hidden flex items-center gap-1.5 bg-[#16A34A] text-white text-[12px] font-medium px-3 py-1.5 rounded-full">
          <Image src="/assets/gen-icons/varified-icon.svg" alt="verified" width={14} height={14} />
          <span className="font-bold">FIRC</span> <span className="font-normal">Issued</span>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: shine ? "120%" : "-60%",
              width: "40%",
              height: "100%",
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
              transform: "skewX(-15deg)",
              transition: shine ? "left 0.6s ease" : "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Section 3: Tax Toggle ─── */

const taxRows = [
  { label: "Sales Tax (US)", rate: "8.5%" },
  { label: "VAT (UK)",       rate: "20%"  },
  { label: "MwSt (DE)",      rate: "19%"  },
  { label: "GST (AU)",       rate: "10%"  },
  { label: "GST (SG)",       rate: "9%"   },
];

function TaxCard() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setOn(true);
      timeout = setTimeout(() => {
        setOn(false);
        timeout = setTimeout(cycle, 2500);
      }, 11000);
    };
    timeout = setTimeout(cycle, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const lineXs = [12, 28, 50, 72, 88]; // % positions across card width

  return (
    <div className="relative">
      <div
        className="rounded-2xl border border-[#E5E7EB] p-5 relative overflow-hidden"
        style={{ background: on ? "#ffffff" : "rgba(255,255,255,0.45)", transition: "background 400ms ease" }}
      >
        {/* backdrop blur overlay when off */}
        {!on && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
          />
        )}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#F0F0F0]" style={{ position: "relative", zIndex: 2 }}>
          <span className="text-[16px] font-semibold text-[#111]">Auto sales tax collection</span>
          {/* toggle */}
          <div
            className="relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0"
            style={{ background: on ? "#22C55E" : "#D1D5DB" }}
          >
            <div
              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
              style={{ transform: on ? "translateX(20px)" : "translateX(2px)" }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {taxRows.map((row, i) => (
            <div
              key={row.label}
              className="flex items-center justify-between"
              style={{
                opacity: on ? 1 : 0,
                transform: on ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 350ms ease, transform 350ms ease",
                transitionDelay: on ? `${i * 120}ms` : "0ms",
              }}
            >
              <span className="text-[13px] text-[#374151]">
                {row.label}
              </span>
              <span className="text-[13px] font-medium text-[#111]">
                {row.rate}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5 animated vertical lines below card */}
      <svg
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          height: "600px",
          pointerEvents: "none",
          zIndex: 1,
        }}
        preserveAspectRatio="none"
        viewBox="0 0 100 600"
      >
        {lineXs.map((x, i) => (
          <g key={i}>
            <line x1={x} y1="0" x2={x} y2="600" stroke="#E2E8F0" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            {on && (
              <line x1={x} y1="0" x2={x} y2="600" stroke="#1B5FEC" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="50 550" vectorEffect="non-scaling-stroke">
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-600"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </line>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── Section 4: Payment Link + Checkout ─── */

const payIcons = [
  { src: "/assets/pay-icons/visa.svg",       alt: "Visa"       },
  { src: "/assets/pay-icons/mastercard.svg", alt: "Mastercard" },
  { src: "/assets/pay-icons/amex.svg",       alt: "Amex"       },
  { src: "/assets/pay-icons/paypal.svg",     alt: "PayPal"     },
  { src: "/assets/pay-icons/klarna.svg",     alt: "Klarna"     },
  { src: "/assets/pay-icons/alipay.svg",     alt: "Alipay"     },
];

function PaymentLinkCard() {
  return (
    <div className="rounded-2xl lg:rounded-tl-none lg:rounded-bl-none bg-white border border-[#E5E7EB] p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] flex items-center justify-center">
          <Image src="/assets/gen-icons/scan-icon.svg" alt="qr" width={20} height={20} />
        </div>
        <div className="flex-1 bg-[#F5F7FA] rounded-xl px-3 py-2 text-[13px] text-[#555] truncate min-w-0">
          xpay.link/pay/inv-1047
        </div>
        <button className="flex items-center gap-1.5 bg-[#1B5FEC] text-white text-[12px] font-medium px-3 py-2 rounded-xl flex-shrink-0 whitespace-nowrap">
          <Image src="/assets/gen-icons/copy-icon.svg" alt="copy" width={13} height={13} />
          Copy link
        </button>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[12px] text-[#9CA3AF]">Accepts :</span>
        {payIcons.map((ic) => (
          <div key={ic.alt} className="w-7 h-7 rounded-full bg-[#F5F5F5] flex items-center justify-center">
            <Image src={ic.src} alt={ic.alt} width={15} height={15} />
          </div>
        ))}
        <span className="text-[12px] text-[#9CA3AF]">+39 more</span>
      </div>
    </div>
  );
}

type CheckoutScreen = "info" | "card" | "success";

function CheckoutCard() {
  const [screen, setScreen]               = useState<CheckoutScreen>("info");
  const [prev, setPrev]                   = useState<CheckoutScreen | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [useSlide, setUseSlide]           = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Card");
  const screenRef = useRef<CheckoutScreen>("info");

  const advance = (next: CheckoutScreen) => {
    const cur   = screenRef.current;
    const slide = cur === "info" && next === "card";
    setUseSlide(slide);

    if (slide) {
      setPrev(cur);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTransitioning(true);
        setTimeout(() => {
          setScreen(next);
          screenRef.current = next;
          setPrev(null);
          requestAnimationFrame(() => requestAnimationFrame(() => setTransitioning(false)));
        }, 400);
      }));
    } else {
      setTransitioning(true);
      setTimeout(() => {
        setScreen(next);
        screenRef.current = next;
        setTransitioning(false);
      }, 320);
    }
  };

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = [];
    const after = (fn: () => void, ms: number) => { const t = setTimeout(fn, ms); ts.push(t); };

    const cycle = () => {
      after(() => {
        setSelectedMethod("Card");
        after(() => {
          advance("card");
          after(() => {
            advance("success");
            after(() => {
              advance("info");
              after(() => { setSelectedMethod("Card"); after(cycle, 400); }, 400);
            }, 3500);
          }, 4000);
        }, 1000);
      }, 1200);
    };

    cycle();
    return () => ts.forEach(clearTimeout);
  }, []);

  const renderScreen = (s: CheckoutScreen) => {
    if (s === "info")    return <CheckoutInfo selected={selectedMethod} />;
    if (s === "card")    return <CheckoutCard2 />;
    return <CheckoutSuccess />;
  };

  return (
    <div className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden" style={{ height: 440 }}>
      {/* header always visible */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-[13px] text-[#9CA3AF]">Checkout</span>
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-[#9CA3AF]">Secured by</span>
          <Image src="/assets/Xpay-logo.svg" alt="xPay" width={40} height={14} />
        </div>
      </div>

      {useSlide ? (
        /* ── slide transition (info → card) ── */
        <>
          <p className="px-4 pb-3 text-[13px] font-medium text-[#111]">Paying to Acme Corp</p>
          <div className="relative overflow-hidden" style={{ height: 350 }}>
            {prev !== null && (
              <div className="absolute inset-0 px-4 pb-4" style={{
                zIndex: 2,
                transform: transitioning ? "translateX(-110%)" : "translateX(0)",
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}>
                {renderScreen(prev)}
              </div>
            )}
            <div className="absolute inset-0 px-4 pb-4" style={{
              zIndex: 1,
              transform: transitioning ? "translateX(110%)" : "translateX(0)",
              transition: transitioning ? "none" : "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}>
              {renderScreen(screen)}
            </div>
          </div>
        </>
      ) : (
        /* ── fade transition (card → success, success → info) ── */
        <div style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.32s ease" }}>
          <p className="px-4 pb-3 text-[13px] font-medium text-[#111]"
            style={{ visibility: screen === "success" ? "hidden" : "visible" }}>
            Paying to Acme Corp
          </p>
          <div className="px-4 pb-4" style={{ height: 350, overflow: "hidden" }}>
            {renderScreen(screen)}
          </div>
        </div>
      )}
    </div>
  );
}

function CheckoutInfo({ selected = "" }: { selected?: string }) {
  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[14px] font-semibold text-[#111]">Tom Hanks</p>
          <p className="text-[12px] text-[#9CA3AF]">tomhanks@gmail.com</p>
          <p className="text-[12px] text-[#9CA3AF]">19001, united states</p>
        </div>
        <Image src="/assets/gen-icons/edit-icon.svg" alt="edit" width={16} height={16} className="mt-1 opacity-50" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] text-[#9CA3AF]">Payment Methods</span>
        <span className="text-[12px] text-[#1B5FEC] border border-[#E5E7EB] rounded px-2 py-0.5">$USD ▾</span>
      </div>

      {[
        { label: "Card", icons: ["/assets/pay-icons/visa.svg","/assets/pay-icons/mastercard.svg","/assets/pay-icons/amex.svg","/assets/pay-icons/discover.svg"] },
        { label: "Amazon Pay", icons: ["/assets/pay-icons/amazon.svg"] },
        { label: "Klarna",     icons: ["/assets/pay-icons/klarna.svg"] },
        { label: "Cash App",   icons: ["/assets/pay-icons/cashapp.svg"] },
      ].map((m) => (
        <label key={m.label} className="flex items-center justify-between py-2 border-b border-[#F5F5F5] cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 transition-all duration-300" style={{ borderColor: selected === m.label ? "#1B5FEC" : "#D1D5DB", backgroundColor: selected === m.label ? "#1B5FEC" : "transparent" }} />
            <span className="text-[13px] text-[#111]">{m.label}</span>
          </div>
          <div className="flex gap-1">
            {m.icons.map((s) => (
              <div key={s} className="w-6 h-6 rounded bg-[#F5F5F5] flex items-center justify-center">
                <Image src={s} alt="" width={14} height={14} />
              </div>
            ))}
          </div>
        </label>
      ))}

      <button className="w-full mt-4 bg-[#A5B4FC] text-white font-medium py-3 rounded-xl text-[14px]">
        Pay $120
      </button>
    </div>
  );
}

function CheckoutCard2() {
  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[14px] font-semibold text-[#111]">Tom Hanks</p>
          <p className="text-[12px] text-[#9CA3AF]">tomhanks@gmail.com</p>
          <p className="text-[12px] text-[#9CA3AF]">19001, united states</p>
        </div>
        <Image src="/assets/gen-icons/edit-icon.svg" alt="edit" width={16} height={16} className="mt-1 opacity-50" />
      </div>

      <div className="space-y-2 mb-4">
        <div className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[12px] text-[#555] bg-[#F9FAFB] flex items-center justify-between">
          <span>•••• •••• •••• 4242</span>
          <Image src="/assets/pay-icons/mastercard.svg" alt="Mastercard" width={18} height={12} />
        </div>
        <div className="flex gap-2">
          <input readOnly value="12 / 27" className="flex-1 min-w-0 border border-[#E5E7EB] rounded-lg px-3 py-2 text-[12px] text-[#555] bg-[#F9FAFB]" />
          <input readOnly value="CVV" className="flex-1 min-w-0 border border-[#E5E7EB] rounded-lg px-3 py-2 text-[12px] text-[#555] bg-[#F9FAFB]" />
        </div>
        <input readOnly value="United States" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[12px] text-[#555] bg-[#F9FAFB]" />
        <input readOnly value="19001" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[12px] text-[#555] bg-[#F9FAFB]" />
      </div>

      <button className="w-full bg-[#1B5FEC] text-white font-medium py-3 rounded-xl text-[14px]">
        Pay $120
      </button>
    </div>
  );
}

function CheckoutSuccess() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-4">
      <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-[16px] font-semibold text-[#111]">Payment Successful!</p>
      <p className="text-[13px] text-[#9CA3AF]">$120.00 paid to Acme Corp</p>
      <p className="text-[12px] text-[#9CA3AF]">tomhanks@gmail.com</p>
    </div>
  );
}

/* ─── Blue Stack decoration ─── */

const BLUE_STACK_CSS = `
  .bs-glow-border { position: absolute; overflow: hidden; }
  .bs-glow-border::before { content: ''; position: absolute; inset: -60%; transform-origin: center; }
  .bs-glow-border::after { content: ''; position: absolute; inset: 0; pointer-events: none; box-sizing: border-box; border-radius: inherit; }
  .bs-gb-1::after { border: 1px solid rgba(255,255,255,0.85); animation: bsBorderPulse 5.2s ease-in-out infinite; }
  .bs-gb-2::after { border: 1px solid rgba(255,255,255,0.85); animation: bsBorderPulse 5.2s ease-in-out infinite; animation-delay: -1.7s; }
  .bs-gb-3::after { border: 1px solid rgba(255,255,255,0.85); animation: bsBorderPulse 5.2s ease-in-out infinite; animation-delay: -3.5s; }
  @keyframes bsBorderPulse { 0% { opacity: 0.2; } 50% { opacity: 1; } 100% { opacity: 0.2; } }
  .bs-glow-border .bs-fill { position: absolute; inset: 1.5px; }
  .bs-gb-1::before {
    background: conic-gradient(from 0deg,
      transparent 0deg, rgba(255,255,255,0.03) 15deg, rgba(255,255,255,0.4) 45deg,
      rgba(255,255,255,0.95) 58deg, rgba(255,255,255,1) 63deg,
      rgba(255,255,255,0.4) 78deg, rgba(255,255,255,0.03) 100deg,
      transparent 130deg, transparent 175deg,
      rgba(255,255,255,0.03) 195deg, rgba(255,255,255,0.35) 225deg,
      rgba(255,255,255,0.85) 240deg, rgba(255,255,255,0.35) 255deg,
      rgba(255,255,255,0.03) 280deg, transparent 310deg, transparent 360deg);
    animation: bsSpin1 11.3s cubic-bezier(0.4,0,0.6,1) infinite;
  }
  .bs-gb-2::before {
    background: conic-gradient(from 0deg,
      transparent 0deg, rgba(255,255,255,0.01) 55deg, rgba(255,255,255,0.12) 100deg,
      rgba(255,255,255,0.55) 138deg, rgba(255,255,255,1) 150deg,
      rgba(255,255,255,0.55) 162deg, rgba(255,255,255,0.08) 185deg,
      transparent 200deg, transparent 360deg);
    animation: bsSpin2 8.7s linear infinite; animation-delay: -3.2s;
  }
  .bs-gb-3::before {
    background: conic-gradient(from 0deg,
      transparent 0deg, rgba(255,255,255,0.6) 8deg, rgba(255,255,255,1) 12deg,
      rgba(255,255,255,0.6) 16deg, transparent 28deg, transparent 115deg,
      rgba(255,255,255,0.5) 123deg, rgba(255,255,255,0.95) 127deg,
      rgba(255,255,255,0.5) 131deg, transparent 143deg, transparent 232deg,
      rgba(255,255,255,0.7) 239deg, rgba(255,255,255,1) 243deg,
      rgba(255,255,255,0.7) 247deg, transparent 259deg, transparent 360deg);
    animation: bsSpin3 4.1s linear infinite; animation-delay: -1.6s;
  }
  @keyframes bsSpin1 { 0% { transform: rotate(0deg) scale(1); } 40% { transform: rotate(148deg) scale(1.04); } 70% { transform: rotate(251deg) scale(0.97); } 100% { transform: rotate(360deg) scale(1); } }
  @keyframes bsSpin2 { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
  @keyframes bsSpin3 { 0% { transform: rotate(0deg); } 30% { transform: rotate(108deg) scale(1.06); } 60% { transform: rotate(216deg) scale(0.95); } 100% { transform: rotate(360deg); } }
  .bs-fill-1 { background-size: 220% 220% !important; animation: bsGradDrift1 9.4s ease-in-out infinite alternate; }
  .bs-fill-2 { background-size: 200% 200% !important; animation: bsGradDrift2 6.1s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate; animation-delay: -2.5s; }
  .bs-fill-3 { background-size: 240% 240% !important; animation: bsGradDrift3 13.7s ease-in-out infinite alternate; animation-delay: -7s; }
  @keyframes bsGradDrift1 { 0% { background-position: 0% 0%; } 50% { background-position: 80% 50%; } 100% { background-position: 100% 100%; } }
  @keyframes bsGradDrift2 { 0% { background-position: 100% 0%; } 50% { background-position: 20% 60%; } 100% { background-position: 0% 100%; } }
  @keyframes bsGradDrift3 { 0% { background-position: 30% 0%; } 40% { background-position: 70% 40%; } 100% { background-position: 50% 100%; } }
`;

const BS_G1 = "linear-gradient(180deg, #054cff 0%, #236acb 40%, #45b1ff 75%, #4db4ff 100%)";
const BS_G2 = "linear-gradient(180deg, #196bf6 0%, #308fff 50%, #2f90ff 100%)";
const BS_G3 = "linear-gradient(180deg, #247af3 0%, #2078ff 50%, #2179ff 100%)";

function BlueStack({ scale = 0.35 }: { scale?: number }) {
  const BW = 260, BH = 950;
  return (
    <>
      <style>{BLUE_STACK_CSS}</style>
      <div style={{ width: BW * scale, height: BH * scale, transform: `skewX(-32deg)`, position: "relative", transformOrigin: "bottom center" }}>
        <div className="bs-glow-border bs-gb-1" style={{ inset: 0 }}>
          <div className="bs-fill bs-fill-1" style={{ background: BS_G1 }} />
        </div>
        <div className="bs-glow-border bs-gb-2" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.6 * scale, height: BH * scale }}>
          <div className="bs-fill bs-fill-2" style={{ background: BS_G2 }} />
        </div>
        <div className="bs-glow-border bs-gb-3" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.18 * scale, height: BH * scale }}>
          <div className="bs-fill bs-fill-3" style={{ background: BS_G3 }} />
        </div>
      </div>
    </>
  );
}

/* ─── Reusable card wrapper with gradient inside ─── */
function SectionCard({
  children,
  grad,
  gradStyle,
  gradClassName,
  cardStyle,
  grad2,
  gradStyle2,
  behind,
}: {
  children: React.ReactNode;
  grad: "a" | "b";
  gradStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  grad2?: "a" | "b";
  gradStyle2?: React.CSSProperties;
  gradClassName?: string;
  behind?: React.ReactNode;
}) {
  const defaultStyle: React.CSSProperties = { width: "90%", right: "-3rem", bottom: "-4rem" };
  return (
    <div className="relative rounded-3xl border border-[#E5E7EB] p-5 lg:p-7 overflow-hidden" style={{ background: "#ffffff", ...cardStyle }}>
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={`/assets/grad-${grad}.png`}
          alt=""
          className={`absolute h-auto${gradClassName ? ` ${gradClassName}` : ""}`}
          style={{ ...defaultStyle, ...gradStyle }}
        />
        {grad2 && (
          <img
            src={`/assets/grad-${grad2}.png`}
            alt=""
            className="absolute h-auto"
            style={{ ...defaultStyle, ...gradStyle2 }}
          />
        )}
      </div>
      {behind && (
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          {behind}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function GradSuffix({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ background: "linear-gradient(90deg, #2F88F6, #45B1FF, #45FFE9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}

/* ─── Main Fold2 Export ─── */

export default function Fold2() {
  return (
    <section className="relative z-30 w-full bg-white border-t-0 pt-0 pb-20 lg:bg-white lg:border-t lg:border-[#E5E7EB] lg:-mt-52 lg:pt-10">
      <div className="max-w-[1200px] mx-auto px-6 space-y-6">

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 pt-10 pb-16">
          <div className="flex-1 flex flex-col items-center text-center">
            <span className="text-[36px] lg:text-[48px] font-semibold text-[#111]">1200<GradSuffix>+</GradSuffix></span>
            <span className="text-[15px] lg:text-[17px] text-[#6B7280] mt-0.5">Enterprises and Startups</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <span className="text-[36px] lg:text-[48px] font-semibold text-[#111]">$400<GradSuffix>M</GradSuffix></span>
            <span className="text-[15px] lg:text-[17px] text-[#6B7280] mt-0.5">Annual Transactions</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <span className="text-[36px] lg:text-[48px] font-semibold text-[#111]">160<GradSuffix>+</GradSuffix></span>
            <span className="text-[15px] lg:text-[17px] text-[#6B7280] mt-0.5">Supported Countries</span>
          </div>
        </div>

        {/* Row 1: 65% / 35% */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[65fr_35fr]">
          {/* S1 grad controls: width / right / bottom */}
          <SectionCard grad="a" gradStyle={{ width: "90%", right: "-12rem", bottom: "-12rem" }}>
            <h2 className="text-[22px] lg:text-[32px] font-medium text-[#000000] leading-tight mb-1">
              India&apos;s only gateway<br />for recurring global billing.
            </h2>
            <p className="text-[14px] lg:text-[16px] font-medium text-[#000000BF] mb-6">
              Collect subscriptions in 100+ currencies.<br />Ideal for SaaS. Set it once, collect forever.
            </p>
            {/* table bleeds out right + bottom */}
            <div className="-mr-5 -mb-5 lg:-mr-7 lg:-mb-7">
              <SubscriptionTable />
            </div>
          </SectionCard>

          {/* S2 grad controls: width / right / bottom */}
          <SectionCard grad="b" gradStyle={{ width: "120%", left: "-4rem", right: "auto", bottom: "-5rem", transform: "rotate(-30deg)" }} gradClassName="grad-center-mobile" behind={<div style={{ position: "absolute", bottom: "0px", right: "80px" }}><BlueStack scale={0.35} /></div>}>
            <h2 className="text-[22px] lg:text-[32px] font-medium text-[#000000] leading-tight mb-1">
              A US Bank account for<br />your Indian entity.
            </h2>
            <p className="text-[14px] lg:text-[16px] font-medium text-[#000000BF] mb-6">
              USD, GBP, CAD. Settled in INR within 24hrs.<br />FIRC auto-generated.
            </p>
            <div className="lg:translate-y-[28px]"><BankCard /></div>
          </SectionCard>
        </div>

        {/* Row 2: 35% / 65% */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[35fr_65fr]">
          {/* S3 grad controls: width / right / bottom */}
          <SectionCard grad="b" gradStyle={{ width: "90%", right: "-3rem", bottom: "-4rem", filter: "blur(18px)" }}>
            <h2 className="text-[22px] lg:text-[32px] font-medium text-[#000000] leading-tight mb-1">
              Auto-collect taxes<br />across 100+ countries.
            </h2>
            <p className="text-[14px] lg:text-[16px] font-medium text-[#000000BF] mb-6">
              All taxes calculated, collected &amp; remitted automatically
            </p>
            <div className="lg:translate-y-[55px]"><TaxCard /></div>
          </SectionCard>

          {/* S4 grad controls: width / right / bottom */}
          <SectionCard grad="a" gradStyle={{ width: "90%", right: "-5rem", bottom: "-4rem" }} grad2="b" gradStyle2={{ width: "70%", left: "-23rem", right: "auto", bottom: "-20rem" }}>
            <h2 className="text-[22px] lg:text-[32px] font-medium text-[#000000] leading-tight mb-1">
              Collect payments with<br />a single link.
            </h2>
            <p className="text-[14px] lg:text-[16px] font-medium text-[#000000BF] mb-6">
              No Devs needed, live in 30 seconds
            </p>
            <div className="grid gap-4 relative grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
              {/* connector: hidden on mobile, visible on desktop */}
              <svg
                className="hidden lg:block"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "320px", pointerEvents: "none", zIndex: 1 }}
              >
                <path d="M 170,155 V 255 Q 170,285 197,285 H 420" stroke="#E2E8F0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 170,155 V 255 Q 170,285 197,285 H 420" stroke="#1B5FEC" strokeWidth="1.5" strokeOpacity="0.35" fill="none" strokeLinecap="round" strokeDasharray="60 365">
                  <animate attributeName="stroke-dashoffset" from="0" to="-425" dur="2.4s" repeatCount="indefinite" calcMode="linear" />
                </path>
              </svg>
              <div className="self-stretch relative z-[3] lg:-ml-[33px] lg:mt-[60px] flex flex-col">
                <PaymentLinkCard />
                {/* desktop only — bottom-left of column */}
                <div className="hidden lg:flex mt-auto flex-col items-start pl-10 pb-2 gap-2">
                  <Image src="/assets/Pci.svg" alt="PCI DSS Compliant" width={0} height={0} style={{ width: "auto", height: "36px" }} />
                  <span className="text-[13px] text-[#225e63] font-medium">100% Safe &amp; Secure</span>
                </div>
              </div>
              <div style={{ position: "relative", zIndex: 3, minWidth: 0, overflow: "hidden" }}><CheckoutCard /></div>
              {/* mobile only — after CheckoutCard */}
              <div className="flex lg:hidden flex-col items-start pl-2 pt-2 gap-2">
                <Image src="/assets/Pci.svg" alt="PCI DSS Compliant" width={0} height={0} style={{ width: "auto", height: "36px" }} />
                <span className="text-[13px] text-[#225e63] font-medium">100% Safe &amp; Secure</span>
              </div>
            </div>
          </SectionCard>
        </div>

      </div>
    </section>
  );
}
