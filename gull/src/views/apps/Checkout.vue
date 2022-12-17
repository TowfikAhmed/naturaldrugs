<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Ecommerce" subParentTitle="Checkout" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-8">
                <BaseCard class="h-full">
                    <div class="flex justify-between mb-5 flex-wrap">
                        <div class="flex items-center flex-wrap">
                            <p class="text-base font-bold mr-2">Name:</p>
                            <p class="text-base">Jhon William</p>
                        </div>
                        <div class="flex items-center flex-wrap">
                            <p class="text-base font-bold mr-2">
                                Mobile Number:
                            </p>
                            <p class="text-base">+00 999 45679</p>
                        </div>
                    </div>
                    <div class="flex justify-between mb-5 flex-wrap">
                        <div class="flex items-center flex-wrap">
                            <p class="text-base font-bold mr-2">Town/City:</p>
                            <p class="text-base">New York</p>
                        </div>
                        <div class="flex items-center flex-wrap">
                            <p class="text-base font-bold mr-2">Pin Code:</p>
                            <p class="text-base">1002</p>
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <div class="flex items-center flex-wrap">
                            <p class="text-base font-bold mr-2">Address:</p>
                            <p class="text-base">427 Sigley Road, Brooklyn</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <BaseCard>
                    <div class="card-title mb-5">Price Details</div>
                    <div class="flex justify-between mb-3">
                        <p class="text-base font-bold mr-2">Total Items:</p>
                        <p class="text-base">12</p>
                    </div>
                    <div class="flex justify-between mb-3">
                        <p class="text-base font-bold mr-2">Discount:</p>
                        <p class="text-base">0%</p>
                    </div>
                    <hr class="py-2" />
                    <div class="flex justify-between mb-3">
                        <p class="text-base font-bold mr-2">Total Payment:</p>
                        <p class="text-base">$600</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6">
                <BaseCard>
                    <div class="card-title mb-5">Payment Selection</div>
                    <label class="mr-2" for="">Type CVV:</label>
                    <input
                        class="
                            w-40
                            dark:bg-dark dark:border-gray-500
                            border border-gray-300
                            px-3
                            py-1
                            rounded
                            focus:outline-none
                        "
                        type="text"
                        placeholder="CVV"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
