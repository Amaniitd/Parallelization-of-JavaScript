(function __HORCRUX__(){ "use strict";(window.self.webpackChunk_N_E=window.self.webpackChunk_N_E||[]).push([[7291],{67291:function(n,t,e){e.d(t,{x:function(){return L}});var r=e(52322),i=e(2784),o=e(66383),a=e(92228),c=e(30382),s=e.n(c),l=e(70865),d=e(96670),u=e(19453),p=e(45103),f=e(91842),m=e(31619),v=e(89254),g=e(77637),x=e(6741);function y(){var n=(0,a.Z)(["\n    width: 30%;\n    padding-left: ",";\n"]);return y=function(){return n},n}function h(){var n=(0,a.Z)(["\n    margin: 0;\n    padding: "," "," "," ",";\n    "," {\n        padding: "," 0 "," 0;\n    }\n    .content {\n        ","\n        ","\n    }\n    .heading {\n        padding-bottom: ",";\n        ",";\n        ","\n    }\n    .link {\n        text-decoration: none;\n        display: flex;\n        flex-direction: column;\n        ","\n    }\n"]);return h=function(){return n},n}var C=function(n){var t=n.recommendation,e=n.refMarker,i=n.className,o=(0,m.N)({id:"titleRecommendationPrompt_attributionHeading",defaultMessage:"Because of your interest in"});return(0,r.jsxs)(_,{className:i,children:[(0,r.jsx)("div",{className:"heading",children:o}),(0,r.jsx)("div",{className:"content",children:t.explanations.slice(0,2).map((function(n,t){var i=n.title,o=(0,v.b)(i);return(0,r.jsx)(r.Fragment,{children:o&&(0,r.jsx)(p.TextLink,{className:"link",href:"/title/".concat(i.id,"/?").concat((0,g.I)("tt_bc",e)),text:o,inheritColor:!0},t)})}))})]})},T=(0,u.default)(p.SecondaryButton).withConfig({componentId:"sc-9e0dbd07-0"})(y(),f.spacing.l),_=u.default.div.withConfig({componentId:"sc-9e0dbd07-1"})(h(),f.spacing.xs,f.spacing.s,f.spacing.s,f.spacing.s,f.mediaQueries.breakpoints.above.m,f.spacing.xs,f.spacing.s,(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,f.setTypographyType)("bodySmall"),f.spacing.xxs,(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),(0,f.setTypographyType)("bodySmall"),(0,f.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color")),I=function(n){var t=n.isOpen,e=n.isNotInterested,i=n.interestStateOnClick,o=n.recommendation,a=n.refMarker,c=n.onClose,s=function(n,t){return(0,d.Z)((0,l.Z)({},n),{suffix:"".concat(n.suffix?"".concat(n.suffix,"_"):"").concat(t.refTag)})}(a,o),u=(0,m.N)({id:"common_listItem_notInterested",defaultMessage:"Not interested"});return(0,r.jsx)(x.P,{isOpen:t,onClose:c,title:o.title,refMarker:a,contentOverride:function(){return(0,r.jsx)(r.Fragment,{children:o&&(0,r.jsx)(C,{recommendation:o,refMarker:s})})},actionOverride:function(){return(0,r.jsx)(T,{ariaLabel:u,preIcon:e?"thumb-down-filled":"thumb-down",onClick:i})}})},P=e(93130),b=e(48543),O=e(95460);function k(){var n=(0,a.Z)(["\n    mutation UpdateTitleInterest(\n        $titleId: ID!\n        $interestLevel: InterestLevel!\n    ) {\n        updateTitleInterest(\n            input: { titleId: $titleId, interestLevel: $interestLevel }\n        ) {\n            success\n        }\n    }\n"]);return k=function(){return n},n}var j={id:"common_featureHeader_link_info",defaultMessage:"More information"},S=s()(k()),w=e(33360),N=e(93218),L=function(n){var t,e=n.recommendation,a=n.refMarker,c=n.index,s=n.context,l=(0,w.V1)(s,null===a||void 0===a?void 0:a.prefix),d=l.createButton,u=l.createPrompt,p=function(n,t,e,a){var c=(0,i.useState)(!1),s=c[0],l=c[1],d=(0,i.useState)(!1),u=d[0],p=d[1],f=(0,o.Z)((0,b.Z)(S),2)[1];return{iconButtonProps:{name:"info",label:(0,m.N)(j),onClick:function(){l(!0),(0,O.K8)((0,g.z)(t,a),e,"overflow-expand",O.qB.POP_UP)}},prompt:(0,r.jsx)(I,{isNotInterested:u,interestStateOnClick:function(){var t=n.title.id,r=u?P.Fh.Ambivalent:P.Fh.NotInterested,i=u?"reverse-not-interested":"not-interested";(0,O.K8)((0,g.z)("tt_not_int",a),e,i,O.qB.ACTION_ONLY),f({titleId:t,interestLevel:r}),p(!u)},isOpen:s,onClose:function(){return l(!1)},recommendation:n,refMarker:a})}}(e,"ovflw",s,a),f=p.iconButtonProps,v=p.prompt;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.c,{className:"top-picks-title",data:e.title,refMarker:a,alternateButton:d(e.title,c),iconButtons:[f]},e.title.id),u(null!==(t=a.prefix)&&void 0!==t?t:""),v]})}},4236:function(n,t,e){e.d(t,{Et:function(){return b}});var r=e(92228),i=e(52322),o=e(30382),a=e.n(o),c=(e(2784),e(19453)),s=e(45103),l=e(91842),d=e(91793),u=e(77637),p=e(6741);function f(){var n=(0,r.Z)(['\n    fragment TitleSummaryPromptCreditCategories on Title {\n        principalCast: principalCredits(filter: { categories: ["cast"] }) {\n            ...TitleSummaryPromptCredits\n        }\n        principalCreators: principalCredits(\n            filter: { categories: ["creator"] }\n        ) {\n            ...TitleSummaryPromptCredits\n        }\n        principalDirectors: principalCredits(\n            filter: { categories: ["director"] }\n        ) {\n            ...TitleSummaryPromptCredits\n        }\n    }\n\n    fragment TitleSummaryPromptCredits on PrincipalCreditsForCategory {\n        category {\n            text\n        }\n        credits(limit: 3) {\n            name {\n                id\n                nameText {\n                    text\n                }\n            }\n        }\n    }\n']);return f=function(){return n},n}function m(){var n=(0,r.Z)(["\n    query Title_Summary_Prompt_From_Base(\n        $id: ID!\n        $providerId: String\n        $location: WatchOptionsLocation\n    ) {\n        title(id: $id) {\n            ...TitleSummaryPromptCreditCategories\n            ...baseTitlePromptQueryFragment\n        }\n    }\n    ","\n    ","\n"]);return m=function(){return n},n}function v(){var n=(0,r.Z)(["\n    font-size: ",";\n    ",";\n    display: inline;\n"]);return v=function(){return n},n}function g(){var n=(0,r.Z)(["\n    font-size: ",";\n    ",";\n    margin-right: ",";\n"]);return g=function(){return n},n}function x(){var n=(0,r.Z)(["\n    ",";\n    margin-bottom: ",";\n"]);return x=function(){return n},n}function y(){var n=(0,r.Z)(["\n    margin: ",";\n    "," {\n        margin-left: 0;\n        margin-right: 0;\n    }\n"]);return y=function(){return n},n}var h="p_ct",C="p_ct_dr",T="p_ct_cr",_="p_ct_cst",I=a()(f()),P=a()(m(),p.m,I),b=function(n){var t=n.title,e=n.refMarker,r=n.onClose,o=n.isOpen;return(0,i.jsx)(p.P,{isOpen:o,onClose:r,title:t,refMarker:e,queryOverride:{query:P},contentOverride:function(n){var t=null===n||void 0===n?void 0:n.title,r=(null===t||void 0===t?void 0:t.principalCreators)&&t.principalCreators[0],o=(null===t||void 0===t?void 0:t.principalDirectors)&&t.principalDirectors[0],a=(null===t||void 0===t?void 0:t.principalCast)&&t.principalCast[0];if(t&&(r||o||a))return(0,i.jsxs)(w,{"data-testid":h,children:[r&&(0,i.jsx)(O,{testId:T,creditCategory:r,refTag:(0,u.z)("tt_pcr",e)}),o&&(0,i.jsx)(O,{testId:C,creditCategory:o,refTag:(0,u.z)("tt_pd",e)}),a&&(0,i.jsx)(O,{testId:_,creditCategory:a,refTag:(0,u.z)("tt_pca",e)})]})}})},O=function(n){var t,e=n.creditCategory,r=n.refTag,o=n.testId,a=e.credits,c=null===(t=e.category)||void 0===t?void 0:t.text;return a&&c&&a.length>0?(0,i.jsxs)(S,{"data-testid":o,children:[(0,i.jsxs)(j,{children:[" ",c," "]}),(0,i.jsx)(s.InlineList,{showDividers:!0,inline:!0,children:a.map((function(n){var t;if(n&&n.name.id&&(null===(t=n.name.nameText)||void 0===t?void 0:t.text))return(0,i.jsx)(s.InlineListItem,{children:(0,i.jsx)(k,{href:"/name/".concat(n.name.id,"/").concat(r?"?ref_=".concat(r):""),text:n.name.nameText.text},"name-link-".concat(n.name.id))},n.name.id)}))})]},c):null},k=(0,c.default)(s.TextLink).withConfig({componentId:"sc-35143436-0"})(v(),(0,l.setTypographyType)("bodySmall"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),j=c.default.span.withConfig({componentId:"sc-35143436-1"})(g(),(0,l.setTypographyType)("subtitle2"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"),l.spacing.xs),S=c.default.div.withConfig({componentId:"sc-35143436-2"})(x(),(0,d.S)(1),l.spacing.xs),w=c.default.div.withConfig({componentId:"sc-35143436-3"})(y(),l.spacing.s,l.mediaQueries.breakpoints.above.m)},33360:function(n,t,e){e.d(t,{Lt:function(){return x},V1:function(){return v},sG:function(){return g}});var r=e(92228),i=e(52322),o=e(30382),a=e.n(o),c=e(2784),s=e(75467),l=e(4236),d=e(31619),u=e(25800);function p(){var n=(0,r.Z)(["\n    fragment TitleWatchOption on Title {\n        primaryWatchOption {\n            additionalWatchOptionsCount\n        }\n    }\n"]);return p=function(){return n},n}function f(){var n=(0,r.Z)(["\n    query TitleListWatchOption(\n        $titleIds: [ID!]!\n        $location: WatchOptionsLocation\n    ) {\n        titles(ids: $titleIds) {\n            id\n            primaryWatchOption(location: $location) {\n                additionalWatchOptionsCount\n            }\n        }\n    }\n"]);return f=function(){return n},n}var m="_wo_",v=function(n,t){var e=(0,c.useState)(),r=e[0],o=e[1],a=(0,c.useState)(),p=a[0],f=a[1],v=(0,d.N)({id:"common_buttons_watchOptions",defaultMessage:"Watch options"});return{createButton:function(e,r,i){var a=e.primaryWatchOption;return i||a?{props:{onSelect:function(){o(e),f(r+1),n&&(0,u.K8)(t+m+"".concat(r+1),n,"watcho-open-".concat(e.id),u.qB.POP_UP)}},text:v}:void 0},createPrompt:function(e){var a="_wo_wl_rbn",c=n&&t?{pageType:n.type,subPageType:n.subType,refTag:p?t+a+"_"+p:t+a}:void 0;return(0,i.jsx)(s.WatchlistConsumer,{id:r?r.id:"",metricsContext:c,render:function(t){return(0,i.jsx)(l.Et,{title:r,isOpen:!!r,onClose:function(){o(void 0),f(void 0),n&&(0,u.K8)(e+m+p,n,"watcho-close-".concat(null===r||void 0===r?void 0:r.id),u.qB.POP_UP)},refMarker:{id:null===r||void 0===r?void 0:r.id,prefix:e,suffix:p?"".concat(p):void 0}})}})}}},g={titleWatchOption:a()(p())},x=a()(f())}}]); })();