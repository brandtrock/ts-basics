/**
 * No BS TS #4
 */

interface Coordinate {
  x: number;
  y: number;
}

// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return {
//     x,
//     y,
//   };
// }

/*
 * Function Overloading of the above separate functions
 */
// Type "unkown" is like an "any," but you have to cast it before you use it
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  // Type check for this is done at runtime, not compile time - hence why we aren't checking "Coordinate" for type, but "object"
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    // use TS keyword "as" to cast the type
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 25 }));
console.log(parseCoordinate("x: 12,y: 22")); // How would you handle this type?
