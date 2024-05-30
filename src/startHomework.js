
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
const firstElement = ages[0];
const lastElement = ages[ages.length - 1];
const difference = lastElement - firstElement;
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
const averageLetters = totalLetters / names.length;
let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + ' ';
}

// How do you access the last element of any array?
let arr = [1, 2, 3, 4, 5]; // example array
arr[arr.length - 1]; // 5 

// How do you access the first element of any array?
arr[0]; // 1
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
 // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthsSum = 0;
for(let i = 0; i < nameLengths.length; i++){
  nameLengthsSum += nameLengths[i];
}
console.log("nameLengthsSum: ", nameLengthsSum);
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
const concatenateWord = (word, n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
}
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const isSumGreaterThan100 = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const isAverageGreaterThan = (numbers1, numbers2) => {
  let sum1 = 0;
  for (let i = 0; i < numbers1.length; i++) {
    sum1 += numbers1[i];
  }
  let average1 = sum1 / numbers1.length;

  let sum2 = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum2 += numbers2[i];
  }
  let average2 = sum2 / numbers2.length;

  return average1 > average2;
}
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => {
  return isHotOutside && moneyInPocket > 10.50;
}
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// This function takes an array of numbers and returns the sum of all the numbers in the array.
const sumArray = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}