// 1.1

function booleanAsString(b) {
  if (typeof b !== "boolean") {
    return "Please enter a boolean value";
  }
  if (b) return "Yes";
  else return "No";
}

console.log(booleanAsString(true)); // "Yes"
console.log(booleanAsString(false)); // "No"
console.log(booleanAsString("true")); // "Please enter a boolean value"

// 2.1

function sumLowestTwoNumbers(arr) {
  if (!arr.every((el) => typeof el === "number")) {
    return "Please enter an array with only numbers";
  }
  if (arr.length < 2) {
    return "Please enter an array with at least 2 numbers";
  }
  const minPositiveNumOfInt = 4;
  const numOfPositiveInt = arr.filter((el) => Number.isInteger(el) && el > 0);
  if (numOfPositiveInt.length < minPositiveNumOfInt) {
    return "Please enter an array with at least 4 integers";
  }
  let sortedArr = arr.sort((a, b) => a - b);
  const positiveNumArr = sortedArr.filter((el) => el > 0);
  return positiveNumArr[0] + positiveNumArr[1];
}

console.log(sumLowestTwoNumbers([2, 9, 6, 10, -1])); // 8

// 2.2

function binaryToIntger(arr) {
  if (!arr.every((el) => el === 0 || el === 1)) {
    return "Please enter an array with only 0s and 1s";
  }
  return parseInt(arr.join(""), 2);
}

console.log(binaryToIntger([1, 0, 1, 0])); // 10
console.log(binaryToIntger([1, 1, 0, 0, 1, 0])); // 50

// 2.3

