(this.webpackJsonplabpro=this.webpackJsonplabpro||[]).push([[0],{47:function(e,t,n){e.exports=n(57)},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=n(27),s=n.n(o),u=n(28),l=n(34),f=n(24),d=n(22),h=(n(53),n(88)),v=n(89),m=function(){var e=document.getElementsByClassName("viz")[0];if(e)for(var t=e.lastElementChild;t.classList.contains("line");)e.removeChild(t),t=e.lastElementChild},p=function(e,t,n){var a,r=Object(f.a)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value;if(Math.abs(c[0]-t)<3&&Math.abs(c[1]-n)<3)return!1}}catch(i){r.e(i)}finally{r.f()}return!0},b=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},g=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),g=o[0],j=o[1],y=Object(a.useState)([]),O=Object(d.a)(y,2),E=O[0],x=O[1],w=Object(a.useState)([]),k=Object(d.a)(w,2),S=k[0],M=k[1],C=Object(a.useState)([]),B=Object(d.a)(C,2),z=B[0],N=B[1];Object(a.useEffect)((function(){var e=[];S.forEach((function(t){var n,a;do{n=b(1,20),a=b(1,20)}while(!p(e,n,a));e.push([n,a])})),N(e)}),[E,S]);var F=function(e){var t=S;t.includes(e.id)||t.push(e.id),e.friends.forEach((function(e){t.includes(e.id)||t.push(e.id)})),M(t)},I=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!E.includes(t)){e.next=4;break}return alert("Fetched before!"),e.abrupt("return");case 4:return e.next=6,fetch("https://avatar.labpro.dev/friends/".concat(t));case 6:return a=e.sent,e.next=9,a.json();case 9:200===(r=e.sent).status?(c([].concat(Object(u.a)(n),[r.payload])),x([].concat(Object(u.a)(E),[r.payload.id])),F(r.payload)):alert(r.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.trim(),!E.includes(t)){e.next=4;break}return alert("Fetched before!"),e.abrupt("return");case 4:return e.next=6,fetch("https://avatar.labpro.dev/friends/".concat(t));case 6:return a=e.sent,e.next=9,a.json();case 9:200===(r=e.sent).status?(c([].concat(Object(u.a)(n),[r.payload])),x([].concat(Object(u.a)(E),[r.payload.id])),F(r.payload)):alert(r.message);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){S.length>0&&(m(),n.forEach((function(e){var t=S.indexOf(e.id),n=z[t];e.friends.forEach((function(e){var t=S.indexOf(e.id),a=z[t];try{!function(e,t,n,a,r){var c=Math.sqrt((e-n)*(e-n)+(t-a)*(t-a)),i=(e+n)/2,o=(t+a)/2,s=180*Math.atan2(t-a,e-n)/Math.PI,u=document.getElementsByClassName("viz")[0];if(u){var l="<div class='line' style=\"z-index: -200; width: ".concat(c,"px; background: ").concat(r?"var(--ternary)":"green",";  margin-top: ").concat(o,"px; margin-left: ").concat(i-c/2,"px; transform: rotate(").concat(s,'deg); "></div>');u.innerHTML+=l}}(60*n[0],20*n[1],60*a[0],20*a[1],!0)}catch(r){m()}}))})))}),[n,z,S]),r.a.createElement("main",{id:"girlfriends"},r.a.createElement(h.a,{label:"Query ID",type:"number",onChange:function(e){return j(e.target.value)},value:g}),r.a.createElement(v.a,{variant:"contained",onClick:L},"Fetch"),r.a.createElement("div",{className:"viz"},E.length>0&&S.map((function(e){var t,a=Object(f.a)(n);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(String(r.id)===String(e))return Object.assign({},r);var c,i=Object(f.a)(r.friends);try{for(i.s();!(c=i.n()).done;){var o=c.value;if(String(o.id)===String(e))return Object.assign({},o)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){a.e(s)}finally{a.f()}})).map((function(e,t){return z&&z[t][0]&&z[t][1]&&r.a.createElement("div",{key:e.id,onClick:function(){return I(e.id)},className:E.includes(e.id)?"dot king":"dot",id:"id-"+t,style:{marginLeft:60*z[t][0],marginTop:20*z[t][1],marginBottom:3}},e.name)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.ec03cba8.chunk.js.map