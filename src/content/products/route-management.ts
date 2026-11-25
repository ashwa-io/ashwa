import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "route-management",
  name: "Route Management",
  blurb: "Planned routes with ordered stops, allocation and arrival times",
  seo: {
    title: "Route management software for fixed daily runs",
    description:
      "Route management software for fixed runs: planned routes with ordered stops, bus and vehicle allocation, expected and actual arrival times, route deviation.",
    keywords: [
      "route management software",
      "bus route planning software",
      "route deviation alert",
      "expected vs actual arrival time",
      "vehicle allocation to routes",
      "staff bus route management",
    ],
  },
  hero: {
    eyebrow: "Fixed runs, in order",
    title: "Route management software for fixed, repeating runs",
    lede: "Some vehicles do the same run every day: a staff bus, a milk van, a school bus. Define the route once with its stops in order, allocate a vehicle, and compare the time it was expected at each stop with when it came.",
    visual: "routes",
  },
  audience: ["Transport coordinators", "Route planners", "Admin managers", "School transport heads"],
  problems: [
    {
      title: "The route lives in the driver's head",
      body: "The regular driver knows every stop and its timing. When he is on leave, the replacement misses two pickups and reaches the factory late, because the route was never written down anywhere.",
    },
    {
      title: "Late is a matter of opinion",
      body: "Employees at the last stop say the bus is always late. The driver says he is on time. There is no agreed expected time for each stop to measure either claim against.",
    },
    {
      title: "Shortcuts skip the stops",
      body: "To save time, a vehicle takes the bypass and leaves out a stretch of its run. The people or parcels waiting on that stretch are left behind, and the office hears of it by complaint.",
    },
  ],
  how: [
    {
      title: "Define the route",
      body: "Create a route and add its stops in the order the vehicle should visit them, each with the time it is expected there.",
    },
    {
      title: "Allocate a vehicle",
      body: "Assign a bus or vehicle to the route. When a vehicle is under repair, allocate another to the same route without rebuilding it.",
    },
    {
      title: "Run and record",
      body: "As the vehicle does its run, Ashwa notes when it reaches each stop and sets that actual time against the expected one.",
    },
    {
      title: "Check deviation",
      body: "If the vehicle leaves the planned path, the route deviation is recorded, so a skipped section is known the same day.",
    },
  ],
  features: [
    {
      title: "Planned routes",
      body: "A saved route for each fixed run, named the way your staff refer to it, reusable day after day.",
    },
    {
      title: "Ordered stops",
      body: "Stops are held in sequence, so the first pickup, the intermediate points and the final destination are unambiguous.",
    },
    {
      title: "Bus and vehicle allocation",
      body: "Each route shows which vehicle is allocated to it, and each vehicle shows the route it is meant to run.",
    },
    {
      title: "Expected arrival times",
      body: "Every stop carries the time the vehicle should be there, which gives passengers and planners a common reference.",
    },
    {
      title: "Actual arrival times",
      body: "The time the vehicle did reach each stop is recorded from GPS, without anyone noting it by hand.",
    },
    {
      title: "Route deviation",
      body: "Departures from the planned path are picked up, so shortcuts and unscheduled detours do not pass unnoticed.",
    },
  ],
  showcase: [
    {
      title: "Watch a run against its plan",
      body: "During the run, the coordinator sees the vehicle on the map with its route and the stops still ahead. A bus that is behind at the third stop is visible then, and those waiting further down can be told before they start calling.",
      bullets: [
        "Vehicle position shown with its planned stops",
        "Stops already covered and stops still to come",
        "Delay spotted while the run is in progress",
      ],
      visual: "live-map",
    },
    {
      title: "Expected and actual, stop by stop",
      body: "After the run, each stop has two times beside it. Over a few weeks the same stops turn out to be the ones that run late, and the timetable or the stop order is corrected on evidence, not on the loudest complaint.",
      bullets: [
        "Planned time and reached time for every stop",
        "Stops that run late again and again stand out",
        "A basis for revising timings or resequencing stops",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Routes survive a driver change",
      body: "The stops and their order are on record, so a relief driver or a new coordinator can run the route as intended.",
    },
    {
      title: "Punctuality measured, not argued",
      body: "Expected and actual times settle whether a vehicle was late at a stop, and by how much, without anyone's word being doubted.",
    },
    {
      title: "Skipped stretches come to light",
      body: "Route deviation shows when a vehicle left its path, which protects the passengers and customers at the stops in between.",
    },
  ],
  useCases: [
    {
      title: "Staff shuttle for a factory shift",
      body: "A plant runs shuttles for each shift. Routes hold the pickup points in order, and Geofencing zones at the plant gate record entry. The admin manager compares gate arrival with shift start and adjusts the first pickup time.",
    },
    {
      title: "School routes with student rosters",
      body: "A school builds its bus routes here and uses School Transport to attach students to stops. Allocation tells the desk which bus is on which route today, and parents at each stop are notified as the bus approaches.",
    },
    {
      title: "Dairy van on a fixed beat",
      body: "A dairy sends vans to the same booths each dawn. When one van deviates, an alert reaches the supervisor, and the next day he replays the run in History and Playback to see which booths were missed.",
    },
  ],
  faqs: [
    {
      q: "How is route management different from trip management?",
      a: "Route Management is for runs that repeat on the same path with the same stops, such as staff, school and distribution rounds. Trip Management is for individual jobs with a customer, load and deliver stops, expenses and payments. Some operators use both, for different vehicles.",
    },
    {
      q: "Does Ashwa calculate the shortest route for me?",
      a: "This module is for planning and monitoring routes you define: the stops, their order and their expected times. It shows how the real run compared with that plan. It is not an automatic route optimiser. If you need help sequencing stops, we work through it with you.",
    },
    {
      q: "What counts as a route deviation?",
      a: "A deviation is recorded when the allocated vehicle moves away from the path planned for its route. It may be a diversion for road work or a deliberate shortcut. The record tells you where it happened, and you decide whether it needs a question.",
    },
    {
      q: "Can I change the vehicle on a route for one day?",
      a: "Yes. Allocation is separate from the route itself. If the usual bus is in the workshop, allocate a spare vehicle to the route. The stops, sequence and expected times remain as they were.",
    },
    {
      q: "Can passengers see when the vehicle will reach their stop?",
      a: "For schools, parents receive bus arrival notifications through the parent experience in School Transport. For employee transport and other runs, we set up how arrival information is shared with you, depending on who the passengers are.",
    },
  ],
  related: [
    "products/school-transport",
    "products/geofencing",
    "products/trip-history",
    "solutions/employee-transport",
  ],
};

export default doc;
