(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[90],{ZGZg:function(e,t,n){"use strict";var a=n("gcR/"),o=n.n(a),i=n("lSNA"),r=n.n(i),l=(n("ERkP"),n("Lcdh")),c=n("ZKN5"),s=n("jVmh"),d=n.n(s),p=Object(l.css)("transition:all 250ms ease;background-color:",d.a.color.gray10,";border:1px solid ",d.a.color.gray10,";color:",d.a.color.white,";padding:10px 0;border-radius:3px;text-align:center;font-family:",d.a.font.franklinBase,";font-weight:",d.a.font.weight.mediumBold,";height:40px;font-size:",d.a.font.size(16),";line-height:",d.a.font.size(18),";text-shadow:0 0 4px rgba(0,0,0,0.15);&:disabled{background-color:",d.a.color.gray50,";border:1px solid ",d.a.color.gray50,";transition:background-color 250ms ease;cursor:not-allowed;}&:hover:not(:disabled){background-color:",d.a.color.gray20,";border:1px solid ",d.a.color.gray20,";}"),u=Object(l.css)("color:",d.a.color.gray10,";background-color:",d.a.color.white,";text-shadow:none;&:hover{color:",d.a.color.white,";background-color:",d.a.color.gray10,";}"),m=function(e){var t,n=e.children,a=e.className,i=e.dataTestID,c=e.disabled,s=e.disabledButtonClass,d=e.lightBackground,m=e.onClick;return o()("button",{type:"button",className:Object(l.cx)(p,a,(t={},r()(t,s,c),r()(t,u,d),t)),disabled:c,onClick:m,"data-testid":i||"get-started-button"},void 0,n)};m.displayName="GetStartedButton",m.defaultProps={children:null,className:void 0,dataTestID:"",disabled:!1,lightBackground:!1,disabledButtonClass:""};t.a=Object(c.a)(m)},hM0Q:function(e,t,n){"use strict";n.r(t);var a,o=n("gcR/"),i=n.n(o),r=(n("ERkP"),n("X6oL")),l=n("8Zj9"),c=n("PgO9"),s=n("caSQ"),d=n("L5vi"),p=n("EOBg"),u=n("7g2T"),m=n("ipDA"),g=n("/zLD"),f=n("Lcdh"),b=n("Ed5u"),h=n.n(b),x=n("jVmh"),w=n.n(x),y=h()([w.a.breakpoint.small,w.a.breakpoint.medium,"@media (min-width: 835px)",w.a.breakpoint.mediumLarge]),v=Object(f.css)("background-color:",w.a.color.white,";display:flex;flex-grow:1;flex-direction:column;"),O=Object(f.css)("font-family:",w.a.font.serifMedium,";font-weight:",w.a.font.weight.mediumLight,";text-align:center;align-self:center;margin-bottom:10px;@media (max-width:374px) and (min-height:550px){margin-bottom:8px;}",y({fontSize:[w.a.font.size(30),null,w.a.font.size(50),null],lineHeight:[w.a.font.size(40),null,w.a.font.size(55),null],marginBottom:["12px",null,"27px",null]}),";"),j=Object(f.css)("font-family:",w.a.font.franklinBase,";font-weight:",w.a.font.weight.medium,";font-size:",w.a.font.size(18),";line-height:",w.a.font.size(26),";text-align:center;"),k=Object(f.css)("@media (max-width:374px) and (min-height:550px){margin:3px auto 20px;}",y({margin:["8px auto 26px","10px auto 48px","25px auto 88px","25px auto 101px","0 auto 0"]}),";"),z=Object(f.css)("font-family:",w.a.font.franklinBase,";font-size:",w.a.font.size(11),";line-height:",w.a.font.size(16),";letter-spacing:0.07em;text-transform:uppercase;text-align:center;color:",w.a.color.gray30,";font-weight:",w.a.font.weight.mediumBold,";@media (max-width:374px) and (min-height:550px){margin-bottom:12px;}",y({marginBottom:["20px","48px","92px","101px","20px"]}),";"),N=function(){return i()("div",{className:v},void 0,i()("div",{className:k},void 0,i()("p",{className:z},void 0,"Welcome back"),i()("h1",{className:O},void 0,"Stay logged in."),i()("h2",{className:j},void 0,"Never worry about logging in again. ",a||(a=i()("br",{})),"Read your story in the app.")))};N.displayName="ReadInAppHeader";var _=N,B=n("wmnt"),T=n("lSNA"),P=n.n(T);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R,C,E={event:"moduleInteraction",eventData:{trigger:"module",type:"ob_click"}},A=S(S({},E),{},{module:{element:{name:"do-keep-reading",label:"Read in browser"},name:"interrupter",label:"WEB_ALL_CORE_APP_post_login_app_download_WW"}}),L=S(S({},E),{},{module:{element:{name:"goto-app-download",label:"Read in app"},name:"interrupter",label:"WEB_ALL_CORE_APP_post_login_app_download_WW"}}),I=S(S({},E),{},{module:{element:{name:"do-keep-reading",label:"Continue without subscribing"},name:"interrupter",label:"WEB_REGI_CORE_BAU_post_login_upsell"}}),U=function(){return{event:"impression"}},W=function(e){var t=e.articleData,n=e.articleUrl,a=e.handleDismissGateway,o=Object(r.useTracking)({module:{name:"App Download"}},{dispatchOnMount:U}).Track,l=Object(m.b)(),c=function(e){return e?{bylines:(null==e?void 0:e.bylines)||"",headline:(null==e?void 0:e.headline)||"",promotionalMedia:(t=e,r=null==t||null===(n=t.promotionalMedia)||void 0===n||null===(a=n.assetCrops)||void 0===a?void 0:a.find((function(e){return"SMALL_SQUARE"===e.name})),l=null==r||null===(o=r.renditions)||void 0===o?void 0:o.reduce((function(e,t){return t.height>e.height?t:e}),{height:0}),{caption:null==t||null===(i=t.promotionalMedia)||void 0===i?void 0:i.caption,square:null==l?void 0:l.url})}:null;var t,n,a,o,i,r,l}(t);return i()(o,{},void 0,i()("div",{className:B.c,"data-testid":"gateway-read-in-app"},void 0,R||(R=i()(g.a,{})),i()("div",{className:B.e},void 0,i()("div",{className:B.h},void 0,C||(C=i()(_,{})),i()(u.a,{device:l,article:c,readInAppTrackingObject:L,handleBackToReading:a,backToReadingTrackingObject:A,EXIT_URI:n,dismissText:"Read in browser"})))))};W.displayName="ReadInAppPrompt",W.defaultProps={articleData:null};var G,M,H,$,Y,q,Q=W,V=n("UDnU"),Z=h()(["@media (min-width: 375px)",w.a.breakpoint.medium,w.a.breakpoint.mediumLarge,"@media (min-width: 1220px)"]),J=h()(["@media (min-width: 768px) and (min-height: 1010px)","@media (min-width: 1024px) and (min-height: 1223px)"]),X=Object(f.css)("position:absolute;bottom:0;top:0;left:0;right:0;overflow-x:scroll;"),F=Object(f.css)(Z({gridTemplateColumns:[null,null,"[full-start] 0 [main-start] 1fr 160px 160px 1fr [main-end] 0 [full-end]","[full-start] 0 [main-start] 1fr 1fr 160px 160px 1fr 1fr [main-end] 0 [full-end]"],height:[null,null,"calc(100% - ".concat(V.a," - ").concat(V.b,")")]}),";"),K=Object(f.css)(J({alignSelf:[null,null,"end"]})),ee=Object(f.css)("text-transform:uppercase;font-weight:",w.a.font.weight.mediumBold,";text-align:center;font-family:",w.a.font.franklinBase,";color:",w.a.color.gray20,";",Z({fontSize:[w.a.font.size(12),null,w.a.font.size(14)],margin:["0px auto 12px","10px auto 20px","40px auto 24px"]})," @media (min-width:375px) and (max-width:740px) and (min-height:737px){margin:58px auto 25px;}",J({margin:[null,null,"200px auto 32px"]})),te=Object(f.css)("text-align:center;",Z({margin:["0 auto 15px","0 auto 23px","0 auto","0 auto 21px"],maxWidth:["290px","317px","575px","516px","575px"]})," h1{font-family:",w.a.font.serifMedium,";color:",w.a.color.gray10,";",Z({fontSize:[w.a.font.size(20),w.a.font.size(22),w.a.font.size(36)],lineHeight:[w.a.font.size(25),w.a.font.size(27),w.a.font.size(43)],marginBottom:["5px","8px","14px","22px"]}),"}p{line-height:",w.a.font.size(22),";font-family:",w.a.font.franklinBase,";color:",w.a.color.gray20,";",Z({fontSize:[w.a.font.size(14),null,w.a.font.size(16)]}),"}"),ne=Object(f.css)("border:2px solid ",w.a.color.bundleBasic,";box-sizing:border-box;",Z({height:[null,null,"186px"]})," ",J({marginTop:[null,"-10px"],marginBottom:["10px",null,"30px"]})," @supports (display:grid){",Z({gridColumn:["full","2 / span 2","3 / span 2","4 / span 2"]}),"}"),ae=Object(f.css)("text-align:center;background-color:",w.a.color.bundleBasic,";display:flex;align-items:center;height:27px;justify-content:center;letter-spacing:0.07em;p{color:",w.a.color.white,";font-size:",w.a.font.size(12),";font-weight:",w.a.font.weight.bold,";line-height:1;text-transform:uppercase;margin:0;}"),oe=Object(f.css)("s{color:rgba(51,51,51,0.5);}",Z({padding:["23px 0",null,"27px 0 0"]})),ie=Object(f.css)("font-family:",w.a.font.franklinBase,";font-weight:",w.a.font.weight.bold,";text-align:center;color:",w.a.color.gray10,";",Z({fontSize:[w.a.font.size(22),null,w.a.font.size(24)],lineHeight:[w.a.font.size(29),null,w.a.font.size(30)],width:["177px",null,"223px"],margin:["0 auto 15px",null,"0 auto 9px","0 auto 16px"]})),re=Object(f.css)("color:",w.a.color.gray20,";text-align:center;s{color:rgba(51,51,51,0.5);}",Z({fontSize:[w.a.font.size(15),null,w.a.font.size(14)],lineHeight:[w.a.font.size(18),null,w.a.font.size(17)]})),le=Object(f.css)("box-sizing:border-box;text-align:center;",Z({margin:["0 auto 33px","0 auto 57px"]})," @media (min-width:375px) and (max-width:740px) and (min-height:737px){margin:0 auto 83px;}",J({margin:[null,"-35px auto 125px","-70px auto 125px"]})),ce=Object(f.css)(w.a.button.base,";background-color:",w.a.color.gray10,";color:",w.a.color.white,";font-family:",w.a.font.franklinBase,";font-weight:",w.a.font.weight.mediumBold,";margin-bottom:21px;height:40px;display:block;line-height:42px;",Z({width:["280px","296px","340px"]})),se=Object(f.css)("text-decoration-line:underline;color:",w.a.color.gray10,";font-weight:",w.a.font.weight.mediumBold,";display:block;margin:0 auto;padding-top:2px;font-family:",w.a.font.franklinBase,";background-color:",w.a.color.white,";"),de=Object(f.css)("color:#6e6e6e;text-align:center;font-size:",w.a.font.size(12),";line-height:",w.a.font.size(15),";padding-bottom:25px;",Z({alignSelf:[null,null,"end"],marginTop:[null,null,"25px"]}),";",J({marginBottom:[null,null,"25px"],paddingBottom:[null,0]})),pe=Object(f.css)("font-weight:",w.a.font.weight.bold,";"),ue=Object(f.css)("color:",w.a.color.linkColor,";text-decoration:underline;&:hover{text-decoration:none;}"),me=Object(f.css)("border-bottom:1px solid #c8c8c8;",Z({paddingBottom:["25px",null,"21px"]}),";"),ge=Object(f.css)("font-size:",w.a.font.size(14),";color:",w.a.color.gray20,";text-align:center;@media (min-width:768px){padding:0;}",Z({alignSelf:[null,null,"end"],marginBottom:["57px",null,"17px"],marginTop:[null,null,"-10px","10px"]}),";",J({marginBottom:[null,null,"22px"],marginTop:[null,null,"-55px"]})),fe=Object(f.css)("margin-bottom:16px;a{text-decoration:underline;font-weight:",w.a.font.weight.bold,";}"),be=Object(f.css)("line-height:1.5;margin-right:20px;text-decoration:underline;color:",w.a.color.linkColor,";"),he=Object(f.css)("color:",w.a.color.gray20,";display:inline-block;text-decoration:none;white-space:nowrap;width:100%;margin-bottom:4px;");function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye="".concat(window.vi.env.AUTH_HOST,"/get-started?o=").concat("0fd8cf46-d029-11ea-a072-340cee6a52b6","&campaignId=").concat("9HJ8Q"),ve=function(e){var t=e.goToPayflow,n=e.handleDismissGateway,a=Object(r.useTracking)({eventData:{pagetype:"landingPage"},module:{name:"WEB_REGI_CORE_BAU_post_login_upsell"}},{dispatchOnMount:U}).trackEvent;return i()("div",{className:X,"data-testid":"gateway-onboarding-offer"},void 0,G||(G=i()(g.a,{})),i()("div",{className:Object(f.cx)(B.e,F)},void 0,i()("div",{className:Object(f.cx)(B.h,K)},void 0,i()("p",{className:ee},void 0,"Welcome Back"),i()("div",{className:te},void 0,M||(M=i()("h1",{},void 0,"Subscribers make reporting in critical moments like this possible.")),H||(H=i()("p",{},void 0,"You can cancel anytime.")))),i()("div",{className:ne},void 0,i()("div",{className:ae},void 0,$||($=i()("p",{},void 0,"Basic Subscription"))),i()("div",{className:oe},void 0,i()("h2",{className:ie},void 0,"Unlimited articles for $1/week."),i()("p",{className:re},void 0,"Billed as ",Y||(Y=i()("s",{},void 0,"$17"))," $4 every 4 weeks for one year"))),i()("div",{className:Object(f.cx)(le,B.h)},void 0,i()("button",{className:ce,type:"button",onClick:function(e){e.preventDefault(),a(we(we({},E),{},{module:{label:"WEB_REGI_CORE_BAU_post_login_upsell",name:"interrupter",element:{name:"goto-subscribe",label:"Subscribe Now",url:ye}},eventCallback:function(){return t(ye)}}))}},void 0,"Subscribe now for $1/week"),i()("button",{className:se,type:"button",onClick:function(e){e.preventDefault(),a(we(we({},I),{},{eventCallback:n}))}},void 0,"Continue Without Subscribing")),i()("div",{className:Object(f.cx)(de,B.h)},void 0,i()("p",{className:pe},void 0,"No commitment required, cancel anytime."),i()("p",{className:me},void 0,"Offer for a Basic Digital Access subscription is not open to current digital news subscribers. Your payment method will automatically be charged in advance the introductory offer rate of $4 every 4 weeks for 1 year, and after 1 year the standard rate of $17 every 4 weeks. Your subscription will continue until you"," ",i()("a",{className:ue,href:"https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale#cancellation",target:"_blank",rel:"noopener noreferrer"},void 0,"cancel"),". Cancellation takes effect at the end of your current billing period. The print edition of The New York Times, Games, Cooking, Wirecutter or The Athletic are not included. Taxes may apply. Offer terms are subject to change.")),i()("div",{className:Object(f.cx)(ge,B.h)},void 0,i()("p",{className:fe},void 0,"Not ready to subscribe?"," ",q||(q=i()("a",{href:"http://nyt.qualtrics.com/jfe/form/SV_6xph8FSrgDdOgap?link=desktop&mtc=1&src=https://www.nytimes.com/subscription&agt=tdjiRmmrMACROlSOTFcvziqP&gwlp=GW"},void 0,"Tell us why."))),i()("div",{},void 0,i()("a",{href:"https://www.nytco.com/",className:Object(f.cx)(be,he),target:"_blank",rel:"noopener noreferrer"},void 0,"©2022 The New York Times Company"),i()("a",{href:"https://www.nytimes.com/privacy/privacy-policy",className:be,target:"_blank",rel:"noopener noreferrer"},void 0,"Privacy Policy"),i()("a",{href:"https://help.nytimes.com/hc/en-us",className:be,target:"_blank",rel:"noopener noreferrer"},void 0,"Help")))))};ve.displayName="OnboardingOffer";var Oe=ve,je=function(e){window.location.href="".concat(e,"&EXIT_URI=").concat(window.encodeURIComponent(Object(l.isInternalLink)(window.location.href)?window.location.href:"https://nytimes.com"))},ke=function(e){var t=e.articleData,n=e.articleUrl,a=e.handleDismissGateway,o=Object(r.useTracking)({eventData:{pagetype:"onboarding"},module:{name:"interrupter",region:"gateway"}}).Track,l=Object(s.a)(),u=Object(c.a)().user;if(null===u||null===l)return null;var m=Object(p.c)(d.j);return m||(m=Object(p.e)(l,u)?d.i:d.k),i()(o,{},void 0,m===d.i?i()(Oe,{goToPayflow:je,handleDismissGateway:a}):i()(Q,{articleData:t,articleUrl:n,handleDismissGateway:a}))};ke.displayName="PostLoginInterrupter",ke.defaultProps={articleData:null,articleUrl:""};t.default=ke},wmnt:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f}));var a=n("Lcdh"),o=n("Ed5u"),i=n.n(o),r=n("jVmh"),l=n.n(r),c=i()([l.a.breakpoint.medium,l.a.breakpoint.mediumLarge,"@media (min-width: 1220px)"]),s=Object(a.css)("display:flex;flex-direction:column;flex:auto;",c({marginLeft:["20px",null,null,"auto"],marginRight:["20px",null,null,"auto"],width:["100%",null,null,"1180px"]}),";@supports (display:grid){display:grid;grid-column-gap:20px;flex:initial;height:auto;",c({marginLeft:["0",null,null,"auto"],marginRight:["0",null,null,"auto"],gridTemplateColumns:["[full-start] 0px [main-start] repeat(2, 1fr) [main-end] 0px [full-end]","[full-start] 0px [main-start] repeat(4, 1fr) [main-end] 0px [full-end]","[full-start] 0px [main-start] repeat(6, 1fr) [main-end] 0px [full-end]","[main-start] repeat(6,1fr) [main-end]"]}),";}"),d=Object(a.css)("@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}animation:fadeIn 0.3s ease;"),p=Object(a.css)("margin:0;width:100%;"),u=Object(a.css)("@supports (display:grid){grid-column:main;}"),m=Object(a.css)("@supports (display:grid){grid-column:full;}"),g=(c({margin:["0 0 10px",null,"0 0 25px"]}),Object(a.css)(s,";grid-template-rows:min-content min-content auto;min-height:calc(100vh - 7.5rem);")),f=Object(a.css)(s,";grid-template-rows:min-content auto;min-height:calc(100vh - 8.5rem);align-items:center;")}}]); })();
//# sourceMappingURL=postLoginInterrupter-6663d138af525676632a.js.map