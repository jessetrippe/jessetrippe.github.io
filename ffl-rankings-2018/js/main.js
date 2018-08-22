$( document ).ready(function() {

  $('#rank-list tbody tr').each(function( index, value ) {

    var rank = index + 1;
    $(this).find(".avg").html("<span class='rk-circle'><span class='ranking'>" + rank + "</span></span>");

  });

  $('#rank-list').DataTable( {
    language: {
      search: "",
      searchPlaceholder: "Search players"
    },
    paging: false,
    "order": [6, 'asc'],
    info: false
  });

  var stickySearchHeight = $(".dataTables_filter").outerHeight();
  $("#rank-list").css("top", stickySearchHeight);

  $("input[type='checkbox']").change( function(){

    if ($(this).closest("tr").hasClass("player-taken")) {
      $(this).closest("tr").removeClass("player-taken")
    } else {
      $(this).closest("tr").addClass("player-taken");
    };

    firstNotTaken = $("#rank-list tbody tr:not(.player-taken)").first();
    stickySearchHeight = $(".dataTables_filter").outerHeight();
    scrollTo = parseInt(firstNotTaken.offset().top - stickySearchHeight + 1);

    $('html, body').stop().animate({ scrollTop: scrollTo }, 250);

  });


});
