// Lists the pictures in public/images/{site,product} into src/content/assets.json.
// Pages render inside a Cloudflare worker with no file system, so "does this file
// exist" has to be answered at build time. Runs before dev, build and deploy.
import { readdirSync, writeFileSync } from "node:fs";

const names = (dir) =>
  readdirSync(`public/images/${dir}`)
    .filter((f) => f.endsWith(".jpg"))
    .map((f) => f.slice(0, -4))
    .sort();

writeFileSync("src/content/assets.json", JSON.stringify({ site: names("site"), product: names("product") }, null, 1) + "\n");
