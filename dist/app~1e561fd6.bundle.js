/*! For license information please see app~1e561fd6.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbrandbiz=self.webpackChunkbrandbiz||[]).push([[293],{2027:(n,t,e)=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function a(){a=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function d(n,t,e,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),u=new S(r||[]);return i(o,"_invoke",{value:x(n,e,u)}),o}function p(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=d;var h={};function m(){}function f(){}function g(){}var y={};l(y,u,(function(){return this}));var k=Object.getPrototypeOf,v=k&&k(k(_([])));v&&v!==t&&e.call(v,u)&&(y=v);var b=g.prototype=m.prototype=Object.create(y);function w(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function a(i,o,u,c){var s=p(n[i],n,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){a("next",n,u,c)}),(function(n){a("throw",n,u,c)})):t.resolve(d).then((function(n){l.value=n,u(l)}),(function(n){return a("throw",n,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){a(n,e,t,r)}))}return o=o?o.then(r,r):r()}})}function x(n,t,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=E(o,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=p(n,t,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function E(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,E(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var a=p(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function M(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function _(n){if(n){var t=n[u];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:f,configurable:!0}),f.displayName=l(g,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,l(n,s,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},w(L.prototype),l(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,a,i){void 0===i&&(i=Promise);var o=new L(d(t,e,r,a),i);return n.isGeneratorFunction(e)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=_,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return o.type="throw",o.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),M(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:_(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},n}function i(n,t,e,r,a,i,o){try{var u=n[i](o),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function u(n){i(o,r,a,u,c,"next",n)}function c(n){i(o,r,a,u,c,"throw",n)}u(void 0)}))}}e.d(t,{Z:()=>u});const u={render:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="container">\n    <h1 class="judul">Pengenalan Branding</h1>\n    <img src="https://i.postimg.cc/cJ5jBZHr/7811254.jpg" alt="introduction" crossorigin="anonymous">\n    <div class="deskripsi">\n    <h1>Apasih Branding itu ?</h1>\n    <p>Branding adalah proses membangun citra, identitas, dan reputasi bisnis atau produk dalam benak konsumen. \n    Branding sangat penting bagi produk UMKM karena lebih dari sekedar membuat logo atau nama merek, branding dapat \n    membantu UMKM membangun hubungan emosional dengan pelanggan, membedakan produk dari pesaing, dan meningkatkan nilai jual produk.</p>\n    <p>Membangun branding yang kuat bagi produk UMKM dapat membantu meningkatkan keterlibatan pelanggan, meningkatkan kesadaran merek pada pasar, \n    dan membuat produk lebih mudah diingat oleh konsumen. Dengan membangun branding yang kuat, UMKM dapat membedakan diri dari pesaing, \n    membangun kepercayaan pelanggan, dan memperluas pangsa pasar. Hal ini dapat membantu UMKM tumbuh dan berkembang dalam jangka panjang.</p>\n    </div>\n    </div>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(n){n.setAttribute("hidden","")}));case 10:case"end":return n.stop()}}),n)})))()}}},5859:(n,t,e)=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function a(){a=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function d(n,t,e,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),u=new S(r||[]);return i(o,"_invoke",{value:x(n,e,u)}),o}function p(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=d;var h={};function m(){}function f(){}function g(){}var y={};l(y,u,(function(){return this}));var k=Object.getPrototypeOf,v=k&&k(k(_([])));v&&v!==t&&e.call(v,u)&&(y=v);var b=g.prototype=m.prototype=Object.create(y);function w(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function a(i,o,u,c){var s=p(n[i],n,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){a("next",n,u,c)}),(function(n){a("throw",n,u,c)})):t.resolve(d).then((function(n){l.value=n,u(l)}),(function(n){return a("throw",n,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){a(n,e,t,r)}))}return o=o?o.then(r,r):r()}})}function x(n,t,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=E(o,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=p(n,t,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function E(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,E(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var a=p(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function M(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function _(n){if(n){var t=n[u];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:f,configurable:!0}),f.displayName=l(g,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,l(n,s,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},w(L.prototype),l(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,a,i){void 0===i&&(i=Promise);var o=new L(d(t,e,r,a),i);return n.isGeneratorFunction(e)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=_,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return o.type="throw",o.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),M(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:_(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},n}function i(n,t,e,r,a,i,o){try{var u=n[i](o),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function u(n){i(o,r,a,u,c,"next",n)}function c(n){i(o,r,a,u,c,"throw",n)}u(void 0)}))}}e.d(t,{Z:()=>u});const u={render:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <div class="container">\n        <h1 class="judul">Konten Branding</h1>\n        <br>\n        <iframe width="853" height="480" src="https://www.youtube.com/embed/a9cPeBW0o98" title="CINEMATIC VIDEO RE-BRANDING PRODUK KEMASAN UMKM BUCANDRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n        <div class="deskripsi">\n        <p>Video diatas merupakan salah satu contoh visualisasi kontent branding produk dalam bentuk video</p>\n        <p>Konten branding mencakup aspek non-visual seperti pesan merek dan storytelling merek. Pesan merek harus mencakup informasi \n        penting tentang produk dan memberikan nilai tambah bagi pelanggan. Storytelling merek dapat membantu UMKM membangun koneksi emosional dengan pelanggan.</p>\n        <p>Pembuatan konten branding produk melibatkan beberapa langkah dan proses. Berikut adalah penjelasan lengkap mengenai pembuatan konten branding produk:\n        <br>\n        1. Analisis produk dan target pasar Hal pertama yang harus dilakukan adalah melakukan analisis produk dan target pasar. Hal ini berguna untuk mengetahui karakteristik produk dan sasaran pasar yang dituju, sehingga dapat membuat strategi pencitraan dan branding yang tepat.\n        <br>\n        2. Menentukan brand identity Langkah selanjutnya adalah menentukan brand identity. Brand identity mencakup logo, font yang digunakan, warna, slogan, dan aspek visual lainnya. Semua elemen ini harus dipilih dengan hati-hati, dan selaras dengan karakteristik produk dan target pasar.\n        <br>\n        3. Membuat konten visual Konten visual termasuk desain produk, gambar, dan visual lainnya. Desain produk harus dibuat menarik agar dapat menarik perhatian konsumen. Aspek visual ini juga harus selaras dengan brand identity yang sudah ditentukan sebelumnya.\n        <br>\n        4. Membuat konten teks Konten teks mencakup deskripsi produk, motto, pesan, cerita, dan informasi lainnya yang dibutuhkan. Konten teks harus menunjukkan nilai unik produk dan menggambarkan karakteristik produk dengan jelas.\n        <br>\n        5. Menyebarluaskan konten branding Langkah terakhir adalah menyebarluaskan konten branding. Konten branding dapat disebarluaskan melalui berbagai media seperti digital marketing, sosial media, website, brosur, video, iklan, dan lain-lain.</p>\n        <p>Dalam proses pembuatan konten branding, perlu diingat bahwa tersebut tidak hanya mencakup produknya saja, tapi juga karakter dan citra merek yang ingin ditunjukkan. Oleh karena itu, penting untuk mempertimbangkan branding sebagai bagian dari \n        strategi pemasaran yang holistik, menggabungkan pencitraan dan komunikasi merek dengan kebutuhan bisnis dan pandangan jangka panjang.</p><br>\n        <img src="https://i.postimg.cc/G22DhqJq/give-away.jpg" alt="introduction" crossorigin="anonymous">\n        <p>Gambar diatas adalah contoh kontent dalam bentuk gambar yang di promosikan melalui platform media sosial</p>\n        <p>Konten dalam branding produk UMKM bisa berupa berbagai macam jenis seperti gambar, teks, video atau audio yang bertujuan untuk mempromosikan merek dan produk. Berikut ini adalah cara membuat konten dalam branding produk UMKM yang dapat meningkatkan reputasi bisnis dan kepercayaan konsumen:\n        <br><br>\n        1.Tentukan tujuan konten Sebelum membuat konten, tentukan terlebih dahulu tujuan dari konten yang akan dibuat. Apakah untuk meningkatkan kesadaran merek, memperkenalkan produk baru, atau meningkatkan penjualan. Dengan mengetahui tujuan, maka konten akan lebih terfokus dan efektif.\n        <br>\n        2. Kenali target pasar Kenali siapa target pasar dari branding produk UMKM Anda, termasuk demografis, minat, dan kebiasaan belanja. Hal ini akan membantu dalam menentukan jenis konten apa yang paling cocok untuk target pasar Anda.\n        <br>\n        3. Pilih platform yang tepat Tentukan platform media sosial yang tepat untuk mempublikasikan konten Anda. Misalnya, jika target pasar Anda adalah remaja, maka Instagram atau Tik Tok dapat menjadi pilihan yang tepat.\n        <br>\n        4. Kreatif dan unik Buatlah konten yang kreatif dan unik, sehingga dapat menarik perhatian konsumen. Kreatifitas dapat menghasilkan konten yang lebih menonjol dan membedakan dengan merek lain.\n        <br>\n        5. Gunakan bahasa yang sesuai Gunakan bahasa yang sesuai dengan target pasar dan merek Anda. Dalam hal ini, kedekatan merek dan bahasa yang digunakan sangat penting dalam branding produk UMKM.\n        <br>\n        6. Menyampaikan pesan yang jelas Sampaikan pesan yang jelas dan mudah dipahami agar target pasar mengerti apa yang dibicarakan dalam konten. Pesan harus dapat memberikan manfaat dan nilai tambah pada audience.\n        <br>\n        7. Rutin membuat konten Buatlah konten secara rutin agar tidak membuat audience bosan dan selalu ingat dengan merek Anda. Konten yang berkualitas dan dibuat secara konsisten dapat membantu meningkatkan kesadaran merek dan penjualan produk UMKM.\n        </p>\n        <p>Dalam membuat konten, perlu dipertimbangkan bahwa merek dan produk yang mempunyai konten yang baik dan terorganisir dapat menjadi lebih menarik dan mampu bersaing di pasar.</p>\n        </div>\n        </div>\n          ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(n){n.setAttribute("hidden","")}));case 10:case"end":return n.stop()}}),n)})))()}}},6069:(n,t,e)=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function a(){a=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function d(n,t,e,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),u=new S(r||[]);return i(o,"_invoke",{value:x(n,e,u)}),o}function p(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=d;var h={};function m(){}function f(){}function g(){}var y={};l(y,u,(function(){return this}));var k=Object.getPrototypeOf,v=k&&k(k(_([])));v&&v!==t&&e.call(v,u)&&(y=v);var b=g.prototype=m.prototype=Object.create(y);function w(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function a(i,o,u,c){var s=p(n[i],n,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){a("next",n,u,c)}),(function(n){a("throw",n,u,c)})):t.resolve(d).then((function(n){l.value=n,u(l)}),(function(n){return a("throw",n,u,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){a(n,e,t,r)}))}return o=o?o.then(r,r):r()}})}function x(n,t,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var u=E(o,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=p(n,t,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function E(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,E(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var a=p(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function M(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function _(n){if(n){var t=n[u];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:f,configurable:!0}),f.displayName=l(g,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,l(n,s,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},w(L.prototype),l(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,a,i){void 0===i&&(i=Promise);var o=new L(d(t,e,r,a),i);return n.isGeneratorFunction(e)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},w(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=_,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return o.type="throw",o.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),M(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:_(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},n}function i(n,t,e,r,a,i,o){try{var u=n[i](o),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function u(n){i(o,r,a,u,c,"next",n)}function c(n){i(o,r,a,u,c,"throw",n)}u(void 0)}))}}e.d(t,{Z:()=>u});const u={render:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <style>\n      .app-bar__navigation{\n        height: 100vh;\n      }\n    </style>\n      <div class="container">\n      <h1 class="judul">Menerapkan Visual Branding</h1>\n      <div class="deskripsi">\n      <p>Visual branding adalah strategi branding yang melibatkan aspek visual seperti logo, warna, tipografi, dan gambar dalam membangun citra merek produk UMKM. Melalui visual branding, UMKM dapat menciptakan identitas visual yang kuat yang dapat membedakan produk mereka dari pesaing.</p>\n      <p>Berikut adalah beberapa poin penting yang harus dipertimbangkan dalam melakukan visual branding untuk produk UMKM:</p>\n      <h1>1. Logo</h1>\n      <p>Logo adalah elemen visual yang sangat penting dalam visual branding. Logo produk harus mudah dikenali, simpel dan mudah diingat untuk memudahkan pelanggan mengingat merek UMKM.</p>\n      <h1>2. Warna</h1>\n      <p>Warna juga sangat penting dalam visual branding. Warna-warna yang dipilih harus mencerminkan merek UMKM dan sesuai dengan sasarannya. Misalnya, warna merah dapat digunakan untuk merek yang ingin menunjukkan keberanian, sementara warna biru dapat digunakan untuk menunjukkan kepercayaan dan keamanan.</p>\n      <h1>3. Tipografi</h1>\n      <p>Tipografi adalah gaya huruf yang digunakan dalam logo dan materi visual branding lainnya. Tipografi harus mudah dibaca, cocok untuk produk UMKM, dan mencerminkan citra merek produk.</p>\n      <h1>4. Gambar</h1>\n      <p>Gambar atau visualisasi produk adalah elemen visual penting dalam visual branding. Gambar harus mencerminkan merek UMKM, sesuai dengan sasarannya, dan mudah dikenali.</p>\n      <img src="https://i.postimg.cc/0j1kbHw2/stationery-mavec-19.jpg" alt="LogoBranding" crossorigin="anonymous">\n      <p>Gambar produk produk diatas adalah implementasi dari Visual Branding, dimana secara tampilan dari desain produk mencerminkan logo produk tersebut</p>\n      <br>\n      <p>Selain itu, konsistensi merupakan kunci keberhasilan dalam visual branding. Semua elemen visual branding harus konsisten dalam setiap media yang digunakan untuk membangun merek. Hal ini akan membantu para pelanggan tetap mengingat dan terhubung dengan merek UMKM dengan mudah.</p>\n      <p>Visual branding yang baik dapat membantu produk UMKM untuk menarik minat pelanggan dan membedakan produk mereka dari pesaing. Konsumen cenderung lebih tertarik pada produk yang memiliki identitas merek yang kuat dan terlihat profesional. Dengan melalui visual branding yang baik, UMKM dapat memperkuat mereknya dan membangun kesetiaan pelanggan yang lebih baik.</p>\n      </div>\n      </div>\n        ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.getElementById("hamburgerButtonHome").setAttribute("hidden",""),document.getElementById("signInHome").setAttribute("hidden",""),document.querySelector(".nav-title img").setAttribute("hidden",""),document.getElementById("back").removeAttribute("hidden"),document.querySelectorAll("#navigationDrawerHome .listnav").forEach((function(n){n.setAttribute("hidden","")}));case 10:case"end":return n.stop()}}),n)})))()}}}}]);
//# sourceMappingURL=app~1e561fd6.bundle.js.map