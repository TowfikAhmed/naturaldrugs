<script setup>
import { ref } from 'vue'

let isHide = ref(false)
let hideAlert = () => {
    isHide.value = true
}
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Components" subParentTitle="Alerts" />
        <BaseCard>
            <div class="grid md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div
                    class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-primary"
                    :class="isHide ? 'hidden' : ''"
                >
                    <span class="text-xl inline-block mr-5 align-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </span>
                    <span class="inline-block align-middle mr-8">
                        <b class="capitalize">primary!</b> This is a primary
                        alert - check it out!
                    </span>
                    <button
                        role="button"
                        @click="hideAlert"
                        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    >
                        <span>×</span>
                    </button>
                </div>

                <div
                    class="border-t-4 border-purple-600 text-center bg-purple-100 rounded-lg py-3 mb-3"
                >
                    <span class="text-xs text-primary mr-3"
                        >Aatrox makes development life easier!
                    </span>
                    <BaseBtn sm class="bg-primary text-white">Buy Now</BaseBtn>
                </div>
                <div
                    class="border-l-4 border-success text-center bg-green-50 py-3 mb-3"
                >
                    <span class="text-xs text-success mr-3"
                        >Gull makes development life easier!
                    </span>
                    <BaseBtn sm class="bg-success text-white">Buy Now</BaseBtn>
                </div>
                <div
                    class="border-t-4 border-red-600 text-center bg-red-100 rounded-lg py-3 mb-3"
                >
                    <span class="text-xs text-danger mr-3"
                        >Aatrox makes development life easier!
                    </span>
                </div>
                <div class="text-center bg-indigo-100 rounded-lg py-3 mb-3">
                    <span class="text-xs text-info mr-3">
                        <b>AAtrox !</b> makes development life easier!
                    </span>
                </div>
                <div class="overflow-hidden leading-normal rounded-lg mb-3">
                    <p
                        class="px-4 py-3 font-bold text-purple-100 bg-purple-800"
                    >
                        You're being notified
                    </p>
                    <p class="px-4 py-3 text-purple-700 bg-purple-100">
                        A simple alert with text and a filled header. Check it
                        out!
                    </p>
                </div>

                <div class="bg-green-100 p-5 w-ful rounded">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="flex-none fill-current text-green-500 h-4 w-4"
                            >
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
                                />
                            </svg>
                            <div
                                class="flex-1 leading-tight text-sm text-green-700 font-medium"
                            >
                                Photo has been updated
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="flex-none fill-current text-green-600 h-3 w-3"
                        >
                            <path
                                d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </BaseCard>
    </div>
</template>
