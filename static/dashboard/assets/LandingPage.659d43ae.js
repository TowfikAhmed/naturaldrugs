import{_ as Li,e as un,f as En,g as S,l as Ze,E as Vt,z as Ie,A as Ye,s as cr,v as dr,J as Mo,G as So,m as wo,F as er,k as yr,t as Oi,H as Eo,o as To,y as Co,r as Ao,q as Pi}from"./index.cc3dc2e3.js";import{g as ls,$ as Jn,n as Lo,b as Po,S as Va,a as Ha}from"./swiper.min.f0d72488.js";import{_ as Do}from"./Breadcrumbs.21f36ff7.js";function Ro(s,e,t,n){const i=ls();return s.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let o=s.$el.children(`.${n[r]}`)[0];o||(o=i.createElement("div"),o.className=n[r],s.$el.append(o)),t[r]=o,e[r]=o}}),t}function zn(s=""){return`.${s.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Wa({swiper:s,extendParams:e,on:t,emit:n}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),s.pagination={el:null,$el:null,bullets:[]};let r,o=0;function a(){return!s.params.pagination.el||!s.pagination.el||!s.pagination.$el||s.pagination.$el.length===0}function u(d,c){const{bulletActiveClass:g}=s.params.pagination;d[c]().addClass(`${g}-${c}`)[c]().addClass(`${g}-${c}-${c}`)}function l(){const d=s.rtl,c=s.params.pagination;if(a())return;const g=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,w=s.pagination.$el;let x;const M=s.params.loop?Math.ceil((g-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(x=Math.ceil((s.activeIndex-s.loopedSlides)/s.params.slidesPerGroup),x>g-1-s.loopedSlides*2&&(x-=g-s.loopedSlides*2),x>M-1&&(x-=M),x<0&&s.params.paginationType!=="bullets"&&(x=M+x)):typeof s.snapIndex<"u"?x=s.snapIndex:x=s.activeIndex||0,c.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const E=s.pagination.bullets;let A,R,v;if(c.dynamicBullets&&(r=E.eq(0)[s.isHorizontal()?"outerWidth":"outerHeight"](!0),w.css(s.isHorizontal()?"width":"height",`${r*(c.dynamicMainBullets+4)}px`),c.dynamicMainBullets>1&&s.previousIndex!==void 0&&(o+=x-(s.previousIndex-s.loopedSlides||0),o>c.dynamicMainBullets-1?o=c.dynamicMainBullets-1:o<0&&(o=0)),A=Math.max(x-o,0),R=A+(Math.min(E.length,c.dynamicMainBullets)-1),v=(R+A)/2),E.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${c.bulletActiveClass}${C}`).join(" ")),w.length>1)E.each(C=>{const P=Jn(C),B=P.index();B===x&&P.addClass(c.bulletActiveClass),c.dynamicBullets&&(B>=A&&B<=R&&P.addClass(`${c.bulletActiveClass}-main`),B===A&&u(P,"prev"),B===R&&u(P,"next"))});else{const C=E.eq(x),P=C.index();if(C.addClass(c.bulletActiveClass),c.dynamicBullets){const B=E.eq(A),J=E.eq(R);for(let N=A;N<=R;N+=1)E.eq(N).addClass(`${c.bulletActiveClass}-main`);if(s.params.loop)if(P>=E.length){for(let N=c.dynamicMainBullets;N>=0;N-=1)E.eq(E.length-N).addClass(`${c.bulletActiveClass}-main`);E.eq(E.length-c.dynamicMainBullets-1).addClass(`${c.bulletActiveClass}-prev`)}else u(B,"prev"),u(J,"next");else u(B,"prev"),u(J,"next")}}if(c.dynamicBullets){const C=Math.min(E.length,c.dynamicMainBullets+4),P=(r*C-r)/2-v*r,B=d?"right":"left";E.css(s.isHorizontal()?B:"top",`${P}px`)}}if(c.type==="fraction"&&(w.find(zn(c.currentClass)).text(c.formatFractionCurrent(x+1)),w.find(zn(c.totalClass)).text(c.formatFractionTotal(M))),c.type==="progressbar"){let E;c.progressbarOpposite?E=s.isHorizontal()?"vertical":"horizontal":E=s.isHorizontal()?"horizontal":"vertical";const A=(x+1)/M;let R=1,v=1;E==="horizontal"?R=A:v=A,w.find(zn(c.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${R}) scaleY(${v})`).transition(s.params.speed)}c.type==="custom"&&c.renderCustom?(w.html(c.renderCustom(s,x+1,M)),n("paginationRender",w[0])):n("paginationUpdate",w[0]),s.params.watchOverflow&&s.enabled&&w[s.isLocked?"addClass":"removeClass"](c.lockClass)}function f(){const d=s.params.pagination;if(a())return;const c=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,g=s.pagination.$el;let w="";if(d.type==="bullets"){let x=s.params.loop?Math.ceil((c-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&!s.params.loop&&x>c&&(x=c);for(let M=0;M<x;M+=1)d.renderBullet?w+=d.renderBullet.call(s,M,d.bulletClass):w+=`<${d.bulletElement} class="${d.bulletClass}"></${d.bulletElement}>`;g.html(w),s.pagination.bullets=g.find(zn(d.bulletClass))}d.type==="fraction"&&(d.renderFraction?w=d.renderFraction.call(s,d.currentClass,d.totalClass):w=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`,g.html(w)),d.type==="progressbar"&&(d.renderProgressbar?w=d.renderProgressbar.call(s,d.progressbarFillClass):w=`<span class="${d.progressbarFillClass}"></span>`,g.html(w)),d.type!=="custom"&&n("paginationRender",s.pagination.$el[0])}function p(){s.params.pagination=Ro(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const d=s.params.pagination;if(!d.el)return;let c=Jn(d.el);c.length!==0&&(s.params.uniqueNavElements&&typeof d.el=="string"&&c.length>1&&(c=s.$el.find(d.el),c.length>1&&(c=c.filter(g=>Jn(g).parents(".swiper")[0]===s.el))),d.type==="bullets"&&d.clickable&&c.addClass(d.clickableClass),c.addClass(d.modifierClass+d.type),c.addClass(s.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(c.addClass(`${d.modifierClass}${d.type}-dynamic`),o=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&c.addClass(d.progressbarOppositeClass),d.clickable&&c.on("click",zn(d.bulletClass),function(w){w.preventDefault();let x=Jn(this).index()*s.params.slidesPerGroup;s.params.loop&&(x+=s.loopedSlides),s.slideTo(x)}),Object.assign(s.pagination,{$el:c,el:c[0]}),s.enabled||c.addClass(d.lockClass))}function h(){const d=s.params.pagination;if(a())return;const c=s.pagination.$el;c.removeClass(d.hiddenClass),c.removeClass(d.modifierClass+d.type),c.removeClass(s.isHorizontal()?d.horizontalClass:d.verticalClass),s.pagination.bullets&&s.pagination.bullets.removeClass&&s.pagination.bullets.removeClass(d.bulletActiveClass),d.clickable&&c.off("click",zn(d.bulletClass))}t("init",()=>{s.params.pagination.enabled===!1?_():(p(),f(),l())}),t("activeIndexChange",()=>{(s.params.loop||typeof s.snapIndex>"u")&&l()}),t("snapIndexChange",()=>{s.params.loop||l()}),t("slidesLengthChange",()=>{s.params.loop&&(f(),l())}),t("snapGridLengthChange",()=>{s.params.loop||(f(),l())}),t("destroy",()=>{h()}),t("enable disable",()=>{const{$el:d}=s.pagination;d&&d[s.enabled?"removeClass":"addClass"](s.params.pagination.lockClass)}),t("lock unlock",()=>{l()}),t("click",(d,c)=>{const g=c.target,{$el:w}=s.pagination;if(s.params.pagination.el&&s.params.pagination.hideOnClick&&w&&w.length>0&&!Jn(g).hasClass(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&g===s.navigation.nextEl||s.navigation.prevEl&&g===s.navigation.prevEl))return;const x=w.hasClass(s.params.pagination.hiddenClass);n(x===!0?"paginationShow":"paginationHide"),w.toggleClass(s.params.pagination.hiddenClass)}});const m=()=>{s.$el.removeClass(s.params.pagination.paginationDisabledClass),s.pagination.$el&&s.pagination.$el.removeClass(s.params.pagination.paginationDisabledClass),p(),f(),l()},_=()=>{s.$el.addClass(s.params.pagination.paginationDisabledClass),s.pagination.$el&&s.pagination.$el.addClass(s.params.pagination.paginationDisabledClass),h()};Object.assign(s.pagination,{enable:m,disable:_,render:f,update:l,init:p,destroy:h})}function Io({swiper:s,extendParams:e,on:t,emit:n}){let i;s.autoplay={running:!1,paused:!1},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){if(!s.size){s.autoplay.running=!1,s.autoplay.paused=!1;return}const d=s.slides.eq(s.activeIndex);let c=s.params.autoplay.delay;d.attr("data-swiper-autoplay")&&(c=d.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(i),i=Lo(()=>{let g;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),g=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?a():(g=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(g=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),g=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?a():(g=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(g=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||g===!1)&&r()},c)}function o(){return typeof i<"u"||s.autoplay.running?!1:(s.autoplay.running=!0,n("autoplayStart"),r(),!0)}function a(){return!s.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),s.autoplay.running=!1,n("autoplayStop"),!0)}function u(d){!s.autoplay.running||s.autoplay.paused||(i&&clearTimeout(i),s.autoplay.paused=!0,d===0||!s.params.autoplay.waitForTransition?(s.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(c=>{s.$wrapperEl[0].addEventListener(c,f)}))}function l(){const d=ls();d.visibilityState==="hidden"&&s.autoplay.running&&u(),d.visibilityState==="visible"&&s.autoplay.paused&&(r(),s.autoplay.paused=!1)}function f(d){!s||s.destroyed||!s.$wrapperEl||d.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(c=>{s.$wrapperEl[0].removeEventListener(c,f)}),s.autoplay.paused=!1,s.autoplay.running?r():a())}function p(){s.params.autoplay.disableOnInteraction?a():(n("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(d=>{s.$wrapperEl[0].removeEventListener(d,f)})}function h(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),r())}function m(){s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",p),s.$el.on("mouseleave",h))}function _(){s.$el.off("mouseenter",p),s.$el.off("mouseleave",h)}t("init",()=>{s.params.autoplay.enabled&&(o(),ls().addEventListener("visibilitychange",l),m())}),t("beforeTransitionStart",(d,c,g)=>{s.autoplay.running&&(g||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(c):a())}),t("sliderFirstMove",()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?a():u())}),t("touchEnd",()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&r()}),t("destroy",()=>{_(),s.autoplay.running&&a(),ls().removeEventListener("visibilitychange",l)}),Object.assign(s.autoplay,{pause:u,run:r,start:o,stop:a})}function Fo(s){const{effect:e,swiper:t,on:n,setTranslate:i,setTransition:r,overwriteParams:o,perspective:a,recreateShadows:u,getEffectParams:l}=s;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(t.params,p),Object.assign(t.originalParams,p)}),n("setTranslate",()=>{t.params.effect===e&&i()}),n("setTransition",(p,h)=>{t.params.effect===e&&r(h)}),n("transitionEnd",()=>{if(t.params.effect===e&&u){if(!l||!l().slideShadows)return;t.slides.each(p=>{t.$(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),u()}});let f;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(f=!0),requestAnimationFrame(()=>{f&&t.slides&&t.slides.length&&(i(),f=!1)}))})}function zo(s,e){return s.transformEl?e.find(s.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function br(s,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}`,i=s.transformEl?e.find(s.transformEl):e;let r=i.children(`.${n}`);return r.length||(r=Jn(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),i.append(r)),r}function No({swiper:s,extendParams:e,on:t}){e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Fo({effect:"coverflow",swiper:s,on:t,setTranslate:()=>{const{width:r,height:o,slides:a,slidesSizesGrid:u}=s,l=s.params.coverflowEffect,f=s.isHorizontal(),p=s.translate,h=f?-p+r/2:-p+o/2,m=f?l.rotate:-l.rotate,_=l.depth;for(let d=0,c=a.length;d<c;d+=1){const g=a.eq(d),w=u[d],x=g[0].swiperSlideOffset,M=(h-x-w/2)/w,E=typeof l.modifier=="function"?l.modifier(M):M*l.modifier;let A=f?m*E:0,R=f?0:m*E,v=-_*Math.abs(E),C=l.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(l.stretch)/100*w);let P=f?0:C*E,B=f?C*E:0,J=1-(1-l.scale)*Math.abs(E);Math.abs(B)<.001&&(B=0),Math.abs(P)<.001&&(P=0),Math.abs(v)<.001&&(v=0),Math.abs(A)<.001&&(A=0),Math.abs(R)<.001&&(R=0),Math.abs(J)<.001&&(J=0);const N=`translate3d(${B}px,${P}px,${v}px)  rotateX(${R}deg) rotateY(${A}deg) scale(${J})`;if(zo(l,g).transform(N),g[0].style.zIndex=-Math.abs(Math.round(E))+1,l.slideShadows){let U=f?g.find(".swiper-slide-shadow-left"):g.find(".swiper-slide-shadow-top"),Y=f?g.find(".swiper-slide-shadow-right"):g.find(".swiper-slide-shadow-bottom");U.length===0&&(U=br(l,g,f?"left":"top")),Y.length===0&&(Y=br(l,g,f?"right":"bottom")),U.length&&(U[0].style.opacity=E>0?E:0),Y.length&&(Y[0].style.opacity=-E>0?-E:0)}}},setTransition:r=>{const{transformEl:o}=s.params.coverflowEffect;(o?s.slides.find(o):s.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Mr="/static/dashboard/assets/paypal.e77251d8.svg",Uo="/static/dashboard/assets/google.28b6148d.svg",Oo="/static/dashboard/assets/lenovo.962ff710.svg",ko="/static/dashboard/assets/shopify.8fcfc25b.svg",Bo="/static/dashboard/assets/spotify.5b2dc0cc.svg",Go={},Vo={class:"footer-wrapper bg-gray-100 text-gray-600 relative",style:{overflow:"hidden"}},Ho=S("footer",{class:"text-center lg:text-left container mx-auto flex flex-wrap p-5"},[S("div",{class:"flex justify-center items-center lg:justify-between p-6 border-b border-gray-300"},[S("div",{class:"mr-12 hidden lg:block"},[S("span",null,"Get connected with us on social networks:")]),S("div",{class:"flex justify-center"},[S("a",{href:"#!",class:"mr-6 text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",class:"w-2.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[S("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})])]),S("a",{href:"#!",class:"mr-6 text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})])]),S("a",{href:"#!",class:"mr-6 text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512"},[S("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])]),S("a",{href:"#!",class:"mr-6 text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[S("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})])]),S("a",{href:"#!",class:"mr-6 text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[S("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})])]),S("a",{href:"#!",class:"text-gray-600"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[S("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})])])])]),S("div",{class:"mx-6 py-10 text-center md:text-left"},[S("div",{class:"grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},[S("div",{class:""},[S("h6",{class:"uppercase font-semibold mb-4 flex items-center justify-center md:justify-start"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cubes",class:"w-4 mr-3",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"})]),Ze(" Tailwind ELEMENTS ")]),S("p",null," Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")]),S("div",{class:""},[S("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Products "),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"Angular")]),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"React")]),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"Vue")]),S("p",null,[S("a",{href:"#!",class:"text-gray-600"},"Laravel")])]),S("div",{class:""},[S("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Useful links "),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"Pricing")]),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"Settings")]),S("p",{class:"mb-4"},[S("a",{href:"#!",class:"text-gray-600"},"Orders")]),S("p",null,[S("a",{href:"#!",class:"text-gray-600"},"Help")])]),S("div",{class:""},[S("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Contact "),S("p",{class:"flex items-center justify-center md:justify-start mb-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[S("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})]),Ze(" New York, NY 10012, US ")]),S("p",{class:"flex items-center justify-center md:justify-start mb-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})]),Ze(" info@example.com ")]),S("p",{class:"flex items-center justify-center md:justify-start mb-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"})]),Ze(" + 01 234 567 88 ")]),S("p",{class:"flex items-center justify-center md:justify-start"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"print",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"})]),Ze(" + 01 234 567 89 ")])])])])],-1),Wo=[Ho];function qo(s,e){return un(),En("section",Vo,Wo)}const Xo=Li(Go,[["render",qo]]);Po.use([Wa,Io]);const $o={components:{Swiper:Va,SwiperSlide:Ha},data(){return{autoplay:{delay:4e3,disableOnInteraction:!1}}},setup(){return{onSwiper:t=>{console.log(t)},onSlideChange:()=>{console.log("slide change")},modules:[No,Wa]}}},Di=s=>(cr("data-v-a8cd933c"),s=s(),dr(),s),jo={class:"container mx-auto mb-20 text-gray-700 py-10"},Yo=Di(()=>S("div",{class:"text-center md:max-w-xl lg:max-w-3xl mx-auto"},[S("h3",{class:"text-3xl font-bold mb-6 text-gray-800"},"Testimonials"),S("p",{class:"mb-6 pb-2 md:mb-12 md:pb-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. ")],-1)),Zo=Di(()=>S("div",{class:"block rounded-lg shadow-lg bg-white"},[S("div",{class:"overflow-hidden rounded-t-lg h-14 bg-primary",style:{}}),S("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[S("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"})]),S("div",{class:"p-6"},[S("h4",{class:"text-2xl font-semibold mb-4"},"Maria Smantha"),S("hr"),S("p",{class:"mt-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),S("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),Jo=Di(()=>S("div",{class:"block rounded-lg shadow-lg bg-white"},[S("div",{class:"overflow-hidden rounded-t-lg h-14 bg-danger",style:{}}),S("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[S("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"})]),S("div",{class:"p-6"},[S("h4",{class:"text-2xl font-semibold mb-4"},"Maria Smantha"),S("hr"),S("p",{class:"mt-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),S("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),Ko=Di(()=>S("div",{class:"block rounded-lg shadow-lg bg-white"},[S("div",{class:"overflow-hidden rounded-t-lg h-14 bg-warning",style:{}}),S("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[S("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"})]),S("div",{class:"p-6"},[S("h4",{class:"text-2xl font-semibold mb-4"},"Lisa Cudrow"),S("hr"),S("p",{class:"mt-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Neque cupiditate assumenda in maiores repudi mollitia architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),S("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1)),Qo=Di(()=>S("div",{class:"block rounded-lg shadow-lg bg-white"},[S("div",{class:"overflow-hidden rounded-t-lg h-14 bg-info",style:{}}),S("div",{class:"w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white"},[S("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"})]),S("div",{class:"p-6"},[S("h4",{class:"text-2xl font-semibold mb-4"},"John Smith"),S("hr"),S("p",{class:"mt-4"},[S("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[S("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),Ze(" Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae. ")]),S("p",{class:"text-gray-500 text-sm mt-2"},"22 Dec 2022")])],-1));function el(s,e,t,n,i,r){const o=Vt("swiper-slide"),a=Vt("swiper");return un(),En("section",jo,[Yo,Ie(a,{"slides-per-view":1,"space-between":10,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,autoplay:{delay:1500},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:n.modules},{default:Ye(()=>[Ie(o,null,{default:Ye(()=>[Zo]),_:1}),Ie(o,null,{default:Ye(()=>[Jo]),_:1}),Ie(o,null,{default:Ye(()=>[Ko]),_:1}),Ie(o,null,{default:Ye(()=>[Qo]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])])}const tl=Li($o,[["render",el],["__scopeId","data-v-a8cd933c"]]);const nl={components:{breadcrumbs:Do,Swiper:Va,SwiperSlide:Ha},data(){return{isOpen:!1,products:"",baseUrl:Mo}},mounted(){this.getProducts()},methods:{getProducts(){So.get("/api/member/products/").then(s=>{console.log(s),this.products=s.data})}}},st=s=>(cr("data-v-86dcf198"),s=s(),dr(),s),il={class:"container mx-auto"},sl={class:"grid grid-cols-12 gap-5 mb-5"},rl={class:"col-span-12"},al={class:"flex justify-center items-center flex-wrap lg:justify-between"},ol={class:"mb-2 flex"},ll=st(()=>S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})],-1)),cl=st(()=>S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)),dl=st(()=>S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)),ul=st(()=>S("div",{class:"mb-2"},[S("form",{class:"flex"},[S("input",{class:"rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none",placeholder:"Search..."}),S("button",{role:"button",class:"px-4 bg-rose-500 text-white rounded-r-lg border-t border-b border-r focus:outline-none"},[S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])])])],-1)),hl={class:"ul-ecommerce-wrapper relative"},fl={class:"text-center mb-5"},pl=st(()=>S("span",{class:"bg-warning px-3 rounded py-1 text-white ml-3"},"0",-1)),ml=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"Low To High")])],-1)),gl=st(()=>S("div",{class:"mb-5"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"High To Low")])],-1)),_l=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"Mobile")])],-1)),vl=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"Speaker")])],-1)),xl=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"Furniture")])],-1)),yl=st(()=>S("div",{class:"mb-5"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-radio bg-gray-200 border border-gray-200 text-rose-500",type:"radio",name:"accountType",value:"personal"}),S("span",{class:"ml-2"},"Watch")])],-1)),bl=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"apple(3)")])],-1)),Ml=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"Huwaei(1)")])],-1)),Sl=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"sony(3)")])],-1)),wl=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"samsung(2)")])],-1)),El=st(()=>S("div",{class:"mb-1"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"xiaomi(2)")])],-1)),Tl=st(()=>S("div",{class:"mb-5"},[S("label",{class:"inline-flex items-center cursor-pointer"},[S("input",{class:"form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200",type:"checkbox"}),S("span",{class:"ml-2"},"asus(2)")])],-1)),Cl={class:"ul-ecommerce-container"},Al={class:"grid grid-cols-12 gap-5 mb-5"},Ll=["src"],Pl=["src"],Dl={class:"p-5"},Rl={class:"mb-1"},Il={class:"text-gray-600 dark:text-gray-300",href:"#"},Fl={class:"font-semibold mb-4"},zl={class:"flex justify-between"},Nl={class:"flex mb-2"},Ul=st(()=>S("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1)),Ol=[Ul],kl={class:"font-bold text-base mb-5"},Bl={class:"flex justify-between flex-wrap"};function Gl(s,e,t,n,i,r){const o=Vt("breadcrumbs"),a=Vt("BaseBtn"),u=Vt("P"),l=Vt("BaseCard"),f=Vt("swiper-slide"),p=Vt("swiper");return un(),En("div",il,[Ie(o,{parentTitle:"Ecommerce",subParentTitle:"Product"}),S("div",sl,[S("div",rl,[S("div",al,[S("div",ol,[Ie(a,{onClick:e[0]||(e[0]=h=>i.isOpen=!i.isOpen),class:"mr-2 bg-rose-500 text-white ul-ecommerce-toggle-button lg:hidden block"},{default:Ye(()=>[ll]),_:1}),Ie(a,{rounded:"",class:"mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"},{default:Ye(()=>[cl]),_:1}),Ie(a,{rounded:"",class:"mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"},{default:Ye(()=>[dl]),_:1})]),ul])])]),S("div",hl,[S("div",{class:wo(["ul-ecommerce-sidebar",i.isOpen?"open":""])},[Ie(l,null,{default:Ye(()=>[S("div",fl,[Ie(a,{class:"bg-rose-500 text-white",block:""},{default:Ye(()=>[Ze(" View Cart "),pl]),_:1})]),Ie(u,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Price ")]),_:1}),ml,gl,Ie(u,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Category ")]),_:1}),_l,vl,xl,yl,Ie(u,{class:"text-rose-500 font-bold mb-2"},{default:Ye(()=>[Ze("Brand ")]),_:1}),bl,Ml,Sl,wl,El,Tl]),_:1})],2),S("div",Cl,[S("div",Al,[(un(!0),En(er,null,yr(i.products,(h,m)=>(un(),En("div",{key:m,class:"col-span-6 xl:col-span-3 md:col-span-4"},[Ie(l,{noPadding:"",class:"overflow-hidden relative"},{default:Ye(()=>[Ie(p,{"slides-per-view":1,"space-between":50,onSwiper:s.onSwiper,onSlideChange:s.onSlideChange,autoplay:{delay:2e3},loop:!0},{default:Ye(()=>[Ie(f,null,{default:Ye(()=>[S("img",{src:i.baseUrl+h.productimage_set[0].image,class:"productImage"},null,8,Ll)]),_:2},1024),Ie(f,null,{default:Ye(()=>[S("img",{src:i.baseUrl+h.productimage_set[1].image,class:"productImage"},null,8,Pl)]),_:2},1024)]),_:2},1032,["onSwiper","onSlideChange"]),S("div",Dl,[S("div",Rl,[S("a",Il,"Price: "+Oi(h.trade_price)+" | MRP: "+Oi(h.mrp),1)]),S("p",Fl,Oi(h.title),1),S("div",zl,[S("div",Nl,[(un(),En(er,null,yr(5,(_,d)=>S("svg",{key:d,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},Ol)),64))]),S("p",kl,"MRP: "+Oi(h.mrp),1)]),S("div",Bl,[Ie(a,{class:"bg-rose-500 text-white mb-2"},{default:Ye(()=>[Ze(" Add Cart ")]),_:1}),Ie(a,{class:"border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white mb-2"},{default:Ye(()=>[Ze(" View Cart ")]),_:1})])])]),_:2},1024)]))),128))])])])])}const Vl=Li(nl,[["render",Gl],["__scopeId","data-v-86dcf198"]]);function Kn(s){return(Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(s)}function Hl(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Wl(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Sr(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function wr(s,e){if(s==null)return{};var t,n,i=function(o,a){if(o==null)return{};var u,l,f={},p=Object.keys(o);for(l=0;l<p.length;l++)u=p[l],a.indexOf(u)>=0||(f[u]=o[u]);return f}(s,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(s,t)&&(i[t]=s[t])}return i}function q(s,e){var t=e.get(s);if(!t)throw new TypeError("attempted to get private field on non-instance");return t.get?t.get.call(s):t.value}var ql={player:"lottie-player"},ki="[lottieInteractivity]:",Xl=function(){function s(){var n=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ql,r=i.actions,o=i.container,a=i.mode,u=i.player,l=wr(i,["actions","container","mode","player"]);if(Hl(this,s),Er.set(this,{writable:!0,value:function(){if(n.player){var h=function(){n.player.addEventListener("enterFrame",q(n,ui)),n.container.addEventListener("mouseenter",q(n,pt)),n.container.addEventListener("mouseleave",q(n,mt)),n.container.addEventListener("touchstart",q(n,pt),{passive:!0}),n.container.addEventListener("touchend",q(n,mt),{passive:!0})},m=function(){n.container.addEventListener("mouseenter",q(n,pt)),n.container.addEventListener("mouseleave",q(n,mt)),n.container.addEventListener("touchstart",q(n,pt),{passive:!0}),n.container.addEventListener("touchend",q(n,mt),{passive:!0})};n.stateHandler.set("loop",function(){n.actions[n.interactionIdx].loop?n.player.loop=parseInt(n.actions[n.interactionIdx].loop)-1:n.player.loop=!0,n.player.autoplay=!0}),n.stateHandler.set("autoplay",function(){n.player.loop=!1,n.player.autoplay=!0}),n.stateHandler.set("click",function(){n.player.loop=!1,n.player.autoplay=!1,n.container.addEventListener("click",q(n,Bt))}),n.stateHandler.set("hover",function(){n.player.loop=!1,n.player.autoplay=!1,n.container.addEventListener("mouseenter",q(n,Bt)),n.container.addEventListener("touchstart",q(n,Bt),{passive:!0})}),n.stateHandler.set("hold",m),n.stateHandler.set("pauseHold",m),n.transitionHandler.set("click",function(){n.container.addEventListener("click",q(n,nt))}),n.transitionHandler.set("hover",function(){n.container.addEventListener("mouseenter",q(n,nt)),n.container.addEventListener("touchstart",q(n,nt),{passive:!0})}),n.transitionHandler.set("hold",h),n.transitionHandler.set("pauseHold",h),n.transitionHandler.set("repeat",function(){n.player.loop=!0,n.player.autoplay=!0,n.player.addEventListener("loopComplete",function _(){q(n,Tr).call(n,{handler:_})})}),n.transitionHandler.set("onComplete",function(){n.actions[n.interactionIdx].state==="loop"?n.player.addEventListener("loopComplete",q(n,Yt)):n.player.addEventListener("complete",q(n,Yt))}),n.transitionHandler.set("seek",function(){n.player.stop(),n.player.addEventListener("enterFrame",q(n,di)),n.container.addEventListener("mousemove",q(n,sn)),n.container.addEventListener("touchmove",q(n,Nn),{passive:!1}),n.container.addEventListener("mouseout",q(n,rn))})}}}),Bt.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].forceFlag;h||n.player.isPaused!==!0?h&&q(n,Bi).call(n,!0):q(n,Bi).call(n,!0)}}),_s.set(this,{writable:!0,value:function(){n.clickCounter===0?(n.player.play(),n.clickCounter++):(n.clickCounter++,n.player.setDirection(-1*n.player.playDirection),n.player.play())}}),nt.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].forceFlag,m=n.actions[n.interactionIdx].state,_=n.actions[n.interactionIdx].transition;if(n.mode==="chain"){if(n.actions[n.interactionIdx].count){var d=parseInt(n.actions[n.interactionIdx].count);if(n.clickCounter<d-1)return void(n.clickCounter+=1)}return n.clickCounter=0,!h&&_==="click"&&m==="click"||_==="hover"&&m==="hover"?n.transitionHandler.get("onComplete").call():n.nextInteraction(),n.container.removeEventListener("click",q(n,nt)),void n.container.removeEventListener("mouseenter",q(n,nt))}h||n.player.isPaused!==!0?h&&n.player.goToAndPlay(0,!0):n.player.goToAndPlay(0,!0)}}),sn.set(this,{writable:!0,value:function(h){q(n,hi).call(n,h.clientX,h.clientY)}}),Nn.set(this,{writable:!0,value:function(h){h.cancelable&&h.preventDefault(),q(n,hi).call(n,h.touches[0].clientX,h.touches[0].clientY)}}),rn.set(this,{writable:!0,value:function(){q(n,hi).call(n,-1,-1)}}),Yt.set(this,{writable:!0,value:function(){n.actions[n.interactionIdx].state==="loop"?n.player.removeEventListener("loopComplete",q(n,Yt)):n.player.removeEventListener("complete",q(n,Yt)),n.nextInteraction()}}),Tr.set(this,{writable:!0,value:function(h){var m=h.handler,_=1;n.actions[n.interactionIdx].repeat&&(_=n.actions[n.interactionIdx].repeat),n.playCounter>=_-1?(n.playCounter=0,n.player.removeEventListener("loopComplete",m),n.player.loop=!1,n.player.autoplay=!1,n.nextInteraction()):n.playCounter+=1}}),di.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].frames;h&&n.player.currentFrame>=parseInt(h[1])-1&&(n.player.removeEventListener("enterFrame",q(n,di)),n.container.removeEventListener("mousemove",q(n,sn)),n.container.removeEventListener("mouseout",q(n,rn)),setTimeout(n.nextInteraction,0))}}),ui.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].frames;(h&&n.player.currentFrame>=h[1]||n.player.currentFrame>=n.player.totalFrames-1)&&(n.player.removeEventListener("enterFrame",q(n,ui)),n.container.removeEventListener("mouseenter",q(n,pt)),n.container.removeEventListener("mouseleave",q(n,mt)),n.container.removeEventListener("touchstart",q(n,pt),{passive:!0}),n.container.removeEventListener("touchend",q(n,mt),{passive:!0}),n.player.pause(),n.holdStatus=!1,n.nextInteraction()),n.player.playDirection===-1&&h&&n.player.currentFrame<h[0]&&n.player.pause()}}),pt.set(this,{writable:!0,value:function(){n.player.playDirection!==-1&&n.holdStatus!==null&&n.holdStatus||(n.player.setDirection(1),n.player.play(),n.holdStatus=!0)}}),mt.set(this,{writable:!0,value:function(){n.actions[n.interactionIdx].transition==="hold"||n.actions[n.interactionIdx].state==="hold"||n.actions[0].type==="hold"?(n.player.setDirection(-1),n.player.play()):n.actions[n.interactionIdx].transition!=="pauseHold"&&n.actions[n.interactionIdx].state!=="pauseHold"&&n.actions[0].type!=="pauseHold"||n.player.pause(),n.holdStatus=!1}}),vs.set(this,{writable:!0,value:function(){if(n.container.removeEventListener("click",q(n,nt)),n.container.removeEventListener("click",q(n,Bt)),n.container.removeEventListener("mouseenter",q(n,nt)),n.container.removeEventListener("touchstart",q(n,nt)),n.container.removeEventListener("touchmove",q(n,Nn)),n.container.removeEventListener("mouseenter",q(n,Bt)),n.container.removeEventListener("touchstart",q(n,Bt)),n.container.removeEventListener("mouseenter",q(n,pt)),n.container.removeEventListener("touchstart",q(n,pt)),n.container.removeEventListener("mouseleave",q(n,mt)),n.container.removeEventListener("mousemove",q(n,sn)),n.container.removeEventListener("mouseout",q(n,rn)),n.container.removeEventListener("touchend",q(n,mt)),n.player)try{n.player.removeEventListener("loopComplete",q(n,Yt)),n.player.removeEventListener("complete",q(n,Yt)),n.player.removeEventListener("enterFrame",q(n,di)),n.player.removeEventListener("enterFrame",q(n,ui))}catch{}}}),Sr(this,"jumpToInteraction",function(h){q(n,vs).call(n),n.interactionIdx=h,n.interactionIdx<0?n.interactionIdx=0:n.interactionIdx,n.nextInteraction(!1)}),Sr(this,"nextInteraction",function(){var h=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n.oldInterctionIdx=n.interactionIdx,q(n,vs).call(n),n.player.loop=!1;var m=n.actions[n.interactionIdx].jumpTo;m?m>=0&&m<n.actions.length?(n.interactionIdx=m,q(n,Lt).call(n,{ignorePath:!1})):(n.interactionIdx=0,n.player.goToAndStop(0,!0),q(n,Lt).call(n,{ignorePath:!1})):(h&&n.interactionIdx++,n.interactionIdx>=n.actions.length?n.actions[n.actions.length-1].reset?(n.interactionIdx=0,n.player.resetSegments(!0),n.actions[n.interactionIdx].frames?n.player.goToAndStop(n.actions[n.interactionIdx].frames,!0):n.player.goToAndStop(0,!0),q(n,Lt).call(n,{ignorePath:!1})):(n.interactionIdx=n.actions.length-1,q(n,Lt).call(n,{ignorePath:!1})):q(n,Lt).call(n,{ignorePath:!1})),n.container.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{oldIndex:n.oldInterctionIdx,newIndex:n.interactionIdx}}))}),Bi.set(this,{writable:!0,value:function(h){var m=n.actions[n.interactionIdx].frames;if(!m)return n.player.resetSegments(!0),void n.player.goToAndPlay(0,!0);typeof m=="string"?n.player.goToAndPlay(m,h):n.player.playSegments(m,h)}}),Cr.set(this,{writable:!0,value:function(){var h=n.actions[n.interactionIdx].path;if(!h)if(Kn(n.enteredPlayer)==="object"&&n.enteredPlayer.constructor.name==="AnimationItem"){if(h=n.enteredPlayer,n.player===h)return void q(n,Lt).call(n,{ignorePath:!0})}else{var m=(h=n.loadedAnimation).substr(h.lastIndexOf("/")+1);if(m=m.substr(0,m.lastIndexOf(".json")),n.player.fileName===m)return void q(n,Lt).call(n,{ignorePath:!0})}var _=n.container.getBoundingClientRect(),d="width: "+_.width+"px !important; height: "+_.height+"px !important; background: "+n.container.style.background;if(n.container.setAttribute("style",d),Kn(n.enteredPlayer)!=="object"||n.enteredPlayer.constructor.name!=="AnimationItem"){if(typeof n.enteredPlayer=="string"){var c=document.querySelector(n.enteredPlayer);c&&c.nodeName==="LOTTIE-PLAYER"&&(n.attachedListeners||(c.addEventListener("ready",function(){n.container.style.width="",n.container.style.height=""}),c.addEventListener("load",function(){n.player=c.getLottie(),q(n,Lt).call(n,{ignorePath:!0})}),n.attachedListeners=!0),c.load(h))}else n.enteredPlayer instanceof HTMLElement&&n.enteredPlayer.nodeName==="LOTTIE-PLAYER"&&(n.attachedListeners||(n.enteredPlayer.addEventListener("ready",function(){n.container.style.width="",n.container.style.height=""}),n.enteredPlayer.addEventListener("load",function(){n.player=n.enteredPlayer.getLottie(),q(n,Lt).call(n,{ignorePath:!0})}),n.attachedListeners=!0),n.enteredPlayer.load(h));if(!n.player)throw new Error("".concat(ki," Specified player is invalid."),n.enteredPlayer)}else{if(!window.lottie)throw new Error("".concat(ki," A Lottie player is required."));n.stop(),n.container.innerHTML="",Kn(h)==="object"&&h.constructor.name==="AnimationItem"?n.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,animationData:h.animationData,container:n.container}):n.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,path:h,container:n.container}),n.player.addEventListener("DOMLoaded",function(){n.container.style.width="",n.container.style.height="",q(n,Lt).call(n,{ignorePath:!0})})}n.clickCounter=0,n.playCounter=0}}),Lt.set(this,{writable:!0,value:function(h){var m=h.ignorePath,_=n.actions[n.interactionIdx].frames,d=n.actions[n.interactionIdx].state,c=n.actions[n.interactionIdx].transition,g=n.actions[n.interactionIdx].path,w=n.stateHandler.get(d),x=n.transitionHandler.get(c),M=n.actions[n.interactionIdx].speed?n.actions[n.interactionIdx].speed:1,E=n.actions[n.interactionIdx].delay?n.actions[n.interactionIdx].delay:0;m||!(g||n.actions[n.actions.length-1].reset&&n.interactionIdx===0)?setTimeout(function(){_&&(n.player.autoplay=!1,n.player.resetSegments(!0),n.player.goToAndStop(_[0],!0)),w?w.call():d==="none"&&(n.player.loop=!1,n.player.autoplay=!1),x&&x.call(),n.player.autoplay&&(n.player.resetSegments(!0),q(n,Bi).call(n,!0)),n.player.setSpeed(M)},E):q(n,Cr).call(n)}}),hi.set(this,{writable:!0,value:function(h,m){if(h!==-1&&m!==-1){var _=n.getContainerCursorPosition(h,m);h=_.x,m=_.y}var d=n.actions.find(function(w){var x=w.position;if(x){if(Array.isArray(x.x)&&Array.isArray(x.y))return h>=x.x[0]&&h<=x.x[1]&&m>=x.y[0]&&m<=x.y[1];if(!Number.isNaN(x.x)&&!Number.isNaN(x.y))return h===x.x&&m===x.y}return!1});if(d)if(d.type==="seek"||d.transition==="seek"){var c=(h-d.position.x[0])/(d.position.x[1]-d.position.x[0]),g=(m-d.position.y[0])/(d.position.y[1]-d.position.y[0]);n.player.playSegments(d.frames,!0),d.position.y[0]<0&&d.position.y[1]>1?n.player.goToAndStop(Math.floor(c*n.player.totalFrames),!0):n.player.goToAndStop(Math.ceil((c+g)/2*n.player.totalFrames),!0)}else d.type==="loop"?n.player.playSegments(d.frames,!0):d.type==="play"?(n.player.isPaused===!0&&n.player.resetSegments(),n.player.playSegments(d.frames)):d.type==="stop"&&(n.player.resetSegments(!0),n.player.goToAndStop(d.frames[0],!0))}}),xs.set(this,{writable:!0,value:function(){var h=n.getContainerVisibility(),m=n.actions.find(function(c){var g=c.visibility;return h>=g[0]&&h<=g[1]});if(m)if(m.type==="seek"){var _=m.frames[0],d=m.frames.length==2?m.frames[1]:n.player.totalFrames-1;n.assignedSegment!==null&&(n.player.resetSegments(!0),n.assignedSegment=null),n.player.goToAndStop(_+Math.round((h-m.visibility[0])/(m.visibility[1]-m.visibility[0])*(d-_)),!0)}else if(m.type==="loop")n.player.loop=!0,(n.assignedSegment===null||n.assignedSegment!==m.frames||n.player.isPaused===!0)&&(n.player.playSegments(m.frames,!0),n.assignedSegment=m.frames);else if(m.type==="play"||m.type==="playOnce"){if(m.type==="playOnce"&&!n.scrolledAndPlayed)return n.scrolledAndPlayed=!0,n.player.resetSegments(!0),void(m.frames?n.player.playSegments(m.frames,!0):n.player.play());m.type==="play"&&n.player.isPaused&&(n.player.resetSegments(!0),m.frames?n.player.playSegments(m.frames,!0):n.player.play())}else m.type==="stop"&&n.player.goToAndStop(m.frames[0],!0)}}),this.enteredPlayer=u,Kn(u)!=="object"||u.constructor.name!=="AnimationItem"){if(typeof u=="string"){var f=document.querySelector(u);f&&f.nodeName==="LOTTIE-PLAYER"&&(u=f.getLottie())}else u instanceof HTMLElement&&u.nodeName==="LOTTIE-PLAYER"&&(u=u.getLottie());if(!u){var p=ki+"Specified player:"+u+" is invalid.";throw new Error(p)}}typeof o=="string"&&(o=document.querySelector(o)),o||(o=u.wrapper),this.player=u,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=o,this.mode=a,this.actions=r,this.options=l,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.oldInterctionIdx=0,this.clickCounter=0,this.playCounter=0,this.stateHandler=new Map,this.transitionHandler=new Map}var e,t;return e=s,(t=[{key:"getContainerVisibility",value:function(){var n=this.container.getBoundingClientRect(),i=n.top,r=n.height;return(window.innerHeight-i)/(window.innerHeight+r)}},{key:"getContainerCursorPosition",value:function(n,i){var r=this.container.getBoundingClientRect(),o=r.top;return{x:(n-r.left)/r.width,y:(i-o)/r.height}}},{key:"initScrollMode",value:function(){this.player.stop(),window.addEventListener("scroll",q(this,xs),!0)}},{key:"initCursorMode",value:function(){this.actions&&this.actions.length===1?this.actions[0].type==="click"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",q(this,nt))):this.actions[0].type==="hover"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("mouseenter",q(this,nt)),this.container.addEventListener("touchstart",q(this,nt),{passive:!0})):this.actions[0].type==="toggle"?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",q(this,_s))):this.actions[0].type==="hold"||this.actions[0].type==="pauseHold"?(this.container.addEventListener("mouseenter",q(this,pt)),this.container.addEventListener("mouseleave",q(this,mt)),this.container.addEventListener("touchstart",q(this,pt),{passive:!0}),this.container.addEventListener("touchend",q(this,mt),{passive:!0})):this.actions[0].type==="seek"&&(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",q(this,sn)),this.container.addEventListener("touchmove",q(this,Nn),{passive:!1}),this.container.addEventListener("mouseout",q(this,rn))):(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",q(this,sn)),this.container.addEventListener("mouseleave",q(this,rn)),q(this,hi).call(this,-1,-1))}},{key:"initChainMode",value:function(){q(this,Er).call(this),this.player.loop=!1,this.player.stop(),q(this,Lt).call(this,{ignorePath:!1})}},{key:"start",value:function(){var n=this;this.mode==="scroll"?this.player.isLoaded?this.initScrollMode():this.player.addEventListener("DOMLoaded",function(){n.initScrollMode()}):this.mode==="cursor"?this.player.isLoaded?this.initCursorMode():this.player.addEventListener("DOMLoaded",function(){n.initCursorMode()}):this.mode==="chain"&&(this.player.isLoaded?this.initChainMode():this.player.addEventListener("DOMLoaded",function(){n.initChainMode()}))}},{key:"redefineOptions",value:function(n){var i=n.actions,r=n.container,o=n.mode,a=n.player,u=wr(n,["actions","container","mode","player"]);if(this.stop(),this.enteredPlayer=a,Kn(a)!=="object"||a.constructor.name!=="AnimationItem"){if(typeof a=="string"){var l=document.querySelector(a);l&&l.nodeName==="LOTTIE-PLAYER"&&(a=l.getLottie())}else a instanceof HTMLElement&&a.nodeName==="LOTTIE-PLAYER"&&(a=a.getLottie());if(!a)throw new Error(ki+"Specified player:"+a+" is invalid.",a)}typeof r=="string"&&(r=document.querySelector(r)),r||(r=a.wrapper),this.player=a,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=r,this.mode=o,this.actions=i,this.options=u,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.clickCounter=0,this.playCounter=0,this.holdStatus=null,this.stateHandler=new Map,this.transitionHandler=new Map,this.start()}},{key:"stop",value:function(){if(this.mode==="scroll"&&window.removeEventListener("scroll",q(this,xs),!0),this.mode==="cursor"&&(this.container.removeEventListener("click",q(this,nt)),this.container.removeEventListener("click",q(this,_s)),this.container.removeEventListener("mouseenter",q(this,nt)),this.container.removeEventListener("touchstart",q(this,nt)),this.container.removeEventListener("touchmove",q(this,Nn)),this.container.removeEventListener("mousemove",q(this,sn)),this.container.removeEventListener("mouseleave",q(this,rn)),this.container.removeEventListener("touchstart",q(this,pt)),this.container.removeEventListener("touchend",q(this,mt))),this.mode==="chain"&&(this.container.removeEventListener("click",q(this,nt)),this.container.removeEventListener("click",q(this,Bt)),this.container.removeEventListener("mouseenter",q(this,nt)),this.container.removeEventListener("touchstart",q(this,nt)),this.container.removeEventListener("touchmove",q(this,Nn)),this.container.removeEventListener("mouseenter",q(this,Bt)),this.container.removeEventListener("touchstart",q(this,Bt)),this.container.removeEventListener("mouseenter",q(this,pt)),this.container.removeEventListener("touchstart",q(this,pt)),this.container.removeEventListener("mouseleave",q(this,mt)),this.container.removeEventListener("mousemove",q(this,sn)),this.container.removeEventListener("mouseout",q(this,rn)),this.container.removeEventListener("touchend",q(this,mt)),this.player))try{this.player.removeEventListener("loopComplete",q(this,Yt)),this.player.removeEventListener("complete",q(this,Yt)),this.player.removeEventListener("enterFrame",q(this,di)),this.player.removeEventListener("enterFrame",q(this,ui))}catch{}this.player&&(this.player.destroy(),this.player=null)}}])&&Wl(e.prototype,t),s}(),Er=new WeakMap,Bt=new WeakMap,_s=new WeakMap,nt=new WeakMap,sn=new WeakMap,Nn=new WeakMap,rn=new WeakMap,Yt=new WeakMap,Tr=new WeakMap,di=new WeakMap,ui=new WeakMap,pt=new WeakMap,mt=new WeakMap,vs=new WeakMap,Bi=new WeakMap,Cr=new WeakMap,Lt=new WeakMap,hi=new WeakMap,xs=new WeakMap,$l=function(s){var e=new Xl(s);return e.start(),e};const jl={name:"App",mounted(){this.$refs.lottie.addEventListener("load",function(){$l({player:"#firstLottie",mode:"chain",actions:[{state:"autoplay",transition:"onComplete"},{state:"autoplay",transition:"onComplete",path:"https://assets7.lottiefiles.com/private_files/lf30_x2lzmtdl.json"},{state:"autoplay",transition:"onComplete",path:"https://assets3.lottiefiles.com/private_files/lf30_9kdbftpx.json",reset:!0}]})})}};function Yl(s,e,t,n,i,r){const o=Vt("lottie-player");return un(),Eo(o,{id:"firstLottie",ref:"lottie",autoplay:"",src:"https://assets9.lottiefiles.com/packages/lf20_57TxAX.json",style:{height:"500px"}},null,512)}const Zl=Li(jl,[["render",Yl]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="148",Jl=0,Ar=1,Kl=2,qa=1,Ql=2,Si=3,Pn=0,Rt=1,dn=2,Gi=3,hn=0,ti=1,Lr=2,Pr=3,Dr=4,ec=5,Qn=100,tc=101,nc=102,Rr=103,Ir=104,ic=200,sc=201,rc=202,ac=203,Xa=204,$a=205,oc=206,lc=207,cc=208,dc=209,uc=210,hc=0,fc=1,pc=2,tr=3,mc=4,gc=5,_c=6,vc=7,hr=0,xc=1,yc=2,nn=0,bc=1,Mc=2,Sc=3,wc=4,Ec=5,ja=300,ii=301,si=302,nr=303,ir=304,us=306,sr=1e3,Ot=1001,rr=1002,ft=1003,Fr=1004,ys=1005,Dt=1006,Tc=1007,Ei=1008,Dn=1009,Cc=1010,Ac=1011,Ya=1012,Lc=1013,Tn=1014,Cn=1015,Ti=1016,Pc=1017,Dc=1018,ni=1020,Rc=1021,Ic=1022,kt=1023,Fc=1024,zc=1025,An=1026,ri=1027,Nc=1028,Uc=1029,Oc=1030,kc=1031,Bc=1033,bs=33776,Ms=33777,Ss=33778,ws=33779,zr=35840,Nr=35841,Ur=35842,Or=35843,Gc=36196,kr=37492,Br=37496,Gr=37808,Vr=37809,Hr=37810,Wr=37811,qr=37812,Xr=37813,$r=37814,jr=37815,Yr=37816,Zr=37817,Jr=37818,Kr=37819,Qr=37820,ea=37821,ta=36492,Rn=3e3,ke=3001,Vc=3200,Hc=3201,Za=0,Wc=1,Gt="srgb",Ci="srgb-linear",Es=7680,qc=519,na=35044,ia="300 es",ar=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,sa=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[s&255]+at[s>>8&255]+at[s>>16&255]+at[s>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function Xc(s,e){return(s%e+e)%e}function Cs(s,e,t){return(1-t)*s+t*e}function ra(s){return(s&s-1)===0&&s!==0}function or(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,u,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=r,f[5]=u,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],f=n[4],p=n[7],h=n[2],m=n[5],_=n[8],d=i[0],c=i[3],g=i[6],w=i[1],x=i[4],M=i[7],E=i[2],A=i[5],R=i[8];return r[0]=o*d+a*w+u*E,r[3]=o*c+a*x+u*A,r[6]=o*g+a*M+u*R,r[1]=l*d+f*w+p*E,r[4]=l*c+f*x+p*A,r[7]=l*g+f*M+p*R,r[2]=h*d+m*w+_*E,r[5]=h*c+m*x+_*A,r[8]=h*g+m*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*r*f+n*a*u+i*r*l-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8],p=f*o-a*l,h=a*u-f*r,m=l*r-o*u,_=t*p+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=p*d,e[1]=(i*l-f*n)*d,e[2]=(a*n-i*o)*d,e[3]=h*d,e[4]=(f*t-i*u)*d,e[5]=(i*r-a*t)*d,e[6]=m*d,e[7]=(n*u-l*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const u=Math.cos(r),l=Math.sin(r);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-i*l,i*u,-i*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Tt;function Ja(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ai(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ls={[Gt]:{[Ci]:Ln},[Ci]:{[Gt]:cs}},ut={legacyMode:!0,get workingColorSpace(){return Ci},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ls[e]&&Ls[e][t]!==void 0){const n=Ls[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},je={r:0,g:0,b:0},zt={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Ps(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Wi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Xc(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ps(o,r,e+1/3),this.g=Ps(o,r,e),this.b=Ps(o,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ut.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ut.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(r[1])/360,l=parseFloat(r[2])/100,f=parseFloat(r[3])/100;return n(r[4]),this.setHSL(u,l,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ut.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Gt){const n=Ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ut.fromWorkingColorSpace(Wi(this,je),e),St(je.r*255,0,255)<<16^St(je.g*255,0,255)<<8^St(je.b*255,0,255)<<0}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Wi(this,je),t);const n=je.r,i=je.g,r=je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let u,l;const f=(a+o)/2;if(a===o)u=0,l=0;else{const p=o-a;switch(l=f<=.5?p/(o+a):p/(2-o-a),o){case n:u=(i-r)/p+(i<r?6:0);break;case i:u=(r-n)/p+2;break;case r:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=l,e.l=f,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Wi(this,je),t),e.r=je.r,e.g=je.g,e.b=je.b,e}getStyle(e=Gt){return ut.fromWorkingColorSpace(Wi(this,je),e),e!==Gt?`color(${e} ${je.r} ${je.g} ${je.b})`:`rgb(${je.r*255|0},${je.g*255|0},${je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Hi);const n=Cs(zt.h,Hi.h,t),i=Cs(zt.s,Hi.s,t),r=Cs(zt.l,Hi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=Ka;let Un;class Qa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Un===void 0&&(Un=Ai("canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Un}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ai("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class eo{constructor(e=null){this.isSource=!0,this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ds(i[o].image)):r.push(Ds(i[o]))}else r=Ds(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class gt extends oi{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Ot,i=Ot,r=Dt,o=Ei,a=kt,u=Dn,l=gt.DEFAULT_ANISOTROPY,f=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ri(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=ja;gt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,l=u[0],f=u[4],p=u[8],h=u[1],m=u[5],_=u[9],d=u[2],c=u[6],g=u[10];if(Math.abs(f-h)<.01&&Math.abs(p-d)<.01&&Math.abs(_-c)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+d)<.1&&Math.abs(_+c)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(m+1)/2,E=(g+1)/2,A=(f+h)/4,R=(p+d)/4,v=(_+c)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=R/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=v/r),this.set(n,i,r,t),this}let w=Math.sqrt((c-_)*(c-_)+(p-d)*(p-d)+(h-f)*(h-f));return Math.abs(w)<.001&&(w=1),this.x=(c-_)/w,this.y=(p-d)/w,this.z=(h-f)/w,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let u=n[i+0],l=n[i+1],f=n[i+2],p=n[i+3];const h=r[o+0],m=r[o+1],_=r[o+2],d=r[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=f,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(p!==d||u!==h||l!==m||f!==_){let c=1-a;const g=u*h+l*m+f*_+p*d,w=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,g*w);c=Math.sin(c*A)/E,a=Math.sin(a*A)/E}const M=a*w;if(u=u*c+h*M,l=l*c+m*M,f=f*c+_*M,p=p*c+d*M,c===1-a){const E=1/Math.sqrt(u*u+l*l+f*f+p*p);u*=E,l*=E,f*=E,p*=E}}e[t]=u,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],u=n[i+1],l=n[i+2],f=n[i+3],p=r[o],h=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+f*p+u*m-l*h,e[t+1]=u*_+f*h+l*p-a*m,e[t+2]=l*_+f*m+a*h-u*p,e[t+3]=f*_-a*p-u*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),f=a(i/2),p=a(r/2),h=u(n/2),m=u(i/2),_=u(r/2);switch(o){case"XYZ":this._x=h*f*p+l*m*_,this._y=l*m*p-h*f*_,this._z=l*f*_+h*m*p,this._w=l*f*p-h*m*_;break;case"YXZ":this._x=h*f*p+l*m*_,this._y=l*m*p-h*f*_,this._z=l*f*_-h*m*p,this._w=l*f*p+h*m*_;break;case"ZXY":this._x=h*f*p-l*m*_,this._y=l*m*p+h*f*_,this._z=l*f*_+h*m*p,this._w=l*f*p-h*m*_;break;case"ZYX":this._x=h*f*p-l*m*_,this._y=l*m*p+h*f*_,this._z=l*f*_-h*m*p,this._w=l*f*p+h*m*_;break;case"YZX":this._x=h*f*p+l*m*_,this._y=l*m*p+h*f*_,this._z=l*f*_-h*m*p,this._w=l*f*p-h*m*_;break;case"XZY":this._x=h*f*p-l*m*_,this._y=l*m*p-h*f*_,this._z=l*f*_+h*m*p,this._w=l*f*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],u=t[9],l=t[2],f=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-u)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-u)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(u+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(u+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,u=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+i*l-r*u,this._y=i*f+o*u+r*a-n*l,this._z=r*f+o*l+n*u-i*a,this._w=o*f-n*a-i*u-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),f=Math.atan2(l,a),p=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=i*p+this._y*h,this._z=r*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,u=e.w,l=u*t+o*i-a*n,f=u*n+a*t-r*i,p=u*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=l*u+h*-r+f*-a-p*-o,this.y=f*u+h*-o+p*-r-l*-a,this.z=p*u+h*-a+l*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-r*a,this.y=r*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rs.copy(this).projectOnVector(e),this.sub(Rs)}reflect(e){return this.sub(Rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new F,aa=new Ii;class Fi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.length;u<l;u+=3){const f=e[u],p=e[u+1],h=e[u+2];f<t&&(t=f),p<n&&(n=p),h<i&&(i=h),f>r&&(r=f),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.count;u<l;u++){const f=e.getX(u),p=e.getY(u),h=e.getZ(u);f<t&&(t=f),p<n&&(n=p),h<i&&(i=h),f>r&&(r=f),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),qi.subVectors(this.max,fi),On.subVectors(e.a,fi),kn.subVectors(e.b,fi),Bn.subVectors(e.c,fi),an.subVectors(kn,On),on.subVectors(Bn,kn),xn.subVectors(On,Bn);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-xn.z,xn.y,an.z,0,-an.x,on.z,0,-on.x,xn.z,0,-xn.x,-an.y,an.x,0,-on.y,on.x,0,-xn.y,xn.x,0];return!Fs(t,On,kn,Bn,qi)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,On,kn,Bn,qi))?!1:(Xi.crossVectors(an,on),t=[Xi.x,Xi.y,Xi.z],Fs(t,On,kn,Bn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new F,new F,new F,new F,new F,new F,new F,new F],vn=new F,Is=new Fi,On=new F,kn=new F,Bn=new F,an=new F,on=new F,xn=new F,fi=new F,qi=new F,Xi=new F,yn=new F;function Fs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yn.fromArray(s,r);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),u=e.dot(yn),l=t.dot(yn),f=n.dot(yn);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>a)return!1}return!0}const Yc=new Fi,pi=new F,zs=new F;class fr{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(zs)),this.expandByPoint(pi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new F,Ns=new F,$i=new F,ln=new F,Us=new F,ji=new F,Os=new F;class Zc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ns.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Ns);const r=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=ln.dot(this.direction),u=-ln.dot($i),l=ln.lengthSq(),f=Math.abs(1-o*o);let p,h,m,_;if(f>0)if(p=o*u-a,h=o*a-u,_=r*f,p>=0)if(h>=-_)if(h<=_){const d=1/f;p*=d,h*=d,m=p*(p+o*h+2*a)+h*(o*p+h+2*u)+l}else h=r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*u)+l;else h=-r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*u)+l;else h<=-_?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-u),r),m=-p*p+h*(h+2*u)+l):h<=_?(p=0,h=Math.min(Math.max(-r,-u),r),m=h*(h+2*u)+l):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-u),r),m=-p*p+h*(h+2*u)+l);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*u)+l;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),i&&i.copy($i).multiplyScalar(h).add(Ns),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,u;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-h.z)*p,u=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,u=(e.min.z-h.z)*p),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,r){Us.subVectors(t,e),ji.subVectors(n,e),Os.crossVectors(Us,ji);let o=this.direction.dot(Os),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const u=a*this.direction.dot(ji.crossVectors(ln,ji));if(u<0)return null;const l=a*this.direction.dot(Us.cross(ln));if(l<0||u+l>o)return null;const f=-a*ln.dot(Os);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,u,l,f,p,h,m,_,d,c){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=u,g[2]=l,g[6]=f,g[10]=p,g[14]=h,g[3]=m,g[7]=_,g[11]=d,g[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),r=1/Gn.setFromMatrixColumn(e,1).length(),o=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),l=Math.sin(i),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*f,m=o*p,_=a*f,d=a*p;t[0]=u*f,t[4]=-u*p,t[8]=l,t[1]=m+_*l,t[5]=h-d*l,t[9]=-a*u,t[2]=d-h*l,t[6]=_+m*l,t[10]=o*u}else if(e.order==="YXZ"){const h=u*f,m=u*p,_=l*f,d=l*p;t[0]=h+d*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=m*a-_,t[6]=d+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*f,m=u*p,_=l*f,d=l*p;t[0]=h-d*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*f,t[9]=d-h*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*f,m=o*p,_=a*f,d=a*p;t[0]=u*f,t[4]=_*l-m,t[8]=h*l+d,t[1]=u*p,t[5]=d*l+h,t[9]=m*l-_,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,m=o*l,_=a*u,d=a*l;t[0]=u*f,t[4]=d-h*p,t[8]=_*p+m,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*p+_,t[10]=h-d*p}else if(e.order==="XZY"){const h=o*u,m=o*l,_=a*u,d=a*l;t[0]=u*f,t[4]=-p,t[8]=l*f,t[1]=h*p+d,t[5]=o*f,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*f,t[10]=d*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jc,e,Kc)}lookAt(e,t,n){const i=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),cn.crossVectors(n,bt),cn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),cn.crossVectors(n,bt)),cn.normalize(),Yi.crossVectors(bt,cn),i[0]=cn.x,i[4]=Yi.x,i[8]=bt.x,i[1]=cn.y,i[5]=Yi.y,i[9]=bt.y,i[2]=cn.z,i[6]=Yi.z,i[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],f=n[1],p=n[5],h=n[9],m=n[13],_=n[2],d=n[6],c=n[10],g=n[14],w=n[3],x=n[7],M=n[11],E=n[15],A=i[0],R=i[4],v=i[8],C=i[12],P=i[1],B=i[5],J=i[9],N=i[13],I=i[2],U=i[6],Y=i[10],Q=i[14],j=i[3],te=i[7],Z=i[11],H=i[15];return r[0]=o*A+a*P+u*I+l*j,r[4]=o*R+a*B+u*U+l*te,r[8]=o*v+a*J+u*Y+l*Z,r[12]=o*C+a*N+u*Q+l*H,r[1]=f*A+p*P+h*I+m*j,r[5]=f*R+p*B+h*U+m*te,r[9]=f*v+p*J+h*Y+m*Z,r[13]=f*C+p*N+h*Q+m*H,r[2]=_*A+d*P+c*I+g*j,r[6]=_*R+d*B+c*U+g*te,r[10]=_*v+d*J+c*Y+g*Z,r[14]=_*C+d*N+c*Q+g*H,r[3]=w*A+x*P+M*I+E*j,r[7]=w*R+x*B+M*U+E*te,r[11]=w*v+x*J+M*Y+E*Z,r[15]=w*C+x*N+M*Q+E*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],u=e[9],l=e[13],f=e[2],p=e[6],h=e[10],m=e[14],_=e[3],d=e[7],c=e[11],g=e[15];return _*(+r*u*p-i*l*p-r*a*h+n*l*h+i*a*m-n*u*m)+d*(+t*u*m-t*l*h+r*o*h-i*o*m+i*l*f-r*u*f)+c*(+t*l*p-t*a*m-r*o*p+n*o*m+r*a*f-n*l*f)+g*(-i*a*f-t*u*p+t*a*h+i*o*p-n*o*h+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],u=e[6],l=e[7],f=e[8],p=e[9],h=e[10],m=e[11],_=e[12],d=e[13],c=e[14],g=e[15],w=p*c*l-d*h*l+d*u*m-a*c*m-p*u*g+a*h*g,x=_*h*l-f*c*l-_*u*m+o*c*m+f*u*g-o*h*g,M=f*d*l-_*p*l+_*a*m-o*d*m-f*a*g+o*p*g,E=_*p*u-f*d*u-_*a*h+o*d*h+f*a*c-o*p*c,A=t*w+n*x+i*M+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(d*h*r-p*c*r-d*i*m+n*c*m+p*i*g-n*h*g)*R,e[2]=(a*c*r-d*u*r+d*i*l-n*c*l-a*i*g+n*u*g)*R,e[3]=(p*u*r-a*h*r-p*i*l+n*h*l+a*i*m-n*u*m)*R,e[4]=x*R,e[5]=(f*c*r-_*h*r+_*i*m-t*c*m-f*i*g+t*h*g)*R,e[6]=(_*u*r-o*c*r-_*i*l+t*c*l+o*i*g-t*u*g)*R,e[7]=(o*h*r-f*u*r+f*i*l-t*h*l-o*i*m+t*u*m)*R,e[8]=M*R,e[9]=(_*p*r-f*d*r-_*n*m+t*d*m+f*n*g-t*p*g)*R,e[10]=(o*d*r-_*a*r+_*n*l-t*d*l-o*n*g+t*a*g)*R,e[11]=(f*a*r-o*p*r-f*n*l+t*p*l+o*n*m-t*a*m)*R,e[12]=E*R,e[13]=(f*d*i-_*p*i+_*n*h-t*d*h-f*n*c+t*p*c)*R,e[14]=(_*a*i-o*d*i-_*n*u+t*d*u+o*n*c-t*a*c)*R,e[15]=(o*p*i-f*a*i+f*n*u-t*p*u-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,u=e.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-i*u,l*u+i*a,0,l*a+i*u,f*a+n,f*u-i*o,0,l*u-i*a,f*u+i*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,l=r+r,f=o+o,p=a+a,h=r*l,m=r*f,_=r*p,d=o*f,c=o*p,g=a*p,w=u*l,x=u*f,M=u*p,E=n.x,A=n.y,R=n.z;return i[0]=(1-(d+g))*E,i[1]=(m+M)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(h+g))*A,i[6]=(c+w)*A,i[7]=0,i[8]=(_+x)*R,i[9]=(c-w)*R,i[10]=(1-(h+d))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gn.set(i[0],i[1],i[2]).length();const o=Gn.set(i[4],i[5],i[6]).length(),a=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const l=1/r,f=1/o,p=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=f,Nt.elements[5]*=f,Nt.elements[6]*=f,Nt.elements[8]*=p,Nt.elements[9]*=p,Nt.elements[10]*=p,t.setFromRotationMatrix(Nt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,u=2*r/(t-e),l=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=u,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,u=1/(t-e),l=1/(n-i),f=1/(o-r),p=(t+e)*u,h=(n+i)*l,m=(o+r)*f;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gn=new F,Nt=new Xe,Jc=new F(0,0,0),Kc=new F(1,1,1),cn=new F,Yi=new F,bt=new F,oa=new Xe,la=new Ii;class zi{constructor(e=0,t=0,n=0,i=zi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],u=i[1],l=i[5],f=i[9],p=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}zi.DefaultOrder="XYZ";zi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qc=0;const ca=new F,Vn=new Ii,Kt=new Xe,Zi=new F,mi=new F,ed=new F,td=new Ii,da=new F(1,0,0),ua=new F(0,1,0),ha=new F(0,0,1),nd={type:"added"},fa={type:"removed"};class _t extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DefaultUp.clone();const e=new F,t=new zi,n=new Ii,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Tt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=_t.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DefaultMatrixWorldAutoUpdate,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(ua,e)}rotateZ(e){return this.rotateOnAxis(ha,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(ua,e)}translateZ(e){return this.translateOnAxis(ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(mi,Zi,this.up):Kt.lookAt(Zi,mi,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){const p=u[l];r(e.shapes,p)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(r(e.materials,this.material[u]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(r(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const u=[];for(const l in a){const f=a[l];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DefaultUp=new F(0,1,0);_t.DefaultMatrixAutoUpdate=!0;_t.DefaultMatrixWorldAutoUpdate=!0;const Ut=new F,Qt=new F,ks=new F,en=new F,Hn=new F,Wn=new F,pa=new F,Bs=new F,Gs=new F,Vs=new F;class tn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ut.subVectors(i,t),Qt.subVectors(n,t),ks.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(Qt),u=Ut.dot(ks),l=Qt.dot(Qt),f=Qt.dot(ks),p=o*l-a*a;if(p===0)return r.set(-2,-1,-1);const h=1/p,m=(l*u-a*f)*h,_=(o*f-a*u)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,r,o,a,u){return this.getBarycoord(e,t,n,i,en),u.set(0,0),u.addScaledVector(r,en.x),u.addScaledVector(o,en.y),u.addScaledVector(a,en.z),u}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),Qt.subVectors(e,t),Ut.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ut.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return tn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Hn.subVectors(i,n),Wn.subVectors(r,n),Bs.subVectors(e,n);const u=Hn.dot(Bs),l=Wn.dot(Bs);if(u<=0&&l<=0)return t.copy(n);Gs.subVectors(e,i);const f=Hn.dot(Gs),p=Wn.dot(Gs);if(f>=0&&p<=f)return t.copy(i);const h=u*p-f*l;if(h<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(Hn,o);Vs.subVectors(e,r);const m=Hn.dot(Vs),_=Wn.dot(Vs);if(_>=0&&m<=_)return t.copy(r);const d=m*l-u*_;if(d<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Wn,a);const c=f*_-m*p;if(c<=0&&p-f>=0&&m-_>=0)return pa.subVectors(r,i),a=(p-f)/(p-f+(m-_)),t.copy(i).addScaledVector(pa,a);const g=1/(c+d+h);return o=d*g,a=h*g,t.copy(n).addScaledVector(Hn,o).addScaledVector(Wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let id=0;class Ni extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ti,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xa,this.blendDst=$a,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const u=r[a];delete u.metadata,o.push(u)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class io extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new F,Ji=new ze;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class so extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ro extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const Pt=new Xe,Hs=new _t,qn=new F,Mt=new Fi,gi=new Fi,it=new F;class fn extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ja(e)?ro:so)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Mt.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gi.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(Mt.min,gi.min),Mt.expandByPoint(it),it.addVectors(Mt.max,gi.max),Mt.expandByPoint(it)):(Mt.expandByPoint(gi.min),Mt.expandByPoint(gi.max))}Mt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)it.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(it));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],u=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)it.fromBufferAttribute(a,l),u&&(qn.fromBufferAttribute(e,l),it.add(qn)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,l=[],f=[];for(let P=0;P<a;P++)l[P]=new F,f[P]=new F;const p=new F,h=new F,m=new F,_=new ze,d=new ze,c=new ze,g=new F,w=new F;function x(P,B,J){p.fromArray(i,P*3),h.fromArray(i,B*3),m.fromArray(i,J*3),_.fromArray(o,P*2),d.fromArray(o,B*2),c.fromArray(o,J*2),h.sub(p),m.sub(p),d.sub(_),c.sub(_);const N=1/(d.x*c.y-c.x*d.y);!isFinite(N)||(g.copy(h).multiplyScalar(c.y).addScaledVector(m,-d.y).multiplyScalar(N),w.copy(m).multiplyScalar(d.x).addScaledVector(h,-c.x).multiplyScalar(N),l[P].add(g),l[B].add(g),l[J].add(g),f[P].add(w),f[B].add(w),f[J].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let P=0,B=M.length;P<B;++P){const J=M[P],N=J.start,I=J.count;for(let U=N,Y=N+I;U<Y;U+=3)x(n[U+0],n[U+1],n[U+2])}const E=new F,A=new F,R=new F,v=new F;function C(P){R.fromArray(r,P*3),v.copy(R);const B=l[P];E.copy(B),E.sub(R.multiplyScalar(R.dot(B))).normalize(),A.crossVectors(v,B);const N=A.dot(f[P])<0?-1:1;u[P*4]=E.x,u[P*4+1]=E.y,u[P*4+2]=E.z,u[P*4+3]=N}for(let P=0,B=M.length;P<B;++P){const J=M[P],N=J.start,I=J.count;for(let U=N,Y=N+I;U<Y;U+=3)C(n[U+0]),C(n[U+1]),C(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new F,r=new F,o=new F,a=new F,u=new F,l=new F,f=new F,p=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),d=e.getX(h+1),c=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,c),f.subVectors(o,r),p.subVectors(i,r),f.cross(p),a.fromBufferAttribute(n,_),u.fromBufferAttribute(n,d),l.fromBufferAttribute(n,c),a.add(f),u.add(f),l.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(d,u.x,u.y,u.z),n.setXYZ(c,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,r),p.subVectors(i,r),f.cross(p),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,u){const l=a.array,f=a.itemSize,p=a.normalized,h=new l.constructor(u.length*f);let m=0,_=0;for(let d=0,c=u.length;d<c;d++){a.isInterleavedBufferAttribute?m=u[d]*a.data.stride+a.offset:m=u[d]*f;for(let g=0;g<f;g++)h[_++]=l[m++]}return new Wt(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],l=e(u,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const u=[],l=r[a];for(let f=0,p=l.length;f<p;f++){const h=l[f],m=e(h,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],f=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(i[u]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],p=r[l];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new Xe,Xn=new Zc,Ws=new fr,_i=new F,vi=new F,xi=new F,qs=new F,Ki=new F,Qi=new ze,es=new ze,ts=new ze,Xs=new F,ns=new F;class Et extends _t{constructor(e=new fn,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ki.set(0,0,0);for(let u=0,l=r.length;u<l;u++){const f=a[u],p=r[u];f!==0&&(qs.fromBufferAttribute(p,e),o?Ki.addScaledVector(qs,f):Ki.addScaledVector(qs.sub(t),f))}t.add(Ki)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),e.ray.intersectsSphere(Ws)===!1)||(ma.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(ma),n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,l=n.attributes.uv,f=n.attributes.uv2,p=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=p.length;m<_;m++){const d=p[m],c=i[d.materialIndex],g=Math.max(d.start,h.start),w=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let x=g,M=w;x<M;x+=3){const E=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);o=is(this,c,e,Xn,l,f,E,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let d=m,c=_;d<c;d+=3){const g=a.getX(d),w=a.getX(d+1),x=a.getX(d+2);o=is(this,i,e,Xn,l,f,g,w,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let m=0,_=p.length;m<_;m++){const d=p[m],c=i[d.materialIndex],g=Math.max(d.start,h.start),w=Math.min(u.count,Math.min(d.start+d.count,h.start+h.count));for(let x=g,M=w;x<M;x+=3){const E=x,A=x+1,R=x+2;o=is(this,c,e,Xn,l,f,E,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(u.count,h.start+h.count);for(let d=m,c=_;d<c;d+=3){const g=d,w=d+1,x=d+2;o=is(this,i,e,Xn,l,f,g,w,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function rd(s,e,t,n,i,r,o,a){let u;if(e.side===Rt?u=n.intersectTriangle(o,r,i,!0,a):u=n.intersectTriangle(i,r,o,e.side===Pn,a),u===null)return null;ns.copy(a),ns.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ns);return l<t.near||l>t.far?null:{distance:l,point:ns.clone(),object:s}}function is(s,e,t,n,i,r,o,a,u){s.getVertexPosition(o,_i),s.getVertexPosition(a,vi),s.getVertexPosition(u,xi);const l=rd(s,e,t,n,_i,vi,xi,Xs);if(l){i&&(Qi.fromBufferAttribute(i,o),es.fromBufferAttribute(i,a),ts.fromBufferAttribute(i,u),l.uv=tn.getUV(Xs,_i,vi,xi,Qi,es,ts,new ze)),r&&(Qi.fromBufferAttribute(r,o),es.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,u),l.uv2=tn.getUV(Xs,_i,vi,xi,Qi,es,ts,new ze));const f={a:o,b:a,c:u,normal:new F,materialIndex:0};tn.getNormal(_i,vi,xi,f.normal),l.face=f}return l}class Ui extends fn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const u=[],l=[],f=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function _(d,c,g,w,x,M,E,A,R,v,C){const P=M/R,B=E/v,J=M/2,N=E/2,I=A/2,U=R+1,Y=v+1;let Q=0,j=0;const te=new F;for(let Z=0;Z<Y;Z++){const H=Z*B-N;for(let O=0;O<U;O++){const re=O*P-J;te[d]=re*w,te[c]=H*x,te[g]=I,l.push(te.x,te.y,te.z),te[d]=0,te[c]=0,te[g]=A>0?1:-1,f.push(te.x,te.y,te.z),p.push(O/R),p.push(1-Z/v),Q+=1}}for(let Z=0;Z<v;Z++)for(let H=0;H<R;H++){const O=h+H+U*Z,re=h+H+U*(Z+1),ne=h+(H+1)+U*(Z+1),ae=h+(H+1)+U*Z;u.push(O,re,ae),u.push(re,ne,ae),j+=6}a.addGroup(m,j,C),m+=j,h+=Q}}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(s){const e={};for(let t=0;t<s.length;t++){const n=ai(s[t]);for(const i in n)e[i]=n[i]}return e}function ad(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ao(s){return s.getRenderTarget()===null&&s.outputEncoding===ke?Gt:Ci}const od={clone:ai,merge:ht};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oo extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends oo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/u,t-=o.offsetY*n/l,i*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,jn=1;class dd extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt($n,jn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new wt($n,jn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new wt($n,jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt($n,jn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new wt($n,jn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new wt($n,jn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,u,l]=this.children,f=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(f),e.toneMapping=p,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class lo extends gt{constructor(e,t,n,i,r,o,a,u,l,f){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,r,o,a,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ud extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:hn});r.uniforms.tEquirect.value=t;const o=new Et(i,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Dt),new dd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const $s=new F,hd=new F,fd=new Tt;class bn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$s.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fd.getNormalMatrix(e),i=this.coplanarPoint($s).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new fr,ss=new F;class pr{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],u=n[4],l=n[5],f=n[6],p=n[7],h=n[8],m=n[9],_=n[10],d=n[11],c=n[12],g=n[13],w=n[14],x=n[15];return t[0].setComponents(a-i,p-u,d-h,x-c).normalize(),t[1].setComponents(a+i,p+u,d+h,x+c).normalize(),t[2].setComponents(a+r,p+l,d+m,x+g).normalize(),t[3].setComponents(a-r,p-l,d-m,x-g).normalize(),t[4].setComponents(a-o,p-f,d-_,x-w).normalize(),t[5].setComponents(a+o,p+f,d+_,x+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function co(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,f){const p=l.array,h=l.usage,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,p,h),l.onUploadCallback();let _;if(p instanceof Float32Array)_=5126;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(p instanceof Int16Array)_=5122;else if(p instanceof Uint32Array)_=5125;else if(p instanceof Int32Array)_=5124;else if(p instanceof Int8Array)_=5120;else if(p instanceof Uint8Array)_=5121;else if(p instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function r(l,f,p){const h=f.array,m=f.updateRange;s.bindBuffer(p,l),m.count===-1?s.bufferSubData(p,0,h):(t?s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(s.deleteBuffer(f.buffer),n.delete(l))}function u(l,f){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=n.get(l);p===void 0?n.set(l,i(l,f)):p.version<l.version&&(r(p.buffer,l,f),p.version=l.version)}return{get:o,remove:a,update:u}}class mr extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),l=a+1,f=u+1,p=e/a,h=t/u,m=[],_=[],d=[],c=[];for(let g=0;g<f;g++){const w=g*h-o;for(let x=0;x<l;x++){const M=x*p-r;_.push(M,-w,0),d.push(0,0,1),c.push(x/a),c.push(1-g/u)}}for(let g=0;g<u;g++)for(let w=0;w<a;w++){const x=w+l*g,M=w+l*(g+1),E=w+1+l*(g+1),A=w+1+l*g;m.push(x,M,A),m.push(M,E,A)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(c,2))}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd="vec3 transformed = vec3( position );",Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
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
}`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
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
#endif`,su=`#if defined( USE_ENVMAP )
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
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
#endif`,du=`struct PhysicalMaterial {
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
}`,uu=`
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
#endif`,hu=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
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
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Lu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ju=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yu=`float getShadowMask() {
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
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
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
#endif`,Ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ih=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sh=`#ifdef USE_TRANSMISSION
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
#endif`,rh=`#ifdef USE_TRANSMISSION
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
#endif`,ah=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,oh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ch=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ph=`uniform sampler2D t2D;
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
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xh=`#include <common>
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
}`,yh=`#if DEPTH_PACKING == 3200
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
}`,bh=`#define DISTANCE
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
}`,Mh=`#define DISTANCE
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
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eh=`uniform float scale;
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
}`,Th=`uniform vec3 diffuse;
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
}`,Ch=`#include <common>
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
}`,Ah=`uniform vec3 diffuse;
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
}`,Lh=`#define LAMBERT
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
}`,Ph=`#define LAMBERT
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
}`,Dh=`#define MATCAP
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
}`,Rh=`#define MATCAP
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
}`,Ih=`#define NORMAL
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
}`,Fh=`#define NORMAL
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
}`,zh=`#define PHONG
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
}`,Nh=`#define PHONG
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
}`,Uh=`#define STANDARD
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
}`,Oh=`#define STANDARD
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
}`,kh=`#define TOON
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
}`,Bh=`#define TOON
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
}`,Gh=`uniform float size;
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
}`,Vh=`uniform vec3 diffuse;
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
}`,Hh=`#include <common>
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
}`,Wh=`uniform vec3 color;
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
}`,qh=`uniform float rotation;
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
}`,Xh=`uniform vec3 diffuse;
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
}`,Se={alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:yd,begin_vertex:bd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:wd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Ld,color_fragment:Pd,color_pars_fragment:Dd,color_pars_vertex:Rd,color_vertex:Id,common:Fd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Od,emissivemap_fragment:kd,emissivemap_pars_fragment:Bd,encodings_fragment:Gd,encodings_pars_fragment:Vd,envmap_fragment:Hd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:qd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:su,envmap_vertex:$d,fog_vertex:jd,fog_pars_vertex:Yd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Kd,lightmap_fragment:Qd,lightmap_pars_fragment:eu,lights_lambert_fragment:tu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:du,lights_fragment_begin:uu,lights_fragment_maps:hu,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:_u,map_fragment:vu,map_pars_fragment:xu,map_particle_fragment:yu,map_particle_pars_fragment:bu,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:Su,morphcolor_vertex:wu,morphnormal_vertex:Eu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Cu,normal_fragment_begin:Au,normal_fragment_maps:Lu,normal_pars_fragment:Pu,normal_pars_vertex:Du,normal_vertex:Ru,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Uu,output_fragment:Ou,packing:ku,premultiplied_alpha_fragment:Bu,project_vertex:Gu,dithering_fragment:Vu,dithering_pars_fragment:Hu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:$u,shadowmap_vertex:ju,shadowmask_pars_fragment:Yu,skinbase_vertex:Zu,skinning_pars_vertex:Ju,skinning_vertex:Ku,skinnormal_vertex:Qu,specularmap_fragment:eh,specularmap_pars_fragment:th,tonemapping_fragment:nh,tonemapping_pars_fragment:ih,transmission_fragment:sh,transmission_pars_fragment:rh,uv_pars_fragment:ah,uv_pars_vertex:oh,uv_vertex:lh,uv2_pars_fragment:ch,uv2_pars_vertex:dh,uv2_vertex:uh,worldpos_vertex:hh,background_vert:fh,background_frag:ph,backgroundCube_vert:mh,backgroundCube_frag:gh,cube_vert:_h,cube_frag:vh,depth_vert:xh,depth_frag:yh,distanceRGBA_vert:bh,distanceRGBA_frag:Mh,equirect_vert:Sh,equirect_frag:wh,linedashed_vert:Eh,linedashed_frag:Th,meshbasic_vert:Ch,meshbasic_frag:Ah,meshlambert_vert:Lh,meshlambert_frag:Ph,meshmatcap_vert:Dh,meshmatcap_frag:Rh,meshnormal_vert:Ih,meshnormal_frag:Fh,meshphong_vert:zh,meshphong_frag:Nh,meshphysical_vert:Uh,meshphysical_frag:Oh,meshtoon_vert:kh,meshtoon_frag:Bh,points_vert:Gh,points_frag:Vh,shadow_vert:Hh,shadow_frag:Wh,sprite_vert:qh,sprite_frag:Xh},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Ht={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Ht.physical={uniforms:ht([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const rs={r:0,b:0,g:0};function $h(s,e,t,n,i,r,o){const a=new Oe(0);let u=r===!0?0:1,l,f,p=null,h=0,m=null;function _(c,g){let w=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const M=s.xr,E=M.getSession&&M.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?d(a,u):x&&x.isColor&&(d(x,1),w=!0),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===us)?(f===void 0&&(f=new Et(new Ui(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ai(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=x.encoding!==ke,(p!==x||h!==x.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,p=x,h=x.version,m=s.toneMapping),f.layers.enableAll(),c.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Et(new mr(2,2),new Fn({name:"BackgroundMaterial",uniforms:ai(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=x.encoding!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,p=x,h=x.version,m=s.toneMapping),l.layers.enableAll(),c.unshift(l,l.geometry,l.material,0,0,null))}function d(c,g){c.getRGB(rs,ao(s)),n.buffers.color.setClear(rs.r,rs.g,rs.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(c,g=1){a.set(c),u=g,d(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(c){u=c,d(a,u)},render:_}}function jh(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},u=c(null);let l=u,f=!1;function p(I,U,Y,Q,j){let te=!1;if(o){const Z=d(Q,Y,U);l!==Z&&(l=Z,m(l.object)),te=g(I,Q,Y,j),te&&w(I,Q,Y,j)}else{const Z=U.wireframe===!0;(l.geometry!==Q.id||l.program!==Y.id||l.wireframe!==Z)&&(l.geometry=Q.id,l.program=Y.id,l.wireframe=Z,te=!0)}j!==null&&t.update(j,34963),(te||f)&&(f=!1,v(I,U,Y,Q),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function d(I,U,Y){const Q=Y.wireframe===!0;let j=a[I.id];j===void 0&&(j={},a[I.id]=j);let te=j[U.id];te===void 0&&(te={},j[U.id]=te);let Z=te[Q];return Z===void 0&&(Z=c(h()),te[Q]=Z),Z}function c(I){const U=[],Y=[],Q=[];for(let j=0;j<i;j++)U[j]=0,Y[j]=0,Q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:Q,object:I,attributes:{},index:null}}function g(I,U,Y,Q){const j=l.attributes,te=U.attributes;let Z=0;const H=Y.getAttributes();for(const O in H)if(H[O].location>=0){const ne=j[O];let ae=te[O];if(ae===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;Z++}return l.attributesNum!==Z||l.index!==Q}function w(I,U,Y,Q){const j={},te=U.attributes;let Z=0;const H=Y.getAttributes();for(const O in H)if(H[O].location>=0){let ne=te[O];ne===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),j[O]=ae,Z++}l.attributes=j,l.attributesNum=Z,l.index=Q}function x(){const I=l.newAttributes;for(let U=0,Y=I.length;U<Y;U++)I[U]=0}function M(I){E(I,0)}function E(I,U){const Y=l.newAttributes,Q=l.enabledAttributes,j=l.attributeDivisors;Y[I]=1,Q[I]===0&&(s.enableVertexAttribArray(I),Q[I]=1),j[I]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),j[I]=U)}function A(){const I=l.newAttributes,U=l.enabledAttributes;for(let Y=0,Q=U.length;Y<Q;Y++)U[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),U[Y]=0)}function R(I,U,Y,Q,j,te){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(I,U,Y,j,te):s.vertexAttribPointer(I,U,Y,Q,j,te)}function v(I,U,Y,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=Q.attributes,te=Y.getAttributes(),Z=U.defaultAttributeValues;for(const H in te){const O=te[H];if(O.location>=0){let re=j[H];if(re===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){const ne=re.normalized,ae=re.itemSize,X=t.get(re);if(X===void 0)continue;const Pe=X.buffer,ue=X.type,ye=X.bytesPerElement;if(re.isInterleavedBufferAttribute){const de=re.data,Ne=de.stride,we=re.offset;if(de.isInstancedInterleavedBuffer){for(let xe=0;xe<O.locationSize;xe++)E(O.location+xe,de.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<O.locationSize;xe++)M(O.location+xe);s.bindBuffer(34962,Pe);for(let xe=0;xe<O.locationSize;xe++)R(O.location+xe,ae/O.locationSize,ue,ne,Ne*ye,(we+ae/O.locationSize*xe)*ye)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)E(O.location+de,re.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<O.locationSize;de++)M(O.location+de);s.bindBuffer(34962,Pe);for(let de=0;de<O.locationSize;de++)R(O.location+de,ae/O.locationSize,ue,ne,ae*ye,ae/O.locationSize*de*ye)}}else if(Z!==void 0){const ne=Z[H];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(O.location,ne);break;case 3:s.vertexAttrib3fv(O.location,ne);break;case 4:s.vertexAttrib4fv(O.location,ne);break;default:s.vertexAttrib1fv(O.location,ne)}}}}A()}function C(){J();for(const I in a){const U=a[I];for(const Y in U){const Q=U[Y];for(const j in Q)_(Q[j].object),delete Q[j];delete U[Y]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const U=a[I.id];for(const Y in U){const Q=U[Y];for(const j in Q)_(Q[j].object),delete Q[j];delete U[Y]}delete a[I.id]}function B(I){for(const U in a){const Y=a[U];if(Y[I.id]===void 0)continue;const Q=Y[I.id];for(const j in Q)_(Q[j].object),delete Q[j];delete Y[I.id]}}function J(){N(),f=!0,l!==u&&(l=u,m(l.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:J,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Yh(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,f){s.drawArrays(r,l,f),t.update(f,r,1)}function u(l,f,p){if(p===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,f,p),t.update(f,r,p)}this.setMode=o,this.render=a,this.renderInstances=u}function Zh(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=r(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const l=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),d=s.getParameter(34921),c=s.getParameter(36347),g=s.getParameter(36348),w=s.getParameter(36349),x=h>0,M=o||e.has("OES_texture_float"),E=x&&M,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:A}}function Jh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bn,a=new Tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,m){const _=p.length!==0||h||n!==0||i;return i=h,t=f(p,m,0),n=p.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1,l()},this.setState=function(p,h,m){const _=p.clippingPlanes,d=p.clipIntersection,c=p.clipShadows,g=s.get(p);if(!i||_===null||_.length===0||r&&!c)r?f(null):l();else{const w=r?0:n,x=w*4;let M=g.clippingState||null;u.value=M,M=f(_,h,x,m);for(let E=0;E!==x;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=w}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,h,m,_){const d=p!==null?p.length:0;let c=null;if(d!==0){if(c=u.value,_!==!0||c===null){const g=m+d*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(c===null||c.length<g)&&(c=new Float32Array(g));for(let x=0,M=m;x!==d;++x,M+=4)o.copy(p[x]).applyMatrix4(w,a),o.normal.toArray(c,M),c[M+3]=o.constant}u.value=c,u.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,c}}function Kh(s){let e=new WeakMap;function t(o,a){return a===nr?o.mapping=ii:a===ir&&(o.mapping=si),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nr||a===ir)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new ud(u.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qh extends oo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ei=4,ga=[.125,.215,.35,.446,.526,.582],Sn=20,js=new Qh,_a=new Oe;let Ys=null;const Mn=(1+Math.sqrt(5))/2,Zn=1/Mn,va=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Mn,Zn),new F(0,Mn,-Zn),new F(Zn,0,Mn),new F(-Zn,0,Mn),new F(Mn,Zn,0),new F(-Mn,Zn,0)];class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ys=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ti,format:kt,encoding:Rn,depthBuffer:!1},i=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=tf(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(_a),f.toneMapping=nn,f.autoClear=!1;const m=new io({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Et(new Ui,m);let d=!1;const c=e.background;c?c.isColor&&(m.color.copy(c),e.background=null,d=!0):(m.color.copy(_a),d=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,u[g],0),a.lookAt(l[g],0,0)):w===1?(a.up.set(0,0,u[g]),a.lookAt(0,l[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;as(i,w*x,g>2?x:0,x,x),f.setRenderTarget(i),d&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=c}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;as(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=va[(i-1)%va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Et(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),d=r/_,c=isFinite(r)?1+Math.floor(f*d):Sn;c>Sn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Sn}`);const g=[];let w=0;for(let R=0;R<Sn;++R){const v=R/d,C=Math.exp(-v*v/2);g.push(C),R===0?w+=C:R<c&&(w+=2*C)}for(let R=0;R<g.length;R++)g[R]=g[R]/w;h.envMap.value=e.texture,h.samples.value=c,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-ei?i-x+ei:0),A=4*(this._cubeSize-M);as(t,E,A,3*M,2*M),u.setRenderTarget(t),u.render(p,js)}}function ef(s){const e=[],t=[],n=[];let i=s;const r=s-ei+1+ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>s-ei?u=ga[o-s+ei-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),f=-l,p=1+l,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,d=3,c=2,g=1,w=new Float32Array(d*_*m),x=new Float32Array(c*_*m),M=new Float32Array(g*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,v=A>2?0:-1,C=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];w.set(C,d*_*A),x.set(h,c*_*A);const P=[A,A,A,A,A,A];M.set(P,g*_*A)}const E=new fn;E.setAttribute("position",new Wt(w,d)),E.setAttribute("uv",new Wt(x,c)),E.setAttribute("faceIndex",new Wt(M,g)),e.push(E),i>ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(s,e,t){const n=new In(s,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tf(s,e,t){const n=new Float32Array(Sn),i=new F(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gr(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ba(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gr(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Ma(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function gr(){return`

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
	`}function nf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===nr||u===ir,f=u===ii||u===si;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new xa(s)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(l&&p&&p.height>0||f&&p&&i(p)){t===null&&(t=new xa(s));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let u=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&u++;return u===l}function r(a){const u=a.target;u.removeEventListener("dispose",r);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rf(s,e,t,n){const i={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function u(p){const h=p.attributes;for(const _ in h)e.update(h[_],34962);const m=p.morphAttributes;for(const _ in m){const d=m[_];for(let c=0,g=d.length;c<g;c++)e.update(d[c],34962)}}function l(p){const h=[],m=p.index,_=p.attributes.position;let d=0;if(m!==null){const w=m.array;d=m.version;for(let x=0,M=w.length;x<M;x+=3){const E=w[x+0],A=w[x+1],R=w[x+2];h.push(E,A,A,R,R,E)}}else{const w=_.array;d=_.version;for(let x=0,M=w.length/3-1;x<M;x+=3){const E=x+0,A=x+1,R=x+2;h.push(E,A,A,R,R,E)}}const c=new(Ja(h)?ro:so)(h,1);c.version=d;const g=r.get(p);g&&e.remove(g),r.set(p,c)}function f(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:u,getWireframeAttribute:f}}function af(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,u;function l(h){a=h.type,u=h.bytesPerElement}function f(h,m){s.drawElements(r,m,a,h*u),t.update(m,r,1)}function p(h,m,_){if(_===0)return;let d,c;if(i)d=s,c="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[c](r,m,a,h*u,_),t.update(m,r,_)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=p}function of(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,e){return s[0]-e[0]}function cf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function df(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ve,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function u(l,f,p,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,d=_!==void 0?_.length:0;let c=r.get(f);if(c===void 0||c.count!==d){let U=function(){N.dispose(),r.delete(f),f.removeEventListener("dispose",U)};c!==void 0&&c.texture.dispose();const x=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],v=f.morphAttributes.color||[];let C=0;x===!0&&(C=1),M===!0&&(C=2),E===!0&&(C=3);let P=f.attributes.position.count*C,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const J=new Float32Array(P*B*4*d),N=new to(J,P,B,d);N.type=Cn,N.needsUpdate=!0;const I=C*4;for(let Y=0;Y<d;Y++){const Q=A[Y],j=R[Y],te=v[Y],Z=P*B*4*Y;for(let H=0;H<Q.count;H++){const O=H*I;x===!0&&(o.fromBufferAttribute(Q,H),J[Z+O+0]=o.x,J[Z+O+1]=o.y,J[Z+O+2]=o.z,J[Z+O+3]=0),M===!0&&(o.fromBufferAttribute(j,H),J[Z+O+4]=o.x,J[Z+O+5]=o.y,J[Z+O+6]=o.z,J[Z+O+7]=0),E===!0&&(o.fromBufferAttribute(te,H),J[Z+O+8]=o.x,J[Z+O+9]=o.y,J[Z+O+10]=o.z,J[Z+O+11]=te.itemSize===4?o.w:1)}}c={count:d,texture:N,size:new ze(P,B)},r.set(f,c),f.addEventListener("dispose",U)}let g=0;for(let x=0;x<m.length;x++)g+=m[x];const w=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m),h.getUniforms().setValue(s,"morphTargetsTexture",c.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",c.size)}else{const _=m===void 0?0:m.length;let d=n[f.id];if(d===void 0||d.length!==_){d=[];for(let M=0;M<_;M++)d[M]=[M,0];n[f.id]=d}for(let M=0;M<_;M++){const E=d[M];E[0]=M,E[1]=m[M]}d.sort(cf);for(let M=0;M<8;M++)M<_&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(lf);const c=f.morphAttributes.position,g=f.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const E=a[M],A=E[0],R=E[1];A!==Number.MAX_SAFE_INTEGER&&R?(c&&f.getAttribute("morphTarget"+M)!==c[A]&&f.setAttribute("morphTarget"+M,c[A]),g&&f.getAttribute("morphNormal"+M)!==g[A]&&f.setAttribute("morphNormal"+M,g[A]),i[M]=R,w+=R):(c&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),g&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),i[M]=0)}const x=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:u}}function uf(s,e,t,n){let i=new WeakMap;function r(u){const l=n.render.frame,f=u.geometry,p=e.get(u,f);return i.get(p)!==l&&(e.update(p),i.set(p,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),p}function o(){i=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const uo=new gt,ho=new to,fo=new jc,po=new lo,Sa=[],wa=[],Ea=new Float32Array(16),Ta=new Float32Array(9),Ca=new Float32Array(4);function li(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sa[i];if(r===void 0&&(r=new Float32Array(i),Sa[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Je(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ke(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hs(s,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2fv(this.addr,e),Ke(t,e)}}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;s.uniform3fv(this.addr,e),Ke(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4fv(this.addr,e),Ke(t,e)}}function gf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Ca.set(n),s.uniformMatrix2fv(this.addr,!1,Ca),Ke(t,n)}}function _f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Ta.set(n),s.uniformMatrix3fv(this.addr,!1,Ta),Ke(t,n)}}function vf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ke(t,e)}else{if(Je(t,n))return;Ea.set(n),s.uniformMatrix4fv(this.addr,!1,Ea),Ke(t,n)}}function xf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2iv(this.addr,e),Ke(t,e)}}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;s.uniform3iv(this.addr,e),Ke(t,e)}}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4iv(this.addr,e),Ke(t,e)}}function Sf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;s.uniform2uiv(this.addr,e),Ke(t,e)}}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;s.uniform3uiv(this.addr,e),Ke(t,e)}}function Tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;s.uniform4uiv(this.addr,e),Ke(t,e)}}function Cf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||uo,i)}function Af(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fo,i)}function Lf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||po,i)}function Pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ho,i)}function Df(s){switch(s){case 5126:return hf;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return yf;case 35668:case 35672:return bf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return wf;case 36295:return Ef;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Pf}}function Rf(s,e){s.uniform1fv(this.addr,e)}function If(s,e){const t=li(e,this.size,2);s.uniform2fv(this.addr,t)}function Ff(s,e){const t=li(e,this.size,3);s.uniform3fv(this.addr,t)}function zf(s,e){const t=li(e,this.size,4);s.uniform4fv(this.addr,t)}function Nf(s,e){const t=li(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Uf(s,e){const t=li(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Of(s,e){const t=li(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kf(s,e){s.uniform1iv(this.addr,e)}function Bf(s,e){s.uniform2iv(this.addr,e)}function Gf(s,e){s.uniform3iv(this.addr,e)}function Vf(s,e){s.uniform4iv(this.addr,e)}function Hf(s,e){s.uniform1uiv(this.addr,e)}function Wf(s,e){s.uniform2uiv(this.addr,e)}function qf(s,e){s.uniform3uiv(this.addr,e)}function Xf(s,e){s.uniform4uiv(this.addr,e)}function $f(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||uo,r[o])}function jf(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fo,r[o])}function Yf(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||po,r[o])}function Zf(s,e,t){const n=this.cache,i=e.length,r=hs(t,i);Je(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ho,r[o])}function Jf(s){switch(s){case 5126:return Rf;case 35664:return If;case 35665:return Ff;case 35666:return zf;case 35674:return Nf;case 35675:return Uf;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return Bf;case 35668:case 35672:return Gf;case 35669:case 35673:return Vf;case 5125:return Hf;case 36294:return Wf;case 36295:return qf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Df(t.type)}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jf(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function Aa(s,e){s.seq.push(e),s.map[e.id]=e}function tp(s,e,t){const n=s.name,i=n.length;for(Zs.lastIndex=0;;){const r=Zs.exec(n),o=Zs.lastIndex;let a=r[1];const u=r[2]==="]",l=r[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===i){Aa(t,l===void 0?new Kf(a,s,e):new Qf(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new ep(a),Aa(t,p)),t=p}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);tp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function La(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let np=0;function ip(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sp(s){switch(s){case Rn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Pa(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ip(s.getShaderSource(e),o)}else return i}function rp(s,e){const t=sp(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ap(s,e){let t;switch(e){case bc:t="Linear";break;case Mc:t="Reinhard";break;case Sc:t="OptimizedCineon";break;case wc:t="ACESFilmic";break;case Ec:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function op(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function lp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cp(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wi(s){return s!==""}function Da(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ra(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(s){return s.replace(dp,up)}function up(s,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return lr(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(s){return s.replace(hp,fp)}function fp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function mp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function _p(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hr:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case yc:e="ENVMAP_BLENDING_ADD";break}return e}function vp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=pp(t),l=mp(t),f=gp(t),p=_p(t),h=vp(t),m=t.isWebGL2?"":op(t),_=lp(r),d=i.createProgram();let c,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=[_].filter(wi).join(`
`),c.length>0&&(c+=`
`),g=[m,_].filter(wi).join(`
`),g.length>0&&(g+=`
`)):(c=[Fa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),g=[m,Fa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Se.tonemapping_pars_fragment:"",t.toneMapping!==nn?ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,rp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=lr(o),o=Da(o,t),o=Ra(o,t),a=lr(a),a=Da(a,t),a=Ra(a,t),o=Ia(o),a=Ia(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,c=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,g=["#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=w+c+o,M=w+g+a,E=La(i,35633,x),A=La(i,35632,M);if(i.attachShader(d,E),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(A).trim();let J=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){J=!1;const I=Pa(i,E,"vertex"),U=Pa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+C+`
`+I+`
`+U)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:C,vertexShader:{log:P,prefix:c},fragmentShader:{log:B,prefix:g}})}i.deleteShader(E),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new ds(i,d)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=cp(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=np++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=A,this}let yp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mp(e),t.set(e,n)),n}}class Mp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function Sp(s,e,t,n,i,r,o){const a=new no,u=new bp,l=[],f=i.isWebGL2,p=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,C,P,B,J){const N=B.fog,I=J.geometry,U=v.isMeshStandardMaterial?B.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||U),Q=!!Y&&Y.mapping===us?Y.image.height:null,j=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=te!==void 0?te.length:0;let H=0;I.morphAttributes.position!==void 0&&(H=1),I.morphAttributes.normal!==void 0&&(H=2),I.morphAttributes.color!==void 0&&(H=3);let O,re,ne,ae;if(j){const Ne=Ht[j];O=Ne.vertexShader,re=Ne.fragmentShader}else O=v.vertexShader,re=v.fragmentShader,u.update(v),ne=u.getVertexShaderID(v),ae=u.getFragmentShaderID(v);const X=s.getRenderTarget(),Pe=v.alphaTest>0,ue=v.clearcoat>0,ye=v.iridescence>0;return{isWebGL2:f,shaderID:j,shaderName:v.type,vertexShader:O,fragmentShader:re,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Rn,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Wc,tangentSpaceNormalMap:v.normalMapType===Za,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ke,clearcoat:ue,clearcoatMap:ue&&!!v.clearcoatMap,clearcoatRoughnessMap:ue&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!v.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!v.iridescenceMap,iridescenceThicknessMap:ye&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ti,alphaMap:!!v.alphaMap,alphaTest:Pe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:p,skinning:J.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:H,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:nn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Rt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function c(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)C.push(P),C.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(g(C,v),w(C,v),C.push(s.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function g(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function w(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),v.push(a.mask)}function x(v){const C=_[v.type];let P;if(C){const B=Ht[C];P=od.clone(B.uniforms)}else P=v.uniforms;return P}function M(v,C){let P;for(let B=0,J=l.length;B<J;B++){const N=l[B];if(N.cacheKey===C){P=N,++P.usedTimes;break}}return P===void 0&&(P=new xp(s,C,v,r),l.push(P)),P}function E(v){if(--v.usedTimes===0){const C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),v.destroy()}}function A(v){u.remove(v)}function R(){u.dispose()}return{getParameters:d,getProgramCacheKey:c,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:R}}function wp(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ep(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function za(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Na(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(p,h,m,_,d,c){let g=s[e];return g===void 0?(g={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:d,group:c},s[e]=g):(g.id=p.id,g.object=p,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=p.renderOrder,g.z=d,g.group=c),e++,g}function a(p,h,m,_,d,c){const g=o(p,h,m,_,d,c);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function u(p,h,m,_,d,c){const g=o(p,h,m,_,d,c);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(p,h){t.length>1&&t.sort(p||Ep),n.length>1&&n.sort(h||za),i.length>1&&i.sort(h||za)}function f(){for(let p=e,h=s.length;p<h;p++){const m=s[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:u,finish:f,sort:l}}function Tp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Na,s.set(n,[o])):i>=r.length?(o=new Na,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Cp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Ap(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lp=0;function Pp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dp(s,e){const t=new Cp,n=Ap(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new F);const r=new F,o=new Xe,a=new Xe;function u(f,p){let h=0,m=0,_=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,c=0,g=0,w=0,x=0,M=0,E=0,A=0,R=0,v=0;f.sort(Pp);const C=p!==!0?Math.PI:1;for(let B=0,J=f.length;B<J;B++){const N=f[B],I=N.color,U=N.intensity,Y=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=I.r*U*C,m+=I.g*U*C,_+=I.b*U*C;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],U);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){const te=N.shadow,Z=n.get(N);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=N.shadow.matrix,M++}i.directional[d]=j,d++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(I).multiplyScalar(U*C),j.distance=Y,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[g]=j;const te=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,te.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[g]=te.matrix,N.castShadow){const Z=n.get(N);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=Q,A++}g++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(I).multiplyScalar(U),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=j,w++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*C),j.distance=N.distance,j.decay=N.decay,N.castShadow){const te=N.shadow,Z=n.get(N);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,Z.shadowCameraNear=te.camera.near,Z.shadowCameraFar=te.camera.far,i.pointShadow[c]=Z,i.pointShadowMap[c]=Q,i.pointShadowMatrix[c]=N.shadow.matrix,E++}i.point[c]=j,c++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(U*C),j.groundColor.copy(N.groundColor).multiplyScalar(U*C),i.hemi[x]=j,x++}}w>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==d||P.pointLength!==c||P.spotLength!==g||P.rectAreaLength!==w||P.hemiLength!==x||P.numDirectionalShadows!==M||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==R)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=w,i.point.length=c,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+R-v,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=v,P.directionalLength=d,P.pointLength=c,P.spotLength=g,P.rectAreaLength=w,P.hemiLength=x,P.numDirectionalShadows=M,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=R,i.version=Lp++)}function l(f,p){let h=0,m=0,_=0,d=0,c=0;const g=p.matrixWorldInverse;for(let w=0,x=f.length;w<x;w++){const M=f[w];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(M.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),_++}else if(M.isRectAreaLight){const E=i.rectArea[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),d++}else if(M.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const E=i.hemi[c];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),c++}}}return{setup:u,setupView:l,state:i}}function Ua(s,e){const t=new Dp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function u(p){t.setup(n,p)}function l(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function Rp(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let u;return a===void 0?(u=new Ua(s,e),t.set(r,[u])):o>=a.length?(u=new Ua(s,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ip extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
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
}`;function Up(s,e,t){let n=new pr;const i=new ze,r=new ze,o=new Ve,a=new Ip({depthPacking:Hc}),u=new Fp,l={},f=t.maxTextureSize,p={0:Rt,1:Pn,2:dn},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:zp,fragmentShader:Np}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Et(_,h),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa,this.render=function(M,E,A){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(hn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,J=M.length;B<J;B++){const N=M[B],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const U=I.getFrameExtents();if(i.multiply(U),r.copy(I.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/U.x),i.x=r.x*U.x,I.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/U.y),i.y=r.y*U.y,I.mapSize.y=r.y)),I.map===null){const Q=this.type!==Si?{minFilter:ft,magFilter:ft}:{};I.map=new In(i.x,i.y,Q),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const Y=I.getViewportCount();for(let Q=0;Q<Y;Q++){const j=I.getViewport(Q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o),I.updateMatrices(N,Q),n=I.getFrustum(),x(E,A,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Si&&g(I,A),I.needsUpdate=!1}c.needsUpdate=!1,s.setRenderTarget(R,v,C)};function g(M,E){const A=e.update(d);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new In(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,A,h,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,A,m,d,null)}function w(M,E,A,R,v,C){let P=null;const B=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(B!==void 0)P=B;else if(P=A.isPointLight===!0?u:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const J=P.uuid,N=E.uuid;let I=l[J];I===void 0&&(I={},l[J]=I);let U=I[N];U===void 0&&(U=P.clone(),I[N]=U),P=U}return P.visible=E.visible,P.wireframe=E.wireframe,C===Si?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:p[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=R,P.farDistance=v),P}function x(M,E,A,R,v){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const B=e.update(M),J=M.material;if(Array.isArray(J)){const N=B.groups;for(let I=0,U=N.length;I<U;I++){const Y=N[I],Q=J[Y.materialIndex];if(Q&&Q.visible){const j=w(M,Q,R,A.near,A.far,v);s.renderBufferDirect(A,null,B,j,M,Y)}}}else if(J.visible){const N=w(M,J,R,A.near,A.far,v);s.renderBufferDirect(A,null,B,N,M,null)}}const P=M.children;for(let B=0,J=P.length;B<J;B++)x(P[B],E,A,R,v)}}function Op(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const k=new Ve;let K=null;const ce=new Ve(0,0,0,0);return{setMask:function(fe){K!==fe&&!L&&(s.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Fe,et,rt,pn){pn===!0&&(fe*=rt,Fe*=rt,et*=rt),k.set(fe,Fe,et,rt),ce.equals(k)===!1&&(s.clearColor(fe,Fe,et,rt),ce.copy(k))},reset:function(){L=!1,K=null,ce.set(-1,0,0,0)}}}function r(){let L=!1,k=null,K=null,ce=null;return{setTest:function(fe){fe?Pe(2929):ue(2929)},setMask:function(fe){k!==fe&&!L&&(s.depthMask(fe),k=fe)},setFunc:function(fe){if(K!==fe){switch(fe){case hc:s.depthFunc(512);break;case fc:s.depthFunc(519);break;case pc:s.depthFunc(513);break;case tr:s.depthFunc(515);break;case mc:s.depthFunc(514);break;case gc:s.depthFunc(518);break;case _c:s.depthFunc(516);break;case vc:s.depthFunc(517);break;default:s.depthFunc(515)}K=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ce!==fe&&(s.clearDepth(fe),ce=fe)},reset:function(){L=!1,k=null,K=null,ce=null}}}function o(){let L=!1,k=null,K=null,ce=null,fe=null,Fe=null,et=null,rt=null,pn=null;return{setTest:function(Ge){L||(Ge?Pe(2960):ue(2960))},setMask:function(Ge){k!==Ge&&!L&&(s.stencilMask(Ge),k=Ge)},setFunc:function(Ge,$t,At){(K!==Ge||ce!==$t||fe!==At)&&(s.stencilFunc(Ge,$t,At),K=Ge,ce=$t,fe=At)},setOp:function(Ge,$t,At){(Fe!==Ge||et!==$t||rt!==At)&&(s.stencilOp(Ge,$t,At),Fe=Ge,et=$t,rt=At)},setLocked:function(Ge){L=Ge},setClear:function(Ge){pn!==Ge&&(s.clearStencil(Ge),pn=Ge)},reset:function(){L=!1,k=null,K=null,ce=null,fe=null,Fe=null,et=null,rt=null,pn=null}}}const a=new i,u=new r,l=new o,f=new WeakMap,p=new WeakMap;let h={},m={},_=new WeakMap,d=[],c=null,g=!1,w=null,x=null,M=null,E=null,A=null,R=null,v=null,C=!1,P=null,B=null,J=null,N=null,I=null;const U=s.getParameter(35661);let Y=!1,Q=0;const j=s.getParameter(7938);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=Q>=2);let te=null,Z={};const H=s.getParameter(3088),O=s.getParameter(2978),re=new Ve().fromArray(H),ne=new Ve().fromArray(O);function ae(L,k,K){const ce=new Uint8Array(4),fe=s.createTexture();s.bindTexture(L,fe),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Fe=0;Fe<K;Fe++)s.texImage2D(k+Fe,0,6408,1,1,0,6408,5121,ce);return fe}const X={};X[3553]=ae(3553,3553,1),X[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),l.setClear(0),Pe(2929),u.setFunc(tr),ct(!1),Ct(Ar),Pe(2884),ot(hn);function Pe(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function ue(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ye(L,k){return m[L]!==k?(s.bindFramebuffer(L,k),m[L]=k,n&&(L===36009&&(m[36160]=k),L===36160&&(m[36009]=k)),!0):!1}function de(L,k){let K=d,ce=!1;if(L)if(K=_.get(k),K===void 0&&(K=[],_.set(k,K)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(K.length!==fe.length||K[0]!==36064){for(let Fe=0,et=fe.length;Fe<et;Fe++)K[Fe]=36064+Fe;K.length=fe.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ne(L){return c!==L?(s.useProgram(L),c=L,!0):!1}const we={[Qn]:32774,[tc]:32778,[nc]:32779};if(n)we[Rr]=32775,we[Ir]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Rr]=L.MIN_EXT,we[Ir]=L.MAX_EXT)}const xe={[ic]:0,[sc]:1,[rc]:768,[Xa]:770,[uc]:776,[cc]:774,[oc]:772,[ac]:769,[$a]:771,[dc]:775,[lc]:773};function ot(L,k,K,ce,fe,Fe,et,rt){if(L===hn){g===!0&&(ue(3042),g=!1);return}if(g===!1&&(Pe(3042),g=!0),L!==ec){if(L!==w||rt!==C){if((x!==Qn||A!==Qn)&&(s.blendEquation(32774),x=Qn,A=Qn),rt)switch(L){case ti:s.blendFuncSeparate(1,771,1,771);break;case Lr:s.blendFunc(1,1);break;case Pr:s.blendFuncSeparate(0,769,0,1);break;case Dr:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ti:s.blendFuncSeparate(770,771,1,771);break;case Lr:s.blendFunc(770,1);break;case Pr:s.blendFuncSeparate(0,769,0,1);break;case Dr:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,E=null,R=null,v=null,w=L,C=rt}return}fe=fe||k,Fe=Fe||K,et=et||ce,(k!==x||fe!==A)&&(s.blendEquationSeparate(we[k],we[fe]),x=k,A=fe),(K!==M||ce!==E||Fe!==R||et!==v)&&(s.blendFuncSeparate(xe[K],xe[ce],xe[Fe],xe[et]),M=K,E=ce,R=Fe,v=et),w=L,C=!1}function lt(L,k){L.side===dn?ue(2884):Pe(2884);let K=L.side===Rt;k&&(K=!K),ct(K),L.blending===ti&&L.transparent===!1?ot(hn):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),u.setFunc(L.depthFunc),u.setTest(L.depthTest),u.setMask(L.depthWrite),a.setMask(L.colorWrite);const ce=L.stencilWrite;l.setTest(ce),ce&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(32926):ue(32926)}function ct(L){P!==L&&(L?s.frontFace(2304):s.frontFace(2305),P=L)}function Ct(L){L!==Jl?(Pe(2884),L!==B&&(L===Ar?s.cullFace(1029):L===Kl?s.cullFace(1028):s.cullFace(1032))):ue(2884),B=L}function $e(L){L!==J&&(Y&&s.lineWidth(L),J=L)}function Ue(L,k,K){L?(Pe(32823),(N!==k||I!==K)&&(s.polygonOffset(k,K),N=k,I=K)):ue(32823)}function Xt(L){L?Pe(3089):ue(3089)}function Ft(L){L===void 0&&(L=33984+U-1),te!==L&&(s.activeTexture(L),te=L)}function T(L,k,K){K===void 0&&(te===null?K=33984+U-1:K=te);let ce=Z[K];ce===void 0&&(ce={type:void 0,texture:void 0},Z[K]=ce),(ce.type!==L||ce.texture!==k)&&(te!==K&&(s.activeTexture(K),te=K),s.bindTexture(L,k||X[L]),ce.type=L,ce.texture=k)}function y(){const L=Z[te];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){re.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function pe(L){ne.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function De(L,k){let K=p.get(k);K===void 0&&(K=new WeakMap,p.set(k,K));let ce=K.get(L);ce===void 0&&(ce=s.getUniformBlockIndex(k,L.name),K.set(L,ce))}function Be(L,k){const ce=p.get(k).get(L);f.get(k)!==ce&&(s.uniformBlockBinding(k,ce,L.__bindingPointIndex),f.set(k,ce))}function Qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,Z={},m={},_=new WeakMap,d=[],c=null,g=!1,w=null,x=null,M=null,E=null,A=null,R=null,v=null,C=!1,P=null,B=null,J=null,N=null,I=null,re.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),l.reset()}return{buffers:{color:a,depth:u,stencil:l},enable:Pe,disable:ue,bindFramebuffer:ye,drawBuffers:de,useProgram:Ne,setBlending:ot,setMaterial:lt,setFlipSided:ct,setCullFace:Ct,setLineWidth:$e,setPolygonOffset:Ue,setScissorTest:Xt,activeTexture:Ft,bindTexture:T,unbindTexture:y,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:ve,texImage3D:he,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:$,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:be,compressedTexSubImage3D:le,scissor:_e,viewport:pe,reset:Qe}}function kp(s,e,t,n,i,r,o){const a=i.isWebGL2,u=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,p=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const c=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,y){return g?new OffscreenCanvas(T,y):Ai("canvas")}function x(T,y,V,ee){let ie=1;if((T.width>ee||T.height>ee)&&(ie=ee/Math.max(T.width,T.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const oe=y?or:Math.floor,be=oe(ie*T.width),le=oe(ie*T.height);d===void 0&&(d=w(be,le));const $=V?w(be,le):d;return $.width=be,$.height=le,$.getContext("2d").drawImage(T,0,0,be,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+le+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return ra(T.width)&&ra(T.height)}function E(T){return a?!1:T.wrapS!==Ot||T.wrapT!==Ot||T.minFilter!==ft&&T.minFilter!==Dt}function A(T,y){return T.generateMipmaps&&y&&T.minFilter!==ft&&T.minFilter!==Dt}function R(T){s.generateMipmap(T)}function v(T,y,V,ee,ie=!1){if(a===!1)return y;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe=y;return y===6403&&(V===5126&&(oe=33326),V===5131&&(oe=33325),V===5121&&(oe=33321)),y===33319&&(V===5126&&(oe=33328),V===5131&&(oe=33327),V===5121&&(oe=33323)),y===6408&&(V===5126&&(oe=34836),V===5131&&(oe=34842),V===5121&&(oe=ee===ke&&ie===!1?35907:32856),V===32819&&(oe=32854),V===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(T,y,V){return A(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==Dt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function P(T){return T===ft||T===Fr||T===ys?9728:9729}function B(T){const y=T.target;y.removeEventListener("dispose",B),N(y),y.isVideoTexture&&_.delete(y)}function J(T){const y=T.target;y.removeEventListener("dispose",J),U(y)}function N(T){const y=n.get(T);if(y.__webglInit===void 0)return;const V=T.source,ee=c.get(V);if(ee){const ie=ee[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(T),Object.keys(ee).length===0&&c.delete(V)}n.remove(T)}function I(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const V=T.source,ee=c.get(V);delete ee[y.__cacheKey],o.memory.textures--}function U(T){const y=T.texture,V=n.get(T),ee=n.get(y);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,oe=y.length;ie<oe;ie++){const be=n.get(y[ie]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(T)}let Y=0;function Q(){Y=0}function j(){const T=Y;return T>=u&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+u),Y+=1,T}function te(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.encoding),y.join()}function Z(T,y){const V=n.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,T,y);return}}t.bindTexture(3553,V.__webglTexture,33984+y)}function H(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,y);return}t.bindTexture(35866,V.__webglTexture,33984+y)}function O(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,y);return}t.bindTexture(32879,V.__webglTexture,33984+y)}function re(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ye(V,T,y);return}t.bindTexture(34067,V.__webglTexture,33984+y)}const ne={[sr]:10497,[Ot]:33071,[rr]:33648},ae={[ft]:9728,[Fr]:9984,[ys]:9986,[Dt]:9729,[Tc]:9985,[Ei]:9987};function X(T,y,V){if(V?(s.texParameteri(T,10242,ne[y.wrapS]),s.texParameteri(T,10243,ne[y.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,ne[y.wrapR]),s.texParameteri(T,10240,ae[y.magFilter]),s.texParameteri(T,10241,ae[y.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(y.wrapS!==Ot||y.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,P(y.magFilter)),s.texParameteri(T,10241,P(y.minFilter)),y.minFilter!==ft&&y.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===ft||y.minFilter!==ys&&y.minFilter!==Ei||y.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Pe(T,y){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",B));const ee=y.source;let ie=c.get(ee);ie===void 0&&(ie={},c.set(ee,ie));const oe=te(y);if(oe!==T.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[oe].usedTimes++;const be=ie[T.__cacheKey];be!==void 0&&(ie[T.__cacheKey].usedTimes--,be.usedTimes===0&&I(y)),T.__cacheKey=oe,T.__webglTexture=ie[oe].texture}return V}function ue(T,y,V){let ee=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=35866),y.isData3DTexture&&(ee=32879);const ie=Pe(T,y),oe=y.source;t.bindTexture(ee,T.__webglTexture,33984+V);const be=n.get(oe);if(oe.version!==be.__version||ie===!0){t.activeTexture(33984+V),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const le=E(y)&&M(y.image)===!1;let $=x(y.image,le,!1,f);$=Ft(y,$);const ge=M($)||a,ve=r.convert(y.format,y.encoding);let he=r.convert(y.type),_e=v(y.internalFormat,ve,he,y.encoding,y.isVideoTexture);X(ee,y,ge);let pe;const De=y.mipmaps,Be=a&&y.isVideoTexture!==!0,Qe=be.__version===void 0||ie===!0,L=C(y,$,ge);if(y.isDepthTexture)_e=6402,a?y.type===Cn?_e=36012:y.type===Tn?_e=33190:y.type===ni?_e=35056:_e=33189:y.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===An&&_e===6402&&y.type!==Ya&&y.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Tn,he=r.convert(y.type)),y.format===ri&&_e===6402&&(_e=34041,y.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ni,he=r.convert(y.type))),Qe&&(Be?t.texStorage2D(3553,1,_e,$.width,$.height):t.texImage2D(3553,0,_e,$.width,$.height,0,ve,he,null));else if(y.isDataTexture)if(De.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,L,_e,De[0].width,De[0].height);for(let k=0,K=De.length;k<K;k++)pe=De[k],Be?t.texSubImage2D(3553,k,0,0,pe.width,pe.height,ve,he,pe.data):t.texImage2D(3553,k,_e,pe.width,pe.height,0,ve,he,pe.data);y.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,L,_e,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,ve,he,$.data)):t.texImage2D(3553,0,_e,$.width,$.height,0,ve,he,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(35866,L,_e,De[0].width,De[0].height,$.depth);for(let k=0,K=De.length;k<K;k++)pe=De[k],y.format!==kt?ve!==null?Be?t.compressedTexSubImage3D(35866,k,0,0,0,pe.width,pe.height,$.depth,ve,pe.data,0,0):t.compressedTexImage3D(35866,k,_e,pe.width,pe.height,$.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,k,0,0,0,pe.width,pe.height,$.depth,ve,he,pe.data):t.texImage3D(35866,k,_e,pe.width,pe.height,$.depth,0,ve,he,pe.data)}else{Be&&Qe&&t.texStorage2D(3553,L,_e,De[0].width,De[0].height);for(let k=0,K=De.length;k<K;k++)pe=De[k],y.format!==kt?ve!==null?Be?t.compressedTexSubImage2D(3553,k,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(3553,k,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,k,0,0,pe.width,pe.height,ve,he,pe.data):t.texImage2D(3553,k,_e,pe.width,pe.height,0,ve,he,pe.data)}else if(y.isDataArrayTexture)Be?(Qe&&t.texStorage3D(35866,L,_e,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,ve,he,$.data)):t.texImage3D(35866,0,_e,$.width,$.height,$.depth,0,ve,he,$.data);else if(y.isData3DTexture)Be?(Qe&&t.texStorage3D(32879,L,_e,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,ve,he,$.data)):t.texImage3D(32879,0,_e,$.width,$.height,$.depth,0,ve,he,$.data);else if(y.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(3553,L,_e,$.width,$.height);else{let k=$.width,K=$.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,_e,k,K,0,ve,he,null),k>>=1,K>>=1}}else if(De.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,L,_e,De[0].width,De[0].height);for(let k=0,K=De.length;k<K;k++)pe=De[k],Be?t.texSubImage2D(3553,k,0,0,ve,he,pe):t.texImage2D(3553,k,_e,ve,he,pe);y.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,L,_e,$.width,$.height),t.texSubImage2D(3553,0,0,0,ve,he,$)):t.texImage2D(3553,0,_e,ve,he,$);A(y,ge)&&R(ee),be.__version=oe.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ye(T,y,V){if(y.image.length!==6)return;const ee=Pe(T,y),ie=y.source;t.bindTexture(34067,T.__webglTexture,33984+V);const oe=n.get(ie);if(ie.version!==oe.__version||ee===!0){t.activeTexture(33984+V),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,$=[];for(let k=0;k<6;k++)!be&&!le?$[k]=x(y.image[k],!1,!0,l):$[k]=le?y.image[k].image:y.image[k],$[k]=Ft(y,$[k]);const ge=$[0],ve=M(ge)||a,he=r.convert(y.format,y.encoding),_e=r.convert(y.type),pe=v(y.internalFormat,he,_e,y.encoding),De=a&&y.isVideoTexture!==!0,Be=oe.__version===void 0||ee===!0;let Qe=C(y,ge,ve);X(34067,y,ve);let L;if(be){De&&Be&&t.texStorage2D(34067,Qe,pe,ge.width,ge.height);for(let k=0;k<6;k++){L=$[k].mipmaps;for(let K=0;K<L.length;K++){const ce=L[K];y.format!==kt?he!==null?De?t.compressedTexSubImage2D(34069+k,K,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(34069+k,K,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+k,K,0,0,ce.width,ce.height,he,_e,ce.data):t.texImage2D(34069+k,K,pe,ce.width,ce.height,0,he,_e,ce.data)}}}else{L=y.mipmaps,De&&Be&&(L.length>0&&Qe++,t.texStorage2D(34067,Qe,pe,$[0].width,$[0].height));for(let k=0;k<6;k++)if(le){De?t.texSubImage2D(34069+k,0,0,0,$[k].width,$[k].height,he,_e,$[k].data):t.texImage2D(34069+k,0,pe,$[k].width,$[k].height,0,he,_e,$[k].data);for(let K=0;K<L.length;K++){const fe=L[K].image[k].image;De?t.texSubImage2D(34069+k,K+1,0,0,fe.width,fe.height,he,_e,fe.data):t.texImage2D(34069+k,K+1,pe,fe.width,fe.height,0,he,_e,fe.data)}}else{De?t.texSubImage2D(34069+k,0,0,0,he,_e,$[k]):t.texImage2D(34069+k,0,pe,he,_e,$[k]);for(let K=0;K<L.length;K++){const ce=L[K];De?t.texSubImage2D(34069+k,K+1,0,0,he,_e,ce.image[k]):t.texImage2D(34069+k,K+1,pe,he,_e,ce.image[k])}}}A(y,ve)&&R(34067),oe.__version=ie.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function de(T,y,V,ee,ie){const oe=r.convert(V.format,V.encoding),be=r.convert(V.type),le=v(V.internalFormat,oe,be,V.encoding);n.get(y).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,le,y.width,y.height,y.depth,0,oe,be,null):t.texImage2D(ie,0,le,y.width,y.height,0,oe,be,null)),t.bindFramebuffer(36160,T),Ue(y)?h.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(V).__webglTexture,0,$e(y)):(ie===3553||ie>=34069&&ie<=34074)&&s.framebufferTexture2D(36160,ee,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(T,y,V){if(s.bindRenderbuffer(36161,T),y.depthBuffer&&!y.stencilBuffer){let ee=33189;if(V||Ue(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Cn?ee=36012:ie.type===Tn&&(ee=33190));const oe=$e(y);Ue(y)?h.renderbufferStorageMultisampleEXT(36161,oe,ee,y.width,y.height):s.renderbufferStorageMultisample(36161,oe,ee,y.width,y.height)}else s.renderbufferStorage(36161,ee,y.width,y.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(y.depthBuffer&&y.stencilBuffer){const ee=$e(y);V&&Ue(y)===!1?s.renderbufferStorageMultisample(36161,ee,35056,y.width,y.height):Ue(y)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,y.width,y.height):s.renderbufferStorage(36161,34041,y.width,y.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<ee.length;ie++){const oe=ee[ie],be=r.convert(oe.format,oe.encoding),le=r.convert(oe.type),$=v(oe.internalFormat,be,le,oe.encoding),ge=$e(y);V&&Ue(y)===!1?s.renderbufferStorageMultisample(36161,ge,$,y.width,y.height):Ue(y)?h.renderbufferStorageMultisampleEXT(36161,ge,$,y.width,y.height):s.renderbufferStorage(36161,$,y.width,y.height)}}s.bindRenderbuffer(36161,null)}function we(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,ie=$e(y);if(y.depthTexture.format===An)Ue(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):s.framebufferTexture2D(36160,36096,3553,ee,0);else if(y.depthTexture.format===ri)Ue(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):s.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(T){const y=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");we(y.__webglFramebuffer,T)}else if(V){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=s.createRenderbuffer(),Ne(y.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ne(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function ot(T,y,V){const ee=n.get(T);y!==void 0&&de(ee.__webglFramebuffer,T,T.texture,36064,3553),V!==void 0&&xe(T)}function lt(T){const y=T.texture,V=n.get(T),ee=n.get(y);T.addEventListener("dispose",J),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,o.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,oe=T.isWebGLMultipleRenderTargets===!0,be=M(T)||a;if(ie){V.__webglFramebuffer=[];for(let le=0;le<6;le++)V.__webglFramebuffer[le]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const le=T.texture;for(let $=0,ge=le.length;$<ge;$++){const ve=n.get(le[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ue(T)===!1){const le=oe?y:[y];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let $=0;$<le.length;$++){const ge=le[$];V.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[$]);const ve=r.convert(ge.format,ge.encoding),he=r.convert(ge.type),_e=v(ge.internalFormat,ve,he,ge.encoding,T.isXRRenderTarget===!0),pe=$e(T);s.renderbufferStorageMultisample(36161,pe,_e,T.width,T.height),s.framebufferRenderbuffer(36160,36064+$,36161,V.__webglColorRenderbuffer[$])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),X(34067,y,be);for(let le=0;le<6;le++)de(V.__webglFramebuffer[le],T,y,36064,34069+le);A(y,be)&&R(34067),t.unbindTexture()}else if(oe){const le=T.texture;for(let $=0,ge=le.length;$<ge;$++){const ve=le[$],he=n.get(ve);t.bindTexture(3553,he.__webglTexture),X(3553,ve,be),de(V.__webglFramebuffer,T,ve,36064+$,3553),A(ve,be)&&R(3553)}t.unbindTexture()}else{let le=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?le=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),X(le,y,be),de(V.__webglFramebuffer,T,y,36064,le),A(y,be)&&R(le),t.unbindTexture()}T.depthBuffer&&xe(T)}function ct(T){const y=M(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,ie=V.length;ee<ie;ee++){const oe=V[ee];if(A(oe,y)){const be=T.isWebGLCubeRenderTarget?34067:3553,le=n.get(oe).__webglTexture;t.bindTexture(be,le),R(be),t.unbindTexture()}}}function Ct(T){if(a&&T.samples>0&&Ue(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,ee=T.height;let ie=16384;const oe=[],be=T.stencilBuffer?33306:36096,le=n.get(T),$=T.isWebGLMultipleRenderTargets===!0;if($)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){oe.push(36064+ge),T.depthBuffer&&oe.push(be);const ve=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ve===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),$&&s.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[ge]),ve===!0&&(s.invalidateFramebuffer(36008,[be]),s.invalidateFramebuffer(36009,[be])),$){const he=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,he,0)}s.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,9728),m&&s.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,le.__webglColorRenderbuffer[ge]);const ve=n.get(y[ge]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function $e(T){return Math.min(p,T.samples)}function Ue(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xt(T){const y=o.render.frame;_.get(T)!==y&&(_.set(T,y),T.update())}function Ft(T,y){const V=T.encoding,ee=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ar||V!==Rn&&(V===ke?a===!1?e.has("EXT_sRGB")===!0&&ee===kt?(T.format=ar,T.minFilter=Dt,T.generateMipmaps=!1):y=Qa.sRGBToLinear(y):(ee!==kt||ie!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),y}this.allocateTextureUnit=j,this.resetTextureUnits=Q,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=re,this.rebindTextures=ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ue}function Bp(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Dn)return 5121;if(r===Pc)return 32819;if(r===Dc)return 32820;if(r===Cc)return 5120;if(r===Ac)return 5122;if(r===Ya)return 5123;if(r===Lc)return 5124;if(r===Tn)return 5125;if(r===Cn)return 5126;if(r===Ti)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rc)return 6406;if(r===kt)return 6408;if(r===Fc)return 6409;if(r===zc)return 6410;if(r===An)return 6402;if(r===ri)return 34041;if(r===Ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ar)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nc)return 6403;if(r===Uc)return 36244;if(r===Oc)return 33319;if(r===kc)return 33320;if(r===Bc)return 36249;if(r===bs||r===Ms||r===Ss||r===ws)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ms)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ss)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zr||r===Nr||r===Ur||r===Or)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ur)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kr||r===Br)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kr)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Br)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gr||r===Vr||r===Hr||r===Wr||r===qr||r===Xr||r===$r||r===jr||r===Yr||r===Zr||r===Jr||r===Kr||r===Qr||r===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$r)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ea)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ta)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ta)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Gp extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const d of e.hand.values()){const c=t.getJointPose(d,n),g=this._getHandJoint(l,d);c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=c.radius),g.visible=c!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hp extends gt{constructor(e,t,n,i,r,o,a,u,l,f){if(f=f!==void 0?f:An,f!==An&&f!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===An&&(n=Tn),n===void 0&&f===ri&&(n=ni),super(null,i,r,o,a,u,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=u!==void 0?u:ft,this.flipY=!1,this.generateMipmaps=!1}}class Wp extends oi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",u=null,l=null,f=null,p=null,h=null,m=null;const _=t.getContextAttributes();let d=null,c=null;const g=[],w=[],x=new Set,M=new Map,E=new wt;E.layers.enable(1),E.viewport=new Ve;const A=new wt;A.layers.enable(2),A.viewport=new Ve;const R=[E,A],v=new Gp;v.layers.enable(1),v.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let O=g[H];return O===void 0&&(O=new Js,g[H]=O),O.getTargetRaySpace()},this.getControllerGrip=function(H){let O=g[H];return O===void 0&&(O=new Js,g[H]=O),O.getGripSpace()},this.getHand=function(H){let O=g[H];return O===void 0&&(O=new Js,g[H]=O),O.getHandSpace()};function B(H){const O=w.indexOf(H.inputSource);if(O===-1)return;const re=g[O];re!==void 0&&re.dispatchEvent({type:H.type,data:H.inputSource})}function J(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",N);for(let H=0;H<g.length;H++){const O=w[H];O!==null&&(w[H]=null,g[H].disconnect(O))}C=null,P=null,e.setRenderTarget(d),h=null,p=null,f=null,i=null,c=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",J),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:h}),c=new In(h.framebufferWidth,h.framebufferHeight,{format:kt,type:Dn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let O=null,re=null,ne=null;_.depth&&(ne=_.stencil?35056:33190,O=_.stencil?ri:An,re=_.stencil?ni:Tn);const ae={colorFormat:32856,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(i,t),p=f.createProjectionLayer(ae),i.updateRenderState({layers:[p]}),c=new In(p.textureWidth,p.textureHeight,{format:kt,type:Dn,depthTexture:new Hp(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const X=e.properties.get(c);X.__ignoreDepthValues=p.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(H){for(let O=0;O<H.removed.length;O++){const re=H.removed[O],ne=w.indexOf(re);ne>=0&&(w[ne]=null,g[ne].disconnect(re))}for(let O=0;O<H.added.length;O++){const re=H.added[O];let ne=w.indexOf(re);if(ne===-1){for(let X=0;X<g.length;X++)if(X>=w.length){w.push(re),ne=X;break}else if(w[X]===null){w[X]=re,ne=X;break}if(ne===-1)break}const ae=g[ne];ae&&ae.connect(re)}}const I=new F,U=new F;function Y(H,O,re){I.setFromMatrixPosition(O.matrixWorld),U.setFromMatrixPosition(re.matrixWorld);const ne=I.distanceTo(U),ae=O.projectionMatrix.elements,X=re.projectionMatrix.elements,Pe=ae[14]/(ae[10]-1),ue=ae[14]/(ae[10]+1),ye=(ae[9]+1)/ae[5],de=(ae[9]-1)/ae[5],Ne=(ae[8]-1)/ae[0],we=(X[8]+1)/X[0],xe=Pe*Ne,ot=Pe*we,lt=ne/(-Ne+we),ct=lt*-Ne;O.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ct),H.translateZ(lt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ct=Pe+lt,$e=ue+lt,Ue=xe-ct,Xt=ot+(ne-ct),Ft=ye*ue/$e*Ct,T=de*ue/$e*Ct;H.projectionMatrix.makePerspective(Ue,Xt,Ft,T,Ct,$e)}function Q(H,O){O===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(O.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;v.near=A.near=E.near=H.near,v.far=A.far=E.far=H.far,(C!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,P=v.far);const O=H.parent,re=v.cameras;Q(v,O);for(let ae=0;ae<re.length;ae++)Q(re[ae],O);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),H.matrix.copy(v.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ne=H.children;for(let ae=0,X=ne.length;ae<X;ae++)ne[ae].updateMatrixWorld(!0);re.length===2?Y(v,E,A):v.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(H){p!==null&&(p.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.getPlanes=function(){return x};let j=null;function te(H,O){if(l=O.getViewerPose(u||o),m=O,l!==null){const re=l.views;h!==null&&(e.setRenderTargetFramebuffer(c,h.framebuffer),e.setRenderTarget(c));let ne=!1;re.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let ae=0;ae<re.length;ae++){const X=re[ae];let Pe=null;if(h!==null)Pe=h.getViewport(X);else{const ye=f.getViewSubImage(p,X);Pe=ye.viewport,ae===0&&(e.setRenderTargetTextures(c,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(c))}let ue=R[ae];ue===void 0&&(ue=new wt,ue.layers.enable(ae),ue.viewport=new Ve,R[ae]=ue),ue.matrix.fromArray(X.transform.matrix),ue.projectionMatrix.fromArray(X.projectionMatrix),ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ae===0&&v.matrix.copy(ue.matrix),ne===!0&&v.cameras.push(ue)}}for(let re=0;re<g.length;re++){const ne=w[re],ae=g[re];ne!==null&&ae!==void 0&&ae.update(ne,O,u||o)}if(j&&j(H,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let re=null;for(const ne of x)O.detectedPlanes.has(ne)||(re===null&&(re=[]),re.push(ne));if(re!==null)for(const ne of re)x.delete(ne),M.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of O.detectedPlanes)if(!x.has(ne))x.add(ne),M.set(ne,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const ae=M.get(ne);ne.lastChangedTime>ae&&(M.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}m=null}const Z=new co;Z.setAnimationLoop(te),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function qp(s,e){function t(d,c){c.color.getRGB(d.fogColor.value,ao(s)),c.isFog?(d.fogNear.value=c.near,d.fogFar.value=c.far):c.isFogExp2&&(d.fogDensity.value=c.density)}function n(d,c,g,w,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?i(d,c):c.isMeshToonMaterial?(i(d,c),f(d,c)):c.isMeshPhongMaterial?(i(d,c),l(d,c)):c.isMeshStandardMaterial?(i(d,c),p(d,c),c.isMeshPhysicalMaterial&&h(d,c,x)):c.isMeshMatcapMaterial?(i(d,c),m(d,c)):c.isMeshDepthMaterial?i(d,c):c.isMeshDistanceMaterial?(i(d,c),_(d,c)):c.isMeshNormalMaterial?i(d,c):c.isLineBasicMaterial?(r(d,c),c.isLineDashedMaterial&&o(d,c)):c.isPointsMaterial?a(d,c,g,w):c.isSpriteMaterial?u(d,c):c.isShadowMaterial?(d.color.value.copy(c.color),d.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function i(d,c){d.opacity.value=c.opacity,c.color&&d.diffuse.value.copy(c.color),c.emissive&&d.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(d.map.value=c.map),c.alphaMap&&(d.alphaMap.value=c.alphaMap),c.bumpMap&&(d.bumpMap.value=c.bumpMap,d.bumpScale.value=c.bumpScale,c.side===Rt&&(d.bumpScale.value*=-1)),c.displacementMap&&(d.displacementMap.value=c.displacementMap,d.displacementScale.value=c.displacementScale,d.displacementBias.value=c.displacementBias),c.emissiveMap&&(d.emissiveMap.value=c.emissiveMap),c.normalMap&&(d.normalMap.value=c.normalMap,d.normalScale.value.copy(c.normalScale),c.side===Rt&&d.normalScale.value.negate()),c.specularMap&&(d.specularMap.value=c.specularMap),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=c.reflectivity,d.ior.value=c.ior,d.refractionRatio.value=c.refractionRatio),c.lightMap){d.lightMap.value=c.lightMap;const M=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=c.lightMapIntensity*M}c.aoMap&&(d.aoMap.value=c.aoMap,d.aoMapIntensity.value=c.aoMapIntensity);let w;c.map?w=c.map:c.specularMap?w=c.specularMap:c.displacementMap?w=c.displacementMap:c.normalMap?w=c.normalMap:c.bumpMap?w=c.bumpMap:c.roughnessMap?w=c.roughnessMap:c.metalnessMap?w=c.metalnessMap:c.alphaMap?w=c.alphaMap:c.emissiveMap?w=c.emissiveMap:c.clearcoatMap?w=c.clearcoatMap:c.clearcoatNormalMap?w=c.clearcoatNormalMap:c.clearcoatRoughnessMap?w=c.clearcoatRoughnessMap:c.iridescenceMap?w=c.iridescenceMap:c.iridescenceThicknessMap?w=c.iridescenceThicknessMap:c.specularIntensityMap?w=c.specularIntensityMap:c.specularColorMap?w=c.specularColorMap:c.transmissionMap?w=c.transmissionMap:c.thicknessMap?w=c.thicknessMap:c.sheenColorMap?w=c.sheenColorMap:c.sheenRoughnessMap&&(w=c.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix));let x;c.aoMap?x=c.aoMap:c.lightMap&&(x=c.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function r(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity}function o(d,c){d.dashSize.value=c.dashSize,d.totalSize.value=c.dashSize+c.gapSize,d.scale.value=c.scale}function a(d,c,g,w){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.size.value=c.size*g,d.scale.value=w*.5,c.map&&(d.map.value=c.map),c.alphaMap&&(d.alphaMap.value=c.alphaMap),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);let x;c.map?x=c.map:c.alphaMap&&(x=c.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function u(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.rotation.value=c.rotation,c.map&&(d.map.value=c.map),c.alphaMap&&(d.alphaMap.value=c.alphaMap),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);let g;c.map?g=c.map:c.alphaMap&&(g=c.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function l(d,c){d.specular.value.copy(c.specular),d.shininess.value=Math.max(c.shininess,1e-4)}function f(d,c){c.gradientMap&&(d.gradientMap.value=c.gradientMap)}function p(d,c){d.roughness.value=c.roughness,d.metalness.value=c.metalness,c.roughnessMap&&(d.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(d.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(d.envMapIntensity.value=c.envMapIntensity)}function h(d,c,g){d.ior.value=c.ior,c.sheen>0&&(d.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),d.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(d.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(d.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(d.clearcoat.value=c.clearcoat,d.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(d.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),d.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===Rt&&d.clearcoatNormalScale.value.negate())),c.iridescence>0&&(d.iridescence.value=c.iridescence,d.iridescenceIOR.value=c.iridescenceIOR,d.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(d.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(d.transmission.value=c.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(d.transmissionMap.value=c.transmissionMap),d.thickness.value=c.thickness,c.thicknessMap&&(d.thicknessMap.value=c.thicknessMap),d.attenuationDistance.value=c.attenuationDistance,d.attenuationColor.value.copy(c.attenuationColor)),d.specularIntensity.value=c.specularIntensity,d.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(d.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(d.specularColorMap.value=c.specularColorMap)}function m(d,c){c.matcap&&(d.matcap.value=c.matcap)}function _(d,c){d.referencePosition.value.copy(c.referencePosition),d.nearDistance.value=c.nearDistance,d.farDistance.value=c.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function u(w,x){const M=x.program;n.uniformBlockBinding(w,M)}function l(w,x){let M=i[w.id];M===void 0&&(_(w),M=f(w),i[w.id]=M,w.addEventListener("dispose",c));const E=x.program;n.updateUBOMapping(w,E);const A=e.render.frame;r[w.id]!==A&&(h(w),r[w.id]=A)}function f(w){const x=p();w.__bindingPointIndex=x;const M=s.createBuffer(),E=w.__size,A=w.usage;return s.bindBuffer(35345,M),s.bufferData(35345,E,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,M),M}function p(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const x=i[w.id],M=w.uniforms,E=w.__cache;s.bindBuffer(35345,x);for(let A=0,R=M.length;A<R;A++){const v=M[A];if(m(v,A,E)===!0){const C=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let B=0;for(let J=0;J<P.length;J++){const N=P[J],I=d(N);typeof N=="number"?(v.__data[0]=N,s.bufferSubData(35345,C+B,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,C,v.__data)}}s.bindBuffer(35345,null)}function m(w,x,M){const E=w.value;if(M[x]===void 0){if(typeof E=="number")M[x]=E;else{const A=Array.isArray(E)?E:[E],R=[];for(let v=0;v<A.length;v++)R.push(A[v].clone());M[x]=R}return!0}else if(typeof E=="number"){if(M[x]!==E)return M[x]=E,!0}else{const A=Array.isArray(M[x])?M[x]:[M[x]],R=Array.isArray(E)?E:[E];for(let v=0;v<A.length;v++){const C=A[v];if(C.equals(R[v])===!1)return C.copy(R[v]),!0}}return!1}function _(w){const x=w.uniforms;let M=0;const E=16;let A=0;for(let R=0,v=x.length;R<v;R++){const C=x[R],P={boundary:0,storage:0},B=Array.isArray(C.value)?C.value:[C.value];for(let J=0,N=B.length;J<N;J++){const I=B[J],U=d(I);P.boundary+=U.boundary,P.storage+=U.storage}if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,R>0){A=M%E;const J=E-A;A!==0&&J-P.boundary<0&&(M+=E-A,C.__offset=M)}M+=P.storage}return A=M%E,A>0&&(M+=E-A),w.__size=M,w.__cache={},this}function d(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function c(w){const x=w.target;x.removeEventListener("dispose",c);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:u,update:l,dispose:g}}function $p(){const s=Ai("canvas");return s.style.display="block",s}function mo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:$p(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,u=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=s.alpha!==void 0?s.alpha:!1;let p=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1;const d=this;let c=!1,g=0,w=0,x=null,M=-1,E=null;const A=new Ve,R=new Ve;let v=null,C=e.width,P=e.height,B=1,J=null,N=null;const I=new Ve(0,0,C,P),U=new Ve(0,0,C,P);let Y=!1;const Q=new pr;let j=!1,te=!1,Z=null;const H=new Xe,O=new ze,re=new F,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return x===null?B:1}let X=t;function Pe(b,z){for(let G=0;G<b.length;G++){const D=b[G],W=e.getContext(D,z);if(W!==null)return W}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ur}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",De,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),X=Pe(z,b),X===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,ye,de,Ne,we,xe,ot,lt,ct,Ct,$e,Ue,Xt,Ft,T,y,V,ee,ie,oe,be,le,$,ge;function ve(){ue=new sf(X),ye=new Zh(X,ue,s),ue.init(ye),le=new Bp(X,ue,ye),de=new Op(X,ue,ye),Ne=new of,we=new wp,xe=new kp(X,ue,de,we,ye,le,Ne),ot=new Kh(d),lt=new nf(d),ct=new pd(X,ye),$=new jh(X,ue,ct,ye),Ct=new rf(X,ct,Ne,$),$e=new uf(X,Ct,ct,Ne),ie=new df(X,ye,xe),y=new Jh(we),Ue=new Sp(d,ot,lt,ue,ye,$,y),Xt=new qp(d,we),Ft=new Tp,T=new Rp(ue,ye),ee=new $h(d,ot,lt,de,$e,f,o),V=new Up(d,$e,ye),ge=new Xp(X,Ne,ye,de),oe=new Yh(X,ue,Ne,ye),be=new af(X,ue,Ne,ye),Ne.programs=Ue.programs,d.capabilities=ye,d.extensions=ue,d.properties=we,d.renderLists=Ft,d.shadowMap=V,d.state=de,d.info=Ne}ve();const he=new Wp(d,X);this.xr=he,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(C,P,!1))},this.getSize=function(b){return b.set(C,P)},this.setSize=function(b,z,G){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=b,P=z,e.width=Math.floor(b*B),e.height=Math.floor(z*B),G!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(C*B,P*B).floor()},this.setDrawingBufferSize=function(b,z,G){C=b,P=z,B=G,e.width=Math.floor(b*G),e.height=Math.floor(z*G),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,z,G,D){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,z,G,D),de.viewport(A.copy(I).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,z,G,D){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,z,G,D),de.scissor(R.copy(U).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){de.setScissorTest(Y=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,z=!0,G=!0){let D=0;b&&(D|=16384),z&&(D|=256),G&&(D|=1024),X.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),Ft.dispose(),T.dispose(),we.dispose(),ot.dispose(),lt.dispose(),$e.dispose(),$.dispose(),ge.dispose(),Ue.dispose(),he.dispose(),he.removeEventListener("sessionstart",ce),he.removeEventListener("sessionend",fe),Z&&(Z.dispose(),Z=null),Fe.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),c=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),c=!1;const b=Ne.autoReset,z=V.enabled,G=V.autoUpdate,D=V.needsUpdate,W=V.type;ve(),Ne.autoReset=b,V.enabled=z,V.autoUpdate=G,V.needsUpdate=D,V.type=W}function De(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Be(b){const z=b.target;z.removeEventListener("dispose",Be),Qe(z)}function Qe(b){L(b),we.remove(b)}function L(b){const z=we.get(b).programs;z!==void 0&&(z.forEach(function(G){Ue.releaseProgram(G)}),b.isShaderMaterial&&Ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,G,D,W,me){z===null&&(z=ne);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ee=vo(b,z,G,D,W);de.setMaterial(D,Me);let Te=G.index,Re=1;D.wireframe===!0&&(Te=Ct.getWireframeAttribute(G),Re=2);const Ce=G.drawRange,Ae=G.attributes.position;let He=Ce.start*Re,vt=(Ce.start+Ce.count)*Re;me!==null&&(He=Math.max(He,me.start*Re),vt=Math.min(vt,(me.start+me.count)*Re)),Te!==null?(He=Math.max(He,0),vt=Math.min(vt,Te.count)):Ae!=null&&(He=Math.max(He,0),vt=Math.min(vt,Ae.count));const jt=vt-He;if(jt<0||jt===1/0)return;$.setup(W,D,Ee,G,Te);let mn,We=oe;if(Te!==null&&(mn=ct.get(Te),We=be,We.setIndex(mn)),W.isMesh)D.wireframe===!0?(de.setLineWidth(D.wireframeLinewidth*ae()),We.setMode(1)):We.setMode(4);else if(W.isLine){let Le=D.linewidth;Le===void 0&&(Le=1),de.setLineWidth(Le*ae()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(He,jt,W.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fs=Math.min(G.instanceCount,Le);We.renderInstances(He,jt,fs)}else We.render(He,jt)},this.compile=function(b,z){function G(D,W,me){D.transparent===!0&&D.side===Gi?(D.side=Rt,D.needsUpdate=!0,At(D,W,me),D.side=Pn,D.needsUpdate=!0,At(D,W,me),D.side=Gi):At(D,W,me)}h=T.get(b),h.init(),_.push(h),b.traverseVisible(function(D){D.isLight&&D.layers.test(z.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights(d.physicallyCorrectLights),b.traverse(function(D){const W=D.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const Me=W[me];G(Me,b,D)}else G(W,b,D)}),_.pop(),h=null};let k=null;function K(b){k&&k(b)}function ce(){Fe.stop()}function fe(){Fe.start()}const Fe=new co;Fe.setAnimationLoop(K),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(b){k=b,he.setAnimationLoop(b),b===null?Fe.stop():Fe.start()},he.addEventListener("sessionstart",ce),he.addEventListener("sessionend",fe),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),b.isScene===!0&&b.onBeforeRender(d,b,z,x),h=T.get(b,_.length),h.init(),_.push(h),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(H),te=this.localClippingEnabled,j=y.init(this.clippingPlanes,te,z),p=Ft.get(b,m.length),p.init(),m.push(p),et(b,z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(J,N),j===!0&&y.beginShadows();const G=h.state.shadowsArray;if(V.render(G,b,z),j===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(p,b),h.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const D=z.cameras;for(let W=0,me=D.length;W<me;W++){const Me=D[W];rt(p,b,Me,Me.viewport)}}else rt(p,b,z);x!==null&&(xe.updateMultisampleRenderTarget(x),xe.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(d,b,z),$.resetDefaultState(),M=-1,E=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function et(b,z,G,D){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){D&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const Me=$e.update(b),Ee=b.material;Ee.visible&&p.push(b,Me,Ee,G,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ne.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ne.render.frame),!b.frustumCulled||Q.intersectsObject(b))){D&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const Me=$e.update(b),Ee=b.material;if(Array.isArray(Ee)){const Te=Me.groups;for(let Re=0,Ce=Te.length;Re<Ce;Re++){const Ae=Te[Re],He=Ee[Ae.materialIndex];He&&He.visible&&p.push(b,Me,He,G,re.z,Ae)}}else Ee.visible&&p.push(b,Me,Ee,G,re.z,null)}}const me=b.children;for(let Me=0,Ee=me.length;Me<Ee;Me++)et(me[Me],z,G,D)}function rt(b,z,G,D){const W=b.opaque,me=b.transmissive,Me=b.transparent;h.setupLightsView(G),me.length>0&&pn(W,z,G),D&&de.viewport(A.copy(D)),W.length>0&&Ge(W,z,G),me.length>0&&Ge(me,z,G),Me.length>0&&Ge(Me,z,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function pn(b,z,G){const D=ye.isWebGL2;Z===null&&(Z=new In(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ti:Dn,minFilter:Ei,samples:D&&r===!0?4:0})),d.getDrawingBufferSize(O),D?Z.setSize(O.x,O.y):Z.setSize(or(O.x),or(O.y));const W=d.getRenderTarget();d.setRenderTarget(Z),d.clear();const me=d.toneMapping;d.toneMapping=nn,Ge(b,z,G),d.toneMapping=me,xe.updateMultisampleRenderTarget(Z),xe.updateRenderTargetMipmap(Z),d.setRenderTarget(W)}function Ge(b,z,G){const D=z.isScene===!0?z.overrideMaterial:null;for(let W=0,me=b.length;W<me;W++){const Me=b[W],Ee=Me.object,Te=Me.geometry,Re=D===null?Me.material:D,Ce=Me.group;Ee.layers.test(G.layers)&&$t(Ee,z,G,Te,Re,Ce)}}function $t(b,z,G,D,W,me){b.onBeforeRender(d,z,G,D,W,me),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(d,z,G,D,b,me),W.transparent===!0&&W.side===Gi?(W.side=Rt,W.needsUpdate=!0,d.renderBufferDirect(G,z,D,W,b,me),W.side=Pn,W.needsUpdate=!0,d.renderBufferDirect(G,z,D,W,b,me),W.side=Gi):d.renderBufferDirect(G,z,D,W,b,me),b.onAfterRender(d,z,G,D,W,me)}function At(b,z,G){z.isScene!==!0&&(z=ne);const D=we.get(b),W=h.state.lights,me=h.state.shadowsArray,Me=W.state.version,Ee=Ue.getParameters(b,W.state,me,z,G),Te=Ue.getProgramCacheKey(Ee);let Re=D.programs;D.environment=b.isMeshStandardMaterial?z.environment:null,D.fog=z.fog,D.envMap=(b.isMeshStandardMaterial?lt:ot).get(b.envMap||D.environment),Re===void 0&&(b.addEventListener("dispose",Be),Re=new Map,D.programs=Re);let Ce=Re.get(Te);if(Ce!==void 0){if(D.currentProgram===Ce&&D.lightsStateVersion===Me)return _r(b,Ee),Ce}else Ee.uniforms=Ue.getUniforms(b),b.onBuild(G,Ee,d),b.onBeforeCompile(Ee,d),Ce=Ue.acquireProgram(Ee,Te),Re.set(Te,Ce),D.uniforms=Ee.uniforms;const Ae=D.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=y.uniform),_r(b,Ee),D.needsLights=yo(b),D.lightsStateVersion=Me,D.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMap.value=W.state.directionalShadowMap,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotShadowMap.value=W.state.spotShadowMap,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMap.value=W.state.pointShadowMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=Ce.getUniforms(),vt=ds.seqWithValue(He.seq,Ae);return D.currentProgram=Ce,D.uniformsList=vt,Ce}function _r(b,z){const G=we.get(b);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function vo(b,z,G,D,W){z.isScene!==!0&&(z=ne),xe.resetTextureUnits();const me=z.fog,Me=D.isMeshStandardMaterial?z.environment:null,Ee=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Rn,Te=(D.isMeshStandardMaterial?lt:ot).get(D.envMap||Me),Re=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ce=!!D.normalMap&&!!G.attributes.tangent,Ae=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,vt=!!G.morphAttributes.color,jt=D.toneMapped?d.toneMapping:nn,mn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,We=mn!==void 0?mn.length:0,Le=we.get(D),fs=h.state.lights;if(j===!0&&(te===!0||b!==E)){const xt=b===E&&D.id===M;y.setState(D,b,xt)}let tt=!1;D.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==fs.state.version||Le.outputEncoding!==Ee||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Te||D.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==y.numPlanes||Le.numIntersection!==y.numIntersection)||Le.vertexAlphas!==Re||Le.vertexTangents!==Ce||Le.morphTargets!==Ae||Le.morphNormals!==He||Le.morphColors!==vt||Le.toneMapping!==jt||ye.isWebGL2===!0&&Le.morphTargetsCount!==We)&&(tt=!0):(tt=!0,Le.__version=D.version);let gn=Le.currentProgram;tt===!0&&(gn=At(D,z,W));let vr=!1,ci=!1,ps=!1;const dt=gn.getUniforms(),_n=Le.uniforms;if(de.useProgram(gn.program)&&(vr=!0,ci=!0,ps=!0),D.id!==M&&(M=D.id,ci=!0),vr||E!==b){if(dt.setValue(X,"projectionMatrix",b.projectionMatrix),ye.logarithmicDepthBuffer&&dt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),E!==b&&(E=b,ci=!0,ps=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const xt=dt.map.cameraPosition;xt!==void 0&&xt.setValue(X,re.setFromMatrixPosition(b.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&dt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||W.isSkinnedMesh)&&dt.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(W.isSkinnedMesh){dt.setOptional(X,W,"bindMatrix"),dt.setOptional(X,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(ye.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),dt.setValue(X,"boneTexture",xt.boneTexture,xe),dt.setValue(X,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&ye.isWebGL2===!0)&&ie.update(W,G,D,gn),(ci||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,dt.setValue(X,"receiveShadow",W.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(_n.envMap.value=Te,_n.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ci&&(dt.setValue(X,"toneMappingExposure",d.toneMappingExposure),Le.needsLights&&xo(_n,ps),me&&D.fog===!0&&Xt.refreshFogUniforms(_n,me),Xt.refreshMaterialUniforms(_n,D,B,P,Z),ds.upload(X,Le.uniformsList,_n,xe)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ds.upload(X,Le.uniformsList,_n,xe),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&dt.setValue(X,"center",W.center),dt.setValue(X,"modelViewMatrix",W.modelViewMatrix),dt.setValue(X,"normalMatrix",W.normalMatrix),dt.setValue(X,"modelMatrix",W.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const xt=D.uniformsGroups;for(let gs=0,bo=xt.length;gs<bo;gs++)if(ye.isWebGL2){const xr=xt[gs];ge.update(xr,gn),ge.bind(xr,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function xo(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function yo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,z,G){we.get(b.texture).__webglTexture=z,we.get(b.depthTexture).__webglTexture=G;const D=we.get(b);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const G=we.get(b);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,G=0){x=b,g=z,w=G;let D=!0,W=null,me=!1,Me=!1;if(b){const Te=we.get(b);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),D=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(b):Te.__hasExternalTextures&&xe.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);const Ce=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Ce[z],me=!0):ye.isWebGL2&&b.samples>0&&xe.useMultisampledRTT(b)===!1?W=we.get(b).__webglMultisampledFramebuffer:W=Ce,A.copy(b.viewport),R.copy(b.scissor),v=b.scissorTest}else A.copy(I).multiplyScalar(B).floor(),R.copy(U).multiplyScalar(B).floor(),v=Y;if(de.bindFramebuffer(36160,W)&&ye.drawBuffers&&D&&de.drawBuffers(b,W),de.viewport(A),de.scissor(R),de.setScissorTest(v),me){const Te=we.get(b.texture);X.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,G)}else if(Me){const Te=we.get(b.texture),Re=z||0;X.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,Re)}M=-1},this.readRenderTargetPixels=function(b,z,G,D,W,me,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){de.bindFramebuffer(36160,Ee);try{const Te=b.texture,Re=Te.format,Ce=Te.type;if(Re!==kt&&le.convert(Re)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Ce===Ti&&(ue.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ce!==Dn&&le.convert(Ce)!==X.getParameter(35738)&&!(Ce===Cn&&(ye.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-D&&G>=0&&G<=b.height-W&&X.readPixels(z,G,D,W,le.convert(Re),le.convert(Ce),me)}finally{const Te=x!==null?we.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(b,z,G=0){const D=Math.pow(2,-G),W=Math.floor(z.image.width*D),me=Math.floor(z.image.height*D);xe.setTexture2D(z,0),X.copyTexSubImage2D(3553,G,0,0,b.x,b.y,W,me),de.unbindTexture()},this.copyTextureToTexture=function(b,z,G,D=0){const W=z.image.width,me=z.image.height,Me=le.convert(G.format),Ee=le.convert(G.type);xe.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,D,b.x,b.y,W,me,Me,Ee,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,D,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):X.texSubImage2D(3553,D,b.x,b.y,Me,Ee,z.image),D===0&&G.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(b,z,G,D,W=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Ee=b.max.z-b.min.z+1,Te=le.convert(D.format),Re=le.convert(D.type);let Ce;if(D.isData3DTexture)xe.setTexture3D(D,0),Ce=32879;else if(D.isDataArrayTexture)xe.setTexture2DArray(D,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,D.flipY),X.pixelStorei(37441,D.premultiplyAlpha),X.pixelStorei(3317,D.unpackAlignment);const Ae=X.getParameter(3314),He=X.getParameter(32878),vt=X.getParameter(3316),jt=X.getParameter(3315),mn=X.getParameter(32877),We=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,We.width),X.pixelStorei(32878,We.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Ce,W,z.x,z.y,z.z,me,Me,Ee,Te,Re,We.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ce,W,z.x,z.y,z.z,me,Me,Ee,Te,We.data)):X.texSubImage3D(Ce,W,z.x,z.y,z.z,me,Me,Ee,Te,Re,We),X.pixelStorei(3314,Ae),X.pixelStorei(32878,He),X.pixelStorei(3316,vt),X.pixelStorei(3315,jt),X.pixelStorei(32877,mn),W===0&&D.generateMipmaps&&X.generateMipmap(Ce),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?xe.setTextureCube(b,0):b.isData3DTexture?xe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?xe.setTexture2DArray(b,0):xe.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){g=0,w=0,x=null,de.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class jp extends mo{}jp.prototype.isWebGL1Renderer=!0;class Yp extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wn extends fn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let l=0;const f=[],p=new F,h=new F,m=[],_=[],d=[],c=[];for(let g=0;g<=n;g++){const w=[],x=g/n;let M=0;g==0&&o==0?M=.5/t:g==n&&u==Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){const A=E/t;p.x=-e*Math.cos(i+A*r)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(i+A*r)*Math.sin(o+x*a),_.push(p.x,p.y,p.z),h.copy(p).normalize(),d.push(h.x,h.y,h.z),c.push(A+M,1-x),w.push(l++)}f.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){const x=f[g][w+1],M=f[g][w],E=f[g+1][w],A=f[g+1][w+1];(g!==0||o>0)&&m.push(x,M,A),(g!==n-1||u<Math.PI)&&m.push(M,E,A)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(c,2))}static fromJSON(e){return new wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yi extends Ni{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,r===!1&&i.onStart!==void 0&&i.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){const p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=l.length;p<h;p+=2){const m=l[p],_=l[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return _}return null}}}const Jp=new Zp;class go{constructor(e){this.manager=e!==void 0?e:Jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Kp extends go{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ai("img");function u(){f(),Oa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(p){f(),i&&i(p),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",u,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bi extends go{constructor(e){super(e)}load(e,t,n,i){const r=new gt,o=new Kp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class _o extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ks=new Xe,ka=new F,Ba=new F;class Qp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),Ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ga=new Xe,Mi=new F,Qs=new F;class em extends Qp{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mi),Qs.copy(n.position),Qs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qs),n.updateMatrixWorld(),i.makeTranslation(-Mi.x,-Mi.y,-Mi.z),Ga.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga)}}class tm extends _o{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nm extends _o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);const It=s=>(cr("data-v-0789f171"),s=s(),dr(),s),im={class:"header mx-auto py-10 px-4 lg:px-12 bg-[#112031]"},sm=It(()=>S("div",{id:"canvas",class:"canvas"},null,-1)),rm={class:"container mx-auto"},am={class:"flex justify-between items-center"},om=It(()=>S("div",{class:"flex items-center"},[S("h4",{class:"font-bold text-black-200"},"Natural Drugs")],-1)),lm={class:"flex items-center"},cm=It(()=>S("i",{class:"i-Checked-User text-sm"},null,-1)),dm=It(()=>S("p",null,"LOGIN",-1)),um={class:"grid grid-cols-12 gap-5 mt-[80px]"},hm={class:"col-span-12 lg:col-span-5 flex justify-end items-center"},fm=It(()=>S("div",{class:"col-span-12 lg:col-span-1"},null,-1)),pm={class:"col-span-12 lg:col-span-6 mb-4"},mm=It(()=>S("h1",{class:"leading-normal sm:text-[50px] text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500"},[Ze(" Start With "),S("span",{class:"bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-tomato-500"},"Natural Drugs "),Ze(" & UIKIT Built with Tailwind and Vue3 ")],-1)),gm=It(()=>S("div",{class:"flex py-3 mb-4"},[S("div",{class:"flex items-center mr-5"},[S("svg",{class:"w-4 h-4 mr-2",viewBox:"0 0 256 257",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},[S("defs",null,[S("linearGradient",{x1:"-0.828097821%",y1:"7.6518539%",x2:"57.6359644%",y2:"78.4107719%",id:"linearGradient-1"},[S("stop",{"stop-color":"#41D1FF",offset:"0%"}),S("stop",{"stop-color":"#BD34FE",offset:"100%"})]),S("linearGradient",{x1:"43.3760053%",y1:"2.24179788%",x2:"50.3158848%",y2:"89.0299051%",id:"linearGradient-2"},[S("stop",{"stop-color":"#FFEA83",offset:"0%"}),S("stop",{"stop-color":"#FFDD35",offset:"8.33333%"}),S("stop",{"stop-color":"#FFA800",offset:"100%"})])]),S("g",null,[S("path",{d:"M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z",fill:"url(#linearGradient-1)"}),S("path",{d:"M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z",fill:"url(#linearGradient-2)"})])]),S("p",{class:"text-white"},"Vite")]),S("div",{class:"flex items-center mr-5"},[S("svg",{class:"w-5 h-5 mr-2",viewBox:"0 0 256 154",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},[S("g",null,[S("path",{d:"M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z",fill:"url(#linearGradient-1)"})])]),S("p",{class:"text-white"},"TailwindCss")]),S("div",{class:"flex items-center mr-5"},[S("svg",{class:"w-5 h-5 mr-2",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[S("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[S("g",{transform:"translate(178.06 235.01)"},[S("path",{d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",fill:"#41b883"})]),S("g",{transform:"translate(178.06 235.01)"},[S("path",{d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",fill:"#34495e"})])])]),S("p",{class:"text-white"},"Vue ^3.2.6")])],-1)),_m=It(()=>S("p",{class:"text-white lg:w-9/12 w-full mb-9"}," Over 150+ professionally designed, fully responsive, expertly crafted components and Over 50+ Pages examples that will Boost your next Admin Dashboard Project ",-1)),vm={class:"col-span-12 py-10"},xm={class:"relative max-w-screen-sm mx-auto lg:mx-0 lg:max-w-none grid lg:grid-cols-3 gap-10 lg:gap-8 text-sm"},ym={class:"flex space-x-6"},bm=It(()=>S("div",null,[S("h5",{class:"font-semibold text-white mb-2"}," Start Your Business "),S("p",{class:"leading-normal text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam perferendis facilis officiis nihil optio a. Laborum, incidunt quod numquam quia cupiditate qui sunt ipsa consequuntur a? Tenetur, quidem doloremque? ")],-1)),Mm={class:"flex space-x-6"},Sm=It(()=>S("div",null,[S("h5",{class:"font-semibold text-white mb-2"},[S("a",{href:""},"Buy for youself")]),S("p",{class:"leading-normal text-white"},[Ze(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione quod consectetur sit tempore blanditiis. Quaerat molestias voluptate dolorum magni illum vitae praesentium iste adipisci, porro delectus, voluptatibus, consequatur sit? "),S("a",{href:"https://headlessui.dev",class:"text-white hover:underline"},"Headless UI")])],-1)),wm={class:"flex space-x-6"},Em=It(()=>S("div",null,[S("h5",{class:"font-semibold text-white mb-2"}," Make Ideas "),S("p",{class:"leading-normal text-white"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus rerum hic maiores. Repudiandae eum veritatis voluptates consequuntur, consequatur officia, culpa ipsum, quam saepe necessitatibus porro! Impedit consequuntur expedita tempore! ")],-1)),Tm=Pi('<section class="sticky-section shadow sticky z-50 top-0 bg-white lg:px-12" data-v-0789f171><div class="container mx-auto flex gap-2 flex-wrap p-0" data-v-0789f171><a href="#dashboard" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Dashboard </a><a href="#apps" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Application </a><a href="#components" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Components </a><a href="#widgets" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Widgets </a><a href="#profile" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Profile </a><a href="#credentials" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Credentials </a><a href="#charts" class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl" data-v-0789f171> Charts </a></div></section>',1),Cm={class:"container md:mt-24 my-16 mx-auto bg-no-repeat bg-center relative"},Am=Pi('<div class="absolute inset-0 opacity-25 dark:opacity-50" data-v-0789f171></div><div class="relative grid grid-cols-1 pb-8 text-center z-1" data-v-0789f171><h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white text-success" data-v-0789f171>Trusted by more than 10K users</h3><p class="bg-slate-200 p-10 rounded max-w-xl mx-auto" data-v-0789f171> Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa suscipit, facere molestias error ea doloribus accusantium cumque natus hic soluta consequuntur beatae quidem ut saepe illum fugiat est, quae rem! </p></div><div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1" data-v-0789f171><div class="counter-box text-center" data-v-0789f171><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-0789f171><span class="counter-value" data-target="1548" data-v-0789f171>1548</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-0789f171>Properties Sell</h5></div><div class="counter-box text-center" data-v-0789f171><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-0789f171><span class="counter-value" data-target="25" data-v-0789f171>25</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-0789f171>Award Gained</h5></div><div class="counter-box text-center" data-v-0789f171><h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white" data-v-0789f171><span class="counter-value" data-target="9" data-v-0789f171>9</span>+</h1><h5 class="counter-head text-lg font-medium" data-v-0789f171>Years Experience</h5></div></div>',3),Lm={class:"container my-16 mx-auto"},Pm=It(()=>S("div",{class:"grid grid-cols-1 pb-8 text-center"},[S("h3",{class:"mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"},"Key Features"),S("p",{class:"text-slate-400 max-w-xl mx-auto"},"Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.")],-1)),Dm={class:"grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[10px] items-center"},Rm=Pi('<div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2" data-v-0789f171><div class="grid grid-cols-1 gap-[30px]" data-v-0789f171><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor w-5 h-5" data-v-0789f171><rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-v-0789f171></rect><line x1="8" y1="21" x2="16" y2="21" data-v-0789f171></line><line x1="12" y1="17" x2="12" y2="21" data-v-0789f171></line></svg></div><div class="text-right flex-1 md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>Use On Any Device</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather w-5 h-5" data-v-0789f171><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" data-v-0789f171></path><line x1="16" y1="8" x2="2" y2="22" data-v-0789f171></line><line x1="17.5" y1="15" x2="9" y2="15" data-v-0789f171></line></svg></div><div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>Feather Icons</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye w-5 h-5" data-v-0789f171><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-0789f171></path><circle cx="12" cy="12" r="3" data-v-0789f171></circle></svg></div><div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>Retina Ready</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div></div></div>',1),Im={class:"lg:col-span-4 md:col-span-12 lg:mx-1 lg:order-2 order-1"},Fm=Pi('<div class="lg:col-span-4 md:col-span-6 order-3" data-v-0789f171><div class="grid grid-cols-1 gap-[30px]" data-v-0789f171><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check w-5 h-5" data-v-0789f171><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-0789f171></path><circle cx="8.5" cy="7" r="4" data-v-0789f171></circle><polyline points="17 11 19 13 23 9" data-v-0789f171></polyline></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>W3c Valid Code</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone w-5 h-5" data-v-0789f171><rect x="5" y="2" width="14" height="20" rx="2" ry="2" data-v-0789f171></rect><line x1="12" y1="18" x2="12.01" y2="18" data-v-0789f171></line></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>Fully Responsive</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div><div class="group flex transition-all duration-500 ease-in-out xl:p-3" data-v-0789f171><div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out" data-v-0789f171><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart w-5 h-5" data-v-0789f171><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-0789f171></path></svg></div><div class="flex-1 ltr:ml-4 rtl:mr-4" data-v-0789f171><h4 class="mb-0 text-lg font-medium" data-v-0789f171>Browser Compatibility</h4><p class="text-slate-400 mt-3" data-v-0789f171>One disadvantage of Lorum Ipsum is that in Latin frequently than others</p></div></div></div></div>',1),zm=Pi('<div class="container md:my-24 my-16 mx-auto" data-v-0789f171><div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]" data-v-0789f171><div class="mx-auto py-4" data-v-0789f171><img src="'+Mr+'" class="h-6" alt="" data-v-0789f171></div><div class="mx-auto py-4" data-v-0789f171><img src="'+Uo+'" class="h-6" alt="" data-v-0789f171></div><div class="mx-auto py-4" data-v-0789f171><img src="'+Oo+'" class="h-6" alt="" data-v-0789f171></div><div class="mx-auto py-4" data-v-0789f171><img src="'+Mr+'" class="h-6" alt="" data-v-0789f171></div><div class="mx-auto py-4" data-v-0789f171><img src="'+ko+'" class="h-6" alt="" data-v-0789f171></div><div class="mx-auto py-4" data-v-0789f171><img src="'+Bo+'" class="h-6" alt="" data-v-0789f171></div></div></div>',1),Nm={__name:"LandingPage",setup(s){const e=new Yp,t=new wt(45,window.innerWidth/window.innerHeight,1,500);t.position.z=8,e.add(t);const n=new tm(16777215,1,100);n.position.set(0,20,25);const i=new nm(16777215,.2);i.position.set(0,-100,100),e.add(n,i);const r=new wn(2,64,64),o=new bi().load("/static/dashboard/t.png"),a=new yi({map:o,side:dn,transparent:!0,opacity:.9,alphaTest:.5}),u=new Et(r,a);e.add(u);const l=new wn(3,188,188),f=new bi().load("/static/dashboard/c1.png"),p=new yi({map:f,side:dn,transparent:!0,opacity:.6,alphaTest:.5}),h=new Et(l,p);e.add(h);const m=new wn(5,188,188),_=new bi().load("/static/dashboard/c.png"),d=new yi({map:_,side:dn,transparent:!0,opacity:.5,alphaTest:.5}),c=new Et(m,d);e.add(c);const g=new wn(2.1,288,288),w=new bi().load("/static/dashboard/c2.png"),x=new yi({map:w,side:dn,transparent:!0,opacity:.9,alphaTest:.5}),M=new Et(g,x);e.add(M);const E=new wn(9,188,188),A=new bi().load("/static/dashboard/sky.png"),R=new yi({map:A,side:dn,transparent:!0,opacity:1,alphaTest:.5}),v=new Et(E,R);e.add(v);const C=new mo;C.setSize(window.innerWidth,window.innerHeight),C.render(e,t);function P(){requestAnimationFrame(P),u.rotation.y-=.008,h.rotation.y+=.015,c.rotation.y-=.02,M.rotation.y-=.01,v.rotation.y+=.001,C.render(e,t)}To(()=>{var I=document.getElementById("canvas");console.log(I),I.appendChild(C.domElement),P()}),window.addEventListener("resize",B,!1);function B(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight)}var J=Co();function N(I,U){I.target.load("https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json"),setTimeout(()=>{J.push(U)},500)}return Ao([{headerTitle:"Dashboard",id:"dashboard",img:"/landing-page/dashboard.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Dashboard",child:[{title:"Dashboard V1",link:"/dashboards/dashboard-version-one"},{title:"Dashboard V2",link:"/dashboards/dashboard-version-two"},{title:"Dashboard V3",link:"/dashboards/dashboard-version-three"},{title:"Dashboard V4",link:"/dashboards/dashboard-version-four"},{title:"Dashboard V5",link:"/dashboards/dashboard-version-five"}]},{headerTitle:"Application",id:"apps",img:"/landing-page/app.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Apps",child:[{title:"Chat",link:"/apps/chat"},{title:"Contact Table",link:"/apps/contact-table"},{title:"Contact List",link:"/apps/contact-list"},{title:"Contact Grid",link:"/apps/contact-grid"},{title:"Ecommerce",link:"/apps/ecommerce"},{title:"Cart",link:"/apps/cart"},{title:"Checkout",link:"/apps/checkout"},{title:"Inbox",link:"/apps/inbox"},{title:"Create Invoice",link:"/apps/create-invoice"},{title:"Print Invoice",link:"/apps/print-invoice"},{title:"Todo List",link:"/apps/todo-list"}]},{headerTitle:"Components",id:"components",img:"/landing-page/components.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Components",child:[{title:"Avatar",link:"/components/avatars"},{title:"Button",link:"/components/button"},{title:"Badges",link:"/components/badges"},{title:"Accordions",link:"/components/accordions"},{title:"Tabs",link:"/components/tabs"},{title:"Typography",link:"/components/typography"}]},{headerTitle:"Widgets",id:"widgets",img:"/landing-page/widgets.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Widgets",child:[{title:"Charts",link:"/widgets/charts"},{title:"General",link:"/widgets/general"}]},{headerTitle:"Profile",id:"profile",img:"/landing-page/widgets.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Profile",child:[{title:"Profile ver 1.0",link:"/profile/profileOne"},{title:"Profile ver 2.0",link:"/profile/profileTwo"}]},{headerTitle:"Credentials",id:"credentials",img:"/landing-page/session.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Session",child:[{title:"Sign In",link:"/sessions/signin"},{title:"Sign In Two",link:"/sessions/signin-two"},{title:"Sign In Three",link:"/sessions/signin-three"},{title:"Sign In Four",link:"/sessions/signin-four"},{title:"Sign Up",link:"/sessions/signup"},{title:"Sign Up Two",link:"/sessions/signup-two"},{title:"Sign Up Three",link:"/sessions/signup-three"},{title:"Sign Up Four",link:"/sessions/signup-four"},{title:"Error 404",link:"/sessions/404"},{title:"Forgot",link:"/sessions/forgot"}]},{headerTitle:"Charts",id:"charts",img:"/landing-page/chart.png",paragraph:"Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.",parentTitle:"Charts",child:[{title:"Bar",link:"/charts/bar"},{title:"Area",link:"/charts/area"},{title:"Line",link:"/charts/line"},{title:"Mix",link:"/charts/mix"},{title:"Column",link:"/charts/column"},{title:"Pie Donut",link:"/charts/pieDonut"},{title:"Radar Chart",link:"/charts/radarChart"},{title:"Radialbar chart",link:"/charts/radialBar"},{title:"Scatter",link:"/charts/scatter"},{title:"Sparkline",link:"/charts/sparkline"}]}]),(I,U)=>{const Y=Vt("lottie-player");return un(),En(er,null,[S("header",im,[sm,S("div",rm,[S("nav",am,[om,S("div",lm,[S("a",{class:"bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-2 px-5 items-center flex gap-2 clickanimate",onClick:U[0]||(U[0]=Q=>N(Q,"/signin"))},[cm,dm,Ie(Y,{src:"https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json",background:"transparent",class:"animation",speed:"1",autoplay:""})])])]),S("div",null,[S("div",um,[S("div",hm,[Ie(Zl,{class:"my-6"})]),fm,S("div",pm,[mm,gm,_m,S("a",{onClick:U[1]||(U[1]=Q=>N(Q)),xl:"",class:"bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-3 px-5 clickanimate"},[Ze(" Get Now ($39) "),Ie(Y,{src:"https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json",background:"transparent",class:"animation",speed:"1",autoplay:""})])]),S("div",vm,[S("div",xm,[S("div",ym,[Ie(Y,{src:"https://assets9.lottiefiles.com/packages/lf20_idaok5ne.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),bm]),S("div",Mm,[Ie(Y,{src:"https://assets9.lottiefiles.com/packages/lf20_maarwknn.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),Sm]),S("div",wm,[Ie(Y,{src:"https://assets4.lottiefiles.com/private_files/lf30_f5nb5n.json",background:"transparent",speed:".6",style:{width:"100%","max-width":"80px"},loop:"",autoplay:""}),Em])])])])])])]),Tm,Ie(Vl,{class:"my-6"}),S("div",Cm,[Ie(Y,{src:"https://assets1.lottiefiles.com/packages/lf20_mksle47o.json",background:"transparent",class:"w-full absolute",speed:"1",loop:"",autoplay:""}),Am]),Ie(tl),S("div",Lm,[Pm,S("div",Dm,[Rm,S("div",Im,[Ie(Y,{src:"https://assets10.lottiefiles.com/packages/lf20_dkamovet.json",background:"transparent",class:"icon",speed:"1",style:{height:"550px","z-index":"-1"},loop:"",autoplay:""})]),Fm])]),zm,Ie(Xo)],64)}}},Bm=Li(Nm,[["__scopeId","data-v-0789f171"]]);export{Bm as default};
