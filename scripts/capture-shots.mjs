// Captures every designed screen in src/shots/screens as an image in public/images/product.
// Run the dev server first, then: node scripts/capture-shots.mjs [baseUrl] [name ...]
// Set CHROME to a Chrome or chrome-headless-shell executable if the default is not found.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
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

const tmp = mkdtempSync(join(tmpdir(), "ashwa-shots-"));
for (const name of names) {
  // Phone screens are named m-*: a 390x780 canvas. Everything else is a 1120x700 web visual.
  const phone = name.startsWith("m-");
  const [w, h, scale, outWidth] = phone ? [390, 780, 3, 600] : [1120, 700, 2, 1680];
  const png = join(tmp, `${name}.png`);
  execFileSync(
    chrome,
    [
      "--headless",
      `--screenshot=${png}`,
      `--window-size=${w},${h}`,
      `--force-device-scale-factor=${scale}`,
      "--hide-scrollbars",
      "--virtual-time-budget=6000",
      `${base}/shots/${name}`,
    ],
    { stdio: "ignore" },
  );
  await sharp(png).resize(outWidth).jpeg({ quality: 88, mozjpeg: true }).toFile(`public/images/product/${name}.jpg`);
  console.log(`${name} ${w}x${h}`);
}
rmSync(tmp, { recursive: true, force: true });
