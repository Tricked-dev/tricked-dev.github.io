"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{363:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893),o=n(385);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=[{name:"Commands",route:"/aethor/general"},{name:"Invite",route:"/aethor/invite"},{name:"Support",route:"/aethor/support"},{name:"Back to main page",route:"/"}],c={title:"Aethor",description:"Aethor is the best discord bot for all your needs",type:"website",themeColor:"#317EFB",keywords:"discord bot discordbot aethor tricked.pro",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"};function l(e){var t=e.children;return(0,r.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({Links:a,TextValue:"Aethor"},c,{children:t}))}},385:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(5893),o=n(9008),i=n(1163),a=n(8527),c=n(7375),l=n(949),s=n(5113),d=n(1664),u=n(7294);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.children,n=e.href,o=(e.currentPath,e.lang),i=void 0===o?"en":o,c=e.active,l=h(e,["children","href","currentPath","lang","active"]),s=(0,u.useState)(!1),m=s[0],f=s[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(i).concat(n),children:(0,r.jsxs)(a.rU,p({bg:"gray.700"===n,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},l,{children:[t,(0,r.jsx)(a.M5,{children:(0,r.jsx)(a.xu,{width:m?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:c?"brand.700":"brand.600"})})]}))})},x=n(8485),g=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],b=function(e){var t=e.links,n=void 0===t?g:t,o=e.lang,d=void 0===o?"en":o,m=e.TextValue,p=void 0===m?"Tricked.pro":m,h=(0,c.qY)(),b=h.isOpen,j=h.onOpen,y=h.onClose,v=(0,l.If)(),w=v.colorMode,O=v.toggleColorMode,k=(0,i.useRouter)(),P=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(f,{lang:d,href:e.route,active:k.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,u.useEffect)((function(){window.document&&("light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,r.jsxs)(a.W2,{maxW:"container.lg",children:[(0,r.jsxs)(a.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(s.hU,{size:"md",icon:b?(0,r.jsx)(x.Tw,{}):(0,r.jsx)(x.Uq,{}),"aria-label":"Open Menu",display:{md:b?"inherit":"none"},onClick:b?y:j}),(0,r.jsx)(a.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(a.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(a.xv,{children:(0,r.jsx)("b",{children:p})}),P]})}),(0,r.jsx)(a.kC,{alignItems:"center",children:(0,r.jsx)(s.zx,{"aria-label":"Switch Theme",onClick:function(){O(),localStorage.theme=w,"light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")},children:"light"===w?(0,r.jsx)(x.kL,{}):(0,r.jsx)(x.NW,{})})})]}),b?(0,r.jsx)(a.xu,{pb:4,mt:3,children:(0,r.jsx)(a.Kq,{as:"nav",spacing:4,children:P})}):null]})})})},j=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function y(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:j.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function k(e){var t=e.children,n=e.Links,c=e.TextValue,l=e.DontforceWidth,s=void 0!==l&&l,d=e.lang,u=w(e,["children","Links","TextValue","DontforceWidth","lang"]),m=(0,i.useRouter)(),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(m.route.replace("/","").replace(/\//gim,"_"),".png")},O.en,O[d],u);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("html",{lang:d}),(0,r.jsx)("title",{children:p.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:p.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:p.viewport}),(0,r.jsx)("meta",{name:"keywords",content:p.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:p.themeColor}),(0,r.jsx)("meta",{name:"description",content:p.description}),(0,r.jsx)("link",{rel:"icon",href:p.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:p.type}),(0,r.jsx)("meta",{property:"og:site_name",content:p.title}),(0,r.jsx)("meta",{property:"og:description",content:p.description}),(0,r.jsx)("meta",{property:"og:title",content:p.title}),(0,r.jsx)("meta",{property:"og:image",content:p.image}),(0,r.jsx)("meta",{name:"twitter:title",content:p.title}),(0,r.jsx)("meta",{name:"twitter:description",content:p.description}),(0,r.jsx)("meta",{name:"twitter:image",content:p.image}),p.date&&(0,r.jsx)("meta",{property:"article:published_time",content:p.date})]}),(0,r.jsx)(b,{links:n,lang:d,TextValue:c}),(0,r.jsx)("main",{children:(0,r.jsx)(a.xu,{alignItems:"stretch",maxW:s?"none":"80rem",margin:"auto",padding:s?"none":"4px 10px 40px",children:t})}),(0,r.jsx)(y,{lang:d})]})}}}]);