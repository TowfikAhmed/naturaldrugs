"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[775],{70775:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var r=s(66252),o={class:"w-lg-500px p-10"},n=(0,r._)("div",{class:"text-center mb-10"},[(0,r._)("h1",{class:"text-dark mb-3"},"Forgot Password ?"),(0,r._)("div",{class:"text-gray-400 fw-semobold fs-4"}," Enter your email to reset your password. ")],-1),a={class:"fv-row mb-10"},i=(0,r._)("label",{class:"form-label fw-bold text-gray-900 fs-6"},"Email",-1),l={class:"fv-plugins-message-container"},u={class:"fv-help-block"},c={class:"d-flex flex-wrap justify-content-center pb-lg-0"},d={type:"submit",ref:"submitButton",id:"kt_password_reset_submit",class:"btn btn-lg btn-primary fw-bold me-4"},m=(0,r._)("span",{class:"indicator-label"}," Submit ",-1),b=(0,r._)("span",{class:"indicator-progress"},[(0,r.Uk)(" Please wait... "),(0,r._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),f=[m,b],p=(0,r.Uk)("Cancel");function g(t,e,s,m,b,g){var v=(0,r.up)("Field"),w=(0,r.up)("ErrorMessage"),_=(0,r.up)("router-link"),h=(0,r.up)("Form");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(h,{class:"form w-100 fv-plugins-bootstrap5 fv-plugins-framework",onSubmit:t.onSubmitForgotPassword,id:"kt_login_password_reset_form","validation-schema":t.forgotPassword},{default:(0,r.w5)((function(){return[n,(0,r._)("div",a,[i,(0,r.Wm)(v,{class:"form-control form-control-solid",type:"email",placeholder:"",name:"email",autocomplete:"off"}),(0,r._)("div",l,[(0,r._)("div",u,[(0,r.Wm)(w,{name:"email"})])])]),(0,r._)("div",c,[(0,r._)("button",d,f,512),(0,r.Wm)(_,{to:"/sign-up",class:"btn btn-lg btn-light-primary fw-bold"},{default:(0,r.w5)((function(){return[p]})),_:1})])]})),_:1},8,["onSubmit","validation-schema"])])}var v=s(70655),w=s(2262),_=s(12954),h=s(33907),k=s(74231),y=s(15758),x=s(48542),S=s.n(x),F=(0,r.aZ)({name:"password-reset",components:{Field:_.gN,Form:_.l0,ErrorMessage:_.Bc},setup:function(){var t=this,e=(0,h.oR)(),s=(0,w.iH)(null),r=k.Ry().shape({email:k.Z_().email().required().label("Email")}),o=function(r){return(0,v.mG)(t,void 0,void 0,(function(){var t,o,n,a,i;return(0,v.Jh)(this,(function(l){switch(l.label){case 0:return s.value.disabled=!0,null===(a=s.value)||void 0===a||a.setAttribute("data-kt-indicator","on"),[4,e.dispatch(y.e.FORGOT_PASSWORD,r)];case 1:return l.sent(),t=(0,v.CR)(Object.keys(e.getters.getErrors),1),o=t[0],n=e.getters.getErrors[o],n?S().fire({text:n[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):S().fire({text:"You have successfully logged in!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}),null===(i=s.value)||void 0===i||i.removeAttribute("data-kt-indicator"),s.value.disabled=!1,[2]}}))}))};return{onSubmitForgotPassword:o,forgotPassword:r,submitButton:s}}}),B=s(83744);const E=(0,B.Z)(F,[["render",g]]);var P=E}}]);
//# sourceMappingURL=775.feb82a8e.js.map