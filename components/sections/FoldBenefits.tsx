const sf = { fontFamily: "'SF Pro Display', sans-serif" };

const DIFFERENTIATORS = [
  {
    image: "/assets/payment-plat-icons/zero-hidden-charges.png",
    imgHeight: "75%",
   
    title: "Zero Hidden Charges",
    desc: "Serious about transparent pricing. No extra charges on our already best-in-market fees.",
  },
  {
    image: "/assets/payment-plat-icons/firc.png",
    imgHeight: "100%",
   
    title: "Instant FIRC in Dashboard",
    desc: "GST-compliant FIRCs auto-generated for every transaction, no chasing your bank.",
  },
  {
    image: "/assets/payment-plat-icons/no-limits.png",
    imgHeight: "75%",
   
    title: "No Transaction Limits",
    desc: "One-time payments or subscriptions, we don't hold you back like other gateways.",
  },
  {
    image: "/assets/payment-plat-icons/10min-sla.png",
    imgHeight: "70%",
    imgValign: "center",
   
    title: "10-Minute Support SLA",
    desc: "Always there when you need us, phone call or WhatsApp, within 10 minutes.",
  },
];


export default function FoldBenefits() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-20 lg:pt-24 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── Part 1: Differentiators ── */}
        <div className="max-w-[700px] mb-12">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            Built{" "}
            <span style={{
              background: "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              different.
            </span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={sf}>
            Most gateways are built for the West and retrofitted for India. xPay is built ground-up for Indian businesses going global.
          </p>
        </div>

        {/* 4-column differentiator cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden lg:h-[480px]"
            >
              <div className={`h-[280px] lg:h-[70%] overflow-hidden flex ${item.imgValign === "bottom" ? "items-end" : item.imgValign === "center" ? "items-center" : "items-start"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain"
                  style={{ height: item.imgHeight }}
                />
              </div>
              <div className="flex-1 lg:h-[30%] flex flex-col justify-start p-4">
                <p className="text-[17px] font-medium leading-snug" style={sf}>
                  <span style={{ color: "rgb(15, 79, 255)" }}>{item.title}{" "}</span>
                  <span style={{ color: "rgb(160, 166, 185)", fontWeight: 400 }}>{item.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
