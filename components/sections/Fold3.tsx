import Image from "next/image";

export default function Fold3() {
  return (
    <section className="relative z-30 w-full bg-white py-0 lg:pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Text block */}
        <div className="max-w-[700px] mb-14 lg:mb-16">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
            <span style={{ background: "linear-gradient(90deg,rgb(29, 131, 255), #45B1FF, rgb(69, 181, 255), #45FFE9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>95%</span> international payment <br /> success rate.
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed">
            Most Indian gateways fail globally because they route through Indian infrastructure. <br />
            xPay uses direct local acquiring - your customer&apos;s payment never leaves their region.
          </p>
        </div>

        {/* Dashboard image */}
        <div className="relative w-full overflow-hidden">
          {/* Mobile */}
          <Image
            src="/assets/dashboard-blk-mobile-1.svg"
            alt="xPay dashboard showing live payment analytics"
            width={1296}
            height={843}
            className="w-full h-auto block sm:hidden"
            priority
          />
          {/* Desktop */}
          <Image
            src="/assets/dashboard-blk.svg"
            alt="xPay dashboard showing live payment analytics"
            width={1296}
            height={545}
            className="w-full h-auto hidden sm:block"
            priority
          />
        </div>

      </div>
    </section>
  );
}
