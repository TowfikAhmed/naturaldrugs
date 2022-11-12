<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10 stagger">
    <!--begin::Col-->
    <div class="col-xl-6 animate__animated animate__faster animate__backInUp">
      <ProductTable
        widget-classes="card-xl-stretch mb-xl-8 h-md-100"
        chart-color="primary"
        chart-height="150"
      ></ProductTable>
    </div>
    <div class="col-xl-6 animate__animated animate__faster animate__backInUp">
      <OrdersTable
        widget-classes="card-xl-stretch mb-xl-8 h-md-100"
        chart-color="primary"
        chart-height="150"
      ></OrdersTable>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductTable from "@/components/widgets/tables/Widget5.vue";
import OrdersTable from "@/components/widgets/tables/Widget7.vue";

export default defineComponent({
  name: "main-dashboard",
  components: {
    ProductTable,
    OrdersTable,
  },
});
</script>
