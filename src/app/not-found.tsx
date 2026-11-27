import { GridTraffic } from "@/components/site/grid-traffic";
import { ButtonLink } from "@/components/site/ui";

export default function NotFound() {
  return (
    <main className="grid-lines relative grid min-h-[80svh] place-items-center pt-24">
      <GridTraffic speed={0.5} />
      <div className="wrap relative max-w-2xl text-center">
        <p className="eyebrow text-primary">Error 404</p>
        <h1 className="display-1 mt-5">This route is off the map</h1>
        <p className="lede mx-auto mt-6 max-w-md">
          The page moved or never existed. The rest of the fleet is still where you left it.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Browse solutions
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
