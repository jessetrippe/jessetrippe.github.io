$( document ).ready(function() {
	$('.js-complete').click(function() {
		var currentMessage = $(this).closest('.js-message');

		$(this).addClass('dismiss_complete');
		currentMessage.addClass('collapse');
		currentMessage.addClass('collapse-collapsed');
	    currentMessage.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
	    function(e) {
	    	$(this).remove();
		});
	});
});