import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "vehicle-management",
  name: "Vehicle Management",
  blurb: "One profile per vehicle, with category, documents, groups and history",
  seo: {
    title: "Vehicle management system for mixed Indian fleets",
    description:
      "A vehicle management system with a profile for every vehicle: category, custom types, documents, groups and history, from trucks and buses to two-wheelers.",
    keywords: [
      "vehicle management system",
      "fleet vehicle records",
      "vehicle profile software",
      "vehicle document management",
      "vehicle categories and groups",
      "fleet inventory India",
    ],
  },
  hero: {
    eyebrow: "The fleet register",
    title: "A vehicle management system for every category",
    lede: "Each vehicle gets a profile: what it is, which group it belongs to, the documents it carries and what has happened to it. Trucks, vans, buses, cars, two-wheelers, three-wheelers, trailers and special purpose vehicles sit in one register.",
    visual: "vehicles",
  },
  audience: ["Fleet owners", "Fleet administrators", "Branch managers", "Workshop supervisors"],
  problems: [
    {
      title: "The register is a spreadsheet",
      body: "Registration numbers, chassis details and purchase dates sit in a file that one person maintains. Two branches keep two versions, and neither matches the vehicles actually standing in the yard.",
    },
    {
      title: "Mixed fleets get one label",
      body: "A business runs tippers, a water tanker, staff cars and delivery bikes. Software that treats all of them as a generic vehicle makes lists hard to read and reports hard to compare.",
    },
    {
      title: "Papers are filed somewhere else",
      body: "The RC copy is in a cupboard at head office and the insurance policy is in an email. When a buyer, an auditor or a traffic officer asks, the search begins.",
    },
  ],
  how: [
    {
      title: "Add each vehicle",
      body: "Enter the registration number and basic particulars, and choose a category. If none of the standard categories describes it, create a custom type of your own.",
    },
    {
      title: "Attach documents",
      body: "Store the vehicle's documents on its profile with their validity dates, so the paper and the vehicle are never looked up in two places.",
    },
    {
      title: "Organise into groups",
      body: "Put vehicles into groups that match how you work: by branch, by client contract, by route or by the supervisor who looks after them.",
    },
    {
      title: "Let history build",
      body: "As the vehicle is tracked, fuelled, serviced and assigned, those records collect on its profile. Open it later and the story is there.",
    },
  ],
  features: [
    {
      title: "Vehicle profile",
      body: "A single page for each vehicle with its particulars, category, group, assigned driver, documents and past records.",
    },
    {
      title: "Standard categories",
      body: "Truck, van, bus, car, two-wheeler, three-wheeler, trailer and special purpose are available from the start.",
    },
    {
      title: "Custom vehicle types",
      body: "Define your own types, such as tipper, reefer, tanker or tempo traveller, so lists use the words your staff already use.",
    },
    {
      title: "Documents on file",
      body: "Keep RC, insurance, PUC, fitness, road tax and permit details with the vehicle, ready when someone asks for them.",
    },
    {
      title: "Grouping by operation",
      body: "Create groups and move vehicles between them. Groups carry across the map, lists and reports as a filter.",
    },
    {
      title: "Vehicle history",
      body: "The profile gathers what has happened to the vehicle over time, giving a new manager the background in one read.",
    },
    {
      title: "Device link",
      body: "Each profile shows the GPS device fitted to the vehicle, whether wired, OBD or battery-powered, so hardware and vehicle stay matched.",
    },
  ],
  showcase: [
    {
      title: "Documents and upkeep on the same profile",
      body: "A vehicle's papers and its running records belong together. With the Maintenance module, renewal dates, service entries, fuel fills and expenses appear on the profile, so the question of whether a truck is fit to send out has one place to look.",
      bullets: [
        "Validity dates for each document on the profile",
        "Service and fuel records gathered under the vehicle",
        "Useful background at resale or insurance claim time",
      ],
      visual: "maintenance",
    },
    {
      title: "Groups that follow you to the map",
      body: "A group made here is not just a label in a list. Filter the live map to the Pune depot or to one client's dedicated vehicles, and the same grouping narrows reports, so each manager works with the slice that is theirs.",
      bullets: [
        "Filter the fleet map by vehicle group",
        "Give each category a marker that suits it",
        "Run reports for one group instead of the whole fleet",
      ],
      visual: "live-map",
    },
  ],
  outcomes: [
    {
      title: "One register everyone trusts",
      body: "Branches and head office work from the same list of vehicles, so counts, numbers and particulars stop differing between files.",
    },
    {
      title: "Papers found in seconds",
      body: "Documents are opened from the vehicle's profile, which saves the hunt through cupboards and inboxes when someone needs a copy.",
    },
    {
      title: "Lists that make sense",
      body: "With categories, custom types and groups, a large mixed fleet is browsed in sensible sections instead of one long scroll of numbers.",
    },
  ],
  useCases: [
    {
      title: "Equipment and trucks side by side",
      body: "A contractor lists excavators and transit mixers as special purpose vehicles and tippers as trucks. Groups are made for each project site, and Live Tracking shows the site manager only the machines and trucks on his own project.",
    },
    {
      title: "Handing over a vehicle",
      body: "A van is transferred from one branch to another. The receiving manager opens its profile, reads the service entries from Maintenance and the current assignment from Driver Management, and knows what he is inheriting before the keys arrive.",
    },
    {
      title: "Rental cars by class",
      body: "A rental operator creates custom types for hatchback, sedan and SUV. When a booking is taken in Rental Management, the desk looks for an open car of the right type, and a customer asking for a large family vehicle is not offered a hatchback.",
    },
  ],
  faqs: [
    {
      q: "Which vehicle categories does Ashwa support?",
      a: "Truck, van, bus, car, two-wheeler, three-wheeler, trailer and special purpose vehicle. On top of these you can create custom types, so a fleet with tankers, reefers or ambulances can name them as such and filter by them.",
    },
    {
      q: "Can I add a vehicle that has no GPS device yet?",
      a: "Yes. A vehicle can be kept as a record with its particulars and documents, which is useful for renewals and maintenance. Live position, history and alerts begin once a device is fitted and linked to that vehicle.",
    },
    {
      q: "What is the difference between a category and a group?",
      a: "A category says what the vehicle is, such as a bus or a trailer. A group says how you organise it, such as a branch, a client or a route. A vehicle has one category and can be arranged into the groups your operation needs.",
    },
    {
      q: "Can I import my existing vehicle list?",
      a: "When you come on board, share your current list with us and we set up the vehicles with you, along with their devices. After that your staff can add and edit vehicles themselves, if their role permits it.",
    },
    {
      q: "Can trailers be managed separately from the trucks that pull them?",
      a: "Yes. A trailer is its own category with its own profile and documents. If you want its location independently of the horse, we set it up with a suitable battery-powered or wired device, depending on how the trailer is used.",
    },
  ],
  related: [
    "products/maintenance",
    "products/driver-management",
    "products/live-tracking",
    "solutions/fleet-management-software",
  ],
};

export default doc;
