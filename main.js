// Variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myObject = { name: "John", age: 30 };
let mySymbol = Symbol('unique');

// Print variables to the console
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myUndefined);
console.log(myObject);
console.log(mySymbol);
part 2
// Create an array of numbers
let numbers = [1, 5, 10, 15, 20];

// Use map method to create a new array where each number is multiplied by 2
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// Use filter method to create a new array that only includes numbers greater than 10
let filtered = numbers.filter(num => num > 10);
console.log(filtered);

// Use reduce method to find the sum of all numbers in the array
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// Use forEach method to print each number in the array to the console
numbers.forEach(num => console.log(num));
part 3
// Function named greet that takes a name parameter and prints a greeting message to the console
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function named sumArray that takes an array of numbers as a parameter and returns the sum of all elements
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Function named findMax that takes an array of numbers as a parameter and returns the maximum number
function findMax(arr) {
    return Math.max(...arr);
}

// Test the functions
greet('Alice');
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(findMax([1, 2, 3, 4, 5]));
