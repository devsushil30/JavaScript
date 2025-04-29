/**
 * Todo : "Function Expression" in JS
 * 
 * Function Expression -> We are creating a function but the first valid token is not the "function" keyword
 */

// & Diffrent types of function expressions

// * (1) Named function expression

var myFun = function fun(x) {
    console.log("calling...", x);
}

console.log(myFun); // function
myFun(6); // call the function

// * (2) Anonymous function expression

const play = function (y) {
    console.log(`Playing ${y}`);
}

play("Cricket");

// * (3) Arrow function / Arrow function expression

const eat = (z) => {
    console.log(`Eating ${z}`);
}

eat("Apple");

// * (4) IIFE - Immediately invoked function expression

(function fun(num) {
    console.log("calling...", num);
})(10);