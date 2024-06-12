// Exercise 3: For Loops

//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
console.log();

//2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  //3
  let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log('Sum:', sum);
console.log();

//4
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}
console.log();

//5
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log('Largest number:', largest);

//Exercise 4: While Loops

//1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log();

//2
let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}
console.log();

//3
let sum1 = 0;
let k = 1;
while (k <= 100) {
  sum1 += k;
  k++;
}
console.log('Sum:', sum1);
console.log();

//4
let l = 5;
while (l < 50) {
  console.log(l);
  l += 5;
}
console.log();

//Exercise 5: Do While Loops

//1
let m = 1;
do {
  console.log(m);
  m++;
} while (m <= 10);
console.log();

//2
let sum2 = 0;
let n = 1;
do {
  sum2 += n;
  n++;
} while (n <= 100);
console.log('Sum:', sum2);
console.log();

//3


let input = false;

do {
    input = parseInt(prompt("Enter a number greater than 10:"));
    if (input > 10) {
        alert(`Number ${input} is greater than 10. Well done!`);
    } else {
        alert(`Enter a number greater than 10.`);
    }
} while (!input);

console.log(`You entered: ${input}`);

//4

let attempts = 0;
let remainingAttempts = 5;

function newGuess() {
    attempts = 3;
    remainingAttempts = 5;
    document.getElementById('guessInput').removeAttribute('disabled');
    document.getElementById('result').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('newGuessBtn').style.display = 'none';
    generateRandomNumber();
}

function generateRandomNumber() {
    correctNumber = Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    attempts++;
    remainingAttempts--;

    const guess = parseInt(document.getElementById('guessInput').value);
    const resultDisplay = document.getElementById('result');

    if (guess === correctNumber) {
        resultDisplay.textContent = 'Well Done!';
    } else {
        resultDisplay.textContent = 'Oops, Try Again.';
    }

    if (attempts < 5 && guess !== correctNumber) {
        resultDisplay.textContent += ` You have ${remainingAttempts} attempts left.`;
    } else {
        if (guess === correctNumber) {
            resultDisplay.textContent = `Congratulations! You guessed the correct number ${correctNumber} in ${attempts} attempts.`;
        } else {
            resultDisplay.textContent = `Out of attempts. The correct number was ${correctNumber}.`;
        }
        document.getElementById('guessInput').setAttribute('disabled', true);
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('newGuessBtn').style.display = 'block';
    }
}
