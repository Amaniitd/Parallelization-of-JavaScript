(function __HORCRUX__(){ "use strict";(window.self.webpackChunk_N_E=window.self.webpackChunk_N_E||[]).push([[59647],{52628:function(e,n,t){t.d(n,{w:function(){return N}});var l={};t.r(l),t.d(l,{minsLeft:function(){return p},waitTime:function(){return u}});var r=t(739333),a=t(84505),i=t(436279),o=t(894358),s=t.n(o),d=t(752406),c=t(491288),m=t(40656);const u=e=>"Estimated wait time "+e.minutes+m.Ho(e.minutes,0,c.en,{"1":"min",other:"mins"}),p=e=>e.minutes+" "+m.Ho(e.minutes,0,c.en,{"1":"minute",other:"minutes"})+" "+m.Ys(e.addonMessage,{undefined:"left to buy your item",other:e.addonMessage});var y=t(414639),f=t(53227),h=t(330567);const x={DEFAULT:{backgroundColor:"bg-gold",fontColor:"black"},WARNING:{backgroundColor:"bg-red",fontColor:"white"},EXPIRED:{backgroundColor:"bg-near-white",fontColor:"black"}},w={fontSize:".625rem",verticalAlign:"-.01875em",marginTop:"2px",marginRight:"2px"},g=e=>{const{timeUnits:n,showClockIcon:t=!0}=e;return(0,h.jsxs)("div",{className:s()("flex lh-copy f5 br1 justify-center","bg-washed-blue","black"),style:{width:"61px"},"data-testid":"unit-timer",children:[t&&(0,h.jsx)(i.J,{name:"Clock",title:"timer",className:"mr1 mt1"}),(0,h.jsx)("span",{"aria-hidden":!0,className:s()("b"),children:0===n.minutes?n.minutes+1+"min":n.minutes+1+"mins"}),(0,h.jsx)(r.VisuallyHidden,{role:"timer","aria-live":"assertive","aria-atomic":"true","aria-relevant":"all",children:(0,a.m)(l,"waitTime",{minutes:n.minutes+1})})]})},b=e=>{const{timeUnits:n,timerState:t,showClockIcon:o=!0,size:d,ariaLabelAddOnMessage:c}=e,{backgroundColor:m,fontColor:u}=x[t];let p=o?"75px":"52px";"small"===d&&(p=o?"45px":"35px");const y="small"===d;return(0,h.jsxs)("div",{className:s()("flex lh-copy br1 justify-center",m,u,{f5:!y},{f8:y}),style:{width:p},"data-testid":"queue-timer",children:[o&&(0,h.jsx)(i.J,{name:"Clock",title:"timer",className:s()({"mr1 mt1":!y}),style:y?w:{}}),(0,h.jsxs)("span",{"aria-hidden":!0,className:"b",children:[String(n.minutes).padStart(2,"0"),":",String(n.seconds).padStart(2,"0")]}),(0,h.jsx)(r.VisuallyHidden,{role:"timer","aria-live":"off","aria-atomic":"true","aria-relevant":"all",children:(0,a.m)(l,"minsLeft",{minutes:n.minutes,addonMessage:c})})]})},N=e=>{const{endTime:n,onTimeChange:t,ticketState:l="valid",showClockIcon:r,className:a,size:i="default",ariaLabelAddOnMessage:o}=e,{timeRemainingInSec:s}=(0,y.A)(n.getTime()),c=(0,f.E3)(s),m=0===c.minutes&&0===c.seconds?"EXPIRED":c.minutes<2?"WARNING":"DEFAULT",{0:u,1:p}=(0,d.useState)(m);return(0,d.useEffect)(()=>{t&&t(s),0===c.minutes&&0===c.seconds?p("EXPIRED"):c.minutes>=2?p("DEFAULT"):p("WARNING")},[c,s,t]),(0,h.jsxs)("div",{className:a,children:[("pending"===l||"paused"===l)&&(0,h.jsx)(g,{timeUnits:c,showClockIcon:r}),"valid"===l&&(0,h.jsx)(b,{timeUnits:c,timerState:u,showClockIcon:r,size:i,ariaLabelAddOnMessage:o})]})}}}]); })();