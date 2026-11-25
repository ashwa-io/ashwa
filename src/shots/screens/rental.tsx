import { Phone, Share2 } from "lucide-react";

import { Avatar, Button, Float, Panel, Pill, Scene, VehicleTile } from "../kit";

type Status = "Booked" | "On trip" | "Returned";

const BAR: Record<Status, string> = {
  Booked: "border-violet-500 bg-violet-100 text-violet-900",
  "On trip": "border-emerald-500 bg-emerald-100 text-emerald-900",
  Returned: "border-zinc-400 bg-zinc-100 text-zinc-600",
};

const DAYS = ["Mon 16", "Tue 17", "Wed 18", "Thu 19", "Fri 20", "Sat 21", "Sun 22"];
const TODAY = 2;

/** `from` and `to` are in days from Monday 00:00, so 1.5 is Tuesday noon. */
const CARS: { model: string; plate: string; hue: number; bookings: { from: number; to: number; who: string; status: Status }[] }[] = [
  {
    model: "Swift Dzire",
    plate: "HR 26 CD 4410",
    hue: 262,
    bookings: [
      { from: 0.1, to: 1.8, who: "Aarav Mehta", status: "Returned" },
      { from: 3.2, to: 5.9, who: "Pooja Nair", status: "Booked" },
    ],
  },
  {
    model: "Innova Crysta",
    plate: "HR 26 BR 7302",
    hue: 150,
    bookings: [
      { from: 1.35, to: 4.75, who: "Sunita Verma", status: "On trip" },
      { from: 5.3, to: 6.95, who: "Kunal Bose", status: "Booked" },
    ],
  },
  {
    model: "Ertiga",
    plate: "HR 51 AK 1186",
    hue: 28,
    bookings: [
      { from: 0.1, to: 1.3, who: "Imran Sheikh", status: "Returned" },
      { from: 2.2, to: 3.9, who: "Deepak Sahu", status: "On trip" },
      { from: 4.4, to: 6.95, who: "Neha Joshi", status: "Booked" },
    ],
  },
  {
    model: "Thar",
    plate: "HR 20 DM 5527",
    hue: 340,
    bookings: [{ from: 0.4, to: 2.75, who: "Ritu Agrawal", status: "On trip" }],
  },
];

const WEEK = [62, 70, 78, 84, 92, 96, 74];

/** Rental bookings: the week by car, one booking in focus, and how busy the fleet is. */
export default function Rental() {
  return (
    <Scene>
      <Panel
        title="Bookings"
        subtitle="Week of 16 June, 12 cars, 9 out today"
        className="left-[48px] top-[44px] h-[450px] w-[1024px]"
        flush
        actions={
          <>
            <Pill tone="violet" dot>
              Booked
            </Pill>
            <Pill tone="green" dot>
              On trip
            </Pill>
            <Pill tone="zinc" dot>
              Returned
            </Pill>
          </>
        }
      >
        <div className="flex h-9 border-b border-zinc-100 text-[11.5px] font-medium text-zinc-500">
          <span className="flex w-[190px] shrink-0 items-center px-5">Car</span>
          <div className="grid flex-1 grid-cols-7">
            {DAYS.map((d, i) => (
              <span
                key={d}
                className={`flex items-center border-l border-zinc-100 px-3 ${i === TODAY ? "bg-violet-50 font-semibold text-violet-700" : ""}`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        {CARS.map((c) => (
          <div key={c.plate} className="flex h-[90px] border-b border-zinc-100 last:border-b-0">
            <div className="flex w-[190px] shrink-0 items-center gap-3 px-5">
              <VehicleTile kind="car" hue={c.hue} size={34} />
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold leading-tight">{c.model}</span>
                <span className="block truncate font-mono text-[10.5px] leading-tight text-zinc-500">{c.plate}</span>
              </span>
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-0 grid grid-cols-7">
                {DAYS.map((d, i) => (
                  <span key={d} className={`border-l border-zinc-100 ${i === TODAY ? "bg-violet-50/60" : ""}`} />
                ))}
              </div>
              {c.bookings.map((b) => (
                <div
                  key={b.who}
                  className={`absolute top-[22px] flex h-[46px] flex-col justify-center overflow-hidden rounded-lg border-l-[3px] px-2.5 ${BAR[b.status]}`}
                  style={{ left: `${(b.from / 7) * 100}%`, width: `${((b.to - b.from) / 7) * 100}%` }}
                >
                  <span className="truncate text-[12px] font-semibold leading-tight">{b.who}</span>
                  <span className="truncate text-[10.5px] leading-tight opacity-75">{b.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Panel>

      <Float className="left-[96px] top-[478px] w-[330px] p-4">
        <div className="flex items-end justify-between">
          <span>
            <span className="block text-[11.5px] text-zinc-500">Fleet utilisation this week</span>
            <span className="mt-1 block text-[26px] font-semibold leading-none tracking-tight">78%</span>
          </span>
          <Pill tone="green">Up 6% on last week</Pill>
        </div>
        <div className="mt-3.5 flex h-[56px] items-end gap-2">
          {WEEK.map((v, i) => (
            <span key={i} className={`flex-1 rounded-t-md ${i === TODAY ? "bg-violet-600" : "bg-violet-200"}`} style={{ height: `${v}%` }} />
          ))}
        </div>
        <div className="mt-1.5 flex gap-2 text-center text-[10.5px] text-zinc-400">
          {DAYS.map((d) => (
            <span key={d} className="flex-1">
              {d.slice(0, 1)}
            </span>
          ))}
        </div>
      </Float>

      <Float className="right-[80px] top-[392px] w-[372px] p-4">
        <div className="flex items-center gap-3">
          <Avatar name="Sunita Verma" hue={150} size={40} />
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold leading-tight">Sunita Verma</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Booking 4417, self drive</span>
          </span>
          <Pill tone="green" dot>
            On trip
          </Pill>
        </div>
        <dl className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl bg-zinc-50 p-3">
          {[
            ["Pickup", "Tue 17 Jun, 09:00"],
            ["Return", "Fri 20 Jun, 18:00"],
            ["Car", "Innova Crysta"],
            ["Amount", "₹14,400"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-[11px] text-zinc-500">{k}</dt>
              <dd className="mt-0.5 text-[13px] font-semibold leading-tight">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3.5 flex items-center gap-2">
          <Button primary>
            <Share2 className="size-3.5" />
            Share live trip
          </Button>
          <Button>
            <Phone className="size-3.5" />
            Call
          </Button>
          <span className="ml-auto text-[11.5px] text-zinc-500">Paid in full</span>
        </div>
      </Float>
    </Scene>
  );
}
