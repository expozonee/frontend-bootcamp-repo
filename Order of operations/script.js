const a = 8;
const b = 2;
const result = a * b + 3; // 8 * 2 + 3 = 16 + 3 = 19
console.log(result); // 19;

const x = 4;
const y = 2;
const z = 3;
const result2 = x + y * z - 1; // 4 + 2 * 3 - 1 = 4 + 6 - 1 = 10 - 1 = 9
console.log(result2); // 9;

const aa = 4;
const bb = 2;
const result3 = (aa + bb) * (bb - 1); // (4 + 2) * (2 - 1) = 6 * 1 = 6
console.log(result3); // 6;

const num = 50;
const xx = 5;
const yy = 6;
const result4 = num - xx * yy; // 50 - 5 * 6 = 50 - 30 = 20
console.log(result4); // 20;

const aaa = 2;
const bbb = 3;
const c = 4;
const result5 = aaa + bbb * c; // 2 + 3 * 4 = 2 + 12 = 14
console.log(result5); // 14;
const result6 = ((aaa + bbb) * c) / 2; // ((2 + 3) * 4) / 2 = (5 * 4) / 2 = 20 / 2 = 10
console.log(result6); // 10;

const aaa1 = 3;
const bbb1 = 6;
const c1 = 5;
const d = 4;
const result7 = aaa1 + (bbb1 * (c1 + d)) / bbb1 - d;
/* 3 + 6 * (5 + 4) / 6 - 4
    = 3 + 6 * 9 / 6 - 4
    = 3 + 54 / 6 - 4 
    = 3 + 9 - 4 
    = 8 */
console.log(result7); // 8;

const num1 = 2;
const str = "3";
const result8 = num1 + str * 4; // 2 + 3 * 4 = 2 + 12 = 14
console.log(result8); // 14;

const aaa2 = 10;
const bbb2 = 20;
const c2 = "30";
const result9 = aaa2 + bbb2 + c2; // 10 + 20 + "30" = 30 + "30" = "30" + "30" = "3030"
console.log(result9); // 3030;
const result10 = c2 + aaa2 + bbb2; // "30" + 10 + 20 = "301020"
console.log(result10); // 301020;

const numStr = "3";
const num2 = 10;
const result11 = +numStr + num2; // 3 + 10 = 13
console.log(result11); // 13;

let someNumber = 10;
const newNum = someNumber++ * 2; // 10 * 2 = 20 why? because the value of someNumber is used first and then incremented
console.log(newNum); // 20;

const someNumber1 = 10;
const result12 = someNumber1 / 0; // Infinity
console.log(result12); // Infinity;

const t = 15;
const s = 4;
const result13 = t % s; // 15 % 4 = 3
console.log(result13); // 3;
