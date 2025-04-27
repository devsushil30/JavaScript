/**
 * Todo : (1) Arrays in JS
 * 
 * ^ An array is a special object in JavaScript designed to store multiple values (of any type) in a single variable. It provides a way to group related data together.
 */

// & Creation of Arrays

// Using Array Literal
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Using new Array() Constructor
const birds = new Array(`Parrot`, `Pigeon`, `Peacock`);
console.log(birds);

// Empty Array
const empty = [];
console.log(empty);

// * ---------------------------------------------------------------------------------------------------------------

// Fun with arrays

let arr = [23, "Nobita", true, 20]; // Array of length 4

console.log(arr[2]); // true
console.log(arr); // [ 23, 'Nobita', true, 20 ] 
arr[1] = "Doraemon";
console.log(arr); // [ 23, 'Doraemon', true, 20 ] 

console.log(arr[7]); // undefined
arr[7] = "Sunio";
console.log(arr); // [ 23, 'Doraemon', true, 20, <3 empty items>, 'Sunio' ]

// length property of array
console.log(arr.length);

// * ---------------------------------------------------------------------------------------------------------------

// & Common Array Methods

let nums = [10, 20, 30, 40];
console.log(nums); // [ 10, 20, 30, 40 ]

// push(): Add to the end.
nums.push(50);
console.log(nums); // [ 10, 20, 30, 40, 50 ]

// pop(): Remove from the end.
nums.pop()
console.log(nums); // [ 10, 20, 30, 40 ]

// unshift(): Add to the beginning.
nums.unshift(0)
console.log(nums); // [ 0, 10, 20, 30, 40 ]

// shift(): Remove from the beginning.
nums.shift()
console.log(nums); // [ 10, 20, 30, 40 ]

// * ---------------------------------------------------------------------------------------------------------------

// & Searching and Finding

// indexOf(): Find the index of an element.
console.log(nums.indexOf(30)); // 2
console.log(nums.indexOf(300)); // -1

// includes(): Check if an element exists.
console.log(nums.includes(30)); // true
console.log(nums.includes(300)); // false

// * ---------------------------------------------------------------------------------------------------------------

// & Sorting and Reversing

// sort(): Sort elements (mutates the array).
nums.sort();
console.log(nums);

// reverse(): Reverse the array order.
nums.reverse();
console.log(nums);