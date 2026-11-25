import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "maintenance",
  name: "Maintenance",
  blurb: "Fuel, service and document renewals, with a calendar of what is due",
  seo: {
    title: "Fleet maintenance software for fuel and renewals",
    description:
      "Fleet maintenance software for fuel entries, service reminders, odometer, expenses and renewals of insurance, PUC, fitness and permits, on one calendar.",
    keywords: [
      "fleet maintenance software",
      "vehicle service reminder",
      "fuel log for fleet",
      "vehicle document renewal reminder",
      "insurance and PUC expiry tracking",
      "vehicle maintenance management India",
    ],
  },
  hero: {
    eyebrow: "Upkeep and paperwork",
    title: "Fleet maintenance software for fuel, service and renewals",
    lede: "Log every fill of diesel, petrol, CNG or AdBlue, every service and every expense against the vehicle. Keep insurance, PUC, fitness, RC, road tax and permit dates in one calendar that tells you what falls due next.",
    visual: "maintenance",
  },
  audience: ["Fleet owners", "Workshop supervisors", "Accountants", "Transport managers"],
  problems: [
    {
      title: "The permit that lapsed",
      body: "A truck is stopped at a check post and the national permit expired last week. The renewal date was on a paper in the glovebox. The fine and the lost day cost more than the renewal would have.",
    },
    {
      title: "Diesel bills nobody can explain",
      body: "The pump sends a monthly statement with one large figure. Which vehicle took how much, on which date and at what odometer reading is spread across slips that half the drivers have lost.",
    },
    {
      title: "Service happens after the breakdown",
      body: "Oil changes and greasing are remembered when the mechanic happens to be free or when something starts to make noise. The vehicle that runs hardest is the one that gets serviced last.",
    },
  ],
  how: [
    {
      title: "Enter documents once",
      body: "Add the expiry dates for insurance, PUC, fitness, RC, road tax, state permit and national permit on each vehicle. The calendar picks them up from there.",
    },
    {
      title: "Log fuel and service",
      body: "Record each fuel fill with quantity, cost and odometer, and each service with what was done and what it cost. Staff can enter it from the office or the app.",
    },
    {
      title: "Set reminders",
      body: "Set service reminders for each vehicle. Ashwa raises the reminder when the service is due, and renewal reminders ahead of each document date.",
    },
    {
      title: "Work from the calendar",
      body: "Open the calendar on Monday and see every renewal and service falling due. Plan the workshop slot and the agent's visit before the date, not after.",
    },
  ],
  features: [
    {
      title: "Fuel entries",
      body: "Record fills of diesel, petrol, CNG and AdBlue with quantity, amount and the odometer reading at the pump.",
    },
    {
      title: "Service entries",
      body: "Keep a dated record of each service and repair, with the work carried out, the parts changed and the bill amount.",
    },
    {
      title: "Service reminders",
      body: "Set the next service for a vehicle and receive a reminder when it comes due, so servicing follows a plan.",
    },
    {
      title: "Odometer log",
      body: "Odometer readings are stored with fuel and service entries, building a running history of how far each vehicle has gone.",
    },
    {
      title: "Expense records",
      body: "Tyres, batteries, body work and other spending are entered against the vehicle, so its full running cost is in one place.",
    },
    {
      title: "Document renewals",
      body: "Track insurance, PUC, fitness, RC, road tax, state permit and national permit dates for every vehicle in the fleet.",
    },
    {
      title: "Due calendar",
      body: "One calendar shows all renewals and services by date, across the fleet, with overdue items easy to pick out.",
    },
    {
      title: "Vendor directory",
      body: "Save your fuel pumps, garages, tyre shops and PUC centres as vendors and pick them when making an entry.",
    },
  ],
  showcase: [
    {
      title: "Every paper for a vehicle, with its date",
      body: "Open a vehicle and its documents are listed with their expiry dates. An owner with trucks under different state permits no longer depends on a clerk's memory, and a new staff member can see the position of the whole fleet on day one.",
      bullets: [
        "Insurance, PUC, fitness, RC and road tax dates",
        "State permit and national permit tracked separately",
        "Documents kept on the vehicle profile with its history",
      ],
      visual: "vehicles",
    },
    {
      title: "Reminders before the date, not after",
      body: "Renewal and service reminders arrive as notifications in the app and on the phone, ahead of the due date. The person who has to arrange the agent, the inspection or the workshop slot hears about it while there is still time.",
      bullets: [
        "Renewal due and service due notifications",
        "Delivered in-app and as push notifications",
        "Shareable with the person who handles the paperwork",
      ],
      visual: "alerts",
    },
    {
      title: "What each vehicle costs to keep running",
      body: "Fuel, service and other expenses add up against the vehicle as they are entered. Set that total beside the distance it ran and you have a running cost that can be compared between an old truck and a new one.",
      bullets: [
        "Fuel spend and service spend for each vehicle",
        "Maintenance cost reports in Reports and Analytics",
        "Cost per kilometre when distance is tracked by GPS",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "No expired papers on the road",
      body: "Renewal dates are watched by the calendar instead of by memory, so a vehicle is not sent out with a lapsed document by oversight.",
    },
    {
      title: "Fuel spend traced to vehicles",
      body: "Each fill is recorded against a vehicle with its odometer reading, so the monthly pump statement can be checked line by line.",
    },
    {
      title: "Servicing done on schedule",
      body: "Reminders bring each vehicle to the workshop when its service is due, which keeps small jobs from turning into roadside repairs.",
    },
  ],
  useCases: [
    {
      title: "Fuel entries against tracked distance",
      body: "A tipper fleet logs diesel in Maintenance and takes distance from History and Playback. The supervisor sets litres filled against kilometres run for each vehicle, and asks questions where one tipper drinks far more than its sisters on the same haul.",
    },
    {
      title: "Garage visit planned around trips",
      body: "A service reminder comes up for a container truck. The dispatcher checks the trip board in Trip Management, sees the truck is free after its current delivery, and books the garage for that gap instead of pulling it off a paying load.",
    },
    {
      title: "Branch-wise renewal duty",
      body: "A company with depots in several cities gives each branch clerk a role limited to their own vehicles through Roles and Organisations. Each clerk sees only their branch calendar, and the head office sees every renewal across all depots.",
    },
  ],
  faqs: [
    {
      q: "Which vehicle documents can I track for renewal?",
      a: "Insurance, PUC, fitness certificate, RC, road tax, state permit and national permit. Each has its own expiry date on the vehicle, and all of them appear in the calendar and raise a renewal reminder before they fall due.",
    },
    {
      q: "Does Ashwa read fuel level from the tank automatically?",
      a: "The Maintenance module works from fuel entries that your staff record: quantity, amount and odometer at each fill. Fuel sensors and efficiency monitoring are a separate set-up that depends on the vehicle and device, and we scope that with you when you ask for it.",
    },
    {
      q: "How do service reminders work?",
      a: "You record a service and set when the next one is due for that vehicle. When it comes due, Ashwa raises a reminder in the app and as a push notification, and the service shows on the calendar alongside document renewals.",
    },
    {
      q: "Will using this keep my fleet legally compliant?",
      a: "It keeps your dates and reminders in order. Renewing on time, and knowing which documents your vehicles need, remains your responsibility. Rules on permits, fitness and tax differ by state and change, so check the current rule with your RTO or agent.",
    },
    {
      q: "Can drivers or pump staff make fuel entries?",
      a: "Entries are made by users with permission to do so. Many fleets let a supervisor or a clerk enter fills from the pump slip, and some allow staff in the field to enter them from the mobile app. You decide who can add or edit entries through roles.",
    },
  ],
  related: [
    "products/vehicle-management",
    "products/alerts",
    "products/reports-analytics",
    "solutions/fleet-management-software",
  ],
};

export default doc;
