// Todo : Function Expressions" aren't hoisted

// & Example - 01

console.log(firstFunctionExpression); // ^ undefined
// console.log(firstFunctionExpression(5)); // ^ TypeError: firstFunctionExpression is not a function

var firstFunctionExpression = function square(num) {
    return num * num;
}

// & Example - 02

console.log(firstArrowFunction); // ^ undefined
// console.log(firstArrowFunction(5)); // ^ TypeError: firstArrowFunction is not a function
var firstArrowFunction = num => num * num;