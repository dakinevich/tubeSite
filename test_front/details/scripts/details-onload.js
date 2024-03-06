"use strict";

window.onload = function() {
    hideCategories();

    generateCartContentInfo();
    getCartCount();

    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('detailCode');

    loadDetailCharacteristics(code);
    loadInterestProducts();

    var title = document.querySelector("title");
    var prod = productsList.find(item => item.detailCode == code);

    if (prod) {
        title.innerText = prod?.displayCode + " " + prod?.categoryName;
    } else {
        title.innerText = "Товар не найден";
    }
}