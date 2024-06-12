//Exercise 1: Temperature Check

//1
// Temperature check using if-else statements
let temperature1 = 18;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

//Exercise 2: Divisibility Check

//1
// Divisibility check using if-else statements
let temperature2 = 18;
let range;

if (temperature < 0) {
  range = 'freezing';
} else if (temperature >= 0 && temperature <= 15) {
  range = 'cold';
} else if (temperature >= 16 && temperature <= 25) {
  range = 'mild';
} else {
  range = 'warm';
}

switch (range) {
  case 'freezing':
    console.log("It's freezing!");
    break;
  case 'cold':
    console.log("It's cold.");
    break;
  case 'mild':
    console.log("It's mild.");
    break;
  case 'warm':
    console.log("It's warm.");
    break;
  default:
    console.log("Temperature out of range.");
}



// 2
// Divisibility check using switch statements
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}


switch (divCheck) {
  case 'both':
    console.log("Divisible by both.");
    break;
  case 'two':
    console.log("Divisible by 2.");
    break;
  case 'three':
    console.log("Divisible by 3.");
    break;
  case 'none':
    console.log("Not divisible by 2 or 3.");
    break;
  default:
    console.log("Invalid number.");
}
