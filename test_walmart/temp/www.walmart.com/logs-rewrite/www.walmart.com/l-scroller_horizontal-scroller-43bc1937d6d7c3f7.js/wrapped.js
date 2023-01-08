(function __HORCRUX__(){ "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27059],{565770:function(e,t,n){n.d(t,{Z:function(){return A}});var l={};n.r(l),n.d(l,{buttonLabel:function(){return p},controlsLabel:function(){return m},nextSlideButton:function(){return y},nextSlideScroll:function(){return f},prevSlideButton:function(){return v},prevSlideScroll:function(){return h}});var r=n(84505),a=n(436279),i=n(427010),o=n(894358),s=n.n(o),d=n(445895),c=n(752406),u=n(40656);const m=()=>"carousel controls",p=e=>u.Ys(e.isPaused,{true:"play",other:"pause"}),h=()=>"Previous carousel slide",f=()=>"Next carousel slide",y=e=>"Next Slide "+u.Ys(e.moduleName,{undefined:"of",other:"for "+e.moduleName})+" list",v=e=>"Previous Slide "+u.Ys(e.moduleName,{undefined:"of",other:"for "+e.moduleName})+" list";var x=n(739333),g=n(869193),b=n(330567);const S=e=>e?{borderColor:"transparent transparent transparent black",borderWidth:"5px 0px 5px 8px",padding:"0",borderStyle:"solid"}:{height:"9px",borderStyle:"double",borderColor:"transparent transparent transparent black",borderWidth:"0 0 0 7px"},w=e=>{let{carouselRef:t,count:n,activeIndex:a,handleSlideClick:i,isPaused:o,shouldAutoRotate:d,handleRotationClick:u,onScrollEnd:m,onScrollStart:p,povScrollbar:h,scrollbarContainerClassName:f,carouselControllerAriaHidden:y}=e;const{0:v,1:w}=(0,c.useState)(0),{0:N,1:E}=(0,c.useState)(0),{0:I,1:L}=(0,c.useState)(0),{0:C,1:P}=(0,c.useState)(void 0),j=(0,c.useRef)(null);(0,c.useEffect)(()=>{const e=()=>{j.current&&L(j.current.clientWidth),t.current&&E(t.current.clientWidth/t.current.scrollWidth)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,c.useEffect)(()=>{const e=()=>{t.current&&w(t.current.scrollLeft/t.current.scrollWidth)};return t.current&&(t.current.removeEventListener("scroll",e),t.current.addEventListener("scroll",e,{passive:!0})),()=>{t.current&&t.current.removeEventListener("scroll",e)}},[t.current,j.current]),(0,c.useEffect)(()=>{const e=e=>{if(t.current&&void 0!==C){const n=t.current.scrollWidth*C.scrubberLeftPercent;t.current.scrollLeft=n-(C.clientX-e.clientX)*(t.current.scrollWidth/I)}},n=()=>{P(void 0),m()};return window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n),void 0!==C&&(window.addEventListener("pointermove",e),window.addEventListener("pointerup",n)),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",n)}},[t.current,C]);const{isMobile:A}=(0,g.vP)(),k=N*I;let M=v*I;if(k<40){M-=(40-k)*(M/(I-k)||0)}M-=2;const T=Math.max(k,40)+4,F={className:"absolute b--none bg-transparent h-100 top-0"};return(0,b.jsxs)("div",{role:"navigation","aria-hidden":y,"aria-label":(0,r.m)(l,"controlsLabel"),"data-testid":"carousel-controller",className:s()("flex items-center",h?"absolute bg-white-80 bottom-1 br-pill":"dn-l"),style:h?{marginLeft:"50%",transform:"translateX(-50%)",width:A?184:343}:void 0,children:[h&&d&&(0,b.jsx)("button",{className:"bg-transparent flex bn items-center mh2 pa0",onClick:u,style:{height:24,width:24},"aria-label":(0,r.m)(l,"buttonLabel",{isPaused:o}),children:(0,b.jsx)("span",{className:"center",style:S(o)})}),(0,b.jsxs)("div",{className:s()("flex-auto flex flex-column justify-center pr3 relative",h&&!d&&"pa3",f),"data-testid":"scrollbar-container",style:{height:h?24:44},children:[(0,b.jsxs)("div",{className:"flex flex-column justify-center w-100 relative",ref:j,children:[(0,b.jsx)("div",{className:"absolute bg-near-white br-pill w-100",style:{height:2}}),(0,b.jsxs)("div",{className:"absolute b--none bg-transparent h-100 pa0 top-0 z-1",onPointerDown:e=>{p(),P({clientX:e.clientX,scrubberLeftPercent:v})},"data-testid":"carousel-scrubber",style:{left:M,touchAction:"none",width:T,top:-4},children:[(0,b.jsx)("span",{className:s()("db b--solid bg-gray br-pill bw1",C?"b--gray":"b--transparent"),style:{backgroundClip:"padding-box",height:4,boxSizing:"content-box"}}),(0,b.jsxs)(x.VisuallyHidden,{children:["Current carousel slide ",a+1," of ",n,"."]})]})]}),(0,b.jsx)("button",{...F,className:s()(F.className,"left-0 z-9"),"data-testid":"carousel-controller-next",onClick:()=>i(Math.max(a-1,0)),style:{width:Math.max(40,M+16)},"aria-label":(0,r.m)(l,"prevSlideScroll")}),(0,b.jsx)("button",{...F,className:s()(F.className,"right-0 z-9"),"data-testid":"carousel-controller-prev",onClick:()=>i(Math.min(a+1,n-1)),style:{width:Math.max(40,I-M-T+16)},"aria-label":(0,r.m)(l,"nextSlideScroll")})]})]})};var N=n(567222),E=n(147584),I=n(611621);const L=e=>{let{children:t,containerRef:n,currentSlide:l,moduleContext:r="",moduleLinkExtras:a={},moduleName:i="",moduleViewExtras:o={},nextButton:s,pageTitle:d,previousButton:u,slideMap:m,style:p,slideSequence:h,...f}=e;const{moduleProps:y,zone:v}=(0,c.useContext)(I.p),x=(0,c.useRef)({}),g=(0,c.useRef)({}),S=(0,c.useRef)({}),w=(0,c.useRef)(!1),L=(0,c.useRef)({}),C=(0,c.useRef)(),{0:P,1:j}=(0,c.useState)(!1),A=(0,E.wG)();return[o,a]=(0,N.U0)({pageTitle:d,moduleLinkExtras:a,moduleViewExtras:o}),(0,c.useEffect)(()=>{if(n.current&&"IntersectionObserver"in window){const e=new IntersectionObserver(e=>{e.forEach(e=>{j(e.isIntersecting)})},{threshold:.05});return e.observe(n.current),()=>e.disconnect()}},[]),(0,c.useEffect)(()=>{n.current&&void 0!==C.current&&(n.current.scrollLeft=C.current,C.current=void 0),L.current=p},[n,p]),(0,c.useEffect)(()=>{let e=0;x.current.length||m.forEach((t,n)=>{x.current["slide-"+n]={firstIndex:String(e),hasFired:!1},e+=t.length}),x.current.totalSlides=e},[m]),(0,c.useEffect)(()=>{var e;const t=x.current["slide-"+l],n=Object.keys(g.current).length&&{co:(null==(e=g.current[0])?void 0:e.co)||{zn:-1,nm:"error"}},a=h&&h.length?{im:{an:h[l]}}:{},s={pl:{tn:x.current.totalSlides,sn:l+1},...n,...a};if(P&&!t.hasFired){const e=Object.values(g.current).slice(parseInt(x.current["slide-"+l].firstIndex,10),parseInt(x.current.hasOwnProperty("slide-"+(l+1))?x.current["slide-"+(l+1)].firstIndex:"",10)||void 0),t={},n=(0,N.TF)(i);e.forEach(e=>{Object.keys(e).forEach(n=>{if(Array.isArray(e[n])){const l=t.hasOwnProperty(n)?t[n]:[];t[n]=[...l,...e[n]]}})}),A({context:r,name:n,action:w.current?"overlayView":"moduleView",payload:{...t,...s,...o}}),x.current["slide-"+l].hasFired=!0}},[l,x,P]),n.current&&L.current&&p&&"x mandatory"===p.scrollSnapType&&L.current.scrollSnapType!==p.scrollSnapType&&(C.current=n.current.scrollLeft),(0,b.jsxs)(N.fC.Provider,{value:{doAddToPayload:e=>{var t,n;const l=(null==(t=e.moduleElement.current)||null==(n=t.closest("[data-slide]"))?void 0:n.getAttribute("data-slide"))||"0";g.current[l]=g.current[l]||{};const{type:i,name:o,moduleId:s}=y||{};return v&&(g.current[l].co={zn:v,...(y&&{ty:i,id:s,nm:o})}),(0,N.nt)({...e,moduleContext:r,moduleLinkExtras:a,moduleViewStore:g.current[l],onLinkStore:S.current,sendBeacon:A})},setIsOverlay:()=>w.current=!0},children:[u,(0,b.jsx)("ul",{ref:n,style:p,...f,children:t}),s]})},C=e=>{const t=e.getElementsByTagName("a");return t.length?t:e.getElementsByTagName("button")},P=(0,c.memo)(e=>{let{children:t,classNameTile:n,inputRefs:l,disableTransition:r,transitioning:a}=e;return(0,b.jsx)(b.Fragment,{children:c.Children.map(t,(e,t)=>(0,b.jsx)("li",{className:s()("flex flex-column items-center",{transitioning:a&&!r},n),"data-slide":t,ref:e=>{l[t]=e},children:e},"carousel-tile-"+t))})});class j extends c.Component{constructor(e){if(super(e),this.hasAutoAdvanced=void 0,this.rotationInterval=void 0,this.rotateTimeout=void 0,this.inputRefs=void 0,this.carouselContainer=void 0,this.scrollCallback=void 0,this.mountTime=void 0,this.rotationTimeLapse=void 0,this.skipAnimation=void 0,!1===e.povScrollbar&&e.shouldAutoRotate)throw new Error("Error: `HorizontalScrollbar` can only have `shouldAutoRotate=true` when `povScrollbar` is not false.");this.state={currentSlide:0,isFocusPaused:!1,isPaused:!1,scrolling:!1,slideCount:0,slideMap:[],maxHeight:"fix-content",transitioning:!1,touched:!1,isAutoRotateReady:!1},this.carouselContainer=c.createRef(),this.inputRefs=[],this.hasAutoAdvanced=!1,this.rotationInterval=0,this.rotateTimeout=null,this.scrollCallback=(0,d.debounce)(()=>{this.calculateIndex()},100),this.mountTime=0,this.rotationTimeLapse=4e3,this.skipAnimation=!1,this.calculatePageCount=this.calculatePageCount.bind(this),this.handlePause=this.handlePause.bind(this),this.handlePlay=this.handlePlay.bind(this),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.handleScrollEnd=this.handleScrollEnd.bind(this),this.handleScrollStart=this.handleScrollStart.bind(this),this.setTargetSlide=this.setTargetSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.getSlideHeight=this.getSlideHeight.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleTouchCancel=this.handleTouchCancel.bind(this),this.stopTransition=this.stopTransition.bind(this)}componentDidMount(){var e,t,n,l;this.mountTime=Date.now(),null==(e=this.carouselContainer.current)||e.addEventListener("scroll",()=>{this.setState({transitioning:!0}),this.scrollCallback()},{passive:!0}),null==(t=this.carouselContainer.current)||t.addEventListener("touchstart",this.handleTouchStart,!1),null==(n=this.carouselContainer.current)||n.addEventListener("touchend",this.handleTouchEnd,!1),null==(l=this.carouselContainer.current)||l.addEventListener("touchcancel",this.handleTouchCancel,!1),!this.props.shouldAutoRotate||(this.props.delayHeroPovPlay||this.props.delayFirstHeroPovTime)&&void 0!==this.props.adsReady||this.handlePlay(),this.calculatePageCount(),window.addEventListener("resize",this.calculatePageCount)}componentDidUpdate(e,t){const{currentSlide:n,maxHeight:l,isAutoRotateReady:r,isPaused:a,isFocusPaused:i}=this.state,{children:o,shouldEnableDynamicHeight:s,scrollToIndex:d,shouldAutoRotate:c}=this.props;if((this.props.delayFirstHeroPovTime||this.props.delayHeroPovPlay)&&e.adsReady!==this.props.adsReady&&this.props.adsReady){const e=Date.now()-this.mountTime,t=this.props.delayFirstHeroPovTime?8e3:this.rotationTimeLapse,n=Math.max(t-e,0);this.skipAnimation=e>t,this.rotateTimeout=setTimeout(()=>{this.setState({isAutoRotateReady:!0}),this.rotateTimeout&&clearTimeout(this.rotateTimeout)},n)}if(!c||this.rotationInterval||!r||a||i||this.handlePlay(!0,this.skipAnimation),n!==t.currentSlide){const{onSlideChange:e}=this.props;e&&e(n),this.stopTransition()}if(this.shouldRecalculatePageCount(o,e.children)&&this.calculatePageCount(),s){const e=this.getSlideHeight(n);e!==l&&0!==e&&this.updateHeight(e)}if(void 0!==d&&e.scrollToIndex!==d){const e=Math.floor(d/this.state.slideMap[0].length);this.setTargetSlide(Math.min(e,this.state.slideMap.length-1))}}componentWillUnmount(){var e;window.removeEventListener("resize",this.calculatePageCount),null==(e=this.carouselContainer.current)||e.removeEventListener("scroll",this.scrollCallback),this.scrollCallback.clear(),this.rotationInterval&&clearInterval(this.rotationInterval),this.rotateTimeout&&clearTimeout(this.rotateTimeout)}updateHeight(e){this.setState({maxHeight:e})}calculatePageCount(){const{clientWidth:e=0}=this.carouselContainer.current||{},t=[[]];let n=0,l=e+1;const r=this.props.snapAlignTile||"start";let a=0;this.inputRefs.forEach((i,o)=>{if(i){const{width:s,x:d}=i.getBoundingClientRect();0===o&&(a=d);const c=d-a;let u="";0===o&&(u=r),c+s>l?(t.push([i]),n++,l=c+e,u=r):t[n].push(i),i.style.setProperty("scroll-snap-align",u)}}),this.setState({slideCount:t.length,slideMap:t})}handleTouchStart(){this.setState({transitioning:!0,touched:!0})}handleTouchEnd(){this.setState({touched:!1})}handleTouchCancel(){this.setState({touched:!1})}stopTransition(){this.setState(e=>{let{touched:t}=e;return{transitioning:t}})}getSlideHeight(e){let t=this.inputRefs[e],n=0;for(;1===t.children.length;){t=t.children[0];const e=t.getBoundingClientRect().height||0;e>n&&(n=e)}return n?n+20:0}shouldRecalculatePageCount(e,t){var n,l;return c.Children.count(e)!==c.Children.count(t)||(null==(n=c.Children.map(t,e=>null==e?void 0:e.key))?void 0:n.join())!==(null==(l=c.Children.map(e,e=>null==e?void 0:e.key))?void 0:l.join())}getIndex(e,t){if(this.carouselContainer.current){const{scrollLeft:l,scrollWidth:r}=this.carouselContainer.current;let a=e-1,i=0;for(let o=0;o<e;o++){var n;const s=null==(n=t[o][0])?void 0:n.offsetLeft;if(l<=s){const{shouldEnablePartialScrollSnap:t=!0}=this.props,n=s-i;a=t&&o>0&&o!==e-1&&n>0&&l-n/2<=i&&l+n+2<r?o-1:o;break}i=s}return a}return 0}calculateIndex(){this.hasAutoAdvanced?this.hasAutoAdvanced=!1:this.handlePause(),this.setState(e=>{let{slideCount:t,slideMap:n}=e;return{currentSlide:this.getIndex(t,n)}})}handlePause(){this.rotationInterval&&clearInterval(this.rotationInterval),this.setState({isPaused:!0})}handlePlay(e,t){void 0===e&&(e=!1),void 0===t&&(t=!1);const n=e=>{this.state.isPaused||this.state.isFocusPaused||this.nextSlide(!0,e)};e&&n(t),this.rotationInterval=setInterval(n,this.rotationTimeLapse),this.setState({isPaused:!1})}handleFocusIn(){this.setState({isFocusPaused:!0})}handleFocusOut(){this.setState({isFocusPaused:!1})}handleScrollEnd(){const e=this.getIndex(this.state.slideCount,this.state.slideMap);this.setTargetSlide(e,()=>this.setState({scrolling:!1}))}handleScrollStart(){this.setState({scrolling:!0})}setTargetSlide(e,t,n,l){if(void 0===l&&(l=!1),this.carouselContainer.current){var r;const a=null==(r=this.state.slideMap[e][0])?void 0:r.offsetLeft;if(t){const l=parseInt(a.toFixed(),10),r=()=>{var a;const i=(this.state.slideMap[0].length-this.state.slideMap[e].length)*(this.state.slideMap[e][0].offsetWidth+16)+48,o=Boolean(void 0!==(null==(a=this.carouselContainer.current)?void 0:a.scrollLeft)&&(n?this.carouselContainer.current.scrollLeft<=l:this.carouselContainer.current.scrollLeft>=l-i));this.carouselContainer.current&&o&&(this.carouselContainer.current.removeEventListener("scroll",r),t())};this.carouselContainer.current.addEventListener("scroll",r),r()}this.carouselContainer.current.scrollTo&&this.setState({transitioning:!0},()=>{var e;return null==(e=this.carouselContainer.current)?void 0:e.scrollTo({left:a,behavior:l?"auto":"smooth"})})}}nextSlide(e,t){if(this.carouselContainer.current){let n=this.state.currentSlide+1;this.state.slideMap[n]||(n=0),this.hasAutoAdvanced=e,this.setTargetSlide(n,void 0,void 0,t)}}render(){const{children:e,className:t,classNameTile:n="",shouldSnap:o=!0,shouldAutoRotate:d=!1,shouldSuppressPagination:c,shouldEnableDynamicWidth:u,moduleContext:m,moduleName:p,moduleViewExtras:h,moduleLinkExtras:f,nextLinkExtras:y,previousLinkExtras:v,isScrollArrowHidden:x=!1,onSlideChange:g,disableTransition:S=!0,povScrollbar:N=!1,scrollbarContainerClassName:E,showSmallNavButtons:I=!1,shouldEnableDynamicHeight:j=!1,shouldEnablePartialScrollSnap:A=!0,carouselControllerAriaHidden:k=!1,anchorNavButtonTopOffset:M,slideSequence:T,scrollToIndex:F,delayHeroPovPlay:O,delayFirstHeroPovTime:V,adsReady:R,unOrderedListStyle:B,snapAlignTile:D,...H}=this.props,_=!!d||N,{inputRefs:z}=this;return(0,b.jsxs)("div",{className:"flex flex-column justify-center relative",children:[(0,b.jsx)(L,{moduleViewExtras:h,moduleLinkExtras:f,moduleContext:m,moduleName:p,previousButton:!x&&!_&&(0,b.jsx)(i.ZP,{"aria-label":(0,r.m)(l,"prevSlideButton",{moduleName:p}),className:s()("absolute dn z-5 bg-white br-100 pa0 pointer",{"db-l":0!==this.state.currentSlide,"hidden-child":!c,"br-100 nav-control left-1":!I,"left-0":I,db:0!==this.state.currentSlide&&c}),"data-testid":"horizontal-scroller-previous",onLinkExtras:v,onLinkName:"horizontalScrollerPrevious",role:"button",style:{top:M||void 0},onClick:()=>this.setTargetSlide(this.state.currentSlide-1,()=>{var e,t;const n=this.state.currentSlide-1,l=this.state.slideMap[this.state.currentSlide].length===this.state.slideMap[n].length?this.state.slideMap[n].length-1:this.state.slideMap[this.state.currentSlide].length-1,r=this.state.slideMap[n][l];null==(e=C(r))||null==(t=e[0])||t.focus()},!0),children:(0,b.jsx)(a.J,{name:"ChevronLeft",className:s()({pa2:I}),style:I?void 0:{padding:12},size:"medium"})}),nextButton:!x&&!_&&(0,b.jsx)(i.ZP,{"aria-label":(0,r.m)(l,"nextSlideButton",{moduleName:p}),className:s()("absolute dn z-5 bg-white br-100 pa0 pointer",{"db-l":this.state.currentSlide+1!==this.state.slideCount,"br-100 nav-control right-1":!I,"right-0":I,db:this.state.currentSlide+1!==this.state.slideCount&&c}),"data-testid":"horizontal-scroller-next",onLinkExtras:y,onLinkName:"horizontalScrollerNext",role:"button",style:M?{top:M}:void 0,onClick:()=>this.setTargetSlide(this.state.currentSlide+1,()=>{const e=this.state.currentSlide+1;if(this.state.slideMap[e].length>0){var t,n;const l=this.state.slideMap[e][0];null==(t=C(l))||null==(n=t[0])||n.focus()}}),children:(0,b.jsx)(a.J,{name:"ChevronRight",className:s()({pa2:I}),style:I?void 0:{padding:12},size:"medium"})}),currentSlide:this.state.currentSlide,slideMap:this.state.slideMap,className:s()("list ma0 pl0 overflow-x-scroll hidesb hidesb-wk relative overflow-y-hidden "+t,{"carousel-height-transition":j}),"data-testid":"carousel-container",containerRef:this.carouselContainer,style:{display:u?"flex":"grid",gridAutoFlow:"column",scrollSnapType:o&&!this.state.scrolling?"x mandatory":"",maxHeight:j?this.state.maxHeight:"fit-content",...B},onFocus:this.handleFocusIn,onBlur:this.handleFocusOut,onMouseOver:this.handleFocusIn,onMouseOut:this.handleFocusOut,slideSequence:T,...H,children:(0,b.jsx)(P,{classNameTile:n,inputRefs:z,shouldAutoRotate:d,disableTransition:S,transitioning:this.state.transitioning,children:e})}),(_||d)&&(0,b.jsx)("div",{className:s()({dn:c}),children:this.state.slideCount>1&&(0,b.jsx)(w,{carouselRef:this.carouselContainer,count:this.state.slideCount,activeIndex:this.state.currentSlide,handleSlideClick:e=>{this.setTargetSlide(e)},handleRotationClick:this.state.isPaused?this.handlePlay:this.handlePause,isPaused:this.state.isPaused,onScrollEnd:this.handleScrollEnd,onScrollStart:this.handleScrollStart,povScrollbar:_,scrollbarContainerClassName:E,shouldAutoRotate:d,carouselControllerAriaHidden:k})})]})}}var A=j}}]); })();