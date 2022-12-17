<script setup>
 import Breadcrumbs from '@/components/Breadcrumbs.vue'
    let outlineBadge = [
        {
            className: 'border-primary text-primary',
            name: 'primary'
        },
        {
            className: 'border-secondary text-secondary',
            name: 'secondary'
        },
        {
            className: 'border-success text-success',
            name: 'success'
        },
        {
            className: 'border-warning text-warning',
            name: 'warning'
        },
        {
            className: 'border-info text-info',
            name: 'info'
        },
        {
            className: 'border-danger text-danger',
            name: 'danger'
        },
    ]
    let regularBadges = [
        {
            className: 'bg-primary text-white',
            name: 'primary'
        },
        {
            className: 'bg-secondary text-dark',
            name: 'secondary'
        },
        {
            className: 'bg-success text-white',
            name: 'success'
        },
        {
            className: 'bg-warning text-white',
            name: 'warning'
        },
        {
            className: 'bg-info text-white',
            name: 'info'
        },
        {
            className: 'bg-danger text-white',
            name: 'danger'
        },
    ]
</script>

<template>
  <div class="container mx-auto">
        <breadcrumbs parentTitle="Component" subParentTitle="Badges" />
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <BaseCard>
            <div class="card-title mb-5">Badge Outline</div>
            <span
                v-for="(item, index) in outlineBadge"
                :key="index"
                class="badge border rounded-full px-2 py-1  mr-3"
                :class="item.className"
            >{{item.name}}</span>
        </BaseCard>
        <BaseCard>
            <div class="card-title mb-5">Regular Badges</div>
            <span
                v-for="(item, index) in regularBadges"
                :key="index"
                class="badge border rounded-full px-2 py-1 mr-3"
                :class="item.className"
            >{{item.name}}</span>
        </BaseCard>
        <BaseCard>
            <div class="card-title mb-5">Regular Badges Square</div>
            <span
                v-for="(item, index) in regularBadges"
                :key="index"
                class="badge border rounded  px-2 py-1 mr-3"
                :class="item.className"
            >{{item.name}}</span>
        </BaseCard>
        <BaseCard>
            <div class="card-title mb-5">More Styles</div>
            <BaseBtn class="bg-primary text-white mr-5">
                <span class="mr-2">Button</span>
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
            </BaseBtn>
            <span class="relative inline-block mr-5">
                <svg class="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
            </span>


            <span class="inline-block w-2 h-2 mr-2 bg-success rounded-full"></span>
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none bg-primary text-white rounded-full">9</span>
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-warning rounded-full">99+</span>
        </BaseCard>
        </div>
  </div>
</template>
<style lang="scss" scoped>
.badge {
    @apply inline-block text-center whitespace-nowrap tracking-wider;
    font-size: 10px;
}
</style>