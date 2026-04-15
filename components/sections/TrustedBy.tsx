"use client";

import Image from "next/image";

const companies = [
  { name: "Shwet",      src: "/assets/companies/shwet.svg",      width: 92,  height: 33 },
  { name: "Bolna",      src: "/assets/companies/bolna.svg",      width: 69,  height: 44 },
  { name: "Remedo",     src: "/assets/companies/remoedo.svg",    width: 94,  height: 31 },
  { name: "Primathon",  src: "/assets/companies/primathon.svg",  width: 106, height: 20 },
  { name: "Karbon",     src: "/assets/companies/Karbon.svg",     width: 98,  height: 27 },
  { name: "Biomarked",  src: "/assets/companies/biomarked.svg",  width: 123, height: 31 },
  { name: "PeppyHop",   src: "/assets/companies/peppyhop.svg",   width: 107, height: 26 },
];

export default function TrustedBy() {
  return (
    <section className="bg-xpay-surface border-t border-xpay-border py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xpay-muted text-sm font-medium mb-6">
          Trusted by brands that move fast
        </p>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center"
            >
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
    </section>
  );
}
