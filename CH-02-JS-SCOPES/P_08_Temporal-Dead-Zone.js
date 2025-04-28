/**
 * Todo : "Temporal Dead Zone" in JS
 * 
 * (1) This is the region before the declaration of a block scoped variable (let or const)
 * (2) A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until
code execution reaches the place where the variable is declared and initialized
 */

function fun() {
    console.log(x); // this is a tdz area
    let x = 10;
    console.log(x);
}
fun();

// ^ Output :- @line 10 -> ReferenceError: Cannot access 'x' before initialization

/**
 * This is because in a block scoped variable we cannot access the variable before the initialisation. 
 * This makes block scoped variable special. 
 * And the region before the declaration of the block scoped variable is called as Temporal Dead Zone .
 */