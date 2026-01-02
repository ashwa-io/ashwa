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
            We are engineers, building the vehicle tracking system we always wanted
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Real-time vehicle tracking is transforming fleet management, and it is
          happening now. <br /> Our tracking system is at the core of this revolution.
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
            We envision a world where fleet management is no longer a complex
            challenge but a powerful advantage. By integrating cutting-edge tracking
            technology and AI into vehicle monitoring solutions, we aim to transform
            fleet operations into strategic assets, empowering businesses to operate
            more efficiently and safely.
          </p>
          <p className="text-lg leading-8">
            We believe in removing the barriers of vehicle visibility and fleet
            management complexity, enabling teams to focus on optimization and growth
            rather than manual tracking and monitoring. Our goal is to equip every
            organization with the tools they need to harness the full potential
            of their fleet, driving safety, efficiency, and excellence in every journey.
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
