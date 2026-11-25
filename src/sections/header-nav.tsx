"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { LogoWithText } from "@/components/logo";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  intro: string;
  links: NavLink[];
  feature: { kicker: string; title: string; body: string; href: string; cta: string };
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeaderNav({ groups, appUrl }: { groups: NavGroup[]; appUrl: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  // A short grace period lets the pointer travel from the trigger to the panel.
  const hold = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const release = () => {
    hold();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const active = groups.find((g) => g.label === open);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        // Always a solid bar: some heroes are dark and the nav must stay readable on them.
        "border-b bg-background/90 backdrop-blur-xl",
        scrolled || open || mobile ? "border-border" : "border-transparent",
      )}
      onMouseLeave={release}
      onMouseEnter={hold}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Ashwa home" className="shrink-0">
          <LogoWithText
            className="gap-1.5"
            logoClassName="h-8 -mt-1"
            textClassName="text-[2rem] leading-none"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {groups.map((g) => (
              <li key={g.label}>
                <button
                  type="button"
                  aria-expanded={open === g.label}
                  aria-controls="mega-panel"
                  onMouseEnter={() => {
                    hold();
                    setOpen(g.label);
                  }}
                  onClick={() => setOpen(open === g.label ? null : g.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors hover:bg-foreground/5",
                    open === g.label && "bg-foreground/5",
                  )}
                >
                  {g.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      open === g.label && "rotate-180",
                    )}
                  />
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/pricing"
                onMouseEnter={() => setOpen(null)}
                className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors hover:bg-foreground/5"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors hover:bg-foreground/5 sm:block"
          >
            Sign in
          </a>
          <Link
            href="/demo"
            className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-[0.92rem] font-medium text-primary-foreground transition-[background-color,transform] duration-200 hover:bg-[#cf2f1a] active:scale-[0.98] sm:inline-flex"
          >
            Book a demo
          </Link>
          <button
            type="button"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-foreground/15 lg:hidden"
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            id="mega-panel"
            key="mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute inset-x-0 top-full hidden max-h-[calc(100svh-4.25rem)] overflow-y-auto border-b border-border bg-background shadow-float lg:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.14 }}
                className="wrap grid grid-cols-[1fr_20rem] gap-10 py-9"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
                    <p className="max-w-xl text-[0.95rem] text-muted-foreground">{active.intro}</p>
                    <Link
                      href={active.href}
                      className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium"
                    >
                      All {active.label.toLowerCase()}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                  <ul className="mt-3 grid grid-cols-3 gap-x-6">
                    {active.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group -mx-3 block rounded-xl px-3 py-3 transition-colors hover:bg-foreground/5"
                        >
                          <span className="flex items-center gap-1.5 font-display text-[1.02rem] font-semibold tracking-tight">
                            {l.label}
                            <ArrowRight
                              aria-hidden="true"
                              className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,transform] group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </span>
                          {l.blurb ? (
                            <span className="mt-0.5 block text-[0.84rem] leading-snug text-muted-foreground">
                              {l.blurb}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={active.feature.href}
                  className="on-ink group flex flex-col justify-between rounded-2xl p-6"
                >
                  <div>
                    <p className="eyebrow text-ink-muted">{active.feature.kicker}</p>
                    <p className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight">
                      {active.feature.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {active.feature.body}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {active.feature.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto overscroll-contain bg-background lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap pb-10 pt-2">
              {groups.map((g) => (
                <details key={g.label} className="group border-b border-border">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-display text-2xl font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                    {g.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="pb-4">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex min-h-11 items-center text-[1.02rem]">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={g.href}
                        className="flex min-h-11 items-center gap-1.5 text-[1.02rem] font-medium text-primary"
                      >
                        All {g.label.toLowerCase()}
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </li>
                  </ul>
                </details>
              ))}
              <Link
                href="/pricing"
                className="flex min-h-14 items-center border-b border-border font-display text-2xl font-semibold tracking-tight"
              >
                Pricing
              </Link>
              <div className="mt-8 grid gap-3">
                <Link
                  href="/demo"
                  className="flex min-h-12 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground"
                >
                  Book a demo
                </Link>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center rounded-full border border-foreground/20 font-medium"
                >
                  Sign in to the app
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
