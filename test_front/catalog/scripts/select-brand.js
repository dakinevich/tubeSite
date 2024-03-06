"use strict";

var selectedBrand = "";
var selectedModel = "";
var selectedEquipment = "";

function openBrand() {
    let brandsSection = document.querySelector(".auto-brands-table-container");
    let brandSelectionDone = document.querySelector(".auto-brand-selected");

    brandsSection.classList.remove("section-selection-done");
    brandSelectionDone.classList.remove("hidden");
    brandSelectionDone.classList.add("hidden");
}

function closeBrand() {
    let brandsSection = document.querySelector(".auto-brands-table-container");
    let brandSelectionDone = document.querySelector(".auto-brand-selected");

    brandsSection.classList.remove("section-selection-done");
    brandsSection.classList.add("section-selection-done");
    brandSelectionDone.classList.remove("hidden");
}

function openModel() {
    let modelsSection = document.querySelector(".auto-models-section");
    let modelsSelectionDone = document.querySelector(".auto-model-selected");

    modelsSection.classList.remove("section-selection-done");
    modelsSelectionDone.classList.remove("hidden");
    modelsSelectionDone.classList.add("hidden");
}

function closeModel() {
    let modelsSection = document.querySelector(".auto-models-section");
    let modelsSelectionDone = document.querySelector(".auto-model-selected");

    modelsSection.classList.remove("section-selection-done");
    modelsSection.classList.add("section-selection-done");
    modelsSelectionDone.classList.remove("hidden");
}

function openEquipment() {
    let equipmentSection = document.querySelector(".auto-equipment-section");
    let equipmentSelectionDone = document.querySelector(".auto-equipment-selected");

    equipmentSection.classList.remove("section-selection-done");
    equipmentSelectionDone.classList.remove("hidden");
    equipmentSelectionDone.classList.add("hidden");
}

function closeEquipment() {
    let equipmentSection = document.querySelector(".auto-equipment-section");
    let equipmentSelectionDone = document.querySelector(".auto-equipment-selected");

    equipmentSection.classList.remove("section-selection-done");
    equipmentSection.classList.add("section-selection-done");
    equipmentSelectionDone.classList.remove("hidden");
}

function selectBrand(brand) {
    selectedBrand = brand;

    let brandLabel = document.querySelector(".auto-brand-selected .auto-selected-label");
    brandLabel.innerText = selectedBrand;

    closeBrand();
    openModel();
}

function unselectBrand() {
    selectedBrand = "";
    selectedModel = "";
    selectedEquipment = "";

    let modelLabel = document.querySelector(".auto-model-selected .auto-selected-label");
    modelLabel.innerText = "Не выбрано";

    let equipmentLabel = document.querySelector(".auto-equipment-selected .auto-selected-label");
    equipmentLabel.innerText = "Не выбрано";

    let modelCancelButton = document.querySelector(".auto-model-selected .auto-delete-selected-option");
    modelCancelButton.classList.remove("removed");
    modelCancelButton.classList.add("removed");

    let equipmentCancelButton = document.querySelector(".auto-equipment-selected .auto-delete-selected-option");
    equipmentCancelButton.classList.remove("removed");
    equipmentCancelButton.classList.add("removed");

    openBrand();
    closeModel();
    closeEquipment();
    catalogButtonDisabling();
}

function selectModel(model) {
    selectedModel = model;

    let modelLabel = document.querySelector(".auto-model-selected .auto-selected-label");
    modelLabel.innerText = selectedModel;

    let modelCancelButton = document.querySelector(".auto-model-selected .auto-delete-selected-option");
    modelCancelButton.classList.remove("removed");

    closeModel();
    openEquipment();
}

function unselectModel() {
    selectedModel = "";
    selectedEquipment = "";

    let equipmentLabel = document.querySelector(".auto-equipment-selected .auto-selected-label");
    equipmentLabel.innerText = "Не выбрано";

    let equipmentCancelButton = document.querySelector(".auto-equipment-selected .auto-delete-selected-option");
    equipmentCancelButton.classList.remove("removed");
    equipmentCancelButton.classList.add("removed");
    
    openModel();
    closeEquipment();
    catalogButtonDisabling();
}

function selectEquipment(equipment) {
    selectedEquipment = equipment;

    let equipmentLabel = document.querySelector(".auto-equipment-selected .auto-selected-label");
    equipmentLabel.innerText = equipment;

    let equipmentCancelButton = document.querySelector(".auto-equipment-selected .auto-delete-selected-option");
    equipmentCancelButton.classList.remove("removed");

    closeEquipment();
    catalogButtonEnabling();
}

function unselectEquipment() {
    selectedEquipment = "";
    
    openEquipment();
    catalogButtonDisabling();
}

function catalogButtonEnabling() {
    let button = document.querySelector(".open-catalog-auto-button");
    button.classList.remove("catalog-button-desabled");
}

function catalogButtonDisabling() {
    let button = document.querySelector(".open-catalog-auto-button");
    button.classList.remove("catalog-button-desabled");
    button.classList.add("catalog-button-desabled");
}