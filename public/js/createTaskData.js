const amountInput = document.getElementById('amount');
const selectedProductsDiv = document.getElementById('selectedProducts');
const productSelect = document.getElementById('productId');
const unitDisplay = document.getElementById('unit-display');
const productIdContainer = document.getElementById('productIdContainer');
const productAmountContainer = document.getElementById('productAmountContainer');
const taskId = document.getElementById('taskId').value;

//Tilføjer disse variabler til billede håndteringen

const taskForm = document.getElementById('taskForm');
const beforeInput = document.getElementById('beforeInput');
const afterInput = document.getElementById('afterInput');
const beforeCount = document.getElementById('beforeCount');
const afterCount = document.getElementById('afterCount');


//Viser antal valgte før billeder
beforeInput.addEventListener('change', async function () {


    const fd = new FormData();

    //Tilføjer alle filer til FormData
    for (const file of this.files) {
        fd.append("beforePicture", file);
    }

    const res = await fetch("/uploadtaskimage/"+taskId+"/0", {
        method: "POST",
        body: fd
    });    
    console.log();
    this.value = "";

    const count = await res.json();
    beforeCount.textContent = count > 0 ? `${count} uploadet` : '';
});

afterInput.addEventListener('change', async function () {
    const fd = new FormData();

    //Tilføjer alle filer til FormData
    for (const file of this.files) {
        fd.append("afterPicture", file);
    }

    const res = await fetch("/uploadtaskimage/"+taskId+"/1", {
        method: "POST",
        body: fd
    });    
    console.log();
    this.value = "";

    const count = await res.json();
    afterCount.textContent = count > 0 ? `${count} uploadet` : '';
    


});

//Removes a product from the selected products on the view and database
productSelect.addEventListener('input', function () {
    const selectedOption = this.options[this.selectedIndex];
    const unit = selectedOption.getAttribute('data-unit');
    unitDisplay.textContent = unit || '';
});


//Adds a product from the selected products on the view and database
async function addProduct () {

    const productId = productSelect.value;
    const amount = amountInput.value;

    if (!productId || !amount) {
        alert('Vælg et produkt og indtast mængde');
        return;
    }


    //Post http call med det nye produkt som retunere alle produkter forbundet med opgaven
    const res = await fetch("/createTask/upload/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        taskId: taskId,
        productId: productId,
        amount: amount
        }),
    });    
    const products = await res.json();


    updateProductDiv(products);


    //Insert hidden data into product selections
    const productIdElement = document.createElement('option');
    productIdElement.value = productId;
    productIdElement.selected = true;
    productIdContainer.append(productIdElement);
    const productAmountElement = document.createElement('option');
    productAmountElement.value = amount;
    productAmountElement.selected = true;
    productAmountContainer.append(productAmountElement);



    // Reset form
    productSelect.value = '';
    amountInput.value = '';
    unitDisplay.textContent = '';

}

//Removes a product from the selected products on the view and database
async function removeProduct (taskId, productId){
    const res = await fetch("/createTask/remove/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        taskId: taskId,
        productId: productId
        }),
    });    
    const products = await res.json();
    updateProductDiv(products);
}


//updates the element that shows the selected products with the given products
function updateProductDiv (products){
    //Makes sure the selectedProducts and the divs er tomme
    let selectedProducts = [];
    selectedProductsDiv.innerHTML = "";
    console.log(selectedProducts);
    
    //looper over alle produkter og opretter dem som html elementer
    products.forEach(product => {
            console.log(product);

        // Opretter HTML element
        const productDiv = document.createElement('div');
        productDiv.className = 'product-row';
        productDiv.innerHTML = `
            <span class="product-display">${product['Product.name']}: ${product.amount} ${product['Product.Unit.name']}</span>
            <button type="button" class="remove-btn" onclick="removeProduct(${product.taskId},${product.productId})">Fjern</button>`;
        selectedProductsDiv.appendChild(productDiv);


    });
}