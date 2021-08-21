const bestPrice = document.getElementById('best-price');

const extraMemoryCost = document.getElementById('ex-m-cost');
const extraStorageCost = document.getElementById('ex-storage-cost');
const freeDelivery = document.getElementById('delivery-charge');
const total = document.getElementById('total-price');

// update Total Function

function updateTotal() {
    const bestPriceTotal = Number (bestPrice.innerText);
    const memoryTotal = Number (extraMemoryCost.innerText);
    const storagesTotal = Number (extraStorageCost.innerText);
    const delivarysTotal = Number(freeDelivery.innerText);
    const grandTotal = bestPriceTotal + memoryTotal + storagesTotal + delivarysTotal;
    total.innerText = grandTotal;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = grandTotal;
    
}

// Memory Cost addEventListener
document.getElementById('8gb-cost').addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    updateTotal();
    
});
document.getElementById('16gb-cost').addEventListener('click', function () {
    extraMemoryCost.innerText ='180';
    updateTotal();
    
});

// Storage Cost addEventListener
document.getElementById('256gb-cost').addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    updateTotal();

});
document.getElementById('512gb-cost').addEventListener('click', function () {
    
    extraStorageCost.innerText = '100';
    updateTotal();
    
});
document.getElementById('1tb-cost').addEventListener('click', function () {
    
    extraStorageCost.innerText = '180';
    updateTotal();
    
});

// Delivary Charge addEventListener

document.getElementById('free-delivery').addEventListener('click', function () {
    
    freeDelivery.innerText = '0';
    updateTotal();
    
});
document.getElementById('delivery-charge-express').addEventListener('click', function () {
    
    freeDelivery.innerText = '20';
    updateTotal();
    
});
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    const userPromo = promoCode.value;

    if (userPromo == 'stevekaku') {
        const subTotal = document.getElementById('sub-total');
        const subTotalText = subTotal.innerText;
        const subTotalAmount = parseInt(subTotalText);
        const subAmount = subTotalAmount * (20 / 100);
        const discount = subTotalAmount - subAmount;
        subTotal.innerText = discount;
    }
    promoCode.value = '';
});
