"use client";

import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

const FIELD =
  "mt-2 block min-h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";

const FLEET_SIZES = ["1 to 5", "6 to 20", "21 to 50", "51 to 200", "More than 200"];
const OPERATIONS = [
  "Trucks and logistics",
  "School or college buses",
  "Rental cars or bikes",
  "Staff transport",
  "Delivery fleet",
  "Construction or equipment",
  "Municipal or waste collection",
  "GPS dealer or installer",
  "Something else",
];

/**
 * shortcut: no form backend exists yet, so this composes an email in the
 * visitor's own mail app. Swap handleSubmit for a POST when an endpoint exists.
 */
export function LeadForm({ email, intent }: { email: string; intent: "demo" | "contact" | "partner" }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject =
      intent === "demo" ? "Demo request" : intent === "partner" ? "Partner enquiry" : "Website enquiry";
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Company: ${get("company")}`,
      `Vehicles: ${get("size")}`,
      `Operation: ${get("operation")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `${subject}: ${get("company") || get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-lift md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" className={FIELD} />
        </label>
        <label className="block text-sm font-medium">
          Phone number
          <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" className={FIELD} />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Company, school or organisation
          <input name="company" autoComplete="organization" className={FIELD} />
        </label>
        <label className="block text-sm font-medium">
          Number of vehicles
          <select name="size" defaultValue={FLEET_SIZES[1]} className={FIELD}>
            {FLEET_SIZES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          What you run
          <select name="operation" defaultValue={OPERATIONS[0]} className={FIELD}>
            {OPERATIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Anything we should know
          <textarea
            name="message"
            rows={4}
            placeholder="Which modules interest you, devices you already have, when you want to start."
            className={cn(FIELD, "py-3")}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium text-primary-foreground transition-[background-color,transform] duration-200 hover:bg-[#cf2f1a] active:scale-[0.98] sm:w-auto"
      >
        {intent === "demo" ? "Request my demo" : "Send enquiry"}
      </button>
      <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {sent
          ? `Your email app should now be open with the details filled in. If nothing opened, write to ${email}.`
          : "This opens your email app with the details filled in, so you send it from your own address."}
      </p>
    </form>
  );
}
