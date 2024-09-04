const num1 = 8;
const num2 = 15;
console.log(num1 + num2); // 23

const num3 = 30;
const num4 = 12;
console.log(num3 - num4); // 18

const x = 7;
const y = 3;
console.log(x * y); // 21

const dividend = 20;
const divisor = 4;
console.log(dividend / divisor); // 5
console.log(dividend % divisor); // 0

const number1 = 15;
const number2 = 25;
const number3 = 10;
const average = (number1 + number2 + number3) / 3; // 16.666666666666668

// modulo operator returns the remainder of a division operation.
const number = 10;
console.log(x % 3); // explain: 10 divided by 3 is 3 with a remainder of 1, so the output is 1

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false

function isDivisibleBy3And5(num) {
  return num % 3 === 0 && num % 5 === 0;
}

console.log(isDivisibleBy3And5(15)); // true
console.log(isDivisibleBy3And5(9)); // false

function displayOnlyNumbersDividedBy4() {
  for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}

displayOnlyNumbersDividedBy4();

function isGreaterThan10LessThan20(num) {
  return num > 10 && num < 20;
}

console.log(isGreaterThan10LessThan20(15)); // true
console.log(isGreaterThan10LessThan20(25)); // false

function isGreaterThan10OrLessThanMinus5(num) {
  return num > 10 || num < -5;
}

console.log(isGreaterThan10OrLessThanMinus5(15)); // true
console.log(isGreaterThan10OrLessThanMinus5(-10)); // true
console.log(isGreaterThan10OrLessThanMinus5(-3)); // false

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true)); // false
console.log(oppositeBoolean(false)); // true

function checkNumber(num) {
  return (num > 5 && num < 10) || (num > 20 && num < 30);
}

console.log(checkNumber(7)); // true
console.log(checkNumber(25)); // true
console.log(checkNumber(15)); // false
