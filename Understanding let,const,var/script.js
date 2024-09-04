var number = 10;

let someString = "Hello World";

const isValid = true;

var number2 = 10;
console.log(number2); // 10
number2 = 20;
console.log(number2); // 20

let msg = "Hello";
console.log(msg); // Hello
msg = "World";
console.log(msg); // World

const myName = "Ibrahem";
console.log(name); // Ibrahem
myName = "other name"; // TypeError: Assignment to constant variable.
console.log(name); // Ibrahem
//   const cant be reassigned to a new value because it is a constant variable.
//   let can be reassigned to a new value.
//   var can be reassigned to a new value.
