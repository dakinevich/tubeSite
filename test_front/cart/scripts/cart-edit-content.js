"use strict";

function minusProduct(button) {
    var detailCode = button.getAttribute("detail-code");
    var countLabel = button.parentElement.querySelector("span");
    if (countLabel.innerText == "1") {
        return;
    } 
    decreaseCart(detailCode);
    loadCartContent();
}

function plusProduct(button) {
    var detailCode = button.getAttribute("detail-code");
    increaseCart(detailCode);
    loadCartContent();
}

function deleteProduct(button) {
    var detailCode = button.getAttribute("detail-code");

    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    contentInfo[detailCode].count = 0;
    contentInfo[detailCode].selected = false;
    var count = 0;
    for (var i in contentInfo) {
        count += contentInfo[i].count;
    }

    var jsonString = JSON.stringify(contentInfo);
    localStorage.setItem('cartContentInfo', jsonString);

    let cartCounters = document.getElementsByClassName("cart-link-counter");
    for (var i = 0; i < cartCounters.length; i++) {
        cartCounters[i].innerText = count;
    }

    loadCartContent();
}

function selectProduct(checkbox) {
    var detailCode = checkbox.getAttribute("detail-code");

    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    contentInfo[detailCode].selected = checkbox.checked;

    var jsonString = JSON.stringify(contentInfo);
    localStorage.setItem('cartContentInfo', jsonString);

    if (!checkbox.selected) {
        var allCheckbox = document.querySelector(".cart-content-head .custom-checkbox input");
        allCheckbox.checked = false;
    }
    
    loadCartContent();
}

function selectAll(checkbox) {
    var detailCode = checkbox.getAttribute("detail-code");

    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    for (var detailCode in contentInfo) {
        contentInfo[detailCode].selected = checkbox.checked;
    }
    
    var jsonString = JSON.stringify(contentInfo);
    localStorage.setItem('cartContentInfo', jsonString);
    
    loadCartContent();
}

function cleanCart() {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    for (var detailCode in contentInfo) {
        contentInfo[detailCode].count = 0;
        contentInfo[detailCode].selected = false;
    }
    
    var jsonString = JSON.stringify(contentInfo);
    localStorage.setItem('cartContentInfo', jsonString);
    
    loadCartContent();
}