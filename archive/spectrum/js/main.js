$(document).ready( function () {

    contactListTable = $("#contact-list").DataTable( {
        "pageLength": 25,
        "order": [[ 2, "desc" ]],
        "lengthChange": false,
        "columnDefs": [
            { targets: [0, -1], sortable: false},
            { targets: '_all', sortable: true }
        ]
    });

    $("#filter-contacts").keyup(function(){
        contactListTable.search($(this).val()).draw();
    });

    $("#contact-list_filter").addClass("d-none");
    $("#contact-list_paginate").addClass("d-none");
    $("#contact-list_info").addClass("d-none");
    $("#custom-prev-button").removeClass("d-none");
    $("#custom-next-button").removeClass("d-none");
    $("#pagination-info").removeClass("d-none");
    $("#filter-contacts-wrapper").removeClass("d-none");

});

$("#contact-list").on("draw.dt", function () {
    var splitShowingText = $("#contact-list_info").text().split(" ");

    $("#range-start").text(splitShowingText[1]);
    $("#range-end").text(splitShowingText[3]);
    $("#range-total").text(splitShowingText[5]);
});

$("[data-toggle]").on( "click", function() {
    var popoverContent = $(this).attr("data-content");

    $(popoverContent).toggleClass("is-shown");
    $(".popover").not(popoverContent).removeClass("is-shown");
});

$("#custom-prev-button").on( "click", function() {
    $("#contact-list_previous").trigger("click");
});

$("#custom-next-button").on( "click", function() {
    $("#contact-list_next").trigger("click");
});

$(document).click(function(event) {
    if(!$(event.target).closest("[data-toggle]").length) {
        $(".popover").removeClass("is-shown");
    };
});

$("#contact-action-checkbox-all").change(function() {
    if($(this).is(":checked")) {
        $("[id^='contact-action-checkbox-']").prop("checked", true);
    } else {
        $("[id^='contact-action-checkbox-']").prop("checked", false);
    }
});
