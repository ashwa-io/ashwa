import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "live-tracking",
  name: "Live Tracking",
  blurb: "See every vehicle on one map, with status, speed and last update",
  seo: {
    title: "Real-time vehicle tracking on one live fleet map",
    description:
      "Real-time vehicle tracking on a fleet map. See each vehicle as moving, stopped, idle or offline, with speed, heading and last update time, on web and mobile.",
    keywords: [
      "real-time vehicle tracking",
      "live vehicle tracking",
      "live fleet map",
      "GPS vehicle tracking India",
      "vehicle location tracking",
      "fleet tracking software",
    ],
  },
  hero: {
    eyebrow: "Live fleet map",
    title: "Real-time vehicle tracking on one fleet map",
    lede: "Open the map and see where each vehicle is right now: moving, stopped, idle or offline, with speed, heading and the time of its last update. The phone call to the driver becomes the exception, not the routine.",
    visual: "live-map",
  },
  audience: ["Fleet owners", "Dispatchers", "Transport managers", "Control room staff"],
  problems: [
    {
      title: "The location is a phone call",
      body: "Every time a customer asks where the load is, someone in the office rings the driver. The driver is on the highway, the answer is a guess, and the same call happens again an hour later.",
    },
    {
      title: "Stopped and idling look the same",
      body: "From the office, a truck parked for lunch and a truck burning diesel at a gate with the engine on are identical. You only learn the difference when the fuel bill arrives.",
    },
    {
      title: "A silent device goes unnoticed",
      body: "A tracker that lost power or network yesterday can still show a dot on a map. Without a clear last update time, nobody knows the position on screen is a day old.",
    },
  ],
  how: [
    {
      title: "Fit the tracker",
      body: "A GPS device is installed in each vehicle: wired, OBD or battery-powered, depending on the vehicle and how you use it. It starts reporting position once it is active.",
    },
    {
      title: "Open the fleet map",
      body: "Sign in on the web or the mobile app. Every vehicle appears on the map and in a list beside it, each with its current status and speed.",
    },
    {
      title: "Group and mark vehicles",
      body: "Sort vehicles into groups by branch, customer or vehicle type, and give them custom map markers so a tanker, a bus and a bike are easy to tell apart.",
    },
    {
      title: "Act on what you see",
      body: "Click a vehicle to follow it, check its heading and last update, and pass the position to whoever asked. Add other modules when you need history, zones or alerts.",
    },
  ],
  features: [
    {
      title: "Fleet map and vehicle list",
      body: "A map of all vehicles with a searchable list alongside. Select a vehicle in the list and the map centres on it.",
    },
    {
      title: "Four clear statuses",
      body: "Each vehicle is marked moving, stopped, idle or offline, so an engine running at a standstill is never confused with a parked vehicle.",
    },
    {
      title: "Speed and heading",
      body: "The current speed and the direction of travel are shown for every moving vehicle, taken from the latest report sent by its tracker.",
    },
    {
      title: "Last update time",
      body: "Every position carries the time it was received. A vehicle that has gone quiet is shown as offline instead of frozen in place.",
    },
    {
      title: "Vehicle groups",
      body: "Group vehicles by depot, contract, route or any label you use, then filter the map to one group at a time.",
    },
    {
      title: "Custom map markers",
      body: "Choose markers that match the vehicle category, so trucks, vans, buses, cars and two-wheelers are recognisable at a glance on a busy map.",
    },
    {
      title: "Web and mobile views",
      body: "The same live view is available in the browser at the office and in the app on the owner's phone.",
    },
  ],
  showcase: [
    {
      title: "Status that tells you what is happening",
      body: "A dot on a map is not enough. The vehicle list shows the status of each vehicle next to its number, with speed and the time of the last report, so the office can scan the whole fleet without opening each one.",
      bullets: [
        "Moving, stopped, idle and offline shown as separate states",
        "Speed and heading for each vehicle on the road",
        "Last update time visible on every row",
        "Filter the list down to one vehicle group",
      ],
      visual: "vehicles",
    },
    {
      title: "The same map in your pocket",
      body: "Owners rarely sit at a desk. The mobile app carries the fleet map and vehicle list, so a question at a customer meeting or late in the evening is answered from the phone, with the same statuses the office sees.",
      bullets: [
        "Fleet map and vehicle list on the phone",
        "Search for a vehicle by its registration number",
        "Staff accounts see only what their role allows",
      ],
      visual: "mobile-app",
    },
    {
      title: "From tracker to map, in plain terms",
      body: "The device in the vehicle reads its position from GPS satellites and sends it over the mobile network to Ashwa servers hosted in India. The map updates when the report arrives. We work with widely used tracker families and onboard new models on request.",
      bullets: [
        "Works with Concox GT06-protocol, JT/T 808 and Teltonika trackers",
        "Wired, OBD and battery-powered device options to choose from",
        "New device models can be onboarded on request",
      ],
      visual: "device",
    },
  ],
  outcomes: [
    {
      title: "Fewer calls to drivers",
      body: "The office reads the position from the map. Drivers are called for real reasons, and they keep their attention on the road.",
    },
    {
      title: "Faster answers for customers",
      body: "When a customer asks where the vehicle is, the person on the phone can answer while the customer is still on the line.",
    },
    {
      title: "Idle engines get noticed",
      body: "Because idling has its own status, a vehicle left running at a gate is visible the moment someone looks at the list.",
    },
  ],
  useCases: [
    {
      title: "Live map plus geofence zones",
      body: "A distributor draws zones around its warehouse and dealer sites. The dispatcher watches vehicles approach on the live map, and the Geofencing module records the entry and exit, so arrival is confirmed without anyone ringing the driver.",
    },
    {
      title: "Live position on a running trip",
      body: "A transporter runs loads through Trip Management. Each trip shows the live position of its vehicle, and the office sends the customer a tracking link for that trip, which it withdraws once the delivery is closed.",
    },
    {
      title: "Night watch with alerts",
      body: "An owner keeps the map open during the day and relies on Alerts at night. An overspeed or power cut notification arrives on the phone, and the owner opens that vehicle on the live map to see what is going on.",
    },
  ],
  faqs: [
    {
      q: "How often does the vehicle position update on the map?",
      a: "The update interval depends on the tracker model and how it is configured, and it usually differs between a moving and a parked vehicle. We set this up with you at installation. Every position on the map shows the time it was received, so you always know how fresh it is.",
    },
    {
      q: "What does offline mean for a vehicle?",
      a: "Offline means Ashwa has not received a report from the device for some time. Common causes are no mobile network, a disconnected device or a drained battery. The vehicle stays on the map at its last known position, clearly marked, with the time of that last report.",
    },
    {
      q: "Can I track different types of vehicles on the same map?",
      a: "Yes. Trucks, vans, buses, cars, two-wheelers, three-wheelers, trailers and special purpose vehicles all appear on one map. You can give each category its own marker and put vehicles into groups, so a mixed fleet stays readable.",
    },
    {
      q: "Do I need other modules to use live tracking?",
      a: "No. Live tracking works on its own with a GPS device and a prepaid tracking recharge for each vehicle. Many customers later add History and Playback, Geofencing or Alerts, and those modules use the same devices with no new hardware.",
    },
    {
      q: "Can my customer see where their consignment is?",
      a: "Live tracking itself is for your own staff. To show a customer one vehicle for one job, use the trip link in Trip Management. It opens a public tracking page for that trip only, and the office can revoke it at any time.",
    },
  ],
  related: [
    "products/trip-history",
    "products/geofencing",
    "products/alerts",
    "solutions/gps-vehicle-tracking-system",
  ],
};

export default doc;
