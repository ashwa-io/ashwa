import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "trucking",
  name: "Trucking",
  blurb: "Diesel, driver advances, permits and return loads for truck owners",
  seo: {
    title: "Truck fleet management for owners and small fleets",
    description:
      "Truck fleet management for Indian owner-operators and small fleets: diesel entries, driver advances, permit renewals, trip profit and live location per truck.",
    keywords: [
      "truck fleet management",
      "truck owner software India",
      "driver advance ledger",
      "diesel tracking for trucks",
      "truck permit renewal reminder",
      "truck trip profit",
    ],
  },
  hero: {
    eyebrow: "For truck owners",
    title: "Truck fleet management for owners who count every trip",
    lede: "A truck earns only when it is loaded and moving. Diesel, the driver's advance, tolls, tyres and the EMI are all paid out of that. Ashwa shows where each truck is and what each trip left in your hand after expenses.",
    visual: "maintenance",
  },
  audience: [
    "Truck owners",
    "Owner-operators",
    "Small fleet owners",
    "Munshis",
    "Transport supervisors",
  ],
  problems: [
    {
      title: "Diesel is the bill nobody trusts",
      body: "The driver says the tank was filled twice. The pump slip says one thing and the average says another. Across a month and several trucks, the owner cannot tell an honest poor average from fuel sold on the highway.",
    },
    {
      title: "Advances are never fully settled",
      body: "Cash goes to the driver at loading, more by UPI on the road, and something is held back for the next trip. Three trips later, neither the owner nor the driver agrees on who owes what.",
    },
    {
      title: "Empty days after unloading",
      body: "The truck is unloaded in another state and the owner waits on a broker's call. Each empty day costs the driver's allowance and a slice of the EMI, and the owner cannot even see how long the truck has stood.",
    },
  ],
  how: [
    {
      title: "Install a GPS device",
      body: "We fit a wired tracker on each truck. From then on you see it on the map from your phone, with ignition, speed and last update.",
    },
    {
      title: "Enter the truck's papers",
      body: "Add insurance, fitness, PUC, road tax and state or national permit dates for each truck. Ashwa reminds you before each one falls due.",
    },
    {
      title: "Log trips and cash",
      body: "For each trip, record the freight, the party, the diesel filled and the expenses. Every advance to the driver goes into his cash ledger.",
    },
    {
      title: "Read the result",
      body: "At the end of the trip or the month, see profit per trip and cost per kilometre for each truck, and settle the driver's account.",
    },
  ],
  features: [
    {
      title: "Driver cash ledger",
      body: "Every advance, expense and settlement is entered against the driver, so the running balance is clear to both sides.",
    },
    {
      title: "Diesel and AdBlue entries",
      body: "Record each fill with quantity, amount and odometer. Compare fuel against the distance covered by every truck.",
    },
    {
      title: "Permit and paper reminders",
      body: "National permit, state permit, fitness, insurance, PUC and road tax dates sit on a calendar, with reminders before expiry.",
    },
    {
      title: "Profit on each trip",
      body: "Freight received less diesel, tolls and other trip expenses, shown trip by trip without a separate spreadsheet.",
    },
    {
      title: "Cost per kilometre",
      body: "See what each truck costs to run per kilometre, fuel and maintenance included, and spot the vehicle that is draining money.",
    },
    {
      title: "Halts and route history",
      body: "Check where the truck stopped last night and for how long, and replay the whole route for any day.",
    },
    {
      title: "Service and tyre expenses",
      body: "Log services, tyre changes and repairs with the vendor's name, and get a reminder when the next service is due.",
    },
    {
      title: "Freight payments and dues",
      body: "Record payments against each trip and see which party or broker still owes you a balance.",
    },
    {
      title: "Owner app on the phone",
      body: "Everything is in the mobile app, because a truck owner's office is often the phone in his pocket.",
    },
  ],
  showcase: [
    {
      title: "A driver's account both sides accept",
      body: "The cash ledger lists each advance and each settlement with its date. When the driver returns, you sit together, go through the entries and close the balance. There is no need to rebuild three trips from memory and bank messages.",
      bullets: [
        "Advances and settlements entered against each driver",
        "The running balance visible at any time",
        "A driver profile showing the truck he is assigned to",
        "Driving behaviour and overspeed record for each driver",
      ],
      visual: "drivers",
    },
    {
      title: "From loading to payment on one trip",
      body: "Create a trip when the load is confirmed. It moves from planned to started, reached, delivered and closed. Freight, fuel cost, expenses and payments hang on that trip, so the money is tied to the journey that earned it.",
      bullets: [
        "Trip stages from planned through to closed",
        "Load and deliver stops for each trip",
        "A live link you can send to the party",
        "A free-vehicles view showing which truck is empty",
      ],
      visual: "trips",
    },
    {
      title: "See which truck earns its keep",
      body: "Two trucks of the same model can give very different results. Reports put distance, running time, idle time, fuel and maintenance cost side by side for each vehicle, so you know which to keep and which to sell.",
      bullets: [
        "Distance, running time and idle time per truck",
        "Maintenance cost compared across the fleet",
        "Trip profit and cost for any period",
        "Stoppage and overspeed reports for each vehicle",
      ],
      visual: "reports",
    },
  ],
  outcomes: [
    {
      title: "Diesel matched to distance",
      body: "Fuel entries sit beside GPS distance for the same truck and period. A poor average shows up as a pattern you can question, not a suspicion.",
    },
    {
      title: "Clean settlement with drivers",
      body: "Owner and driver read the same ledger. Settlement becomes a matter of checking entries, and fewer trips end in a quarrel over cash.",
    },
    {
      title: "Papers renewed on time",
      body: "Reminders arrive before a permit, fitness certificate or insurance policy expires. You renew in your own time and not at a check post with a loaded truck.",
    },
  ],
  useCases: [
    {
      title: "An owner-driver with one truck",
      body: "He drives his own truck and his brother handles the paperwork at home. The brother sees the truck on the app, enters diesel and tolls from photos sent on WhatsApp, and knows what the month earned before the EMI date.",
    },
    {
      title: "A family fleet on market loads",
      body: "A father and son run a handful of trucks on loads from brokers. Each truck has a driver with a running advance. The son keeps the ledgers in Ashwa and checks every evening which trucks are empty and where.",
    },
    {
      title: "Trailers on a fixed contract lane",
      body: "A small fleet hauls for a cement plant on one lane. Rates are thin, so the owner watches cost per kilometre and idle time at the plant gate, and opens playback when the plant questions whether a trip was made.",
    },
  ],
  faqs: [
    {
      q: "Can Ashwa tell me if diesel is being stolen?",
      a: "Ashwa records every fuel entry you make and the distance the truck actually covered by GPS. Comparing the two shows each truck's average and where it drops. That will not catch a theft by itself, but it gives you a pattern and the halts on the route to ask about. Fuel sensor monitoring is something we set up with you if you need it.",
    },
    {
      q: "I have only two trucks. Is this meant for me?",
      a: "Yes. There is no minimum fleet size. An owner with one or two trucks uses the same live tracking, diesel entries, driver ledger and renewal reminders as a larger fleet, mostly from the mobile app. You take the modules you need and add others later if the fleet grows.",
    },
    {
      q: "Will my driver have to use an app?",
      a: "No. Tracking works from the GPS device on the truck, and you or your munshi can enter diesel, expenses and advances from the owner app. There is a driver app if you want your drivers to use one, but live location and the ledgers do not depend on it.",
    },
    {
      q: "Does Ashwa find return loads for my truck?",
      a: "No. Ashwa is not a load board or a broker. What it gives you is the free-vehicles view: which trucks are empty and where they are standing. That helps you ring the right broker for the right city sooner, and the reports show how much of the month each truck spent stopped.",
    },
    {
      q: "How do I pay for tracking on each truck?",
      a: "You buy the GPS device for the truck and keep tracking active with a prepaid recharge per vehicle. Modules beyond tracking, such as trips or maintenance, are add-ons billed separately. We do not publish a rate card. Tell us how many trucks you run and what you want to manage, and we will quote.",
    },
  ],
  related: [
    "solutions/truck-tracking",
    "products/maintenance",
    "products/driver-management",
    "products/trip-management",
  ],
};

export default doc;
