/**
 * No BS TS Challenge #2
 *
 * Reproduce forEach, filter, and map using reduce and they have to be type safe
 */

const myArr = [1, 2, 3];

// REDUCE
console.log("REDUCE");
const initialVal = 0;
const test = myArr.reduce((prev, curr) => prev + curr, initialVal);
console.log(test);

// FOR-EACH
console.log("FOR EACH");
myArr.forEach((n: number) => console.log(n * 10));
