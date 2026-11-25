import type { PageDoc } from "../types";

const doc: PageDoc = {
  slug: "roles-and-organisations",
  name: "Roles & Organisations",
  blurb: "Organisations, branches, custom roles and granular permissions",
  seo: {
    title: "Multi-branch fleet access control with custom roles",
    description:
      "Multi-branch fleet access control in Ashwa: several organisations and branches, users who switch between them, custom roles and granular permissions.",
    keywords: [
      "multi-branch fleet access control",
      "fleet user roles and permissions",
      "multi-organisation fleet software",
      "branch-wise vehicle access",
      "custom roles for fleet staff",
      "enterprise fleet management India",
    ],
  },
  hero: {
    eyebrow: "Who sees what",
    title: "Multi-branch fleet access control with custom roles",
    lede: "A growing fleet has companies, branches and many hands on the system. Set up each organisation and branch, define roles in your own terms, and decide exactly which vehicles and actions each person is allowed.",
    visual: "enterprise",
  },
  audience: ["Managing directors", "IT administrators", "Regional managers", "Group companies"],
  problems: [
    {
      title: "One password for the whole office",
      body: "The tracking login is written on a sticky note and used by everyone from the director to the trainee. When a setting is changed or a record deleted, there is no telling who did it.",
    },
    {
      title: "Branches see too much",
      body: "The Nagpur depot can open the Hyderabad depot's vehicles, customers and trip money. Managers start comparing notes they were never meant to have, and sensitive figures travel.",
    },
    {
      title: "Group companies in separate accounts",
      body: "A family runs a transport firm, a school and a rental business. Each has its own tracking account, and the person overseeing all three logs in and out of them all day.",
    },
  ],
  how: [
    {
      title: "Create organisations and branches",
      body: "Set up an organisation for each business and branches under it for each depot, city or division. Vehicles and staff are placed where they belong.",
    },
    {
      title: "Define roles",
      body: "Create roles that match your real jobs, such as branch dispatcher or accounts clerk, and choose the permissions each role carries.",
    },
    {
      title: "Add users",
      body: "Give every person their own account and assign a role in the organisation or branch they work for. Shared logins are retired.",
    },
    {
      title: "Switch when needed",
      body: "Users attached to several organisations or branches move between them from one sign-in, without keeping a separate password for each.",
    },
  ],
  features: [
    {
      title: "Multiple organisations",
      body: "Run separate businesses as separate organisations on one platform, each with its own vehicles, staff and data.",
    },
    {
      title: "Branches under each organisation",
      body: "Divide an organisation into branches, so each location works with its own fleet while head office sees the whole.",
    },
    {
      title: "Organisation switching",
      body: "A user who belongs to more than one organisation or branch changes context from a menu, staying signed in.",
    },
    {
      title: "Custom roles",
      body: "Build roles from scratch instead of choosing from a fixed list of admin, manager and viewer.",
    },
    {
      title: "Granular permissions",
      body: "Grant or withhold individual abilities, such as viewing trip payments, editing vehicles or adding fuel entries.",
    },
    {
      title: "Custom dashboards",
      body: "Have dashboards configured for your organisation, so each level of management opens to the figures it is answerable for.",
    },
    {
      title: "Custom workflows",
      body: "Where your process differs from the standard one, workflows can be configured to follow the steps your business uses.",
    },
    {
      title: "Organisation code sign-in",
      body: "Staff sign in with the organisation's code or with Google, which keeps each company's users apart.",
    },
  ],
  showcase: [
    {
      title: "Dashboards shaped for each level",
      body: "A director, a regional head and a depot supervisor do not need the same first screen. Custom dashboards are configured with you, so each opens to its own scope: the group, a region or a single yard, with the measures that person reports on.",
      bullets: [
        "Dashboards configured for your organisation's structure",
        "Scope limited to the user's branch or region",
        "Head office view across every branch together",
      ],
      visual: "reports",
    },
    {
      title: "Staff accounts with a defined remit",
      body: "Each staff member has a personal account tied to a role. A dispatcher plans trips but cannot see dues. An accounts clerk records payments but cannot reassign drivers. When someone leaves, their account is closed and nobody else is disturbed.",
      bullets: [
        "A personal sign-in for every staff member",
        "Permissions granted one action at a time",
        "Access removed for one person without affecting others",
      ],
      visual: "drivers",
    },
    {
      title: "The same rules on the phone",
      body: "Access control would mean little if the mobile app ignored it. The owner and staff app applies the same role as the web, and a user with several organisations switches between them on the phone just as at the desk.",
      bullets: [
        "Roles applied identically on web and mobile",
        "Switch organisation or branch inside the app",
        "Notifications only for vehicles in the user's scope",
      ],
      visual: "mobile-app",
    },
  ],
  outcomes: [
    {
      title: "Clear responsibility for actions",
      body: "With individual accounts, each change in the system belongs to a named person, which makes mistakes easier to trace and correct.",
    },
    {
      title: "Sensitive data stays contained",
      body: "Customer lists, trip earnings and dues are visible only to the roles that need them, branch by branch and company by company.",
    },
    {
      title: "One platform for the group",
      body: "Several businesses and locations are managed under one roof, and the people who oversee them move between views in a click.",
    },
  ],
  useCases: [
    {
      title: "Trip money hidden from dispatch",
      body: "A logistics company wants dispatchers to plan and progress trips in Trip Management without seeing freight amounts. A custom role grants trip planning and withholds expenses, payments and dues, which remain with the accounts team.",
    },
    {
      title: "A school inside a business group",
      body: "A group that owns a transport company and a school sets up two organisations. The school's staff use School Transport and never see the trucks. The group's director switches between both from one account.",
    },
    {
      title: "Workshop staff limited to upkeep",
      body: "A bus operator gives its mechanics a role confined to Maintenance: fuel entries, service entries and the renewal calendar. They cannot open Live Tracking or driver ledgers, and their entries still feed head office cost reports.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between an organisation and a branch?",
      a: "An organisation is a separate business with its own vehicles, users and records. A branch is a division inside an organisation, usually a depot or a city office. Head office users can see across branches, and branch users are limited to their own.",
    },
    {
      q: "Can one person work in more than one organisation?",
      a: "Yes. A user can be attached to several organisations and branches, with a different role in each if required. They sign in once and switch between them from within the application, on the web and on the mobile app.",
    },
    {
      q: "How detailed can permissions be?",
      a: "Roles are built from granular permissions, so you can separate viewing from editing and one module from another. For example, a role may view vehicles and alerts but have no access to trip payments or the driver cash ledger.",
    },
    {
      q: "Are custom dashboards and workflows included for every customer?",
      a: "They are configured for organisations that need them, usually larger or multi-branch set-ups. Tell us how your business is structured and what each level needs to see, and we include the configuration in your quote.",
    },
    {
      q: "Where is our data hosted?",
      a: "Ashwa is hosted in India. Each organisation's data is kept apart from every other organisation's, and within yours, access is governed by the roles and permissions you set for your own staff.",
    },
  ],
  related: [
    "solutions/enterprise",
    "industries/corporate-fleets",
    "products/mobile-app",
    "products/reports-analytics",
  ],
};

export default doc;
