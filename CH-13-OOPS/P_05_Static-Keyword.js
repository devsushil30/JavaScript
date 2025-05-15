// * Example 1 : The problem without 'static' keyword
class Product {
    productName;
    productPrice;
    productDescription;
    totalProducts = 0;

    constructor(name, price, description) {
        this.productName = name;
        this.productPrice = price;
        this.productDescription = description
        this.totalProducts += 1;
    }

    display() {
        console.log(this.productName, this.productPrice, this.productDescription);
    }

    productCount() {
        return this.totalProducts;
    }
}

let phone = new Product("Redmi", 9999, "Readmi Note 12 Pro");
let laptop = new Product("Asus Vivobook", 45000, "Asus Vivobook m1");
let tablet = new Product("Samsung Galaxy Tab", 25000, "Samsung Galaxy Tab S8");

console.log(phone.productCount()); // 1
console.log(laptop.productCount()); // 1

/**
 * ^ Explanation:
 * In the above example we have created 3 different objects (phone,laptop,tablet), hence the total number of products should be '3', but we are getting count as '1'.
 * Hence we introduced a new concept of "static" keyword.
 * This keyword will help us to associate any method or property to the class" instead of an object. 
 * We don't need to initialise an object to access a static property / method. 
 * When the class is loaded in the memory, static properties and methods are created then and there. 
 */

// * Example 2 : The solution with 'static' keyword
class Products {
    productName;
    productPrice;
    productDescription;
    static totalProducts = 0;

    constructor(name, price, description) {
        this.productName = name;
        this.productPrice = price;
        this.productDescription = description;
        Products.totalProducts += 1;
    }

    display() {
        console.log(this.productName, this.productPrice, this.productDescription);
    }

    static productCount() {
        return Products.totalProducts;
    }
}

let Phone = new Products("Redmi", 9999, "Redmi Note 12 Pro");
let Laptop = new Products("Asus Vivobook", 45000, "Asus Vivobook m1");
let Tablet = new Products("Samsung Galaxy Tab", 25000, "Samsung Galaxy Tab S8");

console.log(Products.productCount()); // 3
// console.log(Phone.productCount());

/**
 * ^ Explanation:
 * In the above example, we have created 3 different objects (Phone, Laptop, Tablet), hence the total number of products should be '3'.
 * Initially, we were getting the count as '1' for each instance because `totalProducts` was an instance property.
 * By introducing the "static" keyword, we associate the `totalProducts` property and the `productCount` method with the class itself instead of its instances.
 * Static properties and methods are created when the class is loaded into memory, and they can be accessed without creating an instance of the class.
 * Now, `Product.totalProducts` keeps a count of all instances created, and `Product.productCount()` returns the correct total number of products.
 */