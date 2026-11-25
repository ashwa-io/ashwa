import type { MarkerKind } from "./kit";

/**
 * Sample worlds for the designed screens. Each screen is rendered once per
 * context it suits, so a school page shows buses and stops while a rental
 * page shows cars and bookings. All names, plates and places are fictional.
 */
export type ContextKey =
  | "fleet"
  | "school"
  | "rental"
  | "delivery"
  | "construction"
  | "corporate"
  | "waste"
  | "transit"
  | "service";

export interface SampleVehicle {
  /** Plate, or the name an operator uses for it ("Bus 3", "Excavator 02"). */
  plate: string;
  model: string;
  /** Icon tile in lists. */
  tile: "truck" | "bus" | "car";
  /** Top-view artwork on maps. */
  marker: MarkerKind;
  hue: number;
}

export interface Context {
  key: ContextKey;
  /** Scene backdrop. */
  tint: "violet" | "amber" | "emerald" | "sky";
  /** The words this operation uses. Lower case, singular. */
  noun: { vehicle: string; trip: string; driver: string; customer: string; stop: string };
  /** Six vehicles; the first is the one shown in focus. */
  vehicles: SampleVehicle[];
  /** Five people who drive or operate them, in the same order as the vehicles. */
  people: string[];
  /** Four customers, schools, sites or wards this operation serves. */
  customers: string[];
  /** Where the focused trip runs, with four stops along it. */
  from: string;
  to: string;
  stops: string[];
  /** One line under the main panel title, e.g. "24 vehicles, updated 3 seconds ago". */
  summary: string;
}

const v = (plate: string, model: string, tile: SampleVehicle["tile"], marker: MarkerKind, hue: number): SampleVehicle => ({
  plate,
  model,
  tile,
  marker,
  hue,
});

