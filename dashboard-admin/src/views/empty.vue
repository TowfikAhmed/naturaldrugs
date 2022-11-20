<template>
  <section>
    asdf
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