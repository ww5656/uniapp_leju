(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-address-address"],{"000e":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},t._l(t.addressList,function(e,r){return n("v-uni-view",{key:r,staticClass:"row",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(e)}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"head"},[t._v(t._s(e.name.substr(0,1)))])],1),n("v-uni-view",{staticClass:"center"},[n("v-uni-view",{staticClass:"name-tel"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"tel"},[t._v(t._s(e.tel))]),"1"==e.isUse?n("v-uni-view",{staticClass:"default"},[t._v("默认")]):t._e()],1),n("v-uni-view",{staticClass:"address"},[t._v(t._s(e.cityStr)+" "+t._s(e.cityBak))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"icon bianji",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.edit(e)}}},[n("v-uni-image",{attrs:{src:"../../../static/icons/edit.png",mode:""}})],1)],1)],1)}),1)],1),n("v-uni-view",{staticClass:"add"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tianjia"}),t._v("新增地址")],1)],1)],1)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"1c8c":function(t,e,n){"use strict";n.r(e);var r=n("6331"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n("795b"),i=n.n(r);function a(t,e,n,r,a,o,s){try{var c=t[o](s),u=c.value}catch(l){return void n(l)}c.done?e(u):i.a.resolve(u).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,c,"next",t)}function c(t){a(o,r,i,s,c,"throw",t)}s(void 0)})}}},"4b71":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.isLogin=a,e.checkLogin=o;var i=r(n("e335"));n("fa04");function a(){var t=i.default.state.user.userInfo;if(t.username)return!0;var e=uni.getStorageSync("LEJU_USER");return!!e.username&&(i.default.state.user.userInfo=e,!0)}function o(t){a()?t():uni.showModal({title:"未登录",content:"您未登录，需要登录后才能查看",success:function(t){t.confirm?uni.reLaunch({url:"/pages/mine/login/login"}):t.cancel&&uni.navigateBack({delta:1})}})}},"507e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-6ccee5a6]{display:-webkit-box;display:-webkit-flex;display:flex}.add[data-v-6ccee5a6]{position:fixed;bottom:0;width:100%;height:%?120?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add .btn[data-v-6ccee5a6]{box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);width:70%;height:%?80?%;border-radius:%?80?%;background-color:#f06c7a;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.add .btn .icon[data-v-6ccee5a6]{height:%?80?%;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list[data-v-6ccee5a6]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row[data-v-6ccee5a6]{width:96%;padding:%?20?% 2%}.list .row .left[data-v-6ccee5a6]{width:%?90?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .row .left .head[data-v-6ccee5a6]{width:%?70?%;height:%?70?%;background:-webkit-linear-gradient(left,#ccc,#aaa);background:linear-gradient(90deg,#ccc,#aaa);color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?60?%;font-size:%?35?%}.list .row .center[data-v-6ccee5a6]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row .center .name-tel[data-v-6ccee5a6]{width:100%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.list .row .center .name-tel .name[data-v-6ccee5a6]{font-size:%?34?%}.list .row .center .name-tel .tel[data-v-6ccee5a6]{margin-left:%?30?%;font-size:%?24?%;color:#777}.list .row .center .name-tel .default[data-v-6ccee5a6]{font-size:%?22?%;background-color:#f06c7a;color:#fff;padding:0 %?18?%;border-radius:%?24?%;margin-left:%?20?%}.list .row .center .address[data-v-6ccee5a6]{width:100%;font-size:%?24?%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;color:#777}.list .row .right[data-v-6ccee5a6]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%}.list .row .right .icon[data-v-6ccee5a6]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?80?%;height:%?60?%;border-left:solid %?1?% #aaa;font-size:%?40?%;color:#777}.list .row .right .icon uni-image[data-v-6ccee5a6]{width:%?40?%;height:%?40?%}',""])},"5f4a":function(t,e,n){"use strict";n.r(e);var r=n("000e"),i=n("1c8c");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("c43e");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"6ccee5a6",null,!1,r["a"],o);e["default"]=c.exports},6331:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("3b8d")),a=n("4b71"),o=n("bcf2"),s={data:function(){return{isSelect:!1,addressList:[{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0},{id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深北小道2222号有名公寓502"},isDefault:!1},{id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1},{id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1}]}},onShow:function(){var t=this;this.getAddressList(),uni.getStorage({key:"delAddress",success:function(e){var n=t.addressList.length;if(e.data.hasOwnProperty("id"))for(var r=0;r<n;r++)if(t.addressList[r].id==e.data.id){t.addressList.splice(r,1);break}uni.removeStorage({key:"delAddress"})}}),uni.getStorage({key:"saveAddress",success:function(e){var n=t.addressList.length;if(e.data.hasOwnProperty("id")){for(var r=0;r<n;r++)if(t.addressList[r].id==e.data.id){t.addressList.splice(r,1,e.data);break}}else{var i=t.addressList[n-1];i++,e.data.id=i,t.addressList.push(e.data)}uni.removeStorage({key:"saveAddress"})}})},onLoad:function(t){var e=this;(0,a.checkLogin)(function(){e.getAddressList()}),"select"==t.type&&(this.isSelect=!0)},methods:{getAddressList:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.addressList)({userId:this.$store.getters.userId});case 2:e=t.sent,n=e.data,this.addressList=n,console.log(n);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),edit:function(t){uni.setStorage({key:"address",data:t,success:function(){uni.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){uni.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&uni.setStorage({key:"selectAddress",data:t,success:function(){uni.navigateBack()}})}}};e.default=s},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=m;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",p={},g={};g[o]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(T([])));y&&y!==r&&i.call(y,o)&&(g=y);var b=_.prototype=x.prototype=Object.create(g);L.prototype=b.constructor=_,_.constructor=L,_[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[s]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,r){var i=new E(m(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function m(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,a=Object.create(i.prototype),o=new P(r||[]);return a._invoke=S(t,n,o),a}function k(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function L(){}function _(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(n,r,a,o){var s=k(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,o)})}o(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return z()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=k(t,e,n);if("normal"===c.type){if(r=n.done?v:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=k(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a36f:function(t,e,n){var r=n("507e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("04cd7553",r,!0,{sourceMap:!1,shadowMode:!1})},bcf2:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.addressList=a,e.addressSave=o,e.addressUpdate=s,e.addressDel=c;var i=r(n("e89f"));function a(t){return(0,i.default)({url:"/api/leju/front/address/list",data:t})}function o(t){return(0,i.default)({url:"/api/leju/front/address/save",data:t,method:"POST"})}function s(t){return(0,i.default)({url:"/api/leju/front/address/update",data:t,method:"POST"})}function c(t){return(0,i.default)({url:"/api/leju/front/address/del",data:t})}},c43e:function(t,e,n){"use strict";var r=n("a36f"),i=n.n(r);i.a}}]);