// Memory Cost
function getMemoryCoat(price) {
    const extraMemoryCost = document.getElementById('ex-m-cost');
    extraMemoryCost.innerText = Number(price);
}

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