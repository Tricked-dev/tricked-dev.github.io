"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{385:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(5893),i=t(9008),s=t(1163),o=t(8527),a=t(7375),c=t(949),l=t(5113),p=t(1664),x=t(7294);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=function(e){var n=e.children,t=e.href,i=(e.currentPath,e.lang),s=void 0===i?"en":i,a=e.active,c=d(e,["children","href","currentPath","lang","active"]),l=(0,x.useState)(!1),m=l[0],h=l[1];return(0,r.jsx)(p.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(t),as:"/".concat(s).concat(t),children:(0,r.jsxs)(o.rU,u({bg:"gray.700"===t,onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},c,{children:[n,(0,r.jsx)(o.M5,{children:(0,r.jsx)(o.xu,{width:m?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:a?"brand.700":"brand.600"})})]}))})},g=t(9876),f=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],j=function(e){var n=e.links,t=void 0===n?f:n,i=e.lang,p=void 0===i?"en":i,x=e.TextValue,m=void 0===x?"Tricked.pro":x,u=(0,a.qY)(),d=u.isOpen,j=u.onOpen,b=u.onClose,y=(0,c.If)(),k=y.colorMode,v=y.toggleColorMode,w=(0,s.useRouter)(),O=(0,r.jsx)(r.Fragment,{children:t.map((function(e){return(0,r.jsx)(h,{lang:p,href:e.route,active:w.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,r.jsxs)(o.W2,{maxW:"container.lg",children:[(0,r.jsxs)(o.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(l.hU,{size:"md",icon:d?(0,r.jsx)(g.Tw,{}):(0,r.jsx)(g.Uq,{}),"aria-label":"Open Menu",display:{md:d?"inherit":"none"},onClick:d?b:j}),(0,r.jsx)(o.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(o.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(o.xv,{children:(0,r.jsx)("b",{children:m})}),O]})}),(0,r.jsx)(o.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{"aria-label":"Switch Theme",onClick:v,children:"light"===k?(0,r.jsx)(g.kL,{}):(0,r.jsx)(g.NW,{})})})]}),d?(0,r.jsx)(o.xu,{pb:4,mt:3,children:(0,r.jsx)(o.Kq,{as:"nav",spacing:4,children:O})}):null]})})})},b=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function y(e){var n=e.lang,t=void 0===n?"en":n;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:b.map((function(e,n){return(0,r.jsxs)("div",{className:"flex flex-col space-y-4",children:[e.i&&(0,r.jsx)(p.default,{href:"/[lang]".concat(e.h),as:"/".concat(t).concat(e.h),children:e.n}),!e.i&&(0,r.jsx)(p.default,{href:e.h,children:e.n})]},n)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var w={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function O(e){var n=e.children,t=e.Links,a=e.TextValue,c=e.DontforceWidth,l=void 0!==c&&c,p=e.lang,x=v(e,["children","Links","TextValue","DontforceWidth","lang"]),m=(0,s.useRouter)(),u=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico"},w[p],x);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("html",{lang:p}),(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/icons/apple-icon-57x57.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/icons/apple-icon-60x60.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/icons/apple-icon-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/icons/apple-icon-76x76.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/icons/apple-icon-114x114.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/icons/apple-icon-120x120.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/icons/apple-icon-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/icons/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icons/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/icons/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icons/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/icons/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icons/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:u.themeColor}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{href:"/assets/icons/icon-48x48.png",rel:"icon",type:"image/png",sizes:"48x48"}),(0,r.jsx)("link",{href:"/assets/icons/icon-72x72.png",rel:"icon",type:"image/png",sizes:"72x72"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/assets/icons/icon-512x512.png"}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"viewport",content:u.viewport}),(0,r.jsx)("meta",{name:"keywords",content:u.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:u.themeColor}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{content:u.description,name:"description"}),(0,r.jsx)("link",{rel:"icon",href:u.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:u.type}),(0,r.jsx)("meta",{property:"og:site_name",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:image",content:u.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@tricked"}),(0,r.jsx)("meta",{name:"twitter:title",content:u.title}),(0,r.jsx)("meta",{name:"twitter:description",content:u.description}),(0,r.jsx)("meta",{name:"twitter:image",content:u.image}),u.date&&(0,r.jsx)("meta",{property:"article:published_time",content:u.date})]}),(0,r.jsx)(j,{links:t,lang:p,TextValue:a}),(0,r.jsx)("main",{children:(0,r.jsx)(o.xu,{alignItems:"stretch",maxW:l?"none":"80rem",margin:"auto",padding:l?"none":"4px 10px 40px",children:n})}),(0,r.jsx)(y,{lang:p})]})}}}]);
//# sourceMappingURL=385-9c8c94bb55db5eaf.js.map