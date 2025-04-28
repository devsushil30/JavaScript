/**
 * Todo : Lexical Scoping with "const" in JS
 *
 * (1) It works same as "let", but we can't change the value associated with it.
 */

// & -------------------- Example - 01 --------------------

const myName = "Nobita"; // myName -> block scope in the global area
if (true) {
    const yourName = "Dorami"; // yourName -> scope of "if" block
    console.log(yourName, myName); // ^ Dorami Nobita
}
console.log(myName); // ^ Nobita

// console.log(yourName); // * ReferenceError: yourName is not defined


// & -------------------- Example - 02 --------------------

const a = 25;
// const a = 250;

// & -------------------- Example - 03 --------------------

const pi = 3.14;
// pi=5;
console.log(pi);