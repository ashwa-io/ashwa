import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with the Ashwa app and vehicle tracking platform: contact details and answers to common questions.",
  alternates: { canonical: "/support" },
};

const FAQ = [
  {
    q: "Where do I get my organization code, username and password?",
    a: "From your organization's Ashwa administrator. Ashwa accounts are created by organizations; there is no public sign-up.",
  },
  {
    q: "I forgot my password.",
    a: "Ask your organization's administrator to reset it, or email us from the address on your account.",
  },
  {
    q: "A vehicle shows an old position or is marked offline.",
    a: "The tracking device has not reported recently. Common causes are no mobile network, the vehicle's power being off, or a device fault. If it continues, contact us with the vehicle's plate number.",
  },
  {
    q: "The trip history for a day is empty.",
    a: "Pick the date again from the calendar on the vehicle map. If the vehicle moved that day and nothing shows, contact us with the plate number and date.",
  },
  {
    q: "How do I delete my account?",
    a: "Follow the steps on the Delete Account page.",
    link: { href: "/delete-account", label: "Delete Account" },
  },
] as const;

export default function SupportPage() {
  return (
    <LegalPage
      badge="help"
      title="Support"
      showUpdated={false}
      intro={
        <p>
          Need help with the Ashwa app or dashboard? Reach us directly, or
          check the common questions below.
        </p>
      }
    >
      <LegalSection id="contact" title="Contact us">
        <ul>
          <li>
            Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </li>
          <li>Office: {CONTACT.address}</li>
        </ul>
        <p>
          Include your organization code, the vehicle plate number and a
          screenshot if you can.
        </p>
      </LegalSection>

      <LegalSection id="faq" title="Common questions">
        <dl className="space-y-6">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-1">
                {item.a}
                {"link" in item ? (
                  <>
                    {" "}
                    <Link href={item.link.href}>{item.link.label}</Link>
                  </>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </LegalSection>
    </LegalPage>
  );
}
