const sf = { fontFamily: "'SF Pro Display', sans-serif" };

const DIFFERENTIATORS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z" stroke="#3B82F6" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Zero Hidden Charges",
    desc: "Serious about transparent pricing. No extra charges on our already best-in-market fees.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="2" width="14" height="18" rx="2" stroke="#3B82F6" strokeWidth="1.6" />
        <path d="M7 7h8M7 11h8M7 15h5" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Instant FIRC in Dashboard",
    desc: "GST-compliant FIRCs auto-generated for every transaction — no chasing your bank.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M14 7l4 4-4 4" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 7l-4 4 4 4" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" transform="translate(4,0)" />
      </svg>
    ),
    title: "No Transaction Limits",
    desc: "One-time payments or subscriptions — we don't hold you back like other gateways.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#3B82F6" strokeWidth="1.6" />
        <path d="M11 7v4l2.5 2.5" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "10-Minute Support SLA",
    desc: "Always there when you need us — phone call or WhatsApp, within 10 minutes.",
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#6366F1" strokeWidth="1.6" />
        <ellipse cx="11" cy="11" rx="4" ry="8" stroke="#6366F1" strokeWidth="1.6" />
        <path d="M3 11h16" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    color: "#EEF2FF",
    border: "#C7D2FE",
    iconBg: "#6366F1",
    title: "Global Subscriptions",
    desc: "Collect recurring payments in 100+ currencies from worldwide customers via links or API — ideal for SaaS.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M10 13l-3 3a3 3 0 01-4.24-4.24l5-5A3 3 0 0112 7" stroke="#0891B2" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 9l3-3a3 3 0 014.24 4.24l-5 5A3 3 0 0110 15" stroke="#0891B2" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    color: "#ECFEFF",
    border: "#A5F3FC",
    iconBg: "#0891B2",
    title: "Payment Links",
    desc: "Create shareable, branded payment links in seconds — no code required.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="18" height="13" rx="2" stroke="#059669" strokeWidth="1.6" />
        <path d="M6 6V5a5 5 0 0110 0v1" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="11" cy="13" r="2" stroke="#059669" strokeWidth="1.6" />
      </svg>
    ),
    color: "#F0FDF4",
    border: "#BBF7D0",
    iconBg: "#059669",
    title: "Virtual Accounts",
    desc: "Collect USD, GBP, and CAD for your Indian entity without setting up foreign entities — 24-hour settlement.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#D97706" strokeWidth="1.6" />
        <path d="M7 11h2l2-4 2 8 2-4h2" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#FFFBEB",
    border: "#FDE68A",
    iconBg: "#D97706",
    title: "Sales Tax Automation",
    desc: "Automated tax collection and remittance across 100+ geographies — stay compliant globally.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16l4-4 3 3 4-5 3 3" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="18" height="18" rx="2" stroke="#7C3AED" strokeWidth="1.6" />
      </svg>
    ),
    color: "#F5F3FF",
    border: "#DDD6FE",
    iconBg: "#7C3AED",
    title: "Real-time Visibility",
    desc: "Live dashboard with growth charts, fee breakdowns, and transaction-level risk scoring.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="#DB2777" strokeWidth="1.6" />
        <path d="M2 9h18" stroke="#DB2777" strokeWidth="1.6" />
        <circle cx="6" cy="14" r="1.5" fill="#DB2777" />
        <circle cx="11" cy="14" r="1.5" fill="#DB2777" />
      </svg>
    ),
    color: "#FFF1F2",
    border: "#FECDD3",
    iconBg: "#DB2777",
    title: "Local Payment Methods",
    desc: "45+ regional payment options including cards, wallets, BNPL, and bank transfers across every major market.",
  },
];

export default function FoldBenefits() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-24">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-end gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 min-h-[400px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="text-[15px] font-semibold leading-relaxed" style={sf}>
                <span style={{ color: "#000000" }}>{item.title}{" "}</span>
                <span style={{ color: "rgba(0,0,0,0.5)", fontWeight: 400 }}>{item.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* ── Part 2: Features ── */}
        <div className="max-w-[700px] mb-12">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={sf}
          >
            End-to-end payment{" "}
            <span style={{
              background: "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              infrastructure.
            </span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed" style={sf}>
            Everything your business needs to collect, manage, and reconcile international payments — in one place.
          </p>
        </div>

        {/* 3×2 feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border p-6"
              style={{ background: item.color, borderColor: item.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: item.color, border: `1.5px solid ${item.border}` }}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0A0A0A] mb-1.5" style={sf}>
                  {item.title}
                </p>
                <p className="text-[13px] text-[#6B7280] leading-relaxed" style={sf}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
