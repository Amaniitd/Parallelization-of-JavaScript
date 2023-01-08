(function __HORCRUX__(){ "use strict";(window.self.webpackChunk_N_E=window.self.webpackChunk_N_E||[]).push([[3218],{93218:function(t,e,n){n.d(e,{c:function(){return K}});var a=n(92228),i=n(52322),r=n(30382),o=n.n(r),l=n(2784),c=n(45103),s=n(31619),u=n(89254),d=n(47842),f=n(70865),g=n(72779),m=n.n(g),p=n(19453),x=n(91842),h={id:"common_ariaLabels_gotoTitle",defaultMessage:"View title page for {titleName}"},v={id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},T={id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},b={id:"common_ratingPrompt_header",defaultMessage:"Rate this"},y={id:"common_ratingPrompt_rate",defaultMessage:"Rate"},R={id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},_={id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},C={id:"common_buttons_trailer",defaultMessage:"Trailer"};function P(){var t=(0,a.Z)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: "," 0;\n    margin-bottom: -1rem;\n\n    &.justify--space-between {\n        justify-content: space-between;\n    }\n\n    &.justify--space-around {\n        justify-content: space-around;\n    }\n\n    &.justify--left {\n        justify-content: flex-start;\n    }\n\n    &.justify--right {\n        justify-content: flex-end;\n    }\n\n    &.both-card-actions {\n        > .card-action-button {\n            margin-left: -0.25rem;\n            padding-right: 0.5rem;\n            padding-left: 0.5rem;\n        }\n        > .card-action-icon {\n            margin-right: -0.25rem;\n        }\n    }\n\n    > .card-action-button {\n        text-overflow: ellipsis;\n        overflow: hidden;\n    }\n"]);return P=function(){return t},t}var N;!function(t){t.SPACE_BETWEEN="space-between",t.SPACE_AROUND="space-around",t.RIGHT="right",t.LEFT="left"}(N||(N={}));var j=function(t){var e=t.title.latestTrailerId,n=t.refPrefix,a=t.refSuffix,r=t.iconButtons,o=(0,s.N)(C),l=(0,s.N)(C),u=[];if(e){var g="/video/".concat(e,"/?ref_=").concat(n,"tr_vp").concat(a);u.push({preIcon:"play-arrow",onColor:"textPrimary",href:g,ariaLabel:o,children:(0,i.jsx)("div",{className:"trailers-button-text","data-testid":"trailer-button",children:l})})}var p=N.SPACE_AROUND;if(1===(null===r||void 0===r?void 0:r.length)&&u.length<1&&(p=N.RIGHT),!(null===r||void 0===r?void 0:r.length)&&!u.length)return null;var x=m()(["justify--".concat(p)],(0,d.Z)({},"both-card-actions",(null===r||void 0===r?void 0:r.length)&&u.length));return(0,i.jsxs)(w,{className:x,children:[u.map((function(t,e){return(0,i.jsx)(c.TextButton,(0,f.Z)({className:m()("card-action-button",t.className)},t),e)})),null===r||void 0===r?void 0:r.map((function(t,e){return(0,i.jsx)(c.IconButton,(0,f.Z)({className:m()("card-action-icon",t.className)},t),e)}))]})},w=p.default.div.withConfig({componentId:"sc-3a643f09-0"})(P(),x.spacing.xs),S=n(96670),B=n(43814),I=n(58267);function Z(){var t=(0,a.Z)(["\n    max-height: ",";\n    max-width: ",";\n    vertical-align: middle;\n"]);return Z=function(){return t},t}var k=function(t){var e=t.title.id,n=t.alternateButton,a=t.refPrefix,r=t.refSuffix,o=(0,B.Vu)(),l=o.type,s=o.subType;if(n){var u=(0,S.Z)((0,f.Z)({},n.props),{width:"full-width"});return(0,i.jsx)(c.SecondaryButton,(0,S.Z)((0,f.Z)({},u),{children:n.fetching?(0,i.jsx)(L,{className:"alternate-button-loader",type:"circle"}):n.text}))}return(0,i.jsx)(I.Z,{titleId:e,watchlistMetricsContext:{pageType:l,subPageType:s,refTag:"".concat(a,"wl_btn").concat(r)}},e)},L=(0,p.default)(c.Loader).withConfig({componentId:"sc-4c809ea-0"})(Z(),x.spacing.xl,x.spacing.xl),M=n(23104),U=function(t){var e=t.title,n=e.id,a=e.titleText,r=e.titleTypeId,o=e.image,l=o.url,u=o.height,d=o.width,f=t.onClick,g=t.refPrefix,m=t.refSuffix,p="/title/".concat(n,"/?ref_=").concat(g,"tt_i").concat(m),x=(0,B.Vu)(),v=x.type,T=x.subType,b=(0,s.N)(h,{titleName:a});return(0,i.jsxs)(c.PosterCard.Poster,{href:p,ariaLabel:b,onClick:f,children:[(0,i.jsx)(M.Z,{titleId:n,watchlistMetricsContext:{pageType:v,subPageType:T,refTag:"".concat(g,"wl_rbn").concat(m)},onPoster:!0,className:"poster-card-watchlist-ribbon"},n),(0,i.jsx)(c.Poster.Image,{imageModel:l&&u&&d?{url:l,maxHeight:u,maxWidth:d,caption:a}:void 0,imageType:r,className:"poster-card-image"})]})},E=n(98788),A=n(45680),H=n(9659),O=n(61436),G=n(92281),V=n(90551),Y=n(95460),F=n(26688);function W(){var t=(0,a.Z)(["\n    min-height: 36px;\n"]);return W=function(){return t},t}var z=function(t){var e=t.title,n=e.id,a=e.titleText,r=e.ratingsSummary,o=e.canRate,u=t.refPrefix,d=t.refSuffix,f=(0,l.useState)(!1),g=f[0],m=f[1],p=(0,V.n)(),x=(0,c.useRatingsContext)(n),h=x.rating,C=x.updateRating,P=x.deleteRating,N=(0,O.P)(r,"imdb"),j=(0,O.P)(h,"user"),w="".concat(u,"rt").concat(d),S="".concat(u.replace(/_/g,"-")).concat("urate"),I=(0,B.Vu)(),Z=o?function(){(0,Y.ar)(I,S,Y.qB.POP_UP),m(!0)}:void 0,k=(0,G.vY)({titleId:n,refTag:w,currentRating:h}),L=k.updateTitleRating,M=k.deleteTitleRating,U=k.tempRateUpdateLogRef,W=(0,s.N)(v,{rating:j}),z=(0,s.N)(T,{titleName:a}),q=(0,s.N)(b),$=(0,s.N)(y),J=(0,s.N)(R),K=(0,s.N)(_);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{formattedImdbRating:N,formattedUserRating:j,onUserRatingClick:Z,ariaLabelRated:W,ariaLabelUnrated:z}),Z&&(0,i.jsx)(c.RatingPrompt,{isOpen:g,tconst:n,title:a,headerLabel:q,rateLabel:$,ariaLabelPrefix:K,shouldUseNewRatingFlow:!0,secondaryButtonText:J,secondaryButtonType:H.SecondaryButtonType.RemoveRating,onPrimaryButtonClicked:function(){var t=(0,E.Z)((function(t,e){return(0,A.__generator)(this,(function(n){switch(n.label){case 0:return t?p?(m(!1),C(t,w,(function(){return L(t,e)})),[3,3]):[3,1]:(m(!1),[2]);case 1:return[4,U(t,e)];case 2:n.sent(),(0,F.O)(t,e,w,I),n.label=3;case 3:return[2]}}))}));return function(e,n){return t.apply(this,arguments)}}(),onSecondaryButtonClicked:function(){var t=(0,E.Z)((function(t,e){return(0,A.__generator)(this,(function(t){return m(!1),P(w,(function(){return M(e)})),[2]}))}));return function(e,n){return t.apply(this,arguments)}}(),onCloseClicked:function(){m(!1)}})]})},D=(0,p.default)(c.PosterCard.RatingStarGroup).withConfig({componentId:"sc-395b6291-0"})(W());function q(){var t=(0,a.Z)(["\n        fragment BaseTitleCard on Title {\n            id\n            titleText {\n                text\n            }\n            titleType {\n                id\n                text\n                canHaveEpisodes\n            }\n            originalTitleText {\n                text\n            }\n            primaryImage {\n                id\n                width\n                height\n                url\n                caption {\n                    plainText\n                }\n            }\n            releaseYear {\n                year\n                endYear\n            }\n            ratingsSummary {\n                aggregateRating\n                voteCount\n            }\n            runtime {\n                seconds\n            }\n            certificate {\n                rating\n            }\n            canRate {\n                isRatable\n            }\n            titleCardGenres: genres {\n                genres(limit: 3) {\n                    text\n                }\n            }\n            canHaveEpisodes\n        }\n    "]);return q=function(){return t},t}function $(){var t=(0,a.Z)(["\n        fragment TitleCardTrailer on Title {\n            latestTrailer {\n                id\n            }\n        }\n    "]);return $=function(){return t},t}function J(){var t=(0,a.Z)(["\n        fragment PersonalizedTitleCardUserRating on Title {\n            userRating @include(if: $includeUserRating) {\n                value\n            }\n        }\n    "]);return J=function(){return t},t}var K=function(t){var e=t.data,n=e.id,a=e.titleText,r=e.originalTitleText,o=e.titleType,l=e.primaryImage,d=e.ratingsSummary,f=e.canRate,g=e.latestTrailer,m=t.refMarker,p=void 0===m?{}:m,x=p.prefix,v=void 0===x?"":x,T=p.suffix,b=void 0===T?"":T,y=v?"".concat(v,"_"):"",R=v?"_".concat(b):"",_=(0,u.b)({originalTitleText:r,titleText:a}),C=(0,s.N)(h,{titleName:_}),P="/title/".concat(n,"/?ref_=").concat(y,"tt_t").concat(R);return _&&o?(0,i.jsxs)(c.PosterCard,{dynamicWidth:!0,className:t.className,children:[(0,i.jsx)(U,{title:{id:n,titleText:_,titleTypeId:o.id,image:{url:null===l||void 0===l?void 0:l.url,height:null===l||void 0===l?void 0:l.height,width:null===l||void 0===l?void 0:l.width}},onClick:t.onClick,refPrefix:y,refSuffix:R}),(0,i.jsx)(z,{title:{id:n,titleText:_,ratingsSummary:null===d||void 0===d?void 0:d.aggregateRating,canRate:null===f||void 0===f?void 0:f.isRatable},refPrefix:y,refSuffix:R}),(0,i.jsx)(c.PosterCard.Title,{href:P,onClick:t.onClick,ariaLabel:C,children:(0,i.jsx)("span",{"data-testid":"title",children:_})}),(0,i.jsxs)(c.PosterCard.Actions,{children:[(0,i.jsx)(k,{title:{id:n},alternateButton:t.alternateButton,refPrefix:y,refSuffix:R}),(0,i.jsx)(j,{title:{latestTrailerId:null===g||void 0===g?void 0:g.id},refPrefix:y,refSuffix:R,iconButtons:t.iconButtons})]})]}):null};K.fragments={baseTitleCard:o()(q()),titleCardTrailer:o()($()),personalizedTitleCardUserRating:o()(J())}}}]); })();