import type { Article } from "../types";

const article: Article = {
  slug: "ais-140-explained",
  title: "AIS-140 explained: what it is and who it applies to",
  description:
    "AIS-140 explained in plain terms: what the standard asks of a vehicle tracking device, which vehicles it covers, the state's role and what to check on purchase.",
  category: "Compliance",
  published: "2026-10-30",
  readMinutes: 6,
  keywords: [
    "ais 140",
    "ais 140 gps tracker",
    "ais 140 rules",
    "vehicle location tracking device",
    "panic button for commercial vehicles",
    "ais 140 for buses and taxis",
  ],
  intro:
    "AIS-140 is an Indian automotive standard for vehicle location tracking devices and emergency buttons in public service vehicles. It describes what the device must do and how it must report to government systems. The central motor vehicle rules apply it to specified public service vehicles, and states decide much of the enforcement detail. Whether your vehicle is covered depends on its category, its permit and your state.",
  sections: [
    {
      heading: "What the standard is",
      body: [
        "AIS stands for Automotive Industry Standard. Number 140 in that series deals with intelligent transportation systems for public transport, and in practice it is known for two things: a vehicle location tracking device and one or more emergency buttons for passengers.",
        "The standard is a technical document. It sets out what a device must be able to do and how it is tested. The legal duty to fit such a device comes from the Central Motor Vehicles Rules and from notifications issued by the central and state governments, which refer to the standard.",
        "This distinction matters when you read advice online. The standard changes through amendments, and the rules that apply it change through notifications. Always look for the current position, not an article from some years ago.",
      ],
    },
    {
      heading: "What the device is expected to do",
      body: [
        "In broad terms, an AIS-140 device is a tracker with extra safeguards so that it keeps reporting and can raise an alarm. The exact requirements are in the standard and its amendments. The main ideas are below.",
        "The emergency button is the part passengers see. When pressed, the device sends an alert with the vehicle's location to the designated emergency system, so the placement and wiring of the buttons is part of the fitment, not an afterthought.",
      ],
      list: [
        "Position from satellite navigation, including support for the Indian regional system.",
        "An embedded SIM, with the ability to work across more than one mobile network.",
        "Reporting to a government backend as well as to the operator's own system.",
        "An emergency button or buttons within reach of passengers.",
        "An internal battery so the device keeps working when vehicle power is cut.",
        "Alerts for tampering and disconnection, and storage of data when out of network.",
      ],
    },
    {
      heading: "Which vehicles it applies to",
      body: [
        "The requirement is aimed at public service vehicles: those that carry passengers for hire, such as buses and taxis. The rules also list exemptions, which have included categories such as two-wheelers, three-wheelers and e-rickshaws.",
        "Later notifications have extended tracking requirements to certain goods vehicles, for example those carrying dangerous or hazardous goods. School and institutional buses are treated differently from state to state.",
        "The dates from which the requirement applies have also differed, both by the vehicle's registration date and by state. So the honest answer for any one vehicle is to check. Your Regional Transport Office or the state transport department's website will have the current notification for your category and permit type.",
      ],
    },
    {
      heading: "The state's role",
      body: [
        "States carry out most of the enforcement. A state sets up or appoints a backend system and control centre to receive the data and the emergency alerts. It may publish a list of device manufacturers or models accepted in that state.",
        "Fitment is usually tied to the vehicle record. The device is linked to the registration number on the national vehicle database, and many states check for an active device when the vehicle comes for its fitness certificate or permit work.",
        "Because of this, a device accepted in one state is not automatically accepted in another. If you operate across states or buy vehicles registered elsewhere, confirm the position in the state of registration.",
      ],
    },
    {
      heading: "What to check when you buy",
      body: [
        "A device does not become compliant because the box says so. Approved models are tested by authorised testing agencies and receive a certificate for that specific model. Ask for it.",
        "Also remember that compliance is not a one-time purchase. The embedded SIM has a subscription that expires, and a device that has stopped reporting can cause trouble at the next fitness test.",
      ],
      list: [
        "The type approval certificate for the exact model and version being supplied.",
        "Whether that model is on your state's accepted list, if the state keeps one.",
        "Who fits the device and issues the fitment certificate.",
        "Who activates it on the state system and links it to the vehicle record.",
        "The validity of the SIM subscription and the cost and process of renewal.",
        "Warranty terms and who replaces a faulty unit locally.",
      ],
    },
    {
      heading: "Compliance tracking and your own fleet tracking",
      body: [
        "The government backend exists for the authorities. It does not give you trip reports, fuel records or alerts on your phone. An operator who wants to run the fleet from the data still needs a fleet tracking platform.",
        "Many AIS-140 devices can report to more than one server, so the same unit can serve both purposes. Ask the supplier whether a second destination can be configured and whether there is a charge for it.",
        "Equally, not every vehicle needs such a device. A private goods fleet with no legal or contractual requirement can use ordinary trackers, which cost less and offer more choice.",
      ],
    },
    {
      heading: "Where to go from here",
      body: [
        "Work in this order. Confirm with your transport office whether each vehicle is covered. If it is, get the state's accepted device list, buy a certified model from a seller who will also handle fitment and activation, and note the SIM renewal date alongside the vehicle's other documents.",
        "Ashwa is a tracking and fleet management platform, not a certifying body, and using it does not by itself make a vehicle compliant. If your vehicles need AIS-140 devices, tell us the state and vehicle category and we will tell you which devices we can receive data from. Confirm the legal requirement with your transport office.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is AIS-140 mandatory for all commercial vehicles?",
      a: "No. It is aimed at specified public service vehicles, with some categories exempted and some goods vehicle categories added by later notifications. Coverage depends on vehicle category, permit and state, so check the current rule with your transport office.",
    },
    {
      q: "Is AIS-140 required for private cars?",
      a: "The requirement is directed at public service vehicles, not privately used cars. A private owner can fit any tracker for personal security. If a private car is later used commercially under a permit, the position changes.",
    },
    {
      q: "Can I use a normal GPS tracker in place of an AIS-140 device?",
      a: "Not where the law requires an AIS-140 device. A normal tracker lacks the tested features and will not be accepted at fitness or permit checks. Where no such requirement applies, a normal tracker is perfectly adequate.",
    },
    {
      q: "How do I know if a device is genuinely AIS-140 approved?",
      a: "Ask the seller for the type approval certificate issued by an authorised testing agency for that exact model, and check your state transport department's accepted list if one is published. Do not rely on packaging or a verbal assurance.",
    },
  ],
  related: [
    "solutions/gps-vehicle-tracking-system",
    "solutions/school-bus-tracking",
    "industries/transportation",
    "products/alerts",
  ],
};

export default article;
