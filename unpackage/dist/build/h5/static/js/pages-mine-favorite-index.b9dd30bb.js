(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-favorite-index"],{"268d":function(t,e,i){"use strict";i.r(e);var n=i("7207"),a=i("c47e");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("37e9");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5f41f437",null,!1,n["a"],r);e["default"]=c.exports},"37e9":function(t,e,i){"use strict";var n=i("fea4"),a=i.n(n);a.a},"6c27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Favorite",props:{},data:function(){return{FavoriteList:[]}},onLoad:function(){this.FavoriteList=uni.getStorageSync("LEJU_KEEP"),console.log(this.FavoriteList)},computed:{},created:function(){},mounted:function(){},watch:{},methods:{},components:{}};e.default=n},7207:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Favorite-main"},t._l(t.FavoriteList,function(e){return i("v-uni-view",{key:e.id,staticClass:"Favorite-item"},[i("v-uni-image",{attrs:{src:e.coverImg,mode:""}}),i("v-uni-view",{staticClass:"good-info"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.gname))]),i("v-uni-view",{staticClass:"goodsNum"},[t._v("商品编号 : "+t._s(e.id))]),i("v-uni-view",{staticClass:"favorite-price"},[i("v-uni-view",{staticClass:"favorite"},[t._v("收藏 : "+t._s(e.pcode))]),i("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(e.price))])],1)],1)],1)}),1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},9530:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Favorite-main .Favorite-item[data-v-5f41f437]{width:%?672?%;height:%?208?%;margin:%?50?% auto 0 auto;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-shadow:0 8px 16px 0 rgba(83,66,49,.08);border-radius:24px;border-radius:24px}.Favorite-main .Favorite-item uni-image[data-v-5f41f437]{width:%?140?%;height:%?140?%}.Favorite-main .Favorite-item .good-info[data-v-5f41f437]{width:%?400?%;height:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.Favorite-main .Favorite-item .good-info .title[data-v-5f41f437]{font-size:%?26?%;color:#3e3e3e;letter-spacing:%?1.86?%;font-weight:700}.Favorite-main .Favorite-item .good-info .goodsNum[data-v-5f41f437]{font-size:%?22?%;color:#8d8d8d;letter-spacing:%?1.57?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Favorite-main .Favorite-item .good-info .favorite-price[data-v-5f41f437]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;color:#3e3e3e;letter-spacing:%?1.71?%}',""])},c47e:function(t,e,i){"use strict";i.r(e);var n=i("6c27"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},fea4:function(t,e,i){var n=i("9530");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d6c9d17a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);