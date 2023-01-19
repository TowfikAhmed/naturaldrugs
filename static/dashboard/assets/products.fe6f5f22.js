import{_ as U}from"./Breadcrumbs.d1c4b710.js";import{_ as I,J as T,x as V,G as j,E as _,e as l,f as i,z as r,g as e,A as n,m as k,F as g,k as b,B as C,t as d,K as f,L as x,l as w,s as q,v as P}from"./index.5ed53002.js";import{S as z,a as O}from"./swiper.min.2b948524.js";const E={components:{breadcrumbs:U,Swiper:z,SwiperSlide:O},data(){return{isOpen:!1,products:"",cart:[],cartTotal:0,baseUrl:T,autoplay:{delay:4e3,disableOnInteraction:!1},store:V()}},mounted(){this.getProducts()},methods:{getProducts(){j.get("/api/member/products/").then(o=>{console.log(o),this.products=o.data,this.products.forEach(a=>{a.qty=1,a.incart=!1})})},addToCart(o){o.incart=!0,this.cart.push(o)},removeFromCart(o){o.incart=!1,this.cart=this.cart.filter(a=>a.id!==o.id)}},computed:{cartTotal(){let o=0;return this.cart.forEach(a=>{o+=a.qty*a.trade_price}),o}}},c=o=>(q("data-v-de831466"),o=o(),P(),o),R={class:"container mx-auto"},A={class:"grid grid-cols-12 gap-5 mb-5"},F={class:"col-span-12"},N={class:"flex justify-center items-center flex-wrap lg:justify-between"},L={class:"mb-2 flex gap-1"},D=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})],-1)),Y=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)),G=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)),H=c(()=>e("div",{class:"mb-2"},[e("form",{class:"flex"},[e("input",{class:"rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none",placeholder:"Search..."}),e("button",{role:"button",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])])])],-1)),J={class:"ul-ecommerce-wrapper relative"},K=c(()=>e("p",{class:"text-primary font-bold mb-2"},"Your Cart ",-1)),Q={key:0,class:"my-3"},W={class:"cart"},X=["onClick"],Z=c(()=>e("i",{class:"nav-icon i-Remove-Cart text-base mr-2"},null,-1)),$=[Z],ee=["src"],te={class:"flex-1"},oe={class:"font-bold capitalize"},se={class:"flex justify-between items-center text-gray-600"},re={class:"flex gap-1"},ne=c(()=>e("p",null,"x",-1)),ae=["onUpdate:modelValue"],le={key:1,class:"text-center my-5"},ie={class:"bg-warning px-3 rounded py-3 text-white ml-3"},ce={class:"ul-ecommerce-container"},de={class:"flex flex-wrap gap-5 mb-5"},ue=["src"],pe=["src"],_e={class:"p-5"},me={class:"mb-1"},he={class:"text-gray-600 dark:text-gray-300",href:"#"},ge={class:"font-semibold mb-4"},be={class:"flex justify-between"},fe={class:"flex mb-2"},xe=c(()=>e("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1)),we=[xe],ve={class:"font-bold text-base mb-5"},ye={key:0,class:"flex justify-between flex-wrap gap-1"},ke=["onUpdate:modelValue"],Ce=c(()=>e("i",{class:"nav-icon i-Checkout text-base mr-2"},null,-1)),Se={key:1,class:"flex justify-between flex-wrap gap-1"},Be=["onUpdate:modelValue"],Me=c(()=>e("i",{class:"nav-icon i-Add-Cart text-base mr-2"},null,-1));function Ue(o,a,Ie,Te,s,m){const S=_("breadcrumbs"),u=_("BaseBtn"),v=_("BaseCard"),y=_("swiper-slide"),B=_("swiper");return l(),i("div",R,[r(S,{parentTitle:"Order Product",subParentTitle:"Product Requisation"}),e("div",A,[e("div",F,[e("div",N,[e("div",L,[r(u,{onClick:a[0]||(a[0]=t=>s.isOpen=!s.isOpen),class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:hidden block"},{default:n(()=>[D]),_:1}),r(u,{rounded:"",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:n(()=>[Y]),_:1}),r(u,{rounded:"",class:"mr-2 border border-primary text-primary hover:bg-primary hover:text-white"},{default:n(()=>[G]),_:1})]),H])])]),e("div",J,[e("div",{class:k(["ul-ecommerce-sidebar",s.isOpen?"open":""])},[r(v,null,{default:n(()=>[K,s.cart.length==0?(l(),i("p",Q,"Your Cart Is Empty!")):C("",!0),e("div",W,[(l(!0),i(g,null,b(s.cart,t=>(l(),i("div",{class:"animate__animated animate__fadeInRight border-b pt-4 pb-2 rounded flex items-center gap-2 relative",key:t.id},[e("div",{onClick:h=>m.removeFromCart(t),class:"absolute top-[10px] right-[-5px] cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-1 py-.5 text-center"},$,8,X),e("img",{src:s.baseUrl+t.productimage_set[0].thumbnail,alt:"",class:"h-[45px] w-[45px] rounded"},null,8,ee),e("div",te,[e("h5",oe,d(t.title),1),e("div",se,[e("div",re,[e("p",null,"\u09F3 "+d(t.trade_price),1),ne,f(e("input",{type:"number",class:"p-0 px-1 border rounded border-gray-200 m-0 w-[50px] h-[23px]",max:"99","onUpdate:modelValue":h=>t.qty=h},null,8,ae),[[x,t.qty]])]),e("p",null,"\u09F3 "+d(t.trade_price*t.qty),1)])])]))),128))]),s.store.state.user?(l(),i("div",le,[r(u,{class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",block:""},{default:n(()=>[w(" Confirm & Checkout "),e("span",ie,"\u09F3 "+d(m.cartTotal),1)]),_:1}),e("p",{class:k(["my-2",{"text-rose-500 font-bold":s.store.state.user.current_balance<m.cartTotal}])}," Current balance \u09F3 "+d(s.store.state.user.current_balance),3)])):C("",!0)]),_:1})],2),e("div",ce,[e("div",de,[(l(!0),i(g,null,b(s.products,(t,h)=>(l(),i("div",{key:h,class:"max-w-[300px]"},[r(v,{noPadding:"",class:"overflow-hidden relative"},{default:n(()=>[r(B,{"slides-per-view":1,"space-between":50,onSwiper:o.onSwiper,onSlideChange:o.onSlideChange,autoplay:{delay:2e3},loop:!0},{default:n(()=>[r(y,null,{default:n(()=>[e("img",{src:s.baseUrl+t.productimage_set[0].image,class:"productImage"},null,8,ue)]),_:2},1024),r(y,null,{default:n(()=>[e("img",{src:s.baseUrl+t.productimage_set[1].image,class:"productImage"},null,8,pe)]),_:2},1024)]),_:2},1032,["onSwiper","onSlideChange"]),e("div",_e,[e("div",me,[e("a",he,"Price: "+d(t.trade_price)+" | MRP: "+d(t.mrp),1)]),e("p",ge,d(t.title),1),e("div",be,[e("div",fe,[(l(),i(g,null,b(5,(p,M)=>e("svg",{key:M,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},we)),64))]),e("p",ve,"MRP: "+d(t.mrp),1)]),t.incart?(l(),i("div",ye,[f(e("input",{type:"number",class:"rounded border border-gray-300 text-gray-300 hover:text-white mb-2","onUpdate:modelValue":p=>t.qty=p,min:"0",max:"99"},null,8,ke),[[x,t.qty]]),r(u,{class:"animate__animated animate__fadeInUp bg-gray-300 text-white mb-2 flex-1"},{default:n(()=>[Ce,w(" Added ")]),_:1})])):(l(),i("div",Se,[f(e("input",{type:"number",class:"rounded border border-primary text-primary hover:bg-primary hover:text-white my-.5","onUpdate:modelValue":p=>t.qty=p,min:"0",max:"99"},null,8,Be),[[x,t.qty]]),r(u,{onClick:p=>m.addToCart(t),class:"animate__animated animate__fadeInUp animate_faster text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex-1"},{default:n(()=>[Me,w(" Add To Cart ")]),_:2},1032,["onClick"])]))])]),_:2},1024)]))),128))])])])])}const Pe=I(E,[["render",Ue],["__scopeId","data-v-de831466"]]);export{Pe as default};
