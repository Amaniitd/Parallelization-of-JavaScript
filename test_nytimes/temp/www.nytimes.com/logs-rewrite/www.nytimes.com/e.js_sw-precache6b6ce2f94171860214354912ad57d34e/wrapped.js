(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"55Vd":function(e,t,n){"use strict";n.r(t);var o=n("gcR/"),r=n.n(o),i=n("ERkP"),a=n("Ggfp"),c=n("Lcdh"),d=n("s9SB"),l=n.n(d),u=n("fTxn"),s=n("MShG"),p=n("JUFN"),m=n("UYFv"),b=n("pAnW"),f=n("J4zp"),v=n.n(f),h=n("gW24"),y=n("nAah"),g=n("RGMW"),R=n("gptu"),w=n("6lDt"),O=n("+wx4"),N=n("km0v"),E=n("/Efl"),T=n("Oyx6"),P=n("GyuU"),k=function(e){var t=e.userProfile,n=t.emailAddress,o=t.regiId;if(Object(i.useEffect)((function(){t.unsubscribedProductType===h.f&&Object(N.b)(o)}),[]),t.unsubscribedProductType!==h.f)return null;var a=r()(s.F,{level:"2",colorVariant:s.P.text.primary},void 0,r()(P.b,{},void 0,n));return r()(P.a,{},void 0,r()(s.b,{level:"2",colorVariant:s.P.text.primary},void 0,r()(E.a,{copy:T.messageUnsubSuccessfulMarketing,params:{emailAddressComponent:a}})))};k.displayName="MarketingEmailsOptoutConfirmationModule";var j,S,M,A,_=function(e){var t=e.userProfile,n=t.emailAddress,o=t.regiId,a=t.unsubscribedNewsletter||{},c=a.productName,d=void 0===c?"":c,l=a.productCode,u=void 0===l?"":l;if(Object(i.useEffect)((function(){t.unsubscribedProductType===h.g&&Object(N.d)(o,u)}),[]),t.unsubscribedProductType!==h.g)return null;var p=r()(s.F,{level:"2",colorVariant:s.P.text.primary},void 0,r()(P.b,{},void 0,n));return r()(P.a,{},void 0,r()(s.b,{level:"2",colorVariant:s.P.text.primary},void 0,r()(E.a,{copy:T.messageUnsubSuccessfulNewsletter,params:{emailAddressComponent:p,productName:d}})))};_.displayName="NewsletterOptoutConfirmationModule";var C,I,z=function(){var e=function(){var e=Object(y.a)(),t=new window.URLSearchParams(e.search),n=t.get("send_id")||"";return{productCode:t.get("product"),token:t.get("token"),sendId:n}}(),t=e.productCode,n=e.token,o=e.sendId,c=Object(a.useMutation)(O.b),d=v()(c,2),l=d[0],u=d[1],m=u.loading,b=u.error,f=u.data;if(Object(i.useEffect)((function(){if(t&&n){var e="MM"===t?h.f:h.g;Object(N.i)();var r=o?"send_id_".concat(o):"";l({variables:{surfaceCode:"optout-page",productType:e,productCode:t,token:n,unsubscribeForm:r}}).catch((function(){}))}else Object(y.b)()}),[]),!t||!n)return null;if(m||!f&&!b)return j||(j=r()(R.a,{}));if(b){var E=v()(b.graphQLErrors,1)[0];return"token_invalid"===(void 0===E?{message:"unknown_error"}:E).message?(Object(y.b)(),null):S||(S=r()(w.a,{}))}var T=(f||{}).optOutByToken,P=void 0===T?{}:T;return r()(g.a,{purrEnvironment:p.a.PURR_ENVIRONMENT},void 0,M||(M=r()(s.e,{defaultSpace:"6",mediumScreenSpace:"8"})),r()(k,{userProfile:P}),r()(_,{userProfile:P}),A||(A=r()(s.e,{defaultSpace:"6",mediumScreenSpace:"8"})))};z.displayName="OptoutConfirmationPage";var U=Object(c.css)(m.a,s.cb,s.db),V=function(){if("undefined"==typeof window)return null;"on"===l.a.parse(window.document.cookie)["nyt-account-qa-mode"]&&(window.mockPurrResponse=!0);var e=Object(b.a)();return r()(u.a,{purrEnvironment:p.a.PURR_ENVIRONMENT},void 0,C||(C=r()(c.Global,{styles:U})),r()(a.ApolloProvider,{client:e},void 0,I||(I=r()(z,{}))))};V.displayName="OptoutConfirmationApp";t.default=V},Wlp5:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("gcR/"),r=n.n(o),i=(n("ERkP"),n("MShG")),a=n("5lfh"),c=Object(a.d)("div",{target:"e1i3ei4p0"})("left:50%;position:absolute;transform:translateX(-50%);"),d=function(){return r()(c,{},void 0,r()(i.v,{color:i.Q.icon.primary,size:i.M.standard,dataTestId:"loading-spinner"}))};d.displayName="LoadingSpinner"},nnp6:function(e,t,n){"use strict";n.r(t);var o,r=n("gcR/"),i=n.n(r),a=n("ERkP"),c=n("Udmz"),d=n("F5n1"),l=n("hCJd"),u=n("na53"),s=n("e8+o"),p=n("HX+Y"),m=n.n(p),b=n("fTxn"),f=n("5lfh"),v=n("vftj"),h=n("MShG"),y=n("Ggfp"),g=n("s9SB"),R=n.n(g),w=n("Wlp5"),O=n("wQT2"),N=Object(f.b)("html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&::-moz-focus-inner{border:0;padding:0;}}html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}"),E=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(11),n.e(23),n.e(21),n.e(149)]).then(n.bind(null,"+e6F"))})),T=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(147)]).then(n.bind(null,"S7D9"))})),P=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(11),n.e(22),n.e(153)]).then(n.bind(null,"ZVM4"))})),k=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(11),n.e(22),n.e(152)]).then(n.bind(null,"wQrr"))})),j=Object(a.lazy)((function(){return Promise.all([n.e(21),n.e(143)]).then(n.bind(null,"M8z/"))})),S=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(151)]).then(n.bind(null,"A5rs"))})),M=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(23),n.e(144)]).then(n.bind(null,"6Tve"))})),A=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(148)]).then(n.bind(null,"oQzz"))})),_=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(142)]).then(n.bind(null,"Vf1b"))})),C=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(11),n.e(150)]).then(n.bind(null,"Pwdb"))})),I=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(145)]).then(n.bind(null,"fYR6"))})),z=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(146)]).then(n.bind(null,"x2ep"))})),U=function(e){var t,n,r=e.bffClient;return"undefined"==typeof window?null:(window.addEventListener("pageshow",(function(e){e.persisted&&window.location.reload()})),"on"===R.a.parse(window.document.cookie)["nyt-account-qa-mode"]&&(window.disableIterateSurveys=!0,window.disableCareChat=!0,window.mockPurrResponse=!0),(t=R.a.parse(window.document.cookie)["nyt-a"]||"")&&(window.agentId=t),(n=R.a.parse(window.document.cookie).MUMST)&&(window.mumStSurveyId=n),i()(b.a,{purrEnvironment:O.a.PURR_ENVIRONMENT},void 0,i()(f.a,{styles:Object(f.b)(N,h.cb,h.db)}),i()(y.ApolloProvider,{client:r},void 0,i()(c.BrowserRouter,{basename:O.a.BASENAME},void 0,o||(o=i()(a.Suspense,{fallback:i()(w.a,{})},void 0,i()(b.c,{},void 0,i()(v.Helmet,{defaultTitle:"The New York Times",titleTemplate:"%s - The New York Times"}),i()(c.Switch,{},void 0,i()(c.Redirect,{from:"/optout",to:"/settings"}),i()(c.Redirect,{from:"/unsubscribe",to:"/settings"}),i()(c.Route,{path:"/digital-subscription-pause",component:T}),i()(c.Route,{path:"/change-hd-subscription",component:P}),i()(c.Route,{path:"/change-delivery-address",component:k}),i()(c.Route,{path:"/bonus-subscription",component:A}),i()(c.Route,{path:"/message-registry",component:j}),i()(c.Route,{path:"/cancel",component:S}),i()(c.Route,{path:"/online-cancel",component:S}),i()(c.Route,{path:"/product-switch",component:M}),i()(c.Route,{path:"/suspend-delivery",component:_}),i()(c.Route,{path:"/delivery-problem",component:C}),i()(c.Route,{path:"/change-email",component:I}),i()(c.Route,{path:"/change-password",component:z}),i()(c.Redirect,{from:"/manage-suspensions",to:"/suspend-delivery"}),i()(c.Redirect,{from:"/report-missing-paper",to:"/delivery-problem"}),i()(c.Redirect,{from:"/wet-damaged-paper",to:"/delivery-problem"}),i()(c.Redirect,{from:"/report-delivery-problem",to:"/delivery-problem"}),i()(c.Redirect,{from:"/subscription/homedelivery/suspend-delivery",to:"/suspend-delivery"}),i()(c.Redirect,{from:"/subscription/homedelivery/delivery-problem",to:"/delivery-problem"}),i()(c.Redirect,{from:"/subscription/homedelivery",to:"/homedelivery"}),i()(c.Redirect,{from:"/subscription/billing",to:"/billing"}),i()(c.Redirect,{from:"/profile",to:"/"}),i()(c.Route,{path:"/",component:E})))))))))};U.displayName="AccountPagesRouter";var V,x,L,q=n("GMeh"),B=n("55Vd");var G=function(){if("undefined"==typeof window||!window.document)return null;var e=new d.ApolloClient({link:l.ApolloLink.from([Object(u.createHttpLink)({uri:"".concat(Object(b.j)(),"/svc/account/query"),fetch:m.a,fetchOptions:{credentials:"include"},credentials:"include",headers:{"x-pageview-id":Object(b.m)(),"x-plid":b.n}})]),cache:new s.InMemoryCache});return i()(c.Switch,{},void 0,V||(V=i()(c.Route,{path:"/account/manage-preferences"},void 0,i()(q.default,{}))),x||(x=i()(c.Route,{path:"/account/optout"},void 0,i()(B.default,{}))),i()(c.Route,{path:"/account/"},void 0,i()(U,{bffClient:e})),L||(L=i()(c.Redirect,{to:"/"})))};G.displayName="AccountRouter";t.default=G},wQT2:function(e,t,n){"use strict";var o=n("fTxn"),r="prd"===window.vi.env.ENVIRONMENT,i={ENVIRONMENT:window.vi.env.ENVIRONMENT,BASENAME:"/account",MYACCOUNT_BASE_URL:Object(o.l)(),NEWSLETTER_SUBSCRIBE_URL:"/newsletters",WWW_HOST:r?"https://www.nytimes.com":"https://www.stg.nytimes.com",COOKING_HOST:r?"https://cooking.nytimes.com":"https://cooking.stg.nytimes.com",ABRA_INTEGRATION:r?"online-myaccount-production":"online-myaccount-staging",SENTRY_PUBLIC_KEY:"",DEVELOPMENT_MODE:"",ALLOW_THROWN_ERRORS:!1,INPUT_VALIDATION_DELAY:1e3,NYT_CARE_CHAT_HOST:r?"https://customerchat.nytimes.com":"https://customerchat.stg.nytimes.com",PURR_ENVIRONMENT:"prd"===window.vi.env.ENVIRONMENT?"prd":"dev"};t.a=i}}]); })();
//# sourceMappingURL=account-b402149e7edbf71e22be.js.map