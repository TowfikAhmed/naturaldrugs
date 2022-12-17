/* * File: General.vue * Project: Gull * File Created: Thursday, 20th October
2022 1:50:34 pm * Author: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com) * ----- * Last Modified: Sunday, 23rd October 2022 1:14:24
pm * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib , ui-lib (
https://ui-lib.com/ ) */ /* * File: General.vue * Project: Gull * File Created:
Thursday, 20th October 2022 1:50:34 pm * Author: Naime Hossain & ui-lib ->
https://ui-lib.com/ (support@ui-lib.com) * ----- * Last Modified: Sunday, 23rd
October 2022 1:14:22 pm * Modified By: Naime Hossain & ui-lib ->
https://ui-lib.com/ (support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib
, ui-lib ( https://ui-lib.com/ ) */ /* * File: General.vue * Project: Gull *
File Created: Thursday, 20th October 2022 1:50:34 pm * Author: Naime Hossain &
ui-lib -> https://ui-lib.com/ (support@ui-lib.com) * ----- * Last Modified:
Sunday, 23rd October 2022 1:14:10 pm * Modified By: Naime Hossain & ui-lib ->
https://ui-lib.com/ (support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib
, ui-lib ( https://ui-lib.com/ ) */ /* * File: General.vue * Project: Gull *
File Created: Thursday, 20th October 2022 1:50:34 pm * Author: Naime Hossain &
ui-lib -> https://ui-lib.com/ (support@ui-lib.com) * ----- * Last Modified:
Sunday, 23rd October 2022 1:14:07 pm * Modified By: Naime Hossain & ui-lib ->
https://ui-lib.com/ (support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib
, ui-lib ( https://ui-lib.com/ ) */

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <Breadcrumbs parentTitle="Widgets" subParentTitle="Genral" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-4 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img
                        src="/images/products/iphone-1.jpg"
                        alt="First slide"
                    />
                    <div class="p-4">
                        <p class="card-title font-semibold mb-2">Gull Admin</p>
                        <p class="text-gray-400 text-sm mb-4">
                            By Frontend developer
                        </p>
                        <div class="flex justify-between">
                            <BaseBtn class="bg-primary text-white"
                                >Primary</BaseBtn
                            >
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                                >Outline</BaseBtn
                            >
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-4 md:col-span-6">
                <BaseCard class="overflow-hidden">
                    <img
                        class="rounded"
                        src="/images/products/headphone-1.jpg"
                        alt="First slide"
                    />
                    <div class="mt-5">
                        <p class="card-title font-semibold mb-2">Gull Admin</p>
                        <p class="text-gray-400 text-sm mb-4">
                            By Frontend developer
                        </p>
                        <div class="flex justify-between">
                            <div>
                                <p class="text-xl">$ 4785.78</p>
                                <p class="text-gray-400">Income</p>
                            </div>
                            <div>
                                <p class="text-xl">4/11/2019</p>
                                <p class="text-gray-400">Deadline</p>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-4 md:col-span-6">
                <BaseCard>
                    <img
                        class="rounded"
                        src="/images/products/watch-1.jpg"
                        alt="First slide"
                    />
                    <div class="mt-5">
                        <p class="card-title font-semibold mb-2">Gull Admin</p>
                        <p class="text-gray-400 text-sm mb-4">
                            By Frontend developer
                        </p>
                        <div class="my-3">
                            <div class="flex flex-wrap justify-between">
                                <h6>$675</h6>
                                <h6 class="text-gray-400">$1k</h6>
                            </div>
                            <div
                                class="shadow w-full bg-gray-200 rounded-full mt-3 mb-5"
                            >
                                <div
                                    class="bg-purple-600 rounded-full text-xs leading-none text-center text-white p-1"
                                    style="width: 45%"
                                ></div>
                            </div>
                            <div class="flex justify-between">
                                <BaseBtn class="bg-primary text-white"
                                    >Primary</BaseBtn
                                >
                                <BaseBtn
                                    class="border border-primary text-primary hover:bg-primary hover:text-white"
                                    >Outline</BaseBtn
                                >
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Add-User text-6xl text-purple-200 dark:text-gray-500"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">New Leads</p>
                            <p class="text-xl text-primary">205</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Financial text-6xl text-purple-200 dark:text-gray-500"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Sales</p>
                            <p class="text-xl text-primary">$4021</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Checkout-Basket text-6xl text-purple-200 dark:text-gray-500"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Orders</p>
                            <p class="text-xl text-primary">$80</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Money-2 text-6xl text-purple-200 dark:text-gray-500"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Expenses</p>
                            <p class="text-xl text-primary">$1200</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 md:col-span-6 col-span-12">
                <BaseCard>
                    <div class="text-center">
                        <i class="i-Data-Upload text-5xl text-purple-600"></i>
                        <p class="text-gray-700 my-2">Today's Upload</p>
                        <p class="text-2xl text-purple-600">21</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 md:col-span-6 col-span-12">
                <BaseCard>
                    <div class="text-center">
                        <i class="i-Money-2 text-5xl text-purple-600 mb-3"></i>
                        <p class="text-2xl text-purple-600">4021</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 md:col-span-6 col-span-12">
                <BaseCard>
                    <div class="text-center">
                        <i class="i-Bell text-5xl text-purple-600 mb-3"></i>
                        <p class="text-2xl text-purple-600">4021</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 md:col-span-6">
                <BaseCard>
                    <div class="mb-5">
                        <div class="card-title">Network Status</div>
                        <p class="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 sm:col-span-6">
                            <div
                                class="flex items-center bg-purple-400 text-white py-4 px-4 rounded-md"
                            >
                                <i class="i-Data-Backup mr-3 text-4xl"></i>
                                <div>
                                    <h4
                                        class="text-white mb-0 text-lg font-semibold"
                                    >
                                        Backups
                                    </h4>
                                    <span>Total: 32</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                            <div
                                class="flex items-center bg-purple-400 text-white py-4 px-4 rounded-md"
                            >
                                <i class="i-Big-Data mr-3 text-4xl"></i>
                                <div>
                                    <h4
                                        class="text-white mb-0 text-lg font-semibold"
                                    >
                                        Databases
                                    </h4>
                                    <span>Total: 32</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6">
                            <div
                                class="flex items-center border border-gray-400 dark:border-gray-300 text-white py-4 px-4 rounded-md"
                            >
                                <i
                                    class="i-Data-Cloud mr-3 text-4xl text-gray-500 dark:text-gray-300"
                                ></i>
                                <div>
                                    <h4
                                        class="text-gray-500 dark:text-gray-300 mb-0 text-lg font-semibold"
                                    >
                                        Space used
                                    </h4>
                                    <span
                                        class="text-gray-500 dark:text-gray-400"
                                        >Total: 160GB</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6">
                            <div
                                class="flex items-center border border-gray-400 dark:border-gray-300 py-4 px-4 rounded-md"
                            >
                                <i
                                    class="i-Data-Download mr-3 text-4xl text-gray-500 dark:text-gray-300"
                                ></i>
                                <div>
                                    <h4
                                        class="mb-0 text-lg font-semibold text-gray-500 dark:text-gray-300"
                                    >
                                        Downloaded
                                    </h4>
                                    <span
                                        class="text-gray-500 dark:text-gray-400"
                                        >Total: 30GB</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3">
                <BaseCard class="text-center">
                    <img
                        class="m-auto shadow-lg w-16 h-16 rounded-full"
                        src="/images/faces/16.jpg"
                        alt=""
                    />
                    <p class="text-base mt-4">Jassica Hike</p>
                    <p class="text-base text-gray-400 dark:text-gray-300">
                        UI/UX Designer
                    </p>
                    <p class="my-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>

                    <BaseBtn rounded class="bg-primary text-white"
                        >Contact</BaseBtn
                    >
                    <div class="mt-4">
                        <a class="mr-2 hover:text-primary" href=""
                            ><i class="i-Linkedin-2"></i
                        ></a>
                        <a class="mr-2 hover:text-primary" href=""
                            ><i class="i-Facebook-2"></i
                        ></a>
                        <a class="hover:text-primary" href=""
                            ><i class="i-Twitter"></i
                        ></a>
                    </div>
                </BaseCard>
            </div>

            <div class="col-span-12 xl:col-span-3">
                <BaseCard class="text-center">
                    <img
                        class="m-auto shadow-lg w-16 h-16 rounded-full"
                        src="/images/faces/17.jpg"
                        alt=""
                    />
                    <p class="text-base mt-4">Jassica Hike</p>
                    <p class="text-base text-gray-400 dark:text-gray-300">
                        VR Developer
                    </p>
                    <p class="my-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>

                    <BaseBtn rounded class="bg-primary text-white"
                        >Contact</BaseBtn
                    >
                    <div class="mt-4">
                        <a class="mr-2 hover:text-primary" href=""
                            ><i class="i-Linkedin-2"></i
                        ></a>
                        <a class="mr-2 hover:text-primary" href=""
                            ><i class="i-Facebook-2"></i
                        ></a>
                        <a class="hover:text-primary" href=""
                            ><i class="i-Twitter"></i
                        ></a>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div
                    class="overflow-hidden bg-white dark:bg-foreground ui-lib-br ui-lib-shadow"
                >
                    <div class="flex flex-col lg:flex-row">
                        <div>
                            <img
                                class="h-52 object-cover w-full lg:w-auto"
                                src="/images/photo-wide-1.jpg"
                                alt=""
                            />
                        </div>
                        <div class="flex-grow-1 p-4">
                            <h5 class="m-0 text-lg dark:text-gray-200">
                                Product featured
                            </h5>
                            <p
                                class="m-0 text-sm text-gray-500 dark:text-gray-300"
                            >
                                By ABC Cafe
                            </p>
                            <p
                                class="m-0 text-xs text-gray-500 dark:text-gray-300"
                            >
                                $40
                                <del>$55</del>
                            </p>
                            <p
                                class="text-gray-500 text-sm mt-3 mb-3 dark:text-gray-400"
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nesciunt placeat esse tempore
                                debitis.
                            </p>
                            <BaseBtn
                                icon
                                rounded
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                <i class="i-Add-Cart p-1"></i>
                            </BaseBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div
                    class="overflow-hidden bg-white dark:bg-foreground ui-lib-br ui-lib-shadow"
                >
                    <div class="flex flex-col lg:flex-row">
                        <div>
                            <img
                                class="h-52 object-cover w-full lg:w-auto"
                                src="/images/photo-wide-2.jpg"
                                alt=""
                            />
                        </div>
                        <div class="flex-grow-1 p-4">
                            <h5 class="m-0 text-lg dark:text-gray-400">
                                Product featured
                            </h5>
                            <p
                                class="m-0 text-sm text-gray-500 dark:text-gray-300"
                            >
                                By ABC Cafe
                            </p>
                            <p
                                class="m-0 text-xs text-gray-500 dark:text-gray-300"
                            >
                                $40
                                <del>$55</del>
                            </p>
                            <p
                                class="text-gray-500 text-sm mt-3 mb-3 dark:text-gray-400"
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nesciunt placeat esse tempore
                                debitis.
                            </p>
                            <BaseBtn
                                icon
                                rounded
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                <i class="i-Add-Cart p-1"></i>
                            </BaseBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <BaseCard>
                    <div class="flex justify-between items-center">
                        <div class="card-title">Authors Profit</div>
                        <select
                            class="px-3 py-2 rounded cursor-pointer focus:outline-none bg-primary text-white"
                            id="cars"
                            name="cars"
                        >
                            <option value="volvo">Latest</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div
                        class="divide-y divide-gray-300 dark:divide-black divide-dashed my-5"
                    >
                        <div class="py-4">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <img
                                        class="avatar rounded mr-2"
                                        src="/images/faces/1.jpg"
                                    />
                                    <div>
                                        <p class="text-sm">
                                            <a
                                                class="hover:text-primary"
                                                href=""
                                                >Anna Strong</a
                                            >
                                        </p>
                                        <p
                                            class="text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            Visual Designer,Google Inc
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="text-primary text-lg font-semibold"
                                    >
                                        +500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <img
                                        class="avatar rounded mr-2"
                                        src="/images/faces/2.jpg"
                                    />
                                    <div>
                                        <p class="text-sm">
                                            <a
                                                class="hover:text-primary"
                                                href=""
                                                >Will Smith</a
                                            >
                                        </p>
                                        <p
                                            class="text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            Developer
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="text-danger text-lg font-semibold"
                                    >
                                        +900
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <img
                                        class="avatar rounded mr-2"
                                        src="/images/faces/3.jpg"
                                    />
                                    <div>
                                        <p class="text-sm">
                                            <a
                                                class="hover:text-primary"
                                                href=""
                                                >Anna Strong</a
                                            >
                                        </p>
                                        <p
                                            class="text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            Developer
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-info text-lg font-semibold">
                                        +700
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <img
                                        class="avatar rounded mr-2"
                                        src="/images/faces/4.jpg"
                                    />
                                    <div>
                                        <p class="text-sm">
                                            <a
                                                class="hover:text-primary"
                                                href=""
                                                >Megan Fox</a
                                            >
                                        </p>
                                        <p
                                            class="text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            UI/UX
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="text-warning text-lg font-semibold"
                                    >
                                        +100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <img
                                        class="avatar rounded mr-2"
                                        src="/images/faces/5.jpg"
                                    />
                                    <div>
                                        <p class="text-sm">
                                            <a
                                                class="hover:text-primary"
                                                href=""
                                                >Jhon Wick</a
                                            >
                                        </p>
                                        <p
                                            class="text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            Developer
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="text-primary text-lg font-semibold"
                                    >
                                        +900
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <BaseCard>
                    <div class="card-title mb-5">Developers</div>
                    <div
                        class="flex justify-center items-center flex-col flex-wrap mb-5 md:justify-between md:flex-row"
                    >
                        <div class="flex items-center flex-col md:flex-row">
                            <img
                                class="w-16 h-16 rounded-full mr-2"
                                src="/images/faces/1.jpg"
                            />
                            <div>
                                <p class="text-sm mb-1">Logo Design</p>
                                <p
                                    class="text-gray-500 dark:text-gray-400 text-sm mb-0"
                                >
                                    UI LIb admin.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center flex-1">
                            <div
                                class="flex-grow ml-0 mr-3 my-4 md:my-2 md:mx-10"
                            >
                                <p>London</p>
                                <div class="shadow bg-gray-200 w-full">
                                    <div
                                        class="bg-primary text-xs py-1 text-center text-white"
                                        style="width: 45%"
                                    ></div>
                                </div>
                            </div>

                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                Follow
                            </BaseBtn>
                        </div>
                    </div>
                    <div
                        class="flex justify-center items-center flex-col flex-wrap mb-5 md:justify-between md:flex-row"
                    >
                        <div class="flex items-center flex-col md:flex-row">
                            <img
                                class="w-16 h-16 rounded-full mr-2"
                                src="/images/faces/3.jpg"
                            />
                            <div>
                                <p class="text-sm mb-1">Logo Design</p>
                                <p
                                    class="text-gray-500 dark:text-gray-400 text-sm mb-0"
                                >
                                    UI LIb admin.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center flex-1">
                            <div
                                class="flex-grow ml-0 mr-3 my-4 md:my-2 md:mx-10"
                            >
                                <p>Germany</p>
                                <div class="shadow bg-gray-200 w-full">
                                    <div
                                        class="bg-danger text-xs py-1 text-center text-white"
                                        style="width: 45%"
                                    ></div>
                                </div>
                            </div>
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                Follow
                            </BaseBtn>
                        </div>
                    </div>
                    <div
                        class="flex justify-center items-center flex-col flex-wrap mb-5 md:justify-between md:flex-row"
                    >
                        <div class="flex items-center flex-col md:flex-row">
                            <img
                                class="w-16 h-16 rounded-full mr-2"
                                src="/images/faces/2.jpg"
                            />
                            <div>
                                <p class="text-sm mb-1">Logo Design</p>
                                <p
                                    class="text-gray-500 dark:text-gray-400 text-sm mb-0"
                                >
                                    UI LIb admin.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center flex-1">
                            <div
                                class="flex-grow ml-0 mr-3 my-4 md:my-2 md:mx-10"
                            >
                                <p>Finland</p>
                                <div class="shadow bg-gray-200 w-full">
                                    <div
                                        class="bg-info text-xs py-1 text-center text-white"
                                        style="width: 45%"
                                    ></div>
                                </div>
                            </div>
                            <BaseBtn
                                class="border border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                Follow
                            </BaseBtn>
                        </div>
                    </div>
                </BaseCard>
            </div>
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
            <div class="col-span-12 lg:col-span-4 md:col-span-4">
                <BaseCard class="text-center">
                    <div
                        class="rounded-full flex items-center justify-center bg-purple-100 text-primary font-bold h-10 w-10 mb-4 mx-auto"
                    >
                        <i class="i-Business-ManWoman"></i>
                    </div>
                    <p class="text-2xl font-black">30.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Total Followers
                    </p>

                    <BaseBtn
                        class="rounded-full text-primary bg-purple-100 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img class="w-full" src="/images/gallery/sq-10.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img class="w-full" src="/images/gallery/sq-4.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/photo-wide-3.jpg" />

                    <div class="p-5">
                        <div class="card-title mb-3">Latest Updates</div>
                        <p class="text-xs text-gray-700 dark:text-gray-400">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <div class="divide-y divide-gray-200 dark:divide-black">
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Cras justo odio
                                </p>
                            </div>
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Dapibus ac facilisis in
                                </p>
                            </div>
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Vestibulum at eros
                                </p>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
