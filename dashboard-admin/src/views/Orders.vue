<template>
  <section>
    <table class="table gs-7 gy-7 gx-7">
      <thead>
        <tr
          class="fw-bold fs-5 text-gray-800 border-bottom border-gray-200"
        >
          <th>Member & type</th>
          <th>Item list</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
        </tr> -->
        <tr>
            <td>You Have No New Orders</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ApiService, { baseUrl } from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2";
export default defineComponent({
  name: "main-dashboard",
  data() {
    return {
      baseUrl: baseUrl,
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    dummy() {
      console.log("dummy");
    },
  },
});
</script>