export const CONTEXTS: Record<ContextKey, Context> = {
  fleet: {
    key: "fleet",
    tint: "violet",
    noun: { vehicle: "truck", trip: "trip", driver: "driver", customer: "customer", stop: "stop" },
    vehicles: [
      v("HR 26 AS 1024", "Tata Signa 4825", "truck", "truck", 262),
      v("HR 39 BK 7741", "Ashok Leyland Dost", "truck", "truck", 150),
      v("HR 20 CM 3308", "Mahindra Bolero", "car", "pickup", 205),
      v("HR 51 DE 9025", "Eicher Pro 2049", "truck", "truck", 28),
      v("HR 12 FA 6610", "Tata Intra V30", "truck", "pickup", 340),
      v("HR 55 GH 2187", "BharatBenz 1917", "truck", "truck", 185),
    ],
    people: ["Rakesh Yadav", "Sunil Kumar", "Imran Qureshi", "Harpreet Singh", "Manoj Sharma"],
    customers: ["Meridian Steel", "Kaveri Foods", "Sundar Cements", "Vector Auto Parts"],
    from: "Raipur",
    to: "Nagpur",
    stops: ["Bhilai yard", "Durg toll", "Rajnandgaon", "Nagpur depot"],
    summary: "24 trucks, updated 3 seconds ago",
  },
  school: {
    key: "school",
    tint: "amber",
    noun: { vehicle: "bus", trip: "route", driver: "driver", customer: "school", stop: "stop" },
    vehicles: [
      v("Bus 3", "Route North, 40 seats", "bus", "bus", 42),
      v("Bus 7", "Route East, 32 seats", "bus", "bus", 262),
      v("Bus 11", "Route South, 40 seats", "bus", "bus", 150),
      v("Bus 2", "Route West, 26 seats", "bus", "bus", 205),
      v("Bus 9", "Route Central, 32 seats", "bus", "bus", 340),
      v("Van 1", "Kindergarten, 12 seats", "car", "suv", 185),
    ],
    people: ["Sunita Verma", "Dinesh Sahu", "Ramesh Patel", "Anil Tiwari", "Kavita Joshi"],
    customers: ["Class 1 to 5", "Class 6 to 8", "Class 9 to 12", "Kindergarten"],
    from: "Shankar Nagar",
    to: "School gate",
    stops: ["Shankar Nagar", "Telibandha", "Avanti Vihar", "VIP Road"],
    summary: "12 of 14 buses on route, 318 students on board",
  },
  rental: {
    key: "rental",
    tint: "sky",
    noun: { vehicle: "car", trip: "booking", driver: "customer", customer: "customer", stop: "handover" },
    vehicles: [
      v("CG 07 AT 9031", "Maruti Ertiga", "car", "suv", 205),
      v("CG 04 MX 2217", "Swift Dzire", "car", "car", 262),
      v("CG 04 KL 5540", "Innova Crysta", "car", "suv", 150),
      v("CG 10 BB 1182", "Mahindra Thar", "car", "jeep", 28),
      v("CG 04 PZ 7765", "Hyundai Creta", "car", "suv", 340),
      v("CG 07 CN 4409", "Honda City", "car", "car", 185),
    ],
    people: ["Aarav Mehta", "Priya Nair", "Rohit Bansal", "Sneha Kapoor", "Vikram Rathore"],
    customers: ["Aarav Mehta", "Priya Nair", "Rohit Bansal", "Sneha Kapoor"],
    from: "Raipur airport",
    to: "Jagdalpur",
    stops: ["Raipur airport", "Dhamtari", "Kanker", "Jagdalpur"],
    summary: "18 cars, 9 out on rent today",
  },
  delivery: {
    key: "delivery",
    tint: "emerald",
    noun: { vehicle: "van", trip: "run", driver: "driver", customer: "shop", stop: "drop" },
    vehicles: [
      v("CG 04 DV 3310", "Tata Ace Gold", "truck", "pickup", 150),
      v("CG 04 DV 3318", "Mahindra Jeeto", "truck", "pickup", 262),
      v("CG 04 DV 3325", "Maruti Eeco Cargo", "car", "suv", 205),
      v("CG 04 DV 3331", "Tata Intra V10", "truck", "pickup", 28),
      v("CG 04 DV 3340", "Ashok Leyland Dost", "truck", "truck", 340),
      v("CG 04 DV 3347", "Piaggio Ape Xtra", "truck", "pickup", 185),
    ],
    people: ["Deepak Chauhan", "Farhan Ali", "Naveen Sethiya", "Satish Tomar", "Vikram Rathore"],
    customers: ["Gupta Kirana", "Shree Medicals", "City Bakery", "Annapurna Stores"],
    from: "Warehouse",
    to: "Beat 4, Pandri",
    stops: ["Gupta Kirana", "Shree Medicals", "City Bakery", "Annapurna Stores"],
    summary: "16 vans out, 212 of 340 drops done",
  },
  construction: {
    key: "construction",
    tint: "amber",
    noun: { vehicle: "machine", trip: "shift", driver: "operator", customer: "site", stop: "site" },
    vehicles: [
      v("Tipper 04", "Tata Signa 2823", "truck", "truck", 28),
      v("Excavator 02", "JCB 205, Site A", "truck", "jeep", 42),
      v("Transit mixer 5", "Ashok Leyland 2820", "truck", "truck", 205),
      v("Tipper 09", "BharatBenz 2823C", "truck", "truck", 150),
      v("Genset 11", "125 kVA, Yard", "truck", "pickup", 262),
      v("Trailer 19", "Low bed, Site B", "truck", "truck", 340),
    ],
    people: ["Joginder Malik", "Suresh Baghel", "Abdul Rahim", "Mohan Netam", "Pawan Dewangan"],
    customers: ["Site A, Naya Raipur", "Site B, Mandir Hasaud", "Quarry, Arang", "Batching plant"],
    from: "Quarry, Arang",
    to: "Site A, Naya Raipur",
    stops: ["Quarry", "Weighbridge", "Site A gate", "Fill point"],
    summary: "31 machines across 3 sites",
  },
  corporate: {
    key: "corporate",
    tint: "sky",
    noun: { vehicle: "cab", trip: "shift", driver: "driver", customer: "employee", stop: "pickup" },
    vehicles: [
      v("CG 04 CB 6021", "Toyota Etios", "car", "car", 205),
      v("CG 04 CB 6034", "Maruti Ertiga", "car", "suv", 262),
      v("CG 04 CB 6040", "Tempo Traveller", "bus", "bus", 150),
      v("CG 04 CB 6052", "Swift Dzire", "car", "car", 28),
      v("CG 04 CB 6058", "Innova Crysta", "car", "suv", 340),
      v("CG 04 CB 6063", "Staff bus, 32 seats", "bus", "bus", 185),
    ],
    people: ["Mohit Jain", "Arjun Bhatia", "Salim Khan", "Tarun Ahuja", "Gopal Verma"],
    customers: ["Night shift, 22:00", "General shift, 09:00", "Evening shift, 14:00", "Plant visit"],
    from: "Office campus",
    to: "Tatibandh",
    stops: ["Pooja Rawat", "Divya Menon", "Nikhil Joshi", "Tatibandh"],
    summary: "22 cabs, 64 employees on the night shift",
  },
  waste: {
    key: "waste",
    tint: "emerald",
    noun: { vehicle: "truck", trip: "round", driver: "driver", customer: "ward", stop: "household" },
    vehicles: [
      v("Vehicle 4", "Tata Ace tipper, Ward 12", "truck", "pickup", 150),
      v("Vehicle 7", "Tata Ace tipper, Ward 13", "truck", "pickup", 262),
      v("Vehicle 2", "Compactor, Ward 14", "truck", "truck", 205),
      v("Vehicle 9", "Tata Ace tipper, Ward 15", "truck", "pickup", 28),
      v("Vehicle 1", "Compactor, Ward 11", "truck", "truck", 340),
      v("Vehicle 6", "Tata Ace tipper, Ward 16", "truck", "pickup", 185),
    ],
    people: ["Ramu Nishad", "Santosh Yadu", "Lakhan Sahu", "Bhuvan Dhruv", "Kamlesh Sonkar"],
    customers: ["Ward 12", "Ward 13", "Ward 14", "Ward 15"],
    from: "Depot",
    to: "Dumping yard",
    stops: ["Lane 1", "Lane 2", "Lane 3", "Transfer point"],
    summary: "18 vehicles on morning rounds",
  },
  transit: {
    key: "transit",
    tint: "violet",
    noun: { vehicle: "bus", trip: "service", driver: "driver", customer: "route", stop: "stop" },
    vehicles: [
      v("CG 04 PB 8801", "Volvo 9400, Raipur to Bilaspur", "bus", "bus", 262),
      v("CG 04 PB 8812", "Tata Starbus, Raipur to Durg", "bus", "bus", 42),
      v("CG 04 PB 8820", "Ashok Leyland Viking", "bus", "bus", 150),
      v("CG 04 PB 8834", "Eicher Skyline, city loop", "bus", "bus", 205),
      v("CG 04 PB 8841", "Volvo 9400, Raipur to Nagpur", "bus", "bus", 340),
      v("CG 04 PB 8855", "Tempo Traveller, tour", "bus", "bus", 185),
    ],
    people: ["Balwant Singh", "Iqbal Ansari", "Hemant Sinha", "Ravi Thakur", "Shyam Kashyap"],
    customers: ["Raipur to Bilaspur", "Raipur to Durg", "City loop", "Raipur to Nagpur"],
    from: "Raipur bus stand",
    to: "Bilaspur",
    stops: ["Raipur bus stand", "Simga", "Bhatapara", "Bilaspur"],
    summary: "38 buses, 31 services running",
  },
  service: {
    key: "service",
    tint: "sky",
    noun: { vehicle: "van", trip: "job", driver: "engineer", customer: "site", stop: "job" },
    vehicles: [
      v("CG 04 FS 2210", "Mahindra Bolero Camper", "car", "pickup", 205),
      v("CG 04 FS 2218", "Maruti Eeco", "car", "suv", 262),
      v("CG 04 FS 2224", "Tata Yodha", "truck", "pickup", 150),
      v("CG 04 FS 2231", "Force Gurkha", "car", "jeep", 28),
      v("CG 04 FS 2240", "Ambulance, Force Traveller", "bus", "bus", 340),
      v("CG 04 FS 2246", "Mahindra Scorpio", "car", "suv", 185),
    ],
    people: ["Nitin Agrawal", "Yusuf Sheikh", "Prakash Rao", "Girish Nayak", "Amit Chandrakar"],
    customers: ["Tower RPR-118", "Substation, Urla", "Tower RPR-204", "Pump house 6"],
    from: "Service centre",
    to: "Tower RPR-118",
    stops: ["Tower RPR-118", "Substation, Urla", "Tower RPR-204", "Pump house 6"],
    summary: "14 vans, 9 jobs open",
  },
};

export const getContext = (key?: string): Context => CONTEXTS[(key as ContextKey) ?? "fleet"] ?? CONTEXTS.fleet;
