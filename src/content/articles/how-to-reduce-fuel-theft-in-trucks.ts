import type { Article } from "../types";

const article: Article = {
  slug: "how-to-reduce-fuel-theft-in-trucks",
  title: "How to reduce fuel theft and diesel leakage in a truck fleet",
  description:
    "Practical steps to reduce fuel theft in trucks: set a mileage baseline, control refuelling, check bills against GPS distance and know what fuel sensors can do.",
  category: "Fleet management",
  published: "2026-10-09",
  readMinutes: 7,
  keywords: [
    "fuel theft in trucks",
    "diesel theft prevention",
    "fuel monitoring system",
    "truck mileage tracking",
    "fuel level sensor for trucks",
    "reduce fleet fuel cost",
  ],
  intro:
    "Diesel goes missing in a few predictable ways: short filling at the pump, siphoning from the tank, inflated bills, extra kilometres and long idling. You reduce it by measuring fuel in against distance out for every vehicle, fixing where and how drivers refuel, and checking the exceptions every week. Tracking data helps, but routine and follow-up are what close the gap.",
  sections: [
    {
      heading: "Where the diesel goes",
      body: [
        "Fuel is among the largest running expenses for a truck owner, and it is paid in many small transactions far from the office. That makes it easy to lose a little on each one.",
        "Not all of the loss is theft. Some is waste, and some is a vehicle that needs repair. It helps to separate the causes before blaming anyone.",
      ],
      list: [
        "Short filling: the bill shows more litres than went into the tank, and the difference is shared at the pump.",
        "Siphoning: diesel is drained from the tank during a halt, often at night.",
        "False bills: a receipt is produced for a fill that never happened.",
        "Extra running: personal trips, detours and side loads that burn your fuel.",
        "Idling: the engine runs for hours at a halt, often for the cabin fan or air conditioning.",
        "Mechanical loss: leaks, low tyre pressure, clogged filters and worn injectors.",
      ],
    },
    {
      heading: "Set a mileage baseline for each vehicle",
      body: [
        "You cannot spot a loss without knowing what normal looks like. For each truck, work out the kilometres it gives per litre on its usual work. Do it separately for loaded and empty running if you can, because the two differ a lot.",
        "The simplest method is tank full to tank full. Fill the tank to the brim, note the odometer, run the trip, fill to the brim again and note the litres and the odometer. Distance divided by litres is the mileage for that stretch. Repeat over several trips and you have a range you can trust.",
        "Compare like with like. The same model on the same route with a similar load should fall in a similar range. A truck that sits well below its sister vehicles month after month needs a mechanic, a different driver for a trial, or a closer look at its bills.",
      ],
    },
    {
      heading: "Control where and how refuelling happens",
      body: [
        "Most leakage happens at the nozzle, so tighten that point first. Tie up with a small number of pumps on your regular routes and tell drivers to fill only there unless they call the office. A pump that wants your monthly business has a reason to bill honestly.",
        "Move away from cash where possible. Fuel cards and account billing create a record that the driver cannot edit. Where cash is unavoidable, ask for a printed bill and a phone photo of the pump display and the odometer together.",
        "Record every fill the same day: vehicle, date, pump, litres, amount and odometer reading. A fuel log that is written up at month end from a bundle of crumpled bills catches nothing.",
      ],
    },
    {
      heading: "Check the story against tracking data",
      body: [
        "A GPS tracker does not measure fuel. What it gives you is an independent record of where the truck was and how far it went, and that is enough to test most fuel claims.",
        "Start with the fill itself. At the time on the bill, was the vehicle at that pump? If the truck was two districts away, the bill is false. Next, compare the distance the tracker recorded between two fills with the litres bought. That gives you mileage without relying on the odometer figure the driver wrote down.",
        "Then look at behaviour. Long halts at odd places, especially at night away from the usual dhaba or parking, are where siphoning happens. Idle time reports show engines left running. Route history shows detours. None of these proves theft alone. Together, on the same vehicle, they tell you where to ask questions.",
      ],
    },
    {
      heading: "Fuel level sensors: what they do and their limits",
      body: [
        "A fuel level sensor is a probe fitted into the tank and wired to the tracker. It reports the level continuously, so the system can draw a graph: a sharp rise at each fill, a slow fall while driving. A sharp fall while the truck is parked is the signature of a drain.",
        "Sensors add cost and need care. Each tank has to be calibrated by filling it in measured steps, because tanks are not perfect boxes. Readings move on slopes and when fuel sloshes, so a single dip on the graph means little. Look for drops that happen at standstill and stay down.",
        "They are worth considering for long-haul trucks with large tanks and for machines that burn fuel while stationary. For short city runs, bill checks against GPS distance often do the job without extra hardware.",
      ],
    },
    {
      heading: "Make it a weekly routine and be fair with drivers",
      body: [
        "One audit a year changes nothing. Pick a fixed day each week. List the vehicles whose mileage fell outside their normal range, pull their fills and routes, and speak to the driver while the trip is still fresh in memory.",
        "Be fair in how you do it. Traffic, hill routes, overloading, poor roads and a weak engine all hurt mileage, and a driver who is accused wrongly will not stay. Share the target range with drivers openly. Some owners pay a small incentive for staying within it, which gives honest drivers a reason to care.",
        "If you use Ashwa, fuel entries, distance, idle time and stoppage reports sit against each vehicle, and fuel monitoring hardware can be set up with you where the fleet needs it. The routine above works on any system, or on a notebook and a tracker.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can a GPS tracker detect fuel theft by itself?",
      a: "Not directly. A plain tracker records location, distance, halts and idling. Those let you verify fuel bills and calculate mileage. To see the fuel level itself, the tracker needs a fuel level sensor fitted in the tank.",
    },
    {
      q: "How accurate are fuel level sensors in trucks?",
      a: "Accuracy depends on the sensor type, the tank shape and how carefully the tank was calibrated. Expect some error and movement on slopes. They are reliable for spotting sudden drops and fills, less so for exact litres.",
    },
    {
      q: "What mileage should my truck give?",
      a: "There is no single figure. It depends on the model, engine condition, load, route and driver. Build your own baseline using the tank full to tank full method over several trips, then compare each vehicle against its own range.",
    },
    {
      q: "Do anti-siphon devices and tank locks help?",
      a: "They make draining slower and more awkward, which deters casual theft at halts. They do nothing about short filling or false bills, so use them alongside fill records and distance checks, not in place of them.",
    },
  ],
  related: [
    "solutions/truck-tracking",
    "products/maintenance",
    "products/reports-analytics",
    "industries/trucking",
  ],
};

export default article;
