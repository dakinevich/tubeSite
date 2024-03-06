"use strict";

function openCategory(id) {
    var url = "/catalog/autoparts.html";
    var queryString = '?category=' + encodeURIComponent(id);

    window.location.href = url + queryString;
}