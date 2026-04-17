"use client";

const GRADIENT = "linear-gradient(160deg, rgba(0,255,255,0.51) 0%, rgba(21,232,157,0.51) 50%, rgba(86,255,161,0.51) 76%, rgba(4,229,115,0.51) 100%)";

const BOX_SHADOW = [
  "inset 0 2px 0px rgba(255,255,255,0.95)",
  "inset 2px 0 0px rgba(255,255,255,0.7)",
  "inset 6px 10px 28px rgba(255,255,255,0.45)",
  "inset -4px -6px 24px rgba(0,0,0,0.08)",
  "inset 0 -2px 0px rgba(255,255,255,0.25)",
  "inset 0 -50px 80px rgba(255,255,255,0.35)",
].join(", ");

const EDGE = 12; // px — width of the refracting rim

const TEXT_LINES = ["Send money", "instantly", "anywhere", "in the world", "with xPay"];

function TextBehind() {
  return (
    <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, textAlign: "center", color: "#111", userSelect: "none", padding: "60px 40px" }}>
      {TEXT_LINES.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
    </div>
  );
}

function GlassHighlights() {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(225deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 65% 40%, rgba(255,255,255,0.55) 0%, transparent 70%)", pointerEvents: "none" }} />
    </>
  );
}

export default function GSlant() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: 100 }}>

      {/* SVG filters */}
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          {/* V2 — feTurbulence on whole element */}
          <filter id="liquidNoise" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* V2b — edge-only distortion applied as backdrop-filter on rim strips */}
          <filter id="edgeDistortion">
            <feTurbulence type="turbulence" baseFrequency="0.01 0.1" numOctaves="1" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── V1: Pure CSS glass ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ position: "relative" }}>
          <TextBehind />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: 220, height: 300,
              transform: "skewX(33.22deg)",
              borderRadius: 16, overflow: "hidden", position: "relative",
              background: GRADIENT,
              backdropFilter: "blur(10px) saturate(140%)",
              WebkitBackdropFilter: "blur(10px) saturate(140%)",
              boxShadow: BOX_SHADOW,
            }}>
              <GlassHighlights />
            </div>
          </div>
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: 1, textTransform: "uppercase" }}>V1 — CSS glass</span>
      </div>

      {/* ── V3: Faithful port of your HTML/CSS code ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ position: "relative" }}>
          <TextBehind />
          {/*
            Exact structure from your code:
            button-container
              └── glass-button  (gradient fill + box-shadow)
                    └── glass-effect-backdrop  (centre blur)
              └── glass-container  (absolute overlay, no background)
                    ├── glass-effect top
                    ├── glass-effect bottom
                    ├── glass-effect left
                    └── glass-effect right
          */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* button-container */}
            <div style={{ position: "relative", borderRadius: 16, transform: "skewX(33.22deg)" }}>

              {/* glass-button */}
              <div style={{
                width: 220, height: 300,
                borderRadius: 16,
                position: "relative",
                overflow: "hidden",
                background: GRADIENT,
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: BOX_SHADOW,
              }}>
                {/* glass-effect-backdrop — frosted centre blur */}
                <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(5px) saturate(140%)", WebkitBackdropFilter: "blur(3px) saturate(140%)", borderRadius: 16 }} />
                <GlassHighlights />
              </div>

              {/* glass-container — sits on top, edge strips only */}
              <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                {/* top */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
                {/* bottom */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
                {/* left */}
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
                {/* right */}
                <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
              </div>

            </div>
          </div>
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: 1, textTransform: "uppercase" }}>V3 — your code</span>
      </div>

      {/* ── V2: Edge-only turbulence refraction ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ position: "relative" }}>
          <TextBehind />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: 220, height: 300,
              transform: "skewX(33.22deg)",
              borderRadius: 16, overflow: "hidden", position: "relative",
              background: GRADIENT,
              boxShadow: BOX_SHADOW,
            }}>
              {/* Centre — minimal blur, no distortion */}
              <div style={{
                position: "absolute", inset: 0,
                backdropFilter: "blur(0.5px)",
                WebkitBackdropFilter: "blur(0.5px)",
              }} />

              {/* Edge strips — turbulence distortion on the backdrop only */}
              {/* top */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
              {/* bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
              {/* left */}
              <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />
              {/* right */}
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: EDGE, borderRadius: "9999px", backdropFilter: "url(#edgeDistortion)", WebkitBackdropFilter: "url(#edgeDistortion)" }} />

              <GlassHighlights />
            </div>
          </div>
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: 1, textTransform: "uppercase" }}>V2 — edge refraction</span>
      </div>

    </div>
  );
}
