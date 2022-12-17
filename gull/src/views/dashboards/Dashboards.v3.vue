<script setup>
import {
    widgetBarChartThree,
    widgetBarChartFour,
    widgetBarChartFive,
    widgetBarChartSix,
    basicColumnChart,
    dashboardOne,
    dashboardTwo,
} from '@/data/dashboard.v3.js'

import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <!-- Start:: content (Your custom content)-->
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard V3" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard>
                    <apexchart
                        type="bar"
                        height="100"
                        :options="widgetBarChartThree.chartOptions"
                        :series="widgetBarChartThree.series"
                    />
                    <div class="text-center mt-4">
                        <p class="text-xl">6,760</p>
                        <p class="text-xs text-gray-400">50% Average</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard>
                    <div class="text-center flex flex-col items-center">
                        <apexchart
                            type="bar"
                            height="100"
                            :options="widgetBarChartFour.chartOptions"
                            :series="widgetBarChartFour.series"
                        />
                        <div class="text-center mt-4">
                            <p class="text-xl">369 212</p>
                            <p class="text-xs text-gray-400">50% Average</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard>
                    <apexchart
                        type="bar"
                        height="100"
                        :options="widgetBarChartFive.chartOptions"
                        :series="widgetBarChartFive.series"
                    />
                    <div class="text-center mt-4">
                        <p class="text-xl">369 212</p>
                        <p class="text-xs text-gray-400">24% Average</p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard>
                    <apexchart
                        type="bar"
                        height="100"
                        :options="widgetBarChartSix.chartOptions"
                        :series="widgetBarChartSix.series"
                    />
                    <div class="text-center mt-4">
                        <p class="text-xl">369 212</p>
                        <p class="text-xs text-gray-400">24% Average</p>
                    </div>
                </BaseCard>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12 xl:col-span-6">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12">
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
                                        <i
                                            class="i-Data-Backup mr-3 text-4xl"
                                        ></i>
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
                    <div class="col-span-12 xl:col-span-6">
                        <BaseCard class="text-center">
                            <img
                                class="m-auto shadow-lg w-16 h-16 rounded-full"
                                src="/images/faces/16.jpg"
                                alt=""
                            />
                            <p class="text-base mt-4">Jassica Hike</p>
                            <p
                                class="text-base text-gray-400 dark:text-gray-300"
                            >
                                UI/UX Designer
                            </p>
                            <p
                                class="my-2 text-sm text-gray-500 dark:text-gray-400"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Recusandae cumque.
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
                        <BaseCard class="text-center">
                            <img
                                class="m-auto shadow-lg w-16 h-16 rounded-full"
                                src="/images/faces/17.jpg"
                                alt=""
                            />
                            <p class="text-base mt-4">Jassica Hike</p>
                            <p
                                class="text-base text-gray-400 dark:text-gray-300"
                            >
                                VR Developer
                            </p>
                            <p
                                class="my-2 text-sm text-gray-500 dark:text-gray-400"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Recusandae cumque.
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

                    <div class="col-span-12">
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
                                        adipisicing elit. Nesciunt placeat esse
                                        tempore debitis.
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
                    <div class="col-span-12">
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
                                        adipisicing elit. Nesciunt placeat esse
                                        tempore debitis.
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

                    <div class="col-span-12">
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
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <div class="flex">
                                            <img
                                                class="avatar rounded mr-2"
                                                src="/images/faces/1.jpg"
                                            />
                                            <div>
                                                <p class="">
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
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <div class="flex">
                                            <img
                                                class="avatar rounded mr-2"
                                                src="/images/faces/2.jpg"
                                            />
                                            <div>
                                                <p class="">
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
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <div class="flex">
                                            <img
                                                class="avatar rounded mr-2"
                                                src="/images/faces/3.jpg"
                                            />
                                            <div>
                                                <p class="">
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
                                            <p
                                                class="text-info text-lg font-semibold"
                                            >
                                                +700
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4">
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <div class="flex">
                                            <img
                                                class="avatar rounded mr-2"
                                                src="/images/faces/4.jpg"
                                            />
                                            <div>
                                                <p class="">
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
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <div class="flex">
                                            <img
                                                class="avatar rounded mr-2"
                                                src="/images/faces/5.jpg"
                                            />
                                            <div>
                                                <p class="">
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
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12">
                        <BaseCard>
                            <apexchart
                                type="bar"
                                height="350"
                                :options="basicColumnChart.chartOptions"
                                :series="basicColumnChart.series"
                            />
                        </BaseCard>
                    </div>
                    <div class="col-span-12">
                        <BaseCard>
                            <p class="text-gray-500 dark:text-gray-300 mb-2">
                                Last 7 days traffic status
                            </p>
                            <div class="flex items-center text-2xl">
                                <i class="i-Up text-primary mr-2"></i>
                                <p>15%</p>
                            </div>
                            <apexchart
                                type="bar"
                                height="190"
                                :options="dashboardOne.chartOptions"
                                :series="dashboardOne.series"
                            ></apexchart>
                        </BaseCard>
                    </div>
                    <div class="col-span-12">
                        <BaseCard>
                            <p class="text-gray-500 dark:text-gray-300 mb-2">
                                Server failures
                            </p>
                            <div class="flex items-center text-2xl">
                                <i class="i-Down text-danger mr-2"></i>
                                <p>35%</p>
                            </div>
                            <apexchart
                                type="bar"
                                height="190"
                                :options="dashboardTwo.chartOptions"
                                :series="dashboardTwo.series"
                            ></apexchart>
                        </BaseCard>
                    </div>
                    <div class="col-span-12">
                        <BaseCard>
                            <div class="card-title mb-5">Developers</div>
                            <div
                                class="flex justify-center items-center flex-col flex-wrap mb-5 md:justify-between md:flex-row"
                            >
                                <div
                                    class="flex items-center flex-col md:flex-row"
                                >
                                    <img
                                        class="w-16 h-16 rounded-full mr-2"
                                        src="/images/faces/1.jpg"
                                    />
                                    <div>
                                        <p class="mb-1">Logo Design</p>
                                        <p
                                            class="text-gray-500 dark:text-gray-400 text-xs mb-0"
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
                                <div
                                    class="flex items-center flex-col md:flex-row"
                                >
                                    <img
                                        class="w-16 h-16 rounded-full mr-2"
                                        src="/images/faces/3.jpg"
                                    />
                                    <div>
                                        <p class="mb-1">Logo Design</p>
                                        <p
                                            class="text-gray-500 dark:text-gray-400 text-xs mb-0"
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
                                <div
                                    class="flex items-center flex-col md:flex-row"
                                >
                                    <img
                                        class="w-16 h-16 rounded-full mr-2"
                                        src="/images/faces/2.jpg"
                                    />
                                    <div>
                                        <p class="mb-1">Logo Design</p>
                                        <p
                                            class="text-gray-500 dark:text-gray-400 text-xs mb-0"
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
                </div>
            </div>
        </div>
    </div>
    <!-- Start:: content (Your custom content)-->
</template>
