"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[1712],{79097:function(t,e,a){a.d(e,{O:function(){return s}});var o=a(5080),n=a(87553),s=function(t){var e=t.substring(t.lastIndexOf("."),t.length),a="dark"==n.Z.getters.getThemeMode?"".concat(t.substring(0,t.lastIndexOf(".")),"-dark"):t.substring(0,t.lastIndexOf("."));return"media/illustrations/".concat(o.Gv.value,"/").concat(a).concat(e)}},8168:function(t,e,a){a.d(e,{Z:function(){return g}});var o=a(66252),n=a(3577),s={class:"card"},i={class:"card-body p-0"},l={class:"card-px text-center py-20 my-10"},r={class:"fs-2x fw-bold mb-10"},c={class:"text-gray-400 fs-5 fw-semobold mb-13"},d=["innerHTML"],u=["data-bs-target"],m={class:"text-center px-5"},b=["src"];function p(t,e,a,p,f,_){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",i,[(0,o._)("div",l,[(0,o._)("h2",r,(0,n.zw)(t.title),1),(0,o._)("p",c,[(0,o._)("span",{innerHTML:t.description},null,8,d)]),(0,o._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(t.modalId)},(0,n.zw)(t.buttonText),9,u)]),(0,o._)("div",m,[(0,o._)("img",{src:t.image,alt:"",class:"mw-100 mh-300px"},null,8,b)])])])}var f=(0,o.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),_=a(83744);const v=(0,_.Z)(f,[["render",p]]);var g=v},71712:function(t,e,a){a.r(e),a.d(e,{default:function(){return st}});var o=a(66252);function n(t,e,a,n,s,i){var l=(0,o.up)("KTModalCard"),r=(0,o.up)("KTTwoFactorAuthModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{title:"Two-factor Authentication",description:"Click on the below buttons to launch <br/>two-factor authentication setup example.",image:t.getIllustrationsPath("4.png"),"button-text":"Enable Two-factor Authentication","modal-id":"kt_modal_two_factor_authentication"},null,8,["image"]),(0,o.Wm)(r)],64)}var s=a(8168),i=a(3577),l=a(49963),r={class:"modal fade",id:"kt_modal_two_factor_authentication",tabindex:"-1","aria-hidden":"true"},c={class:"modal-dialog modal-dialog-centered mw-650px"},d={class:"modal-content"},u={class:"modal-header flex-stack"},m=(0,o._)("h2",null,"Choose An Authentication Method",-1),b={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},p={class:"svg-icon svg-icon-1"},f={class:"modal-body scroll-y pt-10 pb-15 px-lg-17"},_=(0,o._)("p",{class:"text-gray-400 fs-5 fw-semobold mb-10"}," In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account. ",-1),v={class:"pb-10"},g={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5",for:"kt_modal_two_factor_authentication_option_1"},h={class:"svg-icon svg-icon-4x me-4"},w=(0,o._)("span",{class:"d-block fw-semobold text-start"},[(0,o._)("span",{class:"text-dark fw-bold d-block fs-3"},"Authenticator Apps"),(0,o._)("span",{class:"text-gray-400 fw-semobold fs-6"}," Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password. ")],-1),y={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",for:"kt_modal_two_factor_authentication_option_2"},k={class:"svg-icon svg-icon-4x me-4"},x=(0,o._)("span",{class:"d-block fw-semobold text-start"},[(0,o._)("span",{class:"text-dark fw-bold d-block fs-3"},"SMS"),(0,o._)("span",{class:"text-gray-400 fw-semobold fs-6"},"We will send a code via SMS if you need to use your backup login method.")],-1),A=(0,o.uE)('<h3 class="text-dark fw-bold mb-7">Authenticator Apps</h3><div class="text-gray-500 fw-semobold fs-6 mb-10"> Using an authenticator app like <a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank">Google Authenticator</a>, <a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank">Microsoft Authenticator</a>, <a href="https://authy.com/download/" target="_blank">Authy</a>, or <a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, scan the QR code. It will generate a 6 digit code for you to enter below. <div class="pt-5 text-center"><img src="media/misc/qr.png" alt="" class="mw-150px"></div></div>',2),C={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},M={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},S=(0,o._)("div",{class:"d-flex flex-stack flex-grow-1"},[(0,o._)("div",{class:"fw-semobold"},[(0,o._)("div",{class:"fs-6 text-gray-600"},[(0,o.Uk)(" If you having trouble using the QR code, select manual entry on your app, and enter your username and the code: "),(0,o._)("div",{class:"fw-bold text-dark pt-2"}," KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN ")])])],-1),T={class:"mb-10 fv-row"},W={class:"fv-plugins-message-container"},F={class:"fv-help-block"},B={class:"d-flex flex-center"},I={ref:"submitAuthCodeButtonRef",type:"submit","data-kt-element":"apps-submit",class:"btn btn-primary"},Z=(0,o._)("span",{class:"indicator-label"}," Submit ",-1),R=(0,o._)("span",{class:"indicator-progress"},[(0,o.Uk)(" Please wait... "),(0,o._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),U=[Z,R],H=(0,o._)("h3",{class:"text-dark fw-bold fs-3 mb-5"}," SMS: Verify Your Mobile Number ",-1),O=(0,o._)("div",{class:"text-gray-400 fw-semobold mb-10"}," Enter your mobile phone number with country code and we will send you a verification code upon request. ",-1),P={class:"mb-10 fv-row"},E={class:"fv-plugins-message-container"},G={class:"fv-help-block"},K={class:"d-flex flex-center"},q={ref:"submitMobileButtonRef",type:"submit","data-kt-element":"sms-submit",class:"btn btn-primary"},D=(0,o._)("span",{class:"indicator-label"}," Submit ",-1),V=(0,o._)("span",{class:"indicator-progress"},[(0,o.Uk)(" Please wait... "),(0,o._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),Y=[D,V];function N(t,e,a,n,s,Z){var R=(0,o.up)("inline-svg"),D=(0,o.up)("Field"),V=(0,o.up)("ErrorMessage"),N=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",c,[(0,o._)("div",d,[(0,o._)("div",u,[m,(0,o._)("div",b,[(0,o._)("span",p,[(0,o.Wm)(R,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,o._)("div",f,[(0,o._)("div",{class:(0,i.C_)([""!==t.state&&"d-none"])},[_,(0,o._)("div",v,[(0,o.wy)((0,o._)("input",{type:"radio",class:"btn-check",name:"auth_option",value:"apps",checked:"checked",id:"kt_modal_two_factor_authentication_option_1","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.value=e})},null,512),[[l.G2,t.value]]),(0,o._)("label",g,[(0,o._)("span",h,[(0,o.Wm)(R,{src:"media/icons/duotune/coding/cod001.svg"})]),w]),(0,o.wy)((0,o._)("input",{type:"radio",class:"btn-check",name:"auth_option",value:"sms",id:"kt_modal_two_factor_authentication_option_2","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.value=e})},null,512),[[l.G2,t.value]]),(0,o._)("label",y,[(0,o._)("span",k,[(0,o.Wm)(R,{src:"media/icons/duotune/communication/com003.svg"})]),x])]),(0,o._)("button",{onClick:e[2]||(e[2]=function(e){return t.state=t.value}),class:"btn btn-primary w-100"}," Continue ")],2),(0,o._)("div",{class:(0,i.C_)(["apps"!==t.state&&"d-none"]),"data-kt-element":"apps"},[A,(0,o._)("div",C,[(0,o._)("span",M,[(0,o.Wm)(R,{src:"media/icons/duotune/general/gen044.svg"})]),S]),(0,o.Wm)(N,{class:"form",onSubmit:e[4]||(e[4]=function(e){return t.submitAuthCodeForm()}),"validation-schema":t.schema2},{default:(0,o.w5)((function(){return[(0,o._)("div",T,[(0,o.Wm)(D,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Enter authentication code",name:"code"}),(0,o._)("div",W,[(0,o._)("div",F,[(0,o.Wm)(V,{name:"code"})])])]),(0,o._)("div",B,[(0,o._)("button",{type:"reset",onClick:e[3]||(e[3]=function(e){return t.state=""}),class:"btn btn-light me-3"}," Cancel "),(0,o._)("button",I,U,512)])]})),_:1},8,["validation-schema"])],2),(0,o._)("div",{class:(0,i.C_)(["sms"!==t.state&&"d-none"]),"data-kt-element":"sms"},[H,O,(0,o.Wm)(N,{class:"form",onSubmit:e[6]||(e[6]=function(e){return t.submitMobileForm()}),"validation-schema":t.schema1},{default:(0,o.w5)((function(){return[(0,o._)("div",P,[(0,o.Wm)(D,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Mobile number with country code...",name:"mobile"}),(0,o._)("div",E,[(0,o._)("div",G,[(0,o.Wm)(V,{name:"mobile"})])])]),(0,o._)("div",K,[(0,o._)("button",{onClick:e[5]||(e[5]=function(e){return t.state=""}),class:"btn btn-light me-3"}," Cancel "),(0,o._)("button",q,Y,512)])]})),_:1},8,["validation-schema"])],2)])])])])}var Q=a(2262),z=a(74231),L=a(12954),j=a(78764),J=a.n(j),X=(0,o.aZ)({name:"two-factor-auth-modal",components:{ErrorMessage:L.Bc,Field:L.gN,Form:L.l0},setup:function(){var t=(0,Q.iH)("apps"),e=(0,Q.iH)(""),a=(0,Q.iH)(null),o=(0,Q.iH)(null),n=z.Ry().shape({mobile:z.Z_().required().label("Mobile")}),s=z.Ry().shape({code:z.Z_().required().label("Code")}),i=function(){a.value&&(a.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var t;null===(t=a.value)||void 0===t||t.removeAttribute("data-kt-indicator"),J().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){e.value=""}))}),2e3))},l=function(){o.value&&(o.value.disabled=!0,o.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var t;o.value&&(o.value.disabled=!1,null===(t=o.value)||void 0===t||t.removeAttribute("data-kt-indicator")),J().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){e.value=""}))}),2e3))};return{value:t,state:e,schema1:n,schema2:s,submitAuthCodeForm:i,submitMobileForm:l,submitAuthCodeButtonRef:a,submitMobileButtonRef:o}}}),$=a(83744);const tt=(0,$.Z)(X,[["render",N]]);var et=tt,at=a(79097),ot=(0,o.aZ)({name:"two-factor-auth",components:{KTModalCard:s.Z,KTTwoFactorAuthModal:et},setup:function(){return{getIllustrationsPath:at.O}}});const nt=(0,$.Z)(ot,[["render",n]]);var st=nt}}]);
//# sourceMappingURL=1712.79880cb6.js.map