(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[120],{"0goo":function(e,t,a){"use strict";var l=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("ERkP")),i=(l(a("17x9")),l(a("iwCb"))),o=l(a("lFp1")),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a("240T"));function c(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(c=function(e){return e?a:t})(e)}var d=function(e){var t=e.article,a=e.deviceType,l=e.trackCall,n=e.trackClick;return t.compatibility&&t.reviewItems&&0!==t.reviewItems.length?r.default.createElement("div",{className:s.reviewFooterClass},t.reviewItems.map((function(e,s){if(e){if(t.compatibility.isDiningReview)return r.default.createElement(o.default,{key:s.toString(),review:e,index:s,trackClick:n,trackCall:l,deviceType:a});if(t.compatibility.isMovieReview)return r.default.createElement(i.default,{key:s.toString(),review:e,index:s,trackClick:n,deviceType:a})}return null}))):null};d.displayName="ReviewFooter",d.defaultProps={deviceType:"",trackCall:function(){},trackClick:function(){}};var u=d;t.default=u},"1d0L":function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.mapWrapperClass=t.mapClass=void 0;var n=a("Lcdh"),r=l(a("jVmh")),i=(0,n.css)("max-width:",r.default.breakpoint.mediumMediaExtralarge,"px;@media print{display:none;}");t.mapWrapperClass=i;var o=(0,n.css)("width:100%;padding-bottom:",100/3,"%;");t.mapClass=o},"240T":function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.wrapperClass=t.updatedClass=t.timestampClass=t.starsClass=t.reviewFooterClass=t.reviewClass=t.ratingClass=t.poweredByClass=t.metadataClass=t.logoClass=t.linkWithDisclaimerClass=t.hiddenClass=t.disclaimerClass=t.criticsPickClass=void 0;var n=a("Lcdh"),r=l(a("jVmh")),i=a("w3+U"),o=a("hAwj"),s=(0,n.css)("margin-top:40px;");t.reviewFooterClass=s;var c=(0,n.css)("max-width:",r.default.breakpoint.mediumMediaExtralarge,"px;margin:0 auto;",r.default.breakpoint.small,"{max-width:",r.default.breakpoint.mediumMediaExtralarge,"px;}",r.default.print,";");t.wrapperClass=c;var d=(0,n.css)("margin:0 auto;padding:20px 0;width:calc(100% - 40px);max-width:",r.default.breakpoint.textBodyWidth,"px;font-family:",r.default.font.franklinBase,";font-size:",r.default.font.size(14),";line-height:",r.default.font.size(20),";.",c," + .",c,"{border-top:1px solid ",o.color.stroke.quaternary,";}",r.default.print,";",r.default.breakpoint.extraLarge,"{max-width:",r.default.breakpoint.textBodyWidthExtralarge,"px;}h4{color:",o.color.content.primary,";display:inline-block;font-family:",r.default.font.franklinBase,";font-size:",r.default.font.size(16),";font-weight:",r.default.font.weight.bold,";line-height:",r.default.font.size(20),";margin-bottom:8px;margin-right:8px;}dl{display:flex;flex-direction:column;justify-content:center;}address{display:block;margin-bottom:8px;}dt{color:",o.color.content.primary,";display:inline;font-size:",r.default.font.size(14),";font-weight:",r.default.font.weight.bold,";line-height:",r.default.font.size(20),";margin-right:4px;}dd{color:",o.color.content.primary,";display:inline;font-weight:",r.default.font.weight.medium,";}address dt,address dd{display:block;}dl a{color:",o.color.signal.primary,";}address a:hover,address a:focus{text-decoration:underline;}div[itemprop='starRating']{margin-top:8px;}dd[itemprop='showtimes']{table{max-width:300px;}}");t.reviewClass=d;var u=(0,n.css)("color:",r.default.color.reviewCritPickGold,";");t.starsClass=u;var f=(0,n.css)("display:none;");t.hiddenClass=f;var m=(0,n.css)("display:inline-block;margin-bottom:8px;");t.ratingClass=m;var p=(0,n.css)("margin-left:-1px;margin-right:8px;i{display:inline-block;vertical-align:middle;background-image:url('data:image/svg+xml;utf8,",i.criticsPick,"');height:16px;width:16px;margin-top:-3px;margin-right:4px;}");t.criticsPickClass=p;var h=(0,n.css)(r.default.breakpoint.small,"{columns:2;column-gap:30px;display:block;}& > *{display:block;margin-bottom:8px;",r.default.breakpoint.small,"{page-break-inside:avoid;break-inside:avoid;display:inline-block;width:100%;}}");t.metadataClass=h;var v=(0,n.css)("display:flex;justify-content:flex-start;align-items:center;margin-bottom:22px;button{white-space:nowrap;}@media print{display:none;}");t.linkWithDisclaimerClass=v;var g=(0,n.css)("color:",o.color.content.quaternary,";font-family:",r.default.font.franklinBase,";font-size:",r.default.font.size(12),";font-weight:",r.default.font.weight.medium,";line-height:",r.default.font.size(16),";margin-left:12px;max-width:360px;");t.disclaimerClass=g;var y=(0,n.css)("margin-top:16px;display:flex;align-items:center;height:20px;@media print{display:none;}p{font-family:",r.default.font.franklinBase,";font-size:",r.default.font.size(12),";font-weight:",r.default.font.weight.medium,";line-height:",r.default.font.size(16),";color:",o.color.content.quaternary,";}a{display:block;}");t.poweredByClass=y;var w=(0,n.css)("margin-right:8px;background-size:contain;background-repeat:no-repeat;height:20px;&.imdb{width:41px;background-image:url('data:image/svg+xml;utf8,",i.imdb,"');}&.ticketmaster{height:15px;width:112px;background-image:url('data:image/svg+xml;utf8,",i.ticketmaster,"');& + p{margin-top:0.3rem;}}&.opentable{width:86px;background-image:url('data:image/svg+xml;utf8,",i.opentable,"');}&.resy{width:50px;background-image:url('data:image/svg+xml;utf8,",i.resy,"');}");t.logoClass=w;var E=(0,n.css)("color:",o.color.content.quaternary,";font-family:",r.default.font.franklinBase,";font-size:",r.default.font.size(12),";font-weight:",r.default.font.weight.medium,";line-height:",r.default.font.size(16),";");t.updatedClass=E;var b=(0,n.css)("font-size:0.6rem;");t.timestampClass=b},"8A8z":function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("ERkP")),r=(l(a("17x9")),a("Lcdh")),i=a("96KV"),o=function(e){var t=e.htmlShortBiography,a=e.twitter,l=e.facebook,o=e.className,s=[' <span class="'.concat(i.socialBlockClass,'">')];a&&s.push('<a href="https://twitter.com/'.concat(a,'" class="').concat(i.bioLinkClass,'" rel="noopener noreferrer" target="_blank"><span class="').concat(i.twitterAtClass,'">@</span>').concat(a,"</a>")),l&&a&&s.push('<span class="'.concat(i.seperatorClass,'">•</span>')),l&&s.push('<a href="https://www.facebook.com/'.concat(l,'" class="').concat(i.bioLinkClass,'" rel="noopener noreferrer" target="_blank">Facebook</a>')),s.push("</span>");var c=t;if(c){var d=c.split("</p>");d.splice(d.length-1,0,s.join(" ")),d.push("</p>"),c=d.join("")}return n.default.createElement(i.Bio,{className:(0,r.cx)(o)},n.default.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))};o.displayName="Bio",o.defaultProps={htmlShortBiography:null,facebook:null,twitter:null,className:void 0};var s=o;t.default=s},"96KV":function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.twitterAtClass=t.socialBlockClass=t.seperatorClass=t.bioTreatmentStyles=t.bioLinkClass=t.Bio=void 0;var n=a("hAwj"),r=a("Lcdh"),i=l(a("aJGo")),o=l(a("jVmh")),s=(0,i.default)(["medium"]),c=(0,r.themeFn)("treatment",{none:function(e){return(0,r.css)("color:",n.color.content.secondary,";font-family:",o.default.font.franklinBase,";font-weight:",o.default.font.weight.medium,";",s(e,{fontSize:[15,16],lineHeight:[20,22]}),";")},magazine:function(e){return(0,r.css)("color:",n.color.content.secondary,";font-family:",o.default.font.magazineSansBase,";font-weight:",o.default.font.weight.medium,";",s(e,{fontSize:[15,16],lineHeight:[20,22]}),";")}});t.bioTreatmentStyles=c;var d=(0,r.css)();t.twitterAtClass=d;var u=(0,r.css)("display:inline-block;line-height:1em;.",d,"{text-decoration:none;display:inline-block;}");t.bioLinkClass=u;var f=(0,r.css)("display:inline-block;padding-left:3px;");t.socialBlockClass=f;var m=(0,r.css)("color:",n.color.content.quaternary,";margin-right:0.5rem;margin-left:0.5rem;font-size:8px;");t.seperatorClass=m;var p=(0,r.styled)("div",{target:"e1e7j8ap0"})(c,";color:",n.color.content.secondary,";p{margin-bottom:",o.default.font.size(12),";}a,a:visited{color:",n.color.signal.editorial,";text-decoration:underline;}a:hover,a:focus{color:",n.color.signal.editorial,";text-decoration:none;}",o.default.print,";");t.Bio=p},IJjO:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("ERkP")),r=(l(a("17x9")),a("Lcdh")),i=l(a("qFEC")),o=function(e){var t=e.html,a=e.className;return n.default.createElement("div",{className:(0,r.cx)(i.default,a),dangerouslySetInnerHTML:{__html:t}})};o.displayName="ReviewInformation",o.defaultProps={html:null,className:void 0};var s=o;t.default=s},iwCb:function(e,t,a){"use strict";var l=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("ERkP")),i=(l(a("17x9")),a("Lcdh")),o=a("Da2K"),s=l(a("dny7")),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a("240T"));function d(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(d=function(e){return e?a:t})(e)}var u=o.textConstants.CRITICS_PICK_TEXT,f=o.textConstants.DISCLAIMER_TEXT,m=function(e,t){return 1===t?e:"".concat(e,"s")},p=function(e){var t=e.review,a=e.index,l=e.deviceType,n=e.trackClick,d=t.isCriticsPick,p=t.overrideLabel,h=t.subject,v=void 0===h?{}:h;if(!v)return null;var g=v.directors,y=v.genres,w=v.imdbId,E=v.movieCast,b=v.movieRating,k=v.runtimeUS,C=v.ticketUrl,x=v.title,T=v.writers,M=p||x,_=(0,o.movieRating)(b),L=(E||[]).map((function(e){return null==e?void 0:e.actor})).filter(window.Boolean),z=(0,o.formatDuration)(k),P=function(e,t){return e?"http://".concat("smartphone"===t?"m":"www",".imdb.com/title/").concat(e,"/?ref_=ref_ext_NYT"):null}(w,l),N=C;return C&&"smartphone"===l&&C.match(/www\.imdb/)&&(N=C.replace("www.","m.")),r.default.createElement("aside",{className:c.wrapperClass,id:"movie-review-".concat(a+1)},r.default.createElement("div",{className:c.reviewClass},r.default.createElement("header",null,r.default.createElement("div",null,M&&r.default.createElement("h4",{dangerouslySetInnerHTML:{__html:M}}),d&&r.default.createElement("div",{className:c.ratingClass},r.default.createElement("span",{className:c.criticsPickClass},r.default.createElement("i",null),r.default.createElement("span",null,u)))),C&&r.default.createElement("div",{className:c.linkWithDisclaimerClass},r.default.createElement(s.default,{theme:"action",href:N,onClick:function(){return n("movie")},target:"_blank",rel:"noopener noreferrer"},"Find Tickets"),r.default.createElement("p",{className:c.disclaimerClass},f.MOVIE))),r.default.createElement("dl",{className:c.metadataClass},g&&!!g.length&&r.default.createElement("div",null,r.default.createElement("dt",null,m("Director",g.length)),r.default.createElement("dd",null,g.reduce((function(e,t,a){return g.length>1&&a>0&&e.push(r.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(r.default.createElement("span",{key:a.toString(),dangerouslySetInnerHTML:{__html:t}})),e}),[]))),T&&!!T.length&&r.default.createElement("div",null,r.default.createElement("dt",null,m("Writer",T.length)),r.default.createElement("dd",null,T.reduce((function(e,t,a){return T.length>1&&a>0&&e.push(r.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(r.default.createElement("span",{key:a.toString(),dangerouslySetInnerHTML:{__html:t}})),e}),[]))),L&&!!L.length&&r.default.createElement("div",null,r.default.createElement("dt",null,m("Star",L.length)),r.default.createElement("dd",null,L.reduce((function(e,t,a){return L.length>1&&a>0&&e.push(r.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(r.default.createElement("span",{key:a.toString(),dangerouslySetInnerHTML:{__html:t}})),e}),[]))),_&&r.default.createElement("div",null,r.default.createElement("dt",null,"Rating"),r.default.createElement("dd",null,_)),z&&r.default.createElement("div",null,r.default.createElement("dt",null,"Running Time"),r.default.createElement("dd",null,z)),y&&!!y.length&&r.default.createElement("div",null,r.default.createElement("dt",null,m("Genre",y.length)),r.default.createElement("dd",null,y.reduce((function(e,t,a){return y.length>1&&a>0&&e.push(r.default.createElement("span",{key:"".concat(a.toString(),"-between")},", ")),e.push(r.default.createElement("span",{key:a.toString(),dangerouslySetInnerHTML:{__html:t}})),e}),[])))),P&&r.default.createElement("div",{className:c.poweredByClass},r.default.createElement("a",{href:P,title:"Visit this movie's page on IMDb",target:"_blank",rel:"noopener noreferrer"},r.default.createElement("div",{className:(0,i.cx)(c.logoClass,"imdb")})),r.default.createElement("p",null,"Movie data powered by IMDb.com"))))};p.displayName="MovieFooter",p.defaultProps={deviceType:""};var h=p;t.default=h},lBsV:function(e,t,a){"use strict";var l=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("lwsE")),i=l(a("W8MJ")),o=l(a("7W2i")),s=l(a("a1gu")),c=l(a("Nsbk")),d=p(a("ERkP")),u=(l(a("17x9")),l(a("DP2A"))),f=p(a("1d0L"));function m(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(m=function(e){return e?a:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof window.Proxy)return!0;try{return window.Boolean.prototype.valueOf.call(Reflect.construct(window.Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,s.default)(this,a)}}var v=[{elementType:"labels.text.fill",stylers:[{color:"#8C8676"}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:-10},{lightness:18}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#D8D6D0"}]},{featureType:"poi.school",elementType:"geometry",stylers:[{color:"#D8D6D0"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#CDDDBA"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#ACD1E2"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:17},{saturation:-18}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#c7c7c7"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]}],g=function(e){(0,o.default)(a,e);var t=h(a);function a(){var e;(0,r.default)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).el=null,e.mapEl=null,e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this;this.el&&this.mapEl&&(0,u.default)("https://maps.googleapis.com/maps/api/js?libraries=geometry,places&client=gme-nyt").then((function(){if(window.google&&window.google.maps&&window.google.maps.LatLngBounds&&window.google.maps.LatLng&&window.google.maps.Map&&window.google.maps.MapTypeId&&window.google.maps.MapTypeId.SATELLITE&&window.google.maps.MapTypeId.ROADMAP&&window.google.maps.Marker){var t=window.google.maps;e.latLngBounds=new t.LatLngBounds;var a=new t.LatLng(e.props.latitude,e.props.longitude),l={clickable:!0,scrollwheel:!1,zoomControl:!0,center:a,styles:v,zoom:13,mapTypeControlOptions:{mapTypeIds:[t.MapTypeId.SATELLITE,t.MapTypeId.ROADMAP]}},n=new t.Map(e.mapEl,l);n.setTilt(45),e.marker=new t.Marker({position:a,animation:null,icon:null,map:n,title:e.props.title})}else e.el.removeChild(e.mapEl)})).catch((function(){e.el.removeChild(e.mapEl)}))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:f.mapWrapperClass,ref:function(t){e.el=t}},d.default.createElement("div",{className:f.mapClass,ref:function(t){e.mapEl=t}}))}}]),a}(d.Component);g.displayName="Map",g.defaultProps={title:""};var y=g;t.default=y},lFp1:function(e,t,a){"use strict";var l=a("TqRt"),n=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("ERkP")),i=(l(a("17x9")),a("Lcdh")),o=a("Da2K"),s=l(a("5QCa")),c=l(a("q11u")),d=l(a("dny7")),u=l(a("lBsV")),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a("240T"));function m(e){if("function"!=typeof window.WeakMap)return null;var t=new window.WeakMap,a=new window.WeakMap;return(m=function(e){return e?a:t})(e)}var p=o.textConstants.CRITICS_PICK_TEXT,h=o.textConstants.PRICE_DESCRIPTIONS,v=o.textConstants.RATING_DESCRIPTIONS,g=o.textConstants.DISCLAIMER_TEXT,y=function(e){var t,a,l=e.review,n=e.index,m=e.deviceType,y=e.trackClick,w=e.trackCall,E=l.isCriticsPick,b=l.subject,k=l.overrideLabel;if(!b)return null;var C,x,T=b.name,M=b.contactDetails,_=M.addresses,L=M.phoneNumbers,z=b.accessibilityDescription,P=b.takesReservations,N=b.reservationsUrl,I=b.reservationsNote,O=b.rating,R=b.atmosphere,S=b.openStatus,j=b.priceCategory,D=b.wineList,H=b.recommendedDishes,A=b.soundLevel,B=b.alcoholDescription,V=b.openHours,W=b.coordinates,q=b.website,F=b.lastModified,U=b.singlePlatformId,K=k||T,G=(0,s.default)(window.parseInt(O,10),"★"),J=v[O];q&&(x=q,(C=q.toLowerCase().replace("www.","").replace(/^https?:\/\//,"")).length>20&&(C="website"),-1===x.indexOf("http")&&(x="http://".concat(x)));var X,Y=window.parseInt(o.priceMap[j],10),Z=(0,s.default)(Y,"$"),Q=h[Y],$=B||D,ee=["CLOSED_TEMPORARILY","CLOSED_PERMANENTLY"].indexOf(S)>=0;X=null!=I&&I.trim()?I.trim():P?"Accepted":"Not Accepted";var te=_.length>0?_[0]:null,ae=L.length>0?L.find((function(e){return"MAIN"===e.type})):null,le=te||ae||q;return r.default.createElement("aside",{className:f.wrapperClass,id:"restaurant-review-".concat(n+1)},!ee&&(null==W?void 0:W.latitude)&&W.longitude&&r.default.createElement(u.default,{latitude:W.latitude,longitude:W.longitude,title:K}),r.default.createElement("div",{className:f.reviewClass},r.default.createElement("header",null,r.default.createElement("div",null,K&&r.default.createElement("h4",{dangerouslySetInnerHTML:{__html:K}}),(E||G||J)&&r.default.createElement("div",{className:f.ratingClass},E&&r.default.createElement("span",{className:f.criticsPickClass},r.default.createElement("i",null),r.default.createElement("span",null,p)),(G||J)&&r.default.createElement("span",null,G?r.default.createElement("span",{className:f.starsClass},G):J))),!ee&&N&&r.default.createElement("div",{className:f.linkWithDisclaimerClass},r.default.createElement(d.default,{theme:"action",href:N,onClick:function(){return y("restaurant")},target:"_blank",rel:"noopener noreferrer"},"Reserve a Table"),r.default.createElement("p",{className:f.disclaimerClass},g.RESTAURANT)),!ee&&!N&&!!ae&&"smartphone"===m&&r.default.createElement(d.default,{theme:"action",href:"tel:+".concat(ae.number),onClick:w},"Call")),r.default.createElement("dl",null,ee&&r.default.createElement("p",{className:"isClosed"},"This restaurant has closed"),le&&r.default.createElement("address",null,r.default.createElement("div",null,K&&r.default.createElement("dt",{className:f.hiddenClass,dangerouslySetInnerHTML:{__html:K}}),(null===(t=te.address)||void 0===t?void 0:t.streetAddress)&&r.default.createElement("dd",{className:"street",dangerouslySetInnerHTML:{__html:te.address.streetAddress}}),te.crossStreet&&r.default.createElement("dd",{className:"crossroads",dangerouslySetInnerHTML:{__html:"(".concat(te.crossStreet,")")}}),(null===(a=te.address)||void 0===a?void 0:a.neighborhood)&&r.default.createElement("dd",{className:"neighborhood",dangerouslySetInnerHTML:{__html:te.address.neighborhood}})),ae&&r.default.createElement("dd",{className:"phone"},r.default.createElement("a",{href:"tel:+".concat(ae.number),onClick:w},ae.number)),q&&r.default.createElement("dd",null,r.default.createElement("a",{href:x,title:K,target:"_blank",rel:"noopener noreferrer"},C))),r.default.createElement("div",{className:f.metadataClass},R&&r.default.createElement("div",{className:"atmosphere"},r.default.createElement("dt",null,"Atmosphere"),r.default.createElement("dd",{dangerouslySetInnerHTML:{__html:R}})),A&&r.default.createElement("div",{className:"noiseLevel"},r.default.createElement("dt",null,"Noise Level"),r.default.createElement("dd",{dangerouslySetInnerHTML:{__html:A}})),U&&r.default.createElement("div",{className:"menuLink"},r.default.createElement("dt",null,"Menu"),r.default.createElement("dd",null,r.default.createElement("a",{href:"https://places.singleplatform.com/".concat(U,"/menu?ref=nyt"),target:"_blank",rel:"noopener noreferrer"},"singleplatform.com/".concat(U)))),H&&r.default.createElement("div",{className:"recommendedDishes"},r.default.createElement("dt",null,"Recommended Dishes"),r.default.createElement("dd",{dangerouslySetInnerHTML:{__html:H}})),$&&r.default.createElement("div",{className:"alcoholInfo"},r.default.createElement("dt",null,"Drinks and Wine"),r.default.createElement("dd",{dangerouslySetInnerHTML:{__html:$}})),Z&&Q&&r.default.createElement("div",null,r.default.createElement("dt",null,"Price"),r.default.createElement("dd",{className:"price"},"".concat(Z," (").concat(Q,")"))),V&&r.default.createElement("div",null,r.default.createElement("dt",null,"Open"),r.default.createElement("dd",{className:"hours",dangerouslySetInnerHTML:{__html:V}})),X&&r.default.createElement("div",null,r.default.createElement("dt",null,"Reservations"),r.default.createElement("dd",{className:"reservations",dangerouslySetInnerHTML:{__html:X}})),z&&r.default.createElement("div",{className:"accessibility"},r.default.createElement("dt",null,"Wheelchair Access"),r.default.createElement("dd",{dangerouslySetInnerHTML:{__html:z}})),(G||J)&&r.default.createElement("div",null,r.default.createElement("dt",null,"What the Stars Mean"),r.default.createElement("dd",null,"Ratings range from zero to four stars. Zero is poor, fair or satisfactory. One star, good. Two stars, very good. Three stars, excellent. Four stars, extraordinary.")),F&&r.default.createElement("p",{className:f.updatedClass},"This information was last updated on ",r.default.createElement(c.default,{className:f.timestampClass},F)))),N.indexOf("opentable")>-1&&r.default.createElement("div",{className:f.poweredByClass},r.default.createElement("div",{className:(0,i.cx)(f.logoClass,"opentable")}),r.default.createElement("p",null,"Reservations powered by OpenTable")),N.indexOf("resy")>-1&&r.default.createElement("div",{className:f.poweredByClass},r.default.createElement("div",{className:(0,i.cx)(f.logoClass,"resy")}),r.default.createElement("p",null,"Reservations powered by Resy"))))};y.displayName="RestaurantFooter",y.defaultProps={deviceType:"",trackClick:function(){},trackCall:function(){}};var w=y;t.default=w},qFEC:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("Lcdh"),r=l(a("jVmh")),i=a("hAwj"),o=(0,n.css)("margin:0 auto;.story{margin-bottom:",r.default.font.size(18),";}h4,h5,.nitf,.summary{margin:0;}p{line-height:",r.default.font.size(18),";}.nitf{font-family:",r.default.font.franklinBase,";font-weight:",r.default.font.weight.bold,";font-size:",r.default.font.size(14),";color:",i.color.content.primary,";}.summary{font-family:",r.default.font.franklinBase,";font-weight:",r.default.font.weight.medium,";font-size:",r.default.font.size(14),";color:",i.color.content.secondary,";}");t.default=o},"w3+U":function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ticketmaster=t.resy=t.opentable=t.imdb=t.criticsPick=void 0;var n=l(a("jVmh")),r=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n  <path\n    fill="'.concat(n.default.color.reviewCritPickGold,'"\n    d="M14.34,8.83,16,8l-1.66-.83,1.38-1.24-1.82-.38,1-1.55-1.74.1h0c.66-.57,1.15-1,2.65-2.18l-2.7-.84c-.48.44-.87.8-1.21,1.14L12,1.07l-1.55,1L10.07.27,8.84,1.65,8,0,7.16,1.65,5.93.27,5.55,2.09,4,1.07l.1,1.85L2.34,2.34,2.92,4.1,1.07,4l1,1.55L.27,5.93,1.66,7.17,0,8l1.66.83L.27,10.07l1.82.38L1.07,12l1.85-.1-.58,1.76,1.76-.58L4,14.93l1.55-1,.38,1.81,1.23-1.38L8,16l.84-1.65,1.23,1.38.38-1.81,1.55,1-.1-1.85,1.76.58-.58-1.76,1.85.1-1-1.55,1.82-.38ZM8,13.14a5.14,5.14,0,1,1,2.67-9.52l-.48.61a27.9,27.9,0,0,0-2.56,4L6.14,6l-1.36.82,3.08,4.52C9,9.42,9.5,8.56,10.07,7.7A18.66,18.66,0,0,1,12.2,5,5.13,5.13,0,0,1,8,13.14Z" />\n  </svg>\n'));t.criticsPick=r;var i=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="42" >\n    <g fill-rule="evenodd" fill="none">\n      <path fill="#010101" d="M2.02 0A2 2 0 0 0 0 2v16a2 2 0 0 0 2.02 2h37.96A2 2 0 0 0 42 18V2c0-1.1-.9-2-2.02-2H2.02z" />\n      <path fill="#fff"\n        d="M6 16h3V4H6v12zM15.78 3.99l-.75 5.6-.46-3.04c-.13-.98-.26-1.84-.39-2.56H10v12h2.83V8.06l1.2 7.93h2.01l1.13-8.1v8.1H20v-12h-4.22zM24.86 6.15c.12.07.2.18.24.34.04.15.05.5.05 1.04v4.65c0 .8-.05 1.29-.16 1.47-.1.18-.38.27-.83.27V6.04c.34 0 .57.04.7.11zM24.83 16c.75 0 1.32-.04 1.7-.12.37-.09.69-.23.94-.44.25-.2.44-.48.54-.85.1-.36.16-1.08.16-2.15V8.22c0-1.14-.05-1.9-.11-2.29a2.12 2.12 0 0 0-.53-1.05 2.39 2.39 0 0 0-1.23-.68c-.53-.14-1.42-.21-2.95-.21H21v12h3.83zM33.11 13.22c0 .58-.03.96-.09 1.11-.06.16-.31.23-.5.23-.2 0-.32-.07-.38-.22s-.1-.49-.1-1.03V10.1c0-.56.03-.9.09-1.04.05-.14.18-.2.36-.2.2 0 .45.08.52.23.07.16.1.5.1 1v3.13zM29 4v12.17h2.84l.2-.78c.26.32.54.55.85.7.31.16.77.24 1.13.24.5 0 .94-.13 1.3-.4.36-.26.6-.57.69-.92.1-.36.14-.9.14-1.63V9.96c0-.73 0-1.21-.04-1.44a1.65 1.65 0 0 0-1-1.23c-.3-.13-.67-.2-1.08-.2-.37 0-.83.07-1.14.22-.31.14-.6.36-.85.65V4H29z" />\n    </g>\n  </svg>\n');t.imdb=i;var o=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" height="133.33" width="576">\n    <path\n      d="M2.67 66.66a15.83 15.83 0 1 1 31.65 0 15.83 15.83 0 0 1-31.65 0M113.8 82.5a15.83 15.83 0 1 1 0-31.66 15.83 15.83 0 0 1 0 31.66zm0-79.17a63.31 63.31 0 0 0-63.3 63.34 63.31 63.31 0 0 0 63.3 63.33 63.31 63.31 0 0 0 63.29-63.33 63.31 63.31 0 0 0-63.3-63.34"\n      fill="#dc273e" />\n    <path\n      d="M566.15 61.77c1 0 1.6-.45 1.6-1.27 0-.73-.41-1.22-1.52-1.22h-1.04v2.49zm-2.48-3.75h2.81c1.56 0 2.9.63 2.9 2.41 0 .89-.56 1.74-1.38 2.04l1.7 3.07H568l-1.3-2.59h-1.51v2.6h-1.52zm8.18 3.85c0-3.48-2.4-5.96-5.51-5.96s-5.48 2.48-5.48 5.96c0 3.52 2.37 5.93 5.48 5.93 3.1 0 5.51-2.4 5.51-5.93zm-12.48 0c0-4.33 3.15-7.3 6.97-7.3 3.85 0 7 2.97 7 7.3 0 4.34-3.15 7.3-7 7.3-3.82 0-6.97-2.96-6.97-7.3zM512.93 91.5c.94 0 1.73-.78 1.73-1.72v-6.36c0-.93-.78-1.72-1.72-1.72h-.28c-.77 0-1.55-.77-1.55-1.54V42.49c0-.86-.86-1.72-1.72-1.72h-6.32c-.86 0-1.72.86-1.72 1.72V84.2l.02 1.09c0 3.1 3.1 6.21 6.21 6.21zM234.48 50.72c8.6 0 15.87 7.3 15.87 15.94 0 8.73-7.12 15.82-15.87 15.82a15.89 15.89 0 0 1 0-31.76zm0-10.05a25.94 25.94 0 0 0-25.83 26 25.57 25.57 0 0 0 25.83 25.85 25.6 25.6 0 0 0 25.91-25.86 25.98 25.98 0 0 0-25.9-25.99zM440.6 81.2c-.47 1.33-3.28 3.83-6.49 3.83-3.35 0-5.23-2.03-5.23-5.08 0-3.2 2.27-5.16 6.4-5.16 2.9 0 5.32 1.1 5.32 1.1zm-4.22-26.65a45.58 45.58 0 0 0-12.34 1.8c-.78.23-1.49.85-1.17 2.18l.78 4.07c.15 1.1.86 1.95 2.03 1.56 2.1-.62 6.87-1.33 10.15-1.33 3.83 0 5.16 2.2 5 6.8 0 0-3.28-1.01-6.95-1.01-9.14 0-14.37 4.92-14.37 11.33 0 7.74 5 12.35 12.18 12.35 5.63 0 9.22-2.5 11.33-4.53v1.94c0 .94.78 1.72 1.72 1.72h.64l.22.01h2.65c.94 0 1.72-.78 1.72-1.72V70.26c0-9.85-2.34-15.71-13.59-15.71zm-65.58 0a14.56 14.56 0 0 0-11.6 5.2v-2.7c0-.94-.8-1.72-1.73-1.72h-4.08c-.86 0-1.72.7-1.72 1.72v32.67c0 .94.86 1.72 1.72 1.72h5.78c1.71 0 2.26-.39 2.26-1.72V69.1c.86-2.5 3.12-5.63 7.81-5.63 4.38 0 6.25 2.89 6.25 7.58v18.68c0 .94.78 1.72 1.72 1.72h6.33c.86 0 1.71-.78 1.71-1.72V71.04c0-8.75-2.96-16.5-14.45-16.5zm-86 28.84c-4.53 0-7.5-2.03-7.5-2.03v-12.9c.78-2.03 3.28-5 7.97-5 5.62 0 8.51 4.92 8.51 10s-3.04 9.93-8.98 9.93zm1.8-28.84a15.58 15.58 0 0 0-11.78 5.38v-2.88c0-.94-.79-1.72-1.72-1.72h-3.84c-.94 0-1.72.78-1.72 1.72v47.37c0 .86.78 1.72 1.72 1.72h6.32c.86 0 1.72-.86 1.72-1.72v-13.6c1.64.62 5.08 1.48 8.67 1.48 10.78 0 17.9-8.28 17.9-18.84 0-10.94-7.43-18.91-17.27-18.91zm257.6 14.3c-.16-3.52-2.97-6.25-6.95-6.25-4.38 0-7.19 2.65-7.66 6.25zm-6.72-14.3c9.37 0 16.56 6.95 16.56 16.72 0 .55-.08 1.8-.16 2.35a1.83 1.83 0 0 1-1.71 1.64h-23.13c.08 4.45 3.75 8.36 8.99 8.36 3.59 0 6.09-1.33 7.73-2.65.86-.71 1.8-.79 2.34 0l3.05 4.06c.62.7.7 1.56-.16 2.34a20.36 20.36 0 0 1-13.43 4.93c-10.78 0-18.28-8.6-18.28-18.92 0-10.16 7.5-18.83 18.2-18.83zm-61.13 28.84c-4.69 0-7.19-2.97-7.97-5v-12.9s2.97-2.03 7.5-2.03c5.94 0 8.98 4.84 8.98 9.92 0 5.09-2.89 10.01-8.51 10.01zm.86-28.84c-3.6 0-7.19.86-8.83 1.56V42.35c0-.86-.78-1.72-1.72-1.72h-6.33c-.86 0-1.71.86-1.71 1.72v47.37c0 .94.85 1.72 1.71 1.72h2.74l.16-.01h.72c.95 0 1.74-.78 1.74-1.72v-2.67l.03-.13s4.14 5.4 12.03 5.4c9.85 0 16.95-8.6 16.95-18.93 0-10.55-6.8-18.83-17.5-18.83zm-55.27-13.92H385.2c-.86 0-1.48.7-1.48 1.49v6.4c0 .79.62 1.5 1.48 1.5h13.25v39.94c0 .78.7 1.48 1.49 1.48h7.26c.78 0 1.49-.7 1.49-1.48V50h13.25c.86 0 1.49-.7 1.49-1.48v-6.41c0-.78-.63-1.49-1.49-1.49zm-87.46 28.22c-.16-3.52-2.97-6.25-6.95-6.25-4.38 0-7.19 2.65-7.66 6.25zm-6.72-14.3c9.38 0 16.56 6.95 16.56 16.72 0 .55-.08 1.8-.15 2.35a1.83 1.83 0 0 1-1.72 1.64h-23.12c.08 4.45 3.75 8.36 8.98 8.36 3.6 0 6.1-1.33 7.73-2.65.86-.71 1.8-.79 2.35 0l3.04 4.06c.63.7.7 1.56-.16 2.34a20.36 20.36 0 0 1-13.43 4.93c-10.78 0-18.28-8.6-18.28-18.92 0-10.16 7.5-18.83 18.2-18.83"\n      fill="#2e2d2d" />\n    </svg>\n');t.opentable=o;var s=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" width="540.7" height="76.7">\n    <path\n      d="M338.3 66.8c10 0 13.2-7 15.3-15.3h-4.7c-6.6 0-17.4 1.1-17.4 9.9 0 3.6 3.4 5.4 6.8 5.4m13.2.7h-.2c-4.6 5.9-9.3 9.2-16.7 9.2-9.4 0-16-5.2-16-14.8 0-17.1 19.1-18.4 31.8-18.4h4.7c.4-1.4.4-3 .4-4.4 0-5.3-5.6-6.8-10.3-6.8-6 0-11.7 1.5-17 4l1.9-10.7c5.7-2 11.5-3.1 17.6-3.1 10.3 0 20 3.8 20 16 0 6.9-5 27.2-6.3 37h-11.3l1.4-8M2.1 23.6H12L14.2 13l14.5-4.8-3.4 15.4h12.1l-2.1 9.9h-12l-5 22.6c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.1 5a18 18 0 0 0 6.6-1.1L27 75.4c-2.4.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5C4.2 59 5 55 6 51l3.9-17.5H0l2.1-9.9M47.9 1.3h13.5l-2.9 12.9H45.1l2.8-12.9zm-5 22.3h13.5l-11 51.8H31.9l11-51.8m54.2 11.9a18.2 18.2 0 0 0-9.8-2.6c-10.8 0-16.8 10-16.8 19.8 0 6.7 2.2 13.5 11.4 13.5 3.4 0 7.5-1 11-2.6l-1.5 10.6a29 29 0 0 1-13 2.4c-13.4 0-22-9-22-22.3 0-18 12-31.9 30.6-31.9 5 0 9.8 1 13.4 2l-3.3 11.1M112 0h13.4l-9 42.4h.2l18.8-18.8H153l-24.8 23.7 15.6 28.1h-15.2L115.1 48h-.2l-5.8 27.4H95.9L112 0m89.5 23.6h9.8l2.3-10.6L228 8.2l-3.3 15.4h12l-2 9.9h-12.2L217.7 56c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.1 5a18 18 0 0 0 6.6-1.1l-2.3 10.4c-2.3.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5 0-4 .8-8 1.7-12.1l3.9-17.5h-9.8l2.1-9.9"\n      fill="#026CDF"/>\n    <path\n      d="M197 42.1c0-13.1-8.4-19.7-21.2-19.7-17 0-29.5 15.5-29.5 31.6 0 15.4 10 22.6 25 22.6 5.5 0 11.2-1.3 16.5-2.9l1.7-10.6c-5 2.3-10.4 3.7-16 3.7-8.5 0-13.6-3-14.2-11.2l-.1-1.5V53.8c0-3.5.8-7 2.2-10.3 2.6-6.6 6.2-11.1 14.2-11.1 5.6 0 8.5 3.1 8.5 8.6 0 1.2 0 2.3-.3 3.6h-18.4c-1.2 4-1.4 6.7-1.4 9.2h31.7c.8-3.8 1.3-7.6 1.3-11.6m45.6-12.8l1.1-5.8h12.6l-1.2 7h.2c3.6-5.4 9.6-8.2 15.9-8.2 6.1 0 12.5 3.6 13.2 9.9h.2c3.4-6.8 11-9.9 18.2-9.9 7.7 0 14.4 6.4 14.4 14.2 0 4.6-1.2 9.9-2.3 14l-5.5 24.8H296l5.5-25.2c.7-3.1 1.7-8 1.7-11 0-3.9-3-6.3-6.3-6.3-9.4 0-11.7 10.9-13.4 17.9L278 75.4h-13.4l5.4-25.2a60 60 0 0 0 1.7-11c0-3.9-3-6.3-6.3-6.3-9.2 0-11.7 11-13.4 17.9l-5.3 24.6h-13.5l9.4-46m165.2 4.8a21 21 0 0 0-9-2c-4 0-9 1.2-9 5.3 0 6.6 17.5 9 17.5 21.6 0 13.5-11.8 17.5-23.3 17.5a38 38 0 0 1-15.8-3l2.9-10.8c3.8 2 7.6 4 12.9 4 4.5 0 9.2-1.5 9.2-5.8 0-8.3-17.5-9.1-17.5-22 0-12.2 11.8-16.6 22.4-16.6 5 0 10 1 12.6 1.6l-2.9 10.2m8.6-10.6h9.8l2.3-10.6L443 8.2l-3.3 15.4h12l-2 9.9h-12.2L432.6 56c-.3 1.2-.6 3-.6 5 0 3.2 2.1 5 5.2 5a18 18 0 0 0 6.5-1.1l-2.3 10.4c-2.3.5-5 1.2-7.3 1.2-9.1 0-15.6-3.6-15.6-13.5 0-4 .9-8 1.8-12.1l3.8-17.5h-9.8l2.1-9.9m91.4 7.1l1.2-7h13l-1.8 9.8h.2c2.4-5.6 9-11 15.3-11 1.7 0 3.5.1 5 .5L538 36.1c-1.5-.5-3.4-.8-5.2-.8-9.5 0-14.1 8.5-15.8 16.9l-5 23.2h-13.4l9.2-44.8m-9.3 11.5c0-13.1-8.5-19.7-21.3-19.7-17 0-29.4 15.5-29.4 31.6 0 15.4 10 22.6 25 22.6 5.4 0 11.2-1.3 16.4-2.9l1.7-10.6c-5 2.3-10.3 3.7-15.9 3.7-8.6 0-13.6-3-14.3-11.2v-1.8c0-3.5.8-7 2.1-10.3 2.6-6.6 6.3-11.1 14.2-11.1 5.7 0 8.6 3.1 8.6 8.6l-.3 3.6h-18.5c-1.2 4-1.4 6.7-1.4 9.2h31.7c.9-3.8 1.4-7.6 1.4-11.6"\n      fill="#026CDF"/>\n  </svg>\n');t.ticketmaster=s;var c=window.encodeURIComponent('\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="66">\n    <defs><path\n      id="a"\n      d="M0 66h150V0H0zm41.6-21c-6.3 0-11.4-4-13.1-9.6H27v9.3h-5.7V19.3H31c1.5 0 2.8.3 4 .7 1 .4 2 1 2.8 1.7.8.7 1.3 1.5 1.7 2.5.4 1 .6 2 .6 3 0 1.7-.4 3.2-1.1 4.4a7.8 7.8 0 0 1-3.2 2.8 6 6 0 0 1-1.6.7 8 8 0 0 0 7.4 4.6zm29-.3H52.4V19.4h17.2v5H58.2v4.9h8.7v4.9h-8.7v5.4h12.3zm16.9-19c0 1 .5 1.6 1.4 2.2 1 .5 2.2 1 3.8 1.3 1 .2 1.9.5 2.8 1 .9.3 1.7.8 2.4 1.5a7.2 7.2 0 0 1 2.4 5.7c0 1.1-.2 2.2-.8 3.2a8 8 0 0 1-2 2.5 12.3 12.3 0 0 1-7 2.2A15.7 15.7 0 0 1 84 44a12.8 12.8 0 0 1-4-3l3.7-4a12.2 12.2 0 0 0 2.7 2.2 8.7 8.7 0 0 0 3.9 1 4.6 4.6 0 0 0 2.5-.7l.9-1c.2-.2.3-.6.3-1 0-1-.5-1.7-1.4-2.3-1-.5-2.4-1-4.4-1.5-1-.2-1.9-.6-2.7-1-.8-.4-1.6-1-2.2-1.6a6.6 6.6 0 0 1-1.9-4.7c0-1 .2-2 .6-3a7 7 0 0 1 1.8-2.5c.7-.7 1.7-1.3 2.9-1.7 1.2-.4 2.5-.6 4.1-.6a13.4 13.4 0 0 1 6 1.3l1.8 1.2 1 .9-3.4 3.6a22.9 22.9 0 0 0-2.2-1.4c-.4-.3-1-.5-1.5-.6-.6-.2-1.1-.2-1.8-.2a4.2 4.2 0 0 0-2.3.7l-.7.7c-.2.3-.3.6-.3 1zm44.6-6.3L123 34v10.7h-5.9V34l-9-14.7h6.6l5.6 9.5 5.4-9.5zM30.8 31c1.1 0 2-.4 2.6-1 .6-.6 1-1.4 1-2.4s-.4-1.8-1-2.4c-.6-.7-1.5-1-2.6-1h-3.5V31z"/>\n      <mask id="b" fill="#fff"><use fill-rule="evenodd" xlink:href="#a"/></mask>\n    </defs>\n    <g fill="none" fill-rule="evenodd"><use xlink:href="#a"/>\n      <g fill="#ff462d" mask="url(#b)"><path d="M0 0h150v66H0z"/></g>\n    </g>\n  </svg>\n');t.resy=c}}]); })();
//# sourceMappingURL=vendors~footerBlock-858bac4d23e838b9683e.js.map