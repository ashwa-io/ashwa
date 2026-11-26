import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { FleetScene } from "@/components/hero3d/fleet-scene";
import { Reveal } from "@/components/site/reveal";
import { Tabs } from "@/components/site/tabs";
import {
  ButtonLink,
  CardLink,
  CtaBand,
  FaqList,
  SectionHeader,
} from "@/components/site/ui";
import { LiveShowcase, PhoneTrio, Visual } from "@/components/visuals";
import { PORTRAITS } from "@/content/photos";
import { cn } from "@/lib/utils";
import { DOCS, articles, getDoc } from "@/content";
import { pageContext } from "@/content/contexts";
import { siteFaqs } from "@/content/faqs";
import type { PageKind } from "@/content/types";

const AUDIENCES: { label: string; ref: [PageKind, string]; points: string[] }[] = [
  {
    label: "Fleet owners",
    ref: ["solutions", "fleet-management-software"],
    points: ["Every vehicle on one map", "Trips with cost and profit", "Fuel, service and renewals"],
  },
  {
    label: "Schools",
    ref: ["solutions", "school-bus-tracking"],
    points: ["Routes, stops and students", "Parents see the bus arriving", "Pickup and drop-off updates"],
  },
  {
    label: "Rental companies",
    ref: ["solutions", "rental-fleet-management"],
    points: ["Bookings on a calendar", "Know where each car is", "Share a live trip link"],
  },
  {
    label: "Logistics",
    ref: ["solutions", "logistics-fleet-tracking"],
    points: ["Stops in order, with timings", "Customers track their own load", "Expected against actual arrival"],
  },
  {
    label: "Enterprises",
    ref: ["solutions", "enterprise"],
    points: ["Branches and custom roles", "Dashboards built around you", "Data sent to your systems"],
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "A GPS device goes in the vehicle",
    body: "Wired, OBD or battery-powered, fitted by a technician. It reads position, speed and heading every few seconds.",
  },
  {
    title: "It reports over the mobile network",
    body: "A SIM inside the device sends each reading to Ashwa. When there is no signal, the device stores readings and sends them later.",
  },
  {
    title: "The platform makes sense of it",
    body: "Raw points become clean routes, stops, trips and events. Spikes are filtered and routes follow the road.",
  },
  {
    title: "Your team sees it on web and mobile",
    body: "Owners, dispatchers, drivers and parents each get the view that fits their job, with access set by role.",
  },
  {
    title: "Alerts and reports do the watching",
    body: "Overspeed, a missed stop, a permit about to lapse: you hear about it without staring at a map.",
  },
];

const REASONS: { title: string; body: string }[] = [
  {
    title: "Start small, add modules",
    body: "Start with live tracking. Add trips, maintenance, routes or school transport when you need them.",
  },
  {
    title: "One account, any fleet size",
    body: "The same account runs a handful of vehicles or a multi-branch fleet, across organisations.",
  },
  {
    title: "Customised with you",
    body: "Custom dashboards, workflows and integrations, set up around how your operation already works.",
  },
  {
    title: "One record for the whole fleet",
    body: "Location, trips, drivers, documents and costs sit together, so nobody copies numbers between sheets.",
  },
  {
    title: "One live position on every screen",
    body: "The map, the trip board and the parent's phone all update from the same live position.",
  },
];

function Panel({ kind, slug, points }: { kind: PageKind; slug: string; points: string[] }) {
  const doc = getDoc(kind, slug);
  if (!doc) return null;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <h3 className="display-3">{doc.hero.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{doc.hero.lede}</p>
        <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 font-medium">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
        <ButtonLink href={`/${kind}/${slug}`} variant="secondary" className="mt-8">
          {doc.name}
        </ButtonLink>
      </div>
      <Visual name={doc.hero.visual} context={pageContext(kind, slug)} />
    </div>
  );
}

