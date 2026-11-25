import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "asset-tracking",
  name: "Asset Tracking",
  blurb: "Track machines, trailers and gensets that have no driver to call",
  seo: {
    title: "GPS Asset Tracking for Equipment, Trailers and Gensets",
    description:
      "GPS asset tracking for construction equipment, trailers and gensets. See where each asset is, when it last ran and get an alert if it moves from its site.",
    keywords: [
      "GPS asset tracking",
      "construction equipment tracking",
      "trailer tracking",
      "genset tracking",
      "heavy equipment GPS tracker",
      "asset tracking system India",
    ],
  },
  hero: {
    eyebrow: "Asset tracking",
    title: "GPS asset tracking for equipment nobody is watching",
    lede: "An excavator on a remote site, a trailer dropped at a yard, a genset on hire: none of them has a driver you can phone. Ashwa puts each one on a map and tells you when it runs or moves.",
    visual: "assets",
  },
  audience: ["Contractors", "Equipment hirers", "Plant managers", "Trailer fleet owners"],
  problems: [
    {
      title: "Equipment goes missing between sites",
      body: "A compactor was sent to one project and lent to another. Months later nobody is sure where it is, and a replacement is hired while the original sits unused somewhere.",
    },
    {
      title: "Hired machines sit switched off",
      body: "You pay for a machine by the month. Whether it worked every day or stood idle most of the time is known only to the site, and the site's account is rarely precise.",
    },
    {
      title: "Theft is noticed too late",
      body: "A genset or a trailer left unattended over a holiday is gone when work resumes. With no record of when it moved or which way, there is little to give the police.",
    },
  ],
  how: [
    {
      title: "Choose the right tracker",
      body: "Powered machines take a wired tracker. Trailers and unpowered assets take a battery-powered unit. We go through your asset list with you.",
    },
    {
      title: "Register each asset",
      body: "Add the asset under its category or a custom type, such as excavator, transit mixer, trailer or genset, with its documents and site.",
    },
    {
      title: "Fence the site",
      body: "Draw a geofence around each project site or yard. Ashwa logs entry and exit and alerts you when an asset leaves.",
    },
    {
      title: "Review usage",
      body: "Check running and idle time for each machine against what the site reports, and move underused equipment to where it is needed.",
    },
  ],
  features: [
    {
      title: "Asset map",
      body: "Machines, trailers and gensets appear on the map beside your vehicles, each with its own marker.",
    },
    {
      title: "Custom asset types",
      body: "Create types for what you own: excavators, cranes, mixers, compressors, containers. Each gets its own profile.",
    },
    {
      title: "Site geofences",
      body: "A zone around every site and yard records which assets are inside and when each arrived or left.",
    },
    {
      title: "Movement alerts",
      body: "Be notified when an asset exits its zone or its ignition comes on when the site is meant to be shut.",
    },
    {
      title: "Running and idle time",
      body: "For powered machines, ignition data shows when each one ran, when it idled and for how long, day by day.",
    },
    {
      title: "Power cut alerts",
      body: "If a wired tracker is disconnected from its supply, Ashwa raises an alert and keeps the last known position.",
    },
    {
      title: "Service and document reminders",
      body: "Record services and set reminders, and track insurance and fitness dates for equipment that needs them.",
    },
    {
      title: "Location history",
      body: "Every past position is kept, so you can trace how an asset travelled from one site to another.",
    },
  ],
  showcase: [
    {
      title: "A fence around every site and yard",
      body: "Assets should be where the allocation sheet says they are. With a geofence on each site, Ashwa keeps that sheet honest: it shows what is inside each zone and alerts you when something leaves that should not.",
      bullets: [
        "Entry and exit events for every asset",
        "Dwell time showing how long an asset stayed",
        "Exit alerts sent to the people you nominate",
      ],
      visual: "geofence",
    },
    {
      title: "Trackers for powered and unpowered assets",
      body: "A machine with an engine can power a wired tracker and report ignition. A trailer or container cannot, so it carries a battery-powered unit. Tell us what you need to track and we will match a device to each asset.",
      bullets: [
        "Wired trackers for excavators, loaders and gensets",
        "Battery-powered units for trailers and containers",
        "Works with GT06-protocol, JT/T 808 and Teltonika trackers",
        "Other tracker models added when you ask",
      ],
      visual: "device",
    },
    {
      title: "Upkeep recorded against each machine",
      body: "Equipment fails when servicing is forgotten. Ashwa holds service entries, fuel fills and expenses on each asset's profile and reminds you when the next service is due, so maintenance follows a schedule and its cost is known.",
      bullets: [
        "Service entries with the next service date set",
        "Diesel fills and other expenses logged per asset",
        "Maintenance cost reports for each machine",
        "Garages and vendors kept in a shared directory",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "An asset register that is current",
      body: "Location comes from the tracker, not from the last person who remembers. Allocation across sites can be checked on a map at any time.",
    },
    {
      title: "Hire charges matched to use",
      body: "Running records show how much each machine actually worked on site. You negotiate, extend or return hired equipment with evidence in hand.",
    },
    {
      title: "Faster response to unauthorised movement",
      body: "An exit alert reaches you when the asset leaves its zone, with a live position to pass on while it is still moving.",
    },
  ],
  useCases: [
    {
      title: "A road contractor across project sites",
      body: "Excavators, graders and rollers are spread over several stretches of highway work. The plant manager checks each morning which machines are at which site and which have not started for days, then reallocates the idle ones.",
    },
    {
      title: "A genset hire business",
      body: "Gensets go out to weddings, sites and events. Each carries a tracker, so the owner knows where every set is, sees when it was running and is alerted if one leaves the customer's premises.",
    },
    {
      title: "A transporter with detachable trailers",
      body: "Trailers are dropped at ports and customer yards and collected later by a different tractor unit. Battery-powered trackers show where each trailer is waiting, so none is forgotten at a yard.",
    },
  ],
  faqs: [
    {
      q: "How do you track an asset that has no engine or battery?",
      a: "With a battery-powered tracker that runs on its own cell and reports its position at intervals. It suits trailers, containers and similar assets. We help you choose the unit and reporting pattern to fit how often the asset moves.",
    },
    {
      q: "Can I see how many hours a machine worked?",
      a: "For machines with a wired tracker connected to ignition, Ashwa reports running time and idle time for each day. If you need hour-meter style reporting in a particular format, we set that up with you.",
    },
    {
      q: "Will I get an alert if equipment is moved at night?",
      a: "Yes. Put a geofence around the site and Ashwa alerts you when the asset exits it. Ignition alerts tell you when a machine is started, and a power cut alert tells you if a wired tracker is disconnected.",
    },
    {
      q: "Can vehicles and equipment be in the same account?",
      a: "Yes. Trucks, tippers, mixers, trailers and stationary equipment all sit in one account. Use vehicle groups and custom types to keep them apart on the map and in reports. Your staff see them through the same web dashboard and app.",
    },
    {
      q: "Can Ashwa monitor fuel in heavy equipment?",
      a: "Fuel entries can be logged for every machine straight away. Sensor-based fuel monitoring depends on the tracker and sensor fitted to each machine, so it is something we plan and set up with you after looking at your equipment.",
    },
  ],
  related: [
    "industries/construction",
    "products/geofencing",
    "products/vehicle-management",
    "products/alerts",
  ],
};

export default doc;
