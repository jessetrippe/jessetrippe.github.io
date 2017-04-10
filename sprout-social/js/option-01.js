$( document ).ready(function() {

	$(".bubble-meta .message-buttons").each(function() {
	  $(this).closest(".js-message").append(this);
	});

});