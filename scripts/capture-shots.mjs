// Captures every designed screen in src/shots/screens as an image in public/images/product.
// Run the dev server first, then: node scripts/capture-shots.mjs [baseUrl] [name ...]
// Set CHROME to a Chrome or chrome-headless-shell executable if the default is not found.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const [base = "http://localhost:3211", ...only] = process.argv.slice(2);
const chrome =
  process.env.CHROME ??
  ["C:/Program Files/Google/Chrome/Application/chrome.exe", "/usr/bin/google-chrome"].find(existsSync);
if (!chrome) throw new Error("Chrome not found: set the CHROME environment variable.");

const names = readdirSync("src/shots/screens")
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(".tsx", ""))
  .filter((n) => only.length === 0 || only.includes(n));

// variants.json lists the sample worlds each screen is also rendered for: { "tracking": ["school", "rental"] }.
const variants = JSON.parse(readFileSync("src/shots/variants.json", "utf8").replace(/^﻿/, ""));
const jobs = names.flatMap((name) => [[name, ""], ...(variants[name] ?? []).map((ctx) => [name, ctx])]);

const tmp = mkdtempSync(join(tmpdir(), "ashwa-shots-"));
for (const [name, ctx] of jobs) {
  // Phone screens are named m-*: a 390x780 canvas. Everything else is a 1120x700 web visual.
  const phone = name.startsWith("m-");
  // Saved wide enough for a 2x screen at the largest size the site shows them.
  const [w, h, scale, outWidth] = phone ? [390, 780, 3, 900] : [1120, 700, 2, 2240];
  const file = ctx ? `${name}--${ctx}` : name;
  const png = join(tmp, `${file}.png`);
  // A cold dev server can answer before the page has painted, which saves a blank
  // frame (a few KB). Try again, up to three times, until the capture has content.
  for (let attempt = 1; ; attempt++) {
    execFileSync(
      chrome,
      [
        "--headless",
        `--screenshot=${png}`,
        `--window-size=${w},${h}`,
        `--force-device-scale-factor=${scale}`,
        "--hide-scrollbars",
        "--virtual-time-budget=6000",
        `${base}/shots/${name}${ctx ? `?ctx=${ctx}` : ""}`,
      ],
      { stdio: "ignore" },
    );
    if (statSync(png).size > 40_000) break;
    if (attempt === 3) throw new Error(`${file}: capture is blank after 3 tries. Is the dev server running?`);
  }
  await sharp(png).resize(outWidth).jpeg({ quality: 90, mozjpeg: true }).toFile(`public/images/product/${file}.jpg`);
  console.log(`${file} ${w}x${h}`);
}
rmSync(tmp, { recursive: true, force: true });
