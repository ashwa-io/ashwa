import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Ashwa Account",
  description:
    "How to request deletion of your Ashwa account and data, what gets deleted and what is kept.",
  alternates: { canonical: "/delete-account" },
};

const SUBJECT = encodeURIComponent("Delete my Ashwa account");
const BODY = encodeURIComponent(
  "Organization code:\nUsername:\n\nPlease delete my Ashwa account and its personal data."
);

export default function DeleteAccountPage() {
  return (
    <LegalPage
      badge="account"
      title="Delete your Ashwa account"
      intro={
        <p>
          This page explains how to delete your account for the Ashwa app and
          platform, provided by Ashwa ({CONTACT.address}).
        </p>
      }
    >
      <LegalSection id="request" title="How to request deletion">
        <ol>
          <li>
            Email{" "}
            <a href={`mailto:${CONTACT.email}?subject=${SUBJECT}&body=${BODY}`}>
              {CONTACT.email}
            </a>{" "}
            from the email address on your account, with the subject
            &quot;Delete my Ashwa account&quot;.
          </li>
          <li>Include your organization code and username.</li>
          <li>
            We confirm the request with you and with your organization&apos;s
            administrator, because the organization owns the account.
          </li>
          <li>We delete the account and confirm by email within 30 days.</li>
        </ol>
        <p>
          You can also ask your organization&apos;s Ashwa administrator to
          delete your account directly from the Ashwa dashboard.
        </p>
      </LegalSection>

      <LegalSection id="deleted" title="What gets deleted">
        <ul>
          <li>Your user account: username, password, role and sign-in sessions.</li>
          <li>Your profile details: name, email address, phone number and photo.</li>
        </ul>
        <p>
          On your phone, signing out of the app or uninstalling it removes the
          session data the app keeps on the device.
        </p>
      </LegalSection>

      <LegalSection id="kept" title="What is kept">
        <ul>
          <li>
            <strong>Vehicle and trip data</strong> (positions, routes and
            vehicle details) belongs to your organization, not to your user
            account. It stays in your organization&apos;s account until the
            organization deletes it or its agreement with us ends.
          </li>
          <li>
            <strong>Records we must keep by law</strong>, such as invoices, for
            the period the law requires.
          </li>
          <li>
            <strong>Backups</strong> may hold deleted data for up to 90 days
            before they are overwritten.
          </li>
        </ul>
        <p>
          Organizations that want to close their whole Ashwa account and delete
          all fleet data can email us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. See the{" "}
          <Link href="/privacy">Privacy Policy</Link> for more detail.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
