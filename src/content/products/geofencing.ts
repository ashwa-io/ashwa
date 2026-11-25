import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "geofencing",
  name: "Geofencing",
  blurb: "Zones around your places, with entry, exit and dwell events",
  seo: {
    title: "Geofencing for vehicles: entry, exit and dwell",
    description:
      "Geofencing for vehicles in Ashwa: draw zones around depots, customer sites, schools and no-go areas, and get entry, exit and dwell events for every vehicle.",
    keywords: [
      "geofencing for vehicles",
      "vehicle geofence alerts",
      "geofence entry and exit",
      "dwell time tracking",
      "depot geofence",
      "GPS geofencing India",
    ],
  },
  hero: {
    eyebrow: "Zones on the map",
    title: "Geofencing for vehicles, depots and customer sites",
    lede: "Draw a zone around any place that matters: a depot, a customer's yard, a school, an area vehicles must stay out of. Ashwa records each time a vehicle enters, leaves or lingers there.",
    visual: "geofence",
  },
  audience: ["Dispatchers", "Depot managers", "School transport heads", "Security officers"],
  problems: [
    {
      title: "Arrival is whatever was said",
      body: "The driver messages that he has reached the plant. The plant's gate register says otherwise. The office has no independent mark of when the vehicle crossed into the premises.",
    },
    {
      title: "Hours vanish at loading points",
      body: "A vehicle spends half the shift inside a warehouse compound waiting for a bay. The delay is real, but with no measured waiting time the transporter cannot raise detention with the client.",
    },
    {
      title: "Vehicles stray where they should not",
      body: "A company car is taken out of the city on a holiday, or a truck uses a market road it was told to avoid. The owner finds out by chance, if at all.",
    },
  ],
  how: [
    {
      title: "Draw the zone",
      body: "Mark the boundary of a place on the map and give it a name your staff will recognise, such as the depot or a customer site.",
    },
    {
      title: "Say what it is",
      body: "Treat it as a place vehicles should visit, like a school or a yard, or as a no-go area they should keep away from.",
    },
    {
      title: "Events are recorded",
      body: "When a tracked vehicle crosses the boundary, Ashwa logs an entry or an exit with the time. Staying inside is measured as dwell.",
    },
    {
      title: "Use the events",
      body: "Read them in the event list, receive them as alerts, or let other modules such as trips and school transport act on them.",
    },
  ],
  features: [
    {
      title: "Named zones",
      body: "Create zones for depots, customer sites, schools, fuel pumps, parking yards and any other location you deal with regularly.",
    },
    {
      title: "No-go areas",
      body: "Mark areas vehicles are not supposed to enter, so a crossing is logged and can be brought to someone's notice.",
    },
    {
      title: "Entry events",
      body: "A dated, timed record each time a vehicle comes into a zone, independent of what anyone reports by phone.",
    },
    {
      title: "Exit events",
      body: "A matching record when the vehicle leaves, so the visit has a beginning and an end.",
    },
    {
      title: "Dwell time",
      body: "The length of each stay inside a zone, which turns waiting at a site into a figure you can discuss.",
    },
    {
      title: "Works for all vehicles",
      body: "Zones apply across the fleet, whether the vehicle is a truck, a school bus, a staff car or a delivery bike.",
    },
  ],
  showcase: [
    {
      title: "Entry and exit sent as alerts",
      body: "An event in a log helps afterwards. An alert helps now. With the Alerts module, a geofence entry or exit reaches the right person in the app or as a push notification, and can be shared onward with a client or a colleague.",
      bullets: [
        "Notification when a vehicle enters a chosen zone",
        "Notification when it leaves, with the time",
        "No-go area crossings brought to attention at once",
      ],
      visual: "alerts",
    },
    {
      title: "Dwell time turned into a case",
      body: "Waiting is the cost transporters find hardest to prove. Dwell events give each visit to a site a measured duration. Collected over weeks in reports, they show which sites hold vehicles longest and give you dated evidence for a detention claim.",
      bullets: [
        "Duration of every stay inside a zone",
        "Sites compared by how long they hold vehicles",
        "Dated records to support a detention discussion",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Arrivals recorded without calls",
      body: "The crossing of a boundary is logged by the system, so reaching and leaving a site no longer depends on a driver's message.",
    },
    {
      title: "Waiting time made visible",
      body: "Dwell figures show where vehicles are held up, giving the operator something concrete to raise with the site or the client.",
    },
    {
      title: "Misuse noticed early",
      body: "Entries into no-go areas are recorded when they happen, so unauthorised trips come to light the same day, not at the next audit.",
    },
  ],
  useCases: [
    {
      title: "Parents told the bus is near",
      body: "A school draws zones around its campus and its main pickup points. As a bus enters a zone, School Transport uses that event to tell the parents waiting at that stop that the bus is arriving.",
    },
    {
      title: "Trip stage confirmed at the yard",
      body: "A steel transporter keeps a zone around each customer's stockyard. When a truck on a trip enters, the entry event appears beside that trip in Trip Management, and the office marks it reached without telephoning the driver.",
    },
    {
      title: "Equipment kept on the site",
      body: "A construction firm fences each project site. If a compactor or a generator fitted with a tracker leaves the zone outside working hours, the exit event raises an alert, and the site in-charge checks Live Tracking to see where it is headed.",
    },
  ],
  faqs: [
    {
      q: "What is a geofence in vehicle tracking?",
      a: "A geofence is a boundary drawn on the map around a real place. The tracking system compares each vehicle's position with that boundary and records when the vehicle goes in, comes out and how long it stays. It turns a location into something the system can watch.",
    },
    {
      q: "How many zones can I create?",
      a: "You create zones for the places your operation needs: depots, customer sites, schools, stops and restricted areas. If you expect a very large number, for example one for every dealer in a state, tell us and we plan the set-up with you.",
    },
    {
      q: "What is a dwell event?",
      a: "Dwell is the time a vehicle spends inside a zone between entering and leaving. Ashwa records it for each visit. Operators use it to measure loading and unloading delays, and schools use it to see how long a bus waited at a stop.",
    },
    {
      q: "Will I be told the moment a vehicle enters a zone?",
      a: "The event is created when the tracker's reported position crosses the boundary, so timing follows the device's update interval and network coverage. With the Alerts module you receive it as a notification. Without Alerts, the event is still recorded and can be read later.",
    },
    {
      q: "Can a geofence stop a vehicle from entering an area?",
      a: "No. A geofence observes and records. It cannot physically prevent a vehicle from going anywhere. Its value is that an entry into a no-go area is logged and notified, so the owner can act on it.",
    },
  ],
  related: [
    "products/alerts",
    "products/live-tracking",
    "products/route-management",
    "solutions/asset-tracking",
  ],
};

export default doc;
