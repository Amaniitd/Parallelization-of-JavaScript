(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[127],{"6oph":function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("lSNA")),i=r(a("ERkP")),s=(r(a("17x9")),a("Lcdh")),c=a("Da2K"),o=r(a("q11u")),u=r(a("dny7")),d=r(a("a9LK")),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function p(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(p=function(e){return e?a:t})(e)}var m=c.textConstants.CRITICS_PICK_TEXT,h=c.textConstants.DISCLAIMER_TEXT,v=function(e){var t=e.review,a=t.isCriticsPick,r=t.overrideLabel,n=t.subject,p=e.showDisclaimerInline,v=e.trackClick;if(!n)return i.default.createElement(d.default,{isCriticsPick:a,name:r});var y,g=n.performance,w=n.category,b=n.genre,k=n.runtime,C=n.openRun,x=n.stopDate,E=n.venue,O=n.ticketInfo,M="string"==typeof b&&b.split(",").map((function(e){return e.trim()})),P=r;!r&&null!=g&&g.name&&(P=g.name),E&&(y=E.name);var _,I=E&&E.contactDetails&&E.contactDetails.addresses&&E.contactDetails.addresses[0]&&E.contactDetails.addresses[0].address&&E.contactDetails.addresses[0].address.streetAddress,j=E&&E.contactDetails&&E.contactDetails.phoneNumbers&&E.contactDetails.phoneNumbers[0]&&E.contactDetails.phoneNumbers[0].number;O&&(_=O.website);var D=(0,c.isClosed)(x);return i.default.createElement("div",{className:(0,s.cx)(f.reviewClass,(0,l.default)({},f.hasInlineDisclaimerClass,p))},i.default.createElement("div",{className:f.metadataClass},i.default.createElement("dl",{itemScope:!0},P&&i.default.createElement("dt",{dangerouslySetInnerHTML:{__html:P}}),a&&i.default.createElement("dd",{className:f.criticsPickClass},i.default.createElement("i",null),i.default.createElement("span",null,m)),(w||b&&!!b.length)&&i.default.createElement("dd",null,w&&i.default.createElement("span",{className:"category",dangerouslySetInnerHTML:{__html:"".concat(c.showCategoryMap[w]).concat(b&&b.length?", ":"")}}),M&&!!M.length&&i.default.createElement("span",{className:"genre"},M.reduce((function(e,t,a){return M.length>1&&a>0&&e.push(i.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(i.default.createElement("span",{key:a.toString(),itemScope:!0,itemType:"http://schema.org/CreativeWork",dangerouslySetInnerHTML:{__html:t}})),e}),[]))),k&&i.default.createElement("dd",null,k),(C||x)&&i.default.createElement("dd",null,C?"Open Run":"Closing Date: ",!C&&i.default.createElement(o.default,null,x)),I&&i.default.createElement("dd",{className:f.wrappableClass,itemScope:!0,itemType:"http://schema.org/PostalAddress"},y&&i.default.createElement("span",{className:f.notWrappableClass},i.default.createElement("span",{dangerouslySetInnerHTML:{__html:"".concat(y,", ")}})),i.default.createElement("span",{className:f.notWrappableClass,dangerouslySetInnerHTML:{__html:I}})),j&&i.default.createElement("dd",null,j))),!D&&_&&i.default.createElement("aside",{className:(0,s.cx)((0,l.default)({},f.linkWithDisclaimerClass,p))},i.default.createElement(u.default,{theme:"action",href:_,onClick:function(){return v("theater")},target:"_blank",rel:"noopener noreferrer"},"Find Tickets"),p&&i.default.createElement("p",{className:f.disclaimerClass},h.THEATER)))};v.displayName="TheaterHeader",v.defaultProps={showDisclaimerInline:!1};var y=v;t.default=y},"8o/l":function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("lSNA")),i=r(a("ERkP")),s=(r(a("17x9")),a("Lcdh")),c=a("Da2K"),o=r(a("5QCa")),u=r(a("dny7")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function f(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(f=function(e){return e?a:t})(e)}var p=c.textConstants.CRITICS_PICK_TEXT,m=c.textConstants.RATING_DESCRIPTIONS,h=c.textConstants.DISCLAIMER_TEXT,v=function(e){var t=e.review,a=e.trackClick,r=e.trackCall,n=e.deviceType,f=e.showBuyButton,v=e.showDisclaimerInline,y=t.isCriticsPick,g=t.subject;if(!g)return null;var w=g.name,b=g.reservationsUrl,k=g.openStatus,C=g.rating,x=g.cuisines,E=g.priceCategory,O=g.contactDetails,M=(null==t?void 0:t.overrideLabel)||w,P=(0,o.default)(window.parseInt(C,10),"★"),_=m[C],I=x.join(", "),j=(0,o.default)(window.parseInt(c.priceMap[E],10),"$"),D=["CLOSED_TEMPORARILY","CLOSED_PERMANENTLY"].indexOf(k)>=0,T=O.addresses[0],N=O.phoneNumbers.find((function(e){return"MAIN"===e.type}));return i.default.createElement("div",{"data-testid":"restaurant-review-header",className:(0,s.cx)(d.reviewClass,(0,l.default)({},d.hasInlineDisclaimerClass,v))},i.default.createElement("div",{className:d.metadataClass},i.default.createElement("dl",null,M&&i.default.createElement("dt",{dangerouslySetInnerHTML:{__html:M}}),y&&i.default.createElement("dd",{className:d.criticsPickClass},i.default.createElement("i",null),i.default.createElement("span",null,p)),(P||_)&&i.default.createElement("dd",null,P?i.default.createElement("span",{className:d.starsClass},P):_),!D&&I&&i.default.createElement("dd",{className:"cuisines",dangerouslySetInnerHTML:{__html:I}}),!D&&j&&i.default.createElement("dd",null,j),!D&&T.address.streetAddress&&i.default.createElement("dd",{className:"address"},i.default.createElement("span",{dangerouslySetInnerHTML:{__html:T.address.streetAddress}}),T.neighborhood&&", ",T.neighborhood&&i.default.createElement("span",{className:"neighborhood",dangerouslySetInnerHTML:{__html:T.neighborhood}})),!D&&N&&i.default.createElement("dd",null,N.number),D&&i.default.createElement("dd",{className:"isClosed"},"Closed"))),f&&!D&&b&&i.default.createElement("aside",{className:(0,s.cx)((0,l.default)({},d.linkWithDisclaimerClass,v))},i.default.createElement(u.default,{theme:"action",href:b,onClick:function(){return a("restaurant")},target:"_blank",rel:"noopener noreferrer"},"Reserve a Table"),v&&i.default.createElement("p",{className:d.disclaimerClass},h.RESTAURANT)),f&&!D&&!b&&!!N&&"smartphone"===n&&i.default.createElement("aside",null,i.default.createElement(u.default,{theme:"action",isLink:!0,href:"tel:+".concat(N.number),onClick:r},"Call")))};v.displayName="RestaurantHeader",v.defaultProps={deviceType:"",showBuyButton:!0,showDisclaimerInline:!1};var y=v;t.default=y},I73Z:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("lSNA")),i=r(a("ERkP")),s=(r(a("17x9")),a("Lcdh")),c=a("Da2K"),o=r(a("dny7")),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function d(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(d=function(e){return e?a:t})(e)}var f=c.textConstants.CRITICS_PICK_TEXT,p=c.textConstants.DISCLAIMER_TEXT,m=function(e){var t=e.review,a=e.trackClick,r=e.deviceType,n=e.showBuyButton,d=e.showDisclaimerInline,m=t.overrideLabel,h=t.isCriticsPick,v=t.subject,y=void 0===v?{}:v;if(!y)return null;var g=y.title,w=y.ticketUrl,b=y.movieRating,k=y.runtimeUS,C=y.genres,x=y.directors,E=m||g,O=(0,c.formatDuration)(k),M=(0,c.movieRating)(b),P=w;return w&&"smartphone"===r&&w.match(/www\.imdb/)&&(P=w.replace("www.","m.")),i.default.createElement("div",{className:(0,s.cx)(u.reviewClass,(0,l.default)({},u.hasInlineDisclaimerClass,d))},i.default.createElement("div",{className:u.metadataClass},i.default.createElement("dl",null,E&&i.default.createElement("dt",{dangerouslySetInnerHTML:{__html:E}}),h&&i.default.createElement("dd",{className:u.criticsPickClass},i.default.createElement("i",null),i.default.createElement("span",null,f)),x&&!!x.length&&i.default.createElement("dd",{className:"director"},"Directed by ",x.reduce((function(e,t,a){return x.length>1&&a>0&&e.push(i.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(i.default.createElement("span",{key:a.toString(),dangerouslySetInnerHTML:{__html:t}})),e}),[])),C&&!!C.length&&i.default.createElement("dd",{dangerouslySetInnerHTML:{__html:C.join(", ")}}),M&&i.default.createElement("dd",null,M),O&&i.default.createElement("dd",null,O))),n&&w&&i.default.createElement("aside",{className:(0,s.cx)((0,l.default)({},u.linkWithDisclaimerClass,d))},i.default.createElement(o.default,{theme:"action",href:P,onClick:function(){return a("movie")},target:"_blank",rel:"noopener noreferrer"},"Find Tickets"),d&&i.default.createElement("p",{className:u.disclaimerClass},p.MOVIE)))};m.displayName="MovieHeader",m.defaultProps={deviceType:"",showBuyButton:!0,showDisclaimerInline:!1};var h=m;t.default=h},QVmZ:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("lSNA")),i=r(a("ERkP")),s=(r(a("17x9")),a("Lcdh")),c=a("xePG"),o=a("Da2K"),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=v(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2")),d=r(a("nFRg")),f=r(a("UZ5W")),p=r(a("I73Z")),m=r(a("8o/l")),h=r(a("6oph"));function v(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(v=function(e){return e?a:t})(e)}var y=function(e){var t,a,r,n,v=e.article,y=e.truncated,g=e.dismissTruncator,w=e.deviceType,b=e.media,k=e.trackClick,C=e.trackCall;if(!v.compatibility||!v.reviewItems||0===v.reviewItems.length)return null;if(v.compatibility.isArtReview&&v.reviewItems.every((function(e){return!e.criticsPick&&!e.overrideLabel})))return null;if(v.compatibility.isBookReview&&v.reviewItems.every((function(e){var t=e.subject;return!t||!t.buyLinks||!t.buyLinks.length||t.buyLinks.every((function(e){return!e.url}))})))return null;var x,E,O,M=(0,o.shouldShowDisclaimer)({article:v}),P=M&&1===v.reviewItems.length,_=M&&v.reviewItems.length>1,I=M?(0,o.getDisclaimerText)({article:v}):null;if(null!=b&&b.size&&(x=o.sizeClassNameMap[b.size]),b&&b.media&&"Slideshow"===b.media.__typename&&b.media.promotionalMedia&&b.media.promotionalMedia.slideshowCrops&&b.media.promotionalMedia.slideshowCrops.length?O=b.media.promotionalMedia.slideshowCrops:null!=b&&null!==(t=b.media)&&void 0!==t&&null!==(a=t.media)&&void 0!==a&&null!==(r=a.crops)&&void 0!==r&&r.length&&(O=b.media.crops),O){var j=(0,c.flattenCropArray)(O.map((function(e){return e.renditions})))[0];E=j.height>=j.width?"layoutVertical":"layoutHorizontal"}return i.default.createElement("div",{className:(0,s.cx)(u.reviewHeaderClass,(n={},(0,l.default)(n,x,x),(0,l.default)(n,"hasLedeMedia",x),(0,l.default)(n,E,E),n))},v.reviewItems.map((function(e,t){var a;return v.compatibility.isArtReview?i.default.createElement(d.default,{key:t.toString(),review:e}):v.compatibility.isBookReview?i.default.createElement(f.default,{key:t.toString(),review:e}):v.compatibility.isDiningReview?i.default.createElement(m.default,{key:t.toString(),review:e,index:t,onMoreInfoClick:y?g:null,deviceType:w,showBuyButton:o.textConstants.BUY_BUTTON_CONFIG.RESTAURANT,showDisclaimerInline:P,trackClick:k,trackCall:C}):v.compatibility.isMovieReview?i.default.createElement(p.default,{key:t.toString(),review:e,index:t,onMoreInfoClick:y?g:null,deviceType:w,showBuyButton:o.textConstants.BUY_BUTTON_CONFIG.MOVIE,showDisclaimerInline:P,trackClick:k}):"TheaterEvent"===(null==e||null===(a=e.subject)||void 0===a?void 0:a.__typename)||e.overrideLabel?i.default.createElement(h.default,{key:t.toString(),review:e,showDisclaimerInline:P,index:t,onMoreInfoClick:y?g:null,trackClick:k}):null})),I&&_&&i.default.createElement("p",{className:(0,s.cx)(u.disclaimerClass,u.disclaimerBelowClass)},I))};y.displayName="ReviewHeader",y.defaultProps={article:{},truncated:!1,dismissTruncator:function(){},deviceType:"",media:null,trackCall:function(){},trackClick:function(){}};var g=y;t.default=g},UQHx:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("lwsE")),i=r(a("W8MJ")),s=r(a("7W2i")),c=r(a("a1gu")),o=r(a("Nsbk")),u=m(a("ERkP")),d=(r(a("17x9")),r(a("dny7"))),f=m(a("WCIi"));function p(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(p=function(e){return e?a:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,a&&a.set(e,r),r}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,c.default)(this,a)}}var v=function(e){(0,s.default)(a,e);var t=h(a);function a(){var e;(0,l.default)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={open:!1},e.handleClick=function(t){return e.node.contains(t.target)?e.setState((function(e){return{open:!e.open}})):e.setState((function(){return{open:!1}}))},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){window.document.addEventListener("click",this.handleClick,!0)}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("click",this.handleClick,!0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.options,n=t.menuLabel,l=t.trackClick,i=this.state.open;return u.default.createElement("div",{className:f.containerClass},u.default.createElement(d.default,{type:"button",theme:"action",onClick:this.onClick,"aria-haspopup":"true","aria-expanded":i,ref:function(t){e.node=t}},a,u.default.createElement("span",{"aria-hidden":"true"}," ▾")),i&&u.default.createElement("div",{className:f.arrowOuterClass}),i&&u.default.createElement("div",{className:f.arrowInnerClass}),u.default.createElement("ul",{className:f.listClass,"aria-label":n,hidden:!i},r.map((function(e){return u.default.createElement("li",{key:e.label},u.default.createElement("a",{className:f.linkClass,href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:function(){return l(e.label)}},e.label))}))))}}]),a}(u.Component);v.displayName="DropDownMenu",v.defaultProps={trackClick:function(){}};var y=v;t.default=y},UZ5W:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("ERkP")),i=(r(a("17x9")),a("Lcdh")),s=a("Da2K"),c=r(a("UQHx")),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function u(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){var t,a=((null===(t=e.review.subject)||void 0===t?void 0:t.buyLinks)||[]).filter((function(e){return(null==e?void 0:e.sellerName)&&e.url})).map((function(e){return{label:e.sellerName,url:e.url}}));return l.default.createElement("div",{className:(0,i.cx)(o.reviewClass,o.bookReviewClass)},l.default.createElement(c.default,{title:"Buy Book",options:a,menuLabel:"Links to Book Retailers"}),l.default.createElement("p",{className:o.disclaimerClass},s.textConstants.DISCLAIMER_TEXT.BOOK))};d.displayName="BookHeader";var f=d;t.default=f},WCIi:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.listClass=t.linkClass=t.containerClass=t.arrowOuterClass=t.arrowInnerClass=void 0;var n=r(a("lSNA")),l=a("Lcdh"),i=r(a("jVmh")),s=a("hAwj");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=(0,l.css)("position:relative;");t.containerClass=u;var d=(0,l.css)("background-color:",s.color.background.primary,";border:1px solid ",s.color.stroke.tertiary,";border-radius:4px;font-family:",i.default.font.franklinBase,";box-shadow:2px 2px 2px ",s.dark.colors.background.primary.transform((function(e){return o(o({},e),{},{alpha:.2})})).hsla,";left:0;margin-top:12px;padding:6px 0;position:absolute;top:28px;white-space:nowrap;width:auto;z-index:",i.default.zIndex.menuOverlay,";");t.listClass=d;var f=(0,l.css)("align-items:center;color:",s.color.signal.editorial,";display:flex;font-size:1rem;padding:6px 12px;&:hover,&:focus{text-decoration:underline;}");t.linkClass=f;var p=(0,l.css)("border-bottom:8px solid ",s.color.stroke.secondary,";border-left:8px inset transparent;border-right:8px inset transparent;border-top:8px inset transparent;display:inline-block;height:0;left:20px;position:absolute;top:24px;width:0;z-index:",i.default.zIndex.menuOverlay+1,";");t.arrowOuterClass=p;var m=(0,l.css)("border-bottom:8px solid ",s.color.background.primary,";border-left:8px inset transparent;border-right:8px inset transparent;border-top:8px inset transparent;display:inline-block;height:0;left:20px;position:absolute;top:25px;width:0;z-index:",i.default.zIndex.menuOverlay+1,";");t.arrowInnerClass=m},a9LK:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("ERkP")),i=(r(a("17x9")),a("Da2K")),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function c(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(c=function(e){return e?a:t})(e)}var o=function(e){var t=e.isCriticsPick,a=e.name;return l.default.createElement("div",{className:s.reviewClass},l.default.createElement("div",{className:s.metadataClass},l.default.createElement("dl",{itemScope:!0,itemType:"http://schema.org/TheaterEvent"},a&&l.default.createElement("dt",{itemProp:"name",dangerouslySetInnerHTML:{__html:a}}),t&&l.default.createElement("dd",{className:s.criticsPickClass},l.default.createElement("i",null),l.default.createElement("span",null,i.textConstants.CRITICS_PICK_TEXT)))))};o.displayName="MinimalReview";var u=o;t.default=u},nFRg:function(e,t,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("ERkP")),i=(r(a("17x9")),a("Da2K")),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a("u0+2"));function c(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(c=function(e){return e?a:t})(e)}var o=function(e){var t=e.review,a=t.isCriticsPick,r=t.overrideLabel;return a||r?l.default.createElement("div",{className:s.reviewClass},l.default.createElement("div",{className:s.metadataClass},l.default.createElement("dl",{itemScope:!0,itemType:"http://schema.org/VisualArtwork"},r&&l.default.createElement("dt",{itemProp:"name",dangerouslySetInnerHTML:{__html:r}}),a&&l.default.createElement("dd",{className:s.criticsPickClass},l.default.createElement("i",null),l.default.createElement("span",null,i.textConstants.CRITICS_PICK_TEXT))))):null};o.displayName="ArtHeader",o.defaultProps={review:{}};var u=o;t.default=u},"u0+2":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.wrappableClass=t.ticketsLinkClass=t.starsClass=t.reviewHeaderClass=t.reviewClass=t.notWrappableClass=t.moreInformationClass=t.metadataClass=t.linkWithDisclaimerClass=t.hasInlineDisclaimerClass=t.disclaimerClass=t.disclaimerBelowClass=t.criticsPickClass=t.bookReviewClass=void 0;var n=a("Lcdh"),l=r(a("jVmh")),i=a("w3+U"),s=a("hAwj"),c=(0,n.css)("margin:20px auto;width:calc(100% - 40px);max-width:",l.default.breakpoint.textBodyWidth,"px;",l.default.breakpoint.extraLarge,"{max-width:",l.default.breakpoint.textBodyWidthExtralarge,"px;}",l.default.print,";");t.reviewHeaderClass=c;var o=(0,n.css)("align-items:center;display:flex;font-family:",l.default.font.franklinBase,";font-size:",l.default.font.size(14),";justify-content:space-between;line-height:",l.default.font.size(20),";min-height:26px;padding:5px 0;&:first-of-type{border-top:1px solid ",s.color.stroke.quaternary,";padding-top:10px;}&:last-of-type{border-bottom:1px solid ",s.color.stroke.quaternary,";padding-bottom:10px;}dt{color:",s.color.content.primary,";display:inline-block;font-size:",l.default.font.size(14),";font-weight:",l.default.font.weight.bold,";line-height:",l.default.font.size(20),";margin-right:10px;}dd{color:",s.color.content.secondary,";font-weight:",l.default.font.weight.medium,";border-right:1px solid ",s.color.stroke.quaternary,";display:inline-block;margin-right:10px;padding-right:10px;&:last-of-type{border:none;}@media print{border-right:1px solid ",s.color.stroke.quaternary,";padding-right:10px;margin-right:10px;display:inline-block;&:last-of-type{border:none;}}}");t.reviewClass=o;var u=(0,n.css)("flex-direction:column;align-items:flex-start;");t.hasInlineDisclaimerClass=u;var d=(0,n.css)("color:",s.color.content.quaternary,";font-family:",l.default.font.franklinBase,";font-size:",l.default.font.size(12),";font-weight:",l.default.font.weight.medium,";line-height:",l.default.font.size(16),";");t.disclaimerClass=d;var f=(0,n.css)("margin-top:10px;");t.disclaimerBelowClass=f;var p=(0,n.css)("display:flex;flex-direction:column;justify-content:center;max-width:100%;width:100%;");t.metadataClass=p;var m=(0,n.css)("display:inline-block;i{background-image:url('data:image/svg+xml;utf8,",i.criticsPick,"');display:inline-block;height:16px;margin-right:4px;margin-top:-3px;vertical-align:middle;width:16px;}");t.criticsPickClass=m;var h=(0,n.css)("color:",l.default.color.reviewCritPickGold,";");t.starsClass=h;var v=(0,n.css)(l.default.breakpoint.small,"{display:inline;white-space:pre-wrap;}@media print{display:inline;white-space:pre-wrap;}");t.wrappableClass=v;var y=(0,n.css)(l.default.breakpoint.small,"{display:inline-block;}");t.notWrappableClass=y;var g=(0,n.css)("color:",s.color.content.secondary,";font-family:",l.default.font.franklinBase,";font-size:0.75rem;font-weight:",l.default.font.weight.medium,";line-height:1rem;text-decoration:underline;",l.default.breakpoint.small,"{display:none;}",l.default.printHide,";");t.moreInformationClass=g;var w=(0,n.css)("background-color:",s.color.signal.editorial,";border:1px solid ",s.color.signal.editorial,";border-radius:3px;color:",s.dark.colors.content.primary.hsla,";display:inline-block;font-family:",l.default.font.franklinBase,";font-size:",l.default.font.size(12),";font-weight:",l.default.font.weight.medium,";line-height:",l.default.font.size(13),";margin-left:8px;padding:6.5px 7.5px;text-transform:uppercase;transition:background-color 600ms ease-in;white-space:nowrap;&:hover,&:focus{background-color:",s.color.signal.editorial,";transition:background-color 600ms ease-out;}");t.ticketsLinkClass=w;var b=(0,n.css)("display:flex;justify-content:flex-start;align-items:center;margin-top:10px;.",w,"{margin-left:0;}.",d,"{margin-left:12px;max-width:360px;}",l.default.printHide,";");t.linkWithDisclaimerClass=b;var k=(0,n.css)("display:flex;justify-content:flex-start;align-items:center;margin-top:10px;.",w,"{margin-left:0;}.",d,"{margin-left:12px;max-width:360px;}",l.default.printHide,";");t.bookReviewClass=k},"w3+U":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ticketmaster=t.resy=t.opentable=t.imdb=t.criticsPick=void 0;var n=r(a("jVmh")),l=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n  <path\n    fill="'.concat(n.default.color.reviewCritPickGold,'"\n    d="M14.34,8.83,16,8l-1.66-.83,1.38-1.24-1.82-.38,1-1.55-1.74.1h0c.66-.57,1.15-1,2.65-2.18l-2.7-.84c-.48.44-.87.8-1.21,1.14L12,1.07l-1.55,1L10.07.27,8.84,1.65,8,0,7.16,1.65,5.93.27,5.55,2.09,4,1.07l.1,1.85L2.34,2.34,2.92,4.1,1.07,4l1,1.55L.27,5.93,1.66,7.17,0,8l1.66.83L.27,10.07l1.82.38L1.07,12l1.85-.1-.58,1.76,1.76-.58L4,14.93l1.55-1,.38,1.81,1.23-1.38L8,16l.84-1.65,1.23,1.38.38-1.81,1.55,1-.1-1.85,1.76.58-.58-1.76,1.85.1-1-1.55,1.82-.38ZM8,13.14a5.14,5.14,0,1,1,2.67-9.52l-.48.61a27.9,27.9,0,0,0-2.56,4L6.14,6l-1.36.82,3.08,4.52C9,9.42,9.5,8.56,10.07,7.7A18.66,18.66,0,0,1,12.2,5,5.13,5.13,0,0,1,8,13.14Z" />\n  </svg>\n'));t.criticsPick=l;var i=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="42" >\n    <g fill-rule="evenodd" fill="none">\n      <path fill="#010101" d="M2.02 0A2 2 0 0 0 0 2v16a2 2 0 0 0 2.02 2h37.96A2 2 0 0 0 42 18V2c0-1.1-.9-2-2.02-2H2.02z" />\n      <path fill="#fff"\n        d="M6 16h3V4H6v12zM15.78 3.99l-.75 5.6-.46-3.04c-.13-.98-.26-1.84-.39-2.56H10v12h2.83V8.06l1.2 7.93h2.01l1.13-8.1v8.1H20v-12h-4.22zM24.86 6.15c.12.07.2.18.24.34.04.15.05.5.05 1.04v4.65c0 .8-.05 1.29-.16 1.47-.1.18-.38.27-.83.27V6.04c.34 0 .57.04.7.11zM24.83 16c.75 0 1.32-.04 1.7-.12.37-.09.69-.23.94-.44.25-.2.44-.48.54-.85.1-.36.16-1.08.16-2.15V8.22c0-1.14-.05-1.9-.11-2.29a2.12 2.12 0 0 0-.53-1.05 2.39 2.39 0 0 0-1.23-.68c-.53-.14-1.42-.21-2.95-.21H21v12h3.83zM33.11 13.22c0 .58-.03.96-.09 1.11-.06.16-.31.23-.5.23-.2 0-.32-.07-.38-.22s-.1-.49-.1-1.03V10.1c0-.56.03-.9.09-1.04.05-.14.18-.2.36-.2.2 0 .45.08.52.23.07.16.1.5.1 1v3.13zM29 4v12.17h2.84l.2-.78c.26.32.54.55.85.7.31.16.77.24 1.13.24.5 0 .94-.13 1.3-.4.36-.26.6-.57.69-.92.1-.36.14-.9.14-1.63V9.96c0-.73 0-1.21-.04-1.44a1.65 1.65 0 0 0-1-1.23c-.3-.13-.67-.2-1.08-.2-.37 0-.83.07-1.14.22-.31.14-.6.36-.85.65V4H29z" />\n    </g>\n  </svg>\n');t.imdb=i;var s=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" height="133.33" width="576">\n    <path\n      d="M2.67 66.66a15.83 15.83 0 1 1 31.65 0 15.83 15.83 0 0 1-31.65 0M113.8 82.5a15.83 15.83 0 1 1 0-31.66 15.83 15.83 0 0 1 0 31.66zm0-79.17a63.31 63.31 0 0 0-63.3 63.34 63.31 63.31 0 0 0 63.3 63.33 63.31 63.31 0 0 0 63.29-63.33 63.31 63.31 0 0 0-63.3-63.34"\n      fill="#dc273e" />\n    <path\n      d="M566.15 61.77c1 0 1.6-.45 1.6-1.27 0-.73-.41-1.22-1.52-1.22h-1.04v2.49zm-2.48-3.75h2.81c1.56 0 2.9.63 2.9 2.41 0 .89-.56 1.74-1.38 2.04l1.7 3.07H568l-1.3-2.59h-1.51v2.6h-1.52zm8.18 3.85c0-3.48-2.4-5.96-5.51-5.96s-5.48 2.48-5.48 5.96c0 3.52 2.37 5.93 5.48 5.93 3.1 0 5.51-2.4 5.51-5.93zm-12.48 0c0-4.33 3.15-7.3 6.97-7.3 3.85 0 7 2.97 7 7.3 0 4.34-3.15 7.3-7 7.3-3.82 0-6.97-2.96-6.97-7.3zM512.93 91.5c.94 0 1.73-.78 1.73-1.72v-6.36c0-.93-.78-1.72-1.72-1.72h-.28c-.77 0-1.55-.77-1.55-1.54V42.49c0-.86-.86-1.72-1.72-1.72h-6.32c-.86 0-1.72.86-1.72 1.72V84.2l.02 1.09c0 3.1 3.1 6.21 6.21 6.21zM234.48 50.72c8.6 0 15.87 7.3 15.87 15.94 0 8.73-7.12 15.82-15.87 15.82a15.89 15.89 0 0 1 0-31.76zm0-10.05a25.94 25.94 0 0 0-25.83 26 25.57 25.57 0 0 0 25.83 25.85 25.6 25.6 0 0 0 25.91-25.86 25.98 25.98 0 0 0-25.9-25.99zM440.6 81.2c-.47 1.33-3.28 3.83-6.49 3.83-3.35 0-5.23-2.03-5.23-5.08 0-3.2 2.27-5.16 6.4-5.16 2.9 0 5.32 1.1 5.32 1.1zm-4.22-26.65a45.58 45.58 0 0 0-12.34 1.8c-.78.23-1.49.85-1.17 2.18l.78 4.07c.15 1.1.86 1.95 2.03 1.56 2.1-.62 6.87-1.33 10.15-1.33 3.83 0 5.16 2.2 5 6.8 0 0-3.28-1.01-6.95-1.01-9.14 0-14.37 4.92-14.37 11.33 0 7.74 5 12.35 12.18 12.35 5.63 0 9.22-2.5 11.33-4.53v1.94c0 .94.78 1.72 1.72 1.72h.64l.22.01h2.65c.94 0 1.72-.78 1.72-1.72V70.26c0-9.85-2.34-15.71-13.59-15.71zm-65.58 0a14.56 14.56 0 0 0-11.6 5.2v-2.7c0-.94-.8-1.72-1.73-1.72h-4.08c-.86 0-1.72.7-1.72 1.72v32.67c0 .94.86 1.72 1.72 1.72h5.78c1.71 0 2.26-.39 2.26-1.72V69.1c.86-2.5 3.12-5.63 7.81-5.63 4.38 0 6.25 2.89 6.25 7.58v18.68c0 .94.78 1.72 1.72 1.72h6.33c.86 0 1.71-.78 1.71-1.72V71.04c0-8.75-2.96-16.5-14.45-16.5zm-86 28.84c-4.53 0-7.5-2.03-7.5-2.03v-12.9c.78-2.03 3.28-5 7.97-5 5.62 0 8.51 4.92 8.51 10s-3.04 9.93-8.98 9.93zm1.8-28.84a15.58 15.58 0 0 0-11.78 5.38v-2.88c0-.94-.79-1.72-1.72-1.72h-3.84c-.94 0-1.72.78-1.72 1.72v47.37c0 .86.78 1.72 1.72 1.72h6.32c.86 0 1.72-.86 1.72-1.72v-13.6c1.64.62 5.08 1.48 8.67 1.48 10.78 0 17.9-8.28 17.9-18.84 0-10.94-7.43-18.91-17.27-18.91zm257.6 14.3c-.16-3.52-2.97-6.25-6.95-6.25-4.38 0-7.19 2.65-7.66 6.25zm-6.72-14.3c9.37 0 16.56 6.95 16.56 16.72 0 .55-.08 1.8-.16 2.35a1.83 1.83 0 0 1-1.71 1.64h-23.13c.08 4.45 3.75 8.36 8.99 8.36 3.59 0 6.09-1.33 7.73-2.65.86-.71 1.8-.79 2.34 0l3.05 4.06c.62.7.7 1.56-.16 2.34a20.36 20.36 0 0 1-13.43 4.93c-10.78 0-18.28-8.6-18.28-18.92 0-10.16 7.5-18.83 18.2-18.83zm-61.13 28.84c-4.69 0-7.19-2.97-7.97-5v-12.9s2.97-2.03 7.5-2.03c5.94 0 8.98 4.84 8.98 9.92 0 5.09-2.89 10.01-8.51 10.01zm.86-28.84c-3.6 0-7.19.86-8.83 1.56V42.35c0-.86-.78-1.72-1.72-1.72h-6.33c-.86 0-1.71.86-1.71 1.72v47.37c0 .94.85 1.72 1.71 1.72h2.74l.16-.01h.72c.95 0 1.74-.78 1.74-1.72v-2.67l.03-.13s4.14 5.4 12.03 5.4c9.85 0 16.95-8.6 16.95-18.93 0-10.55-6.8-18.83-17.5-18.83zm-55.27-13.92H385.2c-.86 0-1.48.7-1.48 1.49v6.4c0 .79.62 1.5 1.48 1.5h13.25v39.94c0 .78.7 1.48 1.49 1.48h7.26c.78 0 1.49-.7 1.49-1.48V50h13.25c.86 0 1.49-.7 1.49-1.48v-6.41c0-.78-.63-1.49-1.49-1.49zm-87.46 28.22c-.16-3.52-2.97-6.25-6.95-6.25-4.38 0-7.19 2.65-7.66 6.25zm-6.72-14.3c9.38 0 16.56 6.95 16.56 16.72 0 .55-.08 1.8-.15 2.35a1.83 1.83 0 0 1-1.72 1.64h-23.12c.08 4.45 3.75 8.36 8.98 8.36 3.6 0 6.1-1.33 7.73-2.65.86-.71 1.8-.79 2.35 0l3.04 4.06c.63.7.7 1.56-.16 2.34a20.36 20.36 0 0 1-13.43 4.93c-10.78 0-18.28-8.6-18.28-18.92 0-10.16 7.5-18.83 18.2-18.83"\n      fill="#2e2d2d" />\n    </svg>\n');t.opentable=s;var c=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" width="540.7" height="76.7">\n    <path\n      d="M338.3 66.8c10 0 13.2-7 15.3-15.3h-4.7c-6.6 0-17.4 1.1-17.4 9.9 0 3.6 3.4 5.4 6.8 5.4m13.2.7h-.2c-4.6 5.9-9.3 9.2-16.7 9.2-9.4 0-16-5.2-16-14.8 0-17.1 19.1-18.4 31.8-18.4h4.7c.4-1.4.4-3 .4-4.4 0-5.3-5.6-6.8-10.3-6.8-6 0-11.7 1.5-17 4l1.9-10.7c5.7-2 11.5-3.1 17.6-3.1 10.3 0 20 3.8 20 16 0 6.9-5 27.2-6.3 37h-11.3l1.4-8M2.1 23.6H12L14.2 13l14.5-4.8-3.4 15.4h12.1l-2.1 9.9h-12l-5 22.6c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.1 5a18 18 0 0 0 6.6-1.1L27 75.4c-2.4.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5C4.2 59 5 55 6 51l3.9-17.5H0l2.1-9.9M47.9 1.3h13.5l-2.9 12.9H45.1l2.8-12.9zm-5 22.3h13.5l-11 51.8H31.9l11-51.8m54.2 11.9a18.2 18.2 0 0 0-9.8-2.6c-10.8 0-16.8 10-16.8 19.8 0 6.7 2.2 13.5 11.4 13.5 3.4 0 7.5-1 11-2.6l-1.5 10.6a29 29 0 0 1-13 2.4c-13.4 0-22-9-22-22.3 0-18 12-31.9 30.6-31.9 5 0 9.8 1 13.4 2l-3.3 11.1M112 0h13.4l-9 42.4h.2l18.8-18.8H153l-24.8 23.7 15.6 28.1h-15.2L115.1 48h-.2l-5.8 27.4H95.9L112 0m89.5 23.6h9.8l2.3-10.6L228 8.2l-3.3 15.4h12l-2 9.9h-12.2L217.7 56c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.1 5a18 18 0 0 0 6.6-1.1l-2.3 10.4c-2.3.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5 0-4 .8-8 1.7-12.1l3.9-17.5h-9.8l2.1-9.9"\n      fill="#026CDF"/>\n    <path\n      d="M197 42.1c0-13.1-8.4-19.7-21.2-19.7-17 0-29.5 15.5-29.5 31.6 0 15.4 10 22.6 25 22.6 5.5 0 11.2-1.3 16.5-2.9l1.7-10.6c-5 2.3-10.4 3.7-16 3.7-8.5 0-13.6-3-14.2-11.2l-.1-1.5V53.8c0-3.5.8-7 2.2-10.3 2.6-6.6 6.2-11.1 14.2-11.1 5.6 0 8.5 3.1 8.5 8.6 0 1.2 0 2.3-.3 3.6h-18.4c-1.2 4-1.4 6.7-1.4 9.2h31.7c.8-3.8 1.3-7.6 1.3-11.6m45.6-12.8l1.1-5.8h12.6l-1.2 7h.2c3.6-5.4 9.6-8.2 15.9-8.2 6.1 0 12.5 3.6 13.2 9.9h.2c3.4-6.8 11-9.9 18.2-9.9 7.7 0 14.4 6.4 14.4 14.2 0 4.6-1.2 9.9-2.3 14l-5.5 24.8H296l5.5-25.2c.7-3.1 1.7-8 1.7-11 0-3.9-3-6.3-6.3-6.3-9.4 0-11.7 10.9-13.4 17.9L278 75.4h-13.4l5.4-25.2a60 60 0 0 0 1.7-11c0-3.9-3-6.3-6.3-6.3-9.2 0-11.7 11-13.4 17.9l-5.3 24.6h-13.5l9.4-46m165.2 4.8a21 21 0 0 0-9-2c-4 0-9 1.2-9 5.3 0 6.6 17.5 9 17.5 21.6 0 13.5-11.8 17.5-23.3 17.5a38 38 0 0 1-15.8-3l2.9-10.8c3.8 2 7.6 4 12.9 4 4.5 0 9.2-1.5 9.2-5.8 0-8.3-17.5-9.1-17.5-22 0-12.2 11.8-16.6 22.4-16.6 5 0 10 1 12.6 1.6l-2.9 10.2m8.6-10.6h9.8l2.3-10.6L443 8.2l-3.3 15.4h12l-2 9.9h-12.2L432.6 56c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.2 5a18 18 0 0 0 6.5-1.1l-2.3 10.4c-2.3.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5 0-4 .9-8 1.8-12.1l3.8-17.5h-9.8l2.1-9.9m91.4 7.1l1.2-7h13l-1.8 9.8h.2c2.4-5.6 9-11 15.3-11 1.7 0 3.5.1 5 .5L538 36.1c-1.5-.5-3.4-.8-5.2-.8-9.5 0-14.1 8.5-15.8 16.9l-5 23.2h-13.4l9.2-44.8m-9.3 11.5c0-13.1-8.5-19.7-21.3-19.7-17 0-29.4 15.5-29.4 31.6 0 15.4 10 22.6 25 22.6 5.4 0 11.2-1.3 16.4-2.9l1.7-10.6c-5 2.3-10.3 3.7-15.9 3.7-8.6 0-13.6-3-14.3-11.2v-1.8c0-3.5.8-7 2.1-10.3 2.6-6.6 6.3-11.1 14.2-11.1 5.7 0 8.6 3.1 8.6 8.6l-.3 3.6h-18.5c-1.2 4-1.4 6.7-1.4 9.2h31.7c.9-3.8 1.4-7.6 1.4-11.6"\n      fill="#026CDF"/>\n  </svg>\n');t.ticketmaster=c;var o=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="66">\n    <defs><path\n      id="a"\n      d="M0 66h150V0H0zm41.6-21c-6.3 0-11.4-4-13.1-9.6H27v9.3h-5.7V19.3H31c1.5 0 2.8.3 4 .7 1 .4 2 1 2.8 1.7.8.7 1.3 1.5 1.7 2.5.4 1 .6 2 .6 3 0 1.7-.4 3.2-1.1 4.4a7.8 7.8 0 0 1-3.2 2.8 6 6 0 0 1-1.6.7 8 8 0 0 0 7.4 4.6zm29-.3H52.4V19.4h17.2v5H58.2v4.9h8.7v4.9h-8.7v5.4h12.3zm16.9-19c0 1 .5 1.6 1.4 2.2 1 .5 2.2 1 3.8 1.3 1 .2 1.9.5 2.8 1 .9.3 1.7.8 2.4 1.5a7.2 7.2 0 0 1 2.4 5.7c0 1.1-.2 2.2-.8 3.2a8 8 0 0 1-2 2.5 12.3 12.3 0 0 1-7 2.2A15.7 15.7 0 0 1 84 44a12.8 12.8 0 0 1-4-3l3.7-4a12.2 12.2 0 0 0 2.7 2.2 8.7 8.7 0 0 0 3.9 1 4.6 4.6 0 0 0 2.5-.7l.9-1c.2-.2.3-.6.3-1 0-1-.5-1.7-1.4-2.3-1-.5-2.4-1-4.4-1.5-1-.2-1.9-.6-2.7-1-.8-.4-1.6-1-2.2-1.6a6.6 6.6 0 0 1-1.9-4.7c0-1 .2-2 .6-3a7 7 0 0 1 1.8-2.5c.7-.7 1.7-1.3 2.9-1.7 1.2-.4 2.5-.6 4.1-.6a13.4 13.4 0 0 1 6 1.3l1.8 1.2 1 .9-3.4 3.6a22.9 22.9 0 0 0-2.2-1.4c-.4-.3-1-.5-1.5-.6-.6-.2-1.1-.2-1.8-.2a4.2 4.2 0 0 0-2.3.7l-.7.7c-.2.3-.3.6-.3 1zm44.6-6.3L123 34v10.7h-5.9V34l-9-14.7h6.6l5.6 9.5 5.4-9.5zM30.8 31c1.1 0 2-.4 2.6-1 .6-.6 1-1.4 1-2.4s-.4-1.8-1-2.4c-.6-.7-1.5-1-2.6-1h-3.5V31z"/>\n      <mask id="b" fill="#fff"><use fill-rule="evenodd" xlink:href="#a"/></mask>\n    </defs>\n    <g fill="none" fill-rule="evenodd"><use xlink:href="#a"/>\n      <g fill="#ff462d" mask="url(#b)"><path d="M0 0h150v66H0z"/></g>\n    </g>\n  </svg>\n');t.resy=o}}]); })();
//# sourceMappingURL=vendors~reviewheader-20a55b704f43411e24b7.js.map