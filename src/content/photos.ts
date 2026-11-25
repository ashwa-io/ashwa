import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Generated editorial photography (Higgsfield). Files live in public/images/site.
 * Each photo is used once across the site, so no page repeats another's picture.
 */
export interface Photo {
  src: string;
  alt: string;
}

const photo = (name: string, alt: string): Photo => ({ src: `/images/site/${name}.jpg`, alt });

export const PHOTOS = {
  truckHighway: photo("truck-highway", "A container truck on a national highway through open farmland in morning light"),
  schoolBus: photo("school-bus", "Children in uniform boarding a yellow school bus on a residential street"),
  logisticsYard: photo("logistics-yard", "A logistics yard at dawn with trucks parked along a loading dock"),
  rentalLot: photo("rental-lot", "An attendant handing car keys to a customer in a rental car lot"),
  constructionSite: photo("construction-site", "A tipper truck and an excavator working on a dusty construction site"),
  deliveryVan: photo("delivery-van", "A driver unloading cartons from a delivery van in a market street"),
  staffBus: photo("staff-bus", "Office staff boarding a staff bus outside an office building at dusk"),
  wasteTruck: photo("waste-truck", "Municipal workers collecting bins beside a waste collection truck in a lane"),
  gpsInstall: photo("gps-install", "A technician fitting a GPS tracking device behind a truck dashboard"),
  dispatchDesk: photo("dispatch-desk", "A dispatcher at a desk watching a fleet map on two monitors"),
  busDepot: photo("bus-depot", "Intercity buses lined up at a depot as a driver walks toward one"),
  fieldVan: photo("field-van", "A field engineer with a tool case beside a utility van near a telecom tower"),
} as const;

/** True once the generated file has been saved into public/. Checked at build time. */
export const hasPhoto = (p: Photo) => existsSync(join(process.cwd(), "public", p.src));

/** Photo shown under the hero of a solution or industry page, keyed by "kind/slug". */
const PAGE_PHOTO_PLAN: Record<string, Photo> = {
  "industries/logistics": PHOTOS.logisticsYard,
  "industries/transportation": PHOTOS.busDepot,
  "industries/education": PHOTOS.schoolBus,
  "industries/car-rentals": PHOTOS.rentalLot,
  "industries/trucking": PHOTOS.truckHighway,
  "industries/delivery": PHOTOS.deliveryVan,
  "industries/construction": PHOTOS.constructionSite,
  "industries/corporate-fleets": PHOTOS.staffBus,
  "industries/field-services": PHOTOS.fieldVan,
  "solutions/waste-collection-tracking": PHOTOS.wasteTruck,
};

/** Only pages whose photo file exists get a photo, so a missing asset never shows a broken image. */
export const PAGE_PHOTOS: Record<string, Photo> = Object.fromEntries(
  Object.entries(PAGE_PHOTO_PLAN).filter(([, p]) => hasPhoto(p)),
);
