import{_ as u,G as c,e as d,f as a,g as t,F as p,k as m,B as n,l as i,t as s,K as g,M as h,m as _}from"./index.9204d21f.js";const b={data(){return{orders:"",details:""}},mounted(){this.getOrders()},methods:{getOrders(){c.get("/api/admin/orders/").then(l=>{this.orders=l.data}).catch(l=>{console.log(l)})},updateOrder(l){l.preventDefault(),c.put("/api/admin/orders/",this.details).then(r=>{this.getOrders(),this.details=""}).catch(r=>{console.log(r)})}}},f={key:0,class:"container p-2 mx-auto sm:p-4"},y=t("h2",{class:"mb-4 text-2xl font-semibold leading-tight"},"Order History",-1),v={class:"overflow-x-auto"},k={class:"min-w-full text-sm"},w=t("colgroup",null,[t("col"),t("col"),t("col"),t("col"),t("col"),t("col",{class:"w-24"})],-1),C={class:"p-3"},P={class:"p-3"},B={class:"text-gray-400"},T={class:"p-3 text-right"},O={class:"text-gray-400"},M=["onClick"],D=t("p",{class:"text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 inline-block my-1 py-1 text-center"},[t("span",null,"View Details")],-1),L={key:1,id:"defaultModal",tabindex:"-1","aria-hidden":"true",class:"shadow bg-dark/[.1] fixed m-auto left-0 right-0 top-0 z-[9999] w-full h-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full"},S={class:"relative w-full h-full max-w-2xl md:h-auto m-auto animate__animated animate__fadeInUp animate__faster"},V={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},z={class:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"},N=t("h3",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Manage Order ",-1),j=t("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),q=t("span",{class:"sr-only"},"Close modal",-1),A=[j,q],I={class:"p-6 space-y-6"},F={class:"px-0"},U={class:"sm:flex sm:items-center"},E={class:"sm:flex-auto"},G={class:"text-xl font-semibold text-gray-900"},H={class:"text-muted fs-4 text-gray-400"},K={class:"mt-2 text-sm text-gray-700"},Q={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},R={type:"button",class:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"},Y={class:"-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0"},J={class:"min-w-full divide-y divide-gray-300"},W=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"},"Project"),t("th",{scope:"col",class:"hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"},"QTY"),t("th",{scope:"col",class:"hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"},"Rate"),t("th",{scope:"col",class:"hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"},"Points"),t("th",{scope:"col",class:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"},"Total BP"),t("th",{scope:"col",class:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"},"Total")])],-1),X={class:"py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0"},Z={class:"font-medium text-gray-900"},$={class:"hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"},tt={class:"hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"},et={class:"hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"},st={class:"py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"},ot=t("span",{class:"inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center"},"BP",-1),rt={class:"py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0 font-bold"},lt=t("th",{scope:"row",colspan:"5",class:"hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"},"Total BP",-1),dt=t("th",{scope:"row",class:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"},"Total BP",-1),at={class:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"},nt=t("span",{class:"inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center"},"BP",-1),it=t("th",{scope:"row",colspan:"5",class:"hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"},"Total",-1),ct=t("th",{scope:"row",class:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"},"Total",-1),pt={class:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"},mt={class:"flex-1 space-y-0.5 min-w-[200px]"},xt=t("option",{value:"Pending"},"Pending",-1),ut=t("option",{value:"Approved"},"Approved",-1),gt=t("option",{value:"Cancelled"},"Cancelled",-1),ht=[xt,ut,gt],_t={key:0,class:"p-4 px-5 text-rose-500"},bt={class:"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"};function ft(l,r,yt,vt,o,x){return d(),a("section",null,[o.orders&&o.orders.results?(d(),a("div",f,[y,t("div",v,[t("table",k,[w,t("tbody",null,[(d(!0),a(p,null,m(o.orders.results,e=>(d(),a("tr",{class:"border-b border-opacity-20 border-gray-700 animate__animated animate__faster animate__fadeInLeft",key:e.id},[t("td",C,[t("p",null,"ID#"+s(e.id),1),t("p",null,"Date: "+s(e.date),1)]),t("td",P,[t("p",null,"Number Of Products: "+s(e.Stockiests_products.length),1),t("p",B,"Total: \u09F3"+s(e.total),1)]),t("td",T,[t("p",null,s(e.stockiest.name),1),t("p",O," @"+s(e.stockiest.user.username),1)]),t("td",{class:"p-3 text-right cursor-pointer",onClick:kt=>o.details=e},[t("p",{class:_(["font-bold",{"text-amber-600":e.status=="Pending","text-green-500":e.status=="Approved","text-rose-500":e.status=="Cancelled"}])},s(e.status),3),D],8,M)]))),128))])])])])):n("",!0),o.details?(d(),a("div",L,[t("div",S,[t("div",V,[t("div",z,[N,t("button",{onClick:r[0]||(r[0]=e=>o.details=""),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"defaultModal"},A)]),t("div",I,[t("div",F,[t("div",U,[t("div",E,[t("h1",G,[i(s(o.details.stockiest.name)+" ",1),t("span",H,"@"+s(o.details.stockiest.user.username),1)]),t("p",K,s(o.details.date),1)]),t("div",Q,[t("p",R,s(o.details.status),1)])]),t("div",Y,[t("table",J,[W,t("tbody",null,[(d(!0),a(p,null,m(o.details.Stockiests_products,e=>(d(),a("tr",{class:"border-b border-gray-200",key:e.id},[t("td",X,[t("div",Z,s(e.product.title),1)]),t("td",$,s(e.qty),1),t("td",tt,"\u09F3 "+s(e.product.trade_price),1),t("td",et,s(e.product.point),1),t("td",st,[ot,i(" "+s(e.product.point*e.qty),1)]),t("td",rt,"\u09F3 "+s(e.product.trade_price*e.qty),1)]))),128))]),t("tfoot",null,[t("tr",null,[lt,dt,t("td",at,[nt,i(" "+s(o.details.totalbp),1)])]),t("tr",null,[it,ct,t("td",pt,"\u09F3 "+s(o.details.total),1)])])])])]),t("div",mt,[g(t("select",{name:"",class:"block w-full mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":r[1]||(r[1]=e=>o.details.status=e)},ht,512),[[h,o.details.status]])])]),l.error?(d(),a("p",_t,s(l.error),1)):n("",!0),t("div",bt,[t("button",{onClick:r[2]||(r[2]=e=>x.updateOrder(e)),class:"text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"},"Submit"),t("button",{onClick:r[3]||(r[3]=e=>o.details=""),"data-modal-hide":"defaultModal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"Close")])])])])):n("",!0)])}const Ct=u(b,[["render",ft]]);export{Ct as default};
