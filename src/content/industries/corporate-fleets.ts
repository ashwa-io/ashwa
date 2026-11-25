import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "corporate-fleets",
  name: "Corporate Fleets",
  blurb: "Company cars, sales vehicles and staff transport under one admin view",
  seo: {
    title: "Corporate fleet management for company cars and cabs",
    description:
      "Corporate fleet management for Indian companies: company cars, sales fleets and staff transport with documents, branch-wise roles, distance reports, renewals.",
    keywords: [
      "corporate fleet management",
      "company car tracking",
      "sales fleet tracking",
      "employee transport tracking",
      "pool vehicle management",
      "fleet management for admin teams",
    ],
  },
  hero: {
    eyebrow: "Admin and facilities",
    title: "Corporate fleet management for the admin team's vehicles",
    lede: "Vehicles are not the company's business, but the admin team answers for them anyway: the pool car nobody can find, the sales fleet's fuel claims, the shift cab that came late. Ashwa gives admin a register that updates itself.",
    visual: "vehicles",
  },
  audience: [
    "Admin managers",
    "Facilities heads",
    "Travel desk",
    "HR managers",
    "Sales operations",
  ],
  problems: [
    {
      title: "The vehicle register is out of date",
      body: "Somewhere there is a spreadsheet of company vehicles with registration numbers, users and insurance dates. It was correct the day it was made. Since then cars have moved between branches and one policy has quietly lapsed.",
    },
    {
      title: "Kilometre claims taken on trust",
      body: "Field sales staff submit monthly claims for kilometres run on company or leased vehicles. The manager signs them because checking is impossible. Finance suspects the totals but has nothing to compare them with.",
    },
    {
      title: "Shift transport run by vendors",
      body: "Employee cabs and buses come from a transport vendor. When a pickup is missed or a cab arrives late, HR hears from the employee, the vendor denies it, and the admin team has no record of its own.",
    },
  ],
  how: [
    {
      title: "List every vehicle",
      body: "Add company cars, pool vehicles, sales two-wheelers and staff buses with their documents. We fit a GPS device in each one, wired or OBD.",
    },
    {
      title: "Mirror the organisation",
      body: "Set up branches and departments, then create roles. An admin head sees everything, a branch admin sees one location, a sales manager sees his own team.",
    },
    {
      title: "Set the rules",
      body: "Define office and plant geofences, speed limits and the alerts each role should receive. Add staff transport routes with stops and expected times.",
    },
    {
      title: "Report every month",
      body: "Send finance the distance for each vehicle, send HR the route timings, and check the renewals calendar before anything expires.",
    },
  ],
  features: [
    {
      title: "Vehicle profiles with documents",
      body: "Each company vehicle has a profile holding its registration, category, documents and history, in place of a row in a spreadsheet.",
    },
    {
      title: "Branches and departments",
      body: "Model the company as organisations and branches, and let users who work across locations switch between them.",
    },
    {
      title: "Custom roles and permissions",
      body: "Decide in detail what each role can see and do, from a security supervisor at the gate to the head of administration.",
    },
    {
      title: "Distance reports for claims",
      body: "Monthly distance for each vehicle comes from GPS, giving finance a figure to place beside the kilometres claimed.",
    },
    {
      title: "Staff transport routes",
      body: "Shift cabs and staff buses run on planned routes with ordered stops, expected and actual arrival times and deviation flags.",
    },
    {
      title: "Office and plant geofences",
      body: "Entry and exit events at offices, plants and client sites give a time record without anyone signing a logbook.",
    },
    {
      title: "Driver behaviour monitoring",
      body: "Overspeeding and driving behaviour are recorded for each driver, which supports the company's road safety policy with facts.",
    },
    {
      title: "Insurance and PUC renewals",
      body: "Renewal dates for every vehicle in every branch appear on one calendar, with reminders to the person responsible.",
    },
    {
      title: "Sign-in with Google",
      body: "Staff sign in with the organisation code or their Google account, so access belongs to a person and not to a shared password.",
    },
  ],
  showcase: [
    {
      title: "Access that follows the organisation chart",
      body: "A company's vehicles belong to branches, departments and cost centres. Ashwa is set up the same way. Each user gets a role with granular permissions, and custom dashboards show a regional head only the vehicles under that region.",
      bullets: [
        "Multiple organisations and branches in one account",
        "Custom roles with granular permissions for each job",
        "Users switching between the branches they manage",
        "Custom dashboards and workflows for each team",
      ],
      visual: "enterprise",
    },
    {
      title: "Figures finance and management can use",
      body: "At month end the admin team is asked what the fleet cost and whether it was used. Reports give distance, running and idle time, utilisation and maintenance cost for each vehicle, ready to be set against claims and budgets.",
      bullets: [
        "Distance per vehicle for the claim period",
        "Utilisation showing pool cars that rarely move",
        "Overspeed reports for the safety review",
        "Maintenance cost and cost per kilometre by vehicle",
      ],
      visual: "reports",
    },
    {
      title: "Shift transport measured against its roster",
      body: "Each staff route is entered with its pickup points and expected times. During the shift run the facilities desk sees every cab and bus against that plan. A late arrival at the office gate is on record before anyone complains.",
      bullets: [
        "Pickup points entered as ordered stops",
        "Expected and actual arrival for every stop",
        "Cab and bus allocation for each shift",
        "Deviation shown when a cab leaves its route",
      ],
      visual: "routes",
    },
  ],
  outcomes: [
    {
      title: "One register admin can trust",
      body: "Every vehicle, its user, its branch and its documents are in one place that stays current, so an audit question is answered from the screen.",
    },
    {
      title: "Claims checked against distance",
      body: "Finance compares claimed kilometres with recorded distance for the same vehicle and month. Honest claims pass quickly and odd ones are discussed.",
    },
    {
      title: "Vendor reviews with evidence",
      body: "The monthly meeting with the transport vendor uses arrival records and route timings from Ashwa, not a list of complaints and denials.",
    },
  ],
  useCases: [
    {
      title: "A pharma company's field force",
      body: "Medical representatives cover territories on company two-wheelers and cars. Each vehicle reports its daily distance. The regional manager sees his own team, and finance receives a monthly distance report to place beside the travel claims.",
    },
    {
      title: "Shift cabs for an IT campus",
      body: "A vendor runs cabs for night shifts. The facilities team asks for trackers on every cab and enters the routes. Arrival at the campus gate is logged by geofence, and late pickups are discussed with the vendor from the record.",
    },
    {
      title: "Pool cars across branch offices",
      body: "A company keeps a few pool cars at each branch for client visits. The head office sees which cars stand unused, moves one to a busier branch, and receives reminders for every insurance and PUC renewal.",
    },
  ],
  faqs: [
    {
      q: "Can we track cabs that belong to our transport vendor?",
      a: "Yes, if the vendor agrees to GPS devices on the vehicles serving your contract. Companies often make this a condition in the transport agreement. The vehicles appear in your Ashwa account, and you can give the vendor a restricted role to see them too. When the vendor swaps a cab, the device and allocation are updated.",
    },
    {
      q: "How do we handle employee privacy for company cars used personally?",
      a: "Decide your policy first and tell employees in writing what is tracked and who can see it. In Ashwa you control visibility through roles, so a vehicle is visible only to the people who need it. What is lawful and fair for your workforce is for your HR and legal teams to decide. We configure the access you choose.",
    },
    {
      q: "Can Ashwa connect to our HR, ERP or expense system?",
      a: "Yes. Ashwa provides API access and event webhooks, and we build custom integrations with customers. Common requests are pushing monthly distance into an expense system or sending route arrival events to an HR tool. Share what the other system accepts and our team will scope the integration with yours.",
    },
    {
      q: "We have offices in several cities. Can each run its own fleet?",
      a: "Yes. Each city or office is set up as a branch with its own vehicles, users and alerts. The branch admin works only within that branch. Head office users can switch between branches or see them together. If your group has separate legal entities, each can be its own organisation.",
    },
    {
      q: "Where is our fleet data hosted?",
      a: "Ashwa is hosted in India. Access is controlled by the roles and permissions you define, and users sign in with an organisation code or with Google. If your information security team has a questionnaire, send it to us and we will answer it point by point.",
    },
  ],
  related: [
    "solutions/employee-transport",
    "solutions/enterprise",
    "products/vehicle-management",
    "products/roles-and-organisations",
  ],
};

export default doc;
