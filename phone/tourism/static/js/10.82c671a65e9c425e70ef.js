webpackJsonp([10],{"4aLA":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.i(e("mXfj"),""),a.push([t.i,".ranking[data-v-6ff69422]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column}.ranking .header[data-v-6ff69422]{width:100%;height:50px}.ranking .page-main[data-v-6ff69422]{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:scroll}.ranking .page-main ul[data-v-6ff69422]{margin:0;padding:5px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0}.ranking .page-main ul li[data-v-6ff69422]{width:50%;display:inline-block;height:100px;padding:5px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.ranking .page-main ul li .item[data-v-6ff69422]{width:100%;height:100%;background:url("+e("waWD")+") no-repeat 100%;background-size:100% 100%;border-radius:5px;-webkit-box-shadow:2px 2px 10px rgba(255,142,153,.8);box-shadow:2px 2px 10px rgba(255,142,153,.8);font-size:16px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;padding:8px 5px}.ranking .page-main ul li .item[data-v-6ff69422]:active{opacity:.8}.ranking .page-main ul li .item .title[data-v-6ff69422]{text-align:center;line-height:30px}.ranking .page-main ul li .item .value[data-v-6ff69422]{text-align:center;line-height:40px;font-size:30px}",""])},"5Q02":function(t,a,e){"use strict";var n=e("EbL4"),i=e.n(n);a.a={name:"countup",mounted:function(){var t=this;this.$nextTick(function(){t._countup=new i.a(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(t){return t(this.tag,{},[this.startVal])},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){this._countup.update(t)}}}},"5vKe":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ranking"},[e("li-header",{staticClass:"header",attrs:{config:t.headerConfig,show:!0},on:{headerLeftEvent:function(a){t.configEvent(!0)},headerRightEvent:t.configEvent}}),t._v(" "),e("div",{staticClass:"page-main"},[e("ul",t._l(t.info,function(a,n){return e("li",[e("div",{staticClass:"item bg1"},[e("div",{staticClass:"title"},[t._v(t._s(a.text))]),t._v(" "),e("div",{staticClass:"value"},[e("countup",{attrs:{"end-val":a.value,duration:2,start:!0}}),e("span",{staticStyle:{"font-size":"14px"}},[t._v(" 次")])],1)])])}))])],1)},i=[],o={render:n,staticRenderFns:i};a.a=o},EbL4:function(t,a,e){var n,i;!function(o,r){n=r,void 0!==(i="function"==typeof n?n.call(a,e,a,t):n)&&(t.exports=i)}(0,function(t,a,e){return function(t,a,e,n,i,o){function r(t){var a,e,n,i,o,r,l=t<0;if(t=Math.abs(t).toFixed(u.decimals),t+="",a=t.split("."),e=a[0],n=a.length>1?u.options.decimal+a[1]:"",u.options.useGrouping){for(i="",o=0,r=e.length;o<r;++o)0!==o&&o%3==0&&(i=u.options.separator+i),i=e[r-o-1]+i;e=i}return u.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return u.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return u.options.numerals[+t]})),(l?"-":"")+u.options.prefix+e+n+u.options.suffix}function l(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a}function s(t){return"number"==typeof t&&!isNaN(t)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:l,formattingFn:r,prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var d in u.options)o.hasOwnProperty(d)&&null!==o[d]&&(u.options[d]=o[d]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var f=0,p=["webkit","moz","ms","o"],c=0;c<p.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[p[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[c]+"CancelAnimationFrame"]||window[p[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var e=(new Date).getTime(),n=Math.max(0,16-(e-f)),i=window.setTimeout(function(){t(e+n)},n);return f=e+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),u.initialize=function(){return!(!u.initialized&&(u.error="",u.d="string"==typeof t?document.getElementById(t):t,u.d?(u.startVal=Number(a),u.endVal=Number(e),s(u.startVal)&&s(u.endVal)?(u.decimals=Math.max(0,n||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,0):(u.error="[CountUp] startVal ("+a+") or endVal ("+e+") is not a number",1)):(u.error="[CountUp] target is null or undefined",1)))},u.printValue=function(t){var a=u.options.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=a:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=a:this.d.innerHTML=a},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var a=t-u.startTime;u.remaining=u.duration-a,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(a,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(a,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(a/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(a/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),a<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){u.initialize()&&(u.callback=t,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(t){if(u.initialize()){if(t=Number(t),!s(t))return void(u.error="[CountUp] update() - new endVal is not a number: "+t);u.error="",t!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=t,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)}})},FYUJ:function(t,a,e){"use strict";var n=e("5Q02"),i=e("VU/8"),o=i(n.a,null,!1,null,null,null);a.a=o.exports},XUgB:function(t,a,e){var n=e("4aLA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("ee4c47c8",n,!0)},Zy4z:function(t,a,e){"use strict";var n=e("Xxa5"),i=e.n(n),o=e("exGp"),r=e.n(o),l=e("FYUJ"),s=e("Ga42");a.a={components:{Countup:l.a},data:function(){return{headerConfig:{left:"返回",title:"接口统计"},info:{allapi:{text:"接口请求总数",path:"/allapi",value:0},user:{text:"所有用户接口",path:"/allUser",value:0},addFriend:{text:"添加好友接口",path:"/addFriend",value:0},webMail:{text:"发送站内信接口",path:"/sendWebMail",value:0},posting:{text:"发表分享接口",path:"/posting",value:0},login:{text:"登录接口",path:"/login",value:0},userMain:{text:"查看用户主页接口",path:"/userMainInfo",value:0},toFollow:{text:"关注接口",path:"/toFollow",value:0},comment:{text:"评论接口",path:"/pinglun",value:0},star:{text:"喜欢分享接口",path:"/star",value:0},ranking:{text:"排行榜接口",path:"/ranking",value:0},myFollowing:{text:"我的关注接口",path:"/myFollowing",value:0},follows:{text:"我的粉丝接口",path:"/follows",value:0},myPosted:{text:"我的分享接口",path:"/myPosted",value:0},myFriend:{text:"我的圈友接口",path:"/myFriend",value:0}},status:!1}},mounted:function(){var t=this;return r()(i.a.mark(function a(){var e,n,o,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.c)();case 2:if(e=a.sent,200===e.code){console.log(e.data),n=0;for(o in e.data){n+=e.data[o];for(r in t.info)t.info[r].path===o&&(t.info[r].value=e.data[o])}t.info.allapi.value=n,t.status=!0}else t.toast(e.message);case 4:case"end":return a.stop()}},a,t)}))()},methods:{configEvent:function(t){t?this.$router.go(-1):console.log("好友列表触发事件")},toast:function(t){this.$vux.toast.show({text:t,position:"middle",time:3e3,type:"text",width:"15em"})}}}},ofQS:function(t,a,e){"use strict";function n(t){e("XUgB")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("Zy4z"),o=e("5vKe"),r=e("VU/8"),l=n,s=r(i.a,o.a,!1,l,"data-v-6ff69422",null);a.default=s.exports},waWD:function(t,a,e){t.exports=e.p+"static/img/a.c42508a.png"}});