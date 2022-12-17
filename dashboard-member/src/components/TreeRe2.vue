<template>
    <div class="a1 start head" v-if="tree">
        <TreeRe :comment="tree.placement_a" v-if="tree && tree.placement_a"></TreeRe>
        <div class="b1" v-else>
            <div class="c1">
            </div>
            <div class="c2">
            </div>
        </div>
        <TreeRe :comment="tree.placement_b" v-if="tree && tree.placement_b"></TreeRe>
        <div class="b2" v-else>
            <div class="d1">
            </div>
            <div class="d2">
            </div>
        </div>
    </div>
</template>

<script>
import TreeRe from "@/components/TreeRe.vue";
export default {
  name: "TreeRe2",
  props: {
    tree: Object,
  },
  components: {
    TreeRe
  },
};
</script>