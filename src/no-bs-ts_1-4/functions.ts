/**
 * No BS TS #2
 */
function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// UNION Type ~ param: string | number
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void =>
  console.log(format(title, param));

// Return a PROMISE
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// Rest Parameters
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

/*
 * TYPESCRIPT only enforces types at COMPILE TIME, not at runtime.
 */

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
