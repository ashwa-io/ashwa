import { WavyBlock, WavyBlockItem } from "@/components/systaliko-ui/wavy-block";

export function Services() {
  return (
    <section className="px-8 overflow-hidden min-h-svh place-content-center">
      <WavyBlock
        offset={["start end", "end start"]}
        className="flex flex-col justify-start items-start gap-6 w-full"
      >
        <WavyBlockItem index={0}>
          <h2 className="text-[7.3vw] text-muted-foreground font-bold leading-none tracking-wide uppercase whitespace-nowrap overflow-hidden">
            Real-Time Vehicle Tracking
          </h2>
        </WavyBlockItem>
        <WavyBlockItem index={2}>
          <h2 className="text-[7.3vw] font-bold leading-none tracking-wide uppercase whitespace-nowrap overflow-hidden">
            Trip History & Playback
          </h2>
        </WavyBlockItem>
        <WavyBlockItem index={4}>
          <h2 className="text-[7.3vw] text-primary font-bold leading-none tracking-wide uppercase whitespace-nowrap overflow-hidden">
            Fleet Analytics
          </h2>
        </WavyBlockItem>
        <WavyBlockItem index={6}>
          <h2 className="text-[7.3vw] font-bold leading-none tracking-wide uppercase whitespace-nowrap overflow-hidden">
            Driver Scoring & Fuel Monitoring
          </h2>
        </WavyBlockItem>
      </WavyBlock>
    </section>
  );
}
