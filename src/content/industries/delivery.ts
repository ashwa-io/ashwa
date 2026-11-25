import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "delivery",
  name: "Delivery",
  blurb: "Beats, drops and daily rounds for distributors and delivery fleets",
  seo: {
    title: "Delivery fleet management for distributors and last mile",
    description:
      "Delivery fleet management for Indian distributors, e-commerce delivery partners, gas agencies and dairies: live rounds, planned beats, stop history and costs.",
    keywords: [
      "delivery fleet management",
      "last mile delivery tracking",
      "distributor vehicle tracking",
      "FMCG van tracking",
      "gas cylinder delivery tracking",
      "milk van GPS tracking",
    ],
  },
  hero: {
    eyebrow: "Last mile and distribution",
    title: "Delivery fleet management for vehicles on a daily beat",
    lede: "The tempo leaves the godown at seven with a full load and a list of outlets. What happens between then and its return at four is known only to the delivery boy. Ashwa shows the round as it happens, drop by drop.",
    visual: "live-map",
  },
  audience: [
    "Distributors",
    "Delivery managers",
    "Hub in-charges",
    "Agency owners",
    "Area sales managers",
  ],
  problems: [
    {
      title: "The round is a black box",
      body: "A van is sent to cover a beat of retailers. It comes back with stock undelivered and a reason for each. The distributor cannot tell which outlets were visited, which were skipped and how long lunch took.",
    },
    {
      title: "Late drops, refused stock",
      body: "The retailer wanted cold drinks before the afternoon rush and the milk booth wanted crates before dawn. A delivery that arrives late is often refused, and the stock rides back to the godown as a cost.",
    },
    {
      title: "Small vehicles, uncounted costs",
      body: "Three-wheelers, pickups and bikes each burn a little fuel and need a small repair now and then. Nobody adds it up vehicle by vehicle, so a tempo that costs more than it delivers stays on the road for years.",
    },
  ],
  how: [
    {
      title: "Track every delivery vehicle",
      body: "We fit GPS devices on vans, three-wheelers, pickups and two-wheelers. Each appears on the map with a marker for its type and a group for its hub.",
    },
    {
      title: "Define beats as routes",
      body: "Set each round as a route with stops in the order you want them served, and expected times for the outlets that matter most.",
    },
    {
      title: "Follow the day's rounds",
      body: "The hub in-charge watches which vehicles are out, which have finished and which are standing. Alerts flag long idling, and a godown geofence records each return.",
    },
    {
      title: "Check and correct",
      body: "In the evening, replay any round, compare the actual stops with the plan, and read distance and idle time for each vehicle in reports.",
    },
  ],
  features: [
    {
      title: "Live map of rounds",
      body: "Every delivery vehicle on one map, shown as moving, stopped, idle or offline, grouped by hub, area or product line.",
    },
    {
      title: "Beats with ordered stops",
      body: "Each beat is saved as a route with its outlets in sequence, and a vehicle is allocated to it for the day.",
    },
    {
      title: "Stops and halts per round",
      body: "History lists each stop with its duration, so a visit to an outlet can be told apart from a long break.",
    },
    {
      title: "Godown and outlet geofences",
      body: "Zones at the godown, the hub and key outlets log departure, arrival and waiting time without anyone writing in a register.",
    },
    {
      title: "Custom vehicle types",
      body: "Add your own categories, such as cylinder truck or milk van, alongside two-wheelers, three-wheelers and vans.",
    },
    {
      title: "Idling alerts",
      body: "Be told when a loaded vehicle stands with its engine running, which matters for fuel and for goods that spoil.",
    },
    {
      title: "Daily distance per vehicle",
      body: "Read how far each vehicle ran today and this month, and compare vehicles that serve similar beats.",
    },
    {
      title: "Fuel and repair entries",
      body: "Log petrol, diesel and CNG fills and small repairs against each vehicle, so running cost is known vehicle by vehicle.",
    },
    {
      title: "Delivery staff profiles",
      body: "Keep a profile for each driver or delivery boy and the vehicle assigned today, so every round has a name against it.",
    },
  ],
  showcase: [
    {
      title: "Plan each beat as a route",
      body: "A beat is a set of outlets served in a sensible order. Build it once as a route with stops and allocate a vehicle. Ashwa shows expected and actual arrival at each stop, along with any deviation from the planned road.",
      bullets: [
        "Outlets saved as ordered stops on a route",
        "Expected against actual arrival at each stop",
        "Deviation flagged when a vehicle leaves the beat",
        "Vehicle allocation changed day by day",
      ],
      visual: "routes",
    },
    {
      title: "Replay the round, stop by stop",
      body: "When stock comes back undelivered, open that vehicle's day. Playback shows the road taken, each halt and its length. You see whether the van reached the retailer's street at all, and at what hour.",
      bullets: [
        "The full route for any vehicle on any day",
        "Each halt marked with its start time and duration",
        "Routes snapped to roads, with GPS spikes removed",
        "Playback speed adjusted to skim or to study",
      ],
      visual: "trip-playback",
    },
    {
      title: "Count the cost of each small vehicle",
      body: "A delivery fleet is many small vehicles with many small bills. Reports bring distance, running time, idle time and maintenance cost together for each one. A three-wheeler that is cheap to buy but costly to run becomes visible.",
      bullets: [
        "Cost per kilometre for every delivery vehicle",
        "Running and idle time compared across the fleet",
        "Utilisation showing vehicles that barely leave the hub",
        "Maintenance cost totalled from service and repair entries",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Rounds that follow the plan",
      body: "Delivery staff know the beat is recorded. Skipped outlets and long unexplained halts become rare, because each one shows in the evening review.",
    },
    {
      title: "Late drops caught early",
      body: "The hub sees a vehicle running behind while the round is still on, and can ring the outlet or send help before the delivery is refused.",
    },
    {
      title: "Costs known per vehicle",
      body: "Fuel, repairs and distance are held against each van, tempo and bike. Decisions on replacing or adding vehicles rest on those records.",
    },
  ],
  useCases: [
    {
      title: "An FMCG distributor's van beats",
      body: "A distributor serves kirana shops across a town on fixed weekly beats. Each beat is a route. The owner checks at noon which vans are behind, and on Saturday reviews which beats keep finishing with stops unvisited.",
    },
    {
      title: "An LPG agency's cylinder rounds",
      body: "A gas agency sends loaded three-wheelers and small trucks into residential areas each morning. The manager groups vehicles by area, watches the rounds on the map, and checks halts in history when a customer says no delivery was attempted.",
    },
    {
      title: "Milk and cold drink runs",
      body: "A dairy agency's vans leave before dawn so booths have crates by opening time. A beverage distributor's trucks are busiest on summer afternoons. Both work to the clock. Temperature monitoring for chilled loads is something we set up with you.",
    },
  ],
  faqs: [
    {
      q: "Can Ashwa show which shops a delivery van actually visited?",
      a: "It shows where the vehicle went and where it stopped. If the outlets are saved as stops on a route, you see expected and actual arrival at each one. History lists every halt with its place and duration. It records the vehicle's visit, not the handover of goods, so read it alongside your delivery challans.",
    },
    {
      q: "We are an e-commerce delivery partner. Can we track riders on their own bikes?",
      a: "Ashwa tracks vehicles through GPS devices. Hub-owned vans and bikes take wired trackers. For riders using their own motorcycles, a battery-powered device is one option, or you can track only the van and line-haul legs. We set this up with you once we understand how your hub hands out shipments.",
    },
    {
      q: "Does Ashwa decide the delivery sequence automatically?",
      a: "No. You set the order of stops when you build the route, because you know your outlets, their timings and their lanes. Ashwa then measures the round against that plan, with expected and actual arrival and deviation. If your beats are prepared in another system, we can discuss bringing them in through the API.",
    },
    {
      q: "Can we monitor temperature in chilled or frozen delivery vans?",
      a: "Cold-chain and temperature monitoring is something Ashwa is configured for with the customer. It depends on the sensor, the tracker model and how your vans are built. Tell us what you carry and the range you must hold, and we will propose the hardware and show you how the readings appear.",
    },
    {
      q: "Can the brand we distribute for see our delivery vehicles?",
      a: "Only if you allow it. You can create a restricted role so a company representative sees chosen vehicles and nothing else, or we can send position data to the company's own portal through an integration. Your other principals, your costs and your staff records stay out of that view.",
    },
  ],
  related: [
    "products/route-management",
    "products/live-tracking",
    "products/trip-history",
    "solutions/fleet-management-software",
  ],
};

export default doc;
