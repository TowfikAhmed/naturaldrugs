(window.webpackJsonp=window.webpackJsonp||[]).push([[162,95,101,129,161],{446:function(t,e,n){"use strict";n.r(e);var r=n(447),o={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},451:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,647))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,584))}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-section-gap edu-about-area about-style-8"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Provide Best <span class="color-secondary">Education</span> Services For You.',subTitle:"Magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt labore.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-image-gallery"},[t._m(1),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-33.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-25.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-2",imgSrc:"/images/about/shape-13.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:".8","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-mission"},[e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra02"},[e("i",{staticClass:"icon-51"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Mission")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])]),t._v(" "),e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra06"},[e("i",{staticClass:"icon-52"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Vision")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-1 mb--30",attrs:{"data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-13.webp",alt:"About Images"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-15.webp",alt:"About Images"}})])]),t._v(" "),e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-2 mb--30",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-14.webp"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-16.webp",alt:"About Images"}})])])])}],!1,null,null,null);e.default=component.exports},452:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("0897892d",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(452)},464:function(t,e,n){var r=n(54)(!1);r.push([t.i,':root{--color-primary:#92bc1f;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#31b978,#92bc1f);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,0.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,0.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,0.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,0.05);--shadow-darker3:0px 4px 50px 0px rgba(0,0,0,0.1);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:"Poppins",sans-serif;--font-secondary:"Spartan",sans-serif;--font-icomoon:"icomoon";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.swiper-testimonial-slider-wrapper .swiper-slide{opacity:0}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-active,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev{opacity:1}@media only screen and (max-width:575px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next,.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev{opacity:0}}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{margin-left:36px;box-shadow:70px 0 50px 0 rgba(26,46,85,.1);padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{margin-left:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-prev .testimonial-grid{margin-left:40px}}.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{margin-left:40px;margin-right:36px;box-shadow:-40px 0 50px 0 rgba(26,46,85,.1);padding:40px 30px 50px}@media only screen and (max-width:1199px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{margin-left:0;margin-right:0}}@media only screen and (min-width:768px)and (max-width:991px){.swiper-testimonial-slider-wrapper .swiper-slide.swiper-slide-next .testimonial-grid{margin-left:40px}}.swiper-testimonial-slider-wrapper.testimonial-coverflow .swiper-slide.swiper-slide-active .testimonial-grid:before{opacity:0}',""]),t.exports=r},474:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOptions:{loop:!0,speed:500,slidesPerView:1,centeredSlides:!0,effect:"coverflow",autoplay:{delay:4e3},breakpoints:{575:{slidesPerView:2}},coverflowEffect:{rotate:0,slideShadows:!1,depth:180,stretch:80},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}},o=(n(463),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonial-area-5 gap-lg-bottom-equal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-lg-5"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"testimonial-heading-area"},[e("div",{staticClass:"section-title section-left",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("span",{staticClass:"pre-title"},[t._v("Testimonials")]),t._v(" "),e("h2",{staticClass:"title"},[t._v("What Our Students Have To Say")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.")]),t._v(" "),e("n-link",{staticClass:"edu-btn btn-large",attrs:{to:"#"}},[t._v("View All"),e("i",{staticClass:"icon-4"})])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("swiper",{staticClass:"swiper-testimonial-slider-wrapper swiper testimonial-coverflow",attrs:{options:t.swiperOptions}},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-01.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Ray Sanchez")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Student")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-02.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-03.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-grid"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:"/images/testimonial/testimonial-02.png",alt:"Testimonial"}}),t._v(" "),e("span",{staticClass:"qoute-icon"},[e("i",{staticClass:"icon-26"})])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})]),t._v(" "),e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])])]),t._v(" "),e("div",{staticClass:"swiper-pagination text-center"})],1)])])])}),[function(){var t=this._self._c;return t("span",{staticClass:"shape-line"},[t("i",{staticClass:"icon-19"})])}],!1,null,null,null);e.default=component.exports},531:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-brand-area brand-area-4 gap-lg-bottom-equal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"brand-grid-wrap brand-style-2"},[e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-01.png",alt:"Brand Logo"}})]),t._v(" "),e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-02.png",alt:"Brand Logo"}})]),t._v(" "),e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-03.png",alt:"Brand Logo"}})]),t._v(" "),e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-04.png",alt:"Brand Logo"}})]),t._v(" "),e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-05.png",alt:"Brand Logo"}})]),t._v(" "),e("div",{staticClass:"brand-grid"},[e("img",{attrs:{src:"/images/brand/brand-06.png",alt:"Brand Logo"}})])])])])}],!1,null,null,null);e.default=component.exports},586:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,250))},BreadCrumbOne:function(){return n.e(5).then(n.bind(null,645))},About:function(){return n.e(211).then(n.bind(null,720))},LogoTwo:function(){return Promise.resolve().then(n.bind(null,531))},WhyChoose:function(){return n.e(23).then(n.bind(null,640))},TestimonialTwo:function(){return Promise.resolve().then(n.bind(null,474))},FunFact:function(){return n.e(212).then(n.bind(null,573))},Instructor:function(){return n.e(22).then(n.bind(null,639))},FooterOne:function(){return Promise.resolve().then(n.bind(null,251))}},head:function(){return{title:"About Us 1"}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne"),t._v(" "),e("BreadCrumbOne",{attrs:{pageTitle:"About Us 1",title:"A Large Range of Course Learning Paths"}}),t._v(" "),e("About"),t._v(" "),e("LogoTwo"),t._v(" "),e("WhyChoose"),t._v(" "),e("TestimonialTwo"),t._v(" "),e("FunFact"),t._v(" "),e("Instructor"),t._v(" "),e("FooterOne")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(250).default,About:n(451).default,LogoTwo:n(531).default,TestimonialTwo:n(474).default,FunFact:n(446).default,FooterOne:n(251).default})}}]);