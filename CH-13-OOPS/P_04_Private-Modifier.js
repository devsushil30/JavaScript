// * Example 1: Declaring and Initializing Private Data Members Using #

class Product {
    // Private Fields
    #productName;
    #productPrice;
    #productDescription;

    // Constructor to initialize them
    constructor(name, price, description) {
        this.#productName = name;
        this.#productPrice = price;
        this.#productDescription = description;
    }

    // Public Method to display private values
    display() {
        console.log(this.#productName, this.#productPrice, this.#productDescription);
    }
}

const phone = new Product("Realme", 13499, "Smart-Phone");
phone.display(); // ✅ Realme 13499 Smart-Phone

// ❌ Direct access is not allowed — will throw SyntaxError
// phone.#productName = "Vivo"; 

// ~ ---------------------------------------------------------------------------------------------

// * Example 2: Using Manual Getter & Setter Methods

class Food {
    #foodPrice; // Private Field

    // Setter: Controlled way to modify private field
    setPrice(price) {
        if (price > 0) {
            this.#foodPrice = price;
        } else {
            console.log("Invalid Price!");
        }
    }

    // Getter: Controlled way to access private field
    getPrice() {
        return this.#foodPrice;
    }
}

const maggi = new Food();
maggi.setPrice(15); // ✅ Sets price
console.log(maggi.getPrice()); // ✅ 15

// ~ ---------------------------------------------------------------------------------------------

// * Example 3: Using JavaScript's Built-in Getter/Setter Syntax

class ColdDrink {
    #companyName; // Private Field

    // Built-in setter
    set name(name) {
        this.#companyName = name;
    }

    // Built-in getter
    get name() {
        return this.#companyName;
    }
}

const coke = new ColdDrink();
coke.name = "Coca-Cola";           // Calls setter
console.log(coke.name);            // Calls getter -> Coca-Cola
