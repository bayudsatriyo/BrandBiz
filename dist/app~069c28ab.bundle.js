/*! For license information please see app~069c28ab.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbrandbiz=self.webpackChunkbrandbiz||[]).push([[840],{3818:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),u=new j(r||[]);return o(i,"_invoke",{value:L(t,n,u)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var g={};l(g,u,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(_([])));b&&b!==e&&n.call(b,u)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(o,i,u,c){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):e.resolve(d).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=h(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function _(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new x(d(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),l(w,s,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,c,"next",t)}function c(t){o(i,r,a,u,c,"throw",t)}u(void 0)}))}}n.d(e,{Z:()=>u});const u={render:function(){return i(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="container">\n    <h1 class="judul">Kenali Audiens</h1>\n    <img src="https://i.postimg.cc/kXRwSK33/Sandy-Bus-31-Single-05.jpg" alt="introduction" crossorigin="anonymous">\n    <div class="deskripsi">\n    <p>Sebagian besar pengusaha yang baru merintis produk mereka sering kali kurang mengenali dan memahami konsumen atau audiens,\n      padahal ini sangatlah penting sebagai langkah awal dalam melakukan Branding. Lalu bagaimana cara kita untuk mengenali audiens atau konsumen ?</p>\n      <p>Berikut adalah beberapa cara untuk mengenali audiens dalam menerapkan branding sebuah produk UMKM :</p>\n      <h1>1. Analisis target pasar</h1>\n      <p>Melakukan analisis target pasar adalah cara terbaik untuk mengenali audiens Anda. Anda dapat memeriksa demografi, seperti usia, jenis kelamin, lokasi geografis, dan pendapatan. \n      Anda juga dapat mengetahui perilaku, preferensi, dan kebutuhan pelanggan potensial.</p>\n      <h1>2. Pelajari perilaku audiens</h1>\n      <p>Pelajari perilaku audiens Anda. Dengan melakukan riset pasar dan analisis data, Anda dapat mendapatkan informasi tentang kebiasaan dan preferensi konsumen terkait penggunaan produk atau layanan Anda.</p>\n      <h1>3. Tentukan posisi merek</h1>\n      <p>Tentukan di mana merek Anda berada di pasar dan identifikasi kekuatan dan kelemahan pesaing Anda. Dengan mengetahui posisi Anda dan pesaing, Anda dapat menentukan bagaimana merek Anda dapat menonjol dan menjadi pilihan terbaik bagi konsumen Anda.</p>\n      <h1>4. Membuat persona pelanggan</h1>\n      <p>Persona pelanggan adalah gambaran fiksi dari pelanggan ideal Anda. Membuat persona pelanggan dapat \n      membantu Anda lebih memahami audiens dan membangun merek Anda sesuai dengan preferensi mereka.</p>\n      <h1>5. Membuat survei</h1>\n      <p>Survei dapat membantu Anda memperoleh masukan langsung dari audiens Anda. Anda dapat mengirim survei melalui email, \n      media sosial, atau situs web Anda. Survei dapat membantu Anda memahami kebutuhan dan preferensi pelanggan potensial Anda.</p>\n      <h1>6. Mengikuti saingan</h1>\n      <p>Anda Melihat saingan Anda dapat membantu Anda memahami audiens mereka dan bagaimana merek mereka memenuhi kebutuhan pelanggan. \n      Anda dapat melihat bagaimana merek saingan membangun merek dan bagaimana merek mereka disampaikan kepada audiens.</p>\n    </div>\n    </div>\n        ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(t){t.setAttribute("hidden","")}));case 8:case"end":return t.stop()}}),t)})))()}}},1123:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),u=new j(r||[]);return o(i,"_invoke",{value:L(t,n,u)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var g={};l(g,u,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(_([])));b&&b!==e&&n.call(b,u)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(o,i,u,c){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):e.resolve(d).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=h(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function _(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new x(d(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),l(w,s,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,c,"next",t)}function c(t){o(i,r,a,u,c,"throw",t)}u(void 0)}))}}n.d(e,{Z:()=>u});const u={render:function(){return i(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <section class="learning-hero">\n      <div class="learning-hero-container">\n        <div class="learning-hero-content">\n          <h1>study from home with expert</h1>\n          <div class="learning-hero-description">\n            <p>\n              A learning system based on formalised teaching with the help of\n              resources.\n            </p>\n          </div>\n          <form>\n            <button id="getStarted">Get Started</button>\n            <button id="learnMore">Learn More</button>\n          </form>\n        </div>\n        <div class="learning-hero-image">\n          <img src="./Banner Image.png" alt="Banner Hero" />\n        </div>\n      </div>\n    </section>\n  \n<section class="learning-discover">\n      <h1>Discover</h1>\n    <div class="learning-discover-container-1">\n        <div class="discover-item">\n          <div class="discover-modul">\n          <a href="#/introduction" id="modul"><h1>Belajar Dasar Branding Produk</h1></a>\n            <div class="profile">\n              <div class="profile-name">\n                <a href="#/introduction" id="modul">Modul ini berisi mengenai pengertian dasar dasar melakukan Branding pada suatu Produk</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="discover-item2">\n          <div class="discover-modul">\n                <a href="#/learning"><h1>Belajar Dasar Strategi Pemasaran</h1></a>\n                    <div class="profile">\n                        <div class="profile-name">\n                            <p class="name">Coming Soon</p>\n                        </div>\n                    </div>\n            </div>\n        </div>\n    </div>\n      <h1 class="how">How to do Basic Jumping and how to landing safely</h1>\n      <div class="learning-discover-container-2">\n        <div class="modul-item">\n          <img src="./istockphoto-1413766112-170667a.jpg" alt="Modul" />\n          <div class="modul-description">\n            <h3 class="modul-title">\n              Basic how to ride your skateboard comfortly\n            </h3>\n            <p>Coming Soon</p>\n          </div>\n        </div>\n        <div class="modul-item">\n          <img src="./jose-vazquez-Q5RBHz9cu1A-unsplash.jpg" alt="Modul" />\n          <div class="modul-description">\n            <h3 class="modul-title">\n              Basic how to ride your skateboard comfortly\n            </h3>\n            <p>Coming Soon</p>\n          </div>\n        </div>\n      </div>\n</section>        ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(a().mark((function t(){var e,n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelectorAll("#navigationDrawerHome .listnav"),n=document.querySelector("#hamburgerButton"),r=document.getElementById("signInHome"),o=document.getElementById("modul"),r.innerText="Logout",n.setAttribute("hidden",""),e.forEach((function(t){t.setAttribute("hidden","")})),r.addEventListener("click",(function(t){t.preventDefault(),r.innerText="Masuk",document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(t){t.removeAttribute("hidden")})),localStorage.setItem("user","login"),location.assign("#/login")})),o.addEventListener("click",(function(t){r.setAttribute("hidden",""),n.removeAttribute("hidden"),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),location.assign("#/introduction")}));case 9:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~069c28ab.bundle.js.map