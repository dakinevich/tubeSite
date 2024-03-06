"use strict";

function openDetailPage(card) {
    var detailCode = card.getAttribute("detail-code");
    var url = "/details/detail.html";
    var queryString = '?detailCode=' + encodeURIComponent(detailCode);
        window.location.href = url + queryString;
}