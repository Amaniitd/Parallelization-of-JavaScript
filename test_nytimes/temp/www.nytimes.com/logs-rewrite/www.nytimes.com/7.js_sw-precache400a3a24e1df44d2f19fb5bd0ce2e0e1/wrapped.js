(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+wx4":function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v}));var r,o,i,a,s,c=n("VkAN"),u=n.n(c),l=n("Ck9z"),d=n.n(l).a,f={ACTIVE:"ACTIVE",DORMANT:"DORMANT",FREE_TRIAL:"FREE_TRIAL"},m=d(r||(r=u()(['\n  query getUserProfileByToken($token: String!) {\n    userProfileByToken(surfaceCode: "manage-preferences-page", token: $token) {\n      regiId\n      emailAddress\n      newsletterSubscriptions {\n        productCode\n        productName\n        productIconUrl\n        latestNewsletterUrl\n        frequency\n        activationEntitlements\n        deliveryStatus\n      }\n      marketingEmailsPref\n    }\n  }\n']))),p=d(o||(o=u()(["\n  mutation optOutByToken(\n    $surfaceCode: String!\n    $productType: OptOutProductType!\n    $productCode: String!\n    $token: String!\n    $unsubscribeForm: String!\n  ) {\n    optOutByToken(\n      optOutByTokenInput: {\n        surfaceCode: $surfaceCode\n        productType: $productType\n        productCode: $productCode\n        token: $token\n        unsubscribeForm: $unsubscribeForm\n      }\n    ) {\n      success\n      unsubscribedProductType\n      unsubscribedNewsletter {\n        productCode\n        productName\n      }\n      regiId\n      emailAddress\n      newsletterSubscriptions {\n        productCode\n        productName\n        productIconUrl\n        latestNewsletterUrl\n        frequency\n        activationEntitlements\n        deliveryStatus\n      }\n      marketingEmailsPref\n    }\n  }\n"]))),b=d(i||(i=u()(["\n  mutation unsubscribeNewsletterByToken(\n    $productCode: String!\n    $token: String!\n    $unsubscribeForm: String!\n  ) {\n    unsubscribeNewsletterByToken(\n      unsubscribeNewsletterByTokenInput: {\n        nlProductCode: $productCode\n        nlUnsubscribeToken: $token\n        nlUnsubscribeForm: $unsubscribeForm\n      }\n    ) {\n      success\n      nlProductCode\n      nlProductName\n    }\n  }\n"]))),g=d(a||(a=u()(["\n  mutation optOutMarketingEmailsByToken(\n    $token: String!\n    $unsubscribeForm: String!\n  ) {\n    optOutMarketingEmailsByToken(\n      token: $token\n      unsubscribeForm: $unsubscribeForm\n    ) {\n      success\n    }\n  }\n"]))),v=d(s||(s=u()(["\n  mutation optInMarketingEmailsByToken(\n    $token: String!\n    $subscribeForm: String!\n  ) {\n    optInMarketingEmailsByToken(\n      token: $token\n      subscribeForm: $subscribeForm\n    ) {\n      success\n    }\n  }\n"])))},"6lDt":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,o,i,a=n("gcR/"),s=n.n(a),c=(n("ERkP"),n("/Efl")),u=n("Lcdh"),l=n("MShG"),d=Object(u.styled)("div",{target:"e1x29vk70"})("font-family:",l.S.family.franklin,";font-weight:",l.S.weight.light,";font-size:16px;line-height:22px;color:",l.Q.text.primary,";margin:",l.jb[2.5]," 0;@media only screen and (min-width:640px){font-size:18px;line-height:25px;margin:28px 0;}a{color:",l.Q.text.primary,";font-weight:",l.S.weight.light,";}"),f=Object(u.styled)("div",{target:"e1x29vk71"})("display:flex;flex-flow:column nowrap;margin:",l.jb[5]," auto 0;padding:0 ",l.jb[2]," 140px;max-width:432px;@media screen and (min-width:640px){margin:60px auto auto auto;padding:0 ",l.jb[2.5]," 140px;max-width:640px;}"),m=Object(u.styled)("h2",{target:"e1x29vk72"})("color:",l.Q.text.primary,";font-family:",l.S.family.cheltenham,";font-size:30px;font-weight:",l.S.weight.normal,";line-height:1.2em;margin:0;padding:0;letter-spacing:0.004em;@media only screen and (min-width:640px){font-size:36px;}"),p=function(){return s()(f,{},void 0,r||(r=s()(m,{"data-testid":"headline"},void 0,"We’re sorry, but we’re having a technical issue right now.")),s()(d,{},void 0,o||(o=s()("span",{},void 0,"Please try again soon, or ")),s()("a",{href:c.b.CONTACT_US_LINK,target:"_blank",rel:"noopener noreferrer"},void 0,"contact Customer Care"),i||(i=s()("span",{},void 0," for immediate assistance."))))};p.displayName="FullPageError"},GMeh:function(e,t,n){"use strict";n.r(t);var r,o=n("gcR/"),i=n.n(o),a=n("ERkP"),s=n.n(a),c=n("Ggfp"),u=n("Lcdh"),l=n("s9SB"),d=n.n(l),f=n("fTxn"),m=n("MShG"),p=n("JUFN"),b=n("UYFv"),g=n("pAnW"),v=n("nAah"),N=n("RGMW"),w=n("gptu"),y=n("6lDt"),h=n("+wx4"),O=n("km0v"),k=n("J4zp"),T=n.n(k),S=n("/Efl"),E=n("Oyx6"),C=n("GyuU"),x=function(){return i()(m.C,{dataTestId:"find-newsletters",listItemHeader:E.liActionTitleNewsletter,type:m.gb.action,actionTitle:E.liActionButtonNewsletter,href:S.c.SUBSCRIBE_NEWSLETTERS_PAGE_LINK,targetTab:m.fb.newTab,onClick:O.k},void 0,E.liActionDescriptionNewsletter)};x.displayName="FindNewslettersListItem";var P=function(e){var t=e.emailAddress,n=i()(m.F,{level:"2",colorVariant:m.P.text.primary},void 0,i()(C.b,{},void 0,t)),o=i()(S.a,{copy:E.sectionDescriptionNewsletterEmpty,params:{emailAddressComponent:n}});return i()(m.D,{title:E.sectionTitleNewsletter,dataTestId:"empty-state",description:o},void 0,r||(r=i()(x,{})))};P.displayName="EmptyNewslettersSection";var j,A,M,R,I,F,U,L,_,B=n("gW24"),V=Object(u.styled)("div",{target:"efh47uk0"})("width:100%;display:grid;"),$=Object(u.styled)("img",{target:"efh47uk1"})("width:40px;height:40px;display:block;"),D=function(e){var t=e.newsletter,n=e.onRemoveClick,r=e.processing,o=t.productCode,a=t.productName,c=t.productIconUrl,u=t.latestNewsletterUrl,l=t.frequency,d=t.activationEntitlements.length>0;return i()(m.C,{dataTestId:"newsletter-".concat(o),listItemHeader:a,type:"information",actionTitle:E.removeNewsletterAll,startAreaIcon:i()($,{src:c||"/fallback-image.png","aria-hidden":"true"}),onClick:function(e){Object(O.j)(e,t),n(e)},processing:r,role:"listitem",ariaLabel:a,actionAriaLabel:E.removeNewsletterAriaAll},void 0,l&&i()("span",{role:"text"},void 0,i()(m.b,{level:"3",colorVariant:m.P.text.secondary,ariaLabel:Object(E.frequencyAriaAll)({frequency:l})},void 0,l))," ",l&&u&&"|"," ",u&&i()(m.z,{colorVariant:m.P.text.primary,to:u,onClick:function(e){return Object(O.l)(e,t)},targetTab:m.fb.newTab,dataTestId:"see-latest-link"},void 0,i()(m.b,{level:"3",colorVariant:m.P.text.primary},void 0,E.seeNewsletterSampleAll)),d&&s.a.createElement(s.a.Fragment,null,j||(j=i()(m.J,{space:"1.5"})),A||(A=i()(m.w,{ariaLabel:E.liNewsletterTimesSubscribersPillAria},void 0,i()(S.a,{copy:E.liNewsletterTimesSubscribersPill})))))};D.displayName="NewsletterCard";var q=function(e){var t=e.children;return i()("div",{},void 0,M||(M=i()(m.i,{level:"tertiary",ariaHidden:!0})),R||(R=i()(m.J,{space:"2"})),i()(m.b,{dataTestId:"dormant-newsletters-description",level:"2",colorVariant:m.P.text.primary},void 0,I||(I=i()(S.a,{copy:E.sectionDescriptionDormantNewsletters}))),F||(F=i()(m.J,{space:"2"})),i()(V,{"data-testid":"dormant-newsletter-list",role:"list"},void 0,t))};q.displayName="DormantNewslettersModule";var Y=function(e){var t=e.emailAddress,n=e.token,r=e.unsubscribeForm,o=e.nlSubscriptions,s=e.updateNlSubscriptions,u=Object(c.useMutation)(h.e),l=T()(u,2),d=l[0],p=l[1],b=p.loading,g=p.error,N=p.data,w=Object(a.useState)(""),y=T()(w,2),O=y[0],k=y[1],P=Object(a.useContext)(f.d),j=i()(m.F,{level:"2",colorVariant:m.P.text.primary},void 0,i()(C.b,{},void 0,t)),A=i()(S.a,{copy:E.sectionDescriptionNewsletter,params:{emailAddressComponent:j}});Object(a.useEffect)((function(){if(g)if(g.networkError)P.displayNotification(U||(U=i()("span",{},void 0,i()(S.a,{copy:E.messageErrorNewsletterRemoval}))),{dataTestId:"nl-networking-error"});else{var e=T()(g.graphQLErrors,1)[0];"token_invalid"===(void 0===e?{message:"unknown_error"}:e).message?Object(v.b)():P.displayNotification(L||(L=i()("span",{},void 0,i()(S.a,{copy:E.messageErrorNewsletterRemoval}))),{dataTestId:"nl-technical-error"})}}),[g]),Object(a.useEffect)((function(){if(N){var e=N.unsubscribeNewsletterByToken,t=e.nlProductCode,n=void 0===t?"":t,r=e.nlProductName,o=void 0===r?"":r;return s(n||O),function(e,t){e.displayNotification(i()("span",{},void 0,i()(S.a,{copy:E.messageSuccessNewsletterRemoval,params:{productName:t}})),{dataTestId:"nl-unsubscribe-confirmation"})}(P,o),function(){}}return function(){}}),[N]);var M=function(e,t){return e.filter((function(e){return t.includes(e.deliveryStatus)}))},R=o.sort((function(e,t){return t.activationEntitlements.length-e.activationEntitlements.length||e.productName.localeCompare(t.productName)})),I=M(R,[B.b]),F=M(R,[B.a,B.c]),$=I.length>0,Y=function(e){return e.map((function(e,t){var o=e.productCode,a=O===o&&b;return i()(D,{newsletter:e,onRemoveClick:function(){return function(e){k(e),d({variables:{productCode:e,token:n,unsubscribeForm:r}}).catch((function(){}))}(o)},processing:a},t)}))},J=Y(F),z=Y(I);return i()(m.D,{title:E.sectionTitleNewsletter,dataTestId:"newsletter-list-section",description:A},void 0,i()(V,{"data-testid":"active-newsletter-list",role:"list"},void 0,J),$&&i()(q,{},void 0,z),_||(_=i()(x,{})))};Y.displayName="FilledNewslettersSection";var J,z,G,W,Q=function(e){var t=e.userProfile,n=void 0===t?{}:t,r=n.regiId,o=n.emailAddress,s=n.newsletterSubscriptions,c=void 0===s?[]:s,u=Object(a.useState)(c),l=T()(u,2),d=l[0],f=l[1],m=d.length>0;return Object(a.useEffect)((function(){Object(O.c)(r,c)}),[c]),m?i()(Y,{nlSubscriptions:d,updateNlSubscriptions:function(e){var t=d.filter((function(t){return t.productCode!==e}));f(t)},emailAddress:o,token:e.token,unsubscribeForm:e.unsubscribeForm}):i()(P,{emailAddress:o})};Q.displayName="NewslettersModule";var H,K,X,Z,ee,te=function(e){var t=e.userProfile,n=t.emailAddress,r=t.marketingEmailsPref,o=e.token,s=e.signupFormVersion,u=Object(a.useState)(r),l=T()(u,2),d=l[0],p=l[1],b=Object(a.useContext)(f.d),g=Object(c.useMutation)(h.d),N=T()(g,2),w=N[0],y=N[1],k=y.loading,x=y.error,P=y.data,j=Object(c.useMutation)(h.c),A=T()(j,2),M=A[0],R=A[1],I=R.loading,F=R.error,U=R.data,L=function(e){Object(O.g)(e),w({variables:{token:o,unsubscribeForm:s}}).catch((function(){}))},_=function(e){Object(O.e)(e),M({variables:{token:o,subscribeForm:s}}).catch((function(){}))},V=function(e,t){if(e)if(e.networkError)b.displayNotification(i()(S.a,{copy:t}),{dataTestId:"mkteml-networking-error"});else{var n=T()(e.graphQLErrors,1)[0];"token_invalid"!==(void 0===n?{message:"unknown_error"}:n).message?b.displayNotification(i()(S.a,{copy:t}),{dataTestId:"mkteml-technical-error"}):Object(v.b)()}};Object(a.useEffect)((function(){V(x,E.messageErrorMarketingOptOut),V(F,E.messageErrorMarketingOptIn)}),[x,F]),Object(a.useEffect)((function(){P&&(p(B.e),function(e){e.displayNotification(J||(J=i()("span",{},void 0,i()(S.a,{copy:E.messageSuccessMarketingOptOut}))),{dataTestId:"mkteml-optout-confirmation"})}(b))}),[P]),Object(a.useEffect)((function(){U&&(p(B.d),function(e){e.displayNotification(z||(z=i()("span",{},void 0,i()(S.a,{copy:E.messageSuccessMarketingOptIn}))),{dataTestId:"mkteml-optin-confirmation"})}(b))}),[U]),Object(a.useEffect)((function(){d===B.e&&Object(O.f)(),d===B.d&&Object(O.h)()}),[d]);var $=i()(m.F,{level:"2",colorVariant:m.P.text.primary},void 0,i()(C.b,{},void 0,n));return i()("div",{},void 0,d===B.e?i()(m.D,{title:E.sectionTitleUpdates,dataTestId:"opted-out",description:i()(S.a,{copy:E.sectionDescriptionUpdatesOptedOut,params:{emailAddressComponent:$}})},void 0,i()(m.l,{dataTestId:"btn-opt-in",variant:m.N.filled,heightVariant:m.M.standard,widthVariant:{small:m.O.flex,medium:m.O.content},onClick:_,processing:I},void 0,G||(G=i()(S.a,{copy:E.buttonSpecialOffersOptedOut})))):i()(m.D,{title:E.sectionTitleUpdates,dataTestId:"opted-in",description:i()(S.a,{copy:E.sectionDescriptionUpdatesOptedIn,params:{emailAddressComponent:$}})},void 0,i()(m.l,{dataTestId:"btn-opt-out",variant:m.N.outline,heightVariant:m.M.standard,widthVariant:{small:m.O.flex,medium:m.O.content},onClick:L,processing:k},void 0,W||(W=i()(S.a,{copy:E.buttonSpecialOffersOptedIn})))))};te.displayName="MarketingEmailsPrefsModule";var ne,re,oe=function(){var e=function(){var e=Object(v.a)(),t=new window.URLSearchParams(e.search),n=t.get("send_id")||"";return{token:t.get("token"),sendId:n}}(),t=e.token,n=e.sendId,r=Object(c.useQuery)(h.a,{variables:{token:t}}),o=r.loading,s=r.error,u=r.data;if(Object(a.useEffect)((function(){t?Object(O.a)():Object(v.b)()}),[]),!t)return null;if(o||!u&&!s)return H||(H=i()(w.a,{}));if(s)return K||(K=i()(y.a,{}));var l=(u||{}).userProfileByToken,d=void 0===l?{}:l,f=n?"account_unsub_page_button_".concat(n):"";return i()(N.a,{purrEnvironment:p.a.PURR_ENVIRONMENT},void 0,X||(X=i()(m.e,{defaultSpace:"6",mediumScreenSpace:"8"})),i()(Q,{userProfile:d,token:t,unsubscribeForm:f}),Z||(Z=i()(m.J,{space:"9"})),i()(te,{userProfile:d,token:t,signupFormVersion:f}),ee||(ee=i()(m.e,{defaultSpace:"6",mediumScreenSpace:"8"})))};oe.displayName="ManagePreferencesPage";var ie=Object(u.css)(b.a,m.cb,m.db),ae=function(){if("undefined"==typeof window)return null;"on"===d.a.parse(window.document.cookie)["nyt-account-qa-mode"]&&(window.mockPurrResponse=!0);var e=Object(g.a)();return i()(f.a,{purrEnvironment:p.a.PURR_ENVIRONMENT},void 0,ne||(ne=i()(u.Global,{styles:ie})),i()(c.ApolloProvider,{client:e},void 0,re||(re=i()(oe,{}))))};ae.displayName="ManagePreferencesApp";t.default=ae},GyuU:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("Lcdh"),o=n("MShG"),i=Object(r.styled)("div",{target:"e1v8l9b50"})("padding:",o.jb[2]," ",o.jb[2],";border:1px solid ",o.Q.stroke.tertiary,";"),a=Object(r.styled)("span",{target:"e1v8l9b51"})("overflow-wrap:anywhere;")},JUFN:function(e,t,n){"use strict";var r=n("fTxn"),o={ENVIRONMENT:window.vi.env.ENVIRONMENT,MYACCOUNT_BASE_URL:Object(r.l)(),PURR_ENVIRONMENT:"prd"===window.vi.env.ENVIRONMENT?"prd":"dev"};t.a=o},Oyx6:function(e,t,n){"use strict";n.r(t),n.d(t,"sectionTitleNewsletter",(function(){return i})),n.d(t,"sectionDescriptionDormantNewsletters",(function(){return a})),n.d(t,"sectionDescriptionNewsletterEmpty",(function(){return s})),n.d(t,"liActionTitleNewsletter",(function(){return c})),n.d(t,"liActionDescriptionNewsletter",(function(){return u})),n.d(t,"liActionButtonNewsletter",(function(){return l})),n.d(t,"sectionDescriptionNewsletter",(function(){return d})),n.d(t,"buttonSpecialOffersOptedOut",(function(){return f})),n.d(t,"buttonSpecialOffersOptedIn",(function(){return m})),n.d(t,"sectionTitleUpdates",(function(){return p})),n.d(t,"messageSuccessNewsletterRemoval",(function(){return b})),n.d(t,"frequencyAriaAll",(function(){return g})),n.d(t,"seeNewsletterSampleAll",(function(){return v})),n.d(t,"liNewsletterTimesSubscribersPill",(function(){return N})),n.d(t,"liNewsletterTimesSubscribersPillAria",(function(){return w})),n.d(t,"removeNewsletterAll",(function(){return y})),n.d(t,"removeNewsletterAriaAll",(function(){return h})),n.d(t,"messageErrorNewsletterRemoval",(function(){return O})),n.d(t,"messageUnsubSuccessfulNewsletter",(function(){return k})),n.d(t,"messageUnsubSuccessfulMarketing",(function(){return T})),n.d(t,"sectionDescriptionUpdatesOptedOut",(function(){return S})),n.d(t,"sectionDescriptionUpdatesOptedIn",(function(){return E})),n.d(t,"messageSuccessMarketingOptOut",(function(){return C})),n.d(t,"messageErrorMarketingOptOut",(function(){return x})),n.d(t,"messageSuccessMarketingOptIn",(function(){return P})),n.d(t,"messageErrorMarketingOptIn",(function(){return j}));var r=n("ERkP"),o=n.n(r),i="Newsletters",a="You no longer have access to the following newsletters.",s=function(e){var t=e.emailAddressComponent;return o.a.createElement(o.a.Fragment,null,"You are not signed up to receive any newsletters at ",t,". Most newsletters are free for everyone. Certain newsletters are only available if you have a subscription to The New York Times.")},c="Find newsletters",u="Our journalists provide commentary and analysis on topics from Politics and Fashion to Climate Change.",l="View all",d=function(e){var t=e.emailAddressComponent;return o.a.createElement(o.a.Fragment,null,"You receive the following newsletters at ",t,". Most newsletters are free for everyone. Certain newsletters are only available if you have a subscription to The New York Times.")},f="Receive special offers",m="Stop receiving special offers",p="Updates and special offers",b=function(e){var t=e.productName;return o.a.createElement(o.a.Fragment,null,t," newsletter removed.")},g=function(e){var t=e.frequency;return"Frequency: ".concat(t)},v="See latest",N="For Times Subscribers",w="Available Only For Times Subscribers",y="Remove",h="Remove newsletter",O="We’re sorry, but we’re having a technical issue. Please try removing this newsletter again.",k=function(e){var t=e.emailAddressComponent,n=e.productName;return o.a.createElement(o.a.Fragment,null,n," newsletter will no longer be sent to ",t,".")},T=function(e){var t=e.emailAddressComponent;return o.a.createElement(o.a.Fragment,null,"You have opted out of receiving updates and special offers from The New York Times at"," ",t,".")},S=function(e){var t=e.emailAddressComponent;return o.a.createElement(o.a.Fragment,null,"You have opted out of receiving updates and special offers from The New York Times at"," ",t,".")},E=function(e){var t=e.emailAddressComponent;return o.a.createElement(o.a.Fragment,null,"You occasionally receive updates about events and special offers from The New York Times at"," ",t,".")},C="You have opted out of receiving updates and special offers from The New York Times.",x="We’re sorry, but we’re having a technical issue. Please try opting out again.",P="You have opted in to receive updates and special offers from The New York Times.",j="We’re sorry, but we’re having a technical issue. Please try opting in again."},RGMW:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o,i,a=n("gcR/"),s=n.n(a),c=(n("ERkP"),n("lZ/M")),u=n("MShG"),l=n("fTxn"),d=function(e){var t=e.purrEnvironment,n=e.children;return s()(l.c,{},void 0,s()(l.b,{purrEnvironment:t}),s()(u.s,{headerComponent:r||(r=s()(u.n,{})),footerComponent:o||(o=s()(c.a,{})),messagingUnitComponent:i||(i=s()(l.e,{}))},void 0,n))};d.displayName="OptoutPageLayout"},UYFv:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("Lcdh"),o=Object(r.css)("html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&::-moz-focus-inner{border:0;padding:0;}}html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}")},gW24:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u}));var r="ACTIVE",o="DORMANT",i="FREE_TRIAL",a="NEWSLETTER",s="MARKETING_EMAILS",c="OPT_OUT",u="OPT_IN"},gptu:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,o=n("gcR/"),i=n.n(o),a=(n("ERkP"),n("5lfh")),s=Object(a.c)("0%{transform:rotate(20deg);}100%{transform:rotate(380deg);}"),c=Object(a.d)("div",{target:"e1wlv2rd0"})("width:100%;height:338px;"),u=Object(a.d)("div",{target:"e1wlv2rd1"})("width:60px;height:60px;position:absolute;top:40%;left:calc(50% - 30px);transform:translate(-1%,-1%);border-radius:50%;border:2px solid rgba(243,243,243,1);"),l=Object(a.d)("div",{target:"e1wlv2rd2"})("width:60px;height:60px;position:absolute;top:-2px;left:-2px;right:0;bottom:0;border-radius:50%;border:2px solid #ccc;border-color:#ccc transparent transparent transparent;animation:",s," 1500ms cubic-bezier(0.77,0.1,0.45,0.8) infinite;"),d=Object(a.d)(l,{target:"e1wlv2rd3"})("animation-delay:80ms;"),f=function(){return r||(r=i()(c,{},void 0,i()(u,{},void 0,i()(l,{}),i()(d,{}))))};f.displayName="PageLoadSpinner"},km0v:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"l",(function(){return b})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"h",(function(){return N})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return h}));var r=n("lSNA"),o=n.n(r),i=n("fTxn"),a=n("+wx4"),s=function(e){return e.activationEntitlements.length>0},c=function(e){return e.deliveryStatus===a.f.ACTIVE},u=function(e){return s(e)?c(e)?"activeSubOnlyNewsletter":"dormantSubOnlyNewsletters":"freeNewsletter"},l=function(){Object(i.t)({moduleName:"ManagePreferencesPage"})},d=function(){Object(i.t)({moduleName:"NewsletterUnsubPage"})},f=function(e){Object(i.t)({moduleName:"NewsletterUnsubPage",moduleContext:JSON.stringify({regi_id:e,unsubed:"MM"}),moduleRegion:"OptoutMarketingConf"})},m=function(e,t){Object(i.t)({moduleName:"NewsletterUnsubPage",moduleContext:JSON.stringify({regi_id:e,unsubed:t}),moduleRegion:"OptoutNewsletterConf"})},p=function(e,t){var n={freeNewsletters:t.filter((function(e){return!s(e)})).map((function(e){return e.productCode})),activeSubOnlyNewsletters:t.filter((function(e){return s(e)&&c(e)})).map((function(e){return e.productCode})),dormantSubOnlyNewsletters:t.filter((function(e){return s(e)&&!c(e)})).map((function(e){return e.productCode}))};Object(i.t)({moduleName:"ManagePreferencesPage",moduleContext:JSON.stringify({regi_id:e}),moduleLabel:JSON.stringify(n),moduleRegion:"ManageNewsletters"})},b=function(e,t){var n,r=t.productCode,a=u(t),s=o()({},a,r);Object(i.r)({moduleName:"ManagePreferencesPage",moduleRegion:"ManageNewsletters",moduleContext:JSON.stringify(s),elementName:"SeeLatestBtn",elementLabel:null==e||null===(n=e.currentTarget)||void 0===n?void 0:n.textContent})},g=function(e,t){var n,r=t.productCode,a=u(t),s=o()({},a,r);Object(i.r)({moduleName:"ManagePreferencesPage",moduleRegion:"ManageNewsletters",moduleContext:JSON.stringify(s),elementName:"RemoveBtn",elementLabel:null==e||null===(n=e.currentTarget)||void 0===n?void 0:n.textContent})},v=function(e){var t;Object(i.r)({moduleName:"ManagePreferencesPage",moduleRegion:"ManageNewsletters",elementName:"SeeAllBtn",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent})},N=function(){Object(i.t)({moduleName:"ManagePreferencesPage",moduleLabel:"StopOffersBtn",moduleRegion:"UpdatesSpecialOffers"})},w=function(){Object(i.t)({moduleName:"ManagePreferencesPage",moduleLabel:"ReceiveOffersBtn",moduleRegion:"UpdatesSpecialOffers"})},y=function(e){var t;Object(i.r)({moduleName:"ManagePreferencesPage",moduleRegion:"UpdatesSpecialOffers",moduleContext:"MM",elementName:"StopOffersBtn",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent})},h=function(e){var t;Object(i.r)({moduleName:"ManagePreferencesPage",moduleRegion:"UpdatesSpecialOffers",moduleContext:"MM",elementName:"ReceiveOffersBtn",elementLabel:null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.textContent})}},nAah:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i}));var r=n("fTxn"),o=n("JUFN");t.a=function(){var t;return null===(t=e)||void 0===t?void 0:t.location};var i=function(){r.p.redirect("".concat(o.a.MYACCOUNT_BASE_URL,"/seg/settings"))}}).call(this,n("fRV1"))},pAnW:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("F5n1"),o=n("hCJd"),i=n("na53"),a=n("e8+o"),s=n("HX+Y"),c=n.n(s),u=n("fTxn"),l=function(){return new r.ApolloClient({link:o.ApolloLink.from([Object(i.createHttpLink)({uri:"".concat(Object(u.l)(),"/svc/optout/query"),fetch:c.a,fetchOptions:{credentials:"include"},headers:{}})]),cache:new a.InMemoryCache})}}}]); })();
//# sourceMappingURL=newslettersmanage-c745db23e3eb2b61f4d7.js.map