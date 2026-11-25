import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "school-transport",
  name: "School Transport",
  blurb: "Bus tracking, routes, student rosters and updates for parents",
  seo: {
    title: "School transport management software for schools",
    description:
      "School transport management software: live bus tracking, routes and stops, student rosters, pickup and drop-off monitoring, and arrival updates for parents.",
    keywords: [
      "school transport management software",
      "school bus tracking",
      "parent app for school bus",
      "student pickup and drop tracking",
      "school bus route management",
      "school bus GPS India",
    ],
  },
  hero: {
    eyebrow: "Buses, students, parents",
    title: "School transport management software, from depot to gate",
    lede: "The transport desk sees every bus, route and student roster on one dashboard. Parents get a notification when the bus is arriving and an update when their child is picked up or dropped, without ringing the school office.",
    visual: "school-bus",
  },
  audience: ["School administrators", "Transport in-charges", "Principals", "Parents"],
  problems: [
    {
      title: "The parent at the gate",
      body: "A mother stands at the corner with a child in uniform, not knowing if the bus is two minutes away or twenty. On a rainy morning, dozens of such parents ring the school reception together.",
    },
    {
      title: "Who is on which bus",
      body: "Admissions, withdrawals and address changes keep shifting the lists. The attendant works from a photocopy made in June, and a new child is left at a stop because his name was never added.",
    },
    {
      title: "No word after the last bell",
      body: "Once the buses leave in the afternoon, the school has no view of them. If a child is late home, the office can only call the driver and hope he answers.",
    },
  ],
  how: [
    {
      title: "Set up routes and stops",
      body: "Enter each bus route with its stops in order. Allocate a bus to every route, and record the driver and the attendant who travel on it.",
    },
    {
      title: "Build student rosters",
      body: "Attach each student to a route and a stop. The roster for a bus is then a current list, changed in one place when a family moves.",
    },
    {
      title: "Track the run",
      body: "During the morning and afternoon runs, the administration dashboard shows every bus live, along with pickups and drop-offs as they are recorded.",
    },
    {
      title: "Keep parents informed",
      body: "Parents receive a bus arrival notification for their stop and a pickup or drop-off update for their child, and the school can send them messages.",
    },
  ],
  features: [
    {
      title: "School bus live tracking",
      body: "Every bus on a map during its run, with its speed and whether it is moving or halted.",
    },
    {
      title: "Routes and stops",
      body: "Each route is a sequence of named stops, so the path a bus should take is defined and visible to the desk.",
    },
    {
      title: "Bus allocation",
      body: "Assign buses to routes and switch to a spare bus when one is off the road, with the roster unchanged.",
    },
    {
      title: "Student rosters",
      body: "A list of students for every bus and stop, kept up to date as admissions and addresses change.",
    },
    {
      title: "Pickup and drop-off monitoring",
      body: "A record of each child's pickup in the morning and drop-off in the afternoon, viewable by the school.",
    },
    {
      title: "Driver and attendant management",
      body: "Keep the details of the driver and the attendant on each bus, and know who was on duty on any given day.",
    },
    {
      title: "Administration dashboard",
      body: "One screen for the transport desk showing buses out, runs in progress and anything that needs attention.",
    },
    {
      title: "Bus arrival notifications",
      body: "Parents are told when the bus is approaching their stop, so the child leaves home at the right moment.",
    },
    {
      title: "School-to-parent communication",
      body: "Send transport messages to parents, such as a delayed departure or a route change for the day.",
    },
  ],
  showcase: [
    {
      title: "What parents see on their phone",
      body: "The parent experience is deliberately small. A parent sees their own child's bus, gets a notification as it nears the stop, and receives an update at pickup and at drop-off. Messages from the school about transport arrive in the same place.",
      bullets: [
        "Arrival notification for the child's own stop",
        "Pickup and drop-off updates for each child",
        "Transport messages from the school in one place",
        "Parents see only their own child's bus",
      ],
      visual: "parent-app",
    },
    {
      title: "Routes, stops and rosters kept together",
      body: "A bus route is more than a line on a map. Each stop has students attached, and each bus has a driver and an attendant. When a child shifts house, moving him to another stop updates the roster the attendant works from.",
      bullets: [
        "Stops in order, with the students at each",
        "A bus allocated to every route",
        "Roster changes made once and seen by all",
      ],
      visual: "routes",
    },
    {
      title: "The crew on every bus",
      body: "Parents and principals ask who is with the children. The school keeps a record of the driver and attendant for each bus, and overspeed events during a run are visible to the transport in-charge the same day.",
      bullets: [
        "Driver and attendant recorded for each bus",
        "Duty history available for any past date",
        "Speeding during a run brought to the in-charge",
      ],
      visual: "drivers",
    },
  ],
  outcomes: [
    {
      title: "A quieter school reception",
      body: "Parents who can see the bus and receive updates have little reason to telephone, so the office is free at its busiest hours.",
    },
    {
      title: "Every child accounted for",
      body: "Rosters and pickup and drop-off records show which children boarded and which were handed over, run by run and bus by bus.",
    },
    {
      title: "Evidence when questions arise",
      body: "If a parent asks why a bus was late or where it went, the school has the recorded run to refer to.",
    },
  ],
  useCases: [
    {
      title: "Stop zones that trigger notices",
      body: "A school draws Geofencing zones around its campus and the larger pickup points. When a bus crosses into a zone, the event confirms arrival for the desk, and dwell time shows how long buses wait at the gate each afternoon.",
    },
    {
      title: "Fitness and permit dates for buses",
      body: "The transport in-charge keeps each bus's insurance, fitness and permit dates in Maintenance. Renewal reminders arrive ahead of time, so a bus is not found with expired papers during a surprise inspection in term.",
    },
    {
      title: "A late bus explained to a parent",
      body: "A father complains that the bus reached his stop well after the usual time. The desk opens History and Playback for that morning, sees a long halt at a closed railway crossing, and replies with the facts.",
    },
  ],
  faqs: [
    {
      q: "What do parents need in order to follow the bus?",
      a: "Parents use the Ashwa parent app on their phone. The school adds each parent against their child, and the parent then sees that child's bus, receives arrival notifications for their stop and gets pickup and drop-off updates. Nothing else about the fleet is shown to them.",
    },
    {
      q: "How are pickup and drop-off recorded?",
      a: "Pickups and drop-offs are recorded against the student roster during each run, and the transport desk can see them on the dashboard. The exact method on the bus is agreed with the school at set-up, to suit how its attendants work.",
    },
    {
      q: "Does using Ashwa make our school buses compliant with regulations?",
      a: "No software can promise that. Rules for school buses, including tracking devices and other fittings, are set by state transport departments and education boards and they change. Ashwa gives you tracking and records. Please check the current requirements for your state and board.",
    },
    {
      q: "Can it work with buses run by an outside contractor?",
      a: "Yes. Many schools hire buses from a transport contractor. Devices are fitted on the contractor's buses, and the school manages routes, rosters and parent communication. The contractor can be given access limited to vehicle matters, if the school wishes.",
    },
    {
      q: "What happens when a regular bus breaks down?",
      a: "Allocate a spare bus to the route. The stops and the student roster stay as they were, and parents continue to receive notifications for the replacement bus. The school can also send a message to affected parents explaining the delay.",
    },
  ],
  related: [
    "solutions/school-bus-tracking",
    "industries/education",
    "products/route-management",
    "products/geofencing",
  ],
};

export default doc;
