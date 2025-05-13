/**
 * & The `new` Keyword in JavaScript
 * 
 * The `new` keyword in JavaScript is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
 * 
 * ? How `new` Works:
 * Every time we call `new`, it follows a 4-step procedure:
 * 
 * * 1. **Creates a New Object**:
 *    It creates a brand new plain and absolutely empty object.
 * 
 * * 2. **Sets Up Prototypes**:
 *    In step 2, `new` triggers everything needed for prototypes to work (this will be discussed later).
 * 
 * * 3. **Calls the Constructor**:
 *    It calls the constructor of the class and passes the newly created object (not as a parameter) but inside a keyword called `this`. 
 *    So, the constructor automatically has access to the `this` keyword, and when we call `new`, the `this` keyword has access to the plain object created in step 1. 
 *    The constructor can now use the `this` keyword inside it, and then whatever logic is in the constructor is executed.
 * 
 * * 4. **Returns the Object**:
 *    If an object is manually returned from a constructor, then this manually returned object is stored in the called variable. 
 *    Otherwise, in any other case (i.e., either we don't return anything or return something apart from an object), the constructor doesn't care about it and returns the value inside the `this` keyword.
 * 
 * Examples:
 */

// * Example 1: Basic Usage of `new`
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.display = function () {
        console.log(this.name + " " + this.price);
    }
}

const phone = new Product("Narzo", 14499);
console.log(phone); // Logs: Product { name: 'Narzo', price: 14499, display: [Function] }
phone.display(); // Logs: Narzo 14499

// * Example 2: Returning an Object Manually
function Gadget(name, price) {
    this.name = name;
    this.price = price;

    return { x: 50 };
}

const gadget = new Gadget("Smartwatch", 19999);
console.log(gadget); // Logs: { x: 50 }

// * Example 3: Returning a Non-Object
function Appliance(name, price) {
    this.name = name;
    this.price = price;

    return 100;
}

const appliance = new Appliance("Refrigerator", 45000);
console.log(appliance); // Logs: Appliance { name: 'Refrigerator', price: 45000 }

// * Example 4: Without `new`
const laptop = Product("Asus", 57500);
console.log(laptop); // Logs: undefined (because `new` was not used, `this` refers to the global object)