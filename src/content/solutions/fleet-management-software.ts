import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "fleet-management-software",
  name: "Fleet Management",
  blurb: "Trips, costs, maintenance, renewals and drivers in one place",
  seo: {
    title: "Fleet Management Software for Indian Fleet Owners",
    description:
      "Fleet management software that runs the business side of your fleet: trips, expenses, fuel, service, document renewals and drivers, alongside live GPS tracking.",
    keywords: [
      "fleet management software",
      "fleet management system in India",
      "fleet maintenance software",
      "vehicle document renewal reminders",
      "trip expense management",
      "fleet cost per kilometre",
    ],
  },
  hero: {
    eyebrow: "Fleet management software",
    title: "Fleet management software for the business behind the map",
    lede: "Knowing where the vehicles are is the start. Ashwa also keeps the trips, the money, the diesel, the service schedule, the permits and the driver accounts, so the fleet is run from records and not from memory.",
    visual: "trips",
  },
  audience: ["Fleet owners", "Operations heads", "Accounts teams", "Transport contractors"],
  problems: [
    {
      title: "The fleet lives in notebooks",
      body: "Trips are in a diary, diesel slips in a drawer, driver advances in someone's head. When you want to know what a vehicle earned last month, it takes an evening and a round of phone calls.",
    },
    {
      title: "Papers lapse without warning",
      body: "Insurance, PUC, fitness, road tax and permits all expire on different dates. One missed renewal is found at a checkpost, with the vehicle loaded and the driver waiting for instructions.",
    },
    {
      title: "Profit is a guess",
      body: "You know the freight you billed. You are less sure about fuel, tolls, repairs and what is still due from the customer. Without trip-wise costs, a busy month and a profitable month look the same.",
    },
  ],
  how: [
    {
      title: "Add vehicles and drivers",
      body: "Create a profile for each vehicle with its documents and odometer, and for each driver. Assign drivers to vehicles so every record has a name against it.",
    },
    {
      title: "Run work as trips",
      body: "Plan a trip with its customer, load and deliver stops. Move it through started, reached, delivered and closed, and record expenses and payments against it.",
    },
    {
      title: "Log fuel and service",
      body: "Enter diesel, petrol, CNG or AdBlue fills and each service visit. Set reminders so the next service and every renewal appear on the calendar.",
    },
    {
      title: "Read the reports",
      body: "Check trip profit, cost per kilometre, maintenance cost and vehicle utilisation. Decide which vehicles and customers are worth more of your attention.",
    },
  ],
  features: [
    {
      title: "Trip board",
      body: "See every trip by stage, from planned to closed. A free-vehicles view shows what is available for the next load.",
    },
    {
      title: "Trip expenses and dues",
      body: "Record fuel cost, other expenses and payments on each trip. What the customer still owes stays visible until it is settled.",
    },
    {
      title: "Fuel entries",
      body: "Log diesel, petrol, CNG and AdBlue fills with odometer readings, and see what each vehicle consumes over time.",
    },
    {
      title: "Service reminders",
      body: "Record each service and set the next one. Reminders arrive before the due date, not after a breakdown.",
    },
    {
      title: "Document renewals",
      body: "Track insurance, PUC, fitness, RC, road tax, state permit and national permit for every vehicle on one calendar.",
    },
    {
      title: "Driver cash ledger",
      body: "Advances given and settlements made are entered against each driver, so the balance is never a matter of argument.",
    },
    {
      title: "Vendor directory",
      body: "Keep your fuel pumps, garages, tyre shops and PUC centres in one list, ready when an expense is recorded.",
    },
    {
      title: "Cost and profit reports",
      body: "Trip profit and cost, cost per kilometre and maintenance cost per vehicle, built from the entries your team already makes.",
    },
    {
      title: "Live tracking underneath",
      body: "Every record sits on top of live GPS data: distance, running time, idle time and stoppages come from the device, not a logbook.",
    },
  ],
  showcase: [
    {
      title: "One calendar for everything that falls due",
      body: "Service dates and document expiries are scattered across files and glove boxes. Ashwa puts them on a single calendar and reminds you ahead of time, so renewals are planned work and not an emergency at the roadside.",
      bullets: [
        "Insurance, PUC, fitness, RC, road tax and permits tracked",
        "Service entries with reminders for the next visit",
        "Fuel and expense history on each vehicle profile",
        "Renewal and service alerts sent to the people responsible",
      ],
      visual: "maintenance",
    },
    {
      title: "Driver accounts without the arguments",
      body: "Each driver has a profile, an assigned vehicle and a cash ledger. Advances for the road and settlements at the end of a trip are entered as they happen, and both sides can see where the balance stands.",
      bullets: [
        "Driver profiles linked to the vehicles they run",
        "Cash ledger for advances and settlements",
        "Driving behaviour and safety monitoring per driver",
        "A driver app for those on the road",
      ],
      visual: "drivers",
    },
    {
      title: "Reports that answer the owner's questions",
      body: "At month end the questions are simple. Which vehicles sat idle. Which trips made money. What maintenance is costing. Ashwa answers them from data the fleet has already produced, without anyone compiling a spreadsheet.",
      bullets: [
        "Trip profit and cost, trip by trip",
        "Cost per kilometre for every vehicle",
        "Vehicle utilisation, running time and idle time",
        "Maintenance cost over any period you choose",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Renewals handled ahead of time",
      body: "Expiry dates surface on the calendar and in alerts before they pass. Vehicles stay on the road with their papers in order.",
    },
    {
      title: "Money accounted trip by trip",
      body: "Expenses, fuel and payments are tied to the trip that caused them. Dues are chased from a list, not from recollection.",
    },
    {
      title: "Decisions made from records",
      body: "Utilisation and cost reports show which vehicles earn their keep. Buying, selling and redeploying a vehicle become calculations instead of hunches.",
    },
  ],
  useCases: [
    {
      title: "A transport contractor with client contracts",
      body: "A contractor runs vehicles for a few factories. Each dispatch is a trip with its customer and stops. At month end the trip list supports the bill, and the dues column shows who has not paid.",
    },
    {
      title: "An owner with a growing fleet",
      body: "What worked with a handful of vehicles stops working as more are added. The owner moves the diaries into Ashwa, gives the accountant and the supervisor their own staff accounts, and reviews utilisation every week.",
    },
    {
      title: "A fleet with mixed fuel types",
      body: "Diesel trucks, CNG vans and petrol cars sit in one fleet. Fuel entries are logged by type, AdBlue included, and cost per kilometre is compared across vehicles doing similar work.",
    },
  ],
  faqs: [
    {
      q: "How is fleet management software different from GPS tracking?",
      a: "GPS tracking tells you where a vehicle is and where it has been. Fleet management software adds the business records: trips, expenses, fuel, service, renewals and driver accounts. In Ashwa both sit in the same system, so reports combine distance from the device with costs your team enters.",
    },
    {
      q: "Can I start with tracking and add modules later?",
      a: "Yes. Ashwa is modular. Many fleets begin with live tracking and add trips, maintenance or driver management when they are ready. Each add-on module is billed on its own, so you are not paying for parts you do not use.",
    },
    {
      q: "Which vehicle documents can Ashwa remind me about?",
      a: "Insurance, PUC, fitness certificate, RC, road tax, state permit and national permit. Each has its expiry date on the vehicle profile and appears on the renewals calendar. Reminders reach you in the app and as push notifications before the date.",
    },
    {
      q: "Does it work for a small fleet?",
      a: "Yes. The same modules work for a handful of vehicles or several branches. A small fleet usually starts with tracking, renewals and fuel entries, which take little time to maintain and replace the diary most owners already keep.",
    },
    {
      q: "Who in my office can use it?",
      a: "You create staff accounts for the people who need access, such as a supervisor, an accountant or a dispatcher. Roles decide what each person can see and change, so the accountant can enter payments without editing vehicles.",
    },
  ],
  related: [
    "products/trip-management",
    "products/maintenance",
    "products/driver-management",
    "products/reports-analytics",
  ],
};

export default doc;
