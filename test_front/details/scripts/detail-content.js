"use strict";

function ProductCharacteristics(detailCode, commonCharacteristics, allCharacteristics) {
    this.detailCode = detailCode;
    this.commonCharacteristics = commonCharacteristics;
    this.allCharacteristics = allCharacteristics;
}

const characteristicsList = [
    new ProductCharacteristics("0092S30010", 
    {"Напряжение, В" : 12, "Производитель" : "Bosch", "Вес, г" : 10680, "Емкость батареи, А/ч" : 41},
    {"Размеры/характеристики" : {"Высота, мм" : 175, "Длина, мм" : 207, "Ширина, мм" : 175, "Клеммы" : 1, "Крепление аккумулятора" : "B13", "Расположение полюсных выводов" : "Обратное"}}),
    new ProductCharacteristics("560301052",
    {"Напряжение, В" : 12, "Производитель" : "Varta", "Пусковой ток, А" : 520, "Емкость батареи, А/ч" : 60},
    {"Размеры/характеристики" : {"Высота, мм" : 175, "Длина, мм" : 261, "Ширина, мм" : 220, "Технология аккумулятора" : "Свинцово-кислотный", "Тип корпуса" : "D23-2", "Полярность" : "Прямая"}}),
    new ProductCharacteristics("AGM12-18",
    {"Напряжение, В" : 12, "Производитель" : "Exide", "Пусковой ток, А" : 250, "Емкость батареи, А/ч" : 18},
    {"Размеры/характеристики" : {"Высота, мм" : 181, "Длина, мм" : 77, "Ширина, мм" : 167, "Полярность" : "Прямая"}}),
    new ProductCharacteristics("EL752",
    {"Напряжение, В" : 12, "Производитель" : "Exide", "Пусковой ток, А" : 730, "Емкость батареи, А/ч" : 75},
    {"Размеры/характеристики" : {"Высота, мм" : 315, "Длина, мм" : 175, "Ширина, мм" : 175, "Технология аккумулятора" : "Кальциевый", "Вес" : "19.4 кг", "Полярность" : "Обратная"}}),
    new ProductCharacteristics("78181",
    {"Тип диска" : "литой", "Диаметр, в дюймах" : 15, "Вылет ET, мм" : 46, "Количество крепежных отверстий" : 4},
    {"Заводские данные о товаре" : {"Артикул производителя" : "78181", "Модель" : "X-132", "Бренд" : "X'trike"},
    "Размеры/характеристики" : {"Ширина обода, дюймы" : 6, "Диаметр центрального отверстия DIA, мм" : 60.1, "Расстояние между болтами, мм" : 100, "Материал" : "алюминиевый сплав"}}),
    new ProductCharacteristics("WMM579X1775A45X24",
    {"Тип диска" : "литой", "Диаметр, в дюймах" : 17, "Вылет ET, мм" : 45, "Количество крепежных отверстий" : 5},
    {"Заводские данные о товаре" : {"Артикул производителя" : "WMM579X1775A45X24", "Модель" : "MQSRP", "Бренд" : "Advanti"},
    "Размеры/характеристики" : {"Ширина обода, дюймы" : 7.5, "Диаметр центрального отверстия DIA, мм" : 67.1, "Расстояние между болтами, мм" : 114.3, "Материал" : "алюминиевый сплав"}}),
    new ProductCharacteristics("WSQ79GX1775A45X05",
    {"Тип диска" : "литой", "Диаметр, в дюймах" : 17, "Вылет ET, мм" : 45, "Количество крепежных отверстий" : 5},
    {"Заводские данные о товаре" : {"Бренд" : "Konig", "Артикул производителя" : "WSQ79GX1775A45X05", "Модель" : "IMPRESSION"},
    "Размеры/характеристики" : {"Ширина обода, дюймы" : 7.5, "Диаметр центрального отверстия DIA, мм" : 67.1, "Расстояние между болтами, мм" : 114.3, "Материал" : "алюминиевый сплав"}}),
    new ProductCharacteristics("W01902201G1",
    {"Тип диска" : "литой", "Диаметр, в дюймах" : 20, "Вылет ET, мм" : 52, "Количество крепежных отверстий" : 5},
    {"Заводские данные о товаре" : {"Бренд" : "OZ", "Артикул производителя" : "W01902201G1", "Модель" : "Monaco HLT"},
    "Размеры/характеристики" : {"Ширина обода, дюймы" : 9.5, "Диаметр центрального отверстия DIA, мм" : 79, "Расстояние между болтами, мм" : 112, "Материал" : "алюминиевый сплав"}}),
    new ProductCharacteristics("143550",
    {"Тип автомобиля" : "Легковые автомобили", "Сезонность" : "Зимние", "Шипы" : "Нет", "Класс шин" : "A"},
    {"Основные характеристики" : {"Расход топлива" : "B...E", "Шумность, дБ" : "66...73", "Управляемость" : "B...E", "Тип зимних шин" : "для северной зимы", "Направленный протектор" : "есть", "Тип рисунка протектора" : "симметричный"},
    "Дополнительно" : {"Производитель" : "Pirelli", "Срок годности" : "5 лет", "Срок службы" : "5 лет", "Гарантийный срок" : "1 г."}}),
    new ProductCharacteristics("113426",
    {"Тип автомобиля" : "Легковые автомобили", "Сезонность" : "Зимние", "Шипы" : "Есть", "Класс шин" : "C"},
    {"Основные характеристики" : {"Расход топлива" : "B...E", "Шумность, дБ" : "70...78", "Управляемость" : "B...E", "Тип зимних шин" : "для северной зимы", "Направленный протектор" : "есть", "Тип рисунка протектора" : "симметричный"},
    "Дополнительно" : {"Производитель" : "Nokian Tyres", "Срок годности" : "5 лет", "Срок службы" : "5 лет", "Гарантийный срок" : "1 г."}}),
    new ProductCharacteristics("132703",
    {"Тип автомобиля" : "Легковые автомобили", "Сезонность" : "Зимние", "Шипы" : "Есть", "Класс шин" : "B"},
    {"Основные характеристики" : {"Расход топлива" : "A...C", "Шумность" : "A...B", "Управляемость" : "A...B", "Тип зимних шин" : "для северной зимы", "Направленный протектор" : "есть", "Тип рисунка протектора" : "симметричный"},
    "Дополнительно" : {"Производитель" : "Hankook", "Срок годности" : "5 лет", "Срок службы" : "5 лет", "Гарантийный срок" : "1 г."}}),
    new ProductCharacteristics("774942",
    {"Тип автомобиля" : "Легковые автомобили", "Сезонность" : "Зимние", "Шипы" : "Есть", "Класс шин" : "A"},
    {"Основные характеристики" : {"Расход топлива" : "E", "Шумность" : "D", "Тип зимних шин" : "для северной зимы", "Направленный протектор" : "есть", "Тип рисунка протектора" : "симметричный"},
    "Дополнительно" : {"Производитель" : "Michelin", "Срок годности" : "5 лет", "Срок службы" : "10 лет", "Гарантийный срок" : "1 г."}}),
    new ProductCharacteristics("06J115403Q",
    {"Тип" : "масляный фильтр", "Диаметр" : "62 мм", "Высота" : "143 мм", "Вес" : "0.482 кг"},
    {"Совместимость" : {"Audi" : ["A3", "A4", "A5", "A6", "A8", "Q3", "Q5", "S8", "TT", "TTS"], "Seat" : ["Alhambra", "Altea", "Leon"], "Skoda" : ["Octavia", "Superb", "Yeti"], "Volkswagen" : ["Amarok", "Golf", "Jetta", "Passat", "Tiguan", "Touareg"]}, 
    "Дополнительно" : {"Производитель" : "VAG (Germany)", "Код производителя" : "06J115403Q", "Дополнительная информация" : "Оригинал"}}),
    new ProductCharacteristics("8K0201511A",
    {"Тип" : "Топливный фильтр", "Производитель" : "VAG (Germany)", "Код производителя" : "8K0201511A"},
    {"Совместимость" : {"Audi" : ["A4", "S4", "A5", "S5", "RS4", "RS5"]}, 
    "Дополнительно" : {"Производитель" : "VAG (Germany)", "Код производителя" : "8K0201511A", "Дополнительная информация" : "Оригинал"}}),
    new ProductCharacteristics("F026400425",
    {"Тип" : "Воздушный фильтр", "Высота [мм]" : 152, "Наружный диаметр [мм]" : 169.4, "Исполнение фильтра" : "Фильтр-патрон"},
    {"Совместимость" : {"Audi" : ["A1", "A4", "A5", "Q5"]},
    "Дополнительно" : {"Производитель" : "BOSCH", "Код производителя" : "F026400425", "Дополнительная информация" : "Оригинал"}}),
    new ProductCharacteristics("4M0819439B",
    {"Тип" : "Салонный фильтр", "Фильтрующий материал" : "Уголь", "Длина, мм" : 310, "Ширина, мм" : 210, "Толщина, мм" : 40},
    {"Совместимость" : {"Audi" : ["A4", "A5", "A6", "A7", "A8", "Q5", "Q7", "Q8"], "Другие марки" : ["Bentley", "Porsche", "SEAT", "Skoda", "Volkswagen"]},
    "Дополнительно" : {"Производитель" : "VAG (Germany)", "OE-код" : "CUK31003", "Дополнительная информация" : "Оригинал", "Срок службы" : "1 г."}}),
    new ProductCharacteristics("0242140523",
    {"Тип" : "Свеча зажигания", "Расстояние между электродами" : "1.0 мм", "Момент затяжки" : "23 Нм", "Ширина зева гаечного ключа" : 16},
    {"Размеры/характеристики" : {"Угол затяжки, град." : 90, "Наружная резьба" : "12 мм", "Шам резьбы" : "1.25 мм", "Длина резьбы" : "26.5 мм", "Версия" : "Double Iridium"},
    "Дополнительно" : {"Производитель" : "BOSCH", "Код производителя" : "0242140523", "Дополнительная информация" : "Оригинал"}}),
    new ProductCharacteristics("2483710",
    {"Объём л." : 1, "Вязкость" : "5W-40", "Состав" : "синтетическое", "Индекс вязкости" : 170, "Температура застывания C°" : -42},
    {"Технические свойства" : {"Вязкость кинематическая при 40°, сСт" : 89.7, "Вязкость кинематическая при 100°С, сСт" : 14.6, "Температура вспышки C°" : 233, "Зольность" : "Полнозольное"},
    "Дополнительные" : {"Бренд" : "G-Energy", "Страна-изготовитель" : "Россия", "OEM-номер" : "253140261", "Гарантийный срок" : "5 лет"}}),
    new ProductCharacteristics("NO138493",
    {"Тип" : "Прокладка сливной пробки", "Производитель" : "VAG", "Страна производитель" : "Германия", "Код производителя" : "NO138493"},
    {"Совместимость" : {"Марки" : ["Volkswagen", "Skoda", "Audi", "Seat", "Porsche", "Bentley", "Scania", "Bugatti", "Lamborghini", "MAN"]}}),
    new ProductCharacteristics("4K0698151",
    {"Тип" : "дисковые", "Место установки" : "передняя ось", "Датчик износа" : "Есть", "Колодки стояночного тормоза" : "Нет", "Фрикционные накладки" : "керамические"},
    {"Совместимость" : {"Audi" : ["A4", "A5", "Q5", "Q7"]},
    "Дополнительные" : {"Бренд" : "VAG (Germany)", "Артикул производителя" : "4K0698151", "Год выпуска" : "15>"}}),
    new ProductCharacteristics("B000750M1",
    {"Тип упаковки" : "Бутылка", "Спецификации FMVSS 116" : "DOT 4", "Объём, л" : 0.25, "Наименование" : "BRAKE FLUID"},
    {"Дополнительно" : {"Вес, г" : 270, "Ширина упаковки, мм" : 59, "Толщина упаковки, мм" : 59, "Длина упаковки, мм" : 142, "Бренд" : "VAG (Germany)"}}),
    new ProductCharacteristics("A07396S",
    {"Сезон" : "зимняя", "Температура замерзания, С" : -50, "Тип жидкости" : "концентрат", "Объём, л" : 1},
    {"Состав" : {"Вода обессоленная" : ">30%", "Изопропиловый спирт" : ">30%", "МЭГ" : "<5%", "ПАВ" : "<5%", "Ароматизатор" : "<5%", "Краситель" : "<5%"}}),
    new ProductCharacteristics("LN1314",
    {"Сезон" : "зимняя", "Температура замерзания, С" : -20, "Совместимость с поликарбонатом" : "есть", "Объём, л" : 3.9},
    {"Состав" : {"Основа" : "вода деминерализованная", "Пропан-2-ол" : ">30%", "Этиленгликоль" : "<5%", "АПАВ" : "<5%", "НПАВ" : "<5%"},
    "Дополнительно" : {"Производитель" : "LAVR", "Название модели" : "Ln1314", "Срок годности" : "2 г."}}),
];

