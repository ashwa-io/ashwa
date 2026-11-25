import { Check, Globe, Navigation, Send } from "lucide-react";

import { Avatar, Float, Panel, Pill, Scene, SearchField } from "../kit";

const CUSTOMERS: { name: string; city: string; hue: number; vehicles: number; till: string; status: "Active" | "Due soon" | "Expired"; due: string }[] = [
  { name: "Maa Durga Roadlines", city: "Raipur", hue: 150, vehicles: 14, till: "12 Mar 2026", status: "Active", due: "" },
  { name: "Verma Tours and Travels", city: "Durg", hue: 28, vehicles: 6, till: "21 Jun 2025", status: "Due soon", due: "₹14,400" },
  { name: "Greenfield Public School", city: "Raipur", hue: 205, vehicles: 9, till: "22 Jun 2025", status: "Due soon", due: "₹21,600" },
  { name: "Sahu Cement Agency", city: "Bhilai", hue: 340, vehicles: 22, till: "30 Nov 2025", status: "Active", due: "" },
  { name: "Mehta Cold Storage", city: "Rajnandgaon", hue: 262, vehicles: 4, till: "09 Jun 2025", status: "Expired", due: "₹9,600" },
  { name: "Nishad Sand Suppliers", city: "Dhamtari", hue: 180, vehicles: 11, till: "24 Jun 2025", status: "Due soon", due: "₹26,400" },
  { name: "Yadav Milk Dairy", city: "Raipur", hue: 48, vehicles: 5, till: "18 Jan 2026", status: "Active", due: "" },
  { name: "Tiwari Car Rentals", city: "Bilaspur", hue: 300, vehicles: 8, till: "02 Feb 2026", status: "Active", due: "" },
];

const TONE = { Active: "green", "Due soon": "amber", Expired: "red" } as const;
const COLS = "grid grid-cols-[1fr_70px_100px_90px_90px] items-center gap-x-4 px-5";

/** White-label for GPS dealers: the dealer's customers under the dealer's own brand. */
export default function Branding() {
  return (
    <Scene tint="amber">
      <Panel
        title="Customers"
        subtitle="142 customers, 618 vehicles on your platform"
        className="left-[336px] top-[54px] h-[592px] w-[736px]"
        flush
        actions={<SearchField placeholder="Search customer" />}
      >
        <div className={`${COLS} h-9 border-b border-zinc-100 text-[11.5px] font-medium text-zinc-500`}>
          <span>Customer</span>
          <span>Vehicles</span>
          <span>Paid till</span>
          <span>Status</span>
          <span className="text-right">Recharge due</span>
        </div>
        {CUSTOMERS.map((c) => (
          <div key={c.name} className={`${COLS} h-[62px] border-b border-zinc-100 last:border-b-0`}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar name={c.name} hue={c.hue} size={32} />
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold leading-tight">{c.name}</span>
                <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{c.city}</span>
              </span>
            </span>
            <span className="text-[13px] font-semibold">{c.vehicles}</span>
            <span className="text-[12px] text-zinc-600">{c.till}</span>
            <span>
              <Pill tone={TONE[c.status]} dot>
                {c.status}
              </Pill>
            </span>
            <span className={`text-right text-[13px] ${c.due ? "font-semibold" : "text-zinc-400"}`}>{c.due || "None"}</span>
          </div>
        ))}
      </Panel>

      <Float className="left-[48px] top-[84px] w-[302px] overflow-hidden">
        <div className="flex items-center gap-3 bg-emerald-600 p-4 text-white">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-emerald-600">
            <Navigation className="size-6" strokeWidth={2.2} />
          </span>
          <span>
            <span className="block text-[17px] font-semibold leading-tight tracking-tight">YourBrand Track</span>
            <span className="block text-[11.5px] leading-tight text-emerald-100">Your logo on web, app and reports</span>
          </span>
        </div>
        <div className="p-4">
          <p className="text-[11.5px] font-medium text-zinc-500">Brand colour</p>
          <div className="mt-2 flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-emerald-600 text-white ring-2 ring-emerald-600 ring-offset-2">
              <Check className="size-4" strokeWidth={3} />
            </span>
            <span className="size-8 rounded-full bg-sky-600" />
            <span className="size-8 rounded-full bg-amber-500" />
            <span className="size-8 rounded-full bg-red-600" />
            <span className="size-8 rounded-full bg-zinc-900" />
            <span className="ml-auto font-mono text-[11.5px] text-zinc-500">#059669</span>
          </div>
          <p className="mt-4 text-[11.5px] font-medium text-zinc-500">Your address</p>
          <div className="mt-2 flex h-10 items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3">
            <Globe className="size-4 text-emerald-600" />
            <span className="flex-1 font-mono text-[12.5px] font-medium">track.yourbrand.in</span>
            <Pill tone="green" dot>
              Live
            </Pill>
          </div>
        </div>
      </Float>

      <Float className="left-[48px] top-[412px] w-[302px] p-4">
        <p className="text-[11.5px] text-zinc-500">Recharges due this week</p>
        <p className="mt-1 text-[28px] font-semibold leading-none tracking-tight">₹72,000</p>
        <p className="mt-2 text-[11.5px] font-medium text-amber-600">30 vehicles across 4 customers</p>
        <span className="mt-3.5 flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 text-[12.5px] font-medium text-white">
          <Send className="size-3.5" />
          Send reminders
        </span>
      </Float>
    </Scene>
  );
}
