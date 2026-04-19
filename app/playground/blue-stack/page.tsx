"use client";

const G1 = "linear-gradient(180deg, #054cff 0%, #236acb 40%, #45b1ff 75%, #4db4ff 100%)";
const G2 = "linear-gradient(180deg, #196bf6 0%, #308fff 50%, #2f90ff 100%)";
const G3 = "linear-gradient(180deg, #247af3 0%, #2078ff 50%, #2179ff 100%)";

const BW = 260;
const BH = 950;

export default function BlueStackPage() {
  return (
    <>
      <style>{`
        .glow-border { position: absolute; overflow: hidden; }
        .glow-border::before { content: ''; position: absolute; inset: -60%; transform-origin: center; }
        .glow-border::after { content: ''; position: absolute; inset: 0; pointer-events: none; box-sizing: border-box; border-radius: inherit; }

        .gb-1::after { border: 1px solid rgba(255,255,255,0.85); animation: borderPulse 5.2s ease-in-out infinite; }
        .gb-2::after { border: 1px solid rgba(255,255,255,0.85); animation: borderPulse 5.2s ease-in-out infinite; animation-delay: -1.7s; }
        .gb-3::after { border: 1px solid rgba(255,255,255,0.85); animation: borderPulse 5.2s ease-in-out infinite; animation-delay: -3.5s; }

        @keyframes borderPulse {
          0%   { opacity: 0.2; }
          50%  { opacity: 1; }
          100% { opacity: 0.2; }
        }
        .glow-border .fill { position: absolute; inset: 1.5px; }

        /* gb-1: wide sweeping double arc, slow clockwise 11.3s, slight ease pulse */
        .gb-1 { border-radius: 0; }
        .gb-1 .fill { border-radius: 0; }
        .gb-1::before {
          background: conic-gradient(from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.03) 15deg, rgba(255,255,255,0.4) 45deg,
            rgba(255,255,255,0.95) 58deg, rgba(255,255,255,1) 63deg,
            rgba(255,255,255,0.4) 78deg, rgba(255,255,255,0.03) 100deg,
            transparent 130deg, transparent 175deg,
            rgba(255,255,255,0.03) 195deg, rgba(255,255,255,0.35) 225deg,
            rgba(255,255,255,0.85) 240deg, rgba(255,255,255,0.35) 255deg,
            rgba(255,255,255,0.03) 280deg, transparent 310deg, transparent 360deg);
          animation: spin1 11.3s cubic-bezier(0.4,0,0.6,1) infinite;
        }

        /* gb-2: tight single needle, medium counter-clockwise 8.7s */
        .gb-2 { border-radius: 0; }
        .gb-2 .fill { border-radius: 0; }
        .gb-2::before {
          background: conic-gradient(from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.01) 55deg, rgba(255,255,255,0.12) 100deg,
            rgba(255,255,255,0.55) 138deg, rgba(255,255,255,1) 150deg,
            rgba(255,255,255,0.55) 162deg, rgba(255,255,255,0.08) 185deg,
            transparent 200deg, transparent 360deg);
          animation: spin2 8.7s linear infinite;
          animation-delay: -3.2s;
        }

        /* gb-3: triple sharp spikes, fast clockwise 4.1s */
        .gb-3 { border-radius: 0; }
        .gb-3 .fill { border-radius: 0; }
        .gb-3::before {
          background: conic-gradient(from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.6) 8deg, rgba(255,255,255,1) 12deg,
            rgba(255,255,255,0.6) 16deg, transparent 28deg,
            transparent 115deg,
            rgba(255,255,255,0.5) 123deg, rgba(255,255,255,0.95) 127deg,
            rgba(255,255,255,0.5) 131deg, transparent 143deg,
            transparent 232deg,
            rgba(255,255,255,0.7) 239deg, rgba(255,255,255,1) 243deg,
            rgba(255,255,255,0.7) 247deg, transparent 259deg,
            transparent 360deg);
          animation: spin3 4.1s linear infinite;
          animation-delay: -1.6s;
        }

        @keyframes spin1 {
          0%   { transform: rotate(0deg) scale(1); }
          40%  { transform: rotate(148deg) scale(1.04); }
          70%  { transform: rotate(251deg) scale(0.97); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes spin2 {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes spin3 {
          0%   { transform: rotate(0deg); }
          30%  { transform: rotate(108deg) scale(1.06); }
          60%  { transform: rotate(216deg) scale(0.95); }
          100% { transform: rotate(360deg); }
        }

        /* fill drifts — each panel moves on its own rhythm */
        .fill-1 { background-size: 220% 220% !important; animation: gradDrift1 9.4s ease-in-out infinite alternate; }
        .fill-2 { background-size: 200% 200% !important; animation: gradDrift2 6.1s cubic-bezier(0.45,0.05,0.55,0.95) infinite alternate; animation-delay: -2.5s; }
        .fill-3 { background-size: 240% 240% !important; animation: gradDrift3 13.7s ease-in-out infinite alternate; animation-delay: -7s; }

        @keyframes gradDrift1 { 0% { background-position: 0% 0%; } 50% { background-position: 80% 50%; } 100% { background-position: 100% 100%; } }
        @keyframes gradDrift2 { 0% { background-position: 100% 0%; } 50% { background-position: 20% 60%; } 100% { background-position: 0% 100%; } }
        @keyframes gradDrift3 { 0% { background-position: 30% 0%; } 40% { background-position: 70% 40%; } 100% { background-position: 50% 100%; } }
      `}</style>

      <div style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: BW, height: BH, transform: "skewX(-32deg)" }}>
          <div className="glow-border gb-1" style={{ inset: 0 }}>
            <div className="fill fill-1" style={{ background: G1 }} />
          </div>
          <div className="glow-border gb-2" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.6, height: BH }}>
            <div className="fill fill-2" style={{ background: G2 }} />
          </div>
          <div className="glow-border gb-3" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.18, height: BH }}>
            <div className="fill fill-3" style={{ background: G3 }} />
          </div>
        </div>
      </div>
    </>
  );
}

