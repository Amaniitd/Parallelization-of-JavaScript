 (function __HORCRUX__(){ window.OneTrustStub=function(t){"use strict";var l=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}},e=(i.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.updateGtmMacros(),this.fetchBannerSDKDependency()},i.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.otFetch(l.bannerDataParentURL,this.getLocation.bind(this))},i.prototype.getLocation=function(t){if(!t.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(t);var e=window;if(e.OneTrust&&e.OneTrust.geolocationResponse){var i=e.OneTrust.geolocationResponse;this.setGeoLocation(i.countryCode,i.stateCode),this.addBannerSDKScript(t)}else{var a=this.readCookieParam(l.optanonCookieName,l.geolocationCookiesParam);if(a||t.SkipGeolocation){var o=a.split(";")[0],n=a.split(";")[1];this.setGeoLocation(o,n),this.addBannerSDKScript(t)}else this.getGeoLocation(t)}},i.prototype.getGeolocationURL=function(t){var e=""+l.stubScriptElement.getAttribute("src").split(l.stubFileName)[0]+t.Version;return new RegExp("^file://","i").test(e)&&t.MobileSDK?"./"+t.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js":t.GeolocationUrl},i.prototype.getGeoLocation=function(t){var e=this;window.jsonFeed=function(t){e.setGeoLocation(t.country,t.state)},this.jsonp(this.getGeolocationURL(t),this.addBannerSDKScript.bind(this,t))},i.prototype.setGeoLocation=function(t,e){void 0===e&&(e=""),l.userLocation={country:t,state:e}},i.prototype.otFetch=function(t,e){if(new RegExp("^file://","i").test(t))this.otFetchOfflineFile(t,e);else{l.mobileOnlineURL.push(t);var i=new XMLHttpRequest;i.onload=function(){e(JSON.parse(this.responseText))},i.open("GET",t),i.send()}},i.prototype.otFetchOfflineFile=function(t,e){var i=(t=t.replace(".json",".js")).split("/"),a=i[i.length-1].split(".js")[0];this.jsonp(t,function(){e(window[a])})},i.prototype.jsonp=function(t,e){var i=window.document.createElement("script");i.setAttribute("src",t),i.async=!0,i.type="text/javascript",this.crossOrigin&&i.setAttribute("crossorigin",this.crossOrigin),window.document.getElementsByTagName("head")[0].appendChild(i),new RegExp("^file://","i").test(t)||l.mobileOnlineURL.push(t),e&&(i.onload=function(){e()})},i.prototype.getRegionSet=function(t){var e,i,a,o=l.userLocation,n=t.RuleSet.filter(function(t){return!0===t.Default});if(!o.country&&!o.state)return n&&0<n.length?n[0]:null;for(var s=o.state.toLowerCase(),r=o.country.toLowerCase(),p=0;p<t.RuleSet.length;p++)if(!0===t.RuleSet[p].Global)a=t.RuleSet[p];else{var c=t.RuleSet[p].States;if(c[r]&&0<=c[r].indexOf(s)){i=t.RuleSet[p];break}0<=t.RuleSet[p].Countries.indexOf(r)&&(e=t.RuleSet[p])}return i||e||a},i.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData()},i.prototype.initializeGroupData=function(){var t=this.readCookieParam(l.optanonCookieName,"groups");t&&(l.optanonHtmlGroupData=this.deserialiseStringToArray(t))},i.prototype.initializeHostData=function(){var t=this.readCookieParam(l.optanonCookieName,"hosts");t&&(l.optanonHostData=this.deserialiseStringToArray(t))},i.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},i.prototype.validateIABGlobalScope=function(){var t=this.readCookieParam(l.optanonCookieName,l.oneTrustIsIABCrossConsentEnableParam);t?"true"===t?(l.hasIABGlobalScope=!0,l.isStubReady=!1):(l.hasIABGlobalScope=!1,l.IABCookieValue=this.getCookie(l.oneTrustIABCookieName)):l.isStubReady=!1},i.prototype.validateIABGDPRApplied=function(){var t=this.readCookieParam(l.optanonCookieName,l.geolocationCookiesParam).split(";")[0];t?this.isBoolean(t)?l.oneTrustIABgdprAppliesGlobally="true"===t:l.oneTrustIABgdprAppliesGlobally=0<=l.EUCOUNTRIES.indexOf(t):l.isStubReady=!1},i.prototype.isBoolean=function(t){return"true"===t||"false"===t},i.prototype.readCookieParam=function(t,e){var i,a,o,n,s=this.getCookie(t);if(s){for(a={},o=s.split("&"),i=0;i<o.length;i+=1)n=o[i].split("="),a[window.decodeURIComponent(n[0])]=window.decodeURIComponent(n[1]).replace(/\+/g," ");return e&&a[e]?a[e]:e&&!a[e]?"":a}return""},i.prototype.getCookie=function(t){var e,i,a=t+"=",o=window.document.cookie.split(";");for(e=0;e<o.length;e+=1){for(i=o[e];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(a))return i.substring(a.length,i.length)}return null},i.prototype.updateGtmMacros=function(){var t,e=[];for(t=0;t<l.optanonHtmlGroupData.length;t++)this.endsWith(l.optanonHtmlGroupData[t],":1")&&e.push(l.optanonHtmlGroupData[t].replace(":1",""));for(t=0;t<l.optanonHostData.length;t++)this.endsWith(l.optanonHostData[t],":1")&&e.push(l.optanonHostData[t].replace(":1",""));var i=","+this.serialiseArrayToString(e)+",";window.OnetrustActiveGroups=i,window.OptanonActiveGroups=i,void 0!==window.dataLayer?window.dataLayer.constructor===Array&&(window.dataLayer.push({OnetrustActiveGroups:i}),window.dataLayer.push({OptanonActiveGroups:i})):window.dataLayer=[{event:"OneTrustLoaded",OnetrustActiveGroups:i},{event:"OptanonLoaded",OptanonActiveGroups:i}],window.setTimeout(function(){var t=new window.CustomEvent("consent.onetrust",{detail:e});window.dispatchEvent(t)})},i.prototype.deserialiseStringToArray=function(t){return t?t.split(","):[]},i.prototype.endsWith=function(t,e){return-1!==t.indexOf(e,t.length-e.length)},i.prototype.serialiseArrayToString=function(t){return t.toString()},i.prototype.setStubScriptElement=function(){l.stubScriptElement=window.document.querySelector("script[src*='"+l.stubFileName+"']"),l.stubScriptElement&&l.stubScriptElement.hasAttribute(l.DATAFILEATTRIBUTE)?l.domainDataFileName=l.stubScriptElement.getAttribute(l.DATAFILEATTRIBUTE).trim():l.stubScriptElement||(l.stubScriptElement=window.document.querySelector("script[src*='"+l.migratedCCTID+"']"),l.stubScriptElement&&(l.isMigratedURL=!0,l.domainDataFileName=l.migratedDomainId.trim()))},i.prototype.setDomainDataFileURL=function(){this.setStubScriptElement();var t=l.stubScriptElement.getAttribute("src");t&&(l.isMigratedURL?l.storageBaseURL=t.split("/consent/"+l.migratedCCTID)[0]:l.storageBaseURL=t.split("/scripttemplates/"+l.stubFileName)[0]),l.bannerBaseDataURL=l.storageBaseURL&&l.storageBaseURL+"/consent/"+l.domainDataFileName,l.bannerDataParentURL=l.bannerBaseDataURL+"/"+l.domainDataFileName+".json"},i.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=window.document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}t.prototype=window.Event.prototype,window.CustomEvent=t},i);function i(){var c=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.addBannerSDKScript=function(t){var e=null;c.iabTypeAdded&&("IAB"!==(e=c.getRegionSet(t)).Type&&"IAB2"!==e.Type||(c.iabType=e.Type,c.intializeIabStub()));var i=l.stubScriptElement.cloneNode(!0),a="";a=t.UseSDKRefactor?(l.isMigratedURL&&(i.src=l.storageBaseURL+"/scripttemplates/new/scripttemplates/"+l.stubFileName+".js"),l.storageBaseURL+"/scripttemplates/new/scripttemplates/"+t.Version+"/"+l.bannerScriptName):"5.11.0"===t.Version?(l.isMigratedURL&&(i.src=l.storageBaseURL+"/scripttemplates/old/scripttemplates/"+l.stubFileName+".js"),l.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+l.bannerScriptName):(l.isMigratedURL&&(i.src=l.storageBaseURL+"/scripttemplates/"+l.stubFileName+".js"),l.storageBaseURL+"/scripttemplates/"+t.Version+"/"+l.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin"].forEach(function(t){l.stubScriptElement.getAttribute(t)&&i.setAttribute(t,l.stubScriptElement.getAttribute(t))}),c.crossOrigin=l.stubScriptElement.getAttribute("crossorigin")||null,window.otStubData={domainData:t,stubElement:i,bannerBaseDataURL:l.bannerBaseDataURL,mobileOnlineURL:l.mobileOnlineURL,userLocation:l.userLocation,regionRule:e,crossOrigin:c.crossOrigin},c.jsonp(a,null)},this.intializeIabStub=function(){var t=window;c.iabTypeAdded?("IAB"===c.iabType?void 0===t.__cmp&&(window.__cmp=c.executeCmpApi):void 0===t.__tcfapi&&(window.__tcfapi=c.executeTcfApi),c.addIabFrame()):c.addBackwardIabFrame(),t.receiveOTMessage=c.receiveIabMessage,(t.attachEvent||window.addEventListener)("message",t.receiveOTMessage,!1)},this.addIabFrame=function(){var t=window,e="IAB"===c.iabType?"__cmpLocator":"__tcfapiLocator";!t.frames[e]&&(t.document.body?c.addLocator(e,"CMP"):window.setTimeout(c.addIabFrame,5))},this.addBackwardIabFrame=function(){var t=window,e="__cmpLocator";!t.frames[e]&&(t.document.body?c.addLocator(e,"CMP"):window.setTimeout(c.addIabFrame,5));var i="__tcfapiLocator";!t.frames[i]&&(t.document.body?c.addLocator(i,"TCF"):window.setTimeout(c.addIabFrame,5))},this.addLocator=function(t,e){var i=window,a=i.document.createElement("iframe");a.style.cssText="display:none",a.name=t,a.setAttribute("title",e+" Locator"),i.document.body.appendChild(a)},this.receiveIabMessage=function(a){var o="string"==typeof a.data,t={};try{t=o?JSON.parse(a.data):a.data}catch(t){}if(t.__cmpCall&&"IAB"===c.iabType){var n=t.__cmpCall.callId,s=t.__cmpCall.command,e=t.__cmpCall.parameter;c.executeCmpApi(s,e,function(t,e){var i={__cmpReturn:{returnValue:t,success:e,callId:n,command:s}};a.source.postMessage(o?JSON.stringify(i):i,a.origin)})}else t.__cmpCall&&"IAB2"===c.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(t.__tcfapiCall&&"IAB2"===c.iabType){var r=t.__tcfapiCall.callId,p=t.__tcfapiCall.command,i=(e=t.__tcfapiCall.parameter,t.__tcfapiCall.version);c.executeTcfApi(p,e,function(t,e){var i={__tcfapiReturn:{returnValue:t,success:e,callId:r,command:p}};a.source.postMessage(o?JSON.stringify(i):i,a.origin)},i)}else t.__tcfapiCall&&"IAB"===c.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];c.iabType="IAB";var i=t[0],a=t[1],o=t[2];if("function"==typeof o&&i)if(l.isStubReady&&l.IABCookieValue)switch(i){case"ping":c.getPingRequest(o,!0);break;case"getConsentData":c.getConsentDataRequest(o);break;default:c.addToQueue(i,a,o)}else c.addToQueue(i,a,o)},this.executeTcfApi=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(c.iabType="IAB2",!t.length)return window.__tcfapi.a||[];var i=t[0],a=t[1],o=t[2],n=t[3];"function"==typeof o&&i&&(l.isStubReady&&l.IABCookieValue&&"ping"===i?c.getPingRequest(o):c.addToQueue(i,a,o,n))},this.addToQueue=function(t,e,i,a){var o=window,n="IAB"===c.iabType?"__cmp":"__tcfapi";o[n].a=o[n].a||[],"ping"===t?c.getPingRequest(i):o[n].a.push([t,e,i,a])},this.getPingRequest=function(t,e){if(void 0===e&&(e=!1),t){var i={},a=!1;"IAB"===c.iabType?(i={gdprAppliesGlobally:l.oneTrustIABgdprAppliesGlobally,cmpLoaded:e},a=!0):"IAB2"===c.iabType&&(i={gdprApplies:l.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},a=!0),t(i,a)}},this.getConsentDataRequest=function(t){t&&l.IABCookieValue&&t({gdprApplies:l.oneTrustIABgdprAppliesGlobally,hasGlobalScope:l.hasIABGlobalScope,consentData:l.IABCookieValue},!0)},this.initConsentSDK()}var a=new e;return t.OtSDKStub=e,t.otSdkStub=a,t}({}); })();
