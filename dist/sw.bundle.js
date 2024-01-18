(()=>{"use strict";var e={913:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[t.prefix,e,t.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||n(t.precache);function r(e,t){const s=t();return e.waitUntil(s),s}function i(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class o{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let h;function l(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const d=new Set;function f(e){return"string"==typeof e?new Request(e):e}s(873);class p{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=f(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=f(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=f(t);await(0,new Promise((e=>setTimeout(e,0))));const a=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=a.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(s);if(!i)return!1;const{cacheName:c,matchOptions:o}=this._strategy,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),p=u?await async function(e,t,s,n){const a=l(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===l(t.url,s))return e.match(t,n)}(h,a.clone(),["__WB_REVISION__"],o):null;try{await h.put(a,u?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:p,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=f(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class y{constructor(e={}){this.cacheName=e.cacheName||n(t.runtime),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new p(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class g extends y{constructor(e={}){e.cacheName=a(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(g.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=a.integrity,r=t.integrity,i=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,n.clone()))}return n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==g.copyRedirectedCacheableResponsesPlugin&&(n===g.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(g.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}g.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},g.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(c,i)}(t):t};class w{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new g({cacheName:a(e),plugins:[...t,new o({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=i(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return r(e,(async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return r(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let m;const _=()=>(m||(m=new w),m);s(80);const R=e=>e&&"object"==typeof e?e:{handle:e};class v{constructor(e,t,s="GET"){this.handler=R(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=R(e)}}class C extends v{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class b{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,R(e))}setCatchHandler(e){this._catchHandler=R(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let L;function U(t,s,n){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new v((({url:t})=>t.href===e.href),s,n)}else if(t instanceof RegExp)a=new C(t,s,n);else if("function"==typeof t)a=new v(t,s,n);else{if(!(t instanceof v))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return(L||(L=new b,L.addFetchListener(),L.addCacheListener()),L).registerRoute(a),a}class k extends v{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}const x={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null},T={baseUrl:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd",feedbackUrl:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/feedback",kuisUrl:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/kuis",token:"eyJhbGciOiJSUzI1NiJ9.eyJ4YW5vIjp7ImRibyI6Im1hc3Rlcjp1c2VyIiwiaWQiOjQwNzgwLCJhY2Nlc3NfdG9rZW4iOnsia2V5aWQiOiJjOTkwYzk2MS1mN2RjLTQ1NGMtODYzMy0zZWZjMmMzYzMxNTUiLCJzY29wZSI6eyJ3b3Jrc3BhY2U6Y29udGVudCI6MTUsIndvcmtzcGFjZTpkYXRhYmFzZSI6MTUsIndvcmtzcGFjZTpmaWxlIjoxNSwid29ya3NwYWNlOnJlcXVlc3RoaXN0b3J5IjoxNX19fSwiaWF0IjoxNjg2MzI5MzY5LCJuYmYiOjE2ODYzMjkzNjksImF1ZCI6Inhhbm86bWV0YSJ9.c0Qmn3GrP7mkTcr9zv2dTdocYnOnDLmKuiyBU8iT7ohzaBTj5FPMvQJs3hKDmX4T9YMFBGg7DfFw-yLKFQDjbT6eoRAsA2nxEIuf-BN-URBfmL38dLpnDUT1sRzOlZW5Krk67x9MrF5rNl1Upccb7RT6FzBM1TLkWmQenOCUwvXWndfe10K_f5pRBkO1L2s-9NHulYnbj_nxoeQAibMVYnMEaE8qsyw6JRCtv-UzZlIdkNDdo6YGMNRsIWwfp8IRILoKuNYi-nhT283a3DLIuhpEkxgOLhWZC7C1zB8jRlqHxn2GlLyJT5M32fqvzy3Ii1qQX0gyjNJnTAKbR1JHjKvayE-A717FrP1XdQBoX5UC6ZgloQQmBAKJBDxkXxdUCkBrbL63mPddVW6y8-Ilt4j4fUBZlHXCDM9gUM1TK5XWIp5CqrYaPcTX-_5Z_azIiDMGHfrAmAOQXBZjNpcVf2f_kbGyug1YhdJfV2NgL1JO1GpG5smIfDcmmjLzQ4LGzxgmjvzsyqCESogMAV-XezHtsdVQSQ-QLswsuiYI0tgVbWhL4KryaxlmE0LtQIruEV4FdqoIOx8TayZ-xhMZ4fxdCi9FJlXuu2oOt5LpVOaMyAcZr3hDGNzfHLHBb4QyYVTT_iAZ1-oQWioQoROisAa3022rLsmav0MsNnx1X6U",login:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/getLogin",nilaiKuis:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/users/",signin:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/signin",TESTIMONY:"https://x8ki-letl-twmt.n7.xano.io/api:I8GnY3yd/feedback",NEWS:"https://newsapi.org/v2/top-headlines?country=us&apiKey=9364e0be407c45b2aa2136ce65096575",CACHE_NAME:(new Date).toISOString()};var I;I=[{'revision':'ded142e6d7da6c802e9b7051582813d8','url':'2212205.jpg'},{'revision':'0ddfcd18bad5805df38dda7ed81e6dfb','url':'5031659-removebg-preview.png'},{'revision':'c08591eda0ada5154eb90cd08c30b513','url':'548377-620.jpg'},{'revision':null,'url':'608b0f8099eadf59b2a3.jpg'},{'revision':'51886843efa1d85c45b4d4e6d0721850','url':'6666301.jpg'},{'revision':'870aa3ee35ddc15ba0c9171effae7f0a','url':'6685-removebg-preview.png'},{'revision':'5bf9f290b1005c31bb7662c2a00269ae','url':'7811254.jpg'},{'revision':'cee10d549d7a94598f7b533b97f44dce','url':'885.bundle.js'},{'revision':'db8ab0103e2d73f1418b9133efe05088','url':'Banner-Image.png'},{'revision':'ab1e79ec15ec984802ff1a8e9d4c466b','url':'Brand-Biz-removebg.png'},{'revision':'fd261d7f852d90b3ddc570582192d6ba','url':'Instagram.png'},{'revision':'249a93fb270779ff259410a6412f5d51','url':'Linkedin.png'},{'revision':'c2cfcfa470c9408a5269fd5e4fdd266f','url':'Sandy-Bus-31-Single-05.jpg'},{'revision':'831039045f1c41edc5f08d3bca101dad','url':'TikTok.png'},{'revision':'1e93c04354baa60fbff6fd37a2102e07','url':'Twitter.png'},{'revision':'9f6d47b3512b020c51408bd4b2fc107a','url':'Vector.png'},{'revision':'f3e2b2248c828cda52270450c7fa97b7','url':'YouTube.png'},{'revision':null,'url':'a54c0ec32d0985e3ccd1.png'},{'revision':'7a1bae5d936442497e82315f640dfa4b','url':'app.webmanifest'},{'revision':'80ac870bdeca2873bdc030531d8172e1','url':'app~069c28ab.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~069c28ab.bundle.js.LICENSE.txt'},{'revision':'519acc9fccce34a488bf54db3281dab9','url':'app~1e561fd6.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~1e561fd6.bundle.js.LICENSE.txt'},{'revision':'8060d7b565e878c51f52ae0ccc459335','url':'app~3be1d310.bundle.js'},{'revision':'4289398debb0ef46b5947fbe5e74404d','url':'app~6cc7c93a.bundle.js'},{'revision':'6a275f1f30b0b6639687a4ebb3a6f4c5','url':'app~7bd12dde.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~7bd12dde.bundle.js.LICENSE.txt'},{'revision':'74da9dc0dad62cad76c08e66800a1654','url':'app~95cb224e.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~95cb224e.bundle.js.LICENSE.txt'},{'revision':'d10a8da0f0fc48b3c836130dc19f306a','url':'app~9edf9da0.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~9edf9da0.bundle.js.LICENSE.txt'},{'revision':'2501978334d88fe133dc37457e9afa77','url':'app~a51fa3f5.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~a51fa3f5.bundle.js.LICENSE.txt'},{'revision':'1c2bb57e14bef43e27eb847f32db056d','url':'app~cbaf28b7.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~cbaf28b7.bundle.js.LICENSE.txt'},{'revision':'c77517a2410ddaa8f989a15555ddbc30','url':'app~d7601225.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~d7601225.bundle.js.LICENSE.txt'},{'revision':'e1c13104d35c4d9f52c17c051003f7d3','url':'app~d8ac8f23.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~d8ac8f23.bundle.js.LICENSE.txt'},{'revision':'404e77ffea6b9036cefab8e57c438e69','url':'app~e4317507.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~e4317507.bundle.js.LICENSE.txt'},{'revision':'28019af392a5e094edeb4bee9466223b','url':'bayu.jpeg'},{'revision':'7ac1b4943e912abd24b968916a18f008','url':'favicon.png'},{'revision':'3981bcc7277f0fe65043d11e78dbade4','url':'give-away.jpg'},{'revision':'ec789d9fec6bd759dabeb6d8a6ed4556','url':'image1.png'},{'revision':'7c783de8ce8c467501d45468da33f677','url':'images/favicon-128x128.png'},{'revision':'12e92c96b5f2c18295c1af3a61fbc1f5','url':'images/favicon-144x144.png'},{'revision':'65dd314558a059da869c007fa35642c1','url':'images/favicon-152x152.png'},{'revision':'c5c52f8b4beb5ce174e8ab35604c2b5f','url':'images/favicon-192x192.png'},{'revision':'b9dd9efe10966525ba53a61410d06e88','url':'images/favicon-384x384.png'},{'revision':'869dd647ec8b7f10eb1f6da9800a95d9','url':'images/favicon-512x512.png'},{'revision':'d4e1e1d0ddfc6cb468f6d36baf0f910c','url':'images/favicon-72x72.png'},{'revision':'cdeab09296f56010fdcb3317463f9d25','url':'images/favicon-96x96.png'},{'revision':'5a1c584ca411b1cbd216b12c96f27ff9','url':'images/favicon.png'},{'revision':'841c01ee69293a1e573bcbe45353ca95','url':'index.html'},{'revision':'d32d0d5500ed422f8537e906c635ceca','url':'istockphoto-1413766112-170667a.jpg'},{'revision':'31c0f1e49dfdace67db7918881c48d0a','url':'jose-vazquez-Q5-RBHz9cu1-A-unsplash.jpg'}],_().precache(I),function(e){const t=_();U(new k(t,undefined))}(),self.addEventListener("install",(function(){console.log("Service Worker: Installed"),self.skipWaiting()})),U((function(e){return e.url.origin}),new class extends y{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(x)}async _handle(t,s){const n=s.fetchAndCachePut(t).catch((()=>{}));s.waitUntil(n);let a,r=await s.cacheMatch(t);if(r);else try{r=await n}catch(e){e instanceof Error&&(a=e)}if(!r)throw new e("no-response",{url:t.url,error:a});return r}}({cacheName:T.CACHE_NAME})),self.addEventListener("push",(function(){console.log("Service Worker: Pushed")}))})()})();
//# sourceMappingURL=sw.bundle.js.map