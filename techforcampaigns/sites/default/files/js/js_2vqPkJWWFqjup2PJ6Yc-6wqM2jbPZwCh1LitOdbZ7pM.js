/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/js/global.js. */
(function(o,i){'use strict';i.behaviors.bootstrap_barrio={attach:function(i,s){o(window).scroll(function(){if(o(this).scrollTop()>50){o('body').addClass('scrolled')}
else{o('body').removeClass('scrolled')}});var t=function(o,i,s){var t=o.outerHeight(),e=s.offset().top;if(i.scrollTop()>=e){s.height(t);o.addClass('affix')}
else{o.removeClass('affix');s.height('auto')}};o('[data-toggle="affix"]').each(function(){var i=o(this),s=o('<div></div>');i.before(s);o(window).on('scroll resize',function(){t(i,o(this),s)});t(i,o(window),s)})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/js/global.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/js/affix.js. */
(function(i,o){'use strict';o.behaviors.bootstrap_barrio_affix={attach:function(o,t){var a=function(i,o,t){var a=i.outerHeight(),e=t.offset().top;if(o.scrollTop()>=e){t.height(a);i.addClass('affix')}
else{i.removeClass('affix');t.height('auto')}};i('[data-toggle="affix"]').each(function(){var o=i(this),t=i('<div></div>');o.before(t);i(window).on('scroll resize',function(){a(o,i(this),t)});a(o,i(window),t)})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/js/affix.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/subtheme/js/global.js. */
(function(e,t){'use strict';t.behaviors.bootstrap_barrio_subtheme={attach:function(e,t){}};var i=function(){var i=e('.homepage-banner');if(i.length){var t=e(document).width(),s=e('.container').first().width();i.css('width',t).css('margin-left',((t-s)/2*-1)+'px').css('opacity','1')}},s=function(){var i=e('.landing-page-background');if(i.length){var t=e(document).width(),s=e('.container').first().width();i.css('width',t).css('margin-left',((t-s)/2*-1)+'px').css('opacity','1')}},c=function(){if(e('.region-featured-top .alert').length>0){e('.region-featured-top').addClass('visible')}};e(document).ready(function(){i();s();c()});e(document).on('click','.view-frequently-asked-questions .views-row h4',function(t){var i=e(t.target).closest('.views-row');i.toggleClass('expanded')});e(window).resize(function(){i();s()});e('input[type="checkbox"]').on('click',function(){if(e(this).is(':checked')){e(this).closest('.js-form-type-checkbox').addClass('checked')}
else{e(this).closest('.js-form-type-checkbox').removeClass('checked')}})})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/themes/bootstrap_barrio/subtheme/js/global.js. */;
