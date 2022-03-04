/**
 * No BS TS #5
 */

// OPTIONAL PARAMETERS - cannot put another required parameter after an optional one
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "Something More");

// OPTIONAL FIELDS
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // <-- this works, but not recommended
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? ""; // <-- same as the above function, but less complicated
}

// OPTIONAL CALLBACKS - what if callback is optional?
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // Old school way of checking for its existance:
  // if (callback) {
  //   callback();
  // }
  // New school way of doing this:
  callback?.();
}
