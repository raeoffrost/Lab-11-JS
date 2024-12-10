// Create a Base Class: ProductProperties:
//     name (string): Name of the product.
//     price (number): Price of the product.
//     quantity (number): Quantity available in stock.

    class ProductProperties{
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    //     Methods:
//     constructor: Initializes the properties.
//     getTotalValue(): Returns the total value of the product in stock (price * quantity).
//     toString(): Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50").