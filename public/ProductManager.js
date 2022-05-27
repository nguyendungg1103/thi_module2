var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = [];
    }
    ProductManager.prototype.createProduct = function (product) {
        this.product.push(product);
        this.showList(this.product);
    };
    ProductManager.prototype.showList = function (product) {
        var html = '';
        for (var i = 0; i < product.length; i++) {
            html += "<tr style='text-align: center'>";
            html += "<td>".concat(i + 1, "</td>");
            html += "<td>".concat(product[i].getName(), "</td>");
            html += "<td>".concat(product[i].getCategory(), "</td>");
            html += "<td>\n                <button class=\"delete btn btn-danger\" value=\"".concat(i, "\">Delete</button>\n                <button  data-toggle=\"modal\" data-target=\"#exampleModal1\" id=\"btn-edit\" value=\"").concat(i, "\" class=\"update btn btn-success\">Update</button>\n                </td>");
            html += "</tr>";
        }
        document.getElementById("showList").innerHTML = html;
    };
    ProductManager.prototype.update = function (key) {
        document.getElementById('nameEdit').value = this.product[key].name;
        document.getElementById('categoryEdit').value = this.product[key].category;
        document.getElementById('priceEdit').value = this.product[key].price;
        document.getElementById('amountEdit').value = this.product[key].amount;
        document.getElementById('descriptionEdit').value = this.product[key].description;
        document.getElementById('index').value = key;
    };
    ProductManager.prototype.delete = function (key) {
        this.product.splice(key, 1);
        console.log(this.product);
        this.showList(this.product);
    };
    ProductManager.prototype.search = function (product, key) {
        var html = '';
        for (var i = 0; i < product.length; i++) {
            if (product[i].name === key) {
                html += "<tr style='text-align: center'>";
                html += "<td>".concat(i + 1, "</td>");
                html += "<td>".concat(product[i].getName(), "</td>");
                html += "<td>".concat(product[i].getCategory(), "</td>");
                html += "<td>\n                    <button class=\"delete btn btn-danger\" value=\"".concat(i, "\">Delete</button> \n                    <button  data-toggle=\"modal\" data-target=\"#exampleModal1\" id=\"btn-edit\" value=\"").concat(i, "\" class=\"update btn btn-success\">Update</button>\n                    </td>");
                html += "</tr>";
            }
        }
        document.getElementById("showList").innerHTML = html;
    };
    return ProductManager;
}());
export { ProductManager };
//# sourceMappingURL=ProductManager.js.map