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
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/modules/webform/js/webform.states.js. */
(function(e,r){'use strict';var t=e(document);t.on('state:required',function(t){if(t.trigger){if(t.value){e(t.target).find('input[type="file"]').attr({'required':'required','aria-required':'aria-required'})}
else{e(t.target).find('input[type="file"]').removeAttr('required aria-required')}}});t.on('state:visible',function(t){if(t.trigger){if(t.value){e(':input',t.target).andSelf().each(function(){o(this);i(this)})}
else{e(':input',t.target).andSelf().each(function(){a(this);u(this);i(this)})}}});t.on('state:disabled',function(t){if(t.trigger){e(t.target).prop('disabled',t.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled',t.value).find('select, input, textarea').prop('disabled',t.value);e(t.target).trigger('webform:disabled').find('select, input, textarea').trigger('webform:disabled')}});function i(t){var i=e(t),r=t.type,a=t.tagName.toLowerCase();if(r==='checkbox'||r==='radio'){i.trigger('change').trigger('blur')}
else if(a==='select'){i.trigger('change').trigger('blur')}
else if(r!=='submit'&&r!=='button'){i.trigger('input').trigger('change').trigger('keydown').trigger('keyup').trigger('blur')}};function a(t){var r=e(t),i=t.type,o=t.tagName.toLowerCase();if(r.prop('required')){r.data('webform-require',!0)};if(i==='checkbox'||i==='radio'){r.data('webform-value',r.prop('checked'))}
else if(o==='select'){var a=[];r.find('option:selected').each(function(e,t){a[e]=t.value});r.data('webform-value',a)}
else if(i!='submit'&&i!='button'){r.data('webform-value',t.value)}};function o(t){var r=e(t),a=r.data('webform-value');if(typeof a!=='undefined'){var i=t.type,o=t.tagName.toLowerCase();if(i==='checkbox'||i==='radio'){r.prop('checked',a)}
else if(o==='select'){e.each(a,function(e,t){r.find('option[value=\''+t+'\']').prop('selected',!0)})}
else if(i!=='submit'&&i!=='button'){t.value=a}};if(r.data('webform-required')){r.prop('required',!0)}};function u(t){var i=e(t);if(i[0].hasAttribute('data-webform-states-no-clear')){return};var r=t.type,a=t.tagName.toLowerCase();if(r==='checkbox'||r==='radio'){i.prop('checked',!1)}
else if(a==='select'){if(i.find('option[value=""]').length){i.val('')}
else{t.selectedIndex=-1}}
else if(r!=='submit'&&r!='button'){t.value=(r==='color')?'#000000':''};i.prop('required',!1)}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/modules/webform/js/webform.states.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/modules/webform/js/webform.form.js. */
(function(t,e){'use strict';e.behaviors.webformAutofocus={attach:function(e){t(e).find('.webform-submission-form.js-webform-autofocus :input:visible:enabled:first').focus()}};e.behaviors.webformDisableAutoSubmit={attach:function(e){t(e).find('.webform-submission-form.js-webform-disable-autosubmit input').once('webform-disable-autosubmit').on('keyup keypress',function(t){var e=t.keyCode||t.which;if(e===13){t.preventDefault();return!1}})}};e.behaviors.webformSubmitNoValidate={attach:function(e){t(e).find(':submit.js-webform-novalidate').once('webform-novalidate').on('click',function(){t(this.form).attr('novalidate','novalidate')})}};e.behaviors.webformSubmitTrigger={attach:function(e){t('[data-webform-trigger-submit]').once('webform-trigger-submit').on('change',function(){var e=t(this).attr('data-webform-trigger-submit');t(e).mousedown()})}};e.behaviors.webformRequiredError={attach:function(e){t(e).find(':input[data-webform-required-error]').once('webform-required-error').on('invalid',function(){this.setCustomValidity('');if(!this.valid){this.setCustomValidity(t(this).attr('data-webform-required-error'))}}).on('input, change',function(){var e=t(this).attr('name');t(this.form).find(':input[name="'+e+'"]').each(function(){this.setCustomValidity('')})})}};e.behaviors.webformDraft={attach:function(e){t(e).find('#edit-draft').once('webform-draft').on('click',function(){t(this.form).attr('novalidate','novalidate')})}};e.behaviors.webformFilterByText={attach:function(e,o){var r=t('input.webform-form-filter-text').once('webform-form-filter-text'),n=t(r.attr('data-element')),i=n.closest('details'),a;function f(e){var o=t(e.target).val().toLowerCase();function r(e,r){var n=t(r),a=n.closest('tr'),f=n.text().toLowerCase().indexOf(o)!==-1;a.toggle(f);if(f&&i.length){a.closest('details').show()}};if(o.length>=2){if(i.length){i.hide()};a.each(r)}
else{a.each(function(e){t(this).closest('tr').show();if(i.length){i.show()}})}};if(n.length){a=n.find('div.webform-form-filter-text-source');r.on('keyup',f);if(r.val()){r.keyup()}}}};if(window.imceInput){window.imceInput.processUrlInput=function(t,e){var i=imceInput.createUrlButton(e.id,e.getAttribute('data-imce-type'));e.parentNode.insertAfter(i,e)}};t(document).on('drupalContextualLinkAdded',function(t,i){e.attachBehaviors(i.$el[0])})})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/modules/webform/js/webform.form.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/modules/webform/js/webform.element.details.toggle.js. */
(function(t,e){'use strict';e.behaviors.webformDetailsToggle={attach:function(l){t('.js-webform-details-toggle',l).once('webform-details-toggle').each(function(){var l=t(this),n=l.find('details').filter(function(){var e=t(this).parentsUntil('.js-webform-details-toggle');return(e.find('details').length===0)});if(n.length<2){return};n.first().before(t('<button type="button" class="link webform-details-toggle-state"></button>').attr('title',e.t('Toggle details widget state.')).on('click',function(n){var o;if(i(l)){l.find('details').removeAttr('open');o=0}
else{l.find('details').attr('open','open');o=1};a(l);if(e.webformDetailsSaveGetName){l.find('details').each(function(){var i=e.webformDetailsSaveGetName(t(this));if(i){localStorage.setItem(i,o)}})}}).wrap('<div class="webform-details-toggle-state-wrapper"></div>').parent());a(l)})}};function i(t){return(t.find('details[open]').length===t.find('details').length)};function a(t){var a=(i(t))?e.t('Collapse all'):e.t('Expand all');t.find('.webform-details-toggle-state').html(a)}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/modules/webform/js/webform.element.details.toggle.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.techforcampaigns.org/modules/webform/js/webform.element.details.save.js. */
(function(e,r){'use strict';r.behaviors.webformDetailsSave={attach:function(t){if(!window.localStorage){return};e('details > summary',t).once('webform-details-summary-save').click(function(){var a=e(this).parent(),t=r.webformDetailsSaveGetName(a);if(!t){return};var n=(a.attr('open')!=='open')?'1':'0';localStorage.setItem(t,n)});e('details',t).once('webform-details-save').each(function(){var t=e(this),n=r.webformDetailsSaveGetName(t);if(!n){return};var a=localStorage.getItem(n);if(a===null){return};if(a==='1'){t.attr('open','open')}
else{t.removeAttr('open')}})}};r.webformDetailsSaveGetName=function(e){if(!window.localStorage){return''};var n=e.attr('data-webform-element-id');if(n){return'Drupal.webform.'+n.replace('--','.')};var t=e.attr('id');if(!t){return''};var a=e.parents('form');if(!a.length||!a.attr('id')){return''};var r=a.attr('id');if(!r){return''};r=r.replace(/--.+?$/,'').replace(/-/g,'_');t=t.replace(/--.+?$/,'').replace(/-/g,'_');return'Drupal.webform.'+r+'.'+t}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.techforcampaigns.org/modules/webform/js/webform.element.details.save.js. */;
