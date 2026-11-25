import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "alerts",
  name: "Alerts",
  blurb: "Overspeed, idling, power cut and renewals due, sent to your phone",
  seo: {
    title: "Vehicle tracking alerts for speed, idling and power",
    description:
      "Vehicle tracking alerts from Ashwa: overspeed, idling, ignition, geofence entry and exit, device power cut, renewal and service due, in-app and as push.",
    keywords: [
      "vehicle tracking alerts",
      "overspeed alert",
      "idling alert",
      "GPS power cut alert",
      "ignition on off alert",
      "vehicle renewal reminder",
    ],
  },
  hero: {
    eyebrow: "Notifications that matter",
    title: "Vehicle tracking alerts that reach the right phone",
    lede: "Nobody can stare at a map all day. Alerts tell you when something needs attention: a vehicle over the speed limit, an engine idling, a tracker that lost power, an insurance policy about to expire.",
    visual: "alerts",
  },
  audience: ["Fleet owners", "Fleet supervisors", "Security officers", "Transport managers"],
  problems: [
    {
      title: "Trouble is discovered next morning",
      body: "A vehicle was started at two in the night and driven out of the yard. The watchman was asleep and the owner learns of it when the diesel is low and the odometer has moved.",
    },
    {
      title: "Speeding is only a rumour",
      body: "Everyone says a certain driver is fast. Nobody has a time, a place or a speed to put in front of him, so the warning is vague and nothing changes.",
    },
    {
      title: "A cut wire goes unseen",
      body: "Someone disconnects the tracker before taking the vehicle on a private errand. On an ordinary map the vehicle simply looks parked, and the gap is noticed days later, if ever.",
    },
  ],
  how: [
    {
      title: "Choose what to watch",
      body: "Decide which conditions matter for your fleet: speed above a limit, idling, ignition, zone crossings, power cut, renewals and services falling due.",
    },
    {
      title: "Ashwa watches the data",
      body: "Each report from a tracker is checked against those conditions, and document and service dates are checked against the calendar.",
    },
    {
      title: "You are notified",
      body: "When a condition is met, an alert appears in the app's alert feed and arrives on the phone as a push notification.",
    },
    {
      title: "Share or act",
      body: "Open the alert to see the vehicle, time and place. Share it with a supervisor or a driver, or go straight to the map.",
    },
  ],
  features: [
    {
      title: "Overspeed alerts",
      body: "Raised when a vehicle goes above the speed limit set for it, with the speed, the time and the location.",
    },
    {
      title: "Idling alerts",
      body: "Raised when an engine is left running while the vehicle is standing still for longer than it should.",
    },
    {
      title: "Ignition alerts",
      body: "A notice when a vehicle is switched on or off, useful outside working hours and for vehicles kept in open yards.",
    },
    {
      title: "Geofence alerts",
      body: "Sent when a vehicle enters or leaves one of your zones, including areas it has been told to avoid.",
    },
    {
      title: "Power cut alerts",
      body: "Raised when the tracker loses its supply from the vehicle, which is the usual sign of tampering or a battery being removed.",
    },
    {
      title: "Renewal and service due",
      body: "Reminders for insurance, PUC, fitness, tax and permit renewals and for scheduled servicing, ahead of the date.",
    },
    {
      title: "In-app alert feed",
      body: "A running list of all alerts, newest first, so nothing is lost if a phone notification was swiped away.",
    },
    {
      title: "Shareable alerts",
      body: "Pass an alert to a colleague, a driver or a client from your phone, with its details intact.",
    },
  ],
  showcase: [
    {
      title: "Push notifications on the owner's phone",
      body: "An alert is useful only if it reaches a person. Ashwa sends alerts as push notifications to the mobile app, and keeps them in the feed for later. The owner at home and the supervisor at the depot both hear about it.",
      bullets: [
        "Push notification the moment the alert is raised",
        "Tap through to the vehicle and its position",
        "Share the alert onward from the phone",
      ],
      visual: "mobile-app",
    },
    {
      title: "Renewals and services, before they lapse",
      body: "Not every alert is about driving. When Maintenance holds your document dates and service schedule, the same alert feed warns you that a fitness certificate or an oil change is coming up, in time to arrange it.",
      bullets: [
        "Insurance, PUC, fitness, road tax and permit reminders",
        "Service due reminders for each vehicle",
        "One feed for driving alerts and paperwork alerts",
      ],
      visual: "maintenance",
    },
    {
      title: "Zone crossings as they happen",
      body: "Pair alerts with Geofencing and a boundary on the map becomes a tripwire. A truck reaching the customer, a bus leaving school, a car entering a restricted area: each sends a notice to whoever is responsible for that place.",
      bullets: [
        "Entry and exit notices for chosen zones",
        "Warnings for vehicles entering no-go areas",
        "Each notice carries the zone name and the time",
      ],
      visual: "geofence",
    },
  ],
  outcomes: [
    {
      title: "Problems heard about in time",
      body: "The owner learns of unauthorised movement, tampering or speeding while it is under way, when something can still be done.",
    },
    {
      title: "Warnings with evidence",
      body: "A driver is shown the speed, time and place of each instance, which makes the conversation specific and harder to shrug off.",
    },
    {
      title: "Less screen watching",
      body: "Staff stop refreshing the map out of anxiety. They get on with their work and respond when the phone tells them to.",
    },
  ],
  useCases: [
    {
      title: "Night movement from a locked yard",
      body: "A fleet parks its trucks in a fenced yard drawn as a geofence. An ignition alert followed by a zone exit after midnight wakes the owner, who opens Live Tracking, sees the truck on the bypass and telephones the yard.",
    },
    {
      title: "Idling on a cold-chain run",
      body: "For a reefer operator, long idling at a dealer's gate means the unit is burning diesel while waiting. Idling alerts flag it during the day, and the idle time figures in Reports and Analytics show which dealers cause it most.",
    },
    {
      title: "Permit reminder for a tourist coach",
      body: "A coach operator's state permit is due while the bus is booked for a wedding party. The renewal alert arrives early, the office checks the bookings calendar in Rental Management, and the paperwork is done before the trip.",
    },
  ],
  faqs: [
    {
      q: "What kinds of alerts can Ashwa send?",
      a: "Overspeed, idling, ignition on and off, geofence entry and exit, device power cut, and renewal and service due. The driving and device alerts come from GPS data. Renewal and service alerts come from dates held in the Maintenance module.",
    },
    {
      q: "How do I receive alerts?",
      a: "Alerts appear in the alert feed inside the app and are sent as push notifications to the mobile app. Any alert can also be shared from your phone with someone else, for instance a supervisor or the driver concerned.",
    },
    {
      q: "Can I set a different speed limit for different vehicles?",
      a: "Yes. A loaded tipper, a school bus and a staff car should not share one limit. The overspeed limit is set to suit the vehicle, and we help you choose sensible values during set-up based on where and how each vehicle runs.",
    },
    {
      q: "What does a power cut alert mean?",
      a: "It means the tracker has stopped receiving power from the vehicle. This can be tampering, a removed battery or a wiring fault during a repair. Many wired trackers have a small backup battery that lets them send this alert before going silent.",
    },
    {
      q: "Will I be flooded with notifications?",
      a: "Only if everything is switched on with tight limits. Start with the few conditions you would act on, such as power cut, night ignition and overspeed. Add more once your team is used to responding. We go through this with you at onboarding.",
    },
  ],
  related: [
    "products/geofencing",
    "products/maintenance",
    "products/driver-management",
    "products/mobile-app",
  ],
};

export default doc;
