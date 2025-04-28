/**
 * Todo : Lexical Scoping with "var" in JS
 *
 * (1) "var" helps us to define global and function scoped variables
 * (2) We can't make a block scoped (if, for, etc) variable with "var"
 * (3) We can redeclare a "Var" variable
 * (4) Special about Function Scope : Define anywhere - avalible throughout the function
 */

// & -------------------- Example - 01 --------------------

var bro = "Doraemon"; // bro -> global scope
function greet()  // greet -> global scope
{
    var bro = "Powermon"; // bro -> scope of greet function
    console.log("Hello", bro); // ^ Hello Powermon

    function meet()  // meet -> scope of greet function
    {
        var sis = "Dorami"; // sis -> scope of meet function
        console.log(bro, sis); // ^ Powermon Dorami
    }

    meet();
}
greet();
console.log(bro); // ^ Doraemon

// & -------------------- Example - 02 --------------------

var x = 10; // x -> global 
if (true) {
    var x = 20; // x -> global
    var y = 30; // y -> global
    console.log(x, y); // 20 30
}
console.log(x, y); // 20 30

// & -------------------- Example - 03 --------------------

var i = 25; // i -> global
console.log(i); // 25
for (var i = 10; i <= 12; i++)  // i -> already present in global scope
{
    console.log(i); // 10 11 12
}
console.log(i); // 13