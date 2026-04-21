const sf = { fontFamily: "'SF Pro Display', sans-serif" };

const LINKS = {
  Product: ["Features", "Pricing", "API Docs", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Contact Us", "Help Center", "Status"],
};

export default function Footer() {
  return (
    <footer className="relative z-30 w-full bg-[#0A0F1E]">
      {/* Top section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <span
              className="text-[28px] font-bold text-white tracking-tight"
              style={sf}
            >
              xPay
            </span>
            <p
              className="mt-4 text-[14px] text-[#94A3B8] leading-relaxed max-w-[300px]"
              style={sf}
            >
              The international payment gateway built for Indian businesses. Accept payments from 160+ countries, settle in INR.
            </p>
            <a
              href="mailto:hello@xpaycheckout.com"
              className="inline-block mt-5 text-[14px] text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
              style={sf}
            >
              hello@xpaycheckout.com
            </a>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #1D83FF, #45B1FF)", ...sf }}
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest mb-5"
                style={sf}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14px] text-[#94A3B8] hover:text-white transition-colors"
                      style={sf}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1E293B]" />

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-[#64748B]" style={sf}>
          © {new Date().getFullYear()} xPay. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[13px] text-[#64748B] hover:text-[#94A3B8] transition-colors"
              style={sf}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
