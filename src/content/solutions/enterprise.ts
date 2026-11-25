import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "enterprise",
  name: "Enterprise",
  blurb: "Many branches, custom roles, dashboards and integrations",
  seo: {
    title: "Enterprise Fleet Management for Multi-Branch Fleets",
    description:
      "Enterprise fleet management for organisations with many branches. Custom roles, dashboards and workflows, API and webhooks, and integrations built with you.",
    keywords: [
      "enterprise fleet management",
      "multi-branch fleet tracking",
      "custom GPS tracking solutions",
      "fleet management API",
      "fleet tracking integration",
      "role-based fleet access",
    ],
  },
  hero: {
    eyebrow: "Enterprise fleets",
    title: "Enterprise fleet management across branches, roles and systems",
    lede: "A large organisation has regional offices, contractors, an ERP and an audit team, each wanting a different view of the same vehicles. Ashwa is set up around that structure, with custom roles, dashboards, workflows and integrations.",
    visual: "enterprise",
  },
  audience: ["Operations directors", "IT heads", "Regional managers", "Government departments"],
  problems: [
    {
      title: "Each branch tracks in its own way",
      body: "One region uses a local tracker vendor, another uses spreadsheets, a third uses nothing. Head office cannot add up the fleet, let alone compare one branch with another.",
    },
    {
      title: "Everyone sees everything, or nothing",
      body: "A shared login gives the depot clerk the same access as the director. The alternative has been to give access to no one and field requests for reports by email.",
    },
    {
      title: "Vehicle data stops at the tracking screen",
      body: "Dispatch works in the ERP, finance in the accounts system, the client in its own portal. Location and trip data sits apart from all of them and is retyped by hand.",
    },
  ],
  how: [
    {
      title: "Map your organisation",
      body: "Together we model your organisations and branches in Ashwa, then place vehicles, drivers and users in the branch each belongs to.",
    },
    {
      title: "Define roles",
      body: "Create custom roles with granular permissions for each kind of user, so a job title sees and edits only what it should.",
    },
    {
      title: "Shape dashboards and workflows",
      body: "Custom dashboards put each team's figures in front of it. Workflows are configured to follow your approval and reporting steps.",
    },
    {
      title: "Connect your systems",
      body: "Use the API and event webhooks, or have us build an integration, so data reaches your ERP, client portals or government systems.",
    },
  ],
  features: [
    {
      title: "Organisations and branches",
      body: "Hold several legal entities and many branches in one platform, each with its own vehicles and staff.",
    },
    {
      title: "Branch switching",
      body: "Users with access to more than one branch or organisation move between them without signing in again.",
    },
    {
      title: "Custom roles",
      body: "Define roles of your own and set permissions module by module, down to what can be viewed or changed.",
    },
    {
      title: "Custom dashboards",
      body: "Build dashboards for a regional manager, a control room or the board, each showing its own measures.",
    },
    {
      title: "Configured workflows",
      body: "Workflows are set up with you to match the way your organisation approves, escalates and reports on fleet activity.",
    },
    {
      title: "API access",
      body: "Pull fleet data into your own software through the Ashwa API, instead of copying it from screens.",
    },
    {
      title: "Event webhooks",
      body: "Receive events such as geofence entry or trip status in your systems as they occur.",
    },
    {
      title: "Data hosted in India",
      body: "The platform is hosted in India. Users sign in with an organisation code or with Google.",
    },
  ],
  showcase: [
    {
      title: "Fleet data delivered to your other systems",
      body: "Position, trip and alert data is useful beyond the tracking screen. With API access, webhooks and integrations built with your team, it reaches the ERP, the customer's portal or a government portal without anyone keying it in.",
      bullets: [
        "API access for your own development team",
        "Webhooks that push events as they happen",
        "Data sent to government and customer portals",
        "Custom integrations scoped and built with you",
      ],
      visual: "api",
    },
    {
      title: "Dashboards built for each level of management",
      body: "A depot manager needs today's stoppages. A regional head needs utilisation by branch. A director needs cost per kilometre across the fleet. Custom dashboards give each of them a page of their own, drawn from the same data.",
      bullets: [
        "Custom dashboards for teams and roles",
        "Utilisation, distance and idle time by branch",
        "Trip profit, cost per kilometre and maintenance cost",
        "The same underlying data for every level",
      ],
      visual: "reports",
    },
    {
      title: "One map, divided the way you work",
      body: "A large fleet on a single map is noise unless it is organised. Vehicle groups, branches and custom markers let a control room filter to a region, a contract or a vehicle type and watch only what it is responsible for.",
      bullets: [
        "Vehicle groups by region, contract or type",
        "Custom markers for each vehicle category",
        "Live status of moving, stopped, idle and offline",
        "Staff app for managers away from the desk",
      ],
      visual: "live-map",
    },
  ],
  outcomes: [
    {
      title: "One view of the whole fleet",
      body: "Head office sees every branch in the same system, measured by the same definitions, so comparisons between regions finally mean something.",
    },
    {
      title: "Access that matches responsibility",
      body: "People see what their job requires and no more. Shared passwords fall away, and so do the emails asking someone else to send a report.",
    },
    {
      title: "Data entered only once",
      body: "Fleet events flow into the systems that need them. Teams stop retyping trip and location details from one screen to another.",
    },
  ],
  useCases: [
    {
      title: "A manufacturer with regional depots",
      body: "Finished goods move from plants to depots across several states. Each depot is a branch with its own dispatch staff, the logistics head sees all of them, and trip status is passed to the ERP through webhooks.",
    },
    {
      title: "A government department with contractors",
      body: "A department hires vehicles through contractors in each district. District officers get a role limited to their own work, the directorate has a custom dashboard, and data is sent on to the portal the department reports to.",
    },
    {
      title: "A group with several fleet businesses",
      body: "A group owns a transport company, a school and a rental business. Each is its own organisation using different modules, and the group's management switches between them from one login.",
    },
  ],
  faqs: [
    {
      q: "How is the enterprise setup different from the standard platform?",
      a: "It is the same platform and modules. What changes is how much is configured around you: the organisation and branch structure, custom roles, custom dashboards and workflows, and integrations with your systems. We scope this with your team before rollout.",
    },
    {
      q: "Can each branch manage its own vehicles while head office sees all?",
      a: "Yes. Each branch has its own vehicles, drivers and users. Branch staff work within their branch. Users at head office are given access across branches and can switch between them, with dashboards built for the view they need.",
    },
    {
      q: "Do you offer an API for integration with our ERP?",
      a: "Yes. Ashwa provides API access and event webhooks. Your developers can use them directly, or we can build the integration with you. Tell us which system you run and which events and data it needs.",
    },
    {
      q: "Where is our fleet data hosted?",
      a: "Ashwa is hosted in India. If your organisation has specific requirements on data handling or access, raise them during scoping and we will explain how the platform is set up and what can be arranged.",
    },
    {
      q: "Can you build something specific to our operation?",
      a: "Often, yes. Custom dashboards, workflows and integrations are built with customers, and new device models can be onboarded on request. Describe the requirement and we will tell you what is configuration, what is custom work and how it is quoted.",
    },
  ],
  related: [
    "products/roles-and-organisations",
    "products/reports-analytics",
    "solutions/white-label-gps-platform",
    "solutions/fleet-management-software",
  ],
};

export default doc;
