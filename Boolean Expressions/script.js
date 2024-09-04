const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend); // false

const age = 20;
const license = true;
console.log(age >= 18 && license); // true

const knowsJavascript = false;
const knowsPython = true;
console.log(knowsJavascript || knowsPython); // true

const isRaining = true;
console.log(!isRaining); // false

const likesMusic = false;
const playsGuitar = true;
const hasTime = true;
console.log(likesMusic && (playsGuitar || hasTime)); // false

const personAge = 25;
console.log(personAge > 18); // true

const currentTemperature = 30;
console.log(currentTemperature < 20 || currentTemperature > 30); // false

const firstNumber = 10;
const secondNumber = "10";
console.log(firstNumber == secondNumber); // true: the first number is equal to the second number
console.log(firstNumber === secondNumber); // false: the first number is equal to the second number and the type of the first number is equal to the type of the second number

const budget = 500;
const expenses = 450;
console.log(expenses <= budget); // true

const person1Height = 170;
const person2Height = 165;
console.log(person1Height > person2Height); // true
console.log(person1Height < person2Height); // false
console.log(person1Height === person2Height); // false
