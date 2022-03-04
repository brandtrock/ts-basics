/**
 * No BS TS Challenge #2
 *
 * Reproduce forEach, filter, and map using reduce and they have to be type safe
 */

// FOR-EACH
const myArr = [1, 2, 3];
myArr.forEach((n: number) => console.log(n * 10));
