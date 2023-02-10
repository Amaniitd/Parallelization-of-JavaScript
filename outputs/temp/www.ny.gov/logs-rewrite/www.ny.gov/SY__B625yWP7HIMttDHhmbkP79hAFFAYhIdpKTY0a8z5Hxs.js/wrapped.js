/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/themes/ny_gov/js/ny-gov-global.js. */
(function __HORCRUX__(){ (function($){var jQuery=$;window.NY=typeof window.NY==='undefined'?{}:window.NY;window.NY.GLOBAL_BASE={body:null,isNYGovTheme:false,GOOGLE_API_KEY:'',GOOGLE_CLIENT_ID:'gme-officefortechnology',loggedIn:false,viewportHeight:0,viewportWidth:0,documentHeight:0,documentWidth:0,mobileBp:480,tabletBp:768,isTablet:false,isMobile:false,isDesktop:false,init:function(){this.body=$('body');this.setViewportHeight();this.setViewportWidth();this.setDeviceType();this.onResize();this.onLoad()},setDeviceType:function(){if(this.viewportWidth>=this.tabletBp){this.body.removeClass('is-tablet');this.body.removeClass('is-mobile');this.isDesktop=true;this.isTablet=false;this.isMobile=false};if(this.viewportWidth<this.tabletBp&&this.viewportWidth>=this.mobileBp){this.body.addClass('is-tablet');this.body.removeClass('is-mobile');this.isDesktop=false;this.isTablet=true;this.isMobile=false};if(this.viewportWidth<this.mobileBp){this.body.addClass('is-mobile');this.body.removeClass('is-tablet');this.isDesktop=false;this.isTablet=false;this.isMobile=true}},onResize:function(){var updateLayout=window._.debounce(function(e){this.setViewportHeight();this.setViewportWidth();this.setDocumentHeight();this.setDeviceType();window.NY.Nav.onResize()}.bind(this),100);$(window).resize(updateLayout)},onLoad:function(){$(window.document).ready(function(){this.setDocumentHeight();window.NY.Nav.onLoad();window.NY.Services.onLoad()}.bind(this))},setViewportHeight:function(){var height=Math.max(window.document.documentElement.clientHeight,window.innerHeight||0);if(this.loggedIn)height-=29;this.viewportHeight=height},setViewportWidth:function(){var width=Math.max(window.document.documentElement.clientWidth,window.innerWidth||0);this.viewportWidth=width},setDocumentHeight:function(){var body=window.document.body,html=window.document.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);this.documentHeight=height}}})(window.$182||window.$||window.jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/themes/ny_gov/js/ny-gov-global.js. */
/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/contrib/webform/js/webform.js. */
(function($){"use strict";window.Drupal.behaviors.webform=window.Drupal.behaviors.webform||{};window.Drupal.behaviors.webform.attach=function(context){window.Drupal.webform.datepicker(context);if(window.Drupal.settings.webform&&window.Drupal.settings.webform.conditionals)window.Drupal.webform.conditional(context)};window.Drupal.webform=window.Drupal.webform||{};window.Drupal.webform.datepicker=function(context){$('div.webform-datepicker').each(function(){var $webformDatepicker=$(this),$calendar=$webformDatepicker.find('input.webform-calendar');if($calendar.length==0)return;var startDate=$calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/,'$1').split('-'),endDate=$calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/,'$1').split('-'),firstDay=$calendar[0].className.replace(/.*webform-calendar-day-(\d).*/,'$1');startDate=new Date(startDate[0],startDate[1]-1,startDate[2]);endDate=new Date(endDate[0],endDate[1]-1,endDate[2]);if(startDate>endDate){var laterDate=startDate;startDate=endDate;endDate=laterDate};var startYear=startDate.getFullYear(),endYear=endDate.getFullYear();$calendar.datepicker({dateFormat:'yy-mm-dd',yearRange:startYear+':'+endYear,firstDay:window.parseInt(firstDay),minDate:startDate,maxDate:endDate,onSelect:function(dateText,inst){var date=dateText.split('-');$webformDatepicker.find('select.year, input.year').val(+date[0]).trigger('change');$webformDatepicker.find('select.month').val(+date[1]).trigger('change');$webformDatepicker.find('select.day').val(+date[2]).trigger('change')},beforeShow:function(input,inst){var year=$webformDatepicker.find('select.year, input.year').val(),month=$webformDatepicker.find('select.month').val(),day=$webformDatepicker.find('select.day').val(),today=new Date();year=year?year:today.getFullYear();month=month?month:today.getMonth()+1;day=day?day:today.getDate();year=(year<startYear||year>endYear)?startYear:year;$(input).val(year+'-'+month+'-'+day)}});$calendar.click(function(event){if(event.clientX!==0&&event.clientY!==0){$(this).focus();event.preventDefault()}});$calendar.keyup(function(e){if(e.keyCode==8||e.keyCode==46)$.datepicker._clearDate(this)})})};window.Drupal.webform.conditional=function(context){$.each(window.Drupal.settings.webform.conditionals,function(formKey,settings){var $form=$('.'+formKey+':not(.webform-conditional-processed)');$form.each(function(index,currentForm){var $currentForm=$(currentForm);$currentForm.addClass('webform-conditional-processed');$currentForm.bind('change',{settings:settings},window.Drupal.webform.conditionalCheck);window.Drupal.webform.doConditions($currentForm,settings)})})};window.Drupal.webform.conditionalCheck=function(e){var $triggerElement=$(e.target).closest('.webform-component');if(!$triggerElement.length)return;var $form=$triggerElement.closest('form'),triggerElementKey=$triggerElement.attr('class').match(/webform-component--[^ ]+/)[0],settings=e.data.settings;if(settings.sourceMap[triggerElementKey])window.Drupal.webform.doConditions($form,settings)};window.Drupal.webform.doConditions=function($form,settings){var stackPointer,resultStack
function executionStackInitialize(andor){stackPointer=-1;resultStack=[];executionStackPush(andor)}
function executionStackPush(andor){resultStack[++stackPointer]={results:[],andor:andor}}
function executionStackAccumulate(result){resultStack[stackPointer]['results'].push(result)}
function executionStackPop(){var stackFrame=resultStack[stackPointer];stackPointer=Math.max(0,stackPointer-1);var $conditionalResults=stackFrame.results,filteredResults=$.map($conditionalResults,function(val){return val?val:null});return stackFrame.andor==='or'?filteredResults.length>0:filteredResults.length===$conditionalResults.length};$.each(settings.ruleGroups,function(rgid_key,rule_group){var ruleGroup=settings.ruleGroups[rgid_key];executionStackInitialize(ruleGroup.andor);$.each(ruleGroup.rules,function(m,rule){switch(rule.source_type){case'component':var elementKey=rule.source,element=$form.find('.'+elementKey)[0],existingValue=settings.values[elementKey]?settings.values[elementKey]:null;executionStackAccumulate(window.Drupal['webform'][rule.callback](element,existingValue,rule.value));break;case'conditional_start':executionStackPush(rule.andor);break;case'conditional_end':executionStackAccumulate(executionStackPop());break}});var conditionalResult=executionStackPop();$.each(ruleGroup.actions,function(aid,action){var $target=$form.find('.'+action.target),actionResult=action.invert?!conditionalResult:conditionalResult;switch(action.action){case'show':var changed=actionResult!=window.Drupal.webform.isVisible($target);if(actionResult){$target.find('.webform-conditional-disabled:not(.webform-disabled-flag)').removeClass('webform-conditional-disabled').webformProp('disabled',false);$target.removeClass('webform-conditional-hidden').show();$form.find('.chosen-disabled').prev().trigger('chosen:updated.chosen')}else $target.hide().addClass('webform-conditional-hidden').find(':input').addClass('webform-conditional-disabled webform-disabled-flag').webformProp('disabled',true);if(changed&&$target.is('tr'))window.Drupal.webform.restripeTable($target.closest('table').first());break;case'require':var $requiredSpan=$target.find('.form-required, .form-optional').first();if(actionResult!=$requiredSpan.hasClass('form-required')){var $targetInputElements=$target.find("input:text,textarea,input[type='email'],select,input:radio,input:checkbox,input:file");window.Drupal.detachBehaviors($requiredSpan);$targetInputElements.webformProp('required',actionResult).toggleClass('required',actionResult);if(actionResult){$requiredSpan.replaceWith('<span class="form-required" title="'+window.Drupal.t('This field is required.')+'">*</span>')}else $requiredSpan.replaceWith('<span class="form-optional"></span>');window.Drupal.attachBehaviors($requiredSpan)};break;case'set':var $texts=$target.find("input:text,textarea,input[type='email']"),$selects=$target.find('select,select option,input:radio,input:checkbox'),$markups=$target.filter('.webform-component-markup');if(actionResult){var multiple=$.map(action.argument.split(','),$.trim);$selects.webformVal(multiple).webformProp('disabled',true).addClass('webform-disabled-flag');$texts.val([action.argument]).webformProp('readonly',true).addClass('webform-disabled-flag');$markups.html(action.argument)}else{$selects.not('.webform-disabled-flag').webformProp('disabled',false);$texts.not('.webform-disabled-flag').webformProp('readonly',false);$markups.each(function(){var $this=$(this),original=$this.data('webform-markup');if(original!==window.undefined)$this.html(original)})};break}})});$form.find('.webform-disabled-flag').removeClass('webform-disabled-flag')};window.Drupal.webform.stopEvent=function(){return false};window.Drupal.webform.conditionalOperatorStringEqual=function(element,existingValue,ruleValue){var returnValue=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase()===ruleValue.toLowerCase()){returnValue=true;return false}});return returnValue};window.Drupal.webform.conditionalOperatorStringNotEqual=function(element,existingValue,ruleValue){var found=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase()===ruleValue.toLowerCase())found=true});return!found};window.Drupal.webform.conditionalOperatorStringContains=function(element,existingValue,ruleValue){var returnValue=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase().indexOf(ruleValue.toLowerCase())>-1){returnValue=true;return false}});return returnValue};window.Drupal.webform.conditionalOperatorStringDoesNotContain=function(element,existingValue,ruleValue){var found=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase().indexOf(ruleValue.toLowerCase())>-1)found=true});return!found};window.Drupal.webform.conditionalOperatorStringBeginsWith=function(element,existingValue,ruleValue){var returnValue=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase().indexOf(ruleValue.toLowerCase())===0){returnValue=true;return false}});return returnValue};window.Drupal.webform.conditionalOperatorStringEndsWith=function(element,existingValue,ruleValue){var returnValue=false,currentValue=window.Drupal.webform.stringValue(element,existingValue);$.each(currentValue,function(n,value){if(value.toLowerCase().lastIndexOf(ruleValue.toLowerCase())===value.length-ruleValue.length){returnValue=true;return false}});return returnValue};window.Drupal.webform.conditionalOperatorStringEmpty=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue),returnValue=true;$.each(currentValue,function(n,value){if(value!==''){returnValue=false;return false}});return returnValue};window.Drupal.webform.conditionalOperatorStringNotEmpty=function(element,existingValue,ruleValue){return!window.Drupal.webform.conditionalOperatorStringEmpty(element,existingValue,ruleValue)};window.Drupal.webform.conditionalOperatorSelectGreaterThan=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue);return window.Drupal.webform.compare_select(currentValue[0],ruleValue,element)>0};window.Drupal.webform.conditionalOperatorSelectGreaterThanEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue),comparison=window.Drupal.webform.compare_select(currentValue[0],ruleValue,element);return comparison>0||comparison===0};window.Drupal.webform.conditionalOperatorSelectLessThan=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue);return window.Drupal.webform.compare_select(currentValue[0],ruleValue,element)<0};window.Drupal.webform.conditionalOperatorSelectLessThanEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue),comparison=window.Drupal.webform.compare_select(currentValue[0],ruleValue,element);return comparison<0||comparison===0};window.Drupal.webform.conditionalOperatorNumericEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue),epsilon=0.000001;return currentValue[0]===''?false:(Math.abs(window.parseFloat(currentValue[0])-window.parseFloat(ruleValue))<epsilon)};window.Drupal.webform.conditionalOperatorNumericNotEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue),epsilon=0.000001;return currentValue[0]===''?true:(Math.abs(window.parseFloat(currentValue[0])-window.parseFloat(ruleValue))>=epsilon)};window.Drupal.webform.conditionalOperatorNumericGreaterThan=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue);return window.parseFloat(currentValue[0])>window.parseFloat(ruleValue)};window.Drupal.webform.conditionalOperatorNumericGreaterThanEqual=function(element,existingValue,ruleValue){return window.Drupal.webform.conditionalOperatorNumericGreaterThan(element,existingValue,ruleValue)||window.Drupal.webform.conditionalOperatorNumericEqual(element,existingValue,ruleValue)};window.Drupal.webform.conditionalOperatorNumericLessThan=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.stringValue(element,existingValue);return window.parseFloat(currentValue[0])<window.parseFloat(ruleValue)};window.Drupal.webform.conditionalOperatorNumericLessThanEqual=function(element,existingValue,ruleValue){return window.Drupal.webform.conditionalOperatorNumericLessThan(element,existingValue,ruleValue)||window.Drupal.webform.conditionalOperatorNumericEqual(element,existingValue,ruleValue)};window.Drupal.webform.conditionalOperatorDateEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.dateValue(element,existingValue);return currentValue===ruleValue};window.Drupal.webform.conditionalOperatorDateNotEqual=function(element,existingValue,ruleValue){return!window.Drupal.webform.conditionalOperatorDateEqual(element,existingValue,ruleValue)};window.Drupal.webform.conditionalOperatorDateBefore=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.dateValue(element,existingValue);return(currentValue!==false)&&currentValue<ruleValue};window.Drupal.webform.conditionalOperatorDateBeforeEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.dateValue(element,existingValue);return(currentValue!==false)&&(currentValue<ruleValue||currentValue===ruleValue)};window.Drupal.webform.conditionalOperatorDateAfter=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.dateValue(element,existingValue);return(currentValue!==false)&&currentValue>ruleValue};window.Drupal.webform.conditionalOperatorDateAfterEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.dateValue(element,existingValue);return(currentValue!==false)&&(currentValue>ruleValue||currentValue===ruleValue)};window.Drupal.webform.conditionalOperatorTimeEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.timeValue(element,existingValue);return currentValue===ruleValue};window.Drupal.webform.conditionalOperatorTimeNotEqual=function(element,existingValue,ruleValue){return!window.Drupal.webform.conditionalOperatorTimeEqual(element,existingValue,ruleValue)};window.Drupal.webform.conditionalOperatorTimeBefore=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.timeValue(element,existingValue);return(currentValue!==false)&&(currentValue<ruleValue)};window.Drupal.webform.conditionalOperatorTimeBeforeEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.timeValue(element,existingValue);return(currentValue!==false)&&(currentValue<ruleValue||currentValue===ruleValue)};window.Drupal.webform.conditionalOperatorTimeAfter=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.timeValue(element,existingValue);return(currentValue!==false)&&(currentValue>ruleValue)};window.Drupal.webform.conditionalOperatorTimeAfterEqual=function(element,existingValue,ruleValue){var currentValue=window.Drupal.webform.timeValue(element,existingValue);return(currentValue!==false)&&(currentValue>ruleValue||currentValue===ruleValue)};window.Drupal.webform.compare_select=function(a,b,element){var optionList=[];$('option,input:radio,input:checkbox',element).each(function(){optionList.push($(this).val())});var a_position=optionList.indexOf(a),b_position=optionList.indexOf(b);return(a_position<0||b_position<0)?null:a_position-b_position};window.Drupal.webform.isVisible=function($element){return $element.hasClass('webform-component-hidden')?!$element.find('input').first().hasClass('webform-conditional-disabled'):$element.closest('.webform-conditional-hidden').length==0};window.Drupal.webform.stringValue=function(element,existingValue){var value=[];if(element){var $element=$(element);if(window.Drupal.webform.isVisible($element)){$element.find('input[type=checkbox]:checked,input[type=radio]:checked').each(function(){value.push(this.value)});if(!value.length){var selectValue=$element.find('select').val();if(selectValue)if($.isArray(selectValue)){value=selectValue}else value.push(selectValue)};if(!value.length)$element.find('input:not([type=checkbox],[type=radio]),textarea').each(function(){value.push(this.value)})}}else switch($.type(existingValue)){case'array':value=existingValue;break;case'string':value.push(existingValue);break};return value};window.Drupal.webform.dateValue=function(element,existingValue){var value=false;if(element){var $element=$(element);if(window.Drupal.webform.isVisible($element)){var day=$element.find('[name*=day]').val(),month=$element.find('[name*=month]').val(),year=$element.find('[name*=year]').val();if(month)month--;if(year!==''&&month!==''&&day!=='')value=Date.UTC(year,month,day)/1e3}}else{if($.type(existingValue)==='array'&&existingValue.length)existingValue=existingValue[0];if($.type(existingValue)==='string')existingValue=existingValue.split('-');if(existingValue.length===3)value=Date.UTC(existingValue[0],existingValue[1],existingValue[2])/1e3};return value};window.Drupal.webform.timeValue=function(element,existingValue){var value=false;if(element){var $element=$(element);if(window.Drupal.webform.isVisible($element)){var hour=$element.find('[name*=hour]').val(),minute=$element.find('[name*=minute]').val(),ampm=$element.find('[name*=ampm]:checked').val();hour=(hour==='')?hour:window.parseInt(hour);minute=(minute==='')?minute:window.parseInt(minute);if(hour!==''){hour=(hour<12&&ampm=='pm')?hour+12:hour;hour=(hour===12&&ampm=='am')?0:hour};if(hour!==''&&minute!=='')value=Date.UTC(1970,0,1,hour,minute)/1e3}}else{if($.type(existingValue)==='array'&&existingValue.length)existingValue=existingValue[0];if($.type(existingValue)==='string')existingValue=existingValue.split(':');if(existingValue.length>=2)value=Date.UTC(1970,0,1,existingValue[0],existingValue[1])/1e3};return value};$.fn.webformProp=$.fn.webformProp||function(name,value){if(value){return $.fn.prop?this.prop(name,true):this.attr(name,true)}else return $.fn.prop?this.prop(name,false):this.removeAttr(name)};$.fn.webformVal=function(values){this.each(function(){var $this=$(this),value=$this.val(),on=$.inArray($this.val(),values)!=-1;if(this.nodeName=='OPTION'){$this.webformProp('selected',on?value:false)}else $this.val(on?[value]:false)});return this};window.Drupal.webform.restripeTable=function(table){$('> tbody > tr, > tr',table).filter(':visible:odd').filter('.odd').removeClass('odd').addClass('even').end().end().filter(':visible:even').filter('.even').removeClass('even').addClass('odd')}})(window.jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/contrib/webform/js/webform.js. */
/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/custom/features/basic_configuration_settings/js/basic_configuration.js. */
(function($){window.Drupal.behaviors.exitPages={attach:function(context,settings){window.jQuery(window).on('load',function(){if(window.location.hash=='#exit-modal')window.location.hash=''});window.jQuery(window.document).bind('cssmodal:show',function(e){window.jQuery('.modal-content-wrapper').show().css('max-height',window.innerHeight*.9)});window.jQuery(window.document).bind('cssmodal:hide',function(){window.jQuery('.modal-content-wrapper').hide();window.jQuery('.modal-content-wrapper a.button').attr('href','#')});window.jQuery(".l-content a[href^='http']").on('click',function(evt){var href=window.jQuery(evt.currentTarget).attr('href'),target=window.jQuery(evt.currentTarget).attr('target'),ext_re=/https?:\/\/.*(\.ny\.gov|\.acquia-sites\.com|\.codeandtheory\.net|youtube\.com|iloveny\.com|youtu\.be|facebook\.com|twitter\.com|vine\.co|instagram\.com|flickr\.com).*/i;window.jQuery('.modal-content-wrapper a.button').attr('href',href);if(typeof target!==typeof window.undefined&&target!==false)window.jQuery('.modal-content-wrapper a.button').attr('target',target);if(!ext_re.test(href)){evt.preventDefault();window.location.hash='exit-modal'}});window.jQuery('.modal-content-wrapper a.button').on('click',function(e){e.preventDefault();window.location.hash='';if(window.jQuery(this).attr('target')==='_blank'){window.open(window.jQuery(this).attr('href'))}else window.location.href=window.jQuery(this).attr('href')});$=window.jQuery;$('.share-on-twitter').on('click',function(){window.open($(this).attr('href'),'mywindow','width=400,height=500');return false});$('.share-on-facebook').on('click',function(){window.open($(this).attr('href'),'mywindow','width=400,height=500');return false});$('.share').on('click',function(event){var classClicked=event.toElement.classList[1];if(classClicked==='no-link')if(!$(this).parent().hasClass('actions')){event.preventDefault();if($(this).prev().css('width')=='0px'){$(this).prev().animate({width:'71%'},500)}else $(this).prev().animate({width:'0'},500)}});$('.read-more .watch-video').on('click',function(){$(this).parents('.views-row').find('.video-wrapper').show();if($('body').hasClass('is-mobile'))$(window).scrollTop($(this).parents('.views-row').find('.video-wrapper').offset().top)});$('.read-more .liveflag').on('click',function(){$(this).parents('.views-row').find('.video-wrapper').show();if($('body').hasClass('is-mobile'))$(window).scrollTop($(this).parents('.views-row').find('.video-wrapper').offset().top)});$('.close-video, .nygov-custom-node-layout header .close-video').on('click',function(){$(this).parent().hide()});$('.nygov-custom-node-layout header .watch-video').on('click',function(){$(this).parent().find('.video-wrapper').show()});if($('#videoplayer').length>0){var srcurl=$('#videoplayer iframe').attr('src'),iframeheight=$('#videoplayer').height(),iframewidth=$('.video-wrapper').width();if(iframewidth>920)iframewidth=920;$('#videoplayer iframe').attr('src',srcurl+'&height='+iframeheight+'&width='+iframewidth);$('.video-wrapper.brightcove').parent().find('#watch-video, #liveflag-video').on('click',function(e){e.preventDefault();var playerAutoStart=false;if(window.innerWidth>1024){var srcurl=$('#videoplayer iframe').attr('src'),iframeheight=$('#videoplayer').height(),iframewidth=$('.video-wrapper').width();playerAutoStart=true;if(iframewidth>920)iframewidth=920;var videoUrl=srcurl.replace(/(height=)[^\&]+/,'$1'+iframeheight);videoUrl=videoUrl.replace(/(width=)[^\&]+/,'$1'+iframewidth);if(playerAutoStart)videoUrl=videoUrl+'&autoplay';$('#videoplayer iframe').attr('src',videoUrl)}})};if($('body').hasClass('page-node'))$('.chapter .field-item.documents ul').each(function(n){if($(this).find('li:first').hasClass('file'))$(this).addClass('file')})}};window.Drupal.behaviors.onestopRSSsection={attach:function(context,settings){$.each($('.rss-section-content'),function(idx,itm){var res_list=$('.rss-section-items',itm),feed_url=$(res_list).data('rss-url'),feed_id=$(res_list).data('rss-id'),tok=$(res_list).data('token'),nid=$(res_list).data('nid');$.ajax({type:'POST',url:'/ajax/onestop-rss-chapter',data:{rss_url:window.decodeURIComponent(feed_url),token:tok,nid:nid},success:function(data,status,xhr){if(data.feed.items.length>0)$('#rss-'+feed_id).append(window.Drupal.theme('onestopRSSSection',data.feed))}})})}}})(window.jQuery);window.Drupal.theme.prototype.onestopRSSSection=function(feed){var out='<li>'+feed.title+'</li>';window.jQuery.each(feed.items,function(idx,itm){var itm_data='<li><p>';itm_data+='<a target="_blank" href="'+itm.link+'">'+itm.title+'</a><span>';if(itm.authors)itm_data+=itm.authors;itm_data+=' * <span>'+itm.pub_date+"</span></span>";itm_data+='</p></li>';out+=itm_data});return out};
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/custom/features/basic_configuration_settings/js/basic_configuration.js. */
/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/contrib/scald_file/scald_file.js. */
(function($){window.Drupal.behaviors.scaldFile={attach:function(context,settings){$('body').once('scald-file',function(){if(typeof window.CKEDITOR!=='undefined')window.CKEDITOR.on('instanceReady',function(ev){window.CKEDITOR.instances[ev.editor.name].document.appendStyleSheet(window.Drupal.settings.basePath+settings.scaldFile.path)})})}}})(window.jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/contrib/scald_file/scald_file.js. */
/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/contrib/scald/modules/providers/scald_image/scald_image.js. */
(function($){window.Drupal.behaviors.scaldImage={attach:function(context,settings){if(typeof window.Drupal.dndck4!=='undefined')window.Drupal.dndck4.addOption('txtLink','image','atom','scald_image',function(infoTab,dialogDefinition){infoTab.add({id:'txtLink',type:'text',label:'Link',setup:function(widget){var options=JSON.parse(widget.data.options);if(options.link)this.setValue(window.decodeURIComponent(options.link))},commit:function(widget){var options=JSON.parse(widget.data.options),value=this.getValue();if(value!=''){options.link=window.encodeURIComponent(value)}else delete options.link;widget.setData('options',JSON.stringify(options))}})})}}})(window.jQuery);; })();
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/contrib/scald/modules/providers/scald_image/scald_image.js. */
