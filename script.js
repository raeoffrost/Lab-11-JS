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

        getTotalValue(price, quantity) {
        //     getTotalValue(): Returns the total value of the product in stock (price * quantity).
            const total = (price * quantity);
            console.log(`Total Value: ${total}`);
        }
        toString() {
        //     toString(): Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50").
        }
    }