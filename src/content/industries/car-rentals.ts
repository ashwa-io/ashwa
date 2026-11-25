import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "car-rentals",
  name: "Car Rentals",
  blurb: "Bookings, handovers and vehicle whereabouts for rental operators",
  seo: {
    title: "Car rental fleet tracking for self-drive and cab fleets",
    description:
      "Car rental fleet tracking in India for self-drive, chauffeur-driven and bike rental operators: bookings calendar, live location, zone alerts and renewals.",
    keywords: [
      "car rental fleet tracking",
      "self-drive car GPS tracking",
      "rental car tracking India",
      "bike rental tracking",
      "chauffeur car rental software",
      "rental bookings calendar",
    ],
  },
  hero: {
    eyebrow: "Car and bike rentals",
    title: "Car rental fleet tracking for every booking you hand over",
    lede: "You hand the keys to a stranger against a deposit and a photocopy of a licence. For the next three days the car is out of sight. Ashwa keeps the booking, the vehicle and its location together until it is back in your yard.",
    visual: "rental",
  },
  audience: [
    "Rental owners",
    "Fleet supervisors",
    "Booking executives",
    "Travel desk managers",
  ],
  problems: [
    {
      title: "The car is out of sight",
      body: "A self-drive customer said a weekend in the hills and the car is two states away. You learn of it from a toll message or a challan weeks later. By then the kilometres are run and the deposit does not cover them.",
    },
    {
      title: "Double bookings and idle cars",
      body: "Bookings are taken on the phone, on WhatsApp and on a wall chart. Two customers are promised the same car for Saturday morning, while another stands unbooked all week because nobody noticed it was back from the workshop.",
    },
    {
      title: "Disputes at return time",
      body: "The customer says the car came back at six. Your staff say nine. The kilometre reading is argued, and so is the speeding fine that arrives later. Without a record, the operator gives in to protect the review.",
    },
  ],
  how: [
    {
      title: "Fit trackers in the fleet",
      body: "We install wired or OBD GPS devices in your cars and bikes. Every vehicle gets a profile with its category, its documents and its history.",
    },
    {
      title: "Take the booking",
      body: "Enter the customer, the vehicle and the dates on the bookings calendar as a daily or a scheduled rental. For chauffeur-driven duties, assign a driver.",
    },
    {
      title: "Monitor the rental",
      body: "While the vehicle is out, follow it on the live map. A zone exit, overspeeding or a disconnected tracker raises an alert on your phone.",
    },
    {
      title: "Close on return",
      body: "At return, check the distance run and the route history for the booking period. The vehicle goes back into the available pool on the calendar.",
    },
  ],
  features: [
    {
      title: "Bookings calendar",
      body: "See every vehicle against the dates it is booked, so a new enquiry is answered by looking at one screen.",
    },
    {
      title: "Daily and scheduled rentals",
      body: "Handle a single-day hire, a week-long self-drive booking and a recurring corporate duty in the same calendar.",
    },
    {
      title: "Driver assignment",
      body: "For chauffeur-driven work, attach a driver to the booking and see that driver's other duties before you commit.",
    },
    {
      title: "Live trip monitoring",
      body: "Watch a vehicle that is out on rent, with its speed, heading and last update, from the office or the owner's phone.",
    },
    {
      title: "Trip sharing",
      body: "Share a live trip with the corporate travel desk or the guest's family, so they follow the cab without calling you.",
    },
    {
      title: "Customer and vehicle records",
      body: "Keep each customer's rental history, and each vehicle's past bookings, documents and expenses, in one profile.",
    },
    {
      title: "Zone and border alerts",
      body: "Draw the area a rental is allowed to cover. An exit event tells you when a vehicle leaves it.",
    },
    {
      title: "Tracker tamper alert",
      body: "A device power cut alert tells you when a tracker is unplugged or its supply is cut while the vehicle is on rent.",
    },
    {
      title: "Utilisation by vehicle",
      body: "See which cars and bikes are out earning and which stand in the yard, before you decide what to buy or sell next.",
    },
  ],
  showcase: [
    {
      title: "Know when a rental leaves its area",
      body: "A rental agreement usually names where the vehicle may go. Put that on the map as a geofence: a city, a state, a hill circuit. Ashwa records exit and entry, and you decide whether to call the customer or note it for billing.",
      bullets: [
        "Zones for city limits, states or tourist circuits",
        "Entry and exit events with time and place",
        "No-go zones for areas your agreement excludes",
        "Alerts on the owner's phone as they happen",
      ],
      visual: "geofence",
    },
    {
      title: "Settle return disputes with the route",
      body: "When time, distance or a traffic fine is contested, open the booking period in history. The route is snapped to roads with stray GPS points filtered out, and stops and halts are marked. Both sides look at the same record.",
      bullets: [
        "Route history for any day of the rental",
        "Distance run during the booking period",
        "Stops and halts, each with its duration",
        "Replay of the route at adjustable speed",
      ],
      visual: "trip-playback",
    },
    {
      title: "Hand over cars that are serviced and insured",
      body: "A rental car changes hands every few days, and nobody at the counter remembers its papers. Ashwa holds insurance, PUC, fitness, permit and road tax dates with service reminders, so a vehicle is not handed over with something lapsed.",
      bullets: [
        "A renewal calendar for insurance, PUC, permit and tax",
        "Service entries with reminders and odometer readings",
        "Fuel and expense entries for each vehicle",
        "A vendor directory for garages and tyre shops",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "Rented vehicles stay in view",
      body: "The owner knows where every rented vehicle is, and hears about a zone exit or a cut tracker while there is still time to act on it.",
    },
    {
      title: "A fuller booking calendar",
      body: "With one calendar for all vehicles, idle cars are visible and a double booking is caught before the customer arrives at the counter.",
    },
    {
      title: "Returns closed without argument",
      body: "Time, distance and route for the booking are on record. Extra kilometre charges and fines are explained with evidence the customer can see.",
    },
  ],
  useCases: [
    {
      title: "Self-drive cars in a metro",
      body: "An operator rents hatchbacks and SUVs for weekend trips. Each booking has a permitted area. When a car crosses the state line the owner gets an exit event, calls the customer and adds the agreed outstation charge at return.",
    },
    {
      title: "Chauffeur-driven cars for corporates",
      body: "A travel company supplies cars with drivers for airport transfers and outstation duties. The booking executive assigns car and driver on the calendar, and the client's travel desk follows the guest's trip on a shared link.",
    },
    {
      title: "Bike rentals in a tourist town",
      body: "A shop rents scooters and motorcycles by the day to visitors. A tracker goes on each bike. The owner sees which bikes are out, which are overdue, and where a scooter abandoned on a beach road is parked.",
    },
  ],
  faqs: [
    {
      q: "Can a customer find and remove the GPS tracker from a rental car?",
      a: "A wired tracker is fitted out of sight and raises a device power cut alert if its supply is disconnected. An OBD tracker is quicker to fit but easier to unplug, and that also raises an alert. No device is impossible to remove. We discuss the right option for your vehicles and where to place it.",
    },
    {
      q: "Should I tell customers that the rental car is tracked?",
      a: "We suggest stating it clearly in the rental agreement. It sets expectations about permitted areas and speed, and it avoids an argument about privacy later. The exact wording and any legal requirement are for you and your adviser to settle. Ashwa provides the tracking and the records, not legal advice.",
    },
    {
      q: "Does Ashwa handle rental bookings as well as tracking?",
      a: "Yes. The rental management module has a bookings calendar, daily and scheduled rentals, driver assignment, trip scheduling, and customer and vehicle records. It sits on the same platform as live tracking, so a booking and the vehicle's position are seen together. Rental management is an add-on module, quoted separately from tracking.",
    },
    {
      q: "Will this work for scooter and motorcycle rentals?",
      a: "Yes. Two-wheelers are a vehicle category in Ashwa, and trackers are available in wired and battery-powered forms that suit bikes. The bookings calendar, zone alerts and route history work the same way as for cars. Tell us the models you rent and we will recommend a device and a fitting position.",
    },
    {
      q: "Can a corporate client see the cars on duty for them?",
      a: "For a single duty, share the live trip with the client's travel desk. For a standing contract, we can create a restricted role so the client's user sees only the vehicles assigned to that account and nothing else in your fleet. You decide what each role can view.",
    },
  ],
  related: [
    "solutions/rental-fleet-management",
    "products/rental-management",
    "products/geofencing",
    "products/trip-history",
  ],
};

export default doc;
