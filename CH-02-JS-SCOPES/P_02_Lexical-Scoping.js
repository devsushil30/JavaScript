/**
 * Todo : Lexical Scoping in JS
 *
 * (1) JS does scope resolution using lexical scoping
 * (2) In this JS allocate scopes to the variables during Compile-Time
 * (3) The scope of a variable is defined based on where it is declared in the code, rather than where it is used
 * (4) It's only applicable for formal declarations (var, let, const, function (keyword))
 */

// & Example

function fun() {
    console.log(x);
    var x = 10;
    console.log(x);
}

fun();

// *********** After Phase - 01 (Scope Resolution) ***********

// line - 12 :- fun -> Global Scope
// line - 15 :- x -> Scope of fun

// *********** After Phase - 02 (Execution) ***********

// line - 13 :- variable 'x' is known by Js but initially nothing in present in 'x', hence prints -> undefined
// line - 14 :- variable 'x' is known by Js that it's present in the scope of function "fun", hence it assigns 10 to x
// line -15 :- variable 'x' is known by Js that it's present in the scope of function "fun", hence prints -> 10