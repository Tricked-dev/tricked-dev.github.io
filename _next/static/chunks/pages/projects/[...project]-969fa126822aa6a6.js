(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{34651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return d}});var t=e(11604),i=e(44592),a=e(67294),c=e(97375);function o(){return(o=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n}).apply(this,arguments)}function l(n,r){if(null==n)return{};var e,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}var u=["htmlWidth","htmlHeight","alt"],s=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=a.forwardRef((function(n,r){var e=n.htmlWidth,t=n.htmlHeight,i=n.alt,c=l(n,u);return a.createElement("img",o({width:e,height:t,ref:r,alt:i},c))})),d=(0,t.Gp)((function(n,r){var e=n.fallbackSrc,u=n.fallback,d=n.src,h=n.srcSet,g=n.align,v=n.fit,m=n.loading,x=n.ignoreFallback,j=n.crossOrigin,b=l(n,s),p=null!=m||x||void 0===e&&void 0===u,k=function(n){var r=n.loading,e=n.src,t=n.srcSet,i=n.onLoad,o=n.onError,l=n.crossOrigin,u=n.sizes,s=n.ignoreFallback,f=(0,a.useState)("pending"),d=f[0],h=f[1];(0,a.useEffect)((function(){h(e?"loading":"pending")}),[e]);var g=(0,a.useRef)(),v=(0,a.useCallback)((function(){if(e){m();var n=new Image;n.src=e,l&&(n.crossOrigin=l),t&&(n.srcset=t),u&&(n.sizes=u),r&&(n.loading=r),n.onload=function(n){m(),h("loaded"),null==i||i(n)},n.onerror=function(n){m(),h("failed"),null==o||o(n)},g.current=n}}),[e,l,t,u,i,o,r]),m=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,c.Gw)((function(){if(!s)return"loading"===d&&v(),function(){m()}}),[d,v,s]),s?"loaded":d}(o({},n,{ignoreFallback:p})),O=o({ref:r,objectFit:v,objectPosition:g},p?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?u||a.createElement(t.m$.img,o({as:f,className:"chakra-image__placeholder",src:e},O)):a.createElement(t.m$.img,o({as:f,src:d,srcSet:h,crossOrigin:j,loading:m,className:"chakra-image"},O))}));i.Ts&&(d.displayName="Image")},66046:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[...project]",function(){return e(82394)}])},58506:function(n,r,e){"use strict";var t=e(85893),i=e(28093),a=e(68527),c=e(17649),o=e(26671);function l(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function u(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){l(n,r,e[r])}))}return n}var s={ul:a.QI,li:a.HC,p:a.xv,Center:a.M5,gray:function(n){var r=n.children;n.className;return(0,t.jsx)(a.xv,{color:"GrayText",children:r})},code:function(n){var r=n.children,e=n.className;return(0,t.jsx)(c.Z,{style:o.VA,customStyle:{backgroundColor:"none",borderRadius:4,fontSize:13,marginBottom:"1em",marginTop:"1em",overflowX:"auto",WebkitOverflowScrolling:"touch"},language:null===e||void 0===e?void 0:e.replace(/language-/g,""),children:r})},a:function(n){var r=n.children,e=n.href;return(0,t.jsx)(a.rU,{color:"green.300",href:e,children:(0,t.jsx)(a.xv,{as:"u",children:r})})},h4:function(n){var r=n.children;return(0,t.jsx)(a.xv,{variant:"h4",fontSize:"large",children:r})},h3:function(n){var r=n.children;return(0,t.jsx)(a.xv,{variant:"h3",fontSize:"x-large",children:r})},h2:function(n){var r=n.children;return(0,t.jsx)(a.xv,{variant:"h2",fontSize:"2xl",children:r})},h1:function(n){var r=n.children;return(0,t.jsx)(a.xv,{variant:"h1",fontSize:"3xl",children:r})}};r.Z=function(n){var r=n.content;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.xu,{children:(0,t.jsx)(i.R,u({},r,{components:s}))})})}},82394:function(n,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return u},default:function(){return s}});var t=e(85893),i=e(385),a=e(68527),c=e(34651),o=e(65113),l=e(58506),u=!0;function s(n){n.title,n.readme;var r=n.name,e=n.content,u=n.image,s=n.description,f=n.published;return(0,t.jsx)(i.Z,{title:"".concat(r," | Tricked.pro"),description:s,children:(0,t.jsx)(a.xu,{variant:"elevation",shadow:"md",marginRight:"auto",marginLeft:"auto",maxW:"50rem",children:(0,t.jsxs)("main",{children:[(0,t.jsx)(a.xv,{fontSize:"xl",children:r}),(0,t.jsx)(c.Ee,{src:"/images/".concat(u),width:"10rem",height:"auto",alt:""}),(0,t.jsxs)("article",{children:[f&&(0,t.jsxs)(a.xv,{color:"GrayText",children:["Published ",f]}),(0,t.jsx)(a.xu,{margin:"auto",justifyContent:"center",className:"posts",children:(0,t.jsx)(l.Z,{content:e})})]}),(0,t.jsx)(o.zx,{as:"a",href:"/projects",children:"Back?"})]})})})}}},function(n){n.O(0,[691,781,385,774,888,179],(function(){return r=66046,n(n.s=r);var r}));var r=n.O();_N_E=r}]);