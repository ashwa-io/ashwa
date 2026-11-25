import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "reports-analytics",
  name: "Reports & Analytics",
  blurb: "Distance, idle time, utilisation, trip profit and cost per kilometre",
  seo: {
    title: "Fleet reports and analytics for distance and cost",
    description:
      "Fleet reports and analytics from your GPS and trip data: distance, running and idle time, stoppages, overspeed, utilisation, trip profit and cost per kilometre.",
    keywords: [
      "fleet reports and analytics",
      "vehicle distance report",
      "idle time report",
      "vehicle utilisation report",
      "cost per kilometre",
      "trip profit report",
    ],
  },
  hero: {
    eyebrow: "Figures for decisions",
    title: "Fleet reports and analytics from your own data",
    lede: "The trackers, trips and maintenance entries already hold the answers. Reports turn them into distance, running and idle time, stoppages, overspeed, utilisation, trip profit and cost per kilometre, for a vehicle, a group or the whole fleet.",
    visual: "reports",
  },
  audience: ["Fleet owners", "Finance heads", "Operations managers", "Branch managers"],
  problems: [
    {
      title: "Month end is guesswork",
      body: "The owner knows the bank balance but not which vehicles earned it. Figures are pulled from memory, a few bills and the dispatcher's opinion, and the same vehicles are assumed to be the good ones every month.",
    },
    {
      title: "Some vehicles hardly move",
      body: "Two trucks do most of the work while a third stands at the depot for days at a time. Without a utilisation figure, the standing vehicle still gets its EMI, insurance and driver salary without question.",
    },
    {
      title: "Data exists but nobody reads it",
      body: "The tracking screen is full of dots and the trip register is full of entries. Turning either into a number for a meeting takes an afternoon in a spreadsheet, so it rarely happens.",
    },
  ],
  how: [
    {
      title: "Data comes in daily",
      body: "Positions from the trackers, trips closed by the office and entries made in Maintenance accumulate in Ashwa as ordinary work goes on.",
    },
    {
      title: "Pick a report and period",
      body: "Choose what you want to know, such as distance or idle time, then choose the dates and the vehicles or group it should cover.",
    },
    {
      title: "Read and compare",
      body: "The report lists the figures by vehicle with totals, so high and low performers are side by side and the odd one out is obvious.",
    },
  ],
  features: [
    {
      title: "Distance report",
      body: "Kilometres covered by each vehicle over the period, counted from road-snapped GPS routes with spikes removed.",
    },
    {
      title: "Running and idle time",
      body: "Hours spent moving and hours spent stationary with the engine on, shown separately for every vehicle.",
    },
    {
      title: "Stoppage report",
      body: "A list of stoppages with place, start time and length, useful for finding where time is lost on a regular lane.",
    },
    {
      title: "Overspeed report",
      body: "Instances where a vehicle went above the limit you set, with when and where, summarised by vehicle.",
    },
    {
      title: "Vehicle utilisation",
      body: "How much of the period each vehicle was actually in use, which separates working assets from idle ones.",
    },
    {
      title: "Trip profit and cost",
      body: "Income, expenses and fuel cost for closed trips, giving the result for each trip and each customer.",
    },
    {
      title: "Cost per kilometre",
      body: "Spending set against distance run, so vehicles of different sizes and ages can be judged on a common measure.",
    },
    {
      title: "Maintenance cost",
      body: "Service, repair and other upkeep spending by vehicle over time, drawn from the entries in the Maintenance module.",
    },
  ],
  showcase: [
    {
      title: "Movement figures from the tracker",
      body: "Distance, running time, idle time and stoppages need no data entry at all. They come from the positions each device reports through the day, cleaned before counting, and can be opened again in playback when a figure needs explaining.",
      bullets: [
        "Distance counted along roads, not straight lines",
        "Idle hours separated from running hours",
        "Any figure can be checked against the replayed route",
      ],
      visual: "trip-playback",
    },
    {
      title: "Money figures from closed trips",
      body: "Trip profit and cost reports are only as good as the trips behind them. Because expenses, fuel cost and payments are recorded on each trip in Ashwa, the report is a sum of entries your own staff made, not an estimate.",
      bullets: [
        "Profit and cost for every closed trip",
        "Results grouped by customer or by vehicle",
        "Cost per kilometre once distance is known",
      ],
      visual: "trips",
    },
    {
      title: "Upkeep cost, vehicle by vehicle",
      body: "An old vehicle can look cheap because it is paid off. The maintenance cost report adds up what it has taken in service, repairs and parts, which is the figure to weigh when deciding whether to keep it or replace it.",
      bullets: [
        "Service and repair spending for each vehicle",
        "Fuel entries alongside other running expenses",
        "Trends across months for the same vehicle",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "Decisions backed by figures",
      body: "Which vehicle to sell, which lane to drop and which driver to speak to are settled with a report on the table.",
    },
    {
      title: "Idle assets come to light",
      body: "Utilisation and idle time put a number on vehicles that stand or burn fuel without moving, so they are redeployed or questioned.",
    },
    {
      title: "Less time building spreadsheets",
      body: "The figures are prepared from data already in the system, which frees the accountant from copying entries into sheets each month.",
    },
  ],
  useCases: [
    {
      title: "Idle time traced to one gate",
      body: "The idle time report shows a group of delivery vans running their engines for long spells every morning. Geofencing dwell events place those spells at one distribution centre, and the manager takes the loading delay up with that site.",
    },
    {
      title: "Costing a contract before renewal",
      body: "A transporter is asked to renew a yearly contract at the old rate. He pulls trip profit for that customer from Trip Management data and maintenance cost for the vehicles deployed, and goes into the negotiation knowing his real margin.",
    },
    {
      title: "Driver review with overspeed data",
      body: "Each month a fleet supervisor opens the overspeed report and reads it against assignments in Driver Management. Drivers with repeated instances are called in, and the next month's report shows whether the talk had any effect.",
    },
  ],
  faqs: [
    {
      q: "Which reports are available in Ashwa?",
      a: "Distance, running time, idle time, stoppages, overspeed, vehicle utilisation, trip profit and cost, cost per kilometre and maintenance cost. The movement reports need only GPS devices. The money reports draw on Trip Management and Maintenance, so they appear when those modules are in use.",
    },
    {
      q: "How is cost per kilometre calculated?",
      a: "It sets the spending recorded for a vehicle or trip, such as fuel, trip expenses and maintenance, against the distance it ran. The distance comes from GPS. The more completely your staff enter costs, the closer the figure is to your true running cost.",
    },
    {
      q: "Can I get a report for one branch or one group of vehicles?",
      a: "Yes. Reports can be limited to a vehicle, a vehicle group or the whole fleet, for the dates you choose. Users whose role covers only one branch see reports for that branch.",
    },
    {
      q: "Can a report be built for our specific needs?",
      a: "Organisations on larger set-ups can have custom dashboards and workflows configured for them. If you need a figure that the standard reports do not show, tell us what decision it supports and we scope it with you.",
    },
    {
      q: "How accurate are the distance and idle figures?",
      a: "They are derived from what the tracker reports. Routes are snapped to roads and GPS spikes are filtered before distance is counted. A device that was offline or disconnected for part of the period will leave a gap, and the figures reflect only the data received.",
    },
  ],
  related: [
    "products/trip-history",
    "products/trip-management",
    "products/maintenance",
    "solutions/fleet-management-software",
  ],
};

export default doc;
