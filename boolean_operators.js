//Exercise 2: Boolean and Operators

// 1
let num1 = 5;
let num2 = 10;


let isGreater = num1 > num2;
let isLessEqual = num1 <= num2;
let isEqual = num1 == num2;
let isNotEqual = num1 != num2;

console.log(`${num1} > ${num2} is ${isGreater}`);
console.log(`${num1} <= ${num2} is ${isLessEqual}`);
console.log(`${num1} == ${num2} is ${isEqual}`);
console.log(`${num1} != ${num2} is ${isNotEqual}`);

// 2
let x = 8;
let y = 12;

console.log(`x > y is ${x > y}`);
console.log(`x <= y is ${x <= y}`);
console.log(`x == y is ${x == y}`);
console.log(`x != y is ${x != y}`);

// 3
let a = true;
let b = false;

console.log(`a AND b is ${a && b}`);
console.log(`a OR b is ${a || b}`);
console.log(`NOT a is ${!a}`);

// 4
let p = 10;

p += 5;
console.log(`p after += 5 is ${p}`);

p -= 3;
console.log(`p after -= 3 is ${p}`);

p *= 2;
console.log(`p after *= 2 is ${p}`);

p /= 4;
console.log(`p after /= 4 is ${p}`);

p %= 3;
console.log(`p after %= 3 is ${p}`);