function findNextSquare(int) {
  if (!Number.isInteger(int)) {
    return "Please enter an integer";
  }
  if (Math.sqrt(int) % 1 !== 0) {
    return -1;
  }
  return Math.pow(Math.sqrt(int) + 1, 2);
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1

// 2.4

function findUnique(arr) {
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  }
  if (arr.length < 3) {
    return "Please enter an array with at least 3 elements";
  }
  return arr.find((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(findUnique([1, 1, 2])); // 2
console.log(findUnique([1, 1, 1, 2, 1, 1])); // 2
console.log(findUnique([1, 2, 2, 2, 2, 2])); // 1

// 2.5

function summation(num) {
  if (!Number.isInteger(num)) {
    return "Please enter an integer";
  }
  if (num < 1) {
    return "Please enter a positive integer";
  }

  return Array.from({ length: num + 1 }, (_, i) => i).reduce(
    (acc, curr) => acc + curr
  );
}

console.log(summation(5)); // 15

// 2.6

function findCentury(year) {
  if (!Number.isInteger(year)) {
    return "Please enter an integer";
  }
  if (year < 1) {
    return "Please enter a positive integer";
  }
  return Math.ceil(year / 100);
}

console.log(findCentury(1705)); // 18
console.log(findCentury(1900)); // 19
console.log(findCentury(1601)); // 17
console.log(findCentury(2000)); // 20
console.log(findCentury(2001)); // 21
console.log(findCentury(89)); // 1

// 2.7

function basicMath(op, num1, num2) {
  if (!["+", "-", "*", "/"].includes(op)) {
    return "Please enter a valid operator";
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Please enter integers";
  }
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

console.log(basicMath("+", 4, -10)); // -6
console.log(basicMath("-", 15, -18)); // 33
console.log(basicMath("*", 5, 5)); // 25

// 3.1

function nb_year(p0, percent, aug, p) {
  if (
    !Number.isInteger(p0) ||
    !Number.isInteger(percent) ||
    !Number.isInteger(aug) ||
    !Number.isInteger(p)
  ) {
    return "Please enter integers";
  }

  if (p0 < 1 || percent < 1 || aug < 1 || p < 1) {
    return "Please enter positive integers";
  }

  let years = 0;
  let population = p0;
  while (population < p) {
    population += population * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(nb_year(1500, 5, 100, 5000)); // 15

// 3.2

function numOfPeopleInBus(busStops) {
  if (!Array.isArray(busStops)) {
    return "Please enter an array";
  }
  if (busStops.length < 1) {
    return "Please enter an array with at least 1 element";
  }

  const initialPeople = 0;
  let peopleGetIn = 0;
  let peopleGetOut = 0;

  busStops.forEach((busStop) => {
    if (!Array.isArray(busStop)) {
      return "Please enter an array of arrays";
    }
    if (busStop.length !== 2) {
      return "Please enter an array with 2 elements";
    }
    if (!busStop.every((el) => Number.isInteger(el))) {
      return "Please enter an array with only integers";
    }

    if (busStop[0] < 0 || busStop[1] < 0) {
      return "Please enter positive integers";
    }
    peopleGetIn += busStop[0];
    peopleGetOut += busStop[1];
  });

  return initialPeople + peopleGetIn - peopleGetOut;
}

console.log(
  numOfPeopleInBus([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5

// 4.1

function fibbonacci(n) {
  if (!Number.isInteger(n)) {
    return "Please enter an integer";
  }
  if (n < 1) {
    return "Please enter a positive integer";
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr;
}

console.log(fibbonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 4.2

function tribonacci(n) {
  if (!Number.isInteger(n)) {
    return "Please enter an integer";
  }
  if (n < 1) {
    return "Please enter a positive integer";
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 0];

  let tribArr = [0, 0, 1];
  for (let i = 3; i < n; i++) {
    tribArr.push(tribArr[i - 1] + tribArr[i - 2] + tribArr[i - 3]);
  }
  return tribArr;
}

console.log(tribonacci(10)); // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]

// 5.1

function trimFirstLastString(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }
  return str.slice(1, -1);
}

console.log(trimFirstLastString("Hello")); // "ell"
console.log(trimFirstLastString("World")); // "orl"

// 5.2

function repeat_str(n, str) {
  if (!Number.isInteger(n)) {
    return "Please enter an integer";
  }
  if (n < 1) {
    return "Please enter a positive integer";
  }
  if (typeof str !== "string") {
    return "Please enter a string";
  }
  return str.repeat(n);
}

console.log(repeat_str(5, "Hello")); // "HelloHelloHelloHelloHello"

// 5.3

function toCamelCase(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }
  if (str.includes("-")) {
    const camelCase = str
      .split("-")
      .map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    return camelCase;
  }
  if (str.includes("_")) {
    const camelCase = str
      .split("_")
      .map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    return camelCase;
  }
  return str;
}

console.log(toCamelCase("hello-world")); // "helloWorld"
console.log(toCamelCase("hello_world")); // "helloWorld"
console.log(toCamelCase("helloWorld")); // "helloWorld"
console.log(toCamelCase("World-asdas")); // "Worldasdas"

// 5.4

function toWeirdCase(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }
  if (str.includes(" ")) {
    const weirdCase = str
      .split(" ")
      .map((word) => {
        return word
          .split("")
          .map((letter, index) => {
            if (index % 2 === 0) {
              return letter.toUpperCase();
            }
            return letter.toLowerCase();
          })
          .join("");
      })
      .join(" ");

    return weirdCase;
  }
  const weirdCase = str
    .split("")
    .map((letter, index) => {
      if (index % 2 === 0) {
        return letter.toUpperCase();
      }
      return letter.toLowerCase();
    })
    .join("");
  return weirdCase;
}

console.log(toWeirdCase("hello world")); // "HeLlO WoRlD"
console.log(toWeirdCase("helloWorld")); // "HeLlOwOrLd"
console.log(toWeirdCase("String")); // "StRiNg"

// 5.5

function test(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }

  if (!str.includes(" ")) {
    return "Please enter a full name with space";
  }

  const intials = str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase();
    })
    .join(".");

  return intials;
}

console.log(test("John Doe")); // "J.D"
console.log(test("Mike Smith")); // "M.S"
