$( document ).ready(function() {
	$('.js-complete').click(function() {
		$(this).addClass('dismiss_complete');
		$(this).closest('.js-message').addClass('collapse');
		$(this).closest('.js-message').addClass('collapse-collapsed');
	});
});