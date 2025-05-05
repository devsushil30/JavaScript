/**
 * Todo : "Closures" in JS
 * 
 * (1) It refers to the ability of a function to retain access to variables from its parent scope even after the parent function has finished executing.
 * (2) This means it has access to its own scope, the outer function's scope, and the global scope.
 */

// & --------------- Example - 01 ---------------

function greet(name) {
    console.log("Greeting started!");

    setTimeout(() => {
        console.log("Koi aaya hai");
        console.log("hello " + name);
    }, 3000);

    console.log("Greeting ended!");
}

console.log("Start");
greet("Kenichi");
console.log("End");

// & --------------- Example - 02 ---------------

function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        let innerVariable = 20;
        console.log(outerVariable + innerVariable);
    }

    return innerFunction;
}

let closureExample = outerFunction();
closureExample();

// & --------------- Example - 03 ---------------

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

const counter1 = createCounter();
counter1(); // Count: 1
counter1(); // Count: 2

const counter2 = createCounter();
counter2(); // Count: 1 (new independent closure)

// & --------------- Example - 04 ---------------

function outer(var1) {
    return function inner() {
        console.log(var1);
    }
}

const ex1 = outer("Hello");
ex1();

const ex2 = outer("Sushil");
ex2();