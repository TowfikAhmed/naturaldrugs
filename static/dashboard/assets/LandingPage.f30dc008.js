import{_ as Pi,e as sn,f as pn,g as w,l as Ze,E as Ht,z as Fe,A as Ye,s as cr,v as dr,J as Do,G as Ro,m as Io,F as er,k as Tr,t as ki,H as Fo,o as ja,y as zo,r as No,q as Di}from"./index.00594607.js";import{g as ls,$ as Kn,n as Uo,b as Oo,S as Ya,a as Za}from"./swiper.min.5675571b.js";import{_ as ko}from"./Breadcrumbs.5dbe521c.js";function Bo(s,e,t,n){const i=ls();return s.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let o=s.$el.children(`.${n[r]}`)[0];o||(o=i.createElement("div"),o.className=n[r],s.$el.append(o)),t[r]=o,e[r]=o}}),t}function Nn(s=""){return`.${s.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Ja({swiper:s,extendParams:e,on:t,emit:n}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),s.pagination={el:null,$el:null,bullets:[]};let r,o=0;function a(){return!s.params.pagination.el||!s.pagination.el||!s.pagination.$el||s.pagination.$el.length===0}function c(u,d){const{bulletActiveClass:x}=s.params.pagination;u[d]().addClass(`${x}-${d}`)[d]().addClass(`${x}-${d}-${d}`)}function l(){const u=s.rtl,d=s.params.pagination;if(a())return;const x=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,y=s.pagination.$el;let _;const b=s.params.loop?Math.ceil((x-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(_=Math.ceil((s.activeIndex-s.loopedSlides)/s.params.slidesPerGroup),_>x-1-s.loopedSlides*2&&(_-=x-s.loopedSlides*2),_>b-1&&(_-=b),_<0&&s.params.paginationType!=="bullets"&&(_=b+_)):typeof s.snapIndex<"u"?_=s.snapIndex:_=s.activeIndex||0,d.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const E=s.pagination.bullets;let A,D,g;if(d.dynamicBullets&&(r=E.eq(0)[s.isHorizontal()?"outerWidth":"outerHeight"](!0),y.css(s.isHorizontal()?"width":"height",`${r*(d.dynamicMainBullets+4)}px`),d.dynamicMainBullets>1&&s.previousIndex!==void 0&&(o+=_-(s.previousIndex-s.loopedSlides||0),o>d.dynamicMainBullets-1?o=d.dynamicMainBullets-1:o<0&&(o=0)),A=Math.max(_-o,0),D=A+(Math.min(E.length,d.dynamicMainBullets)-1),g=(D+A)/2),E.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${d.bulletActiveClass}${C}`).join(" ")),y.length>1)E.each(C=>{const L=Kn(C),U=L.index();U===_&&L.addClass(d.bulletActiveClass),d.dynamicBullets&&(U>=A&&U<=D&&L.addClass(`${d.bulletActiveClass}-main`),U===A&&c(L,"prev"),U===D&&c(L,"next"))});else{const C=E.eq(_),L=C.index();if(C.addClass(d.bulletActiveClass),d.dynamicBullets){const U=E.eq(A),Z=E.eq(D);for(let z=A;z<=D;z+=1)E.eq(z).addClass(`${d.bulletActiveClass}-main`);if(s.params.loop)if(L>=E.length){for(let z=d.dynamicMainBullets;z>=0;z-=1)E.eq(E.length-z).addClass(`${d.bulletActiveClass}-main`);E.eq(E.length-d.dynamicMainBullets-1).addClass(`${d.bulletActiveClass}-prev`)}else c(U,"prev"),c(Z,"next");else c(U,"prev"),c(Z,"next")}}if(d.dynamicBullets){const C=Math.min(E.length,d.dynamicMainBullets+4),L=(r*C-r)/2-g*r,U=u?"right":"left";E.css(s.isHorizontal()?U:"top",`${L}px`)}}if(d.type==="fraction"&&(y.find(Nn(d.currentClass)).text(d.formatFractionCurrent(_+1)),y.find(Nn(d.totalClass)).text(d.formatFractionTotal(b))),d.type==="progressbar"){let E;d.progressbarOpposite?E=s.isHorizontal()?"vertical":"horizontal":E=s.isHorizontal()?"horizontal":"vertical";const A=(_+1)/b;let D=1,g=1;E==="horizontal"?D=A:g=A,y.find(Nn(d.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${D}) scaleY(${g})`).transition(s.params.speed)}d.type==="custom"&&d.renderCustom?(y.html(d.renderCustom(s,_+1,b)),n("paginationRender",y[0])):n("paginationUpdate",y[0]),s.params.watchOverflow&&s.enabled&&y[s.isLocked?"addClass":"removeClass"](d.lockClass)}function f(){const u=s.params.pagination;if(a())return;const d=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,x=s.pagination.$el;let y="";if(u.type==="bullets"){let _=s.params.loop?Math.ceil((d-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&!s.params.loop&&_>d&&(_=d);for(let b=0;b<_;b+=1)u.renderBullet?y+=u.renderBullet.call(s,b,u.bulletClass):y+=`<${u.bulletElement} class="${u.bulletClass}"></${u.bulletElement}>`;x.html(y),s.pagination.bullets=x.find(Nn(u.bulletClass))}u.type==="fraction"&&(u.renderFraction?y=u.renderFraction.call(s,u.currentClass,u.totalClass):y=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`,x.html(y)),u.type==="progressbar"&&(u.renderProgressbar?y=u.renderProgressbar.call(s,u.progressbarFillClass):y=`<span class="${u.progressbarFillClass}"></span>`,x.html(y)),u.type!=="custom"&&n("paginationRender",s.pagination.$el[0])}function p(){s.params.pagination=Bo(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const u=s.params.pagination;if(!u.el)return;let d=Kn(u.el);d.length!==0&&(s.params.uniqueNavElements&&typeof u.el=="string"&&d.length>1&&(d=s.$el.find(u.el),d.length>1&&(d=d.filter(x=>Kn(x).parents(".swiper")[0]===s.el))),u.type==="bullets"&&u.clickable&&d.addClass(u.clickableClass),d.addClass(u.modifierClass+u.type),d.addClass(s.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(d.addClass(`${u.modifierClass}${u.type}-dynamic`),o=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&d.addClass(u.progressbarOppositeClass),u.clickable&&d.on("click",Nn(u.bulletClass),function(y){y.preventDefault();let _=Kn(this).index()*s.params.slidesPerGroup;s.params.loop&&(_+=s.loopedSlides),s.slideTo(_)}),Object.assign(s.pagination,{$el:d,el:d[0]}),s.enabled||d.addClass(u.lockClass))}function h(){const u=s.params.pagination;if(a())return;const d=s.pagination.$el;d.removeClass(u.hiddenClass),d.removeClass(u.modifierClass+u.type),d.removeClass(s.isHorizontal()?u.horizontalClass:u.verticalClass),s.pagination.bullets&&s.pagination.bullets.removeClass&&s.pagination.bullets.removeClass(u.bulletActiveClass),u.clickable&&d.off("click",Nn(u.bulletClass))}t("init",()=>{s.params.pagination.enabled===!1?v():(p(),f(),l())}),t("activeIndexChange",()=>{(s.params.loop||typeof s.snapIndex>"u")&&l()}),t("snapIndexChange",()=>{s.params.loop||l()}),t("slidesLengthChange",()=>{s.params.loop&&(f(),l())}),t("snapGridLengthChange",()=>{s.params.loop||(f(),l())}),t("destroy",()=>{h()}),t("enable disable",()=>{const{$el:u}=s.pagination;u&&u[s.enabled?"removeClass":"addClass"](s.params.pagination.lockClass)}),t("lock unlock",()=>{l()}),t("click",(u,d)=>{const x=d.target,{$el:y}=s.pagination;if(s.params.pagination.el&&s.params.pagination.hideOnClick&&y&&y.length>0&&!Kn(x).hasClass(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&x===s.navigation.nextEl||s.navigation.prevEl&&x===s.navigation.prevEl))return;const _=y.hasClass(s.params.pagination.hiddenClass);n(_===!0?"paginationShow":"paginationHide"),y.toggleClass(s.params.pagination.hiddenClass)}});const m=()=>{s.$el.removeClass(s.params.pagination.paginationDisabledClass),s.pagination.$el&&s.pagination.$el.removeClass(s.params.pagination.paginationDisabledClass),p(),f(),l()},v=()=>{s.$el.addClass(s.params.pagination.paginationDisabledClass),s.pagination.$el&&s.pagination.$el.addClass(s.params.pagination.paginationDisabledClass),h()};Object.assign(s.pagination,{enable:m,disable:v,render:f,update:l,init:p,destroy:h})}function Go({swiper:s,extendParams:e,on:t,emit:n}){let i;s.autoplay={running:!1,paused:!1},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){if(!s.size){s.autoplay.running=!1,s.autoplay.paused=!1;return}const u=s.slides.eq(s.activeIndex);let d=s.params.autoplay.delay;u.attr("data-swiper-autoplay")&&(d=u.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(i),i=Uo(()=>{let x;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),x=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?a():(x=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(x=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),x=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?a():(x=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(x=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||x===!1)&&r()},d)}function o(){return typeof i<"u"||s.autoplay.running?!1:(s.autoplay.running=!0,n("autoplayStart"),r(),!0)}function a(){return!s.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),s.autoplay.running=!1,n("autoplayStop"),!0)}function c(u){!s.autoplay.running||s.autoplay.paused||(i&&clearTimeout(i),s.autoplay.paused=!0,u===0||!s.params.autoplay.waitForTransition?(s.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(d=>{s.$wrapperEl[0].addEventListener(d,f)}))}function l(){const u=ls();u.visibilityState==="hidden"&&s.autoplay.running&&c(),u.visibilityState==="visible"&&s.autoplay.paused&&(r(),s.autoplay.paused=!1)}function f(u){!s||s.destroyed||!s.$wrapperEl||u.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(d=>{s.$wrapperEl[0].removeEventListener(d,f)}),s.autoplay.paused=!1,s.autoplay.running?r():a())}function p(){s.params.autoplay.disableOnInteraction?a():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach(u=>{s.$wrapperEl[0].removeEventListener(u,f)})}function h(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),r())}function m(){s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",p),s.$el.on("mouseleave",h))}function v(){s.$el.off("mouseenter",p),s.$el.off("mouseleave",h)}t("init",()=>{s.params.autoplay.enabled&&(o(),ls().addEventListener("visibilitychange",l),m())}),t("beforeTransitionStart",(u,d,x)=>{s.autoplay.running&&(x||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(d):a())}),t("sliderFirstMove",()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?a():c())}),t("touchEnd",()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&r()}),t("destroy",()=>{v(),s.autoplay.running&&a(),ls().removeEventListener("visibilitychange",l)}),Object.assign(s.autoplay,{pause:c,run:r,start:o,stop:a})}function Vo(s){const{effect:e,swiper:t,on:n,setTranslate:i,setTransition:r,overwriteParams:o,perspective:a,recreateShadows:c,getEffectParams:l}=s;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(t.params,p),Object.assign(t.originalParams,p)}),n("setTranslate",()=>{t.params.effect===e&&i()}),n("setTransition",(p,h)=>{t.params.effect===e&&r(h)}),n("transitionEnd",()=>{if(t.params.effect===e&&c){if(!l||!l().slideShadows)return;t.slides.each(p=>{t.$(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),c()}});let f;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(f=!0),requestAnimationFrame(()=>{f&&t.slides&&t.slides.length&&(i(),f=!1)}))})}function Ho(s,e){return s.transformEl?e.find(s.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function Cr(s,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}`,i=s.transformEl?e.find(s.transformEl):e;let r=i.children(`.${n}`);return r.length||(r=Kn(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),i.append(r)),r}function Wo({swiper:s,extendParams:e,on:t}){e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Vo({effect:"coverflow",swiper:s,on:t,setTranslate:()=>{const{width:r,height:o,slides:a,slidesSizesGrid:c}=s,l=s.params.coverflowEffect,f=s.isHorizontal(),p=s.translate,h=f?-p+r/2:-p+o/2,m=f?l.rotate:-l.rotate,v=l.depth;for(let u=0,d=a.length;u<d;u+=1){const x=a.eq(u),y=c[u],_=x[0].swiperSlideOffset,b=(h-_-y/2)/y,E=typeof l.modifier=="function"?l.modifier(b):b*l.modifier;let A=f?m*E:0,D=f?0:m*E,g=-v*Math.abs(E),C=l.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(l.stretch)/100*y);let L=f?0:C*E,U=f?C*E:0,Z=1-(1-l.scale)*Math.abs(E);Math.abs(U)<.001&&(U=0),Math.abs(L)<.001&&(L=0),Math.abs(g)<.001&&(g=0),Math.abs(A)<.001&&(A=0),Math.abs(D)<.001&&(D=0),Math.abs(Z)<.001&&(Z=0);const z=`translate3d(${U}px,${L}px,${g}px)  rotateX(${D}deg) rotateY(${A}deg) scale(${Z})`;if(Ho(l,x).transform(z),x[0].style.zIndex=-Math.abs(Math.round(E))+1,l.slideShadows){let H=f?x.find(".swiper-slide-shadow-left"):x.find(".swiper-slide-shadow-top"),Y=f?x.find(".swiper-slide-shadow-right"):x.find(".swiper-slide-shadow-bottom");H.length===0&&(H=Cr(l,x,f?"left":"top")),Y.length===0&&(Y=Cr(l,x,f?"right":"bottom")),H.length&&(H[0].style.opacity=E>0?E:0),Y.length&&(Y[0].style.opacity=-E>0?-E:0)}}},setTransition:r=>{const{transformEl:o}=s.params.coverflowEffect;(o?s.slides.find(o):s.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Ar="/static/dashboard/assets/paypal.e77251d8.svg",qo="/static/dashboard/assets/google.28b6148d.svg",Xo="/static/dashboard/assets/lenovo.962ff710.svg",$o="/static/dashboard/assets/shopify.8fcfc25b.svg",jo="/static/dashboard/assets/spotify.5b2dc0cc.svg",Yo={},Zo={class:"footer-wrapper bg-gray-100 text-gray-600 relative",style:{overflow:"hidden"}},Jo=w("footer",{class:"text-center lg:text-left container mx-auto flex flex-wrap p-5"},[w("div",{class:"flex justify-center items-center lg:justify-between p-6 border-b border-gray-300"},[w("div",{class:"mr-12 hidden lg:block"},[w("span",null,"Get connected with us on social networks:")]),w("div",{class:"flex justify-center"},[w("a",{href:"#!",class:"mr-6 text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",class:"w-2.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[w("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})])]),w("a",{href:"#!",class:"mr-6 text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})])]),w("a",{href:"#!",class:"mr-6 text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512"},[w("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])]),w("a",{href:"#!",class:"mr-6 text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[w("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})])]),w("a",{href:"#!",class:"mr-6 text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[w("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})])]),w("a",{href:"#!",class:"text-gray-600"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[w("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})])])])]),w("div",{class:"mx-6 py-10 text-center md:text-left"},[w("div",{class:"grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},[w("div",{class:""},[w("h6",{class:"uppercase font-semibold mb-4 flex items-center justify-center md:justify-start"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cubes",class:"w-4 mr-3",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"})]),Ze(" Tailwind ELEMENTS ")]),w("p",null," Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")]),w("div",{class:""},[w("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Products "),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"Angular")]),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"React")]),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"Vue")]),w("p",null,[w("a",{href:"#!",class:"text-gray-600"},"Laravel")])]),w("div",{class:""},[w("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Useful links "),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"Pricing")]),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"Settings")]),w("p",{class:"mb-4"},[w("a",{href:"#!",class:"text-gray-600"},"Orders")]),w("p",null,[w("a",{href:"#!",class:"text-gray-600"},"Help")])]),w("div",{class:""},[w("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Contact "),w("p",{class:"flex items-center justify-center md:justify-start mb-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[w("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})]),Ze(" New York, NY 10012, US ")]),w("p",{class:"flex items-center justify-center md:justify-start mb-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})]),Ze(" info@example.com ")]),w("p",{class:"flex items-center justify-center md:justify-start mb-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"})]),Ze(" + 01 234 567 88 ")]),w("p",{class:"flex items-center justify-center md:justify-start"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"print",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"})]),Ze(" + 01 234 567 89 ")])])])])],-1),Ko=[Jo];function Qo(s,e){return sn(),pn("section",Zo,Ko)}const el=Pi(Yo,[["render",Qo]]);Oo.use([Ja,Go]);const tl={components:{Swiper:Ya,SwiperSlide:Za},data(){return{autoplay:{delay:4e3,disableOnInteraction:!1}}},setup(){return{onSwiper:t=>{console.log(t)},onSlideChange:()=>{console.log("slide change")},modules:[Wo,Ja]}}},Ri=s=>(cr("data-v-a8cd933c"),s=s(),dr(),s),nl={class:"container mx-auto mb-20 text-gray-700 py-10"},il=Ri(()=>w("div",{class:"text-center md:max-w-xl lg:max-w-3xl mx-auto"},[w("h3",{class:"text-3xl font-bold mb-6 text-gray-800"},"Testimonials"),w("p",{class:"mb-6 pb-2 md:mb-12 md:pb-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. ")],-1)),sl=Ri(()=>w("div",{class:"block rounded-lg shadow-lg bg-white"},[w("div",{class:"overflow-hidden rounded-t-lg h-14 bg-primary",style:{}}),w("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[w("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"})]),w("div",{class:"p-6"},[w("h4",{class:"text-2xl font-semibold mb-4"},"Maria Smantha"),w("hr"),w("p",{class:"mt-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),w("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),rl=Ri(()=>w("div",{class:"block rounded-lg shadow-lg bg-white"},[w("div",{class:"overflow-hidden rounded-t-lg h-14 bg-danger",style:{}}),w("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[w("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"})]),w("div",{class:"p-6"},[w("h4",{class:"text-2xl font-semibold mb-4"},"Maria Smantha"),w("hr"),w("p",{class:"mt-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),w("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),al=Ri(()=>w("div",{class:"block rounded-lg shadow-lg bg-white"},[w("div",{class:"overflow-hidden rounded-t-lg h-14 bg-warning",style:{}}),w("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[w("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"})]),w("div",{class:"p-6"},[w("h4",{class:"text-2xl font-semibold mb-4"},"Lisa Cudrow"),w("hr"),w("p",{class:"mt-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Neque cupiditate assumenda in maiores repudi mollitia architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),w("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),ol=Ri(()=>w("div",{class:"block rounded-lg shadow-lg bg-white"},[w("div",{class:"overflow-hidden rounded-t-lg h-14 bg-info",style:{}}),w("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[w("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"})]),w("div",{class:"p-6"},[w("h4",{class:"text-2xl font-semibold mb-4"},"John Smith"),w("hr"),w("p",{class:"mt-4"},[w("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[w("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),w("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1));function ll(s,e,t,n,i,r){const o=Ht("swiper-slide"),a=Ht("swiper");return sn(),pn("section",nl,[il,Fe(a,{"slides-per-view":1,"space-between":10,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,autoplay:{delay:1500},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:n.modules},{default:Ye(()=>[Fe(o,null,{default:Ye(()=>[sl]),_:1}),Fe(o,null,{default:Ye(()=>[rl]),_:1}),Fe(o,null,{default:Ye(()=>[al]),_:1}),Fe(o,null,{default:Ye(()=>[ol]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])])}const cl=Pi(tl,[["render",ll],["__scopeId","data-v-a8cd933c"]]);const dl={components:{breadcrumbs:ko,Swiper:Ya,SwiperSlide:Za},data(){return{isOpen:!1,products:"",baseUrl:Do}},mounted(){this.getProducts()},methods:{getProducts(){Ro.get("/api/member/products/").then(s=>{console.log(s),this.products=s.data})}}},rt=s=>(cr("data-v-86dcf198"),s=s(),dr(),s),ul={class:"container mx-auto"},hl={class:"grid grid-cols-12 gap-5 mb-5"},fl={class:"col-span-12"},pl={class:"flex justify-center items-center flex-wrap lg:justify-between"},ml={class:"mb-2 flex"},gl=rt(()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})],-1)),_l=rt(()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)),xl=rt(()=>w("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)),vl=rt(()=>w("div",{class:"mb-2"},[w("form",{class:"flex"},[w("input",{class:"rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none",placeholder:"Search..."}),w("button",{role:"button",class:"px-4 bg-rose-500 text-white rounded-r-lg border-t border-b border-r focus:outline-none"},[w("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])])])],-1)),yl={class:"ul-ecommerce-wrapper relative"},bl={class:"text-center mb-5"},Ml=rt(()=>w("span",{class:"bg-warning px-3 rounded py-1 text-white ml-3"},"0",-1)),Sl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"Low To High")])],-1)),wl=rt(()=>w("div",{class:"mb-5"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"High To Low")])],-1)),El=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"Mobile")])],-1)),Tl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"Speaker")])],-1)),Cl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"Furniture")])],-1)),Al=rt(()=>w("div",{class:"mb-5"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),w("span",{class:"ml-2"},"Watch")])],-1)),Ll=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"apple(3)")])],-1)),Pl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"Huwaei(1)")])],-1)),Dl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"sony(3)")])],-1)),Rl=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"samsung(2)")])],-1)),Il=rt(()=>w("div",{class:"mb-1"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"xiaomi(2)")])],-1)),Fl=rt(()=>w("div",{class:"mb-5"},[w("label",{class:"inline-flex items-center cursor-pointer"},[w("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),w("span",{class:"ml-2"},"asus(2)")])],-1)),zl={class:"ul-ecommerce-container"},Nl={class:"grid grid-cols-12 gap-5 mb-5"},Ul=["src"],Ol=["src"],kl={class:"p-5"},Bl={class:"mb-1"},Gl={class:"text-gray-600 dark:text-gray-300",href:"#"},Vl={class:"font-semibold mb-4"},Hl={class:"flex justify-between"},Wl={class:"flex mb-2"},ql=rt(()=>w("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1)),Xl=[ql],$l={class:"font-bold text-base mb-5"},jl={class:"flex justify-between flex-wrap"};function Yl(s,e,t,n,i,r){const o=Ht("breadcrumbs"),a=Ht("BaseBtn"),c=Ht("P"),l=Ht("BaseCard"),f=Ht("swiper-slide"),p=Ht("swiper");return sn(),pn("div",ul,[Fe(o,{parentTitle:"Ecommerce",subParentTitle:"Product"}),w("div",hl,[w("div",fl,[w("div",pl,[w("div",ml,[Fe(a,{onClick:e[0]||(e[0]=h=>i.isOpen=!i.isOpen),class:"mr-2 bg-rose-500 text-white ul-ecommerce-toggle-button lg:hidden block"},{default:Ye(()=>[gl]),_:1}),Fe(a,{rounded:"",class:"mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"},{default:Ye(()=>[_l]),_:1}),Fe(a,{rounded:"",class:"mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"},{default:Ye(()=>[xl]),_:1})]),vl])])]),w("div",yl,[w("div",{class:Io(["ul-ecommerce-sidebar",i.isOpen?"open":""])},[Fe(l,null,{default:Ye(()=>[w("div",bl,[Fe(a,{class:"bg-rose-500 text-white",block:""},{default:Ye(()=>[Ze(" View Cart "),Ml]),_:1})]),Fe(c,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Price ")]),_:1}),Sl,wl,Fe(c,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Category ")]),_:1}),El,Tl,Cl,Al,Fe(c,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Brand ")]),_:1}),Ll,Pl,Dl,Rl,Il,Fl]),_:1})],2),w("div",zl,[w("div",Nl,[(sn(!0),pn(er,null,Tr(i.products,(h,m)=>(sn(),pn("div",{key:m,class:"col-span-6 xl:col-span-3 md:col-span-4"},[Fe(l,{noPadding:"",class:"overflow-hidden relative"},{default:Ye(()=>[Fe(p,{"slides-per-view":1,"space-between":50,onSwiper:s.onSwiper,onSlideChange:s.onSlideChange,autoplay:{delay:2e3},loop:!0},{default:Ye(()=>[Fe(f,null,{default:Ye(()=>[w("img",{src:i.baseUrl+h.productimage_set[0].image,class:"productImage"},null,8,Ul)]),_:2},1024),Fe(f,null,{default:Ye(()=>[w("img",{src:i.baseUrl+h.productimage_set[1].image,class:"productImage"},null,8,Ol)]),_:2},1024)]),_:2},1032,["onSwiper","onSlideChange"]),w("div",kl,[w("div",Bl,[w("a",Gl,"Price: "+ki(h.trade_price)+" | MRP: "+ki(h.mrp),1)]),w("p",Vl,ki(h.title),1),w("div",Hl,[w("div",Wl,[(sn(),pn(er,null,Tr(5,(v,u)=>w("svg",{key:u,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},Xl)),64))]),w("p",$l,"MRP: "+ki(h.mrp),1)]),w("div",jl,[Fe(a,{class:"bg-rose-500 text-white mb-2"},{default:Ye(()=>[Ze(" Add Cart ")]),_:1}),Fe(a,{class:"border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white mb-2"},{default:Ye(()=>[Ze(" View Cart ")]),_:1})])])]),_:2},1024)]))),128))])])])])}const Zl=Pi(dl,[["render",Yl],["__scopeId","data-v-86dcf198"]]);function Qn(s){return(Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(s)}function Jl(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Kl(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Lr(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Pr(s,e){if(s==null)return{};var t,n,i=function(o,a){if(o==null)return{};var c,l,f={},p=Object.keys(o);for(l=0;l<p.length;l++)c=p[l],a.indexOf(c)>=0||(f[c]=o[c]);return f}(s,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(s,t)&&(i[t]=s[t])}return i}function q(s,e){var t=e.get(s);if(!t)throw new TypeError("attempted to get private field on non-instance");return t.get?t.get.call(s):t.value}var Ql={player:"lottie-player"},Bi="[lottieInteractivity]:",ec=function(){function s(){var n=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ql,r=i.actions,o=i.container,a=i.mode,c=i.player,l=Pr(i,["actions","container","mode","player"]);if(Jl(this,s),Dr.set(this,{writable:!0,value:function(){if(n.player){var h=function(){n.player.addEventListener("enterFrame",q(n,hi)),n.container.addEventListener("mouseenter",q(n,gt)),n.container.addEventListener("mouseleave",q(n,_t)),n.container.addEventListener("touchstart",q(n,gt),{passive:!0}),n.container.addEventListener("touchend",q(n,_t),{passive:!0})},m=function(){n.container.addEventListener("mouseenter",q(n,gt)),n.container.addEventListener("mouseleave",q(n,_t)),n.container.addEventListener("touchstart",q(n,gt),{passive:!0}),n.container.addEventListener("touchend",q(n,_t),{passive:!0})};n.stateHandler.set("loop",function(){n.actions[n.interactionIdx].loop?n.player.loop=parseInt(n.actions[n.interactionIdx].loop)-1:n.player.loop=!0,n.player.autoplay=!0}),n.stateHandler.set("autoplay",function(){n.player.loop=!1,n.player.autoplay=!0}),n.stateHandler.set("click",function(){n.player.loop=!1,n.player.autoplay=!1,n.container.addEventListener("click",q(n,Gt))}),n.stateHandler.set("hover",function(){n.player.loop=!1,n.player.autoplay=!1,n.container.addEventListener("mouseenter",q(n,Gt)),n.container.addEventListener("touchstart",q(n,Gt),{passive:!0})}),n.stateHandler.set("hold",m),n.stateHandler.set("pauseHold",m),n.transitionHandler.set("click",function(){n.container.addEventListener("click",q(n,nt))}),n.transitionHandler.set("hover",function(){n.container.addEventListener("mouseenter",q(n,nt)),n.container.addEventListener("touchstart",q(n,nt),{passive:!0})}),n.transitionHandler.set("hold",h),n.transitionHandler.set("pauseHold",h),n.transitionHandler.set("repeat",function(){n.player.loop=!0,n.player.autoplay=!0,n.player.addEventListener("loopComplete",function v(){q(n,Rr).call(n,{handler:v})})}),n.transitionHandler.set("onComplete",function(){n.actions[n.interactionIdx].state==="loop"?n.player.addEventListener("loopComplete",q(n,Yt)):n.player.addEventListener("complete",q(n,Yt))}),n.transitionHandler.set("seek",function(){n.player.stop(),n.player.addEventListener("enterFrame",q(n,ui)),n.container.addEventListener("mousemove",q(n,on)),n.container.addEventListener("touchmove",q(n,Un),{passive:!1}),n.container.addEventListener("mouseout",q(n,ln))})}}}),Gt.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].forceFlag;h||n.player.isPaused!==!0?h&&q(n,Gi).call(n,!0):q(n,Gi).call(n,!0)}}),_s.set(this,{writable:!0,value:function(){n.clickCounter===0?(n.player.play(),n.clickCounter++):(n.clickCounter++,n.player.setDirection(-1*n.player.playDirection),n.player.play())}}),nt.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].forceFlag,m=n.actions[n.interactionIdx].state,v=n.actions[n.interactionIdx].transition;if(n.mode==="chain"){if(n.actions[n.interactionIdx].count){var u=parseInt(n.actions[n.interactionIdx].count);if(n.clickCounter<u-1)return void(n.clickCounter+=1)}return n.clickCounter=0,!h&&v==="click"&&m==="click"||v==="hover"&&m==="hover"?n.transitionHandler.get("onComplete").call():n.nextInteraction(),n.container.removeEventListener("click",q(n,nt)),void n.container.removeEventListener("mouseenter",q(n,nt))}h||n.player.isPaused!==!0?h&&n.player.goToAndPlay(0,!0):n.player.goToAndPlay(0,!0)}}),on.set(this,{writable:!0,value:function(h){q(n,fi).call(n,h.clientX,h.clientY)}}),Un.set(this,{writable:!0,value:function(h){h.cancelable&&h.preventDefault(),q(n,fi).call(n,h.touches[0].clientX,h.touches[0].clientY)}}),ln.set(this,{writable:!0,value:function(){q(n,fi).call(n,-1,-1)}}),Yt.set(this,{writable:!0,value:function(){n.actions[n.interactionIdx].state==="loop"?n.player.removeEventListener("loopComplete",q(n,Yt)):n.player.removeEventListener("complete",q(n,Yt)),n.nextInteraction()}}),Rr.set(this,{writable:!0,value:function(h){var m=h.handler,v=1;n.actions[n.interactionIdx].repeat&&(v=n.actions[n.interactionIdx].repeat),n.playCounter>=v-1?(n.playCounter=0,n.player.removeEventListener("loopComplete",m),n.player.loop=!1,n.player.autoplay=!1,n.nextInteraction()):n.playCounter+=1}}),ui.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].frames;h&&n.player.currentFrame>=parseInt(h[1])-1&&(n.player.removeEventListener("enterFrame",q(n,ui)),n.container.removeEventListener("mousemove",q(n,on)),n.container.removeEventListener("mouseout",q(n,ln)),setTimeout(n.nextInteraction,0))}}),hi.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].frames;(h&&n.player.currentFrame>=h[1]||n.player.currentFrame>=n.player.totalFrames-1)&&(n.player.removeEventListener("enterFrame",q(n,hi)),n.container.removeEventListener("mouseenter",q(n,gt)),n.container.removeEventListener("mouseleave",q(n,_t)),n.container.removeEventListener("touchstart",q(n,gt),{passive:!0}),n.container.removeEventListener("touchend",q(n,_t),{passive:!0}),n.player.pause(),n.holdStatus=!1,n.nextInteraction()),n.player.playDirection===-1&&h&&n.player.currentFrame<h[0]&&n.player.pause()}}),gt.set(this,{writable:!0,value:function(){n.player.playDirection!==-1&&n.holdStatus!==null&&n.holdStatus||(n.player.setDirection(1),n.player.play(),n.holdStatus=!0)}}),_t.set(this,{writable:!0,value:function(){n.actions[n.interactionIdx].transition==="hold"||n.actions[n.interactionIdx].state==="hold"||n.actions[0].type==="hold"?(n.player.setDirection(-1),n.player.play()):n.actions[n.interactionIdx].transition!=="pauseHold"&&n.actions[n.interactionIdx].state!=="pauseHold"&&n.actions[0].type!=="pauseHold"||n.player.pause(),n.holdStatus=!1}}),xs.set(this,{writable:!0,value:function(){if(n.container.removeEventListener("click",q(n,nt)),n.container.removeEventListener("click",q(n,Gt)),n.container.removeEventListener("mouseenter",q(n,nt)),n.container.removeEventListener("touchstart",q(n,nt)),n.container.removeEventListener("touchmove",q(n,Un)),n.container.removeEventListener("mouseenter",q(n,Gt)),n.container.removeEventListener("touchstart",q(n,Gt)),n.container.removeEventListener("mouseenter",q(n,gt)),n.container.removeEventListener("touchstart",q(n,gt)),n.container.removeEventListener("mouseleave",q(n,_t)),n.container.removeEventListener("mousemove",q(n,on)),n.container.removeEventListener("mouseout",q(n,ln)),n.container.removeEventListener("touchend",q(n,_t)),n.player)try{n.player.removeEventListener("loopComplete",q(n,Yt)),n.player.removeEventListener("complete",q(n,Yt)),n.player.removeEventListener("enterFrame",q(n,ui)),n.player.removeEventListener("enterFrame",q(n,hi))}catch{}}}),Lr(this,"jumpToInteraction",function(h){q(n,xs).call(n),n.interactionIdx=h,n.interactionIdx<0?n.interactionIdx=0:n.interactionIdx,n.nextInteraction(!1)}),Lr(this,"nextInteraction",function(){var h=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n.oldInterctionIdx=n.interactionIdx,q(n,xs).call(n),n.player.loop=!1;var m=n.actions[n.interactionIdx].jumpTo;m?m>=0&&m<n.actions.length?(n.interactionIdx=m,q(n,Pt).call(n,{ignorePath:!1})):(n.interactionIdx=0,n.player.goToAndStop(0,!0),q(n,Pt).call(n,{ignorePath:!1})):(h&&n.interactionIdx++,n.interactionIdx>=n.actions.length?n.actions[n.actions.length-1].reset?(n.interactionIdx=0,n.player.resetSegments(!0),n.actions[n.interactionIdx].frames?n.player.goToAndStop(n.actions[n.interactionIdx].frames,!0):n.player.goToAndStop(0,!0),q(n,Pt).call(n,{ignorePath:!1})):(n.interactionIdx=n.actions.length-1,q(n,Pt).call(n,{ignorePath:!1})):q(n,Pt).call(n,{ignorePath:!1})),n.container.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{oldIndex:n.oldInterctionIdx,newIndex:n.interactionIdx}}))}),Gi.set(this,{writable:!0,value:function(h){var m=n.actions[n.interactionIdx].frames;if(!m)return n.player.resetSegments(!0),void n.player.goToAndPlay(0,!0);typeof m=="string"?n.player.goToAndPlay(m,h):n.player.playSegments(m,h)}}),Ir.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].path;if(!h)if(Qn(n.enteredPlayer)==="object"&&n.enteredPlayer.constructor.name==="AnimationItem"){if(h=n.enteredPlayer,n.player===h)return void q(n,Pt).call(n,{ignorePath:!0})}else{var m=(h=n.loadedAnimation).substr(h.lastIndexOf("/")+1);if(m=m.substr(0,m.lastIndexOf(".json")),n.player.fileName===m)return void q(n,Pt).call(n,{ignorePath:!0})}var v=n.container.getBoundingClientRect(),u="width: "+v.width+"px !important; height: "+v.height+"px !important; background: "+n.container.style.background;if(n.container.setAttribute("style",u),Qn(n.enteredPlayer)!=="object"||n.enteredPlayer.constructor.name!=="AnimationItem"){if(typeof n.enteredPlayer=="string"){var d=document.querySelector(n.enteredPlayer);d&&d.nodeName==="LOTTIE-PLAYER"&&(n.attachedListeners||(d.addEventListener("ready",function(){n.container.style.width="",n.container.style.height=""}),d.addEventListener("load",function(){n.player=d.getLottie(),q(n,Pt).call(n,{ignorePath:!0})}),n.attachedListeners=!0),d.load(h))}else n.enteredPlayer instanceof HTMLElement&&n.enteredPlayer.nodeName==="LOTTIE-PLAYER"&&(n.attachedListeners||(n.enteredPlayer.addEventListener("ready",function(){n.container.style.width="",n.container.style.height=""}),n.enteredPlayer.addEventListener("load",function(){n.player=n.enteredPlayer.getLottie(),q(n,Pt).call(n,{ignorePath:!0})}),n.attachedListeners=!0),n.enteredPlayer.load(h));if(!n.player)throw new Error("".concat(Bi," Specified player is invalid."),n.enteredPlayer)}else{if(!window.lottie)throw new Error("".concat(Bi," A Lottie player is required."));n.stop(),n.container.innerHTML="",Qn(h)==="object"&&h.constructor.name==="AnimationItem"?n.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,animationData:h.animationData,container:n.container}):n.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,path:h,container:n.container}),n.player.addEventListener("DOMLoaded",function(){n.container.style.width="",n.container.style.height="",q(n,Pt).call(n,{ignorePath:!0})})}n.clickCounter=0,n.playCounter=0}}),Pt.set(this,{writable:!0,value:function(h){var m=h.ignorePath,v=n.actions[n.interactionIdx].frames,u=n.actions[n.interactionIdx].state,d=n.actions[n.interactionIdx].transition,x=n.actions[n.interactionIdx].path,y=n.stateHandler.get(u),_=n.transitionHandler.get(d),b=n.actions[n.interactionIdx].speed?n.actions[n.interactionIdx].speed:1,E=n.actions[n.interactionIdx].delay?n.actions[n.interactionIdx].delay:0;m||!(x||n.actions[n.actions.length-1].reset&&n.interactionIdx===0)?setTimeout(function(){v&&(n.player.autoplay=!1,n.player.resetSegments(!0),n.player.goToAndStop(v[0],!0)),y?y.call():u==="none"&&(n.player.loop=!1,n.player.autoplay=!1),_&&_.call(),n.player.autoplay&&(n.player.resetSegments(!0),q(n,Gi).call(n,!0)),n.player.setSpeed(b)},E):q(n,Ir).call(n)}}),fi.set(this,{writable:!0,value:function(h,m){if(h!==-1&&m!==-1){var v=n.getContainerCursorPosition(h,m);h=v.x,m=v.y}var u=n.actions.find(function(y){var _=y.position;if(_){if(Array.isArray(_.x)&&Array.isArray(_.y))return h>=_.x[0]&&h<=_.x[1]&&m>=_.y[0]&&m<=_.y[1];if(!Number.isNaN(_.x)&&!Number.isNaN(_.y))return h===_.x&&m===_.y}return!1});if(u)if(u.type==="seek"||u.transition==="seek"){var d=(h-u.position.x[0])/(u.position.x[1]-u.position.x[0]),x=(m-u.position.y[0])/(u.position.y[1]-u.position.y[0]);n.player.playSegments(u.frames,!0),u.position.y[0]<0&&u.position.y[1]>1?n.player.goToAndStop(Math.floor(d*n.player.totalFrames),!0):n.player.goToAndStop(Math.ceil((d+x)/2*n.player.totalFrames),!0)}else u.type==="loop"?n.player.playSegments(u.frames,!0):u.type==="play"?(n.player.isPaused===!0&&n.player.resetSegments(),n.player.playSegments(u.frames)):u.type==="stop"&&(n.player.resetSegments(!0),n.player.goToAndStop(u.frames[0],!0))}}),vs.set(this,{writable:!0,value:function(){var h=n.getContainerVisibility(),m=n.actions.find(function(d){var x=d.visibility;return h>=x[0]&&h<=x[1]});if(m)if(m.type==="seek"){var v=m.frames[0],u=m.frames.length==2?m.frames[1]:n.player.totalFrames-1;n.assignedSegment!==null&&(n.player.resetSegments(!0),n.assignedSegment=null),n.player.goToAndStop(v+Math.round((h-m.visibility[0])/(m.visibility[1]-m.visibility[0])*(u-v)),!0)}else if(m.type==="loop")n.player.loop=!0,(n.assignedSegment===null||n.assignedSegment!==m.frames||n.player.isPaused===!0)&&(n.player.playSegments(m.frames,!0),n.assignedSegment=m.frames);else if(m.type==="play"||m.type==="playOnce"){if(m.type==="playOnce"&&!n.scrolledAndPlayed)return n.scrolledAndPlayed=!0,n.player.resetSegments(!0),void(m.frames?n.player.playSegments(m.frames,!0):n.player.play());m.type==="play"&&n.player.isPaused&&(n.player.resetSegments(!0),m.frames?n.player.playSegments(m.frames,!0):n.player.play())}else m.type==="stop"&&n.player.goToAndStop(m.frames[0],!0)}}),this.enteredPlayer=c,Qn(c)!=="object"||c.constructor.name!=="AnimationItem"){if(typeof c=="string"){var f=document.querySelector(c);f&&f.nodeName==="LOTTIE-PLAYER"&&(c=f.getLottie())}else c instanceof HTMLElement&&c.nodeName==="LOTTIE-PLAYER"&&(c=c.getLottie());if(!c){var p=Bi+"Specified player:"+c+" is invalid.";throw new Error(p)}}typeof o=="string"&&(o=document.querySelector(o)),o||(o=c.wrapper),this.player=c,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=o,this.mode=a,this.actions=r,this.options=l,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.oldInterctionIdx=0,this.clickCounter=0,this.playCounter=0,this.stateHandler=new Map,this.transitionHandler=new Map}var e,t;return e=s,(t=[{key:"getContainerVisibility",value:function(){var n=this.container.getBoundingClientRect(),i=n.top,r=n.height;return(window.innerHeight-i)/(window.innerHeight+r)}},{key:"getContainerCursorPosition",value:function(n,i){var r=this.container.getBoundingClientRect(),o=r.top;return{x:(n-r.left)/r.width,y:(i-o)/r.height}}},{key:"initScrollMode",value:function(){this.player.stop(),window.addEventListener("scroll",q(this,vs),!0)}},{key:"initCursorMode",value:function(){this.actions&&this.actions.length===1?this.actions[0].type==="click"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",q(this,nt))):this.actions[0].type==="hover"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("mouseenter",q(this,nt)),this.container.addEventListener("touchstart",q(this,nt),{passive:!0})):this.actions[0].type==="toggle"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",q(this,_s))):this.actions[0].type==="hold"||this.actions[0].type==="pauseHold"?(this.container.addEventListener("mouseenter",q(this,gt)),this.container.addEventListener("mouseleave",q(this,_t)),this.container.addEventListener("touchstart",q(this,gt),{passive:!0}),this.container.addEventListener("touchend",q(this,_t),{passive:!0})):this.actions[0].type==="seek"&&(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",q(this,on)),this.container.addEventListener("touchmove",q(this,Un),{passive:!1}),this.container.addEventListener("mouseout",q(this,ln))):(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",q(this,on)),this.container.addEventListener("mouseleave",q(this,ln)),q(this,fi).call(this,-1,-1))}},{key:"initChainMode",value:function(){q(this,Dr).call(this),this.player.loop=!1,this.player.stop(),q(this,Pt).call(this,{ignorePath:!1})}},{key:"start",value:function(){var n=this;this.mode==="scroll"?this.player.isLoaded?this.initScrollMode():this.player.addEventListener("DOMLoaded",function(){n.initScrollMode()}):this.mode==="cursor"?this.player.isLoaded?this.initCursorMode():this.player.addEventListener("DOMLoaded",function(){n.initCursorMode()}):this.mode==="chain"&&(this.player.isLoaded?this.initChainMode():this.player.addEventListener("DOMLoaded",function(){n.initChainMode()}))}},{key:"redefineOptions",value:function(n){var i=n.actions,r=n.container,o=n.mode,a=n.player,c=Pr(n,["actions","container","mode","player"]);if(this.stop(),this.enteredPlayer=a,Qn(a)!=="object"||a.constructor.name!=="AnimationItem"){if(typeof a=="string"){var l=document.querySelector(a);l&&l.nodeName==="LOTTIE-PLAYER"&&(a=l.getLottie())}else a instanceof HTMLElement&&a.nodeName==="LOTTIE-PLAYER"&&(a=a.getLottie());if(!a)throw new Error(Bi+"Specified player:"+a+" is invalid.",a)}typeof r=="string"&&(r=document.querySelector(r)),r||(r=a.wrapper),this.player=a,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=r,this.mode=o,this.actions=i,this.options=c,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.clickCounter=0,this.playCounter=0,this.holdStatus=null,this.stateHandler=new Map,this.transitionHandler=new Map,this.start()}},{key:"stop",value:function(){if(this.mode==="scroll"&&window.removeEventListener("scroll",q(this,vs),!0),this.mode==="cursor"&&(this.container.removeEventListener("click",q(this,nt)),this.container.removeEventListener("click",q(this,_s)),this.container.removeEventListener("mouseenter",q(this,nt)),this.container.removeEventListener("touchstart",q(this,nt)),this.container.removeEventListener("touchmove",q(this,Un)),this.container.removeEventListener("mousemove",q(this,on)),this.container.removeEventListener("mouseleave",q(this,ln)),this.container.removeEventListener("touchstart",q(this,gt)),this.container.removeEventListener("touchend",q(this,_t))),this.mode==="chain"&&(this.container.removeEventListener("click",q(this,nt)),this.container.removeEventListener("click",q(this,Gt)),this.container.removeEventListener("mouseenter",q(this,nt)),this.container.removeEventListener("touchstart",q(this,nt)),this.container.removeEventListener("touchmove",q(this,Un)),this.container.removeEventListener("mouseenter",q(this,Gt)),this.container.removeEventListener("touchstart",q(this,Gt)),this.container.removeEventListener("mouseenter",q(this,gt)),this.container.removeEventListener("touchstart",q(this,gt)),this.container.removeEventListener("mouseleave",q(this,_t)),this.container.removeEventListener("mousemove",q(this,on)),this.container.removeEventListener("mouseout",q(this,ln)),this.container.removeEventListener("touchend",q(this,_t)),this.player))try{this.player.removeEventListener("loopComplete",q(this,Yt)),this.player.removeEventListener("complete",q(this,Yt)),this.player.removeEventListener("enterFrame",q(this,ui)),this.player.removeEventListener("enterFrame",q(this,hi))}catch{}this.player&&(this.player.destroy(),this.player=null)}}])&&Kl(e.prototype,t),s}(),Dr=new WeakMap,Gt=new WeakMap,_s=new WeakMap,nt=new WeakMap,on=new WeakMap,Un=new WeakMap,ln=new WeakMap,Yt=new WeakMap,Rr=new WeakMap,ui=new WeakMap,hi=new WeakMap,gt=new WeakMap,_t=new WeakMap,xs=new WeakMap,Gi=new WeakMap,Ir=new WeakMap,Pt=new WeakMap,fi=new WeakMap,vs=new WeakMap,tc=function(s){var e=new ec(s);return e.start(),e};const nc={name:"App",mounted(){this.$refs.lottie.addEventListener("load",function(){tc({player:"#firstLottie",mode:"chain",actions:[{state:"autoplay",transition:"onComplete"},{state:"autoplay",transition:"onComplete",path:"https://assets7.lottiefiles.com/private_files/lf30_x2lzmtdl.json"},{state:"autoplay",transition:"onComplete",path:"https://assets3.lottiefiles.com/private_files/lf30_9kdbftpx.json",reset:!0}]})})}};function ic(s,e,t,n,i,r){const o=Ht("lottie-player");return sn(),Fo(o,{id:"firstLottie",ref:"lottie",autoplay:"",src:"https://assets9.lottiefiles.com/packages/lf20_57TxAX.json",style:{height:"500px"}},null,512)}const sc=Pi(nc,[["render",ic]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="148",rc=0,Fr=1,ac=2,Ka=1,oc=2,Si=3,Dn=0,It=1,tn=2,Vi=3,mn=0,ni=1,zr=2,Nr=3,Ur=4,lc=5,ei=100,cc=101,dc=102,Or=103,kr=104,uc=200,hc=201,fc=202,pc=203,Qa=204,eo=205,mc=206,gc=207,_c=208,xc=209,vc=210,yc=0,bc=1,Mc=2,tr=3,Sc=4,wc=5,Ec=6,Tc=7,hr=0,Cc=1,Ac=2,rn=0,Lc=1,Pc=2,Dc=3,Rc=4,Ic=5,to=300,si=301,ri=302,nr=303,ir=304,us=306,sr=1e3,kt=1001,rr=1002,mt=1003,Br=1004,ys=1005,Rt=1006,Fc=1007,Ti=1008,Rn=1009,zc=1010,Nc=1011,no=1012,Uc=1013,Cn=1014,An=1015,Ci=1016,Oc=1017,kc=1018,ii=1020,Bc=1021,Gc=1022,Bt=1023,Vc=1024,Hc=1025,Ln=1026,ai=1027,Wc=1028,qc=1029,Xc=1030,$c=1031,jc=1033,bs=33776,Ms=33777,Ss=33778,ws=33779,Gr=35840,Vr=35841,Hr=35842,Wr=35843,Yc=36196,qr=37492,Xr=37496,$r=37808,jr=37809,Yr=37810,Zr=37811,Jr=37812,Kr=37813,Qr=37814,ea=37815,ta=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,oa=36492,In=3e3,ke=3001,Zc=3200,Jc=3201,io=0,Kc=1,Vt="srgb",Ai="srgb-linear",Es=7680,Qc=519,la=35044,ca="300 es",ar=1035;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,da=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[s&255]+ot[s>>8&255]+ot[s>>16&255]+ot[s>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function ed(s,e){return(s%e+e)%e}function Cs(s,e,t){return(1-t)*s+t*e}function ua(s){return(s&s-1)===0&&s!==0}function or(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],p=n[7],h=n[2],m=n[5],v=n[8],u=i[0],d=i[3],x=i[6],y=i[1],_=i[4],b=i[7],E=i[2],A=i[5],D=i[8];return r[0]=o*u+a*y+c*E,r[3]=o*d+a*_+c*A,r[6]=o*x+a*b+c*D,r[1]=l*u+f*y+p*E,r[4]=l*d+f*_+p*A,r[7]=l*x+f*b+p*D,r[2]=h*u+m*y+v*E,r[5]=h*d+m*_+v*A,r[8]=h*x+m*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*r*f+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=f*o-a*l,h=a*c-f*r,m=l*r-o*c,v=t*p+n*h+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const u=1/v;return e[0]=p*u,e[1]=(i*l-f*n)*u,e[2]=(a*n-i*o)*u,e[3]=h*u,e[4]=(f*t-i*c)*u,e[5]=(i*r-a*t)*u,e[6]=m*u,e[7]=(n*c-l*t)*u,e[8]=(o*t-n*r)*u,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Tt;function so(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Li(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ls={[Vt]:{[Ai]:Pn},[Ai]:{[Vt]:cs}},ft={legacyMode:!0,get workingColorSpace(){return Ai},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ls[e]&&Ls[e][t]!==void 0){const n=Ls[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},je={r:0,g:0,b:0},Nt={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Ps(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function qi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=ed(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ps(o,r,e+1/3),this.g=Ps(o,r,e),this.b=Ps(o,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ft.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ft.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,f=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vt){const n=ro[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(qi(this,je),e),Et(je.r*255,0,255)<<16^Et(je.g*255,0,255)<<8^Et(je.b*255,0,255)<<0}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qi(this,je),t);const n=je.r,i=je.g,r=je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=f<=.5?p/(o+a):p/(2-o-a),o){case n:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-n)/p+2;break;case r:c=(n-i)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qi(this,je),t),e.r=je.r,e.g=je.g,e.b=je.b,e}getStyle(e=Vt){return ft.fromWorkingColorSpace(qi(this,je),e),e!==Vt?`color(${e} ${je.r} ${je.g} ${je.b})`:`rgb(${je.r*255|0},${je.g*255|0},${je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(Wi);const n=Cs(Nt.h,Wi.h,t),i=Cs(Nt.s,Wi.s,t),r=Cs(Nt.l,Wi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=ro;let On;class ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=Li("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Li("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class oo{constructor(e=null){this.isSource=!0,this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ds(i[o].image)):r.push(Ds(i[o]))}else r=Ds(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;class vt extends li{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=kt,i=kt,r=Rt,o=Ti,a=Bt,c=Rn,l=vt.DEFAULT_ANISOTROPY,f=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ii(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==to)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=to;vt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],f=c[4],p=c[8],h=c[1],m=c[5],v=c[9],u=c[2],d=c[6],x=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-u)<.01&&Math.abs(v-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+u)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(m+1)/2,E=(x+1)/2,A=(f+h)/4,D=(p+u)/4,g=(v+d)/4;return _>b&&_>E?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=D/n):b>E?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=g/r),this.set(n,i,r,t),this}let y=Math.sqrt((d-v)*(d-v)+(p-u)*(p-u)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(d-v)/y,this.y=(p-u)/y,this.z=(h-f)/y,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fn extends li{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lo extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nd extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],f=n[i+2],p=n[i+3];const h=r[o+0],m=r[o+1],v=r[o+2],u=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=u;return}if(p!==u||c!==h||l!==m||f!==v){let d=1-a;const x=c*h+l*m+f*v+p*u,y=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const E=Math.sqrt(_),A=Math.atan2(E,x*y);d=Math.sin(d*A)/E,a=Math.sin(a*A)/E}const b=a*y;if(c=c*d+h*b,l=l*d+m*b,f=f*d+v*b,p=p*d+u*b,d===1-a){const E=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=E,l*=E,f*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],f=n[i+3],p=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+f*p+c*m-l*h,e[t+1]=c*v+f*h+l*p-a*m,e[t+2]=l*v+f*m+a*h-c*p,e[t+3]=f*v-a*p-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(i/2),p=a(r/2),h=c(n/2),m=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"YXZ":this._x=h*f*p+l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"ZXY":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p-h*m*v;break;case"ZYX":this._x=h*f*p-l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p+h*m*v;break;case"YZX":this._x=h*f*p+l*m*v,this._y=l*m*p+h*f*v,this._z=l*f*v-h*m*p,this._w=l*f*p-h*m*v;break;case"XZY":this._x=h*f*p-l*m*v,this._y=l*m*p-h*f*v,this._z=l*f*v+h*m*p,this._w=l*f*p+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+i*l-r*c,this._y=i*f+o*c+r*a-n*l,this._z=r*f+o*l+n*c-i*a,this._w=o*f-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),p=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=i*p+this._y*h,this._z=r*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,f=c*n+a*t-r*i,p=c*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=l*c+h*-r+f*-a-p*-o,this.y=f*c+h*-o+p*-r-l*-a,this.z=p*c+h*-a+l*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rs.copy(this).projectOnVector(e),this.sub(Rs)}reflect(e){return this.sub(Rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new R,ha=new Fi;class zi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const f=e[c],p=e[c+1],h=e[c+2];f<t&&(t=f),p<n&&(n=p),h<i&&(i=h),f>r&&(r=f),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const f=e.getX(c),p=e.getY(c),h=e.getZ(c);f<t&&(t=f),p<n&&(n=p),h<i&&(i=h),f>r&&(r=f),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)yn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Xi.subVectors(this.max,pi),kn.subVectors(e.a,pi),Bn.subVectors(e.b,pi),Gn.subVectors(e.c,pi),cn.subVectors(Bn,kn),dn.subVectors(Gn,Bn),bn.subVectors(kn,Gn);let t=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-bn.z,bn.y,cn.z,0,-cn.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!Fs(t,kn,Bn,Gn,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,kn,Bn,Gn,Xi))?!1:($i.crossVectors(cn,dn),t=[$i.x,$i.y,$i.z],Fs(t,kn,Bn,Gn,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,Is=new zi,kn=new R,Bn=new R,Gn=new R,cn=new R,dn=new R,bn=new R,pi=new R,Xi=new R,$i=new R,Mn=new R;function Fs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mn.fromArray(s,r);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),c=e.dot(Mn),l=t.dot(Mn),f=n.dot(Mn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const id=new zi,mi=new R,zs=new R;class fr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):id.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(zs)),this.expandByPoint(mi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new R,Ns=new R,ji=new R,un=new R,Us=new R,Yi=new R,Os=new R;class sd{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ns.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Ns);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ji),a=un.dot(this.direction),c=-un.dot(ji),l=un.lengthSq(),f=Math.abs(1-o*o);let p,h,m,v;if(f>0)if(p=o*c-a,h=o*a-c,v=r*f,p>=0)if(h>=-v)if(h<=v){const u=1/f;p*=u,h*=u,m=p*(p+o*h+2*a)+h*(o*p+h+2*c)+l}else h=r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;else h<=-v?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l):h<=v?(p=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),i&&i.copy(ji).multiplyScalar(h).add(Ns),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,r){Us.subVectors(t,e),Yi.subVectors(n,e),Os.crossVectors(Us,Yi);let o=this.direction.dot(Os),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,e);const c=a*this.direction.dot(Yi.crossVectors(un,Yi));if(c<0)return null;const l=a*this.direction.dot(Us.cross(un));if(l<0||c+l>o)return null;const f=-a*un.dot(Os);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,f,p,h,m,v,u,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=f,x[10]=p,x[14]=h,x[3]=m,x[7]=v,x[11]=u,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vn.setFromMatrixColumn(e,0).length(),r=1/Vn.setFromMatrixColumn(e,1).length(),o=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*f,m=o*p,v=a*f,u=a*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=h-u*l,t[9]=-a*c,t[2]=u-h*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,m=c*p,v=l*f,u=l*p;t[0]=h+u*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=m*a-v,t[6]=u+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,m=c*p,v=l*f,u=l*p;t[0]=h-u*a,t[4]=-o*p,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*f,t[9]=u-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,m=o*p,v=a*f,u=a*p;t[0]=c*f,t[4]=v*l-m,t[8]=h*l+u,t[1]=c*p,t[5]=u*l+h,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,v=a*c,u=a*l;t[0]=c*f,t[4]=u-h*p,t[8]=v*p+m,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*p+v,t[10]=h-u*p}else if(e.order==="XZY"){const h=o*c,m=o*l,v=a*c,u=a*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=h*p+u,t[5]=o*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=a*f,t[10]=u*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,ad)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),hn.crossVectors(n,St),hn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),hn.crossVectors(n,St)),hn.normalize(),Zi.crossVectors(St,hn),i[0]=hn.x,i[4]=Zi.x,i[8]=St.x,i[1]=hn.y,i[5]=Zi.y,i[9]=St.y,i[2]=hn.z,i[6]=Zi.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],p=n[5],h=n[9],m=n[13],v=n[2],u=n[6],d=n[10],x=n[14],y=n[3],_=n[7],b=n[11],E=n[15],A=i[0],D=i[4],g=i[8],C=i[12],L=i[1],U=i[5],Z=i[9],z=i[13],F=i[2],H=i[6],Y=i[10],Q=i[14],$=i[3],ne=i[7],J=i[11],k=i[15];return r[0]=o*A+a*L+c*F+l*$,r[4]=o*D+a*U+c*H+l*ne,r[8]=o*g+a*Z+c*Y+l*J,r[12]=o*C+a*z+c*Q+l*k,r[1]=f*A+p*L+h*F+m*$,r[5]=f*D+p*U+h*H+m*ne,r[9]=f*g+p*Z+h*Y+m*J,r[13]=f*C+p*z+h*Q+m*k,r[2]=v*A+u*L+d*F+x*$,r[6]=v*D+u*U+d*H+x*ne,r[10]=v*g+u*Z+d*Y+x*J,r[14]=v*C+u*z+d*Q+x*k,r[3]=y*A+_*L+b*F+E*$,r[7]=y*D+_*U+b*H+E*ne,r[11]=y*g+_*Z+b*Y+E*J,r[15]=y*C+_*z+b*Q+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],p=e[6],h=e[10],m=e[14],v=e[3],u=e[7],d=e[11],x=e[15];return v*(+r*c*p-i*l*p-r*a*h+n*l*h+i*a*m-n*c*m)+u*(+t*c*m-t*l*h+r*o*h-i*o*m+i*l*f-r*c*f)+d*(+t*l*p-t*a*m-r*o*p+n*o*m+r*a*f-n*l*f)+x*(-i*a*f-t*c*p+t*a*h+i*o*p-n*o*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=e[9],h=e[10],m=e[11],v=e[12],u=e[13],d=e[14],x=e[15],y=p*d*l-u*h*l+u*c*m-a*d*m-p*c*x+a*h*x,_=v*h*l-f*d*l-v*c*m+o*d*m+f*c*x-o*h*x,b=f*u*l-v*p*l+v*a*m-o*u*m-f*a*x+o*p*x,E=v*p*c-f*u*c-v*a*h+o*u*h+f*a*d-o*p*d,A=t*y+n*_+i*b+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=y*D,e[1]=(u*h*r-p*d*r-u*i*m+n*d*m+p*i*x-n*h*x)*D,e[2]=(a*d*r-u*c*r+u*i*l-n*d*l-a*i*x+n*c*x)*D,e[3]=(p*c*r-a*h*r-p*i*l+n*h*l+a*i*m-n*c*m)*D,e[4]=_*D,e[5]=(f*d*r-v*h*r+v*i*m-t*d*m-f*i*x+t*h*x)*D,e[6]=(v*c*r-o*d*r-v*i*l+t*d*l+o*i*x-t*c*x)*D,e[7]=(o*h*r-f*c*r+f*i*l-t*h*l-o*i*m+t*c*m)*D,e[8]=b*D,e[9]=(v*p*r-f*u*r-v*n*m+t*u*m+f*n*x-t*p*x)*D,e[10]=(o*u*r-v*a*r+v*n*l-t*u*l-o*n*x+t*a*x)*D,e[11]=(f*a*r-o*p*r-f*n*l+t*p*l+o*n*m-t*a*m)*D,e[12]=E*D,e[13]=(f*u*i-v*p*i+v*n*h-t*u*h-f*n*d+t*p*d)*D,e[14]=(v*a*i-o*u*i-v*n*c+t*u*c+o*n*d-t*a*d)*D,e[15]=(o*p*i-f*a*i+f*n*c-t*p*c-o*n*h+t*a*h)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,f*a+n,f*c-i*o,0,l*c-i*a,f*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,f=o+o,p=a+a,h=r*l,m=r*f,v=r*p,u=o*f,d=o*p,x=a*p,y=c*l,_=c*f,b=c*p,E=n.x,A=n.y,D=n.z;return i[0]=(1-(u+x))*E,i[1]=(m+b)*E,i[2]=(v-_)*E,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(h+x))*A,i[6]=(d+y)*A,i[7]=0,i[8]=(v+_)*D,i[9]=(d-y)*D,i[10]=(1-(h+u))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vn.set(i[0],i[1],i[2]).length();const o=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const l=1/r,f=1/o,p=1/a;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=f,Ut.elements[5]*=f,Ut.elements[6]*=f,Ut.elements[8]*=p,Ut.elements[9]*=p,Ut.elements[10]*=p,t.setFromRotationMatrix(Ut),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),f=1/(o-r),p=(t+e)*c,h=(n+i)*l,m=(o+r)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new R,Ut=new Xe,rd=new R(0,0,0),ad=new R(1,1,1),hn=new R,Zi=new R,St=new R,fa=new Xe,pa=new Fi;class Ni{constructor(e=0,t=0,n=0,i=Ni.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],f=i[9],p=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ni.DefaultOrder="XYZ";Ni.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let od=0;const ma=new R,Hn=new Fi,Kt=new Xe,Ji=new R,gi=new R,ld=new R,cd=new Fi,ga=new R(1,0,0),_a=new R(0,1,0),xa=new R(0,0,1),dd={type:"added"},va={type:"removed"};class st extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new R,t=new Ni,n=new Fi,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Tt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DefaultMatrixWorldAutoUpdate,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(gi,Ji,this.up):Kt.lookAt(Ji,gi,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),Hn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(va)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(va)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DefaultUp=new R(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.DefaultMatrixWorldAutoUpdate=!0;const Ot=new R,Qt=new R,ks=new R,en=new R,Wn=new R,qn=new R,ya=new R,Bs=new R,Gs=new R,Vs=new R;class nn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ot.subVectors(i,t),Qt.subVectors(n,t),ks.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(Qt),c=Ot.dot(ks),l=Qt.dot(Qt),f=Qt.dot(ks),p=o*l-a*a;if(p===0)return r.set(-2,-1,-1);const h=1/p,m=(l*c-a*f)*h,v=(o*f-a*c)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,en),c.set(0,0),c.addScaledVector(r,en.x),c.addScaledVector(o,en.y),c.addScaledVector(a,en.z),c}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),Qt.subVectors(e,t),Ot.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ot.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return nn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Wn.subVectors(i,n),qn.subVectors(r,n),Bs.subVectors(e,n);const c=Wn.dot(Bs),l=qn.dot(Bs);if(c<=0&&l<=0)return t.copy(n);Gs.subVectors(e,i);const f=Wn.dot(Gs),p=qn.dot(Gs);if(f>=0&&p<=f)return t.copy(i);const h=c*p-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Wn,o);Vs.subVectors(e,r);const m=Wn.dot(Vs),v=qn.dot(Vs);if(v>=0&&m<=v)return t.copy(r);const u=m*l-c*v;if(u<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(qn,a);const d=f*v-m*p;if(d<=0&&p-f>=0&&m-v>=0)return ya.subVectors(r,i),a=(p-f)/(p-f+(m-v)),t.copy(i).addScaledVector(ya,a);const x=1/(d+u+h);return o=u*x,a=h*x,t.copy(n).addScaledVector(Wn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ud=0;class Ui extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ni,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qa,this.blendDst=eo,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pr extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new R,Ki=new Pe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class uo extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ho extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hd=0;const Dt=new Xe,Hs=new st,Xn=new R,wt=new zi,_i=new zi,it=new R;class an extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(so(e)?ho:uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(wt.min,_i.min),wt.expandByPoint(it),it.addVectors(wt.max,_i.max),wt.expandByPoint(it)):(wt.expandByPoint(_i.min),wt.expandByPoint(_i.max))}wt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)it.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(it));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)it.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(e,l),it.add(Xn)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let L=0;L<a;L++)l[L]=new R,f[L]=new R;const p=new R,h=new R,m=new R,v=new Pe,u=new Pe,d=new Pe,x=new R,y=new R;function _(L,U,Z){p.fromArray(i,L*3),h.fromArray(i,U*3),m.fromArray(i,Z*3),v.fromArray(o,L*2),u.fromArray(o,U*2),d.fromArray(o,Z*2),h.sub(p),m.sub(p),u.sub(v),d.sub(v);const z=1/(u.x*d.y-d.x*u.y);!isFinite(z)||(x.copy(h).multiplyScalar(d.y).addScaledVector(m,-u.y).multiplyScalar(z),y.copy(m).multiplyScalar(u.x).addScaledVector(h,-d.x).multiplyScalar(z),l[L].add(x),l[U].add(x),l[Z].add(x),f[L].add(y),f[U].add(y),f[Z].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,U=b.length;L<U;++L){const Z=b[L],z=Z.start,F=Z.count;for(let H=z,Y=z+F;H<Y;H+=3)_(n[H+0],n[H+1],n[H+2])}const E=new R,A=new R,D=new R,g=new R;function C(L){D.fromArray(r,L*3),g.copy(D);const U=l[L];E.copy(U),E.sub(D.multiplyScalar(D.dot(U))).normalize(),A.crossVectors(g,U);const z=A.dot(f[L])<0?-1:1;c[L*4]=E.x,c[L*4+1]=E.y,c[L*4+2]=E.z,c[L*4+3]=z}for(let L=0,U=b.length;L<U;++L){const Z=b[L],z=Z.start,F=Z.count;for(let H=z,Y=z+F;H<Y;H+=3)C(n[H+0]),C(n[H+1]),C(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,f=new R,p=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),u=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,u),o.fromBufferAttribute(t,d),f.subVectors(o,r),p.subVectors(i,r),f.cross(p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,u),l.fromBufferAttribute(n,d),a.add(f),c.add(f),l.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(u,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,r),p.subVectors(i,r),f.cross(p),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,p=a.normalized,h=new l.constructor(c.length*f);let m=0,v=0;for(let u=0,d=c.length;u<d;u++){a.isInterleavedBufferAttribute?m=c[u]*a.data.stride+a.offset:m=c[u]*f;for(let x=0;x<f;x++)h[v++]=l[m++]}return new qt(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let f=0,p=l.length;f<p;f++){const h=l[f],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],p=r[l];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new Xe,$n=new sd,Ws=new fr,xi=new R,vi=new R,yi=new R,qs=new R,Qi=new R,es=new Pe,ts=new Pe,ns=new Pe,Xs=new R,is=new R;class lt extends st{constructor(e=new an,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=a[c],p=r[c];f!==0&&(qs.fromBufferAttribute(p,e),o?Qi.addScaledVector(qs,f):Qi.addScaledVector(qs.sub(t),f))}t.add(Qi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),e.ray.intersectsSphere(Ws)===!1)||(ba.copy(r).invert(),$n.copy(e.ray).applyMatrix4(ba),n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,f=n.attributes.uv2,p=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const u=p[m],d=i[u.materialIndex],x=Math.max(u.start,h.start),y=Math.min(a.count,Math.min(u.start+u.count,h.start+h.count));for(let _=x,b=y;_<b;_+=3){const E=a.getX(_),A=a.getX(_+1),D=a.getX(_+2);o=ss(this,d,e,$n,l,f,E,A,D),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let u=m,d=v;u<d;u+=3){const x=a.getX(u),y=a.getX(u+1),_=a.getX(u+2);o=ss(this,i,e,$n,l,f,x,y,_),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){const u=p[m],d=i[u.materialIndex],x=Math.max(u.start,h.start),y=Math.min(c.count,Math.min(u.start+u.count,h.start+h.count));for(let _=x,b=y;_<b;_+=3){const E=_,A=_+1,D=_+2;o=ss(this,d,e,$n,l,f,E,A,D),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let u=m,d=v;u<d;u+=3){const x=u,y=u+1,_=u+2;o=ss(this,i,e,$n,l,f,x,y,_),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}}}function fd(s,e,t,n,i,r,o,a){let c;if(e.side===It?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Dn,a),c===null)return null;is.copy(a),is.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(is);return l<t.near||l>t.far?null:{distance:l,point:is.clone(),object:s}}function ss(s,e,t,n,i,r,o,a,c){s.getVertexPosition(o,xi),s.getVertexPosition(a,vi),s.getVertexPosition(c,yi);const l=fd(s,e,t,n,xi,vi,yi,Xs);if(l){i&&(es.fromBufferAttribute(i,o),ts.fromBufferAttribute(i,a),ns.fromBufferAttribute(i,c),l.uv=nn.getUV(Xs,xi,vi,yi,es,ts,ns,new Pe)),r&&(es.fromBufferAttribute(r,o),ts.fromBufferAttribute(r,a),ns.fromBufferAttribute(r,c),l.uv2=nn.getUV(Xs,xi,vi,yi,es,ts,ns,new Pe));const f={a:o,b:a,c,normal:new R,materialIndex:0};nn.getNormal(xi,vi,yi,f.normal),l.face=f}return l}class Oi extends an{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],f=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function v(u,d,x,y,_,b,E,A,D,g,C){const L=b/D,U=E/g,Z=b/2,z=E/2,F=A/2,H=D+1,Y=g+1;let Q=0,$=0;const ne=new R;for(let J=0;J<Y;J++){const k=J*U-z;for(let O=0;O<H;O++){const ie=O*L-Z;ne[u]=ie*y,ne[d]=k*_,ne[x]=F,l.push(ne.x,ne.y,ne.z),ne[u]=0,ne[d]=0,ne[x]=A>0?1:-1,f.push(ne.x,ne.y,ne.z),p.push(O/D),p.push(1-J/g),Q+=1}}for(let J=0;J<g;J++)for(let k=0;k<D;k++){const O=h+k+H*J,ie=h+k+H*(J+1),te=h+(k+1)+H*(J+1),ae=h+(k+1)+H*J;c.push(O,ie,ae),c.push(ie,te,ae),$+=6}a.addGroup(m,$,C),m+=$,h+=Q}}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(s){const e={};for(let t=0;t<s.length;t++){const n=oi(s[t]);for(const i in n)e[i]=n[i]}return e}function pd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fo(s){return s.getRenderTarget()===null&&s.outputEncoding===ke?Vt:Ai}const md={clone:oi,merge:pt};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class po extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xt extends po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Yn=1;class xd extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new xt(jn,Yn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new xt(jn,Yn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new xt(jn,Yn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new xt(jn,Yn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new xt(jn,Yn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new xt(jn,Yn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,f=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=rn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(f),e.toneMapping=p,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class mo extends vt{constructor(e,t,n,i,r,o,a,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,i,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vd extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Oi(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:mn});r.uniforms.tEquirect.value=t;const o=new lt(i,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Rt),new xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const $s=new R,yd=new R,bd=new Tt;class Sn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$s.subVectors(n,t).cross(yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bd.getNormalMatrix(e),i=this.coplanarPoint($s).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new fr,rs=new R;class mr{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],f=n[6],p=n[7],h=n[8],m=n[9],v=n[10],u=n[11],d=n[12],x=n[13],y=n[14],_=n[15];return t[0].setComponents(a-i,p-c,u-h,_-d).normalize(),t[1].setComponents(a+i,p+c,u+h,_+d).normalize(),t[2].setComponents(a+r,p+l,u+m,_+x).normalize(),t[3].setComponents(a-r,p-l,u-m,_-x).normalize(),t[4].setComponents(a-o,p-f,u-v,_-y).normalize(),t[5].setComponents(a+o,p+f,u+v,_+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function go(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Md(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,f){const p=l.array,h=l.usage,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,p,h),l.onUploadCallback();let v;if(p instanceof Float32Array)v=5126;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(p instanceof Int16Array)v=5122;else if(p instanceof Uint32Array)v=5125;else if(p instanceof Int32Array)v=5124;else if(p instanceof Int8Array)v=5120;else if(p instanceof Uint8Array)v=5121;else if(p instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function r(l,f,p){const h=f.array,m=f.updateRange;s.bindBuffer(p,l),m.count===-1?s.bufferSubData(p,0,h):(t?s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(s.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=n.get(l);p===void 0?n.set(l,i(l,f)):p.version<l.version&&(r(p.buffer,l,f),p.version=l.version)}return{get:o,remove:a,update:c}}class gr extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,f=c+1,p=e/a,h=t/c,m=[],v=[],u=[],d=[];for(let x=0;x<f;x++){const y=x*h-o;for(let _=0;_<l;_++){const b=_*p-r;v.push(b,-y,0),u.push(0,0,1),d.push(_/a),d.push(1-x/c)}}for(let x=0;x<c;x++)for(let y=0;y<a;y++){const _=y+l*x,b=y+l*(x+1),E=y+1+l*(x+1),A=y+1+l*x;m.push(_,b,A),m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2))}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld="vec3 transformed = vec3( position );",Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Rd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Uu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$u=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,th=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ih=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,fh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ph=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ch=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ah=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ph=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ih=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:Sd,alphamap_pars_fragment:wd,alphatest_fragment:Ed,alphatest_pars_fragment:Td,aomap_fragment:Cd,aomap_pars_fragment:Ad,begin_vertex:Ld,beginnormal_vertex:Pd,bsdfs:Dd,iridescence_fragment:Rd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Ud,color_fragment:Od,color_pars_fragment:kd,color_pars_vertex:Bd,color_vertex:Gd,common:Vd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:qd,displacementmap_vertex:Xd,emissivemap_fragment:$d,emissivemap_pars_fragment:jd,encodings_fragment:Yd,encodings_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Qd,envmap_pars_vertex:eu,envmap_physical_pars_fragment:hu,envmap_vertex:tu,fog_vertex:nu,fog_pars_vertex:iu,fog_fragment:su,fog_pars_fragment:ru,gradientmap_pars_fragment:au,lightmap_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:du,lights_pars_begin:uu,lights_toon_fragment:fu,lights_toon_pars_fragment:pu,lights_phong_fragment:mu,lights_phong_pars_fragment:gu,lights_physical_fragment:_u,lights_physical_pars_fragment:xu,lights_fragment_begin:vu,lights_fragment_maps:yu,lights_fragment_end:bu,logdepthbuf_fragment:Mu,logdepthbuf_pars_fragment:Su,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:Eu,map_fragment:Tu,map_pars_fragment:Cu,map_particle_fragment:Au,map_particle_pars_fragment:Lu,metalnessmap_fragment:Pu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Ru,morphnormal_vertex:Iu,morphtarget_pars_vertex:Fu,morphtarget_vertex:zu,normal_fragment_begin:Nu,normal_fragment_maps:Uu,normal_pars_fragment:Ou,normal_pars_vertex:ku,normal_vertex:Bu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Wu,iridescence_pars_fragment:qu,output_fragment:Xu,packing:$u,premultiplied_alpha_fragment:ju,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:Ju,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Qu,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:th,shadowmap_vertex:nh,shadowmask_pars_fragment:ih,skinbase_vertex:sh,skinning_pars_vertex:rh,skinning_vertex:ah,skinnormal_vertex:oh,specularmap_fragment:lh,specularmap_pars_fragment:ch,tonemapping_fragment:dh,tonemapping_pars_fragment:uh,transmission_fragment:hh,transmission_pars_fragment:fh,uv_pars_fragment:ph,uv_pars_vertex:mh,uv_vertex:gh,uv2_pars_fragment:_h,uv2_pars_vertex:xh,uv2_vertex:vh,worldpos_vertex:yh,background_vert:bh,background_frag:Mh,backgroundCube_vert:Sh,backgroundCube_frag:wh,cube_vert:Eh,cube_frag:Th,depth_vert:Ch,depth_frag:Ah,distanceRGBA_vert:Lh,distanceRGBA_frag:Ph,equirect_vert:Dh,equirect_frag:Rh,linedashed_vert:Ih,linedashed_frag:Fh,meshbasic_vert:zh,meshbasic_frag:Nh,meshlambert_vert:Uh,meshlambert_frag:Oh,meshmatcap_vert:kh,meshmatcap_frag:Bh,meshnormal_vert:Gh,meshnormal_frag:Vh,meshphong_vert:Hh,meshphong_frag:Wh,meshphysical_vert:qh,meshphysical_frag:Xh,meshtoon_vert:$h,meshtoon_frag:jh,points_vert:Yh,points_frag:Zh,shadow_vert:Jh,shadow_frag:Kh,sprite_vert:Qh,sprite_frag:ef},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Wt={basic:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:pt([re.points,re.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:pt([re.common,re.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:pt([re.sprite,re.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:pt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:pt([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Wt.physical={uniforms:pt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const as={r:0,b:0,g:0};function tf(s,e,t,n,i,r,o){const a=new Ue(0);let c=r===!0?0:1,l,f,p=null,h=0,m=null;function v(d,x){let y=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const b=s.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?u(a,c):_&&_.isColor&&(u(_,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===us)?(f===void 0&&(f=new lt(new Oi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:oi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,D,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=_.encoding!==ke,(p!==_||h!==_.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,p=_,h=_.version,m=s.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new gr(2,2),new zn({name:"BackgroundMaterial",uniforms:oi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_.encoding!==ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||h!==_.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,p=_,h=_.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function u(d,x){d.getRGB(as,fo(s)),n.buffers.color.setClear(as.r,as.g,as.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),c=x,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,u(a,c)},render:v}}function nf(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,f=!1;function p(F,H,Y,Q,$){let ne=!1;if(o){const J=u(Q,Y,H);l!==J&&(l=J,m(l.object)),ne=x(F,Q,Y,$),ne&&y(F,Q,Y,$)}else{const J=H.wireframe===!0;(l.geometry!==Q.id||l.program!==Y.id||l.wireframe!==J)&&(l.geometry=Q.id,l.program=Y.id,l.wireframe=J,ne=!0)}$!==null&&t.update($,34963),(ne||f)&&(f=!1,g(F,H,Y,Q),$!==null&&s.bindBuffer(34963,t.get($).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function u(F,H,Y){const Q=Y.wireframe===!0;let $=a[F.id];$===void 0&&($={},a[F.id]=$);let ne=$[H.id];ne===void 0&&(ne={},$[H.id]=ne);let J=ne[Q];return J===void 0&&(J=d(h()),ne[Q]=J),J}function d(F){const H=[],Y=[],Q=[];for(let $=0;$<i;$++)H[$]=0,Y[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:Q,object:F,attributes:{},index:null}}function x(F,H,Y,Q){const $=l.attributes,ne=H.attributes;let J=0;const k=Y.getAttributes();for(const O in k)if(k[O].location>=0){const te=$[O];let ae=ne[O];if(ae===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;J++}return l.attributesNum!==J||l.index!==Q}function y(F,H,Y,Q){const $={},ne=H.attributes;let J=0;const k=Y.getAttributes();for(const O in k)if(k[O].location>=0){let te=ne[O];te===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),$[O]=ae,J++}l.attributes=$,l.attributesNum=J,l.index=Q}function _(){const F=l.newAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]=0}function b(F){E(F,0)}function E(F,H){const Y=l.newAttributes,Q=l.enabledAttributes,$=l.attributeDivisors;Y[F]=1,Q[F]===0&&(s.enableVertexAttribArray(F),Q[F]=1),$[F]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),$[F]=H)}function A(){const F=l.newAttributes,H=l.enabledAttributes;for(let Y=0,Q=H.length;Y<Q;Y++)H[Y]!==F[Y]&&(s.disableVertexAttribArray(Y),H[Y]=0)}function D(F,H,Y,Q,$,ne){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(F,H,Y,$,ne):s.vertexAttribPointer(F,H,Y,Q,$,ne)}function g(F,H,Y,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const $=Q.attributes,ne=Y.getAttributes(),J=H.defaultAttributeValues;for(const k in ne){const O=ne[k];if(O.location>=0){let ie=$[k];if(ie===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),ie!==void 0){const te=ie.normalized,ae=ie.itemSize,X=t.get(ie);if(X===void 0)continue;const De=X.buffer,ue=X.type,ye=X.bytesPerElement;if(ie.isInterleavedBufferAttribute){const de=ie.data,Ne=de.stride,we=ie.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)E(O.location+ve,de.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<O.locationSize;ve++)b(O.location+ve);s.bindBuffer(34962,De);for(let ve=0;ve<O.locationSize;ve++)D(O.location+ve,ae/O.locationSize,ue,te,Ne*ye,(we+ae/O.locationSize*ve)*ye)}else{if(ie.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)E(O.location+de,ie.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let de=0;de<O.locationSize;de++)b(O.location+de);s.bindBuffer(34962,De);for(let de=0;de<O.locationSize;de++)D(O.location+de,ae/O.locationSize,ue,te,ae*ye,ae/O.locationSize*de*ye)}}else if(J!==void 0){const te=J[k];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(O.location,te);break;case 3:s.vertexAttrib3fv(O.location,te);break;case 4:s.vertexAttrib4fv(O.location,te);break;default:s.vertexAttrib1fv(O.location,te)}}}}A()}function C(){Z();for(const F in a){const H=a[F];for(const Y in H){const Q=H[Y];for(const $ in Q)v(Q[$].object),delete Q[$];delete H[Y]}delete a[F]}}function L(F){if(a[F.id]===void 0)return;const H=a[F.id];for(const Y in H){const Q=H[Y];for(const $ in Q)v(Q[$].object),delete Q[$];delete H[Y]}delete a[F.id]}function U(F){for(const H in a){const Y=a[H];if(Y[F.id]===void 0)continue;const Q=Y[F.id];for(const $ in Q)v(Q[$].object),delete Q[$];delete Y[F.id]}}function Z(){z(),f=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function sf(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,f){s.drawArrays(r,l,f),t.update(f,r,1)}function c(l,f,p){if(p===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,f,p),t.update(f,r,p)}this.setMode=o,this.render=a,this.renderInstances=c}function rf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),v=s.getParameter(34076),u=s.getParameter(34921),d=s.getParameter(36347),x=s.getParameter(36348),y=s.getParameter(36349),_=h>0,b=o||e.has("OES_texture_float"),E=_&&b,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:A}}function af(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Sn,a=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,m){const v=p.length!==0||h||n!==0||i;return i=h,t=f(p,m,0),n=p.length,v},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1,l()},this.setState=function(p,h,m){const v=p.clippingPlanes,u=p.clipIntersection,d=p.clipShadows,x=s.get(p);if(!i||v===null||v.length===0||r&&!d)r?f(null):l();else{const y=r?0:n,_=y*4;let b=x.clippingState||null;c.value=b,b=f(v,h,_,m);for(let E=0;E!==_;++E)b[E]=t[E];x.clippingState=b,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,h,m,v){const u=p!==null?p.length:0;let d=null;if(u!==0){if(d=c.value,v!==!0||d===null){const x=m+u*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<x)&&(d=new Float32Array(x));for(let _=0,b=m;_!==u;++_,b+=4)o.copy(p[_]).applyMatrix4(y,a),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=u,e.numIntersection=0,d}}function of(s){let e=new WeakMap;function t(o,a){return a===nr?o.mapping=si:a===ir&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nr||a===ir)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vd(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _o extends po{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=4,Ma=[.125,.215,.35,.446,.526,.582],En=20,js=new _o,Sa=new Ue;let Ys=null;const wn=(1+Math.sqrt(5))/2,Jn=1/wn,wa=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wn,Jn),new R(0,wn,-Jn),new R(Jn,0,wn),new R(-Jn,0,wn),new R(wn,Jn,0),new R(-wn,Jn,0)];class Ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ys=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Aa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Ci,format:Bt,encoding:In,depthBuffer:!1},i=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(r)),this._blurMaterial=cf(r,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,i){const a=new xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Sa),f.toneMapping=rn,f.autoClear=!1;const m=new pr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new lt(new Oi,m);let u=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,u=!0):(m.color.copy(Sa),u=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):y===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;os(i,y*_,x>2?_:0,_,_),f.setRenderTarget(i),u&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Aa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=wa[(i-1)%wa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new lt(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*En-1),u=r/v,d=isFinite(r)?1+Math.floor(f*u):En;d>En&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const x=[];let y=0;for(let D=0;D<En;++D){const g=D/u,C=Math.exp(-g*g/2);x.push(C),D===0?y+=C:D<d&&(y+=2*C)}for(let D=0;D<x.length;D++)x[D]=x[D]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-n;const b=this._sizeLods[i],E=3*b*(i>_-ti?i-_+ti:0),A=4*(this._cubeSize-b);os(t,E,A,3*b,2*b),c.setRenderTarget(t),c.render(p,js)}}function lf(s){const e=[],t=[],n=[];let i=s;const r=s-ti+1+Ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ti?c=Ma[o-s+ti-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,u=3,d=2,x=1,y=new Float32Array(u*v*m),_=new Float32Array(d*v*m),b=new Float32Array(x*v*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,g=A>2?0:-1,C=[D,g,0,D+2/3,g,0,D+2/3,g+1,0,D,g,0,D+2/3,g+1,0,D,g+1,0];y.set(C,u*v*A),_.set(h,d*v*A);const L=[A,A,A,A,A,A];b.set(L,x*v*A)}const E=new an;E.setAttribute("position",new qt(y,u)),E.setAttribute("uv",new qt(_,d)),E.setAttribute("faceIndex",new qt(b,x)),e.push(E),i>ti&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ta(s,e,t){const n=new Fn(s,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cf(s,e,t){const n=new Float32Array(En),i=new R(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ca(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Aa(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function _r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===nr||c===ir,f=c===si||c===ri;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ea(s)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(l&&p&&p.height>0||f&&p&&i(p)){t===null&&(t=new Ea(s));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hf(s,e,t,n){const i={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const v in h)e.update(h[v],34962);const m=p.morphAttributes;for(const v in m){const u=m[v];for(let d=0,x=u.length;d<x;d++)e.update(u[d],34962)}}function l(p){const h=[],m=p.index,v=p.attributes.position;let u=0;if(m!==null){const y=m.array;u=m.version;for(let _=0,b=y.length;_<b;_+=3){const E=y[_+0],A=y[_+1],D=y[_+2];h.push(E,A,A,D,D,E)}}else{const y=v.array;u=v.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const E=_+0,A=_+1,D=_+2;h.push(E,A,A,D,D,E)}}const d=new(so(h)?ho:uo)(h,1);d.version=u;const x=r.get(p);x&&e.remove(x),r.set(p,d)}function f(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:f}}function ff(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function f(h,m){s.drawElements(r,m,a,h*c),t.update(m,r,1)}function p(h,m,v){if(v===0)return;let u,d;if(i)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,m,a,h*c,v),t.update(m,r,v)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=p}function pf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mf(s,e){return s[0]-e[0]}function gf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function _f(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ve,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,p,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,u=v!==void 0?v.length:0;let d=r.get(f);if(d===void 0||d.count!==u){let H=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();const _=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],g=f.morphAttributes.color||[];let C=0;_===!0&&(C=1),b===!0&&(C=2),E===!0&&(C=3);let L=f.attributes.position.count*C,U=1;L>e.maxTextureSize&&(U=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const Z=new Float32Array(L*U*4*u),z=new lo(Z,L,U,u);z.type=An,z.needsUpdate=!0;const F=C*4;for(let Y=0;Y<u;Y++){const Q=A[Y],$=D[Y],ne=g[Y],J=L*U*4*Y;for(let k=0;k<Q.count;k++){const O=k*F;_===!0&&(o.fromBufferAttribute(Q,k),Z[J+O+0]=o.x,Z[J+O+1]=o.y,Z[J+O+2]=o.z,Z[J+O+3]=0),b===!0&&(o.fromBufferAttribute($,k),Z[J+O+4]=o.x,Z[J+O+5]=o.y,Z[J+O+6]=o.z,Z[J+O+7]=0),E===!0&&(o.fromBufferAttribute(ne,k),Z[J+O+8]=o.x,Z[J+O+9]=o.y,Z[J+O+10]=o.z,Z[J+O+11]=ne.itemSize===4?o.w:1)}}d={count:u,texture:z,size:new Pe(L,U)},r.set(f,d),f.addEventListener("dispose",H)}let x=0;for(let _=0;_<m.length;_++)x+=m[_];const y=f.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",m),h.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const v=m===void 0?0:m.length;let u=n[f.id];if(u===void 0||u.length!==v){u=[];for(let b=0;b<v;b++)u[b]=[b,0];n[f.id]=u}for(let b=0;b<v;b++){const E=u[b];E[0]=b,E[1]=m[b]}u.sort(gf);for(let b=0;b<8;b++)b<v&&u[b][1]?(a[b][0]=u[b][0],a[b][1]=u[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(mf);const d=f.morphAttributes.position,x=f.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const E=a[b],A=E[0],D=E[1];A!==Number.MAX_SAFE_INTEGER&&D?(d&&f.getAttribute("morphTarget"+b)!==d[A]&&f.setAttribute("morphTarget"+b,d[A]),x&&f.getAttribute("morphNormal"+b)!==x[A]&&f.setAttribute("morphNormal"+b,x[A]),i[b]=D,y+=D):(d&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),x&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),i[b]=0)}const _=f.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function xf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,p=e.get(c,f);return i.get(p)!==l&&(e.update(p),i.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),p}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const xo=new vt,vo=new lo,yo=new nd,bo=new mo,La=[],Pa=[],Da=new Float32Array(16),Ra=new Float32Array(9),Ia=new Float32Array(4);function ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=La[i];if(r===void 0&&(r=new Float32Array(i),La[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Je(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ke(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hs(s,e){let t=Pa[e];t===void 0&&(t=new Int32Array(e),Pa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2fv(this.addr,e),Ke(t,e)}}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;s.uniform3fv(this.addr,e),Ke(t,e)}}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4fv(this.addr,e),Ke(t,e)}}function Sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Ia.set(n),s.uniformMatrix2fv(this.addr,!1,Ia),Ke(t,n)}}function wf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Ra.set(n),s.uniformMatrix3fv(this.addr,!1,Ra),Ke(t,n)}}function Ef(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Da.set(n),s.uniformMatrix4fv(this.addr,!1,Da),Ke(t,n)}}function Tf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2iv(this.addr,e),Ke(t,e)}}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;s.uniform3iv(this.addr,e),Ke(t,e)}}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4iv(this.addr,e),Ke(t,e)}}function Pf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2uiv(this.addr,e),Ke(t,e)}}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;s.uniform3uiv(this.addr,e),Ke(t,e)}}function If(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4uiv(this.addr,e),Ke(t,e)}}function Ff(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||xo,i)}function zf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yo,i)}function Nf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bo,i)}function Uf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vo,i)}function Of(s){switch(s){case 5126:return vf;case 35664:return yf;case 35665:return bf;case 35666:return Mf;case 35674:return Sf;case 35675:return wf;case 35676:return Ef;case 5124:case 35670:return Tf;case 35667:case 35671:return Cf;case 35668:case 35672:return Af;case 35669:case 35673:return Lf;case 5125:return Pf;case 36294:return Df;case 36295:return Rf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Uf}}function kf(s,e){s.uniform1fv(this.addr,e)}function Bf(s,e){const t=ci(e,this.size,2);s.uniform2fv(this.addr,t)}function Gf(s,e){const t=ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Vf(s,e){const t=ci(e,this.size,4);s.uniform4fv(this.addr,t)}function Hf(s,e){const t=ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wf(s,e){const t=ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qf(s,e){const t=ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xf(s,e){s.uniform1iv(this.addr,e)}function $f(s,e){s.uniform2iv(this.addr,e)}function jf(s,e){s.uniform3iv(this.addr,e)}function Yf(s,e){s.uniform4iv(this.addr,e)}function Zf(s,e){s.uniform1uiv(this.addr,e)}function Jf(s,e){s.uniform2uiv(this.addr,e)}function Kf(s,e){s.uniform3uiv(this.addr,e)}function Qf(s,e){s.uniform4uiv(this.addr,e)}function ep(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xo,r[o])}function tp(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yo,r[o])}function np(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bo,r[o])}function ip(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vo,r[o])}function sp(s){switch(s){case 5126:return kf;case 35664:return Bf;case 35665:return Gf;case 35666:return Vf;case 35674:return Hf;case 35675:return Wf;case 35676:return qf;case 5124:case 35670:return Xf;case 35667:case 35671:return $f;case 35668:case 35672:return jf;case 35669:case 35673:return Yf;case 5125:return Zf;case 36294:return Jf;case 36295:return Kf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Of(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=sp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function Fa(s,e){s.seq.push(e),s.map[e.id]=e}function lp(s,e,t){const n=s.name,i=n.length;for(Zs.lastIndex=0;;){const r=Zs.exec(n),o=Zs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Fa(t,l===void 0?new rp(a,s,e):new ap(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new op(a),Fa(t,p)),t=p}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);lp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function za(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let cp=0;function dp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function up(s){switch(s){case In:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Na(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+dp(s.getShaderSource(e),o)}else return i}function hp(s,e){const t=up(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fp(s,e){let t;switch(e){case Lc:t="Linear";break;case Pc:t="Reinhard";break;case Dc:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function mp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gp(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wi(s){return s!==""}function Ua(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(s){return s.replace(_p,xp)}function xp(s,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return lr(t)}const vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(s){return s.replace(vp,yp)}function yp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ba(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Mp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case si:case ri:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function wp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hr:e="ENVMAP_BLENDING_MULTIPLY";break;case Cc:e="ENVMAP_BLENDING_MIX";break;case Ac:e="ENVMAP_BLENDING_ADD";break}return e}function Ep(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=bp(t),l=Mp(t),f=Sp(t),p=wp(t),h=Ep(t),m=t.isWebGL2?"":pp(t),v=mp(r),u=i.createProgram();let d,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(wi).join(`
`),d.length>0&&(d+=`
`),x=[m,v].filter(wi).join(`
`),x.length>0&&(x+=`
`)):(d=[Ba(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),x=[m,Ba(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?Se.tonemapping_pars_fragment:"",t.toneMapping!==rn?fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,hp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=lr(o),o=Ua(o,t),o=Oa(o,t),a=lr(a),a=Ua(a,t),a=Oa(a,t),o=ka(o),a=ka(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=y+d+o,b=y+x+a,E=za(i,35633,_),A=za(i,35632,b);if(i.attachShader(u,E),i.attachShader(u,A),t.index0AttributeName!==void 0?i.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(u,0,"position"),i.linkProgram(u),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(u).trim(),L=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(A).trim();let Z=!0,z=!0;if(i.getProgramParameter(u,35714)===!1){Z=!1;const F=Na(i,E,"vertex"),H=Na(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(u,35715)+`

Program Info Log: `+C+`
`+F+`
`+H)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||U==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:C,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:x}})}i.deleteShader(E),i.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new ds(i,u)),D};let g;return this.getAttributes=function(){return g===void 0&&(g=gp(i,u)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(u),this.program=void 0},this.name=t.shaderName,this.id=cp++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=E,this.fragmentShader=A,this}let Cp=0;class Ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lp(e),t.set(e,n)),n}}class Lp{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}}function Pp(s,e,t,n,i,r,o){const a=new co,c=new Ap,l=[],f=i.isWebGL2,p=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g,C,L,U,Z){const z=U.fog,F=Z.geometry,H=g.isMeshStandardMaterial?U.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||H),Q=!!Y&&Y.mapping===us?Y.image.height:null,$=v[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=ne!==void 0?ne.length:0;let k=0;F.morphAttributes.position!==void 0&&(k=1),F.morphAttributes.normal!==void 0&&(k=2),F.morphAttributes.color!==void 0&&(k=3);let O,ie,te,ae;if($){const Ne=Wt[$];O=Ne.vertexShader,ie=Ne.fragmentShader}else O=g.vertexShader,ie=g.fragmentShader,c.update(g),te=c.getVertexShaderID(g),ae=c.getFragmentShaderID(g);const X=s.getRenderTarget(),De=g.alphaTest>0,ue=g.clearcoat>0,ye=g.iridescence>0;return{isWebGL2:f,shaderID:$,shaderName:g.type,vertexShader:O,fragmentShader:ie,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:In,map:!!g.map,matcap:!!g.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Q,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Kc,tangentSpaceNormalMap:g.normalMapType===io,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===ke,clearcoat:ue,clearcoatMap:ue&&!!g.clearcoatMap,clearcoatRoughnessMap:ue&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!g.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!g.iridescenceMap,iridescenceThicknessMap:ye&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===ni,alphaMap:!!g.alphaMap,alphaTest:De,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!F.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!z,useFog:g.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:p,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:k,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:rn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===tn,flipSided:g.side===It,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const C=[];if(g.shaderID?C.push(g.shaderID):(C.push(g.customVertexShaderID),C.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)C.push(L),C.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(x(C,g),y(C,g),C.push(s.outputEncoding)),C.push(g.customProgramCacheKey),C.join()}function x(g,C){g.push(C.precision),g.push(C.outputEncoding),g.push(C.envMapMode),g.push(C.envMapCubeUVHeight),g.push(C.combine),g.push(C.vertexUvs),g.push(C.fogExp2),g.push(C.sizeAttenuation),g.push(C.morphTargetsCount),g.push(C.morphAttributeCount),g.push(C.numDirLights),g.push(C.numPointLights),g.push(C.numSpotLights),g.push(C.numSpotLightMaps),g.push(C.numHemiLights),g.push(C.numRectAreaLights),g.push(C.numDirLightShadows),g.push(C.numPointLightShadows),g.push(C.numSpotLightShadows),g.push(C.numSpotLightShadowsWithMaps),g.push(C.shadowMapType),g.push(C.toneMapping),g.push(C.numClippingPlanes),g.push(C.numClipIntersection),g.push(C.depthPacking)}function y(g,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),g.push(a.mask)}function _(g){const C=v[g.type];let L;if(C){const U=Wt[C];L=md.clone(U.uniforms)}else L=g.uniforms;return L}function b(g,C){let L;for(let U=0,Z=l.length;U<Z;U++){const z=l[U];if(z.cacheKey===C){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Tp(s,C,g,r),l.push(L)),L}function E(g){if(--g.usedTimes===0){const C=l.indexOf(g);l[C]=l[l.length-1],l.pop(),g.destroy()}}function A(g){c.remove(g)}function D(){c.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:D}}function Dp(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Rp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ga(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Va(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(p,h,m,v,u,d){let x=s[e];return x===void 0?(x={id:p.id,object:p,geometry:h,material:m,groupOrder:v,renderOrder:p.renderOrder,z:u,group:d},s[e]=x):(x.id=p.id,x.object=p,x.geometry=h,x.material=m,x.groupOrder=v,x.renderOrder=p.renderOrder,x.z=u,x.group=d),e++,x}function a(p,h,m,v,u,d){const x=o(p,h,m,v,u,d);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(p,h,m,v,u,d){const x=o(p,h,m,v,u,d);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(p,h){t.length>1&&t.sort(p||Rp),n.length>1&&n.sort(h||Ga),i.length>1&&i.sort(h||Ga)}function f(){for(let p=e,h=s.length;p<h;p++){const m=s[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:f,sort:l}}function Ip(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Va,s.set(n,[o])):i>=r.length?(o=new Va,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function zp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Np=0;function Up(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Op(s,e){const t=new Fp,n=zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new R);const r=new R,o=new Xe,a=new Xe;function c(f,p){let h=0,m=0,v=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,d=0,x=0,y=0,_=0,b=0,E=0,A=0,D=0,g=0;f.sort(Up);const C=p!==!0?Math.PI:1;for(let U=0,Z=f.length;U<Z;U++){const z=f[U],F=z.color,H=z.intensity,Y=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=F.r*H*C,m+=F.g*H*C,v+=F.b*H*C;else if(z.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(z.sh.coefficients[$],H);else if(z.isDirectionalLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const ne=z.shadow,J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.directionalShadow[u]=J,i.directionalShadowMap[u]=Q,i.directionalShadowMatrix[u]=z.shadow.matrix,b++}i.directional[u]=$,u++}else if(z.isSpotLight){const $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(F).multiplyScalar(H*C),$.distance=Y,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,i.spot[x]=$;const ne=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,ne.updateMatrices(z),z.castShadow&&g++),i.spotLightMatrix[x]=ne.matrix,z.castShadow){const J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=Q,A++}x++}else if(z.isRectAreaLight){const $=t.get(z);$.color.copy(F).multiplyScalar(H),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=$,y++}else if(z.isPointLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*C),$.distance=z.distance,$.decay=z.decay,z.castShadow){const ne=z.shadow,J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=z.shadow.matrix,E++}i.point[d]=$,d++}else if(z.isHemisphereLight){const $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(H*C),$.groundColor.copy(z.groundColor).multiplyScalar(H*C),i.hemi[_]=$,_++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=v;const L=i.hash;(L.directionalLength!==u||L.pointLength!==d||L.spotLength!==x||L.rectAreaLength!==y||L.hemiLength!==_||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==D)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=y,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+D-g,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=g,L.directionalLength=u,L.pointLength=d,L.spotLength=x,L.rectAreaLength=y,L.hemiLength=_,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=D,i.version=Np++)}function l(f,p){let h=0,m=0,v=0,u=0,d=0;const x=p.matrixWorldInverse;for(let y=0,_=f.length;y<_;y++){const b=f[y];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),h++}else if(b.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),v++}else if(b.isRectAreaLight){const E=i.rectArea[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),u++}else if(b.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),d++}}}return{setup:c,setupView:l,state:i}}function Ha(s,e){const t=new Op(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function c(p){t.setup(n,p)}function l(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function kp(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Ha(s,e),t.set(r,[c])):o>=a.length?(c=new Ha(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bp extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(s,e,t){let n=new mr;const i=new Pe,r=new Pe,o=new Ve,a=new Bp({depthPacking:Jc}),c=new Gp,l={},f=t.maxTextureSize,p={0:It,1:Dn,2:tn},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Vp,fragmentShader:Hp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const u=new lt(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka,this.render=function(b,E,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const D=s.getRenderTarget(),g=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(mn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,Z=b.length;U<Z;U++){const z=b[U],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const H=F.getFrameExtents();if(i.multiply(H),r.copy(F.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/H.x),i.x=r.x*H.x,F.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/H.y),i.y=r.y*H.y,F.mapSize.y=r.y)),F.map===null){const Q=this.type!==Si?{minFilter:mt,magFilter:mt}:{};F.map=new Fn(i.x,i.y,Q),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const Y=F.getViewportCount();for(let Q=0;Q<Y;Q++){const $=F.getViewport(Q);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),L.viewport(o),F.updateMatrices(z,Q),n=F.getFrustum(),_(E,A,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Si&&x(F,A),F.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(D,g,C)};function x(b,E){const A=e.update(u);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fn(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,A,h,u,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,A,m,u,null)}function y(b,E,A,D,g,C){let L=null;const U=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)L=U;else if(L=A.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=L.uuid,z=E.uuid;let F=l[Z];F===void 0&&(F={},l[Z]=F);let H=F[z];H===void 0&&(H=L.clone(),F[z]=H),L=H}return L.visible=E.visible,L.wireframe=E.wireframe,C===Si?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:p[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=D,L.farDistance=g),L}function _(b,E,A,D,g){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&g===Si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const U=e.update(b),Z=b.material;if(Array.isArray(Z)){const z=U.groups;for(let F=0,H=z.length;F<H;F++){const Y=z[F],Q=Z[Y.materialIndex];if(Q&&Q.visible){const $=y(b,Q,D,A.near,A.far,g);s.renderBufferDirect(A,null,U,$,b,Y)}}}else if(Z.visible){const z=y(b,Z,D,A.near,A.far,g);s.renderBufferDirect(A,null,U,z,b,null)}}const L=b.children;for(let U=0,Z=L.length;U<Z;U++)_(L[U],E,A,D,g)}}function qp(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const B=new Ve;let K=null;const ce=new Ve(0,0,0,0);return{setMask:function(fe){K!==fe&&!P&&(s.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ze,et,at,gn){gn===!0&&(fe*=at,ze*=at,et*=at),B.set(fe,ze,et,at),ce.equals(B)===!1&&(s.clearColor(fe,ze,et,at),ce.copy(B))},reset:function(){P=!1,K=null,ce.set(-1,0,0,0)}}}function r(){let P=!1,B=null,K=null,ce=null;return{setTest:function(fe){fe?De(2929):ue(2929)},setMask:function(fe){B!==fe&&!P&&(s.depthMask(fe),B=fe)},setFunc:function(fe){if(K!==fe){switch(fe){case yc:s.depthFunc(512);break;case bc:s.depthFunc(519);break;case Mc:s.depthFunc(513);break;case tr:s.depthFunc(515);break;case Sc:s.depthFunc(514);break;case wc:s.depthFunc(518);break;case Ec:s.depthFunc(516);break;case Tc:s.depthFunc(517);break;default:s.depthFunc(515)}K=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ce!==fe&&(s.clearDepth(fe),ce=fe)},reset:function(){P=!1,B=null,K=null,ce=null}}}function o(){let P=!1,B=null,K=null,ce=null,fe=null,ze=null,et=null,at=null,gn=null;return{setTest:function(Ge){P||(Ge?De(2960):ue(2960))},setMask:function(Ge){B!==Ge&&!P&&(s.stencilMask(Ge),B=Ge)},setFunc:function(Ge,$t,Lt){(K!==Ge||ce!==$t||fe!==Lt)&&(s.stencilFunc(Ge,$t,Lt),K=Ge,ce=$t,fe=Lt)},setOp:function(Ge,$t,Lt){(ze!==Ge||et!==$t||at!==Lt)&&(s.stencilOp(Ge,$t,Lt),ze=Ge,et=$t,at=Lt)},setLocked:function(Ge){P=Ge},setClear:function(Ge){gn!==Ge&&(s.clearStencil(Ge),gn=Ge)},reset:function(){P=!1,B=null,K=null,ce=null,fe=null,ze=null,et=null,at=null,gn=null}}}const a=new i,c=new r,l=new o,f=new WeakMap,p=new WeakMap;let h={},m={},v=new WeakMap,u=[],d=null,x=!1,y=null,_=null,b=null,E=null,A=null,D=null,g=null,C=!1,L=null,U=null,Z=null,z=null,F=null;const H=s.getParameter(35661);let Y=!1,Q=0;const $=s.getParameter(7938);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=Q>=2);let ne=null,J={};const k=s.getParameter(3088),O=s.getParameter(2978),ie=new Ve().fromArray(k),te=new Ve().fromArray(O);function ae(P,B,K){const ce=new Uint8Array(4),fe=s.createTexture();s.bindTexture(P,fe),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let ze=0;ze<K;ze++)s.texImage2D(B+ze,0,6408,1,1,0,6408,5121,ce);return fe}const X={};X[3553]=ae(3553,3553,1),X[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(2929),c.setFunc(tr),ut(!1),At(Fr),De(2884),ct(mn);function De(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function ue(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function ye(P,B){return m[P]!==B?(s.bindFramebuffer(P,B),m[P]=B,n&&(P===36009&&(m[36160]=B),P===36160&&(m[36009]=B)),!0):!1}function de(P,B){let K=u,ce=!1;if(P)if(K=v.get(B),K===void 0&&(K=[],v.set(B,K)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(K.length!==fe.length||K[0]!==36064){for(let ze=0,et=fe.length;ze<et;ze++)K[ze]=36064+ze;K.length=fe.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ne(P){return d!==P?(s.useProgram(P),d=P,!0):!1}const we={[ei]:32774,[cc]:32778,[dc]:32779};if(n)we[Or]=32775,we[kr]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(we[Or]=P.MIN_EXT,we[kr]=P.MAX_EXT)}const ve={[uc]:0,[hc]:1,[fc]:768,[Qa]:770,[vc]:776,[_c]:774,[mc]:772,[pc]:769,[eo]:771,[xc]:775,[gc]:773};function ct(P,B,K,ce,fe,ze,et,at){if(P===mn){x===!0&&(ue(3042),x=!1);return}if(x===!1&&(De(3042),x=!0),P!==lc){if(P!==y||at!==C){if((_!==ei||A!==ei)&&(s.blendEquation(32774),_=ei,A=ei),at)switch(P){case ni:s.blendFuncSeparate(1,771,1,771);break;case zr:s.blendFunc(1,1);break;case Nr:s.blendFuncSeparate(0,769,0,1);break;case Ur:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ni:s.blendFuncSeparate(770,771,1,771);break;case zr:s.blendFunc(770,1);break;case Nr:s.blendFuncSeparate(0,769,0,1);break;case Ur:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,E=null,D=null,g=null,y=P,C=at}return}fe=fe||B,ze=ze||K,et=et||ce,(B!==_||fe!==A)&&(s.blendEquationSeparate(we[B],we[fe]),_=B,A=fe),(K!==b||ce!==E||ze!==D||et!==g)&&(s.blendFuncSeparate(ve[K],ve[ce],ve[ze],ve[et]),b=K,E=ce,D=ze,g=et),y=P,C=!1}function dt(P,B){P.side===tn?ue(2884):De(2884);let K=P.side===It;B&&(K=!K),ut(K),P.blending===ni&&P.transparent===!1?ct(mn):ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const ce=P.stencilWrite;l.setTest(ce),ce&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(32926):ue(32926)}function ut(P){L!==P&&(P?s.frontFace(2304):s.frontFace(2305),L=P)}function At(P){P!==rc?(De(2884),P!==U&&(P===Fr?s.cullFace(1029):P===ac?s.cullFace(1028):s.cullFace(1032))):ue(2884),U=P}function $e(P){P!==Z&&(Y&&s.lineWidth(P),Z=P)}function Oe(P,B,K){P?(De(32823),(z!==B||F!==K)&&(s.polygonOffset(B,K),z=B,F=K)):ue(32823)}function Xt(P){P?De(3089):ue(3089)}function zt(P){P===void 0&&(P=33984+H-1),ne!==P&&(s.activeTexture(P),ne=P)}function T(P,B,K){K===void 0&&(ne===null?K=33984+H-1:K=ne);let ce=J[K];ce===void 0&&(ce={type:void 0,texture:void 0},J[K]=ce),(ce.type!==P||ce.texture!==B)&&(ne!==K&&(s.activeTexture(K),ne=K),s.bindTexture(P,B||X[P]),ce.type=P,ce.texture=B)}function M(){const P=J[ne];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){ie.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function pe(P){te.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Re(P,B){let K=p.get(B);K===void 0&&(K=new WeakMap,p.set(B,K));let ce=K.get(P);ce===void 0&&(ce=s.getUniformBlockIndex(B,P.name),K.set(P,ce))}function Be(P,B){const ce=p.get(B).get(P);f.get(B)!==ce&&(s.uniformBlockBinding(B,ce,P.__bindingPointIndex),f.set(B,ce))}function Qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,J={},m={},v=new WeakMap,u=[],d=null,x=!1,y=null,_=null,b=null,E=null,A=null,D=null,g=null,C=!1,L=null,U=null,Z=null,z=null,F=null,ie.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:ue,bindFramebuffer:ye,drawBuffers:de,useProgram:Ne,setBlending:ct,setMaterial:dt,setFlipSided:ut,setCullFace:At,setLineWidth:$e,setPolygonOffset:Oe,setScissorTest:Xt,activeTexture:zt,bindTexture:T,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:xe,texImage3D:he,updateUBOMapping:Re,uniformBlockBinding:Be,texStorage2D:j,texStorage3D:ge,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:be,compressedTexSubImage3D:le,scissor:_e,viewport:pe,reset:Qe}}function Xp(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,p=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let u;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,M){return x?new OffscreenCanvas(T,M):Li("canvas")}function _(T,M,V,ee){let se=1;if((T.width>ee||T.height>ee)&&(se=ee/Math.max(T.width,T.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const oe=M?or:Math.floor,be=oe(se*T.width),le=oe(se*T.height);u===void 0&&(u=y(be,le));const j=V?y(be,le):u;return j.width=be,j.height=le,j.getContext("2d").drawImage(T,0,0,be,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+le+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return ua(T.width)&&ua(T.height)}function E(T){return a?!1:T.wrapS!==kt||T.wrapT!==kt||T.minFilter!==mt&&T.minFilter!==Rt}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==mt&&T.minFilter!==Rt}function D(T){s.generateMipmap(T)}function g(T,M,V,ee,se=!1){if(a===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe=M;return M===6403&&(V===5126&&(oe=33326),V===5131&&(oe=33325),V===5121&&(oe=33321)),M===33319&&(V===5126&&(oe=33328),V===5131&&(oe=33327),V===5121&&(oe=33323)),M===6408&&(V===5126&&(oe=34836),V===5131&&(oe=34842),V===5121&&(oe=ee===ke&&se===!1?35907:32856),V===32819&&(oe=32854),V===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(T,M,V){return A(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==mt&&T.minFilter!==Rt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function L(T){return T===mt||T===Br||T===ys?9728:9729}function U(T){const M=T.target;M.removeEventListener("dispose",U),z(M),M.isVideoTexture&&v.delete(M)}function Z(T){const M=T.target;M.removeEventListener("dispose",Z),H(M)}function z(T){const M=n.get(T);if(M.__webglInit===void 0)return;const V=T.source,ee=d.get(V);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(T),Object.keys(ee).length===0&&d.delete(V)}n.remove(T)}function F(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const V=T.source,ee=d.get(V);delete ee[M.__cacheKey],o.memory.textures--}function H(T){const M=T.texture,V=n.get(T),ee=n.get(M);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(V.__webglFramebuffer[se]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,oe=M.length;se<oe;se++){const be=n.get(M[se]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(T)}let Y=0;function Q(){Y=0}function $(){const T=Y;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Y+=1,T}function ne(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function J(T,M){const V=n.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,T,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function k(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function O(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function ie(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ye(V,T,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const te={[sr]:10497,[kt]:33071,[rr]:33648},ae={[mt]:9728,[Br]:9984,[ys]:9986,[Rt]:9729,[Fc]:9985,[Ti]:9987};function X(T,M,V){if(V?(s.texParameteri(T,10242,te[M.wrapS]),s.texParameteri(T,10243,te[M.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,te[M.wrapR]),s.texParameteri(T,10240,ae[M.magFilter]),s.texParameteri(T,10241,ae[M.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(M.wrapS!==kt||M.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,L(M.magFilter)),s.texParameteri(T,10241,L(M.minFilter)),M.minFilter!==mt&&M.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===mt||M.minFilter!==ys&&M.minFilter!==Ti||M.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function De(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U));const ee=M.source;let se=d.get(ee);se===void 0&&(se={},d.set(ee,se));const oe=ne(M);if(oe!==T.__cacheKey){se[oe]===void 0&&(se[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[oe].usedTimes++;const be=se[T.__cacheKey];be!==void 0&&(se[T.__cacheKey].usedTimes--,be.usedTimes===0&&F(M)),T.__cacheKey=oe,T.__webglTexture=se[oe].texture}return V}function ue(T,M,V){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);const se=De(T,M),oe=M.source;t.bindTexture(ee,T.__webglTexture,33984+V);const be=n.get(oe);if(oe.version!==be.__version||se===!0){t.activeTexture(33984+V),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const le=E(M)&&b(M.image)===!1;let j=_(M.image,le,!1,f);j=zt(M,j);const ge=b(j)||a,xe=r.convert(M.format,M.encoding);let he=r.convert(M.type),_e=g(M.internalFormat,xe,he,M.encoding,M.isVideoTexture);X(ee,M,ge);let pe;const Re=M.mipmaps,Be=a&&M.isVideoTexture!==!0,Qe=be.__version===void 0||se===!0,P=C(M,j,ge);if(M.isDepthTexture)_e=6402,a?M.type===An?_e=36012:M.type===Cn?_e=33190:M.type===ii?_e=35056:_e=33189:M.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ln&&_e===6402&&M.type!==no&&M.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cn,he=r.convert(M.type)),M.format===ai&&_e===6402&&(_e=34041,M.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ii,he=r.convert(M.type))),Qe&&(Be?t.texStorage2D(3553,1,_e,j.width,j.height):t.texImage2D(3553,0,_e,j.width,j.height,0,xe,he,null));else if(M.isDataTexture)if(Re.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let B=0,K=Re.length;B<K;B++)pe=Re[B],Be?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,xe,he,pe.data):t.texImage2D(3553,B,_e,pe.width,pe.height,0,xe,he,pe.data);M.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,P,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,xe,he,j.data)):t.texImage2D(3553,0,_e,j.width,j.height,0,xe,he,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(35866,P,_e,Re[0].width,Re[0].height,j.depth);for(let B=0,K=Re.length;B<K;B++)pe=Re[B],M.format!==Bt?xe!==null?Be?t.compressedTexSubImage3D(35866,B,0,0,0,pe.width,pe.height,j.depth,xe,pe.data,0,0):t.compressedTexImage3D(35866,B,_e,pe.width,pe.height,j.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,B,0,0,0,pe.width,pe.height,j.depth,xe,he,pe.data):t.texImage3D(35866,B,_e,pe.width,pe.height,j.depth,0,xe,he,pe.data)}else{Be&&Qe&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let B=0,K=Re.length;B<K;B++)pe=Re[B],M.format!==Bt?xe!==null?Be?t.compressedTexSubImage2D(3553,B,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(3553,B,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,xe,he,pe.data):t.texImage2D(3553,B,_e,pe.width,pe.height,0,xe,he,pe.data)}else if(M.isDataArrayTexture)Be?(Qe&&t.texStorage3D(35866,P,_e,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,xe,he,j.data)):t.texImage3D(35866,0,_e,j.width,j.height,j.depth,0,xe,he,j.data);else if(M.isData3DTexture)Be?(Qe&&t.texStorage3D(32879,P,_e,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,xe,he,j.data)):t.texImage3D(32879,0,_e,j.width,j.height,j.depth,0,xe,he,j.data);else if(M.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(3553,P,_e,j.width,j.height);else{let B=j.width,K=j.height;for(let ce=0;ce<P;ce++)t.texImage2D(3553,ce,_e,B,K,0,xe,he,null),B>>=1,K>>=1}}else if(Re.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,P,_e,Re[0].width,Re[0].height);for(let B=0,K=Re.length;B<K;B++)pe=Re[B],Be?t.texSubImage2D(3553,B,0,0,xe,he,pe):t.texImage2D(3553,B,_e,xe,he,pe);M.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,P,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,xe,he,j)):t.texImage2D(3553,0,_e,xe,he,j);A(M,ge)&&D(ee),be.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ye(T,M,V){if(M.image.length!==6)return;const ee=De(T,M),se=M.source;t.bindTexture(34067,T.__webglTexture,33984+V);const oe=n.get(se);if(se.version!==oe.__version||ee===!0){t.activeTexture(33984+V),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,j=[];for(let B=0;B<6;B++)!be&&!le?j[B]=_(M.image[B],!1,!0,l):j[B]=le?M.image[B].image:M.image[B],j[B]=zt(M,j[B]);const ge=j[0],xe=b(ge)||a,he=r.convert(M.format,M.encoding),_e=r.convert(M.type),pe=g(M.internalFormat,he,_e,M.encoding),Re=a&&M.isVideoTexture!==!0,Be=oe.__version===void 0||ee===!0;let Qe=C(M,ge,xe);X(34067,M,xe);let P;if(be){Re&&Be&&t.texStorage2D(34067,Qe,pe,ge.width,ge.height);for(let B=0;B<6;B++){P=j[B].mipmaps;for(let K=0;K<P.length;K++){const ce=P[K];M.format!==Bt?he!==null?Re?t.compressedTexSubImage2D(34069+B,K,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(34069+B,K,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+B,K,0,0,ce.width,ce.height,he,_e,ce.data):t.texImage2D(34069+B,K,pe,ce.width,ce.height,0,he,_e,ce.data)}}}else{P=M.mipmaps,Re&&Be&&(P.length>0&&Qe++,t.texStorage2D(34067,Qe,pe,j[0].width,j[0].height));for(let B=0;B<6;B++)if(le){Re?t.texSubImage2D(34069+B,0,0,0,j[B].width,j[B].height,he,_e,j[B].data):t.texImage2D(34069+B,0,pe,j[B].width,j[B].height,0,he,_e,j[B].data);for(let K=0;K<P.length;K++){const fe=P[K].image[B].image;Re?t.texSubImage2D(34069+B,K+1,0,0,fe.width,fe.height,he,_e,fe.data):t.texImage2D(34069+B,K+1,pe,fe.width,fe.height,0,he,_e,fe.data)}}else{Re?t.texSubImage2D(34069+B,0,0,0,he,_e,j[B]):t.texImage2D(34069+B,0,pe,he,_e,j[B]);for(let K=0;K<P.length;K++){const ce=P[K];Re?t.texSubImage2D(34069+B,K+1,0,0,he,_e,ce.image[B]):t.texImage2D(34069+B,K+1,pe,he,_e,ce.image[B])}}}A(M,xe)&&D(34067),oe.__version=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function de(T,M,V,ee,se){const oe=r.convert(V.format,V.encoding),be=r.convert(V.type),le=g(V.internalFormat,oe,be,V.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,le,M.width,M.height,M.depth,0,oe,be,null):t.texImage2D(se,0,le,M.width,M.height,0,oe,be,null)),t.bindFramebuffer(36160,T),Oe(M)?h.framebufferTexture2DMultisampleEXT(36160,ee,se,n.get(V).__webglTexture,0,$e(M)):(se===3553||se>=34069&&se<=34074)&&s.framebufferTexture2D(36160,ee,se,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(T,M,V){if(s.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(V||Oe(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===An?ee=36012:se.type===Cn&&(ee=33190));const oe=$e(M);Oe(M)?h.renderbufferStorageMultisampleEXT(36161,oe,ee,M.width,M.height):s.renderbufferStorageMultisample(36161,oe,ee,M.width,M.height)}else s.renderbufferStorage(36161,ee,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const ee=$e(M);V&&Oe(M)===!1?s.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Oe(M)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ee.length;se++){const oe=ee[se],be=r.convert(oe.format,oe.encoding),le=r.convert(oe.type),j=g(oe.internalFormat,be,le,oe.encoding),ge=$e(M);V&&Oe(M)===!1?s.renderbufferStorageMultisample(36161,ge,j,M.width,M.height):Oe(M)?h.renderbufferStorageMultisampleEXT(36161,ge,j,M.width,M.height):s.renderbufferStorage(36161,j,M.width,M.height)}}s.bindRenderbuffer(36161,null)}function we(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,se=$e(M);if(M.depthTexture.format===Ln)Oe(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,se):s.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===ai)Oe(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,se):s.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ve(T){const M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ne(M.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ne(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function ct(T,M,V){const ee=n.get(T);M!==void 0&&de(ee.__webglFramebuffer,T,T.texture,36064,3553),V!==void 0&&ve(T)}function dt(T){const M=T.texture,V=n.get(T),ee=n.get(M);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=M.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,oe=T.isWebGLMultipleRenderTargets===!0,be=b(T)||a;if(se){V.__webglFramebuffer=[];for(let le=0;le<6;le++)V.__webglFramebuffer[le]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const le=T.texture;for(let j=0,ge=le.length;j<ge;j++){const xe=n.get(le[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Oe(T)===!1){const le=oe?M:[M];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<le.length;j++){const ge=le[j];V.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const xe=r.convert(ge.format,ge.encoding),he=r.convert(ge.type),_e=g(ge.internalFormat,xe,he,ge.encoding,T.isXRRenderTarget===!0),pe=$e(T);s.renderbufferStorageMultisample(36161,pe,_e,T.width,T.height),s.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ee.__webglTexture),X(34067,M,be);for(let le=0;le<6;le++)de(V.__webglFramebuffer[le],T,M,36064,34069+le);A(M,be)&&D(34067),t.unbindTexture()}else if(oe){const le=T.texture;for(let j=0,ge=le.length;j<ge;j++){const xe=le[j],he=n.get(xe);t.bindTexture(3553,he.__webglTexture),X(3553,xe,be),de(V.__webglFramebuffer,T,xe,36064+j,3553),A(xe,be)&&D(3553)}t.unbindTexture()}else{let le=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?le=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),X(le,M,be),de(V.__webglFramebuffer,T,M,36064,le),A(M,be)&&D(le),t.unbindTexture()}T.depthBuffer&&ve(T)}function ut(T){const M=b(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,se=V.length;ee<se;ee++){const oe=V[ee];if(A(oe,M)){const be=T.isWebGLCubeRenderTarget?34067:3553,le=n.get(oe).__webglTexture;t.bindTexture(be,le),D(be),t.unbindTexture()}}}function At(T){if(a&&T.samples>0&&Oe(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,ee=T.height;let se=16384;const oe=[],be=T.stencilBuffer?33306:36096,le=n.get(T),j=T.isWebGLMultipleRenderTargets===!0;if(j)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){oe.push(36064+ge),T.depthBuffer&&oe.push(be);const xe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(xe===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[ge]),xe===!0&&(s.invalidateFramebuffer(36008,[be]),s.invalidateFramebuffer(36009,[be])),j){const he=n.get(M[ge]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,he,0)}s.blitFramebuffer(0,0,V,ee,0,0,V,ee,se,9728),m&&s.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,le.__webglColorRenderbuffer[ge]);const xe=n.get(M[ge]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,xe,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function $e(T){return Math.min(p,T.samples)}function Oe(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(T){const M=o.render.frame;v.get(T)!==M&&(v.set(T,M),T.update())}function zt(T,M){const V=T.encoding,ee=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ar||V!==In&&(V===ke?a===!1?e.has("EXT_sRGB")===!0&&ee===Bt?(T.format=ar,T.minFilter=Rt,T.generateMipmaps=!1):M=ao.sRGBToLinear(M):(ee!==Bt||se!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=ie,this.rebindTextures=ct,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Oe}function $p(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Rn)return 5121;if(r===Oc)return 32819;if(r===kc)return 32820;if(r===zc)return 5120;if(r===Nc)return 5122;if(r===no)return 5123;if(r===Uc)return 5124;if(r===Cn)return 5125;if(r===An)return 5126;if(r===Ci)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bc)return 6406;if(r===Bt)return 6408;if(r===Vc)return 6409;if(r===Hc)return 6410;if(r===Ln)return 6402;if(r===ai)return 34041;if(r===Gc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ar)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wc)return 6403;if(r===qc)return 36244;if(r===Xc)return 33319;if(r===$c)return 33320;if(r===jc)return 36249;if(r===bs||r===Ms||r===Ss||r===ws)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gr||r===Vr||r===Hr||r===Wr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qr||r===Xr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qr)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$r||r===jr||r===Yr||r===Zr||r===Jr||r===Kr||r===Qr||r===ea||r===ta||r===na||r===ia||r===sa||r===ra||r===aa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$r)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ea)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ta)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===na)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ia)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ra)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===aa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===oa)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ii?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class jp extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const u of e.hand.values()){const d=t.getJointPose(u,n),x=this._getHandJoint(l,u);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zp extends vt{constructor(e,t,n,i,r,o,a,c,l,f){if(f=f!==void 0?f:Ln,f!==Ln&&f!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ln&&(n=Cn),n===void 0&&f===ai&&(n=ii),super(null,i,r,o,a,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1}}class Jp extends li{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,f=null,p=null,h=null,m=null;const v=t.getContextAttributes();let u=null,d=null;const x=[],y=[],_=new Set,b=new Map,E=new xt;E.layers.enable(1),E.viewport=new Ve;const A=new xt;A.layers.enable(2),A.viewport=new Ve;const D=[E,A],g=new jp;g.layers.enable(1),g.layers.enable(2);let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let O=x[k];return O===void 0&&(O=new Js,x[k]=O),O.getTargetRaySpace()},this.getControllerGrip=function(k){let O=x[k];return O===void 0&&(O=new Js,x[k]=O),O.getGripSpace()},this.getHand=function(k){let O=x[k];return O===void 0&&(O=new Js,x[k]=O),O.getHandSpace()};function U(k){const O=y.indexOf(k.inputSource);if(O===-1)return;const ie=x[O];ie!==void 0&&ie.dispatchEvent({type:k.type,data:k.inputSource})}function Z(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",z);for(let k=0;k<x.length;k++){const O=y[k];O!==null&&(y[k]=null,x[k].disconnect(O))}C=null,L=null,e.setRenderTarget(u),h=null,p=null,f=null,i=null,d=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:h}),d=new Fn(h.framebufferWidth,h.framebufferHeight,{format:Bt,type:Rn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let O=null,ie=null,te=null;v.depth&&(te=v.stencil?35056:33190,O=v.stencil?ai:Ln,ie=v.stencil?ii:Cn);const ae={colorFormat:32856,depthFormat:te,scaleFactor:r};f=new XRWebGLBinding(i,t),p=f.createProjectionLayer(ae),i.updateRenderState({layers:[p]}),d=new Fn(p.textureWidth,p.textureHeight,{format:Bt,type:Rn,depthTexture:new Zp(p.textureWidth,p.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const X=e.properties.get(d);X.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(k){for(let O=0;O<k.removed.length;O++){const ie=k.removed[O],te=y.indexOf(ie);te>=0&&(y[te]=null,x[te].disconnect(ie))}for(let O=0;O<k.added.length;O++){const ie=k.added[O];let te=y.indexOf(ie);if(te===-1){for(let X=0;X<x.length;X++)if(X>=y.length){y.push(ie),te=X;break}else if(y[X]===null){y[X]=ie,te=X;break}if(te===-1)break}const ae=x[te];ae&&ae.connect(ie)}}const F=new R,H=new R;function Y(k,O,ie){F.setFromMatrixPosition(O.matrixWorld),H.setFromMatrixPosition(ie.matrixWorld);const te=F.distanceTo(H),ae=O.projectionMatrix.elements,X=ie.projectionMatrix.elements,De=ae[14]/(ae[10]-1),ue=ae[14]/(ae[10]+1),ye=(ae[9]+1)/ae[5],de=(ae[9]-1)/ae[5],Ne=(ae[8]-1)/ae[0],we=(X[8]+1)/X[0],ve=De*Ne,ct=De*we,dt=te/(-Ne+we),ut=dt*-Ne;O.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ut),k.translateZ(dt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const At=De+dt,$e=ue+dt,Oe=ve-ut,Xt=ct+(te-ut),zt=ye*ue/$e*At,T=de*ue/$e*At;k.projectionMatrix.makePerspective(Oe,Xt,zt,T,At,$e)}function Q(k,O){O===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(O.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;g.near=A.near=E.near=k.near,g.far=A.far=E.far=k.far,(C!==g.near||L!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),C=g.near,L=g.far);const O=k.parent,ie=g.cameras;Q(g,O);for(let ae=0;ae<ie.length;ae++)Q(ie[ae],O);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),k.matrix.copy(g.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const te=k.children;for(let ae=0,X=te.length;ae<X;ae++)te[ae].updateMatrixWorld(!0);ie.length===2?Y(g,E,A):g.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){p!==null&&(p.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.getPlanes=function(){return _};let $=null;function ne(k,O){if(l=O.getViewerPose(c||o),m=O,l!==null){const ie=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let te=!1;ie.length!==g.cameras.length&&(g.cameras.length=0,te=!0);for(let ae=0;ae<ie.length;ae++){const X=ie[ae];let De=null;if(h!==null)De=h.getViewport(X);else{const ye=f.getViewSubImage(p,X);De=ye.viewport,ae===0&&(e.setRenderTargetTextures(d,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(d))}let ue=D[ae];ue===void 0&&(ue=new xt,ue.layers.enable(ae),ue.viewport=new Ve,D[ae]=ue),ue.matrix.fromArray(X.transform.matrix),ue.projectionMatrix.fromArray(X.projectionMatrix),ue.viewport.set(De.x,De.y,De.width,De.height),ae===0&&g.matrix.copy(ue.matrix),te===!0&&g.cameras.push(ue)}}for(let ie=0;ie<x.length;ie++){const te=y[ie],ae=x[ie];te!==null&&ae!==void 0&&ae.update(te,O,c||o)}if($&&$(k,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let ie=null;for(const te of _)O.detectedPlanes.has(te)||(ie===null&&(ie=[]),ie.push(te));if(ie!==null)for(const te of ie)_.delete(te),b.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of O.detectedPlanes)if(!_.has(te))_.add(te),b.set(te,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const ae=b.get(te);te.lastChangedTime>ae&&(b.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const J=new go;J.setAnimationLoop(ne),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function Kp(s,e){function t(u,d){d.color.getRGB(u.fogColor.value,fo(s)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function n(u,d,x,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(u,d):d.isMeshToonMaterial?(i(u,d),f(u,d)):d.isMeshPhongMaterial?(i(u,d),l(u,d)):d.isMeshStandardMaterial?(i(u,d),p(u,d),d.isMeshPhysicalMaterial&&h(u,d,_)):d.isMeshMatcapMaterial?(i(u,d),m(u,d)):d.isMeshDepthMaterial?i(u,d):d.isMeshDistanceMaterial?(i(u,d),v(u,d)):d.isMeshNormalMaterial?i(u,d):d.isLineBasicMaterial?(r(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?a(u,d,x,y):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map),d.alphaMap&&(u.alphaMap.value=d.alphaMap),d.bumpMap&&(u.bumpMap.value=d.bumpMap,u.bumpScale.value=d.bumpScale,d.side===It&&(u.bumpScale.value*=-1)),d.displacementMap&&(u.displacementMap.value=d.displacementMap,u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap),d.normalMap&&(u.normalMap.value=d.normalMap,u.normalScale.value.copy(d.normalScale),d.side===It&&u.normalScale.value.negate()),d.specularMap&&(u.specularMap.value=d.specularMap),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(u.envMap.value=x,u.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),u.uvTransform.value.copy(y.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),u.uv2Transform.value.copy(_.matrix))}function r(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function a(u,d,x,y){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*x,u.scale.value=y*.5,d.map&&(u.map.value=d.map),d.alphaMap&&(u.alphaMap.value=d.alphaMap),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),u.uvTransform.value.copy(_.matrix))}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map),d.alphaMap&&(u.alphaMap.value=d.alphaMap),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),u.uvTransform.value.copy(x.matrix))}function l(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.roughness.value=d.roughness,u.metalness.value=d.metalness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function h(u,d,x){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),u.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===It&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap)}function m(u,d){d.matcap&&(u.matcap.value=d.matcap)}function v(u,d){u.referencePosition.value.copy(d.referencePosition),u.nearDistance.value=d.nearDistance,u.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Qp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function l(y,_){let b=i[y.id];b===void 0&&(v(y),b=f(y),i[y.id]=b,y.addEventListener("dispose",d));const E=_.program;n.updateUBOMapping(y,E);const A=e.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function f(y){const _=p();y.__bindingPointIndex=_;const b=s.createBuffer(),E=y.__size,A=y.usage;return s.bindBuffer(35345,b),s.bufferData(35345,E,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,b),b}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=i[y.id],b=y.uniforms,E=y.__cache;s.bindBuffer(35345,_);for(let A=0,D=b.length;A<D;A++){const g=b[A];if(m(g,A,E)===!0){const C=g.__offset,L=Array.isArray(g.value)?g.value:[g.value];let U=0;for(let Z=0;Z<L.length;Z++){const z=L[Z],F=u(z);typeof z=="number"?(g.__data[0]=z,s.bufferSubData(35345,C+U,g.__data)):z.isMatrix3?(g.__data[0]=z.elements[0],g.__data[1]=z.elements[1],g.__data[2]=z.elements[2],g.__data[3]=z.elements[0],g.__data[4]=z.elements[3],g.__data[5]=z.elements[4],g.__data[6]=z.elements[5],g.__data[7]=z.elements[0],g.__data[8]=z.elements[6],g.__data[9]=z.elements[7],g.__data[10]=z.elements[8],g.__data[11]=z.elements[0]):(z.toArray(g.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,C,g.__data)}}s.bindBuffer(35345,null)}function m(y,_,b){const E=y.value;if(b[_]===void 0){if(typeof E=="number")b[_]=E;else{const A=Array.isArray(E)?E:[E],D=[];for(let g=0;g<A.length;g++)D.push(A[g].clone());b[_]=D}return!0}else if(typeof E=="number"){if(b[_]!==E)return b[_]=E,!0}else{const A=Array.isArray(b[_])?b[_]:[b[_]],D=Array.isArray(E)?E:[E];for(let g=0;g<A.length;g++){const C=A[g];if(C.equals(D[g])===!1)return C.copy(D[g]),!0}}return!1}function v(y){const _=y.uniforms;let b=0;const E=16;let A=0;for(let D=0,g=_.length;D<g;D++){const C=_[D],L={boundary:0,storage:0},U=Array.isArray(C.value)?C.value:[C.value];for(let Z=0,z=U.length;Z<z;Z++){const F=U[Z],H=u(F);L.boundary+=H.boundary,L.storage+=H.storage}if(C.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,D>0){A=b%E;const Z=E-A;A!==0&&Z-L.boundary<0&&(b+=E-A,C.__offset=b)}b+=L.storage}return A=b%E,A>0&&(b+=E-A),y.__size=b,y.__cache={},this}function u(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function d(y){const _=y.target;_.removeEventListener("dispose",d);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function x(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function em(){const s=Li("canvas");return s.style.display="block",s}function xr(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:em(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=s.alpha!==void 0?s.alpha:!1;let p=null,h=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=rn,this.toneMappingExposure=1;const u=this;let d=!1,x=0,y=0,_=null,b=-1,E=null;const A=new Ve,D=new Ve;let g=null,C=e.width,L=e.height,U=1,Z=null,z=null;const F=new Ve(0,0,C,L),H=new Ve(0,0,C,L);let Y=!1;const Q=new mr;let $=!1,ne=!1,J=null;const k=new Xe,O=new Pe,ie=new R,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return _===null?U:1}let X=t;function De(S,N){for(let G=0;G<S.length;G++){const I=S[G],W=e.getContext(I,N);if(W!==null)return W}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ur}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),X===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),X=De(N,S),X===null)throw De(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ue,ye,de,Ne,we,ve,ct,dt,ut,At,$e,Oe,Xt,zt,T,M,V,ee,se,oe,be,le,j,ge;function xe(){ue=new uf(X),ye=new rf(X,ue,s),ue.init(ye),le=new $p(X,ue,ye),de=new qp(X,ue,ye),Ne=new pf,we=new Dp,ve=new Xp(X,ue,de,we,ye,le,Ne),ct=new of(u),dt=new df(u),ut=new Md(X,ye),j=new nf(X,ue,ut,ye),At=new hf(X,ut,Ne,j),$e=new xf(X,At,ut,Ne),se=new _f(X,ye,ve),M=new af(we),Oe=new Pp(u,ct,dt,ue,ye,j,M),Xt=new Kp(u,we),zt=new Ip,T=new kp(ue,ye),ee=new tf(u,ct,dt,de,$e,f,o),V=new Wp(u,$e,ye),ge=new Qp(X,Ne,ye,de),oe=new sf(X,ue,Ne,ye),be=new ff(X,ue,Ne,ye),Ne.programs=Oe.programs,u.capabilities=ye,u.extensions=ue,u.properties=we,u.renderLists=zt,u.shadowMap=V,u.state=de,u.info=Ne}xe();const he=new Jp(u,X);this.xr=he,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(C,L,!1))},this.getSize=function(S){return S.set(C,L)},this.setSize=function(S,N,G){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,L=N,e.width=Math.floor(S*U),e.height=Math.floor(N*U),G!==!1&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(C*U,L*U).floor()},this.setDrawingBufferSize=function(S,N,G){C=S,L=N,U=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,N,G,I){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,N,G,I),de.viewport(A.copy(F).multiplyScalar(U).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,N,G,I){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,N,G,I),de.scissor(D.copy(H).multiplyScalar(U).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(S){de.setScissorTest(Y=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,N=!0,G=!0){let I=0;S&&(I|=16384),N&&(I|=256),G&&(I|=1024),X.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),zt.dispose(),T.dispose(),we.dispose(),ct.dispose(),dt.dispose(),$e.dispose(),j.dispose(),ge.dispose(),Oe.dispose(),he.dispose(),he.removeEventListener("sessionstart",ce),he.removeEventListener("sessionend",fe),J&&(J.dispose(),J=null),ze.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=Ne.autoReset,N=V.enabled,G=V.autoUpdate,I=V.needsUpdate,W=V.type;xe(),Ne.autoReset=S,V.enabled=N,V.autoUpdate=G,V.needsUpdate=I,V.type=W}function Re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const N=S.target;N.removeEventListener("dispose",Be),Qe(N)}function Qe(S){P(S),we.remove(S)}function P(S){const N=we.get(S).programs;N!==void 0&&(N.forEach(function(G){Oe.releaseProgram(G)}),S.isShaderMaterial&&Oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,I,W,me){N===null&&(N=te);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Co(S,N,G,I,W);de.setMaterial(I,Me);let Te=G.index,Ie=1;I.wireframe===!0&&(Te=At.getWireframeAttribute(G),Ie=2);const Ce=G.drawRange,Ae=G.attributes.position;let He=Ce.start*Ie,yt=(Ce.start+Ce.count)*Ie;me!==null&&(He=Math.max(He,me.start*Ie),yt=Math.min(yt,(me.start+me.count)*Ie)),Te!==null?(He=Math.max(He,0),yt=Math.min(yt,Te.count)):Ae!=null&&(He=Math.max(He,0),yt=Math.min(yt,Ae.count));const jt=yt-He;if(jt<0||jt===1/0)return;j.setup(W,I,Ee,G,Te);let _n,We=oe;if(Te!==null&&(_n=ut.get(Te),We=be,We.setIndex(_n)),W.isMesh)I.wireframe===!0?(de.setLineWidth(I.wireframeLinewidth*ae()),We.setMode(1)):We.setMode(4);else if(W.isLine){let Le=I.linewidth;Le===void 0&&(Le=1),de.setLineWidth(Le*ae()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(He,jt,W.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fs=Math.min(G.instanceCount,Le);We.renderInstances(He,jt,fs)}else We.render(He,jt)},this.compile=function(S,N){function G(I,W,me){I.transparent===!0&&I.side===Vi?(I.side=It,I.needsUpdate=!0,Lt(I,W,me),I.side=Dn,I.needsUpdate=!0,Lt(I,W,me),I.side=Vi):Lt(I,W,me)}h=T.get(S),h.init(),v.push(h),S.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(u.physicallyCorrectLights),S.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const Me=W[me];G(Me,S,I)}else G(W,S,I)}),v.pop(),h=null};let B=null;function K(S){B&&B(S)}function ce(){ze.stop()}function fe(){ze.start()}const ze=new go;ze.setAnimationLoop(K),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(S){B=S,he.setAnimationLoop(S),S===null?ze.stop():ze.start()},he.addEventListener("sessionstart",ce),he.addEventListener("sessionend",fe),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),S.isScene===!0&&S.onBeforeRender(u,S,N,_),h=T.get(S,v.length),h.init(),v.push(h),k.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(k),ne=this.localClippingEnabled,$=M.init(this.clippingPlanes,ne,N),p=zt.get(S,m.length),p.init(),m.push(p),et(S,N,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(Z,z),$===!0&&M.beginShadows();const G=h.state.shadowsArray;if(V.render(G,S,N),$===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(p,S),h.setupLights(u.physicallyCorrectLights),N.isArrayCamera){const I=N.cameras;for(let W=0,me=I.length;W<me;W++){const Me=I[W];at(p,S,Me,Me.viewport)}}else at(p,S,N);_!==null&&(ve.updateMultisampleRenderTarget(_),ve.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(u,S,N),j.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function et(S,N,G,I){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){I&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const Me=$e.update(S),Ee=S.material;Ee.visible&&p.push(S,Me,Ee,G,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ne.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ne.render.frame),!S.frustumCulled||Q.intersectsObject(S))){I&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const Me=$e.update(S),Ee=S.material;if(Array.isArray(Ee)){const Te=Me.groups;for(let Ie=0,Ce=Te.length;Ie<Ce;Ie++){const Ae=Te[Ie],He=Ee[Ae.materialIndex];He&&He.visible&&p.push(S,Me,He,G,ie.z,Ae)}}else Ee.visible&&p.push(S,Me,Ee,G,ie.z,null)}}const me=S.children;for(let Me=0,Ee=me.length;Me<Ee;Me++)et(me[Me],N,G,I)}function at(S,N,G,I){const W=S.opaque,me=S.transmissive,Me=S.transparent;h.setupLightsView(G),me.length>0&&gn(W,N,G),I&&de.viewport(A.copy(I)),W.length>0&&Ge(W,N,G),me.length>0&&Ge(me,N,G),Me.length>0&&Ge(Me,N,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function gn(S,N,G){const I=ye.isWebGL2;J===null&&(J=new Fn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ci:Rn,minFilter:Ti,samples:I&&r===!0?4:0})),u.getDrawingBufferSize(O),I?J.setSize(O.x,O.y):J.setSize(or(O.x),or(O.y));const W=u.getRenderTarget();u.setRenderTarget(J),u.clear();const me=u.toneMapping;u.toneMapping=rn,Ge(S,N,G),u.toneMapping=me,ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),u.setRenderTarget(W)}function Ge(S,N,G){const I=N.isScene===!0?N.overrideMaterial:null;for(let W=0,me=S.length;W<me;W++){const Me=S[W],Ee=Me.object,Te=Me.geometry,Ie=I===null?Me.material:I,Ce=Me.group;Ee.layers.test(G.layers)&&$t(Ee,N,G,Te,Ie,Ce)}}function $t(S,N,G,I,W,me){S.onBeforeRender(u,N,G,I,W,me),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(u,N,G,I,S,me),W.transparent===!0&&W.side===Vi?(W.side=It,W.needsUpdate=!0,u.renderBufferDirect(G,N,I,W,S,me),W.side=Dn,W.needsUpdate=!0,u.renderBufferDirect(G,N,I,W,S,me),W.side=Vi):u.renderBufferDirect(G,N,I,W,S,me),S.onAfterRender(u,N,G,I,W,me)}function Lt(S,N,G){N.isScene!==!0&&(N=te);const I=we.get(S),W=h.state.lights,me=h.state.shadowsArray,Me=W.state.version,Ee=Oe.getParameters(S,W.state,me,N,G),Te=Oe.getProgramCacheKey(Ee);let Ie=I.programs;I.environment=S.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(S.isMeshStandardMaterial?dt:ct).get(S.envMap||I.environment),Ie===void 0&&(S.addEventListener("dispose",Be),Ie=new Map,I.programs=Ie);let Ce=Ie.get(Te);if(Ce!==void 0){if(I.currentProgram===Ce&&I.lightsStateVersion===Me)return Sr(S,Ee),Ce}else Ee.uniforms=Oe.getUniforms(S),S.onBuild(G,Ee,u),S.onBeforeCompile(Ee,u),Ce=Oe.acquireProgram(Ee,Te),Ie.set(Te,Ce),I.uniforms=Ee.uniforms;const Ae=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=M.uniform),Sr(S,Ee),I.needsLights=Lo(S),I.lightsStateVersion=Me,I.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMap.value=W.state.directionalShadowMap,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotShadowMap.value=W.state.spotShadowMap,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMap.value=W.state.pointShadowMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=Ce.getUniforms(),yt=ds.seqWithValue(He.seq,Ae);return I.currentProgram=Ce,I.uniformsList=yt,Ce}function Sr(S,N){const G=we.get(S);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Co(S,N,G,I,W){N.isScene!==!0&&(N=te),ve.resetTextureUnits();const me=N.fog,Me=I.isMeshStandardMaterial?N.environment:null,Ee=_===null?u.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:In,Te=(I.isMeshStandardMaterial?dt:ct).get(I.envMap||Me),Ie=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ce=!!I.normalMap&&!!G.attributes.tangent,Ae=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color,jt=I.toneMapped?u.toneMapping:rn,_n=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,We=_n!==void 0?_n.length:0,Le=we.get(I),fs=h.state.lights;if($===!0&&(ne===!0||S!==E)){const bt=S===E&&I.id===b;M.setState(I,S,bt)}let tt=!1;I.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==fs.state.version||Le.outputEncoding!==Ee||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Te||I.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==M.numPlanes||Le.numIntersection!==M.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Ce||Le.morphTargets!==Ae||Le.morphNormals!==He||Le.morphColors!==yt||Le.toneMapping!==jt||ye.isWebGL2===!0&&Le.morphTargetsCount!==We)&&(tt=!0):(tt=!0,Le.__version=I.version);let xn=Le.currentProgram;tt===!0&&(xn=Lt(I,N,W));let wr=!1,di=!1,ps=!1;const ht=xn.getUniforms(),vn=Le.uniforms;if(de.useProgram(xn.program)&&(wr=!0,di=!0,ps=!0),I.id!==b&&(b=I.id,di=!0),wr||E!==S){if(ht.setValue(X,"projectionMatrix",S.projectionMatrix),ye.logarithmicDepthBuffer&&ht.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),E!==S&&(E=S,di=!0,ps=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const bt=ht.map.cameraPosition;bt!==void 0&&bt.setValue(X,ie.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ht.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&ht.setValue(X,"viewMatrix",S.matrixWorldInverse)}if(W.isSkinnedMesh){ht.setOptional(X,W,"bindMatrix"),ht.setOptional(X,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(ye.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),ht.setValue(X,"boneTexture",bt.boneTexture,ve),ht.setValue(X,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&ye.isWebGL2===!0)&&se.update(W,G,I,xn),(di||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,ht.setValue(X,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(vn.envMap.value=Te,vn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),di&&(ht.setValue(X,"toneMappingExposure",u.toneMappingExposure),Le.needsLights&&Ao(vn,ps),me&&I.fog===!0&&Xt.refreshFogUniforms(vn,me),Xt.refreshMaterialUniforms(vn,I,U,L,J),ds.upload(X,Le.uniformsList,vn,ve)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ds.upload(X,Le.uniformsList,vn,ve),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ht.setValue(X,"center",W.center),ht.setValue(X,"modelViewMatrix",W.modelViewMatrix),ht.setValue(X,"normalMatrix",W.normalMatrix),ht.setValue(X,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const bt=I.uniformsGroups;for(let gs=0,Po=bt.length;gs<Po;gs++)if(ye.isWebGL2){const Er=bt[gs];ge.update(Er,xn),ge.bind(Er,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function Ao(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Lo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,N,G){we.get(S.texture).__webglTexture=N,we.get(S.depthTexture).__webglTexture=G;const I=we.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const G=we.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){_=S,x=N,y=G;let I=!0,W=null,me=!1,Me=!1;if(S){const Te=we.get(S);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),I=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(S):Te.__hasExternalTextures&&ve.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Ce=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=Ce[N],me=!0):ye.isWebGL2&&S.samples>0&&ve.useMultisampledRTT(S)===!1?W=we.get(S).__webglMultisampledFramebuffer:W=Ce,A.copy(S.viewport),D.copy(S.scissor),g=S.scissorTest}else A.copy(F).multiplyScalar(U).floor(),D.copy(H).multiplyScalar(U).floor(),g=Y;if(de.bindFramebuffer(36160,W)&&ye.drawBuffers&&I&&de.drawBuffers(S,W),de.viewport(A),de.scissor(D),de.setScissorTest(g),me){const Te=we.get(S.texture);X.framebufferTexture2D(36160,36064,34069+N,Te.__webglTexture,G)}else if(Me){const Te=we.get(S.texture),Ie=N||0;X.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,Ie)}b=-1},this.readRenderTargetPixels=function(S,N,G,I,W,me,Me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){de.bindFramebuffer(36160,Ee);try{const Te=S.texture,Ie=Te.format,Ce=Te.type;if(Ie!==Bt&&le.convert(Ie)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Ce===Ci&&(ue.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ce!==Rn&&le.convert(Ce)!==X.getParameter(35738)&&!(Ce===An&&(ye.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-I&&G>=0&&G<=S.height-W&&X.readPixels(N,G,I,W,le.convert(Ie),le.convert(Ce),me)}finally{const Te=_!==null?we.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(S,N,G=0){const I=Math.pow(2,-G),W=Math.floor(N.image.width*I),me=Math.floor(N.image.height*I);ve.setTexture2D(N,0),X.copyTexSubImage2D(3553,G,0,0,S.x,S.y,W,me),de.unbindTexture()},this.copyTextureToTexture=function(S,N,G,I=0){const W=N.image.width,me=N.image.height,Me=le.convert(G.format),Ee=le.convert(G.type);ve.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?X.texSubImage2D(3553,I,S.x,S.y,W,me,Me,Ee,N.image.data):N.isCompressedTexture?X.compressedTexSubImage2D(3553,I,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):X.texSubImage2D(3553,I,S.x,S.y,Me,Ee,N.image),I===0&&G.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G,I,W=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=S.max.x-S.min.x+1,Me=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Te=le.convert(I.format),Ie=le.convert(I.type);let Ce;if(I.isData3DTexture)ve.setTexture3D(I,0),Ce=32879;else if(I.isDataArrayTexture)ve.setTexture2DArray(I,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,I.flipY),X.pixelStorei(37441,I.premultiplyAlpha),X.pixelStorei(3317,I.unpackAlignment);const Ae=X.getParameter(3314),He=X.getParameter(32878),yt=X.getParameter(3316),jt=X.getParameter(3315),_n=X.getParameter(32877),We=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,We.width),X.pixelStorei(32878,We.height),X.pixelStorei(3316,S.min.x),X.pixelStorei(3315,S.min.y),X.pixelStorei(32877,S.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Ce,W,N.x,N.y,N.z,me,Me,Ee,Te,Ie,We.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ce,W,N.x,N.y,N.z,me,Me,Ee,Te,We.data)):X.texSubImage3D(Ce,W,N.x,N.y,N.z,me,Me,Ee,Te,Ie,We),X.pixelStorei(3314,Ae),X.pixelStorei(32878,He),X.pixelStorei(3316,yt),X.pixelStorei(3315,jt),X.pixelStorei(32877,_n),W===0&&I.generateMipmaps&&X.generateMipmap(Ce),de.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ve.setTextureCube(S,0):S.isData3DTexture?ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ve.setTexture2DArray(S,0):ve.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){x=0,y=0,_=null,de.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class tm extends xr{}tm.prototype.isWebGL1Renderer=!0;class vr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Mo extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class yr extends an{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),f(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new R,b=new R,E=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],_),m(t[A+1],b),m(t[A+2],E),c(_,b,E,y)}function c(y,_,b,E){const A=E+1,D=[];for(let g=0;g<=A;g++){D[g]=[];const C=y.clone().lerp(b,g/A),L=_.clone().lerp(b,g/A),U=A-g;for(let Z=0;Z<=U;Z++)Z===0&&g===A?D[g][Z]=C:D[g][Z]=C.clone().lerp(L,Z/U)}for(let g=0;g<A;g++)for(let C=0;C<2*(A-g)-1;C++){const L=Math.floor(C/2);C%2===0?(h(D[g][L+1]),h(D[g+1][L]),h(D[g][L])):(h(D[g][L+1]),h(D[g+1][L+1]),h(D[g+1][L]))}}function l(y){const _=new R;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function f(){const y=new R;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const b=d(y)/2/Math.PI+.5,E=x(y)/Math.PI+.5;o.push(b,1-E)}v(),p()}function p(){for(let y=0;y<o.length;y+=6){const _=o[y+0],b=o[y+2],E=o[y+4],A=Math.max(_,b,E),D=Math.min(_,b,E);A>.9&&D<.1&&(_<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function m(y,_){const b=y*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function v(){const y=new R,_=new R,b=new R,E=new R,A=new Pe,D=new Pe,g=new Pe;for(let C=0,L=0;C<r.length;C+=9,L+=6){y.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),A.set(o[L+0],o[L+1]),D.set(o[L+2],o[L+3]),g.set(o[L+4],o[L+5]),E.copy(y).add(_).add(b).divideScalar(3);const U=d(E);u(A,L+0,y,U),u(D,L+2,_,U),u(g,L+4,b,U)}}function u(y,_,b,E){E<0&&y.x===1&&(o[_]=y.x-1),b.x===0&&b.z===0&&(o[_]=E/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function x(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new yr(e.vertices,e.indices,e.radius,e.details)}}class br extends yr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new br(e.radius,e.detail)}}class fn extends an{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const f=[],p=new R,h=new R,m=[],v=[],u=[],d=[];for(let x=0;x<=n;x++){const y=[],_=x/n;let b=0;x==0&&o==0?b=.5/t:x==n&&c==Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const A=E/t;p.x=-e*Math.cos(i+A*r)*Math.sin(o+_*a),p.y=e*Math.cos(o+_*a),p.z=e*Math.sin(i+A*r)*Math.sin(o+_*a),v.push(p.x,p.y,p.z),h.copy(p).normalize(),u.push(h.x,h.y,h.z),d.push(A+b,1-_),y.push(l++)}f.push(y)}for(let x=0;x<n;x++)for(let y=0;y<t;y++){const _=f[x][y+1],b=f[x][y],E=f[x+1][y],A=f[x+1][y+1];(x!==0||o>0)&&m.push(_,b,A),(x!==n-1||c<Math.PI)&&m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2))}static fromJSON(e){return new fn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tn extends Ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,r===!1&&i.onStart!==void 0&&i.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){const p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=l.length;p<h;p+=2){const m=l[p],v=l[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null}}}const im=new nm;class So{constructor(e){this.manager=e!==void 0?e:im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sm extends So{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Li("img");function c(){f(),Wa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(p){f(),i&&i(p),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bi extends So{constructor(e){super(e)}load(e,t,n,i){const r=new vt,o=new sm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Mr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ks=new Xe,qa=new R,Xa=new R;class wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(qa),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),Ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new Xe,Mi=new R,Qs=new R;class rm extends wo{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mi),Qs.copy(n.position),Qs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qs),n.updateMatrixWorld(),i.makeTranslation(-Mi.x,-Mi.y,-Mi.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class am extends Mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class om extends wo{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new om}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class To extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);const lm={id:"bgcanvas"},cm={__name:"Background2",setup(s){const e=new Mo;e.fog=new vr(10931707,1,1e3);const t=new xt(25,window.innerWidth/window.innerHeight,1,1e3);t.position.z=550,t.position.x=0,t.position.y=0,e.add(t);const n=new st,i=new st;e.add(n),e.add(i),n.position.y=-180,i.position.y=-180;var r=new br(15,2),o=new Tn({color:12425081,shading:void 0}),a=new Tn({color:16431545,wireframe:!0,side:tn}),c=new lt(r,o);c.scale.x=c.scale.y=c.scale.z=10,n.add(c);var c=new lt(r,a);c.scale.x=c.scale.y=c.scale.z=10.6,i.add(c);var l=new To(12425081,.9);e.add(l);var f=new Eo(16777215,.9);f.position.set(1,1,1).normalize(),e.add(f);const p=new xr({antialias:!0,alpha:!0});p.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),p.setSize(window.innerWidth,window.innerHeight),p.autoClear=!1,p.setClearColor(0,0);const h=function(){requestAnimationFrame(h),n.rotation.z+=.001,n.rotation.y=0,n.rotation.x=0,i.rotation.z-=.001,i.rotation.y=0,i.rotation.x=0,p.clear(),p.render(e,t)};return ja(()=>{var m=document.getElementById("bgcanvas");console.log(m),m.appendChild(p.domElement),h()}),(m,v)=>(sn(),pn("div",lm))}};const Ft=s=>(cr("data-v-df3e54f3"),s=s(),dr(),s),dm={class:"header mx-auto pt-10 px-4 lg:px-12 bg-[#112031]"},um=Ft(()=>w("div",{id:"canvas",class:"canvas"},null,-1)),hm={class:"container mx-auto"},fm={class:"flex justify-between items-center"},pm=Ft(()=>w("div",{class:"flex items-center"},[w("h4",{class:"font-bold text-black-200"},"Natural Drugs")],-1)),mm={class:"flex items-center"},gm=Ft(()=>w("i",{class:"i-Checked-User text-sm"},null,-1)),_m=Ft(()=>w("p",null,"LOGIN",-1)),xm={class:"grid grid-cols-12 gap-5 mt-[80px]"},vm={class:"col-span-12 lg:col-span-5 flex justify-end items-center"},ym=Ft(()=>w("div",{class:"col-span-12 lg:col-span-1"},null,-1)),bm={class:"col-span-12 lg:col-span-6 mb-4"},Mm=Ft(()=>w("h1",{class:"leading-normal sm:text-[50px] text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500"},[Ze(" Start With "),w("span",{class:"bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-tomato-500"},"Natural Drugs "),Ze(" & UIKIT Built with Tailwind and Vue3 ")],-1)),Sm=Ft(()=>w("div",{class:"flex py-3 mb-4"},[w("div",{class:"flex items-center mr-5"},[w("svg",{class:"w-4 h-4 mr-2",viewBox:"0 0 256 257",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},[w("defs",null,[w("linearGradient",{x1:"-0.828097821%",y1:"7.6518539%",x2:"57.6359644%",y2:"78.4107719%",id:"linearGradient-1"},[w("stop",{"stop-color":"#41D1FF",offset:"0%"}),w("stop",{"stop-color":"#BD34FE",offset:"100%"})]),w("linearGradient",{x1:"43.3760053%",y1:"2.24179788%",x2:"50.3158848%",y2:"89.0299051%",id:"linearGradient-2"},[w("stop",{"stop-color":"#FFEA83",offset:"0%"}),w("stop",{"stop-color":"#FFDD35",offset:"8.33333%"}),w("stop",{"stop-color":"#FFA800",offset:"100%"})])]),w("g",null,[w("path",{d:"M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z",fill:"url(#linearGradient-1)"}),w("path",{d:"M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z",fill:"url(#linearGradient-2)"})])]),w("p",{class:"text-white"},"Vite")]),w("div",{class:"flex items-center mr-5"},[w("svg",{class:"w-5 h-5 mr-2",viewBox:"0 0 256 154",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},[w("g",null,[w("path",{d:"M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z",fill:"url(#linearGradient-1)"})])]),w("p",{class:"text-white"},"TailwindCss")]),w("div",{class:"flex items-center mr-5"},[w("svg",{class:"w-5 h-5 mr-2",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[w("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[w("g",{transform:"translate(178.06 235.01)"},[w("path",{d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",fill:"#41b883"})]),w("g",{transform:"translate(178.06 235.01)"},[w("path",{d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",fill:"#34495e"})])])]),w("p",{class:"text-white"},"Vue ^3.2.6")])],-1)),wm=Ft(()=>w("p",{class:"text-white lg:w-9/12 w-full mb-9"}," Over 150+ professionally designed, fully responsive, expertly crafted components and Over 50+ Pages examples that will Boost your next Admin Dashboard Project ",-1)),Em={class:"col-span-12 py-10"},Tm={class:"relative max-w-screen-sm mx-auto lg:mx-0 lg:max-w-none grid lg:grid-cols-3 gap-10 lg:gap-8 text-sm"},Cm={class:"flex space-x-6"},Am=Ft(()=>w("div",null,[w("h5",{class:"font-semibold text-white mb-2"}," Start Your Business "),w("p",{class:"leading-normal text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam perferendis facilis officiis nihil optio a. Laborum, incidunt quod numquam quia cupiditate qui sunt ipsa consequuntur a? Tenetur, quidem doloremque? ")],-1)),Lm={class:"flex space-x-6"},Pm=Ft(()=>w("div",null,[w("h5",{class:"font-semibold text-white mb-2"},[w("a",{href:""},"Buy for youself")]),w("p",{class:"leading-normal text-white"},[Ze(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione quod consectetur sit tempore blanditiis. Quaerat molestias voluptate dolorum magni illum vitae praesentium iste adipisci, porro delectus, voluptatibus, consequatur sit? "),w("a",{href:"https://headlessui.dev",class:"text-white hover:underline"},"Headless UI")])],-1)),Dm={class:"flex space-x-6"},Rm=Ft(()=>w("div",null,[w("h5",{class:"font-semibold text-white mb-2"}," Make Ideas "),w("p",{class:"leading-normal text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus rerum hic maiores. Repudiandae eum veritatis voluptates consequuntur, consequatur officia, culpa ipsum, quam saepe necessitatibus porro! Impedit consequuntur expedita tempore! ")],-1)),Im=Di('<section class="sticky-section shadow sticky z-50 top-0 bg-white lg:px-12" data-v-df3e54f3><div class="container mx-auto flex gap-2 flex-wrap p-0" data-v-df3e54f3><a href="#dashboard" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Dashboard </a><a href="#apps" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Application </a><a href="#components" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Components </a><a href="#widgets" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Widgets </a><a href="#profile" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Profile </a><a href="#credentials" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Credentials </a><a href="#charts" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-df3e54f3> Charts </a></div></section>',1),Fm={class:"container md:mt-24 my-16 mx-auto bg-no-repeat bg-center relative"},zm=Di('<div class="absolute inset-0 opacity-25 dark:opacity-50" data-v-df3e54f3></div><div class="relative grid grid-cols-1 pb-8 text-center z-1" data-v-df3e54f3><h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white text-success" data-v-df3e54f3>Trusted by more than 10K users</h3><p class="bg-slate-200 p-10 rounded max-w-xl mx-auto" data-v-df3e54f3> Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa suscipit, facere molestias error ea doloribus accusantium cumque natus hic soluta consequuntur beatae quidem ut saepe illum fugiat est, quae rem! </p></div><div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1" data-v-df3e54f3><div class="counter-box text-center" data-v-df3e54f3><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-df3e54f3><span class="counter-value" data-target="1548" data-v-df3e54f3>1548</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-df3e54f3>Properties Sell</h5></div><div class="counter-box text-center" data-v-df3e54f3><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-df3e54f3><span class="counter-value" data-target="25" data-v-df3e54f3>25</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-df3e54f3>Award Gained</h5></div><div class="counter-box text-center" data-v-df3e54f3><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-df3e54f3><span class="counter-value" data-target="9" data-v-df3e54f3>9</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-df3e54f3>Years Experience</h5></div></div>',3),Nm={class:"container my-16 mx-auto"},Um=Ft(()=>w("div",{class:"grid grid-cols-1 pb-8 text-center"},[w("h3",{class:"mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"},"Key Features"),w("p",{class:"text-slate-400 max-w-xl mx-auto"},"Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.")],-1)),Om={class:"grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[10px] items-center"},km=Di('<div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2" data-v-df3e54f3><div class="grid grid-cols-1 gap-[30px]" data-v-df3e54f3><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor w-5 h-5" data-v-df3e54f3><rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-v-df3e54f3></rect><line x1="8" y1="21" x2="16" y2="21" data-v-df3e54f3></line><line x1="12" y1="17" x2="12" y2="21" data-v-df3e54f3></line></svg></div><div class="text-right flex-1 md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>Use On Any Device</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather w-5 h-5" data-v-df3e54f3><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" data-v-df3e54f3></path><line x1="16" y1="8" x2="2" y2="22" data-v-df3e54f3></line><line x1="17.5" y1="15" x2="9" y2="15" data-v-df3e54f3></line></svg></div><div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>Feather Icons</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye w-5 h-5" data-v-df3e54f3><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-df3e54f3></path><circle cx="12" cy="12" r="3" data-v-df3e54f3></circle></svg></div><div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>Retina Ready</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div></div></div>',1),Bm={class:"lg:col-span-4 md:col-span-12 lg:mx-1 lg:order-2 order-1"},Gm=Di('<div class="lg:col-span-4 md:col-span-6 order-3" data-v-df3e54f3><div class="grid grid-cols-1 gap-[30px]" data-v-df3e54f3><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check w-5 h-5" data-v-df3e54f3><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-df3e54f3></path><circle cx="8.5" cy="7" r="4" data-v-df3e54f3></circle><polyline points="17 11 19 13 23 9" data-v-df3e54f3></polyline></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>W3c Valid Code</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone w-5 h-5" data-v-df3e54f3><rect x="5" y="2" width="14" height="20" rx="2" ry="2" data-v-df3e54f3></rect><line x1="12" y1="18" x2="12.01" y2="18" data-v-df3e54f3></line></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>Fully Responsive</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-df3e54f3><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-df3e54f3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart w-5 h-5" data-v-df3e54f3><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-df3e54f3></path></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-df3e54f3><h4 class="mb-0 text-lg font-medium" data-v-df3e54f3>Browser Compatibility</h4><p class="text-slate-400 mt-3" data-v-df3e54f3>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div></div></div>',1),Vm=Di('<div class="container md:my-24 my-16 mx-auto" data-v-df3e54f3><div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]" data-v-df3e54f3><div class="mx-auto py-4" data-v-df3e54f3><img src="'+Ar+'" class="h-6" alt="" data-v-df3e54f3></div><div class="mx-auto py-4" data-v-df3e54f3><img src="'+qo+'" class="h-6" alt="" data-v-df3e54f3></div><div class="mx-auto py-4" data-v-df3e54f3><img src="'+Xo+'" class="h-6" alt="" data-v-df3e54f3></div><div class="mx-auto py-4" data-v-df3e54f3><img src="'+Ar+'" class="h-6" alt="" data-v-df3e54f3></div><div class="mx-auto py-4" data-v-df3e54f3><img src="'+$o+'" class="h-6" alt="" data-v-df3e54f3></div><div class="mx-auto py-4" data-v-df3e54f3><img src="'+jo+'" class="h-6" alt="" data-v-df3e54f3></div></div></div>',1),Hm={__name:"LandingPage",setup(s){const e=new Mo,t=new xt(45,window.innerWidth/window.innerHeight,1,500);t.position.z=8,e.add(t);const n=new am(16777215,1,10);n.position.set(0,20,25);const i=new To(16777215,.2);i.position.set(0,-100,100),e.add(n,i);const r=new fn(2,64,64),o=new bi().load("/static/dashboard/t.png"),a=new Tn({map:o,side:tn,transparent:!0,opacity:.9,alphaTest:.5}),c=new lt(r,a),l=new fn(3,188,188),f=new bi().load("/static/dashboard/c1.png"),p=new Tn({map:f,side:tn,transparent:!0,opacity:.6,alphaTest:.5}),h=new lt(l,p),m=new fn(5,188,188),v=new bi().load("/static/dashboard/c.png"),u=new Tn({map:v,side:tn,transparent:!0,opacity:.5,alphaTest:.5}),d=new lt(m,u),x=new fn(2.1,288,288),y=new bi().load("/static/dashboard/c2.png"),_=new Tn({map:y,side:tn,transparent:!0,opacity:.9,alphaTest:.5}),b=new lt(x,_),E=new fn(9,188,188),A=new bi().load("/static/dashboard/sky.png"),D=new Tn({map:A,side:tn,transparent:!0,opacity:1,alphaTest:.5}),g=new lt(E,D);e.add(g);const C=new fn(0,32,32),L=new pr({color:16776960}),U=new lt(C,L),Z=new Eo(6084858,1.4);U.add(Z),U.position.z=1,U.rotation.x=.5,Z.castShadow=!0;const z=new Ei;z.add(c),z.add(h),z.add(d),z.add(b),z.add(U),e.add(z);const F=new Pe,H=k=>{F.x=k.clientX/window.innerWidth*2-1,F.y=-(k.clientY/window.innerHeight)*2+1,U.position.x=F.x,U.position.y=F.y},Y=new xr;Y.setSize(window.innerWidth,window.innerHeight),Y.render(e,t);function Q(){requestAnimationFrame(Q),c.rotation.y-=.008,h.rotation.y+=.015,d.rotation.y-=.02,b.rotation.y-=.01,g.rotation.y+=.001,t.lookAt(z.position),Y.clear(),Y.render(e,t)}ja(()=>{var k=document.getElementById("canvas");console.log(k),k.appendChild(Y.domElement),Q(),window.addEventListener("mousemove",H,!1)}),window.addEventListener("resize",$,!1);function $(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),Y.setSize(window.innerWidth,window.innerHeight)}var ne=zo();function J(k,O){k.target.load("https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json"),setTimeout(()=>{ne.push(O)},500)}return No([{headerTitle:"Dashboard",id:"dashboard",img:"/landing-page/dashboard.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Dashboard",child:[{title:"Dashboard V1",link:"/dashboards/dashboard-version-one"},{title:"Dashboard V2",link:"/dashboards/dashboard-version-two"},{title:"Dashboard V3",link:"/dashboards/dashboard-version-three"},{title:"Dashboard V4",link:"/dashboards/dashboard-version-four"},{title:"Dashboard V5",link:"/dashboards/dashboard-version-five"}]},{headerTitle:"Application",id:"apps",img:"/landing-page/app.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Apps",child:[{title:"Chat",link:"/apps/chat"},{title:"Contact Table",link:"/apps/contact-table"},{title:"Contact List",link:"/apps/contact-list"},{title:"Contact Grid",link:"/apps/contact-grid"},{title:"Ecommerce",link:"/apps/ecommerce"},{title:"Cart",link:"/apps/cart"},{title:"Checkout",link:"/apps/checkout"},{title:"Inbox",link:"/apps/inbox"},{title:"Create Invoice",link:"/apps/create-invoice"},{title:"Print Invoice",link:"/apps/print-invoice"},{title:"Todo List",link:"/apps/todo-list"}]},{headerTitle:"Components",id:"components",img:"/landing-page/components.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Components",child:[{title:"Avatar",link:"/components/avatars"},{title:"Button",link:"/components/button"},{title:"Badges",link:"/components/badges"},{title:"Accordions",link:"/components/accordions"},{title:"Tabs",link:"/components/tabs"},{title:"Typography",link:"/components/typography"}]},{headerTitle:"Widgets",id:"widgets",img:"/landing-page/widgets.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Widgets",child:[{title:"Charts",link:"/widgets/charts"},{title:"General",link:"/widgets/general"}]},{headerTitle:"Profile",id:"profile",img:"/landing-page/widgets.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Profile",child:[{title:"Profile ver 1.0",link:"/profile/profileOne"},{title:"Profile ver 2.0",link:"/profile/profileTwo"}]},{headerTitle:"Credentials",id:"credentials",img:"/landing-page/session.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Session",child:[{title:"Sign In",link:"/sessions/signin"},{title:"Sign In Two",link:"/sessions/signin-two"},{title:"Sign In Three",link:"/sessions/signin-three"},{title:"Sign In Four",link:"/sessions/signin-four"},{title:"Sign Up",link:"/sessions/signup"},{title:"Sign Up Two",link:"/sessions/signup-two"},{title:"Sign Up Three",link:"/sessions/signup-three"},{title:"Sign Up Four",link:"/sessions/signup-four"},{title:"Error 404",link:"/sessions/404"},{title:"Forgot",link:"/sessions/forgot"}]},{headerTitle:"Charts",id:"charts",img:"/landing-page/chart.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Charts",child:[{title:"Bar",link:"/charts/bar"},{title:"Area",link:"/charts/area"},{title:"Line",link:"/charts/line"},{title:"Mix",link:"/charts/mix"},{title:"Column",link:"/charts/column"},{title:"Pie Donut",link:"/charts/pieDonut"},{title:"Radar Chart",link:"/charts/radarChart"},{title:"Radialbar chart",link:"/charts/radialBar"},{title:"Scatter",link:"/charts/scatter"},{title:"Sparkline",link:"/charts/sparkline"}]}]),(k,O)=>{const ie=Ht("lottie-player");return sn(),pn(er,null,[Fe(cm,{style:{position:"fixed","z-index":"-10",opacity:".6"}}),w("header",dm,[um,w("div",hm,[w("nav",fm,[pm,w("div",mm,[w("a",{class:"bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-2 px-5 items-center flex gap-2 clickanimate",onClick:O[0]||(O[0]=te=>J(te,"/signin"))},[gm,_m,Fe(ie,{src:"https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json",background:"transparent",class:"animation",speed:"1",autoplay:""})])])]),w("div",null,[w("div",xm,[w("div",vm,[Fe(sc,{class:"my-6"})]),ym,w("div",bm,[Mm,Sm,wm,w("a",{onClick:O[1]||(O[1]=te=>J(te)),xl:"",class:"bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-3 px-5 clickanimate"},[Ze(" Get Now ($39) "),Fe(ie,{src:"https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json",background:"transparent",class:"animation",speed:"1",autoplay:""})])]),w("div",Em,[w("div",Tm,[w("div",Cm,[Fe(ie,{src:"https://assets9.lottiefiles.com/packages/lf20_idaok5ne.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),Am]),w("div",Lm,[Fe(ie,{src:"https://assets9.lottiefiles.com/packages/lf20_maarwknn.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),Pm]),w("div",Dm,[Fe(ie,{src:"https://assets4.lottiefiles.com/private_files/lf30_f5nb5n.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),Rm])])])])])])]),Im,Fe(Zl,{class:"my-6"}),w("div",Fm,[Fe(ie,{src:"https://assets1.lottiefiles.com/packages/lf20_mksle47o.json",background:"transparent",class:"w-full absolute",speed:"1",loop:"",autoplay:""}),zm]),Fe(cl),w("div",Nm,[Um,w("div",Om,[km,w("div",Bm,[Fe(ie,{src:"https://assets10.lottiefiles.com/packages/lf20_dkamovet.json",background:"transparent",class:"icon",speed:"1",style:{height:"550px","z-index":"-1"},loop:"",autoplay:""})]),Gm])]),Vm,Fe(el)],64)}}},$m=Pi(Hm,[["__scopeId","data-v-df3e54f3"]]);export{$m as default};
