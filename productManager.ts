export class ProductManager {
    product: any = [];
    constructor() {
    }

    createProduct(product) {
        this.product.push(product);
        this.showList(this.product)
    }

    showList(product) {
        let html = '';
        for (let i = 0; i < product.length; i++) {
            html += "<tr style='text-align: center'>";
            html += `<td>${i + 1}</td>`;
            html += `<td>${product[i].getName()}</td>`;
            html += `<td>${product[i].getCategory()}</td>`;
            html += `<td>
                <button class="delete btn btn-danger" value="${i}">Delete</button>
                <button  data-toggle="modal" data-target="#exampleModal1" id="btn-edit" value="${i}" class="update btn btn-success">Update</button>
                </td>`;
            html += "</tr>";
        }
        document.getElementById("showList").innerHTML = html;
    }


    update(key) {
        (document.getElementById('nameEdit') as HTMLInputElement).value = this.product[key].name;
        (document.getElementById('categoryEdit') as HTMLInputElement).value = this.product[key].category;
        (document.getElementById('priceEdit') as HTMLInputElement).value = this.product[key].price;
        (document.getElementById('amountEdit') as HTMLInputElement).value = this.product[key].amount;
        (document.getElementById('descriptionEdit') as HTMLInputElement).value = this.product[key].description;
        (document.getElementById('index') as HTMLInputElement).value = key;
    }

    delete(key: number) {
        this.product.splice(key, 1);
        console.log(this.product);
        this.showList(this.product);
    }

    search(product, key) {
        let html = '';
        for (let i = 0; i < product.length; i++) {
            if (product[i].name === key) {
                html += "<tr style='text-align: center'>";
                html += `<td>${i + 1}</td>`;
                html += `<td>${product[i].getName()}</td>`;
                html += `<td>${product[i].getCategory()}</td>`;
                html += `<td>
                    <button class="delete btn btn-danger" value="${i}">Delete</button> 
                    <button  data-toggle="modal" data-target="#exampleModal1" id="btn-edit" value="${i}" class="update btn btn-success">Update</button>
                    </td>`;
                html += "</tr>";
            }
        }
        document.getElementById("showList").innerHTML = html;
    }


}