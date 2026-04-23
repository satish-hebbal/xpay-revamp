"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import XGraphic from "@/components/ui/XGraphic";

const companies = [
  { name: "Shwet",      src: "/assets/companies/shwet.svg",      width: 92,  height: 33,  className: "h-6 w-auto object-contain" },
  { name: "Bolna",      src: "/assets/companies/bolna.svg",      width: 69,  height: 44,  className: "h-9 w-auto object-contain" },
  { name: "Remedo",     src: "/assets/companies/remoedo.svg",    width: 94,  height: 31,  className: "h-6 w-auto object-contain" },
  { name: "Primathon",  src: "/assets/companies/primathon.svg",  width: 106, height: 20,  className: "h-6 w-auto object-contain" },
  { name: "Karbon",     src: "/assets/companies/Karbon.svg",     width: 98,  height: 27,  className: "h-6 w-auto object-contain" },
  { name: "Biomarked",  src: "/assets/companies/biomarked.svg",  width: 123, height: 31,  className: "h-6 w-auto object-contain" },
  { name: "PeppyHop",   src: "/assets/companies/peppyhop.svg",   width: 107, height: 26,  className: "h-6 w-auto object-contain" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-auto lg:h-[126svh] pt-[72px] bg-white flex flex-col overflow-hidden">
      <div id="nav-sentinel" className="absolute top-[100px] left-0 h-1 w-full pointer-events-none" />
      {/* Hero asset — desktop: clip inside positioned frame */}
      <div className="hidden lg:block absolute -top-16 w-[58%] h-[115vh] overflow-hidden pointer-events-none z-20 right-[-13rem] xl:right-[-11rem]">
        <XGraphic />
      </div>

      {/* Hero asset — mobile: bleed freely; clipping is only at section edges (full width), no inner overflow box */}
      <div
        className="lg:hidden pointer-events-none absolute left-0 right-0 top-[52px] z-[5] h-[min(48vh,420px)] min-h-[260px]"
        aria-hidden
      >
        <div className="absolute top-6 bottom-0 left-[40%] min-h-[260px] -right-[80vw] translate-x-[16vw] translate-y-2 sm:left-[44%] sm:-right-[64vw] sm:translate-x-[18vw]">
          <XGraphic />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col justify-start gap-8 pb-0 lg:pb-8 pt-2 lg:flex-1 lg:pt-28 lg:justify-start lg:gap-10 relative z-10">

        {/* Hero copy — constrained left column */}
        <div className="flex flex-col max-w-[660px] relative z-10">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-7 lg:mb-5">
            {/* YC Badge */}
            <span
              className="relative inline-flex items-center gap-2 px-3.5 h-10 rounded-full border cursor-pointer overflow-hidden group transition-shadow duration-300"
              style={{ backgroundColor: "#FEFDFC", borderColor: "#FC6723", boxShadow: "none" }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = [
                  "inset 0 1px 3px rgba(255,255,255,0.95)",
                  "inset 0 4px 8px rgba(255,255,255,0.6)",
                  "inset 0 -4px 10px rgba(252,103,35,0.2)",
                  "0 0 0 1.5px rgba(252,103,35,0.9)",
                  "0 1px 0px rgba(255,180,130,0.6)",
                  "0 4px 12px rgba(252,103,35,0.15)",
                ].join(", ");
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#FC6723";
              }}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out skew-x-[-20deg]" style={{ background: "linear-gradient(to right, transparent, #FC672340, transparent)" }} />
              <span className="font-normal text-[#6B7280] text-[13px] leading-none">Backed by</span>
              <Image
                src="/assets/YC-logo.svg"
                alt="Y Combinator"
                width={70}
                height={20}
                className="flex-shrink-0 h-[22px] w-auto"
              />
            </span>

            {/* Product Hunt Badge */}
            <span
              className="relative inline-flex items-center gap-2 px-3.5 h-10 rounded-full border cursor-pointer overflow-hidden group"
              style={{ backgroundColor: "#FFF0EE", borderColor: "#FF6255" }}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]" />
              <Image
                src="/assets/product-hunt-logo.svg"
                alt="Product Hunt"
                width={24}
                height={24}
                style={{ marginLeft: "-6px" }}
                className="flex-shrink-0"
              />
              <span className="flex flex-col gap-[1px]">
                <span className="text-[9px] leading-none font-medium text-[#FF6154]">Product Hunt</span>
                <span className="text-[12px] leading-none font-semibold text-[#0A0A0A]">#4 Product of the Day</span>
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-xpay-text leading-[1.08] tracking-[-0.03em] mb-6 lg:mb-4 text-balance text-[36px] sm:text-[44px] lg:text-[60px]"
            style={{ fontWeight: 500 }}
          >
            The International<br/>
            Payment Gateway Built for{" "}
            <span style={{ background: "linear-gradient(90deg,rgb(0, 115, 255), #45B1FF,rgb(69, 181, 255),rgb(0, 225, 255))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Indian Businesses</span>
            <span style={{ background: "linear-gradient(90deg,rgb(0, 110, 255))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>.</span>

          </h1>

          {/* Subtext */}
          <p
            className="font-medium leading-relaxed mb-9 lg:mb-7 text-base sm:text-lg lg:text-xl"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
           95% success rate. Local acquiring across 160+ countries. Settled in INR
           within 24hrs.
          </p>

          {/* CTA */}
          <div>
            <Button variant="primary" size="lg" className="font-semibold w-full lg:w-auto justify-center border border-white lg:border-0">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Trusted by — marquee, full width, below CTA */}
        <div className="relative z-10 w-full mt-4 pt-4 pb-20 lg:mt-4 lg:pt-0 lg:pb-0 lg:max-w-[800px] min-[1291px]:max-w-[950px]">
          <div className="lg:hidden absolute inset-0 -left-6 -right-6 bg-white z-[1]" />
          <div className="relative z-[2]">
          <p className="text-sm font-medium mb-6" style={{ color: "rgba(0,0,0,0.25)" }}>
            Trusted by brands that move fast.
          </p>
          <div
            className="overflow-hidden relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
            }}
          >
            <div className="flex items-center gap-12 animate-marquee w-max">
              {[...companies, ...companies].map((company, i) => (
                <div key={i} className="flex-shrink-0 flex items-center">
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={company.height}
                    className={company.className}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

      </div>

      {/* Bottom edge — desktop separator only (mobile: trusted block white extends to Fold2) */}
      <div className="hidden lg:block border-t border-[#E5E7EB] bg-white z-30" />
    </section>
  );
}
