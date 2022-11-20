<template>
  <!--begin::Authentication Layout -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Body-->
    <div
      class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
    >
      <!--begin::Form-->
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <!--begin::Wrapper-->
        <div class="<?php echo $params['wrapperClass']?> p-10">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Form-->

      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap px-5">
        <!--begin::Links-->
        <div class="d-flex fw-semibold text-primary fs-base">
          <a href="#" class="px-5" target="_blank">Terms</a>

          <a href="#" class="px-5" target="_blank">Plans</a>

          <a href="#" class="px-5" target="_blank">Contact Us</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->

    <!--begin::Aside-->
    <div
      class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
      style="background-image: url('/static/dashboard/media/misc/auth-bg.png')"
    >
      <!--begin::Content-->
      <div
        class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
      >
        <!--begin::Logo-->
        <!--end::Logo-->

        <!--begin::Image-->
        <img
          class="d-none d-lg-block mx-auto w-120px w-md-50 w-xl-200px mb-10 mb-lg-20"
          src="/static/dashboard/media/misc/auth-screens.png"
          alt=""
        />
        <!--end::Image-->

        <!--begin::Title-->
        <h1
          class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7"
        >
          NaturalDrugs Dashboard Login
        </h1>
        <!--end::Title-->

        <!--begin::Text-->
        <div class="d-none d-lg-block text-white fs-base text-center">
          In this kind of post,
          <a href="#" class="opacity-75-hover text-warning fw-bold me-1"
            >the blogger</a
          >

          introduces a person they’ve interviewed <br />
          and provides some background information about

          <a href="#" class="opacity-75-hover text-warning fw-bold me-1"
            >the interviewee</a
          >
          and their <br />
          work following this is a transcript of the interview.
        </div>
        <!--end::Text-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Aside-->
  </div>
  <!--end::Authentication Layout -->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "app-blank");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>

<style>
   .confetti-button {
    font-family: 'Helvetica', 'Arial', sans-serif;
    display: inline-block;
    font-size: 1em;
    padding: 1em 2em;
    -webkit-appearance: none;
    appearance: none;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  }

  .confetti-button:focus { outline: 0; }

  .confetti-button:before, .confetti-button:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  .confetti-button:before {
    display: none;
    top: -75%;
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

  .confetti-button:after {
    display: none;
    bottom: -75%;
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }

  .confetti-button:active {
    transform: scale(0.9);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }
  .btn-primary.confetti-button:before {
    background-image: radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, transparent 20%, #009ef7 20%, transparent 30%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, transparent 10%, #009ef7 15%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%);
  }
  .btn-primary.confetti-button:after {
    background-image: radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, transparent 10%, #009ef7 15%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%), radial-gradient(circle, #009ef7 20%, transparent 20%);
  }
  .btn-primary.confetti-button:active{
    background-color: #009ef7;
  }

  .confetti-button.animate:before {
    display: block;
    animation: topBubbles ease-in-out 0.75s forwards;
  }

  .confetti-button.animate:after {
    display: block;
    animation: bottomBubbles ease-in-out 0.75s forwards;
  }
   @keyframes
  topBubbles {  0% {
   background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
   50% {
   background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
   100% {
   background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
   background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
  }
  @keyframes
  bottomBubbles {  0% {
   background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
   50% {
   background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
   100% {
   background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
   background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
  }

</style>
