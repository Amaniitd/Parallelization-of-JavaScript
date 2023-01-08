;/*FB_PKG_DELIM*/

(function __HORCRUX__(){ window.__d("BUISwitch.react",["cx","fbt","BUIComponent","Event","Keys","prop-types","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$BUISwitch1=function(a){if(d.props.disabled)return;d.props.onToggle&&d.props.onToggle(!d.props.value);d.props.preventEventBubbling&&a.stopPropagation()},d.$BUISwitch2=function(a){if(d.props.disabled)return;var b=c("Event").getKeyCode(a);(b===c("Keys").RETURN||b===c("Keys").SPACE)&&(a.preventDefault(),d.props.onToggle&&d.props.onToggle(!d.props.value),d.props.preventEventBubbling&&a.stopPropagation())},d.$BUISwitch3=function(a){a.preventDefault()},b)||window.babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.render=function(){return j.jsxs("div",window.babelHelpers["extends"]({},this.props,{className:"_128j"+(this.props.value?" _128k":"")+(this.props.value?"":" _128l")+(this.props.disabled?" _128m":"")+(this.props.animate?" _128n":"")+(this.props.inline?" _3n6a":""),children:[j.jsx("div",{"aria-checked":this.props.value?"true":"false",className:"_128o",onClick:this.$BUISwitch1,onKeyDown:this.$BUISwitch2,onMouseDown:this.$BUISwitch3,role:"switch",tabIndex:this.props.disabled?"-1":"0",children:j.jsx("div",{className:"_128p"})}),this.$BUISwitch4()]}))};d.$BUISwitch4=function(){return!this.props.showLabel?null:j.jsx("span",{className:"_128q",children:this.props.value?i._("ON"):i._("OFF")})};return b}(c("BUIComponent"));a.propTypes={animate:c("prop-types").bool.isRequired,disabled:c("prop-types").bool,onToggle:c("prop-types").func,showLabel:c("prop-types").bool,value:c("prop-types").bool.isRequired,preventEventBubbling:c("prop-types").bool,inline:c("prop-types").bool};a.defaultProps={animate:!0};g["default"]=a}),98);
window.__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h,i){var j=d("react");a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=j.jsx(c("Image.react"),{src:i("101373")});a={button:j.jsx(c("Button.react"),window.babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return j.jsx(c("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};return b}(j.Component);a.propTypes={haschevron:c("prop-types").bool,label:c("prop-types").node,labelIsHidden:c("prop-types").bool,maxwidth:c("prop-types").number};g["default"]=a}),98);
window.__d("Selector.react",["AbstractSelector.react","PopoverButton.react","ReactMenu","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a={button:h.jsx(c("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:h.jsx(c("ReactMenu").SelectableMenu,{})};return h.jsx(c("AbstractSelector.react"),window.babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a,children:this.props.children}))};return b}(h.Component);a.Option=c("ReactMenu").SelectableItem;g["default"]=a}),98);
window.__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
window.__d("VideoSettingsMenu.react",["cx","fbt","ix","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","CurrentEnvironment","Image.react","Layout.react","Link.react","MessengerEnvironment","Selector.react","URI","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","isFacebookURI","prop-types","react","shallowCompare"],(function(a,b,c,d,e,f,g,h,i,j){var k=d("react"),l=/(instagram)/g;function m(a){return{currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1}}a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state=m(c.props),b)||window.babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.shouldComponentUpdate=function(a,b){return c("shallowCompare")(this,a,b)};d.createMenuItem=function(a,b,c,d,e,f){f===void 0&&(f=!1);var g=function(){};b&&(g=function(a){d(),a.preventDefault()});var h="_2iw4"+(b?"":" _4t7o"),i;if(e==="checkBox"){var j=null;b&&c&&(j=k.jsx("div",{className:"_2iw1"}));i=k.jsx("div",{className:"_2iw3",children:j})}else if(e==="radioButton"){j=null;b&&c&&(j=k.jsx("div",{className:"_4t7r"}));i=k.jsx("div",{className:"_4t7u",children:j})}j=a;f&&(j=k.jsxs("div",{children:[a.toString().slice(0,-1),k.jsx("div",{className:"_4t7w"})]}));return k.jsxs("a",{href:"#",className:h,onClick:g,tabIndex:this.props.tabIndex,"aria-checked":c?"true":"false",role:e==="radioButton"?"radio":"checkbox","aria-disabled":!b,children:[i,k.jsx("div",{className:"_2iw5"+(c?"":" _4t8e"),children:j})]},a)};d.$1=function(){var a=this.props,b=a.hasCaptions,d=a.areCaptionsActive;a=a.areCaptionsAutogenerated;if(!b)return null;b=i._("Captions");var e="_1x4f";a&&(b=i._("Auto-Generated Captions"),e="_1x4f _6m2q");return k.jsxs(c("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e",children:[k.jsx(c("Layout.react").FillColumn,{children:b}),k.jsx(c("Layout.react").Column,{children:k.jsx("div",{className:e,children:k.jsx(c("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleCaptions,tabIndex:this.props.tabIndex})})})]})};d.showQualitySelector=function(){return this.props.showQualitySelector===!0&&this.props.streamingFormat==="dash"&&this.props.availableQualities!=null&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};d.$2=function(){var a=this;return k.jsx(c("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return a.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})},children:k.jsx(c("Image.react"),{className:"_4t8f",src:j("480579")})})};d.$3=function(){var a=i._("More Video Settings"),b=new(c("URI"))("/settings/?tab=videos"),d=b.getQualifiedURI().getSubdomain();(d==="business"||d==="partners"||d==="developers"||d==="ai"||d==="sparkar"||d==="portal")&&b.setSubdomain("www");c("isFacebookURI")(b)||b.setDomain(b.getDomain().replace(l,"facebook"));c("MessengerEnvironment").messengerui&&b.setDomain(c("CurrentEnvironment").workplacedotcom?"workplace.com":"facebook.com").setSubdomain(d).setProtocol("https");return k.jsx("a",{href:b,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex,children:a})};d.$4=function(){var a=this;return k.jsxs(c("Selector.react"),{name:"feedback_selector",onChange:function(b){a.setState({currentFeedbackSelected:b.value?b.value:null})},defaultValue:0,children:[k.jsx(c("Selector.react").Option,{value:0,children:i._("What's wrong with this video?")}),k.jsx(c("Selector.react").Option,{value:"audio_video_sync",children:i._("Video and audio are out of sync")}),k.jsx(c("Selector.react").Option,{value:"video_only_stutter",children:i._("Video is choppy")}),k.jsx(c("Selector.react").Option,{value:"audio_video_stutter",children:i._("Video and audio are choppy")}),k.jsx(c("Selector.react").Option,{value:"black_screen",children:i._("Screen is black")}),k.jsx(c("Selector.react").Option,{value:"video_wont_play",children:i._("Video won't play")})]})};d.$5=function(){if(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""){var a=c("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(c("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});c("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};d.render=function(){var a=this,b=null,d=null,e=null,f=null,g=this.props.availableQualities;this.showQualitySelector()&&g!=null?(b=g.map(function(b){return a.createMenuItem(b,!0,b===a.props.preferredQuality,function(){var c=a.props.onSelectQuality;c&&c(b)},"radioButton",a.props.isSphericalVideo)}),b.push(this.createMenuItem(i._("Auto"),this.props.canAutoSelectVideoQuality===!0,this.props.preferredQuality===null,function(){var b=a.props.onSelectQuality;b&&b(null)},"radioButton")),b.reverse(),d=k.jsx(c("ClickableAreaButton.react"),{onClick:function(){return a.setState({currentMenuContext:"quality"})},label:"Change Quality",children:k.jsx("div",{"data-testid":void 0,className:"_2iw4 _4t9t",children:k.jsxs(c("Layout.react"),{children:[k.jsx(c("Layout.react").FillColumn,{children:i._("Quality")}),k.jsxs(c("Layout.react").Column,{className:"_4t9u",children:[this.props.preferredQuality===null?k.jsxs(k.Fragment,{children:[i._("Auto"),this.props.selectedQuality!=null?k.jsxs(k.Fragment,{children:[" ",k.jsx("span",{children:this.props.selectedQuality})]}):null]}):k.jsx("span",{children:this.props.preferredQuality}),k.jsx(c("Image.react"),{className:"_4t9v",src:j("480587")})]})]})})})):f=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");e=k.jsx(c("Link.react"),{onClick:function(){return a.setState({currentMenuContext:"feedback"})},className:"_2iw4 _4t9w",children:k.jsxs(c("Layout.react"),{children:[k.jsx(c("Layout.react").FillColumn,{children:i._("Report Video Issue")}),k.jsx(c("Layout.react").Column,{className:"_4t9u",children:k.jsx(c("Image.react"),{className:"_4t9v",src:j("480587")})})]})});g=null;switch(this.state.currentMenuContext){case"main":g=k.jsxs("div",{className:"_2i_x",children:[f,this.$1(),d,this.$3(),e]});break;case"quality":g=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._("Quality")]}),k.jsx("div",{"data-testid":void 0,className:"_4t9z",role:"radiogroup",children:b})]});break;case"feedback":g=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._("Report Video Issue")]}),k.jsxs("div",{className:"_4t9z",children:[this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?k.jsx("div",{className:"_4t9-",children:i._("Thanks for your feedback!")}):k.jsx("div",{className:"_4ta3",children:k.jsx(c("XUIButton.react"),{disabled:!(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""),label:i._("Submit"),use:"confirm",onClick:this.$5.bind(this)})})]})]});break}return k.jsxs("div",{className:"_2i_w",children:[g,k.jsx("div",{className:"_2j03"})]})};return b}(k.Component);a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};a.propTypes={areCaptionsActive:c("prop-types").bool,areCaptionsAutogenerated:c("prop-types").bool,hasHD:c("prop-types").bool,hasCaptions:c("prop-types").bool,isHD:c("prop-types").bool,isLive:c("prop-types").bool,isSphericalVideo:c("prop-types").bool,onToggleHD:c("prop-types").func,onToggleCaptions:c("prop-types").func,tabIndex:c("prop-types").string,availableQualities:c("prop-types").array,selectedQuality:c("prop-types").string,preferredQuality:c("prop-types").string,canAutoSelectVideoQuality:c("prop-types").bool,onSelectQuality:c("prop-types").func,showQualitySelector:c("prop-types").bool,qualitySelectorMinStreams:c("prop-types").number,streamingFormat:c("prop-types").string};g["default"]=a}),98);
window.__d("VideoSettingsControl.react",["cx","fbt","ix","AbstractButton.react","ClickableArea.react","Image.react","ODS","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoPlayerQualitiesArray","VideoSettingsMenu.react","prop-types","react","shallowCompare"],(function(a,b,c,d,e,f,g,h,i,j){var k=d("react");a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isFocus:!1},c.$1=k.createRef(),b)||window.babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.shouldComponentUpdate=function(a,b){return c("shallowCompare")(this,a,b)};e.onClick=function(){!this.state.isFocus&&!this.props.disabled&&this.$1.current&&this.$1.current.showQualitySelector()&&d("ODS").bumpEntityKey(2966,"videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};e.getHDIndicator=function(){var a=c("VideoPlayerExperiments").showHDIndicator===!0&&!this.props.isInline&&this.props.preferredQuality===null?d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD(this.props.selectedQuality):d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD(this.props.preferredQuality);if(!a)return null;d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD4K(this.props.selectedQuality)?a="4K":a="HD";return k.jsx("span",{className:"_132c",children:a})};e.render=function(){var a=k.jsx(c("Image.react"),{className:"_rwt",src:j("391244")}),b=i._("Additional Visual Settings"),e=null;!this.props.disabled&&this.state.isFocus&&(e=k.jsx("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":""),children:k.jsx(c("VideoSettingsMenu.react"),{areCaptionsActive:this.props.areCaptionsActive,areCaptionsAutogenerated:this.props.areCaptionsAutogenerated,hasHD:this.props.hasHD,hasCaptions:this.props.hasCaptions,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleCaptions:this.props.onToggleCaptions,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:this.$1})}));var f=this.getHDIndicator(),g="_zbd"+(this.props.disabled?" _132h":""),h=i._("Settings");g=k.jsx(c("AbstractButton.react"),{className:g,disabled:this.props.disabled,image:a,label:b,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=c("TrackingNodes").getTrackingInfo(c("TrackingNodes").types.VIDEO_SETTINGS);return k.jsxs("div",{className:"_2j04","data-ft":a,children:[e,k.jsx(c("ClickableArea.react"),window.babelHelpers["extends"]({},d("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this),children:k.jsxs("div",{"data-testid":void 0,children:[g,f]})}))]})};return b}(k.Component);a.defaultProps={tabIndex:"-1"};a.propTypes={disabled:c("prop-types").bool,hasHD:c("prop-types").bool,hasCaptions:c("prop-types").bool,isHD:c("prop-types").bool,isInline:c("prop-types").bool,isLive:c("prop-types").bool,isSphericalVideo:c("prop-types").bool,areCaptionsActive:c("prop-types").bool,areCaptionsAutogenerated:c("prop-types").bool,onToggleHD:c("prop-types").func,onToggleCaptions:c("prop-types").func,tabIndex:c("prop-types").string,availableQualities:c("prop-types").array,selectedQuality:c("prop-types").string,canAutoSelectVideoQuality:c("prop-types").bool,onSelectQuality:c("prop-types").func,showQualitySelector:c("prop-types").bool,qualitySelectorMinStreams:c("prop-types").number,streamingFormat:c("prop-types").string};g["default"]=a}),98); })();