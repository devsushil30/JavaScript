// & Example of a "Product" class

class Product {

    // Data members : Not necessary to specify here
    productName;
    productPrice;
    productRating;

    // Constructor
    constructor(productName, productPrice, productRating) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productRating = productRating;
    }

    // Member functions : Defines behaviour

    addTocart() {
        console.log("Added to the cart!");
    }

    removeFromCart() {
        console.log("Removed from the cart!");
    }

    displayProduct() {
        console.log(`Product Name: ${this.productName} | Price: ${this.productPrice}`);
    }

}

let phone = new Product("Realme Narzo 20", 12000, 4.5);
let laptop = new Product("Asus", 45000, 4.6);

laptop.displayProduct();

console.log(phone);
console.log(laptop);