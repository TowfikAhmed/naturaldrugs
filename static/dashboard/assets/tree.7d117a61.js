import{_ as h,E as p,e as a,f as n,g as d,B as r,t as f,H as _,m as y,s as S,v as B,q as v,d as k,x,G as R}from"./index.00594607.js";const m="/static/dashboard/assets/avater-bg.87bfa488.svg",L="/static/dashboard/assets/pointer1.73bb1853.svg",T="/static/dashboard/assets/pointer2.bbafca04.svg",C="/static/dashboard/assets/pointer0.de1f5a2e.svg",w="/static/dashboard/assets/man.a98614c7.png",E="/static/dashboard/assets/pointer3.75a13913.svg",g="/static/dashboard/assets/tbd.1b8171ca.svg",q="/static/dashboard/assets/pointer4.8a7be01a.svg";const M={name:"TreeRe",props:{tree:{type:Object,required:!0},classnames:Boolean}},i=s=>(S("data-v-0ee9d375"),s=s(),B(),s),F={class:"info"},I={class:"avater"},P=i(()=>d("img",{src:m,alt:""},null,-1)),D={key:0,src:L,alt:"",class:"pointer"},N={key:1,src:T,alt:"",class:"pointer"},V={key:2,src:C,alt:"",class:"pointer"},j=i(()=>d("img",{src:w,alt:"",class:"avt"},null,-1)),z={class:"text"},A={class:"conn",style:{width:"50%",height:"150px",position:"absolute",top:"50px"},preserveAspectRatio:"none",width:"754",height:"166",viewBox:"0 0 754 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=i(()=>d("path",{d:"M375.383 1.17188C328.073 124.958 -6.61087 89.837 1.13224 165.836",stroke:"#F1579F"},null,-1)),O=i(()=>d("path",{d:"M378.617 1.17188C425.927 124.958 760.611 89.837 752.868 165.836",stroke:"#F1579F"},null,-1)),X=[G,O],J={key:1,class:"relative"},K=v('<span class="info" data-v-0ee9d375><span class="avater" data-v-0ee9d375><img src="'+m+'" alt="" data-v-0ee9d375><img src="'+E+'" alt="" class="pointer" data-v-0ee9d375><img src="'+g+'" alt="" class="avt" data-v-0ee9d375></span><h5 data-v-0ee9d375>TBD</h5></span>',1),Q=[K],U={key:3,class:"relative"},W=v('<span class="info" data-v-0ee9d375><span class="avater" data-v-0ee9d375><img src="'+m+'" alt="" data-v-0ee9d375><img src="'+q+'" alt="" class="pointer" data-v-0ee9d375><img src="'+g+'" alt="" class="avt" data-v-0ee9d375></span><h5 data-v-0ee9d375>TBD</h5></span>',1),Y=[W];function Z(s,t,e,o,u,b){const c=p("TreeRe",!0);return e.tree?(a(),n("div",{key:0,class:y(["relative",e.classnames])},[d("span",F,[d("span",I,[P,e.classnames=="a"?(a(),n("img",D)):r("",!0),e.classnames=="b"?(a(),n("img",N)):(a(),n("img",V)),j]),d("span",z,[d("h5",null,f(e.tree.name),1)]),(a(),n("svg",A,X))]),e.tree.placement_a&&e.tree.placement_a.name?(a(),_(c,{key:0,classnames:"a",tree:e.tree.placement_a},null,8,["tree"])):(a(),n("div",J,Q)),e.tree.placement_b&&e.tree.placement_b.name?(a(),_(c,{key:2,classnames:"b",tree:e.tree.placement_b},null,8,["tree"])):(a(),n("div",U,Y))],2)):r("",!0)}const $=h(M,[["render",Z],["__scopeId","data-v-0ee9d375"]]),H=k({name:"tree-dashboard",setup(){return{store:x()}},components:{TreeRe:$},data(){return{mousePos:0,tree:""}},mounted(){this.getTree()},methods:{getTree(){R.get("/api/member/placement/").then(s=>{console.log(s.data),this.tree=s.data})},mouseMove(s){this.mousePos=s.clientX},pageScrolled(){const s=document.querySelector(".treeBody .head"),t=document.querySelector(".treeBody .head div");if(t&&t.getBoundingClientRect().top<100){var e=document.querySelector(".treeBody").getBoundingClientRect();console.log((e.right-e.left)/2,this.mousePos-e.left),console.log("Change"),(e.right-e.left)/2>this.mousePos-e.left?(s.classList.remove("head"),t.classList.add("head"),t.nextElementSibling.classList.add("hidden")):(s.classList.remove("head"),t.nextElementSibling.classList.add("head"),t.classList.add("hidden"))}else if(document.querySelector(".treeBody .head").getBoundingClientRect().top>100){console.log("Revert");var o=document.querySelector(".treeBody .head");if(o.classList.contains("start"))return;o.classList.remove("head"),o.parentElement.classList.add("head"),o.nextElementSibling?o.nextElementSibling.classList.remove("hidden"):o.previousElementSibling.classList.remove("hidden")}}}});function ee(s,t,e,o,u,b){const c=p("TreeRe");return a(),n("section",{class:"treeBody",onMousemove:t[0]||(t[0]=l=>s.mouseMove(l)),onScroll:t[1]||(t[1]=l=>s.pageScrolled(l))},[s.tree?(a(),_(c,{key:0,classnames:"start head",tree:s.tree},null,8,["tree"])):r("",!0)],32)}const te=h(H,[["render",ee]]);export{te as default};
