import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "transportation",
  name: "Passenger Transport",
  blurb: "Schedules, boarding points and safe running for bus and tour operators",
  seo: {
    title: "Bus fleet tracking system for bus and travel operators",
    description:
      "A bus fleet tracking system for intercity, staff and tour operators in India: live bus position, routes with stop timings, overspeed alerts and permit renewals.",
    keywords: [
      "bus fleet tracking system",
      "bus GPS tracking India",
      "intercity bus tracking",
      "staff bus tracking",
      "tour operator vehicle tracking",
      "bus route management software",
    ],
  },
  hero: {
    eyebrow: "Bus and travel operators",
    title: "A bus fleet tracking system that follows your timetable",
    lede: "Passengers are waiting at a boarding point and the night service is late out of the depot. The booking counter has no answer for them. Ashwa shows where each bus is, how it is running against its schedule and when its permit falls due.",
    visual: "routes",
  },
  audience: [
    "Bus operators",
    "Tour operators",
    "Depot managers",
    "Operations supervisors",
    "Travel agency owners",
  ],
  problems: [
    {
      title: "The boarding point has no information",
      body: "A sleeper coach is running behind and passengers at the third pickup are calling the booking office. The office calls the conductor, who does not pick up. Nobody can give a time, so the passenger books elsewhere next month.",
    },
    {
      title: "Night services run unseen",
      body: "After the bus leaves the city the owner knows little until morning. A long dhaba halt, a detour to collect parcels, speed on the open highway: all of it is discovered from a complaint, if it is discovered at all.",
    },
    {
      title: "Paperwork decides whether buses run",
      body: "A coach with a lapsed permit or fitness certificate can be stopped at a check post with passengers on board. Renewal dates sit in a file in the office, and each bus has a different one.",
    },
  ],
  how: [
    {
      title: "Install and list buses",
      body: "We fit GPS devices on your coaches, staff buses and tempo travellers. Each is added with its registration, category and documents, and grouped by depot or by service.",
    },
    {
      title: "Lay out each service",
      body: "Build the route as an ordered list of stops: boarding points, break halts and the final stand. Set the expected arrival time at each stop and allocate a bus.",
    },
    {
      title: "Watch the run",
      body: "During the journey Ashwa compares actual arrival with expected arrival at each stop and flags a bus that leaves its route. The counter answers passengers from the screen.",
    },
    {
      title: "Review next morning",
      body: "Replay last night's services, check halts and overspeed events, and look at the calendar for any permit, insurance or service falling due this month.",
    },
  ],
  features: [
    {
      title: "Routes with ordered stops",
      body: "Each service is a planned route with boarding points in sequence, so every bus has a timetable that Ashwa can measure it against.",
    },
    {
      title: "Expected and actual arrival",
      body: "See, stop by stop, how far ahead or behind a bus is running, while it is still on the road.",
    },
    {
      title: "Route deviation flags",
      body: "Know when a coach leaves its planned road, whether for a diversion, an unscheduled pickup or a shortcut the driver prefers.",
    },
    {
      title: "Bus allocation",
      body: "Assign a bus and a driver to each service, and change the allocation when a vehicle goes to the workshop.",
    },
    {
      title: "Overspeed and idling alerts",
      body: "Receive an alert in the app or as a push notification when a bus crosses your speed limit or idles for long with the engine on.",
    },
    {
      title: "Permit and fitness calendar",
      body: "Insurance, PUC, fitness, road tax and state or national permit dates for every bus sit on one calendar with reminders.",
    },
    {
      title: "Driver profiles and behaviour",
      body: "Keep each driver's profile and assignment, and review driving behaviour before you decide who takes the night ghat service.",
    },
    {
      title: "Owner and staff apps",
      body: "The owner checks the fleet from a phone at night. Depot staff use the same app with the permissions you give them.",
    },
  ],
  showcase: [
    {
      title: "Give the booking counter a real answer",
      body: "The booking counter keeps the fleet map open. When a passenger asks about the evening service, staff see the coach, its speed and its last update, and say where it is instead of promising to call back.",
      bullets: [
        "Every bus shown as moving, stopped, idle or offline",
        "Groups for each depot, service type or client",
        "Custom markers to tell sleepers from staff buses",
        "A live trip link the tour group leader can open",
      ],
      visual: "live-map",
    },
    {
      title: "Keep the night service in check",
      body: "Speed on an empty highway is the risk every operator worries about. Set a limit and Ashwa raises an overspeed alert when a bus crosses it. A tracker losing power is flagged the same way, and long dhaba halts show in the morning's playback.",
      bullets: [
        "Overspeed alerts against a limit you set",
        "Ignition and idling alerts for each bus",
        "A device power cut alert if a tracker is disconnected",
        "Alerts in the app, as push, and shareable with the depot",
      ],
      visual: "alerts",
    },
    {
      title: "Keep every coach serviced and its papers current",
      body: "Each bus has its own renewal dates and service history. Ashwa holds them on a calendar and reminds you ahead of time. Fuel entries and service entries build a cost record for every vehicle in the depot.",
      bullets: [
        "Reminders for permit, fitness, insurance, PUC and road tax",
        "Service entries and reminders with odometer readings",
        "Diesel, CNG and AdBlue entries for each bus",
        "A vendor directory for garages, tyre shops and pumps",
      ],
      visual: "maintenance",
    },
  ],
  outcomes: [
    {
      title: "Passengers get a time",
      body: "The counter and the call centre answer from live position and stop timings. A delay explained with a real time is easier for a passenger to accept than silence.",
    },
    {
      title: "Night running becomes visible",
      body: "The owner sees speed, halts and route for every overnight service the next morning, or live from a phone. Drivers know the run is on record.",
    },
    {
      title: "No bus held for papers",
      body: "Renewals appear on the calendar before they lapse, so a coach comes off the road for paperwork by your choice and not at a check post.",
    },
  ],
  useCases: [
    {
      title: "Intercity sleeper and seater services",
      body: "An operator runs overnight coaches between two cities with several boarding points at each end. Each service is a route with timed stops. The counter follows the bus through the pickups and the owner reviews the highway stretch in playback.",
    },
    {
      title: "Staff buses on a factory contract",
      body: "A contractor runs shift buses for an industrial estate. The client's admin wants proof that buses reached the gate before the shift. Geofence entry events at the factory give a dated record for each bus and each shift.",
    },
    {
      title: "Tour packages with hired coaches",
      body: "A tour operator sends a group on a hill circuit lasting several days. The office follows the coach each day, sees every night halt, and checks that the vehicle's permit and insurance are valid before it leaves the city.",
    },
  ],
  faqs: [
    {
      q: "Can passengers see where their bus is?",
      a: "The booking office sees every bus live and can tell a passenger where it is. For a specific journey, such as a tour or a chartered coach, the office can share a public live-tracking link and revoke it afterwards. If you want tracking inside your own booking app or website, we build that with you through the API.",
    },
    {
      q: "Does a passenger bus need an AIS-140 device and panic buttons?",
      a: "Rules on location tracking devices and emergency buttons for public service vehicles depend on the state and the type of vehicle and permit. Check the current rule with your RTO or state transport department. Tell us what your state asks for and we will say plainly what our devices and software do and do not cover.",
    },
    {
      q: "Can we set a different timetable for each service?",
      a: "Yes. Every route has its own ordered stops and its own expected arrival times. A morning staff service and an overnight intercity service are separate routes, and the same bus can be allocated to different routes on different days. Ashwa compares actual arrival with the plan for whichever route the bus is on.",
    },
    {
      q: "We run our own buses and attached buses. Can both be on one screen?",
      a: "Yes, as long as each bus carries a GPS device that reports to Ashwa. You can put attached buses in their own group, and use roles so an attached owner sees only his vehicles while your operations team sees the whole fleet. We set up the groups and roles with you.",
    },
    {
      q: "Which GPS devices work on buses and coaches?",
      a: "Ashwa works with widely used tracker families, including Concox GT06-protocol, JT/T 808 and Teltonika FMB and FMC devices. Buses normally take a wired tracker connected to the vehicle's power. If your buses already carry a device, tell us the model. New device models can be onboarded on request.",
    },
  ],
  related: [
    "products/route-management",
    "products/alerts",
    "solutions/employee-transport",
    "solutions/gps-vehicle-tracking-system",
  ],
};

export default doc;
