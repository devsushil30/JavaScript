function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.display = function () {
    console.log(`The name of the product is ${this.name} and it's price is ${this.price}`);
}

let smartPhone = new Product("Vivo v12", 16999);
smartPhone.display();