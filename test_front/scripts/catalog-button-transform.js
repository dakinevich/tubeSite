"use strict";

function transformCatalogButton() {
    let buttons = document.getElementsByClassName('catalog-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("change");
    }
}