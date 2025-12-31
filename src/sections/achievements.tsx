"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  GlobeIcon,
  SmilePlusIcon,
  TimerIcon,
  UserStarIcon,
} from "lucide-react";
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import React from "react";

const achievements = [
  {
    id: "achievement-vehicles",
    title: "10,000+ Vehicles Tracked",
    description:
      "Successfully monitoring thousands of vehicles across various industries including logistics, transportation, and delivery services.",
    icon: GlobeIcon,
  },
  {
    id: "achievements-clients",
    title: "500+ Fleet Operators",
    description:
      "Trusted by businesses of all sizes, from small local fleets to large enterprise operations managing hundreds of vehicles.",
    icon: UserStarIcon,
  },
  {
    id: "achievement-uptime",
    title: "99.9% System Uptime",
    description:
      "Reliable tracking infrastructure ensuring your fleet data is always accessible when you need it most, with minimal service interruptions.",
    icon: SmilePlusIcon,
  },
  {
    id: "achievement-coverage",
    title: "24/7 Real-Time Coverage",
    description:
      "Comprehensive GPS coverage with continuous monitoring, instant alerts, and round-the-clock support to keep your fleet operations running smoothly.",
    icon: TimerIcon,
  },
];
interface AchievementCardProps extends HTMLMotionProps<"div"> {
  scrollYProgress: MotionValue<number>;
  index: number;
}
function AchievementCard({
  scrollYProgress,
  index,
  ...props
}: AchievementCardProps) {
  const x = useTransform(scrollYProgress, [0, 0.7], [-index * 102, 0]);
  const transform = useMotionTemplate`translateX(${x}%)`;
  return <motion.div style={{ transform }} {...props} />;
}

export function Achievements() {
  const isMobile = useIsMobile();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0% 80%", "20% 0%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 192]);
  return (
    <section className="py-12 px-8 overflow-hidden">
      <div className="relative" ref={containerRef}>
        {isMobile ? (
          <div className="flex gap-4 flex-col">
            {achievements.map((achiev) => {
              const Icon = achiev.icon;
              return (
                <div key={achiev.id} className="bg-card/60 backdrop-blur">
                  <div className="relative z-10 flex flex-col p-6 gap-8">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl max-w-[15ch] font-medium">
                        {achiev.title}
                      </h3>
                      <Icon className="size-8 stroke-[1.5] text-primary" />
                    </div>

                    <p>{achiev.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <motion.div style={{ y }} className="flex gap-6 ">
            {achievements.map((achiev, index) => {
              const Icon = achiev.icon;
              return (
                <AchievementCard
                  scrollYProgress={scrollYProgress}
                  key={achiev.id}
                  index={index}
                  className="bg-card/60 backdrop-blur"
                >
                  <div className="relative z-10 flex flex-col p-6 gap-8">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl max-w-[15ch] font-medium">
                        {achiev.title}
                      </h3>
                      <Icon className="size-8 stroke-[1.5] text-primary" />
                    </div>

                    <p>{achiev.description}</p>
                  </div>
                </AchievementCard>
              );
            })}
          </motion.div>
        )}
        <div className=" h-48" />
      </div>
    </section>
  );
}