function loadDetailCharacteristics(detailCode) {
    var product = productsList.find(item => item.detailCode == detailCode);
    var productCharacteristics = characteristicsList.find(item => item.detailCode == detailCode);

    if (!product || !productCharacteristics) {
        return;
    }

    var pageHeader = document.querySelector(".page-header");
    var image = document.querySelector(".product-preview-image");
    var productCoasts = document.getElementsByClassName("catalog-detail-coast");
    var productAvailabilities = document.getElementsByClassName("catalog-detail-availability"); 
    var productDelivery = document.getElementsByClassName("catalog-detail-delivery");
    
    var commonCharacteristicsList = document.querySelector(".common-characteristics-list");
    var fullCharacteristicsContainer = document.querySelector(".full-characteristics");

    var characteristicsItemTemplate = document.querySelector(".characteristics-list-item");
    var fullCharacteristicsHeaderTemplate = document.querySelector(".full-characteristics-header");
    var fullCharacteristicsListTemplate = document.querySelector(".full-characteristics-list");
    var characteristicsDividerTemplate = document.querySelector(".characteristics-divider");

    pageHeader.innerText = product.displayCode + " " + product.categoryName;
    image.src = product.photoUrl;

    for (var i = 0; i < productCoasts.length; i++) {
        productCoasts[i].innerText = addSpacesFromEnd(String(product.coast), 3) + " ₽";
    }
    for (var i = 0; i < productAvailabilities.length; i++) {
        productAvailabilities[i].innerText = "В наличии: " + product.inStock + " шт.";
    }
    for (var i = 0; i < productDelivery.length; i++) {
        productDelivery[i].innerText = "Доставка: " + product.delivery + " дн.";
    }

    for (var key in productCharacteristics.commonCharacteristics) {
        var characteristicsItemClone = characteristicsItemTemplate.cloneNode(true);
        characteristicsItemClone.classList.remove("removed");

        var propName = characteristicsItemClone.querySelector(".characteristics-porperty-name");
        var propValue = characteristicsItemClone.querySelector(".characteristics-porperty-value");

        propName.innerText = key;
        propValue.innerText = productCharacteristics.commonCharacteristics[key];

        commonCharacteristicsList.appendChild(characteristicsItemClone);
    }

    var addBtn = document.getElementsByClassName("buy-button-cart");
    var plusBtn = document.getElementsByClassName("button-plus");
    var minusBtn = document.getElementsByClassName("button-minus");
    var buyBtn = document.getElementsByClassName("buy-button-onclick");

    for (var i = 0; i < addBtn.length; i++) {
        addBtn[i].setAttribute("detail-code", detailCode);
        plusBtn[i].setAttribute("detail-code", detailCode);
        minusBtn[i].setAttribute("detail-code", detailCode);
        buyBtn[i].setAttribute("detail-code", detailCode);
    }

    var curKey = 0;
    for (var key in productCharacteristics.allCharacteristics) {
        var fullCharacteristicsHeaderClone = fullCharacteristicsHeaderTemplate.cloneNode(true);
        fullCharacteristicsHeaderClone.classList.remove("removed");
        fullCharacteristicsHeaderClone.innerText = key;
        fullCharacteristicsContainer.appendChild(fullCharacteristicsHeaderClone);

        var fullCharacteristicsListClone = fullCharacteristicsListTemplate.cloneNode(true);
        fullCharacteristicsListClone.classList.remove("removed");

        for (var prop in productCharacteristics.allCharacteristics[key]) {
            var characteristicsItemClone = characteristicsItemTemplate.cloneNode(true);
            characteristicsItemClone.classList.remove("removed");

            var propName = characteristicsItemClone.querySelector(".characteristics-porperty-name");
            var propValue = characteristicsItemClone.querySelector(".characteristics-porperty-value");

            propName.innerText = prop;

            if (Array.isArray(productCharacteristics.allCharacteristics[key][prop])) {
                propValue.innerText = productCharacteristics.allCharacteristics[key][prop].join(", ");
            } else {
                propValue.innerText = productCharacteristics.allCharacteristics[key][prop];
            }

            fullCharacteristicsListClone.appendChild(characteristicsItemClone);
        }

        fullCharacteristicsContainer.appendChild(fullCharacteristicsListClone);

        if (Object.keys(productCharacteristics.allCharacteristics).length - 1 > curKey) {
            var characteristicsDividerClone = characteristicsDividerTemplate.cloneNode(true);
            characteristicsDividerClone.classList.remove("removed");

            fullCharacteristicsContainer.appendChild(characteristicsDividerClone);
        }

        curKey++;
    }

}