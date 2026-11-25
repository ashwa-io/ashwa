import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "construction",
  name: "Construction",
  blurb: "Tippers, mixers and machines across sites, owned or hired",
  seo: {
    title: "Construction fleet and equipment tracking for sites",
    description:
      "Construction fleet and equipment tracking in India for tippers, transit mixers and excavators: engine hours, site geofences, trip counts, diesel and servicing.",
    keywords: [
      "construction fleet and equipment tracking",
      "tipper GPS tracking",
      "transit mixer tracking",
      "excavator tracking India",
      "construction equipment engine hours",
      "hired equipment tracking",
    ],
  },
  hero: {
    eyebrow: "Sites and machinery",
    title: "Construction fleet and equipment tracking across every site",
    lede: "A contractor's machines are scattered over sites that are hours apart. Tippers run between quarry and fill, mixers race the setting time, and a hired excavator bills by the hour whether it digs or not. Ashwa shows what each one did today.",
    visual: "assets",
  },
  audience: [
    "Project managers",
    "Plant managers",
    "Site engineers",
    "Contractors",
    "Equipment hirers",
  ],
  problems: [
    {
      title: "Hired machines billed by the hour",
      body: "The hire bill for an excavator lists hours for the month. The site engineer signed the log sheets without watching the machine. Nobody can say how many of those hours the engine ran, or how many it worked.",
    },
    {
      title: "Trips counted on a slip",
      body: "Tipper trips from the quarry are tallied by a supervisor with a notebook at the gate. Payment to the transporter depends on that count. A trip added here and there is hard to catch and expensive over a project.",
    },
    {
      title: "Diesel issued, not accounted",
      body: "Diesel goes from the site bowser into machines and tippers every day. The store records what went out. Whether it matches the work done by each machine is a question the head office asks and the site cannot answer.",
    },
  ],
  how: [
    {
      title: "Fit devices on plant",
      body: "We install wired trackers on tippers, transit mixers and self-propelled machines, connected to the ignition. Battery-powered units go on equipment that has no power of its own.",
    },
    {
      title: "Map sites and sources",
      body: "Draw geofences around each site, the quarry, the batching plant, the dump yard and the stockyard. Group the equipment by project.",
    },
    {
      title: "Record the working day",
      body: "Ashwa logs ignition on and off, running time, idle time and every entry to and exit from a zone, for each machine and each vehicle.",
    },
    {
      title: "Reconcile at month end",
      body: "Compare engine running time with the hire bill, zone visits with trip slips, and fuel entries with hours worked, one project at a time.",
    },
  ],
  features: [
    {
      title: "Engine running hours",
      body: "Ignition and running time are recorded for every machine, giving you an independent figure to place beside the operator's log sheet.",
    },
    {
      title: "Idle time by machine",
      body: "See how long an excavator or loader stood with the engine on: hours you pay diesel for and get no work from.",
    },
    {
      title: "Site geofences",
      body: "A zone around each site shows which machines and vehicles are inside it now, and when each one arrived or left.",
    },
    {
      title: "Trip counts from zone visits",
      body: "Each tipper's entries to the quarry and the fill area are logged with times, so the day's trips can be checked against the gate slips.",
    },
    {
      title: "Special purpose vehicle types",
      body: "Register tippers, mixers, excavators, cranes and pavers as special purpose vehicles or your own custom types, each with a profile.",
    },
    {
      title: "Fuel entries per machine",
      body: "Enter every diesel issue against the machine that received it, and read it beside that machine's running hours.",
    },
    {
      title: "Service reminders",
      body: "Log each service and be reminded when the next is due, so a machine is not run past its oil change on a remote site.",
    },
    {
      title: "After-hours movement alerts",
      body: "An ignition alert or a geofence exit alert tells you when a machine is started or leaves the site at night.",
    },
    {
      title: "Project-wise access",
      body: "Give each project manager the equipment on his own site, and the plant and machinery head the whole company.",
    },
  ],
  showcase: [
    {
      title: "Count tipper trips without a gate clerk",
      body: "Put one geofence at the loading point and one at the unloading point. Every tipper that enters and leaves is logged with the time. At the end of the shift you have a list of trips per vehicle to set against the slips.",
      bullets: [
        "Entry and exit events at quarry and fill",
        "Dwell time showing queues at the loading point",
        "A day's zone visits listed for each tipper",
        "Route playback when a single trip is disputed",
      ],
      visual: "geofence",
    },
    {
      title: "Check hire bills against engine hours",
      body: "When the hire bill arrives, open the report for that machine and month. It shows the days the engine ran, for how long, and how much of that was idle. You pay, or you question, with a figure of your own.",
      bullets: [
        "Running time and idle time for each machine",
        "Utilisation compared across sites and projects",
        "Days on which a machine did not start",
        "Maintenance cost for owned machines in one report",
      ],
      visual: "reports",
    },
    {
      title: "Diesel and servicing on remote sites",
      body: "A site far from the head office runs on trust. With fuel entries, service entries and odometer readings recorded against each machine and tipper, the plant department sees consumption and upkeep without waiting for a monthly statement.",
      bullets: [
        "Diesel and AdBlue entries for each tipper and machine",
        "Service entries with a reminder for the next one",
        "Insurance, fitness and permit dates for road vehicles",
        "Vendor records for the pump, the garage and the tyre shop",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "Hire bills you can verify",
      body: "Each bill for hired plant is checked against recorded engine time before it is passed. Differences are raised with the hirer while the month is still fresh.",
    },
    {
      title: "Trip payments backed by records",
      body: "Transporters are paid on trips that appear both on the slip and in the zone log. Both sides can look at the same list.",
    },
    {
      title: "Idle plant shows up early",
      body: "A machine standing for days on one site is visible to the head office, which can shift it to a project that is waiting for one.",
    },
  ],
  useCases: [
    {
      title: "A road contractor's earthwork tippers",
      body: "A highway package needs earth hauled from borrow areas to the embankment by a hired tipper fleet. Geofences at both ends log each round. The contractor settles the transporter's bill from the zone log and the slips together.",
    },
    {
      title: "An RMC plant's transit mixers",
      body: "A ready-mix plant dispatches mixers to pours across a city. Concrete has limited time before it stiffens. The dispatcher sees each mixer's position and its waiting time at site, and decides whether to hold the next batch.",
    },
    {
      title: "A builder with hired excavators",
      body: "A building contractor hires excavators and loaders for foundation work on several plots. With the hirer's consent, trackers go on each machine. The contractor reads engine time per plot and releases a machine that has stood idle.",
    },
  ],
  faqs: [
    {
      q: "How does Ashwa measure engine hours on an excavator?",
      a: "The tracker is wired to the machine's ignition, so Ashwa records when the engine is switched on and off and totals the running and idle time. This is ignition-based time. If you need readings from the machine's own hour meter or from other sensors, we set that up with you after checking the model.",
    },
    {
      q: "Can we fit trackers on equipment hired from another company?",
      a: "Yes, with the owner's consent. It is simplest to write tracking into the hire agreement. A wired tracker gives ignition and running time. Where the owner will not allow wiring, a battery-powered unit gives location only. Many hirers accept tracking because it also protects their machine. We advise on the option that suits each case.",
    },
    {
      q: "Many of our sites have poor mobile network. Will tracking still work?",
      a: "Trackers send data over the mobile network. Where coverage is weak, the map shows each machine's last update time, so you know how old the position is. Tell us where your sites are before you buy, and we will advise on devices and SIMs for those areas.",
    },
    {
      q: "Can it track things without an engine, like a trailer-mounted generator or a site cabin?",
      a: "Yes. Battery-powered trackers are made for equipment with no wiring to connect to. They report location, which is enough to know which site an asset is on and whether it has moved. Asset and equipment tracking of this kind is configured with you, based on what you need to find.",
    },
    {
      q: "Can each project see only its own machines?",
      a: "Yes. Projects can be set up as branches, and roles decide what each user sees. A site engineer sees one site. A project manager sees a project. The plant and machinery department sees everything. When a machine is shifted to another project, you move it in Ashwa and its history goes with it.",
    },
  ],
  related: [
    "solutions/asset-tracking",
    "products/geofencing",
    "products/maintenance",
    "products/reports-analytics",
  ],
};

export default doc;
