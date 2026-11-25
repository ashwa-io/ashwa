import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "truck-tracking",
  name: "Truck Tracking",
  blurb: "Where the load is, when it reached and what the trip earned",
  seo: {
    title: "GPS Tracking for Trucks: Loads, Diesel and Trip Profit",
    description:
      "GPS tracking for trucks on long-haul and regional routes. Follow each load, record diesel and driver advances, and see what every trip earned after expenses.",
    keywords: [
      "GPS tracking for trucks",
      "truck tracking system",
      "truck GPS tracker India",
      "lorry tracking software",
      "truck trip management",
      "transport fleet tracking",
    ],
  },
  hero: {
    eyebrow: "Truck tracking",
    title: "GPS tracking for trucks, from loading point to payment",
    lede: "A truck leaves and is gone for days. Ashwa shows where the load is right now, records when it reached and was delivered, and keeps diesel, advances and freight against the trip so you know what it earned.",
    visual: "trip-playback",
  },
  audience: ["Truck owners", "Transporters", "Lorry fleet operators", "Traffic managers"],
  problems: [
    {
      title: "The consignor calls, you call the driver",
      body: "The party wants to know where the material is. You ring the driver, who is on a ghat section with no network. An hour passes before anyone has an answer worth giving.",
    },
    {
      title: "Diesel and advances blur together",
      body: "You hand over cash for diesel, tolls and food before the truck leaves. When it returns, the slips are incomplete and the settlement turns into a negotiation.",
    },
    {
      title: "Nobody knows what the trip made",
      body: "Freight was agreed, part was paid, the balance is pending. Add diesel, the return leg run empty and a tyre on the way, and the real margin on that trip is unknown.",
    },
  ],
  how: [
    {
      title: "Fit trackers in the trucks",
      body: "A wired tracker is installed in each truck. It reports position, speed and ignition through the journey, and the truck appears on your fleet map.",
    },
    {
      title: "Create the trip",
      body: "Enter the customer, the loading point and the delivery point. Assign the truck and driver. Note the freight agreed and the advance handed over.",
    },
    {
      title: "Follow it to delivery",
      body: "Watch the truck on the map as the trip moves from started to reached to delivered. Share a live link with the consignor if they want to follow it.",
    },
    {
      title: "Close and settle",
      body: "Record diesel, other expenses and payments received. Settle the driver's cash ledger, close the trip and read what it earned.",
    },
  ],
  features: [
    {
      title: "Live truck location",
      body: "Each truck shows as moving, stopped, idle or offline, with its speed and the time it last reported.",
    },
    {
      title: "Trip stages",
      body: "Trips move through planned, started, reached, delivered and closed, so the office knows the state of every load.",
    },
    {
      title: "Load and deliver stops",
      body: "A trip can carry more than one loading or delivery stop, each recorded in order against the customer.",
    },
    {
      title: "Shareable tracking link",
      body: "Send the consignor a public live-tracking link for that trip. The office can revoke it when the job is done.",
    },
    {
      title: "Diesel and AdBlue entries",
      body: "Log each diesel and AdBlue fill against the truck. Fuel cost is carried into the accounts of the trip.",
    },
    {
      title: "Driver advance ledger",
      body: "Cash given before and during the trip is entered in the driver's ledger and adjusted at settlement.",
    },
    {
      title: "Halts and night stops",
      body: "Route playback shows every stop and how long it lasted, including the ones the driver did not mention.",
    },
    {
      title: "Permit and fitness reminders",
      body: "National permit, state permit, fitness, insurance and road tax dates sit on a calendar with reminders before they lapse.",
    },
  ],
  showcase: [
    {
      title: "Every load on one trip board",
      body: "The board shows which trucks are loading, which are on the road, which have reached and which are free. Each trip carries its customer, freight, expenses and what is still due, so operations and accounts look at the same page.",
      bullets: [
        "Stages from planned through to closed",
        "Free-vehicles view for finding the next available truck",
        "Freight, payments and dues recorded per trip",
        "Public tracking link the office can switch off",
      ],
      visual: "trips",
    },
    {
      title: "Driver advances settled without a fight",
      body: "The driver's cash ledger records each advance as it is given. When he returns, expenses are entered, the balance is worked out and the settlement is saved. Next month, nobody needs to remember who owed whom.",
      bullets: [
        "Advances and settlements entered against each driver",
        "Driver assigned to the truck for every trip",
        "Overspeed and driving behaviour visible for each driver",
        "A separate mobile app for drivers",
      ],
      visual: "drivers",
    },
    {
      title: "Diesel and upkeep recorded against each truck",
      body: "Fuel, tyres and repairs decide whether a truck makes money. Ashwa keeps every fill, service and expense on the truck's profile, next to the distance it actually ran, so cost per kilometre is a figure you can check.",
      bullets: [
        "Diesel and AdBlue fills with odometer readings",
        "Service entries and a reminder when one is due",
        "Vendor list of pumps, garages and tyre shops",
        "Maintenance cost and cost per kilometre reports",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "Consignors answered without a callback",
      body: "The office reads the truck's position off the map or sends the tracking link. Nobody waits for the driver to find network.",
    },
    {
      title: "Cleaner settlements with drivers",
      body: "Advances and expenses are written down when they occur. Settlement day becomes simple arithmetic, and your good drivers stop feeling doubted.",
    },
    {
      title: "Trip-wise profit you can trust",
      body: "Freight, diesel, expenses and dues live on the trip record. You see which routes and customers pay and which only keep trucks busy.",
    },
  ],
  useCases: [
    {
      title: "A long-haul operator on national routes",
      body: "Trucks run between distant cities and are away for many days. The traffic manager follows each one on the map, checks night halts in playback, and shares a tracking link with the consignor at dispatch.",
    },
    {
      title: "A regional carrier doing daily turns",
      body: "Trucks shuttle between a plant and nearby depots several times a day. Geofences at both ends record each entry and exit, and the trip board shows which truck is free for the next load.",
    },
    {
      title: "An owner-driver adding more trucks",
      body: "Someone who drove his own truck now owns a few and has hired drivers. He records advances in the ledger, logs diesel from his phone and checks cost per kilometre before agreeing a freight rate.",
    },
  ],
  faqs: [
    {
      q: "How do I track my truck on a long route?",
      a: "Fit a GPS tracker in the truck and open Ashwa on the web or mobile app. The truck shows on the map with its speed and last update time. Where there is no network the truck shows as offline, and its position updates when the tracker reports again.",
    },
    {
      q: "Can my customer track the truck without an account?",
      a: "Yes. Each trip has a public live-tracking link. Send it to the consignor or consignee and they can follow that truck in a browser. The link covers only that trip, and your office can revoke it at any time.",
    },
    {
      q: "Can I record diesel and driver advances in the same system?",
      a: "Yes. Fuel entries cover diesel and AdBlue and are stored against the truck. Advances and settlements go into the driver's cash ledger. Both feed the trip's cost, so profit is worked out with the expenses included.",
    },
    {
      q: "Will it remind me before a national permit expires?",
      a: "Yes. Enter the expiry dates for national permit, state permit, fitness, insurance, PUC and road tax on each truck. They appear on the renewals calendar and Ashwa sends reminders ahead of the due date.",
    },
    {
      q: "What does GPS tracking for trucks cost?",
      a: "It is quoted per fleet. The cost has two parts: the device for each truck and a prepaid tracking recharge per vehicle. Trip management, maintenance and other modules are add-ons with their own charge. Ask us for a quote with your truck count.",
    },
  ],
  related: [
    "products/trip-management",
    "products/trip-history",
    "industries/trucking",
    "products/driver-management",
  ],
};

export default doc;
