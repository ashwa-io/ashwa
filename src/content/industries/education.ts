import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "education",
  name: "Education",
  blurb: "Buses, rosters and parent updates for schools, colleges and coaching",
  seo: {
    title: "School and college transport tracking for institutions",
    description:
      "School and college transport tracking in India: live bus position, routes and stops, student rosters, pickup and drop-off records, arrival alerts for parents.",
    keywords: [
      "school and college transport tracking",
      "school bus GPS tracking",
      "college bus tracking system",
      "student transport management",
      "parent bus tracking app",
      "coaching institute van tracking",
    ],
  },
  hero: {
    eyebrow: "Schools and colleges",
    title: "School and college transport tracking, from depot to gate",
    lede: "The transport in-charge starts the day before the first bus does: an attendant on leave, a new admission on route four, a parent asking why the bus is late. Ashwa gives the school, the driver and the parent the same picture.",
    visual: "school-bus",
  },
  audience: [
    "Principals",
    "Transport in-charges",
    "School administrators",
    "Trustees",
    "Coaching centre owners",
  ],
  problems: [
    {
      title: "The gate fills with waiting parents",
      body: "A parent leaves work early because nobody can say when the bus will reach the stop. On a rainy day the bus is late and the school office takes one call after another, each asking the same thing.",
    },
    {
      title: "Nobody knows who is on board",
      body: "The roster is a printed sheet from the start of the session. Children have changed stops since. When a parent says their child did not get down at the usual point, the school has only the attendant's memory.",
    },
    {
      title: "Routes change, the plan does not",
      body: "Admissions, withdrawals and house moves alter the stops every term. The driver adjusts on his own. The office finds out when a bus runs overfull or a child is left standing at a stop that was dropped.",
    },
  ],
  how: [
    {
      title: "Fit buses, enter rosters",
      body: "We install GPS devices on school and contractor buses. The office enters routes, stops and the students who board at each stop, with a driver and an attendant against each bus.",
    },
    {
      title: "Parents get the app",
      body: "Each parent sees their own child's bus in the parent app. They receive a notification as the bus approaches, and updates at pickup and at drop-off.",
    },
    {
      title: "The desk watches the run",
      body: "The school administration dashboard shows every bus on its morning and afternoon run, with expected and actual times at stops and any deviation from the route.",
    },
    {
      title: "Review and adjust",
      body: "After the run, check the pickup and drop-off records and replay any bus. Move a student to another stop or bus in the roster when circumstances change.",
    },
  ],
  features: [
    {
      title: "School bus live tracking",
      body: "All buses on one map for the transport desk, each marked as moving, stopped, idle or offline with its last update time.",
    },
    {
      title: "Student rosters by stop",
      body: "Every student is listed against a bus and a stop, so the attendant and the office work from the same current list.",
    },
    {
      title: "Pickup and drop-off monitoring",
      body: "Each child's pickup and drop-off is recorded for the day, giving the school a dated answer when a parent asks.",
    },
    {
      title: "Bus arrival notifications",
      body: "Parents are told when the bus is nearing their stop, so children wait at home and not on the roadside.",
    },
    {
      title: "School-to-parent messages",
      body: "Tell the parents of one route that the bus is delayed, or tell all parents that school closes early, from the same system.",
    },
    {
      title: "Driver and attendant records",
      body: "Keep the profile and bus assignment of every driver and attendant, and know who was on which bus on any day.",
    },
    {
      title: "Campus and stop geofences",
      body: "Zones around the campus and key stops record when each bus entered and left, and how long it stood there.",
    },
    {
      title: "Speed alerts for buses",
      body: "Set a speed limit for your buses and receive an alert whenever one crosses it, with the place and the time.",
    },
  ],
  showcase: [
    {
      title: "What the parent sees on the phone",
      body: "Parents do not need the whole fleet. They need one bus and one child. The parent app shows the bus on a map, sends a notification before it arrives and confirms pickup and drop-off, in the morning and again in the afternoon.",
      bullets: [
        "Live position of the child's own bus only",
        "An arrival notification before the bus reaches the stop",
        "Pickup and drop-off updates for each journey",
        "Messages from the school in the same app",
      ],
      visual: "parent-app",
    },
    {
      title: "Routes that keep up with admissions",
      body: "A route is an ordered list of stops with expected times and an allocated bus. When a stop is added mid-term, the office edits the route and the roster. The driver, the attendant and the parents follow the new plan from the next run.",
      bullets: [
        "Ordered stops with expected and actual arrival times",
        "Bus allocation for morning and afternoon runs",
        "Route deviation shown to the transport desk",
        "Student lists kept current, stop by stop",
      ],
      visual: "routes",
    },
    {
      title: "Know who is driving and attending",
      body: "Schools often run a mix of owned and contractor buses, and staff change during the year. Ashwa keeps a profile for each driver and attendant with the bus they are assigned to, and driver behaviour monitoring shows how each bus is driven.",
      bullets: [
        "Driver and attendant profiles with bus assignment",
        "Driving behaviour and overspeed history for each driver",
        "Staff accounts for the transport office",
        "Contractor buses managed beside the school's own",
      ],
      visual: "drivers",
    },
  ],
  outcomes: [
    {
      title: "Calmer mornings at the office",
      body: "Parents check the app instead of ringing the reception. The transport in-charge handles the exceptions, not the same question from every family.",
    },
    {
      title: "A record for every child",
      body: "When a parent asks about a pickup or a drop, the school answers from the day's record with a time and a stop, not from recollection.",
    },
    {
      title: "Contractors held to the plan",
      body: "Expected and actual stop times show which routes run late and which buses leave the planned road, so the review with the bus contractor rests on records.",
    },
  ],
  useCases: [
    {
      title: "A day school with contractor buses",
      body: "A school hires buses from a transport contractor and has little say over the drivers. With trackers fitted and routes entered, the principal sees every run and the parents get arrival alerts, without the school owning a single bus.",
    },
    {
      title: "A college with city pickup points",
      body: "An engineering college on the outskirts runs buses from several points in the city. Students and staff board at fixed stops. The college office watches arrival at the campus gate before the first lecture and replays any bus that came in late.",
    },
    {
      title: "A coaching institute's evening vans",
      body: "A coaching centre drops students home in vans after late classes. Parents are anxious about the hour. Each van has a roster and the parents receive drop-off updates, so the centre is not fielding calls at night.",
    },
  ],
  faqs: [
    {
      q: "How do parents get access to the bus tracking app?",
      a: "The school adds each student to a roster with a stop and a bus. Parents then use the Ashwa parent app and see only the bus their own child travels on. They do not see other buses, other children or the school's dashboard. We help the school set up the first rosters and plan the rollout to parents.",
    },
    {
      q: "Does fitting GPS make our school buses compliant with transport rules?",
      a: "No software can promise that. School bus rules come from state transport departments, court directions and education boards, and they cover much more than tracking. Ashwa gives you live tracking, records and parent communication. Check the current rule for your state and board, then tell us what it asks for and we will show you what Ashwa covers.",
    },
    {
      q: "Our buses belong to a contractor. Can the school still track them?",
      a: "Yes, with the contractor's agreement to fit GPS devices on the buses that serve your school. The school holds the Ashwa account, the routes and the rosters. If the contractor changes a bus, the device or the allocation is updated. It is sensible to write the tracking requirement into the transport contract.",
    },
    {
      q: "Can a college or coaching institute use it without the parent app?",
      a: "Yes. You choose the modules you need. A college may want only live tracking, routes with stop timings and a dashboard for the transport office. A coaching institute may want drop-off updates for parents and nothing else. We configure the set that fits how your institution runs its transport.",
    },
    {
      q: "What happens when a child changes stop or bus mid-session?",
      a: "The transport office edits the student's entry in the roster and assigns the new stop or bus. From the next run the attendant's list is updated, and the parent sees the new bus and receives notifications for the new stop. The earlier pickup and drop-off records for that child are kept.",
    },
  ],
  related: [
    "solutions/school-bus-tracking",
    "products/school-transport",
    "products/route-management",
    "products/mobile-app",
  ],
};

export default doc;
