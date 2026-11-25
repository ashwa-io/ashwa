import type { Article } from "../types";

import ais140Explained from "./ais-140-explained";
import fleetChecklist from "./fleet-management-software-buying-checklist";
import fleetTrackingCost from "./fleet-tracking-cost-in-india";
import howGpsWorks from "./how-gps-vehicle-tracking-works";
import fuelTheft from "./how-to-reduce-fuel-theft-in-trucks";
import schoolBusSafety from "./school-bus-safety-and-tracking-guide";
import documentRenewals from "./vehicle-document-renewals-checklist";
import trackerTypes from "./wired-vs-obd-vs-wireless-gps-trackers";

/** Newest first. */
export const articles: Article[] = [
  documentRenewals,
  schoolBusSafety,
  ais140Explained,
  fleetChecklist,
  fuelTheft,
  fleetTrackingCost,
  trackerTypes,
  howGpsWorks,
];
