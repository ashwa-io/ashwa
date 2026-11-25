import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "field-services",
  name: "Field Services",
  blurb: "Engineers, vans and emergency vehicles sent to the right site",
  seo: {
    title: "Field service fleet tracking for engineers and vans",
    description:
      "Field service fleet tracking in India for service engineers, utilities, telecom tower crews and ambulances: nearest vehicle, site visit logs and arrival alerts.",
    keywords: [
      "field service fleet tracking",
      "service engineer vehicle tracking",
      "telecom tower site visit tracking",
      "ambulance GPS tracking",
      "utility vehicle tracking",
      "repair van tracking",
    ],
  },
  hero: {
    eyebrow: "Service and emergency fleets",
    title: "Field service fleet tracking that proves the site visit",
    lede: "A complaint is logged, an engineer is assigned and the customer waits. Whether the van reached, when it reached and how long the engineer stayed are the three things the service head is asked. Ashwa answers them from the vehicle itself.",
    visual: "geofence",
  },
  audience: [
    "Service heads",
    "Dispatch coordinators",
    "Operations managers",
    "Circle managers",
    "Ambulance operators",
  ],
  problems: [
    {
      title: "Dispatch by phone and guesswork",
      body: "A breakdown call comes in. The coordinator rings engineers one by one to ask who is nearby. The nearest van is two streets away but its engineer does not answer, so someone drives across the city instead.",
    },
    {
      title: "Site visits nobody can verify",
      body: "The job sheet says the tower site was visited and the genset refuelled. The client's audit says otherwise. At a remote, unmanned site there is no witness, and the service company's word is all it has.",
    },
    {
      title: "Response time argued afterwards",
      body: "Contracts carry response commitments, and penalties follow when they are missed. After a bad month the client produces its figures and the vendor has none. The time a vehicle reached is remembered, not recorded.",
    },
  ],
  how: [
    {
      title: "Equip the service vehicles",
      body: "We fit GPS devices on vans, bikes, utility trucks and ambulances. Each is grouped by region or circle and marked by its type on the map.",
    },
    {
      title: "Geofence the sites",
      body: "Draw a zone around each customer site, tower, substation or hospital. A site you visit often is set up once and used for every later visit.",
    },
    {
      title: "Dispatch from the map",
      body: "When a call comes, the coordinator looks at the map, picks the nearest available vehicle and sends it. Arrival at the site is logged as a geofence entry.",
    },
    {
      title: "Report on visits",
      body: "Pull the entry time, dwell and exit time for each site visit, and distance and running time for each vehicle, for your own review or the client's.",
    },
  ],
  features: [
    {
      title: "Nearest vehicle at a glance",
      body: "The map shows every service vehicle with its status, so the coordinator sees who is close to the call and who is already moving.",
    },
    {
      title: "Site entry and exit log",
      body: "Each geofenced site keeps a dated list of the vehicles that came and went, which is the backbone of a visit report.",
    },
    {
      title: "Dwell time on site",
      body: "See how long a vehicle stayed at a site, and tell a proper service visit from a drive past the gate.",
    },
    {
      title: "Visit history by vehicle",
      body: "Open any vehicle and any date to see the sites it covered, in order, with the road taken between them.",
    },
    {
      title: "Arrival alerts",
      body: "A geofence entry alert tells the coordinator, and anyone you share it with, that the vehicle has reached the site.",
    },
    {
      title: "Region-wise groups",
      body: "Group vehicles by circle, zone or service centre, so each supervisor works with the vehicles in that territory.",
    },
    {
      title: "After-hours use",
      body: "Ignition alerts and route history show when a service van is driven outside duty hours or taken home without approval.",
    },
    {
      title: "Staff mobile app",
      body: "Supervisors carry the fleet on their phones and can check a vehicle or a site visit while they are in the field themselves.",
    },
    {
      title: "API and webhooks",
      body: "Send arrival and departure events to your ticketing or service system, so a job's timeline is filled in without typing.",
    },
  ],
  showcase: [
    {
      title: "Send the vehicle that is closest",
      body: "A fault on a feeder, a lift stuck between floors, a patient waiting: the first decision is which vehicle goes. The live map shows every van and ambulance with status and last update, so the coordinator chooses by position and not by who picks up.",
      bullets: [
        "All service vehicles on one map with live status",
        "Groups for each region, circle or service centre",
        "Custom markers for vans, bikes and ambulances",
        "Speed and heading to judge who will arrive first",
      ],
      visual: "live-map",
    },
    {
      title: "Reconstruct a day of calls",
      body: "When a customer says nobody came, open the engineer's vehicle for that date. Playback shows the route between calls, every halt and its length. The service head sees whether the van reached the address and how long it stayed.",
      bullets: [
        "Route history for any vehicle on any date",
        "Halts listed with start time and duration",
        "Distance covered across the day's calls",
        "Replay at the speed that suits the review",
      ],
      visual: "trip-playback",
    },
    {
      title: "Feed arrivals into your ticketing system",
      body: "A service operation already has a system for complaints and job sheets. Ashwa sends events to it. When a vehicle enters or leaves a site zone, a webhook carries the time and place, and your system attaches it to the open ticket.",
      bullets: [
        "Event webhooks for geofence entry and exit",
        "API access to positions and visit history",
        "Custom integrations built with your team",
        "Data sent to a client's portal where a contract requires it",
      ],
      visual: "api",
    },
  ],
  outcomes: [
    {
      title: "Dispatch decided by position",
      body: "The coordinator assigns the call to the closest free vehicle on the first attempt, without a chain of phone calls to find out who is where.",
    },
    {
      title: "Visits backed by a record",
      body: "Each site visit has an entry time, a dwell and an exit time. The monthly report to a client is drawn from those logs.",
    },
    {
      title: "Response times both sides accept",
      body: "When a client questions a response commitment, the vendor brings its own arrival times to the meeting and the discussion starts from records.",
    },
  ],
  useCases: [
    {
      title: "Telecom tower maintenance crews",
      body: "A contractor maintains towers spread over a circle, many of them unmanned. Each tower has a geofence. Diesel filling and preventive visits show as entry, dwell and exit, and the monthly report to the tower company carries those times.",
    },
    {
      title: "Ambulances and emergency vehicles",
      body: "An ambulance operator runs vehicles from several stands. The control room sees which ambulance is free and nearest to a call, follows it to the patient and on to the hospital, and reviews the run afterwards in playback.",
    },
    {
      title: "Appliance and lift service engineers",
      body: "A service company sends engineers on bikes and in vans to homes and buildings for repairs and AMC visits. The coordinator assigns calls by who is closest, and playback at day end shows the calls each engineer covered.",
    },
  ],
  faqs: [
    {
      q: "Can Ashwa prove that an engineer visited a site?",
      a: "It shows that the vehicle was there. A geofence around the site records entry time, dwell and exit time, and route history shows the journey. That is supporting evidence for a visit, though it does not show what work was done. Pair it with your job sheet or ticket, and we can link the two through the API.",
    },
    {
      q: "Does Ashwa assign jobs to engineers automatically?",
      a: "No. Ashwa is the tracking and fleet layer, not a ticketing system. The coordinator sees every vehicle on the map and chooses whom to send. If you already run service software, webhooks and the API let it use live positions and arrival events from Ashwa. We work out that link with your team.",
    },
    {
      q: "Is Ashwa suitable for ambulance tracking?",
      a: "Ambulance and emergency vehicle tracking is one of the uses we configure with the customer. The control room gets live position, status and history for each vehicle, with zones at hospitals and stands. Ashwa does not replace an emergency dispatch system or guarantee response times. Tell us how your control room works and we will set it up accordingly.",
    },
    {
      q: "Our engineers ride their own motorcycles. What are the options?",
      a: "Tracking needs a GPS device on the vehicle. For personal motorcycles some companies fit a small wired tracker with the engineer's consent, and others use a battery-powered unit carried during duty hours. Both raise questions of policy and privacy that you should settle first. We then supply and configure whichever you choose.",
    },
    {
      q: "Can a client see visits to their own sites only?",
      a: "Yes. A restricted role can be created for the client, limited to the vehicles or the site records you choose to show. Another route is to send visit events to the client's portal through an integration. Either way, your other clients and the rest of your fleet stay out of view.",
    },
  ],
  related: [
    "products/geofencing",
    "products/live-tracking",
    "products/alerts",
    "solutions/gps-vehicle-tracking-system",
  ],
};

export default doc;
