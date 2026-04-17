"use client";

/*
  Liquid Glass v2 — simplest possible implementation
  Technique: SVG feTurbulence + feDisplacementMap applied directly to the glass element.
  No canvas, no JS math, no displacement image — just a 6-line SVG filter.
  The turbulence noise creates organic liquid-like distortion at the edges.
*/

export default function GSlantV2() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
    >
      {/* ── SVG filter definition ─────────────────────────────── */}
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          <filter
            id="liquidGlassV2"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            {/* Step 1 — generate organic noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            {/* Step 2 — use noise to displace the element's pixels */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Background text ───────────────────────────────────── */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: -1,
            textAlign: "center",
            color: "#111",
            userSelect: "none",
            padding: "60px 40px",
          }}
        >
          Send money<br />
          instantly<br />
          anywhere<br />
          in the world<br />
          with xPay
        </div>

        {/* ── Glass shape ───────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 220,
              height: 300,
              transform: "skewX(33.22deg)",
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",

              /* Liquid glass filter — distorts the element's own pixels */
              filter: "url(#liquidGlassV2)",

              /* Gradient fill — exact Figma stops at 51% */
              background:
                "linear-gradient(160deg, rgba(0,255,255,0.51) 0%, rgba(21,232,157,0.51) 50%, rgba(86,255,161,0.51) 76%, rgba(4,229,115,0.51) 100%)",

              /* Frost */
              backdropFilter: "blur(10px) saturate(140%)",
              WebkitBackdropFilter: "blur(10px) saturate(140%)",

              /* 3D inner shadows */
              boxShadow: [
                "inset 0 2px 0px rgba(255,255,255,0.95)",
                "inset 2px 0 0px rgba(255,255,255,0.7)",
                "inset 6px 10px 28px rgba(255,255,255,0.45)",
                "inset -4px -6px 24px rgba(0,0,0,0.08)",
                "inset 0 -2px 0px rgba(255,255,255,0.25)",
                "inset 0 -50px 80px rgba(255,255,255,0.35)",
              ].join(", "),
            }}
          >
            {/* Light -45° @ 34% */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(225deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)", pointerEvents: "none" }} />
            {/* Depth bloom */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 65% 40%, rgba(255,255,255,0.55) 0%, transparent 70%)", pointerEvents: "none" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
