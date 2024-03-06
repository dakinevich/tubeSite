"use strict";

function scrollToTarget() {
    const yOffset = -80;
    const element = document.querySelector(".full-characteristics");
    const y = element.getBoundingClientRect().top + (parseInt(document.body.getBoundingClientRect().top) * -1) + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}