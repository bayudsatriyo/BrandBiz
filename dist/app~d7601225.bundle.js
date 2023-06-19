/*! For license information please see app~d7601225.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbrandbiz=self.webpackChunkbrandbiz||[]).push([[421],{4741:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(7991),a=e(9563);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function h(t,n,e,a){var i=n&&n.prototype instanceof f?n:f,o=Object.create(i.prototype),u=new _(a||[]);return r(o,"_invoke",{value:L(t,e,u)}),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function f(){}function m(){}function g(){}var y={};l(y,u,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(O([])));k&&k!==n&&e.call(k,u)&&(y=k);var b=g.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function a(r,o,u,c){var s=d(t[r],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==i(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):n.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var o;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){a(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=j(o,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=g,r(b,"constructor",{value:g,configurable:!0}),r(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var o=new x(h(n,e,r,a),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;S(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function o(t){u(i,r,a,o,c,"next",t)}function c(t){u(i,r,a,o,c,"throw",t)}o(void 0)}))}}const s={render:function(){return c(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <section class="news">\n    <h1>News Today</h1>\n    <div class="news-container" id="newsContainer">\n    </div>\n            ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return c(o().mark((function t(){var n,e,i,u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("hamburgerButton"),e=document.getElementById("signInHome"),n.setAttribute("hidden",""),e.addEventListener("click",(function(t){t.preventDefault(),localStorage.setItem("user","login"),e.setAttribute("hidden",""),location.assign("#/login")})),t.next=6,r.Z.news();case 6:i=t.sent,console.log(i),u=document.querySelector("#newsContainer"),i.forEach((function(t){u.innerHTML+=(0,a.N)(t)}));case 10:case"end":return t.stop()}}),t)})))()}}},6298:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var a=n&&n.prototype instanceof f?n:f,o=Object.create(a.prototype),u=new _(r||[]);return i(o,"_invoke",{value:L(t,e,u)}),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function f(){}function m(){}function g(){}var y={};l(y,u,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(O([])));k&&k!==n&&e.call(k,u)&&(y=k);var b=g.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function a(i,o,u,c){var s=d(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):n.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){a(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=j(o,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var o=new x(h(n,e,r,a),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;S(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function u(t){i(o,r,a,u,c,"next",t)}function c(t){i(o,r,a,u,c,"throw",t)}u(void 0)}))}}e.d(n,{Z:()=>u});const u={render:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="container">\n    <h1 class="judul">Pentingnya Branding Produk Industri UMKM</h1>\n    <br>\n    <iframe width="853" height="480" src="https://www.youtube.com/embed/chQrV-SAjwA" title="BRANDING: Jualan Tanpa Bicara Spek, Angka, dan Kualitas Produknya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n    <div class="deskripsi">\n    <p>Branding menjadi salah satu fokus utama yang dikejar oleh para pelaku usaha. \n    Namun, kebanyakan UMKM mulai berjualan tanpa punya brand atau merek. Padahal adanya merek membuat pemasaran menjadi lebih mudah dalam memasarkan produk. \n    Berikut pentingnya branding untuk UMKM yang perlu Anda tahu,</p>\n    <h1>1. Mudah diingat masyarakat</h1>\n    <p>Melakukan branding terhadap produk yang diusung UMKM akan membantu memasarkan produk atau jasa yang disediakan. \n    Sebab dengan branding inilah maka nama produk maupun nama perusahaan mudah diingat oleh masyarakat. \n    Apalagi jika mampu membuktikan kualitas, maka dipastikan tidak sulit menarik minat lebih banyak orang untuk membeli.</p>\n    <h1>2. Menjadi pilihan utama masyarakat</h1>\n    <p>Strategi branding UMKM yang tepat menjadi solusi agar omset penjualan selama pandemi tidak terjun bebas. Sebab kualitasnya \n    sudah diakui dan akan menjadi pilihan utama masyarakat.</p>\n    <p>Praktis selama pandemi tidak perlu melakukan pemasaran apapun, karena konsumen akan datang dengan sendirinya karena \n    sudah percaya produk dan jasa UMKM Anda adalah yang terbaik.</p>\n    <h1>3. Menstabilkan dan meningkatkan penjualan</h1>\n    <p>Kepercayaan publik yang sudah berhasil didapatkan akan menstabilkan atau bahkan meningkatkan angka penjualan. Kondisi pandemi pun bisa dilalui dengan lebih \n    mudah tanpa cemas omset menurun tajam. Sebab masyarakat sudah yakin produk \n    dan jasa Anda bagus. Anda pun tidak perlu khawatir usaha akan gulung tikar di tengah terpaan pandemi.</p>\n    <h1>4. Membantu menghemat biaya usaha</h1>\n    <p>Kondisi pandemi memberikan situasi yang tidak bisa diprediksi, sebab situasi yang baik bisa berubah sebaliknya dalam tempo singkat. \n    Maka pelaku UMKM dijamin enggan melakukan pemasaran atau \n    promosi apapun karena justru mengeluarkan biaya tinggi. Padahal belum bisa dipastikan apakah kegiatan promosi ini mendatangkan profit.</p>\n    <p>Namun dengan menerapkan strategi branding UMKM yang tepat di tengah pandemi. Maka akan lebih mudah mendapat simpati dan minat publik, sehingga kedepannya tidak harus melakukan pemasaran lagi. \n    Sebab sudah sukses menanamkan sugesti kepada masyarakat bahwa brand Anda adalah yang terbaik dan wajib dipilih.</p>\n    <h1>5. Punya banyak konsumen loyal</h1>\n    <p>Punya konsumen yang loyal merupakan aset berharga di tengah masa sulit seperti sekarang. Sebab tanpa perlu melakukan promosi seperti banting harga dan cuci gudang, \n    transaksi penjualan cenderung stabil. Pelanggan atau konsumen setia lebih mudah didapatkan dengan melakukan branding.</p>\n    <br>\n    <p>Sekarang kita telah mempelajari pengertian dari Branding Produk, pasti sobat BrandBiz penasaran dengan langkah langkah untuk melakukan\n    Branding dari sebuah Produk, tanpa berlama lama mari kita lanjut ke materi berikutnya</p>\n    </div>\n    </div.\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(t){t.setAttribute("hidden","")}));case 10:case"end":return t.stop()}}),t)})))()}}},5425:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var a=n&&n.prototype instanceof f?n:f,o=Object.create(a.prototype),u=new _(r||[]);return i(o,"_invoke",{value:L(t,e,u)}),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function f(){}function m(){}function g(){}var y={};l(y,u,(function(){return this}));var v=Object.getPrototypeOf,k=v&&v(v(O([])));k&&k!==n&&e.call(k,u)&&(y=k);var b=g.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function a(i,o,u,c){var s=d(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){a("next",t,u,c)}),(function(t){a("throw",t,u,c)})):n.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return a("throw",t,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){a(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=j(o,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=d(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,a,i){void 0===i&&(i=Promise);var o=new x(h(n,e,r,a),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;S(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,n,e,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function u(t){i(o,r,a,u,c,"next",t)}function c(t){i(o,r,a,u,c,"throw",t)}u(void 0)}))}}e.d(n,{Z:()=>u});const u={render:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n        <div class="container">\n        <h1 class="judul">Strategi Marketing Dalam Branding</h1>\n        <br>\n        <iframe width="853" height="480" src="https://www.youtube.com/embed/vxjLDc8aQ5k" title="Kelas Fantastic Brand | Belajar Branding Produk Strategi Branding yang Mudah dan Ampuh Bagi UMKM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n        <div class="deskripsi">\n        <h1>Apakah ada Strategi Khusus yang harus diterapkan dalam Branding ? <br>\n        Apa Strategi Marekting dalam branding itu ?</h1>\n        <p>Strategi marketing dalam branding produk adalah sebuah konsep perencanaan pemasaran produk untuk memberikan nilai tambah bagi konsumennya dan memperkuat branding produk. \n        Berikut ini adalah penjelasan lengkap mengenai strategi marketing dalam branding produk:\n        <br>\n        <h1>1. Studi pasar dan pesaing</h1>\n        <p>Sebelum mengembangkan strategi marketing, perlu dilakukan studi pasar dan pesaing. Hal ini berguna untuk memahami kebutuhan dan preferensi konsumen, serta mengetahui kekuatan dan kelemahan produk di pasar. Dengan begitu, strategi pemasaran yang dijalankan dapat lebih efektif.</p>\n        <h1>2. Menentukan target</h1>\n        <p>market Setelah studi pasar dan pesaing telah dilakukan, langkah selanjutnya adalah menentukan target market. Target market ini bisa berupa kelompok usia, gender, tingkat pendidikan, penghasilan, dan lain sebagainya. Dengan mengetahui target market yang tepat, aktivitas branding dapat diarahkan secara spesifik kepada kelompok tersebut.\n        </p>\n        <h1>3. Menentukan positioning produk</h1>\n        <p>Positioning produk adalah posisi produk yang ingin ditunjukkan di hati konsumen. Konsep positioning produk ini dirancang dengan melihat keunggulan produk dibandingkan pesaing dan memperkuat nilai tambah yang dimiliki produk. Dengan positioning yang tepat, produk dapat menjadi lebih menonjol di pasaran.\n        </p>\n        <h1>4. Menjalin kemitraan</h1>\n        <p>Kemitraan dapat membantu meningkatkan eksposur merek dari produk dan memperluas jangkauan pasar yang diincar. Kemitraan mungkin dilakukan dengan individu atau organisasi yang memiliki kesamaan nilai ataupun melalui endorse dari selebriti atau kreator content populer.\n        </p>\n        <h1>5. Menerapkan gaya komunikasi yang konsisten</h1>\n        <p>Gaya komunikasi tidak hanya melibatkan bahasa verbal yang dipilih, tetapi juga visual, grafis, dan sebagainya. Penting bagi sebuah produk untuk memiliki gaya komunikasi yang tegas dan konstan agar dapat membangun kesan dan nilai positif bagi konsumen.\n        </p>\n        <h1>6. Menerapkan strategi konten yang tepat</h1>\n        <p>Menerapkan strategi konten yang tepat agar dapat menjangkau dan memengaruhi lebih banyak konsumen. Strategi konten meliputi desain produk, visual konten, video, konten di media sosial, review, endorsasi, dan lainnya.\n        </p>\n        <h1>7. Mengoptimalkan kampanye promosi</h1>\n        <p>Kampanye promosi dilakukan dengan memperkenalkan produk ke khalayak tertentu melalui berbagai media atau cara. Promo yang dilakukan bisa mengambil bentuk diskon, hadiah, acara, dan lainnya. Melalui kampanye promosi, produk dapat dikenal oleh lebih banyak konsumen.</p>\n        <p>Itulah penjelasan mengenai strategi marketing dalam branding produk. Melalui strategi pemasaran yang tepat, produk dapat berhasil di pasar dan membangun citra merek yang kuat.</p>\n        <p>Bagaimana ni apakah sudah memahami mengenai strategi marketing dalam branding, pasti paham ya, jangan lupa untuk diterapkan dalam membranding produk kalian ya, semangat berwirausaha!!</p>\n        <br>\n        </div>\n        </div>\n          ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(t){t.setAttribute("hidden","")}));case 10:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~d7601225.bundle.js.map