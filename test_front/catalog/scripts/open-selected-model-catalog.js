"use strict";

function openSelectedModelCatalog(entireCatalog = false) {
    var url = "/catalog/autoparts.html";
    if (entireCatalog) {
        window.location.href = url;
    } else {
        var queryString = '?brand=' + encodeURIComponent(selectedBrand) + '&model=' + encodeURIComponent(selectedModel) + '&equipment=' + encodeURIComponent(selectedEquipment);
        window.location.href = url + queryString;
    }
}