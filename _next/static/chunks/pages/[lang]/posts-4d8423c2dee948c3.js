(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{3742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/posts",function(){return n(6085)}])},385:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(5893),o=n(9008),i=n(1163),c=n(8527),a=n(7375),s=n(949),l=n(5113),d=n(1664),u=n(7294);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t=e.children,n=e.href,o=(e.currentPath,e.lang),i=void 0===o?"en":o,a=e.active,s=x(e,["children","href","currentPath","lang","active"]),l=(0,u.useState)(!1),m=l[0],h=l[1];return(0,r.jsx)(d.default,{passHref:!0,prefetch:!1,href:"/[lang]".concat(n),as:"/".concat(i).concat(n),children:(0,r.jsxs)(c.rU,p({bg:"gray.700"===n,onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},_hover:{textDecoration:"none",bg:"gray.700"}},s,{children:[t,(0,r.jsx)(c.M5,{children:(0,r.jsx)(c.xu,{width:m?"100%":"2rem",maxW:"100%",borderBottomWidth:"4px",borderRadius:"10px",borderBottomColor:a?"brand.700":"brand.600"})})]}))})},f=n(8485),g=[{name:"Home",route:"/"},{name:"Projects",route:"/projects"},{name:"Posts",route:"/posts"}],j=function(e){var t=e.links,n=void 0===t?g:t,o=e.lang,d=void 0===o?"en":o,m=e.TextValue,p=void 0===m?"Tricked.pro":m,x=(0,a.qY)(),j=x.isOpen,b=x.onOpen,y=x.onClose,v=(0,s.If)(),w=v.colorMode,k=v.toggleColorMode,O=(0,i.useRouter)(),P=(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(h,{lang:d,href:e.route,active:O.pathname==e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,u.useEffect)((function(){window.document&&("light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,r.jsxs)(c.W2,{maxW:"container.lg",children:[(0,r.jsxs)(c.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(l.hU,{size:"md",icon:j?(0,r.jsx)(f.Tw,{}):(0,r.jsx)(f.Uq,{}),"aria-label":"Open Menu",display:{md:j?"inherit":"none"},onClick:j?y:b}),(0,r.jsx)(c.Ug,{spacing:8,alignItems:"center",children:(0,r.jsxs)(c.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,r.jsx)(c.xv,{children:(0,r.jsx)("b",{children:p})}),P]})}),(0,r.jsx)(c.kC,{alignItems:"center",children:(0,r.jsx)(l.zx,{"aria-label":"Switch Theme",onClick:function(){k(),localStorage.theme=w,"light"==w?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")},children:"light"===w?(0,r.jsx)(f.kL,{}):(0,r.jsx)(f.NW,{})})})]}),j?(0,r.jsx)(c.xu,{pb:4,mt:3,children:(0,r.jsx)(c.Kq,{as:"nav",spacing:4,children:P})}):null]})})})},b=[{n:"Matrix",h:"/matrix",i:!1},{n:"Discord",h:"/discord",i:!1},{n:"Github",h:"/github",i:!1},{n:"Donate",h:"/donating",i:!0}];function y(e){var t=e.lang,n=void 0===t?"en":t;return(0,r.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white",children:[(0,r.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3",children:b.map((function(e,t){return(0,r.jsx)("div",{className:"flex flex-col space-y-4 hover:text-emerald-600 duration-150",children:e.i?(0,r.jsx)(d.default,{href:"/[lang]".concat(e.h),as:"/".concat(n).concat(e.h),children:e.n}):(0,r.jsx)(d.default,{href:e.h,children:e.n})},t)}))}),(0,r.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={en:{description:"Hello i'm Tricked im a Rust and Typescript developer, my github is Tricked-dev"},nl:{description:"Hallo ik ben Tricked ik ben een Rust en Typescript developer, mijn github is Tricked-dev"}};function O(e){var t=e.children,n=e.Links,a=e.TextValue,s=e.DontforceWidth,l=void 0!==s&&s,d=e.lang,u=w(e,["children","Links","TextValue","DontforceWidth","lang"]),m=(0,i.useRouter)(),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({title:"Tricked.pro",type:"website",themeColor:"#317EFB",keywords:"javascript typescript programming rust discord matrix",viewport:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",icon:"favicon.ico",image:"/cards/".concat(m.route.replace("/","").replace(/\//gim,"_"),".png")},k.en,k[d],u);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("html",{lang:d}),(0,r.jsx)("title",{children:p.title}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:p.themeColor}),(0,r.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{name:"viewport",content:p.viewport}),(0,r.jsx)("meta",{name:"keywords",content:p.keywords}),(0,r.jsx)("meta",{name:"theme-color",content:p.themeColor}),(0,r.jsx)("meta",{name:"description",content:p.description}),(0,r.jsx)("link",{rel:"icon",href:p.icon,type:"image/ico"}),(0,r.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(m.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:p.type}),(0,r.jsx)("meta",{property:"og:site_name",content:p.title}),(0,r.jsx)("meta",{property:"og:description",content:p.description}),(0,r.jsx)("meta",{property:"og:title",content:p.title}),(0,r.jsx)("meta",{property:"og:image",content:p.image}),(0,r.jsx)("meta",{name:"twitter:title",content:p.title}),(0,r.jsx)("meta",{name:"twitter:description",content:p.description}),(0,r.jsx)("meta",{name:"twitter:image",content:p.image}),p.date&&(0,r.jsx)("meta",{property:"article:published_time",content:p.date})]}),(0,r.jsx)(j,{links:n,lang:d,TextValue:a}),(0,r.jsx)("main",{children:(0,r.jsx)(c.xu,{alignItems:"stretch",maxW:l?"none":"80rem",margin:"auto",padding:l?"none":"4px 10px 40px",children:t})}),(0,r.jsx)(y,{lang:d})]})}},6085:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return l}});var r=n(5893),o=n(8527),i=n(1664),c=n(385),a=n(2020),s=!0;function l(e){var t=e.posts,n=e.lang,s=function(e){var t=e.x;e.y;return(0,r.jsx)(o.P4,{as:"article",width:"auto",p:"5",borderWidth:"1px",rounded:"md",cursor:"pointer",_hover:{backgroundColor:"telegram.900",color:"white"},children:(0,r.jsx)(i.default,{href:"/[lang]/posts/[...post]",as:"/".concat(n,"/posts/").concat(t.slug),passHref:!0,children:(0,r.jsx)(o.xu,{children:(0,r.jsx)(o.xu,{children:(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(o.xv,{variant:"h5",component:"h2",color:"brand.200",children:t.title||t.slug}),(0,r.jsx)(o.xv,{variant:"body2",color:"textSecondary",component:"p",height:"2rem",children:t.description})]})})})})})};return(0,r.jsx)(c.Z,{lang:n,children:(0,r.jsxs)(o.xu,{maxW:"50rem",margin:"auto",children:[(0,r.jsx)(o.xv,{fontSize:"2xl",children:a.ZP.t("recent_posts")}),(0,r.jsx)(o.MI,{minChildWidth:"15rem",spacing:1,justifyContent:"center",padding:"10px 10px 10px",children:t.map((function(e,t){return(0,r.jsx)(s,{x:e,y:t},t)}))})]})})}}},function(e){e.O(0,[906,774,888,179],(function(){return t=3742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);