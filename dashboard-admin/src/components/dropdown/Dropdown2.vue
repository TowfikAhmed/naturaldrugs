<template>
  <!--begin::Menu 2-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px"
    data-kt-menu="true"
  >


    <!--begin::Menu separator-->
    <div class="separator mb-3 opacity-75"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> New Ticket </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> New Customer </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a href="#" class="menu-link px-3"> New Contact </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "dropdown-2",
  components: {},
});
</script>
