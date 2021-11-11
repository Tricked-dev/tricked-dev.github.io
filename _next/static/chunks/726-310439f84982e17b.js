(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{54056:function(e,t,r){"use strict";r.d(t,{z:function(){return P}});var n=r(67294);function a(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}else e(t)}function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{t&&a(t,e)}))}),t)}var o=r(90063),l=r(83793),s=r(55284),c=r(11440),u=r(38554),f=r.n(u),d=r(84461),p=r(73808),m=r(28500);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var[v,y]=(0,m.k)({strict:!1,name:"ButtonGroupContext"}),g=(0,o.G)(((e,t)=>{var{size:r,colorScheme:a,variant:i,className:o,spacing:l="0.5rem",isAttached:s,isDisabled:u}=e,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),p=(0,d.cx)("chakra-button__group",o),m=n.useMemo((()=>({size:r,colorScheme:a,variant:i,isDisabled:u})),[r,a,i,u]),y={display:"inline-flex"};return y=h({},y,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:l}}),n.createElement(v,{value:m},n.createElement(c.m$.div,h({ref:t,role:"group",__css:y,className:p},f)))}));p.Ts&&(g.displayName="ButtonGroup");var b=r(70917),k={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},x=(0,c.m$)("span",{baseStyle:k});p.Ts&&(x.displayName="VisuallyHidden");var _=(0,c.m$)("input",{baseStyle:k});p.Ts&&(_.displayName="VisuallyHiddenInput");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=(0,b.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),C=(0,o.G)(((e,t)=>{var r=(0,l.m)("Spinner",e),a=(0,s.Lr)(e),{label:i="Loading...",thickness:o="2px",speed:u="0.45s",emptyColor:f="transparent",className:p}=a,m=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["label","thickness","speed","emptyColor","className"]),h=(0,d.cx)("chakra-spinner",p),v=O({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:f,borderLeftColor:f,animation:w+" "+u+" linear infinite"},r);return n.createElement(c.m$.div,O({ref:t,__css:v,className:h},m),i&&n.createElement(x,null,i))}));function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}p.Ts&&(C.displayName="Spinner");var S=e=>{var{label:t,placement:r,children:a=n.createElement(C,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:o}=e,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["label","placement","spacing","children","className","__css"]),s=(0,d.cx)("chakra-button__spinner",i),u="start"===r?"marginEnd":"marginStart",f=n.useMemo((()=>E({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},o)),[o,t,u]);return n.createElement(c.m$.div,E({className:s},l,{__css:f}),a)};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}p.Ts&&(S.displayName="ButtonSpinner");var N=e=>{var{children:t,className:r}=e,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","className"]),i=n.isValidElement(t)?n.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,d.cx)("chakra-button__icon",r);return n.createElement(c.m$.span,j({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:o}),i)};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}p.Ts&&(N.displayName="ButtonIcon");var P=(0,o.G)(((e,t)=>{var r=y(),a=(0,l.m)("Button",M({},r,e)),o=(0,s.Lr)(e),{isDisabled:u=(null==r?void 0:r.isDisabled),isLoading:p,isActive:m,isFullWidth:h,children:v,leftIcon:g,rightIcon:b,loadingText:k,iconSpacing:x="0.5rem",type:_,spinner:O,spinnerPlacement:w="start",className:C,as:E}=o,j=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(o,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),N=n.useMemo((()=>{var e,t=f()({},null!=(e=null==a?void 0:a._focus)?e:{},{zIndex:1});return M({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},a,!!r&&{_focus:t})}),[a,r,h]),{ref:P,type:A}=function(e){var[t,r]=n.useState(!e);return{ref:n.useCallback((e=>{e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(E),L={rightIcon:b,leftIcon:g,iconSpacing:x,children:v};return n.createElement(c.m$.button,M({disabled:u||p,ref:i(t,P),as:E,type:null!=_?_:A,"data-active":(0,d.PB)(m),"data-loading":(0,d.PB)(p),__css:N,className:(0,d.cx)("chakra-button",C)},j),p&&"start"===w&&n.createElement(S,{className:"chakra-button__spinner--start",label:k,placement:"start"},O),p?k||n.createElement(c.m$.span,{opacity:0},n.createElement(T,L)):n.createElement(T,L),p&&"end"===w&&n.createElement(S,{className:"chakra-button__spinner--end",label:k,placement:"end"},O))}));function T(e){var{leftIcon:t,rightIcon:r,children:a,iconSpacing:i}=e;return n.createElement(n.Fragment,null,t&&n.createElement(N,{marginEnd:i},t),a,r&&n.createElement(N,{marginStart:i},r))}p.Ts&&(P.displayName="Button")},48420:function(e,t,r){"use strict";r.d(t,{h:function(){return s}});var n=r(90063),a=r(73808),i=r(67294),o=r(54056);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,n.G)(((e,t)=>{var{icon:r,children:n,isRound:a,"aria-label":s}=e,c=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["icon","children","isRound","aria-label"]),u=r||n,f=i.isValidElement(u)?i.cloneElement(u,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(o.z,l({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":s},c),f)}));a.Ts&&(s.displayName="IconButton")},13694:function(e,t,r){"use strict";var n=r(11440),a=r(73808),i=r(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=e=>{var{type:t="checkbox",_hover:r,_invalid:a,_disabled:l,_focus:s,_checked:c,_child:u={opacity:0},_checkedAndChild:f={opacity:1},_checkedAndDisabled:d,_checkedAndFocus:p,_checkedAndHover:m,children:h}=e,v=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),y="input[type="+t+"]:checked:disabled + &",g="input[type="+t+"]:checked:hover:not(:disabled) + &",b="input[type="+t+"]:checked:focus + &",k="input[type="+t+"]:disabled + &",x="input[type="+t+"]:focus + &",_="input[type="+t+"]:hover:not(:disabled):not(:checked) + &",O="input[type="+t+"]:checked + &, input[type="+t+"][aria-checked=mixed] + &",w="input[type="+t+"][aria-invalid=true] + &",C="& > *";return i.createElement(n.m$.div,o({},v,{"aria-hidden":!0,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0,[x]:s,[_]:r,[k]:l,[w]:a,[y]:d,[b]:p,[g]:m,[C]:u,[O]:o({},c,{[C]:f})}}),h)};a.Ts&&(l.displayName="ControlBox")},10762:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(67294),a=r(68327);function i(e,t){void 0===t&&(t=[]);var r=n.useRef(e);return(0,a.G)((()=>{r.current=e})),n.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),t)}},51034:function(e,t,r){"use strict";r.d(t,{p:function(){return o},T:function(){return l}});var n=r(80658),a=r(67294),i=r(10762);function o(e,t){var r=void 0!==e;return[r,r&&"undefined"!==typeof e?e:t]}function l(e){var{value:t,defaultValue:r,onChange:o,shouldUpdate:l=((e,t)=>e!==t)}=e,s=(0,i.W)(o),c=(0,i.W)(l),[u,f]=a.useState(r),d=void 0!==t,p=d?t:u,m=a.useCallback((e=>{var t=(0,n.Pu)(e,p);c(p,t)&&(d||f(t),s(t))}),[d,s,p,c]);return[p,m]}},74860:function(e,t,r){"use strict";r.d(t,{q:function(){return c}});var n=r(80658),a=r(67294),i=r(51034),o=r(94577),l=r(10762);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){void 0===e&&(e={});var{onClose:t,onOpen:r,isOpen:c,id:u}=e,f=(0,l.W)(r),d=(0,l.W)(t),[p,m]=a.useState(e.defaultIsOpen||!1),[h,v]=(0,i.p)(c,p),y=(0,o.Me)(u,"disclosure"),g=a.useCallback((()=>{h||m(!1),null==d||d()}),[h,d]),b=a.useCallback((()=>{h||m(!0),null==f||f()}),[h,f]),k=a.useCallback((()=>{(v?g:b)()}),[v,b,g]);return{isOpen:!!v,onOpen:b,onClose:g,onToggle:k,isControlled:h,getButtonProps:function(e){return void 0===e&&(e={}),s({},e,{"aria-expanded":"true","aria-controls":y,onClick:(0,n.v0)(e.onClick,k)})},getDisclosureProps:function(e){return void 0===e&&(e={}),s({},e,{hidden:!v,id:y})}}}},68327:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(67294),a=r(84461).jU?n.useLayoutEffect:n.useEffect},89867:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var n=r(90063),a=r(73808),i=r(67294),o=r(70058);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){var{viewBox:t="0 0 24 24",d:r,path:s,displayName:c,defaultProps:u={}}=e,f=(0,n.G)(((e,n)=>i.createElement(o.J,l({ref:n,viewBox:t},u,e),null!=s?s:i.createElement("path",{fill:"currentColor",d:r}))));return a.Ts&&(f.displayName=c),f}},70058:function(e,t,r){"use strict";r.d(t,{J:function(){return u}});var n=r(90063),a=r(11440),i=r(84461),o=r(73808),l=r(67294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={path:l.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},l.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),l.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),l.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,n.G)(((e,t)=>{var{as:r,viewBox:n,color:o="currentColor",focusable:u=!1,children:f,className:d,__css:p}=e,m=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),h={ref:t,focusable:u,className:(0,i.cx)("chakra-icon",d),__css:s({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},p)},v=null!=n?n:c.viewBox;if(r&&"string"!==typeof r)return l.createElement(a.m$.svg,s({as:r},h,m));var y=null!=f?f:c.path;return l.createElement(a.m$.svg,s({verticalAlign:"middle",viewBox:v},h,m),y)}));o.Ts&&(u.displayName="Icon")},48931:function(e,t,r){"use strict";r.d(t,{T:function(){return n}});var n=(0,r(89867).I)({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})},61475:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});var n=(0,r(89867).I)({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"})},46755:function(e,t,r){"use strict";r.d(t,{k:function(){return n}});var n=(0,r(89867).I)({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"})},19950:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(89867),a=r(67294),i=(0,n.I)({displayName:"SunIcon",path:a.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor"},a.createElement("circle",{cx:"12",cy:"12",r:"5"}),a.createElement("path",{d:"M12 1v2"}),a.createElement("path",{d:"M12 21v2"}),a.createElement("path",{d:"M4.22 4.22l1.42 1.42"}),a.createElement("path",{d:"M18.36 18.36l1.42 1.42"}),a.createElement("path",{d:"M1 12h2"}),a.createElement("path",{d:"M21 12h2"}),a.createElement("path",{d:"M4.22 19.78l1.42-1.42"}),a.createElement("path",{d:"M18.36 5.64l1.42-1.42"}))})},48017:function(e,t,r){"use strict";r.d(t,{xu:function(){return c}});var n=r(11440),a=r(90063),i=r(73808),o=r(67294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.m$)("div");i.Ts&&(c.displayName="Box");var u=(0,a.G)(((e,t)=>{var{size:r,centerContent:n=!0}=e,a=s(e,["size","centerContent"]),i=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(c,l({ref:t,boxSize:r,__css:l({},i,{flexShrink:0,flexGrow:0})},a))}));i.Ts&&(u.displayName="Square");var f=(0,a.G)(((e,t)=>{var{size:r}=e,n=s(e,["size"]);return o.createElement(u,l({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(f.displayName="Circle")},38448:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(11440),a=r(73808);r(67294);var i=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.Ts&&(i.displayName="Center")},53850:function(e,t,r){"use strict";r.d(t,{W:function(){return f}});var n=r(90063),a=r(55284),i=r(83793),o=r(11440),l=r(84461),s=r(73808),c=r(67294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,n.G)(((e,t)=>{var r=(0,a.Lr)(e),{className:n,centerContent:s}=r,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["className","centerContent"]),d=(0,i.m)("Container",e);return c.createElement(o.m$.div,u({ref:t,className:(0,l.cx)("chakra-container",n)},f,{__css:u({},d,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));s.Ts&&(f.displayName="Container")},94096:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(90063),a=r(11440),i=r(73808),o=r(67294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,n.G)(((e,t)=>{var{direction:r,align:n,justify:i,wrap:s,basis:c,grow:u,shrink:f}=e,d=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:r,alignItems:n,justifyContent:i,flexWrap:s,flexBasis:c,flexGrow:u,flexShrink:f};return o.createElement(a.m$.div,l({ref:t,__css:p},d))}));i.Ts&&(s.displayName="Flex")},49444:function(e,t,r){"use strict";r.d(t,{r:function(){return f}});var n=r(90063),a=r(83793),i=r(55284),o=r(11440),l=r(84461),s=r(73808),c=r(67294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,n.G)(((e,t)=>{var r=(0,a.m)("Link",e),n=(0,i.Lr)(e),{className:s,isExternal:f}=n,d=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["className","isExternal"]);return c.createElement(o.m$.a,u({target:f?"_blank":void 0,rel:f?"noopener noreferrer":void 0,ref:t,className:(0,l.cx)("chakra-link",s)},d,{__css:r}))}));s.Ts&&(f.displayName="Link")},44448:function(e,t,r){"use strict";r.d(t,{Ug:function(){return m},Kq:function(){return p}});var n=r(11440),a=r(90063),i=r(84461),o=r(73808),l=r(24255),s=r(67294),c=r(16678),u="& > *:not(style) ~ *:not(style)";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=e=>s.createElement(n.m$.div,f({className:"chakra-stack__item"},e,{__css:f({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),p=(0,a.G)(((e,t)=>{var{isInline:r,direction:a,align:o,justify:p,spacing:m="0.5rem",wrap:h,children:v,divider:y,className:g,shouldWrapChildren:b}=e,k=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),x=r?"row":null!=a?a:"column",_=s.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[u]:(0,c.XQ)(r,(e=>n[e]))}}({direction:x,spacing:m})),[x,m]),O=s.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,c.XQ)(r,(e=>n[e]))}}({spacing:m,direction:x})),[m,x]),w=!!y,C=!b&&!w,E=(0,l.W)(v),S=C?E:E.map(((e,t)=>{var r="undefined"!==typeof e.key?e.key:t,n=t+1===E.length,a=b?s.createElement(d,{key:r},e):e;if(!w)return a;var i=n?null:s.cloneElement(y,{__css:O});return s.createElement(s.Fragment,{key:r},a,i)})),j=(0,i.cx)("chakra-stack",g);return s.createElement(n.m$.div,f({ref:t,display:"flex",alignItems:o,justifyContent:p,flexDirection:_.flexDirection,flexWrap:h,className:j,__css:w?{}:{[u]:_[u]}},k),S)}));o.Ts&&(p.displayName="Stack");var m=(0,a.G)(((e,t)=>s.createElement(p,f({align:"center"},e,{direction:"row",ref:t}))));o.Ts&&(m.displayName="HStack");var h=(0,a.G)(((e,t)=>s.createElement(p,f({align:"center"},e,{direction:"column",ref:t}))));o.Ts&&(h.displayName="VStack")},64115:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(90063),a=r(83793),i=r(55284),o=r(11440),l=r(4651),s=r(84461),c=r(73808),u=r(67294);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,t)=>{var r=(0,a.m)("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,i.Lr)(e),["className","align","decoration","casing"]),c=(0,l.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(o.m$.p,f({ref:t,className:(0,s.cx)("chakra-text",e.className)},c,n,{__css:r}))}));c.Ts&&(d.displayName="Text")},24255:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(67294);function a(e){return n.Children.toArray(e).filter((e=>n.isValidElement(e)))}},40980:function(e,t,r){"use strict";r.d(t,{useColorMode:function(){return a.useColorMode},useColorModeValue:function(){return a.useColorModeValue}});r(13694);var n=r(84806);r.o(n,"useColorMode")&&r.d(t,{useColorMode:function(){return n.useColorMode}}),r.o(n,"useColorModeValue")&&r.d(t,{useColorModeValue:function(){return n.useColorModeValue}});var a=r(45056)},90063:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(67294);function a(e){return n.forwardRef(e)}},45056:function(e,t,r){"use strict";r.d(t,{useColorMode:function(){return n.If},useColorModeValue:function(){return n.ff}});var n=r(71539);r(84288)},11440:function(e,t,r){"use strict";r.d(t,{m$:function(){return C}});var n=r(84288),a=r(4651),i=r(80658),o=r(67294),l=r(87462),s=r(67866),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,s.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(28650),d=r(70444),p=r(73772),m=u,h=function(e){return"theme"!==e},v=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?m:h},y=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},g=function e(t,r){var n,a,i=t.__emotion_real===t,s=i&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var c=y(t,r,i),u=c||v(s),m=!u("as");return function(){var h=arguments,g=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&g.push("label:"+n+";"),null==h[0]||void 0===h[0].raw)g.push.apply(g,h);else{0,g.push(h[0][0]);for(var b=h.length,k=1;k<b;k++)g.push(h[k],h[0][k])}var x=(0,f.w)((function(e,t,r){var n=m&&e.as||s,i="",l=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=(0,o.useContext)(f.T)}"string"===typeof e.className?i=(0,d.f)(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var b=(0,p.O)(g.concat(l),t.registered,h);(0,d.M)(t,b,"string"===typeof n);i+=t.key+"-"+b.name,void 0!==a&&(i+=" "+a);var k=m&&void 0===c?v(n):u,x={};for(var _ in e)m&&"as"===_||k(_)&&(x[_]=e[_]);return x.className=i,x.ref=r,(0,o.createElement)(n,x)}));return x.displayName=void 0!==n?n:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=g,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,n){return e(t,(0,l.Z)({},r,n,{shouldForwardProp:y(x,n,!0)})).apply(void 0,g)},x}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){g[e]=g(e)}));var b=g,k=new Set([...n.propNames,"textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),x=new Set(["htmlWidth","htmlHeight","htmlSize"]),_=e=>x.has(e)||!k.has(e),O=r(55284);function w(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var C=function(e,t){var r=null!=t?t:{},{baseStyle:o}=r,l=w(r,["baseStyle"]);l.shouldForwardProp||(l.shouldForwardProp=_);var s=(e=>{var{baseStyle:t}=e;return e=>{var{css:r,__css:o,sx:l}=e,s=w(e,["theme","css","__css","sx"]),c=(0,a.lw)(s,((e,t)=>(0,n.isStyleProp)(t))),u=(0,i.Pu)(t,e),f=Object.assign({},o,u,(0,a.YU)(c),l),d=(0,n.css)(f)(e.theme);return r?[d,r]:d}})({baseStyle:o});return b(e,l)(s)};O.t6.forEach((e=>{C[e]=C(e)}))},55284:function(e,t,r){"use strict";r.d(t,{t6:function(){return a},Lr:function(){return i}});var n=r(4651),a=["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"];function i(e){return(0,n.CE)(e,["styleConfig","size","variant","colorScheme"])}},83793:function(e,t,r){"use strict";r.d(t,{j:function(){return h},m:function(){return m}});var n=r(4651),a=r(38554),i=r.n(a),o=r(80658),l=r(67294),s=r(69590),c=r.n(s),u=r(71539),f=r(29676);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(){return d({},(0,u.If)(),{theme:(0,f.Fg)()})}function m(e,t,r){var a;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:s}=t,u=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:f,colorMode:d}=p(),m=(0,n.Wf)(f,"components."+e),h=s||m,v=i()({theme:f,colorMode:d},null!=(a=null==h?void 0:h.defaultProps)?a:{},(0,n.YU)((0,n.CE)(u,["children"]))),y=(0,l.useRef)({});if(h){var g,b,k,x,_,O,w=(0,o.Pu)(null!=(g=h.baseStyle)?g:{},v),C=(0,o.Pu)(null!=(b=null==(k=h.variants)?void 0:k[v.variant])?b:{},v),E=(0,o.Pu)(null!=(x=null==(_=h.sizes)?void 0:_[v.size])?x:{},v),S=i()({},w,E,C);null!=(O=r)&&O.isMultiPart&&h.parts&&h.parts.forEach((e=>{var t;S[e]=null!=(t=S[e])?t:{}})),c()(y.current,S)||(y.current=S)}return y.current}function h(e,t){return m(e,t,{isMultiPart:!0})}},16678:function(e,t,r){"use strict";r.d(t,{XQ:function(){return i}});var n=r(73808),a=r(4651);Object.freeze(["base","sm","md","lg","xl","2xl"]);function i(e,t){return(0,n.kJ)(e)?e.map((e=>null===e?null:t(e))):(0,n.Kn)(e)?(0,a.Yd)(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}},48418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,i=(a=r(67294))&&a.__esModule?a:{default:a},o=r(76273),l=r(90387),s=r(57190);var c={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=l.useRouter(),f=i.default.useMemo((function(){var t=n(o.resolveHref(a,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?o.resolveHref(a,e.as):i||r}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,k=n(s.useIntersection({rootMargin:"200px"}),2),x=k[0],_=k[1],O=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=_&&r&&o.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(a,d,p,{locale:t})}),[p,d,_,g,r,a]);var w={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:i,locale:s,scroll:l}))}(e,a,d,p,h,v,y,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(p,C,a&&a.locales,a&&a.domainLocales);w.href=E||o.addBasePath(o.addLocale(p,C,a&&a.defaultLocale))}return i.default.cloneElement(t,w)};t.default=f},57190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=a.useRef(),c=n(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(67294),i=r(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},9008:function(e,t,r){e.exports=r(5443)},35063:function(e,t,r){e.exports=r(48418)},11163:function(e,t,r){e.exports=r(90387)},69590:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(s=l;0!==s--;)if(!i(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(s=l;0!==s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=l;0!==s--;)if(!Object.prototype.hasOwnProperty.call(o,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!==s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!i(e[c[s]],o[c[s]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}}]);