<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { ref } from 'vue'
// box open
let isOpen = ref(false)
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="App" subParentTitle="Todo List" />
        <div class="ul-box-wrapper">
            <div
                class="ul-box-sidebar-overlay"
                :class="isOpen ? 'open' : ''"
                @click="isOpen = !isOpen"
            ></div>
            <div
                class="ul-box-sidebar bg-white dark:bg-foreground"
                :class="isOpen ? 'open' : ''"
            >
                <div class="ul-box-header shadow">
                    <BaseBtn block class="bg-primary text-white"
                        >Add Task</BaseBtn
                    >
                </div>
                <div class="ul-box-sidebar-content">
                    <div
                        class="flex items-center cursor-pointer p-3 dark:hover:bg-dark hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary mr-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                            />
                        </svg>
                        <p class="text-primary text-base font-semibold">Find</p>
                    </div>
                    <div
                        class="flex items-center cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-dark"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary mr-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <p class="text-primary text-base font-semibold">
                            Favourite
                        </p>
                    </div>
                    <div
                        class="flex items-center cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-dark"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary mr-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <p class="text-primary text-base font-semibold">
                            Deleted
                        </p>
                    </div>
                </div>
            </div>
            <div class="ul-box-container bg-white dark:bg-foreground">
                <div class="ul-box-container-header flex shadow items-center">
                    <div class="ul-box-menu-bar mr-2">
                        <svg
                            @click="isOpen = !isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <div class="relative text-gray-600">
                        <input
                            class="bg-gray-100 dark:bg-dark h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                        <button
                            role="button"
                            class="absolute right-0 top-0 mt-2 mr-4 focus:outline-none"
                            type="submit"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-purple-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="ul-box-container-content p-5">
                    <div
                        class="divide-y divide-gray-200 dark:divide-dark divide-solid"
                    >
                        <div
                            class="flex justify-between items-center pb-5 pt-4"
                        >
                            <label class="inline-flex items-center mt-3">
                                <input
                                    class="form-checkbox h-5 w-5 border border-gray-200 rounded bg-gray-200 text-primary"
                                    type="checkbox"
                                /><span
                                    class="ml-2 mr-4 text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis dark:text-gray-400 w-96"
                                    >Wireless Bluetooth V4.0 Portable Speaker
                                    with HD Sound and Bass</span
                                >
                            </label>
                            <div>
                                <div class="flex items-center">
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-primary mr-3"
                                            >Vue</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-info mr-3"
                                            >React</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="#">
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
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center pb-5 pt-4"
                        >
                            <label class="inline-flex items-center mt-3">
                                <input
                                    class="form-checkbox h-5 w-5 border border-gray-200 rounded bg-gray-200 text-primary"
                                    type="checkbox"
                                /><span
                                    class="ml-2 mr-4 text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis dark:text-gray-400 w-96"
                                    >Bluetooth V4.0 Portable Speaker with HD
                                    Sound and Bass</span
                                >
                            </label>
                            <div>
                                <div class="flex items-center">
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-danger mr-3"
                                            >Angular</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-warning mr-3"
                                        >
                                            JS</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/4.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="#">
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
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center pb-5 pt-4"
                        >
                            <label class="inline-flex items-center mt-3">
                                <input
                                    class="form-checkbox h-5 w-5 border border-gray-200 rounded bg-gray-200 text-primary"
                                    type="checkbox"
                                /><span
                                    class="ml-2 mr-4 text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis dark:text-gray-400 w-96"
                                    >Bluetooth V4.0 Portable Speaker with HD
                                    Sound and Bass</span
                                >
                            </label>
                            <div>
                                <div class="flex items-center">
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-primary mr-3"
                                            >Vue.js</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/5.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="flex items-center mr-2">
                                        <span
                                            class="rounded px-3 py-1 text-xs text-white dark:text-white bg-danger mr-3"
                                            >Angular</span
                                        ><img
                                            class="avatar rounded-full"
                                            src="/images/faces/10.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="#">
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
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
