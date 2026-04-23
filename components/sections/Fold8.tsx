"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What currencies does this payment gateway support?",
    a: "Our payment gateway supports transactions in over 100 currencies, allowing you to conduct cross-border payments with ease. Select your preferred currency during checkout, and we'll handle the rest.",
  },
  {
    q: "Which countries is xPay currently available in?",
    a: "xPay is currently compatible with 160+ countries including United States, India, United Kingdom, Germany, France, Canada, Austria, Singapore, Vietnam, Philippines, Indonesia, United Arab Emirates, Japan and most countries in the EU.",
  },
  {
    q: "What is xPay's pricing?",
    a: "We charge a monthly subscription fee and take a small cut of the transaction. However, we're also open to customizing our pricing. Please reach out at hello@xpaycheckout.com",
  },
  {
    q: "What is xPay and how does it help Indian businesses accept international payments?",
    a: "xPay is an international payment gateway built specifically for Indian businesses to accept cross-border payments from global customers. xPay enables payments from 150+ countries using cards, wallets, BNPL, and bank transfers, while settling funds cleanly in INR with full compliance.",
  },
  {
    q: "How can Indian businesses accept international payments using xPay?",
    a: "Indian businesses can accept international payments using xPay by integrating once and offering global cards, Apple Pay, Google Pay, PayPal, BNPL options, and international bank transfers, with funds settled directly into their Indian bank account.",
  },
  {
    q: "Why do international payments fail for Indian merchants?",
    a: "International payments fail due to issuer bank declines, poor routing, excessive 3DS friction, lack of local payment methods, and aggressive fraud rules. xPay addresses these issues using local acquiring, intelligent routing, and region-specific risk models.",
  },
  {
    q: "How does xPay achieve 95%+ success rates on international payments?",
    a: "xPay achieves 95%+ success rates by combining local acquiring, smart routing, BIN-level optimization, adaptive 3DS controls, and alternative payment methods tailored by geography, outperforming global-first gateways for India-origin payments.",
  },
  {
    q: "Is xPay better than Stripe or Razorpay for international payments from India?",
    a: "xPay is designed specifically for Indian cross-border payments, while Stripe and Razorpay are global-first or domestic-first platforms. Many Indian businesses see higher approval rates, lower effective costs, and simpler settlements with xPay for international transactions.",
  },
  {
    q: "What international payment methods does xPay support?",
    a: "xPay supports 45+ global payment methods including international cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, PayPal, Venmo, Cash App, Klarna, Afterpay, Tabby, Tamara, SEPA, iDEAL, Sofort, and international bank transfers.",
  },
  {
    q: "Which payment methods does xPay support by geography?",
    a: "xPay supports region-specific payment methods — US: Cards, Apple Pay, Google Pay, PayPal, Venmo, Cash App, BNPL · UK & EU: Cards, Apple Pay, Google Pay, PayPal, Klarna, SEPA, iDEAL, Sofort · Middle East: Cards, Apple Pay, Google Pay, Tabby, Tamara · Southeast Asia: Cards, QR methods, wallets, bank transfers. This increases conversion significantly.",
  },
  {
    q: "What is chargeback protection and how does xPay handle it?",
    a: "Chargeback protection means the payment provider absorbs the financial liability of fraud disputes. With xPay, eligible fraud chargebacks are fully borne by xPay, protecting Indian businesses from financial loss and operational overhead.",
  },
  {
    q: "Is xPay liable for chargebacks on international payments?",
    a: "Yes. xPay assumes chargeback liability for fraud-related disputes processed through its platform, subject to agreed risk parameters, reducing risk exposure for Indian merchants.",
  },
  {
    q: "What is DCC vs MCC and how does xPay handle it?",
    a: "DCC allows customers to pay in their local currency, while MCC charges them in the merchant's currency. xPay supports both and helps merchants optimize DCC vs MCC routing based on geography, ticket size, and approval performance.",
  },
  {
    q: "Are there hidden fees in international payments with xPay?",
    a: "No. xPay offers transparent pricing with no hidden forex markups or intermediary bank fees. Businesses receive clear visibility into fees and settlement amounts.",
  },
  {
    q: "How does xPay handle forex conversion for international payments?",
    a: "xPay provides competitive forex conversion using near mid-market rates, helping Indian businesses avoid large forex markups commonly charged by banks and legacy gateways.",
  },
  {
    q: "What is FIRC and does xPay provide it?",
    a: "A FIRC (Foreign Inward Remittance Certificate) is proof of foreign funds received in India. xPay enables GST-compliant FIRCs through its banking partners for international settlements with every transaction.",
  },
  {
    q: "How long does settlement take for international payments with xPay?",
    a: "Settlement timelines with xPay are predictable and typically range from T+0 to T+7 working days, depending on geography and payment method.",
  },
  {
    q: "Can Indian businesses accept international bank transfers using xPay?",
    a: "Yes. xPay provides virtual bank accounts and international collection accounts, allowing businesses to receive global bank transfers at lower cost compared to traditional foreign banks.",
  },
  {
    q: "How does xPay reduce fraud in international payments?",
    a: "xPay uses proprietary AI risk engines, BIN-level analysis, adaptive 3DS, and payment method diversification to reduce fraud while maintaining high approval rates.",
  },
  {
    q: "How can Indian enterprises scale international payments efficiently with xPay?",
    a: "Indian enterprises scale efficiently with xPay by consolidating all global payment methods into one integration, improving success rates, reducing chargeback risk, lowering effective costs, and simplifying compliance and reconciliation.",
  },
];

const sf = { fontFamily: "'SF Pro Display', sans-serif" };

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-[15px] lg:text-[16px] font-medium text-[#0A0A0A] leading-snug"
          style={sf}
        >
          {q}
        </span>
        {/* Chevron rotates 180° on open — matches Google PAA behaviour */}
        <span
          className="shrink-0 w-7 h-7 rounded-full bg-[#F3F4F6] flex items-center justify-center"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 5L7 9.5L11.5 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* grid-template-rows trick — animates to actual content height, no fixed maxHeight */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            className="text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed pb-5"
            style={sf}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Fold8() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section className="relative z-30 w-full bg-[#F9FAFB] pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="max-w-[700px] mb-12">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            Frequently asked{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              questions.
            </span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={sf}>
            Everything you need to know about xPay and international payments.
          </p>
        </div>

        {/* Two-column accordion (desktop) / single column (mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
          {/* Left column */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] px-7 divide-y divide-[#E5E7EB]">
            {left.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] px-7 mt-4 lg:mt-0 divide-y divide-[#E5E7EB]">
            {right.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIdx === half + i}
                onToggle={() => toggle(half + i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
