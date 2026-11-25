import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "trip-management",
  name: "Trip Management",
  blurb: "Run every trip from planned to closed, with stops, costs and dues",
  seo: {
    title: "Trip management software for transport operators",
    description:
      "Trip management software that takes each trip from planned to closed, with load and deliver stops, expenses, payments, dues and a live link for customers.",
    keywords: [
      "trip management software",
      "transport trip management",
      "trip expense tracking",
      "trip sheet software",
      "consignment tracking link",
      "truck trip management India",
    ],
  },
  hero: {
    eyebrow: "Trips and money",
    title: "Trip management software from planned to closed",
    lede: "A trip in Ashwa has a vehicle, a driver, a customer, load and deliver stops, and money. It moves from planned to started, reached, delivered and closed, and the office sees every stage on one board.",
    visual: "trips",
  },
  audience: ["Transport owners", "Dispatchers", "Accountants", "Customer service staff"],
  problems: [
    {
      title: "Trips live in a notebook",
      body: "The loads for the day are in a register, a spreadsheet and three chat groups. When the dispatcher is on leave, nobody else can say which truck is on which job or what was promised to whom.",
    },
    {
      title: "Expenses arrive weeks later",
      body: "Toll slips, loading charges and diesel bills come back in a driver's pocket long after the trip. By the time they are added up, nobody remembers whether that load made money.",
    },
    {
      title: "Consignees keep asking for updates",
      body: "A consignee wants to know when the truck will reach. The office calls the driver, relays the answer, and repeats the exercise for every load on the road that afternoon.",
    },
  ],
  how: [
    {
      title: "Plan the trip",
      body: "Create a trip with its customer, vehicle, driver and load and deliver stops. The free-vehicles view shows which vehicles are not committed, so you assign one that is available.",
    },
    {
      title: "Start and follow it",
      body: "Mark the trip started when the vehicle leaves. It moves through reached and delivered as the job progresses, and the trip board shows every open trip by stage.",
    },
    {
      title: "Record the money",
      body: "Add trip expenses and fuel cost as they happen. Enter payments received from the customer, and the balance stays on the trip as dues.",
    },
    {
      title: "Close the trip",
      body: "When delivery is done and the figures are entered, close the trip. It leaves the board and stays on record with its costs, payments and route.",
    },
  ],
  features: [
    {
      title: "Five trip stages",
      body: "Every trip is planned, started, reached, delivered or closed. One look tells you how far each job has got.",
    },
    {
      title: "Load and deliver stops",
      body: "A trip can carry several stops, each marked as a loading or a delivery point, in the order the vehicle will visit them.",
    },
    {
      title: "Customer records",
      body: "Keep the customers you run for and attach each trip to one, so past jobs and outstanding dues are found by name.",
    },
    {
      title: "Trip expenses and fuel",
      body: "Enter tolls, loading charges, allowances and fuel cost against the trip they belong to, not in a general ledger at month end.",
    },
    {
      title: "Payments and dues",
      body: "Record what the customer has paid for a trip. The unpaid amount is carried as dues until it is settled.",
    },
    {
      title: "Trip board",
      body: "A board of all open trips arranged by stage, so the dispatcher sees what is planned, what is running and what is waiting to be closed.",
    },
    {
      title: "Free-vehicles view",
      body: "A list of vehicles with no active trip, so the next load goes to a vehicle that is standing, not one already promised.",
    },
    {
      title: "Public tracking link",
      body: "Each trip has a live-tracking link you can send to the customer. The office can revoke the link whenever it chooses.",
    },
  ],
  showcase: [
    {
      title: "A tracking link the customer can open",
      body: "Send the consignee a link for their trip and they follow the vehicle on a map in their own browser, with no login. The link covers that one trip. When the job is finished, or sooner if you prefer, the office revokes it.",
      bullets: [
        "One public link for each trip",
        "The customer sees that trip and nothing else",
        "Revoke the link from the office at any time",
      ],
      visual: "live-map",
    },
    {
      title: "What each trip earned and what it cost",
      body: "Because expenses, fuel cost and payments are entered on the trip itself, the arithmetic is done for you. Open a closed trip and the money in and the money out are side by side, with any dues still pending from the customer.",
      bullets: [
        "Expenses and fuel cost held against each trip",
        "Payments received and dues outstanding by customer",
        "Trip profit and cost carried into Reports and Analytics",
      ],
      visual: "reports",
    },
    {
      title: "Know which vehicle is free",
      body: "A new enquiry comes in at noon. The free-vehicles view lists every vehicle that has no trip running, so the dispatcher quotes with a real vehicle in mind and does not double-book a truck that is still unloading.",
      bullets: [
        "Vehicles without an active trip listed together",
        "Assign a free vehicle and driver to a planned trip",
        "Committed vehicles stay off the list until their trip closes",
      ],
      visual: "vehicles",
    },
  ],
  outcomes: [
    {
      title: "Anyone can run the desk",
      body: "Trips are on a shared board, not in one person's head. A colleague can pick up the day's work when the dispatcher is away.",
    },
    {
      title: "Trip accounts closed sooner",
      body: "Costs are entered while the trip is fresh, so the result of a load is known when it closes, not at the end of the quarter.",
    },
    {
      title: "Dues stay in view",
      body: "Unpaid amounts sit on the trip and against the customer until settled, which makes follow-up a routine instead of a search through old bills.",
    },
  ],
  useCases: [
    {
      title: "Driver advance against a trip",
      body: "A truck leaves on a long haul with a cash advance. The advance is entered in the driver cash ledger in Driver Management, the tolls and diesel go on the trip as expenses, and the settlement on return is worked out from both.",
    },
    {
      title: "Arrival confirmed by a zone",
      body: "A cement carrier draws geofences around its regular unloading yards. When the vehicle enters the yard, the Geofencing event tells the office the truck has reached, and the dispatcher moves the trip to the next stage with confidence.",
    },
    {
      title: "Monthly review of lanes",
      body: "At month end the owner opens trip profit and cost per kilometre in Reports and Analytics. Closed trips are the source, so lanes that barely cover diesel and tolls are visible and the rate is renegotiated with the customer.",
    },
  ],
  faqs: [
    {
      q: "What are the stages of a trip in Ashwa?",
      a: "A trip is planned when it is created, started when the vehicle leaves, reached when it arrives at the destination, delivered when the goods are handed over, and closed when the office has finished its entries. The trip board groups open trips by these stages.",
    },
    {
      q: "Can a trip have more than one loading or delivery point?",
      a: "Yes. A trip holds a list of stops, and each stop is either a load stop or a deliver stop. This covers part loads, multiple drops in one city and a pickup on the way back.",
    },
    {
      q: "How does the public tracking link work?",
      a: "Each trip has its own link. Whoever opens it sees that vehicle on a map for that trip, without signing in. It does not expose your other vehicles or customers. The office can revoke the link, after which it stops working.",
    },
    {
      q: "Does trip management replace my accounting software?",
      a: "No. It records the money that belongs to a trip: expenses, fuel cost, payments received and dues. That is enough to know whether a trip paid and who owes you. Statutory books, GST returns and payroll stay in your accounting package.",
    },
    {
      q: "Can I use trips without GPS devices on the vehicles?",
      a: "Trips can be planned, costed and closed as records. The live position on a trip and the customer tracking link need a GPS device on the vehicle. Most operators use trips together with Live Tracking for that reason.",
    },
  ],
  related: [
    "products/driver-management",
    "products/reports-analytics",
    "products/live-tracking",
    "industries/logistics",
  ],
};

export default doc;
