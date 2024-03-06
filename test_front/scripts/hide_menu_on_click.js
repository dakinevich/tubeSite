document.addEventListener("click", function (event) {
    if (!event.target.matches(".catalog-dropdown-menu") && 
    !event.target.matches(".catalog-button") && 
    !event.target.matches(".catalog-button-container") &&
    !event.target.matches(".catalog-button-bar") &&
    !event.target.matches(".catalog-dropdown-menu-mobile-li") &&
    !event.target.matches(".search-form-input") &&
    !event.target.matches(".search-form-submit")) {
        if (dropdownMenuIsOpen) {
            showHideDropdownMenu();
            transformCatalogButton();
        }
    }
});