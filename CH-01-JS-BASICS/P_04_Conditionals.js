/**
 * Todo : Conditional Statements in JS
 * 
 * ^ They are used to perform different actions based on different conditions.
 */

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

/**
 * Todo: Concept of "Truthy & Falsy" Values
 * 
 * ^ In JavaScript, some values act like true or false in conditionals
 * 
 * (1) Falsy Values: false, 0, NaN, "", null, undefined
 * (2) Truthy Values: Almose everything else
 */

// & Ex - 1
if ("hello") {
    console.log("This runs, because 'hello' is truthy"); // ✅ Output
}

// & Ex - 2
if (0) {
    console.log("This won't run, because 0 is falsy"); // ❌ No output
}

/**
 * Todo : Switch Statement in JS
 * 
 * ^ It is similar to conditional statements.
 */

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown";
}
console.log(dayName); // Output: Wednesday