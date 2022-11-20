<template>
  <section>
    <h1 class="mx-auto p-10 w-100 text-center">{{store.state.AuthModule.user.type}} dashboard</h1>
    {{store.state.AuthModule.user}}
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "main-dashboard",
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
  },
});
</script>
