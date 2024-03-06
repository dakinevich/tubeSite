"use strict";

function addSpacesFromEnd(inputString, chunkSize) {
    const reversedString = inputString.split('').reverse().join('');
    const regexPattern = new RegExp(`.{1,${chunkSize}}`, 'g');
    const spacedString = reversedString.replace(regexPattern, '$& ').trim();
    const finalString = spacedString.split('').reverse().join(''); return finalString;
}

function Product(detailCode, photoUrl, coast, displayCode, categoryName, inStock, delivery, stars, categories) {
    this.detailCode = detailCode;
    this.photoUrl = photoUrl;
    this.coast = coast;
    this.displayCode = displayCode;
    this.categoryName = categoryName;
    this.inStock = inStock;
    this.delivery = delivery;
    this.stars = stars;
    this.categories = categories;
}

const productsList = [
    new Product("0092S30010", "/catalog/photos/Bosch-0092S30010.jpg", 6800, "Bosch – 009 2S3 001 0", "Аккумулятор", 12, 1, 5, ["accumulators", "winter"]),
    new Product("560301052", "/catalog/photos/varta_battary.png", 8200, "Varta – 560 301 052", "Аккумулятор", 3, 5, 5, ["accumulators", "winter"]),
    new Product("AGM12-18", "/catalog/photos/Exide AGM12-18.jpg", 6500, "Exide AGM12-18", "Аккумулятор", 5, 2, 3, ["accumulators", "winter"]),
    new Product("EL752", "/catalog/photos/Exide EL752.jpg", 16100, "Exide EL752", "Аккумулятор", 19, 1, 4, ["accumulators", "winter"]),
    new Product("78181", "/catalog/photos/X'trike X-132.jpg", 6450, "X'trike – X-132 78181", "Диски", 20, 2, 4, ["disks"]),
    new Product("WMM579X1775A45X24", "/catalog/photos/Advanti WLR5.jpg", 16500, "Advanti – WLR5 MM579", "Диски", 32, 1, 5, ["disks"]),
    new Product("WSQ79GX1775A45X05", "/catalog/photos/Konig Impression SQ79G.jpg", 16500, "Konig Impression – SQ79G", "Диски", 8, 2, 4, ["disks"]),
    new Product("W01902201G1", "/catalog/photos/OZ Monaco HLT.jpg", 23250, "OZ Monaco HLT – Grigio Corsa", "Диски", 4, 3, 5, ["disks"]),
    new Product("143550", "/catalog/photos/Pirelli Ice Zero FR.jpg", 5820, "Pirelli – Ice Zero FR", "Шины", 48, 1, 5, ["tires", "winter"]),
    new Product("113426", "/catalog/photos/Nokian Tyres Nordman.jpg", 6030, "Nokian Tyres Nordman 7", "Шины", 64, 2, 5, ["tires", "winter", "interestProducts"]),
    new Product("132703", "/catalog/photos/Hankook Winter I*Pike.jpg", 6890, "Hankook Winter I*Pike", "Шины", 120, 1, 5, ["tires", "winter"]),
    new Product("774942", "/catalog/photos/Michelin X-Ice North 4.jpg", 15200, "Michelin X-Ice North 4", "Шины", 52, 1, 5, ["tires", "winter"]),
    new Product("06J115403Q", "/photos/s-l1600.jpg", 1450, "VAG - 06J 115 403 Q", "Маслянный фильтр", 257, 1, 5, ["filters", "engine"]),
    new Product("8K0201511A", "/catalog/photos/VAG FuelFilter.jpg", 5100, "VAG – 8K0 201 511 A", "Топливный фильтр", 129, 1, 5, ["filters"]),
    new Product("F026400425", "/catalog/photos/BOSCH AirFilter.jpg", 2490, "BOSCH F02 640 042 5", "Воздушный фильтр", 83, 1, 4, ["filters", "engine", "interestProducts"]),
    new Product("4M0819439B", "/catalog/photos/VAG CabinFilter.jpg", 1850, "VAG 4M0 819 439 B", "Салонный фильтр", 142, 1, 4, ["filters"]),
    new Product("0242140523", "/photos/spark_plug.jpg", 1100, "Bosch – 0 242 140 523", "Свеча зажигания", 140, 1, 5, ["engine"]),
    new Product("2483710", "/photos/oil.jpg", 1290, "G-Energy 5W-40", "Масло моторное", 56, 1, 5, ["engine", "interestProducts"]),
    new Product("NO138493", "/photos/drain_plug_gasket.jpg", 59, "VAG – NO138493", "Прокладка сливной пробки", 38, 2, 5, ["engine"]),
    new Product("4K0698151", "/photos/front_brake_pads.jpg", 17500, "VAG – 4K0698151", "Тормозные колодки передние", 14, 3, 5, ["brakes"]),
    new Product("B000750M1", "/photos/brake_fluid.jpg", 650, "VAG - B 000 750 M1", "Тормозная жидкость DOT4", 16, 2, 5, ["brakes"]),
    new Product("A07396S", "/catalog/photos/AWS A07396S.jpg", 200, "AVS AVK-400 A07396S", "Стеклоомыватель", 41, 1, 4, ["windshieldWashers", "winter", "interestProducts"]),
    new Product("LN1314", "/catalog/photos/LAVR Ln1310.jpg", 374, "LAVR Ln1314", "Стеклоомыватель", 2, 1, 5, ["windshieldWashers", "winter"]),
];