export default function Home() {
  const solutions = DOCS.solutions;
  const products = DOCS.products;
  const industries = DOCS.industries;
  const faqs = siteFaqs.flatMap((g) => g.items.slice(0, 2)).slice(0, 7);

  return (
    <main>
      {/* 1. Hero: copy is server-rendered text; the 3D tile loads after it. */}
      <section className="grid-lines relative overflow-hidden">
        <div className="wrap relative z-10 grid min-h-[100svh] items-center pb-[46svh] pt-28 lg:pb-16 lg:pt-24">
          <div className="max-w-[40rem]">
            <h1 className="display-1">
              Every vehicle you run, on one <span className="text-primary">live</span> platform.
            </h1>
            <p className="lede mt-6 max-w-xl">
              Ashwa pairs GPS devices with software you build from modules: live tracking, trips,
              maintenance, school transport, rentals and more. Take what your operation needs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/demo">Book a demo</ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                Explore the platform
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-foreground/15 pt-5 text-sm font-medium text-muted-foreground">
              <li>Devices and software</li>
              <li>{products.length} modules</li>
              <li>Web and mobile</li>
              <li>Hosted in India</li>
            </ul>
          </div>
        </div>
        <FleetScene portraits={PORTRAITS} className="absolute inset-x-0 bottom-0 h-[52svh] [mask-image:linear-gradient(to_bottom,transparent,black_16%)] lg:inset-y-0 lg:left-[46%] lg:right-0 lg:h-auto lg:[mask-image:linear-gradient(to_right,transparent,black_20%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
        />
      </section>

      {/* 2. Platform overview */}
      <section aria-labelledby="overview-title" className="border-t border-border py-24 md:py-40">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 id="overview-title" className="display-2">
              More than a dot on a map. A tracking ecosystem you shape around your work.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Most tracking products stop at showing where a vehicle is. The harder questions come
              next: what did that trip earn, which permit lapses this month, did the bus reach every
              stop, is the rental car where the customer said it would be.
            </p>
            <p>
              Ashwa answers them with modules that share one live position. A transporter, a school
              and a rental company all run the same platform, each with a different set switched on.
            </p>
            <Link href="/about" className="group inline-flex items-center gap-2 font-medium text-foreground">
              Why we built it this way
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. One platform, multiple solutions */}
      <section aria-labelledby="audiences-title" className="border-y border-border bg-card py-20 md:py-28">
        <div className="wrap">
          <SectionHeader
            title={<span id="audiences-title">The same platform, arranged for your business</span>}
          />
          <div className="mt-12">
            <Tabs
              label="Who uses Ashwa"
              items={AUDIENCES.map((a) => ({
                label: a.label,
                panel: <Panel kind={a.ref[0]} slug={a.ref[1]} points={a.points} />,
              }))}
            />
          </div>
        </div>
      </section>

      {/* 4. Solutions */}
      <section aria-labelledby="solutions-title" className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title={<span id="solutions-title">Find the one that matches how you run vehicles</span>}
            />
            <ButtonLink href="/solutions" variant="secondary" className="shrink-0">
              All solutions
            </ButtonLink>
          </div>
          <Reveal className="mt-12">
            <Link
              href={`/solutions/${solutions[0].slug}`}
              className="group grid items-center gap-8 rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-foreground/40 hover:shadow-lift lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10"
            >
              <span>
                <span className="display-3 block">{solutions[0].name}</span>
                <span className="mt-3 block leading-relaxed text-muted-foreground">
                  {solutions[0].hero.lede}
                </span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                  Explore {solutions[0].name.toLowerCase()}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
              <Visual name={solutions[0].hero.visual} />
            </Link>
          </Reveal>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(1).map((s) => (
              <div key={s.slug}>
                <CardLink
                  href={`/solutions/${s.slug}`}
                  title={s.name}
                  body={s.blurb}
                  className="h-full"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <Link
                href="/contact"
                className="on-ink group flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <span className="eyebrow text-ink-muted">Mixed fleet?</span>
                <span className="mt-8 block">
                  <span className="display-3 block max-w-md">
                    Most customers combine two or three of these.
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Tell us what you run
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product ecosystem */}
      <section aria-labelledby="modules-title" className="on-ink py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <h2 id="modules-title" className="display-2">
                {products.length} modules. Choose yours.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              Each module works on its own and gets better with the others. Live tracking feeds
              trips. Trips feed reports. Maintenance knows the odometer because tracking does.
            </p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <li key={p.slug} className="bg-ink">
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex h-full min-h-40 flex-col justify-between p-6 transition-colors hover:bg-ink-2"
                >
                  <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 self-end text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                  <span>
                    <span className="block font-display text-xl font-semibold tracking-tight">{p.name}</span>
                    <span className="mt-1.5 block text-sm leading-snug text-ink-muted">{p.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="bg-primary sm:col-span-2">
              <Link
                href="/demo"
                className="group flex h-full min-h-40 flex-col justify-end p-6 text-primary-foreground"
              >
                <span className="flex items-end justify-between gap-6">
                  <span className="block max-w-sm font-display text-2xl font-semibold leading-tight tracking-tight">
                    Tell us what you run. We will map the modules that fit.
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Live tracking experience */}
      <section aria-labelledby="live-title" className="py-24 md:py-36">
        <div className="wrap">
          <SectionHeader
            className="mx-auto text-center [&_.lede]:mx-auto"
            title={<span id="live-title">Watch the whole fleet move, as it happens</span>}
            lede="Moving, stopped, idle or offline: each vehicle's state, speed and last update, on a map your whole team shares."
          />
          <Reveal className="mx-auto mt-14 max-w-5xl">
            <LiveShowcase />
          </Reveal>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              ["Routes that follow the road", "GPS spikes are filtered out, so a parked truck does not appear to wander."],
              ["Replay any day", "Scrub through a vehicle's day to see each stop, halt and detour."],
              ["Share a live link", "Send a customer one link to follow their trip. Revoke it when the trip closes."],
            ].map(([t, b]) => (
              <li key={t} className="border-t border-foreground/15 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Industries */}
      <section aria-labelledby="industries-title" className="border-t border-border py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              title={<span id="industries-title">Built around how your industry moves</span>}
              lede="A tipper, a school bus and a self-drive car need different things from the same tracker."
            />
            <ButtonLink href="/industries" variant="secondary" className="mt-8">
              All industries
            </ButtonLink>
          </div>
          <ul className="border-t border-border">
            {industries.map((d) => (
              <li key={d.slug} className="border-b border-border">
                <Link
                  href={`/industries/${d.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-4 py-6"
                >
                  <span>
                    <span className="display-3 block transition-colors group-hover:text-primary">{d.name}</span>
                    <span className="mt-1 block text-muted-foreground">{d.blurb}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 self-center transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. How Ashwa works */}
      <section aria-labelledby="how-title" className="border-y border-border bg-card py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              title={<span id="how-title">From a device under the dashboard to a decision</span>}
            />
            <Reveal className="mt-10">
              <Visual name="device" />
            </Reveal>
            <ButtonLink href="/devices" variant="secondary" className="mt-6">
              Devices we work with
            </ButtonLink>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7">
                <span className="font-display text-3xl font-semibold tracking-tight text-primary">{i + 1}</span>
                <span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. Why Ashwa */}
      <section aria-labelledby="why-title" className="border-t border-border py-20 md:py-28">
        <div className="wrap">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            Why Ashwa
          </p>
          <h2 id="why-title" className="display-2 mt-5 max-w-3xl">
            Five things the platform is built for
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-6">
            {REASONS.map((r, i) => (
              <li
                key={r.title}
                className={cn("bg-background p-7 md:p-9", i < 2 ? "md:col-span-3" : "md:col-span-2")}
              >
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-3 mt-6">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* 10. Mobile apps */}
      <section aria-labelledby="apps-title" className="on-ink overflow-hidden py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="apps-title" className="display-2">
              The right screen for the owner, the driver and the parent.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              Owners follow the fleet and the money. Drivers run their trip and log diesel. Parents
              see one thing: where the bus is and when it arrives.
            </p>
            <ButtonLink href="/products/mobile-app" variant="inverse" className="mt-8">
              See the mobile apps
            </ButtonLink>
          </div>
          <Reveal>
            <PhoneTrio />
          </Reveal>
        </div>
      </section>

      {/* 11. Integrations and customisation */}
      <section aria-labelledby="integrations-title" className="py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Visual name="api" />
          </Reveal>
          <div>
            <SectionHeader
              title={<span id="integrations-title">Fits into the systems you already run</span>}
              lede="Send positions, trips and events to your ERP, a customer's portal or a government system. Where your process is unusual, we build the dashboard or workflow with you."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/integrations" variant="secondary">
                Integrations and API
              </ButtonLink>
              <ButtonLink href="/solutions/white-label-gps-platform" variant="ghost">
                White-label for dealers
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Resources */}
      <section aria-labelledby="resources-title" className="border-t border-border py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title={<span id="resources-title">Guides for people who run vehicles</span>}
            />
            <ButtonLink href="/resources" variant="secondary" className="shrink-0">
              All guides
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <div key={a.slug}>
                <CardLink
                  href={`/resources/${a.slug}`}
                  kicker={`${a.category} · ${a.readMinutes} min read`}
                  title={a.title}
                  body={a.description}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section aria-labelledby="faq-title" className="border-t border-border py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader title={<span id="faq-title">Before you ask</span>} />
            <ButtonLink href="/faq" variant="secondary" className="mt-8">
              All questions
            </ButtonLink>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
