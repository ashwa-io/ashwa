import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "logistics-fleet-tracking",
  name: "Logistics & Delivery",
  blurb: "Share a live link when customers ask where the consignment is",
  seo: {
    title: "Logistics Tracking Software for Delivery Fleets",
    description:
      "Logistics tracking software for delivery and last-mile fleets. Plan multi-stop runs, share a live tracking link with customers and record every delivery stop.",
    keywords: [
      "logistics tracking software",
      "delivery fleet tracking",
      "last-mile delivery tracking",
      "consignment tracking link",
      "delivery vehicle tracking",
      "multi-stop route tracking",
    ],
  },
  hero: {
    eyebrow: "Logistics and delivery",
    title: "Logistics tracking software your customers can follow too",
    lede: "Delivery fleets make many stops a day and field a call about each one. Ashwa lets dispatch see every vehicle and every stop, and gives the customer a live link so they stop calling to ask.",
    visual: "routes",
  },
  audience: ["Logistics companies", "Delivery fleets", "Dispatch teams", "Distributors"],
  problems: [
    {
      title: "Customer service runs on guesswork",
      body: "A customer asks when the consignment will arrive. The desk checks with dispatch, dispatch calls the driver, and the answer passed back is already stale when it reaches the customer.",
    },
    {
      title: "Many stops, no record",
      body: "A van makes a long list of drops in a day. By evening nobody can say with confidence which stops were completed, in what order, and how long each one took.",
    },
    {
      title: "Vehicles wait while work piles up",
      body: "One vehicle is overloaded with drops while another sits at the hub. Without seeing who is free and who is near, dispatch assigns by habit.",
    },
  ],
  how: [
    {
      title: "Bring the fleet online",
      body: "Trackers go into your vans, trucks, three-wheelers and two-wheelers. Each appears on the fleet map, grouped by hub or zone.",
    },
    {
      title: "Plan the run",
      body: "Build a route with ordered stops or create trips with load and deliver points. Assign a vehicle and driver from the free-vehicles view.",
    },
    {
      title: "Share the link",
      body: "Send the customer a public live-tracking link for their trip. They watch the vehicle approach in a browser without calling your desk.",
    },
    {
      title: "Review the day",
      body: "Compare expected and actual arrival times at each stop, look at stoppages and route deviations, and carry the lessons into tomorrow's plan.",
    },
  ],
  features: [
    {
      title: "Ordered multi-stop routes",
      body: "Plan a run as a sequence of stops. The vehicle's progress is measured against that order.",
    },
    {
      title: "Expected versus actual arrival",
      body: "Each stop has an expected time. Ashwa records when the vehicle actually arrived, so delays are visible early.",
    },
    {
      title: "Route deviation",
      body: "When a vehicle leaves its planned route, the deviation is recorded and dispatch can ask why.",
    },
    {
      title: "Customer tracking links",
      body: "A public link per trip shows the customer the live position. Revoke it once the delivery is done.",
    },
    {
      title: "Customer site geofences",
      body: "Draw zones around warehouses and customer premises. Entry, exit and dwell time are logged for each visit.",
    },
    {
      title: "Free-vehicles view",
      body: "See which vehicles have no active trip and assign the next job to one that is actually available.",
    },
    {
      title: "Every vehicle category",
      body: "Trucks, vans, three-wheelers and two-wheelers share one map, each with its own marker and group.",
    },
    {
      title: "Delivery-day reports",
      body: "Distance, stoppages, idle time and utilisation for each vehicle show how the day's runs went and where time was lost.",
    },
  ],
  showcase: [
    {
      title: "Dispatch works from a single trip board",
      body: "Planned, started, reached, delivered, closed. Every consignment sits in one of these stages, and the board shows them side by side. Dispatch sees what is late, what is done and which vehicle can take the next pickup.",
      bullets: [
        "Trips with load stops and deliver stops",
        "A customer record attached to every trip",
        "Free vehicles listed for quick assignment",
        "Live link shared with the customer per trip",
      ],
      visual: "trips",
    },
    {
      title: "Proof of arrival at every customer site",
      body: "A geofence around a warehouse or shop turns a visit into a record. Ashwa logs when the vehicle entered, how long it stayed and when it left, which settles questions about waiting time and missed delivery windows.",
      bullets: [
        "Zones around hubs, warehouses and customer sites",
        "Entry and exit events with timestamps",
        "Dwell time for each visit to a site",
        "Geofence alerts sent to dispatch as they happen",
      ],
      visual: "geofence",
    },
    {
      title: "See how each delivery run really went",
      body: "End-of-day reports show the kilometres each vehicle covered, how long it was running or idling, and where it stopped. Over a few weeks the pattern shows which runs are overloaded and which vehicles are underused.",
      bullets: [
        "Distance and running time for each vehicle",
        "Stoppage reports with place and duration",
        "Vehicle utilisation compared across the whole fleet",
        "Trip cost and profit where trips are billed",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Fewer where-is-it calls",
      body: "Customers with a live link look for themselves. Your desk spends its time on exceptions, not on routine status questions.",
    },
    {
      title: "Delivery windows kept more often",
      body: "Dispatch sees a delay forming while there is time to reassign or warn the customer, instead of learning about it afterwards.",
    },
    {
      title: "Vehicles used more evenly",
      body: "The free-vehicles view and utilisation reports show idle capacity, so each day's work is spread across the fleet you already have.",
    },
  ],
  useCases: [
    {
      title: "A distributor's last-mile vans",
      body: "Vans leave the warehouse each morning with drops for retailers across the city. Each run is a route with ordered stops, and the supervisor checks actual arrival times against the plan before the vans return.",
    },
    {
      title: "A courier hub with two-wheelers",
      body: "Riders on two-wheelers collect and deliver parcels around a hub through the day. Trackers put each rider on the map, and the hub manager looks at who is nearest before assigning the next pickup.",
    },
    {
      title: "A logistics firm serving a manufacturer",
      body: "A manufacturer wants visibility of its outbound consignments. The logistics firm shares a tracking link for each dispatch, and geofences at the plant and the consignee's warehouse record departure and arrival.",
    },
  ],
  faqs: [
    {
      q: "How does a customer track a consignment?",
      a: "Your office creates a trip and shares its public live-tracking link by message or email. The customer opens it in a browser and sees the vehicle moving on a map. No login or app is needed, and you can revoke the link when the delivery is complete.",
    },
    {
      q: "Can one vehicle have many delivery stops in a day?",
      a: "Yes. Route management lets you plan ordered stops with expected arrival times, and trips can carry multiple load and deliver stops. Ashwa records the actual arrival at each, so you see where the day ran ahead or behind.",
    },
    {
      q: "Does it work for two-wheelers and three-wheelers?",
      a: "Yes. Ashwa supports every vehicle category, including two-wheelers, three-wheelers, vans and trucks, and you can define custom types. We help you choose a tracker that suits each kind of vehicle.",
    },
    {
      q: "Can Ashwa monitor temperature for cold-chain deliveries?",
      a: "Cold-chain and temperature monitoring is something we set up with you, because it depends on the sensors and trackers fitted in your vehicles. Tell us what you carry and what you need to record, and we will plan the hardware and alerts together.",
    },
    {
      q: "Can tracking data be sent to our customer's system?",
      a: "Yes. Ashwa offers API access and event webhooks, and we build custom integrations with customers. If your client wants trip status or location in their own portal, tell us the format and we will work out the connection with you.",
    },
  ],
  related: [
    "products/route-management",
    "products/trip-management",
    "industries/delivery",
    "industries/logistics",
  ],
};

export default doc;
