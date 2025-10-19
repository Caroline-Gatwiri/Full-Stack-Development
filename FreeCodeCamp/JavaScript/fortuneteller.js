let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

// This is the formula to generate a random integer between a minimum and maximum, inclusive.
// We use Math.floor() to round down to the nearest whole number.
const min = 1;
const max = 5;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let selectedFortune; // Declare the variable but don't assign it a value yet.

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
