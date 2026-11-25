import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "employee-transport",
  name: "Corporate Transport",
  blurb: "Shift pickups, night drops and vendor cabs on one screen",
  seo: {
    title: "Employee Transport Management and Cab Tracking",
    description:
      "Employee transport management for shift pickups and drops. Track staff buses and vendor cabs live, monitor night drops and review route timings each day.",
    keywords: [
      "employee transport management",
      "corporate cab tracking",
      "staff bus tracking",
      "employee transportation software",
      "shift cab tracking",
      "night drop monitoring",
    ],
  },
  hero: {
    eyebrow: "Corporate transport",
    title: "Employee transport management for every shift and drop",
    lede: "Staff buses and cabs run before dawn and after midnight, often owned by a vendor. Ashwa shows the transport desk where each one is, whether it is on its route and when it reached each pickup and drop point.",
    visual: "live-map",
  },
  audience: ["Admin managers", "Facility heads", "Transport desks", "Cab vendors", "HR teams"],
  problems: [
    {
      title: "The shift starts without its people",
      body: "A cab runs late and a line supervisor finds out only when the seats are empty. The transport desk hears it from the floor, not from the vehicle.",
    },
    {
      title: "Night drops are taken on trust",
      body: "The last employee is dropped well after midnight. The office relies on the driver's word that she reached home, and on a call the next morning if she did not.",
    },
    {
      title: "Vendor bills cannot be checked",
      body: "The cab vendor invoices by trip and by kilometre. You have no independent record of which vehicles ran, how far and on which days, so the bill is paid as presented.",
    },
  ],
  how: [
    {
      title: "Get every vehicle tracked",
      body: "Trackers are fitted in company buses and in the cabs your vendor supplies. All of them report into your Ashwa account, grouped by vendor or site.",
    },
    {
      title: "Define shift routes",
      body: "Create a route for each shift with pickup and drop points in order and an expected time at each. Allocate a vehicle and driver.",
    },
    {
      title: "Watch the run",
      body: "The transport desk follows each route live. Overspeed and idling alerts arrive as they happen, and any deviation from the planned route is recorded.",
    },
    {
      title: "Reconcile at month end",
      body: "Pull distance and running records for each vehicle for the month and set them beside the vendor's invoice before it is approved.",
    },
  ],
  features: [
    {
      title: "Shift-wise routes",
      body: "Each shift has its own routes with ordered pickup and drop points and an expected time at each.",
    },
    {
      title: "Arrival time tracking",
      body: "Actual arrival at every point is recorded against the plan, so late pickups show up as a pattern.",
    },
    {
      title: "Live cab and bus map",
      body: "The desk sees all vehicles on duty, which are moving, which have stopped and which have gone offline.",
    },
    {
      title: "Route deviation records",
      body: "A cab that leaves its planned route is recorded, with the path it took available in playback.",
    },
    {
      title: "Overspeed alerts",
      body: "Speeding with staff on board is flagged to the desk at once, with the vehicle, time and place.",
    },
    {
      title: "Office geofences",
      body: "Zones around each office and plant gate log when vehicles arrive and leave, shift after shift.",
    },
    {
      title: "Vendor and site grouping",
      body: "Group vehicles by vendor, site or shift, and give each vendor's coordinator a role limited to what they need.",
    },
    {
      title: "Trip sharing",
      body: "Share a live link for a run so a security desk or a family member can follow a late drop.",
    },
  ],
  showcase: [
    {
      title: "Pickup and drop points in the right order",
      body: "A shift route is a list of addresses and times. Ashwa holds that list, measures each run against it and shows where the timings slip, so the route is corrected rather than argued about in the next review.",
      bullets: [
        "Ordered pickup and drop points for every shift",
        "Expected and actual arrival time at each point",
        "Vehicle and driver allocated to each route",
        "Deviation from the planned route kept on record",
      ],
      visual: "routes",
    },
    {
      title: "Late-night runs watched as they happen",
      body: "After the evening shift, the desk needs to know that every cab finished its route. Live status, overspeed alerts and a device power cut alert give the duty officer a reason to call before anyone else has to.",
      bullets: [
        "Overspeed alerts with vehicle, time and location",
        "Power cut alert when a cab's tracker loses supply",
        "Idling alerts for vehicles halted with the engine on",
        "Push notifications to the duty officer's phone",
      ],
      visual: "alerts",
    },
    {
      title: "Vendor invoices checked against GPS records",
      body: "Ashwa keeps the distance each vehicle ran and the days it worked. At month end the admin team pulls the figures and compares them with the vendor's bill, line by line, before signing it off.",
      bullets: [
        "Distance per vehicle for any date range",
        "Running time, idle time and stoppages",
        "Route history for any disputed trip",
        "Utilisation of each bus and cab on contract",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Shifts that start on time",
      body: "Late pickups are seen while the cab is still on the road, and repeated delays on a route are fixed at the source.",
    },
    {
      title: "Night drops under watch",
      body: "The desk can follow each night run and has alerts and a route record to act on, not only a driver's assurance.",
    },
    {
      title: "Vendor bills you can verify",
      body: "Kilometres and duty days come from the tracker, not from the vendor's log sheet. The invoice is approved against a record both sides can see.",
    },
  ],
  useCases: [
    {
      title: "An IT office with night shifts",
      body: "Cabs collect and drop staff around the clock. The transport desk follows night routes live, the security desk receives a link for the last drops, and next morning's review starts from recorded arrival times.",
    },
    {
      title: "A factory running staff buses",
      body: "Buses bring workers from surrounding towns for each shift. Geofences at the plant gate log arrivals, and the admin manager can see which routes regularly reach after the shift bell has gone.",
    },
    {
      title: "A cab vendor serving several clients",
      body: "A vendor supplies cabs to more than one company. Each client's vehicles sit in a separate group, the vendor's supervisors watch all of them, and each client sees only the cabs on its own contract.",
    },
  ],
  faqs: [
    {
      q: "Can we track cabs that belong to a vendor?",
      a: "Yes. Trackers are fitted in the vendor's vehicles and added to your account, or the vendor runs its own account and gives you access to the vehicles on your contract. We set up whichever arrangement suits both sides.",
    },
    {
      q: "How does Ashwa help with women's safety on night drops?",
      a: "It gives the transport desk live visibility of each night run, alerts for overspeeding and tracker tampering, a record of route deviations and a shareable live link. These support your own safety procedures, such as escorts and call-backs, and do not replace them.",
    },
    {
      q: "Can employees see where their cab is?",
      a: "The office can share a live link for a run, which shows the vehicle's position in a browser. If you want employees to receive this routinely, tell us how your shifts are organised and we will set it up with you.",
    },
    {
      q: "Does it produce the data we need to check vendor billing?",
      a: "Yes. Reports give distance, running time and stoppages per vehicle for any period, and route history is kept for each day. Admin teams use these to check kilometres and duty days against the vendor's invoice.",
    },
    {
      q: "Can different offices manage their own transport?",
      a: "Yes. Each office or plant can be a branch with its own vehicles, routes and staff. Roles control what each person can do, and a central admin can switch between branches to see all of them.",
    },
  ],
  related: [
    "products/route-management",
    "industries/corporate-fleets",
    "products/alerts",
    "products/roles-and-organisations",
  ],
};

export default doc;
