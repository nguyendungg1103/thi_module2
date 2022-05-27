export class Product {
    name: any;
    category: any;
    price: any;
    amount: any;
    description: any;
    constructor(
                name: any,
                category: any,
                price: any,
                amount: any,
                description: any) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.amount = amount;
    }

    getName(): any { return this.name; }
    getCategory(): any { return this.category; }
    getPrice(): any { return this.price; }
    getAmount(): any { return this.amount; }
    getDescription(): any { return this.description; }

}