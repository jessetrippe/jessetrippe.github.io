
var menuToggle = document.getElementById('menu-toggle');
var navList = document.getElementById('nav-list');
var hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
var closeIcon = document.getElementById('close-icon');
var openWorkItem = document.getElementsByClassName("js-open-work-item");

menuToggle.onclick = function() {
  navList.classList.toggle('hidden');
  hamburgerMenuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

function getCurrentScrollPosition() {
	currentScrollPosition = $(window).scrollTop();
}

$("[data-toggle='work-item']").click(function() {
	var targetWorkItem = $(this).attr('data-target');
	
	if ( $(this).attr('id') !== 'close-work-item' ) {
		getCurrentScrollPosition();
	}

	$("html").toggleClass("has-modal-full-viewport");
	$(targetWorkItem).toggleClass("hidden");
	$("#work-item-container").toggleClass("hidden");

	$("#close-work-item").attr('data-target',targetWorkItem);

	if ( $(this).attr('id') == 'close-work-item' ) {
		$(window).scrollTop(currentScrollPosition);
	}
});

$("[data-toggle='work-item-jump']").click(function() {
	var targetWorkItem = $(this).attr('data-target');

	$("#close-work-item").attr('data-target',targetWorkItem);

	$(".js-work-item-container").addClass("hidden");
	$(window).scrollTop(0);
	$(targetWorkItem).removeClass("hidden");
});