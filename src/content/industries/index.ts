import type { PageDoc } from "../types";
import logistics from "./logistics";
import transportation from "./transportation";
import education from "./education";
import carRentals from "./car-rentals";
import trucking from "./trucking";
import delivery from "./delivery";
import construction from "./construction";
import corporateFleets from "./corporate-fleets";
import fieldServices from "./field-services";

export const industries: PageDoc[] = [
  logistics,
  transportation,
  education,
  carRentals,
  trucking,
  delivery,
  construction,
  corporateFleets,
  fieldServices,
];
