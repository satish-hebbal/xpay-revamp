"use client";

const GRADIENT = "linear-gradient(120deg, rgba(0,255,255,0.51) 0%, rgba(21,232,157,0.51) 50%, rgba(86,255,161,0.51) 76%, rgba(4,229,115,0.51) 100%)";

const G1 = "linear-gradient(180deg, #054cff 0%, #236acb 40%,rgb(106,193,255) 75%,rgb(118,198,255) 100%)";
const G2 = "linear-gradient(180deg,rgb(21,97,228) 0%, #308fff 50%, #2f90ff 100%)";
const G3 = "linear-gradient(180deg, #247af3 0%, #2078ff 50%, #2179ff 100%)";
const BW = 240;
const BH = 1100;

export default function XGraphic() {
  return (
    <>
      <style>{`
        .xg-glow-border { position: absolute; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.85); box-sizing: border-box; }
        .xg-glow-border::before { content: ''; position: absolute; inset: -60%; animation: xgSpinBorder linear infinite; transform-origin: center; }
        .xg-glow-border::after { content: ''; position: absolute; inset: 0; pointer-events: none; box-sizing: border-box; border-radius: inherit; box-shadow: inset 4px 0 8px -2px rgba(255,255,255,0.65), inset -4px 0 8px -2px rgba(255,255,255,0.65); }
        .xg-glow-border .xg-fill { position: absolute; inset: 1.5px; }

        .xg-gb-1 { border-radius: 0; }
        .xg-gb-1 .xg-fill { border-radius: 0; }
        .xg-gb-1::before {
          background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.05) 20deg, rgba(255,255,255,0.5) 50deg, rgba(255,255,255,1) 60deg, rgba(255,255,255,0.5) 70deg, rgba(255,255,255,0.05) 95deg, transparent 120deg, transparent 180deg, rgba(255,255,255,0.05) 200deg, rgba(255,255,255,0.5) 230deg, rgba(255,255,255,1) 240deg, rgba(255,255,255,0.5) 250deg, rgba(255,255,255,0.05) 275deg, transparent 300deg, transparent 360deg);
          animation-duration: 10s; animation-delay: 0s;
        }
        .xg-gb-2 { border-radius: 0; }
        .xg-gb-2 .xg-fill { border-radius: 0; }
        .xg-gb-2::before {
          background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.02) 60deg, rgba(255,255,255,0.15) 110deg, rgba(255,255,255,0.45) 145deg, rgba(255,255,255,0.9) 165deg, rgba(255,255,255,1) 172deg, rgba(255,255,255,0.7) 178deg, rgba(255,255,255,0.1) 195deg, transparent 210deg, transparent 360deg);
          animation-duration: 14s; animation-delay: -5s;
        }
        .xg-gb-3 { border-radius: 0; }
        .xg-gb-3 .xg-fill { border-radius: 0; }
        .xg-gb-3::before {
          background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.8) 10deg, rgba(255,255,255,1) 15deg, rgba(255,255,255,0.8) 20deg, transparent 35deg, transparent 120deg, rgba(255,255,255,0.8) 130deg, rgba(255,255,255,1) 135deg, rgba(255,255,255,0.8) 140deg, transparent 155deg, transparent 240deg, rgba(255,255,255,0.8) 250deg, rgba(255,255,255,1) 255deg, rgba(255,255,255,0.8) 260deg, transparent 275deg, transparent 360deg);
          animation-duration: 5s; animation-delay: -1s;
        }

        @keyframes xgSpinBorder { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .xg-fill-1 { background-size: 200% 200% !important; animation: xgGradDrift1 9s ease-in-out infinite alternate; }
        .xg-fill-2 { background-size: 200% 200% !important; animation: xgGradDrift2 13s ease-in-out infinite alternate; }
        .xg-fill-3 { background-size: 200% 200% !important; animation: xgGradDrift3 7s ease-in-out infinite alternate; }

        @keyframes xgGradDrift1 { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
        @keyframes xgGradDrift2 { 0% { background-position: 100% 0%; } 100% { background-position: 0% 100%; } }
        @keyframes xgGradDrift3 { 0% { background-position: 50% 0%; } 100% { background-position: 50% 100%; } }

        .xg-glass-layer1 {
          isolation: isolate;
          position: absolute;
          inset: 0;
          filter: url(#xg-glass-distortion);
          backdrop-filter: blur(6px);
        }
        .xg-glass-layer2 {
          position: absolute;
          inset: 0;
          box-shadow:
            inset 1px 1px 0px 0 rgb(192 228 233 / 70%),
            inset -3px 0px 10px 0 rgb(192 228 233 / 60%),
            inset 3px 2px 3px 0 rgb(192 228 233 / 60%),
            inset -1px -1px 3px 1px rgba(255,255,255,0.45),
            inset -1px -5px 10px -1px rgba(255,255,255,0.45);
        }
      `}</style>

      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          <filter id="xg-glass-distortion" x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
              <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
              <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
              <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
            <feDisplacementMap in="SourceGraphic" in2="softMap" scale="80" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Blue stack */}
        <div
          aria-hidden
          style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0, pointerEvents: "none" }}
        >
          <div style={{ transform: "scale(0.78) skewX(-32deg)", transformOrigin: "center" }}>
            <div style={{ position: "relative", width: BW, height: BH }}>
              <div className="xg-glow-border xg-gb-1" style={{ inset: 0 }}>
                <div className="xg-fill xg-fill-1" style={{ background: G1 }} />
              </div>
              <div className="xg-glow-border xg-gb-2" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.6, height: BH }}>
                <div className="xg-fill xg-fill-2" style={{ background: G2 }} />
              </div>
              <div className="xg-glow-border xg-gb-3" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: BW * 0.18, height: BH }}>
                <div className="xg-fill xg-fill-3" style={{ background: G3 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Green glass */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <div style={{ position: "relative", borderTopLeftRadius: 16, borderTopRightRadius: 6, borderBottomRightRadius: 16, borderBottomLeftRadius: 6, transform: "skewX(32deg)" }}>
            <div style={{ width: 175, height: 300, borderTopLeftRadius: 16, borderTopRightRadius: 6, borderBottomRightRadius: 16, borderBottomLeftRadius: 6, position: "relative", overflow: "hidden", background: GRADIENT, border: "1px solid rgba(255,255,255,0.7)", boxSizing: "border-box" }}>
              <div className="xg-glass-layer1" />
              <div className="xg-glass-layer2" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
