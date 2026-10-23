import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ashwa collects, uses and protects information across the Ashwa website, the Ashwa vehicle tracking platform and the Ashwa mobile app.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="legal"
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what information Ashwa (&quot;we&quot;,
          &quot;us&quot;) handles when you use the ashwa.io website, the Ashwa
          vehicle tracking platform (the web dashboard and API) and the Ashwa
          mobile app for Android and iOS (together, the &quot;Services&quot;).
        </p>
      }
    >
      <LegalSection id="who-we-are" title="Who we are">
        <p>
          Ashwa provides GPS vehicle tracking and fleet management for
          businesses in India. We are based in {CONTACT.address}. You can reach
          us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
        <p>
          The Services are used by organizations (our customers). When an
          organization uses Ashwa, it decides what data about its vehicles,
          drivers and staff goes into the platform, and we process that data on
          its behalf under our agreement with it.
        </p>
      </LegalSection>

      <LegalSection id="information" title="Information we handle">
        <p>
          <strong>Account information.</strong> Accounts are created by your
          organization&apos;s administrator. We store your username, a hashed
          password, your role, your organization code and, if provided, your
          name, email address and phone number.
        </p>
        <p>
          <strong>Fleet data.</strong> Vehicle details (such as plate number,
          make and model), GPS device identifiers, and the location, speed,
          heading and time reported by tracking devices fitted to vehicles. We
          use this to show live positions, routes and trip history.
        </p>
        <p>
          <strong>People data entered by your organization.</strong> Details
          your organization adds about its drivers, staff and technicians, such
          as names, phone numbers, email addresses and photos.
        </p>
        <p>
          <strong>Technical data.</strong> When you use the Services our servers
          and hosting providers receive standard request data such as IP
          address, device and browser type, and timestamps. We use it to keep
          the Services secure and working.
        </p>
      </LegalSection>

      <LegalSection id="mobile-app" title="The Ashwa mobile app">
        <ul>
          <li>
            You sign in with your organization code, username and password.
            These are sent over an encrypted connection to our API. Your
            password is not stored on your device.
          </li>
          <li>
            After sign-in the app keeps an access token and your basic profile
            (username, role, email, organization code) on your device so you
            stay signed in. Signing out removes them.
          </li>
          <li>
            The app shows your organization&apos;s vehicle data. It does not
            access your phone&apos;s location, contacts, camera, microphone or
            files.
          </li>
          <li>
            Maps are provided by the Google Maps SDK, which collects device and
            diagnostic information (such as device model, crash data, IP address
            and a pseudonymous SDK identifier) to operate and improve Google
            services. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>The app has no advertising and no third-party analytics.</li>
        </ul>
      </LegalSection>

      <LegalSection id="website" title="This website">
        <p>
          The ashwa.io website does not use advertising, tracking cookies or
          third-party analytics. It is hosted on Cloudflare, which processes
          request data such as IP addresses to deliver and protect the site. If
          you email us, we use your message and address only to reply.
        </p>
      </LegalSection>

      <LegalSection id="use" title="How we use information">
        <ul>
          <li>To provide the Services: sign-in, live tracking, history and reports.</li>
          <li>To secure the Services, prevent misuse and fix problems.</li>
          <li>To support customers and respond to requests.</li>
          <li>To meet legal obligations.</li>
        </ul>
        <p>We do not sell personal information or use it for advertising.</p>
      </LegalSection>

      <LegalSection id="sharing" title="Who we share it with">
        <ul>
          <li>
            <strong>Your organization</strong>, whose administrators can see
            data in their account.
          </li>
          <li>
            <strong>Service providers</strong> that host and run the Services
            for us, such as cloud hosting, maps and email providers, under
            confidentiality and security obligations.
          </li>
          <li>
            <strong>Authorities</strong>, when required by law or to protect
            the rights and safety of people and the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="How long we keep it">
        <p>
          We keep account and fleet data while your organization uses Ashwa, or
          for the period set out in its agreement with us. When an account is
          deleted we remove its personal data within 30 days, except where we
          must keep records by law. Backups are overwritten within 90 days.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Security">
        <p>
          All traffic to the Services uses HTTPS. Passwords are stored hashed,
          and access to data is limited to your organization and authorized
          Ashwa staff who need it to run the Services.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="Your rights">
        <p>
          Under India&apos;s Digital Personal Data Protection Act, 2023 and
          other applicable law, you can ask to access, correct or erase your
          personal data, withdraw consent, and raise a grievance. Because your
          organization manages your account, we may pass your request to it.
          To delete your account, follow the steps on our{" "}
          <Link href="/delete-account">Delete Account</Link> page.
        </p>
        <p>
          For any privacy question or grievance, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We respond
          within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children">
        <p>
          The Services are for businesses and are not intended for anyone under
          18. We do not knowingly collect personal data from children.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to this policy">
        <p>
          We will post changes on this page and update the date above. If a
          change is significant, we will notify organization administrators.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
