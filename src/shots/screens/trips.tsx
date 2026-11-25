import { Copy, IndianRupee, Link2, Send, Truck, Wallet } from "lucide-react";

import { Avatar, Button, Float, MapArt, MapPin, MapRoute, MapVehicle, Panel, Pill, Scene } from "../kit";

type Stage = "Planned" | "Started" | "Reached" | "Delivered";

const TRIPS: { id: string; route: string; km: string; customer: string; plate: string; driver: string; hue: number; stage: Stage; freight: string }[] = [
  { id: "TR 4821", route: "Raipur to Nagpur", km: "290 km, ETA 14:20", customer: "Meridian Steel", plate: "HR 26 AS 1024", driver: "Rakesh Yadav", hue: 24, stage: "Started", freight: "₹ 86,000" },
  { id: "TR 4820", route: "Bhilai to Indore", km: "742 km, ETA Thu 09:00", customer: "Sundar Cements", plate: "CG 04 MX 2217", driver: "Sunil Kumar", hue: 205, stage: "Started", freight: "₹ 1,24,000" },
  { id: "TR 4818", route: "Durg to Hyderabad", km: "684 km, at gate", customer: "Kaveri Foods", plate: "CG 07 BQ 5530", driver: "Imran Qureshi", hue: 150, stage: "Reached", freight: "₹ 1,08,500" },
  { id: "TR 4817", route: "Korba to Kolkata", km: "802 km, POD pending", customer: "Trident Agro", plate: "HR 39 BK 7741", driver: "Harpreet Singh", hue: 340, stage: "Delivered", freight: "₹ 1,42,000" },
  { id: "TR 4823", route: "Raipur to Pune", km: "1,060 km, loads 16:00", customer: "Kaveri Foods", plate: "HR 51 DE 9025", driver: "Dinesh Sahu", hue: 262, stage: "Planned", freight: "₹ 1,68,000" },
  { id: "TR 4815", route: "Bilaspur to Bhopal", km: "612 km, unloading", customer: "Meridian Steel", plate: "CG 10 AR 4406", driver: "Manoj Verma", hue: 48, stage: "Reached", freight: "₹ 94,500" },
  { id: "TR 4824", route: "Raigarh to Cuttack", km: "448 km, loads tomorrow", customer: "Sundar Cements", plate: "CG 13 LT 8092", driver: "Arif Khan", hue: 180, stage: "Planned", freight: "₹ 72,000" },
];

const TONE = { Planned: "zinc", Started: "violet", Reached: "blue", Delivered: "green" } as const;

const COLS = "grid grid-cols-[62px_146px_112px_108px_136px_84px_76px] items-center pl-5 pr-14";

const FIGURES = [
  { icon: Truck, label: "Trucks free", value: "6 of 24", note: "3 waiting in Raipur", tone: "text-emerald-600" },
  { icon: IndianRupee, label: "Due from customers", value: "₹ 8,42,000", note: "5 bills past 30 days", tone: "text-amber-600" },
  { icon: Wallet, label: "Cash with drivers", value: "₹ 1,36,500", note: "Across 11 drivers", tone: "text-zinc-500" },
];

/** Trips board: every running trip in one table, the money that matters, and a link to share. */
export default function Trips() {
  return (
    <Scene tint="violet">
      <Panel title="Trips" subtitle="23 running, 4 to close today" className="bottom-[44px] left-[48px] h-[548px] w-[800px]" flush>
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>Trip</span>
          <span>Route</span>
          <span>Customer</span>
          <span>Vehicle</span>
          <span>Driver</span>
          <span>Stage</span>
          <span className="text-right">Freight</span>
        </div>
        {TRIPS.map((t, i) => (
          <div key={t.id} className={`${COLS} h-[60px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
            <span className="font-mono text-[11.5px] text-zinc-500">{t.id}</span>
            <span>
              <span className="block font-semibold leading-tight">{t.route}</span>
              <span className="mt-0.5 block text-[11px] leading-tight text-zinc-500">{t.km}</span>
            </span>
            <span className="text-zinc-700">{t.customer}</span>
            <span className="font-mono text-[11.5px] text-zinc-700">{t.plate}</span>
            <span className="flex items-center gap-2">
              <Avatar name={t.driver} hue={t.hue} size={24} />
              <span className="font-medium">{t.driver}</span>
            </span>
            <span>
              <Pill tone={TONE[t.stage]} dot>
                {t.stage}
              </Pill>
            </span>
            <span className="text-right font-semibold">{t.freight}</span>
          </div>
        ))}
        <div className="flex h-[40px] items-center pl-5 text-[11.5px] text-zinc-500">Showing 7 of 23 trips</div>
      </Panel>

      <Float className="right-[48px] top-[44px] grid w-[560px] grid-cols-3 divide-x divide-zinc-100">
        {FIGURES.map((f) => (
          <div key={f.label} className="px-4 py-3.5">
            <p className="flex items-center gap-1.5 text-[11.5px] text-zinc-500">
              <f.icon className="size-3.5 text-violet-600" />
              {f.label}
            </p>
            <p className="mt-1.5 text-[20px] font-semibold leading-none tracking-tight">{f.value}</p>
            <p className={`mt-1.5 text-[11px] font-medium ${f.tone}`}>{f.note}</p>
          </div>
        ))}
      </Float>

      <Float className="right-[48px] top-[224px] w-[264px] overflow-hidden">
        <div className="relative h-[104px] overflow-hidden border-b border-zinc-100">
          <div className="absolute left-[-135px] top-[-81px] h-[330px] w-[528px]">
            <MapArt>
              <MapRoute road="highway" done={0.58} />
              <MapPin x={640} y={112} />
              <MapVehicle x={404} y={208} angle={-24} />
            </MapArt>
          </div>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1.5 text-[13px] font-semibold">
            <Link2 className="size-4 text-violet-600" />
            Share live link
          </p>
          <p className="mt-0.5 text-[11.5px] text-zinc-500">TR 4821, Raipur to Nagpur</p>
          <div className="mt-3 flex h-9 items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-2.5">
            <span className="font-mono text-[11.5px] text-zinc-700">ashwa.in/t/k7Qx2m</span>
            <Copy className="size-3.5 text-zinc-400" />
          </div>
          <p className="mt-2.5 text-[11.5px] leading-snug text-zinc-500">Meridian Steel can follow the truck without logging in.</p>
          <div className="mt-3 flex items-center gap-2">
            <Button primary>
              <Send className="size-3.5" />
              Send by SMS
            </Button>
            <Button>Copy link</Button>
          </div>
          <p className="mt-3 border-t border-zinc-100 pt-2.5 text-[11px] text-zinc-500">Opened 4 times, last at 11:42</p>
        </div>
      </Float>
    </Scene>
  );
}
