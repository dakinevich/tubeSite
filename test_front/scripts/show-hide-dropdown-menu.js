"use strict";

var dropdownMenuIsOpen = false;

function showHideDropdownMenu() {
    let catalogMenus = document.getElementsByClassName('catalog-dropdown-menu');
    for (var i = 0; i < catalogMenus.length; i++) {
        if (dropdownMenuIsOpen) {
            catalogMenus[i].style.filter = "drop-shadow(var(--shadow-items)) opacity(0)";
            catalogMenus[i].style.visibility = "hidden";
        } else {
            catalogMenus[i].style.filter = "drop-shadow(var(--shadow-items)) opacity(1)";
            catalogMenus[i].style.visibility = "visible";
    
        }
    }
    catalogMenus = document.getElementsByClassName('catalog-dropdown-menu-tablet');
    for (var i = 0; i < catalogMenus.length; i++) {
        catalogMenus[i].style.filter = "opacity(1)";
        catalogMenus[i].style.visibility = "visible";
        if (dropdownMenuIsOpen) {
            catalogMenus[i].style.transform = "translate(0%, -100%)";
        } else {
            catalogMenus[i].style.transform = "translate(0%, 0%)";
    
        }
    }
    catalogMenus = document.getElementsByClassName('catalog-dropdown-menu-mobile');
    for (var i = 0; i < catalogMenus.length; i++) {
        catalogMenus[i].style.filter = "opacity(1)";
        catalogMenus[i].style.visibility = "visible";
        if (dropdownMenuIsOpen) {
            catalogMenus[i].style.transform = "translate(0%, -100%)";
        } else {
            catalogMenus[i].style.transform = "translate(0%, 0%)";
    
        }
    }
    dropdownMenuIsOpen = !dropdownMenuIsOpen;
}