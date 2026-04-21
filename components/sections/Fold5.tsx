"use client";

const PILL_LABELS = ["SaaS", "EdTech", "Travel", "Consumer App"];
const LEFT_ITEMS = [
  { flag: "🇺🇸", method: "ACH" },
  { flag: "🇩🇪", method: "iDEAL" },
  { flag: "🇸🇬", method: "PayNow" },
  { flag: "🇨🇳", method: "Alipay" },
];
const RIGHT_ITEMS = ["INR in 24hrs", "FIRC generated", "Tax remitted", "95% success rate"];

const PILL_W = 150, PILL_H = 44, PILL_Y = 24;
const PILL_CX = [135, 345, 555, 765];
const XCX = 450, XCY = 210, XW = 230, XH = 66;
const LCX = 185, RCX = 715, COL_W = 220;
const HDR_Y = 334;
const ITEM_START_Y = 358;
const ITEM_H = 40, ITEM_GAP = 10;

const PILL_BOT = PILL_Y + PILL_H;
const XPAY_TOP = XCY - XH / 2;
const XPAY_BOT = XCY + XH / 2;
const SVG_H = ITEM_START_Y + 4 * (ITEM_H + ITEM_GAP) - ITEM_GAP + 28;

export default function Fold5() {
  return (
    <section className="relative z-30 w-full bg-white pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[700px] mb-14">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[54px] font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            One integration.{" "}
            <span style={{
              background: "linear-gradient(90deg, rgb(29,131,255), #45B1FF, rgb(69,181,255), #45FFE9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Global reach.
            </span>
          </h2>
          <p
            className="text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            xPay sits between your product and the world — routing payments locally,
            settling in INR, and handling compliance automatically.
          </p>
        </div>

        <svg
          viewBox={`0 0 900 ${SVG_H}`}
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontFamily: "'SF Pro Display', system-ui, sans-serif", overflow: "visible" }}
        >
          <defs>
            <filter id="f5glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {PILL_CX.map((cx, i) => (
              <path key={i} id={`f5p${i}`} d={`M ${cx} ${PILL_BOT} L ${XCX} ${XPAY_TOP}`} />
            ))}
            <path id="f5p4" d={`M ${XCX - 18} ${XPAY_BOT} L ${LCX} ${HDR_Y - 8}`} />
            <path id="f5p5" d={`M ${XCX + 18} ${XPAY_BOT} L ${RCX} ${HDR_Y - 8}`} />
          </defs>

          {PILL_CX.map((cx, i) => (
            <line key={i} x1={cx} y1={PILL_BOT} x2={XCX} y2={XPAY_TOP}
              stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="5 5" />
          ))}
          <line x1={XCX - 18} y1={XPAY_BOT} x2={LCX} y2={HDR_Y - 8}
            stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="5 5" />
          <line x1={XCX + 18} y1={XPAY_BOT} x2={RCX} y2={HDR_Y - 8}
            stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="5 5" />

          {PILL_CX.map((_, i) => (
            <circle key={i} r={4} fill="#3B82F6" opacity={0.85}>
              <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${-(i * 0.45)}s`}>
                <mpath href={`#f5p${i}`} />
              </animateMotion>
            </circle>
          ))}
          <circle r={4} fill="#3B82F6" opacity={0.85}>
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="-0.75s">
              <mpath href="#f5p4" />
            </animateMotion>
          </circle>
          <circle r={4} fill="#22C55E" opacity={0.9}>
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="-0.3s">
              <mpath href="#f5p5" />
            </animateMotion>
          </circle>

          {PILL_LABELS.map((label, i) => (
            <g key={i}>
              <rect x={PILL_CX[i] - PILL_W / 2} y={PILL_Y} width={PILL_W} height={PILL_H}
                rx={PILL_H / 2} fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
              <text x={PILL_CX[i]} y={PILL_Y + PILL_H / 2 + 5} textAnchor="middle"
                fontSize={label === "Consumer App" ? "12" : "14"} fill="#374151" fontWeight="500">
                {label}
              </text>
            </g>
          ))}

          <rect x={XCX - XW / 2 - 6} y={XCY - XH / 2 - 6} width={XW + 12} height={XH + 12} rx={18}
            fill="#2563EB" opacity={0.18} filter="url(#f5glow)" />
          <rect x={XCX - XW / 2} y={XCY - XH / 2} width={XW} height={XH} rx={14}
            fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5" />
          <text x={XCX} y={XCY + 9} textAnchor="middle" fontSize="24" fill="white" fontWeight="700" letterSpacing="-0.5">
            xPay
          </text>

          <text x={LCX} y={HDR_Y} textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">
            GLOBAL CUSTOMERS
          </text>
          {LEFT_ITEMS.map(({ flag, method }, i) => {
            const y = ITEM_START_Y + i * (ITEM_H + ITEM_GAP);
            return (
              <g key={i}>
                <rect x={LCX - COL_W / 2} y={y} width={COL_W} height={ITEM_H}
                  rx={10} fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
                <text x={LCX - COL_W / 2 + 22} y={y + ITEM_H / 2 + 6} fontSize="19">{flag}</text>
                <text x={LCX - COL_W / 2 + 52} y={y + ITEM_H / 2 + 5} fontSize="14" fill="#374151" fontWeight="500">
                  {method}
                </text>
              </g>
            );
          })}

          <text x={RCX} y={HDR_Y} textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">
            YOU RECEIVE
          </text>
          {RIGHT_ITEMS.map((text, i) => {
            const y = ITEM_START_Y + i * (ITEM_H + ITEM_GAP);
            return (
              <g key={i}>
                <rect x={RCX - COL_W / 2} y={y} width={COL_W} height={ITEM_H}
                  rx={10} fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                <circle cx={RCX - COL_W / 2 + 22} cy={y + ITEM_H / 2} r={10} fill="#22C55E" />
                <text x={RCX - COL_W / 2 + 22} y={y + ITEM_H / 2 + 4} textAnchor="middle"
                  fontSize="11" fill="white" fontWeight="800">✓</text>
                <text x={RCX - COL_W / 2 + 42} y={y + ITEM_H / 2 + 5} fontSize="13" fill="#166534" fontWeight="500">
                  {text}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
