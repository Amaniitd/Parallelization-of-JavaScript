(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"/qPl":function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("lSNA")),r=n("iPtA"),i=o(n("wMr/")),s=o(n("ERkP"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var d=function(e){var t=e.host,n=e.onLogin,o=e.newsletter,d=e.lireParams,u=(0,r.isSubOnly)(o)?"newsletter_subonly_lire":"newsletter_free_lire",c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({redirect_uri:window.location.href,client_id:"freex",asset:"".concat(o.productCode,"-standalone"),response_type:"cookie",application:"Newsletter",display:u},d);return s.default.createElement(i.default,{host:t,params:c,onSuccess:n})};d.displayName="LireLoginForm";var u=d;t.default=u},"2t5v":function(e,t,n){"use strict";var o=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("lwsE")),i=o(n("W8MJ")),s=o(n("7W2i")),l=o(n("a1gu")),d=o(n("Nsbk")),u=b(n("ERkP")),c=o(n("17x9")),f=n("Lcdh"),p=o(n("9rZX")),m=o(n("jVmh")),v=o(n("H32Z")),h=b(n("nJD8")),g=n("rgDx");function y(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,n=new window.WeakMap;return(y=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,l.default)(this,n)}}c.default.func,c.default.node,c.default.string,c.default.shape,c.default.bool;var C=function(e){(0,s.default)(n,e);var t=w(n);function n(){var e;(0,r.default)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).targetElement=null,e}return(0,i.default)(n,[{key:"componentDidMount",value:function(){p.default.setAppElement("body"),this.targetElement=window.document.querySelector("#sharedui-modal")}},{key:"componentWillUnmount",value:function(){(0,g.clearAllBodyScrollLocks)()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpen;e.isOpen!==t&&(t?(0,g.disableBodyScroll)(this.targetElement):(0,g.enableBodyScroll)(this.targetElement))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.isOpen,o=e.handleClose,a=e.onAfterOpen,r=e.overlayClassName,i=e.className,s=e.dismissClassName,l=e.contentLabel,d=e.role,c=e.shouldFocusAfterRender,g=e.shouldCloseOnOverlayClick,y=e.shouldCloseOnEsc,b=e.shouldReturnFocusAfterClose,w=e.aria,C=e.overlayRef,E=e.contentRef,O=e.closeIconStroke;return u.default.createElement(p.default,{id:"sharedui-modal",isOpen:n,overlayClassName:(0,f.cx)(h.overlayClass,r),className:(0,f.cx)(h.modalClass,i),bodyOpenClassName:h.bodyOpenClass,onAfterOpen:a,onRequestClose:o,contentLabel:l,role:d,shouldFocusAfterRender:c,shouldCloseOnOverlayClick:g,shouldCloseOnEsc:y,shouldReturnFocusAfterClose:b,aria:w,overlayRef:C,contentRef:E,ariaHideApp:!0},t,u.default.createElement("button",{type:"button",className:(0,f.cx)(h.dismissClass,s),onClick:o},u.default.createElement("i",{className:h.dismissIconClass},u.default.createElement(v.default,{stroke:O}),u.default.createElement("span",{className:m.default.a11y.visuallyHidden},"Close Modal"))))}}]),n}(u.Component);C.displayName="Modal",C.defaultProps={onAfterOpen:function(){},overlayClassName:void 0,className:void 0,dismissClassName:void 0,contentLabel:"",role:"dialog",shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,aria:{},overlayRef:function(){},contentRef:function(){},closeIconStroke:"#555"};var E=C;t.default=E},Fldo:function(e,t,n){"use strict";var o=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FadeInOut=void 0;var r,i,s=o(n("J4zp")),l=o(n("lSNA")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n("ERkP")),u=n("Lcdh"),c=n("R5ZL"),f=n("Mbh7");function p(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,n=new window.WeakMap;return(p=function(e){return e?n:t})(e)}!function(e){e.ENTERING="ENTERING",e.ENTERED="ENTERED",e.EXITING="EXITING",e.EXITED="EXITED"}(i||(i={}));var m=(r={},(0,l.default)(r,i.ENTERING,c.hideClass),(0,l.default)(r,i.ENTERED,c.showClass),(0,l.default)(r,i.EXITING,c.showClass),(0,l.default)(r,i.EXITED,c.hideClass),r),v=function(e){var t=e.enableFadeTransition,n=e.isVisible,o=e.overrideFadeTimeMs,a=void 0===o?f.SIGNUP_FADE_MS:o,r=e.skipEnter,l=e.children,p=(0,d.useState)(r?i.ENTERED:i.ENTERING),v=(0,s.default)(p,2),h=v[0],g=v[1],y=(0,d.useState)(!1),b=(0,s.default)(y,2),w=b[0],C=b[1];return(0,d.useEffect)((function(){if(t&&h!==i.EXITING){var e=null;return n&&!w?r||(g(i.ENTERING),e=window.setTimeout((function(){g(i.ENTERED),C(!0)}),a)):(g(i.EXITING),e=window.setTimeout((function(){g(i.EXITED)}),a)),function(){e&&window.clearTimeout(e)}}}),[n]),t?d.default.createElement("div",{className:(0,u.cx)(c.fadeClass,m[h])},l):d.default.createElement(d.default.Fragment,null,l)};t.FadeInOut=v,v.displayName="FadeInOut";var h=v;t.default=h},H32Z:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=o(n("ERkP")),r=(o(n("17x9")),o(n("jVmh")));function i(e){var t=e.className,n=e.stroke,o=e.strokeWidth;return a.default.createElement("svg",{className:t,viewBox:"0 0 12 12",stroke:n,strokeWidth:o,strokeLinecap:"round",style:{opacity:.95}},a.default.createElement("line",{x1:"11",y1:"1",x2:"1",y2:"11"}),a.default.createElement("line",{x1:"1",y1:"1",x2:"11",y2:"11"}))}i.displayName="CloseIcon",i.defaultProps={className:void 0,stroke:r.default.color.black,strokeWidth:"1"}},Mbh7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SIGNUP_FADE_MS=void 0;t.SIGNUP_FADE_MS=300;var o={SIGNUP_FADE_MS:300};t.default=o},R5ZL:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.summaryClass=t.signupMessageFullWidthClass=t.signupMessageContainerClass=t.signupMessageClass=t.signupContentContainerClass=t.signupContainerClass=t.showClass=t.oakContainerClass=t.inlineButtonLinkClass=t.hideClass=t.headingClass=t.fadeClass=t.confirmationClass=t.buttonSpanClass=void 0;var a=n("Lcdh"),r=o(n("Ed5u")),i=o(n("jVmh")),s=n("hAwj"),l=n("Mbh7"),d=(0,r.default)(["@media (min-width: 480px)",i.default.breakpoint.small]),u=(0,a.css)("text-align:center;font-family:",i.default.font.serifBase,";font-size:",i.default.font.size(17),";line-height:",i.default.font.size(17),";");t.oakContainerClass=u;var c=(0,a.css)("position:relative;display:flex;overflow:hidden;box-sizing:border-box;padding:",i.default.font.size(18)," ",i.default.font.size(20)," ",i.default.font.size(17)," ",i.default.font.size(20),";border:1px solid ",s.color.stroke.quaternary,";color:",s.color.content.secondary,";max-width:600px;margin:",i.default.font.size(21)," auto ",i.default.font.size(24),";","@media (min-width: 480px)","{padding:",i.default.font.size(18)," ",i.default.font.size(20),";}a,button > span{color:",s.color.signal.editorial,";text-decoration:underline;&:hover{text-decoration:none;}}");t.signupContainerClass=c;var f=(0,a.css)("display:flex;flex-grow:1;justify-content:space-between;align-items:flex-start;padding-right:3px;");t.signupContentContainerClass=f;var p=(0,a.css)("display:flex;align-items:center;height:100%;");t.signupMessageContainerClass=p;var m=(0,a.css)("max-width:500px;text-align:left;",d({marginRight:["10px",null,"20px"]}));t.signupMessageClass=m;var v=(0,a.css)("text-align:left;");t.signupMessageFullWidthClass=v;var h=(0,a.css)("display:inline;margin:0;font-size:",i.default.font.size(16),";font-weight:",i.default.font.weight.bold,";font-family:",i.default.font.serifBase,";font-style:normal;line-height:",i.default.font.size(23),";letter-spacing:0.01rem;","@media (min-width: 480px)","{font-size:",i.default.font.size(17),";line-height:",i.default.font.size(25),";}");t.headingClass=h;var g=(0,a.css)("margin:0;font-family:",i.default.font.serifBase,";font-size:",i.default.font.size(16),";line-height:",i.default.font.size(23),";","@media (min-width: 480px)","{font-size:",i.default.font.size(17),";line-height:",i.default.font.size(25),";}");t.summaryClass=g;var y=(0,a.css)("text-align:left;font-family:",i.default.font.serifBase,";font-size:",i.default.font.size(16),";line-height:",i.default.font.size(23),";","\n  @media (prefers-reduced-motion: reduce) {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n"," ","@media (min-width: 480px)","{font-size:",i.default.font.size(17),";line-height:",i.default.font.size(25),";}");t.confirmationClass=y;var b=(0,a.css)("text-decoration:underline;color:#4279a3;");t.buttonSpanClass=b;var w=(0,a.css)("display:contents;border:none;background:none;");t.inlineButtonLinkClass=w;var C=(0,a.css)("transition:opacity ",l.SIGNUP_FADE_MS,"ms ease;");t.fadeClass=C;var E=(0,a.css)("opacity:0;");t.hideClass=E;var O=(0,a.css)("opacity:1;");t.showClass=O},T3n9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=t.getOrigin=t.add=void 0;t.getOrigin=function(e,t){if(e)return e;switch(t){case"production":return"https://myaccount.nytimes.com";case"staging":return"https://myaccount.stg.nytimes.com";case"local":return"https://myaccount-sbx.dev.nytimes.com";default:return"https://myaccount.nytimes.com"}};t.add=function(e){try{(window.dataLayer=window.dataLayer||[]).push(e)}catch(e){console.log("datalayer push error")}};t.loadScript=function(e){var t=e.src,n=e.scriptLoaded,o=e.clientId,a=e.campaignId,r=e.handleIframeLoadFailure,i=window.document.createElement("script");i.type="text/javascript",i.src=t,i.async=!0,i.onload=function(){n&&(window[n]=!0)},i.onerror=function(){r({clientId:o,campaignId:a})},window.document.head.appendChild(i)}},Yiea:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.summaryClass=t.overlayClass=t.modalClass=t.dismissClass=void 0;var a=n("hAwj"),r=n("Lcdh"),i=o(n("jVmh")),s=(0,r.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:",i.default.zIndex.overlay,";background-color:",a.dark.colors.background.primary.transform(i.default.setAlpha(.5)).rgba,";opacity:1;");t.overlayClass=s;var l=(0,r.css)("text-align:center;position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:unset;padding:32px 20px 40px;box-shadow:none;border-radius:0;background-color:",a.light.colors.background.primary.hex,";font-family:",i.default.font.franklinBase,";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:",a.color.content.primary,";z-index:",i.default.zIndex.interstitialModal,";",i.default.breakpoint.small,"{width:450px;left:50%;top:50%;border-radius:3px;box-shadow:0 0 8px ",a.dark.colors.background.primary.transform(i.default.setAlpha(.2)).rgba,";right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;padding:32px 30px 40px 30px;}");t.modalClass=l;var d=(0,r.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:",a.light.colors.background.primary.hex,";");t.dismissClass=d;var u=(0,r.css)("display:block;font-family:",i.default.font.serifMedium,";font-size:",i.default.font.size(24),";line-height:26px;text-align:center;color:",a.color.black,";font-style:normal;margin-bottom:10px;padding:0 16px;");t.summaryClass=u},hn76:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ConfirmationCard=void 0;var a=o(n("ERkP")),r=n("Lcdh"),i=n("R5ZL"),s=n("Fldo"),l=n("iPtA"),d=function(e){var t=e.newsletter,n=e.enableFadeTransition,o=e.isVisible,d=e.overrideFadeTimeMs,u=e.skipEnter,c="inline-signup-".concat(t.getData().title),f=(0,l.getInArticleConfirmationText)(t),p=(0,l.getInArticleConfirmationCTAText)(t);return a.default.createElement(s.FadeInOut,{enableFadeTransition:n,isVisible:o,overrideFadeTimeMs:d,key:c,skipEnter:u},a.default.createElement("div",{className:(0,r.cx)(i.signupContainerClass)},a.default.createElement("div",{className:(0,r.cx)(i.signupContentContainerClass)},a.default.createElement("span",{className:(0,r.cx)(i.confirmationClass),"data-testid":"confirmation"},f," ",a.default.createElement("a",{href:"/newsletters"},p)))))};t.ConfirmationCard=d,d.displayName="ConfirmationCard";var u=d;t.default=u},kRXy:function(e,t,n){"use strict";var o=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("ERkP")),i=n("Lcdh"),s=o(n("2t5v")),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n("Yiea")),d=o(n("/qPl"));function u(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,n=new window.WeakMap;return(u=function(e){return e?n:t})(e)}var c=function(e){var t=e.host,n=e.onLogin,o=e.newsletter,a=e.lireParams,u=e.isOpen,c=e.handleClose,f=e.overlayClassName,p=e.modalClassName,m=e.dismissClassName,v=e.closeIconStroke;return r.default.createElement(s.default,{isOpen:u,handleClose:c,overlayClassName:(0,i.cx)(l.overlayClass,f),className:(0,i.cx)(l.modalClass,p),dismissClassName:(0,i.cx)(l.dismissClass,m),contentLabel:"Log in and Registration",role:"dialog",closeIconStroke:v,shouldFocusAfterRender:!0,shouldReturnFocusAfterClose:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0},r.default.createElement(d.default,{host:t,onLogin:function(){c(),n()},newsletter:o,lireParams:a}))};c.displayName="LireLoginModal";var f=c;t.default=f},nJD8:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.overlayClass=t.modalClass=t.dismissIconClass=t.dismissClass=t.bodyOpenClass=void 0;var a=n("Lcdh"),r=o(n("jVmh")),i=(0,a.css)("position:fixed;width:100%;overflow:hidden;");t.bodyOpenClass=i;var s=(0,a.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:",r.default.zIndex.overlay,";background-color:rgba(0,0,0,0.5);opacity:1;");t.overlayClass=s;var l=(0,a.css)("position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:100%;box-shadow:none;border-radius:0;background-color:",r.default.color.white,";font-family:",r.default.font.franklinBase,";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:",r.default.color.black,";z-index:",r.default.zIndex.interstitialModal,";",r.default.breakpoint.small,"{width:450px;left:50%;top:50%;right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,0.2);}");t.modalClass=l;var d=(0,a.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:",r.default.color.white,";");t.dismissClass=d;var u=(0,a.css)("display:block;width:15px;height:15px;");t.dismissIconClass=u},rgDx:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.enableBodyScroll=t.disableBodyScroll=t.clearAllBodyScrollLocks=void 0;var a=o(n("RIqP")),r=!1;if("undefined"!=typeof window){var i={get passive(){r=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var s,l,d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),u=[],c=!1,f=-1,p=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){window.setTimeout((function(){void 0!==l&&(window.document.body.style.paddingRight=l,l=void 0),void 0!==s&&(window.document.body.style.overflow=s,s=void 0)}))};t.disableBodyScroll=function(e,t){if(d){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};u=[].concat((0,a.default)(u),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(f=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-f;!p(e.target)&&(0===(null==t?void 0:t.scrollTop)&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},c||(window.document.addEventListener("touchmove",m,r?{passive:!1}:void 0),c=!0)}}else{!function(e){window.setTimeout((function(){if(void 0===l){var t=!0==!(null==e||!e.reserveScrollBarGap),n=window.innerWidth-window.document.documentElement.clientWidth;t&&n>0&&(l=window.document.body.style.paddingRight,window.document.body.style.paddingRight="".concat(n,"px"))}void 0===s&&(s=window.document.body.style.overflow,window.document.body.style.overflow="hidden")}))}(t);var o={targetElement:e,options:t||{}};u=[].concat((0,a.default)(u),[o])}};t.clearAllBodyScrollLocks=function(){d?(u.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),c&&(window.document.removeEventListener("touchmove",m,r?{passive:!1}:void 0),c=!1),u=[],f=-1):(v(),u=[])};t.enableBodyScroll=function(e){if(d){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),c&&0===u.length&&(window.document.removeEventListener("touchmove",m,r?{passive:!1}:void 0),c=!1)}else 1===u.length&&u[0].targetElement===e?(v(),u=[]):u=u.filter((function(t){return t.targetElement!==e}))}},tWFX:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SignupCardInline=void 0;var a=o(n("ERkP")),r=n("Lcdh"),i=n("R5ZL"),s=n("Fldo"),l=n("iPtA"),d=function(e){var t=e.newsletter,n=e.user,o=e.heading,d=e.summary,u=e.onClick,c=void 0===u?function(){return null}:u,f=e.enableFadeTransition,p=e.isVisible,m=e.overrideFadeTimeMs,v=e.skipEnter,h=e.hideSubscribeButton,g=(0,l.getInArticleSignupText)(t,n),y="inline-signup-".concat(t.getData().title);return a.default.createElement(s.FadeInOut,{enableFadeTransition:f,isVisible:p,overrideFadeTimeMs:m,key:y,skipEnter:v},a.default.createElement("div",{className:i.signupContainerClass},a.default.createElement("div",{className:i.signupContentContainerClass},a.default.createElement("div",{className:i.signupMessageContainerClass},a.default.createElement("div",{className:i.signupMessageFullWidthClass},o&&a.default.createElement("span",{className:i.headingClass},o,"  "),a.default.createElement("span",{className:i.summaryClass},d,!h&&a.default.createElement(a.default.Fragment,null," ",a.default.createElement("button",{"data-testid":"signup-button",className:i.inlineButtonLinkClass,type:"button",onClick:c},a.default.createElement("span",{"data-testid":"signup-button-span",className:(0,r.cx)(i.summaryClass,i.buttonSpanClass)},g)))))))))};t.SignupCardInline=d,d.displayName="SignupCardInline";var u=d;t.default=u},"wMr/":function(e,t,n){"use strict";var o=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("lSNA")),i=o(n("lwsE")),s=o(n("W8MJ")),l=o(n("7W2i")),d=o(n("a1gu")),u=o(n("Nsbk")),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n("ERkP")),f=(o(n("17x9")),n("T3n9"));function p(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,n=new window.WeakMap;return(p=function(e){return e?n:t})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,d.default)(this,n)}}var h=function(e){(0,f.add)({event:"moduleInteraction",eventData:{type:"response",trigger:"module"},module:{name:"unified-lire",label:e.clientId,context:e.campaignId,region:"embed",element:{name:"iframe load failure",label:"10 seconds timeout exceeded",url:""}}})},g=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var o;(0,i.default)(this,n),o=t.call(this,e),window.LireUILoaded=window.LireUILoaded||!1;var a=Math.ceil(1e6*Math.random());return o.containerId="unified-lire-iframe-container-".concat(a),o.formId="form-".concat(a),o}return(0,s.default)(n,[{key:"shouldComponentUpdate",value:function(e){return window.LireUIForms&&window.LireUIForms[this.formId]&&e.isVisible!==this.props.isVisible&&window.LireUIForms[this.formId].update({isVisible:e.isVisible}),!1}},{key:"componentDidMount",value:function(){var e=(0,f.getOrigin)(this.props.host,this.props.env);if(window.LireUI=window.LireUI||[],window.LireUI.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({container:"#".concat(this.containerId),hostName:e,form_id:this.formId},this.props)),!window.LireUILoaded){var t,n,o={src:"".concat(e,"/unified_lire/js/standalone-client.bundle.js"),scriptLoaded:"LireUILoaded",clientId:(null===(t=this.props.params)||void 0===t?void 0:t.client_id)||null,campaignId:(null===(n=this.props.params)||void 0===n?void 0:n.campaign_id)||null,handleIframeLoadFailure:h};(0,f.loadScript)(o)}}},{key:"render",value:function(){return c.default.createElement("div",{id:this.containerId,name:"user-profile-iframe",style:{minHeight:this.props.initialHeight}})}}]),n}(c.Component);g.displayName="Lire",g.defaultProps={isVisible:!1,env:"production",host:"",initialHeight:420,smartlockMessage:{}};var y=g;t.default=y}}]); })();
//# sourceMappingURL=vendors~emailsignup-2be2b84ba4c4171c29af.js.map