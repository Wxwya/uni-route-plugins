/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */
var t=function(){return t=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},t.apply(this,arguments)};function n(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,u)}c((r=r.apply(t,n||[])).next())}))}function e(t,n){var e,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=u(0),a.throw=u(1),a.return=u(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(c){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(e=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(t,i)}catch(t){u=[6,t],r=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function r(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}function o(){var t=!1,n=null;return{isNext:function(){return t},navigat:function(){return n},next:function(e){n=e||null,t=!0}}}function i(t,n){return t[n]||{}}function a(t){void 0===t&&(t="加载中"),uni.showLoading({title:t,mask:!0})}"function"==typeof SuppressedError&&SuppressedError;var u,c=["navigateTo","redirectTo","switchTab","reLaunch","navigateBack"],f={loading:!0,loadingText:"加载中",startPage:"/",routerMeta:{},notFound:"/pages/notFound/index"},l={path:"/",options:{},url:"/",type:"switchTab"},s={options:{},path:"/",type:"switchTab",url:"/"};function p(){var t;null===(t=null==this?void 0:this.$)||void 0===t||t.onLoad[0]()}function h(t){return n(this,void 0,void 0,(function(){var n,r,i,c,p,h=this;return e(this,(function(e){switch(e.label){case 0:return n=o(),r=n.next,i=n.isNext,c=n.navigat,f.loading&&a(f.loadingText),[4/*yield*/,u.beforeEachFunc({next:r,to:l,from:s})];case 1:return e.sent(),f.loading&&uni.hideLoading(),i()?(t.forEach((function(t){t.call(h,h.$scope.options)})),(p=c())?uni[p.type]({url:p.url}):u.afterEachFunc({to:l,from:s})):uni[s.type]({url:s.url}),[2/*return*/]}}))}))}c.forEach((function(t){uni.addInterceptor(t,{fail:function(){f.notFound&&uni.navigateTo({url:f.notFound})}})}));var d,y={onLaunch:function(){uni.onBeforeAppRoute((function(t){var n=i(f.routerMeta,"/"+t.path);s=l,l={path:"/"+t.path,options:t.query,url:"/"+t.path,type:"appLaunch"===t.openType?"switchTab":t.openType,meta:n}}))},beforeCreate:function(){return n(this,void 0,void 0,(function(){var t;return e(this,(function(n){return"page"==this.mpType&&(t=this.$.onLoad?r([],this.$.onLoad,!0):[],t=this.$onShow?r(r([],t,!0),this.$onShow,!0):t,this.$.onLoad=[h.bind(this,t)],this.$.onShow=[]),[2/*return*/]}))}))},mounted:function(){var t=this;nextTick((function(){"page"===t.$mpType&&t.$.onShow.unshift(p.bind(t))}))}},v="加载中",b="/",g={},w="/pages/notFound/index",E=[{path:b,url:b,options:{},type:"switchTab"}],x={path:"/",options:{},url:"/",type:"switchTab"},m={options:{},path:"/",type:"switchTab",url:"/"},T=Object.fromEntries(c.map((function(t){return[t,uni[t]]})));c.forEach((function(r){uni[r]=function(u){return n(void 0,void 0,void 0,(function(){var n,c,f,l,s,p,h,y,b,F,L,$;return e(this,(function(e){switch(e.label){case 0:return n=o(),c=n.next,f=n.isNext,l=n.navigat,p=u.success||function(){},h=u.fail||function(){},"navigateBack"!=r?(b=function(t){var n=t.split("?")||[t,""],e=n[0],r=n[1],o=void 0===r?"":r;return{path:e,query:Object.fromEntries(o.split("&").map((function(t){return t.split("=").map(decodeURIComponent)})))}}(u.url),F=b.path,L=b.query,s={path:F,options:L,url:u.url,type:r,meta:i(g,F)},y=x,x=s,m=y,E.push(s)):(u=t({delta:1},u),m=E[E.length-u.delta],E.splice(-u.delta),x=E[E.length-1],s=x),a(v),[4/*yield*/,d.beforeEachFunc({next:c,to:s,from:m})];case 1:if(e.sent(),uni.hideLoading(),f()){if($=l())return uni[$.type]({url:$.url}),[2/*return*/];T[s.type]({url:s.url,success:function(){p(),d.afterEachFunc},fail:function(){h(),uni.navigateTo({url:w})}})}else uni[m.type]({url:m.url});return[2/*return*/]}}))}))}}));
// #ifdef MP-WEIXIN
// #endif
var F={beforeEachFunc:function(){},afterEachFunc:function(){},beforeEach:function(t){if("function"!=typeof t)throw new Error("beforeEach 必须是一个函数");this.beforeEachFunc=t},afterEach:function(t){if("function"!=typeof t)throw new Error("afterEach 必须是一个函数");this.afterEachFunc=t},install:function(t){t.mixin(this)}},L=function(n){
// #ifdef MP-WEIXIN
return function(n,e){return Object.assign(f,n),n.startPage&&(s.path=n.startPage,s.url=n.startPage,l.path=n.startPage,l.url=n.startPage),u=t(t({},y),e)}(n,F);
// #endif
};export{L as default};
