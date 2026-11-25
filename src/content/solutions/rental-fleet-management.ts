import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "rental-fleet-management",
  name: "Rental Fleet",
  blurb: "Bookings, live location and returns for cars out on rent",
  seo: {
    title: "GPS Tracking for Rental Cars and Fleet Bookings",
    description:
      "GPS tracking for rental cars with a bookings calendar. Know where each car is, get overspeed and boundary alerts, manage returns and see fleet utilisation.",
    keywords: [
      "GPS tracking for rental cars",
      "vehicle rental management software",
      "car rental fleet tracking",
      "self-drive car tracking",
      "rental booking calendar",
      "rental fleet utilisation",
    ],
  },
  hero: {
    eyebrow: "Rental fleets",
    title: "GPS tracking for rental cars, with bookings built in",
    lede: "Once the keys are handed over, the car is out of your sight. Ashwa keeps it on the map, warns you about overspeeding and boundary crossings, and ties each rental to a booking so returns and utilisation are clear.",
    visual: "rental",
  },
  audience: ["Car rental owners", "Self-drive operators", "Chauffeur services", "Bike rental shops"],
  problems: [
    {
      title: "The car is with a stranger",
      body: "A customer has taken a car for the weekend. You do not know if it is in the city, across the state border or parked somewhere it should not be until it returns.",
    },
    {
      title: "Bookings clash on paper",
      body: "Reservations sit in a diary and a messaging group. A car promised for Friday is still out on Thursday night, and the next customer is already on the way to collect it.",
    },
    {
      title: "Idle cars hide in the yard",
      body: "Some cars go out every day and others gather dust. Without a view of which vehicle earned and which sat, you keep paying loans on cars that do little.",
    },
  ],
  how: [
    {
      title: "Fit and list the cars",
      body: "Install a tracker in each rental vehicle. Create its record in Ashwa with its category, documents and current odometer reading.",
    },
    {
      title: "Take the booking",
      body: "Enter the customer, dates and vehicle on the bookings calendar. Daily and scheduled rentals are supported, with a driver assigned when the rental is chauffeur-driven.",
    },
    {
      title: "Watch the rental",
      body: "Follow the car live while it is out. Speed and geofence alerts tell you when the agreed limits are crossed.",
    },
    {
      title: "Close the return",
      body: "When the car is back, close the rental. The calendar frees the car for its next booking and its usage adds to the reports.",
    },
  ],
  features: [
    {
      title: "Bookings calendar",
      body: "See every vehicle's reservations on a calendar and spot gaps and overlaps before you confirm a new one.",
    },
    {
      title: "Daily and scheduled rentals",
      body: "Handle a same-day hire and a booking made weeks ahead in the same calendar, against the same vehicle records.",
    },
    {
      title: "Live trip monitoring",
      body: "Each active rental is visible on the map with speed, status and the time of the last update.",
    },
    {
      title: "Speed alerts",
      body: "Set a speed limit and receive an overspeed alert with time and place when a customer crosses it.",
    },
    {
      title: "Boundary geofences",
      body: "Draw the area a car is allowed in, such as the city or the state, and be alerted on exit.",
    },
    {
      title: "Driver assignment",
      body: "For chauffeur-driven rentals, assign a driver to the booking and keep his profile on record.",
    },
    {
      title: "Customer and vehicle records",
      body: "Keep each customer's rental history and each vehicle's documents, service and past rentals in its profile.",
    },
    {
      title: "Utilisation reports",
      body: "See how much each vehicle was used and how long it stood idle over any period you choose.",
    },
  ],
  showcase: [
    {
      title: "A boundary the car should not cross",
      body: "Rental agreements often limit where a car may go. Draw that limit as a geofence. Ashwa records the moment a car leaves the zone and alerts your staff, so the conversation with the customer starts on the same day.",
      bullets: [
        "City, state or custom zones drawn on the map",
        "Exit and entry events with time and location",
        "Alerts in the app and as push notifications",
      ],
      visual: "geofence",
    },
    {
      title: "Each car's full record in one profile",
      body: "A rental car changes hands constantly, so its history matters. The vehicle profile holds its documents, odometer, service entries, expenses and past rentals. When a car returns with a complaint, the record of who had it is there.",
      bullets: [
        "Documents with renewal reminders for insurance and PUC",
        "Service history and upcoming service reminders",
        "Odometer readings and distance covered per rental",
        "Cars, two-wheelers and custom vehicle types supported",
      ],
      visual: "vehicles",
    },
    {
      title: "Find out which cars earn their place",
      body: "Utilisation reports set the busy cars beside the idle ones. Add distance and maintenance cost and you can see which models are worth buying again and which should be sold before the next service.",
      bullets: [
        "Vehicle utilisation across the whole rental fleet",
        "Distance covered by each car in any period",
        "Overspeed reports by vehicle and rental",
        "Maintenance cost for each car over time",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Cars you can always locate",
      body: "Whether a rental is on time, overdue or somewhere it should not be, the car's position is on your screen.",
    },
    {
      title: "No double bookings",
      body: "The calendar shows what is reserved and what is free. Staff confirm a booking knowing the car will be back.",
    },
    {
      title: "A fleet sized to demand",
      body: "Utilisation figures show which cars are overworked and which are surplus, so decisions about buying and selling follow what customers actually hire.",
    },
  ],
  useCases: [
    {
      title: "A self-drive car rental",
      body: "Customers collect cars and drive themselves. The operator sets a speed limit and a state boundary for each rental, watches active rentals on the map and calls the customer when a car is running late for return.",
    },
    {
      title: "A chauffeur-driven tour operator",
      body: "Cars go out with a driver for airport runs and outstation tours. Each booking has a driver assigned, the trip is monitored live, and a trip link is shared with the guest's family or the travel agent.",
    },
    {
      title: "A two-wheeler rental near a tourist spot",
      body: "Scooters and motorcycles are hired by the day. Each one carries a tracker, bookings sit on the calendar, and the owner checks before closing that every vehicle due back has returned.",
    },
  ],
  faqs: [
    {
      q: "How do I know where my rental car is right now?",
      a: "Each car carries a GPS tracker and appears on the Ashwa map with its speed, status and last update time. You can also open its history to see the route it has taken since the rental began.",
    },
    {
      q: "Will I be alerted if a customer overspeeds?",
      a: "Yes. Set a speed limit and Ashwa sends an overspeed alert when it is crossed, in the app and as a push notification. Overspeed events are also kept in reports, so you can refer to them when the car is returned.",
    },
    {
      q: "Can I stop a car from leaving the state?",
      a: "Ashwa cannot stop the car, but it can tell you. Draw a geofence along the boundary you allow, and you are alerted when the car exits it. What you do next follows your rental agreement.",
    },
    {
      q: "Does it handle both self-drive and chauffeur-driven rentals?",
      a: "Yes. Self-drive rentals are tracked against the customer and the booking. For chauffeur-driven work you assign a driver, schedule the trip, monitor it live and can share the trip with the customer.",
    },
    {
      q: "Can a customer see the car they have booked?",
      a: "You can share a live trip link for a rental, which is useful for chauffeur-driven bookings where the guest wants to see the car arriving. The link is specific to that trip.",
    },
  ],
  related: [
    "products/rental-management",
    "industries/car-rentals",
    "products/geofencing",
    "products/alerts",
  ],
};

export default doc;
