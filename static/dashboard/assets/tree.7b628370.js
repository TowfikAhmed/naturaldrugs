import{_ as b,E as u,e as o,f as c,g as s,B as _,t as i,H as p,m as y,q as m,s as B,v as S,d as k,x,G as T}from"./index.57aef610.js";const h="/static/dashboard/assets/avater-bg.87bfa488.svg",R="/static/dashboard/assets/pointer1.73bb1853.svg",L="/static/dashboard/assets/pointer2.bbafca04.svg",C="/static/dashboard/assets/pointer0.de1f5a2e.svg",E="/static/dashboard/assets/man.a98614c7.png",w="/static/dashboard/assets/pointer3.75a13913.svg",g="/static/dashboard/assets/tbd.1b8171ca.svg",P="/static/dashboard/assets/pointer4.8a7be01a.svg";const q={name:"TreeRe",props:{tree:{type:Object,required:!0},classnames:Boolean},methods:{sum:function(t){let a=0;return t.forEach(function(e){a+=e*1}),a.toFixed(2)}}},d=t=>(B("data-v-2b8e0421"),t=t(),S(),t),F={class:"info"},I={class:"avater"},D=d(()=>s("img",{src:h,alt:""},null,-1)),M={key:0,src:R,alt:"",class:"pointer"},N={key:1,src:L,alt:"",class:"pointer"},V={key:2,src:C,alt:"",class:"pointer"},A=d(()=>s("img",{src:E,alt:"",class:"avt"},null,-1)),G={class:"text"},j=m('<span class="" data-v-2b8e0421><p data-v-2b8e0421>User ID</p><p data-v-2b8e0421>Full Name</p><p data-v-2b8e0421>Refer ID</p><p data-v-2b8e0421>Gender</p><p data-v-2b8e0421>Team A</p><p data-v-2b8e0421>Team B</p><p data-v-2b8e0421>Total BP</p></span><span class="" data-v-2b8e0421><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p><p data-v-2b8e0421>:</p></span>',2),z={class:""},O={class:""},U={class:""},X={class:""},J={class:""},K={class:""},Q={class:""},W={class:""},Y={class:"conn",style:{width:"50%",height:"150px",position:"absolute",top:"50px"},preserveAspectRatio:"none",width:"754",height:"166",viewBox:"0 0 754 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=d(()=>s("path",{d:"M375.383 1.17188C328.073 124.958 -6.61087 89.837 1.13224 165.836",stroke:"#F1579F"},null,-1)),H=d(()=>s("path",{d:"M378.617 1.17188C425.927 124.958 760.611 89.837 752.868 165.836",stroke:"#F1579F"},null,-1)),$=[Z,H],ee={key:1,class:"relative"},te=m('<span class="info" data-v-2b8e0421><span class="avater" data-v-2b8e0421><img src="'+h+'" alt="" data-v-2b8e0421><img src="'+w+'" alt="" class="pointer" data-v-2b8e0421><img src="'+g+'" alt="" class="avt" data-v-2b8e0421></span><h5 data-v-2b8e0421>TBD</h5></span>',1),se=[te],ae={key:3,class:"relative"},oe=m('<span class="info" data-v-2b8e0421><span class="avater" data-v-2b8e0421><img src="'+h+'" alt="" data-v-2b8e0421><img src="'+P+'" alt="" class="pointer" data-v-2b8e0421><img src="'+g+'" alt="" class="avt" data-v-2b8e0421></span><h5 data-v-2b8e0421>TBD</h5></span>',1),ne=[oe];function ce(t,a,e,n,f,v){const l=u("TreeRe",!0);return e.tree?(o(),c("div",{key:0,class:y(["relative",e.classnames])},[s("span",F,[s("span",I,[D,e.classnames=="a"?(o(),c("img",M)):_("",!0),e.classnames=="b"?(o(),c("img",N)):(o(),c("img",V)),A]),s("span",G,[j,s("span",z,[s("p",O,i(e.tree.id),1),s("p",U,i(e.tree.name),1),s("p",X,i(e.tree.user.username),1),s("p",J,i(e.tree.gender),1),s("p",K,i(e.tree.collective_bp_a)+" BP",1),s("p",Q,i(e.tree.collective_bp_b)+" BP",1),s("p",W,i(v.sum([e.tree.bp,e.tree.collective_bp_a,e.tree.collective_bp_b]))+" BP",1)])]),(o(),c("svg",Y,$))]),e.tree.placement_a&&e.tree.placement_a.name?(o(),p(l,{key:0,classnames:"a",tree:e.tree.placement_a},null,8,["tree"])):(o(),c("div",ee,se)),e.tree.placement_b&&e.tree.placement_b.name?(o(),p(l,{key:2,classnames:"b",tree:e.tree.placement_b},null,8,["tree"])):(o(),c("div",ae,ne))],2)):_("",!0)}const ie=b(q,[["render",ce],["__scopeId","data-v-2b8e0421"]]),le=k({name:"tree-dashboard",setup(){return{store:x()}},components:{TreeRe:ie},data(){return{mousePos:0,tree:""}},mounted(){this.getTree()},methods:{getTree(){T.get("/api/member/placement/").then(t=>{console.log(t.data),this.tree=t.data})},mouseMove(t){this.mousePos=t.clientX},pageScrolled(){const t=document.querySelector(".treeBody .head"),a=document.querySelector(".treeBody .head div");if(a&&a.getBoundingClientRect().top<100){var e=document.querySelector(".treeBody").getBoundingClientRect();console.log((e.right-e.left)/2,this.mousePos-e.left),console.log("Change"),(e.right-e.left)/2>this.mousePos-e.left?(t.classList.remove("head"),a.classList.add("head"),a.nextElementSibling.classList.add("hidden")):(t.classList.remove("head"),a.nextElementSibling.classList.add("head"),a.classList.add("hidden"))}else if(document.querySelector(".treeBody .head").getBoundingClientRect().top>100){console.log("Revert");var n=document.querySelector(".treeBody .head");if(n.classList.contains("start"))return;n.classList.remove("head"),n.parentElement.classList.add("head"),n.nextElementSibling?n.nextElementSibling.classList.remove("hidden"):n.previousElementSibling.classList.remove("hidden")}}}});const de=s("div",{style:{"min-height":"90vh"}},null,-1);function re(t,a,e,n,f,v){const l=u("TreeRe");return o(),c("section",{class:"treeBody",onMousemove:a[0]||(a[0]=r=>t.mouseMove(r)),onScroll:a[1]||(a[1]=r=>t.pageScrolled(r))},[t.tree?(o(),p(l,{key:0,classnames:"start head",tree:t.tree},null,8,["tree"])):_("",!0),de],32)}const pe=b(le,[["render",re]]);export{pe as default};