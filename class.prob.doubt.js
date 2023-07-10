class Car {
    constructor(id, brand, model, year, pricePerDay) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.pricePerDay = pricePerDay;
    this.isRented = false;
    }
    }

    class Customer {
    constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    }
    }

    class RentalService {
    constructor() {
    this.cars = [car1, car2,car3,car4];
    this.customers = [];
    this.rentals = [];
    }
    
    rentCar(carId, customerId, rentalDays) {
    const car = this.cars.find((item) => item.id === carId);  // what is car.id here, from where?
    const customer = this.customers.find((customer) => customer.id ===
    customerId);
    

    if (!car || !customer) {   // what !car means?
    console.log("Car or customer not found");
    return;
    }

    if (car.isRented) {
    console.log("Car is already rented.");
    return;
    }

    const rentalPrice = car.pricePerDay * rentalDays;  // how price per day is recognized here? since its outside class
    this.rentals.push({ car, customer, rentalDays, rentalPrice });
    car.isRented = true;
    
    console.log(`Car rented successfully. Rental price: $${rentalPrice}`);
    }
    
    returnCar(carId) {
    const rental = this.rentals.find((rental) => rental.car.id === carId); // what this statement does??
    if (!rental) {  //what is !rental?
    console.log("Rental not found.");
    return;
    }
    rental.car.isRented = false;  //2 dot methods for a variable created above?
    this.rentals = this.rentals.filter((r) => r.car.id !== carId);
    console.log("Car returned successfully.");
    }
    }


    // Usage example:
    const rentalService = new RentalService();
    const car1 = new Car(1, "Toyota", "Camry", 2022, 50);
    const car2 = new Car(2, "Honda", "Accord", 2021, 60);
   
    const customer1 = new Customer(1, "John Doe", "john@example.com");
// how one class pushes the instace of other class objects into the arrays defined in its class? what is the scope of instance/object created?
    rentalService.cars.push(car1, car2);  // how control flows after pushing here?
    rentalService.customers.push(customer1);
    rentalService.rentCar(2, 1, 5); // Rent Car 1 to Customer 1 for 5 days
    rentalService.returnCar(2); // Return Car 1

    //***************************************************************************//
    
    // E COMMERCE SHOPPING

    class Product {
        constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        }
        }

        class Cart {
        constructor() {
        this.items = [];
        }
        
        addItem(product, quantity) {
        const existingItem = this.items.find((item) => item.product.id === product.id);  // what is this id with product?
        
        if (existingItem) { //what is meaning of existing item here?
        existingItem.quantity += quantity; // existing.quantity? use of above step?
        } else {
        this.items.push({ product, quantity });
        }
        console.log(`${quantity} ${product.name}(s) added to cart.`);
        }
        
        removeItem(productId, quantity) {
        const itemIndex = this.items.findIndex((item) => item.product.id ===
        productId);

        if (itemIndex !== -1) {  //why -1 here?
        const item = this.items[itemIndex];
        if (item.quantity > quantity) {
        item.quantity -= quantity;
        console.log(`${quantity} ${item.product.name}(s) removed from
        cart.`);
        } 
        
        else {
        this.items.splice(itemIndex, 1);  // this step, y splice?
        console.log(`${item.product.name} removed from cart.`);
        }
    } 
        else {
        console.log("Item not found in cart.");
        }
        }
        
        getTotalPrice() {
        let totalPrice = 0;
        for (const item of this.items) {
        totalPrice += item.product.price * item.quantity;
        }
        return totalPrice;
        }
        n
        applyDiscount(discountPercentage) {
        const totalPrice = this.getTotalPrice();// calling function inside another function
        const discountAmount = (totalPrice * discountPercentage) / 100;
        const discountedPrice = totalPrice - discountAmount;
        console.log(`Discount applied: ${discountPercentage}%`);
        console.log(`Total price before discount: $${totalPrice}`);
        
        console.log(`Discounted price: $${discountedPrice}`);
        }
        }

        // Usage example:
        const cart = new Cart();
        const product1 = new Product(1, "iPhone", 1000);
        const product2 = new Product(2, "Headphones", 100);
        const product3 = new Product(3, "Keyboard", 50);

        cart.addItem(product1, 2); // Add 2 iPhones to cart
        cart.addItem(product2, 1); // Add 1 pair of headphones to cart
        cart.addItem(product3, 3); // Add 3 keyboards to cart
       
        cart.removeItem(2, 1); // Remove 1 pair of headphones from cart
        const totalPrice = cart.getTotalPrice();
        console.log(`Total price: $${totalPrice}`);
       
        cart.applyDiscount(10); // Apply a 10% discount