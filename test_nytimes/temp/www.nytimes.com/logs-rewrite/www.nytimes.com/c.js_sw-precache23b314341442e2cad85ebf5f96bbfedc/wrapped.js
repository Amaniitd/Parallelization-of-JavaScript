(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"4GNh":function(e,t,n){"use strict";var a,i,o,r=n("VkAN"),l=n.n(r),c=n("gcR/"),s=n.n(c),d=n("ERkP"),m=n.n(d),u=n("Ck9z"),f=n.n(u),p=n("c/U+"),h=n.n(p),g=n("rNEd"),b=n("E8RS"),y=n("AeOL"),v=n("5K/1"),w=n("fZdH"),x=n("7VSS"),k=n("X6oL"),O=n("rONy"),N=n("06b3"),I=n("Rb+W"),T=n("Lcdh"),E=n("hAwj"),B=n("jVmh"),j=n.n(B),R=Object(T.css)("font-family:",j.a.font.franklin,";font-style:normal;margin-bottom:32px;@media (max-width:480px){margin-bottom:21px;}"),D=Object(T.css)("text-align:left;margin-left:0;color:",E.color.content.primary,";border:1px solid ",E.color.content.primary,";width:40px;margin-bottom:18px;@media (max-width:480px){width:30px;margin-bottom:15px;}"),A=Object(T.css)("a{text-decoration:underline;color:",E.color.signal.editorial,";}font-size:",j.a.font.size(15),";font-weight:300;line-height:20px;"),_=Object(T.css)("margin-right:1.5rem;"),S=function(){var e,t,n,r,l="styln_trust_inline_explainers_0822",c=Object(w.a)(),u=Object(k.useTracking)(),f=Object(x.a)(),p=((null==c||null===(e=c[l])||void 0===e?void 0:e.allocated)?l:(null==c||null===(t=c.styln_trust)||void 0===t?void 0:t.allocated)&&"styln_trust")||(null==c||null===(n=c[b.c])||void 0===n?void 0:n.allocated)&&b.c,h=null==c||null===(r=c[p])||void 0===r?void 0:r.variant;if(Object(d.useEffect)((function(){if(h){var e=Object(I.f)(N.a);t=h,Object(O.a)((function(){var n,a,i,o=(null===(n=window)||void 0===n||null===(a=n.NYTD)||void 0===a||null===(i=a.PageViewId)||void 0===i?void 0:i.current)||"";window.Iterate("install","62fbffa010eae90001b94079"),window.Iterate("identify",{agentId:e},{slug:"trust-inline-module-corrections",pageviewID:o,testVariant:t})}))}var t}),[h]),!f)return a||(a=s()("p",{},void 0,"How we handle corrections"));var g={event:"impression",module:{label:h,name:"trust-corrections",context:"trust_inline_explainer"}},T=["email","push"].some((function(e){return"trust_inline_explainer".toLowerCase().startsWith(e)}));return s()(d.Fragment,{},"client-render",s()(y.a,{testName:b.c,holdoutVariant:b.b},void 0,s()(y.a,{testName:"styln_trust",holdoutVariant:b.a},void 0,s()(y.a,{testName:l,holdoutVariant:b.a},void 0,s()(v.a,{callback:function(){return T?{}:u.trackEvent(g)}},void 0,(function(e){var t=e.ref;return m.a.createElement("div",{ref:t,className:R},i||(i=s()("hr",{className:D})),o||(o=s()("p",{className:A},void 0,"When we learn of a mistake, we acknowledge it with a correction. If you spot an error, please let us know at"," ",s()("span",{className:_},void 0,s()("a",{href:"mailto:nytnews@nytimes.com"},void 0,"nytnews@nytimes.com"),"."),s()("a",{href:"https://www.nytimes.com/explain/2022/new-york-times-journalism"},void 0,"Learn more"))))}))))))};S.displayName="AddendumComponent";var W,C,z=m.a.memo(S),P=n("mgoG"),M=n.n(P),H=Object(T.css)("font-family:",j.a.font.serifBase,";font-style:italic;font-size:",j.a.font.size(17),";line-height:",j.a.font.size(24),";width:",j.a.breakpoint.mobileFullWidth,";max-width:",j.a.breakpoint.textBodyWidth,"px;margin:2.5rem auto ",j.a.font.size(12),";",j.a.breakpoint.medium,"{font-size:",j.a.font.size(19),";line-height:",j.a.font.size(28),";margin-bottom:",j.a.font.size(20),";}",j.a.breakpoint.extraLarge,"{width:",j.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",j.a.breakpoint.textBodyWidthExtralarge,"px;}",M.a,";"),L=Object(T.css)("margin-bottom:1rem;"),F=Object(T.css)("font-weight:",j.a.font.weight.bold,";"),Y=Object(T.css)(H," display:inline;font-weight:",j.a.font.weight.bold,";"),V=Object(T.css)("margin-top:1px;"),Z=Object(T.css)("display:inline;"),J=function(e){var t=e.addendum;return t.showDate?t.multiCorrection?m.a.createElement(m.a.Fragment,null,s()("strong",{className:F},void 0,"Corrections were made on")," ",s()(h.a,{className:Y},void 0,t.publicationDate),": "):m.a.createElement(m.a.Fragment,null,s()("strong",{className:F},void 0,"A correction was made on")," ",s()(h.a,{className:Y},void 0,t.publicationDate),": "):null},G=function(e,t){return"CORRECTION"===e.type&&e.showDate&&0===t?Z:V},U=function(e){var t=e.data;if(!t)return null;if(!t.addendums)return null;var n=function(e){return e.forEach((function(t,n){var a=n>0?e[n-1]:{type:"",publicationDate:""};t.showDate=!("CORRECTION"===t.type&&t.type===a.type&&t.publicationDate===a.publicationDate),a.multiCorrection=!t.showDate})),e}(t.addendums),a=t.addendums.some((function(e){return"CORRECTION"===e.type}));return s()("div",{className:H},void 0,n.map((function(e){return s()("div",{className:L},e.legacyHtmlBody,"CORRECTION"!==e.type?m.a.createElement(m.a.Fragment,null,s()("strong",{className:F},void 0,"EDITORS_NOTE"===(t=e.type)?"Editors’ Note":t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),":")," ",s()(h.a,{className:Y},void 0,e.publicationDate)):s()(J,{addendum:e}),e.body.content?e.body.content.map((function(t,n){return s()(g.a,{className:G(e,n),data:t},n.toString())})):s()("div",{className:V,dangerouslySetInnerHTML:{__html:e.legacyHtmlBody?e.legacyHtmlBody:e.body.text}}));var t})),a&&(W||(W=s()(z,{}))))};U.displayName="Addendum",U.defaultProps={data:void 0},U.fragments={data:f()(C||(C=l()(["\n    fragment Addendum_data on CreativeWork {\n      addendums {\n        type\n        publicationDate\n        legacyHtmlBody\n        body {\n          text\n          content {\n            ...ParagraphBlock_data\n          }\n        }\n      }\n    }\n    ","\n  "])),g.a.fragments.data)};t.a=U},IzdK:function(e,t,n){"use strict";n.r(t),n.d(t,"showReviewMetaFooter",(function(){return ae})),n.d(t,"suppressInfobox",(function(){return ie})),n.d(t,"getBottomOfArticleTopRelativeToDocument",(function(){return re})),n.d(t,"footerBlockQuery",(function(){return ce}));var a,i=n("gcR/"),o=n.n(i),r=n("VkAN"),l=n.n(r),c=n("lSNA"),s=n.n(c),d=n("ERkP"),m=n.n(d),u=n("Ggfp"),f=n("Ck9z"),p=n.n(f),h=n("X6oL"),g=n("ZKN5"),b=n("0goo"),y=n.n(b),v=n("pCca");function w(e){var t=e.article,n=Object(h.useTracking)().trackEvent,a=Object(v.a)().deviceType;return o()(y.a,{article:t,deviceType:a,trackClick:function(e){n({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"restaurant"===e?"reserve-a-table":"find-tickets",label:"restaurant"===e?"Reserve A Table":"Find Tickets",url:""}}})},trackCall:function(){n({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"call",label:"Call",url:""}}})}})}w.displayName="ReviewFooter",w.fragments={article:p()(a||(a=l()(["\n    fragment ReviewFooter_article on Article {\n      id\n      compatibility {\n        isDiningReview\n        isMovieReview\n      }\n      reviewItems {\n        overrideLabel\n        isCriticsPick\n        subject {\n          __typename\n          ... on Restaurant {\n            id\n            name\n            contactDetails {\n              addresses {\n                crossStreet\n                neighborhood\n                address {\n                  streetAddress\n                }\n              }\n              phoneNumbers {\n                type\n                number\n              }\n            }\n            accessibilityDescription\n            takesReservations\n            reservationsUrl\n            reservationsNote\n            rating\n            atmosphere\n            openStatus\n            priceCategory\n            wineList\n            recommendedDishes\n            soundLevel\n            alcoholDescription\n            openHours\n            coordinates {\n              latitude\n              longitude\n            }\n            website\n            lastModified\n            singlePlatformId\n          }\n          ... on Movie {\n            title\n            movieRating: rating\n            runtimeUS\n            ticketUrl\n            directors\n            writers\n            genres\n            movieCast: cast {\n              actor\n            }\n            imdbId\n          }\n        }\n      }\n    }\n  "])))};var x,k=w,O=n("Kjui"),N=n("8A8z"),I=n.n(N),T=n("Lcdh"),E=n("jVmh"),B=n.n(E),j=Object(T.css)("margin-left:20px;margin-right:20px;",B.a.breakpoint.small,"{width:",B.a.breakpoint.mobileFullWidth,";max-width:",B.a.breakpoint.textBodyWidth,"px;margin:1.5rem auto 1em;}",B.a.breakpoint.extraLarge,"{width:",B.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",B.a.breakpoint.textBodyWidthExtralarge,"px;margin:1.5rem auto 1em;}",B.a.print,";"),R=function(e){var t=e.data;return!!(t&&t.bylines&&t.bylines.length>0)&&o()("div",{className:j},void 0,function(e){var t=0;return e.bylines.map((function(e){return e&&e.creators&&e.creators.length>0?e.creators.map((function(e){var n=null,a=null;return e.contactDetails&&e.contactDetails.socialMedia&&e.contactDetails.socialMedia.map((function(e){return"twitter"===e.type?n=e.account:"facebook"===e.type&&(a=e.account),!0})),e.legacyData&&e.legacyData.htmlShortBiography?(t+=1,o()(I.a,{htmlShortBiography:e.legacyData.htmlShortBiography,twitter:n,facebook:a},t)):null})):null}))}(t))};R.fragments={data:p()(x||(x=l()(["\n    fragment Bio_data on CreativeWork {\n      bylines {\n        creators {\n          ... on Person {\n            id\n            contactDetails {\n              socialMedia {\n                type\n                account\n              }\n            }\n            legacyData {\n              htmlShortBiography\n            }\n          }\n        }\n      }\n    }\n  "])))};var D,A=R,_=n("4GNh"),S=n("mgoG"),W=n.n(S),C=Object(T.css)("font-family:",B.a.font.franklinBase,";font-size:",B.a.font.size(14),";line-height:",B.a.font.size(20),";color:",B.a.color.gray20,";margin:2rem auto 1rem;width:",B.a.breakpoint.mobileFullWidth,";max-width:",B.a.breakpoint.textBodyWidth,"px;p{margin-bottom:1rem;}a{text-decoration:underline;text-decoration-color:",B.a.color.gray50,";}a:hover,a:focus{color:",B.a.color.gray30,";text-decoration:none;}em{font-style:italic;}strong{font-weight:bold;}",B.a.breakpoint.medium,"{font-size:",B.a.font.size(15),";line-height:",B.a.font.size(22),";a{text-decoration:none;border-bottom:1px solid ",B.a.color.gray50,";}a:hover,a:focus{color:",B.a.color.gray30,";border-bottom:1px solid ",B.a.color.white,";}}",B.a.breakpoint.extraLarge,"{width:",B.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",B.a.breakpoint.textBodyWidthExtralarge,"px;}",W.a,";"),z=function(e){var t=e.data,n=e.suppressInfobox;if(!t||!t.legacy||""===t.legacy.htmlExtendedAuthorOrArticleInformation&&""===t.legacy.htmlInfoBox||n&&""===t.legacy.htmlExtendedAuthorOrArticleInformation||t.compatibility&&t.compatibility.isOak)return null;var a="".concat(t.legacy.htmlExtendedAuthorOrArticleInformation).concat(n?"":" ".concat(t.legacy.htmlInfoBox));return o()("div",{className:C,dangerouslySetInnerHTML:{__html:a}})};z.displayName="ExtendedInformation",z.fragments={data:p()(D||(D=l()(["\n    fragment ExtendedInformation_data on Article {\n      id\n      compatibility {\n        isOak\n      }\n      legacy {\n        htmlExtendedAuthorOrArticleInformation\n        htmlInfoBox\n      }\n    }\n  "])))},z.defaultProps={data:void 0,suppressInfobox:!1};var P,M=z,H=n("IJjO"),L=n.n(H),F=Object(T.css)("width:",B.a.breakpoint.mobileFullWidth,";max-width:",B.a.breakpoint.textBodyWidth,"px;",B.a.breakpoint.extraLarge,"{width:",B.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",B.a.breakpoint.textBodyWidthExtralarge,"px;}",W.a,";"),Y=function(e){var t=e.data;if(!t||!t.legacy||!t.legacy.reviewInformation)return null;var n="".concat(t.legacy.reviewInformation);return o()(L.a,{html:n,className:F})};Y.displayName="ReviewInformation",Y.defaultProps={data:void 0},Y.fragments={data:p()(P||(P=l()(["\n    fragment ReviewInformation_data on Article {\n      id\n      legacy {\n        reviewInformation\n      }\n    }\n  "])))};var V,Z=Y,J=n("dlEz"),G=n("rI8Z"),U=Object(T.css)("font-family:",B.a.font.franklinBase,";font-size:",B.a.font.size(12),";line-height:",B.a.font.size(16),";width:",B.a.breakpoint.mobileFullWidth,";max-width:",B.a.breakpoint.textBodyWidth,"px;margin:0 auto 1em;color:",B.a.color.gray30,";a{color:",B.a.color.gray30,";text-decoration:underline;}a:hover{text-decoration:none;}",B.a.breakpoint.extraLarge,"{width:",B.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",B.a.breakpoint.textBodyWidthExtralarge,"px;}",W.a,";@media print{span{display:none;}}"),K=Object(T.css)("font-weight:",B.a.font.weight.medium,";display:inline;"),Q={ofTheSundayMagazine:" of the Sunday Magazine",oftheSundayBookReview:" of the Sunday Book Review",ofTMagazine:" of T Magazine",ofEducationLife:" of Education Life",oftheNewYorkEdition:" of the New York edition",oftheNationaledition:" of the National edition",inTheInternationalNewYorkTimes:" in The New York Times International Edition",inTheInternationalHeraldTribune:" in The International Herald Tribune",aVersionOf:"A version of this article appears in print on ",onPage:", Page ",onSection:", Section ",ofThe:void 0,withTheHeadline:" with the headline: ",links:'. <a href="https://www.parsintl.com/publication/the-new-york-times/">Order Reprints</a> | <a href="https://www.nytimes.com/section/todayspaper">Today’s Paper</a> | <a href="https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?campaignId=48JQY">Subscribe</a>'},X=function(e){var t,n=e.data;if(n&&n.printInformation&&n.printInformation.publicationDate&&(n.printInformation.section||n.printInformation.edition)&&"The New York Times on the Web"!==n.printInformation.edition&&n.source&&n.source.displayName){var a=n.source.displayName,i=n.printInformation,r=i.publicationDate,l=i.section,c=i.page,s=i.edition,d=i.headline,m=function(e,t,n){var a="",i=!0,o=!0;switch(e){case"MM":a=Q.ofTheSundayMagazine,i=!1;break;case"BR":a=Q.oftheSundayBookReview,i=!1;break;case"M2":a=Q.ofTMagazine,i=!1;break;case"ED":a=Q.ofEducationLife,i=!1;break;default:switch(a=function(e){return["NewYork","altNewYork","SundayAdvance","LongIsland","Westchester","Connecticut","NewJersey","ManhattanBronx","ZonedLI","ZonedWC","ZonedCN","ZonedNJ","ZonedJN","ZonedJC","ZonedMB","ZonedBC","DTNewYork","The New York Times on the Web"].includes(e)}(t)?Q.oftheNewYorkEdition:Q.oftheNationaledition,n){case"International New York Times":a=Q.inTheInternationalNewYorkTimes,o=!1;break;case"Global":case"International Herald Tribune":a=Q.inTheInternationalHeraldTribune,o=!1}}return{printEdition:a,showSection:i,showHeadline:o}}(l,s,a),u=m.printEdition,f=m.showSection,p=m.showHeadline;return o()("div",{className:U},void 0,Q.aVersionOf,o()(J.a,{className:K,unix:(t=r,new Date(t).getTime()/1e3),formatter:"abbreviated-date"}),c&&f&&Q.onSection,c&&f&&l,c&&Q.onPage,c&&+c,Q.ofThe,u,p&&d&&Q.withTheHeadline,p&&d&&d,Object(G.a)(Q.links))}return null};X.defaultProps={data:void 0},X.fragments={data:p()(V||(V=l()(["\n    fragment PrintInformation_data on Article {\n      id\n      source {\n        id\n        displayName\n      }\n      printInformation {\n        section\n        page\n        publicationDate\n        edition\n        headline @stripHtml\n      }\n    }\n  "])))};var $,q=X;function ee(e){var t=e.offsetHeight,n=window.getComputedStyle(e);return t+=window.parseInt(n.marginTop,10)+window.parseInt(n.marginBottom,10)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&!t.compatibility.isArtReview&&!t.compatibility.isBookReview||n)}function ie(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&(t.compatibility.isTheaterReview||t.compatibility.isDiningReview)||n)}var oe={event:"impression",module:{name:"article_complete",context:"",label:"",region:"article_complete"}};function re(e,t){return e.offsetTop+t.offsetTop}function le(e){var t=function e(t,n){return(t.tagName||"").toLowerCase()===n?t:t.parentNode?e(t.parentNode,n):void 0}(e,"article")||{},n={top:t.offsetTop,height:ee(t)},a={top:re(t,e),height:ee(e)},i={scrollTop:Math.round(window.document.documentElement.scrollTop||window.document.body.scrollTop||0),height:Math.max(window.document.documentElement.clientHeight,window.innerHeight||0),width:Math.max(window.document.documentElement.clientWidth,window.innerWidth||0),documentHeight:Math.max(window.document.documentElement.scrollHeight||0),article:n,bottomOfArticle:a};return ne(ne({},oe),{},{viewport:i})}var ce=p()($||($=l()(["\n  query FooterBlockQuery($id: String!) {\n    anyWork(id: $id) {\n      ... on Article {\n        id\n        compatibility {\n          isOak\n          isArtReview\n          isBookReview\n          isTheaterReview\n          isDiningReview\n        }\n        reviewItems {\n          __typename\n        }\n        ...ReviewInformation_data\n        ...Addendum_data\n        ...ReviewFooter_article\n        ...Bio_data\n        ...ExtendedInformation_data\n        ...PrintInformation_data\n        ...ShareToolbar_share\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),Z.fragments.data,_.a.fragments.data,k.fragments.article,A.fragments.data,M.fragments.data,q.fragments.data,O.b.fragments.share);function se(e){var t,n,a,i,r,l=e.article,c=l.url,s=l.sprinkledBody,f=Object(u.useQuery)(ce,{variables:{id:c},fetchPolicy:"cache-first",partialRefetch:!0,ssr:!1}),p=f.loading,g=f.data,b=Object(h.useTracking)({module:{region:"footer"}}),y=b.Track,v=b.trackEvent,w=Object(d.useRef)(null),x=Object(d.useRef)(null),N=Object(d.useRef)(!1),I=function(){x.current=new window.IntersectionObserver((function(e){var t;!N.current&&e&&e[0]&&e[0].isIntersecting&&(N.current=!0,x.current.disconnect(),x.current=null,t=le(w.current),v(t))}),{threshold:0}),x.current.observe(w.current)};if(Object(d.useEffect)((function(){return I(),function(){x.current&&(x.current.disconnect(),x.current=null)}}),[]),null==g||!g.anyWork||p)r=null;else{var T=g.anyWork,E=ae({article:T}),B=ie({article:T});s&&Array.isArray(s.content)&&!T.sprinkledBody&&(T.sprinkledBody=s),r=o()(y,{},void 0,t||(t=o()(Z,{data:T})),n||(n=o()(_.a,{data:T})),E&&o()(k,{article:T}),T&&T.compatibility.isOak&&o()(A,{data:T}),a||(a=o()(M,{data:T,suppressInfobox:B})),i||(i=o()(q,{data:T})),o()(O.b,{share:T,position:O.a.FOOTER,showSaveButton:!0,suppressGiftArticleTooltip:!0}))}return m.a.createElement("div",{className:"bottom-of-article",ref:w},r)}se.displayName="FooterBlock",se.defaultProps={article:{}};t.default=Object(g.a)(se)}}]); })();
//# sourceMappingURL=footerBlock-54f455b65707cc6b1a9c.js.map