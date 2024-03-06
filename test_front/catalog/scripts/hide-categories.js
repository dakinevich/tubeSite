"use strict";

const allowedCategories = ["accumulators", "disks", "tires", "filters", "brakes", "engine", "windshieldWashers", "winter"];

function hideCategories() {
    let categories = document.getElementsByClassName('another-category');
    for (var i = 0; i < categories.length; i++) {
        if (allowedCategories.includes(categories[i].id)) {
            continue;
        } else {
            categories[i].classList.add("another-category-disabled");
            categories[i].disabled = true;
            let image = categories[i].querySelector(".catagory-image");
            image.classList.add("catagory-image-disabled");
        }
    }
}