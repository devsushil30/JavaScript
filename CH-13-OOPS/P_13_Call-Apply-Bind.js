/**
 * Todo: call(), apply(), and bind()
 * -> These methods are used to control the value of 'this'
 */

/**
 * ? The `call` method in JavaScript
 * 
 * It is a JS function that allows us to call a function with a specified `this` value and arguments provided individually.
 * 
 * Why use `call`?
 * - To immediately invoke a function with a specific `this` context.
 * 
 * ^ Syntax: function.call(thisArg, arg1, arg2, ...)
 * 
 */

// * Example 1

const obj1 = {
    firstName: "Sushil",
    greet: function (msg1, msg2) {
        console.log(`Hello, ${this.firstName}!`, msg1, msg2);
    }
}

obj1.greet("How are you?", "What are you learning?");
const obj2 = { firstName: "Kriti" };
obj1.greet.call(obj2, "How are you?", "What are you learning?");
obj1.greet.call(null, "How are you?", "What are you learning?");
obj1.greet("How are you?", "What are you learning?");

/**
 * In example 1:
 * 
 * (1) If we call "obj1.greet()" then here `this` refers to "obj1" itself and "firstName" will be "Sushil"
 * (2) Now if we want to attach `this` keyword to another object we can use the "call" function
 * (3) The "call" method takes the first argument as the new object we want `this` to refer
 * 
 * (4) If we won't pass anything then `this` will point to global object
 *     EX- ```obj1.greet.call(null, "How are you?", "What are you learning?");```
 * 
 * (5) If our original function expects some parameters, then we can pass them after passing new reference for `this`
 *     EX- ```obj1.greet.call(obj2, "How are you?", "What are you learning?");```
 */

// & ----------------------------------------------------------------------------------------------------------------------

/**
 * ? The `apply` method in JavaScript
 * 
 * It works exactly same as `call`.
 * The only difference is, instead of taking n number of arguments, it only takes 2
 *  - (1) An object to which `this` will point
 *  - (2) An array of values passed to the function
 * 
 * ^ Syntax: function.apply(thisArg, [arg1, arg2, ...])
 * 
 */

obj1.greet.apply(obj2, ["How are you?", "What are you learning?"]);

// & ----------------------------------------------------------------------------------------------------------------------

/**
 * ? The `bind` method in JavaScript
 * 
 * It works exactly same as `call`, but instead of immediately invoking the function, it returns a new function which has `this` keyword binded to the object passed as an argument
 * 
 * ^ Syntax: function.bind(thisArg)
 * 
 */

newFunction = obj1.greet.bind(obj2);
newFunction("How are you?", "What are you learning?");