(()=>{"use strict";var e={2220:(e,s,t)=>{var r=t(2466),i=t(4840),a=t(9254),l=t(4340),d=t(2384),c=t(598),o=t(6621);const n=document.querySelector("#time"),b=document.querySelector("#start"),u=document.querySelector("#stop"),p=document.querySelector("#wait"),h=document.querySelector("#reset"),f=(0,r.F)(1e3),m=(0,i.R)(b,"click"),v=(0,i.R)(u,"click"),L=(0,i.R)(p,"click"),x=(0,i.R)(h,"click"),y=e=>{n.textContent=0===e?"00:00:00":time};y(0);let k=!1,R=!1,g=0;k||(u.classList.add("disabled"),p.classList.add("disabled"),h.classList.add("disabled"));const q=()=>{g++;let e=Math.floor(g/3600),s=Math.floor(g/60)%60,t=g%60;n.textContent=(e<=9?"0"+e:e)+":"+(s<=9?"0"+s:s)+":"+(t<=9?"0"+t:t)};m.subscribe((()=>{k||R||(k=!0,k&&(u.classList.remove("disabled"),p.classList.remove("disabled"),h.classList.remove("disabled")),f.pipe((0,a.R)(v)).pipe((0,a.R)(S)).subscribe((()=>{q()})))}));const S=L.pipe((0,l.f)(L.pipe((0,d.b)(300))),(0,c.U)((e=>e.length)),(0,o.h)((e=>e>=2)));S.subscribe((()=>{k&&!R?(R=!0,R&&(b.classList.add("disabled"),u.classList.add("disabled"),h.classList.add("disabled"))):(R=!1,f.pipe((0,a.R)(v)).pipe((0,a.R)(S)).subscribe((()=>{q()})),R||(b.classList.remove("disabled"),u.classList.remove("disabled"),h.classList.remove("disabled")))})),v.subscribe((()=>{k=!1,g=0,y(0),k||(u.classList.add("disabled"),p.classList.add("disabled"),h.classList.add("disabled"))})),x.subscribe((()=>{g=0,y(0)}))}},s={};function t(r){if(s[r])return s[r].exports;var i=s[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.x=e=>{},t.d=(e,s)=>{for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={179:0},s=[[1202,844],[2220,844]],r=e=>{},i=(i,a)=>{for(var l,d,[c,o,n,b]=a,u=0,p=[];u<c.length;u++)d=c[u],t.o(e,d)&&e[d]&&p.push(e[d][0]),e[d]=0;for(l in o)t.o(o,l)&&(t.m[l]=o[l]);for(n&&n(t),i&&i(a);p.length;)p.shift()();return b&&s.push.apply(s,b),r()},a=self.webpackChunk=self.webpackChunk||[];function l(){for(var r,i=0;i<s.length;i++){for(var a=s[i],l=!0,d=1;d<a.length;d++){var c=a[d];0!==e[c]&&(l=!1)}l&&(s.splice(i--,1),r=t(t.s=a[0]))}return 0===s.length&&(t.x(),t.x=e=>{}),r}a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a));var d=t.x;t.x=()=>(t.x=d||(e=>{}),(r=l)())})();t.x()})();