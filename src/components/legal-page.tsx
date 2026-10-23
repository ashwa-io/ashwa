import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/Badge";
import { CONTACT, LEGAL_LINKS, LEGAL_UPDATED } from "@/lib/site";

interface LegalPageProps {
  badge: string;
  title: string;
  intro?: ReactNode;
  /** Pass false for pages that are not dated legal documents (e.g. support). */
  showUpdated?: boolean;
  children: ReactNode;
}

/** Shared shell for the privacy, terms, account deletion and support pages. */
export function LegalPage({
  badge,
  title,
  intro,
  showUpdated = true,
  children,
}: LegalPageProps) {
  return (
    <main className="mx-auto mt-36 mb-24 max-w-3xl px-4 md:px-6">
      <Badge>{badge}</Badge>
      <h1 className="mt-3 text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        {title}
      </h1>
      {showUpdated ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LEGAL_UPDATED}
        </p>
      ) : null}
      {intro ? (
        <div className="mt-6 text-lg leading-8 text-foreground/80">{intro}</div>
      ) : null}

      <div className="mt-10 space-y-10">{children}</div>

      <nav
        aria-label="Legal"
        className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm"
      >
        {LEGAL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {CONTACT.email}
        </a>
      </nav>
    </main>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <h2
        id={id ? `${id}-title` : undefined}
        className="text-2xl font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-7 text-foreground/80 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6">
        {children}
      </div>
    </section>
  );
}
