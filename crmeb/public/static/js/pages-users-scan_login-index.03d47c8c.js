(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-scan_login-index"],{"449b":function(n,e,t){"use strict";var a;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a}));var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"scan_login"},[t("v-uni-view",{staticClass:"head"},[t("v-uni-image",{attrs:{src:n.userInfo.avatar,mode:""}}),t("v-uni-view",{staticClass:"big"},[n._v(n._s(n.userInfo.nickname))]),t("v-uni-view",{staticClass:"small"},[n._v("点击授权登录您的客服工作台")]),t("v-uni-view",{staticClass:"sub_btn btn",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.scanLogin.apply(void 0,arguments)}}},[n._v("授权登录")]),t("v-uni-view",{staticClass:"out btn",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.closePage.apply(void 0,arguments)}}},[n._v("取消")])],1)],1)},o=[]},7343:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t("3474"),i=t("da79"),o={name:"scan_login",data:function(){return{code:"",userInfo:{}}},onLoad:function(n){this.code=n.key,this.codeStauts(),this.getUserInfo()},methods:{codeStauts:function(){var n=this;(0,i.codeStauts)({code:this.code}).then((function(n){})).catch((function(e){n.openModel(e)}))},scanLogin:function(){var n=this;this.code?(0,i.kefuScanLogin)({code:this.code}).then((function(n){uni.showToast({title:n.msg,icon:"success"}),setTimeout((function(n){WeixinJSBridge.call("closeWindow")}),2e3)})).catch((function(e){n.openModel(e)})):this.openModel("没有登录的code，请重新扫码")},openModel:function(n){uni.showModal({title:"提示",content:n,success:function(n){n.confirm?WeixinJSBridge.call("closeWindow"):n.cancel}})},closePage:function(){WeixinJSBridge.call("closeWindow")},getUserInfo:function(){var n=this;(0,a.getUserInfo)().then((function(e){n.userInfo=e.data}))}}};e.default=o}).call(this,t("5a52")["default"])},9958:function(n,e,t){var a=t("ee051");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("4f06").default;i("6da0be50",a,!0,{sourceMap:!1,shadowMode:!1})},"9e95":function(n,e,t){"use strict";var a=t("9958"),i=t.n(a);i.a},a15a:function(n,e,t){"use strict";t.r(e);var a=t("449b"),i=t("bda3");for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t("9e95");var c,s=t("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1c0a4925",null,!1,a["a"],c);e["default"]=u.exports},bda3:function(n,e,t){"use strict";t.r(e);var a=t("7343"),i=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);e["default"]=i.a},ee051:function(n,e,t){var a=t("24fb");e=a(!1),e.push([n.i,"uni-page-body[data-v-1c0a4925]{height:100%;background:#fff}.scan_login .head[data-v-1c0a4925]{display:flex;flex-direction:column;align-items:center;padding-top:%?96?%}.scan_login .head uni-image[data-v-1c0a4925]{width:%?178?%;height:%?178?%;border-radius:50%}.scan_login .head .big[data-v-1c0a4925]{margin:%?20?% 0 %?10?%;font-size:%?32?%;color:#282828}.scan_login .head .small[data-v-1c0a4925]{color:#9f9f9f;font-size:%?28?%}.scan_login .head .btn[data-v-1c0a4925]{display:flex;align-items:center;justify-content:center;width:%?594?%;height:%?86?%;margin:%?28?% auto 0;font-size:%?30?%;color:#fff;border-radius:%?43?%;background:linear-gradient(90deg,#3875ea,#1890fc)}.scan_login .head .btn.out[data-v-1c0a4925]{border:1px solid #3875ea;background:none;color:#3875ea}.scan_login .head .btn.sub_btn[data-v-1c0a4925]{margin-top:%?96?%}body.?%PAGE?%[data-v-1c0a4925]{background:#fff}",""]),n.exports=e}}]);