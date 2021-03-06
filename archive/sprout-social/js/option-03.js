$(function() {
    var $lastSelected = [],
        container     = $('.js-exoSubBucket.messages.messages-bucket'),
        collection    = container.find('.js-message'),        
        lastDirection;
 
    // Disable selection highlighting
    container.attr('unselectable', 'on').css({
        '-moz-user-select':'none',
        '-o-user-select':'none',
        '-khtml-user-select':'none',
        '-webkit-user-select':'none',
        '-ms-user-select':'none',
        'user-select':'none'
    });

    container.on('click', '.js-message',  function(e) {
        var that = $(this),
            $selected,
            direction;

        if (e.shiftKey){
 
            if ($lastSelected.length > 0) {
                
                if(that[0] == $lastSelected[0]) {
                    return false;
                }
                direction = that.nextAll('.lastSelected').length > 0 ? 'forward' : 'back';
 
                if (!lastDirection) {
                    lastDirection = direction;
                }
                
                if ('forward' == direction) {
                    // Last selected is after the current selection
                    $selected = that.nextUntil($lastSelected, '.js-message');
 
                } else {
                    // Last selected is before the current selection
                    $selected = $lastSelected.nextUntil(that, '.js-message');
                }

                $selected.addClass('message-selected');
                $lastSelected.addClass('message-selected');
                that.addClass('message-selected');
 
            } else {
                $lastSelected = that;
                that.addClass('lastSelected');
                that.addClass('message-selected');
            }
 
        } else {
            // Not a shift select, so we'll just mark the target item
            $lastSelected = that;
            collection.removeClass('lastSelected');
            that.addClass('lastSelected');
            that.toggleClass('message-selected');
            $('.js-selected-count').html($('.message-selected').length);
       }

       if ($('.message-selected').length > 0) {
            showBulkAside();
       } else {
            showStandardAside();
       }
    });
});

$('.js-deselect-bulk').click(function() {
	$('.message').removeClass('message-selected');
	showStandardAside();
});

$('.js-complete').click(function() {
    var currentMessage = $(this).closest('.js-message');

    $('header .passive_alert').show();
    $(this).addClass('dismiss_complete');
    $(this).closest('.js-message').addClass('collapse');
    $(this).closest('.js-message').addClass('collapse-collapsed');
    currentMessage.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {
        $(this).remove();

        if ($('.message-selected').length > 0) {
            showBulkAside();
        } else {
            showStandardAside();
            setTimeout(function() {
                $("header .passive_alert").hide()
            }, 4000);
            $('.js-selected-count').html($('.message-selected').length);
        }
    });
});

$('.js-select-all-bulk').click(function() {
    $('.message:not(.message-selected)').click();
});

$('.js-mark-complete').click(function() {
    $('.message-selected').find('.js-complete').click();
});

function showStandardAside(){
    $('.js-filters-section-mount').show();
    $('.js-smart-inbox-header').show();
    $('.js-bulk-actions-section').hide();
    $('.js-bulk-actions-header').hide();
}

function showBulkAside(){
    $('.js-filters-section-mount').hide();
    $('.js-smart-inbox-header').hide();
    $('.js-bulk-actions-section').show();
    $('.js-bulk-actions-header').show();
    $('.js-selected-count').html($('.message-selected').length);
}

function stopBubble(){
    event.stopPropagation();
}

$(".js-message a").click(stopBubble);
$(".js-message aside").click(stopBubble);
