// Memory Cost
function getMemoryCoat(price) {
    const extraMemoryCost = document.getElementById('ex-m-cost');
    extraMemoryCost.innerText = Number(price);
}
// Storage Cost
function getStorageCost(price) {
    const extraStorageCost = document.getElementById('ex-storage-cost');
    extraStorageCost.innerText = Number(price);
}
// Delivery Charge
function getDeliveryCharge(price) {
    const freeDelivery = document.getElementById('delivery-charge');
    freeDelivery.innerText = Number(price);
}    

// Memory Cost addEventListener
document.getElementById('8gb-cost').addEventListener('click', function () {
    // const extraMemoryCost = document.getElementById('ex-m-cost');
    // extraMemoryCost.innerText = 0;
    getMemoryCoat(0);
});
document.getElementById('16gb-cost').addEventListener('click', function () {
    // const extraMemoryCost = document.getElementById('ex-m-cost');
    // extraMemoryCost.innerText = 80;
    getMemoryCoat(180);
});

// Storage Cost addEventListener
document.getElementById('256gb-cost').addEventListener('click', function () {
    // const extraStorageCost = document.getElementById('ex-storage-cost');
    // extraStorageCost.innerText = 0;
    getStorageCost(0);
});
document.getElementById('512gb-cost').addEventListener('click', function () {
    // const extraStorageCost = document.getElementById('ex-storage-cost');
    // extraStorageCost.innerText = 100;
    getStorageCost(100);
});
document.getElementById('1tb-cost').addEventListener('click', function () {
    // const extraStorageCost = document.getElementById('ex-storage-cost');
    // extraStorageCost.innerText = 180;
    getStorageCost(180);
});

// Delivary Charge addEventListener

document.getElementById('free-delivery').addEventListener('click', function () {
    // const freeDelivery = document.getElementById('delivery-charge');
    // freeDelivery.innerText = 0;
    getDeliveryCharge(0);
});
document.getElementById('delivery-charge-express').addEventListener('click', function () {
    // const freeDelivery = document.getElementById('delivery-charge');
    // freeDelivery.innerText = 20;
    getDeliveryCharge(0);
});