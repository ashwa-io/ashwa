"use client";
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from "@/components/systaliko-ui/text-scroll-read";
import { useIsMobile } from "@/hooks/use-mobile";

export function About() {
  const isMobile = useIsMobile();
  return (
    <section className="container">
      {isMobile ? (
        <div className="min-h-screen lg:w-3/5 lg:mx-auto space-y-4 place-content-center py-12 px-8">
          <h4 className="text-sm uppercase tracking-wide">who are we</h4>
          <p className="text-3xl md:text-4xl font-medium leading-normal">
            We built Ashwa after watching fleet operators lose hours to phone calls
            just to know where their vehicles were. No more guessing — live
            location, full history, one dashboard.
          </p>
        </div>
      ) : (
        <TextScrollRead>
          <TextScrollReadWrap className="min-h-screen lg:w-3/5 lg:mx-auto space-y-4 place-content-center py-12 px-8">
            <h4 className="text-sm uppercase tracking-wide">who are we</h4>
            <ClipText className="text-3xl md:text-4xl font-medium leading-normal bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,var(--primary)_50%)]">
              We built Ashwa after watching fleet operators lose hours to phone calls
              just to know where their vehicles were. No more guessing — live
              location, full history, one dashboard.
            </ClipText>
          </TextScrollReadWrap>
        </TextScrollRead>
      )}
    </section>
  );
}
