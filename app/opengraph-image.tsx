import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Simran Sharma — UX · Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetch a Google font subset for exactly the glyphs we render. */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  // No browser User-Agent → Google serves plain TTF (satori can't parse woff2).
  const css = await (await fetch(url, { headers: { "User-Agent": "curl/8" } })).text();
  const resource = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!resource) throw new Error(`no ttf for ${family}`);
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

const NAME = "Simran Sharma";
const KICKER = "hi, i'm simran";
const PILLS = "research · empathy · Figma · prototyping · 50K+ users";
const ROLE = "UX · Product Designer";

export default async function OgImage() {
  const cutout = await readFile(
    join(process.cwd(), "public", "simran", "simran-cutout-og.png"),
  );
  const cutoutSrc = `data:image/png;base64,${cutout.toString("base64")}`;

  const [bricolage, hanken, caveat] = await Promise.all([
    loadGoogleFont("Bricolage Grotesque", 800, NAME),
    loadGoogleFont("Hanken Grotesk", 600, PILLS + ROLE + "·"),
    loadGoogleFont("Caveat", 600, KICKER + "'"),
  ]);

  const pill = (text: string, bg: string, color = "#241E33") => (
    <div
      style={{
        display: "flex",
        backgroundColor: bg,
        color,
        borderRadius: 999,
        padding: "10px 24px",
        fontSize: 26,
        fontFamily: "Hanken",
        border: "3px solid rgba(255,255,255,0.8)",
        boxShadow: "0 8px 18px rgba(36,30,51,0.18)",
      }}
    >
      {text}
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FBF6F0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* pastel glow blobs */}
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -160,
            width: 480,
            height: 480,
            borderRadius: 999,
            backgroundColor: "#F3B9CE",
            opacity: 0.55,
            filter: "blur(110px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -180,
            width: 520,
            height: 520,
            borderRadius: 999,
            backgroundColor: "#C9B6E8",
            opacity: 0.55,
            filter: "blur(110px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 420,
            top: -140,
            width: 420,
            height: 420,
            borderRadius: 999,
            backgroundColor: "#A9CCE8",
            opacity: 0.45,
            filter: "blur(100px)",
          }}
        />
        {/* white glow behind cutout */}
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 90,
            width: 460,
            height: 460,
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            opacity: 0.9,
            filter: "blur(70px)",
          }}
        />

        {/* left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 84,
            width: 780,
          }}
        >
          <div
            style={{
              fontFamily: "Caveat",
              fontSize: 46,
              color: "#C1326A",
              marginBottom: 6,
            }}
          >
            {KICKER}
          </div>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 108,
              lineHeight: 0.95,
              color: "#241E33",
              letterSpacing: -3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Simran</span>
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#E0457B",
                textDecorationThickness: 10,
              }}
            >
              Sharma
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
            }}
          >
            {pill(ROLE, "#E0457B", "#FFFFFF")}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 22, flexWrap: "wrap" }}>
            {pill("research", "#A9CCE8")}
            {pill("empathy", "#F3B9CE")}
            {pill("Figma", "#C9B6E8")}
            {pill("50K+ users", "#A7D8C8")}
          </div>
        </div>

        {/* right: her cutout */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cutoutSrc}
          alt=""
          width={344}
          height={549}
          style={{
            position: "absolute",
            right: 88,
            bottom: -40,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 800 as const },
        { name: "Hanken", data: hanken, weight: 600 as const },
        { name: "Caveat", data: caveat, weight: 600 as const },
      ],
    },
  );
}
