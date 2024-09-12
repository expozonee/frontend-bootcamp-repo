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

function getInitials(str) {
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

console.log(getInitials("John Doe")); // "J.D"
console.log(getInitials("Mike Smith")); // "M.S"

// 5.6

function maskify(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }

  const lastFourChars = str.slice(str.length - 4, str.length);
  const rest = str.slice(0, str.length - 4);
  const hiddenChars = rest.replace(/./g, "#");

  return hiddenChars + lastFourChars;
}

console.log(maskify("Hedgdfgdfgdfgdfgdgdsello")); // "#############ello"

// 5.7

function shortestWord(str) {
  return str.split(" ").reduce((acc, word) => {
    const wordLength = word.length;
    if (wordLength < acc.length) {
      return word;
    }
    return acc;
  });
}

console.log(shortestWord("Hi, how are you?")); // "Hi"

// 5.8

function longestWord(str) {
  return str.split(" ").reduce((acc, word) => {
    const wordLength = word.length;
    if (wordLength > acc.length) {
      return word;
    }
    return acc;
  });
}

console.log(longestWord("Hello friends")); // "friends"

// 6.1

function accum(str) {
  const condition = /^[a-zA-Z]+$/;
  if (!condition.test(str)) {
    return "String contains only alphabets";
  }

  const extendedStr = str
    .split("")
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return (
        char
          .repeat(index + 1)
          .slice(0, 1)
          .toUpperCase() + char.repeat(index + 1).slice(1)
      );
    })
    .join("-");

  return extendedStr;
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// 6.2

function countDuplicates(str) {
  const charsCount = str.split("").reduce((acc, char) => {
    if (acc[char]) {
      acc[char]++;
    } else {
      acc[char] = 1;
    }
    return acc;
  }, {});

  const repeatedChars = Object.entries(charsCount).filter(
    ([key, value]) => value > 1
  );

  return repeatedChars.length > 0
    ? `${repeatedChars.length}, repeated characters are ${repeatedChars
        .map(([key, value]) => `${key} repeated ${value} times`)
        .join(", ")}`
    : "no characters repeats more than once";
}

console.log(countDuplicates("helloo")); // 2, repeated characters are l repeated 2 times, o repeated 2 times

// 6.3

function longest(str1, str2) {
  const combinedStr = (str1 + str2).toLowerCase();

  const condition = /^[a-z]+$/;

  if (!condition.test(combinedStr.toLowerCase())) {
    return "String must contain only lowercase alphabet characters";
  }

  let uniqueletters = combinedStr
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === index)
    .join("");

  const orderedChars = uniqueletters.split("").sort().join("");
  return orderedChars;
}

console.log(longest("hesdfdsfgsfSFlloA", "woSGDFGSSDOENGTOWKLMGarld")); // "adefghklmnorstw"

// 6.4

function isogram(str) {
  return str
    .toLowerCase()
    .split("")
    .every((char, index, arr) => arr.indexOf(char) === index);
}

console.log(isogram("hello")); // false

// 7

function forEach(arr, callback) {
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  }

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const arr = [1, 2, 3, 4, 5];
forEach(arr, (num, index, arr) => {
  console.log(num, index, arr);
});

function filter(arr, callback) {
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  }
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const arr2 = [1, 2, 3, 4, 5];

const filteredArr = filter(arr2, (num) => num > 3);
console.log(filteredArr); // [4, 5]

function map(arr, callback) {
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  }
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(callback(arr[i], i, arr));
  }
  return mappedArr;
}

const arr3 = [1, 2, 3, 4, 5];
const mappedArr = map(arr3, (num) => num * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]

// 8

function findPerimeter(length, width) {
  return length * 2 + width * 2;
}

console.log(findPerimeter(8, 10)); // 36
console.log(findPerimeter(3, 36)); // 78
console.log(findPerimeter(4, 15)); // 38
