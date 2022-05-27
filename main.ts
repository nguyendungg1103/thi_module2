import { Product } from "./product.js";
import { ProductManager } from "./ProductManager.js";

const productManager = new ProductManager();

let key;
let name = document.getElementById('name') as HTMLInputElement;
let category = document.getElementById('category') as HTMLInputElement;
let price = document.getElementById('price') as HTMLInputElement;
let amount = document.getElementById('amount') as HTMLInputElement;
let description = document.getElementById('description') as HTMLInputElement;
let nameEdit = document.getElementById('nameEdit') as HTMLInputElement;
let categoryEdit = document.getElementById('categoryEdit') as HTMLInputElement;
let priceEdit = document.getElementById('priceEdit') as HTMLInputElement;
let amountEdit = document.getElementById('amountEdit') as HTMLInputElement;
let descriptionEdit = document.getElementById('descriptionEdit') as HTMLInputElement;
let search = document.getElementById('search') as HTMLInputElement;



// document.getElementById('showAll').addEventListener('click', showAll);
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
    let product = new Product(name.value,
        category.value,
        price.value,
        amount.value,
        description.value);
    productManager.createProduct(product);
    clear();
    buttonUpdateProduct();
    buttonDeleteProduct();
}

function buttonUpdateProduct() {
    let updateStudent = document.getElementsByClassName('update');
    for (let i = 0; i < updateStudent.length; i++) {
        updateStudent[i].addEventListener('click', () => {
            key = updateStudent[i].getAttribute('value');
            productManager.update(+key);
            buttonUpdateProduct();
        })
    }
    document.getElementById('update').addEventListener('click', function () {
        productManager.product[key].name = nameEdit.value;
        productManager.product[key].category = categoryEdit.value;
        productManager.product[key].price = priceEdit.value;
        productManager.product[key].amount = amountEdit.value;
        productManager.product[key].description = descriptionEdit.value;
        productManager.showList(productManager.product);
    })
}

function buttonDeleteProduct() {
    let deleteStudent = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteStudent.length; i++) {
        deleteStudent[i].addEventListener('click', () => {
            if (confirm("are you sure?")) {
                key = deleteStudent[i].getAttribute('value');
                productManager.delete(+key);
                buttonDeleteProduct();
            }
        })
    }
}

document.getElementById('search').addEventListener('change', searchProduct);
function searchProduct() {
    let key = search.value;
    productManager.search(productManager.product, key);
}

