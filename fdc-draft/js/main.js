$( ".remove-player" ).click(function() {
  $(this).closest("tr").toggleClass("removed");
  $('html, body').animate({
    scrollTop: $("tbody tr:not(.removed):first").offset().top
  }, 200);
});
