(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[22],{F31d:function(e,n,t){"use strict";t.d(n,"a",(function(){return X}));var o,r,a,i,u,c,d,s,l,p,b,y,m,v,g,S,f,D,h,C=t("gcR/"),T=t.n(C),k=t("ERkP"),N=t("fTxn"),E=t("/Efl"),R=t("MShG"),P=t("2+AY"),H=t("vxQr"),A=t("bdAl"),O=t("wsBj"),I="NO_HD_SUBSCRIPTION",w="NOT_STARTED",L="AWAITING_START",M="DELIVERY_START_SCHEDULED",j="STOPPED",x="PRODUCT_CHANGE_SCHEDULED",F="ADDRESS_CHANGE_SCHEDULED",_="TEMPORARY_STOP_SCHEDULED",U="DELIVERY_RESTART_SCHEDULED",B="AWAITING_RESTART",Y="PERMANENT_STOP_SCHEDULED",V="BLOCKING_TRANSACTION",W="NO_PRODUCTS_AVAILABLE",G="GIFT_SUBSCRIPTION",J="INVALID_SUBSCRIPTION_STATUS",z="INVALID_DELIVERY_TYPE",q="SINGLE_PRODUCT_AVAILABLE",Q=function(e){return T()(R.u,{typeStyle:R.bb.title1},void 0,Object(P.f)(e))};Q.displayName="getBoldedUnlockDate";var X=function(e){var n=e.hdSubEligibility,t=e.trackingModuleName,C=n.eligibilityReason,R=void 0===C?"NO_HD_SUBSCRIPTION":C,P=n.unlockDate,X=void 0===P?"":P;switch(Object(k.useEffect)((function(){Object(N.t)({moduleName:t,moduleContext:R})}),[]),R){case I:var K={title:o||(o=T()(E.a,{copy:A.subNotFoundTitleNonHDSub})),copy:T()(E.a,{copy:A.subNotFoundCopyNonHDSub,params:{ccLink:r||(r=T()(H.a,{}))}})};return T()(O.a,{message:K,trackingModuleName:t});case w:case L:case M:var Z={title:a||(a=T()(E.a,{copy:A.pendingStartTitleHDSub})),copy:T()(E.a,{copy:A.pendingStartCopyHDSub,params:{unlockDate:Q(X)}})};return T()(O.a,{message:Z,trackingModuleName:t});case j:var $={title:i||(i=T()(E.a,{copy:A.subSuspendedTitleHDSub})),copy:T()(E.a,{copy:A.subSuspendedCopyHDSub,params:{ccLink:u||(u=T()(H.a,{}))}})};return T()(O.a,{message:$,trackingModuleName:t});case x:var ee={title:c||(c=T()(E.a,{copy:A.pendingChangeTitleHDSub})),copy:T()(E.a,{copy:A.pendingChangeCopyHDSub,params:{unlockDate:Q(X),ccLink:d||(d=T()(H.a,{}))}})};return T()(O.a,{message:ee,trackingModuleName:t});case F:var ne={title:s||(s=T()(E.a,{copy:A.pendingDeliveryTitleHDSub})),copy:T()(E.a,{copy:A.pendingDeliveryCopyHDSub,params:{unlockDate:Q(X),ccLink:l||(l=T()(H.a,{}))}})};return T()(O.a,{message:ne,trackingModuleName:t});case _:case U:case B:var te={title:p||(p=T()(E.a,{copy:A.pendingSuspensionTitleHDSub})),copy:T()(E.a,{copy:A.pendingSuspensionCopyHDSub,params:{unlockDate:Q(X),ccLink:b||(b=T()(H.a,{}))}})};return T()(O.a,{message:te,trackingModuleName:t});case Y:var oe={title:y||(y=T()(E.a,{copy:A.pendingCancelTitleHDSub})),copy:T()(E.a,{copy:A.pendingCancelCopyHDSub,params:{ccLink:m||(m=T()(H.a,{}))}})};return T()(O.a,{message:oe,trackingModuleName:t});case V:case W:case G:case J:case z:var re={title:v||(v=T()(E.a,{copy:A.generalErrorTitleAll})),copy:T()(E.a,{copy:A.generalErrorCopyAll,params:{ccLink:g||(g=T()(H.a,{}))}})};return T()(O.a,{message:re,trackingModuleName:t});case q:var ae={title:S||(S=T()(E.a,{copy:A.noOptionsTitleAll})),copy:T()(E.a,{copy:A.noOptionsCopyAll,params:{ccLink:f||(f=T()(H.a,{}))}})};return T()(O.a,{message:ae,trackingModuleName:t});default:var ie={title:D||(D=T()(E.a,{copy:A.unknownErrorTitle})),copy:T()(E.a,{copy:A.unknownErrorCopy,params:{ccLink:h||(h=T()(H.a,{}))}})};return T()(O.a,{message:ie,trackingModuleName:t})}}},R7ct:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("bdAl"),r={MF:o.productMFSectionsHDSub,DS:o.productDSSectionsHDSub,SR:o.productSRSectionsHDSub,FS:o.productFSSectionsHDSub,SS:o.productSSSectionsHDSub,SO:o.productSOSectionsHDSub,FN:o.productFNSectionsHDSub,TF:o.productTFSectionsHDSub,TN:o.productTNSectionsHDSub,TA:o.productTASectionsHDSub}},Rv48:function(e,n,t){"use strict";t.d(n,"b",(function(){return C})),t.d(n,"c",(function(){return T})),t.d(n,"a",(function(){return N}));var o,r,a=t("gcR/"),i=t.n(a),u=t("J4zp"),c=t.n(u),d=t("ERkP"),s=t.n(d),l=t("lZ/M"),p=t("fTxn"),b=t("MShG"),y=t("wsqa"),m=t("wQT2"),v=t("4tUJ"),g=t("XAnU"),S=t("0Ve6"),f=t("ecEN"),D=t("dBfG"),h=t("0noO"),C=s.a.createContext({setPersistentFooter:function(e){}}),T=s.a.createContext({setUserProfile:function(e){}}),k=function(e){var n=e.pageContentMaxWidth,t=e.children,a=Object(d.useContext)(p.d),u=Object(d.useState)(null),s=c()(u,2),m=s[0],k=s[1],N=Object(d.useState)(null),E=c()(N,2),R=E[0],P=E[1];Object(d.useEffect)((function(){var e;Object(y.f)(),Object(v.c)(null!=R&&null!==(e=R.subscriptions)&&void 0!==e&&e.length?"sub":"regi","")}),[]);var H=Object(d.useMemo)((function(){return R?Object(D.a)(R):[]}),[R]),A={setPersistentFooter:function(e){k(e)}},O={setUserProfile:function(e){P(e)}},I=function(){a.closeDialog()},w={emailAddress:"",subscriptions:(null==R?void 0:R.subscriptions)||[]};return i()(C.Provider,{value:A},void 0,i()(T.Provider,{value:O},void 0,i()(g.b.Provider,{value:w},void 0,i()(b.s,{headerComponent:i()(b.n,{username:R?R.displayName:void 0,pageHeader:"",nytLogoOnClick:y.i,userProfileOnClick:R?function(){Object(y.j)();var e=(null==R?void 0:R.displayName)||"";a.displayCustomModalComponent((function(n){return i()(S.a,{rootElementRef:n,displayName:e,onClose:a.closeDialog,navigationMenu:i()(f.a,{dataTestId:"user-drop-down-nav-menu",onRouterUpdate:I,currentPath:"",navItems:H,trackingContext:{moduleName:h.b,moduleContext:h.a}})})}))}:void 0}),footerComponent:o||(o=i()(l.a,{})),messagingUnitComponent:r||(r=i()(p.e,{})),persistentFooterComponent:m,pageContentMaxWidth:n},void 0,t))))};k.displayName="FeaturePageInternalLayout";var N=function(e){var n=e.pageContentMaxWidth,t=e.children;return s.a.createElement(s.a.Fragment,null,i()(p.b,{purrEnvironment:m.a.PURR_ENVIRONMENT}),i()(k,{pageContentMaxWidth:n},void 0,t))}},XN8p:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var o=t("gcR/"),r=t.n(o),a=(t("ERkP"),t("5lfh")),i=t("MShG"),u=Object(a.d)("div",{target:"evnm5v00"})("display:grid;grid-template-columns:max-content auto;grid-column-gap:",i.jb[1.5],";cursor:pointer;"),c=Object(a.d)("label",{target:"evnm5v01"})("display:contents;cursor:pointer;"),d=Object(a.d)("input",{target:"evnm5v02"})("width:",i.jb[2],";height:",i.jb[2],";cursor:pointer;"),s=Object(a.d)("div",{target:"evnm5v03"})(i.kb.body2," color:",i.Q.text.primary,";"),l=Object(a.d)("div",{target:"evnm5v04"})(i.kb.legal),p=function(e){return r()(u,{"data-testid":"".concat(e.dataTestId||"",":container")},void 0,r()(c,{"data-testid":"".concat(e.dataTestId||"",":label"),as:e.suppressLabelElement?"div":"label"},void 0,r()(d,{"data-testid":"".concat(e.dataTestId||"",":input"),type:"radio",name:e.name,onChange:e.onChange,defaultChecked:e.defaultChecked,defaultValue:e.value,tabIndex:e.tabIndex,disabled:e.disabled}),r()(s,{"data-testid":"".concat(e.dataTestId||"",":content")},void 0,e.label,e.children,e.helperText&&r()(l,{"data-testid":"".concat(e.dataTestId||"",":helper")},void 0,e.helperText))))};p.displayName="RadioButton"},Zai0:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return D})),t.d(n,"c",(function(){return h}));var o,r,a=t("pVnL"),i=t.n(a),u=t("J4zp"),c=t.n(u),d=t("gcR/"),s=t.n(d),l=t("ERkP"),p=t.n(l),b=t("Ggfp"),y=t("fTxn"),m=t("aptJ"),v=t("inKd"),g=t("sHJR"),S=t("neA6"),f=function(e){var n=e.moduleName,t=void 0===n?"UserProfile":n,o=e.moduleRegion,r=void 0===o?"ReloginRequired":o,a=e.moduleContext,i=void 0===a?"ReloginRequired":a;Object(y.u)({moduleName:t,moduleRegion:r,moduleContext:i},v.b,2e3)},D=function(e,n){var t=e.moduleName,o=void 0===t?"UserProfile":t,r=e.moduleRegion,a=void 0===r?"PageLoadError":r,i=e.moduleContext,u=void 0===i?"ErrorMsg":i;Object(y.t)({moduleName:o,moduleLabel:n,moduleRegion:a,moduleContext:u,elementLabel:n})};function h(e,n,t,a){var u,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return function(l){var y=Object(b.useQuery)(e,n),v=y.loading,h=y.error,C=y.data,T=(C=void 0===C?{}:C).accountInfo,k=y.refetch,N=t;if(v)return o||(o=s()(S.a,{}));if(h){var E=c()(h.graphQLErrors,1)[0],R=(void 0===E?{message:"unknown_error"}:E).message;return R===m.g?(f(d),null):(D(d,R),u||(u=s()(g.a,{placement:a||"FULL_PAGE"})))}return T?p.a.createElement(N,i()({accountInfo:T,refetch:k},l)):r||(r=s()(S.a,{}))}}},bdAl:function(e,n,t){"use strict";t.r(n),t.d(n,"labelDifferentPriceForCurrentProductCopy",(function(){return u})),t.d(n,"labelPartiallyDeliveredWithDelayCopy",(function(){return c})),t.d(n,"pillCurrentDeliveryDaysCopy",(function(){return d})),t.d(n,"productMFSectionsHDSub",(function(){return s})),t.d(n,"productDSSectionsHDSub",(function(){return l})),t.d(n,"productSRSectionsHDSub",(function(){return p})),t.d(n,"productFSSectionsHDSub",(function(){return b})),t.d(n,"productSSSectionsHDSub",(function(){return y})),t.d(n,"productSOSectionsHDSub",(function(){return m})),t.d(n,"productFNSectionsHDSub",(function(){return v})),t.d(n,"productTFSectionsHDSub",(function(){return g})),t.d(n,"productTNSectionsHDSub",(function(){return S})),t.d(n,"productTASectionsHDSub",(function(){return f})),t.d(n,"subNotFoundTitleNonHDSub",(function(){return D})),t.d(n,"subNotFoundCopyNonHDSub",(function(){return h})),t.d(n,"pendingStartTitleHDSub",(function(){return C})),t.d(n,"pendingStartCopyHDSub",(function(){return T})),t.d(n,"subSuspendedTitleHDSub",(function(){return k})),t.d(n,"subSuspendedCopyHDSub",(function(){return N})),t.d(n,"pendingChangeTitleHDSub",(function(){return E})),t.d(n,"pendingChangeCopyHDSub",(function(){return R})),t.d(n,"pendingDeliveryTitleHDSub",(function(){return P})),t.d(n,"pendingDeliveryCopyHDSub",(function(){return H})),t.d(n,"pendingSuspensionTitleHDSub",(function(){return A})),t.d(n,"pendingSuspensionCopyHDSub",(function(){return O})),t.d(n,"pendingCancelTitleHDSub",(function(){return I})),t.d(n,"pendingCancelCopyHDSub",(function(){return w})),t.d(n,"generalErrorTitleAll",(function(){return L})),t.d(n,"generalErrorCopyAll",(function(){return M})),t.d(n,"noOptionsTitleAll",(function(){return j})),t.d(n,"noOptionsCopyAll",(function(){return x})),t.d(n,"unknownErrorTitle",(function(){return F})),t.d(n,"unknownErrorCopy",(function(){return _})),t.d(n,"generalReturnAll",(function(){return U}));var o=t("gcR/"),r=t.n(o),a=t("ERkP"),i=t.n(a),u=function(e){var n=e.currentWeeklyPrice,t=e.newWeeklyPrice;return i.a.createElement(i.a.Fragment,null,"This is available in your new area for ",t,"/week. You pay ",n,"/week at your current location.")},c="Delivered with a delay*",d="Current delivery days",s="Includes Science Times, Food, Thursday Styles and Business.",l="Includes The New York Times Magazine, the Book Review, The Arts and Science Times.",p="Includes The New York Times Magazine, the Book Review and Arts.",b="Includes The New York Times Magazine, the Book Review and Arts.",y="Includes The New York Times Magazine, the Book Review and Arts.",m="Includes The New York Times Magazine, the Book Review and Arts.",v="Includes The New York Times Magazine, the Book Review and Arts.",g="Includes Science Times, Food, Thursday Styles and Business.",S="Includes The New York Times Magazine, the Book Review, Arts and Science Times.",f="Includes Science Times, Food, Thursday Styles and Arts.",D="Home Delivery subscription not found.",h=function(e){var n=e.ccLink;return r()("span",{},void 0,"We are sorry but we are unable to locate your home delivery subscription. If this is an error please ",n)};h.displayName="subNotFoundCopyNonHDSub";var C="Your subscription hasn't started.",T=function(e){var n=e.unlockDate;return r()("span",{},void 0,"Your subscription is scheduled to begin on ",n,". On that date, you'll be able to make changes to your subscription.")};T.displayName="pendingStartCopyHDSub";var k="This subscription has been canceled.",N=function(e){var n=e.ccLink;return r()("span",{},void 0,"Please ",n," if you'd like to restart your subscription.")};N.displayName="subSuspendedCopyHDSub";var E="You have scheduled a subscription change.",R=function(e){var n=e.unlockDate,t=e.ccLink;return r()("span",{},void 0,"Your subscription is scheduled to be changed on ",n,". On that date, you'll be able to make other changes to your subscription. If you have any questions, please ",t,".")};R.displayName="pendingChangeCopyHDSub";var P="You have scheduled an address change.",H=function(e){var n=e.unlockDate,t=e.ccLink;return r()("span",{},void 0,"Your delivery address is scheduled to be changed on ",n,". On that date, you'll be able to make other changes to your subscription. If you have any questions, please ",t,".")};H.displayName="pendingDeliveryCopyHDSub";var A="Changes can't be made during your delivery suspension.",O=function(e){var n=e.unlockDate,t=e.ccLink;return r()("span",{},void 0,"You may make any changes when your subscription resumes on ",n,". If you have any questions, please ",t,".")};O.displayName="pendingSuspensionCopyHDSub";var I="This subscription has been canceled.",w=function(e){var n=e.ccLink;return r()("span",{},void 0,"Due to a previously scheduled cancellation, we are unable to make changes to your subscription online. Please ",n," if you'd like to restart your subscription.")};w.displayName="pendingCancelCopyHDSub";var L="Something went wrong.",M=function(e){var n=e.ccLink;return r()("span",{},void 0,"We are sorry but we are unable to change your subscription online. Please ",n," for assistance.")};M.displayName="generalErrorCopyAll";var j="Only one subscription is available in your area.",x=function(e){var n=e.ccLink;return r()("span",{},void 0,"Your current subscription is the only one offered at your address. If you need assistance or more information, ",n,".")};x.displayName="noOptionsCopyAll";var F="Try again soon",_=function(e){var n=e.ccLink;return r()("span",{},void 0,"We're sorry, but we're having a technical issue right now. Please try again soon, or"," ",n," for immediate assistance.")};_.displayName="unknownErrorCopy";var U="Return to Account"},k4yX:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c}));var o=t("5lfh"),r=t("MShG"),a="160px",i=Object(o.d)("div",{target:"e8ghrrl0"})("display:grid;grid-row-gap:",r.jb[1],";"),u=Object(o.d)("label",{target:"e8ghrrl1"})("display:grid;grid-row-gap:",r.jb[2],";border:1px solid ",r.Q.stroke.secondary,";box-sizing:border-box;border-radius:3px;padding:",r.jb[3]," ",r.jb[2],";cursor:pointer;@media only screen and (min-width:",r.K.MEDIUM,"){grid-template-columns:auto ",a,";grid-column-gap:",r.jb[3],";padding:",r.jb[3],";}"),c=Object(o.d)("div",{target:"e8ghrrl2"})("padding-top:",r.jb[1],";@media only screen and (min-width:",r.K.MEDIUM,"){padding-top:0;padding-left:36px;}")},vvwg:function(e,n,t){"use strict";t.d(n,"a",(function(){return C}));var o,r,a,i,u,c=t("gcR/"),d=t.n(c),s=t("J4zp"),l=t.n(s),p=t("ERkP"),b=t.n(p),y=t("fTxn"),m=t("k4yX"),v=t("MShG"),g=t("/Efl"),S=t("XN8p"),f=t("bdAl"),D=t("R7ct"),h=function(e){var n=e.product,t=e.selected,c=e.disabled,s=e.currentProductFlag,l=e.currentProductWeeklyPrice,p=e.onSelect,y=n.productCode,h=n.productName,C=n.permanentRateWeeklyAmount,T=n.deliveryDays.some((function(e){return"MAIL"===e.deliveryMethod}));return d()(m.b,{},void 0,d()("div",{},void 0,d()(S.a,{name:"productName",value:y,label:d()(v.F,{level:"2",colorVariant:v.P.text.primary},void 0,h),defaultChecked:t,onChange:function(){return p(y,h)},suppressLabelElement:!0,disabled:c}),d()(m.c,{},void 0,s&&(o||(o=d()(v.w,{},void 0,d()(g.a,{copy:f.pillCurrentDeliveryDaysCopy})))),r||(r=d()(v.J,{space:"1"})),d()(v.t,{typeStyle:v.bb.body3,colorVariant:v.P.text.secondary},void 0,d()(g.a,{copy:D.a[y]||""})),s&&l&&b.a.createElement(b.a.Fragment,null,a||(a=d()(v.J,{space:"1"})),d()(v.t,{typeStyle:v.bb.body3,colorVariant:v.P.text.primary},void 0,d()(g.a,{copy:f.labelDifferentPriceForCurrentProductCopy,params:{currentWeeklyPrice:l,newWeeklyPrice:C}}))),T&&b.a.createElement(b.a.Fragment,null,i||(i=d()(v.J,{space:"1"})),d()(v.t,{typeStyle:v.bb.body3,colorVariant:v.P.text.primary},void 0,u||(u=d()(g.a,{copy:f.labelPartiallyDeliveredWithDelayCopy})))))),d()(v.b,{level:"2",colorVariant:v.P.text.primary},void 0,"".concat(C," every week")))};h.displayName="AvailableProductCard";var C=function(e){var n=e.availableProducts,t=e.onRadioButtonClick,o=e.preselectedProductCode,r=e.currentProductCode,a=e.currentProductWeeklyPrice,i=e.trackingModuleName,u=e.mutationLoading,c=Object(p.useState)(o||""),s=l()(c,2),b=s[0],v=s[1],g=function(e,n){Object(y.r)({moduleName:i,elementName:"ChooseProductButton",elementLabel:e}),v(e),t(e,n)},S=n.map((function(e){var n=e.productCode;return d()(h,{product:e,currentProductFlag:r===e.productCode,currentProductWeeklyPrice:a,selected:b===n,disabled:u||!1,onSelect:g},e.productCode)}));return d()(m.a,{},void 0,S)};C.displayName="AvailableProductsList"},wsBj:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var o,r,a,i=t("gcR/"),u=t.n(i),c=t("ERkP"),d=t.n(c),s=t("/Efl"),l=t("bdAl"),p=t("MShG"),b=t("fTxn"),y=t("n7My"),m=function(e){var n=e.message,t=e.dataTestId,i=e.trackingModuleName,c=Object(y.c)(),m=n.title,v=n.copy;return d.a.createElement(d.a.Fragment,null,u()(p.o,{typeStyle:p.bb.display2,colorVariant:p.P.text.primary},void 0,m),o||(o=u()(p.J,{space:"4"})),u()(p.t,{dataTestId:t,typeStyle:p.bb.body1},void 0,v),r||(r=u()(p.J,{space:"4"})),u()(p.l,{onClick:function(e){e.preventDefault(),i&&Object(b.r)({moduleName:i,elementName:"ReturnToAccountButton",elementLabel:"Return to Account"}),c.to("/homedelivery")},variant:p.N.filled,heightVariant:p.M.compact,widthVariant:{small:p.O.flex,medium:p.O.content},to:"/account/homedelivery",targetTab:p.fb.sameTab},void 0,a||(a=u()(s.a,{copy:l.generalReturnAll}))))}}}]); })();
//# sourceMappingURL=22-363f142b1a744ff18989.js.map