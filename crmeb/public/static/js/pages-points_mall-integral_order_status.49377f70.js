(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-integral_order_status"],{"0d31":function(t,e,n){"use strict";var a=n("27f5"),i=n.n(a);i.a},"27f5":function(t,e,n){var a=n("dcb2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("980f7456",a,!0,{sourceMap:!1,shadowMode:!1})},"4f72":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=r,e.getCombinationDetail=o,e.getCombinationPink=s,e.postCombinationRemove=u,e.getBargainList=c,e.getCombinationBannerList=d,e.getPink=f,e.getBargainUserList=l,e.getBargainDetail=p,e.postBargainStartUser=g,e.postBargainStart=v,e.postBargainHelp=b,e.postBargainHelpPrice=m,e.postBargainHelpList=_,e.postBargainHelpCount=h,e.postBargainShare=w,e.getSeckillIndexTime=y,e.getSeckillList=C,e.getSeckillDetail=x,e.getBargainPoster=k,e.getCombinationPoster=S,e.getBargainUserCancel=B,e.seckillCode=L,e.scombinationCode=I,e.getCombinationPosterData=O,e.getBargainPosterData=P,e.integralOrderConfirm=z,e.integralOrderCreate=A,e.integralOrderDetails=D,e.getIntegralProductDetail=T,e.getStoreIntegralList=E,e.getIntegralOrderList=M,e.getLogisticsDetails=H,e.orderTake=U,e.orderDel=$,e.getPresellList=R;var i=a(n("9011"));function r(t){return i.default.get("combination/list",t,{noAuth:!0})}function o(t){return i.default.get("combination/detail/"+t)}function s(t){return i.default.get("combination/pink/"+t)}function u(t){return i.default.post("combination/remove",t)}function c(t){return i.default.get("bargain/list",t,{noAuth:!0})}function d(t){return i.default.get("combination/banner_list",t,{noAuth:!0})}function f(t){return i.default.get("pink",t,{noAuth:!0})}function l(t){return i.default.get("bargain/user/list",t)}function p(t,e){return i.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))}function g(t){return i.default.post("bargain/start/user",t)}function v(t){return i.default.post("bargain/start",{bargainId:t})}function b(t){return i.default.post("bargain/help",t)}function m(t){return i.default.post("bargain/help/price",t)}function _(t){return i.default.post("bargain/help/list",t)}function h(t){return i.default.post("bargain/help/count",t)}function w(t){return i.default.post("bargain/share",{bargainId:t})}function y(){return i.default.get("seckill/index",{},{noAuth:!0})}function C(t,e){return i.default.get("seckill/list/"+t,e,{noAuth:!0})}function x(t,e){return i.default.get("seckill/detail/"+t,e)}function k(t){return i.default.post("bargain/poster",t)}function S(t){return i.default.post("combination/poster",t)}function B(t){return i.default.post("bargain/user/cancel",t)}function L(t,e){return i.default.get("seckill/code/"+t,e)}function I(t){return i.default.get("combination/code/"+t)}function O(t){return i.default.get("combination/poster_info/"+t)}function P(t){return i.default.get("bargain/poster_info/"+t)}function z(t){return i.default.post("store_integral/order/confirm",t)}function A(t){return i.default.post("store_integral/order/create",t)}function D(t){return i.default.get("store_integral/order/detail/".concat(t))}function T(t){return i.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function E(t){return i.default.get("store_integral/list",t)}function M(t){return i.default.get("store_integral/order/list",t)}function H(t){return i.default.get("store_integral/order/express/".concat(t))}function U(t){return i.default.post("store_integral/order/take",t)}function $(t){return i.default.post("store_integral/order/del",t)}function R(t){return i.default.get("advance/list",t)}},"85d7":function(t,e,n){"use strict";n.r(e);var a=n("cfbb"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"9ef3":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=i,e.openPaySubscribe=r,e.openOrderSubscribe=o,e.openExtrctSubscribe=s,e.openPinkSubscribe=u,e.openBargainSubscribe=c,e.openOrderRefundSubscribe=d,e.openRechargeSubscribe=f,e.subscribe=l;var a=n("a1ea");function i(){var t={},e=uni.getStorageSync(a.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function r(){var t=i();return l([t.order_pay_success,t.order_deliver_success,t.order_postage_success])}function o(){var t=i();return l([t.order_take,t.integral_accout,t.order_brokerage])}function s(){var t=i();return l([t.user_extract])}function u(){var t=i();return l([t.pink_true,t.pink_status])}function c(){var t=i();return l([t.bargain_success])}function d(){var t=i();return l([t.order_refund])}function f(){var t=i();return l([t.recharge_success])}function l(t){var e=wx;return new Promise((function(n,a){e.requestSubscribeMessage({tmplIds:t,success:function(t){return n(t)},fail:function(t){return n(t)}})}))}},afc0:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"payment-status"},[n("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg-color"}),"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"status"},[t._v("商品兑换成功")]):n("v-uni-view",{staticClass:"status"},[t._v("订单创建成功")]),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("订单编号")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.orderId))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("兑换时间")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.add_time))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("兑换方式")]),n("v-uni-view",{staticClass:"itemCom"},[t._v("积分兑换")])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("兑换积分")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.total_price))])],1),0==t.order_pay_info.paid&&"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("失败原因")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(2==t.status?"取消兑换":t.msg))])],1):t._e()],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{formType:"submit","hover-class":"none"}},[t._v("查看详情")])],1),n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")])],1)],1)},r=[]},cfbb:function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4f72"),r=(n("9ef3"),n("c6cd3")),o=n("26cb"),s=a(n("c83f")),u={components:{},mixins:[s.default],data:function(){return{orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[]}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){var e=this;if(!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单兑换状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.msg=t.msg||"",this.isLogin?this.getOrderPayInfo():(0,r.toLogin)(),document.addEventListener("visibilitychange",(function(t){var n=document.visibilityState;"visible"==n&&e.getOrderPayInfo()}))},methods:{openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this;uni.showLoading({title:"正在加载中"}),(0,i.integralOrderDetails)(t.orderId).then((function(e){uni.hideLoading(),t.$set(t,"order_pay_info",e.data),uni.setNavigationBarTitle({title:兑换成功}),t.getOrderCoupon()})).catch((function(t){uni.hideLoading()}))},getOrderCoupon:function(){var t=this;orderCoupon(t.orderId).then((function(e){t.couponList=e.data}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})},goOrderDetails:function(t){var e=this;uni.navigateTo({url:"/pages/points_mall/integral_order_details?order_id="+e.orderId})}}};e.default=u}).call(this,n("5a52")["default"])},dcb2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.coupons .title[data-v-bf6a4ac4]{margin:%?30?% 0 %?25?% 0}.coupons .title .line[data-v-bf6a4ac4]{width:%?70?%;height:1px;background:#dcdcdc}.coupons .title .name[data-v-bf6a4ac4]{font-size:%?24?%;color:#999;margin:0 %?10?%}.coupons .list[data-v-bf6a4ac4]{padding:0 %?20?%}.coupons .list .item[data-v-bf6a4ac4]{margin-bottom:%?20?%;box-shadow:0 2px 10px 0 rgba(0,0,0,.06)}.coupons .list .item .price[data-v-bf6a4ac4]{width:%?236?%;height:%?160?%;font-size:%?26?%;color:#fff;font-weight:800}.coupons .list .item .price uni-text[data-v-bf6a4ac4]{font-size:%?54?%}.coupons .list .item .text[data-v-bf6a4ac4]{width:%?385?%}.coupons .list .item .text .name[data-v-bf6a4ac4]{font-size:#282828;font-size:%?30?%}.coupons .list .item .text .priceMin[data-v-bf6a4ac4]{font-size:%?24?%;color:#999;margin-top:%?10?%}.coupons .list .item .text .time[data-v-bf6a4ac4]{font-size:%?24?%;color:#999;margin-top:%?15?%}.coupons .list .open[data-v-bf6a4ac4]{font-size:%?24?%;color:#999;margin-top:%?30?%}.coupons .list .open .iconfont[data-v-bf6a4ac4]{font-size:%?25?%;margin:%?5?% 0 0 %?10?%}.payment-status[data-v-bf6a4ac4]{background-color:#fff;margin:%?195?% %?30?% 0 %?30?%;border-radius:%?10?%;padding:%?1?% 0 %?28?% 0}.payment-status .icons[data-v-bf6a4ac4]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 hsla(0,0%,100%,.5);border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .icons.icon-iconfontguanbi[data-v-bf6a4ac4]{text-shadow:0 4px 0 #6c6d6d}.payment-status .iconfont.fail[data-v-bf6a4ac4]{text-shadow:0 4px 0 #7a7a7a}.payment-status .status[data-v-bf6a4ac4]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?37?% 0}.payment-status .wrapper[data-v-bf6a4ac4]{border:%?1?% solid #eee;margin:0 %?30?% %?47?% %?30?%;padding:%?35?% 0;border-left:0;border-right:0}.payment-status .wrapper .item[data-v-bf6a4ac4]{font-size:%?28?%;color:#282828}.payment-status .wrapper .item ~ .item[data-v-bf6a4ac4]{margin-top:%?20?%}.payment-status .wrapper .item .itemCom[data-v-bf6a4ac4]{color:#666}.payment-status .returnBnt[data-v-bf6a4ac4]{width:%?630?%;height:%?86?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto %?20?% auto}',""]),t.exports=e},fab3:function(t,e,n){"use strict";n.r(e);var a=n("afc0"),i=n("85d7");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0d31");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"bf6a4ac4",null,!1,a["a"],o);e["default"]=u.exports}}]);