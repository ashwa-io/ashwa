import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ButtonLink, CtaBand, SectionHeader } from "@/components/site/ui";
import TeamGallery from "@/components/ui/TeamGallery";
import { DOCS } from "@/content";
import { CONTACT } from "@/lib/site";

const BELIEFS = [
  {
    title: "Tracking is the start, not the product",
    body: "Knowing where a vehicle is solves the first phone call of the day. The business is run on what comes after: trips, money, papers and people.",
  },
  {
    title: "Nobody should pay for modules they do not use",
    body: "A school does not need trip profit. A transporter does not need a parent app. So the platform is modules, and each customer switches on their own set.",
  },
  {
    title: "Built on Indian roads, for Indian fleets",
    body: "Patchy signal, long hauls, permits by state, diesel bought in cash. We design for the conditions our customers actually drive in.",
  },
  {
    title: "Software should bend to the operation",
    body: "When a customer's process is unusual, we build the dashboard or the integration with them instead of asking them to change how they work.",
  },
];

export default function About() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        title="We got tired of fleet owners not knowing where their vehicles were"
        lede="So we built a tracking platform for the way vehicles are really run in India, and kept adding the parts operators asked for next."
      />

      <section aria-labelledby="story-title" className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader title={<span id="story-title">From one map to a whole platform</span>} />
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ashwa began after we watched fleet operators lose hours to phone calls just to know
              where their vehicles were. The first version did one thing: it put every vehicle on a
              live map, with its full route history behind it.
            </p>
            <p>
              Then the questions changed. Could it show what a trip earned? Could it warn before
              the insurance lapsed? Could a school use it for buses, with parents watching? Each
              answer became a module. Today there are {DOCS.products.length} of them, and customers
              from transporters to schools to municipal bodies combine them in their own way.
            </p>
            <p className="w-fit rotate-2 font-handwriting text-3xl text-primary">Shashank and Vipul</p>
          </Reveal>
        </div>
      </section>

      <div className="wrap">
        <TeamGallery />
      </div>

      <section aria-labelledby="beliefs-title" className="on-ink mt-20 py-20 md:mt-28 md:py-28">
        <div className="wrap">
          <h2 id="beliefs-title" className="display-2 max-w-3xl">
            Four ideas the product is built on
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <li key={b.title} className="border-t border-ink-line pt-6">
                <span className="font-display text-4xl font-semibold tracking-tight text-primary">{i + 1}</span>
                <h3 className="display-3 mt-5">{b.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-muted">{b.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="where-title" className="py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader title={<span id="where-title">Based in {CONTACT.address.split(",")[0]}</span>} />
          <div>
            <p className="lede">
              Our team works from {CONTACT.address}. Customer data stays on servers in India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/partners" variant="secondary">
                Partner with us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