const categoryNamesDict = {
    "accumulators": "Аккумуляторы",
    "disks": "Диски",
    "tires": "Шины",
    "filters": "Фильтры",
    "engine": "Двигатель",
    "brakes": "Тормоза",
    "windshieldWashers": "Стеклоомыватели",
    "transmition": "Коробка передач",
    "suspention": "Подвеска",
    "cooling": "Охлаждение",
    "electrician": "Электрика",
    "car-body": "Кузов",
    "winter": "Подготовьте машину к зиме",
}

var currentCategory;

function loadData(category, search, brand, model, equipment) {

    var table = document.querySelector(".main-porducts-table");
    var template = document.querySelector(".special-product-card-for-cloning");

    var pageLabel = document.querySelector(".current-category-label");

    var noSearch = false;

    var data;
    if (category && category != "no-category" && allowedCategories.includes(category)) {
        if (currentCategory == category) {
            currentCategory = null;
            uncircleCategory(category);
            data = productsList;
            pageLabel.innerText = "Все запчасти";
        } else {
            uncircleCategory(currentCategory);
            data = productsList.filter(item => item.categories.includes(category));
            currentCategory = category;
            circleCategory(category);
            pageLabel.innerText = categoryNamesDict[category];
        }
    } else if (search && search != "no-search") {
        search = search.trim();
        var searchInps = document.getElementsByClassName("search-form-input");
        for (var i = 0; i < searchInps.length; i++) {
            searchInps[i].value = search;
        }
        
        var upSearch = search.toUpperCase();
        var downSearch = search.toLowerCase();
        var foundProduct = productsList.filter(item => item.detailCode.toUpperCase() == upSearch);
        if (foundProduct.length > 0) {
            data = foundProduct;
            pageLabel.innerText = foundProduct[0].displayCode;
        } else {
            var foundByNameProducts = productsList.filter(item => item.categoryName.toLowerCase().includes(downSearch));
            if (foundByNameProducts.length > 0) {
                data = foundByNameProducts;
                pageLabel.innerText = data[0].categoryName;
            } else {
                var noSearcheSection = document.querySelector(".no-search-results");
                var noSearcheLabel = document.querySelector(".no-search-results-label");
                noSearcheSection.classList.remove("removed");
                noSearcheLabel.innerText = search;
                pageLabel.innerText = "Другие товары";
                data = productsList;
                noSearch = true;
            }
        }
    } else if (brand && model && equipment) {
        if (allowedBrands.includes(brand) && allowedModels.includes(model) && allowedEquipment.includes(equipment)) {
            pageLabel.innerText = "Запчасти для " + brand + " " + model + " " + equipment;
            data = productsList;
        } else {
            var noSearcheSection = document.querySelector(".no-search-results");
            var noSearcheLabel = document.querySelector(".no-search-results-label");
            noSearcheSection.classList.remove("removed");
            noSearcheLabel.innerText = "Запчасти для " + brand + " " + model + " " + equipment;
            pageLabel.innerText = "Другие товары";
            data = productsList;
            noSearch = true;
        }
    } else {
        data = productsList;
        pageLabel.innerText = "Все запчасти";
    }
    
    if (!noSearch) {
        hideNoSearchSection();
    }

    var components = [];
    var lastImg;

    for (var i of data) {
        var clone = template.cloneNode(true);
        clone.setAttribute("detail-code", i.detailCode);
        clone.classList.remove("removed");
        clone.classList.remove("special-product-card-for-cloning");

        var img = clone.querySelector(".catalog-product-card-image");
        var coast = clone.querySelector(".catalog-product-coast");
        var name = clone.querySelector(".catalog-product-name");
        var stock = clone.querySelector(".catalog-product-availability");
        var delivery = clone.querySelector(".catalog-product-delivery");

        lastImg = img;

        img.src = i.photoUrl;
        coast.innerText = addSpacesFromEnd(String(i.coast), 3) + " ₽";
        name.innerText = i.displayCode;
        const lineBreak = document.createElement('br');
        const newText = document.createTextNode(i.categoryName);
        name.appendChild(lineBreak);
        name.appendChild(newText);
        stock.innerText = "В наличии: " + i.inStock + " шт.";
        delivery.innerText = "Доставка: " + i.delivery + " дн.";

        var stars = clone.getElementsByClassName("star");
        for (var ind = 0; ind < stars.length; ind++) {
            if (i.stars - 1 < ind) {
                stars[ind].classList.add("grayscaled-star");
            }
        }

        var addBtn = clone.querySelector(".buy-button-cart");
        var plusBtn = clone.querySelector(".button-plus");
        var minusBtn = clone.querySelector(".button-minus");
        var buyBtn = clone.querySelector(".buy-button-onclick");

        addBtn.setAttribute("detail-code", i.detailCode);
        plusBtn.setAttribute("detail-code", i.detailCode);
        minusBtn.setAttribute("detail-code", i.detailCode);
        buyBtn.setAttribute("detail-code", i.detailCode);

        components.push(clone);
    }

    lastImg.onload = function() {
        table.innerHTML = "";
        for (var c of components) {
            table.appendChild(c);
        }
    }
}

