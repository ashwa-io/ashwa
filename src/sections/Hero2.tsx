import { ArrowUpRight } from "lucide-react";
import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade";
import { Button } from "@/components/Button";
import GameOfLife from "./HeroBackground";

export function Hero() {
  return (
    <section aria-label="hero" className="min-h-screen">
      <FadeContainer className="relative flex flex-col items-center justify-center min-h-screen">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-orange-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-orange-500/2.5 focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Real-time vehicle tracking now available
                </span>

                <ArrowUpRight className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-22">
          <FadeSpan>Smart</FadeSpan> <FadeSpan>Vehicle</FadeSpan>
          <br />
          <FadeSpan>Tracking</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>Track vehicles in real-time with complete</FadeSpan>{" "}
          <FadeSpan>history and analytics. Monitor your fleet</FadeSpan>{" "}
          <FadeSpan>with precision and efficiency.</FadeSpan>
        </p>
        <FadeDiv>
          <a
            href="https://app.ashwa.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              className="mt-6 inline-flex items-center gap-2"
            >
              Start Tracking
              <ArrowUpRight className="size-4" />
            </Button>
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  );
}
