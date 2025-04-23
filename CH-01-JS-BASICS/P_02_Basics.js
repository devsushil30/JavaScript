/**
 * Todo : (1) Variables in JS
 * 
 * ^ Variables are containers for storing data values.
 * ^ In JS, we can declare variables using the var, let, or const keywords.
 */

// * Using var (global-scoped OR function-scoped)
var x = 10;

// * Using let (block-scoped)
let y = 20;

// * Using const (block-scoped, immutable)
const z = 30;

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (2) Data Types in JS
 * 
 * ^ Data types are used to store different types of data.
 * 
 * (1) Primitive: Number, String, Boolean, Undefined, null, Symbol, BigInt
 * (2) Non-Primitive (Reference): Object, Array, Function
 */

// * number: All numbers (integers and decimals)

console.log(6);
console.log(5.67);
console.log(0);
console.log(-0);
console.log(Infinity);
console.log(-Infinity);

// * bigint: For very large integers

console.log(1234567890987654321234567899n);

// * string: Text
console.log("I'm sushil!");
console.log('Learning JS!');
console.log(`Waiting for Node to learn!`);

// * boolean: True or false
console.log(true);
console.log(false);

// * undefined: A variable declared but not assigned any value
let p;
console.log(p);

// * null: Intentional absence of any value
let q = null
console.log(q);

// * symbol
console.log(Symbol("Hello"));

// * object:  A collection of key-value pairs
console.log({ "Age": 22 });

// * array: An ordered list of items
let arr = [1, 2, 3];
console.log(arr);


// & ******* typeof :- Returns type of given argument in a text *******
console.log(typeof "Sushil");
console.log(typeof (true));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof (typeof 56)); // ! Always a string

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (3) Dynamic Typing in JavaScript
 * 
 * ^ JavaScript is dynamically typed, which means:
 * (1) We don’t have to specify a variable's type.
 * (2) A variable’s type can change over time.
 */

let data = 10; // Number
data = "Ten";  // Now it's a String
data = true;   // Now it's a Boolean
