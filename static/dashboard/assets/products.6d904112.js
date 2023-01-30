import{_ as j}from"./Breadcrumbs.37b359a7.js";import{_ as T,J as I,G as C,E as p,e as l,f as a,z as d,g as e,A as i,F as h,k as w,B as y,K as c,L as u,m as g,M,t as b,l as f,s as N,v as z}from"./index.b310a7ef.js";import{S as E,a as F}from"./swiper.min.10c2b957.js";const R={components:{breadcrumbs:j,Swiper:E,SwiperSlide:F},data(){return{isOpen:!1,products:"",cart:[],cartTotal:0,baseUrl:I,edit:null,error:""}},mounted(){this.getProducts()},methods:{getProducts(){C.get("/api/admin/products/").then(n=>{console.log(n),this.products=n.data})},addToCart(n){n.incart=!0,this.cart.push(n)},removeFromCart(n){n.incart=!1,this.cart=this.cart.filter(s=>s.id!==n.id)},saveProduct(n){if(this.error="",console.log(this.edit),this.edit.title==""||this.edit.description==""||this.edit.category==""||this.edit.type==""||this.edit.code==""){this.error="Please fill all the fields!";return}n.target.innerHTML="Please wait...",C.put("/api/admin/products/",this.edit).then(s=>{this.products=s.data,this.edit=null})}},computed:{cartTotal(){let n=0;return this.cart.forEach(s=>{n+=s.qty*s.trade_price}),n}}},r=n=>(N("data-v-5ff069b6"),n=n(),z(),n),A={class:"container mx-auto"},H={class:"grid grid-cols-12 gap-5 mb-5"},L={class:"col-span-12"},q={class:"flex justify-center items-center flex-wrap lg:justify-between"},D={class:"mb-2 flex"},O=r(()=>e("i",{class:"text-lg i-Add"},null,-1)),G=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})],-1)),J=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)),K=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)),Q=r(()=>e("div",{class:"mb-2 flex"},[e("form",{class:"flex"},[e("input",{class:"rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none",placeholder:"Search..."}),e("button",{role:"button",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])])])],-1)),W={key:0,class:"ul-ecommerce-wrapper relative animate__animated animate__faster animate__backInUp"},X={class:"ul-ecommerce-container ml-0"},Y={class:"flex flex-wrap gap-5 mb-5"},Z=["src"],$=["src"],ee={class:"p-5"},te={class:"mb-1"},oe={class:"text-gray-600 dark:text-gray-300",href:"#"},se={class:"font-semibold mb-4"},re={class:"flex justify-between"},ne={class:"flex mb-2"},de=r(()=>e("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1)),ie=[de],le={key:0,class:"flex justify-between flex-wrap gap-1"},ae=["onUpdate:modelValue"],ce=r(()=>e("i",{class:"nav-icon i-Checkout text-base mr-2"},null,-1)),ue={key:1,class:"flex justify-between flex-wrap gap-1"},me=r(()=>e("i",{class:"nav-icon i-Add-Cart text-base mr-2"},null,-1)),pe=r(()=>e("i",{class:"nav-icon i-Pen-5 text-base mr-2"},null,-1)),ge={key:1,class:"flex gap-1 flex-wrap border animate__animated animate__faster animate__backInUp"},be={class:"flex-1 min-w-[330px]"},fe={class:"space-y-6 bg-white px-4 py-5 sm:p-6"},xe={class:"col-span-3 sm:col-span-2"},_e=r(()=>e("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"},"Title",-1)),he={class:"flex gap-1 flex-wrap"},we={class:"col-span-3 sm:col-span-2 flex-1"},ye=r(()=>e("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"},"Category",-1)),ve=r(()=>e("option",{value:""},"Select Category",-1)),ke=["value"],Ce={class:"col-span-3 sm:col-span-2 flex-1"},Me=r(()=>e("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"},"Category",-1)),Se=r(()=>e("option",{value:"Medical"},"Medical",-1)),Ue=r(()=>e("option",{value:"Non-Medical"},"Non-Medical",-1)),Ve=[Se,Ue],Be=r(()=>e("label",{for:"about",class:"block text-sm font-medium text-gray-700"},"Product Description",-1)),Pe=r(()=>e("p",{class:"mt-2 text-sm text-gray-500"},"Brief description for your product.",-1)),je={class:"col-span-3 sm:col-span-2"},Te={class:"flex flex-wrap gap-2"},Ie={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},Ne=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"MRP",-1)),ze={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},Ee=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"Trade",-1)),Fe={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},Re=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"Points",-1)),Ae={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},He=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"Stock",-1)),Le={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},qe=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"Code",-1)),De={class:"flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]"},Oe=r(()=>e("span",{class:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"},"Rating",-1)),Ge=r(()=>e("label",{class:"mx-1 block text-sm font-medium text-gray-700 mb-3 mt-5"},"Features",-1)),Je={class:"flex-1 min-w-[330px]"},Ke=r(()=>e("label",{class:"block text-sm font-medium text-gray-700 mb-3 mt-5"},"Custom Fundings",-1)),Qe={key:0,class:"savebtn flex justify-end my-2 m-1 gap-1"};function We(n,s,Xe,Ye,o,v){const S=p("breadcrumbs"),m=p("BaseBtn"),U=p("router-link"),k=p("swiper-slide"),V=p("swiper"),x=p("BaseCard");return l(),a("div",A,[d(S,{parentTitle:"Ecommerce",subParentTitle:"Product"}),e("div",H,[e("div",L,[e("div",q,[e("div",D,[d(U,{tag:"a",to:"/dashboards/admin/addproduct"},{default:i(()=>[d(m,{rounded:"",class:"mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:i(()=>[O]),_:1})]),_:1}),d(m,{onClick:s[0]||(s[0]=t=>o.isOpen=!o.isOpen),class:"mr-2 my-1 lg:hidden block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:i(()=>[G]),_:1}),d(m,{rounded:"",class:"mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},{default:i(()=>[J]),_:1}),d(m,{rounded:"",class:"mr-2 my-1 border border-primary text-primary hover:bg-primary hover:text-white"},{default:i(()=>[K]),_:1})]),Q])])]),o.edit?y("",!0):(l(),a("div",W,[e("div",X,[e("div",Y,[(l(!0),a(h,null,w(o.products.results,(t,B)=>(l(),a("div",{key:B,class:"max-w-[300px]"},[d(x,{noPadding:"",class:"overflow-hidden relative"},{default:i(()=>[d(V,{"slides-per-view":1,"space-between":50,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,autoplay:{delay:2e3},loop:!0},{default:i(()=>[d(k,null,{default:i(()=>[e("img",{src:o.baseUrl+t.productimage_set[0].image,class:"productImage"},null,8,Z)]),_:2},1024),d(k,null,{default:i(()=>[e("img",{src:o.baseUrl+t.productimage_set[1].image,class:"productImage"},null,8,$)]),_:2},1024)]),_:2},1032,["onSwiper","onSlideChange"]),e("div",ee,[e("div",te,[e("a",oe,"Price: "+b(t.trade_price)+" | MRP: "+b(t.mrp),1)]),e("p",se,b(t.title),1),e("div",re,[e("div",ne,[(l(),a(h,null,w(5,(_,P)=>e("svg",{key:P,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},ie)),64))]),e("p",{class:g(["font-bold text-base mb-5 text-green-600",{"text-rose-600":t.stock<1}])},"Stock: "+b(t.stock),3)]),t.incart?(l(),a("div",le,[c(e("input",{type:"number",class:"rounded border border-gray-300 text-gray-300 hover:text-white mb-2","onUpdate:modelValue":_=>t.qty=_,min:"0",max:"99"},null,8,ae),[[u,t.qty]]),d(m,{class:"bg-gray-300 text-white mb-2 flex-1"},{default:i(()=>[ce,f(" Added ")]),_:1})])):(l(),a("div",ue,[d(m,{class:"flex-1 text-white bg-gradient-to-br from-purple-200 to-cyan-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center"},{default:i(()=>[me,f(" 0 ")]),_:1}),d(m,{onClick:_=>o.edit=t,class:"flex-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center"},{default:i(()=>[pe,f(" Edit ")]),_:2},1032,["onClick"])]))])]),_:2},1024)]))),128))])])])),o.edit?(l(),a("div",ge,[e("div",be,[e("div",fe,[e("div",xe,[_e,c(e("input",{class:g([{"border-rose-300":o.error&&!o.edit.title},"block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"]),"onUpdate:modelValue":s[1]||(s[1]=t=>o.edit.title=t),type:"text",name:"company-website",id:"company-website",placeholder:"www.example.com"},null,2),[[u,o.edit.title]])]),e("div",he,[e("div",we,[ye,c(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.edit.category=t),class:g([{"border-rose-300":o.error&&!o.edit.category},"block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"])},[ve,(l(!0),a(h,null,w(n.categorylist,t=>(l(),a("option",{value:t.name,key:t.id},b(t.name),9,ke))),128))],2),[[M,o.edit.category]])]),e("div",Ce,[Me,c(e("select",{"onUpdate:modelValue":s[3]||(s[3]=t=>o.edit.type=t),name:"",id:"",class:"block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},Ve,512),[[M,o.edit.type]])])]),e("div",null,[Be,c(e("textarea",{class:g([{"border-rose-300":o.error&&!o.edit.description},"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"]),"onUpdate:modelValue":s[4]||(s[4]=t=>o.edit.description=t),id:"about",name:"about",rows:"3",placeholder:"..."},null,2),[[u,o.edit.description]]),Pe]),e("div",je,[e("div",Te,[e("div",Ie,[Ne,c(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>o.edit.mrp=t),type:"number",step:".01",class:"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},null,512),[[u,o.edit.mrp]])]),e("div",ze,[Ee,c(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>o.edit.trade_price=t),type:"number",step:".01",class:"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},null,512),[[u,o.edit.trade_price]])]),e("div",Fe,[Re,c(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>o.edit.point=t),type:"number",step:".01",class:"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},null,512),[[u,o.edit.point]])]),e("div",Ae,[He,c(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>o.edit.stock=t),type:"number",step:".01",class:"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},null,512),[[u,o.edit.stock]])]),e("div",Le,[qe,c(e("input",{class:g([{"border-rose-300":o.error&&!o.edit.code},"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"]),"onUpdate:modelValue":s[9]||(s[9]=t=>o.edit.code=t),type:"text"},null,2),[[u,o.edit.code]])]),e("div",De,[Oe,c(e("input",{"onUpdate:modelValue":s[10]||(s[10]=t=>o.edit.Rating=t),type:"number",step:".01",min:"1",max:"5",class:"w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm"},null,512),[[u,o.edit.Rating]])])])])]),Ge,d(x,{class:"m-1"},{default:i(()=>[f("Here.........")]),_:1})]),e("div",Je,[Ke,d(x,{class:"m-1"},{default:i(()=>[f("Here.........")]),_:1}),o.edit?(l(),a("div",Qe,[e("button",{onClick:s[11]||(s[11]=t=>o.edit=""),class:"bg-cyan-600 text-white px-4 py-2 rounded-md"},"Cancel"),e("button",{onClick:s[12]||(s[12]=(...t)=>v.saveProduct&&v.saveProduct(...t)),class:"btn rounded font-normal leading-4 ripple inline-block py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center"},"Save product")])):y("",!0)])])):y("",!0)])}const tt=T(R,[["render",We],["__scopeId","data-v-5ff069b6"]]);export{tt as default};
