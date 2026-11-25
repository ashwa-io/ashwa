import type { Article } from "../types";

const article: Article = {
  slug: "vehicle-document-renewals-checklist",
  title: "Insurance, PUC, fitness, permits: a renewal checklist for fleet owners",
  description:
    "A renewal checklist for Indian fleet owners covering insurance, PUC, fitness certificate, permits, road tax and driver licences, with a simple register to keep.",
  category: "Compliance",
  published: "2026-11-19",
  readMinutes: 6,
  keywords: [
    "vehicle document renewal checklist",
    "commercial vehicle fitness certificate renewal",
    "vehicle insurance renewal reminder",
    "puc certificate renewal",
    "national permit renewal",
    "fleet compliance india",
    "road tax commercial vehicle",
  ],
  intro:
    "Every commercial vehicle carries a set of documents that expire on different dates: insurance, pollution certificate, fitness certificate, permits, road tax and the driver's licence. A lapse can mean a fine, a detained vehicle or a disputed insurance claim. The fix is one list per vehicle with every expiry date, a named person responsible for renewals and reminders set well ahead.",
  sections: [
    {
      heading: "Why lapses happen in fleets",
      body: [
        "Nobody decides to let a permit lapse. It happens because each document has its own cycle, the papers sit in different folders, and the one person who remembered the dates was on leave.",
        "The cost usually arrives at a bad moment. A truck is stopped at a check post with a load on board. A bus fails to get clearance on a school morning. An accident claim is questioned because the fitness certificate had expired the previous month.",
        "With two vehicles you can keep it in your head. With ten, across more than one state, you need a system, even if the system is a ruled register.",
      ],
    },
    {
      heading: "The documents on each vehicle",
      body: [
        "Start by listing what each vehicle must carry. The core set is the same across India, though the names of some permits and taxes vary.",
        "Some vehicles need more, depending on what they carry and where they go. Tankers and hazardous goods carriers have additional licences. Vehicles crossing state borders may pay entry taxes or need authorisations beyond the base permit. Ask your transport agent for the full list for each vehicle type you run.",
      ],
      list: [
        "Registration certificate: the vehicle's identity. For transport vehicles its validity is linked to fitness.",
        "Insurance: at least third-party cover is required by law. Most fleets hold a wider policy.",
        "Pollution under control certificate: issued after an emission test at an authorised centre.",
        "Fitness certificate: confirms a transport vehicle is roadworthy, issued after inspection.",
        "Permit: authorises commercial use, for a state, a region or nationally.",
        "Road tax: paid to the state for a period, with a receipt or record to show for it.",
      ],
    },
    {
      heading: "What decides each renewal cycle",
      body: [
        "It would be convenient to print a table of validity periods here. It would also be wrong for some readers, because the periods depend on several things.",
        "Fitness validity depends on the class of vehicle and its age, with older vehicles tested more often. Pollution certificate validity depends on the vehicle's emission norm and the state. Road tax may be paid quarterly, yearly or for longer, according to state rules and vehicle type. Permits have their own term, and a national permit carries an authorisation that is renewed on its own cycle.",
        "So do not rely on rules of thumb. Read the expiry date printed on each document, and confirm current rules and fees on the government's Parivahan portal or with your Regional Transport Office.",
      ],
    },
    {
      heading: "Driver-side documents",
      body: [
        "A vehicle with perfect papers is still off the road if the driver's licence has expired. Keep driver documents in the same register as vehicle documents.",
        "Record the licence number, the vehicle classes it covers and its expiry date. Transport licences are renewed more often than private ones, and a driver past a certain age may need a medical certificate. Drivers of hazardous goods vehicles need a specific endorsement, and some states require a badge for passenger vehicle drivers.",
        "Check the original when a driver joins and verify it online where the state offers that service. A photocopy handed over on the first day is not enough.",
      ],
    },
    {
      heading: "Build the register",
      body: [
        "Make one row for each vehicle and one column for each document. In every cell, write the expiry date. Add columns for the policy or certificate number and the agent or office that handles it.",
        "Then sort by date, not by vehicle. What you need each Monday is a single list of everything expiring in the coming weeks, across the whole fleet. That list is the actual tool. The register only feeds it.",
        "Give the list an owner. One named person checks it weekly and starts each renewal. A second person should know how it works, so that leave or resignation does not break the chain. Keep scanned copies of every document in one shared folder, named by vehicle number.",
      ],
    },
    {
      heading: "Habits that prevent last-minute trouble",
      body: [
        "Start early. Insurance can be renewed in minutes, but a fitness test needs the vehicle to be presented, sometimes after repairs. Plan it for a day when the vehicle is in town and not committed to a trip.",
        "Clear pending challans. Unpaid traffic fines recorded against a vehicle can hold up other services at the transport office. Check the vehicle's record online before you apply.",
        "Carry digital copies properly. Documents held in the government's DigiLocker or mParivahan apps are generally accepted in place of paper, but a photo in the driver's gallery is not the same thing. Make sure drivers know how to show them.",
        "Budget for the year. Insurance premiums, taxes and permit fees are predictable. Spread on a calendar, they stop arriving as shocks.",
      ],
    },
    {
      heading: "Using software for reminders",
      body: [
        "A spreadsheet works until someone forgets to open it. The advantage of software is that the reminder comes to you, on your phone, before the date. It also keeps the document copy, the expiry and the vehicle's history in one place when a vehicle changes branch or driver.",
        "In Ashwa, renewals for insurance, PUC, fitness, RC, road tax and permits are recorded against each vehicle, shown on a calendar of everything due, and raised as alerts ahead of the date. Whichever tool you use, the register and the named owner come first.",
      ],
    },
  ],
  faqs: [
    {
      q: "What happens if a commercial vehicle runs without a valid fitness certificate?",
      a: "The vehicle can be fined and may be detained, and an insurer may question a claim arising while the certificate was expired. Penalties are set under the motor vehicle law and state rules, so check the current amounts locally.",
    },
    {
      q: "How early can I renew vehicle documents?",
      a: "It differs by document and state. Insurance can usually be renewed some weeks ahead. Fitness, permit and tax renewals have their own windows. Ask your transport office or agent, and start as early as the rules allow.",
    },
    {
      q: "Are digital copies of vehicle documents valid during checks?",
      a: "Documents shown through the government's DigiLocker or mParivahan apps are generally accepted as equivalent to originals. Plain photographs or scans may not be. Confirm current practice in the states where your vehicles run.",
    },
    {
      q: "Who should be responsible for renewals in a small fleet?",
      a: "One named person, with one backup. In a small fleet that is often the owner or the accountant. What matters is that the duty is assigned and that the list of upcoming dates is checked every week.",
    },
  ],
  related: [
    "products/maintenance",
    "products/vehicle-management",
    "products/alerts",
    "solutions/fleet-management-software",
  ],
};

export default article;
