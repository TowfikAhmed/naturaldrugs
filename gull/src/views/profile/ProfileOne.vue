<script setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumbs.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
let categories = ref(['Timeline', 'About'])
</script>

<template>
    <div class="container mx-auto">
        <Breadcrumb parentTitle="Profile" subParentTitle="ProfileV1" />
        <div class="container mx-auto">
            <div class="pb-10 px-10 pt-5 bg-white dark:bg-foreground">
                <div class="flex items-center flex-wrap sm:flex-nowrap">
                    <img
                        class="mr-4 rounded-full w-32 h-32"
                        src="/images/faces/1.jpg"
                    />
                    <div class="w-full">
                        <div class="flex flex-wrap sm:flex-nowrap">
                            <div class="mr-8">
                                <div class="flex flex-wrap flex-col mr-8">
                                    <h4
                                        class="flex items-center text-xl font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        amanda_nash
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-primary ml-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </h4>
                                    <p
                                        class="text-xs text-gray-500 dark:text-gray-300"
                                    >
                                        Amanda Nash
                                    </p>
                                </div>
                            </div>
                            <div class="my-2">
                                <span
                                    class="text-primary bg-purple-100 px-3 py-1 text-xs rounded-full mr-3"
                                    >Lifestyle</span
                                >
                                <span
                                    class="text-yellow-500 bg-yellow-100 px-3 py-1 text-xs rounded-full mr-3"
                                    >Music</span
                                >
                            </div>
                            <div class="flex-grow"></div>
                            <div class="flex items-center">
                                <BaseBtn
                                    rounded
                                    icon
                                    class="mr-2 bg-gray-100 hover:bg-gray-300 hover:text-white dark:bg-foreground dark:hover:bg-dark dark:text-white"
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </BaseBtn>
                                <BaseBtn
                                    rounded
                                    icon
                                    class="mr-2 bg-gray-100 hover:bg-gray-300 hover:text-white dark:bg-foreground dark:hover:bg-dark dark:text-white"
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
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                        />
                                    </svg>
                                </BaseBtn>
                            </div>
                        </div>
                        <div class="flex my-3 flex-wrap sm:flex-nowrap">
                            <div class="my-0 mr-8">
                                <span
                                    class="font-bold text-gray-700 dark:text-gray-300 mr-1"
                                    >1,022</span
                                ><span
                                    class="text-sm text-gray-500 dark:text-gray-400"
                                    >Posts</span
                                >
                            </div>
                            <div class="my-0 mr-8">
                                <span
                                    class="font-bold text-gray-700 dark:text-gray-300 mr-1"
                                    >100k</span
                                ><span
                                    class="text-sm text-gray-500 dark:text-gray-400"
                                    >Followers</span
                                >
                            </div>
                            <div class="my-0 mr-8">
                                <span
                                    class="font-bold text-gray-700 dark:text-gray-300 mr-1"
                                    >1540</span
                                ><span
                                    class="text-sm text-gray-500 dark:text-gray-400"
                                    >Following</span
                                >
                            </div>
                        </div>
                        <p class="text-gray-700 dark:text-gray-500">
                            Actor, musician, songwriter #amanda_nash, mailbox:
                            hello@amandanash.com
                        </p>
                    </div>
                </div>
            </div>
            <div class="">
                <TabGroup>
                    <TabList class="px-10 bg-white dark:bg-foreground mb-10">
                        <Tab
                            v-for="category in categories"
                            as="template"
                            :key="category"
                            v-slot="{ selected }"
                        >
                            <button
                                role="button"
                                class="font-semibold border-b-2 border-white dark:border-gray-400 dark:text-gray-400"
                                :class="[
                                    'px-3 py-1 text-sm leading-5 ',
                                    'focus:outline-none',
                                    selected
                                        ? 'text-primary border-b-2 border-primary dark:border-primary dark:text-primary'
                                        : 'text-gray-600',
                                ]"
                            >
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-12 xl:col-span-3">
                                    <BaseCard class="mb-5">
                                        <template v-slot:cardHeader>
                                            <div class="card-header">
                                                <p class="font-bold text-base">
                                                    Basic Info
                                                </p>
                                            </div>
                                        </template>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    Country
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >USA</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-4 w-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    Relationship
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >Single</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-4 w-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    From
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >New York</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    Studied@
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >University Of UI Lib</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    Lives In
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >Texas</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-3"
                                        >
                                            <div class="flex-grow">
                                                <p
                                                    class="text-base font-normal dark:text-gray-300"
                                                >
                                                    Followers
                                                </p>
                                                <small
                                                    class="dark:text-gray-400"
                                                    >120k followers</small
                                                >
                                            </div>

                                            <div
                                                class="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold h-8 w-8 mr-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </BaseCard>
                                    <BaseCard class="mb-5">
                                        <template v-slot:cardHeader>
                                            <div class="card-header">
                                                <p class="font-bold text-base">
                                                    Friends
                                                </p>
                                            </div>
                                        </template>
                                        <div
                                            class="flex justify-between items-center mb-6"
                                        >
                                            <div class="flex items-center">
                                                <img
                                                    class="w-9 h-9 rounded-full mr-2"
                                                    src="/images/faces/1.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700 dark:text-gray-300"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold"
                                                        >
                                                            Tim Clarkson
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-700 dark:text-gray-400"
                                                    >
                                                        2 mutual friend
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-6"
                                        >
                                            <div class="flex items-center">
                                                <img
                                                    class="w-9 h-9 rounded-full mr-2"
                                                    src="/images/faces/2.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700 dark:text-gray-300"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold"
                                                        >
                                                            Jhon Weaver
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-700 dark:text-gray-400"
                                                    >
                                                        2 mutual friend
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-gray-400 dark:text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-6"
                                        >
                                            <div class="flex items-center">
                                                <img
                                                    class="w-9 h-9 rounded-full mr-2"
                                                    src="/images/faces/3.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700 dark:text-gray-300"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold"
                                                        >
                                                            Kane Frost
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-700 dark:text-gray-400"
                                                    >
                                                        2 mutual friend
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            class="flex justify-between items-center mb-6"
                                        >
                                            <div class="flex items-center">
                                                <img
                                                    class="w-9 h-9 rounded-full mr-2"
                                                    src="/images/faces/4.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700 dark:text-gray-300"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold"
                                                        >
                                                            Juggernaut Frost
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-700 dark:text-gray-400"
                                                    >
                                                        2 mutual friend
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-gray-400 dark:text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            class="flex justify-between items-center mb-6"
                                        >
                                            <div class="flex items-center">
                                                <img
                                                    class="w-9 h-9 rounded-full mr-2"
                                                    src="/images/faces/5.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700 dark:text-gray-300"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold"
                                                        >
                                                            Axe Frost
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-700 dark:text-gray-400"
                                                    >
                                                        2 mutual friend
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-gray-400 dark:text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                        <BaseBtn
                                            class="bg-primary text-white"
                                            block
                                            >View All Friends</BaseBtn
                                        >
                                    </BaseCard>
                                    <BaseCard class="mb-5">
                                        <template v-slot:cardHeader>
                                            <div class="card-header">
                                                <p class="font-bold text-base">
                                                    Photos
                                                </p>
                                            </div>
                                        </template>
                                        <div class="card-body">
                                            <div
                                                class="grid grid-cols-12 gap-5"
                                            >
                                                <div
                                                    class="col-span-12 md:col-span-6"
                                                >
                                                    <img
                                                        class="w-full rounded-lg"
                                                        src="/images/gallery/sq-10.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    class="col-span-12 md:col-span-6"
                                                >
                                                    <img
                                                        class="w-full rounded-lg"
                                                        src="/images/gallery/sq-11.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    class="col-span-12 md:col-span-6"
                                                >
                                                    <img
                                                        class="w-full rounded-lg"
                                                        src="/images/gallery/sq-13.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    class="col-span-12 md:col-span-6"
                                                >
                                                    <img
                                                        class="w-full rounded-lg"
                                                        src="/images/gallery/sq-12.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </BaseCard>
                                    <BaseCard class="mb-5">
                                        <template v-slot:cardHeader>
                                            <div class="card-header">
                                                <p class="font-bold text-base">
                                                    Travels
                                                </p>
                                            </div>
                                        </template>
                                        <div class="mb-6">
                                            <div class="flex items-center">
                                                <img
                                                    class="rounded-full mr-2"
                                                    src="/images/country/dubai.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold dark:text-gray-300"
                                                        >
                                                            Dubai
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-600 dark:text-gray-400"
                                                    >
                                                        2 days ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-6">
                                            <div class="flex items-center">
                                                <img
                                                    class="rounded-full mr-2"
                                                    src="/images/country/new_york.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold dark:text-gray-300"
                                                        >
                                                            New York, USA
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-600 dark:text-gray-400"
                                                    >
                                                        2 years ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-6">
                                            <div class="flex items-center">
                                                <img
                                                    class="rounded-full mr-2"
                                                    src="/images/country/china.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold dark:text-gray-300"
                                                        >
                                                            Shanghai, China
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-600 dark:text-gray-400"
                                                    >
                                                        11 months ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-6">
                                            <div class="flex items-center">
                                                <img
                                                    class="rounded-full mr-2"
                                                    src="/images/country/paris.jpg"
                                                />
                                                <div>
                                                    <a
                                                        class="hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        <p
                                                            class="text-sm font-semibold dark:text-gray-300"
                                                        >
                                                            paris, France
                                                        </p>
                                                    </a>
                                                    <p
                                                        class="text-gray-600 dark:text-gray-400"
                                                    >
                                                        11 months ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </BaseCard>
                                </div>
                                <div class="col-span-12 xl:col-span-9">
                                    <div class="grid grid-cols-12 gap-5">
                                        <div
                                            class="col-span-1 relative xl:col-span-1"
                                        >
                                            <div class="ul-widget-profile-img">
                                                <img
                                                    class="avatar rounded-full"
                                                    src="/images/faces/1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-span-12 xl:col-span-11">
                                            <BaseCard>
                                                <template v-slot:cardHeader>
                                                    <div class="card-header">
                                                        <div
                                                            class="flex justify-between items-center"
                                                        >
                                                            <div
                                                                class="flex items-center"
                                                            >
                                                                <img
                                                                    class="avatar rounded-full mr-2"
                                                                    src="/images/faces/1.jpg"
                                                                />
                                                                <div>
                                                                    <a href="#">
                                                                        <p
                                                                            class="text-sm font-semibold"
                                                                        >
                                                                            Tim
                                                                            Clarkson
                                                                        </p>
                                                                    </a>
                                                                    <p
                                                                        class="text-gray-700 dark:text-gray-400"
                                                                    >
                                                                        2 mutual
                                                                        friend
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <BaseBtn
                                                                rounded
                                                                icon
                                                                class="mr-2 hover:bg-gray-300 dark:text-bg-gray-600 dark:hover:bg-dark hover:text-white"
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
                                                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                                    />
                                                                </svg>
                                                            </BaseBtn>
                                                        </div>
                                                    </div>
                                                </template>
                                                <p class="mb-4">
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's standard dummy
                                                    text ever since the 1500s
                                                </p>
                                                <img
                                                    class="rounded mb-4"
                                                    src="/images/gallery/sq-16.jpg"
                                                    alt=""
                                                />
                                                <div
                                                    class="flex justify-between flex-wrap"
                                                >
                                                    <div class="flex">
                                                        <div
                                                            class="avatar-groups mb-3 ml-7"
                                                        >
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/2.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/3.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/4.jpg"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p
                                                                class="text-bold text-sm"
                                                            >
                                                                Dan,Jon
                                                            </p>
                                                            <p class="text-xs">
                                                                4 more...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 mr-4"
                                                            >32</span
                                                        >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 mr-2"
                                                            >32</span
                                                        >
                                                    </div>
                                                </div>
                                            </BaseCard>
                                        </div>
                                        <div
                                            class="col-span-1 relative xl:col-span-1"
                                        >
                                            <div class="ul-widget-profile-img">
                                                <img
                                                    class="avatar rounded-full"
                                                    src="/images/faces/1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-span-12 xl:col-span-11">
                                            <BaseCard>
                                                <template v-slot:cardHeader>
                                                    <div class="card-header">
                                                        <div
                                                            class="flex justify-between items-center"
                                                        >
                                                            <div
                                                                class="flex items-center"
                                                            >
                                                                <img
                                                                    class="avatar rounded-full mr-2"
                                                                    src="/images/faces/2.jpg"
                                                                />
                                                                <div>
                                                                    <a
                                                                        class=""
                                                                        href="#"
                                                                    >
                                                                        <p
                                                                            class="text-sm font-semibold"
                                                                        >
                                                                            Tim
                                                                            Clarkson
                                                                            Shared
                                                                            <a
                                                                                class="text-primary mr-1 hover:text-primary-700"
                                                                                href="#"
                                                                                >Jacob's</a
                                                                            >Post
                                                                        </p>
                                                                    </a>
                                                                    <p
                                                                        class="text-gray-700 dark:text-gray-400"
                                                                    >
                                                                        2 mutual
                                                                        friend
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <BaseBtn
                                                                rounded
                                                                icon
                                                                class="mr-2 hover:bg-gray-300 dark:text-bg-gray-600 dark:hover:bg-dark hover:text-white"
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
                                                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                                    />
                                                                </svg>
                                                            </BaseBtn>
                                                        </div>
                                                    </div>
                                                </template>
                                                <p
                                                    class="mb-4 dark:text-gray-300"
                                                >
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's standard dummy
                                                    text ever since the 1500s
                                                </p>
                                                <div
                                                    class="border border-gray-300 dark:border-gray-600 p-4 mb-4"
                                                >
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <img
                                                            class="avatar rounded-full mr-2"
                                                            src="/images/faces/2.jpg"
                                                        />
                                                        <div>
                                                            <a
                                                                class=""
                                                                href="#"
                                                            >
                                                                <p
                                                                    class="text-sm font-semibold"
                                                                >
                                                                    Tim Clarkson
                                                                </p>
                                                            </a>
                                                            <p
                                                                class="text-gray-700 dark:text-gray-400"
                                                            >
                                                                2 mutual friend
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p
                                                        class="text-gray-500 dark:text-gray-300 text-bold my-2"
                                                    >
                                                        Lorem Ipsum is simply
                                                        dummy text of the
                                                        printing and typesetting
                                                        industry. Lorem Ipsum
                                                        has been the industry's
                                                        standard dummy text ever
                                                        since the 1500s
                                                    </p>
                                                    <img
                                                        class="rounded mb-4"
                                                        src="/images/gallery/sq-4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    class="flex justify-between flex-wrap"
                                                >
                                                    <div class="flex">
                                                        <div
                                                            class="avatar-groups mb-3 ml-7"
                                                        >
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/2.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/3.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/4.jpg"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p
                                                                class="text-bold text-sm"
                                                            >
                                                                Dan,Jon
                                                            </p>
                                                            <p class="text-xs">
                                                                4 more...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 dark:text-gray-300 mr-4"
                                                            >32</span
                                                        >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 dark:text-gray-300 mr-2"
                                                            >32</span
                                                        >
                                                    </div>
                                                </div>
                                            </BaseCard>
                                        </div>
                                        <div
                                            class="col-span-1 relative xl:col-span-1"
                                        >
                                            <div class="ul-widget-profile-img">
                                                <img
                                                    class="avatar rounded-full"
                                                    src="/images/faces/3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-span-12 xl:col-span-11">
                                            <BaseCard>
                                                <template v-slot:cardHeader>
                                                    <div class="card-header">
                                                        <div
                                                            class="flex justify-between items-center"
                                                        >
                                                            <div
                                                                class="flex items-center"
                                                            >
                                                                <img
                                                                    class="avatar rounded-full mr-2"
                                                                    src="/images/faces/3.jpg"
                                                                />
                                                                <div>
                                                                    <a
                                                                        class=""
                                                                        href="#"
                                                                    >
                                                                        <p
                                                                            class="text-sm font-semibold"
                                                                        >
                                                                            Tim
                                                                            Clarkson
                                                                            Shared
                                                                        </p>
                                                                    </a>
                                                                    <p
                                                                        class="text-gray-700 dark:text-gray-400"
                                                                    >
                                                                        2 mutual
                                                                        friend
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <BaseBtn
                                                                rounded
                                                                icon
                                                                class="mr-2 hover:bg-gray-300 dark:text-bg-gray-600 dark:hover:bg-dark hover:text-white"
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
                                                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                                                    />
                                                                </svg>
                                                            </BaseBtn>
                                                        </div>
                                                    </div>
                                                </template>
                                                <p
                                                    class="mb-4 dark:text-gray-300"
                                                >
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's standard dummy
                                                    text ever since the 1500s
                                                </p>
                                                <img
                                                    class="rounded mb-4"
                                                    src="/images/gallery/sq-13.jpg"
                                                    alt=""
                                                />
                                                <div
                                                    class="flex justify-between flex-wrap"
                                                >
                                                    <div class="flex">
                                                        <div
                                                            class="avatar-groups mb-3 ml-7"
                                                        >
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/2.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/3.jpg"
                                                            />
                                                            <img
                                                                class="avatar rounded-full mr-2"
                                                                src="/images/faces/4.jpg"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p
                                                                class="text-bold text-sm"
                                                            >
                                                                Dan,Jon
                                                            </p>
                                                            <p class="text-xs">
                                                                4 more...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 dark:text-gray-300 mr-4"
                                                            >32</span
                                                        >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-4 w-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                            />
                                                        </svg>
                                                        <span
                                                            class="text-gray-500 dark:text-gray-300 mr-2"
                                                            >32</span
                                                        >
                                                    </div>
                                                </div>
                                            </BaseCard>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="container">
                                <div class="grid grid-cols-12">
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-13.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-4.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-5.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-6.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-7.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-8.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-9.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-10.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-11.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-12.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-13.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                                    >
                                        <img
                                            src="/images/gallery/sq-15.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ul-widget-profile-img:after {
    content: '';
    position: absolute;
    width: 1px;
    height: calc(100% - 36px);
    left: 18px;
    background-color: #d1d5db;
    @apply dark:bg-foreground;
}
@media (max-width: 991px) {
    .ul-widget-profile-img img {
        display: none;
    }
}
</style>
