import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

import type { Faq } from "@/content/types";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-[#cf2f1a]",
  secondary: "border border-foreground/20 bg-transparent text-foreground hover:border-foreground",
  ghost: "text-foreground hover:bg-foreground/5",
  inverse: "bg-[#f4efe4] text-ink hover:bg-white",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  arrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const external = typeof props.href === "string" && /^https?:/.test(props.href);
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Link
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,border-color,transform] duration-200 active:scale-[0.98]",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      {arrow ? (
        <Icon
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-2 text-muted-foreground", className)}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className={cn(Tag === "h1" ? "display-1" : "display-2", eyebrow && "mt-5")}>{title}</Tag>
      {lede ? <p className="lede mt-5 max-w-2xl">{lede}</p> : null}
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-1 font-mono text-[0.72rem] text-muted-foreground">
          {trail.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1">
              {i > 0 ? <ChevronRight aria-hidden="true" className="size-3" /> : null}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-foreground">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="underline-offset-4 hover:text-foreground hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  );
}

/** Native details elements: works without JavaScript and is keyboard friendly. */
export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-lg font-medium leading-snug [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-foreground/20 text-sm transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      {schema ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      ) : null}
    </>
  );
}

export function CtaBand({
  title = "See your own fleet on the map",
  body = "Tell us what you run and how many vehicles. We will show you the modules that fit and what the setup involves.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="on-ink grid-lines">
      <div className="wrap flex flex-col gap-10 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="display-2">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/demo">Book a demo</ButtonLink>
          <ButtonLink href="/contact" variant="inverse">
            Talk to sales
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Card link used by index grids and related-page rows. */
export function CardLink({
  href,
  title,
  body,
  kicker,
  className,
  children,
}: {
  href: string;
  title: string;
  body: string;
  kicker?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-lift",
        className,
      )}
    >
      {children}
      {kicker ? <span className="eyebrow text-muted-foreground">{kicker}</span> : null}
      <span className={cn("font-display text-xl font-semibold tracking-tight", kicker && "mt-3")}>
        {title}
      </span>
      <span className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
