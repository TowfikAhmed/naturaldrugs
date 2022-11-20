"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[36],{79097:function(e,a,s){s.d(a,{O:function(){return r}});var t=s(5080),n=s(87553),r=function(e){var a=e.substring(e.lastIndexOf("."),e.length),s="dark"==n.Z.getters.getThemeMode?"".concat(e.substring(0,e.lastIndexOf(".")),"-dark"):e.substring(0,e.lastIndexOf("."));return"media/illustrations/".concat(t.Gv.value,"/").concat(s).concat(a)}},8168:function(e,a,s){s.d(a,{Z:function(){return h}});var t=s(66252),n=s(3577),r={class:"card"},l={class:"card-body p-0"},o={class:"card-px text-center py-20 my-10"},c={class:"fs-2x fw-bold mb-10"},i={class:"text-gray-400 fs-5 fw-semobold mb-13"},d=["innerHTML"],u=["data-bs-target"],m={class:"text-center px-5"},v=["src"];function b(e,a,s,b,f,p){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",l,[(0,t._)("div",o,[(0,t._)("h2",c,(0,n.zw)(e.title),1),(0,t._)("p",i,[(0,t._)("span",{innerHTML:e.description},null,8,d)]),(0,t._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(e.modalId)},(0,n.zw)(e.buttonText),9,u)]),(0,t._)("div",m,[(0,t._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,v)])])])}var f=(0,t.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),p=s(83744);const g=(0,p.Z)(f,[["render",b]]);var h=g},10036:function(e,a,s){s.r(a),s.d(a,{default:function(){return E}});var t=s(66252);function n(e,a,s,n,r,l){var o=(0,t.up)("KTModalsCard"),c=(0,t.up)("KTShareAndEarnModal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(o,{title:"Share & Earn Modal Example",description:"Click on the below buttons to launch <br/>a share & earn example.",image:e.getIllustrationsPath("9.png"),"button-text":"Share & Earn","modal-id":"kt_modal_share_earn"},null,8,["image"]),(0,t.Wm)(c)],64)}var r=s(8168),l={class:"modal fade",id:"kt_modal_share_earn",tabindex:"-1","aria-hidden":"true"},o={class:"modal-dialog modal-dialog-centered mw-800px"},c={class:"modal-content"},i={class:"modal-header pb-0 border-0 justify-content-end"},d={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},u={class:"svg-icon svg-icon-1"},m={class:"modal-body scroll-y pt-0 pb-15"},v={class:"mw-lg-600px mx-auto"},b=(0,t._)("div",{class:"mb-13 text-center"},[(0,t._)("h1",{class:"mb-3"},"Share & Earn"),(0,t._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,t.Uk)(" If you need more info, please check "),(0,t._)("a",{href:"#",class:"link-primary fw-bold"},"Author Commision"),(0,t.Uk)(". ")])],-1),f={class:"mb-10"},p=(0,t._)("h4",{class:"fs-5 fw-semobold text-gray-800"}," Share my referral link with friends ",-1),g={class:"d-flex"},h={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://keenthemes.com/?ref=skitechnology"},_={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bold flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},x=(0,t.uE)('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Import Contacts </a><a href="#" class="btn btn-icon btn-facebook w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-twitter w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div><div class="d-flex align-items-center mt-10"><div class="flex-grow-1"><span class="fs-6 fw-semobold text-gray-800 d-block">Adding Users by Team Members</span><span class="fs-7 fw-semobold text-gray-400">If you need more info, please check budget planning</span></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label"> Allowed </span></label></div>',2);function k(e,a,s,n,r,k){var w=(0,t.up)("inline-svg");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",o,[(0,t._)("div",c,[(0,t._)("div",i,[(0,t._)("div",d,[(0,t._)("span",u,[(0,t.Wm)(w,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,t._)("div",m,[(0,t._)("div",v,[b,(0,t._)("div",f,[p,(0,t._)("div",g,[(0,t._)("input",h,null,512),(0,t._)("button",_," Copy Link ",512)])]),x])])])])])}var w=s(2262),y=s(42152),T=s.n(y),L=(0,t.aZ)({name:"share-and-earn-modal",components:{},setup:function(){var e=(0,w.iH)(null),a=(0,w.iH)(null);return(0,t.bv)((function(){var s=new(T())(e.value);s.on("success",(function(s){var t,n,r,l=null===(t=e.value)||void 0===t?void 0:t.innerHTML;null===(n=a.value)||void 0===n||n.classList.add("bg-success"),null===(r=a.value)||void 0===r||r.classList.add("text-inverse-success"),e.value&&(e.value.innerHTML="Copied!"),setTimeout((function(){var s,t;e.value&&l&&(e.value.innerHTML=l),null===(s=a.value)||void 0===s||s.classList.remove("bg-success"),null===(t=a.value)||void 0===t||t.classList.remove("text-inverse-success")}),3e3),s.clearSelection()}))})),{copyButtonRef:e,inputRef:a}}}),M=s(83744);const S=(0,M.Z)(L,[["render",k]]);var I=S,C=s(79097),Z=(0,t.aZ)({name:"share-and-earn",components:{KTModalsCard:r.Z,KTShareAndEarnModal:I},setup:function(){return{getIllustrationsPath:C.O}}});const H=(0,M.Z)(Z,[["render",n]]);var E=H}}]);
//# sourceMappingURL=36.f9d38895.js.map