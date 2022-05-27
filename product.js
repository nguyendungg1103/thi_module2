"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, category, price, amount, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.amount = amount;
    }
    Product.prototype.getName = function () { return this.name; };
    Product.prototype.getCategory = function () { return this.category; };
    Product.prototype.getPrice = function () { return this.price; };
    Product.prototype.getAmount = function () { return this.amount; };
    Product.prototype.getDescription = function () { return this.description; };
    return Product;
}());
exports.Product = Product;
