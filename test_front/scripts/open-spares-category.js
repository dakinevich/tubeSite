"use strict";

function openCatalogCategories(category) {
    var url = "/catalog/autoparts.html";
    var queryString = '?category=' + encodeURIComponent(category);

    window.location.href = url + queryString;
}