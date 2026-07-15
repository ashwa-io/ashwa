import { ArrowUpRight } from "lucide-react";
import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade";
import { Button } from "@/components/Button";
import Starfield from "./HeroBackground";

export function Hero() {
  return (
    <section aria-label="hero" className="min-h-screen">
      <FadeContainer className="relative flex flex-col items-center justify-center min-h-screen">
        <FadeDiv className="mx-auto w-[calc(100%-2rem)] max-w-md">
          <a
            aria-label="Open the Ashwa tracking app"
            href="https://app.ashwa.io"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="flex w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-orange-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-orange-500/2.5 focus:outline-hidden sm:text-sm">
              <span className="shrink-0 rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                New
              </span>
              <span className="flex min-w-0 flex-1 items-center justify-between gap-1">
                <span className="truncate text-sm sm:text-base">
                  Now live — real-time GPS tracking across India
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
          <FadeSpan>Know where every vehicle is, right now.</FadeSpan>{" "}
          <FadeSpan>Complete route history, driver analytics,</FadeSpan>{" "}
          <FadeSpan>and instant alerts — built for Indian fleets.</FadeSpan>
        </p>
        <FadeDiv>
          <a
            href="https://app.ashwa.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block mt-6"
          >
            <Button
              variant="primary"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Live Dashboard
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(231,59,36,0.07),transparent_65%)]" />
          <Starfield />
        </div>
      </FadeContainer>
    </section>
  );
}
