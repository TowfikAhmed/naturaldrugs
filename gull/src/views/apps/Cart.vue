<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Ecommerce" subParentTitle="Cart" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-8">
                <BaseCard class="mb-5">
                    <div
                        class="flex flex-wrap justify-between items-center flex-col sm:flex-row"
                    >
                        <img
                            class="w-52 h-28 mr-0 mb-3 sm:mr-4 sm:mb-0"
                            src="/images/products/headphone-1.jpg"
                        />
                        <div class="flex-1 text-center sm:text-left">
                            <p class="text-lg mb-1 text-center sm:text-left">
                                Wireless Bluetooth V4.0 Portable Speaker with HD
                                Sound and Bass
                            </p>
                            <div
                                class="flex items-center mb-3 justify-center sm:justify-start"
                            >
                                <p class="mr-1">category:</p>
                                <a
                                    class="text-primary hover:text-primary"
                                    href="#"
                                    >Speaker
                                </a>
                            </div>
                            <div class="mb-2">
                                <a class="text-primary mb-1">In Stock </a>
                            </div>
                            <div
                                class="inline-flex mr-2 items-center my-4 sm:my-0"
                            >
                                <button role="button" class="pr-4">
                                    <i class="i-Arrow-Left"></i>
                                </button>
                                <p class="text-base">01</p>
                                <button role="button" class="pl-4">
                                    <i class="i-Arrow-Right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="font-semibold text-2xl mb-3">$500</p>

                            <BaseBtn
                                class="border border-danger text-danger hover:bg-danger hover:text-white"
                            >
                                <i
                                    class="i-Close-Window mr-2 align-middle font-semibold"
                                ></i
                                >Remove
                            </BaseBtn>
                        </div>
                    </div>
                </BaseCard>

                <BaseCard class="mb-5">
                    <div
                        class="flex flex-wrap justify-between items-center flex-col sm:flex-row"
                    >
                        <img
                            class="w-52 h-28 mr-0 mb-3 sm:mr-4 sm:mb-0"
                            src="/images/products/iphone-1.jpg"
                        />
                        <div class="flex-1 text-center sm:text-left">
                            <p class="text-lg mb-1 text-center sm:text-left">
                                Portable Speaker with HD Sound
                            </p>
                            <div
                                class="flex items-center mb-3 justify-center sm:justify-start"
                            >
                                <p class="mr-1">category:</p>
                                <a
                                    class="text-primary hover:text-primary"
                                    href="#"
                                    >Speaker
                                </a>
                            </div>
                            <div class="mb-2">
                                <a class="text-primary mb-1">In Stock </a>
                            </div>
                            <div
                                class="inline-flex mr-2 items-center my-4 sm:my-0"
                            >
                                <button role="button" class="pr-4">
                                    <i class="i-Arrow-Left"></i>
                                </button>
                                <p class="text-base">01</p>
                                <button role="button" class="pl-4">
                                    <i class="i-Arrow-Right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="font-semibold text-2xl mb-3">$50</p>
                            <BaseBtn
                                class="border border-danger text-danger hover:bg-danger hover:text-white"
                            >
                                <i
                                    class="i-Close-Window mr-2 align-middle font-semibold"
                                ></i
                                >Remove
                            </BaseBtn>
                        </div>
                    </div>
                </BaseCard>

                <BaseCard class="mb-5">
                    <div
                        class="flex flex-wrap justify-between items-center flex-col sm:flex-row"
                    >
                        <img
                            class="w-52 h-28 mr-0 mb-3 sm:mr-4 sm:mb-0"
                            src="/images/products/speaker-1.jpg"
                        />
                        <div class="flex-1 text-center sm:text-left">
                            <p class="text-lg mb-1 text-center sm:text-left">
                                Portable Speaker with HD Sound
                            </p>
                            <div
                                class="flex items-center mb-3 justify-center sm:justify-start"
                            >
                                <p class="mr-1">category:</p>
                                <a
                                    class="text-primary hover:text-primary"
                                    href="#"
                                    >Speaker
                                </a>
                            </div>
                            <div class="mb-2">
                                <a class="text-primary mb-1">In Stock </a>
                            </div>
                            <div
                                class="inline-flex mr-2 items-center my-4 sm:my-0"
                            >
                                <button role="button" class="pr-4">
                                    <i class="i-Arrow-Left"></i>
                                </button>
                                <p class="text-base">01</p>
                                <button role="button" class="pl-4">
                                    <i class="i-Arrow-Right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="font-semibold text-2xl mb-3">$50</p>
                            <BaseBtn
                                class="border border-danger text-danger hover:bg-danger hover:text-white"
                            >
                                <i
                                    class="i-Close-Window mr-2 align-middle font-semibold"
                                ></i
                                >Remove
                            </BaseBtn>
                        </div>
                    </div>
                </BaseCard>

                <BaseCard class="mb-5">
                    <div
                        class="flex flex-wrap justify-between items-center flex-col sm:flex-row"
                    >
                        <img
                            class="w-52 h-28 mr-0 mb-3 sm:mr-4 sm:mb-0"
                            src="/images/products/watch-1.jpg"
                        />
                        <div class="flex-1 text-center sm:text-left">
                            <p class="text-lg mb-1 text-center sm:text-left">
                                Portable Speaker with HD Sound
                            </p>
                            <div
                                class="flex items-center mb-3 justify-center sm:justify-start"
                            >
                                <p class="mr-1">category:</p>
                                <a
                                    class="text-primary hover:text-primary"
                                    href="#"
                                    >Speaker
                                </a>
                            </div>
                            <div class="mb-2">
                                <a class="text-primary mb-1">In Stock </a>
                            </div>
                            <div
                                class="inline-flex mr-2 items-center my-4 sm:my-0"
                            >
                                <button role="button" class="pr-4">
                                    <i class="i-Arrow-Left"></i>
                                </button>
                                <p class="text-base">01</p>
                                <button role="button" class="pl-4">
                                    <i class="i-Arrow-Right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="font-semibold text-2xl mb-3">$50</p>
                            <BaseBtn
                                class="border border-danger text-danger hover:bg-danger hover:text-white"
                            >
                                <i
                                    class="i-Close-Window mr-2 align-middle font-semibold"
                                ></i
                                >Remove
                            </BaseBtn>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-4">
                <BaseCard>
                    <div class="card-title mb-4">Order Summary</div>
                    <div class="flex justify-between mb-3">
                        <p class="text-gray-500 dark:text-gray-300">
                            Total MRP:
                        </p>
                        <p class="font-semibold text-base">$600</p>
                    </div>
                    <div class="flex justify-between mb-3">
                        <p class="text-gray-500 dark:text-gray-300">
                            Total Items:
                        </p>
                        <p class="font-semibold text-base">2</p>
                    </div>
                    <div class="flex justify-between mb-3">
                        <p class="text-gray-500 dark:text-gray-300">
                            Discount:
                        </p>
                        <p class="font-semibold text-base">5%</p>
                    </div>
                    <div class="flex justify-between mb-3">
                        <p class="text-gray-500 dark:text-gray-300">
                            Delivery Charges:
                        </p>
                        <p class="font-semibold text-base">Free</p>
                    </div>
                    <hr />
                    <div class="flex justify-between py-3">
                        <p class="font-bold text-base">Total:</p>
                        <p class="font-semibold text-base">$600</p>
                    </div>

                    <BaseBtn block class="bg-primary text-white">
                        Order
                    </BaseBtn>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
