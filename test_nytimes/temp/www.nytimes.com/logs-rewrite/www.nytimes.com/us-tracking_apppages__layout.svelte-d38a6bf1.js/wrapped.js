import{S as D,i as P,s as q,e as w,c as k,a as y,d as m,b as $,g as b,I as E,E as S,f as U,k as I,l as j,m as N,v as se,t as W,h as B,j as oe,J as fe,w as V,x as R,y as T,q as d,o as h,B as L,p as H,K as x,n as J,L as ne,M as K,N as ae,O as le,P as ie}from"../chunks/index-fdbdf6c6.js";import{d as ce}from"../chunks/env-a8912701.js";import{a as ue,b as _e}from"../chunks/paths-396f020f.js";import{n as z,T as pe,p as me,s as de}from"../chunks/index-8d3d54f7.js";/* empty css                                                                     */import{l as G}from"../chunks/yootils.es-5f329d3a.js";import"../chunks/index-b834fbd9.js";import"../chunks/singletons-d1fb5791.js";function he(l){let t,s,e=l[0].app_tab_sunset_message_body+"";return{c(){t=w("div"),s=w("p"),this.h()},l(n){t=k(n,"DIV",{class:!0});var a=y(t);s=k(a,"P",{class:!0});var u=y(s);u.forEach(m),a.forEach(m),this.h()},h(){$(s,"class","svelte-1dcjbes"),$(t,"class","full-span app-tab-message svelte-1dcjbes")},m(n,a){b(n,t,a),E(t,s),s.innerHTML=e},p(n,[a]){a&1&&e!==(e=n[0].app_tab_sunset_message_body+"")&&(s.innerHTML=e)},i:S,o:S,d(n){n&&m(t)}}}function ge(l,t,s){let{text:e}=t;return l.$$set=n=>{"text"in n&&s(0,e=n.text)},[e]}class ve extends D{constructor(t){super(),P(this,t,ge,he,q,{text:0})}}function Q(l){let t,s;return{c(){t=w("div"),s=w("div"),this.h()},l(e){t=k(e,"DIV",{class:!0});var n=y(t);s=k(n,"DIV",{class:!0,style:!0}),y(s).forEach(m),n.forEach(m),this.h()},h(){$(s,"class","progress svelte-1wt7jrm"),U(s,"width",l[0]*100+"%"),$(t,"class","progress-container svelte-1wt7jrm")},m(e,n){b(e,t,n),E(t,s)},p(e,n){n&1&&U(s,"width",e[0]*100+"%")},d(e){e&&m(t)}}}function X(l){let t;return{c(){t=w("div"),this.h()},l(s){t=k(s,"DIV",{class:!0}),y(t).forEach(m),this.h()},h(){$(t,"class","fade svelte-1wt7jrm")},m(s,e){b(s,t,e)},d(s){s&&m(t)}}}function be(l){let t,s,e=l[1]&&Q(l),n=l[0]>=.4&&X();return{c(){e&&e.c(),t=I(),n&&n.c(),s=j()},l(a){e&&e.l(a),t=N(a),n&&n.l(a),s=j()},m(a,u){e&&e.m(a,u),b(a,t,u),n&&n.m(a,u),b(a,s,u)},p(a,[u]){a[1]?e?e.p(a,u):(e=Q(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),a[0]>=.4?n||(n=X(),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},i:S,o:S,d(a){e&&e.d(a),a&&m(t),n&&n.d(a),a&&m(s)}}}function we(l,t,s){let e=0,n=!1;return se(()=>{function a(){s(1,n=!0),s(0,e+=.1);const u=1-e;u>.15&&setTimeout(a,500/u)}setTimeout(a,250)}),[e,n]}class ke extends D{constructor(t){super(),P(this,t,we,be,q,{})}}function ye(l){let t,s,e,n=Math.round(l[1])+"",a,u,_;return{c(){t=w("div"),s=w("p"),e=W("fps: "),a=W(n),u=I(),_=w("canvas"),this.h()},l(c){t=k(c,"DIV",{class:!0});var i=y(t);s=k(i,"P",{class:!0});var o=y(s);e=B(o,"fps: "),a=B(o,n),o.forEach(m),u=N(i),_=k(i,"CANVAS",{class:!0}),y(_).forEach(m),i.forEach(m),this.h()},h(){$(s,"class","svelte-1hlh8gs"),$(_,"class","svelte-1hlh8gs"),$(t,"class","fps-meter svelte-1hlh8gs")},m(c,i){b(c,t,i),E(t,s),E(s,e),E(s,a),E(t,u),E(t,_),l[2](_)},p(c,[i]){i&2&&n!==(n=Math.round(c[1])+"")&&oe(a,n)},i:S,o:S,d(c){c&&m(t),l[2](null)}}}function $e(l,t,s){let e,n=0,a=0;const u=Array(60).fill(0);function _(){let i=0,o;for(o=0;o<u.length&&(i+=u[o],!(i>1e3));o+=1);return o}se(()=>{const i=e.getContext("2d"),o=e.offsetWidth*devicePixelRatio,f=e.offsetHeight*devicePixelRatio,r={x:G([0,1e3],[0,o]),y:G([0,60],[0,f])};s(0,e.width=o,e),s(0,e.height=f,e),i.fillStyle="rgba(0,200,0, 0.5)";let p=Date.now(),g=requestAnimationFrame(function F(){g=requestAnimationFrame(F);const M=Date.now(),A=M-p;n=1e3/A,u.unshift(A),u.pop(),s(1,a=_());const v=Math.round(r.x(A)),O=Math.round(r.y(n)),re=i.getImageData(0,0,o,f);i.putImageData(re,-v,0),i.clearRect(o-v,0,o,f),i.fillRect(o-v,f-O,v,O),p=M});return()=>{cancelAnimationFrame(g)}});function c(i){fe[i?"unshift":"push"](()=>{e=i,s(0,e)})}return[e,a,c]}class Ee extends D{constructor(t){super(),P(this,t,$e,ye,q,{})}}const Ae=l=>({is_app:l&2}),Y=l=>({is_app:l[1]}),Ie=l=>({is_app:l&2}),Z=l=>({is_app:l[1]});function Ne(l){let t,s,e,n,a,u,_,c=l[4]&&ee(),i=l[1]&&te(l);a=new pe({props:{navigation:l[0]}});const o=l[7].default,f=ne(o,l,l[6],Y);return{c(){c&&c.c(),t=I(),i&&i.c(),s=I(),e=w("main"),n=w("div"),V(a.$$.fragment),u=I(),f&&f.c(),this.h()},l(r){c&&c.l(r),t=N(r),i&&i.l(r),s=N(r),e=k(r,"MAIN",{class:!0});var p=y(e);n=k(p,"DIV",{class:!0});var g=y(n);R(a.$$.fragment,g),g.forEach(m),u=N(p),f&&f.l(p),p.forEach(m),this.h()},h(){$(n,"class","g-column"),$(e,"class","covid-tracker"),K(e,"is-app-tab",l[1])},m(r,p){c&&c.m(r,p),b(r,t,p),i&&i.m(r,p),b(r,s,p),b(r,e,p),E(e,n),T(a,n,null),E(e,u),f&&f.m(e,null),_=!0},p(r,p){r[4]?c?p&16&&d(c,1):(c=ee(),c.c(),d(c,1),c.m(t.parentNode,t)):c&&(J(),h(c,1,1,()=>{c=null}),H()),r[1]?i?(i.p(r,p),p&2&&d(i,1)):(i=te(r),i.c(),d(i,1),i.m(s.parentNode,s)):i&&(J(),h(i,1,1,()=>{i=null}),H());const g={};p&1&&(g.navigation=r[0]),a.$set(g),f&&f.p&&(!_||p&66)&&ae(f,o,r,r[6],_?ie(o,r[6],p,Ae):le(r[6]),Y),p&2&&K(e,"is-app-tab",r[1])},i(r){_||(d(c),d(i),d(a.$$.fragment,r),d(f,r),_=!0)},o(r){h(c),h(i),h(a.$$.fragment,r),h(f,r),_=!1},d(r){c&&c.d(r),r&&m(t),i&&i.d(r),r&&m(s),r&&m(e),L(a),f&&f.d(r)}}}function Se(l){let t;const s=l[7].default,e=ne(s,l,l[6],Z);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,a){e&&e.m(n,a),t=!0},p(n,a){e&&e.p&&(!t||a&66)&&ae(e,s,n,n[6],t?ie(s,n[6],a,Ie):le(n[6]),Z)},i(n){t||(d(e,n),t=!0)},o(n){h(e,n),t=!1},d(n){e&&e.d(n)}}}function ee(l){let t,s;return t=new ke({}),{c(){V(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),s=!0},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function te(l){let t,s;return t=new ve({props:{text:l[2]}}),{c(){V(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),s=!0},p(e,n){const a={};n&4&&(a.text=e[2]),t.$set(a)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function Me(l){let t,s;return t=new Ee({}),{c(){V(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),s=!0},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function je(l){let t,s,e,n,a;const u=[Se,Ne],_=[];function c(o,f){return o[3].embedded?0:1}t=c(l),s=_[t]=u[t](l);let i=l[5]&&Me();return{c(){s.c(),e=I(),i&&i.c(),n=j()},l(o){s.l(o),e=N(o),i&&i.l(o),n=j()},m(o,f){_[t].m(o,f),b(o,e,f),i&&i.m(o,f),b(o,n,f),a=!0},p(o,[f]){let r=t;t=c(o),t===r?_[t].p(o,f):(J(),h(_[r],1,1,()=>{_[r]=null}),H(),s=_[t],s?s.p(o,f):(s=_[t]=u[t](o),s.c()),d(s,1),s.m(e.parentNode,e))},i(o){a||(d(s),d(i),a=!0)},o(o){h(s),h(i),a=!1},d(o){_[t].d(o),o&&m(e),i&&i.d(o),o&&m(n)}}}let C;async function Ce({fetch:l}){C=C||new URLSearchParams(location.search).get("nyttab")==="covid";const t=n=>l(`${ue}/${n}`).then(async a=>{if(a.ok)try{return await a.json()}catch(u){throw new Error(`Error loading JSON (${n}): ${u.message}`)}throw new Error(`Error loading JSON (${n}): ${a.status}`)}),[s,e]=await Promise.all([t("page/navigation.json"),t("data/text.json")]);return{props:{navigation:s,text:e,is_app:C},stuff:{json:t}}}function De(l,t,s){let e,n;x(l,me,f=>s(8,f)),x(l,de,f=>s(3,e=f)),x(l,z,f=>s(4,n=f));let{$$slots:a={},$$scope:u}=t,{navigation:_}=t,{is_app:c}=t,{text:i}=t;{const f=document.querySelector("link[rel=canonical]");let r=null,p=document.querySelector('meta[name="pubp_event_id"]');if(z.subscribe(g=>{g?r=window.location.href:r&&setTimeout(()=>{f.href=window.location.href,p&&(p.remove(),p=null),window==null||window.dataLayer.push({event:"trackVirtualPage",asset:{url:window.location.href},referrer:{url:r}}),window!=null&&window.AdSlot4.refreshAds&&window.AdSlot4.refreshAds()})}),!e.embedded){const g=document.querySelector(".covid-tracker-wrapper"),{href:F}=new URL(_e,document.baseURI),M=document.querySelectorAll("a");for(let A=0;A<M.length;A+=1){const v=M[A];v.href.startsWith(F)&&!g.contains(v)&&(v.rel=v.rel.includes("external")?v.rel:v.rel?`${v.rel} external`:"external")}}}const o=ce;return l.$$set=f=>{"navigation"in f&&s(0,_=f.navigation),"is_app"in f&&s(1,c=f.is_app),"text"in f&&s(2,i=f.text),"$$scope"in f&&s(6,u=f.$$scope)},[_,c,i,e,n,o,u,a]}class He extends D{constructor(t){super(),P(this,t,De,je,q,{navigation:0,is_app:1,text:2})}}export{He as default,Ce as load};