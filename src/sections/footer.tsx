import { BgMask } from "@/components/bg-mask";
import { LogoText } from "@/components/logo";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
const links = [
  {
    id: "footer-link-work",
    label: "Work",
    href: "#",
  },
  {
    id: "footer-link-services",
    label: "Services",
    href: "#",
  },
  {
    id: "footer-link-process",
    label: "Process",
    href: "#",
  },
  {
    id: "footer-link-about",
    label: "About",
    href: "#",
  },
  {
    id: "footer-link-contact",
    label: "Contact",
    href: "mailto:hello@ashwa.io",
  },
];
export function Footer() {
  return (
    <footer className="bg-card-foreground text-background px-8 flex flex-col gap-8 py-12 md:grid md:grid-cols-3 md:items-start md:grid-rows-2">
      <div className="row-span-1 col-span-1 space-y-4">
        <LogoText className="text-muted-foreground" />
        <p className="max-w-prose text-muted text-sm">
          Leading provider of vehicle tracking and fleet management solutions.
          We empower businesses with real-time tracking, comprehensive history
          management, and actionable insights to optimize fleet operations.
        </p>
      </div>

      <nav className=" row-span-2 flex flex-col">
        {links.map((item) => (
          <li key={item.id} className="border-b list-none border-b-border/40">
            <BgMask className="after:bg-primary p-6 flex gap-2 items-center">
              <Link
                href={item.href}
                title={item.label}
                aria-label={`navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
              <ArrowUpRightIcon className="size-4" />
            </BgMask>
          </li>
        ))}
      </nav>

      <div className="space-y-2">
        <h3 className="text-xl font-medium">Have a question?</h3>

        <a
          href="mailto:hello@ashwa.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px"
        >
          Contact us
        </a>
      </div>

      <ul className="flex flex-col items-start space-y-2 text-muted">
        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <address>Raipur, Chhattisgarh, India</address>
        </li>

        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <a href="mailto:hello@ashwa.io">hello@ashwa.io</a>
        </li>
        <li className="list-none relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
          <a href="tel:+916263441130">+91 6263441130</a>
        </li>

        <li className="inline-flex gap-4">
          <div className="relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </div>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 after:duration-300 after:origin-left after:bg-current after:w-full after:h-px">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </li>
      </ul>
      <div className="text-muted-foreground text-sm">© 2026 Ashwa</div>
    </footer>
  );
}
