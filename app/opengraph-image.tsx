import { ImageResponse } from "next/og";

export const alt = "Jnanesh — Software Engineer and Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: 26,
            letterSpacing: 7,
          }}
        >
          PORTFOLIO
        </div>
        <div style={{ alignItems: "center", display: "flex", gap: 36 }}>
          <img
            alt=""
            height="156"
            src='https://jtuluve.is-a.dev/me.png'
            style={{
              border: "2px solid #3f3f46",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            width="156"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: -3,
              }}
            >
              Jnanesh
            </div>
            <div style={{ color: "#d4d4d8", display: "flex", fontSize: 36 }}>
              Software Engineer &amp; Full-Stack Developer
            </div>
          </div>
        </div>
        <div style={{ color: "#a1a1aa", display: "flex", fontSize: 25 }}>
          Web applications · Backend services · Automation tools
        </div>
      </div>
    ),
    size,
  );
}
