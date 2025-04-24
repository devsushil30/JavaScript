/**
 * Todo : Operators in JS
 * 
 * ^ Operators are used to perform different actions on data items.
 */

// * (1) Arithmetic Operators

let a = 10;
let b = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0 (remainder of a divided by b)
console.log(a ** b); // 100000 (a raised to the power of b)

console.log(10 / 0);  // Infinity
console.log(-10 / 0); // -Infinity
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity

console.log(0 / 0);  // NaN

// * (2) Comparison Operators
console.log(10 < 20);
console.log(10 > 20);
console.log(10 <= 10);
console.log(10 >= 10);

// * (3) Equality Operators
console.log(10 == '10'); // Performs coercion before comparison
console.log(10 === '10'); // Doesn't perform coercion before comparison

// & NaN is not equal to anything, including itself.
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false

// * (4) Logical Operators
let x = true;
let y = false;

console.log(x && y);  // false (both need to be true)
console.log(x || y);  // true (only one needs to be true)
console.log(!x);      // false (negates the value)

// * (5) Bitwise Operators

let p = 5;   // 0101 in binary
let q = 3;   // 0011 in binary

console.log(p & q);  // 1  (0001 in binary)
console.log(p | q);  // 7  (0111 in binary)
console.log(p ^ q);  // 6  (0110 in binary)
console.log(~p);     // -6 (bitwise NOT inverts the bits)
console.log(p << 1); // 10 (shift left by 1 bit)
