<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Components" subParentTitle="Avatars" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title mb-5">Circular Group Avatar</div>
                    <div class="flex -space-x-1 overflow-hidden mb-8">
                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>
                    <div class="flex -space-x-2 overflow-hidden mb-8">
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>

                    <div class="flex -space-x-2 overflow-hidden">
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title mb-5">Rounded Group Avatar</div>
                    <div class="flex -space-x-1 overflow-hidden mb-8">
                        <img class="inline-block h-6 w-6 rounded ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-6 w-6 rounded ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>
                    <div class="flex -space-x-2 overflow-hidden mb-8">
                        <img class="inline-block h-8 w-8 rounded ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-8 w-8 rounded ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>

                    <div class="flex -space-x-2 overflow-hidden">
                        <img class="inline-block h-10 w-10 rounded ring-2 ring-white" src="/images/faces/2.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded ring-2 ring-white" src="/images/faces/3.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded ring-2 ring-white" src="/images/faces/4.jpg" alt="">
                        <img class="inline-block h-10 w-10 rounded ring-2 ring-white" src="/images/faces/5.jpg" alt="">
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title mb-5"> Avatars with  notification</div>
                    <div class="inline-flex relative mr-4">
                       <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt=""> 
                       <div class="w-3 h-3 border-2 border-whote bg-primary rounded-full absolute right-0"></div>
                    </div>
                    <div class="inline-flex relative mr-4">
                       <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt=""> 
                       <div class="w-4 h-4 border-2 border-whote bg-primary rounded-full absolute right-0"></div>
                    </div>
                    <div class="inline-flex relative mr-4">
                       <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt=""> 
                       <div class="w-3 h-3 border-2 border-whote bg-primary rounded-full absolute right-0 bottom-0"></div>
                    </div>
                    <div class="inline-flex relative mr-4">
                       <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" src="/images/faces/2.jpg" alt=""> 
                       <div class="w-4 h-4 border-2 border-whote bg-primary rounded-full absolute right-0 bottom-0"></div>
                    </div>
                   
                </BaseCard>
            </div>
        </div>
    </div>
</template>

