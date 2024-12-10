// PART 1
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
        // added toFixed(2) to ensure number would output with 2 decimal places even if they are not added
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
        }
    }
    // testing Part 1
    let apple = new ProductProperties("Apple", 0.79, 24);
    let candy = new ProductProperties("Candy", 1, 24);
    console.log(apple.getTotalValue());
    console.log(apple.toString());
    console.log(candy.getTotalValue());
    console.log(candy.toString());

    // PART 2
    // PerishableProductProperties:
    // Inherits all properties from Product.
    // New property: expirationDate (string).

    class PerishableProductProperties extends ProductProperties {
    
    }
    
    // Methods:
    // constructor: Initializes all properties, including expirationDate.
    // Override toString(): Adds the expiration date to the string representation (e.g., "Product: Milk, Price: $1.50, Quantity: 10, Expiration Date: 2024-12-31").
    // Task: Create at least two instances of this class with sample data.