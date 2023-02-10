/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/contrib/picture/picturefill2/picturefill.js. */
(function __HORCRUX__(){ window.matchMedia||(window.matchMedia=function(){"use strict";var styleMedia=(window.styleMedia||window.media);if(!styleMedia){var style=window.document.createElement('style'),script=window.document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';script.parentNode.insertBefore(style,script);info=('getComputedStyle'in window)&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';if(style.styleSheet){style.styleSheet.cssText=text}else style.textContent=text;return info.width==='1px'}}};return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'}}}());(function(w,doc){"use strict";if(w.HTMLPictureElement){w.picturefill=function(){};return};doc.createElement("picture");var pf={};pf.ns="picturefill";pf.srcsetSupported="srcset"in doc.createElement("img");pf.sizesSupported=w.HTMLImageElement.sizes;pf.trim=function(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"")};pf.endsWith=function(str,suffix){return str.endsWith?str.endsWith(suffix):str.indexOf(suffix,str.length-suffix.length)!==-1};pf.matchesMedia=function(media){return w.matchMedia&&w.matchMedia(media).matches};pf.getDpr=function(){return(w.devicePixelRatio||1)};pf.getWidthFromLength=function(length){length=length&&(window.parseFloat(length)>0||length.indexOf("calc(")>-1)?length:"100vw";length=length.replace("vw","%");if(!pf.lengthEl){pf.lengthEl=doc.createElement("div");doc.documentElement.insertBefore(pf.lengthEl,doc.documentElement.firstChild)};pf.lengthEl.style.cssText="position: absolute; left: 0; width: "+length+";";if(pf.lengthEl.offsetWidth<=0)pf.lengthEl.style.cssText="width: 100%;";return pf.lengthEl.offsetWidth};pf.types={};pf.types["image/jpeg"]=true;pf.types["image/gif"]=true;pf.types["image/png"]=true;pf.types["image/svg+xml"]=doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");pf.types["image/webp"]=function(){var img=new w.Image(),type="image/webp";img.onerror=function(){pf.types[type]=false;picturefill()};img.onload=function(){pf.types[type]=img.width===1;picturefill()};img.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="};pf.verifyTypeSupport=function(source){var type=source.getAttribute("type");if(type===null||type===""){return true}else if(typeof(pf.types[type])==="function"){pf.types[type]();return"pending"}else return pf.types[type]};pf.parseSize=function(sourceSizeStr){var match=/(\([^)]+\))?\s*(.+)/g.exec(sourceSizeStr);return{media:match&&match[1],length:match&&match[2]}};pf.findWidthFromSourceSize=function(sourceSizeListStr){var sourceSizeList=pf.trim(sourceSizeListStr).split(/\s*,\s*/),winningLength;for(var i=0,len=sourceSizeList.length;i<len;i++){var sourceSize=sourceSizeList[i],parsedSize=pf.parseSize(sourceSize),length=parsedSize.length,media=parsedSize.media;if(!length)continue;if(!media||pf.matchesMedia(media)){winningLength=length;break}};return pf.getWidthFromLength(winningLength)};pf.parseSrcset=function(srcset){var candidates=[];while(srcset!==""){srcset=srcset.replace(/^\s+/g,"");var pos=srcset.search(/\s/g),url,descriptor=null;if(pos!==-1){url=srcset.slice(0,pos);var last=url[url.length-1];if(last===","||url===""){url=url.replace(/,+$/,"");descriptor=""};srcset=srcset.slice(pos+1);if(descriptor===null){var descpos=srcset.indexOf(",");if(descpos!==-1){descriptor=srcset.slice(0,descpos);srcset=srcset.slice(descpos+1)}else{descriptor=srcset;srcset=""}}}else{url=srcset;srcset=""};if(url||descriptor)candidates.push({url:url,descriptor:descriptor})};return candidates};pf.parseDescriptor=function(descriptor,sizesattr){var sizes=sizesattr||"100vw",sizeDescriptor=descriptor&&descriptor.replace(/(^\s+|\s+$)/g,""),widthInCssPixels=pf.findWidthFromSourceSize(sizes),resCandidate;if(sizeDescriptor){var splitDescriptor=sizeDescriptor.split(" ");for(var i=splitDescriptor.length+1;i>=0;i--)if(splitDescriptor[i]!==window.undefined){var curr=splitDescriptor[i],lastchar=curr&&curr.slice(curr.length-1);if((lastchar==="h"||lastchar==="w")&&!pf.sizesSupported){resCandidate=window.parseFloat((window.parseInt(curr,10)/widthInCssPixels))}else if(lastchar==="x"){var res=curr&&window.parseFloat(curr,10);resCandidate=res&&!window.isNaN(res)?res:1}}};return resCandidate||1};pf.getCandidatesFromSourceSet=function(srcset,sizes){var candidates=pf.parseSrcset(srcset),formattedCandidates=[];for(var i=0,len=candidates.length;i<len;i++){var candidate=candidates[i];formattedCandidates.push({url:candidate.url,resolution:pf.parseDescriptor(candidate.descriptor,sizes)})};return formattedCandidates};pf.dodgeSrcset=function(img){if(img.srcset){img[pf.ns].srcset=img.srcset;img.removeAttribute("srcset")}};pf.processSourceSet=function(el){var srcset=el.getAttribute("srcset"),sizes=el.getAttribute("sizes"),candidates=[];if(el.nodeName.toUpperCase()==="IMG"&&el[pf.ns]&&el[pf.ns].srcset)srcset=el[pf.ns].srcset;if(srcset)candidates=pf.getCandidatesFromSourceSet(srcset,sizes);return candidates};pf.applyBestCandidate=function(candidates,picImg){var candidate,length,bestCandidate;candidates.sort(pf.ascendingSort);length=candidates.length;bestCandidate=candidates[length-1];for(var i=0;i<length;i++){candidate=candidates[i];if(candidate.resolution>=pf.getDpr()){bestCandidate=candidate;break}};if(bestCandidate&&!pf.endsWith(picImg.src,bestCandidate.url)){picImg.src=bestCandidate.url;picImg.currentSrc=picImg.src}};pf.ascendingSort=function(a,b){return a.resolution-b.resolution};pf.removeVideoShim=function(picture){var videos=picture.getElementsByTagName("video");if(videos.length){var video=videos[0],vsources=video.getElementsByTagName("source");while(vsources.length)picture.insertBefore(vsources[0],video);video.parentNode.removeChild(video)}};pf.getAllElements=function(){var elems=[],imgs=doc.getElementsByTagName("img");for(var h=0,len=imgs.length;h<len;h++){var currImg=imgs[h];if(currImg.parentNode.nodeName.toUpperCase()==="PICTURE"||(currImg.getAttribute("srcset")!==null)||currImg[pf.ns]&&currImg[pf.ns].srcset!==null)elems.push(currImg)};return elems};pf.getMatch=function(img,picture){var sources=picture.childNodes,match;for(var j=0,slen=sources.length;j<slen;j++){var source=sources[j];if(source.nodeType!==1)continue;if(source===img)return match;if(source.nodeName.toUpperCase()!=="SOURCE")continue;if(source.getAttribute("src")!==null&&typeof console!==window.undefined)console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var media=source.getAttribute("media");if(!source.getAttribute("srcset"))continue;if((!media||pf.matchesMedia(media))){var typeSupported=pf.verifyTypeSupport(source);if(typeSupported===true){match=source;break}else if(typeSupported==="pending")return false}};return match}
function picturefill(opt){var elements,element,parent,firstMatch,candidates,options=opt||{};elements=options.elements||pf.getAllElements();for(var i=0,plen=elements.length;i<plen;i++){element=elements[i];parent=element.parentNode;firstMatch=window.undefined;candidates=window.undefined;if(!element[pf.ns])element[pf.ns]={};if(!options.reevaluate&&element[pf.ns].evaluated)continue;if(parent.nodeName.toUpperCase()==="PICTURE"){pf.removeVideoShim(parent);firstMatch=pf.getMatch(element,parent);if(firstMatch===false)continue}else firstMatch=window.undefined;if(parent.nodeName.toUpperCase()==="PICTURE"||(element.srcset&&!pf.srcsetSupported)||(!pf.sizesSupported&&(element.srcset&&element.srcset.indexOf("w")>-1)))pf.dodgeSrcset(element);if(firstMatch){candidates=pf.processSourceSet(firstMatch);pf.applyBestCandidate(candidates,element)}else{candidates=pf.processSourceSet(element);if(element.srcset===window.undefined||element[pf.ns].srcset)pf.applyBestCandidate(candidates,element)};element[pf.ns].evaluated=true}}
function runPicturefill(){picturefill();var intervalId=window.setInterval(function(){picturefill();if(/^loaded|^i|^c/.test(doc.readyState)){window.clearInterval(intervalId);return}},250);if(w.addEventListener){var resizeThrottle;w.addEventListener("resize",function(){if(!w._picturefillWorking){w._picturefillWorking=true;w.clearTimeout(resizeThrottle);resizeThrottle=w.setTimeout(function(){picturefill({reevaluate:true});w._picturefillWorking=false},60)}},false)}};runPicturefill();picturefill._=pf;if(typeof window.module==="object"&&typeof window.module.exports==="object"){window.module.exports=picturefill}else if(typeof window.define==="function"&&window.define.amd){window.define(function(){return picturefill})}else if(typeof w==="object")w.picturefill=picturefill})(this,this.document);;
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/contrib/picture/picturefill2/picturefill.js. */
/* Source and licensing information for the line(s) below can be found at https://www.ny.gov/sites/all/modules/contrib/picture/picture.js. */
if(typeof window.Drupal!=='undefined'&&typeof window.jQuery!=='undefined')(function($){window.Drupal.behaviors.picture={attach:function(context){window.picturefill($(context));if(context==='#cboxLoadedContent'&&$(context).find('picture').length){$.colorbox.resize();$('img',context).once('colorbox-lazy-load',function(){$(this).load(function(){this.style.maxHeight=$(window).height()+'px';this.style.maxWidth=$(window).width()+'px';$.colorbox.resize({innerHeight:this.height,innerWidth:this.width});this.style.maxHeight=null;this.style.maxWidth=null})})}}}})(window.jQuery);; })();
/* Source and licensing information for the above line(s) can be found at https://www.ny.gov/sites/all/modules/contrib/picture/picture.js. */
