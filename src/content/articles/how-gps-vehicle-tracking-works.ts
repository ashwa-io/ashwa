import type { Article } from "../types";

const article: Article = {
  slug: "how-gps-vehicle-tracking-works",
  title: "How GPS vehicle tracking works: device, SIM, server and app",
  description:
    "A plain explanation of how GPS vehicle tracking works in India: what the device, the SIM, the server and the app each do, and where the chain breaks.",
  category: "GPS tracking",
  published: "2026-09-03",
  readMinutes: 6,
  keywords: [
    "how gps vehicle tracking works",
    "gps tracker for vehicles",
    "vehicle tracking system india",
    "gps tracker sim card",
    "vehicle tracking device",
    "live vehicle tracking",
  ],
  intro:
    "A GPS tracker in a vehicle works out its own position from satellite signals, then sends that position over a mobile network to a server. The server stores it, works out trips, stops and alerts, and shows the result in a web or mobile app. Four parts do the work: device, SIM, server and app. If any one of them fails, the dot on the map stops moving.",
  sections: [
    {
      heading: "The device: a satellite receiver and a modem in one box",
      body: [
        "A vehicle tracker has two jobs. First it has to find out where it is. Then it has to tell someone. For the first job it carries a satellite receiver. The receiver listens to signals from navigation satellites: the American GPS system, usually one or two others, and on some devices India's NavIC. The satellites only broadcast. The tracker never sends anything up to them.",
        "From the timing of those signals the receiver works out latitude, longitude, speed and direction of travel. It needs a clear view of several satellites to do this. Open road gives a good fix. A basement, a tunnel or a spot under a steel body gives a poor one or none.",
        "The same box holds a mobile modem, a little memory and often a small backup battery. A wired device also has input wires. The ignition wire tells it whether the engine is on. Other inputs can read a panic button, a door switch or a fuel sensor, depending on the model.",
      ],
    },
    {
      heading: "The SIM: how the position leaves the vehicle",
      body: [
        "The position is useless while it sits inside the device. A SIM card, normally a data-only SIM meant for machines, lets the modem send it out over the mobile network. Each report is a small packet: time, location, speed, ignition state and a few status flags. The data used per vehicle is small compared with a phone.",
        "When the vehicle leaves coverage, most trackers store the points in memory and send them once the network returns. That is why a truck can show as offline on a ghat section and then have its full route appear an hour later.",
        "Two practical points follow. Check which network generation the device uses and whether that network is strong on your routes. And keep track of SIM validity. An expired SIM is one of the most common reasons a healthy device goes quiet.",
      ],
    },
    {
      heading: "The server: turning raw points into trips and alerts",
      body: [
        "Each device family speaks its own protocol, a fixed format for its messages. The tracking server listens for these messages, decodes them and saves every point against the right vehicle.",
        "Then it adds meaning. Ignition on followed by movement becomes a trip. Ignition on with no movement becomes idling. A point inside a drawn zone becomes a geofence entry. Speed above your limit becomes an overspeed alert. Distance is added up from one point to the next.",
        "The server also cleans the data. A parked vehicle can appear to wander a few metres, and a weak signal can throw one point far off the road. A careful platform filters such spikes and fits the route to the road network, so the distance report does not include kilometres nobody drove.",
      ],
    },
    {
      heading: "The app: what the owner and the office see",
      body: [
        "The web and mobile apps read from the server, not from the device. The map shows each vehicle with a status such as moving, stopped, idle or offline. The list beside it shows speed and the time of the last update.",
        "That last update time deserves attention. A dot on the map is only as fresh as its latest report. If the time is two hours old, you are looking at where the vehicle was, not where it is.",
        "The same data feeds history playback, daily distance reports, stoppage lists and notifications on the phone. Nothing new is measured for these. They are different views of the same stream of points.",
      ],
    },
    {
      heading: "How often the position updates",
      body: [
        "The device decides when to report, based on settings the supplier configures. A wired tracker on a moving vehicle usually reports at short, regular intervals, with extra points on sharp turns so the route keeps its shape. When the ignition is off it reports far less often.",
        "More frequent reporting gives a smoother line on the map and quicker alerts. It also uses more data. On battery-powered trackers it drains the battery faster, which is why those devices often report only a few times a day or when they sense movement.",
        "Ask your supplier what the interval is set to, and whether it can be changed remotely without a visit to the vehicle.",
      ],
    },
    {
      heading: "Where the chain usually breaks",
      body: [
        "When a vehicle goes offline, the cause is almost always in one of the four parts. Working through them in order saves a wasted technician visit.",
        "Location accuracy has limits too. In open sky a fix is normally good to within a few metres. Between tall buildings or under heavy tree cover it gets worse. Treat a single odd point with suspicion and look at the pattern around it.",
      ],
      list: [
        "Power: the device was disconnected, a fuse blew, or the vehicle battery was removed for repair.",
        "SIM: the SIM expired, was deactivated, or has come loose in its tray.",
        "Network: the vehicle is parked in a yard, basement or region with no coverage.",
        "Antenna: the device was moved under metal during body work and can no longer see the sky.",
        "Account: the tracking recharge for that vehicle has lapsed on the platform.",
      ],
    },
    {
      heading: "What this means when you choose a system",
      body: [
        "Because the four parts are separate, you can ask a clear question about each. Which device is it, and what inputs does it have? Whose SIM is inside, and who renews it? Where is the server hosted, and how long is history kept? What do the apps show, and to which of your staff?",
        "Ashwa covers the server and app side, with apps for owners, staff and drivers, and works with widely used tracker families including GT06-protocol, JT/T 808 and Teltonika devices. Whichever platform you pick, the four questions above still apply.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does a GPS tracker need the internet to work?",
      a: "It needs satellite signals to find its position and a mobile data connection to send that position to the server. Without mobile coverage it can still record points, and most devices upload them when the network returns.",
    },
    {
      q: "Can a vehicle tracker work without a SIM card?",
      a: "It can calculate its position, but it cannot report it live. Live tracking needs a SIM or an embedded SIM with an active data plan. Devices without one can only log a route for later download.",
    },
    {
      q: "Why does a parked vehicle show small movements on the map?",
      a: "Satellite positions drift slightly, more so near buildings or under cover. The device may report points a few metres apart while the vehicle stands still. Tracking platforms filter this drift so it does not count as distance.",
    },
    {
      q: "How much mobile data does a vehicle tracker use?",
      a: "Very little compared with a phone, because each report is a small packet. The exact amount depends on how often the device reports. Suppliers normally include the SIM and data in the recurring tracking charge.",
    },
  ],
  related: [
    "solutions/gps-vehicle-tracking-system",
    "products/live-tracking",
    "products/trip-history",
    "products/alerts",
  ],
};

export default article;
