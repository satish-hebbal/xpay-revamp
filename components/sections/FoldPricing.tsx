const sf = { fontFamily: "'SF Pro Display', sans-serif" };

const FEATURES = [
  "Access to global virtual bank accounts",
  "Access to in-built Payments Gateway links & subscriptions",
  "Get money directly in your INR account",
  "Access to Sales Tax Autopilot",
  "Dedicated relationship manager",
  "100+ Currencies & 160+ Countries",
  "45+ Local payment methods",
];

export default function FoldPricing() {
  return (
    <section className="relative z-30 w-full bg-white border-t border-[#E5E7EB] pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="relative mb-12">
          <img
            src="/assets/Xpay-bann-1.png"
            alt=""
            className="hidden sm:block absolute right-0 top-0 w-[500px] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div className="max-w-[700px]">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            Flexible plans for{" "}
            <span style={{
              background: "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              every business.
            </span>
          </h2>
          </div>
        </div>

        {/* Pricing card */}
        <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden lg:flex">

          {/* Left — feature list */}
          <div className="flex-1 p-8 lg:p-10">
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[3px] flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgb(229,240,255)" }}>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4 7L10 1" stroke="rgb(29,131,255)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[15px] lg:text-[16px] text-[#374151] leading-snug" style={sf}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CTA panel */}
          <div
            className="lg:w-[320px] flex flex-col items-start justify-center p-8 lg:p-10 gap-6"
            style={{ background: "linear-gradient(160deg, rgb(5,76,255) 0%, rgb(35,106,203) 50%, rgb(69,177,255) 100%)" }}
          >
            <div>
              <p className="text-[22px] lg:text-[26px] font-medium text-white leading-tight mb-2" style={sf}>
                Custom pricing for your scale
              </p>
              <p className="text-[14px] text-white/70 leading-relaxed" style={sf}>
                No fixed tiers. We design a plan around your volume, currency mix, and business model.
              </p>
            </div>
            <a
              href="mailto:hello@xpaycheckout.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[15px] font-semibold transition-opacity hover:opacity-90"
              style={{ color: "rgb(5,76,255)", ...sf }}
            >
              Contact Sales
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
