class Product {
    name;
    price;
    discount;

    constructor(builder) {
        this.name = builder.name;
        this.price = builder.price;
        this.discount = builder.discount;
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = "";
                this.price = 0;
                this.discount = 0;
            }

            setName(name) {
                this.name = name;
                return this;
            }

            setPrice(price) {
                this.price = price;
                return this;
            }

            setDiscount(discount) {
                this.discount = discount;
                return this;
            }

            build() {
                return new Product(this);
            }
        }

        return Builder;
    }
}

const Phone = new Product.Builder()
    .setName("Realme Narzo 20")
    .setPrice(12399)
    .setDiscount(200)
    .build();
console.log(Phone);