(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3HAd":function(e,t,r){"use strict";var n=r("TqRt"),o=r("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("lwsE")),i=n(r("W8MJ")),l=n(r("7W2i")),u=n(r("a1gu")),c=n(r("Nsbk")),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("ERkP")),d=(n(r("17x9")),n(r("7lNF")));function f(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,r=new window.WeakMap;return(f=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}var y=function(e){(0,l.default)(r,e);var t=p(r);function r(){var e;(0,a.default)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return(0,i.default)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?s.default.createElement(d.default,{ratio:this.props.ratio,width:this.props.width,height:this.props.height}):this.props.children}}]),r}(s.Component);t.default=y,y.defaultProps={ratio:"16:9",width:"600px",height:"auto"},y.displayName="ErrorBoundary"},"780X":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"canUseDOM",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"computeAspectRatio",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"isNumeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"loadApi",{enumerable:!0,get:function(){return a.default}});var o=n(r("rhfU")),a=n(r("ulPM")),i=n(r("r4tx")),l=n(r("BjNA"))},"7lNF":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("lSNA")),a=n(r("ERkP")),i=(n(r("17x9")),r("hAwj")),l=r("Lcdh");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=(0,l.css)({backgroundColor:i.color.background.secondary,position:"relative",a:{color:i.color.signal.editorial,textDecoration:"underline"}}),d=function(e,t){return{width:e,height:t}},f=(0,l.css)({WebkitFontSmoothing:"antialiased",color:i.color.content.secondary,fontFamily:"'franklin', 'nyt-franklin', arial, helvetica, sans-serif",fontSize:"13px",fontWeight:"700",lineHeight:"18px",padding:"5px 30px",margin:0,boxSizing:"border-box",textAlign:"center",textRendering:"optimizeLegibility",width:"100%"}),p=function(e){var t=e.className,r=e.width,n=e.height,o=e.message,i=e.style;return a.default.createElement("div",{"data-testid":"error-slate",className:(0,l.cx)(s,t),style:c(c({},d(r,n)),i)},a.default.createElement("p",{className:f},a.default.createElement("span",{style:{fontSize:"25px",position:"relative",top:"5px"}},"⚠"),o))};p.displayName="ErrorSlate",p.defaultProps={className:void 0,width:"600px",height:"auto",message:"There was an error loading the player. Please refresh to try again.",style:{}};var y=p;t.default=y},BjNA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if("string"!=typeof e&&(e="16:9"),e.match(/\d+%/))return e;e.match(/\d+\.\d+/)&&!e.match(/:/)&&(e="".concat(e,":1"));var t=0,r=e.split(":");return 2===r.length&&(t=Math.round(r[1]/r[0]*1e4)/100),t};t.default=n},Ez85:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("lSNA")),a=n(r("QILm")),i=n(r("lwsE")),l=n(r("W8MJ")),u=n(r("7W2i")),c=n(r("a1gu")),s=n(r("Nsbk")),d=r("ERkP"),f=(n(r("17x9")),r("780X")),p=["children"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var h=function(e){(0,u.default)(r,e);var t=v(r);function r(){var e;(0,i.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).isServer=!f.canUseDOM,e.state={apiReady:!e.isServer&&!!window.__VHS__},e.getVHS=function(){return window.__VHS__},e}return(0,l.default)(r,[{key:"componentDidMount",value:function(){var e=this;this.isServer||this.state.apiReady||(0,f.loadApi)((function(){e.setState({apiReady:!0})}))}},{key:"render",value:function(){var e=this.props,t=e.children,r=(0,a.default)(e,p);return this.state.apiReady&&"function"==typeof t?t(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({VHS:this.getVHS()},r)):null}}]),r}(d.Component);t.default=h,h.defaultProps={children:void 0},h.displayName="DependencyLoader"},Ftn4:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){return i.default.createElement(l.default,null,(function(r){return i.default.createElement(e,(0,a.default)({},r,t))}))};try{var r=e.propTypes,n=(r.VHS,(0,o.default)(r,u),e.defaultProps),s=(n.VHS,(0,o.default)(n,c));t.defaultProps=s}catch(e){}return t.displayName="WithDependencyLoader(".concat(e.displayName,")"),t};var o=n(r("QILm")),a=n(r("pVnL")),i=n(r("ERkP")),l=n(r("Ez85")),u=["VHS"],c=["VHS"]},ZKyK:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AudioPlayer",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"VideoPlayer",{enumerable:!0,get:function(){return o.default}});var o=n(r("dxZi")),a=n(r("jT2p"))},dxZi:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("ERkP")),a=n(r("3HAd")),i=n(r("wyl1"));t.default=function(e){return o.default.createElement(a.default,e,o.default.createElement(i.default,e))}},jT2p:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("pVnL")),a=n(r("ERkP")),i=n(r("3HAd")),l=n(r("mYUk"));t.default=function(e){return a.default.createElement(i.default,(0,o.default)({},e,{height:"40px",ratio:"0"}),a.default.createElement(l.default,e))}},mYUk:function(e,t,r){"use strict";var n=r("TqRt"),o=r("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i,l,u=n(r("lSNA")),c=n(r("lwsE")),s=n(r("W8MJ")),d=n(r("7W2i")),f=n(r("a1gu")),p=n(r("Nsbk")),y=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("ERkP")),v=(n(r("17x9")),n(r("Ftn4")));function h(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,r=new window.WeakMap;return(h=function(e){return e?r:t})(e)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.default)(e);if(t){var o=(0,p.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var g={INITIALIZING:"initializing",LOAD_NEW_VIDEO:"load_new_video",READY:"ready",LOAD_START:"loadstart",PLAY:"play",PAUSE:"pause",ENDED:"ended"},b={INITIALIZING:"onInitializing",READY:"onReady",LOAD_START:"onLoadStart",PLAY:"onPlay",PAUSE:"onPause",ENDED:"onEnded"},m=["className","playerClassName","playerRef","VHS","onReady","onLoadStart","onPlay","onPause","onEnded","onErrorLoadingPlayer"],w=(0,v.default)((l=i=function(e){(0,d.default)(r,e);var t=E(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).playerStatus=null,e.state={playerCreated:!1},e}return(0,s.default)(r,[{key:"componentDidMount",value:function(){if(null===this.playerStatus){if(!this.props.VHS){throw console.error("VHS did not load"),"function"==typeof this.props.onErrorLoadingPlayer&&this.props.onErrorLoadingPlayer(),new Error("VHS did not load")}this.initPlayer()}}},{key:"shouldComponentUpdate",value:function(e,t){return null!==this.playerStatus&&e.src!==this.props.src||this.state.playerCreated!==t.playerCreated}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.updatePlayer(e)}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"initPlayer",value:function(){var e=this;this.playerStatus=g.INITIALIZING,this.destroyPlayer((function(){e.player=e.props.VHS.audio(e.playerConfig),e.bindPlayerEvents(),e.setState((function(){return{playerCreated:!0}})),"function"==typeof e.props.playerRef&&e.props.playerRef(e.player)}))}},{key:"propsForConfig",get:function(){var e=this;return Object.keys(this.props).reduce((function(t,r){return-1===m.indexOf(r)?O(O({},t),{},(0,u.default)({},r,e.props[r])):t}),{})}},{key:"playerConfig",get:function(){var e=this.propsForConfig;return e.container=this.playerElement,e}},{key:"bindPlayerEvents",value:function(){var e=this;Object.keys(this.player.events).filter((function(e){return void 0!==g[e]})).forEach((function(t){e.player.on(e.player.events[t],(function(){e.playerStatus=e.player.events[t];var r=b[t],n=e.props[r];"function"==typeof n&&n()}))}))}},{key:"updatePlayer",value:function(e){if(this.player){if("string"==typeof e.src&&e.src!==this.props.src&&this.player.load({src:e.src}),this.props.audioControls.layout!==e.audioControls.layout){var t=this.player.store.getState();t.plugins.audioControls.layout=e.audioControls.layout,this.player.store.setState(t)}if(this.props.forceHover!==e.forceHover){var r=this.player.store.getState();r.plugins.audioControls.forceHover=e.forceHover,this.player.store.setState(r)}}}},{key:"destroyPlayer",value:function(e){this.playerStatus=null,this.player&&"function"==typeof this.player.destroy?this.player.destroy(e):"function"==typeof e&&e()}},{key:"render",value:function(){var e=this,t=this.props,r=t.audioControls,n=t.className,o=t.playerClassName,a=t.width,i=t.forceError,l=t.style;if(i)throw new Error("Forced error for error boundary testing.");var u="react-vhs-container";"string"==typeof n&&(u+=" ".concat(n));var c="react-vhs-player";"string"==typeof o&&(c+=" ".concat(o));var s={width:a};"v2"===r.version&&(s.height="100%",s.width="100%",s.position="relative",s.WebkitTapHighlightColor="transparent"),s=O(O({},s),l);var d={},f=O({height:"40px",padding:"0"},r),p=f.height,v=f.padding;return d.height=p,d.padding=v,y.default.createElement("div",{className:u,style:s},y.default.createElement("div",{ref:function(t){e.playerElement=t},className:c,style:d}))}}]),r}(y.Component),i.displayName="AudioPlayer",i.defaultProps={className:void 0,onErrorLoadingPlayer:void 0,playerClassName:void 0,playerRef:void 0,style:{},width:"100%",forceHover:!1,onReady:void 0,onLoadStart:void 0,onPlay:void 0,onPause:void 0,onEnded:void 0,gtmTrackEvent:function(){},env:"production",audioControls:{}},a=l))||a;w.displayName="AudioPlayer";var S=w;t.default=S},qjeA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if("function"==typeof window.requirejs)window.requirejs([e],(function(e){return t(e)}));else{var r=window.document.getElementsByTagName("head")[0],n=window.document.createElement("script");n.loaded=!1,n.async=1;var o=function(){n.readyState&&!/^c|loade/.test(n.readyState)||n.loaded||(n.loaded=!0,n.onerror=null,n.onreadystatechange=null,n.onload=null,t())};n.onload=o,n.onerror=o,n.src=e,r.insertBefore(n,r.lastChild)}};t.default=n},r4tx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n},rhfU:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return!window.isNaN(window.parseFloat(e))&&window.isFinite(e)};t.default=n},ulPM:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,i=n(r("cDf5")),l=n(r("qjeA")),u="object"===("undefined"==typeof window?"undefined":(0,i.default)(window))&&null!==(o=window.vi)&&void 0!==o&&null!==(a=o.env)&&void 0!==a&&a.VHS_BASE_URL?"".concat(window.vi.env.VHS_BASE_URL,"vhs.min.js"):"https://static01.nyt.com/video-static/vhs3/vhs.min.js",c=function(e){var t=window||{},r=null;t.VHS_PLAYER_DEPS_LOADING?r=t.setInterval((function(){t.__VHS__&&(t.VHS_PLAYER_DEPS_LOADING=null,t.clearInterval(r),e())}),100):(t.VHS_PLAYER_DEPS_LOADING=!0,(0,l.default)(u,e))};t.default=c},wyl1:function(e,t,r){"use strict";var n=r("TqRt"),o=r("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i,l,u=n(r("lSNA")),c=n(r("lwsE")),s=n(r("W8MJ")),d=n(r("7W2i")),f=n(r("a1gu")),p=n(r("Nsbk")),y=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=P(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("ERkP")),v=(n(r("17x9")),n(r("Ftn4"))),h=r("780X");function P(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,r=new window.WeakMap;return(P=function(e){return e?r:t})(e)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.default)(e);if(t){var o=(0,p.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var b={INITIALIZING:"initializing",LOAD_NEW_VIDEO:"load_new_video",MEDIA_ELEMENT_MOUNTED:"mediaelementmounted",AD_STARTED:"adstarted",AD_COMPLETED:"adcompleted",AD_SKIPPED:"adskipped",READY:"ready",LOAD_START:"loadstart",PLAY:"play",PAUSE:"pause",ENDED:"ended",GO_FULLSCREEN:"gofullscreen",EXIT_FULLSCREEN:"exitfullscreen"},m={INITIALIZING:"onInitializing",LOAD_NEW_VIDEO:"onLoadNewVideo",MEDIA_ELEMENT_MOUNTED:"onMediaElementMounted",AD_STARTED:"onAdStarted",AD_COMPLETED:"onAdCompleted",AD_SKIPPED:"onAdSkipped",READY:"onReady",LOAD_START:"onLoadStart",PLAY:"onPlay",PAUSE:"onPause",ENDED:"onEnded",GO_FULLSCREEN:"onGoFullscreen",EXIT_FULLSCREEN:"onExitFullscreen"},w=["className","playerClassName","playerRef","VHS","onInitializing","onLoadNewVideo","onMediaElementMounted","onAdStarted","onAdCompleted","onAdSkipped","onReady","onLoadStart","onPlay","onPause","onEnded","onGoFullscreen","onExitFullscreen","onErrorLoadingPlayer"],S=(0,v.default)((l=i=function(e){(0,d.default)(r,e);var t=g(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).playerStatus=null,e.state={playerCreated:!1},e}return(0,s.default)(r,[{key:"componentDidMount",value:function(){if(null===this.playerStatus){if(!this.props.VHS){throw console.error("VHS did not load"),"function"==typeof this.props.onErrorLoadingPlayer&&this.props.onErrorLoadingPlayer(),new Error("VHS did not load")}this.initPlayer()}}},{key:"shouldComponentUpdate",value:function(e,t){return null!==this.playerStatus&&e.id!==this.props.id||this.state.playerCreated!==t.playerCreated}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.updatePlayer(e)}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"initPlayer",value:function(){var e=this;this.playerStatus=b.INITIALIZING,this.destroyPlayer((function(){e.player=e.props.VHS(e.playerConfig),e.bindPlayerEvents(),e.setState((function(){return{playerCreated:!0}})),"function"==typeof e.props.playerRef&&e.props.playerRef(e.player)}))}},{key:"propsForConfig",get:function(){var e=this;return Object.keys(this.props).reduce((function(t,r){return-1===w.indexOf(r)?E(E({},t),{},(0,u.default)({},r,e.props[r])):t}),{})}},{key:"playerConfig",get:function(){var e=this.propsForConfig;return e.width="100%",e.height="100%",e.container=this.playerElement,e}},{key:"bindPlayerEvents",value:function(){var e=this;Object.keys(this.player.events).filter((function(e){return void 0!==b[e]})).forEach((function(t){e.player.on(e.player.events[t],(function(){e.playerStatus=e.player.events[t];var r=m[t],n=e.props[r];if("function"==typeof n){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n.apply(void 0,a.concat([e.player]))}}))}))}},{key:"updatePlayer",value:function(e){this.player&&(0,h.isNumeric)(e.id)&&(0,h.isNumeric)(this.props.id)&&e.id!==this.props.id&&this.player.load(e.id)}},{key:"destroyPlayer",value:function(e){this.playerStatus=null,this.player&&"function"==typeof this.player.destroy?this.player.destroy(e):"function"==typeof e&&e()}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.playerClassName,o=t.ratio,a=t.width;if(t.forceError)throw new Error("Forced error for error boundary testing.");var i=(0,h.computeAspectRatio)(o),l="react-vhs-container";"string"==typeof r&&(l+=" ".concat(r));var u="react-vhs-player";"string"==typeof n&&(u+=" ".concat(n));var c={position:"relative",width:a},s={};return"number"==typeof i&&0!==i?(c.height="auto",s.height=0,s.paddingBottom="".concat(i,"%")):c.height="100%",y.default.createElement("div",{className:l,style:c},y.default.createElement("div",{ref:function(t){e.playerElement=t},className:u,style:s}))}}]),r}(y.Component),i.displayName="VideoPlayer",i.defaultProps={className:void 0,onErrorLoadingPlayer:void 0,playerClassName:void 0,playerRef:void 0,width:"100%",height:"100%",onInitializing:void 0,onLoadNewVideo:void 0,onMediaElementMounted:void 0,onAdStarted:void 0,onAdCompleted:void 0,onAdSkipped:void 0,onReady:void 0,onLoadStart:void 0,onPlay:void 0,onPause:void 0,onEnded:void 0,onGoFullscreen:void 0,onExitFullscreen:void 0,controls:!0,env:"production",eventTracker:!1},a=l))||a;S.displayName="VideoPlayer";var j=S;t.default=j}}]); })();
//# sourceMappingURL=vendors~audio~capsule~card~clientSideCapsule~collections~explainer~home~liveAsset~paidpost~story~tre~698cb9e2-3fafe57b731fc315298f.js.map