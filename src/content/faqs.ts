import type { Faq } from "./types";

export const siteFaqs: { group: string; items: Faq[] }[] = [
  {
    group: "Getting started",
    items: [
      {
        q: "What is Ashwa?",
        a: "Ashwa is an India-based GPS vehicle tracking, fleet management and transportation platform. You fit GPS devices in your vehicles and use the web and mobile apps to see them live, review history, manage trips, maintenance and drivers, and add modules such as school transport or rentals as you need them.",
      },
      {
        q: "Who is Ashwa meant for?",
        a: "Transport and logistics companies, truck owners, delivery fleets, schools, rental operators, corporate transport teams, construction and field service fleets, municipal waste contractors and GPS dealers. A single-vehicle owner and a multi-branch organisation use the same platform with different modules and permissions.",
      },
      {
        q: "How do I start using Ashwa?",
        a: "Write to hello@ashwa.io with your vehicle count, vehicle types and city. We suggest devices and modules, send a quote, arrange installation and create your organisation. Once devices are fitted and reporting, your team signs in with an organisation code or Google.",
      },
      {
        q: "Can I try it on a few vehicles first?",
        a: "Yes. Many customers begin with a small group of vehicles of different types, run them for a few weeks and then decide on the wider fleet. Tell us what you want to measure during the trial so we can set up the right reports and alerts.",
      },
      {
        q: "Do I need a technical team to run it?",
        a: "No. The office uses a browser and the mobile app, and drivers use their own app. We set up vehicles, groups, geofences and roles with you at the start. After that, day-to-day use needs no technical staff.",
      },
    ],
  },
  {
    group: "Devices and installation",
    items: [
      {
        q: "Which GPS devices work with Ashwa?",
        a: "Ashwa works with widely used tracker families, including Concox GT06-protocol devices, JT/T 808 devices and Teltonika FMB and FMC trackers. Wired, OBD and battery-powered options are supported. If you use a different model, ask us and we can onboard it on request.",
      },
      {
        q: "Can I use trackers I already own?",
        a: "Often, yes. If your existing devices belong to a supported family and are not locked to another server, they can be pointed to Ashwa. Send us the make and model and we will confirm before you spend on new hardware.",
      },
      {
        q: "Who installs the devices?",
        a: "Installation is arranged as part of your order, through our technicians or a dealer near your vehicles. A wired fitting needs the vehicle to stand for a short while. We check that each device is reporting before the vehicle goes back to work.",
      },
      {
        q: "What happens if a driver disconnects the device?",
        a: "Wired trackers with a backup battery send a power-cut alert when they are disconnected, and the vehicle shows as offline with its last known position and time. You can route that alert to the owner or branch manager's phone.",
      },
      {
        q: "Which tracker type should I choose for my vehicles?",
        a: "Wired trackers suit trucks, buses and owned vehicles in daily use. OBD trackers suit leased or rotating cars. Battery-powered trackers suit trailers, containers and equipment with no power supply. Tell us your vehicle mix and we will recommend a type for each.",
      },
    ],
  },
  {
    group: "Tracking and data",
    items: [
      {
        q: "What can I see on the live map?",
        a: "Every vehicle with its status, which is moving, stopped, idle or offline, along with speed, heading and the time of its last update. You can organise vehicles into groups, use custom map markers and switch between the map and a vehicle list.",
      },
      {
        q: "Can I see where a vehicle went on a past day?",
        a: "Yes. Pick any day to see the route, replay it at an adjustable speed and view stops and halts with their duration. Routes are snapped to roads and GPS spikes are filtered out, so distance figures reflect what was actually driven.",
      },
      {
        q: "What alerts does Ashwa send?",
        a: "Overspeed, idling, ignition on and off, geofence entry and exit, device power cut, and renewal and service reminders. Alerts appear in the app and as push notifications on the phone, and they can be shared with others who need to act.",
      },
      {
        q: "Can my customers follow their consignment?",
        a: "Yes. Each trip can have a public live-tracking link that you send to the customer. It shows that trip only, needs no login, and the office can revoke it at any time, for example once the delivery is complete.",
      },
      {
        q: "Where is my data stored and who can see it?",
        a: "Ashwa is hosted in India. Within your organisation, access is controlled by roles with granular permissions, so a branch manager, accountant or supervisor sees only what their role allows. Shared tracking links expose a single trip and nothing else.",
      },
    ],
  },
  {
    group: "Modules and customisation",
    items: [
      {
        q: "Which modules can I add beyond tracking?",
        a: "Trips, reports and analytics, maintenance and renewals, drivers, vehicles, geofencing, route management, rental management, school transport and municipal waste collection. You choose and combine the modules your operation needs and leave out the rest.",
      },
      {
        q: "Can Ashwa handle several branches or companies?",
        a: "Yes. You can run multiple organisations and branches, and a user with access to more than one can switch between them. Custom roles decide what each person sees and does in each place.",
      },
      {
        q: "Does Ashwa have a school bus module with a parent app?",
        a: "Yes. The school transport module covers live bus tracking, routes and stops, bus allocation, student rosters, pickup and drop-off monitoring and an administration dashboard. Parents receive bus arrival notifications, pickup and drop-off updates and messages from the school.",
      },
      {
        q: "Can GPS dealers offer Ashwa under their own brand?",
        a: "Yes. White-label customers get their own subdomain, logo, colours and login screen. A dealer panel manages customer organisations, vehicles, devices, technicians and stock, with bulk device commands and dealer billing that covers prepaid recharges, payments, statements, invoices and GST.",
      },
      {
        q: "Can Ashwa connect to our ERP or a government portal?",
        a: "Yes. Ashwa offers API access and event webhooks, sends data to government and customer portals, and builds custom integrations with the customer. Tell us which system you need to connect and what data it expects.",
      },
    ],
  },
  {
    group: "Pricing and support",
    items: [
      {
        q: "How is Ashwa priced?",
        a: "Pricing is by quote. You pay for the GPS device, then a prepaid tracking recharge for each vehicle. Add-on modules are billed separately, so you pay only for what you use. The quote depends on your vehicle count, device types and chosen modules.",
      },
      {
        q: "Why is there no price list on the website?",
        a: "Because the right figure depends on the devices your vehicles need, the number of vehicles and the modules you choose. A quote based on those details is more useful than a generic rate. Write to hello@ashwa.io and we will send one.",
      },
      {
        q: "What does the tracking recharge cover?",
        a: "The prepaid recharge covers live tracking and the core platform for one vehicle for the recharge period. Add-on modules are charged separately. Your quote lists exactly what is included for your fleet, so ask us to spell out any item that is unclear.",
      },
      {
        q: "What happens when a vehicle's recharge is due?",
        a: "Renewal reminders are raised before the due date, so you can recharge in time and avoid a gap in tracking. If you have removed a vehicle from your fleet, tell us and it need not be renewed.",
      },
      {
        q: "How do I reach support?",
        a: "Email hello@ashwa.io with your organisation name, the vehicle number and a short description of the issue. For an offline vehicle, mention when it last reported and whether any electrical or body work was done recently, which helps us find the cause faster.",
      },
    ],
  },
];
