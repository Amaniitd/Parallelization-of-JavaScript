;/*FB_PKG_DELIM*/

(function __HORCRUX__(){ window.__d("CometLinkTrackingUtils.workplace",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){return a}f.decorateHrefWithTrackingInfo=a}),66);
window.__d("VoyageUserJourneyBackends",[],(function(a,b,c,d,e,f){"use strict";var g=new window.Set();function a(a){g.add(a);return function(){g["delete"](a)}}function b(a){g.forEach(function(b){b(a)})}f.addBackend=a;f.logEvent=b}),66);
window.__d("BasicFBNux",["AsyncRequest","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f,g){function a(a,b){a.subscribe("hide",function(){return h(b)})}function b(a){a=c("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",a).getURI();new(c("AsyncRequest"))().setURI(a).send()}function h(a){a=c("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",a).getURI();new(c("AsyncRequest"))().setURI(a).send()}g.subscribeHide=a;g.onView=b;g.onDismiss=h}),98);
window.__d("oz-player/shims/www/OzCacheStorageWWW",["WebStorage"],(function(a,b,c,d,e,f,g){var h="_oz_",i="_@_",j=c("WebStorage").getLocalStorage();a={get:function(a){if(j==null)return null;a=j.getItem(h+a);typeof a==="string"&&a.startsWith(i)&&(a=a.substring(i.length));return a},set:function(a,b){j!=null&&j.setItem(h+a,b)}};b=a;g["default"]=b}),98);
window.__d("oz-player/shims/OzCacheStorage",["oz-player/shims/www/OzCacheStorageWWW"],(function(a,b,c,d,e,f,g){g["default"]=c("oz-player/shims/www/OzCacheStorageWWW")}),98);
window.__d("oz-player/shims/www/OzWindowEventsWWW",["cr:925100"],(function(a,b,c,d,e,f,g){"use strict";a={onUnload:function(a){b("cr:925100").onUnload(a)}};c=a;g["default"]=c}),98);
window.__d("oz-player/shims/OzWindowEvents",["oz-player/shims/www/OzWindowEventsWWW"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("oz-player/shims/www/OzWindowEventsWWW")}),98);
window.__d("oz-player/networks/OzBandwidthCache",["oz-player/configs/OzGlobalConfig","oz-player/shims/OzCacheStorage","oz-player/shims/OzWindowEvents"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b,d,e){var f=this;this.$1=a;this.$2=b;this.$3=d;this.$4=e;c("oz-player/shims/OzWindowEvents").onUnload(function(){f.updateCache()})}var b=a.prototype;b.getCachedBandwidth=function(){var a=c("oz-player/shims/OzCacheStorage").get(this.$1);if(a==null)return null;a=Number(a);return window.isNaN(a)?null:a};b.getCachedSamples=function(){if(this.$5!=null)return this.$5;var b=c("oz-player/shims/OzCacheStorage").get(this.$2);if(b==null)return null;this.$5=a.deserialize(b);return this.$5};b.updateCache=function(){c("oz-player/shims/OzCacheStorage").set(this.$1,String(this.$3()));var b=c("oz-player/configs/OzGlobalConfig").getNumber("bandwidth_ttfb_samples_to_save",5);if(b>0){var d=this.$4(),e=d.bandwidth.length,f=d.navigationTiming.length;e={bandwidth:d.bandwidth.slice(Math.max(0,e-b),e),navigationTiming:d.navigationTiming.slice(Math.max(0,f-b),f)};c("oz-player/shims/OzCacheStorage").set(this.$2,a.serialize(e))}};a.deserialize=function(a){var b={};try{b=JSON.parse(a)}catch(a){}return typeof b==="object"&&Array.isArray(b.b)&&Array.isArray(b.t)?{bandwidth:b.b.reduce(function(a,b){typeof b.b==="number"&&typeof b.t==="number"&&typeof b.s==="number"&&a.push({bytes:b.b,timeInMs:b.t,timestamp:b.s});return a},[]),navigationTiming:b.t.reduce(function(a,b){typeof b.t==="number"&&typeof b.s==="number"&&(typeof b.l==="number"&&typeof b.b==="number"?a.push({timeToFirstByteMs:b.t,timeToLastByteMs:b.l,bytes:b.b,timestamp:b.s}):a.push({timeToFirstByteMs:b.t,timeToLastByteMs:0,bytes:0,timestamp:b.s}));return a},[])}:null};a.serialize=function(a){a={b:a.bandwidth.map(function(a){return{b:a.bytes,s:a.timestamp,t:a.timeInMs}}),t:a.navigationTiming.map(function(a){return{s:a.timestamp,t:a.timeToFirstByteMs,l:a.timeToLastByteMs,b:a.bytes}})};return JSON.stringify(a)};return a}();g["default"]=a}),98);
window.__d("oz-player/networks/OzNetworkSamples",["oz-player/configs/OzGlobalConfig"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1=!1,this.$2=[],this.$3=[],this.$4=null,this.$5=null}var b=a.prototype;b.setBandwidthCache=function(a){this.$4=a};b.getRecentBandwidthSamples=function(){return this.$6().recentBandwidthSamples};b.getRecentNavigationTimingSamples=function(){return this.$6().recentNavigationTimingSamples};b.setBandwidthEstimateFromHeaders=function(a){this.$5=a};b.getBandwidthEstimateFromHeaders=function(){return this.$5};b.$6=function(){if(!this.$1&&this.$4!=null&&c("oz-player/configs/OzGlobalConfig").getNumber("bandwidth_ttfb_samples_to_save",5)>0){this.$1=!0;var a=this.$4.getCachedSamples();a!=null&&(this.$2=a.bandwidth,this.$3=a.navigationTiming)}return{recentBandwidthSamples:this.$2,recentNavigationTimingSamples:this.$3}};b.addBandwidthSample=function(a){this.$2.push(window.babelHelpers["extends"]({},a,{timestamp:Date.now()})),this.$2.length>c("oz-player/configs/OzGlobalConfig").getNumber("max_bandwidth_sample_count",30)&&this.$2.shift()};b.addNavigationTimingSample=function(a){this.$3.push(window.babelHelpers["extends"]({},a,{timestamp:Date.now()})),this.$3.length>c("oz-player/configs/OzGlobalConfig").getNumber("max_bandwidth_sample_count",30)&&this.$3.shift()};return a}();g["default"]=a}),98);
window.__d("oz-player/shims/www/VideoPlayerODSWWW",["VideoPlayerODS"],(function(a,b,c,d,e,f){"use strict";Object.keys(window.importNamespace("VideoPlayerODS")).forEach(function(a){if(a==="default"||a==="__esModule")return;f[a]=window.importNamespace("VideoPlayerODS")[a]})}),null);
window.__d("oz-player/shims/OzVideoPlayerODS",["oz-player/shims/www/VideoPlayerODSWWW"],(function(a,b,c,d,e,f){"use strict";Object.keys(window.importNamespace("oz-player/shims/www/VideoPlayerODSWWW")).forEach(function(a){if(a==="default"||a==="__esModule")return;f[a]=window.importNamespace("oz-player/shims/www/VideoPlayerODSWWW")[a]})}),null);
window.__d("oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase",["oz-player/configs/OzGlobalConfig","oz-player/networks/OzBandwidthCache","oz-player/networks/OzBandwidthUtils","oz-player/networks/OzNetworkSamples","oz-player/shims/OzEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=1e6,i="bandwidthEstimate",j="bandwidthAndTTFBSamples";a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){var b;b=a.call(this)||this;b.$OzBandwidthEstimatorBase2=new(c("oz-player/networks/OzNetworkSamples"))();b.$OzBandwidthEstimatorBase1=new(c("oz-player/networks/OzBandwidthCache"))(i,j,function(){return b.getAdjustedBandwidth(c("oz-player/configs/OzGlobalConfig"))},function(){return{bandwidth:b.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples(),navigationTiming:b.$OzBandwidthEstimatorBase2.getRecentNavigationTimingSamples()}});b.$OzBandwidthEstimatorBase2.setBandwidthCache(b.$OzBandwidthEstimatorBase1);return b}var e=b.prototype;e.getNetworkSamples=function(){return this.$OzBandwidthEstimatorBase2};e.getStandardDeviationOfBandwidth=function(){return d("oz-player/networks/OzBandwidthUtils").getStandardDeviationOfBandwidth(this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples())};e.getSampleCount=function(){return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples().length};e.getAdjustedBandwidth=function(a){return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples().length===0?this.getDefaultEstimate(a):this.$OzBandwidthEstimatorBase3(a)};e.getBandwidthDiagnostics=function(a){throw new Error("must be implementd by subclasses")};e.getBandwidth=function(a){throw new Error("must be implementd by subclasses")};e.getBandwidthDiagnosticsFromHeaders=function(a){a=this.getBandwidthDiagnostics(a);if(a==null)return null;var b=this.$OzBandwidthEstimatorBase2.getBandwidthEstimateFromHeaders();if(b==null)return a;var c,d;if(a!=null)c=a.timeToFirstByteMsEstimate,d=a.timeToFirstByteMsStandardDeviation,a=a.timeToFirstByteMsTotalWeight;else return null;return{bandwidthEstimate:b.meanEstimate,bandwidthStandardDeviation:b.standardDeviationEstimate,bandwidthTotalWeight:1,timeToFirstByteMsEstimate:c,timeToFirstByteMsStandardDeviation:d,timeToFirstByteMsTotalWeight:a}};e.getDefaultEstimate=function(a){var b=this.$OzBandwidthEstimatorBase1.getCachedBandwidth();return typeof b==="number"&&b>0?b:a.getNumber("default_bandwidth_estimate",h)};e.$OzBandwidthEstimatorBase3=function(a){return this.getBandwidth(a)};e.addBandwidthSample=function(a,b){this.$OzBandwidthEstimatorBase2.addBandwidthSample({bytes:a,timeInMs:b}),this.emit("bandwidth_sampled")};e.addNavigationTimingSample=function(a,b,c){a={timeToFirstByteMs:a,timeToLastByteMs:b,bytes:c};this.enqueueNavigationTimingSample(a);this.$OzBandwidthEstimatorBase2.addNavigationTimingSample(a)};e.enqueueNavigationTimingSample=function(a){};e.setBandwidthEstimateFromHeaders=function(a){this.$OzBandwidthEstimatorBase2.setBandwidthEstimateFromHeaders(a)};return b}(c("oz-player/shims/OzEventEmitter"));g["default"]=a}),98);
window.__d("oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorDefault",["oz-player/networks/OzBandwidthUtils","oz-player/shims/OzVideoPlayerODS","oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){window.babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getBandwidthDiagnostics=function(a){return d("oz-player/networks/OzBandwidthUtils").getBandwidthDiagnostics(this.getNetworkSamples().getRecentBandwidthSamples(),a.getNumber("bandwidth_estimator_half_life",6),this.getNetworkSamples().getRecentNavigationTimingSamples(),a.getNumber("time_to_first_byte_estimate_half_life_ms",500))};c.getBandwidth=function(a){var b=d("oz-player/networks/OzBandwidthUtils").getBandwidthEstimate(this.getNetworkSamples().getRecentBandwidthSamples(),a.getNumber("bandwidth_estimator_half_life",6),a.getNumber("bandwidth_estimator_outlier_exclusion_factor",50),a.getNumber("bandwidth_estimator_std_dev_penalty_factor",0));if(b>0)return b;d("oz-player/shims/OzVideoPlayerODS").bumpEntityKey("comet_video_player","OzImplementation.bandwidth_estimate_invalid_default",1);return this.getDefaultEstimate(a)};return b}(c("oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase"));b=new a();e=b;g["default"]=e}),98);
window.__d("clamp",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a<b)return b;return a>c?c:a}f["default"]=a}),66);
window.__d("getJSEnumSafe",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(b==null)return null;if(!Object.prototype.hasOwnProperty.call(a,b))return null;b=b;return a[b]}f["default"]=a}),66);
window.__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useState;function a(a){a=i(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:h(function(){return c(function(a){return!a})},[]),setTrue:h(function(){return c(!0)},[]),setFalse:h(function(){return c(!1)},[])}}g["default"]=a}),98); })();