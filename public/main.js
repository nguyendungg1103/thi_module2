import { Product } from "./product.js";
import { ProductManager } from "./ProductManager.js";
var productManager = new ProductManager();
var key;
var name = document.getElementById('name');
var category = document.getElementById('category');
var price = document.getElementById('price');
var amount = document.getElementById('amount');
var description = document.getElementById('description');
var nameEdit = document.getElementById('nameEdit');
var categoryEdit = document.getElementById('categoryEdit');
var priceEdit = document.getElementById('priceEdit');
var amountEdit = document.getElementById('amountEdit');
var descriptionEdit = document.getElementById('descriptionEdit');
var search = document.getElementById('search');
document.getElementById('showAll').addEventListener('click', showAll);
function showAll() {
    productManager.showList(productManager.product);
}
function clear() {
    name.value = "";
    category.value = "";
    price.value = "";
    amount.value = "";
    description.value = "";
}
document.getElementById('create').addEventListener('click', createProduct);
function createProduct() {
    var product = new Product(name.value, category.value, price.value, amount.value, description.value);
    productManager.createProduct(product);
    clear();
    buttonUpdateProduct();
    buttonDeleteProduct();
}
function buttonUpdateProduct() {
    var updateStudent = document.getElementsByClassName('update');
    var _loop_1 = function (i) {
        updateStudent[i].addEventListener('click', function () {
            key = updateStudent[i].getAttribute('value');
            productManager.update(+key);
            buttonUpdateProduct();
        });
    };
    for (var i = 0; i < updateStudent.length; i++) {
        _loop_1(i);
    }
    document.getElementById('update').addEventListener('click', function () {
        productManager.product[key].name = nameEdit.value;
        productManager.product[key].category = categoryEdit.value;
        productManager.product[key].price = priceEdit.value;
        productManager.product[key].amount = amountEdit.value;
        productManager.product[key].description = descriptionEdit.value;
        productManager.showList(productManager.product);
    });
}
function buttonDeleteProduct() {
    var deleteStudent = document.getElementsByClassName('delete');
    var _loop_2 = function (i) {
        deleteStudent[i].addEventListener('click', function () {
            if (confirm("are you sure?")) {
                key = deleteStudent[i].getAttribute('value');
                productManager.delete(+key);
                buttonDeleteProduct();
            }
        });
    };
    for (var i = 0; i < deleteStudent.length; i++) {
        _loop_2(i);
    }
}
document.getElementById('search').addEventListener('change', searchProduct);
function searchProduct() {
    var key = search.value;
    productManager.search(productManager.product, key);
}
//# sourceMappingURL=main.js.map