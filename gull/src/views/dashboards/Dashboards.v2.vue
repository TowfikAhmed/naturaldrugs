/* * File: Dashboards.v2.vue * Project: Gull * File Created: Wednesday, 3rd
November 2021 8:57:46 am * Author: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com) * ----- * Last Modified: Wednesday, 19th October 2022
6:03:33 pm * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib , ui-lib (
https://ui-lib.com/ ) */

<script setup>
import { dashboardOne, dashboardTwo } from '@/data/dashboard.v2.js'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard V2" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12 lg:col-span-6 md:col-span-12">
                <div class="grid grid-cols-12 gap-5">
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Data-Upload text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 dark:text-gray-300 my-2 mt-3"
                            >
                                Today's Upload
                            </p>
                            <p class="text-3xl text-primary">21</p>
                        </BaseCard>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Add-User text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 my-2 mt-3 dark:text-gray-300"
                            >
                                New Users
                            </p>
                            <p class="text-3xl text-primary">21</p>
                        </BaseCard>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Money-2 text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 dark:text-gray-300 my-2 mt-3"
                            >
                                Total Sales
                            </p>
                            <p class="text-3xl text-primary">4021</p>
                        </BaseCard>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Money-2 text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 dark:text-gray-300 my-2 mt-3"
                            >
                                Profit
                            </p>
                            <p class="text-3xl text-primary">4021</p>
                        </BaseCard>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Gear text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 dark:text-gray-300 my-2 mt-3"
                            >
                                Privacy
                            </p>
                            <p class="text-3xl text-primary">4021</p>
                        </BaseCard>
                    </div>
                    <div
                        class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4"
                    >
                        <BaseCard class="text-center">
                            <i
                                class="i-Bell text-3xl text-purple-500 dark:bg-dark dark:text-primary p-3 rounded-full bg-purple-5000"
                            ></i>
                            <p
                                class="text-gray-700 dark:text-gray-300 my-2 mt-3"
                            >
                                Updates
                            </p>
                            <p class="text-3xl text-primary">4021</p>
                        </BaseCard>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 md:col-span-12">
                <BaseCard>
                    <h4 class="card-title">Last Month Profit</h4>
                    <apexchart
                        type="line"
                        height="250"
                        :options="dashboardOne.chartOptions"
                        :series="dashboardOne.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 md:col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title">Last Month Summary</div>
                        </div>
                    </template>
                    <div class="flex justify-between flex-wrap">
                        <div class="flex-grow">
                            <div
                                class="divide-y divide-gray-200 dark:divide-dark divide-solid"
                            >
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            Item
                                        </p>
                                        <p
                                            class="font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            Status
                                        </p>
                                    </div>
                                </div>
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="text-gray-600 dark:text-gray-400 font-normal"
                                        >
                                            Portable Speaker
                                        </p>
                                        <p class="text-primary font-semibold">
                                            +$1200
                                        </p>
                                    </div>
                                </div>
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="text-gray-600 dark:text-gray-400 font-normal"
                                        >
                                            Portable Headphone
                                        </p>
                                        <p class="text-primary">In Stock</p>
                                    </div>
                                </div>
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="text-gray-600 dark:text-gray-400 font-normal"
                                        >
                                            Portable Headphone
                                        </p>
                                        <p class="text-danger">Out Of Stock</p>
                                    </div>
                                </div>
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="text-gray-600 dark:text-gray-400 font-normal"
                                        >
                                            Watch
                                        </p>
                                        <p class="text-warning">Low Stock</p>
                                    </div>
                                </div>
                                <div class="py-3">
                                    <div class="flex justify-between">
                                        <p
                                            class="text-gray-600 dark:text-gray-400 font-normal"
                                        >
                                            Portable Headphone
                                        </p>
                                        <p class="font-semibold text-green-500">
                                            In Stock
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grow text-center">
                            <div id="chart">
                                <apexchart
                                    height="250"
                                    type="donut"
                                    :options="dashboardTwo.chartOptions"
                                    :series="dashboardTwo.series"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-6 md:col-span-12">
                <BaseCard>
                    <div class="card-title mb-4">Top Authors</div>

                    <div
                        class="flex flex-col text-center items-center mb-8 md:flex-row md:text-left"
                    >
                        <div
                            class="flex items-center flex-grow flex-col md:flex-row"
                        >
                            <img
                                class="w-16 h-16 rounded-lg mr-3 mb-2 md:mb-0"
                                src="/images/faces/2.jpg"
                            />
                            <div>
                                <p class="text-base">David Hopkins</p>
                                <p class="text-sm text-gray-400 my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div>
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                                rounded
                                >Follow</BaseBtn
                            >
                        </div>
                    </div>
                    <div
                        class="flex flex-col text-center items-center mb-8 md:flex-row md:text-left"
                    >
                        <div
                            class="flex items-center flex-grow flex-col md:flex-row"
                        >
                            <img
                                class="w-16 h-16 rounded-lg mr-3 mb-2 md:mb-0"
                                src="/images/faces/3.jpg"
                            />
                            <div>
                                <p class="text-base">James Mitchell</p>
                                <p class="text-sm text-gray-400 my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div>
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                                rounded
                                >Follow</BaseBtn
                            >
                        </div>
                    </div>
                    <div
                        class="flex flex-col text-center items-center mb-4 md:flex-row md:text-left"
                    >
                        <div
                            class="flex items-center flex-grow flex-col md:flex-row"
                        >
                            <img
                                class="w-16 h-16 rounded-lg mr-3 mb-2 md:mb-0"
                                src="/images/faces/5.jpg"
                            />
                            <div>
                                <p class="text-base">James Mitchell</p>
                                <p class="text-sm text-gray-400 my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div>
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                                rounded
                                >Follow</BaseBtn
                            >
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 card lg:col-span-4 md:col-span-6">
                <BaseCard>
                    <div class="card-title mb-8">Browser Status</div>
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex items-center">
                            <i class="i-Chrome text-red-500 mr-2"></i>
                            <p>Google Chrome</p>
                        </div>
                        <span
                            class="px-2 py-1 text-xs rounded-full text-white bg-primary mr-3"
                            >98%</span
                        >
                    </div>
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex items-center">
                            <i class="i-Firefox text-warning mr-2"></i>
                            <p>Firefox</p>
                        </div>
                        <span
                            class="px-2 py-1 text-xs rounded-full text-white bg-warning mr-3"
                            >88%</span
                        >
                    </div>
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex items-center">
                            <i
                                class="i-Internet-Explorer text-indigo-500 mr-2"
                            ></i>
                            <p>Internet Explorer</p>
                        </div>
                        <span
                            class="px-2 py-1 text-xs rounded-full text-white bg-indigo-500 mr-3"
                            >89%</span
                        >
                    </div>
                    <div class="flex items-center justify-between mb-5">
                        <div class="flex items-center">
                            <i class="i-Android text-success mr-2"></i>
                            <p>Android</p>
                        </div>
                        <span
                            class="px-2 py-1 text-xs rounded-full sm text-white bg-success mr-3"
                            >92%</span
                        >
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-4 md:col-span-6">
                <BaseCard>
                    <div class="card-title">Poll</div>
                    <p class="text-xs text-gray-400 mb-5">
                        Your mobile app daily usage
                    </p>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="mr-2">Trello</span
                                ><span class="text-xs text-gray-500"
                                    >20 Minutes</span
                                >
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >33%</span
                                >
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-red-500 text-xs pt-1 text-center text-white rounded-full"
                                style="width: 33%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="mr-2">Slack</span
                                ><span class="text-xs text-gray-500"
                                    >20 Minutes</span
                                >
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >63%</span
                                >
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-primary text-xs pt-1 text-center text-white rounded-full"
                                style="width: 63%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="mr-2">Skype</span
                                ><span class="text-xs text-gray-500"
                                    >2 Hour</span
                                >
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >33%</span
                                >
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-warning text-xs pt-1 text-center text-white rounded-full"
                                style="width: 33%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="mr-2">Twitter</span
                                ><span class="text-xs text-gray-500"
                                    >2 Hour</span
                                >
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >03%</span
                                >
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-info text-xs pt-1 text-center text-white rounded-full"
                                style="width: 03%"
                            ></div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-4 md:col-span-6">
                <BaseCard>
                    <div class="card-title mb-4">Latest Log</div>
                    <div class="relative">
                        <div
                            class="border-r-2 border-gray-200 absolute h-full top-0"
                            style="left: 3px; top: 8px"
                        ></div>
                        <ul class="list-none m-0 p-0">
                            <li class="mb-5">
                                <div
                                    class="flex items-center mb-1 justify-between"
                                >
                                    <div
                                        class="bg-primary rounded-full h-2 w-2 relative z-10 mr-2"
                                    ></div>
                                    <div class="flex-grow">
                                        <p class="text-sm">
                                            12 new users registered
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-400">
                                            Just Now
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-5">
                                <div
                                    class="flex items-center mb-1 justify-between"
                                >
                                    <div
                                        class="bg-primary rounded-full h-2 w-2 relative z-10 mr-2"
                                    ></div>
                                    <div class="flex-grow">
                                        <p class="text-sm">System Shutdown</p>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-400">
                                            2hr ago
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-5">
                                <div
                                    class="flex items-center mb-1 justify-between"
                                >
                                    <div
                                        class="bg-danger rounded-full h-2 w-2 relative z-10 mr-2"
                                    ></div>
                                    <div class="flex-grow">
                                        <p class="text-sm">System Error</p>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-400">
                                            recently
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-5">
                                <div
                                    class="flex items-center mb-1 justify-between"
                                >
                                    <div
                                        class="bg-warning rounded-full h-2 w-2 relative z-10 mr-2"
                                    ></div>
                                    <div class="flex-grow">
                                        <p class="text-sm">
                                            12 new user registered
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-400">
                                            Just Now
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-5">
                                <div
                                    class="flex items-center mb-1 justify-between"
                                >
                                    <div
                                        class="bg-info rounded-full h-2 w-2 relative z-10 mr-2"
                                    ></div>
                                    <div class="flex-grow">
                                        <p class="text-sm">
                                            12 new user registered
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-400">
                                            4yr ago
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-4 md:col-span-6">
                <BaseCard>
                    <div class="card-title mb-4">Notification</div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex mr-2 items-center">
                            <div
                                class="rounded-full flex items-center justify-center bg-indigo-100 text-info font-bold h-10 w-10 mr-2"
                            >
                                A
                            </div>
                            <p
                                class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                            >
                                Tasks
                            </p>
                        </div>
                        <p class="text-sm text-gray-400">in a sec</p>
                    </div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex mr-2 items-center">
                            <div
                                class="rounded-full flex items-center justify-center bg-yellow-100 text-warning font-bold h-10 w-10 mr-2"
                            >
                                B
                            </div>
                            <p
                                class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                            >
                                Traffic
                            </p>
                        </div>
                        <p class="text-sm text-gray-400">4hr ago</p>
                    </div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex mr-2 items-center">
                            <div
                                class="rounded-full flex items-center justify-center bg-red-100 text-danger font-bold h-10 w-10 mr-2"
                            >
                                O
                            </div>
                            <p
                                class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                            >
                                Order
                            </p>
                        </div>
                        <p class="text-sm text-gray-400">yesterday</p>
                    </div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex mr-2 items-center">
                            <div
                                class="rounded-full flex items-center justify-center bg-purple-100 text-primary font-bold h-10 w-10 mr-2"
                            >
                                U
                            </div>
                            <p
                                class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                            >
                                User
                            </p>
                        </div>
                        <p class="text-sm text-gray-400">2 April</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-4 md:col-span-6">
                <BaseCard>
                    <div class="card-title mb-4">
                        Travel Different Countries
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-500 dark:text-gray-300">
                                From UK
                            </p>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >75%</span
                                ><span
                                    ><i
                                        class="i-Turn-Up-2 text-primary font-semibold"
                                    ></i
                                ></span>
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-primary text-xs pt-1 text-center text-white rounded-full"
                                style="width: 75%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-500 dark:text-gray-300">
                                From U.S.A
                            </p>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >33%</span
                                ><span
                                    ><i
                                        class="i-Turn-Down-2 text-danger font-semibold"
                                    ></i
                                ></span>
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-primary text-xs pt-1 text-center text-white rounded-full"
                                style="width: 33%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-500 dark:text-gray-300">
                                From Canada
                            </p>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >50%</span
                                ><span
                                    ><i
                                        class="i-Turn-Up-2 text-primary font-semibold"
                                    ></i
                                ></span>
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-info text-xs pt-1 text-center text-white rounded-full"
                                style="width: 50%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-500 dark:text-gray-300">
                                From France
                            </p>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >13%</span
                                ><span
                                    ><i
                                        class="i-Turn-Down-2 text-danger font-semibold"
                                    ></i
                                ></span>
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-danger text-xs pt-1 text-center text-white rounded-full"
                                style="width: 13%"
                            ></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-500 dark:text-gray-300">
                                From Japan
                            </p>
                            <div>
                                <span class="text-xs text-gray-500 mr-1"
                                    >25%</span
                                ><span
                                    ><i
                                        class="i-Turn-Down-2 text-danger font-semibold"
                                    ></i
                                ></span>
                            </div>
                        </div>
                        <div
                            class="shadow w-full bg-gray-200 mb-2 rounded-full"
                        >
                            <div
                                class="bg-warning text-xs pt-1 text-center text-white rounded-full"
                                style="width: 25%"
                            ></div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
