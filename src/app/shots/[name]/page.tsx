import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Development-only stage for the designed product screens in src/shots/screens.
 * scripts/capture-shots.mjs opens each one here and saves it as an image.
 */
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function Shot({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (process.env.NODE_ENV === "production" || !/^[a-z0-9-]+$/.test(name)) notFound();
  const screen = await import(`@/shots/screens/${name}`).catch(() => null);
  if (!screen) notFound();
  const Screen = screen.default;
  return <Screen />;
}
