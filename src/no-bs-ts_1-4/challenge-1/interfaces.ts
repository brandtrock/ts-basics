// Moved to houses.ts - comment out when using houses.ts
// import houses from "./houses.json";
// interface House {
//   name: string;
//   planets: string | string[];
// }

import houses, { House } from "./houses"; // When using houses.ts

interface HouseWithID extends House {
  id: number;
}

// Function Overloading - can be collapsed into just the active "findHouses"
// function findHouses(houses: string): HouseWithID[];
// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];
// function findHouses(houses: House[]): HouseWithID[];
// function findHouses(
//   houses: House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
