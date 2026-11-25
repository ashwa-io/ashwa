import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "logistics",
  name: "Logistics",
  blurb: "Consignments, PODs and customer status updates for transporters and 3PLs",
  seo: {
    title: "Fleet tracking for logistics companies and transporters",
    description:
      "Fleet tracking for logistics companies in India: live vehicle position, trip stages, customer tracking links, trip expenses and dues on one Ashwa platform.",
    keywords: [
      "fleet tracking for logistics companies",
      "logistics GPS tracking India",
      "3PL fleet tracking",
      "consignment tracking software",
      "transporter trip management",
      "customer tracking link for consignments",
    ],
  },
  hero: {
    eyebrow: "Logistics and 3PL",
    title: "Fleet tracking for logistics companies that answer to customers",
    lede: "A transporter's day is spent on the phone: the consignor asking where the vehicle is, the driver asking for an advance, the accounts desk asking for the POD. Ashwa puts the vehicle, the trip and the money on one screen.",
    visual: "trips",
  },
  audience: [
    "Transport managers",
    "3PL operations heads",
    "Traffic in-charges",
    "Branch managers",
    "Accounts teams",
  ],
  problems: [
    {
      title: "Status calls eat the traffic desk",
      body: "The consignor rings for an update. The traffic in-charge rings the driver. The driver is on a ghat section with no network. By the time an answer comes back, the customer has called twice more and trust has thinned.",
    },
    {
      title: "PODs come back late",
      body: "The lorry unloaded on Tuesday, but the signed POD is still in the cabin a week later. Without it the freight bill cannot be raised, and the payment cycle starts from the day the paper arrives, not the day the goods did.",
    },
    {
      title: "Trip money lives in notebooks",
      body: "Advance at loading, toll, hamali, detention, a balance at unloading. Each is noted in a diary or a WhatsApp message. At month end nobody can say which consignments made money and which customer still owes.",
    },
  ],
  how: [
    {
      title: "Fit trackers on vehicles",
      body: "We install GPS devices on your own vehicles and, where you agree it with their owners, on attached vehicles. Each one appears on the fleet map with its status and last update.",
    },
    {
      title: "Create the trip",
      body: "The traffic desk enters the customer, the load and deliver stops and the vehicle. The trip sits on the board as planned until the vehicle rolls out of the yard.",
    },
    {
      title: "Share a tracking link",
      body: "Send the consignor the public live-tracking link for that trip. They watch the vehicle move without logging in. The office revokes the link when the job is over.",
    },
    {
      title: "Close with the money",
      body: "Record trip expenses, fuel cost and payments received against the trip. Close it when the dues are settled, and read the profit on each trip in reports.",
    },
  ],
  features: [
    {
      title: "Trip board by stage",
      body: "Every consignment shows as planned, started, reached, delivered or closed, so the morning meeting works from one board instead of a round of phone calls.",
    },
    {
      title: "Customer tracking links",
      body: "One public link per trip. The consignor follows the vehicle on a map, and the office can revoke the link at any time.",
    },
    {
      title: "Load and deliver stops",
      body: "Each trip carries its loading and unloading points, so part loads and multi-drop consignments are followed stop by stop.",
    },
    {
      title: "Free-vehicles view",
      body: "See which vehicles are empty and where they are standing before you accept a load or ring a broker for a market vehicle.",
    },
    {
      title: "Trip expenses and dues",
      body: "Toll, loading charges, fuel and driver expenses are entered against the trip. Payments and outstanding dues stay attached to the customer.",
    },
    {
      title: "Warehouse and consignee geofences",
      body: "Draw zones around your godowns, hubs and regular consignee sites. Entry, exit and dwell events show how long vehicles wait at each gate.",
    },
    {
      title: "Route replay for disputes",
      body: "Replay any day of a vehicle's route with its stops and halts when a customer questions a delay or a detention claim.",
    },
    {
      title: "Branch-wise access",
      body: "Run each branch as its own unit with its own users and roles, while the head office sees the vehicles and trips of every branch.",
    },
  ],
  showcase: [
    {
      title: "Answer the consignor before they call",
      body: "The fleet map shows each vehicle as moving, stopped, idle or offline, with speed and last update time. Group vehicles by customer or lane, so the person handling one account sees only the trucks that matter to that account.",
      bullets: [
        "Vehicle groups by customer, lane or branch",
        "Status, speed and heading shown for every vehicle",
        "A public tracking link the consignor opens on a phone",
        "Last update time shown when a vehicle goes offline",
      ],
      visual: "live-map",
    },
    {
      title: "Measure waiting time at every gate",
      body: "Detention arguments are settled by timestamps. Draw a zone around the consignee's warehouse and Ashwa records when the vehicle entered, how long it stood and when it left. The record is there when the detention bill is questioned.",
      bullets: [
        "Entry and exit events for each warehouse zone",
        "Dwell time per visit, ready for a detention claim",
        "An alert when a vehicle reaches the unloading point",
        "Zones for hubs, godowns, plants and consignee sites",
      ],
      visual: "geofence",
    },
    {
      title: "See which lanes and customers pay",
      body: "Because expenses, fuel cost and payments are entered against the trip, the reports add up on their own. Trip profit and cost per kilometre show which lane earns and which customer's work is being carried at a loss.",
      bullets: [
        "Trip profit and cost for every closed trip",
        "Cost per kilometre for each vehicle",
        "Outstanding dues listed against each customer",
        "Vehicle utilisation and idle time across the fleet",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Fewer status calls to answer",
      body: "Customers holding a tracking link stop ringing the traffic desk for position updates. The desk spends its day planning loads instead of relaying what the driver said.",
    },
    {
      title: "Billing starts on delivery day",
      body: "When a trip turns to delivered on the board, the accounts desk knows the same day. They chase the POD and prepare the freight bill without waiting for the driver to return.",
    },
    {
      title: "Every consignment has its account",
      body: "Advance, expenses and receipts are held against the trip they belong to. When a customer disputes a balance, the answer is on the trip record, not in a diary.",
    },
  ],
  useCases: [
    {
      title: "A 3PL running distribution for a brand",
      body: "A 3PL moves stock from a mother warehouse to distributors across a state. Each dispatch is a trip with its deliver stops. The brand's supply chain team gets a tracking link per vehicle and stops asking for a daily status sheet.",
    },
    {
      title: "A booking office with several branches",
      body: "A transporter books part loads at branch offices and line-hauls between them overnight. Each branch is set up with its own users. The head office watches the line-haul vehicles and sees which branch has dues piling up.",
    },
    {
      title: "Dedicated vehicles on a plant contract",
      body: "A fleet is contracted to carry finished goods from one factory to a few depots. Geofences at the plant gate and each depot record turnaround. The transporter uses dwell time to show where its vehicles are being held.",
    },
  ],
  faqs: [
    {
      q: "Can a customer track their consignment without an Ashwa login?",
      a: "Yes. Each trip has a public live-tracking link. You send it by WhatsApp, SMS or email and the customer opens it in a browser to see the vehicle on a map. The link belongs to that trip only, and your office can revoke it whenever it chooses, for example once the goods are delivered.",
    },
    {
      q: "Can we track attached and market vehicles along with our own fleet?",
      a: "A vehicle appears in Ashwa when a GPS device on it reports to the platform. For attached vehicles on long contracts, a wired tracker is the usual choice. For a one-off market vehicle, a battery-powered device that travels with the load is an option. Tell us your mix and we set this up with you.",
    },
    {
      q: "How does Ashwa help when a consignee holds our vehicle for days?",
      a: "Draw a geofence around the unloading point. Ashwa records the entry time, the dwell and the exit time for every visit, and route playback shows the vehicle standing there. You can attach that record to your detention claim. Whether the claim is paid still depends on your contract with the customer.",
    },
    {
      q: "Can Ashwa send vehicle positions to our customer's portal or our own ERP?",
      a: "Yes. Ashwa offers API access and event webhooks, and it sends data to government and customer portals. If a consignor wants location pushed to its control tower, or you want trips to flow into your ERP, we build that integration with you. Share the portal's specification and we will confirm what is needed.",
    },
    {
      q: "What does fleet tracking for a logistics company cost?",
      a: "Pricing is by quote. You pay for the GPS device on each vehicle and a prepaid tracking recharge per vehicle. Add-on modules such as trip management are billed separately, so you take only what your operation uses. Tell us your vehicle count and the modules you need, and we send a quote.",
    },
  ],
  related: [
    "solutions/logistics-fleet-tracking",
    "products/trip-management",
    "products/live-tracking",
    "industries/trucking",
  ],
};

export default doc;
