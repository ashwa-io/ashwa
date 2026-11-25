import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "trip-history",
  name: "History & Playback",
  blurb: "Replay any vehicle's day, with stops, halts and distance",
  seo: {
    title: "Vehicle route history and playback, day by day",
    description:
      "Vehicle route history and playback for any day. Replay a route at adjustable speed, see every stop and halt, and read distance from road-snapped GPS data.",
    keywords: [
      "vehicle route history and playback",
      "GPS route history",
      "vehicle route replay",
      "trip playback",
      "vehicle stoppage history",
      "GPS distance and mileage",
    ],
  },
  hero: {
    eyebrow: "Route replay",
    title: "Vehicle route history and playback for any day",
    lede: "Pick a vehicle and a date, and watch the day again. The route is drawn on real roads, stops and halts are marked with their duration, and the distance covered is totalled for you.",
    visual: "trip-playback",
  },
  audience: ["Fleet owners", "Operations managers", "Accountants", "Customer service staff"],
  problems: [
    {
      title: "Yesterday is only the driver's word",
      body: "A customer says the delivery came late. The driver says he was waiting at the gate since morning. Without a record of the day, the office has two stories and no way to settle them.",
    },
    {
      title: "Kilometres claimed do not match",
      body: "Hired vehicles and staff are paid by the kilometre, and the logbook figure is written by the person being paid. Checking it against anything means retracing the route by hand.",
    },
    {
      title: "Raw GPS lines are hard to read",
      body: "A raw track jumps across fields and buildings whenever the signal drifts. A manager looking at a zigzag cannot tell a real detour from a GPS spike, so the history gets ignored.",
    },
  ],
  how: [
    {
      title: "Choose vehicle and day",
      body: "Select a vehicle and any date in its history. Ashwa loads every position the tracker reported during that day and prepares the route.",
    },
    {
      title: "Read the cleaned route",
      body: "The track is snapped to roads and GPS spikes are filtered out, so the line on the map follows the streets the vehicle used.",
    },
    {
      title: "Replay at your pace",
      body: "Press play and the vehicle moves along its route against a timeline. Speed the replay up for a long highway leg or slow it down near a delivery point.",
    },
    {
      title: "Check stops and distance",
      body: "Each stop and halt is listed with where it happened and how long it lasted. The distance and mileage figures for the day sit beside the route.",
    },
  ],
  features: [
    {
      title: "Any day on record",
      body: "Go back to a chosen date for any vehicle and see the whole day, from the first ignition to the last halt.",
    },
    {
      title: "Adjustable replay speed",
      body: "Run through a full shift quickly, or step slowly through the few minutes around a disputed delivery.",
    },
    {
      title: "Stops and halts",
      body: "Every place the vehicle stood still is marked on the route with its start time and its duration.",
    },
    {
      title: "Road-snapped routes",
      body: "Positions are matched to the road network, so the route reads as a drive along real streets instead of straight lines between points.",
    },
    {
      title: "GPS spike filtering",
      body: "Stray positions caused by weak signal are removed before the route is drawn and before distance is counted.",
    },
    {
      title: "Distance and mileage",
      body: "The distance for the day is totalled from the cleaned route, giving a figure you can set against a logbook or a fuel entry.",
    },
    {
      title: "Timeline scrubbing",
      body: "Drag along the timeline to jump to a moment, such as the time a customer says the vehicle arrived.",
    },
  ],
  showcase: [
    {
      title: "Distance figures you can defend",
      body: "A kilometre figure is only useful if people trust it. Because spikes are filtered out and the route follows roads, the distance for the day is counted along the streets driven, and it can be compared across vehicles and dates.",
      bullets: [
        "Daily distance for each vehicle from cleaned positions",
        "Compare the tracked figure with the driver's logbook entry",
        "The same data feeds the distance reports in Reports and Analytics",
      ],
      visual: "reports",
    },
    {
      title: "Halts matched to your own places",
      body: "A halt means more when it has a name. With Geofencing switched on, a stop inside a zone reads as a visit to that depot or customer site, and a long halt on an empty stretch of road stands out for a question.",
      bullets: [
        "Stops inside a zone carry the zone name",
        "Entry and exit times sit next to the replayed route",
        "Unplanned halts outside any zone are easy to spot",
      ],
      visual: "geofence",
    },
  ],
  outcomes: [
    {
      title: "Disputes settled with a record",
      body: "When a customer and a driver disagree about a delivery time, the replay shows when the vehicle reached and how long it waited.",
    },
    {
      title: "Kilometre payments checked quickly",
      body: "The tracked distance sits next to the claimed figure. Approving a hired vehicle's bill takes a look at one screen, not an argument.",
    },
    {
      title: "Habits show across days",
      body: "Replaying a few days of the same run brings out the regular long halts and detours that a single day would hide.",
    },
  ],
  useCases: [
    {
      title: "Proof of arrival for a consignee",
      body: "A transporter using Trip Management is told a load reached a day late. The office opens the vehicle's playback for that date, finds the halt at the consignee's gate, and sends the arrival time back with the closed trip record.",
    },
    {
      title: "Checking a hired vehicle's bill",
      body: "An accountant receives a monthly bill from an attached vehicle owner. She pulls the distance report from Reports and Analytics, then replays the two days where the claimed and tracked kilometres differ before approving payment.",
    },
    {
      title: "Reviewing a complaint on a fixed run",
      body: "A staff bus on a planned route is reported to have skipped a stop. The transport desk compares the replayed path with the ordered stops in Route Management and sees whether the bus left the route or simply ran early.",
    },
  ],
  faqs: [
    {
      q: "How far back can I see a vehicle's route history?",
      a: "History is kept from the day the device goes live on Ashwa. How long it stays available depends on what you take, and we confirm the retention period in your quote. Within that period you can open any date for any vehicle.",
    },
    {
      q: "Why does the replayed route follow the road so closely?",
      a: "A tracker reports a position every few moments, and each one carries a small error. Ashwa matches those positions to the road network and drops the stray points caused by weak signal. The result is a route along real roads instead of a jagged line.",
    },
    {
      q: "Is the GPS distance the same as the odometer reading?",
      a: "Not exactly. GPS distance is counted from positions reported by the tracker, and an odometer counts wheel rotations. The two will not match to the kilometre. Odometer readings entered in the Maintenance module are kept separately, so you can look at both.",
    },
    {
      q: "Can I see where a vehicle stopped and for how long?",
      a: "Yes. Stops and halts are marked along the replayed route and listed with their start time and duration. If you use Geofencing, a stop inside one of your zones also shows the name of that zone.",
    },
    {
      q: "Do I need playback if I already have live tracking?",
      a: "Live tracking answers where the vehicle is now. History and Playback answers where it went, when it stopped and how far it ran. If you settle disputes, pay by the kilometre or review drivers, you will want both. They run on the same device.",
    },
  ],
  related: [
    "products/live-tracking",
    "products/reports-analytics",
    "products/geofencing",
    "solutions/truck-tracking",
  ],
};

export default doc;
