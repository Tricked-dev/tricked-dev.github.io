(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{4067:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/services",function(){return n(9624)}])},385:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(5893),i=n(9008),o=n(1163),c=n(8527),a=n(7375),s=n(949),l=n(5113),d=n(1664),u=n(7294);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=function(e){var t=e.children,n=e.href,i=(e.currentPath,e.lang),o=void 0===i?"en":i,a=e.active,s=h(e,["children","href","currentPath","lang","active"]),l=(0,u.useState)(!1),x=l[0],p=l[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(o).concat(n),children:(0,r.jsxs)(c.rU,m({bg:"gray.700"===n,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},s,{children:[t,(0,r.jsx)(c.M5,{children:(0,r.jsx)(c.xu,{width:x?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:a?"brand.700":"brand.600"})})]}))})},f=n(8485),j=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],g=function(e){var t=e.links,n=void 0===t?j:t,i=e.lang,d=void 0===i?"en":i,x=e.TextValue,m=void 0===x?"Tricked.pro":x,h=(0,a.qY)(),g=h.isOpen,b=h.onOpen,v=h.onClose,y=(0,s.If)(),w=y.colorMode,k=y.toggleColorMode,O=(0,o.useRouter)(),P=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(p,{lang:d,href:e.route,active:O.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,u.useEffect)((function(){window.document&&("light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,r.jsxs)(c.W2,{maxW:"container.lg",children:[(0,r.jsxs)(c.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(l.hU,{size:"md",icon:g?(0,r.jsx)(f.Tw,{}):(0,r.jsx)(f.Uq,{}),"aria-label":"Open Menu",display:{md:g?"inherit":"none"},onClick:g?v:b}),(0,r.jsx)(c.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(c.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(c.xv,{children:(0,r.jsx)("b",{children:m})}),P]})}),(0,r.jsx)(c.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{"aria-label":"Switch Theme",onClick:function(){k(),localStorage.theme=w,"light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")},children:"light"===w?(0,r.jsx)(f.kL,{}):(0,r.jsx)(f.NW,{})})})]}),g?(0,r.jsx)(c.xu,{pb:4,mt:3,children:(0,r.jsx)(c.Kq,{as:"nav",spacing:4,children:P})}):null]})})})},b=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function v(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:b.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function O(e){var t=e.children,n=e.Links,a=e.TextValue,s=e.DontforceWidth,l=void 0!==s&&s,d=e.lang,u=w(e,["children","Links","TextValue","DontforceWidth","lang"]),x=(0,o.useRouter)(),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(x.route.replace("/","").replace(/\//gim,"_"),".png")},k.en,k[d],u);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("html",{lang:d}),(0,r.jsx)("title",{children:m.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:m.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(x.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:m.viewport}),(0,r.jsx)("meta",{name:"keywords",content:m.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:m.themeColor}),(0,r.jsx)("meta",{name:"description",content:m.description}),(0,r.jsx)("link",{rel:"icon",href:m.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(x.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:m.type}),(0,r.jsx)("meta",{property:"og:site_name",content:m.title}),(0,r.jsx)("meta",{property:"og:description",content:m.description}),(0,r.jsx)("meta",{property:"og:title",content:m.title}),(0,r.jsx)("meta",{property:"og:image",content:m.image}),(0,r.jsx)("meta",{name:"twitter:title",content:m.title}),(0,r.jsx)("meta",{name:"twitter:description",content:m.description}),(0,r.jsx)("meta",{name:"twitter:image",content:m.image}),m.date&&(0,r.jsx)("meta",{property:"article:published_time",content:m.date})]}),(0,r.jsx)(g,{links:n,lang:d,TextValue:a}),(0,r.jsx)("main",{children:(0,r.jsx)(c.xu,{alignItems:"stretch",maxW:l?"none":"80rem",margin:"auto",padding:l?"none":"4px 10px 40px",children:t})}),(0,r.jsx)(v,{lang:d})]})}},9624:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a},default:function(){return s}});var r=n(5893),i=n(8527),o=n(385),c=n(2020),a=!0;function s(e){var t=e.lang;return(0,r.jsxs)(o.Z,{lang:t,children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xv,{variant:"h3",fontSize:"3xl",children:c.ZP.t("services")})}),(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xv,{variant:"h3",fontSize:"larger",noOfLines:2,children:(0,r.jsxs)(i.Eq,{children:[(0,r.jsx)(i.xv,{children:c.ZP.t("make_bots")}),(0,r.jsx)(i.xv,{color:"green.500",children:"monaro/etherium/bitcoin cash"})]})})})}),(0,r.jsx)("br",{}),(0,r.jsxs)(i.xu,{children:[(0,r.jsx)(i.xv,{children:c.ZP.t("pricing")}),(0,r.jsxs)(i.xv,{children:["Dm"," ",(0,r.jsx)(i.rU,{color:"green.600",href:"https://discord.com/users/336465356304678913",children:"tricked#3777"})," ",c.ZP.t("on_discord")]}),(0,r.jsxs)(i.Eq,{children:[(0,r.jsxs)(i.xv,{color:"red",children:[" ",c.ZP.t("not_host")]}),(0,r.jsxs)(i.xv,{children:[" ",c.ZP.t("written")]})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.xv,{textColor:"GrayText",children:c.ZP.t("program_other")})})]})}}},function(e){e.O(0,[906,774,888,179],(function(){return t=4067,e(e.s=t);var t}));var t=e.O();_N_E=t}]);