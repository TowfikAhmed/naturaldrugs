<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { ref } from 'vue'
// box open
let isOpen = ref(false)
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Apps" subParentTitle="Chat" />
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
                    <input
                        class="
                            w-full
                            border border-gray-300
                            dark:border-dark dark:bg-dark
                            px-4
                            py-1
                            focus:outline-none
                            mt-0
                            rounded-full
                        "
                        type="text"
                        placeholder="search contacts"
                    />
                </div>
                <div class="ul-box-sidebar-content">
                    <div
                        class="
                            divide-y divide-gray-200
                            dark:divide-dark
                            divide-solid
                        "
                    >
                        <div
                            class="
                                flex
                                items-center
                                justify-between
                                p-3
                                cursor-pointer
                                hover:bg-gray-100
                                dark:hover:bg-dark
                            "
                        >
                            <img
                                class="avatar mr-2 rounded-full"
                                src="/images/faces/1.jpg"
                            />
                            <p
                                class="
                                    overflow-ellipsis overflow-hidden
                                    whitespace-nowrap
                                    mr-4
                                    flex-1
                                    dark:text-gray-300
                                "
                            >
                                Timothy Clarkson Wiesley Harvard
                            </p>
                            <span
                                class="rounded-full bg-primary p-1 mr-3"
                                href="#"
                            ></span>
                        </div>
                        <div
                            class="
                                flex
                                items-center
                                justify-between
                                p-3
                                cursor-pointer
                                hover:bg-gray-100
                                dark:hover:bg-dark
                            "
                        >
                            <img
                                class="avatar mr-2 rounded-full"
                                src="/images/faces/2.jpg"
                            />
                            <p
                                class="
                                    overflow-ellipsis overflow-hidden
                                    whitespace-nowrap
                                    mr-4
                                    flex-1
                                    dark:text-gray-300
                                "
                            >
                                Timothy Clarkson
                            </p>
                            <span
                                class="rounded-full bg-primary p-1 mr-3"
                                href="#"
                            ></span>
                        </div>
                        <div
                            class="
                                flex
                                items-center
                                justify-between
                                p-3
                                cursor-pointer
                                hover:bg-gray-100
                                dark:hover:bg-dark
                            "
                        >
                            <img
                                class="avatar mr-2 rounded-full"
                                src="/images/faces/3.jpg"
                            />
                            <p
                                class="
                                    overflow-ellipsis overflow-hidden
                                    whitespace-nowrap
                                    mr-4
                                    flex-1
                                    dark:text-gray-300
                                "
                            >
                                Jhon Wesley
                            </p>
                            <span
                                class="rounded-full bg-gray-300 p-1 mr-3"
                                href="#"
                            ></span>
                        </div>
                        <div
                            class="
                                flex
                                items-center
                                justify-between
                                p-3
                                cursor-pointer
                                hover:bg-gray-100
                                dark:hover:bg-dark
                            "
                        >
                            <img
                                class="avatar mr-2 rounded-full"
                                src="/images/faces/4.jpg"
                            />
                            <p
                                class="
                                    overflow-ellipsis overflow-hidden
                                    whitespace-nowrap
                                    mr-4
                                    flex-1
                                    dark:text-gray-300
                                "
                            >
                                Jhon Wesley
                            </p>
                            <span
                                class="rounded-full bg-gray-300 p-1 mr-3"
                                href="#"
                            ></span>
                        </div>
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
                    <div class="flex items-center">
                        <img
                            class="avatar mr-4 rounded-full"
                            src="/images/faces/1.jpg"
                        /><span class="font-semibold dark:text-gray-300"
                            >Timothy Clarkson</span
                        >
                    </div>
                </div>
                <div class="ul-box-container-content p-5">
                    <div class="mb-5" v-for="(item, index) in 10" :key="index">
                        <div
                            class="
                                p-3
                                bg-gray-100
                                dark:bg-dark
                                rounded
                                break-words
                                mb-5
                            "
                        >
                            <p
                                class="
                                    text-base
                                    dark:text-gray-300
                                    font-semibold
                                "
                            >
                                Frank Powell
                            </p>
                            <div>
                                <p class="dark:text-gray-400">
                                    Do you ever find yourself falling into the
                                    “discount trap?
                                </p>
                            </div>
                        </div>
                        <div class="flex mb-5 justify-end">
                            <div
                                class="
                                    p-3
                                    bg-gray-100
                                    rounded
                                    mr-4
                                    break-words
                                    dark:bg-dark
                                "
                            >
                                <p
                                    class="
                                        text-base
                                        font-semibold
                                        dark:text-gray-300
                                    "
                                >
                                    Frank Powell
                                </p>
                                <p class="dark:text-gray-400">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <img
                                class="avatar rounded-full"
                                src="/images/faces/2.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div class="ul-box-container-footer p-5 shadow">
                    <div class="flex items-center">
                        <div class="flex-1 mr-2">
                            <input
                                class="
                                    w-full
                                    px-4
                                    py-1
                                    focus:outline-none
                                    border border-gray-300
                                    dark:border-gray-500 dark:text-gray-400
                                    rounded
                                    dark:bg-dark
                                "
                                value="askjhdgahsgd"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <BaseBtn
                            icon
                            class="bg-primary rounded-full text-white"
                        >
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
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </BaseBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
