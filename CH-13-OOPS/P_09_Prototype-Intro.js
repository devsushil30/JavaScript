/**
 * Todo: Prototypes in JS
 * 
 * (1) JS isn't object oriented instead it is "object linked to an object" kind of language. 
 * (2) The sole reason for this is Prototypes.
 * (3) Prototypes in JS is the mechanism using which objects share properties with other objects
 */

/**
 * -------------------------------------------
 * ^ Internal Setup of JavaScript Prototypes
 * -------------------------------------------
 */

// * (1) Internally JS having a function named as `Object` and an unnamed object with multiple properties like `toString`, etc. 
console.log(Object); // Output: {}
console.log(typeof Object); // "function"

// * (2) That unnamed object is accessible via `Object.prototype`. 
console.log(Object.prototype); // Output: {constructor: ƒ, toString: ƒ, ...}
console.log(typeof Object.prototype); // "object"

// * (3) The `constructor` property allows us to reference back to the `Object` function.
console.log(Object.prototype.constructor === Object); // Output: true

// & ----------------------------------------------------------------------------

/**
 * -------------------------------------------
 * ^ Our Own Constructor Function
 * -------------------------------------------
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// * (1) When we define a constructor function, JS automatically creates a prototype object of it.
console.log(Product.prototype); // Output: {}

// * (2) The prototype object created for the `Product` function, has a `constructor` property that points back to the `Product` function.
console.log(Product.prototype.constructor === Product); // Output: true

// * (3) We can add methods and properties to the prototype object. These methods and properties will be shared by all instances created using the `Product` constructor.
Product.prototype.display = function () {
    console.log(`The name of the product is ${this.name} and it's price is ${this.price}`);
};

console.log(Product.prototype); // Output: {display: ƒ}

// & ----------------------------------------------------------------------------

/**
 * -------------------------------------------
 * ^ Using the 'new' keyword and Prototype Chain
 * -------------------------------------------
 */

let smartPhone = new Product("Vivo v12", 16999);

// `smartP` is an object with properties name and price.
console.log(smartPhone.name); // "Vivo v12"
console.log(smartPhone.price); // 16999

// * (1) `smartPhone.__proto__` points to "Product.prototype".
console.log(smartPhone.__proto__ === Product.prototype); // true

// * (2) `Product.prototype.__proto__` points to Object.prototype.
console.log(Product.prototype.__proto__ === Object.prototype); // true

// * (3) `Object.prototype.__proto__` points to "null".
console.log(Object.prototype.__proto__); // null (end of chain)