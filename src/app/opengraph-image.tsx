import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ashwa — India's Best Vehicle Tracking System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(231,59,36,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo image */}
        <img
          src="https://ashwa.in/web-app-manifest-512x512.png"
          width={96}
          height={96}
          style={{ borderRadius: 20, marginBottom: 32 }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Ashwa
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#e73b24",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Real-Time Vehicle Tracking
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 20,
            color: "#888888",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          GPS tracking built for Indian fleets — live location, full history, instant alerts
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#444444",
          }}
        >
          ashwa.in
        </div>
      </div>
    ),
    { ...size }
  );
}
