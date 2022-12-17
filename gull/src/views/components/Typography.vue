<script setup>
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
  <div class="container mx-auto">
    <breadcrumbs parentTitle="Components" subParentTitle="Typography" />
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6">
        <BaseCard>
            <h1 class="heading">h1. Heading 1</h1>
            <h2 class="heading">h1. Heading 1</h2>
            <h3 class="heading">h1. Heading 1</h3>
            <h4 class="heading">h1. Heading 1</h4>
            <h5 class="heading">h1. Heading 1</h5>
            <h6 class="heading">h1. Heading 1</h6>
        </BaseCard>
        
      </div>
      
    </div>
  </div>
</template>
