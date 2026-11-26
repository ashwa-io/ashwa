// Temporary: lists captured images that contain the Next.js dev "Issue" badge (red pill, bottom left).
import { readdirSync } from "node:fs";
import sharp from "sharp";

const names = process.argv.slice(2);
const dir = "public/images/product";
for (const f of readdirSync(dir)) {
  const name = f.replace(/(--\w+)?\.jpg$/, "");
  if (!f.endsWith(".jpg") || !names.includes(name)) continue;
  const { width: w, height: h } = await sharp(`${dir}/${f}`).metadata();
  const [x0, x1, y0, y1] = name.startsWith("m-") ? [0.07, 0.28, 0.935, 0.965] : [0.025, 0.1, 0.93, 0.962];
  const { channels } = await sharp(`${dir}/${f}`)
    .extract({ left: Math.round(w * x0), top: Math.round(h * y0), width: Math.round(w * (x1 - x0)), height: Math.round(h * (y1 - y0)) })
    .stats();
  if (channels[0].mean - channels[1].mean > 80) console.log(f);
}
