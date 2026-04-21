const testimonials = [
  {
    quote:
      "Absolutely thrilled with the quick service! The product is brilliant and has helped us scale significantly internationally.",
    name: "Rito Maitra",
    role: "Founder, Radical Health",
    initials: "RM",
    color: "#2563EB",
  },
  {
    quote:
      "The team at xPay has made integration a breeze. Their prompt support had us up and running in no time and we've seen a significant improvement in our international operations.",
    name: "Harsh Bansal",
    role: "Founder, Remedo.io",
    initials: "HB",
    color: "#0891B2",
  },
  {
    quote:
      "Cheers to the xPay crew for their top-notch product! Transitioning from other services to xPay was a breeze—appreciate the streamlined process and clear API documentation.",
    name: "Rakesh K",
    role: "CSM, Edureka",
    initials: "RK",
    color: "#7C3AED",
  },
];

const sf = { fontFamily: "'SF Pro Display', sans-serif" };

export default function Fold7() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="max-w-[700px] mb-14">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            Loved by{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              builders.
            </span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={sf}>
            Indian businesses scaling globally with xPay.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8"
            >
              {/* Quote mark */}
              <svg
                width="32" height="24" viewBox="0 0 32 24" fill="none"
                className="mb-5 shrink-0"
              >
                <path
                  d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0Zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6.4 25.2 10.4H30V24H18Z"
                  fill="#D1D5DB"
                />
              </svg>

              <p
                className="text-[15px] text-[#374151] leading-[1.7] flex-1"
                style={sf}
              >
                {t.quote}
              </p>

              <div className="mt-7 pt-6 border-t border-[#E5E7EB] flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-semibold shrink-0"
                  style={{ background: t.color, ...sf }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0A0A0A]" style={sf}>
                    {t.name}
                  </p>
                  <p className="text-[12px] text-[#6B7280]" style={sf}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
