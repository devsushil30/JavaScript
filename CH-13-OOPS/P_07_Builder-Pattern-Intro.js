/**
 * Todo: Builder Design Pattern in JavaScript
 * (1) It is a creational design pattern that allows for the step-by-step creation of complex objects
 * 
 * ? Problem With Constructor
 * (1) If a constructor has too many parameters, it is difficult to remember the order and which parameters are optional. 
 * (2) JS does not support multiple constructors, so we need a different approach to handle various object creation scenarios.
 * * (3) Initial Solution: Using Getters and Setters
 * 
 * ? Problem With Getters and Setters
 * (1) This approach does not allow for validation before object creation.
 * * (2) Improved Solution: Builder Pattern
 * 
 * ! Version 1 of Builder Pattern
 * (1) We can pass a single object to the constructor, containing all the properties
 */

class Product {

    constructor(builder) {
        this.name = builder.name;
        if (builder.price > 0) {
            this.price = builder.price;
        } else {
            return {};
        }
        this.description = builder.description;
    }
}

// Case 1: Creating a complete object
const phone = new Product({ name: "iPhone 11", price: 87000, description: "Apple iPhone" });
console.log(phone);

// Case 2: Creating an object with only required properties
const laptop = new Product({ name: "Asus Vivobook", price: 50000 });
console.log(laptop);

// Adding description after the object creation
laptop.description = "Gaming";
console.log(laptop);

// Case 3: Creating an object in a random order
const tablet = new Product({ price: 45999, description: "Slimest Tablet", name: "Samsung S13 Pro" });
console.log(tablet);