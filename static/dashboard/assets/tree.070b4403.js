import{_ as p,E as v,e as o,f as l,g as t,B as _,t as c,H as m,m as y,s as S,v as B,q as u,d as k,x,G as R}from"./index.83129c51.js";const h="/static/dashboard/assets/avater-bg.87bfa488.svg",L="/static/dashboard/assets/pointer1.73bb1853.svg",T="/static/dashboard/assets/pointer2.bbafca04.svg",C="/static/dashboard/assets/pointer0.de1f5a2e.svg",w="/static/dashboard/assets/man.a98614c7.png",E="/static/dashboard/assets/pointer3.75a13913.svg",g="/static/dashboard/assets/tbd.1b8171ca.svg",q="/static/dashboard/assets/pointer4.8a7be01a.svg";const M={name:"TreeRe",props:{tree:{type:Object,required:!0},classnames:Boolean}},d=s=>(S("data-v-d4502b64"),s=s(),B(),s),F={class:"info"},I={class:"avater"},P=d(()=>t("img",{src:h,alt:""},null,-1)),D={key:0,src:L,alt:"",class:"pointer"},N={key:1,src:T,alt:"",class:"pointer"},V={key:2,src:C,alt:"",class:"pointer"},j=d(()=>t("img",{src:w,alt:"",class:"avt"},null,-1)),z={class:"text"},A=d(()=>t("br",null,null,-1)),G={class:"flex gap-1"},O={class:"conn",style:{width:"50%",height:"150px",position:"absolute",top:"50px"},preserveAspectRatio:"none",width:"754",height:"166",viewBox:"0 0 754 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=d(()=>t("path",{d:"M375.383 1.17188C328.073 124.958 -6.61087 89.837 1.13224 165.836",stroke:"#F1579F"},null,-1)),J=d(()=>t("path",{d:"M378.617 1.17188C425.927 124.958 760.611 89.837 752.868 165.836",stroke:"#F1579F"},null,-1)),K=[X,J],Q={key:1,class:"relative"},U=u('<span class="info" data-v-d4502b64><span class="avater" data-v-d4502b64><img src="'+h+'" alt="" data-v-d4502b64><img src="'+E+'" alt="" class="pointer" data-v-d4502b64><img src="'+g+'" alt="" class="avt" data-v-d4502b64></span><h5 data-v-d4502b64>TBD</h5></span>',1),W=[U],Y={key:3,class:"relative"},Z=u('<span class="info" data-v-d4502b64><span class="avater" data-v-d4502b64><img src="'+h+'" alt="" data-v-d4502b64><img src="'+q+'" alt="" class="pointer" data-v-d4502b64><img src="'+g+'" alt="" class="avt" data-v-d4502b64></span><h5 data-v-d4502b64>TBD</h5></span>',1),H=[Z];function $(s,a,e,n,b,f){const i=v("TreeRe",!0);return e.tree?(o(),l("div",{key:0,class:y(["relative",e.classnames])},[t("span",F,[t("span",I,[P,e.classnames=="a"?(o(),l("img",D)):_("",!0),e.classnames=="b"?(o(),l("img",N)):(o(),l("img",V)),j]),t("span",z,[t("small",null,c(e.tree.name),1),A,t("span",null,[t("small",null,c(e.tree.current_balance),1),t("small",null,c(e.tree.bp),1)]),t("span",G,[t("small",null,c(e.tree.collective_bp_a),1),t("small",null,c(e.tree.collective_bp_b),1)])]),(o(),l("svg",O,K))]),e.tree.placement_a&&e.tree.placement_a.name?(o(),m(i,{key:0,classnames:"a",tree:e.tree.placement_a},null,8,["tree"])):(o(),l("div",Q,W)),e.tree.placement_b&&e.tree.placement_b.name?(o(),m(i,{key:2,classnames:"b",tree:e.tree.placement_b},null,8,["tree"])):(o(),l("div",Y,H))],2)):_("",!0)}const ee=p(M,[["render",$],["__scopeId","data-v-d4502b64"]]),se=k({name:"tree-dashboard",setup(){return{store:x()}},components:{TreeRe:ee},data(){return{mousePos:0,tree:""}},mounted(){this.getTree()},methods:{getTree(){R.get("/api/member/placement/").then(s=>{console.log(s.data),this.tree=s.data})},mouseMove(s){this.mousePos=s.clientX},pageScrolled(){const s=document.querySelector(".treeBody .head"),a=document.querySelector(".treeBody .head div");if(a&&a.getBoundingClientRect().top<100){var e=document.querySelector(".treeBody").getBoundingClientRect();console.log((e.right-e.left)/2,this.mousePos-e.left),console.log("Change"),(e.right-e.left)/2>this.mousePos-e.left?(s.classList.remove("head"),a.classList.add("head"),a.nextElementSibling.classList.add("hidden")):(s.classList.remove("head"),a.nextElementSibling.classList.add("head"),a.classList.add("hidden"))}else if(document.querySelector(".treeBody .head").getBoundingClientRect().top>100){console.log("Revert");var n=document.querySelector(".treeBody .head");if(n.classList.contains("start"))return;n.classList.remove("head"),n.parentElement.classList.add("head"),n.nextElementSibling?n.nextElementSibling.classList.remove("hidden"):n.previousElementSibling.classList.remove("hidden")}}}});function te(s,a,e,n,b,f){const i=v("TreeRe");return o(),l("section",{class:"treeBody",onMousemove:a[0]||(a[0]=r=>s.mouseMove(r)),onScroll:a[1]||(a[1]=r=>s.pageScrolled(r))},[s.tree?(o(),m(i,{key:0,classnames:"start head",tree:s.tree},null,8,["tree"])):_("",!0)],32)}const oe=p(se,[["render",te]]);export{oe as default};
