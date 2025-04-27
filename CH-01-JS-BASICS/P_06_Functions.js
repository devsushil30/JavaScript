/**
 * Todo : (1) Functions in JS
 * 
 * ^ A function is a block of reusable code designed to perform a specific task. It can accept inputs (parameters), process them, and return an output.
 */

// ? Ways to Create Functions

// * (1) Function Declaration :- Function declarations are hoisted, meaning they are available before their definition in the code.
function greet(name) {
    console.log("Welcome", name);
}
greet("Nobita")

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 8));

// * (2) Function Expression :- A function can also be defined and assigned to a variable. Unlike declarations, expressions are not hoisted.
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 5));

// * (3) Arrow Functions (ES6+) :- A concise syntax for writing functions.
const divide = (num1, num2) => num1 / num2;
console.log(divide(8, 4));

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (2) Functions as an argument in JS
 * 
 * ^ We can pass a function as an argument to another function.
 */

function f1(f2) {
    f2();
    console.log("Inside f1");
}

function f2() {
    console.log("Inside f2");
}

f1(f2);
// f1(f2()); Give error

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (3) Functions returning a function in JS
 * 
 * ^ In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows functions to:
 * (i) Be stored in variables.
 * (ii) Be passed as arguments to other functions.
 * (iii) Be returned from other functions.
 */

function outerFunction() {
    return function innerFunction() {
        return "Hello from the inner function!";
    };
}

const returnedFunction = outerFunction(); // outerFunction returns innerFunction
console.log(returnedFunction()); // "Hello from the inner function!"