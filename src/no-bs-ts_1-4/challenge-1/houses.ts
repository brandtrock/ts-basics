// Convert houses.json -> houses.ts, then "export default"

export interface House {
  name: string;
  planets: string | string[];
}

const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Gedi Prime", "Arrakis"] },
];

export default houses;
