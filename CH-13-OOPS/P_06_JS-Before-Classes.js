/**
 * ^ In JS, every class we write is a wrapper over functions, in older versions of JS class keyword didn't exist hence to do the blue printing we used to have only functions.
 */

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    this.displayProduct = function () {
        console.log("Name:", this.name, "Price", this.price, "description:", this.description);
    }
}

let iphone = new Product("Iphone 11", 900, "Apple iphone 11");
iphone.displayProduct();