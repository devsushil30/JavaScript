/**
 * & In JavaScript, "NaN" is the only primitive value that doesn't follow the identity property.
 * * The identity property (also called the Reflexive Property) states that any value is equal to itself.
 * ! This property holds true for all values, except for NaN.
 */

console.log(NaN === NaN); // false

/**
 * & isNaN() : Global function used to check if a value is NaN or becomes NaN after coercion.
 * * It first performs "ToNumber" coercion on the input, and then checks if the result is NaN.
 * ^ This can lead to unexpected results if the input is not already a number.
 */

console.log(isNaN(NaN));        // true       -> Already NaN
console.log(isNaN(123));        // false      -> Number, not NaN
console.log(isNaN('Hello'));    // true       -> "Hello" can't be converted to a number ➝ NaN
console.log(isNaN('123'));      // false      -> "123" ➝ 123 ➝ not NaN
console.log(isNaN(true));       // false      -> true ➝ 1 ➝ not NaN
console.log(isNaN(undefined));  // true       -> undefined ➝ NaN ➝ true

/**
 * & Number.isNaN() : Introduced in ES6, this method checks if a value is exactly NaN.
 * * It does not perform any type coercion, so it's more reliable than isNaN().
 */

console.log(Number.isNaN(NaN));        // true       -> Exactly NaN
console.log(Number.isNaN(123));        // false      -> Not NaN
console.log(Number.isNaN('Hello'));    // false      -> String, not NaN
console.log(Number.isNaN('123'));      // false      -> String, not NaN
console.log(Number.isNaN(true));       // false      -> Boolean, not NaN
console.log(Number.isNaN(undefined));  // false      -> Undefined, not NaN
