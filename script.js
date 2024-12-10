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
        // Add a Static Method to the Product Class Method for discounts
        static applyDiscount(products, discount){
        let newPrice = 0;
        products.forEach((products) => {
                newPrice = (products.price - (products.price * discount));
                products.price = newPrice;
            });
            return products;
        }
    }
    // testing Part 1
    console.log("PART 1 Sample Data");
    let soup = new ProductProperties("Soup", 1.79, 24);
    let candy = new ProductProperties("Candy", 1, 24);
    console.log("Total Value: " + soup.getTotalValue());
    console.log(soup.toString());
    console.log("Total Value: " + candy.getTotalValue());
    console.log(candy.toString());

    // PART 2
    // PerishableProductProperties:
    // Inherits all properties from Product.
    // New property: expirationDate (string).

    class PerishableProductProperties extends ProductProperties {
        // constructor: Initializes all properties, including expirationDate.
        constructor(name, price, quantity, expirationDate) {
            super(name, price, quantity);
            this.expirationDate = expirationDate;
        }
        toString() {
            // Override toString(): Adds the expiration date to the string representation (e.g., "Product: Milk, Price: $1.50, Quantity: 10, Expiration Date: 2024-12-31").
            return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
            }

    }
    console.log("PART 2 Sample Data");
    // two instances of this class with sample data
    let apple = new PerishableProductProperties("Apple", 0.79, 52, "2024-12-17");
    let milk = new PerishableProductProperties("Milk", 4.99, 12, "2024-12-21");
    console.log("Total Value: " + apple.getTotalValue());
    console.log(apple.toString());
    console.log("Total Value: " + milk.getTotalValue());
    console.log(milk.toString());

    // PART 3
    console.log("PART 3 Sample Data");
    // Input: 10% discount
    ProductProperties.applyDiscount([apple, milk, candy], 0.1);
    // Output: new product details
    console.log("Discounted: " + apple.toString());
    console.log("Discounted: " + milk.toString());
    console.log("Discounted: " + candy.toString());


    // Part 4

    // Create a Store Class
    class Store{
        // constructor: inventory (array): Stores Product and PerishableProduct objects.
        constructor(product) {
            this.product = product;
        }
    }

    // Methods: 
    // addProduct(product): Adds a product to the inventory.
    // getInventoryValue(): Returns the total value of all products in the inventory.
    // findProductByName(name): Finds a product by its name and returns it, or returns null if not found.