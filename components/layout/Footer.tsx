import Image from "next/image";
import Button from "@/components/ui/Button";

const sf = { fontFamily: "'SF Pro Display', sans-serif" };

const DASH = "rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 4px, transparent 4px, transparent 7px";
const lineH = { backgroundImage: `repeating-linear-gradient(to right, ${DASH})`, backgroundSize: "100% 1px", backgroundRepeat: "no-repeat" };
const lineHBottom = { ...lineH, backgroundPosition: "0 100%" };
const lineHTop    = { ...lineH, backgroundPosition: "0 0" };
const lineV = { backgroundImage: `repeating-linear-gradient(to bottom, ${DASH})`, backgroundSize: "1px 100%", backgroundRepeat: "no-repeat", backgroundPosition: "0 0" };

const G1 = "linear-gradient(180deg, #054cff 0%, #236acb 40%, #45b1ff 75%, #4db4ff 100%)";
const G2 = "linear-gradient(180deg, #196bf6 0%, #308fff 50%, #2f90ff 100%)";
const G3 = "linear-gradient(180deg, #247af3 0%, #2078ff 50%, #2179ff 100%)";

const LINKS = {
  Product: ["Features", "Pricing", "API Docs", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Contact Us", "Help Center", "Status"],
};

export default function Footer() {
  return (
    <footer className="relative z-30 w-full overflow-hidden" style={{ backgroundColor: "rgb(2, 5, 12)" }}>


      {/* CTA band */}
      <div className="relative z-10 overflow-hidden" style={lineHBottom}>

        {/* SVG filter for green glass */}
        <svg width={0} height={0} style={{ position: "absolute" }}>
          <defs>
            <filter id="footer-glass-distortion" x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox">
              <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
              <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
              </feComponentTransfer>
              <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
              <feDisplacementMap in="SourceGraphic" in2="softMap" scale="80" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {/* Blue + green stack — decorative right side */}
        <div className="absolute right-0 top-0 h-full w-[340px] pointer-events-none" style={{ zIndex: 0 }}>
          <style>{`
            .fg-glass1 { isolation: isolate; position: absolute; inset: 0; filter: url(#footer-glass-distortion); backdrop-filter: blur(6px); }
            .fg-glass2 { position: absolute; inset: 0; box-shadow: inset 1px 1px 0px 0 rgb(192 228 233 / 70%), inset -3px 0px 10px 0 rgb(192 228 233 / 60%), inset 3px 2px 3px 0 rgb(192 228 233 / 60%), inset -1px -1px 3px 1px rgba(255,255,255,0.45); }
          `}</style>

          {/* Blue stack */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.65 }}>
          <style>{`
            .fb-gb { position: absolute; overflow: hidden; }
            .fb-gb::before { content: ''; position: absolute; inset: -60%; transform-origin: center; }
            .fb-gb::after { content: ''; position: absolute; inset: 0; pointer-events: none; box-sizing: border-box; border: 1px solid rgba(255,255,255,0.85); animation: fbBorderPulse 5.2s ease-in-out infinite; }
            .fb-gb-2::after { animation-delay: -1.7s; }
            .fb-gb-3::after { animation-delay: -3.5s; }
            @keyframes fbBorderPulse { 0%,100% { opacity:0.2; } 50% { opacity:1; } }
            .fb-fill { position: absolute; inset: 1.5px; }
            .fb-gb-1::before { background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.4) 45deg, rgba(255,255,255,1) 63deg, rgba(255,255,255,0.4) 78deg, transparent 130deg, transparent 360deg); animation: fbSpin1 11.3s cubic-bezier(0.4,0,0.6,1) infinite; }
            .fb-gb-2::before { background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.55) 138deg, rgba(255,255,255,1) 150deg, rgba(255,255,255,0.55) 162deg, transparent 200deg, transparent 360deg); animation: fbSpin2 8.7s linear infinite; animation-delay: -3.2s; }
            .fb-gb-3::before { background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,1) 12deg, transparent 28deg, transparent 360deg); animation: fbSpin3 4.1s linear infinite; animation-delay: -1.6s; }
            @keyframes fbSpin1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            @keyframes fbSpin2 { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            @keyframes fbSpin3 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            @media (max-width: 1023px) { .fb-blue-inner { transform: skewX(-32deg) translateX(71px) !important; } }
          `}</style>
          <div className="fb-blue-inner" style={{ position: "absolute", inset: 0, transform: "skewX(-32deg) translateX(-40px)" }}>
            <div className="fb-gb fb-gb-1" style={{ inset: 0 }}>
              <div className="fb-fill" style={{ background: G1 }} />
            </div>
            <div className="fb-gb fb-gb-2" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "100%" }}>
              <div className="fb-fill" style={{ background: G2 }} />
            </div>
            <div className="fb-gb fb-gb-3" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: "18%", height: "100%" }}>
              <div className="fb-fill" style={{ background: G3 }} />
            </div>
          </div>
          </div>

          {/* Green glass panel — right edge */}
          <div className="absolute top-0 bottom-0 right-[-90px] lg:right-[150px] flex items-center justify-end" style={{ zIndex: 1 }}>
            <div style={{ position: "relative", transform: "skewX(32deg)" }}>
              <div style={{ width: 120, height: 160, position: "relative", overflow: "hidden", background: "linear-gradient(120deg, rgba(0,255,255,0.51) 0%, rgba(21,232,157,0.51) 50%, rgba(86,255,161,0.51) 76%, rgba(4,229,115,0.51) 100%)", border: "1px solid rgba(255,255,255,0.7)", boxSizing: "border-box", borderTopLeftRadius: 12, borderTopRightRadius: 4, borderBottomRightRadius: 12, borderBottomLeftRadius: 4 }}>
                <div className="fg-glass1" />
                <div className="fg-glass2" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 py-16" style={{ zIndex: 1 }}>

          {/* Left — headline + CTAs */}
          <div className="flex flex-col max-w-[560px]">
            <h2
              className="text-[28px] sm:text-[32px] font-medium text-white leading-tight tracking-tight mb-3"
              style={sf}
            >
              Ready to accept global payments?
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8" style={sf}>
              Create an account instantly, or contact us to design a custom package for your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" className="font-semibold border-2 border-white lg:border-0">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Button>
              <a
                href="mailto:hello@xpaycheckout.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-base font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
                style={sf}
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {Object.entries(LINKS).map(([heading, items], i) => (
            <div key={heading} className="p-8" style={i > 0 ? lineV : undefined}>
              <h4
                className="text-[15px] font-semibold text-[#006AFF] tracking-widest mb-5"
                style={sf}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[15px]  font-semibold text-[#686868] hover:text-white transition-colors"
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

      {/* Bottom bar */}
      <div className="relative z-10 w-full" style={lineHTop}>
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Image src="/assets/logo-for-blk-bg.png" alt="xPay" width={64} height={22} className="object-contain opacity-60" />
          <p className="text-[13px] text-[#64748B]" style={sf}>
            © {new Date().getFullYear()} xPay. All rights reserved.
          </p>
        </div>
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
      </div>

    </footer>
  );
}