function loadInterestProducts() {
    var table = document.querySelector(".interest-porducts-table");
    var template = document.querySelector(".special-product-card-for-cloning");
    
    var data = productsList.filter(item => item.categories.includes("interestProducts"));
    var components = [];

    for (var i of data) {
        var clone = template.cloneNode(true);
        clone.setAttribute("detail-code", i.detailCode);
        clone.classList.remove("removed");
        clone.classList.remove("special-product-card-for-cloning");

        var img = clone.querySelector(".catalog-product-card-image");
        var coast = clone.querySelector(".catalog-product-coast");
        var name = clone.querySelector(".catalog-product-name");
        var stock = clone.querySelector(".catalog-product-availability");
        var delivery = clone.querySelector(".catalog-product-delivery");

        img.src = i.photoUrl;
        coast.innerText = addSpacesFromEnd(String(i.coast), 3) + " ₽";
        name.innerText = i.displayCode;
        const lineBreak = document.createElement('br');
        const newText = document.createTextNode(i.categoryName);
        name.appendChild(lineBreak);
        name.appendChild(newText);
        stock.innerText = "В наличии: " + i.inStock + " шт.";
        delivery.innerText = "Доставка: " + i.delivery + " дн.";

        var stars = clone.getElementsByClassName("star");
        for (var ind = 0; ind < stars.length; ind++) {
            if (i.stars - 1 < ind) {
                stars[ind].classList.add("grayscaled-star");
            }
        }

        var addBtn = clone.querySelector(".buy-button-cart");
        var plusBtn = clone.querySelector(".button-plus");
        var minusBtn = clone.querySelector(".button-minus");
        var buyBtn = clone.querySelector(".buy-button-onclick");

        addBtn.setAttribute("detail-code", i.detailCode);
        plusBtn.setAttribute("detail-code", i.detailCode);
        minusBtn.setAttribute("detail-code", i.detailCode);
        buyBtn.setAttribute("detail-code", i.detailCode);

        components.push(clone);
    }

    table.innerHTML = "";
    for (var c of components) {
        table.appendChild(c);
    }
}

function circleCategory(catagory) {
    var button = document.getElementById(catagory);
    button?.classList.add("another-category-circled");
}

function uncircleCategory(catagory) {
    var button = document.getElementById(catagory)
    button?.classList.remove("another-category-circled");
}

function hideNoSearchSection() {
    var noSearcheSection = document.querySelector(".no-search-results");
    noSearcheSection.classList.remove("removed");
    noSearcheSection.classList.add("removed");
}