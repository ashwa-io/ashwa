import type { Article } from "../types";

const article: Article = {
  slug: "school-bus-safety-and-tracking-guide",
  title: "School bus safety in India: what tracking can and cannot do",
  description:
    "A practical guide to school bus safety in India: the rules to start from, what GPS tracking adds, what it cannot replace, and a checklist for each term.",
  category: "School transport",
  published: "2026-11-10",
  readMinutes: 6,
  keywords: [
    "school bus safety india",
    "school bus gps tracking",
    "school bus safety rules",
    "school transport management",
    "school bus tracking for parents",
    "school bus attendant duties",
  ],
  intro:
    "Tracking tells a school where each bus is, whether it is on route and on time, and lets parents know when the bus is near. It cannot replace a trained driver, an attendant on board, a roadworthy bus or a head count at each stop. Treat tracking as one layer in a transport safety routine, with the rules for your state and board as the starting point.",
  sections: [
    {
      heading: "The rules a school has to start from",
      body: [
        "School transport in India is governed from several directions at once. There are Supreme Court guidelines on school buses, the motor vehicle rules of each state, and circulars from the school's affiliating board. District administrations and transport offices add their own orders from time to time.",
        "The common themes are familiar. Buses painted in the prescribed colour and marked as school buses. A speed limiting device. A first aid box and fire extinguisher. Secure windows and doors. A driver with adequate experience and a clean record. An attendant on board. Many states and boards now also ask for GPS tracking and cameras.",
        "The details differ by state and change over time, and they apply whether the school owns the buses or hires a contractor. Get the current list from your transport office and your board, and keep a copy in the transport file.",
      ],
    },
    {
      heading: "What tracking does well",
      body: [
        "Tracking answers the question the office is asked most often: where is the bus? With a live map, the transport in-charge can answer a parent in seconds without calling the driver, who should not be on the phone while driving.",
        "It also makes the route visible. Stops can be set in order with expected times, and the system records when the bus actually reached each one. A bus that leaves its route, speeds or halts for long at an unplanned place raises an alert while the trip is still on.",
        "For parents, an arrival notification changes the morning. A child does not need to stand at the roadside for twenty minutes because the bus might be early. Afterwards, the record of each trip helps the school settle complaints with facts and plan better routes for the next term.",
      ],
    },
    {
      heading: "What tracking cannot do",
      body: [
        "A tracker knows where the bus is. It does not know who is on it. It cannot tell whether a small child crossed the road safely, whether the door was shut before the bus moved, or whether the driver is unwell.",
        "It does not prevent a breakdown or a brake failure. It does not check the driver's licence. An overspeed alert arrives after the bus has already gone too fast.",
        "Schools sometimes fit devices and consider the matter closed. The device is a source of information. Safety comes from people acting on that information and from routines that do not depend on a screen.",
      ],
    },
    {
      heading: "Pickup and drop: the minutes that matter most",
      body: [
        "Most serious incidents happen around the bus, not inside a moving one. Boarding, getting down and crossing the road need an adult's full attention. That adult is the attendant, and the role should never be left vacant to save a salary.",
        "Three habits cover most of the risk. First, a roster for each route and a head count at every stop, so the attendant knows who should board and who did. Second, a handover rule for younger children: they are released only to a known guardian, and brought back to school if nobody is there. Third, a walk through the bus after the last stop, checking every seat for a sleeping child before the doors are locked.",
        "Software can hold the roster and record pickups and drops. The head count and the walk-through have to be done by a person, every trip.",
      ],
    },
    {
      heading: "Drivers, attendants and the bus itself",
      body: [
        "Keep a file for every driver and attendant: identity and address proof, licence with the right category and validity, background verification as required locally, and emergency contacts. Review the files at the start of each academic year, including for contractor staff.",
        "Training need not be elaborate. A short session each term on stopping positions, door discipline, what to do in a breakdown, and how to speak to children and parents goes a long way. Include the attendants.",
        "The bus needs the same discipline. Fitness certificate, insurance, permit and pollution certificate must be current. Tyres, brakes, lights, the emergency exit, the fire extinguisher and the first aid box should be on a written check that someone signs.",
      ],
    },
    {
      heading: "Talking to parents",
      body: [
        "Parents want three things: to know when the bus will come, to know their child has reached, and to be told quickly when something changes. A late bus with a message is an inconvenience. A late bus with silence is a crisis.",
        "Decide what each parent can see. A parent should see their own child's bus and stop, not the whole fleet or other children's details. Location data about children deserves care, so limit access to staff who need it.",
        "Agree in advance who sends messages in an emergency and through which channel, so that parents hear from the school before they hear from a group chat.",
      ],
    },
    {
      heading: "A checklist for each term",
      body: [
        "Run through this list before each term begins, and keep the signed copy. It takes an afternoon and covers what inspectors and parents ask about most often.",
        "Ashwa's school transport module covers bus tracking, routes and stops, student rosters, pickup and drop records and a parent app. It supports the routine above. It does not replace it, and it does not by itself make a school compliant with any rule.",
      ],
      list: [
        "Vehicle documents current for every bus, owned or hired.",
        "Driver and attendant files complete and verified.",
        "Safety equipment present and within date on each bus.",
        "Routes, stops and student rosters updated for new admissions.",
        "Tracking devices reporting, and parent contact numbers correct.",
        "Emergency contacts and message plan shared with staff.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is GPS tracking mandatory for school buses in India?",
      a: "Many states and school boards require it, but the requirement and the type of device differ by state and board. Check the current orders from your state transport department and your affiliating board before buying.",
    },
    {
      q: "Does the school remain responsible if buses are run by a contractor?",
      a: "Parents and authorities generally look to the school first, whatever the contract says. Write safety duties, document checks and tracking access into the contractor agreement, and audit them. Take legal advice on liability for your situation.",
    },
    {
      q: "Can parents track the school bus on their phone?",
      a: "Yes, where the school offers a parent app or link. A sensible setup shows a parent only their own child's bus, with arrival alerts and pickup and drop updates, and nothing about other children.",
    },
    {
      q: "Do school buses need cameras as well as GPS?",
      a: "Some states and boards ask for cameras in addition to tracking. They are separate systems with different costs, storage needs and privacy questions. Confirm what your rules require, and decide who may view recordings.",
    },
  ],
  related: [
    "solutions/school-bus-tracking",
    "products/school-transport",
    "products/route-management",
    "industries/education",
  ],
};

export default article;
