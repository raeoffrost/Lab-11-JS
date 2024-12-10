//  ProductProperties:
//     name (string): Name of the product.
//     price (number): Price of the product.
//     quantity (number): Quantity available in stock.

    class ProductProperties{
        //     constructor: Initializes the properties.
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }

        getTotalValue() {
        //     getTotalValue(): Returns the total value of the product in stock (price * quantity).
            return this.price * this.quantity;
        }
        toString() {
        //     toString(): Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50").
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
        }
    }