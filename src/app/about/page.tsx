import { Badge } from "@/components/Badge";
import WhatWeDo from "@/components/ui/WhatWeDo";
import TeamGallery from "@/components/ui/TeamGallery";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>about vehicle tracking</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            We got tired of fleet operators not knowing where their vehicles were
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          So we built Ashwa — real-time GPS tracking designed specifically for
          Indian roads, Indian fleets, and Indian operators who need answers fast.
        </p>
      </section>

      <TeamGallery />
      <WhatWeDo />
      <section aria-labelledby="vision-title" className="mx-auto my-40">
        <h2
          id="vision-title"
          className="inline-block bg-linear-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We see a future where a fleet operator can open one screen and know
            exactly where every vehicle is, where it&apos;s been, and what it should
            do next — without a single phone call. Tracking becomes invisible
            infrastructure, not a daily headache.
          </p>
          <p className="text-lg leading-8">
            We&apos;re removing the complexity between a business and its fleet.
            Every feature we build answers one question: does this help operators
            move faster, safer, and smarter? If not, we cut it.
          </p>
          <p
            className={cn(
              "w-fit rotate-3 font-handwriting text-3xl text-indigo-600 dark:text-indigo-400"
            )}
          >
            – Shashank and Vipul
          </p>
        </div>
      </section>
    </div>
  );
}
