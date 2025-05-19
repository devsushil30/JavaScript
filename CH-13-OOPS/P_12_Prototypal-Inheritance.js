/**
 * Todo: Prototypal Inheritance in JS
 */

class Products {
    proFun() {
        console.log('Hello from "Products"');
    }
}

class Eproducts {
    eFun() {
        console.log('Hello from "Electronic Products"');
    }
}

// Create an instance of Eproducts
let phone = new Eproducts();

// The phone can call eFun because it's defined in the prototype of "Eproducts"
phone.eFun();  // Works fine

// But phone cannot call proFun because it's not in the prototype of "Eproducts"
// phone.proFun(); // This would throw an error

// & -----------------------------------------------------------------------------------------

/**
 * -------------------------------------------
 * ^ Solution 1: Manually add "proFun" method to the prototype of "Eproducts"
 * -------------------------------------------
 */

// By adding proFun to the Eproducts prototype, instances of "Eproducts" can access it
Eproducts.prototype.proFun = function () {
    console.log('Hello from "Products"');
};

// Now we can access proFun, as it's part of Eproducts' prototype chain
phone.proFun();  // Works now, because proFun is added to the prototype of Eproducts

// ~ Let's check the prototype chain for phone

// * (phone.__proto__) => Points prototype of "Eproducts"
console.log(phone.__proto__ === Eproducts.prototype);  // true 

// * (Eproducts.prototype.__proto__) and (Products.prototype.__proto__) => Both points prototype of "Object" function
console.log(Eproducts.prototype.__proto__ === Object.prototype);  // true (all objects inherit from Object)

/**
 * *******************************************
 * ! Problems with Solution 1: 
 * -> Adding methods to prototypes like this can lead to code duplication.
 * -> If more methods from Products need to be added to Eproducts, it violates the DRY (Don't Repeat Yourself) principle.
 * -> This can get messy quickly as the code grows.
 * *******************************************
 */

// & -----------------------------------------------------------------------------------------

/**
 * -------------------------------------------
 * ^ Solution 2: Modify the prototype chain
 * -------------------------------------------
 */

// Modify the prototype chain directly
Eproducts.prototype.__proto__ = Products.prototype;

phone.proFun();  // This works now because the prototype chain links Eproducts to Products

// * (phone.__proto__) => Points prototype of "Eproducts"
console.log(phone.__proto__ === Eproducts.prototype);  // true 

// * (Eproducts.prototype.__proto__) => Points prototype of "Products"
console.log(Eproducts.prototype.__proto__ === Products.prototype);  // true

// * (Products.prototype.__proto__) => Points prototype of "Object" function
console.log(Products.prototype.__proto__ === Object.prototype);  // true

/**
 * *******************************************
 * ! Problems with Solution 2: 
 * -> Modifying prototype chain like this manually is prone to errors and hard to manage.
 * -> As the code grows, it becomes more complex and difficult to understand.
 * *******************************************
 */

// & -----------------------------------------------------------------------------------------

/**
 * -------------------------------------------
 * ^ Solution 3: Using "extends" keyword
 * -------------------------------------------
 */

// Now, we can use the "extends" keyword to establish inheritance properly.
class BeautyProducts extends Products {
    beautyFun() {
        console.log('Hello from "Beauty Products"');
    }
}

// Create an instance of BeautyProducts
let lotion = new BeautyProducts();

// Testing the lotion instance
lotion.beautyFun();  // Works fine, as it's defined in BeautyProducts
lotion.proFun();    // Works fine, as it inherits proFun from Products

// * (lotion.__proto__) => Points prototype of "BeautyProducts"
console.log(lotion.__proto__ === BeautyProducts.prototype);  // true

// * (BeautyProducts.prototype.__proto__) => Points prototype of "Products"
console.log(BeautyProducts.prototype.__proto__ === Products.prototype);  // true

// * (Products.prototype.__proto__) => Points prototype of "Object" function
console.log(Products.prototype.__proto__ === Object.prototype);  // true