/**
 * No BS TS #2
 */
const { getName } = require("./functions");

// Works
console.log(
  getName({
    first: "a",
    last: "b",
  })
); // a b

// Fails if you don't have the Optional Chaining Operator (?)
console.log(getName()); // undefined undefined => after nullish coalescense operator => first last
