(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{8716:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diplo/[...doc]",function(){return r(6705)}])},8506:function(e,n,r){"use strict";var t=r(5893),o=r(8093),i=r(8527),l=r(7649),c=r(6671);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){s(e,n,r[n])}))}return e}var a={ul:i.QI,li:i.HC,p:i.xv,Center:i.M5,gray:function(e){var n=e.children;e.className;return(0,t.jsx)(i.xv,{color:"GrayText",children:n})},code:function(e){var n=e.children,r=e.className;return(0,t.jsx)(l.Z,{style:c.VA,customStyle:{backgroundColor:"none",borderRadius:4,fontSize:13,marginBottom:"1em",marginTop:"1em",overflowX:"auto",WebkitOverflowScrolling:"touch"},language:null===r||void 0===r?void 0:r.replace(/language-/g,""),children:n})},a:function(e){var n=e.children,r=e.href;return(0,t.jsx)(i.rU,{color:"green.300",href:r,children:(0,t.jsx)(i.xv,{as:"u",children:n})})},h4:function(e){var n=e.children;return(0,t.jsx)(i.xv,{variant:"h4",fontSize:"large",children:n})},h3:function(e){var n=e.children;return(0,t.jsx)(i.xv,{variant:"h3",fontSize:"x-large",children:n})},h2:function(e){var n=e.children;return(0,t.jsx)(i.xv,{variant:"h2",fontSize:"2xl",children:n})},h1:function(e){var n=e.children;return(0,t.jsx)(i.xv,{variant:"h1",fontSize:"3xl",children:n})}};n.Z=function(e){var n=e.content;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.xu,{children:(0,t.jsx)(o.R,u({},n,{components:a}))})})}},6705:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return j},SidebarWithHeader:function(){return m},default:function(){return O}});var t=r(5893),o=r(385),i=r(8506),l=(r(7294),r(1664)),c=r(7375),s=r(8527),u=r(216),a=r(949),f=r(4746),d=r(5113),h=r(6893);function x(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){x(e,n,r[n])}))}return e}function b(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var j=!0;function m(e){var n=e.children,r=e.LinkItems,o=(0,c.qY)(),i=o.isOpen,l=o.onOpen,a=o.onClose;return(0,t.jsxs)(s.xu,{minH:"100vh",children:[(0,t.jsx)(v,{LinkItems:r,onClose:function(){return a},display:{base:"none",md:"block"}}),(0,t.jsx)(u.dy,{autoFocus:!1,isOpen:i,placement:"left",onClose:a,returnFocusOnClose:!1,onOverlayClick:a,size:"full",children:(0,t.jsx)(u.sc,{children:(0,t.jsx)(v,{LinkItems:r,onClose:a})})}),(0,t.jsx)(y,{onOpen:l}),(0,t.jsx)(s.xu,{ml:{base:0,md:60},p:"4",children:n})]})}var v=function(e){var n=e.onClose,r=e.LinkItems,o=b(e,["onClose","LinkItems"]);return(0,t.jsxs)(s.xu,p({bg:(0,a.ff)("white","gray.700"),borderRight:"1px",borderRightColor:(0,a.ff)("gray.200","gray.700"),w:{base:"full",md:60},pos:"fixed",h:"full"},o,{children:[(0,t.jsx)(s.kC,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:(0,t.jsx)(f.P,{display:{base:"flex",md:"none"},onClick:n})}),r.map((function(e,n){return(0,t.jsx)(g,{href:"/diplo/".concat(e.slug),children:e.title||e.slug},n)}))]}))},g=function(e){var n=e.children,r=e.href,o=b(e,["children","href"]);return(0,t.jsx)(s.rU,{as:l.default,passHref:!0,href:r,style:{textDecoration:"none"},children:(0,t.jsx)(s.kC,p({align:"center",p:"4",mx:"4",borderRadius:"lg",role:"group",cursor:"pointer",_hover:{bg:"cyan.400",color:"white"}},o,{children:n}))})},y=function(e){var n=e.onOpen,r=b(e,["onOpen"]);return(0,t.jsx)(s.kC,p({ml:{base:0,md:60},px:{base:4,md:4},alignItems:"center",borderBottomWidth:"1px",borderBottomColor:(0,a.ff)("gray.200","gray.700"),justifyContent:{base:"space-between",md:"flex-end"}},r,{children:(0,t.jsx)(d.hU,{display:{base:"flex",md:"none"},onClick:n,variant:"outline","aria-label":"open menu",icon:(0,t.jsx)(h.cur,{})})}))};function O(e){var n=e.title,r=e.content,l=e.description,a=e.docs,f=(0,c.qY)(),d=f.isOpen,h=f.onOpen,x=f.onClose;return(0,t.jsxs)(o.Z,{title:"".concat(n," | Diplo"),description:l,DontforceWidth:!0,children:[(0,t.jsxs)(s.xu,{minH:"100vh",children:[(0,t.jsx)(v,{LinkItems:a.filter((function(e){return!e.slug.endsWith(".md")&&!e.slug.endsWith(".mdx")})),onClose:function(){return x},display:{base:"none",md:"block"}}),(0,t.jsx)(u.dy,{autoFocus:!1,isOpen:d,placement:"left",onClose:x,returnFocusOnClose:!1,onOverlayClick:x,size:"full",children:(0,t.jsx)(u.sc,{children:(0,t.jsx)(v,{LinkItems:a,onClose:x})})}),(0,t.jsx)(y,{onOpen:h}),(0,t.jsx)(s.xu,{ml:{base:0,md:60},p:"4",children:(0,t.jsx)(s.xu,{children:(0,t.jsx)("main",{children:(0,t.jsxs)("article",{children:[(0,t.jsx)(s.xu,{children:(0,t.jsx)(i.Z,{content:r})}),(0,t.jsx)("br",{})]})})})})]}),");"]})}}},function(e){e.O(0,[691,781,24,496,439,385,774,888,179],(function(){return n=8716,e(e.s=n);var n}));var n=e.O();_N_E=n}]);