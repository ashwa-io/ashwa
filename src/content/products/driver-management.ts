import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "driver-management",
  name: "Driver Management",
  blurb: "Driver profiles, vehicle assignment, cash ledger and safety",
  seo: {
    title: "Driver management system with cash ledger and safety",
    description:
      "A driver management system for fleets: driver profiles, vehicle assignment, a cash ledger for advances and settlements, and driver behaviour monitoring.",
    keywords: [
      "driver management system",
      "driver cash ledger",
      "driver advance and settlement",
      "driver behaviour monitoring",
      "driver vehicle assignment",
      "fleet driver management India",
    ],
  },
  hero: {
    eyebrow: "People behind the wheel",
    title: "A driver management system with a cash ledger",
    lede: "Keep each driver's profile, the vehicle he is assigned to, the cash he has been given and how he drives. Advances and settlements stop being an argument over a diary, and risky driving is seen early.",
    visual: "drivers",
  },
  audience: ["Fleet owners", "Fleet supervisors", "Accountants", "HR and admin"],
  problems: [
    {
      title: "Advances tracked in a diary",
      body: "A driver takes cash before a long run, more on the way, and returns with slips. The settlement is done from a diary and memory, and both sides leave the table feeling short-changed.",
    },
    {
      title: "Nobody knows who drove",
      body: "A challan arrives for a vehicle on a date three weeks back. Drivers swap vehicles often, the roster was verbal, and finding out who was at the wheel takes a round of phone calls.",
    },
    {
      title: "Rash driving found too late",
      body: "The owner hears about a driver's speeding from a stranger's complaint, or after an accident. There was no regular way to see how each person treats the vehicle and the road.",
    },
  ],
  how: [
    {
      title: "Create driver profiles",
      body: "Add each driver with contact details and the particulars you need on file. The profile becomes the single record that assignments and cash entries attach to.",
    },
    {
      title: "Assign drivers to vehicles",
      body: "Link a driver to the vehicle he is running. When he moves to another vehicle, change the assignment, and the record of who drove what stays intact.",
    },
    {
      title: "Keep the cash ledger",
      body: "Enter every advance when it is paid and every settlement when accounts are squared. The ledger shows the running balance for each driver.",
    },
    {
      title: "Review driving behaviour",
      body: "Overspeed and idling events from the tracker are read against the assigned driver, giving the supervisor a factual basis for a conversation.",
    },
  ],
  features: [
    {
      title: "Driver profiles",
      body: "A record for each driver, with contact details and the vehicle currently assigned, searchable from the driver roster.",
    },
    {
      title: "Vehicle assignment",
      body: "Assign and reassign drivers to vehicles, so every vehicle shows who is responsible for it today.",
    },
    {
      title: "Driver cash ledger",
      body: "A ledger for each driver that lists advances given and settlements made, with the balance worked out after every entry.",
    },
    {
      title: "Behaviour monitoring",
      body: "Speeding and long idling are picked up from GPS data and tied to the driver, not just to the registration number.",
    },
    {
      title: "Safety review",
      body: "Look at a driver's events over a period to see whether a warning changed anything, or whether the same pattern continues.",
    },
    {
      title: "Staff accounts",
      body: "Give supervisors, clerks and other office staff their own sign-in, separate from the driver records they manage.",
    },
    {
      title: "Approved vendor list",
      body: "Keep the fuel pumps, garages, tyre shops and PUC centres your drivers are meant to use, with their details in one list.",
    },
  ],
  showcase: [
    {
      title: "Advances and settlements in one ledger",
      body: "Each rupee handed to a driver is entered when it is given. On return, the trip's expenses are set against the advance and the difference is settled. Both the owner and the driver can be shown the same list of entries.",
      bullets: [
        "Advance entries dated and recorded against the driver",
        "Settlement entries that bring the balance forward",
        "A running balance visible for every driver",
      ],
      visual: "trips",
    },
    {
      title: "Driving behaviour shown as events",
      body: "Safety monitoring starts with facts. Overspeed and excessive idling raise events with a time and a place, and because the vehicle is assigned to a driver, the event lands on a person the supervisor can speak to that evening.",
      bullets: [
        "Overspeed events with time and location",
        "Idling events for engines left running at a halt",
        "Events grouped by the driver assigned to the vehicle",
      ],
      visual: "alerts",
    },
    {
      title: "An app for the driver's side",
      body: "Drivers have their own Ashwa app, separate from the one owners and staff use. It keeps the driver connected to the work assigned to him, so the office is not passing every detail by voice call and chat message.",
      bullets: [
        "A dedicated app for drivers on their own phone",
        "Sign-in tied to the driver's organisation",
        "Office and driver working from the same record",
      ],
      visual: "mobile-app",
    },
  ],
  outcomes: [
    {
      title: "Settlements without quarrels",
      body: "The ledger is built entry by entry as cash moves, so the final figure is a sum both sides have already seen.",
    },
    {
      title: "Accountability for each vehicle",
      body: "Assignments make it plain who had which vehicle on which day, which matters for challans, damage claims and praise alike.",
    },
    {
      title: "Earlier talks about safety",
      body: "Supervisors see repeated speeding as it builds up, and can coach or caution a driver before it ends in a claim.",
    },
  ],
  useCases: [
    {
      title: "Settling a long-haul run",
      body: "A driver returns from a multi-day run booked in Trip Management. The accountant opens the trip's expenses and the driver cash ledger together, sets tolls and food allowance against the advance, and records the settlement before the next dispatch.",
    },
    {
      title: "Speeding on a school run",
      body: "A school using School Transport receives an overspeed alert for a bus on the morning route. The transport in-charge sees which driver is assigned, checks his earlier events, and speaks to him before the afternoon drop.",
    },
    {
      title: "Rostering for rental duties",
      body: "A car rental operator assigns chauffeurs to bookings in Rental Management. Driver profiles show who is already committed that day, so a wedding duty and an airport transfer are not given to the same person.",
    },
  ],
  faqs: [
    {
      q: "What is the driver cash ledger used for?",
      a: "It records money moving between the business and a driver: advances paid before or during a run, and settlements when accounts are squared. Each driver has a separate ledger with a running balance, so you know at any time who holds company cash and how much.",
    },
    {
      q: "How does Ashwa monitor driver behaviour?",
      a: "It uses data from the GPS device on the vehicle, mainly speed and idling. When a vehicle crosses the speed limit you set, or idles for long, an event is created. Because drivers are assigned to vehicles, those events are read as that driver's record.",
    },
    {
      q: "What happens when drivers change vehicles often?",
      a: "Update the assignment when a driver moves. The earlier assignment stays in the history, so you can still find out who was on a vehicle on a past date. Fleets with shift changes usually make this part of the handover.",
    },
    {
      q: "Is this a payroll system for drivers?",
      a: "No. The cash ledger tracks advances and settlements, which is the part of driver money that causes disputes in transport. Salary, statutory deductions and payslips belong in your payroll or accounting software.",
    },
    {
      q: "Can staff other than drivers have accounts?",
      a: "Yes. Staff accounts are for office users such as supervisors, dispatchers and accountants. What each account can see and change is set by its role, which is managed under Roles and Organisations.",
    },
  ],
  related: [
    "products/trip-management",
    "products/alerts",
    "products/mobile-app",
    "industries/trucking",
  ],
};

export default doc;
