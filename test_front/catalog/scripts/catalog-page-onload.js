"use strict";

let brandsList = ["Audi"];
let modelsList = ["A5"];

let audiModels = ["100", "200", "80", "90", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "Coupe", "e-tron", "Q3", "Q5", "Q7", "Q8", "Quattro", "R8", "TT"];

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

function fillModels() {
    let car_models_table = document.querySelector(".auto-models-table");
    for (var index in audiModels) {
        let newElement = document.createElement("button");

        newElement.textContent = audiModels[index];
        newElement.classList.toggle("auto-models-item");
        newElement.id = audiModels[index];
        newElement.onclick = function () {
            selectModel(newElement.id)
        };

        car_models_table.appendChild(newElement);
    }
}

function enableAutoModels() {
    let car_model_items = document.getElementsByClassName('auto-models-item');
    for (var i = 0; i < car_model_items.length; i++) {
        var item = car_model_items[i];
        if (modelsList.includes(item.getAttribute("id"))) {
            continue;
        }
        item.style.pointerEvents = "none";
        item.style.color = "rgb(152, 152, 152)";
    }
}

function setupBrandSearched() {
    var urlParams = new URLSearchParams(window.location.search);
    var brand = urlParams.get('brand');

    if (brand && brandsList.includes(brand)) {
        selectBrand(brand);
    }
}

window.onload = function () {
    enableAutoBrands();
    fillModels();
    enableAutoModels();

    unselectBrand();
    setupBrandSearched();

    generateCartContentInfo();
    getCartCount();
}

