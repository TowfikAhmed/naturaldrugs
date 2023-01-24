import{_,G as i,e as a,f as d,g as e,F as c,k as u,B as n,K as g,P as h,t as s,l as b}from"./index.0ac39052.js";const x={data(){return{orders:"",details:""}},mounted(){this.getOrders()},methods:{getOrders(){i.get("/api/admin/orders/").then(l=>{this.orders=l.data}).catch(l=>{console.log(l)})},updateOrder(l){l.preventDefault(),i.put("/api/admin/orders/",this.details).then(o=>{this.getOrders(),this.details=""}).catch(o=>{console.log(o)})}}},f={key:0,class:"container p-2 mx-auto sm:p-4"},m=e("h2",{class:"mb-4 text-2xl font-semibold leading-tight"},"Order History",-1),y={class:"overflow-x-auto"},v={class:"min-w-full text-sm"},k=e("colgroup",null,[e("col"),e("col"),e("col"),e("col"),e("col"),e("col",{class:"w-24"})],-1),w={class:"p-3"},C={class:"p-3"},O={class:"text-gray-400"},B={class:"p-3 text-right"},P={class:"text-gray-400"},D=["onClick"],M=e("p",{class:"inline-block px-3 mt-1 py-1 font-semibold rounded-md bg-violet-400 text-white"},[e("span",null,"View Details")],-1),L={key:1,id:"defaultModal",tabindex:"-1","aria-hidden":"true",class:"shadow bg-dark/[.1] fixed m-auto left-0 right-0 top-0 z-[9999] w-full h-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full"},S={class:"relative w-full h-full max-w-2xl md:h-auto m-auto animate__animated animate__fadeInUp animate__faster"},V={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},q={class:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"},z=e("h3",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Manage Order ",-1),N=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),j=e("span",{class:"sr-only"},"Close modal",-1),I=[N,j],U={class:"p-6 space-y-6"},A={class:"flex gap-2"},F={class:"font-bold capitalize"},T={class:"flex-1"},E={class:"flex justify-between items-center text-gray-600"},G={class:"flex gap-1"},H=e("p",null,"x",-1),K={class:"flex justify-between items-center text-gray-600 my-1"},J={class:"flex gap-1"},Q=e("p",null,"x",-1),R=e("span",{class:"inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center"},"BP",-1),W={class:"flex-1 space-y-0.5 min-w-[200px]"},X=e("option",{value:"Pending"},"Pending",-1),Y=e("option",{value:"Approved"},"Approved",-1),Z=e("option",{value:"Cancelled"},"Cancelled",-1),$=[X,Y,Z],ee={key:0,class:"p-4 px-5 text-rose-500"},te={class:"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"};function se(l,o,oe,re,r,p){return a(),d("section",null,[r.orders&&r.orders.results?(a(),d("div",f,[m,e("div",y,[e("table",v,[k,e("tbody",null,[(a(!0),d(c,null,u(r.orders.results,t=>(a(),d("tr",{class:"border-b border-opacity-20 border-gray-700",key:t.id},[e("td",w,[e("p",null,"ID#"+s(t.id),1),e("p",null,"Date: "+s(t.date),1)]),e("td",C,[e("p",null,"Number Of Products: "+s(t.Stockiests_products.length),1),e("p",O,"Total: \u09F3"+s(t.total),1)]),e("td",B,[e("p",null,s(t.stockiest.name),1),e("p",P," @"+s(t.stockiest.user.username),1)]),e("td",{class:"p-3 text-right cursor-pointer",onClick:le=>r.details=t},[e("p",null,s(t.status),1),M],8,D)]))),128))])])])])):n("",!0),r.details?(a(),d("div",L,[e("div",S,[e("div",V,[e("div",q,[z,e("button",{onClick:o[0]||(o[0]=t=>r.details=""),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"defaultModal"},I)]),e("div",U,[(a(!0),d(c,null,u(r.details.Stockiests_products,t=>(a(),d("div",{class:"animate__animated animate__fadeInUp animate__faster border-b pt-4 pb-2 rounded relative",key:t.id},[e("div",A,[e("h5",F,s(t.product.title),1)]),e("div",T,[e("div",E,[e("div",G,[e("p",null,"Price: \u09F3 "+s(t.product.trade_price),1),H,e("p",null,s(t.qty),1)]),e("p",null,"\u09F3 "+s(t.product.trade_price*t.qty),1)]),e("div",K,[e("div",J,[e("p",null,"BP: \u09F3 "+s(t.product.point),1),Q,e("p",null,s(t.qty),1)]),e("p",null,[R,b(" "+s(t.product.point*t.qty),1)])])])]))),128)),e("div",W,[g(e("select",{name:"",class:"block w-full mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":o[1]||(o[1]=t=>r.details.status=t)},$,512),[[h,r.details.status]])])]),l.error?(a(),d("p",ee,s(l.error),1)):n("",!0),e("div",te,[e("button",{onClick:o[2]||(o[2]=t=>p.updateOrder(t)),class:"text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"},"Submit"),e("button",{onClick:o[3]||(o[3]=t=>r.details=""),"data-modal-hide":"defaultModal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"Close")])])])])):n("",!0)])}const de=_(x,[["render",se]]);export{de as default};