// * Boxing in JavaScript refers to the process where primitive data types (such as numbers, strings, and booleans) are temporarily converted into their corresponding wrapper objects (Number, String, and Boolean) to access object-like properties and methods.

let num = 45;
console.log(num.toString()); // "45"

let primitiveString = "Hello";
let primitiveNumber = 42;
let primitiveBoolean = true;

// Trying to access the `toUpperCase` method on a string primitive
let upperCaseString = primitiveString.toUpperCase(); // Here, `primitiveString` is boxed into a `String` object temporarily

// Trying to access the `toFixed` method on a number primitive
let fixedNumber = primitiveNumber.toFixed(2); // Here, `primitiveNumber` is boxed into a `Number` object temporarily

// Trying to access the `valueOf` method on a boolean primitive
let booleanValue = primitiveBoolean.valueOf(); // Here, `primitiveBoolean` is boxed into a `Boolean` object temporarily

console.log(upperCaseString); // Output: "HELLO"
console.log(fixedNumber);     // Output: "42.00"
console.log(booleanValue);    // Output: true