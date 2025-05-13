/**
 * & The `this` Keyword in JavaScript
 * 
 * The `this` keyword in JavaScript works differently than in many other programming languages. It is available to be accessed in any function, outside any function, and in classes as well.
 * 
 * The value of `this` depends on the context in which it is used. In most cases, `this` refers to the call site.
 * 
 * ? What is a Call Site?
 * ^ The call site is the entity that is calling the function where `this` is used. It can be an object, a position, or even the `new` keyword.
 * 
 * * 8: Arrow Functions
 * The `this` keyword does not refer to the call site if used inside an arrow function. In the case of arrow functions, `this` is resolved using lexical scoping.
 * 
 * Examples:
 */

// * Example 1
const obj1 = {
    x: 10,
    y: 20,
    fn: function () {
        console.log(this.x + " " + this.y);
    }
};

obj1.fn(); // Here `obj1` is the call site

// * Example 2
const obj2 = {
    x: 10,
    y: 20,
    z: {
        x: 25,
        fn: function () {
            console.log(this.x + " " + this.y);
        }
    }

};

obj2.z.fn(); // Here `z` is the call site

// * Example 3
const obj3 = {
    x: 10,
    y: 20,
    fn: () => {
        console.log(this.x + " " + this.y);
    }
};

obj3.fn(); // Here `fn` is an arrow function, this keyword will not refer to the call site if used inside an arrow function

// * Example 4
let obj4 = {
    x: 10,
    y: 20,
    fn: function () {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
}

obj4.fn(); // 10 20

/**
 * Explanation of Example 4:
 * 1. Is `this` defined in the scope of the arrow function? No.
 * 2. We go one scope up, i.e., inside function `fn`.
 * 3. Is `this` defined inside `fn`? Yes, because `fn` is a normal function, we have a definition of `this` inside it which is the call site.
 * 4. Who is the call site? The `obj4` object which is responsible for triggering `fn` is the call site.
 * 5. Hence, `this` refers to the `obj4` object and when we call the arrow function, we get the output as 10 20.
 */