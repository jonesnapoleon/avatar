(this.webpackJsonplabpro=this.webpackJsonplabpro||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(39),l=n.n(i),s=n(63),u=n(25),d=n(38),f=n(160),m=n(159),g=n(79),p=n(155),h=n(156),b=n(157),k=n(152),v=n(161),y=n(85),O=n(151),S=(n(76),n(53)),j=n(54),w=function(e){var t=e.children,n=Object(a.useState)("dark"===localStorage.getItem("themeMode")?"dark":"light"),o=Object(d.a)(n,2),c=o[0],i=o[1],l=Object(v.a)(Object(y.a)({typography:{fontFamily:"Roboto, sans-serif"},palette:{primary:"dark"===c?S.a:j.a,background:"dark"===c?{default:"black"}:{default:"white"},type:c}}));return Object(a.useEffect)((function(){return localStorage.setItem("themeMode",c)}),[c]),r.a.createElement(O.a,{theme:l},r.a.createElement(k.a,null),r.a.createElement(p.a,{onClick:function(){return i((function(e){return"dark"===e?"light":"dark"}))}},"light"!==c?r.a.createElement(h.a,{className:"nav-icon"}):r.a.createElement(b.a,{className:"nav-icon"})),t)},E=n(55),I=n(158),x={nodeHighlightBehavior:!0,node:{size:120,labelProperty:"name"},link:{highlightColor:"gray"}},N={fire:S.a[700],water:j.a[700],earth:E.a[700],air:I.a[700]},C=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({nodes:localStorage.getItem("nodes")?JSON.parse(localStorage.getItem("nodes")):[],links:localStorage.getItem("links")?JSON.parse(localStorage.getItem("links")):[]}),i=Object(d.a)(c,2),p=i[0],h=i[1],b=function(e){var t=p;t.nodes=Array.from(new Set([].concat(Object(u.a)(t.nodes),[{id:e.id,name:e.name,element:e.element}],Object(u.a)(e.friends)))),t.nodes=t.nodes.filter((function(e,n){return n===t.nodes.findIndex((function(t){return e.id===t.id}))})),t.nodes.map((function(e){return e.color=N[e.element]})),t.nodes.map((function(e){return e.highlightStrokeColor=N[e.element]})),t.nodes.map((function(e){return e.fontColor=N[e.element]}));var n=e.friends.map((function(t){return t.id!==e.id?{source:e.id,target:t.id}:null})),a=e.friends.map((function(t){return t.id!==e.id?{source:t.id,target:e.id}:null}));t.links=Array.from(new Set([].concat(Object(u.a)(t.links),Object(u.a)(n),Object(u.a)(a)))).filter((function(e){return null!==e})),t.links=t.links.filter((function(e,n){return n===t.links.findIndex((function(t){return e.source===t.source&&e.target===t.target}))})),localStorage.setItem("nodes",JSON.stringify(t.nodes)),localStorage.setItem("links",JSON.stringify(t.links)),h(t)},k=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.includes(t)){e.next=3;break}return alert("Fetched before!"),e.abrupt("return");case 3:return e.next=5,fetch("https://avatar.labpro.dev/friends/".concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:if(200===(r=e.sent).status){e.next=12;break}return alert(r.message),e.abrupt("return");case 12:b(r.payload),o([].concat(Object(u.a)(n),[r.payload.id]));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="Enter"===t.key,!e.t0){e.next=5;break}return e.next=4,k(t.target.value.trim());case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w,null,r.a.createElement(f.a,{label:"Query ID",onKeyPress:v}),p&&p.nodes.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{color:"primary",onClick:function(){h({nodes:[],links:[]}),localStorage.removeItem("nodes"),localStorage.removeItem("links")}},"Remove all"),r.a.createElement(g.Graph,{id:"graph-id",data:p,config:x,onDoubleClickNode:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,n){},97:function(e,t,n){e.exports=n(117)}},[[97,1,2]]]);