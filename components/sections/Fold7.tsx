const testimonials = [
  {
    quote:
      "Absolutely thrilled with the quick service! The product is brilliant and has helped us scale significantly internationally.",
    name: "Rito Maitra",
    role: "Founder, Radical Health",
    avatar: "/assets/testo/rito.jpg",
  },
  {
    quote:
      "The team at xPay has made integration a breeze. Their prompt support had us up and running in no time and we've seen a significant improvement in our international operations.",
    name: "Harsh Bansal",
    role: "Founder, Remedo.io",
    avatar: "/assets/testo/harsh.jpg",
  },
  {
    quote:
      "Cheers to the xPay crew for their top-notch product! Transitioning from other services to xPay was a breeze—appreciate the streamlined process and clear API documentation.",
    name: "Rakesh K",
    role: "CSM, Edureka",
    avatar: "/assets/testo/rakesh.jpg",
  },
];

const sf = { fontFamily: "'SF Pro Display', sans-serif" };

export default function Fold7() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="relative mb-12">
          {/* Decorative asset — top right */}
          <img
            src="/assets/des-asset.png"
            alt=""
            className="hidden sm:block absolute right-0 top-0 w-[120px] pointer-events-none select-none"
            aria-hidden="true"
          />
        <div className="max-w-[700px]">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            Trusted by Indian businesses
            {" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              going global
            </span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={sf}>
            Indian businesses scaling globally with xPay.
          </p>
        </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8"
            >
              {/* Quote mark */}
              <img
                src="/assets/payment-plat-icons/quote.svg"
                alt=""
                width={37}
                height={27}
                className="mb-5 shrink-0"
              />

              <p
                className="text-[15px] text-[#374151] leading-[1.7] flex-1"
                style={sf}
              >
                {t.quote}
              </p>

              <div className="mt-7 flex items-center gap-3">
                {/* Avatar */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
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
