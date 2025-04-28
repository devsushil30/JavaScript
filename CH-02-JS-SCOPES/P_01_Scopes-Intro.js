/**
 * Todo : Scopes in JS
 * 
 * ^ Scope determines the accessibility (visibility) of variables in different parts of your code. 
 * ^ It defines where we can use a variable or function.
 */

// & (1) Types of Scopes in JavaScript

// * GLOBAL SCOPE: Variables declared outside any function or block belong to the global scope. Accessible from anywhere in the code.

var g1 = "Global Var 1";   // `var` declared globally → added to the global object (e.g., window.g1 in browsers)
let g2 = "Global Let 1";   // `let` declared globally → block scoped to the script/module, not attached to global object

// ✅ Both g1 and g2 are accessible anywhere in this file (global scope)
console.log(g1 + " " + g2);

function test() {
    // ✅ g1 and g2 are accessible here due to scope chain (lexical scope)
    console.log(g1 + " " + g2);
}

test();


// * FUNCTION SCOPE: Variables declared within a function are accessible only inside that function.
function localFunction() {
    var l1 = "Local Var 1 in localFunction";   // Function-scoped (accessible only inside this function)
    let l2 = "Local Let 2 in localFunction";   // Block-scoped, but here the block is the function itself

    // ✅ Both are accessible inside the function
    console.log(l1 + " " + l2);
}

localFunction();

// ! ❌ Outside the function: l1 and l2 are NOT accessible
// console.log(l1 + " " + l2); // ReferenceError


// * BLOCK SCOPE: Variables declared with let or const inside {} are accessible only within that block.
{
    var b1 = "Block Var 1 in block"; // ❗ Even though declared in a block, `var` is NOT block scoped — it "leaks" to the surrounding function/global scope
    let b2 = "Block Let 2 in block"; // ✅ Block-scoped — only accessible inside these curly braces

    console.log(b1 + " " + b2); // ✅ Both accessible inside the block
}

// ✅ b1 is accessible outside the block — var does NOT respect block scope
console.log(b1);

// ! ❌ b2 is NOT accessible here — let is block-scoped
// console.log(b2); // ReferenceError: b2 is not defined
