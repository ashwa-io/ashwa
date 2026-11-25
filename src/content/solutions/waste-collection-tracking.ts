import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "waste-collection-tracking",
  name: "Waste Collection",
  blurb: "Show every lane was covered, with GPS and RFID household scans",
  seo: {
    title: "Solid Waste Management Vehicle Tracking with RFID",
    description:
      "Solid waste management vehicle tracking for municipal bodies and contractors. Send GPS to the state portal, record RFID household scans and see lane coverage.",
    keywords: [
      "solid waste management vehicle tracking",
      "garbage truck GPS tracking",
      "door-to-door collection monitoring",
      "RFID waste collection tracking",
      "municipal vehicle tracking system",
      "waste collection route monitoring",
    ],
  },
  hero: {
    eyebrow: "Municipal waste collection",
    title: "Solid waste management vehicle tracking, lane by lane",
    lede: "A municipal body has to show that every ward was served, and a contractor has to show it to be paid. Ashwa tracks collection vehicles, records RFID household scans as they pass and sends GPS data to the state portal.",
    visual: "coverage",
  },
  audience: ["Municipal bodies", "Sanitation contractors", "Sanitary inspectors", "Ward officers"],
  problems: [
    {
      title: "Coverage is claimed, not shown",
      body: "The contractor says every lane was covered. A resident says the vehicle has not come for days. The sanitary inspector has a log sheet and no means of checking either statement.",
    },
    {
      title: "The portal needs data every day",
      body: "The state's solid-waste portal expects GPS from every collection vehicle. Feeding it by hand, or through a tracker vendor who does not support it, becomes a daily chore.",
    },
    {
      title: "Bills are disputed at month end",
      body: "Payment depends on trips made and households served. Without an agreed record, the contractor and the municipal body spend the first week of each month arguing about the last one.",
    },
  ],
  how: [
    {
      title: "Fit the collection vehicles",
      body: "Collection vehicles get GPS trackers. Where households have RFID tags, scans are recorded as the vehicle passes each tagged house.",
    },
    {
      title: "Map areas and routes",
      body: "Define wards and areas, and the route each vehicle should follow through them. Assign vehicles and drivers to their beats.",
    },
    {
      title: "Connect the state portal",
      body: "We configure the feed so that GPS from every collection vehicle is sent to your state's solid-waste portal in the form it requires.",
    },
    {
      title: "Check the coverage dashboard",
      body: "Each day the coverage dashboard shows which areas and routes were served and which households were scanned, vehicle by vehicle and ward by ward.",
    },
  ],
  features: [
    {
      title: "Coverage dashboard",
      body: "A map and summary of areas served, routes run and households scanned, for the day or any past date.",
    },
    {
      title: "State portal feed",
      body: "Vehicle GPS is sent on to the state solid-waste portal by the system, with no one uploading files by hand.",
    },
    {
      title: "RFID household scans",
      body: "Each scan is recorded with its time and the vehicle that made it, as the truck passes the house.",
    },
    {
      title: "Areas and routes",
      body: "Wards and collection areas are defined on the map with the route each vehicle is meant to follow.",
    },
    {
      title: "Live vehicle status",
      body: "Supervisors see which tippers and compactors are moving, stopped, idle or offline during the collection shift.",
    },
    {
      title: "Route playback",
      body: "Replay any vehicle's day to see which lanes it entered, where it halted and when it reached the dump yard.",
    },
    {
      title: "Dump yard geofences",
      body: "Zones at transfer stations and processing sites record each entry and exit, giving a count of trips made.",
    },
    {
      title: "Roles for officials and contractors",
      body: "Give ward officers, inspectors and the contractor's supervisors their own logins, each with the permissions their job calls for.",
    },
  ],
  showcase: [
    {
      title: "GPS data delivered to the state portal",
      body: "Where a state asks urban local bodies to report collection vehicle movement to its portal, Ashwa sends the GPS data from your vehicles there as part of normal operation, so reporting does not depend on a clerk remembering to do it.",
      bullets: [
        "GPS from each vehicle forwarded to the portal",
        "Set up with you for your state's format",
        "Data also available through API and webhooks",
      ],
      visual: "api",
    },
    {
      title: "Routes drawn through every ward and lane",
      body: "Door-to-door collection works when each vehicle has a defined beat. Areas and routes in Ashwa describe that beat, and playback of the actual path shows whether the vehicle followed it or skipped the inner lanes.",
      bullets: [
        "Areas and wards defined on the map",
        "A planned route for each collection vehicle",
        "Actual path compared with the planned route",
        "Deviation and skipped stretches visible in playback",
      ],
      visual: "routes",
    },
    {
      title: "Records that support the monthly bill",
      body: "Distance run, trips to the dump yard, households scanned and days worked are all held per vehicle. Contractor and municipal body look at the same figures, which shortens the argument over deductions and payments.",
      bullets: [
        "Distance and running hours of each tipper",
        "Entries at the dump yard counted by geofence",
        "Household scan records by date and vehicle",
        "Stoppage and idle time during collection hours",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Coverage shown with evidence",
      body: "GPS paths and household scans show which lanes and houses were served. Complaints are checked against a record, not a log sheet.",
    },
    {
      title: "Portal reporting without manual work",
      body: "Data flows to the state portal from the vehicles. Staff time goes to supervision in the field, not to data entry.",
    },
    {
      title: "Fewer payment disputes",
      body: "Both sides work from the same trip and coverage records, so the monthly bill is settled on facts they can each inspect.",
    },
  ],
  useCases: [
    {
      title: "A municipal council monitoring a contractor",
      body: "The council has outsourced door-to-door collection. The sanitary inspector opens the coverage dashboard each afternoon, sees which wards are incomplete and raises it with the contractor before the day's vehicles are parked.",
    },
    {
      title: "A contractor running several towns",
      body: "A sanitation contractor holds contracts in more than one town. Each town is a branch with its own vehicles, areas and supervisors, and the head office compares coverage across all of them.",
    },
    {
      title: "A ward with RFID-tagged households",
      body: "Houses in a ward carry RFID tags. As the collection vehicle passes, scans are recorded against each house, and the ward officer can look up a household when a resident complains of a missed pickup.",
    },
  ],
  faqs: [
    {
      q: "Can Ashwa send vehicle GPS to our state's solid-waste portal?",
      a: "Yes. Sending vehicle GPS to state solid-waste portals is part of the waste collection module. Each state has its own portal and format, so we configure and test the feed with you during setup. Tell us which state and portal you report to.",
    },
    {
      q: "How are RFID household scans recorded?",
      a: "Households carry RFID tags. As the collection vehicle passes, the scan is recorded in Ashwa with its time and vehicle. The coverage dashboard then shows scanned and unscanned households for each area and route. We plan tags and readers with you.",
    },
    {
      q: "What if the houses in our town do not have RFID tags?",
      a: "You can start with GPS alone. Vehicle paths, areas, routes and dump yard geofences already show which lanes were covered and how many trips were made. RFID scanning can be added later for wards where household-level proof is needed.",
    },
    {
      q: "Does using Ashwa satisfy the monitoring conditions in our tender?",
      a: "Tenders and state guidelines differ, and they change. Ashwa provides GPS tracking, portal data feeds, RFID scan records and coverage reports, but we do not claim that it makes any body or contractor compliant. Share the tender conditions and we will tell you plainly what we can and cannot cover.",
    },
    {
      q: "Can the municipal body and the contractor both log in?",
      a: "Yes. Both can have users in the same organisation with different roles, or each can have its own. Custom roles decide who can view dashboards, who can edit routes and who can only read reports.",
    },
  ],
  related: [
    "products/route-management",
    "products/reports-analytics",
    "products/geofencing",
    "solutions/enterprise",
  ],
};

export default doc;
