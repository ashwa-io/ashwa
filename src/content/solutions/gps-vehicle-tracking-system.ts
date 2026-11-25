import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "gps-vehicle-tracking-system",
  name: "GPS Vehicle Tracking",
  blurb: "See every vehicle live on one map, without phoning the driver",
  seo: {
    title: "GPS Vehicle Tracking System for Fleets in India",
    description:
      "A GPS vehicle tracking system with devices and software together. See every vehicle live, replay any day's route and get alerts on speed, idling and power cuts.",
    keywords: [
      "GPS vehicle tracking system",
      "vehicle tracking software",
      "real-time vehicle tracking",
      "GPS tracker for vehicles",
      "vehicle tracking system India",
      "live vehicle tracking",
    ],
  },
  hero: {
    eyebrow: "GPS vehicle tracking",
    title: "A GPS vehicle tracking system that ends the where-are-you call",
    lede: "Ashwa pairs a GPS device in each vehicle with software for your office and your phone. You see every vehicle on one map: moving, stopped, idle or offline, with speed, heading and the time of the last update.",
    visual: "live-map",
  },
  audience: ["Fleet owners", "Transport managers", "Dispatchers", "Small business owners"],
  problems: [
    {
      title: "The driver's phone is your tracker",
      body: "You ring to ask where the vehicle is. He says he is ten minutes away. You have no way to check, and the customer is on the other line asking you the same question.",
    },
    {
      title: "Yesterday's route is anyone's guess",
      body: "A vehicle came back late with more kilometres than the job needed. Without a record of where it went and where it halted, the conversation with the driver ends in his word against yours.",
    },
    {
      title: "Trouble reaches you after the fact",
      body: "Overspeeding on the highway, an engine left idling through lunch, a tracker wire pulled out at night. You hear about these days later, if at all, when the damage is already paid for.",
    },
  ],
  how: [
    {
      title: "We fit the device",
      body: "A wired, OBD or battery-powered tracker goes into each vehicle. We help you choose the type that suits the vehicle and how it is used.",
    },
    {
      title: "Vehicles appear on the map",
      body: "Once the device reports, the vehicle shows in your account with its status. Arrange vehicles into groups by branch, route or customer, and give each a marker.",
    },
    {
      title: "Set zones and alerts",
      body: "Draw geofences around your depot and customer sites. Choose which alerts matter to you, such as overspeed, idling, ignition or device power cut.",
    },
    {
      title: "Check from anywhere",
      body: "Open the web dashboard at the office or the mobile app on the road. Staff accounts let your team look for themselves instead of asking you.",
    },
  ],
  features: [
    {
      title: "Live fleet map",
      body: "Every vehicle on one map with a list beside it. Status, speed, heading and last update time are visible at a glance.",
    },
    {
      title: "Route history and playback",
      body: "Pick any day and replay the route at the speed you choose. Stops and halts are marked along the way.",
    },
    {
      title: "Cleaned-up routes",
      body: "Routes are snapped to roads and GPS spikes are filtered out, so distance and mileage figures reflect the road actually driven.",
    },
    {
      title: "Geofence zones",
      body: "Mark depots, customer sites and no-go areas. Ashwa records entry, exit and dwell time for each zone.",
    },
    {
      title: "Alerts that reach you",
      body: "Overspeed, idling, ignition, geofence and device power cut alerts arrive in the app and as push notifications. You can share them onward.",
    },
    {
      title: "Vehicle groups and markers",
      body: "Group vehicles the way your business is organised. Custom map markers let you tell a tanker from a pickup without reading the number plate.",
    },
    {
      title: "Distance and stoppage reports",
      body: "Reports cover distance, running time, idle time, stoppages and overspeed for any vehicle and any period you select.",
    },
    {
      title: "Apps for the team",
      body: "Owners and staff get a mobile app with the same live view as the web dashboard. Sign in with an organisation code or Google.",
    },
  ],
  showcase: [
    {
      title: "Replay any day, stop by stop",
      body: "When a question comes up about a past journey, open the vehicle's history and watch it again. The timeline shows where it went, where it halted and for how long, so the facts are on the screen for everyone.",
      bullets: [
        "Route history for any day you choose",
        "Playback at adjustable speed with stops marked",
        "Routes snapped to roads, GPS spikes removed",
        "Distance and mileage worked out per vehicle",
      ],
      visual: "trip-playback",
    },
    {
      title: "Know about it while it is happening",
      body: "Alerts turn the map into something that calls you, not the other way round. Choose the events that matter for your fleet and Ashwa notifies the right people in the app and on their phones.",
      bullets: [
        "Overspeed and idling alerts with time and place",
        "Ignition on and off events for every vehicle",
        "Device power cut alert if the tracker is disconnected",
        "Renewal and service reminders before the due date",
      ],
      visual: "alerts",
    },
    {
      title: "A tracker suited to each vehicle",
      body: "Ashwa works with widely used tracker families, including Concox GT06-protocol, JT/T 808 and Teltonika FMB and FMC devices. If you already own trackers from these families, tell us the model. New device models can be onboarded on request.",
      bullets: [
        "Wired trackers for trucks, buses and cars",
        "OBD trackers that plug in without wiring",
        "Battery-powered units for trailers and unpowered assets",
        "Tracking data hosted on servers in India",
      ],
      visual: "device",
    },
  ],
  outcomes: [
    {
      title: "Fewer calls to drivers",
      body: "The office answers its own questions from the map. Drivers stay on the road and off the phone, and customers get a straight answer.",
    },
    {
      title: "Disputes settled with facts",
      body: "Route history, stops and timestamps replace memory. Whether the question is a late delivery or extra kilometres, you look it up and move on.",
    },
    {
      title: "Problems caught the same day",
      body: "Alerts bring overspeeding, long idling and tampering to your notice when they happen, while there is still something you can do about them.",
    },
  ],
  useCases: [
    {
      title: "A distributor with delivery vans",
      body: "The owner starts the morning by checking that every van has left the godown. Through the day the sales team checks the map before promising a delivery time, and geofence entries show when each shop was reached.",
    },
    {
      title: "A tanker operator on highways",
      body: "Tankers run long distances with nobody from the office on board. The operator sets overspeed alerts, watches halts on the route and replays a trip when a client questions the arrival time.",
    },
    {
      title: "A family business with mixed vehicles",
      body: "A few trucks, a pickup, the family car and a two-wheeler used for collections all sit in one account. Each has its own marker and group, and the owner checks them from the app in the evening.",
    },
  ],
  faqs: [
    {
      q: "What do I need to start tracking my vehicles?",
      a: "A GPS device fitted in each vehicle and an Ashwa account. We supply the device, set up your organisation and add your vehicles. After that you sign in on the web or the mobile app with your organisation code or Google account.",
    },
    {
      q: "Can I use GPS trackers I already own?",
      a: "Often, yes. Ashwa works with widely used tracker families including Concox GT06-protocol, JT/T 808 and Teltonika FMB and FMC devices. Share the model with us and we will confirm. Models we have not seen before can be onboarded on request.",
    },
    {
      q: "How is a GPS vehicle tracking system priced?",
      a: "Pricing is by quote. You pay for the device and a prepaid tracking recharge for each vehicle. Modules beyond tracking, such as trips or maintenance, are add-ons billed separately, so you take only what you use.",
    },
    {
      q: "What happens if someone disconnects the tracker?",
      a: "Ashwa raises a device power cut alert when a wired tracker loses its supply, and the vehicle shows as offline with its last known position and update time. You can see the route it took up to that point in history.",
    },
    {
      q: "Do my vehicles need an AIS-140 device?",
      a: "AIS-140 is an Indian standard for tracking devices in certain public service and commercial vehicles. Whether it applies to you depends on the vehicle category and your state's rules, which change. Check the current rule with your transport office, then tell us what you need and we will talk through device options.",
    },
  ],
  related: [
    "products/live-tracking",
    "products/trip-history",
    "products/alerts",
    "solutions/fleet-management-software",
  ],
};

export default doc;
