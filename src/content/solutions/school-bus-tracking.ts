import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "school-bus-tracking",
  name: "School Bus Tracking",
  blurb: "Live bus location for the school, arrival alerts for parents",
  seo: {
    title: "School Bus Tracking System with Parent Notifications",
    description:
      "A school bus tracking system for schools and parents. Track buses live, manage routes, stops and student rosters, and notify parents when the bus is arriving.",
    keywords: [
      "school bus tracking system",
      "school bus tracking software",
      "school bus tracking app",
      "school bus GPS tracker",
      "parent app for school bus",
      "school transport management",
    ],
  },
  hero: {
    eyebrow: "School bus tracking",
    title: "A school bus tracking system parents and schools share",
    lede: "The parent at the gate wants to know when the bus will come. The transport in-charge wants the phone to stop ringing. Ashwa gives the school a live transport desk and gives parents arrival and drop-off updates on their phones.",
    visual: "school-bus",
  },
  audience: ["School principals", "Transport in-charges", "School trustees", "Bus contractors"],
  problems: [
    {
      title: "The transport desk phone never rests",
      body: "Every morning and afternoon the same calls come in. Has the bus left. Why is it late. Did my child get down. One person answers them all, with a register and a guess.",
    },
    {
      title: "Parents wait without information",
      body: "A parent stands at the stop in the rain, unsure whether the bus is two lanes away or has not left school. A short delay feels long when nobody can tell you anything.",
    },
    {
      title: "Who boarded is on paper",
      body: "The attendant ticks names in a notebook. If a child misses the bus or gets down at a different stop, the school finds out when a worried parent calls.",
    },
  ],
  how: [
    {
      title: "Fit the buses",
      body: "A GPS tracker is installed in each bus and van. Every vehicle then appears live on the school's administration dashboard, with its speed and status.",
    },
    {
      title: "Build routes and rosters",
      body: "Set up each route with its stops in order. Allocate a bus, a driver and an attendant, and add the students who board at each stop.",
    },
    {
      title: "Invite the parents",
      body: "Parents install the parent app and see their own child's bus. They receive a notification when it is approaching the stop.",
    },
    {
      title: "Monitor each run",
      body: "The transport desk watches pickups and drop-offs as they happen and sends messages to parents when a route is delayed or changed.",
    },
  ],
  features: [
    {
      title: "Live bus map",
      body: "Every bus on one screen for the transport desk, with speed, status and the time of its last update.",
    },
    {
      title: "Routes and stops",
      body: "Each route has ordered stops with expected arrival times, and actual times are recorded on every run.",
    },
    {
      title: "Bus allocation",
      body: "Assign buses to routes and change the allocation when a vehicle is off the road for repair.",
    },
    {
      title: "Student rosters",
      body: "Students are listed against their route and stop, so the school knows who should be on which bus.",
    },
    {
      title: "Pickup and drop-off monitoring",
      body: "The school sees pickups and drop-offs as the run progresses, and parents receive the update for their child.",
    },
    {
      title: "Parent app",
      body: "Parents get bus arrival notifications and pickup and drop-off updates without calling the school office.",
    },
    {
      title: "School-to-parent messages",
      body: "Tell the parents on a route about a delay, a changed bus or an early dispersal in one message.",
    },
    {
      title: "Driver and attendant records",
      body: "Keep profiles for drivers and attendants, know who is on which bus, and review driving behaviour such as overspeeding.",
    },
  ],
  showcase: [
    {
      title: "What a parent sees on the phone",
      body: "The parent app is built around one question: where is my child's bus. It shows the bus on its way, sends a notification as it nears the stop, and confirms pickup and drop-off, morning and afternoon.",
      bullets: [
        "Bus arrival notifications before it reaches the stop",
        "Pickup and drop-off updates for their own child",
        "Messages from the school about delays and changes",
      ],
      visual: "parent-app",
    },
    {
      title: "Routes, stops and timings kept in order",
      body: "A new admission, a shifted house, a road dug up for repairs: school routes change all year. Ashwa keeps each route as a list of ordered stops with timings, so changes are made once and everyone sees the same plan.",
      bullets: [
        "Ordered stops with expected and actual arrival times",
        "Bus, driver and attendant allocated to each route",
        "Route deviation recorded when a bus leaves its path",
        "Geofences at the school gate for entry and exit",
      ],
      visual: "routes",
    },
    {
      title: "Know who is driving the children",
      body: "Each bus has a named driver and attendant on record. Overspeed alerts and driving behaviour reports show the school how the bus is being driven, and renewal reminders cover the insurance, fitness and permit of every vehicle.",
      bullets: [
        "Driver and attendant profiles for every bus",
        "Overspeed alerts sent to the transport in-charge",
        "Driver behaviour and safety monitoring over time",
        "Insurance, fitness, PUC and permit renewal reminders",
      ],
      visual: "drivers",
    },
  ],
  outcomes: [
    {
      title: "A quieter transport desk",
      body: "Parents who can see the bus stop calling to ask about it. The in-charge handles real exceptions instead of repeating the same answer.",
    },
    {
      title: "Parents who trust the service",
      body: "Timely arrival and drop-off updates replace anxious waiting at the stop. Families plan their mornings and afternoons around information, not hope.",
    },
    {
      title: "A record of every run",
      body: "Route history, stop timings and pickup records are stored. When a question is raised later, the school can show what happened.",
    },
  ],
  useCases: [
    {
      title: "A day school with its own buses",
      body: "The school owns its buses and employs the drivers. The transport in-charge sets routes and rosters at the start of term, watches the morning run from the dashboard and messages parents if a bus is held up.",
    },
    {
      title: "A school using a bus contractor",
      body: "Buses belong to an outside contractor. Trackers are fitted in the contracted vehicles and the school sees them on its own dashboard, with timings recorded for each route as a basis for reviewing the service.",
    },
    {
      title: "A group of schools under one trust",
      body: "A trust runs several campuses, each with its own buses. Every campus is a branch with its own transport staff, while the trust office can switch between them and see all routes.",
    },
  ],
  faqs: [
    {
      q: "How do parents track the school bus?",
      a: "Parents install the Ashwa parent app and are linked to their child's route by the school. They see the bus on its way, get a notification when it is arriving at the stop, and receive pickup and drop-off updates.",
    },
    {
      q: "Can a parent see other children's buses?",
      a: "No. A parent sees the bus and updates for their own child. The school controls who is linked to which student and route, and staff access is limited by role.",
    },
    {
      q: "Is GPS tracking mandatory for school buses?",
      a: "Some states and school boards have issued rules or guidelines about GPS in school buses, and they differ and change over time. Check the current requirement for your state and board. Ashwa helps you track buses, but using it does not by itself make a school compliant with any rule.",
    },
    {
      q: "What happens when a bus is changed for the day?",
      a: "The transport desk changes the bus allocation for that route. Tracking and parent notifications follow the replacement vehicle, provided it has a tracker fitted, and the school can message the route's parents about the change.",
    },
    {
      q: "Do we need different software for the school and for parents?",
      a: "No. It is one system with different views. The school uses the administration dashboard on the web and the staff app. Drivers have their own app. Parents use the parent app. All of them draw on the same live data.",
    },
  ],
  related: [
    "products/school-transport",
    "products/route-management",
    "industries/education",
    "products/mobile-app",
  ],
};

export default doc;
