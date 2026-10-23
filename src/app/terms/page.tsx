import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using the Ashwa website, vehicle tracking platform and mobile app.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      badge="legal"
      title="Terms of Service"
      intro={
        <p>
          These terms apply to the ashwa.io website, the Ashwa vehicle tracking
          platform and the Ashwa mobile app (the &quot;Services&quot;),
          provided by Ashwa, {CONTACT.address}. By using the Services you agree
          to them. If your organization has a separate written agreement with
          us, that agreement takes priority where the two differ.
        </p>
      }
    >
      <LegalSection id="accounts" title="Accounts">
        <ul>
          <li>
            Accounts are created by your organization&apos;s administrator.
            There is no public sign-up.
          </li>
          <li>
            Keep your password confidential. You are responsible for activity
            under your account; tell your administrator or us at once if you
            suspect misuse.
          </li>
          <li>
            Your organization can change your access or remove your account at
            any time.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="use" title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Track any vehicle or person without the authority and any consent
            required by law.
          </li>
          <li>
            Access accounts, data or systems you are not authorized to use, or
            try to break or bypass security.
          </li>
          <li>
            Overload, scrape, reverse engineer or resell the Services, except
            as the law allows.
          </li>
          <li>Use the Services for anything unlawful.</li>
        </ul>
      </LegalSection>

      <LegalSection id="data" title="Your organization's data">
        <p>
          Vehicle, trip and people data in an organization&apos;s account
          belongs to that organization. We use it only to provide the Services,
          as described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="Location accuracy and availability">
        <p>
          Positions come from GPS devices and mobile networks, which can be
          delayed, inaccurate or unavailable because of coverage, weather,
          power, device faults and other causes outside our control. Do not
          rely on the Services for emergency response or safety-critical
          decisions. We work to keep the Services available but do not
          guarantee they will be uninterrupted or error-free, and we may carry
          out maintenance or change features.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="Fees">
        <p>
          Fees, billing and subscription terms are set in your
          organization&apos;s order or agreement with Ashwa. The mobile app is
          free to download.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="Intellectual property">
        <p>
          The Services, including software, design and the Ashwa name and
          logo, belong to Ashwa or its licensors. We give you a limited,
          non-exclusive, non-transferable right to use them for your
          organization&apos;s internal purposes while your account is active.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Suspension and termination">
        <p>
          We may suspend or end access if these terms are broken, if fees are
          unpaid, or to protect the Services or other users. You can stop using
          the Services at any time and request account deletion as described on
          the <Link href="/delete-account">Delete Account</Link> page.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="Disclaimer and limitation of liability">
        <p>
          To the extent the law allows, the Services are provided &quot;as
          is&quot;, and Ashwa is not liable for indirect, incidental or
          consequential losses, or for loss of profits, revenue or data. Our
          total liability for any claim relating to the Services is limited to
          the fees your organization paid us in the 12 months before the claim.
        </p>
      </LegalSection>

      <LegalSection id="law" title="Governing law">
        <p>
          These terms are governed by the laws of India. Courts in Raipur,
          Chhattisgarh have exclusive jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes">
        <p>
          We may update these terms. We will post the new version here and
          update the date above. Continuing to use the Services after a change
          means you accept it.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
