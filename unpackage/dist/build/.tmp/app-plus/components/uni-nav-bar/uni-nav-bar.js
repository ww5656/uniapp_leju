(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"11c0":function(t,n,e){"use strict";e.r(n);var i=e("c737"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},"12c0":function(t,n,e){"use strict";var i={"uni-status-bar":()=>e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"5844")),"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"41de"))},u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"31f1":function(t,n,e){},"969d":function(t,n,e){"use strict";var i=e("31f1"),u=e.n(i);u.a},c737:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"5844"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"41de"))},o={name:"UniNavBar",components:{uniStatusBar:i,uniIcons:u},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};n.default=o}).call(this,e("6e42")["default"])},d587:function(t,n,e){"use strict";e.r(n);var i=e("12c0"),u=e("11c0");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("969d");var r,a=e("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"69833f58",null,!1,i["a"],r);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("d587"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);