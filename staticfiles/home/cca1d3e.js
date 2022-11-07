(window.webpackJsonp=window.webpackJsonp||[]).push([[208,101,128,129],{446:function(t,e,n){"use strict";n.r(e);var r=n(447),o={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},451:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,647))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,584))}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-gap-large edu-about-area about-style-7"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5 align-items-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Providing The <span class="color-secondary">Best Quality</span> Online Courses.',subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"about-image-gallery"},[e("img",{staticClass:"main-img-1",attrs:{src:"/images/about/about-11.webp",alt:"About Image"}}),t._v(" "),e("img",{staticClass:"main-img-2",attrs:{src:"/images/about/about-12.webp","data-aos-delay":"150","data-aos":"fade-down","data-aos-duration":"800",alt:"About Image"}}),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-38.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-37.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-1.8",imgSrc:"/images/about/shape-04.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),t._m(1)],1)])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("li",[t._v("Flexible Classes")]),t._v(" "),e("li",[t._v("Offline Classe Mode")]),t._v(" "),e("li",[t._v("Educator Support")])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-4 scene",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/counterup/shape-02.png",alt:"Shape"}})])},function(){var t=this._self._c;return t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})])}],!1,null,null,null);e.default=component.exports},518:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,584))}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"edu-footer footer-light footer-for-yoga footer-style-5"},[e("div",{staticClass:"footer-top"},[t._m(0),t._v(" "),e("ul",{staticClass:"shape-group shape-group-2"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"-3",imgSrc:"/images/others/shape-06.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"3",imgSrc:"/images/others/shape-07.png"}}),t._v(" "),t._m(1),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:"2",imgSrc:"/images/others/shape-08.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-5",dataDepth:"-2",imgSrc:"/images/others/shape-09.png"}})],1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-3 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Address")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.")]),t._v(" "),e("div",{staticClass:"widget-information"},[e("ul",{staticClass:"information-list"},[e("li",[e("span",[t._v("Add:")]),t._v("70-80 Upper St Norwich NR2")]),t._v(" "),e("li",[e("span",[t._v("Call:")]),e("a",{attrs:{href:"tel:+011235641231"}},[t._v("+01 123 5641 231")])]),t._v(" "),e("li",[e("span",[t._v("Email:")]),e("a",{attrs:{href:"mailto:info@edublink.com",target:"_blank"}},[t._v("info@edublink.com")])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"edu-footer-widget explore-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Online Platform")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("a",{attrs:{href:"about-one.html"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"course-one.html"}},[t._v("Courses")])]),t._v(" "),e("li",[e("a",{attrs:{href:"team-one.html"}},[t._v("Instructor")])]),t._v(" "),e("li",[e("a",{attrs:{href:"event-grid.html"}},[t._v("Events")])]),t._v(" "),e("li",[e("a",{attrs:{href:"team-details.html"}},[t._v("Instructor Profile")])]),t._v(" "),e("li",[e("a",{attrs:{href:"purchase-guide.html"}},[t._v("Purchase Guide")])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"edu-footer-widget quick-link-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Links")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("a",{attrs:{href:"contact-us.html"}},[t._v("Contact Us")])]),t._v(" "),e("li",[e("a",{attrs:{href:"gallery-grid.html"}},[t._v("Gallery")])]),t._v(" "),e("li",[e("a",{attrs:{href:"blog-standard.html"}},[t._v("News & Articles")])]),t._v(" "),e("li",[e("a",{attrs:{href:"faq.html"}},[t._v("FAQ's")])]),t._v(" "),e("li",[e("a",{attrs:{href:"my-account.html"}},[t._v("Sign In/Registration")])]),t._v(" "),e("li",[e("a",{attrs:{href:"coming-soon.html"}},[t._v("Coming Soon")])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Contacts")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Enter your email address to register to our newsletter subscription")]),t._v(" "),e("div",{staticClass:"input-group footer-subscription-form"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Your email"}}),t._v(" "),e("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"}},[t._v("Subscribe "),e("i",{staticClass:"icon-4"})])]),t._v(" "),e("ul",{staticClass:"social-share icon-transparent"},[e("li",[e("a",{staticClass:"color-fb",attrs:{href:"#"}},[e("i",{staticClass:"icon-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-linkd",attrs:{href:"#"}},[e("i",{staticClass:"icon-linkedin2"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-ig",attrs:{href:"#"}},[e("i",{staticClass:"icon-instagram"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-twitter",attrs:{href:"#"}},[e("i",{staticClass:"icon-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-yt",attrs:{href:"#"}},[e("i",{staticClass:"icon-youtube"})])])])])])])])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-3"},[t("img",{attrs:{src:"/images/about/shape-10.png",alt:"shape"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"inner text-center"},[e("p",[t._v("Copyright 2022 "),e("a",{attrs:{href:"https://1.envato.market/rndVD5",target:"_blank"}},[t._v("EduBlink")]),t._v(" Designed By "),e("a",{attrs:{href:"https://1.envato.market/YgGJbj",target:"_blank"}},[t._v("DevsBlink")]),t._v(". All Rights Reserved")])])])])])])}],!1,null,null,null);e.default=component.exports},607:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,250))},Banner:function(){return n.e(89).then(n.bind(null,711))},About:function(){return n.e(88).then(n.bind(null,710))},Course:function(){return n.e(90).then(n.bind(null,712))},FunFact:function(){return n.e(98).then(n.bind(null,581))},WhyChoose:function(){return n.e(94).then(n.bind(null,717))},Instructor:function(){return n.e(87).then(n.bind(null,714))},VideoSection:function(){return n.e(93).then(n.bind(null,716))},Testimonial:function(){return n.e(92).then(n.bind(null,715))},Instagram:function(){return n.e(91).then(n.bind(null,713))},FooterYoga:function(){return Promise.resolve().then(n.bind(null,518))}},head:function(){return{title:"Yoga Instructor"}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne",{attrs:{showHeaderTop:"true"}}),t._v(" "),e("Banner"),t._v(" "),e("About"),t._v(" "),e("Course"),t._v(" "),e("FunFact"),t._v(" "),e("WhyChoose"),t._v(" "),e("Instructor"),t._v(" "),e("VideoSection"),t._v(" "),e("Testimonial"),t._v(" "),e("Instagram"),t._v(" "),e("FooterYoga")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(250).default,About:n(451).default,FunFact:n(446).default,FooterYoga:n(518).default})}}]);