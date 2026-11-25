import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "rental-management",
  name: "Rental Management",
  blurb: "Bookings calendar, chauffeur assignment and live duty monitoring",
  seo: {
    title: "Vehicle rental management software with bookings",
    description:
      "Vehicle rental management software with a bookings calendar, daily and scheduled rentals, driver assignment, live trip monitoring, sharing and utilisation.",
    keywords: [
      "vehicle rental management software",
      "car rental booking software",
      "rental bookings calendar",
      "chauffeur duty management",
      "rental fleet utilisation",
      "taxi and travel operator software India",
    ],
  },
  hero: {
    eyebrow: "Bookings and duties",
    title: "Vehicle rental management software built around the calendar",
    lede: "A rental business sells vehicle days. Ashwa puts every booking on a calendar, assigns the car and the chauffeur, follows the duty live, and keeps customer and vehicle records so the next enquiry is answered quickly.",
    visual: "rental",
  },
  audience: ["Rental operators", "Travel agencies", "Booking desk staff", "Duty supervisors"],
  problems: [
    {
      title: "Two bookings, one car",
      body: "The owner confirms an outstation booking on the phone while the desk promises the same Innova for an airport pickup. Both customers are due on Saturday, and the clash is found on Friday night.",
    },
    {
      title: "Duties handed out by phone",
      body: "Each evening the supervisor rings chauffeurs one by one with tomorrow's reporting time and address. A missed call or a misheard lane means a guest standing outside a hotel with luggage.",
    },
    {
      title: "Cars parked through the season",
      body: "In the busy months some cars run back to back while others sit in the lot. Without a record of days out, the owner cannot tell which vehicles earn their keep.",
    },
  ],
  how: [
    {
      title: "Take the booking",
      body: "Enter the customer, the dates and the kind of rental, daily or scheduled for a later date. The booking takes its place on the calendar.",
    },
    {
      title: "Assign car and driver",
      body: "Pick a vehicle that is open for those dates and assign a driver to the duty. The calendar now shows both as committed.",
    },
    {
      title: "Schedule and run",
      body: "Schedule the trip for the booking. Once it begins, follow the vehicle live and share the trip with the customer or their family.",
    },
    {
      title: "Close and review",
      body: "When the car returns, the booking is completed. Customer and vehicle records are updated, and the days count towards utilisation.",
    },
  ],
  features: [
    {
      title: "Bookings calendar",
      body: "All bookings laid out by date and vehicle, so open days and committed days are seen before a promise is made.",
    },
    {
      title: "Daily rentals",
      body: "Handle same-day and day-wise hires, the walk-in and phone enquiries that make up routine business.",
    },
    {
      title: "Scheduled rentals",
      body: "Book ahead for a future date or a block of dates, such as a wedding, a tour or a corporate visit.",
    },
    {
      title: "Driver assignment",
      body: "Attach a chauffeur to each booking, so everyone knows who is reporting where and no driver is given overlapping duties.",
    },
    {
      title: "Trip scheduling",
      body: "Set up the trip that belongs to a booking in advance, with its start time and place.",
    },
    {
      title: "Live trip monitoring",
      body: "See vehicles that are out on duty, where they are and whether they are on the move.",
    },
    {
      title: "Trip sharing",
      body: "Share a running trip with the customer, so the person who booked can see the car approaching or follow a family member's journey.",
    },
    {
      title: "Customer and vehicle records",
      body: "Keep a history of who hired what and when, and of each vehicle's past bookings.",
    },
    {
      title: "Fleet utilisation",
      body: "See how many days each vehicle was out against the days it was available, across the fleet.",
    },
  ],
  showcase: [
    {
      title: "Follow a duty and share it",
      body: "Once a hired car is on the road, the desk can see it on the map. The trip can be shared with the customer, which answers the usual question before it is asked: where is my car and when will it be here.",
      bullets: [
        "Vehicles on duty shown live on the map",
        "A shared view of the trip for the customer",
        "Reporting delays noticed by the desk as they develop",
      ],
      visual: "live-map",
    },
    {
      title: "Chauffeurs matched to bookings",
      body: "A booking is not complete until someone is driving it. Assign the chauffeur at the time of booking or the evening before. The roster for tomorrow is then a list on screen, not a string of phone calls from the supervisor.",
      bullets: [
        "One driver assigned to each booking",
        "Committed and free drivers visible for any date",
        "Tomorrow's duties ready as a single list",
      ],
      visual: "drivers",
    },
    {
      title: "Which cars earn and which sit",
      body: "Utilisation puts a figure on each vehicle's season. A sedan that goes out most days and an SUV that leaves the lot only on weekends look very different, and the next purchase or sale is decided with that in view.",
      bullets: [
        "Days out compared with days available",
        "Vehicles compared across the same period",
        "A factual basis for adding or retiring cars",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "No double bookings",
      body: "Every confirmed hire occupies its dates on the calendar, so the desk and the owner cannot promise one vehicle twice.",
    },
    {
      title: "Guests kept informed",
      body: "Sharing the trip lets the customer watch the car come, which cuts the anxious calls on the morning of the duty.",
    },
    {
      title: "Fleet sized to demand",
      body: "With utilisation in hand, the operator knows whether to buy another vehicle, attach one from a partner or let one go.",
    },
  ],
  useCases: [
    {
      title: "Self-drive car checked on return",
      body: "A self-drive customer returns a hatchback after a long weekend. The desk opens History and Playback for those dates, confirms the distance and the places visited against the rental terms, and closes the booking without dispute.",
    },
    {
      title: "Insurance lapse caught before a tour",
      body: "A tempo traveller is booked for a pilgrimage next month. A renewal alert from Maintenance shows its insurance expires mid-tour. The operator renews early, and the booking stays on the calendar with the same vehicle.",
    },
    {
      title: "Corporate account with monthly duties",
      body: "A travel agency serves a company with daily cabs. Bookings are scheduled for the month, chauffeurs come from Driver Management, and the agency's two city offices each see their own cars through Roles and Organisations.",
    },
  ],
  faqs: [
    {
      q: "What types of rental can I manage in Ashwa?",
      a: "Daily rentals for same-day and day-wise hires, and scheduled rentals booked for a future date or a run of dates. Both appear on the bookings calendar with their vehicle and driver, and both can have a trip scheduled against them.",
    },
    {
      q: "Is this suitable for self-drive as well as chauffeur-driven rentals?",
      a: "Yes. For chauffeur-driven hires you assign a driver to the booking. For self-drive, the booking carries the vehicle and customer without a driver, and GPS tracking gives you the vehicle's location and distance while it is out.",
    },
    {
      q: "Can my customer track the car they have booked?",
      a: "Yes. A running trip can be shared with the customer. They see the car for that trip only. This is commonly used for airport pickups and for families who want to follow an elderly relative's or a child's journey.",
    },
    {
      q: "Does Ashwa handle rental billing and invoices?",
      a: "Rental Management covers bookings, assignment, monitoring, records and utilisation. Your tariff, invoicing and tax filing stay with your billing or accounting software. If you need booking data passed to that software, we can discuss an integration.",
    },
    {
      q: "Do all my rental vehicles need a GPS device?",
      a: "Bookings and the calendar work for any vehicle on your list. Live trip monitoring and trip sharing need a device on the vehicle. Many operators fit their own cars first and add attached vehicles as partners agree.",
    },
  ],
  related: [
    "solutions/rental-fleet-management",
    "industries/car-rentals",
    "products/driver-management",
    "products/live-tracking",
  ],
};

export default doc;
