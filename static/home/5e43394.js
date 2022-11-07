(window.webpackJsonp=window.webpackJsonp||[]).push([[103,129,213],{446:function(t,e,n){"use strict";n.r(e);var r=n(447),l={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},o=n(13),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},572:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{FunFact:function(){return Promise.resolve().then(n.bind(null,446))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,584))}},data:function(){return{funFacts:[{number:29.3,decimal:1,iconClass:"icon-48",class:"primary-color",title:"STUDENT ENROLLED",suffix:"K"},{number:32.4,decimal:1,iconClass:"icon-47",class:"secondary-color",title:"CLASS COMPLETED",suffix:"K"},{number:100,decimal:null,iconClass:"icon-49",class:"extra08-color",title:"SATISFACTION RATE",suffix:"%"},{number:354,decimal:null,iconClass:"icon-50",class:"extra05-color",title:"TOP INSTRUCTORS",suffix:"+"}]}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"counterup-area-9"},[e("div",{staticClass:"container edublink-animated-shape"},[e("div",{staticClass:"row g-5"},t._l(t.funFacts,(function(n,i){return e("div",{key:i,staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"edu-counterup counterup-style-4"},[e("div",{staticClass:"icon",class:n.class},[e("i",{class:n.iconClass})]),t._v(" "),e("h2",{staticClass:"counter-item count-number"},[e("FunFact",{attrs:{number:n.number,decimal:n.decimal,suffix:n.suffix}})],1),t._v(" "),e("h6",{staticClass:"title"},[t._v(t._s(n.title))])])])})),0),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"-1.8",imgSrc:"/images/others/shape-27.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FunFact:n(446).default})}}]);