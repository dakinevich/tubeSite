"use strict";

function ContentInfoItem(count, selected) {
    this.count = count;
    this.selected = selected;
}

function generateCartContentInfo() {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) {
        var contentInfo = {};
        for (var i of productsList) {
            contentInfo[i.detailCode] = new ContentInfoItem(0, false);
        }
        var jsonString = JSON.stringify(contentInfo);
        localStorage.setItem('cartContentInfo', jsonString);
    } else {
        var contentInfo = JSON.parse(storedString);
        if (Object.keys(contentInfo).length != productsList.length) {
            for (var i of productsList) {
                if (!contentInfo[i.detailCode]) {
                    contentInfo[i.detailCode] = new ContentInfoItem(0, false);
                }
            }
            var jsonString = JSON.stringify(contentInfo);
            localStorage.setItem('cartContentInfo', jsonString);
        }
    }
}

function getCartCount() {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    var count = 0;
    for (var i in contentInfo) {
        count += contentInfo[i].count;
    }

    let cartCounters = document.getElementsByClassName("cart-link-counter");
    for (var i = 0; i < cartCounters.length; i++) {
        cartCounters[i].innerText = count;
    }
}

function increaseCart(detailCode) {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    if (contentInfo[detailCode]) {
        contentInfo[detailCode].count += 1;
        contentInfo[detailCode].selected = true;
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
    }
}

function decreaseCart(detailCode) {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    if (contentInfo[detailCode]) {
        contentInfo[detailCode].count = contentInfo[detailCode].count == 0 ? 0 : contentInfo[detailCode].count - 1;
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
    }
}

function prepareForButOnclick(detailCode) {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    if (contentInfo[detailCode]) {
        for (var i in contentInfo) {
            contentInfo[i].selected = false;
        }

        var prod = contentInfo[detailCode];
        contentInfo[detailCode] = null;
        contentInfo[detailCode] = prod;

        contentInfo[detailCode].selected = true;

        var jsonString = JSON.stringify(contentInfo);
        localStorage.setItem('cartContentInfo', jsonString);
    }
}


function loadCartContent() {
    var storedString = localStorage.getItem('cartContentInfo');
    if (!storedString) { generateCartContentInfo(); }
    var contentInfo = JSON.parse(storedString);

    var productGrid = document.querySelector(".cart-products-list");
    var cardTemplate = document.querySelector(".spectiac-cart-card-template");
    var productsCoastLabel = document.querySelector(".checkout-order-products-coast-label");
    var discountLabel = document.querySelector(".checkout-order-discount-label");
    var totalLabel = document.querySelector(".checkout-order-total-label");

    var totalCoast = 0;
    var lastImg;
    var components = [];
    for (var code in contentInfo) {
        if (contentInfo[code].count > 0) {
            var cardClone = cardTemplate.cloneNode(true);
            cardClone.classList.remove("spectiac-cart-card-template");
            cardClone.classList.remove("removed");

            var product = productsList.find(item => item.detailCode == code);
            if (contentInfo[code].selected) {
                totalCoast += product.coast * contentInfo[code].count;
            }

            var checkbox = cardClone.querySelector(".custom-checkbox input");
            var image = cardClone.querySelector(".cart-image-container img");
            var imageContainer = cardClone.querySelector(".cart-image-container");
            var nameLabel = cardClone.querySelector(".cart-products-main-info h4");
            var categoryLabel = cardClone.querySelector(".cart-products-main-info p");
            var mainInfo = cardClone.querySelector(".cart-products-main-info");
            var deliveryLabel = cardClone.querySelector(".cart-products-abled-delivery");
            var inStockLabel = cardClone.querySelector(".cart-products-abled-instock");
            var countLabel = cardClone.querySelector(".adjust-products-number span");
            var coastLabel = cardClone.querySelector(".cart-products-coast");

            lastImg = image;


            var plusBtn = cardClone.querySelector(".button-plus");
            var minusBtn = cardClone.querySelector(".button-minus");
            var deleteBtn = cardClone.querySelector(".cart-products-delete-button");

            imageContainer.setAttribute("detail-code", code);
            mainInfo.setAttribute("detail-code", code);
            plusBtn.setAttribute("detail-code", code);
            minusBtn.setAttribute("detail-code", code);
            deleteBtn.setAttribute("detail-code", code);

            if (contentInfo[code].count == 1) {
                minusBtn.classList.add("disabled-minus-button");
            }

            if (contentInfo[code].selected) {
                checkbox.checked = true;
            }
            checkbox.setAttribute("detail-code", code);
            image.src = product.photoUrl;
            nameLabel.innerText = product.displayCode;
            categoryLabel.innerText = product.categoryName;
            deliveryLabel.innerText = "Доставка " + product.delivery + " дн.";
            inStockLabel.innerText = "Осталось " + product.inStock + " шт.";
            countLabel.innerText = contentInfo[code].count;
            coastLabel.innerText = addSpacesFromEnd(String(product.coast * contentInfo[code].count), 3) + " ₽";

            components.push(cardClone);
        }


    }

    if (lastImg) {
        lastImg.onload = function () {
            productGrid.innerHTML = "";
            for (var cardClone of components) {
                productGrid.appendChild(cardClone);
            }
        }
    } else {
        productGrid.innerHTML = "";
    }

    productsCoastLabel.innerText = addSpacesFromEnd(String(totalCoast), 3) + " ₽";
    discountLabel.innerText = addSpacesFromEnd(String(Math.floor(totalCoast * 0.05)), 3) + " ₽";
    totalLabel.innerText = addSpacesFromEnd(String(totalCoast - Math.floor(totalCoast * 0.05)), 3) + " ₽";
}