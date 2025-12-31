import {
  CardsStackContainer,
  CardSticky,
} from "@/components/systaliko-ui/cards-stack";
import {
  ChartLineIcon,
  ContainerIcon,
  FileCodeIcon,
  SearchCheckIcon,
  SplinePointerIcon,
} from "lucide-react";

const process_phases = [
  {
    id: "phase-setup",
    title: "Device Installation & Setup",
    description:
      "We help you install GPS tracking devices in your vehicles with minimal downtime. Our team ensures seamless integration with your existing fleet infrastructure.",
    icon: SearchCheckIcon,
  },
  {
    id: "phase-tracking",
    title: "Real-Time Monitoring",
    description:
      "Monitor your entire fleet in real-time with precise location data, speed tracking, and route visualization. Get instant alerts for geofence violations and unauthorized usage.",
    icon: SplinePointerIcon,
  },
  {
    id: "phase-history",
    title: "History Management & Reports",
    description:
      "Access comprehensive historical data including travel routes, stops, idle time, and mileage. Generate detailed reports for compliance, maintenance scheduling, and cost analysis.",
    icon: FileCodeIcon,
  },
  {
    id: "phase-analytics",
    title: "Analytics & Insights",
    description:
      "Leverage advanced analytics to optimize routes, reduce fuel consumption, improve driver behavior, and make informed decisions that boost your fleet's efficiency and profitability.",
    icon: ContainerIcon,
  },
  {
    id: "phase-expansion",
    title: "Continuous Innovation",
    description:
      "We're constantly developing new features including predictive maintenance, driver scoring, fuel monitoring, and integration with third-party logistics platforms. Your fleet management evolves with us.",
    icon: ChartLineIcon,
  },
];
export function Process() {
  return (
    <section className="py-12 px-8">
      <CardsStackContainer>
        {process_phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <CardSticky
              key={phase.id}
              incrementZ={0}
              incrementY={32}
              index={index + 1}
              className="bg-card/80 mx-auto backdrop-blur border-t border-border/40 p-8 max-w-5xl flex items-center justify-between flex-wrap gap-8 item-center"
            >
              <h2 className="text-2xl tracking-tight font-semibold">
                [
                <span className="inline-block leading-none align-bottom pb-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                ]
              </h2>

              <div>
                <Icon className=" size-12 stroke-[1.5] text-primary" />
              </div>

              <div className="md:basis-1/3 space-y-2">
                <h3 className="text-2xl font-medium">{phase.title}</h3>
                <p className="text-muted-foreground max-w-prose">
                  {phase.description}
                </p>
              </div>
            </CardSticky>
          );
        })}
      </CardsStackContainer>
    </section>
  );
}
