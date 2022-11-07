(window.webpackJsonp=window.webpackJsonp||[]).push([[187,127,129,131,158],{446:function(t,e,n){"use strict";n.r(e);var r=n(447),o={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},453:function(t,e,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4dcaf333",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";n(453)},468:function(t,e,n){var r=n(54)(!1);r.push([t.i,".inner[data-v-2e827df2]{border:1px solid #ebebeb}",""]),t.exports=r},473:function(t,e,n){"use strict";n.r(e);var r={props:["extraClass","product"],data:function(){return{baseUrl:"http://localhost:8000/"}},mounted:function(){console.log(this.baseUrl)}},o=(n(467),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-product",class:t.product.colorClass},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/shop/product-details"}},[e("img",{attrs:{src:t.baseUrl+t.product.image,alt:t.product.title+" Thumbnail"}})]),t._v(" "),e("div",{staticClass:"product-hover-info"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/shop/product-details",role:"button"}},[e("i",{staticClass:"icon-2"})])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/shop/wishlist"}},[e("i",{staticClass:"icon-22"})])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/shop/cart"}},[e("i",{staticClass:"icon-3"})])],1)])])],1),t._v(" "),e("div",{staticClass:"content"},[e("h6",{staticClass:"title"},[e("n-link",{attrs:{to:"/shop/product-details"}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("div",{staticClass:"product-rating"},[e("div",{staticClass:"rating"},[t.product.rating>=1?e("i",{staticClass:"icon-23"}):t._e(),t._v(" "),t.product.rating>=2?e("i",{staticClass:"icon-23"}):t._e(),t._v(" "),t.product.rating>=3?e("i",{staticClass:"icon-23"}):t._e(),t._v(" "),t.product.rating>=4?e("i",{staticClass:"icon-23"}):t._e(),t._v(" "),t.product.rating>=5?e("i",{staticClass:"icon-23"}):t._e()]),t._v(" "),e("span",{staticClass:"rating-count"},[t._v("("+t._s(t.product.rating)+")")])]),t._v(" "),e("div",{staticClass:"price"},[t._v("$"+t._s(t.product.price))])])])])}),[],!1,null,"2e827df2",null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobileMenuOpen:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},mobileMenuClose:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"edu-header header-style-1 pv-header-style"},[e("div",{staticClass:"header-mainmenu",class:{"edu-sticky":t.isSticky}},[e("div",{staticClass:"container-custom"},[e("div",{staticClass:"header-navbar"},[e("div",{staticClass:"header-brand"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-light",attrs:{src:"/static/home/images/logo/logo-dark.png",alt:"Dark Logo"}}),t._v(" "),e("img",{staticClass:"logo-dark",attrs:{src:"/static/home/images/logo/logo-white.png",alt:"Light Logo"}})])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"header-right"},[e("ul",{staticClass:"header-action"},[t._m(1),t._v(" "),e("li",{staticClass:"mobile-menu-bar d-block d-xl-none"},[e("button",{staticClass:"hamberger-button",on:{click:function(e){return t.mobileMenuOpen("addClass","active")}}},[e("i",{staticClass:"icon-54"})])])])])])])]),t._v(" "),e("div",{staticClass:"edublink-vue-mobile-popup-menu",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"header-top"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-light",attrs:{src:"/static/home/images/logo/logo-dark.png",alt:"Dark Logo"}}),t._v(" "),e("img",{staticClass:"logo-dark",attrs:{src:"/static/home/images/logo/logo-white.png",alt:"Light Logo"}})])],1),t._v(" "),e("div",{staticClass:"close-menu"},[e("button",{staticClass:"close-button",on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[e("i",{staticClass:"icon-73"})])])]),t._v(" "),e("ul",{staticClass:"edublink-mobile-menu mainmenu"},[e("li",[e("a",{attrs:{href:"#intro"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Intro")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#demos"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Demos")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#features"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Features")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.devsblink.com/edublink-vue",target:"_blank"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Documentation")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://devsblink.freshdesk.com/",target:"_blank"},on:{click:function(e){return t.mobileMenuClose("removeClass","active")}}},[t._v("Support")])]),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-mainnav"},[e("nav",{staticClass:"mainmenu-nav"},[e("ul",{staticClass:"mainmenu"},[e("li",[e("a",{attrs:{href:"#intro"}},[t._v("Intro")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#demos"}},[t._v("Demos")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#features"}},[t._v("Features")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.devsblink.com/edublink-vue",target:"_blank"}},[t._v("Documentation")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://devsblink.freshdesk.com/",target:"_blank"}},[t._v("Support")])])])])])},function(){var t=this._self._c;return t("li",{staticClass:"header-btn"},[t("a",{staticClass:"edu-btn btn-medium",attrs:{href:"https://1.envato.market/rndVD5",target:"_blank"}},[this._v("Purchase Now")])])},function(){var t=this._self._c;return t("li",{staticClass:"header-btn"},[t("a",{staticClass:"edu-btn btn-medium",attrs:{href:"https://1.envato.market/rndVD5",target:"_blank"}},[this._v("Purchase Now")])])}],!1,null,null,null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"edu-footer footer-lighten bg-image footer-style-1"},[e("div",{staticClass:"footer-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-3 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-light",attrs:{src:"/static/home/images/logo/logo-dark.png",alt:"Dark Logo"}}),t._v(" "),e("img",{staticClass:"logo-dark",attrs:{src:"/static/home/images/logo/logo-white.png",alt:"Light Logo"}})])],1),t._v(" "),e("p",{staticClass:"description"},[t._v("Natural drugs are generally considered safe when used as directed. However, as with any type of drug, there is always the potential for side effects.")]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"edu-footer-widget explore-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Online Platform")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/about-us-one"}},[t._v("About")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/pricing-table"}},[t._v("Pricing Plan")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/event/event-grid"}},[t._v("Events")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v("Vendor List")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"edu-footer-widget quick-link-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Links")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/faq"}},[t._v("FAQ's")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/gallery-grid"}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-standard"}},[t._v("News & Articles")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("Sign In")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"copyright-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"inner text-center"},[e("p",[t._v("Copyright "+t._s((new Date).getFullYear())+" "),e("a",{attrs:{href:"#"}},[t._v("EduBlink")]),t._v(" Designed By "),e("a",{attrs:{href:"https://1.envato.market/YgGJbj",target:"_blank"}},[t._v("DevsBlink")]),t._v(". All Rights Reserved")])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"widget-information"},[e("ul",{staticClass:"information-list"},[e("li",[e("span",[t._v("Add:")]),t._v("70-80 Upper St Norwich NR2")]),t._v(" "),e("li",[e("span",[t._v("Call:")]),e("a",{attrs:{href:"tel:+011235641231"}},[t._v("+01 123 5641 231")])]),t._v(" "),e("li",[e("span",[t._v("Email:")]),e("a",{attrs:{href:"mailto:info@naturaldrugs.com",target:"_blank"}},[t._v("info@naturaldrugs.com")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Contacts")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Enter your email address to register to our newsletter subscription")]),t._v(" "),e("div",{staticClass:"input-group footer-subscription-form"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Your email"}}),t._v(" "),e("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"}},[t._v("Subscribe "),e("i",{staticClass:"icon-4"})])]),t._v(" "),e("ul",{staticClass:"social-share icon-transparent"},[e("li",[e("a",{staticClass:"color-fb",attrs:{href:"https://facebook.com/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-linkd",attrs:{href:"https://linkedin.com/",target:"_blank"}},[e("i",{staticClass:"icon-linkedin2"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-ig",attrs:{href:"https://instagram.com/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-yt",attrs:{href:"https://youtube.com/",target:"_blank"}},[e("i",{staticClass:"icon-youtube"})])])])])])])}],!1,null,null,null);e.default=component.exports},631:function(t,e,n){"use strict";n.r(e);n(19),n(26),n(27);var r={components:{HeaderLanding:function(){return Promise.resolve().then(n.bind(null,475))},Banner:function(){return n.e(18).then(n.bind(null,677))},ProductOne:function(){return Promise.resolve().then(n.bind(null,473))},PaginationOne:function(){return n.e(8).then(n.bind(null,724))},Testimonial:function(){return n.e(19).then(n.bind(null,697))},FunFact2:function(){return n.e(98).then(n.bind(null,581))},FAQ:function(){return n.e(17).then(n.bind(null,657))},FunFact:function(){return n.e(97).then(n.bind(null,577))},FooterTwo:function(){return Promise.resolve().then(n.bind(null,481))}},head:function(){return{title:"Landing Demo"}},data:function(){return{productsData:null}},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;this.$axios.get("home/products").then((function(e){t.productsData=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderLanding"),t._v(" "),e("Banner"),t._v(" "),t.productsData?e("section",{staticClass:"shop-page-area section-gap-equal"},[e("div",{staticClass:"container"},[e("div",{staticClass:"edu-sorting-area"},[e("div",{staticClass:"sorting-left"},[e("h6",{staticClass:"showing-text"},[t._v("We found "),e("span",[t._v(t._s(t.productsData.results.length))]),t._v(" product available for you")])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"row g-5"},t._l(t.productsData.results,(function(t){return e("div",{key:t.id,staticClass:"col-lg-3 col-md-4 col-sm-6"},[e("ProductOne",{attrs:{product:t}})],1)})),0),t._v(" "),e("PaginationOne")],1)]):t._e(),t._v(" "),e("Testimonial"),t._v(" "),e("FunFact2"),t._v(" "),e("FAQ"),t._v(" "),e("FunFact"),t._v(" "),e("FooterTwo")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sorting-right"},[e("div",{staticClass:"edu-sorting"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"icon-55"})]),t._v(" "),e("select",{staticClass:"edu-select"},[e("option",[t._v("Filters")]),t._v(" "),e("option",[t._v("Low To High")]),t._v(" "),e("option",[t._v("High Low To")]),t._v(" "),e("option",[t._v("Last Viewed")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderLanding:n(475).default,ProductOne:n(473).default,FunFact:n(446).default,FooterTwo:n(481).default})}}]);