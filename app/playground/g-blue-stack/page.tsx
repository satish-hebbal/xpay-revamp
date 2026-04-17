"use client";

const GRADIENT_1 = "linear-gradient(180deg, #054cff 0%, #236acb 40%, #45b1ff 75%, #4db4ff 100%)";
const GRADIENT_2 = "linear-gradient(180deg, #196bf6 0%, #308fff 50%, #2f90ff 100%)";
const GRADIENT_3 = "linear-gradient(180deg, #247af3 0%, #2078ff 50%, #2179ff 100%)";

const W = 160;
const H = 750;

export default function GBlueStack() {
  return (
    <>
      <style>{`
        /* Rotating light beam border — each shape gets its own speed + arc */

        .glow-border {
          position: absolute;
          overflow: hidden;
        }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -60%;
          animation: spinBorder linear infinite;
          transform-origin: center;
        }
        .glow-border .fill {
          position: absolute;
          inset: 1.5px;
        }

        /* Shape 1 — dual comets 180° apart, long tails */
        .gb-1 { border-radius: 0; }
        .gb-1 .fill { border-radius: 0; }
        .gb-1::before {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.05) 20deg,
            rgba(255,255,255,0.5)  50deg,
            rgba(255,255,255,1)    60deg,
            rgba(255,255,255,0.5)  70deg,
            rgba(255,255,255,0.05) 95deg,
            transparent 120deg,
            transparent 180deg,
            rgba(255,255,255,0.05) 200deg,
            rgba(255,255,255,0.5)  230deg,
            rgba(255,255,255,1)    240deg,
            rgba(255,255,255,0.5)  250deg,
            rgba(255,255,255,0.05) 275deg,
            transparent 300deg,
            transparent 360deg
          );
          animation-duration: 10s;
          animation-delay: 0s;
        }

        /* Shape 2 — single comet with long glowing tail */
        .gb-2 { border-radius: 0; }
        .gb-2 .fill { border-radius: 0; }
        .gb-2::before {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.02) 60deg,
            rgba(255,255,255,0.15) 110deg,
            rgba(255,255,255,0.45) 145deg,
            rgba(255,255,255,0.9)  165deg,
            rgba(255,255,255,1)    172deg,
            rgba(255,255,255,0.7)  178deg,
            rgba(255,255,255,0.1)  195deg,
            transparent 210deg,
            transparent 360deg
          );
          animation-duration: 14s;
          animation-delay: -5s;
        }

        /* Shape 3 — three rapid sparks equally spaced */
        .gb-3 { border-radius: 0; }
        .gb-3 .fill { border-radius: 0; }
        .gb-3::before {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.8)  10deg,
            rgba(255,255,255,1)    15deg,
            rgba(255,255,255,0.8)  20deg,
            transparent 35deg,
            transparent 120deg,
            rgba(255,255,255,0.8)  130deg,
            rgba(255,255,255,1)    135deg,
            rgba(255,255,255,0.8)  140deg,
            transparent 155deg,
            transparent 240deg,
            rgba(255,255,255,0.8)  250deg,
            rgba(255,255,255,1)    255deg,
            rgba(255,255,255,0.8)  260deg,
            transparent 275deg,
            transparent 360deg
          );
          animation-duration: 5s;
          animation-delay: -1s;
        }

        @keyframes spinBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Slowly drifting gradient fills */
        .fill-1 {
          background-size: 200% 200% !important;
          animation: gradDrift1 9s ease-in-out infinite alternate;
        }
        .fill-2 {
          background-size: 200% 200% !important;
          animation: gradDrift2 13s ease-in-out infinite alternate;
        }
        .fill-3 {
          background-size: 200% 200% !important;
          animation: gradDrift3 7s ease-in-out infinite alternate;
        }

        @keyframes gradDrift1 {
          0%   { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes gradDrift2 {
          0%   { background-position: 100% 0%; }
          100% { background-position: 0% 100%; }
        }
        @keyframes gradDrift3 {
          0%   { background-position: 50% 0%; }
          100% { background-position: 50% 100%; }
        }
      `}</style>

      <div
        style={{
          background: "#fff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: W, height: H, transform: "skewX(-16.66deg)" }}>

          {/* Base layer */}
          <div className="glow-border gb-1" style={{ inset: 0 }}>
            <div className="fill fill-1" style={{ background: GRADIENT_1 }} />
          </div>

          {/* Layer 2 */}
          <div
            className="glow-border gb-2"
            style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: W * 0.6, height: H }}
          >
            <div className="fill fill-2" style={{ background: GRADIENT_2 }} />
          </div>

          {/* Layer 3 */}
          <div
            className="glow-border gb-3"
            style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: W * 0.18, height: H }}
          >
            <div className="fill fill-3" style={{ background: GRADIENT_3 }} />
          </div>

        </div>
      </div>
    </>
  );
}
