"use strict";

function addToCart(button, flag = true) {
    let card = button.parentElement.parentElement;
    
    let buttonsContainer = card.querySelector(".buy-buttons-container");
    let adjustNumber = card.querySelector(".adjust-products-number");

    buttonsContainer.classList.add("removed");
    adjustNumber.classList.remove("removed");

    if (flag) {
        increaseCart(button.getAttribute("detail-code"));
    }
}

function removeFromCart(button, flag = true) {
    let card = button.parentElement.parentElement;
    
    let buttonsContainer = card.querySelector(".buy-buttons-container");
    let adjustNumber = card.querySelector(".adjust-products-number");

    buttonsContainer.classList.remove("removed");
    adjustNumber.classList.add("removed");
}

function plusButton(button, flag = true) {
    let card = button.parentElement.parentElement;

    let spanNumber = card.querySelector(".adjust-products-number span");
    spanNumber.innerText = Number(spanNumber.innerText) + 1;

    if (flag) {
        increaseCart(button.getAttribute("detail-code"));
    }
}

function minusButton(button, flag = true) {
    let card = button.parentElement.parentElement;

    let spanNumber = card.querySelector(".adjust-products-number span");
    if (Number(spanNumber.innerText) == 1) {
        removeFromCart(button, flag);
    } else {
        spanNumber.innerText = Number(spanNumber.innerText) - 1;
    }

    if (flag) {
        decreaseCart(button.getAttribute("detail-code"));
    }
}

function buyOnClick(button) {
    increaseCart(button.getAttribute("detail-code"));
    var url = "/cart/cart.html";
    var queryString = '?detailCode=' + encodeURIComponent(button.getAttribute("detail-code"));
    window.location.href = url + queryString;
}