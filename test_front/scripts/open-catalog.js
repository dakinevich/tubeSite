"use strict";

function openCatalog(brand) {
    var url = "/catalog/catalog.html";
    var queryString = '?brand=' + encodeURIComponent(brand);

    window.location.href = url + queryString;
}