"use strict";

const allowedBrands = ["Audi"];
const allowedModels = ["A5"];
const allowedEquipment = ["(8T3)", "Cabriolet (8F7)", "Sportback (8TA)", "(F53, F5P)", "Sportback (F5A)", "Cabriolet (F57)"];

window.onload = function() {
    hideCategories();

    generateCartContentInfo();
    getCartCount();

    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');
    var search = urlParams.get('searchQuery');
    var brand = urlParams.get('brand');
    var model = urlParams.get('model');
    var equipment = urlParams.get('equipment');

    if (category && allowedCategories.includes(category)) {
        loadData(category);
    } else if (search) {
        loadData("no-category", search);
    } else if (brand && model && equipment) {
        loadData("no-category", "no-search", brand, model, equipment);
    } else {
        loadData();
    }

    loadInterestProducts();
}