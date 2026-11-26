// Works out which screens need which sample worlds, from the pages that use them,
// writes src/shots/variants.json and deletes rendered variants no page asks for.
// Run before capture-shots.mjs: node scripts/shot-variants.mjs
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// Visual key -> the screens it shows that change with the page's world.
// Keep in step with VISUALS in src/components/visuals/index.tsx.
const SCREENS = {
  "live-map": ["tracking", "m-live"],
  "trip-playback": ["playback"],
  geofence: ["geofences"],
  alerts: ["alerts"],
  reports: ["reports"],
  drivers: ["drivers"],
  vehicles: ["vehicles"],
  routes: ["routes"],
  trips: ["trips"],
  maintenance: ["maintenance"],
  "mobile-app": ["m-fleet", "m-driver"],
};

const pages = [...readFileSync("src/content/contexts.ts", "utf8").matchAll(/"([a-z]+\/[a-z0-9-]+)":\s*"([a-z]+)"/g)];
const need = new Map();
const add = (screen, world) => need.set(screen, (need.get(screen) ?? new Set()).add(world));

for (const [, page, world] of pages) {
  const file = `src/content/${page}.ts`;
  if (!existsSync(file)) continue;
  for (const [, key] of readFileSync(file, "utf8").matchAll(/visual:\s*"([a-z-]+)"/g)) {
    for (const screen of SCREENS[key] ?? []) add(screen, world);
  }
}
// The parent-app visual always shows the school world's alerts beside the parent screen.
add("m-alerts", "school");

const manifest = Object.fromEntries(
  [...need].sort(([a], [b]) => a.localeCompare(b)).map(([screen, worlds]) => [screen, [...worlds].sort()]),
);
writeFileSync("src/shots/variants.json", `${JSON.stringify(manifest, null, 2)}\n`);

let removed = 0;
for (const f of readdirSync("public/images/product")) {
  const m = f.match(/^(.+)--([a-z]+)\.jpg$/);
  if (m && !manifest[m[1]]?.includes(m[2])) {
    rmSync(`public/images/product/${f}`);
    removed++;
  }
}
const count = Object.values(manifest).reduce((n, w) => n + w.length, 0);
console.log(`${count} variants needed across ${Object.keys(manifest).length} screens; removed ${removed} unused images`);
