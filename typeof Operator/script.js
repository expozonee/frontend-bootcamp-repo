const num = 10;
const str = "Hello";
const bool = true;

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean

const firstVar = 42;
const secondVar = "42";
const firstVarType = typeof firstVar;
const secondVarType = typeof secondVar;
console.log(firstVarType === secondVarType); // false

let noValue;
const emptyValue = null;
console.log(typeof noValue); // undefined
console.log(typeof emptyValue); // object

const width = 10;
const text = "Hello";
const isTrue = true;
console.log(`The Value of width is ${width} and its type is ${typeof width}`); // The Value of width is 10 and its type is number
console.log(`The Value of text is ${text} and its type is ${typeof text}`); // The Value of text is Hello and its type is string
console.log(
  `The Value of isTrue is ${isTrue} and its type is ${typeof isTrue}`
); // The Value of isTrue is true and its type is boolean
