"use strict";

let brandsList = ["Audi"];

function enableAutoBrands() {
    let car_brand_items = document.getElementsByClassName('auto-brands-item');
    for (var i = 0; i < car_brand_items.length; i++) {
        var item = car_brand_items[i];
        if (brandsList.includes(item.getAttribute("id"))) {
            continue;
        }
        item.style.pointerEvents = "none";
        item.style.color = "rgb(152, 152, 152)";
    }
}

window.onload = function() {
    enableAutoBrands();
    
    generateCartContentInfo();
    getCartCount();
}