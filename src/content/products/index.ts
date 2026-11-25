import type { PageDoc } from "../types";
import liveTracking from "./live-tracking";
import tripHistory from "./trip-history";
import tripManagement from "./trip-management";
import maintenance from "./maintenance";
import driverManagement from "./driver-management";
import vehicleManagement from "./vehicle-management";
import reportsAnalytics from "./reports-analytics";
import geofencing from "./geofencing";
import alerts from "./alerts";
import routeManagement from "./route-management";
import rentalManagement from "./rental-management";
import schoolTransport from "./school-transport";
import mobileApp from "./mobile-app";
import rolesAndOrganisations from "./roles-and-organisations";

export const products: PageDoc[] = [
  liveTracking,
  tripHistory,
  tripManagement,
  maintenance,
  driverManagement,
  vehicleManagement,
  reportsAnalytics,
  geofencing,
  alerts,
  routeManagement,
  rentalManagement,
  schoolTransport,
  mobileApp,
  rolesAndOrganisations,
];
