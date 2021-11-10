(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_info/index"],{"073c":function(t,n,e){"use strict";e.r(n);var i=e("1705"),o=e("a348");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("9b91");var a,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"1c08f607",null,!1,i["a"],a);n["default"]=c.exports},1705:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},s=[]},"949b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("3474"),o=e("7fe6"),s=e("c6cd"),a=e("26cb"),u=(c(e("52ec")),c(e("c83f")));function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/Authorize").then(function(){return resolve(e("420f"))}.bind(null,e)).catch(e.oe)},f={components:{authorize:r},mixins:[u.default],data:function(){return{userInfo:{},loginType:"h5",userIndex:0,switchUserInfo:[],isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1,fileSizeString:""}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUserInfo()},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.formatSize()):(0,s.toLogin)()},methods:{formatSize:function(){var t=this;plus.cache.calculate((function(n){var e=parseInt(n);t.fileSizeString=0==e?"0B":e<1024?e+"B":e<1048576?(e/1024).toFixed(2)+"KB":e<1073741824?(e/1048576).toFixed(2)+"MB":(e/1073741824).toFixed(2)+"GB"}))},initData:function(){var n=this;t.showModal({title:"清楚缓存",content:"确定清楚本地缓存数据吗?",success:function(t){if(t.confirm)n.clearCache(),n.formatSize();else if(t.cancel)return that.$util.Tips({title:"已取消"})}})},clearCache:function(){var n=this,e=plus.os.name;if("Android"==e)for(var i=plus.android.runtimeMainActivity(),o=i.getCacheDir(),s=plus.android.invoke(o,"listFiles"),a=s.length,u=0;u<a;u++){var c=""+s[u];plus.io.resolveLocalFileSystemURL(c,(function(e){e.isDirectory?e.removeRecursively((function(e){t.showToast({title:"缓存清理完成",duration:2e3}),n.formatSize()}),(function(t){})):e.remove()}),(function(t){}))}else plus.cache.clear((function(){t.showToast({title:"缓存清理完成",duration:2e3}),n.formatSize()}))},onLoadFun:function(){this.getUserInfo()},authColse:function(t){this.isShowAuth=t},Setting:function(){t.openSetting({success:function(t){}})},switchAccounts:function(n){var e=this,i=this.switchUserInfo[n],a=this;return a.userIndex=n,a.switchUserInfo.length<=1||(void 0===i?a.$util.Tips({title:"切换的账号不存在"}):void("h5"===i.user_type?(t.showLoading({title:"正在切换中"}),(0,o.switchH5Login)().then((function(n){t.hideLoading(),a.$store.commit("LOGIN",{token:n.data.token,time:e.$Cache.strTotime(n.data.expires_time)-e.$Cache.time()}),a.getUserInfo()})).catch((function(n){return t.hideLoading(),a.$util.Tips({title:n})}))):(a.$store.commit("LOGOUT"),t.showLoading({title:"正在切换中"}),(0,s.toLogin)())))},outLogin:function(){var n=this;"h5"==n.loginType&&t.showModal({title:"提示",content:"确认退出登录?",success:function(e){e.confirm?(0,i.getLogout)().then((function(e){n.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){})):e.cancel}})},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){t.$set(t,"userInfo",n.data);for(var e=n.data.switchUserInfo||[],i=0;i<e.length;i++)e[i].uid==t.userInfo.uid&&(t.userIndex=i);t.$set(t,"switchUserInfo",e)}))},uploadpic:function(){var t=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(e){var i=n.switchUserInfo[n.userIndex];void 0!==i&&(n.userInfo.avatar=e.data.url),n.switchUserInfo[n.userIndex]=i,n.$set(n,"switchUserInfo",n.switchUserInfo),t.canvasStatus=!1}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},formSubmit:function(t){var n=this,e=t.detail.value;n.switchUserInfo[n.userIndex];if(!e.nickname.trim())return n.$util.Tips({title:"用户姓名不能为空"});e.avatar=this.userInfo.avatar,(0,i.userEdit)(e).then((function(t){return n.$util.Tips({title:t.msg,icon:"success"},{tab:3,url:1})})).catch((function(t){return n.$util.Tips({title:t||"保存失败，您并没有修改"},{tab:3,url:1})}))}}};n.default=f}).call(this,e("543d")["default"])},"9b08":function(t,n,e){},"9b91":function(t,n,e){"use strict";var i=e("9b08"),o=e.n(i);o.a},a037:function(t,n,e){"use strict";(function(t){e("6e38");i(e("66fd"));var n=i(e("073c"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a348:function(t,n,e){"use strict";e.r(n);var i=e("949b"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a}},[["a037","common/runtime","common/vendor"]]]);