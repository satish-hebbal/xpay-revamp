"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

const companies = [
  { name: "Shwet",      src: "/assets/companies/shwet.svg",      width: 92,  height: 33 },
  { name: "Bolna",      src: "/assets/companies/bolna.svg",      width: 69,  height: 44 },
  { name: "Remedo",     src: "/assets/companies/remoedo.svg",    width: 94,  height: 31 },
  { name: "Primathon",  src: "/assets/companies/primathon.svg",  width: 106, height: 20 },
  { name: "Karbon",     src: "/assets/companies/Karbon.svg",     width: 98,  height: 27 },
  { name: "Biomarked",  src: "/assets/companies/biomarked.svg",  width: 123, height: 31 },
  { name: "PeppyHop",   src: "/assets/companies/peppyhop.svg",   width: 107, height: 26 },
];

export default function Hero() {
  return (
    <section className="relative h-screen pt-[72px] bg-white flex flex-col">
      <div id="nav-sentinel" className="absolute top-[72px] left-0 h-1 w-full pointer-events-none" />
      {/* Hero asset — absolute, right side */}
      <div
        className="hidden lg:block absolute top-0 w-[58%] h-[110vh] pointer-events-none z-20"
        style={{ right: "-4%" }}
      >
        <Image
          src="/assets/hero-asset-1.png"
          alt="xPay global payments"
          fill
          priority
          className="object-contain object-right-top select-none"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-[1200px] mx-auto px-6 w-full flex flex-col justify-center gap-10 pb-4">

        {/* Hero copy — constrained left column */}
        <div className="flex flex-col max-w-[660px] relative z-10">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            {/* YC Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: "#FEFDFC", borderColor: "#FC6723" }}
            >
              <span className="font-normal text-[#6B7280] text-base leading-none">Backed by</span>
              <Image
                src="/assets/YC-logo.svg"
                alt="Y Combinator"
                width={91}
                height={25}
                className="flex-shrink-0 h-[25px] w-auto"
              />
            </span>

            {/* Product Hunt Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: "#FFF0EE", borderColor: "#FF6255" }}
            >
              <Image
                src="/assets/product-hunt-logo.svg"
                alt="Product Hunt"
                width={24}
                height={24}
                style={{ marginLeft: "-4px" }}
                className="flex-shrink-0"
              />
              <span className="flex flex-col gap-[2px]">
                <span className="text-[10px] leading-none font-medium text-[#FF6154]">Product Hunt</span>
                <span className="text-sm leading-none font-semibold text-[#0A0A0A]">#4 Product of the Day</span>
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-xpay-text leading-[1.08] tracking-[-0.03em] mb-4 text-balance"
            style={{ fontSize: 56, fontWeight: 500 }}
          >
            Accept Payments from every corner of the world.
          </h1>

          {/* Subtext */}
          <p
            className="font-medium leading-relaxed mb-7"
            style={{ fontSize: 20, color: "rgba(0,0,0,0.5)" }}
          >
            No foreign entity. No compliance headache. No failed transactions.
          </p>

          {/* CTA */}
          <div>
            <Button variant="primary" size="lg" className="font-semibold">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Trusted by — marquee, full width, below CTA */}
        <div className="relative z-10 max-w-[1000px] mt-16">
          <p className="text-sm font-medium mb-8" style={{ color: "rgba(0,0,0,0.5)" }}>
            Trusted by brands that move fast
          </p>
          <div
            className="overflow-hidden relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%)",
            }}
          >
            <div className="flex items-center gap-14 animate-marquee w-max">
              {[...companies, ...companies].map((company, i) => (
                <div key={i} className="flex-shrink-0 flex items-center">
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={company.height}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom border strip */}
      <div className="border-t bg-green-500 z-30" />
    </section>
  );
}
