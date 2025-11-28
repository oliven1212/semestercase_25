

const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addProductBtn');
const selectedProductsDiv = document.getElementById('selectedProducts');
const submitBtn = document.getElementById('submitAllBtn');
const productSelect = document.getElementById('productId');
const unitDisplay = document.getElementById('unit-display');

//Tilføjer disse variabler til billede håndteringen

const taskForm = document.getElementById('taskForm');
const beforeInput = document.getElementById('beforeInput');
const afterInput = document.getElementById('afterInput');
const beforeCount = document.getElementById('beforeCount');
const afterCount = document.getElementById('afterCount');



const selectedProducts = [];

//Viser antal valgte før billeder
beforeInput.addEventListener('change', function () {
    const count = this.files.length;
    beforeCount.textContent = count > 0 ? `${count} valgt` : '';

});

afterInput.addEventListener('change', function () {
    const count = this.files.length;
    afterCount.textContent = count > 0 ? `${count} valgt` : '';
});

// Viser enhed når produkt vælges
productSelect.addEventListener('input', function () {
    const selectedOption = this.options[this.selectedIndex];
    const unit = selectedOption.getAttribute('data-unit');
    unitDisplay.textContent = unit || '';
});

// Tilføjer produkt til listen
addBtn.addEventListener('click', function () {
    const productId = productSelect.value;
    const productName = productSelect.options[productSelect.selectedIndex].text;
    const amount = amountInput.value;
    const unit = unitDisplay.textContent;

    if (!productId || !amount) {
        alert('Vælg et produkt og indtast mængde');
        return;
    }

    // Tilføjer til array
    selectedProducts.push({
        taskId: 50,
        productId: productId,
        amount: amount
    });

    // Opretter HTML element
    const productDiv = document.createElement('div');
    productDiv.className = 'product-row';
    productDiv.innerHTML = `
        <span class="product-display">${productName}: ${amount} ${unit}</span>
        <button type="button" class="remove-btn" data-index="${selectedProducts.length - 1}">Fjern</button>
    `;

    selectedProductsDiv.appendChild(productDiv);

    // Reset form
    productSelect.value = '';
    amountInput.value = '';
    unitDisplay.textContent = '';

    // Vis submit knap
    submitBtn.style.display = 'block';
});

// Fjern produkt fra listen (delegeret event listener)
selectedProductsDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.getAttribute('data-index');
        selectedProducts.splice(index, 1);
        e.target.parentElement.remove();

        if (selectedProducts.length === 0) {
            submitBtn.style.display = 'none';
        }
    }
});

// Gem alt (produkter og billeder)
submitBtn.addEventListener('click', async function () {
    //Her valdieres at alt er udfyldt
    if(beforeInput.files.length === 0){
        alert('Upload mindst ét før billeder');
        return;
    }
    if(afterInput.files.length === 0){
        alert('Upload mindst ét efter billede');
        return;

    }
    if(selectedProducts.length === 0){ //Denne kan muligvis undlades hvis de skal logge uden produkter
        alert('Tilføj mindst ét produkt');
        return;
    }

    const taskData = new FormData(taskForm);

    //Tilføjer produkter som json 
    taskData.append('products', JSON.stringify(selectedProducts));

    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Gemmer...';

        const response = await fetch('/uploadTask', {
            method: 'POST',
            body: taskData

        });

        const result = await response.json();

         if (result.success) {
            // Redirect til bekræftelsesside
            window.location.href = `/completedTask/${result.taskId}`;
        } else {
            alert('Fejl: ' + result.error);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Gem alle';
        }
    } catch (error) {
        console.error('Submit fejl:', error);
        alert('Kunne ikke gemme data');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Gem alle';
    }

    
});
