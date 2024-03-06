"use strict";

window.onload = function() {
    hideCategories();

    

    var urlParams = new URLSearchParams(window.location.search);
    var detailCode = urlParams.get('detailCode');

    if (detailCode) {
        prepareForButOnclick(detailCode);   
    }

    generateCartContentInfo();
    getCartCount();

    loadCartContent();
    
}