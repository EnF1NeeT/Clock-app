!function(e){function t(t){for(var o,c,i=t[0],a=t[1],l=t[2],u=0,g=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&g.push(s[c][0]),s[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(d&&d(t);g.length;)g.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},s={1:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=a;r.push([2,2]),n()}([,,function(e,t,n){n(3),e.exports=n(4)},function(e,t,n){"use strict";n.r(t);n(5);const o=document.getElementById("quote"),s=document.getElementById("btn-more"),r=document.getElementById("expand-time"),c=document.getElementById("date-container"),i=document.getElementById("quote-content"),a=document.getElementById("quote-author"),l=document.getElementById("regenerate-quote"),d=document.getElementById("greeting"),u=document.getElementById("current-time"),g=document.getElementById("currnet-time-zone"),m=document.getElementById("day-of-the-year"),p=document.getElementById("day-of-the-week"),f=document.getElementById("week-number"),y=document.getElementById("current-city");let h,v,x;s.addEventListener("click",(function(e){e.preventDefault(),o.classList.contains("d-none")?(r.classList.add("d-none"),o.classList.remove("d-none"),c.classList.remove("pt-5"),s.innerHTML='\n    more\n    <svg\n      id="svg"\n      width="40"\n      height="40"\n      viewBox="0 0 40 40"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <circle cx="20" cy="20" r="20" />\n      <path d="M14 17L20 23L26 17" stroke="white" stroke-width="2" />\n    </svg>'):(r.classList.remove("d-none"),o.classList.add("d-none"),c.classList.add("pt-5"),s.innerHTML='\n  less\n    <svg\n        id="svg"\n        width="40"\n        height="40"\n        viewBox="0 0 40 40"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n        >\n        <circle cx="20" cy="20" r="20" />\n        <path d="M14 23L20 17L26 23" stroke="white" stroke-width="2" />\n    </svg>')}));const E=function(){const e=new XMLHttpRequest;e.open("GET","https://api.quotable.io/random"),e.send(),e.addEventListener("load",(function(){const e=JSON.parse(this.responseText);i.textContent=e.content,a.textContent=e.author}))};E(),l.addEventListener("click",E);!function(){const e=new XMLHttpRequest;e.open("GET","http://worldtimeapi.org/api/ip"),e.send(),e.addEventListener("load",(function(){const e=JSON.parse(this.responseText);u.textContent=e.datetime.slice(11,16),g.textContent=e.timezone,m.textContent=e.day_of_year,p.textContent=e.day_of_week,f.textContent=e.week_number,function(e){x="";const t="./assets/img/sun.svg";x=e>=5&&e<12?`<img src="${t}" alt="sun" /> Good morning, IT’S CURRENTLY`:e>=12&&e<18?`<img src="${t}" alt="sun" />  Good afternoon, IT’S CURRENTLY`:'<img src="./assets/img/moon.svg" alt="moon" />  Good evening, IT’S CURRENTLY',d.textContent="",d.insertAdjacentHTML("afterbegin",x)}(u.textContent.slice(0,2)),L(u.textContent.slice(0,2))}))}(),navigator.geolocation.getCurrentPosition((function(e){console.log(e),h=e.coords.latitude,v=e.coords.longitude,console.log("Latitude:",h),console.log("Longitude:",v),function(e,t){fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${e},${t}&key=AIzaSyCApnyTd1IaheE-DGFE4gspB0xLrf8kix0`).then(e=>e.json()).then(e=>{const t=e.results;if(t.length>0){const e=t[0].address_components.find(e=>e.types.includes("locality"));if(e){console.log(e);const t=e.long_name;console.log("City:",t),y.textContent="In "+t}}else console.log("No results found.")}).catch(e=>{console.error("Error:",e)})}(h,v)}),(function(e){console.log("Error:",e.message)}));const L=function(e){e>=6&&e<18?(r.style.backgroundColor="rgba(255, 255, 255, 0.55)",document.body.style.backgroundImage="url('./assets/img/daytime.png')",g.parentElement.classList.add("text-secondary"),p.parentElement.classList.add("text-secondary"),m.parentElement.classList.add("text-secondary"),f.parentElement.classList.add("text-secondary")):(e>=18||e<6)&&(r.style.backgroundColor="rgba(3, 3, 3, 0.55);",document.body.style.backgroundImage="url('./assets/img/nighttime.png')",g.parentElement.classList.remove("text-secondary"),p.parentElement.classList.remove("text-secondary"),m.parentElement.classList.remove("text-secondary"),f.parentElement.classList.remove("text-secondary"))}},function(e,t,n){}]);