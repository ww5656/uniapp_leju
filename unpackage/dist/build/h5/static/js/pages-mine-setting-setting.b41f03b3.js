(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-setting"],{"057d":function(t,i,s){"use strict";var n=s("0dc3"),a=s.n(n);a.a},"0dc3":function(t,i,s){var n=s("5c2c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=s("4f06").default;a("448bb20a",n,!0,{sourceMap:!1,shadowMode:!1})},"305d":function(t,i,s){"use strict";s.r(i);var n=s("7cf4"),a=s.n(n);for(var e in n)"default"!==e&&function(t){s.d(i,t,function(){return n[t]})}(e);i["default"]=a.a},"4b71":function(t,i,s){"use strict";var n=s("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.isLogin=e,i.checkLogin=c;var a=n(s("e335"));s("fa04");function e(){var t=a.default.state.user.userInfo;if(t.username)return!0;var i=uni.getStorageSync("LEJU_USER");return!!i.username&&(a.default.state.user.userInfo=i,!0)}function c(t){e()?t():uni.showModal({title:"未登录",content:"您未登录，需要登录后才能查看",success:function(t){t.confirm?uni.reLaunch({url:"/pages/mine/login/login"}):t.cancel&&uni.navigateBack({delta:1})}})}},"5c2c":function(t,i,s){i=t.exports=s("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-14575e73]{background-color:#f3f3f3}.icon[data-v-14575e73]{font-size:%?30?%}.content[data-v-14575e73]{padding-bottom:%?20?%}.content .list[data-v-14575e73]{width:96%;padding-left:4%;background-color:#fff;margin-bottom:%?20?%}.content .list .row[data-v-14575e73]{widows:100%;min-height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:solid %?1?% #eee}.content .list .row[data-v-14575e73]:last-child{border-bottom:none}.content .list .row .title[data-v-14575e73]{font-size:%?32?%;color:#333}.content .list .row .right[data-v-14575e73]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.content .list .row .right .tis[data-v-14575e73]{font-size:%?26?%;margin-right:%?5?%;max-height:%?120?%}.content .list .row .right .tis uni-image[data-v-14575e73]{width:%?100?%;height:%?100?%;border-radius:100%;margin:%?10?% 0}.content .list .row .right .icon[data-v-14575e73]{width:%?40?%;color:#cecece}.content .list .row .right .icon img[data-v-14575e73]{width:%?36?%;height:%?36?%}body.?%PAGE?%[data-v-14575e73]{background-color:#f3f3f3}',""])},"5f74":function(t,i,s){"use strict";var n,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("头像")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"},[n("v-uni-image",{attrs:{src:t.userInfo.avatar,mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("昵称")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"},[t._v(t._s(t.userInfo.nickname))]),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("个性签名")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"},[t._v("这人太懒了，什么都不写")]),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("收货地址")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("账户安全")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("通知提醒")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("支付设置")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("通用")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("版本升级")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"},[t._v("v1.0.0")]),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("清除缓存")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("问题反馈")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"title"},[t._v("关于商城")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tis"}),n("v-uni-view",{staticClass:"icon xiangyou"},[n("img",{attrs:{src:s("cd43"),alt:!0}})])],1)],1)],1)],1),n("v-uni-button",{attrs:{type:"warn"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doLogout.apply(void 0,arguments)}}},[t._v("退出登录")])],1)},e=[];s.d(i,"b",function(){return a}),s.d(i,"c",function(){return e}),s.d(i,"a",function(){return n})},"7cf4":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s("4b71"),a={data:function(){return{}},methods:{showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},doLogout:function(){var t=this;uni.showModal({title:"提示",content:"你确定退出当前账号",success:function(i){i.confirm?(console.log("用户点击确定"),t.$store.dispatch("user/logout"),uni.switchTab({url:"../index"})):i.cancel&&console.log("用户点击取消")}})}},onLoad:function(){(0,n.checkLogin)(function(){})},computed:{userInfo:function(){return this.$store.getters.user}}};i.default=a},9815:function(t,i,s){"use strict";s.r(i);var n=s("5f74"),a=s("305d");for(var e in a)"default"!==e&&function(t){s.d(i,t,function(){return a[t]})}(e);s("057d");var c,o=s("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"14575e73",null,!1,n["a"],c);i["default"]=r.exports},cd43:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZUlEQVRYR8XXPUrFQBAH8P/kCJ7AE9hYBbKbPYC1FoKFIFpYiBaChR+FYCG8wkJ4YCFYCJYW9hskjXfwBh5hRxa2EMG3XxNf2iz7/zE7ySSEJV+Ukt+27co4jl8pa3PXRAHGmFXn3CeAF2vtZm5AbH0U0HXdetM0H2EjcUQU4IO11lsAnqdAJAECYhvAkzQiGRAQOwAeJRFZgIDYBfAghcgG+OC+7/eYeS6BKAL4YKXUARHd1yKKAQFxSER3NYgqQEAcEdGsFFENCI15AuC2BCECCIhTADe5CDFAeDrOmPk6ByEKCIhzZr4KiLm1dn/RQBIHaK0vAVz4UGaeDcNw/G+An+Gp41usAiXhvjIigNJwEUBNeDWgNrwKoLX2ne473l/Fn2pFPSAVXlQByfBsgMSZ/34pJR/BFOHJFZgqPAlgjNlwzr3Wdvtf8yB6BEqpNSJ6A/C+lF+zRZNM4l60AhIhi/b4BpZ2oiFEP6i2AAAAAElFTkSuQmCC"}}]);