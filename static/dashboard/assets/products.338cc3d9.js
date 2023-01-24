import{_ as M}from"./Breadcrumbs.685625d2.js";import{_ as j,J as T,G as P,E as d,e as i,f as c,z as s,g as e,A as r,F as m,k as g,t as _,K as b,L as f,l as x,s as U,v as V}from"./index.0ac39052.js";import{S as I,a as q}from"./swiper.min.e8cb2cc8.js";const A={components:{breadcrumbs:M,Swiper:I,SwiperSlide:q},data(){return{isOpen:!1,products:"",cart:[],cartTotal:0,baseUrl:T}},mounted(){this.getProducts()},methods:{getProducts(){P.get("/api/admin/products/").then(t=>{console.log(t),this.products=t.data})},addToCart(t){t.incart=!0,this.cart.push(t)},removeFromCart(t){t.incart=!1,this.cart=this.cart.filter(l=>l.id!==t.id)}},computed:{cartTotal(){let t=0;return this.cart.forEach(l=>{t+=l.qty*l.trade_price}),t}}},n=t=>(U("data-v-5215ed30"),t=t(),V(),t),z={class:"container mx-auto"},E={class:"grid grid-cols-12 gap-5 mb-5"},F={class:"col-span-12"},L={class:"flex justify-center items-center flex-wrap lg:justify-between"},N={class:"mb-2 flex"},O=n(()=>e("i",{class:"text-lg i-Add"},null,-1)),D=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})],-1)),R=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)),G=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)),H=n(()=>e("div",{class:"mb-2 flex"},[e("form",{class:"flex"},[e("input",{class:"rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none",placeholder:"Search..."}),e("button",{role:"button",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])])])],-1)),J={class:"ul-ecommerce-wrapper relative"},K={class:"ul-ecommerce-container ml-0"},$={class:"flex flex-wrap gap-5 mb-5"},Q=["src"],W=["src"],X={class:"p-5"},Y={class:"mb-1"},Z={class:"text-gray-600 dark:text-gray-300",href:"#"},ee={class:"font-semibold mb-4"},te={class:"flex justify-between"},oe={class:"flex mb-2"},se=n(()=>e("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1)),re=[se],ne={class:"font-bold text-base mb-5"},le={key:0,class:"flex justify-between flex-wrap gap-1"},ae=["onUpdate:modelValue"],de=n(()=>e("i",{class:"nav-icon i-Checkout text-base mr-2"},null,-1)),ie={key:1,class:"flex justify-between flex-wrap gap-1"},ce=["onUpdate:modelValue"],ue=n(()=>e("i",{class:"nav-icon i-Add-Cart text-base mr-2"},null,-1));function pe(t,l,_e,he,u,w){const v=d("breadcrumbs"),a=d("BaseBtn"),y=d("router-link"),h=d("swiper-slide"),k=d("swiper"),C=d("BaseCard");return i(),c("div",z,[s(v,{parentTitle:"Ecommerce",subParentTitle:"Product"}),e("div",E,[e("div",F,[e("div",L,[e("div",N,[s(y,{tag:"a",to:"/dashboards/admin/addproduct"},{default:r(()=>[s(a,{rounded:"",class:"mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:r(()=>[O]),_:1})]),_:1}),s(a,{onClick:l[0]||(l[0]=o=>u.isOpen=!u.isOpen),class:"mr-2 my-1 lg:hidden block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:r(()=>[D]),_:1}),s(a,{rounded:"",class:"mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:r(()=>[R]),_:1}),s(a,{rounded:"",class:"mr-2 my-1 border border-primary text-primary hover:bg-primary hover:text-white"},{default:r(()=>[G]),_:1})]),H])])]),e("div",J,[e("div",K,[e("div",$,[(i(!0),c(m,null,g(u.products.results,(o,S)=>(i(),c("div",{key:S,class:"max-w-[300px]"},[s(C,{noPadding:"",class:"overflow-hidden relative"},{default:r(()=>[s(k,{"slides-per-view":1,"space-between":50,onSwiper:t.onSwiper,onSlideChange:t.onSlideChange,autoplay:{delay:2e3},loop:!0},{default:r(()=>[s(h,null,{default:r(()=>[e("img",{src:u.baseUrl+o.productimage_set[0].image,class:"productImage"},null,8,Q)]),_:2},1024),s(h,null,{default:r(()=>[e("img",{src:u.baseUrl+o.productimage_set[1].image,class:"productImage"},null,8,W)]),_:2},1024)]),_:2},1032,["onSwiper","onSlideChange"]),e("div",X,[e("div",Y,[e("a",Z,"Price: "+_(o.trade_price)+" | MRP: "+_(o.mrp),1)]),e("p",ee,_(o.title),1),e("div",te,[e("div",oe,[(i(),c(m,null,g(5,(p,B)=>e("svg",{key:B,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},re)),64))]),e("p",ne,"MRP: "+_(o.mrp),1)]),o.incart?(i(),c("div",le,[b(e("input",{type:"number",class:"rounded border border-gray-300 text-gray-300 hover:text-white mb-2","onUpdate:modelValue":p=>o.qty=p,min:"0",max:"99"},null,8,ae),[[f,o.qty]]),s(a,{class:"bg-gray-300 text-white mb-2 flex-1"},{default:r(()=>[de,x(" Added ")]),_:1})])):(i(),c("div",ie,[b(e("input",{type:"number",class:"rounded border border-primary text-primary hover:bg-primary hover:text-white my-.5","onUpdate:modelValue":p=>o.qty=p,min:"0",max:"99"},null,8,ce),[[f,o.qty]]),s(a,{onClick:p=>w.addToCart(o),class:"flex-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1 text-center"},{default:r(()=>[ue,x(" Add To Cart ")]),_:2},1032,["onClick"])]))])]),_:2},1024)]))),128))])])])])}const fe=j(A,[["render",pe],["__scopeId","data-v-5215ed30"]]);export{fe as default};
