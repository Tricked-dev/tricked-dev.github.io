(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{1509:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/aethor",function(){return n(9371)}])},363:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(385);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=[{name:"Commands",route:"/aethor/general"},{name:"Invite",route:"/aethor/invite"},{name:"Support",route:"/aethor/support"},{name:"Back to main page",route:"/"}],c={title:"Aethor",description:"Aethor is the best discord bot for all your needs",type:"website",themeColor:"#317EFB",keywords:"discord bot discordbot aethor tricked.pro",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"};function s(e){var t=e.children;return(0,r.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({Links:i,TextValue:"Aethor"},c,{children:t}))}},385:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),o=n(9008),a=n(1163),i=n(8527),c=n(7375),s=n(949),l=n(5113),d=n(1664);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.children,n=e.href,o=(e.currentPath,e.lang),c=void 0===o?"en":o,s=h(e,["children","href","currentPath","lang"]),l=(0,a.useRouter)(),u=[l.asPath.endsWith("/")?l.asPath:"".concat(l.asPath,"/"),"/".concat(c).concat(n).endsWith("/")?"/".concat(c).concat(n):"/".concat(c).concat(n,"/")],p=u[0]===u[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(c).concat(n),children:(0,r.jsx)(i.rU,m({fontSize:"larger",p:"3",rounded:"md",borderBottom:"4px",borderBottomColor:p?"green.600":"gray.600",roundedBottom:"none",borderRadius:"none",className:"hover:bg-gray-700"},s,{children:t}))})},x=n(8485),f=n(7294),g=n(5135),j=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],b=function(e){var t=e.links,n=void 0===t?j:t,o=e.lang,d=void 0===o?"en":o,u=e.TextValue,m=void 0===u?"Tricked.pro":u,h=(0,c.qY)(),b=h.isOpen,y=h.onOpen,v=h.onClose,w=(0,s.If)(),O=w.colorMode,k=w.toggleColorMode,P=(0,a.useRouter)(),S=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(p,{lang:d,href:e.route,active:P.pathname==e.route,children:e.name},e.name)}))});return(0,f.useEffect)((function(){window.document&&("light"==O?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.xu,{as:s.t7,borderTop:"2px",borderTopColor:"green.500",width:"100%",bg:"gray.900",py:"1",children:[(0,r.jsxs)(i.kC,{alignItems:"center",justifyContent:"space-between",py:"1",px:"5",children:[(0,r.jsx)(l.hU,{size:"md",icon:b?(0,r.jsx)(x.Tw,{}):(0,r.jsx)(x.Uq,{}),"aria-label":"Open Menu",display:{md:b?"inherit":"none"},onClick:b?v:y}),(0,r.jsx)(i.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(i.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(i.xv,{fontSize:"large",children:(0,r.jsx)("b",{children:m})}),S]})}),(0,r.jsx)(i.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{as:g.E.div,whileHover:{scale:1.2,rotate:-20},whileTap:{scale:.3,rotate:-360},"aria-label":"Switch Theme",onClick:function(){k(),localStorage.theme=O,"light"==O?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")},children:"light"===O?(0,r.jsx)(x.kL,{}):(0,r.jsx)(x.NW,{})})})]}),b?(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.Kq,{pt:"2",as:"nav",spacing:4,children:S})}):null]})})},y=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function v(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:y.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function P(e){var t=e.children,n=e.Links,c=e.TextValue,s=e.lang,l=O(e,["children","Links","TextValue","lang"]),d=(0,a.useRouter)(),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(d.route.replace("/","").replace(/\//gim,"_"),".png")},k.en,k[s],l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("html",{lang:s}),(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:u.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(d.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:u.viewport}),(0,r.jsx)("meta",{name:"keywords",content:u.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:u.themeColor}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("link",{rel:"icon",href:u.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(d.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:u.type}),(0,r.jsx)("meta",{property:"og:site_name",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:image",content:u.image}),(0,r.jsx)("meta",{name:"twitter:title",content:u.title}),(0,r.jsx)("meta",{name:"twitter:description",content:u.description}),(0,r.jsx)("meta",{name:"twitter:image",content:u.image}),u.date&&(0,r.jsx)("meta",{property:"article:published_time",content:u.date})]}),(0,r.jsx)(b,{links:n,lang:s,TextValue:c}),(0,r.jsx)(i.xu,{as:"main",alignItems:"stretch",maxW:"80rem",margin:"auto",padding:"4px 10px 40px",children:t}),(0,r.jsx)(v,{lang:s})]})}},9371:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(5893),o=n(363),a=n(8527),i=n(5113),c=n(1664),s=!0;t.default=function(e){var t=e.lang;return(0,r.jsx)(o.Z,{lang:t,children:(0,r.jsxs)(a.MI,{columns:3,alignContent:"center",alignItems:"center",justifyItems:"center",paddingTop:"4rem",paddingBottom:"6rem",gridGap:"3rem",children:[(0,r.jsx)(a.P4,{colSpan:1}),(0,r.jsx)(a.P4,{colSpan:1,children:(0,r.jsx)(a.xv,{fontSize:"3xl",as:"h1",className:"font-bold",children:"AETHOR"})}),(0,r.jsx)(a.P4,{colSpan:1}),(0,r.jsx)(a.P4,{children:(0,r.jsx)(c.default,{href:"/aethor/invite",passHref:!0,children:(0,r.jsx)(i.zx,{children:"Invite"})})}),(0,r.jsx)(a.P4,{children:(0,r.jsx)(c.default,{href:"/aethor/support",passHref:!0,children:(0,r.jsx)(i.zx,{children:"Support"})})}),(0,r.jsx)(a.P4,{children:(0,r.jsx)(c.default,{href:"/aethor/general",passHref:!0,children:(0,r.jsx)(i.zx,{children:"Commands"})})}),(0,r.jsx)(a.P4,{colSpan:3,children:(0,r.jsxs)(a.xv,{as:"article",className:"bold-text",fontSize:"larger",children:[(0,r.jsx)(a.xv,{children:"Aethor is a discord bot that aims to have unique features that other bots dont have for example suggestions using buttons and a wide arrange of commands to help manage suggestions"}),(0,r.jsx)("br",{}),(0,r.jsx)(a.xv,{children:"Aethor also has features to keep support channels clean by making a thread on each message in a support channels"}),(0,r.jsx)("br",{}),(0,r.jsx)(a.xv,{children:"So what are you waiting for get aethor now!"})]})})]})})}}},function(e){e.O(0,[673,774,888,179],(function(){return t=1509,e(e.s=t);var t}));var t=e.O();_N_E=t}]);