// PART 1
//  ProductProperties:
//     name (string): Name of the product.
//     price (number): Price of the product.
//     quantity (number): Quantity available in stock.

    class ProductProperties{
        //     constructor: Initializes the properties.
        constructor(name, price, quantity) {
            this.name = name;
            // added toFixed(2) to ensure number would output with 2 decimal places 
            // even if they are not added and after discounts are applied
            this.price = (price.toFixed(2));
            this.quantity = quantity;
        }

        getTotalValue() {
        //     getTotalValue(): Returns the total value of the product in stock (price * quantity).
            return this.price * this.quantity;
        }
        toString() {
        //     toString(): Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50").
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
        }
        // Add a Static Method to the Product Class Method for discounts
        static applyDiscount(products, discount){
        let newPrice = 0;
        products.forEach((products) => {
                newPrice = (products.price - (products.price * discount));
                products.price = (newPrice.toFixed(2));
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
            return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
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
        // Adds a product to the inventory.
        addProduct(product){
            this.product.push(product);
        }
        // Returns the total value of all products in the inventory.
        getInventoryValue(){
           const items = this.product;
           let total = 0;
           items.forEach((item) => {
            let fullPrice = item.getTotalValue()
            total += fullPrice;
           });
           return total.toFixed(2);
        }
        // Finds a product by its name and returns it, or returns null if not found.
        findProductByName(name){
            for(const item of this.product){
                if (item.name.toLowerCase() == name.toLowerCase()){ 
                    return item;
                    }else{
                    return null;
                }}}
    }
    console.log("PART 4 Sample Data");
    // declare store
    let grocery = new Store([apple, milk, candy]);
    // see initial product list
    console.log("Old Product List:" + JSON.stringify(grocery));
    // add soup
    grocery.addProduct(soup);
    // see new product list
    console.log("New Product List:" + JSON.stringify(grocery));

    // total value of apple, milk, candy and soup
    console.log(grocery.getInventoryValue());
    // find apple by name, case insensitive
    console.log(grocery.findProductByName("APPLE"));

    // Part 5
    console.log("PART 5 Sample Data");
    // Create at 5 products, including at 2 PerishableProduct objects.
    let cereal = new PerishableProductProperties("Cereal", 3.99, 24, "2025-01-20"); // 1 perishable
    let bread = new PerishableProductProperties("Bread", 3, 12, "2024-12-23"); // 2 perishable
    let candle = new ProductProperties("Candle", 5, 12); // 3
    let mug = new ProductProperties("Mug", 6.99, 6); // 4
    let pencil = new ProductProperties("Pencil", 0.50, 32); // 5
    // Print the total inventory value before 15% discount.
    let partFive = new Store([cereal, bread, candle, mug, pencil]);
    console.log("Total Inventory Value: " +  partFive.getInventoryValue());
    // Input: 15% discount
    ProductProperties.applyDiscount(partFive.product, 0.15);
    // and after applying a 15% discount.
    console.log("Total Inventory Value: " +  partFive.getInventoryValue());
    // ProductProperties.applyDiscount([apple, milk, candy], 0.1);
    // Find and print the details of a specific product by its name.