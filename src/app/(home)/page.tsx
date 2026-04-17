"use client";

import { About } from "@/sections/about";
import { Hero } from "@/sections/Hero2";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import ReactLenis from "lenis/react";
import dynamic from "next/dynamic";

const GlobalDatabase = dynamic(
  () => import("@/components/ui/GlobalDatabase").then((m) => m.GlobalDatabase),
  {
    ssr: false,
    loading: () => <div className="min-h-screen" />,
  }
);

const Achievements = dynamic(
  () => import("@/sections/achievements").then((m) => m.Achievements),
  {
    ssr: false,
    loading: () => <div className="min-h-[50vh]" />,
  }
);

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Achievements />
      <GlobalDatabase />
      <Services />
      <Process />
    </ReactLenis>
  );
}
