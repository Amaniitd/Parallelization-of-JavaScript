(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[37],{L1Rh:function(a,e,i){"use strict";i.r(e);var t=i("VkAN"),r=i.n(t),n=i("gcR/"),o=i.n(n),c=i("pVnL"),s=i.n(c),l=i("J4zp"),d=i.n(l),u=i("ERkP"),m=i.n(u),p=i("X6oL"),h=i("JBtm"),g=i.n(h),w=i("Ck9z"),v=i.n(w),b=i("Udmz"),f=i("46Q9"),y=i.n(f),k=i("IzvA"),T=i.n(k),P=i("zLzr"),S=i.n(P),E=i("pCca"),x=i("sOrY"),j=i("M5Mg"),A=i("Kjui");var L,M=i("qwrD"),U=i("Lcdh"),B=Object(U.css)("margin-bottom:1rem;");function C(a){var e,i,t,r,n,c=a.data,l=a.article,h=a.url,w=Object(E.a)().initialDeviceType,v=Object(p.useTracking)({asset:{url:h||""},presentation:{program:{breakpoint:{initial:w||""}}}}),f=v.Track,k=v.trackEvent,P=Object(b.useLocation)(),A=Object(u.useRef)(null),L=Object(u.useReducer)(x.a,{showTranscript:!1,currentTime:0,isPlaying:!1}),U=d()(L,2),C=U[0],N=U[1],O=function(a){if(a&&"function"==typeof a.stopPropagation&&(a.stopPropagation(),a.preventDefault()),N({showTranscript:!0}),window&&window.history&&window.history.pushState){var e=P&&g.a.parse(P.search)||"";e.showTranscript=1;var i="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?").concat(g.a.stringify(e));window.history.pushState({path:i},"",i)}},R=function(a){var e,i,t,r,n,o,c,s,l,d=a.data,u=a.article,m=null===(e=d.media)||void 0===e?void 0:e.media,p={audioSrc:m&&m.fileUrl||"",audioDuration:m&&1e3*m.length||0,credits:m&&m.credit||"",summary:m&&(null===(i=d.summary.content)||void 0===i||null===(t=i[0])||void 0===t?void 0:t.text)||"",headline:(null===(r=d.headline)||void 0===r||null===(n=r.content)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.text)||"",backgroundColor:d.backgroundColor,date:u.firstPublished,transcript:m&&m.transcript};"BLACK"===d.headlineColor?p.headerTheme="dark":"WHITE"===d.headlineColor&&(p.headerTheme="light"),l=m&&(null===(c=m.subscribeUrls)||void 0===c?void 0:c.length)>0?m.subscribeUrls.slice():[],m&&null!==(s=m.podcastSeries)&&void 0!==s&&s.itunesUrl&&l.push({platform:"APPLE",url:m.podcastSeries.itunesUrl}),p.subscribeUrls=l;try{p.podcastName=d.media.media.podcastSeries.title}catch(a){}try{p.podcastLogo=d.media.media.podcastSeries.image.crops.filter((function(a){return"MEDIUM_SQUARE"===a.name}))[0].renditions[0].url}catch(a){}try{p.recirculationFallbackImage=d.media.media.podcastSeries.image.crops.filter((function(a){return"MASTER"===a.name}))[0].renditions.filter((function(a){return"articleLarge"===a.name}))[0].url}catch(a){}try{p.recirculationAssets=u.column.assets.edges}catch(a){p.recirculationAssets=[]}try{p.backgroundImages=d.media.media.podcastSeries.image.crops}catch(a){p.backgroundImages=[]}return p}({data:(n={data:c,article:l}).data,article:n.article});return R.LoadingSpinner=j.a,o()(f,{},void 0,R.transcript&&m.a.createElement(T.a,s()({hideTranscript:function(){if(N({showTranscript:!1}),window&&window.history&&window.history.pushState){var a=P&&g.a.parse(P.search)||"";a.showTranscript=void 0;var e="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname).concat(a&&"?".concat(g.a.stringify(a))||"");window.history.pushState({path:e},"",e)}},currentTime:C.currentTime,isPlaying:C.isPlaying,onPlayPause:function(){A.current&&(C.isPlaying?A.current.pause():A.current.play())},isVisible:C.showTranscript},R)),m.a.createElement(y.a,s()({backgroundImages:(null===(e=c.media)||void 0===e||null===(i=e.media)||void 0===i||null===(t=i.podcastSeries)||void 0===t||null===(r=t.image)||void 0===r?void 0:r.crops)||[],column:l.column,gtmTrackEvent:k,initialDeviceType:w},R,{showTranscript:O,onPlayerLoaded:function(a){N({isPlaying:!1}),A.current=a,a.on(a.events.TIME_UPDATE,(function(a){N({currentTime:a})})),a.on(a.events.PLAY,(function(){N({isPlaying:!0})})),a.on(a.events.PAUSE,(function(){N({isPlaying:!1})}));var e=g.a.parse(P.search);e&&"1"===e.showTranscript&&O()}})),c.media&&o()(S.a,{data:c.media,platform:"vi"}),o()(M.a,{article:l,className:B,showSocialMedia:!0}))}C.displayName="AudioBlock",C.fragments={article:v()(L||(L=r()(["\n    fragment HeaderAudioBlock_article on CreativeWork {\n      ...HeaderMultimediaBlockToolbar_article\n      ...ShareToolbar_share\n    }\n    ","\n    ","\n  "])),M.a.fragments.article,A.b.fragments.share)},C.defaultProps={url:void 0};e.default=C},qwrD:function(a,e,i){"use strict";var t,r=i("VkAN"),n=i.n(r),o=i("gcR/"),c=i.n(o),s=(i("ERkP"),i("Lcdh")),l=i("Ck9z"),d=i.n(l),u=i("q11u"),m=i.n(u),p=i("JJ2H"),h=i("Kjui"),g=i("jVmh"),w=i.n(g),v=Object(s.css)("margin-left:auto;margin-right:auto;max-width:",w.a.breakpoint.textBodyWidth,"px;width:",w.a.breakpoint.mobileFullWidth,";position:relative;margin-bottom:1rem;",w.a.breakpoint.medium,"{display:flex;align-items:center;justify-content:space-between;& > div{flex:none;}}",w.a.breakpoint.extraLarge,"{max-width:",w.a.breakpoint.textBodyWidthExtralarge,"px;width:",w.a.breakpoint.textBodyWidthExtralarge,"px;}"),b=Object(s.css)("margin-bottom:1rem;display:block;",w.a.breakpoint.medium,"{margin-bottom:0;margin-right:1rem;}"),f=function(a){var e=a.article,i=a.className,t=a.showSocialMedia,r=e.lastMajorModification;return c()("div",{className:Object(s.cx)(v,i)},void 0,c()(m.a,{lastMajorModification:r,canShowTime:!0,className:b},void 0,e.firstPublished),t&&c()(h.b,{share:e,showSaveButton:!0,position:p.a.HEADER}))};f.displayName="Toolbar",f.fragments={article:d()(t||(t=n()(["\n    fragment HeaderMultimediaBlockToolbar_article on CreativeWork {\n      ...ShareToolbar_share\n    }\n    ","\n  "])),h.b.fragments.share)},f.defaultProps={className:void 0,showSocialMedia:!0};e.a=f}}]); })();
//# sourceMappingURL=audioblock-4b4e19ccf76536737894.js.map