if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const t=e=>n(e,a),o={module:{uri:a},exports:r,require:t};s[a]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts("fallback-rzE3HJt_SnYqESc-lo7ZE.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/24-f10a8cdcce4b193d.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/385-fb14553188a7cecc.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/439-6147c516e7775d53.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/466-1c16be37505c67ca.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/496-a03b39a6dd0b99a1.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/511-74dc77e102a54daf.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/691-c53be285ee748e43.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/781-3498e194e440ad33.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/7e4bc21f-a663631b8493ca2b.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/841-80a566e4b80547e5.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/main-eb437b108a30900a.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/404-d8aaf2212993ca04.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/_app-6be943b11d5dcb52.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/_offline-fd10b14e475a5ae9.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/aethor-52a361201ac4d01c.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/aethor/%5Bcommands%5D-b6ba2f29941c77d4.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/aethor/invite-7e0b5cbd825b8c99.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/aethor/support-cf5474fc46dddbbd.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/bridger-3b778a8a19679bfd.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/diplo-7fd3ea0ea7d7ccc4.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/diplo/%5B...doc%5D-b5e3d86117029e48.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/discord-31a64a5487aac34c.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/donating-3addd1acde48b0e6.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/github-bf70fe99a861969d.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/index-b416d92c00eeab6c.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/matrix-13c09c119e0d4f16.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/posts-adcd0f30a00d60fe.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/posts/%5B...post%5D-ba840f85097ec505.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/projects-7c756c9d6c320a09.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/projects/%5B...project%5D-ff18c1f69277332b.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/pages/services-082eb6cecde7d331.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/css/c2174923b9667221.css",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/rzE3HJt_SnYqESc-lo7ZE/_buildManifest.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/rzE3HJt_SnYqESc-lo7ZE/_middlewareManifest.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_next/static/rzE3HJt_SnYqESc-lo7ZE/_ssgManifest.js",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/_offline",revision:"rzE3HJt_SnYqESc-lo7ZE"},{url:"/aethor.ico",revision:"b9a8f527d7d0c4657403f10549a10309"},{url:"/aethor.png",revision:"8e75687888b501ea8de7d1251e32e896"},{url:"/assets/icons/android-icon-144x144.png",revision:"063676d9db98c6f5458df18023563972"},{url:"/assets/icons/android-icon-192x192.png",revision:"535f73bca0411bee1780be38a4a8f22f"},{url:"/assets/icons/android-icon-36x36.png",revision:"72dfc35efb4a00bb9d79990bffd3deb3"},{url:"/assets/icons/android-icon-48x48.png",revision:"ed98099bbcb1710c301c31ac0f7f09cc"},{url:"/assets/icons/android-icon-72x72.png",revision:"9497a1042bdb7b4e88db5f98c0c19f36"},{url:"/assets/icons/android-icon-96x96.png",revision:"58aad480d44f02783ca7787118ec7470"},{url:"/assets/icons/apple-icon-114x114.png",revision:"c6a43869ea7c39df827794deb6b04860"},{url:"/assets/icons/apple-icon-120x120.png",revision:"db08dbfa98c026854a063052940e725f"},{url:"/assets/icons/apple-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/apple-icon-152x152.png",revision:"0467ff6306e5e42891fca6307b6e8d19"},{url:"/assets/icons/apple-icon-180x180.png",revision:"8ca1be4f0f0e353fd6bfb26ea2b31a04"},{url:"/assets/icons/apple-icon-57x57.png",revision:"5a57d64d15602f17d8c2fa428b3efca1"},{url:"/assets/icons/apple-icon-60x60.png",revision:"8f8b66f22609b62ec20cbdfb3a8c4add"},{url:"/assets/icons/apple-icon-72x72.png",revision:"3560222ae9ef7507f3d27bbc621393c4"},{url:"/assets/icons/apple-icon-76x76.png",revision:"699d89970ff1f6f6b20b319762cb2fdc"},{url:"/assets/icons/apple-icon-precomposed.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/apple-icon.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/favicon-16x16.png",revision:"0ae30ed68168a850a74be667bf7de953"},{url:"/assets/icons/favicon-32x32.png",revision:"9f094b68cd7a1cbf149789ce348307c9"},{url:"/assets/icons/favicon-96x96.png",revision:"d03678d36bcdc8982bff7b963c73dd22"},{url:"/assets/icons/favicon.ico",revision:"1ed12b0bf3222567eff48a5bbee36734"},{url:"/assets/icons/icon-128x128.png",revision:"86b1dd0df6780adbf59c69c611f4939e"},{url:"/assets/icons/icon-144x144.png",revision:"851b0ad40a7315868319802cdbe0f13d"},{url:"/assets/icons/icon-152x152.png",revision:"22b2e2c49ebf112f2e0de84fd63a8cfb"},{url:"/assets/icons/icon-192x192.png",revision:"2921593d74dc922409df1380f9afed5e"},{url:"/assets/icons/icon-384x384.png",revision:"684f42c80f77b11aff161c71c28ea9bb"},{url:"/assets/icons/icon-48x48.png",revision:"e2d2549d67623bc9dca4a9e8a81f7ec8"},{url:"/assets/icons/icon-512x512.png",revision:"25289939f1204b8b3c2e910bbd838e66"},{url:"/assets/icons/icon-72x72.png",revision:"6f5f88940358c4a3b6961ba3e8b1e1f1"},{url:"/assets/icons/icon-96x96.png",revision:"8b86c21df4f5d3f0c7e7c9694802ad95"},{url:"/assets/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/assets/icons/ms-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/ms-icon-150x150.png",revision:"0f8062a1195c9224348510346dca883c"},{url:"/assets/icons/ms-icon-310x310.png",revision:"1089bcd789b991127212d7eeda5ad229"},{url:"/assets/icons/ms-icon-70x70.png",revision:"f2a03adf6910f5834f2a0ebb3698206c"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/eth.png",revision:"3c2184e5ee0684727cb90bdb129d52b6"},{url:"/favicon.ico",revision:"be1926d71fe6a3b3912d950776d9b056"},{url:"/images/aethor.png",revision:"d5868860b84be2a0bc6ccf3523b32249"},{url:"/images/ascella.png",revision:"5531d8abb364ba1e32b2e20d51b72d3b"},{url:"/images/diplo.png",revision:"ec888c2808a47a9c359c859722bafb33"},{url:"/images/diplo_cover.png",revision:"69d030387537e55b9f56c391a62e6653"},{url:"/images/doomfetch.png",revision:"841de3cb26c8700be8e05cbaf86b9a38"},{url:"/images/linuxcommands.png",revision:"38c6a0d3d4b16e48709350add83f4a62"},{url:"/images/lowestbins.png",revision:"9f77beaaf9136d026e6c99e821abd837"},{url:"/images/malil.png",revision:"ed83342b2406a5c2a216b095cc7d8cc8"},{url:"/images/natico.png",revision:"976adb40dba0fead4905f6aae1f5b728"},{url:"/images/redditbot.png",revision:"01d9ee2be36bde58f9a6629576b5be88"},{url:"/images/scriptbot.png",revision:"6ccf5c0b4aaaa229d1e3cbf1f5aa2a44"},{url:"/images/soggaimages.png",revision:"141299ad09df8069ca2fc82563fd5679"},{url:"/images/texter.png",revision:"f01c7568d3b387f9e9e1887a25f21ffd"},{url:"/images/timages.png",revision:"e73f18ef657f6bdcb497c315aa8fc7c3"},{url:"/images/website.png",revision:"07ab1f5988a6efaa93f73ac233f01098"},{url:"/manifest.json",revision:"502de52fe576fdf6c6c5ee3679f926e9"},{url:"/robots.txt",revision:"cd1eb4b2ef627e46c744b2dc22b98c47"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));