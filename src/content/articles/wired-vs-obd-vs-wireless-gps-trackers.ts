import type { Article } from "../types";

const article: Article = {
  slug: "wired-vs-obd-vs-wireless-gps-trackers",
  title: "Wired, OBD or battery-powered: which GPS tracker fits which vehicle",
  description:
    "Wired, OBD and battery-powered GPS trackers compared for Indian fleets: how each is fitted, what it can sense, where it falls short and which vehicle it suits.",
  category: "GPS tracking",
  published: "2026-09-15",
  readMinutes: 6,
  keywords: [
    "wired gps tracker",
    "obd gps tracker",
    "wireless gps tracker",
    "battery powered gps tracker",
    "gps tracker for truck",
    "gps tracker for car",
    "types of gps trackers",
  ],
  intro:
    "A wired tracker suits vehicles you own and run every day, such as trucks, buses and vans, because it takes power from the vehicle and can sense ignition. An OBD tracker suits cars where you want a plug-in fit with no wiring. A battery-powered tracker suits trailers, containers and equipment with no power supply of their own. The choice follows the vehicle and what you need to know about it.",
  sections: [
    {
      heading: "Wired trackers: the default for commercial vehicles",
      body: [
        "A wired tracker is connected to the vehicle's electrical system, typically with three wires: battery positive, ground and ignition. A technician hides it behind the dashboard or in another covered spot. Since it has steady power, it can report often while the vehicle moves.",
        "The ignition wire is the important one. It lets the system separate running time from idling and parked time, which is the basis of most fleet reports. Many wired models also accept extra inputs and outputs: a relay to stop the engine from starting, a panic button, a door switch, a fuel level sensor or a temperature probe.",
        "The trade-off is fitting. You need a technician, the vehicle has to stand for the job, and moving the device to another vehicle means another visit. In return you get a hidden device that is hard to remove casually, and most models carry a small backup battery so they can send a power-cut alert when someone disconnects them.",
      ],
    },
    {
      heading: "OBD trackers: plug in and drive",
      body: [
        "An OBD tracker plugs into the diagnostic port that most modern cars have near the steering column. It takes power from the port. There is no cutting or joining of wires, which matters for leased cars and vehicles under manufacturer warranty.",
        "Fitting takes a minute and anyone can do it. Moving the device to another car is just as quick. Some OBD models can also read engine data from the vehicle, though what is actually available depends on both the device and the vehicle make.",
        "The weakness is the same as the strength. The port is easy to find, so a driver can pull the device out. You will get an unplug alert, but the tracking stops. Port support also varies. Older vehicles may not have a compatible port, and heavy trucks generally use different diagnostic connectors, so confirm the fit for your exact models before ordering in bulk.",
      ],
    },
    {
      heading: "Battery-powered trackers: for things without an engine",
      body: [
        "A battery-powered tracker is a sealed unit with its own cell. It is bolted on or attached by magnet. This makes it the practical choice for trailers, containers, generators, site equipment and high-value consignments, where there is no ignition circuit to connect to.",
        "To make the battery last, these devices sleep most of the time. They wake to report on a schedule, or when they sense movement. You get a position a few times a day, not a moving dot. For locating an asset or confirming it reached a site, that is enough. For supervising a driver, it is not.",
        "Battery life depends on how often the device reports, the network strength where it sits and the temperature. Ask the supplier for expected life at the interval you plan to use, and decide in advance who will recharge or replace units.",
      ],
    },
    {
      heading: "Matching the tracker to the vehicle",
      body: [
        "Start with two questions. Does the vehicle have its own power? Do you need to know when the engine is on? The answers settle most cases.",
        "Check voltage as well. Cars generally run on a 12 volt system and many trucks and buses on 24 volts. Most wired trackers accept a wide input range, but confirm it for the model you are buying.",
      ],
      list: [
        "Trucks, tippers and buses: wired, with ignition sensing and any sensors you need.",
        "Owned cars and vans in daily use: wired, hidden, with a power-cut alert.",
        "Leased or frequently rotated cars: OBD, so the device moves with the contract.",
        "Two-wheelers and three-wheelers: compact wired units built for small vehicles.",
        "Trailers, containers and unpowered equipment: battery-powered.",
        "Excavators, loaders and other machines with a battery: wired, with attention to voltage and vibration.",
      ],
    },
    {
      heading: "Installation and tamper points",
      body: [
        "Where the device sits matters as much as which device it is. It needs a view of the sky through glass or plastic, not through sheet metal. It should be out of sight and away from heat and water. Ask the technician to photograph the position and note it against the vehicle, so the next person can find it.",
        "Before the vehicle leaves, check it live. Switch the ignition on and off and see the status change on your screen. Drive it out of the yard and watch the position move. Problems caught at this stage cost nothing to fix.",
        "Tell drivers the vehicle is tracked. Hidden devices found later cause more friction than ones that were explained on day one, and in practice most tampering stops once drivers know a power-cut alert reaches the office.",
      ],
    },
    {
      heading: "Questions to ask the supplier",
      body: [
        "Device brochures look alike. The answers to a few direct questions separate them. Get the replies in writing along with the quote.",
        "If you run more than one kind of vehicle, it helps to keep all device types on one platform. Ashwa works with wired, OBD and battery-powered trackers from widely used device families, and new models can be onboarded on request.",
      ],
      list: [
        "Which mobile network generation does the device use, and is that network reliable on my routes?",
        "What is the warranty, and who replaces a failed unit at my location?",
        "Does it have a backup battery and a power-cut alert?",
        "Can the device be pointed to another tracking platform later, or is it locked?",
        "Who installs it in my city, and what does a re-installation cost?",
      ],
    },
  ],
  faqs: [
    {
      q: "Is a wireless GPS tracker the same as a battery-powered one?",
      a: "In everyday use, yes. Sellers call a tracker wireless when it needs no connection to the vehicle's wiring and runs on its own battery. Every tracker is wireless in the sense that it reports over the mobile network.",
    },
    {
      q: "Will fitting a wired tracker affect my vehicle warranty?",
      a: "It depends on the manufacturer's terms and how the fitting is done. Ask your dealer before installation. If the terms are strict, an OBD tracker avoids any change to the wiring.",
    },
    {
      q: "Can a wired tracker drain the vehicle battery?",
      a: "A healthy tracker draws very little current, and most reduce their activity when the ignition is off. On a vehicle parked for many weeks with a weak battery it can contribute to discharge, so disconnect or monitor in that case.",
    },
  ],
  related: [
    "solutions/gps-vehicle-tracking-system",
    "solutions/asset-tracking",
    "solutions/truck-tracking",
    "products/vehicle-management",
  ],
};

export default article;
