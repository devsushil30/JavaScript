/**
 * Todo : Function Declaration/Definition in JS
 * 
 * First token of the instruction to declare a function starts with, "function" keyword
*/

// & Type-01: A simple function with a name but without any arguments

function sayHello() {
    console.log("Hello!");
}

sayHello();

// & Type-02: A simple function with a name and arguments

function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser("Sunio")

// & Type-03: A simple function to print square of a number

function printSquare(num) {
    const result = num * num;
    console.log(`The square of ${num} is ${result}`);
}

printSquare(5);

// & Type-04: A simple function which returns the square of a number

function returnSquare(num) {
    return num * num;
}

let number = 6;
let result = returnSquare(number);
console.log(`The square of ${number} is ${result}`);

// & Type-05: Nested Function

function outerFunction() {
    console.log("Hello from `OuterFunction`");

    // innerFunction in the scope of outerFunction
    function innerFunction() {
        console.log("Hello from `InnerFunction`");
    }

    innerFunction();
}

outerFunction();

// & Type-06: Function with default parameter

function greet(name = "Sushil") {
    console.log("Hello, " + name + "!");
}

greet();          // "Hello, Sushil!"
greet("Nobita");  // "Hello, Nobita!"
