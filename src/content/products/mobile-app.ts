import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "mobile-app",
  name: "Mobile Apps",
  blurb: "Apps for owners and staff, for drivers and for parents",
  seo: {
    title: "Vehicle tracking app for owners, drivers and parents",
    description:
      "The Ashwa vehicle tracking app comes in three forms: one for owners and staff, one for drivers and one for parents, each showing only what that person needs.",
    keywords: [
      "vehicle tracking app",
      "GPS tracking app India",
      "fleet management mobile app",
      "driver app for fleet",
      "school bus parent app",
      "truck tracking app",
    ],
  },
  hero: {
    eyebrow: "Ashwa on the phone",
    title: "A vehicle tracking app for every role",
    lede: "Fleet work rarely happens at a desk. Ashwa has an app for owners and staff, an app for drivers and an app for parents. Each opens to the things that person deals with, and nothing more.",
    visual: "mobile-app",
  },
  audience: ["Fleet owners", "Field supervisors", "Drivers", "Parents"],
  problems: [
    {
      title: "The office closes, the fleet does not",
      body: "Trucks run through the night and on Sundays. If the only way to see them is a computer in a locked office, the owner is blind for most of the hours the vehicles are earning.",
    },
    {
      title: "One app shown to everyone",
      body: "Handing a driver or a parent the same screens the owner uses either confuses them or shows them things they should not see. Most are then given nothing, and go back to phone calls.",
    },
    {
      title: "Alerts stuck on a website",
      body: "A warning that appears on a web page helps nobody at midnight. If it does not reach a pocket, it is read the next day, when the moment to act has passed.",
    },
  ],
  how: [
    {
      title: "Install the right app",
      body: "Owners and staff, drivers and parents each download the app meant for them on their own phone. There is nothing to configure on the handset.",
    },
    {
      title: "Sign in",
      body: "Owners and staff sign in with their organisation code or with Google. Drivers and parents are added by the organisation or the school they belong to.",
    },
    {
      title: "See your part",
      body: "The app shows what your role covers: the fleet for an owner, assigned work for a driver, one child's bus for a parent.",
    },
    {
      title: "Stay notified",
      body: "Allow notifications, and alerts and updates arrive on the lock screen without the app being open. You choose when to open it.",
    },
  ],
  features: [
    {
      title: "Owner and staff app",
      body: "The fleet map, vehicle list, statuses and alerts for people who run the operation, wherever they happen to be.",
    },
    {
      title: "Driver app",
      body: "A separate app for drivers, connecting them to the organisation they drive for and the work given to them.",
    },
    {
      title: "Parent app",
      body: "For families using school transport: the child's bus, arrival notifications and pickup and drop-off updates.",
    },
    {
      title: "Push notifications",
      body: "Alerts such as overspeed, power cut and renewals due are delivered to the phone as they are raised.",
    },
    {
      title: "Role-based view",
      body: "A staff member sees only the vehicles and functions their role grants, the same as on the web.",
    },
    {
      title: "Switch between organisations",
      body: "Users who belong to more than one organisation or branch can move between them inside the app.",
    },
    {
      title: "Sharing from the phone",
      body: "Send an alert or a trip's tracking link to a customer or colleague using the phone's own share options.",
    },
  ],
  showcase: [
    {
      title: "The fleet in the owner's hand",
      body: "The owner and staff app opens to the vehicles. Search for a registration number, see whether it is moving, stopped, idle or offline, and check its speed and last update. A customer's question at dinner is answered before the plate is cleared.",
      bullets: [
        "Fleet map with live status of each vehicle",
        "Vehicle list searchable by registration number",
        "Alert feed and push notifications built in",
      ],
      visual: "live-map",
    },
    {
      title: "Drivers working from their own app",
      body: "Drivers get an app that is theirs, not a cut-down copy of the office screens. It ties the driver to his organisation, so instructions that used to travel as voice notes and forwarded messages have a proper place to live.",
      bullets: [
        "A dedicated app for the person at the wheel",
        "Linked to the driver's profile in the organisation",
        "Fewer instructions lost in chat groups",
      ],
      visual: "drivers",
    },
    {
      title: "A calm morning for parents",
      body: "The parent app does one job. It tells a family when the school bus is close to their stop and confirms when their child has been picked up or dropped. Notes from the school about transport come through the same app.",
      bullets: [
        "Bus arrival notification for the family's stop",
        "Pickup and drop-off confirmation for the child",
        "School transport messages delivered to parents",
      ],
      visual: "parent-app",
    },
  ],
  outcomes: [
    {
      title: "Oversight outside office hours",
      body: "The owner can look in on the fleet from home or on the road, at night and on holidays, without waiting for the office to open.",
    },
    {
      title: "Each person sees their share",
      body: "Drivers and parents get tools made for them, so they stay informed without being given access to the rest of the business.",
    },
    {
      title: "Alerts acted on sooner",
      body: "A notification on the lock screen is seen within minutes, which is when a power cut or a night ignition can still be dealt with.",
    },
  ],
  useCases: [
    {
      title: "Supervisor on the highway",
      body: "A field supervisor travelling between depots gets an idling alert on the staff app. He opens the vehicle, sees it has stood at a toll plaza with the engine on, and calls the driver assigned in Driver Management.",
    },
    {
      title: "Trip link sent from a shop floor",
      body: "A dispatcher is at a customer's factory when the buyer asks about tomorrow's load. From the app he opens the trip created in Trip Management and shares its tracking link by message on the spot.",
    },
    {
      title: "Grandparent collecting a child",
      body: "A grandmother is on pickup duty this week. The parent app, part of School Transport, notifies her as the bus enters the lane, so she walks down in time and is not left waiting in the sun.",
    },
  ],
  faqs: [
    {
      q: "Which mobile apps does Ashwa offer?",
      a: "Three: an app for owners and staff, an app for drivers and an app for parents of students who use school transport. Each is built for its user, so a parent never sees fleet screens and a driver is not shown the company's accounts.",
    },
    {
      q: "How do I sign in to the app?",
      a: "Owners and staff sign in using the organisation code given to them, or with Google. If you belong to several organisations or branches, you choose the one you want after signing in and can switch later.",
    },
    {
      q: "Can I do everything on the app that I can do on the web?",
      a: "The app covers what people need away from the desk: seeing vehicles, statuses and alerts, and sharing. Heavier set-up work, such as configuring roles or building routes, is more comfortable on the larger screen of the web application.",
    },
    {
      q: "Can I limit what my staff see in the app?",
      a: "Yes. The app respects the role assigned to each user. A branch supervisor sees the vehicles of that branch, and a clerk without permission for trip money will not see it on the phone either.",
    },
    {
      q: "Does a GPS dealer get the app under their own brand?",
      a: "Dealers who take the white-label platform present Ashwa to their customers under their own name, logo and colours. How that extends to mobile apps is part of the white-label arrangement, so please raise it when we discuss your set-up.",
    },
  ],
  related: [
    "products/live-tracking",
    "products/alerts",
    "products/school-transport",
    "solutions/gps-vehicle-tracking-system",
  ],
};

export default doc;
