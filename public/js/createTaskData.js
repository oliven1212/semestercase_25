const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addProductBtn');
const selectedProductsDiv = document.getElementById('selectedProducts');
const submitBtn = document.getElementById('submitAllBtn');
const productSelect = document.getElementById('productId');
const unitDisplay = document.getElementById('unit-display');

const selectedProducts = [];

// Vis enhed når produkt vælges
productSelect.addEventListener('input', function () {
    const selectedOption = this.options[this.selectedIndex];
    const unit = selectedOption.getAttribute('data-unit');
    unitDisplay.textContent = unit || '';
});

// Tilføj produkt til listen
addBtn.addEventListener('click', function () {
    const productId = productSelect.value;
    const productName = productSelect.options[productSelect.selectedIndex].text;
    const amount = amountInput.value;
    const unit = unitDisplay.textContent;

    if (!productId || !amount) {
        alert('Vælg et produkt og indtast mængde');
        return;
    }

    // Tilføj til array
    selectedProducts.push({
        id: productId,
        name: productName,
        amount: amount,
        unit: unit
    });

    // Opret HTML element
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

// Gem alle produkter
submitBtn.addEventListener('click', function () {
    console.log('Gemmer produkter:', selectedProducts);
    // Her sender du data til din backend
    // fetch('/api/save-products', {
    //     method: 'POST',
    //     body: JSON.stringify(selectedProducts)
    // })
});