(function __HORCRUX__(){ (window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ny9q:function(n,i,e){"use strict";e.r(i),e.d(i,"mapSummaryToPlaylist",(function(){return O})),e.d(i,"additionalPlaylistsQuery",(function(){return H}));var t,a=e("gcR/"),s=e.n(a),o=e("VkAN"),r=e.n(o),d=e("ERkP"),l=e.n(d),u=e("Ggfp"),m=e("jVmh"),c=e.n(m),p=e("Ck9z"),y=e.n(p),v=e("9i1U"),b=e("Lcdh"),g=Object(b.css)("position:absolute;top:0;left:0;bottom:0;right:0;"),f=Object(b.css)("width:100%;height:100%;position:absolute;top:-2px;left:-2px;right:0;bottom:0;border-radius:50%;border:2px solid rgba(0,0,0,0.3);border-color:rgba(0,0,0,0.3) transparent transparent transparent;animation:",Object(b.keyframes)("0%{transform:rotate(20deg);}100%{transform:rotate(380deg);}")," 1500ms cubic-bezier(0.77,0.1,0.45,0.8) infinite;"),h=Object(b.css)("animation-delay:40ms;"),P=Object(b.css)("box-sizing:border-box;width:100%;height:100%;position:absolute;border-radius:50%;border:2px solid rgba(0,0,0,0.05);"),w=Object(b.css)("margin:0 auto;width:40px;height:40px;border:none;outline:none;background:unset;box-shadow:unset;border-radius:50%;position:relative;&:focus{outline:0;}",c.a.breakpoint.medium,"{width:2vw;height:2vw;}"),N=Object(b.css)("padding-bottom:400px;"),E=function(){return t||(t=s()("div",{className:N},void 0,s()("div",{className:w},void 0,s()("div",{className:g},void 0,s()("div",{className:P},void 0,s()("div",{className:f}),s()("div",{className:h}))))))};E.displayName="Spinner";var _,A,k,x,I,S=E,T=e("evrd"),O=function(n){return null==n?void 0:n.split(/[\s,]+/).filter(window.Boolean).map((function(n){return"video/".concat(n)}))},j=y()(_||(_=r()(['\n  fragment AdditionalPlaylists_image on Image {\n    id\n    crops(\n      cropNames: [\n        MEDIUM_SQUARE\n        THREE_BY_TWO\n        TWO_BY_THREE\n        SIXTEEN_BY_NINE\n        FIFTEEN_BY_SEVEN\n        MASTER\n      ]\n    ) {\n      name\n      renditions {\n        name\n        url\n        width\n        height\n        format\n      }\n    }\n    assetCrops: crops(\n      renditionNames: [\n        "thumbStandard"\n        "thumbLarge"\n        "facebookJumbo"\n        "videoSixteenByNine3000"\n        "videoSixteenByNineJumbo1600"\n        "articleLarge"\n        "superJumbo"\n        "mediumSquareAt3X"\n      ]\n    ) {\n      renditions {\n        url\n        name\n      }\n    }\n  }\n']))),V=y()(A||(A=r()(['\n  fragment AdditionalPlaylists_videoInfo on Video {\n    id\n    url\n    sourceId\n    liveUrls\n    isLive\n    is360\n    headline {\n      default\n      seo\n    }\n    firstPublished\n    duration\n    aspectRatio\n    kicker\n    promotionalMedia {\n      ...AdditionalPlaylists_image\n    }\n    renditions {\n      width\n      url\n      height\n      type\n      bitrate\n      aspectRatio\n    }\n    promotionalHeadline\n    section {\n      id\n      name\n      displayName\n      url\n    }\n    subsection {\n      id\n      name\n    }\n    summary\n    transcript\n    advertisingProperties {\n      sensitivity\n    }\n    adTargetingParams(clientAdParams: { edn: "us", plat: "web", prop: "nyt" }) {\n      key\n      value\n    }\n    dfpTaxonomyException\n    timesTags @filterEmpty {\n      __typename\n      vernacular\n      isAdvertisingBrandSensitive\n      displayName\n    }\n  }\n  ',"\n"])),j),B=y()(k||(k=r()(["\n  fragment AdditionalPlaylists_playlist on Playlist {\n    id\n    promotionalHeadline\n    url\n    slug\n    promotionalSummary\n    relatedVideos: videos(first: 5) {\n      ...Connection_pageInfo\n      edges @filterEmpty {\n        node {\n          id\n          ... on Video {\n            ...AdditionalPlaylists_videoInfo\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"])),V,v.a),H=y()(x||(x=r()(["\n  query AdditionalPlaylistsQuery($playlistIds: [ID!]!) {\n    anyWorks(ids: $playlistIds) {\n      ...AdditionalPlaylists_playlist\n    }\n  }\n  ","\n"])),B);function R(n){var i,e,t=n.currentVideo,a=n.currentPlaylist,o=n.isHomePage,r=n.showAds,d=n.summary,m=Object(u.useQuery)(H,{variables:{playlistIds:O(d)}}).data;return null!=m&&m.anyWorks?l.a.createElement(l.a.Fragment,null,s()("div",{className:c.a.a11y.visuallyHidden,role:"status","aria-live":"assertive"},void 0,"additional playlists loaded"),null===(i=m.anyWorks)||void 0===i||null===(e=i.filter((function(n){return!!n&&(null==a?void 0:a.slug)!==(null==n?void 0:n.slug)})))||void 0===e?void 0:e.map((function(n,i){return s()(T.a,{playlist:n,currentVideo:t,isDense:!0,isHomePage:o,showAds:r,isFirst:!a&&!i},"playlist_".concat(null==n?void 0:n.id))}))):I||(I=s()(S,{show:!0}))}R.defaultProps={currentPlaylist:void 0,currentVideo:void 0,isHomePage:!1,showAds:!1,summary:void 0};i.default=R}}]); })();
//# sourceMappingURL=additionalPlaylists-06e5a22ec92685b04254.js.map