(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"2t5v":function(e,t,o){"use strict";var n=o("TqRt"),r=o("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("lwsE")),i=n(o("W8MJ")),l=n(o("7W2i")),s=n(o("a1gu")),c=n(o("Nsbk")),u=g(o("ERkP")),d=n(o("17x9")),f=o("Lcdh"),p=n(o("9rZX")),v=n(o("jVmh")),m=n(o("H32Z")),y=g(o("nJD8")),h=o("rgDx");function b(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,o=new window.WeakMap;return(b=function(e){return e?o:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var o=b(t);if(o&&o.has(e))return o.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,o&&o.set(e,n),n}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return(0,s.default)(this,o)}}d.default.func,d.default.node,d.default.string,d.default.shape,d.default.bool;var O=function(e){(0,l.default)(o,e);var t=w(o);function o(){var e;(0,a.default)(this,o);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).targetElement=null,e}return(0,i.default)(o,[{key:"componentDidMount",value:function(){p.default.setAppElement("body"),this.targetElement=window.document.querySelector("#sharedui-modal")}},{key:"componentWillUnmount",value:function(){(0,h.clearAllBodyScrollLocks)()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpen;e.isOpen!==t&&(t?(0,h.disableBodyScroll)(this.targetElement):(0,h.enableBodyScroll)(this.targetElement))}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.isOpen,n=e.handleClose,r=e.onAfterOpen,a=e.overlayClassName,i=e.className,l=e.dismissClassName,s=e.contentLabel,c=e.role,d=e.shouldFocusAfterRender,h=e.shouldCloseOnOverlayClick,b=e.shouldCloseOnEsc,g=e.shouldReturnFocusAfterClose,w=e.aria,O=e.overlayRef,k=e.contentRef,j=e.closeIconStroke;return u.default.createElement(p.default,{id:"sharedui-modal",isOpen:o,overlayClassName:(0,f.cx)(y.overlayClass,a),className:(0,f.cx)(y.modalClass,i),bodyOpenClassName:y.bodyOpenClass,onAfterOpen:r,onRequestClose:n,contentLabel:s,role:c,shouldFocusAfterRender:d,shouldCloseOnOverlayClick:h,shouldCloseOnEsc:b,shouldReturnFocusAfterClose:g,aria:w,overlayRef:O,contentRef:k,ariaHideApp:!0},t,u.default.createElement("button",{type:"button",className:(0,f.cx)(y.dismissClass,l),onClick:n},u.default.createElement("i",{className:y.dismissIconClass},u.default.createElement(m.default,{stroke:j}),u.default.createElement("span",{className:v.default.a11y.visuallyHidden},"Close Modal"))))}}]),o}(u.Component);O.displayName="Modal",O.defaultProps={onAfterOpen:function(){},overlayClassName:void 0,className:void 0,dismissClassName:void 0,contentLabel:"",role:"dialog",shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,shouldReturnFocusAfterClose:!0,aria:{},overlayRef:function(){},contentRef:function(){},closeIconStroke:"#555"};var k=O;t.default=k},H32Z:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(o("ERkP")),a=(n(o("17x9")),n(o("jVmh")));function i(e){var t=e.className,o=e.stroke,n=e.strokeWidth;return r.default.createElement("svg",{className:t,viewBox:"0 0 12 12",stroke:o,strokeWidth:n,strokeLinecap:"round",style:{opacity:.95}},r.default.createElement("line",{x1:"11",y1:"1",x2:"1",y2:"11"}),r.default.createElement("line",{x1:"1",y1:"1",x2:"11",y2:"11"}))}i.displayName="CloseIcon",i.defaultProps={className:void 0,stroke:a.default.color.black,strokeWidth:"1"}},T3n9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=t.getOrigin=t.add=void 0;t.getOrigin=function(e,t){if(e)return e;switch(t){case"production":return"https://myaccount.nytimes.com";case"staging":return"https://myaccount.stg.nytimes.com";case"local":return"https://myaccount-sbx.dev.nytimes.com";default:return"https://myaccount.nytimes.com"}};t.add=function(e){try{(window.dataLayer=window.dataLayer||[]).push(e)}catch(e){console.log("datalayer push error")}};t.loadScript=function(e){var t=e.src,o=e.scriptLoaded,n=e.clientId,r=e.campaignId,a=e.handleIframeLoadFailure,i=window.document.createElement("script");i.type="text/javascript",i.src=t,i.async=!0,i.onload=function(){o&&(window[o]=!0)},i.onerror=function(){a({clientId:n,campaignId:r})},window.document.head.appendChild(i)}},draa:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("lSNA")),a=n(o("ERkP")),i=(n(o("17x9")),n(o("wMr/")));function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){(0,r.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c=function(e){var t=e.params,o=(t=void 0===t?{}:t).redirect_uri,n=void 0===o?"https://www.nytimes.com":o,r=t.response_type,l=void 0===r?"cookie":r,c=t.client_id,u=s({redirect_uri:n,response_type:l,client_id:void 0===c?"shared-ui":c},e.params);return a.default.createElement(i.default,s(s({},e),{},{params:u}))};t.default=c},nJD8:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.overlayClass=t.modalClass=t.dismissIconClass=t.dismissClass=t.bodyOpenClass=void 0;var r=o("Lcdh"),a=n(o("jVmh")),i=(0,r.css)("position:fixed;width:100%;overflow:hidden;");t.bodyOpenClass=i;var l=(0,r.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:",a.default.zIndex.overlay,";background-color:rgba(0,0,0,0.5);opacity:1;");t.overlayClass=l;var s=(0,r.css)("position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:100%;box-shadow:none;border-radius:0;background-color:",a.default.color.white,";font-family:",a.default.font.franklinBase,";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:",a.default.color.black,";z-index:",a.default.zIndex.interstitialModal,";",a.default.breakpoint.small,"{width:450px;left:50%;top:50%;right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,0.2);}");t.modalClass=s;var c=(0,r.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:",a.default.color.white,";");t.dismissClass=c;var u=(0,r.css)("display:block;width:15px;height:15px;");t.dismissIconClass=u},rgDx:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.enableBodyScroll=t.disableBodyScroll=t.clearAllBodyScrollLocks=void 0;var r=n(o("RIqP")),a=!1;if("undefined"!=typeof window){var i={get passive(){a=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var l,s,c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),u=[],d=!1,f=-1,p=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){window.setTimeout((function(){void 0!==s&&(window.document.body.style.paddingRight=s,s=void 0),void 0!==l&&(window.document.body.style.overflow=l,l=void 0)}))};t.disableBodyScroll=function(e,t){if(c){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};u=[].concat((0,r.default)(u),[o]),e.ontouchstart=function(e){1===e.targetTouches.length&&(f=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-f;!p(e.target)&&(0===(null==t?void 0:t.scrollTop)&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?v(e):e.stopPropagation())}(t,e)},d||(window.document.addEventListener("touchmove",v,a?{passive:!1}:void 0),d=!0)}}else{!function(e){window.setTimeout((function(){if(void 0===s){var t=!0==!(null==e||!e.reserveScrollBarGap),o=window.innerWidth-window.document.documentElement.clientWidth;t&&o>0&&(s=window.document.body.style.paddingRight,window.document.body.style.paddingRight="".concat(o,"px"))}void 0===l&&(l=window.document.body.style.overflow,window.document.body.style.overflow="hidden")}))}(t);var n={targetElement:e,options:t||{}};u=[].concat((0,r.default)(u),[n])}};t.clearAllBodyScrollLocks=function(){c?(u.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(window.document.removeEventListener("touchmove",v,a?{passive:!1}:void 0),d=!1),u=[],f=-1):(m(),u=[])};t.enableBodyScroll=function(e){if(c){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),d&&0===u.length&&(window.document.removeEventListener("touchmove",v,a?{passive:!1}:void 0),d=!1)}else 1===u.length&&u[0].targetElement===e?(m(),u=[]):u=u.filter((function(t){return t.targetElement!==e}))}},"wMr/":function(e,t,o){"use strict";var n=o("TqRt"),r=o("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("lSNA")),i=n(o("lwsE")),l=n(o("W8MJ")),s=n(o("7W2i")),c=n(o("a1gu")),u=n(o("Nsbk")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var o=p(t);if(o&&o.has(e))return o.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,o&&o.set(e,n);return n}(o("ERkP")),f=(n(o("17x9")),o("T3n9"));function p(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,o=new window.WeakMap;return(p=function(e){return e?o:t})(e)}function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return(0,c.default)(this,o)}}var y=function(e){(0,f.add)({event:"moduleInteraction",eventData:{type:"response",trigger:"module"},module:{name:"unified-lire",label:e.clientId,context:e.campaignId,region:"embed",element:{name:"iframe load failure",label:"10 seconds timeout exceeded",url:""}}})},h=function(e){(0,s.default)(o,e);var t=m(o);function o(e){var n;(0,i.default)(this,o),n=t.call(this,e),window.LireUILoaded=window.LireUILoaded||!1;var r=Math.ceil(1e6*Math.random());return n.containerId="unified-lire-iframe-container-".concat(r),n.formId="form-".concat(r),n}return(0,l.default)(o,[{key:"shouldComponentUpdate",value:function(e){return window.LireUIForms&&window.LireUIForms[this.formId]&&e.isVisible!==this.props.isVisible&&window.LireUIForms[this.formId].update({isVisible:e.isVisible}),!1}},{key:"componentDidMount",value:function(){var e=(0,f.getOrigin)(this.props.host,this.props.env);if(window.LireUI=window.LireUI||[],window.LireUI.push(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){(0,a.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({container:"#".concat(this.containerId),hostName:e,form_id:this.formId},this.props)),!window.LireUILoaded){var t,o,n={src:"".concat(e,"/unified_lire/js/standalone-client.bundle.js"),scriptLoaded:"LireUILoaded",clientId:(null===(t=this.props.params)||void 0===t?void 0:t.client_id)||null,campaignId:(null===(o=this.props.params)||void 0===o?void 0:o.campaign_id)||null,handleIframeLoadFailure:y};(0,f.loadScript)(n)}}},{key:"render",value:function(){return d.default.createElement("div",{id:this.containerId,name:"user-profile-iframe",style:{minHeight:this.props.initialHeight}})}}]),o}(d.Component);h.displayName="Lire",h.defaultProps={isVisible:!1,env:"production",host:"",initialHeight:420,smartlockMessage:{}};var b=h;t.default=b}}]); })();
//# sourceMappingURL=vendors~ask-c6008b4bb9e46478592c.js.map