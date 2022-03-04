/**
 * No BS TS #3
 */

// function that supports a callback function
// This is actually a TYPE specification - callback: () => void
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// functions as types
export type MutationFunction = (v: number) => number;

// function with params
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], (v) => v * 10));

// Classic JS closure - functions that return functions
export type AdderFunction = (v: number) => number;
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
