import Link from "next/link";

import { LogoText } from "@/components/logo";
import { DOCS, KIND_META, KINDS } from "@/content";
import { COMPANY_LINKS, CONTACT, LEGAL_LINKS, RESOURCE_LINKS } from "@/lib/site";

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="eyebrow text-ink-muted">{title}</h2>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex min-h-8 items-center text-[0.94rem] text-[#f4efe4]/85 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="on-ink border-t border-ink-line">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <LogoText className="text-4xl md:text-5xl" />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
              GPS tracking and fleet management, built as modules you combine around your own
              operation.
            </p>
            <address className="mt-8 space-y-1 text-[0.94rem] not-italic text-[#f4efe4]/85">
              <p>{CONTACT.address}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="underline-offset-4 hover:underline">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a href={CONTACT.phoneHref} className="underline-offset-4 hover:underline">
                  {CONTACT.phone}
                </a>
              </p>
            </address>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {KINDS.map((kind) => (
              <Column
                key={kind}
                title={KIND_META[kind].label}
                links={DOCS[kind].map((d) => ({ href: `/${kind}/${d.slug}`, label: d.name }))}
              />
            ))}
            <div className="space-y-10">
              <Column
                title="Resources"
                links={RESOURCE_LINKS.slice(0, 4).map((l) => ({ href: l.href, label: l.label }))}
              />
              <Column title="Company" links={COMPANY_LINKS.map((l) => ({ ...l }))} />
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ink-line pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ashwa. Product visuals on this site are illustrative.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="underline-offset-4 hover:text-white hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
