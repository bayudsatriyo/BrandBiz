/*! For license information please see app~95cb224e.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbrandbiz=self.webpackChunkbrandbiz||[]).push([[760],{8414:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var a=n&&n.prototype instanceof f?n:f,o=Object.create(a.prototype),u=new S(r||[]);return i(o,"_invoke",{value:L(t,e,u)}),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function f(){}function m(){}function g(){}var y={};l(y,u,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(_([])));k&&k!==n&&e.call(k,u)&&(y=k);var b=g.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function a(i,o,u,c){var s=d(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):n.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){a(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=E(o,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function E(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function M(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return m.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var o=new x(h(n,e,r,a),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function u(t){i(o,r,a,u,c,"next",t)}function c(t){i(o,r,a,u,c,"throw",t)}u(void 0)}))}}e.d(n,{Z:()=>u});const u={render:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <div class="container">\n      <h1 class="judul">Definisi Nilai Merek Dalam Branding</h1>\n      <img src="https://i.postimg.cc/sgYpXtG1/6666301.jpg" alt="introduction" crossorigin="anonymous">\n      <div class="deskripsi">\n      <h1>Apakah kalian sudah mengetahui apa itu Merek ?</h1>\n      <p>Merek adalah simbol, vokal, atau desain tertentu yang digunakan oleh suatu perusahaan untuk membedakan produk atau layanannya dari produk atau \n      layanan yang ditawarkan oleh perusahaan lain. Merek menjadi sangat penting untuk produk UMKM karena produk UMKM seringkali bersaing dengan produk-produk yang lebih besar dan lebih terkenal. \n      Dengan merek yang kuat dan berarti, produk UMKM dapat membedakan dirinya dari produk lain dan mendorong pengguna untuk memilih produk mereka.</p>\n      <p>Definisi nilai merek dalam branding produk UMKM sangat penting dalam membangun produk yang dimiliki perusahaan dengan baik. Nilai merek terdiri dari kepercayaan, kualitas, keaslian, dan \n      konsistensi yang diberikan pada merek produk UMKM tersebut. Dalam membangun merek yang kuat, UMKM harus mempertimbangkan beberapa faktor, seperti: </p>\n      <p>1. Deskripsikan visi dan misi UMKM Anda - Jangan hanya fokus pada produk yang dihasilkan, tetapi pikirkan tentang visi dan misi UMKM Anda. Hal ini dapat membantu Anda menentukan nilai-nilai inti yang ingin dicerminkan merek.</p>\n      <p>2. Identifikasi sasaran pasar - UMKM yang sukses memahami sasarannya dengan baik. Dengan memahami siapa yang ingin Anda jual, Anda dapat menyesuaikan nilai merek untuk mencerminkan apa yang penting bagi target pasar Anda.</p>\n      <p>3. Tentukan nilai inti produk Anda - Nilai inti meliputi hal seperti kualitas, keandalan, keaslian, dan inovasi - hal-hal yang membuat produk Anda unik. Nilai inti ini harus dicerminkan dalam branding merek Anda.</p>\n      <p>4. Tentukan pesan merek - Pesan yang Anda sampaikan melalui merek Anda harus sesuai dengan nilai-nilai merek Anda. Pesan tersebut harus jelas, mudah diingat, dan dapat memotivasi pengguna untuk membeli produk Anda.</p>\n      <p>5. Gunakan media sosial dan konten pemasaran - Dalam dunia digital saat ini, media sosial adalah cara yang paling efektif dalam mempromosikan merek dan memasarkan produk UMKM. Gunakan media sosial untuk membangun kesadaran merek dan gunakan konten pemasaran untuk mendukung nilai-nilai inti yang ingin dicerminkan dalam branding merek Anda.</p>\n      <br>\n      <p>Nilai merek dapat membantu UMKM untuk membangun hubungan jangka panjang dengan pelanggan dan meningkatkan kepercayaan pelanggan pada merek dan produk Anda. Dalam waktu yang lama, nilai merek yang baik dapat meningkatkan nilai merek, konversi penjualan, dan meningkatkan reputasi UMKM yang bersangkutan.</p>\n      </div>\n      </div>\n      <div class="transition_page">\n      <a href="#/analisis">Kembali</a>\n      <a href="#/logo">Selanjutnya</a>\n      </div>\n        ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(t){t.setAttribute("hidden","")}));case 10:case"end":return t.stop()}}),t)})))()}}},2631:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var a=n&&n.prototype instanceof f?n:f,o=Object.create(a.prototype),u=new S(r||[]);return i(o,"_invoke",{value:L(t,e,u)}),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function f(){}function m(){}function g(){}var y={};l(y,u,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(_([])));k&&k!==n&&e.call(k,u)&&(y=k);var b=g.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function a(i,o,u,c){var s=d(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):n.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){a(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=E(o,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function E(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function M(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return m.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var o=new x(h(n,e,r,a),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function u(t){i(o,r,a,u,c,"next",t)}function c(t){i(o,r,a,u,c,"throw",t)}u(void 0)}))}}e.d(n,{Z:()=>u});const u={render:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <div class="container about"> <h1>About BrandBiz</h1> \n      <p>BrandBiz adalah website edukasi yang menyediakan materi materi mengenai Branding Produk untuk pengusaha atau UMKM.\n      BrandBiz bertujuan untuk membantuk meningkatkan kualitas UMKM di Indonesia, agar UMKM di indonesia mampu bersaing mengikuti pasar global dan dapat mencapai target yang maksimal.\n      dengan materi materi yang kami sediakan, harapan kami agar UMKM mampu menerapkan branding pada produk UMKM menjadi lebih maksimal dan menjadi lebih dikenal oleh masyarakat</p>\n    <h2>Our Team</h2>\n    <div class="tim-container">\n        <div class="tim blue">\n            <img src="https://i.postimg.cc/RVKBMJhR/tim1.jpg" alt="Gerry Geraldi">\n            <h2>Gerry Geraldi</h2>\n            <h3>Head Team Project</h3>\n            <p>UNDIKNAS University</p>\n        </div>\n        <div class="tim blue">\n            <img src="https://i.postimg.cc/G2GQBRyZ/tim2.jpg" alt="Bayu Dwi Satrio">\n            <h2>Bayu Dwi Satriyo</h2>\n            <h3>Front End & Back End Developer</h3>\n            <p>Universitas Sahid Surakarta</p>\n        </div>\n        <div class="tim blue">\n            <img src="https://i.postimg.cc/tTQdGcMD/tim3.jpg" alt="Heri Irawan">\n            <h2>Heri Irawan</h2>\n            <h3>Front-end Developer</h3>\n            <p>Universitas Teknologi Mataram</p>\n        </div>\n    </div>\n</div>\n              ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return o(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.getElementById("hamburgerButton"),e=document.getElementById("signInHome"),n.setAttribute("hidden",""),e.addEventListener("click",(function(t){t.preventDefault(),localStorage.setItem("user","login"),e.setAttribute("hidden",""),location.assign("#/login")}));case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~95cb224e.bundle.js.map