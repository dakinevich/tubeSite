"use strict";

var searchInp1 = document.getElementById("search-form-input-1");
var searchInp2 = document.getElementById("search-form-input-2");
var searchInp3 = document.getElementById("search-form-input-3");
searchInp1.addEventListener("input", function () {
    synchronizeSearchInputs(searchInp1.id);
});
searchInp2.addEventListener("input", function () {
    synchronizeSearchInputs(searchInp2.id);
});
searchInp3.addEventListener("input", function () {
    synchronizeSearchInputs(searchInp3.id);
});

function synchronizeSearchInputs(id) {
    var searchInp1 = document.getElementById("search-form-input-1");
    var searchInp2 = document.getElementById("search-form-input-2");
    var searchInp3 = document.getElementById("search-form-input-3");

    if (id == "search-form-input-1") {
        searchInp2.value = searchInp1.value;
        searchInp3.value = searchInp1.value;
    } else if (id == "search-form-input-2") {
        searchInp1.value = searchInp2.value;
        searchInp3.value = searchInp2.value;
    } else if (id == "search-form-input-3") {
        searchInp1.value = searchInp3.value;
        searchInp2.value = searchInp3.value;
    }
}