import type { PageKind } from "./types";

/**
 * Which sample world a page's product visuals are drawn in. Pages not listed
 * use the general trucking fleet.
 */
const PAGE_CONTEXT: Record<string, string> = {
  "solutions/logistics-fleet-tracking": "delivery",
  "solutions/school-bus-tracking": "school",
  "solutions/rental-fleet-management": "rental",
  "solutions/employee-transport": "corporate",
  "solutions/asset-tracking": "construction",
  "solutions/waste-collection-tracking": "waste",
  "products/route-management": "school",
  "products/rental-management": "rental",
  "products/school-transport": "school",
  "industries/transportation": "transit",
  "industries/education": "school",
  "industries/car-rentals": "rental",
  "industries/delivery": "delivery",
  "industries/construction": "construction",
  "industries/corporate-fleets": "corporate",
  "industries/field-services": "service",
};

export const pageContext = (kind: PageKind, slug: string): string | undefined => PAGE_CONTEXT[`${kind}/${slug}`];