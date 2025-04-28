/**
 * Todo : Lexical Scoping with "let" in JS
 *
 * (1) "let" helps us to define block scoped variables
 * (2) We can't redeclare a "let" variable
 * (3) Whenever we declare any variable with let then the variable will get the scope of the nearest block
 * (4) If the nearest block is a "function" block then variable gets a block scope inside function
 */

// & -------------------- Example - 01 --------------------

let myName = "Nobita"; // myName -> block scope in the global area
if (true) {
    let yourName = "Dorami"; // yourName -> scope of "if" block
    console.log(yourName, myName); // ^ Dorami Nobita
}
console.log(myName); // ^ Nobita

// console.log(yourName); // * ReferenceError: yourName is not defined

// & -------------------- Example - 02 --------------------

function fun() {

    // console.log(x); // ! ReferenceError: Cannot access 'x' before initialization

    let x = 10; // block scope inside function
    console.log(x); // ^ 10
}
fun();

// & -------------------- Example - 03 --------------------

let num = 45; // num -> block scope in the global area
console.log(num); // ^ 45

// let num = 100; // ! SyntaxError: Identifier 'num' has already been declared
