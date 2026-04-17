"use client";

import { useEffect, useState } from "react";

const W = 200;
const H = 380;
const BEZEL = 60;    // how deep the bending goes from each edge
const SCALE = 140;   // max pixel shift — higher = more dramatic bending

// Convex squircle — smooth lens curve (Apple's choice)
function convexSquircle(t: number) {
  return Math.pow(1 - Math.pow(1 - t, 4), 0.25);
}

function buildDisplacementMap(w: number, h: number, bezel: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(w, h);
  const d = img.data;

  // Pre-compute max slope for normalization
  let maxSlope = 0;
  const N = 512;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const eps = 1e-4;
    const t0 = Math.max(0, t - eps);
    const t1 = Math.min(1, t + eps);
    const slope = Math.abs(
      (convexSquircle(t1) - convexSquircle(t0)) / (t1 - t0)
    );
    if (slope > maxSlope) maxSlope = slope;
  }

  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const dL = px;
      const dR = w - 1 - px;
      const dT = py;
      const dB = h - 1 - py;
      const minDist = Math.min(dL, dR, dT, dB);

      let rx = 128, ry = 128;

      if (minDist < bezel) {
        const t = minDist / bezel;       // 0 = edge, 1 = interior
        const eps = 1e-4;
        const t0 = Math.max(0, t - eps);
        const t1 = Math.min(1, t + eps);
        // Normalized slope (0–1)
        const slope =
          ((convexSquircle(t1) - convexSquircle(t0)) / (t1 - t0)) / maxSlope;

        // Inward bending: edges pull background content toward center
        // → opposite sign of "outward" convex lens
        let dx = 0, dy = 0;
        if      (minDist === dL) dx =  slope;   // left edge → pull right
        else if (minDist === dR) dx = -slope;   // right edge → pull left
        else if (minDist === dT) dy =  slope;   // top edge → pull down
        else                     dy = -slope;   // bottom edge → pull up

        rx = Math.round(128 + dx * 127);
        ry = Math.round(128 + dy * 127);
      }

      const i = (py * w + px) * 4;
      d[i]     = rx;
      d[i + 1] = ry;
      d[i + 2] = 128;
      d[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

export default function Playground() {
  const [mapUrl, setMapUrl] = useState<string | null>(null);

  useEffect(() => {
    setMapUrl(buildDisplacementMap(W, H, BEZEL));
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* SVG filter — must live in the DOM, size 0 so it's invisible */}
      {mapUrl && (
        <svg
          width={0}
          height={0}
          style={{ position: "absolute", overflow: "visible" }}
        >
          <defs>
            <filter
              id="liquidGlass"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              filterUnits="objectBoundingBox"
              colorInterpolationFilters="sRGB"
            >
              {/* Load our displacement map */}
              <feImage
                href={mapUrl}
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                result="dispMap"
              />
              {/* Shift background pixels by R/G channel values */}
              <feDisplacementMap
                in="SourceGraphic"
                in2="dispMap"
                scale={SCALE}
                xChannelSelector="R"
                yChannelSelector="G"
                result="refracted"
              />
            </filter>
          </defs>
        </svg>
      )}

      <div style={{ position: "relative" }}>
        {/* Background text */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#111",
            userSelect: "none",
            letterSpacing: -1,
            textAlign: "center",
            padding: "60px 40px",
          }}
        >
          Send money<br />
          instantly<br />
          anywhere<br />
          in the world<br />
          with xPay
        </div>

        {/* Glass card — backdrop-filter: url() is Chrome only */}
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
              width: W,
              height: H,
              transform: "skewX(33deg)",
              borderRadius: 28,
              overflow: "hidden",
              background:
                "linear-gradient(160deg, rgba(0,255,255,0.4) 0%, rgba(21,232,157,0.4) 50%, rgba(86,255,161,0.4) 76%, rgba(4,229,115,0.4) 100%)",
              backdropFilter: "url(#liquidGlass) blur(4px) saturate(180%)",
              WebkitBackdropFilter: "url(#liquidGlass) blur(4px) saturate(180%)",
              boxShadow:
                "inset -9px 17px 15px rgba(255,255,255,0.51), inset 1px -15px 27px rgba(255,255,255,0.91)",
            }}
          >
            {/* Top-left specular highlight */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
